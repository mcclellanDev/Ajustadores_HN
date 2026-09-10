import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import {
  BpmChassisRecoveryContext,
  BpmClaimValidationResponse,
  BpmPreflightChassisSource,
  BpmPreflightMismatch,
  BpmPreflightModalResult
} from '../../interfaces/bpm-claim-validation';
import { ApiService } from '../../services/api.service';
import { collectBpmPreflightMismatches, enrichBpmPreflightMismatches } from '../../utils/bpm-claim-preflight.util';
import { normalizeChassis } from '../../utils/claim-payload-normalizer';

@Component({
  selector: 'app-modal-bpm-preflight',
  templateUrl: './modal-bpm-preflight.page.html',
  styleUrls: ['./modal-bpm-preflight.page.scss']
})
export class ModalBpmPreflightPage implements OnInit {
  @Input() mismatches: BpmPreflightMismatch[] = [];
  @Input() mode: 'mismatches' | 'recovery' = 'mismatches';
  @Input() recoveryContext: BpmChassisRecoveryContext | null = null;

  source: BpmPreflightChassisSource = null;
  manualChasis = '';
  verifiedAgainstSheet = false;
  isRetrying = false;
  retryFailed = false;
  retryMessage = '';
  private pendingRecovery: {
    chasis: string;
    motor: string;
    swapped: boolean;
    source: Exclude<BpmPreflightChassisSource, null>;
    response: BpmClaimValidationResponse | null;
  } | null = null;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.mode = this.navParams.get('mode') || this.mode;
    this.mismatches = this.navParams.get('mismatches') || this.mismatches || [];
    this.recoveryContext = this.navParams.get('recoveryContext')
      || this.navParams.get('recovery')
      || this.recoveryContext;
  }

  get recovery(): BpmChassisRecoveryContext {
    return this.recoveryContext || {
      idAtencion: 0,
      consultedChassis: '',
      expedienteChasis: '',
      expedienteMotor: '',
      likelySwapped: false,
      message: 'No se encontró el asegurado en Interamericana.'
    };
  }

  get allAnswered(): boolean {
    return (this.mismatches || [])
      .filter((item) => !item.autoApply)
      .every((item) => item.correct === true || item.correct === false);
  }

  get chassisToQuery(): string {
    if (this.source === 'swap') {
      return normalizeChassis(this.recovery.expedienteMotor);
    }

    if (this.source === 'manual') {
      return normalizeChassis(this.manualChasis);
    }

    return '';
  }

  get canResend(): boolean {
    return !!this.chassisToQuery && this.verifiedAgainstSheet && !this.isRetrying;
  }

  choose(item: BpmPreflightMismatch, correct: boolean): void {
    item.correct = correct;
    this.mismatches = [...this.mismatches];
  }

  selectSource(source: Exclude<BpmPreflightChassisSource, null>): void {
    this.source = source;
    this.retryFailed = false;
    this.retryMessage = '';
    if (source === 'swap') {
      this.manualChasis = '';
    }
  }

  onSourceChange(source: BpmPreflightChassisSource): void {
    if (source === 'swap' || source === 'manual') {
      this.selectSource(source);
    }
  }

  chooseFromEvent(item: BpmPreflightMismatch, value: string): void {
    if (value !== 'yes' && value !== 'no') {
      return;
    }

    this.choose(item, value === 'yes');
  }

  continue(): void {
    if (this.mode === 'recovery') {
      this.continueWithoutInteramericana();
      return;
    }

    if (!this.allAnswered) {
      return;
    }

    if (this.pendingRecovery) {
      const result: BpmPreflightModalResult = {
        kind: 'recovery',
        chasis: this.pendingRecovery.chasis,
        motor: this.pendingRecovery.motor,
        swapped: this.pendingRecovery.swapped,
        source: this.pendingRecovery.source,
        mismatches: this.mismatches,
        response: this.pendingRecovery.response
      };
      void this.modalCtrl.dismiss(result, 'confirm');
      return;
    }

    const result: BpmPreflightModalResult = { kind: 'mismatches', mismatches: this.mismatches };
    void this.modalCtrl.dismiss(result, 'confirm');
  }

  later(): void {
    void this.modalCtrl.dismiss(null, 'later');
  }

  continueWithoutInteramericana(): void {
    const result: BpmPreflightModalResult = {
      kind: 'recovery',
      chasis: this.chassisToQuery,
      motor: this.source === 'swap' ? (this.recovery.expedienteChasis || '') : '',
      swapped: this.source === 'swap',
      source: this.source === 'swap' || this.source === 'manual' ? this.source : undefined,
      mismatches: [],
      response: null
    };
    void this.modalCtrl.dismiss(result, 'confirm');
  }

  async resend(): Promise<void> {
    if (!this.canResend || !this.recovery.idAtencion) {
      return;
    }

    this.isRetrying = true;
    this.retryFailed = false;
    this.retryMessage = '';

    try {
      const response = await firstValueFrom(
        this.api.ValidarDatosReclamoBpm({
          IdAtencion: this.recovery.idAtencion,
          Chasis: this.chassisToQuery
        })
      );

      if (response?.AfiliadoEncontrado === false || !Array.isArray(response?.Campos) || !response.Campos.length) {
        this.retryFailed = true;
        this.retryMessage = response?.Mensaje || 'Interamericana tampoco reconoció este chasis.';
        if (this.source === 'swap') {
          this.retryMessage += ' Si la boleta trae un chasis distinto, ingréselo manualmente y reenvíe.';
        }
        return;
      }

      const mismatches = enrichBpmPreflightMismatches(response, collectBpmPreflightMismatches(response));
      this.finishRecovery(response, mismatches);
    } catch (error: any) {
      this.retryFailed = true;
      this.retryMessage = (error?.error?.Mensaje || error?.error?.Message || '').toString().trim()
        || 'No se pudo reenviar la consulta. Puede continuar el proceso.';
    } finally {
      this.isRetrying = false;
    }
  }

  private finishRecovery(response: BpmClaimValidationResponse, mismatches: BpmPreflightMismatch[]): void {
    this.pendingRecovery = {
      chasis: this.chassisToQuery,
      motor: this.source === 'swap' ? (this.recovery.expedienteChasis || '') : '',
      swapped: this.source === 'swap',
      source: this.source === 'swap' ? 'swap' : 'manual',
      response
    };

    if (mismatches.length) {
      this.mode = 'mismatches';
      this.mismatches = mismatches;
      return;
    }

    const result: BpmPreflightModalResult = {
      kind: 'recovery',
      ...this.pendingRecovery,
      mismatches: []
    };
    void this.modalCtrl.dismiss(result, 'confirm');
  }
}
