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
