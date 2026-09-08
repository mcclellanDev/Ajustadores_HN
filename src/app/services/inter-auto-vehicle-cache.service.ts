import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {
  hasValidVehicleIdentifier,
  normalizeVehicleIdentifier
} from '../validation/inter-auto-chassis.validation';
import { InterAutoRegistrationCertificateService } from './inter-auto-registration-certificate.service';

export interface InterAutoVehicleDraft {
  chasis: string;
  motor: string;
  poliza: string;
  manualEntry: boolean;
  registrationCertificateUploaded: boolean;
  updatedAt: string;
}

export interface InterAutoVehicleSnapshot {
  chasis: string;
  motor: string;
  poliza: string;
  capturedAt: string;
}

const DRAFT_PREFIX = 'INTER_AUTO_VEHICLE_DRAFT_';
const SNAPSHOT_PREFIX = 'INTER_AUTO_VEHICLE_SNAPSHOT_';

@Injectable({
  providedIn: 'root'
})
export class InterAutoVehicleCacheService {
  constructor(private registrationCertificate: InterAutoRegistrationCertificateService) {}
  shouldRecoverDraft(serverChasis: unknown): boolean {
    return !hasValidVehicleIdentifier(serverChasis);
  }

  async captureServerSnapshot(
    idAtencion: number,
    source: { Chasis?: unknown; Motor?: unknown; PolizaExterna?: unknown } | null | undefined
  ): Promise<InterAutoVehicleSnapshot> {
    const snapshot: InterAutoVehicleSnapshot = {
      chasis: normalizeVehicleIdentifier(source?.Chasis),
      motor: normalizeVehicleIdentifier(source?.Motor),
      poliza: normalizeVehicleIdentifier(source?.PolizaExterna),
      capturedAt: new Date().toISOString()
    };

    await Preferences.set({
      key: this.snapshotKey(idAtencion),
      value: JSON.stringify(snapshot)
    });

    if (hasValidVehicleIdentifier(snapshot.chasis)) {
      await this.clearDraft(idAtencion);
    }

    return snapshot;
  }

  async loadServerSnapshot(idAtencion: number): Promise<InterAutoVehicleSnapshot | null> {
    return this.readJson<InterAutoVehicleSnapshot>(this.snapshotKey(idAtencion));
  }

  isReadyToCommitManualChassis(idAtencion: number, chasis: unknown): boolean {
    return (
      this.registrationCertificate.isRegistrationCertificateUploaded(idAtencion) &&
      this.registrationCertificate.isManualEntry(idAtencion) &&
      hasValidVehicleIdentifier(chasis)
    );
  }

  async saveDraft(
    idAtencion: number,
    draft: { chasis?: unknown; motor?: unknown; poliza?: unknown }
  ): Promise<void> {
    const snapshot = await this.loadServerSnapshot(idAtencion);
    const payload: InterAutoVehicleDraft = {
      chasis: normalizeVehicleIdentifier(draft.chasis),
      motor: normalizeVehicleIdentifier(draft.motor),
      poliza: normalizeVehicleIdentifier(draft.poliza),
      manualEntry: this.registrationCertificate.isManualEntry(idAtencion),
      registrationCertificateUploaded:
        this.registrationCertificate.isRegistrationCertificateUploaded(idAtencion),
      updatedAt: new Date().toISOString()
    };

    const isManualCorrection = !!payload.chasis && payload.chasis !== (snapshot?.chasis || '');
    if (hasValidVehicleIdentifier(snapshot?.chasis) && !isManualCorrection) {
      await this.clearDraft(idAtencion);
      return;
    }

    if (!payload.chasis && !payload.motor && !payload.poliza) {
      await this.clearDraft(idAtencion);
      return;
    }

    await Preferences.set({
      key: this.draftKey(idAtencion),
      value: JSON.stringify(payload)
    });

    this.mirrorDraftToLocalStorage(idAtencion, payload);
  }

  async loadDraft(idAtencion: number): Promise<InterAutoVehicleDraft | null> {
    const draft = await this.readJson<InterAutoVehicleDraft>(this.draftKey(idAtencion));
    if (!draft) {
      return null;
    }

    return {
      chasis: normalizeVehicleIdentifier(draft.chasis),
      motor: normalizeVehicleIdentifier(draft.motor),
      poliza: normalizeVehicleIdentifier(draft.poliza),
      manualEntry: !!draft.manualEntry,
      registrationCertificateUploaded: !!draft.registrationCertificateUploaded,
      updatedAt: draft.updatedAt || ''
    };
  }

  async clearDraft(idAtencion: number): Promise<void> {
    await Preferences.remove({ key: this.draftKey(idAtencion) });
    await this.registrationCertificate.clear(idAtencion);
    this.clearDraftLocalStorage(idAtencion);
  }

  applyDraftToExpediente(
    expediente: { Chasis?: unknown; Motor?: unknown; PolizaExterna?: unknown },
    draft: InterAutoVehicleDraft
  ): void {
    if (draft.chasis) {
      expediente.Chasis = draft.chasis;
    }
    if (draft.motor) {
      expediente.Motor = draft.motor;
    }
    if (draft.poliza) {
      expediente.PolizaExterna = draft.poliza;
    }
  }

  mirrorDraftToLocalStorage(idAtencion: number, draft: InterAutoVehicleDraft): void {
    localStorage.setItem('datos-ChasisVehiculo', draft.chasis || '');
    localStorage.setItem('datos-Poliza', draft.poliza || '');
    localStorage.setItem(`interAutoDraft-${idAtencion}`, JSON.stringify(draft));

    if (
      draft.registrationCertificateUploaded ||
      this.registrationCertificate.isRegistrationCertificateUploaded(idAtencion)
    ) {
      localStorage.setItem('dataProcess-ChasisVehiculo', draft.chasis || '');
      localStorage.setItem('dataProcess-Motor', draft.motor || '');
    }
  }

  private clearDraftLocalStorage(idAtencion: number): void {
    localStorage.removeItem(`interAutoDraft-${idAtencion}`);
  }

  private draftKey(idAtencion: number): string {
    return `${DRAFT_PREFIX}${idAtencion}`;
  }

  private snapshotKey(idAtencion: number): string {
    return `${SNAPSHOT_PREFIX}${idAtencion}`;
  }

  private async readJson<T>(key: string): Promise<T | null> {
    const stored = await Preferences.get({ key });
    if (!stored?.value) {
      return null;
    }

    try {
      return JSON.parse(stored.value) as T;
    } catch {
      return null;
    }
  }
}
