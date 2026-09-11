import { hasValidVehicleIdentifier } from '../validation/inter-auto-chassis.validation';
import { isInterAutoManualChassisReadyForClaim } from './inter-auto-manual-chassis.util';

export interface ParentescoOption {
  CODIGO?: string | number;
  codigo?: string | number;
  DESCRIPCION?: string;
  descripcion?: string;
}

const EMPTY_MARKERS = ['string', 'null', 'undefined', 'n/a', 'na', 'nd', 'n.d.', 's/d', 'sin dato'];
const FALLBACK_PARENTESCO_CODES: Record<string, string> = {
  'ninguno': '0027',
  'titular': '0001',
  'titular masculino': '0001',
  'titular femenino': '0001',
  'asegurado': '0001',
  'conyuge': '0002',
  'cónyuge': '0002',
  'hijo': '0003',
  'hija': '0003'
};

function cleanText(value: any): string {
  return (value ?? '').toString().trim();
}

export function normalizePolicyNumber(value: any): string {
  const text = cleanText(value);
  if (!text || EMPTY_MARKERS.includes(text.toLowerCase())) {
    return '';
  }

  return text.replace(/^\s*\d+\s*-\s*/, '').trim();
}

export function normalizeChassis(value: any): string {
  const text = cleanText(value).toUpperCase();
  if (!text || EMPTY_MARKERS.includes(text.toLowerCase())) {
    return '';
  }

  return text;
}

export function readInterAutoDraftFromLocalStorage(attentionId?: any): {
  chasis: string;
  motor: string;
  poliza: string;
} | null {
  const id = String(attentionId ?? localStorage.getItem('idAtencion') ?? '').trim();
  if (!id) {
    return null;
  }

  try {
    const raw = localStorage.getItem(`interAutoDraft-${id}`);
    if (!raw) {
      return null;
    }

    const draft = JSON.parse(raw);
    return {
      chasis: normalizeChassis(draft?.chasis),
      motor: normalizeChassis(draft?.motor),
      poliza: cleanText(draft?.poliza)
    };
  } catch {
    return null;
  }
}

export function resolveClaimVehicleIdentifiers(
  record: any,
  attentionId?: any
): { Chasis: string; Motor: string } {
  const expedienteChasis = normalizeChassis(record?.Chasis);
  const expedienteMotor = normalizeChassis(record?.Motor);

  if (!isInterAutoManualChassisReadyForClaim(attentionId)) {
    return { Chasis: expedienteChasis, Motor: expedienteMotor };
  }

  const draft = readInterAutoDraftFromLocalStorage(attentionId);
  const Chasis = pickValidChassis([
    draft?.chasis,
    localStorage.getItem('dataProcess-ChasisVehiculo'),
    localStorage.getItem('datos-ChasisVehiculo'),
    record?.ChasisVehiculo
  ]);

  if (!Chasis) {
    return { Chasis: expedienteChasis, Motor: expedienteMotor };
  }

  const Motor = pickPreferredMotor([
    draft?.motor,
    localStorage.getItem('dataProcess-Motor'),
    expedienteMotor
  ], Chasis) || expedienteMotor;

  return { Chasis, Motor };
}

export function applyResolvedVehicleIdentifiers(record: any, attentionId?: any): { Chasis: string; Motor: string } {
  const resolved = resolveClaimVehicleIdentifiers(record, attentionId);
  if (record && isInterAutoManualChassisReadyForClaim(attentionId)) {
    if (resolved.Chasis) {
      record.Chasis = resolved.Chasis;
    }
    if (resolved.Motor) {
      record.Motor = resolved.Motor;
    }
  }

  return resolved;
}

function pickValidChassis(candidates: Array<string | null | undefined>): string {
  return candidates.map((value) => normalizeChassis(value)).find((value) => hasValidVehicleIdentifier(value)) || '';
}

function pickPreferredMotor(candidates: Array<string | null | undefined>, selectedChasis: string): string {
  const normalized = candidates
    .map((value) => normalizeChassis(value))
    .filter((value) => value && value !== selectedChasis);

  return normalized[0] || '';
}

export function normalizeCoordinate(value: any): string {
  const text = cleanText(value);
  return isValidCoordinate(text) ? text : '';
}

export function resolveClaimCoordinates(record: any, attentionId?: any): { Latitud: string; Longitud: string } {
  const corrected = getCorrectedCoordinates(attentionId);

  if (corrected) {
    return corrected;
  }

  const cabinCoordinates = {
    Latitud: normalizeCoordinate(record?.LatitudCliente ?? record?.Latitud),
    Longitud: normalizeCoordinate(record?.LongitudCliente ?? record?.Longitud)
  };

  if (!cabinCoordinates.Latitud || !cabinCoordinates.Longitud) {
    return {
      Latitud: '',
      Longitud: ''
    };
  }

  return cabinCoordinates;
}

