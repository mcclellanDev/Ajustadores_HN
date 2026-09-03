export const AUDIENCE_TABLE_STORAGE_KEY = 'IdTablaAjustador';
export const AUDIENCE_TABLE_ATTENTION_KEY = 'IdTablaAjustadorAtencion';

export function audienceTableStorageKey(attentionId?: string | number | null): string {
  const id = attentionId?.toString().trim();
  return id ? `${AUDIENCE_TABLE_STORAGE_KEY}-${id}` : AUDIENCE_TABLE_STORAGE_KEY;
}

export function resolveAudienceTableIdFromCache(
  attentionId?: string | number | null
): string | null {
  const id = attentionId?.toString().trim();
  if (!id) {
    return null;
  }

  const scopedId = localStorage.getItem(audienceTableStorageKey(id));
  if (scopedId) {
    return scopedId;
  }

  const genericId = localStorage.getItem(AUDIENCE_TABLE_STORAGE_KEY);
  const genericAttentionId = localStorage.getItem(AUDIENCE_TABLE_ATTENTION_KEY);
  if (genericId && genericAttentionId === id) {
    return genericId;
  }

  return null;
}

export function persistAudienceTableIdToCache(
  tableId: string | number,
  attentionId?: string | number | null
): void {
  const normalizedTableId = tableId?.toString().trim();
  if (!normalizedTableId) {
    return;
  }

  localStorage.setItem(AUDIENCE_TABLE_STORAGE_KEY, normalizedTableId);

  const id = attentionId?.toString().trim();
  if (id) {
    localStorage.setItem(audienceTableStorageKey(id), normalizedTableId);
    localStorage.setItem(AUDIENCE_TABLE_ATTENTION_KEY, id);
  }
}
