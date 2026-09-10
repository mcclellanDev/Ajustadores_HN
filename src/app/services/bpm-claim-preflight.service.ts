import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';
import { InterAutoRegistrationCertificateService } from './inter-auto-registration-certificate.service';
import { InterAutoVehicleCacheService } from './inter-auto-vehicle-cache.service';
import { ModalBpmPreflightPage } from '../Modales/modal-bpm-preflight/modal-bpm-preflight.page';
import {
  BpmClaimValidationResponse,
  BpmPreflightMismatch,
  BpmPreflightModalResult
} from '../interfaces/bpm-claim-validation';
import {
  buildBpmPreflightState,
  collectBpmPreflightMismatches,
  detectCrossedChassisAndMotor,
  enrichBpmPreflightMismatches,
  loadBpmPreflightState,
  persistBpmPreflightState,
  persistRecoveredVehicleIdentifiers
} from '../utils/bpm-claim-preflight.util';
import { parseAttentionId } from '../utils/attention-id.util';
import { normalizeChassis } from '../utils/claim-payload-normalizer';

@Injectable({
  providedIn: 'root'
})
export class BpmClaimPreflightService {
  private inFlight = new Set<number>();
  private openModal: HTMLIonModalElement | null = null;

  constructor(
    private api: ApiService,
    private modalCtrl: ModalController,
    private toaster: ToastService,
    private interAutoVehicleCache: InterAutoVehicleCacheService,
    private registrationCertificate: InterAutoRegistrationCertificateService
  ) {}

  async validateAndPrompt(
    idAtencion: number | string,
    expedienteOrChasis?: { Chasis?: unknown; Motor?: unknown } | string
  ): Promise<void> {
    const attentionId = parseAttentionId(idAtencion);
    if (!attentionId) {
      return;
    }

    const stored = loadBpmPreflightState(attentionId);

    if (this.inFlight.has(attentionId)) {
      return;
    }

    const expediente = typeof expedienteOrChasis === 'string' || expedienteOrChasis == null
      ? { Chasis: expedienteOrChasis, Motor: undefined }
      : expedienteOrChasis;
    const crossed = detectCrossedChassisAndMotor(
      expediente?.Chasis,
      expediente?.Motor ?? (expediente as any)?.NoMotor ?? (expediente as any)?.NumeroMotor
    );
    const chassis = crossed.expedienteChasis
      || normalizeChassis(localStorage.getItem('dataProcess-ChasisVehiculo'))
      || '';

    this.inFlight.add(attentionId);
    try {
      const response = await firstValueFrom(
        this.api.ValidarDatosReclamoBpm({
          IdAtencion: attentionId,
          Chasis: chassis
        })
      );

      const needsRecovery = this.needsChassisRecovery(response);
      if (stored?.decided && !(needsRecovery && !stored.corrections?.Chasis)) {
        this.refreshAutomaticWebServiceFields(attentionId, response, stored);
        return;
      }

      this.persistBaseline(attentionId, response);

      if (needsRecovery) {
        await this.presentRecoveryModal(attentionId, response, crossed, chassis);
        return;
      }

      const mismatches = enrichBpmPreflightMismatches(response, collectBpmPreflightMismatches(response));
      if (!mismatches.length) {
        persistBpmPreflightState(buildBpmPreflightState(attentionId, response, [], true));
        return;
      }

      await this.presentMismatchModal(attentionId, response, mismatches);
    } catch (error: any) {
      const apiMessage = (error?.error?.Mensaje || error?.error?.Message || '').toString().trim();
      this.toaster.presentToastAlert(
        apiMessage || 'No se pudo validar la atención contra Interamericana. Puede continuar el proceso.',
        'top',
        'warning',
        6000
      );
    } finally {
      this.inFlight.delete(attentionId);
    }
  }

  private needsChassisRecovery(response: BpmClaimValidationResponse | null | undefined): boolean {
    if (!response) {
      return false;
    }

    if (response.AfiliadoEncontrado === false) {
      return true;
    }

    const campos = Array.isArray(response.Campos) ? response.Campos : [];
    return String(response.CodError) === '-1' && campos.length === 0;
  }

  private persistBaseline(attentionId: number, response: BpmClaimValidationResponse): void {
    persistBpmPreflightState(buildBpmPreflightState(attentionId, response, [], false));
  }

