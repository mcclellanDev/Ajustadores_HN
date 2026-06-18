export type AttentionCurrencyCode = 'LEMPIRAS' | 'DOLARES';
export type AttentionCurrencyFormat = 'label' | 'short' | 'code';

const STORAGE_KEY = 'miMoneda';

export function normalizeAttentionCurrency(value: unknown): AttentionCurrencyCode {
  const raw = (value ?? '').toString().trim().toUpperCase();

  if (!raw) {
    return 'LEMPIRAS';
  }

  if (
    raw.includes('DOLAR') ||
    raw.includes('USD') ||
    raw === '$' ||
    raw === 'US$'
  ) {
    return 'DOLARES';
  }

  return 'LEMPIRAS';
}

export function formatAttentionCurrency(
  value: unknown,
  format: AttentionCurrencyFormat = 'label'
): string {
  const code = normalizeAttentionCurrency(value);

  switch (format) {
    case 'short':
      return code === 'DOLARES' ? 'USD' : 'HNL';
    case 'code':
      return code;
    case 'label':
    default:
      return code === 'DOLARES' ? 'Dólares' : 'Lempiras';
  }
}

export function isDollarAttentionCurrency(value: unknown): boolean {
  return normalizeAttentionCurrency(value) === 'DOLARES';
}

export function syncAttentionCurrency(value: unknown): AttentionCurrencyCode {
  const normalized = normalizeAttentionCurrency(value);
  localStorage.setItem(STORAGE_KEY, normalized);
  return normalized;
}

export function readStoredAttentionCurrency(): AttentionCurrencyCode {
  return normalizeAttentionCurrency(localStorage.getItem(STORAGE_KEY));
}

export function resolveAttentionCurrency(
  source?: { Moneda?: unknown } | null,
  fallback?: unknown
): AttentionCurrencyCode {
  return syncAttentionCurrency(source?.Moneda ?? fallback);
}
