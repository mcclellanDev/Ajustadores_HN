import { BehaviorSubject, Observable } from 'rxjs';

export type AttentionCurrencyCode = 'LEMPIRAS' | 'DOLARES';
export type AttentionCurrencyFormat = 'label' | 'short' | 'code';

const STORAGE_KEY = 'miMoneda';
const OVERRIDE_PREFIX = 'preflightMoneda-';
const EXPEDIENTE_CACHE_KEYS = ['elExpediente', 'disExpediente'];

let currencyChanges$: BehaviorSubject<AttentionCurrencyCode> | null = null;

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
  currencySubject().next(normalized);
  return normalized;
}

export function persistAttentionCurrencyOverride(
  attentionId: number | string | null | undefined,
  value: unknown
): AttentionCurrencyCode {
  const normalized = syncAttentionCurrency(value);
  const id = String(attentionId ?? localStorage.getItem('idAtencion') ?? '').trim();
  if (id) {
    localStorage.setItem(overrideKey(id), normalized);
  }
  persistCurrencyOnExpedienteCaches(normalized);
  return normalized;
}

export function readAttentionCurrencyOverride(
  attentionId?: number | string | null
): AttentionCurrencyCode | null {
  const id = String(attentionId ?? localStorage.getItem('idAtencion') ?? '').trim();
  if (!id) {
    return null;
  }

  const raw = localStorage.getItem(overrideKey(id));
  return raw ? normalizeAttentionCurrency(raw) : null;
}

export function readStoredAttentionCurrency(): AttentionCurrencyCode {
  return normalizeAttentionCurrency(
    readAttentionCurrencyOverride() || localStorage.getItem(STORAGE_KEY)
  );
}

export function resolveAttentionCurrency(
  source?: { Moneda?: unknown } | null,
  fallback?: unknown
): AttentionCurrencyCode {
  const override = readAttentionCurrencyOverride();
  const code = syncAttentionCurrency(override ?? source?.Moneda ?? fallback);
  if (override) {
    if (source) {
      source.Moneda = code;
    }
    persistCurrencyOnExpedienteCaches(code);
  }
  return code;
}

export function watchAttentionCurrency(): Observable<AttentionCurrencyCode> {
  return currencySubject().asObservable();
}

function currencySubject(): BehaviorSubject<AttentionCurrencyCode> {
  if (!currencyChanges$) {
    currencyChanges$ = new BehaviorSubject<AttentionCurrencyCode>(
      normalizeAttentionCurrency(localStorage.getItem(STORAGE_KEY))
    );
  }

  return currencyChanges$;
}

function overrideKey(attentionId: string): string {
  return `${OVERRIDE_PREFIX}${attentionId}`;
}

function persistCurrencyOnExpedienteCaches(code: AttentionCurrencyCode): void {
  for (const key of EXPEDIENTE_CACHE_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        continue;
      }

      const parsed = JSON.parse(raw);
      const record = Array.isArray(parsed) ? parsed[0] : parsed;
      if (!record) {
        continue;
      }

      record.Moneda = code;
      localStorage.setItem(key, JSON.stringify(Array.isArray(parsed) ? parsed : [record]));
    } catch {
      // Keep the visible currency even if a cache blob is corrupt.
    }
  }
}
