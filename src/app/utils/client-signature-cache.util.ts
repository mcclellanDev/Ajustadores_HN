import { emptySignature, emptySignatureWhite, errorImage } from '../environments/default-images';

export const CLIENT_SIGNATURE_STORAGE_KEY = 'dSignatureAsegurado';
export const CLIENT_SIGNATURE_ATTENTION_KEY = 'dSignatureAseguradoAtencion';

export function clientSignatureStorageKey(attentionId?: string | number | null): string {
  const id = attentionId?.toString().trim();
  return id ? `${CLIENT_SIGNATURE_STORAGE_KEY}-${id}` : CLIENT_SIGNATURE_STORAGE_KEY;
}

export function isValidStoredClientSignature(signature: unknown): boolean {
  const value = (signature ?? '').toString();
  return !!value &&
    value !== emptySignature &&
    value !== emptySignatureWhite &&
    value !== errorImage &&
    value !== 'null' &&
    value !== 'undefined';
}

export function resolveClientSignatureFromCache(attentionId?: string | number | null): string | null {
  const id = attentionId?.toString().trim();
  const signatureByAttention = id ? localStorage.getItem(clientSignatureStorageKey(id)) : null;

  if (isValidStoredClientSignature(signatureByAttention)) {
    return signatureByAttention;
  }

  const genericSignature = localStorage.getItem(CLIENT_SIGNATURE_STORAGE_KEY);
  const genericAttentionId = localStorage.getItem(CLIENT_SIGNATURE_ATTENTION_KEY);
  const canUseGenericSignature = !id || genericAttentionId === id;

  if (canUseGenericSignature && isValidStoredClientSignature(genericSignature)) {
    return genericSignature;
  }

  return null;
}

export function persistClientSignatureToCache(
  signature: string,
  attentionId?: string | number | null
): boolean {
  if (!isValidStoredClientSignature(signature)) {
    return false;
  }

  localStorage.setItem(CLIENT_SIGNATURE_STORAGE_KEY, signature);

  const id = attentionId?.toString().trim();
  if (id) {
    localStorage.setItem(clientSignatureStorageKey(id), signature);
    localStorage.setItem(CLIENT_SIGNATURE_ATTENTION_KEY, id);
  }

  return true;
}

export function clearAllClientSignatureCache(): void {
  const keysToRemove: string[] = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key) {
      continue;
    }

    if (
      key === CLIENT_SIGNATURE_STORAGE_KEY ||
      key === CLIENT_SIGNATURE_ATTENTION_KEY ||
      key.startsWith(`${CLIENT_SIGNATURE_STORAGE_KEY}-`)
    ) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => localStorage.removeItem(key));
}