export function normalizeParentescoCode(value: any, options: ParentescoOption[] = [], fallback = '0001'): string {
  const text = cleanText(value);
  if (!text || EMPTY_MARKERS.includes(text.toLowerCase())) {
    return fallback;
  }

  const numericCode = normalizeNumericCode(text);
  if (numericCode) {
    return numericCode;
  }

  const normalizedText = normalizeDescription(text);
  const matched = options.find((option) => {
    const optionDescription = normalizeDescription(option.DESCRIPCION ?? option.descripcion);
    const optionCode = normalizeNumericCode(option.CODIGO ?? option.codigo);
    return optionDescription === normalizedText || optionCode === normalizedText;
  });

  if (matched) {
    return normalizeNumericCode(matched.CODIGO ?? matched.codigo) || fallback;
  }

  return FALLBACK_PARENTESCO_CODES[normalizedText] || fallback;
}

export function resolveClaimDate(record: any, preferred?: any): string {
  const candidates = [
    preferred,
    record?.FechaRegistro,
    record?.FechaAccidente,
    record?.FechaSiniestro,
    record?.FechaOcurrencia,
    record?.FechaHoraSiniestro,
    record?.FechaInicio,
    record?.fechaInicio,
    record?.Inicio,
    record?.FechaCreacion
  ];

  const nonSentinel = candidates.find((candidate) => isUsefulDate(candidate));
  if (nonSentinel) {
    return normalizeDateString(nonSentinel);
  }

  const firstValid = candidates.find((candidate) => isValidDate(candidate));
  return firstValid ? normalizeDateString(firstValid) : '';
}

const HONDURAS_TIME_ZONE = 'America/Tegucigalpa';
const DATE_ONLY_PATTERN = /^(\d{4}-\d{2}-\d{2})/;
const EXPLICIT_TZ_PATTERN = /Z$/i;
const EXPLICIT_OFFSET_PATTERN = /[+-]\d{2}:?\d{2}$/;

export function toClaimOccurrenceDate(value: any): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return formatHondurasCalendarDate(value);
  }

  const text = cleanText(value);
  if (!text) {
    return '';
  }

  const dateOnlyMatch = text.match(DATE_ONLY_PATTERN);
  const hasExplicitTz = EXPLICIT_TZ_PATTERN.test(text) || EXPLICIT_OFFSET_PATTERN.test(text);

  if (dateOnlyMatch && !hasExplicitTz) {
    return dateOnlyMatch[1];
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return formatHondurasCalendarDate(parsed);
  }

  return dateOnlyMatch ? dateOnlyMatch[1] : '';
}

export function resolveClaimOccurrenceDate(record: any): string {
  const candidates = [
    record?.FechaRegistro,
    record?.FechaAccidente,
    record?.FechaSiniestro,
    record?.FechaOcurrencia,
    record?.FechaHoraSiniestro,
    record?.FechaInicio,
    record?.fechaInicio,
    record?.Inicio,
    record?.FechaCreacion
  ];

  const source = candidates.find((candidate) => isUsefulDate(candidate))
    || candidates.find((candidate) => isValidDate(candidate));

  return toClaimOccurrenceDate(source);
}

function formatHondurasCalendarDate(date: Date): string {
  try {
    const formatted = new Intl.DateTimeFormat('en-CA', {
      timeZone: HONDURAS_TIME_ZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
    if (DATE_ONLY_PATTERN.test(formatted)) {
      return formatted;
    }
  } catch {
    // WebView without the IANA zone: Honduras is UTC-6 year-round.
  }

  const honduras = new Date(date.getTime() - (6 * 60 * 60 * 1000));
  const year = honduras.getUTCFullYear();
  const month = String(honduras.getUTCMonth() + 1).padStart(2, '0');
  const day = String(honduras.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeNumericCode(value: any): string {
  const text = cleanText(value);
  if (!/^\d+$/.test(text)) {
    return '';
  }

  return text.length >= 4 ? text : text.padStart(4, '0');
}

function normalizeDescription(value: any): string {
  return cleanText(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function isValidCoordinate(value: string): boolean {
  if (!value || value.toLowerCase().includes('this.')) {
    return false;
  }

  const numericValue = Number(value);
  return Number.isFinite(numericValue) && Math.abs(numericValue) <= 180;
}

function getCorrectedCoordinates(attentionId?: any): { Latitud: string; Longitud: string } | null {
  if (!attentionId) {
    return null;
  }

  if (localStorage.getItem('coords-correccion-confirmada-' + attentionId) !== 'true') {
    return null;
  }

  const latitud = localStorage.getItem('coords-latitud-' + attentionId);
  const longitud = localStorage.getItem('coords-longitud-' + attentionId);
  const normalizedLatitud = normalizeCoordinate(latitud);
  const normalizedLongitud = normalizeCoordinate(longitud);

  if (normalizedLatitud && normalizedLongitud) {
    return {
      Latitud: normalizedLatitud,
      Longitud: normalizedLongitud
    };
  }

  return null;
}

function isValidDate(value: any): boolean {
  const text = cleanText(value);
  if (!text || EMPTY_MARKERS.includes(text.toLowerCase())) {
    return false;
  }

  const date = new Date(text);
  return !Number.isNaN(date.getTime());
}

function isUsefulDate(value: any): boolean {
  if (!isValidDate(value)) {
    return false;
  }

  const normalized = normalizeDateString(value);
  return !normalized.startsWith('1999-01-01');
}

function normalizeDateString(value: any): string {
  const text = cleanText(value);
  return text.includes('.') ? text.split('.')[0] : text;
}