  private refreshAutomaticWebServiceFields(
    attentionId: number,
    response: BpmClaimValidationResponse,
    stored: ReturnType<typeof loadBpmPreflightState>
  ): void {
    if (!stored) {
      return;
    }

    const automatic = buildBpmPreflightState(attentionId, response, [], stored.decided);
    persistBpmPreflightState({
      ...stored,
      corrections: {
        ...stored.corrections,
        Sucursal: automatic.corrections.Sucursal || stored.corrections.Sucursal
      },
      applyMoneda: automatic.applyMoneda || stored.applyMoneda,
      moneda: automatic.moneda || stored.moneda,
      reservaRule: automatic.reservaRule || stored.reservaRule,
      suggested: {
        ...stored.suggested,
        ...automatic.suggested
      }
    });
  }

  private async presentMismatchModal(
    attentionId: number,
    response: BpmClaimValidationResponse,
    mismatches: BpmPreflightMismatch[]
  ): Promise<void> {
    await this.presentModal(attentionId, {
      mode: 'mismatches',
      mismatches
    }, response);
  }

  private async presentRecoveryModal(
    attentionId: number,
    response: BpmClaimValidationResponse,
    crossed: ReturnType<typeof detectCrossedChassisAndMotor>,
    consultedChassis: string
  ): Promise<void> {
    await this.presentModal(attentionId, {
      mode: 'recovery',
      mismatches: [],
      recoveryContext: {
        idAtencion: attentionId,
        consultedChassis: consultedChassis || displayOrEmpty(response?.ChasisConsultado),
        expedienteChasis: crossed.expedienteChasis,
        expedienteMotor: crossed.expedienteMotor,
        likelySwapped: crossed.likelySwapped,
        message: (response?.Mensaje || 'Error: asegurado no encontrado').toString()
      }
    }, response);
  }

  private async presentModal(
    attentionId: number,
    componentProps: Record<string, unknown>,
    fallbackResponse: BpmClaimValidationResponse
  ): Promise<void> {
    if (this.openModal) {
      await this.openModal.dismiss(null, 'later').catch(() => undefined);
      this.openModal = null;
    }

    this.openModal = await this.modalCtrl.create({
      component: ModalBpmPreflightPage,
      componentProps,
      cssClass: 'bpm-preflight-modal',
      backdropDismiss: false
    });

    await this.openModal.present();
    const { data, role } = await this.openModal.onDidDismiss<BpmPreflightModalResult | BpmPreflightMismatch[]>();
    this.openModal = null;

    if (role !== 'confirm' || !data) {
      this.persistBaseline(attentionId, fallbackResponse);
      return;
    }

    await this.persistModalResult(attentionId, data, fallbackResponse);
  }

  private async persistModalResult(
    attentionId: number,
    data: BpmPreflightModalResult | BpmPreflightMismatch[],
    fallbackResponse: BpmClaimValidationResponse
  ): Promise<void> {
    if (Array.isArray(data)) {
      persistBpmPreflightState(buildBpmPreflightState(attentionId, fallbackResponse, data, true));
      await this.applyAcceptedChassisToVehicle(attentionId, data);
      return;
    }

    if (data.kind === 'mismatches') {
      persistBpmPreflightState(buildBpmPreflightState(attentionId, fallbackResponse, data.mismatches, true));
      await this.applyAcceptedChassisToVehicle(attentionId, data.mismatches);
      return;
    }

    const response = data.response || fallbackResponse;
    persistBpmPreflightState(buildBpmPreflightState(attentionId, response, data.mismatches || [], true));
    if (data.chasis) {
      const source = data.source || (data.swapped ? 'swap' : 'manual');
      persistRecoveredVehicleIdentifiers(attentionId, data.chasis, data.motor, { source });
      await this.persistRecoveredInterAutoDraft(attentionId, data.chasis, data.motor, source);
    }
  }

  private async applyAcceptedChassisToVehicle(
    attentionId: number,
    mismatches: BpmPreflightMismatch[]
  ): Promise<void> {
    const acceptedChasis = mismatches.find((item) => item.campo === 'Chasis' && item.correct === true);
    const chassis = normalizeChassis(acceptedChasis?.valorWebService);
    if (!chassis) {
      return;
    }

    persistRecoveredVehicleIdentifiers(attentionId, chassis);
    await this.interAutoVehicleCache.saveDraft(attentionId, { chasis: chassis });
  }

  private async persistRecoveredInterAutoDraft(
    attentionId: number,
    chasis: string,
    motor: string,
    source: 'swap' | 'manual'
  ): Promise<void> {
    if (source === 'manual') {
      await this.registrationCertificate.markManualEntry(attentionId, true);
    }

    await this.interAutoVehicleCache.saveDraft(attentionId, { chasis, motor });
  }
}

function displayOrEmpty(value: unknown): string {
  return (value ?? '').toString().trim();
}
