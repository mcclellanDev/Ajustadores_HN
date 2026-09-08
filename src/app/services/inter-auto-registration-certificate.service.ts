import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { firstValueFrom } from 'rxjs';
import { imagePrefix } from '../environments/arrays';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';
import {
  interAutoManualEntryFlagKey,
  interAutoUploadedFlagKey
} from '../utils/inter-auto-manual-chassis.util';

/** Revisión Superior — tarjeta de circulación Inter Auto. */
export const INTER_AUTO_REGISTRATION_CERT_REF_TIPO_FOTO_ID = 36;

const CERT_STORAGE_PREFIX = 'INTER_AUTO_REG_CERT_';
const ACCEPTED_MIME_TYPES = new Set(['image/jpeg', 'image/jpg', 'image/png']);
const ACCEPTED_EXTENSIONS = new Set(['jpg', 'jpeg', 'png']);

export interface InterAutoRegistrationCertificateRecord {
  dataUrl: string;
  fileName: string;
  mimeType: string;
  capturedAt: string;
  uploadedToServer: boolean;
}

export interface InterAutoRegistrationCertificateState {
  manualEntry: boolean;
  registrationCertificateUploaded: boolean;
  previewDataUrl: string | null;
  fileName: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class InterAutoRegistrationCertificateService {
  constructor(private api: ApiService, private toaster: ToastService) {}

  async loadState(idAtencion: number): Promise<InterAutoRegistrationCertificateState> {
    const record = await this.loadRecord(idAtencion);

    return {
      manualEntry: this.readManualEntryFlag(idAtencion),
      registrationCertificateUploaded: !!record,
      previewDataUrl: record?.dataUrl || null,
      fileName: record?.fileName || null
    };
  }

  async markManualEntry(idAtencion: number, active: boolean): Promise<void> {
    this.writeManualEntryFlag(idAtencion, active);
  }

  async clear(idAtencion: number): Promise<void> {
    await Preferences.remove({ key: this.certKey(idAtencion) });
    this.writeManualEntryFlag(idAtencion, false);
    this.writeUploadedFlag(idAtencion, false);
    localStorage.removeItem('dataProcess-InterAutoManualEntry');
    localStorage.removeItem('dataProcess-RegistrationCertificateUploaded');
  }

  async captureFromCamera(idAtencion: number): Promise<InterAutoRegistrationCertificateState | null> {
    try {
      const img = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Base64
      });

      if (!img.base64String) {
        return null;
      }

      const dataUrl = `${imagePrefix}${img.base64String}`;
      return this.saveCertificate(idAtencion, {
        dataUrl,
        fileName: `TarjetaCirculacion_${Date.now()}.jpeg`,
        mimeType: 'image/jpeg'
      });
    } catch {
      this.toaster.presentToastNoButtons('No se pudo abrir la cámara.', 'top', 'fotos');
      return null;
    }
  }

  async captureFromGalleryFile(
    idAtencion: number,
    file: File
  ): Promise<InterAutoRegistrationCertificateState | null> {
    const validationError = this.validateImageFile(file);
    if (validationError) {
      this.toaster.presentToastNoButtons(validationError, 'top', 'fotos');
      return null;
    }

    const dataUrl = await this.readFileAsDataUrl(file);
    if (!dataUrl) {
      this.toaster.presentToastNoButtons('No se pudo leer la imagen seleccionada.', 'top', 'fotos');
      return null;
    }

    return this.saveCertificate(idAtencion, {
      dataUrl,
      fileName: file.name,
      mimeType: file.type || this.inferMimeType(file.name)
    });
  }

  async saveCertificate(
    idAtencion: number,
    input: { dataUrl: string; fileName: string; mimeType: string },
    uploadToServer = true
  ): Promise<InterAutoRegistrationCertificateState> {
    const mimeType = (input.mimeType || '').toLowerCase();
    if (!ACCEPTED_MIME_TYPES.has(mimeType) && !this.hasAcceptedExtension(input.fileName)) {
      this.toaster.presentToastNoButtons(
        'La tarjeta de circulación debe ser JPG, JPEG o PNG.',
        'top',
        'fotos'
      );
      return this.loadState(idAtencion);
    }

    const record: InterAutoRegistrationCertificateRecord = {
      dataUrl: input.dataUrl,
      fileName: input.fileName,
      mimeType: mimeType || 'image/jpeg',
      capturedAt: new Date().toISOString(),
      uploadedToServer: false
    };

    await Preferences.set({
      key: this.certKey(idAtencion),
      value: JSON.stringify(record)
    });

    this.writeManualEntryFlag(idAtencion, true);
    this.writeUploadedFlag(idAtencion, true);

    if (uploadToServer) {
      record.uploadedToServer = await this.uploadToServer(idAtencion, record);
      await Preferences.set({
        key: this.certKey(idAtencion),
        value: JSON.stringify(record)
      });
    }

    return this.loadState(idAtencion);
  }

  isRegistrationCertificateUploaded(idAtencion: number): boolean {
    return localStorage.getItem(this.uploadedFlagKey(idAtencion)) === 'true';
  }

  isManualEntry(idAtencion: number): boolean {
    return localStorage.getItem(this.manualEntryFlagKey(idAtencion)) === 'true';
  }

  private async uploadToServer(
    idAtencion: number,
    record: InterAutoRegistrationCertificateRecord
  ): Promise<boolean> {
    const base64Payload = record.dataUrl.includes(',')
      ? record.dataUrl.split(',')[1]
      : record.dataUrl;

    if (!base64Payload) {
      return false;
    }

    try {
      await firstValueFrom(
        this.api.GuardarFotos([
          {
            Foto: base64Payload,
            IdAtencion: idAtencion,
            RefTipoFotoId: INTER_AUTO_REGISTRATION_CERT_REF_TIPO_FOTO_ID,
            Descripcion: 'Tarjeta de circulación - verificación Inter Auto',
            FechaFirma: record.capturedAt,
            NombreFirmante: record.fileName
          }
        ])
      );
      return true;
    } catch {
      this.toaster.presentToastNoButtons(
        'La imagen se guardó localmente, pero no se pudo enviar al servidor.',
        'top',
        'fotos'
      );
      return false;
    }
  }

  private async loadRecord(idAtencion: number): Promise<InterAutoRegistrationCertificateRecord | null> {
    const stored = await Preferences.get({ key: this.certKey(idAtencion) });
    if (!stored?.value) {
      return null;
    }

    try {
      return JSON.parse(stored.value) as InterAutoRegistrationCertificateRecord;
    } catch {
      return null;
    }
  }

  private validateImageFile(file: File): string | null {
    if (!file) {
      return 'Seleccione una imagen válida.';
    }

    const mimeType = (file.type || '').toLowerCase();
    if (mimeType && !ACCEPTED_MIME_TYPES.has(mimeType)) {
      return 'Solo se permiten imágenes JPG, JPEG o PNG.';
    }

    if (!mimeType && !this.hasAcceptedExtension(file.name)) {
      return 'Solo se permiten imágenes JPG, JPEG o PNG.';
    }

    return null;
  }

  private hasAcceptedExtension(fileName: string): boolean {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    return ACCEPTED_EXTENSIONS.has(extension);
  }

  private inferMimeType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    if (extension === 'png') {
      return 'image/png';
    }
    return 'image/jpeg';
  }

  private readFileAsDataUrl(file: File): Promise<string | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : null);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  private writeManualEntryFlag(idAtencion: number, active: boolean): void {
    localStorage.setItem(this.manualEntryFlagKey(idAtencion), active ? 'true' : 'false');
    localStorage.setItem('dataProcess-InterAutoManualEntry', active ? 'true' : 'false');
  }

  private writeUploadedFlag(idAtencion: number, uploaded: boolean): void {
    localStorage.setItem(this.uploadedFlagKey(idAtencion), uploaded ? 'true' : 'false');
    localStorage.setItem(
      'dataProcess-RegistrationCertificateUploaded',
      uploaded ? 'true' : 'false'
    );
  }

  private readManualEntryFlag(idAtencion: number): boolean {
    return localStorage.getItem(this.manualEntryFlagKey(idAtencion)) === 'true';
  }

  private certKey(idAtencion: number): string {
    return `${CERT_STORAGE_PREFIX}${idAtencion}`;
  }

  private manualEntryFlagKey(idAtencion: number): string {
    return interAutoManualEntryFlagKey(idAtencion);
  }

  private uploadedFlagKey(idAtencion: number): string {
    return interAutoUploadedFlagKey(idAtencion);
  }
}
