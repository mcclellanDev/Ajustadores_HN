export function parseAttentionId(value: unknown): number | null {
  if (value == null || value === '') {
    return null;
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) && value > 0 ? Math.trunc(value) : null;
  }

  if (typeof value === 'boolean') {
    return null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const parsed = parseAttentionId(item);
      if (parsed) {
        return parsed;
      }
    }
    return null;
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return parseAttentionId(
      record.idAtencion ?? record.IdAtencion ?? record.RefAtencionId ?? record.Id
    );
  }

  const text = String(value).trim();
  if (!text || text === 'null' || text === 'undefined' || text === '[object Object]') {
    return null;
  }

  if (/^\d+$/.test(text)) {
    const parsed = Number(text);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  if (
    (text.startsWith('{') && text.endsWith('}')) ||
    (text.startsWith('[') && text.endsWith(']'))
  ) {
    try {
      return parseAttentionId(JSON.parse(text));
    } catch {
      return null;
    }
  }

  return null;
}

export function resolveAttentionIdFromSources(sources: unknown[]): number | null {
  for (const candidate of sources) {
    const parsed = parseAttentionId(candidate);
    if (parsed) {
      return parsed;
    }
  }

  return null;
}

export function persistAttentionId(attentionId: unknown): number | null {
  const parsed = parseAttentionId(attentionId);
  if (!parsed) {
    return null;
  }

  localStorage.setItem('idAtencion', parsed.toString());
  return parsed;
}
