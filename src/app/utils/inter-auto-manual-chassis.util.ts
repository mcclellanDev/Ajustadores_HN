export function interAutoManualEntryFlagKey(idAtencion: number | string): string {
  return `interAutoManualEntry-${idAtencion}`;
}

export function interAutoUploadedFlagKey(idAtencion: number | string): string {
  return `interAutoRegistrationCertificateUploaded-${idAtencion}`;
}

export function isInterAutoManualChassisReadyForClaim(attentionId?: number | string | null): boolean {
  const id = String(attentionId ?? localStorage.getItem('idAtencion') ?? '').trim();
  if (!id) {
    return false;
  }

  const uploaded =
    localStorage.getItem(interAutoUploadedFlagKey(id)) === 'true' ||
    localStorage.getItem('dataProcess-RegistrationCertificateUploaded') === 'true';
  const manual =
    localStorage.getItem(interAutoManualEntryFlagKey(id)) === 'true' ||
    localStorage.getItem('dataProcess-InterAutoManualEntry') === 'true';

  return uploaded && manual;
}
