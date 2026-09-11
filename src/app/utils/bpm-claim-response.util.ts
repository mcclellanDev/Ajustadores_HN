import { parseJsonPayload } from './http-network.util';

export interface BpmClaimResult {
  codigo: string | number | null;
  descripcion: string;
  solicitud_bpm: string;
  numero_reclamo: string;
  raw: any;
}

export function extractBpmClaimResult(response: any): BpmClaimResult | null {
  let payload = parseJsonPayload(response);

  if (Array.isArray(payload)) {
    payload = payload[0];
  }

  if (payload == null || payload === '') {
    return null;
  }

  if (typeof payload !== 'object') {
    return {
      codigo: null,
      descripcion: String(payload),
      solicitud_bpm: '',
      numero_reclamo: '',
      raw: payload
    };
  }

  return {
    codigo: readField(payload, 'codigo'),
    descripcion: String(readField(payload, 'descripcion', 'mensaje', 'message') || ''),
    solicitud_bpm: String(readField(payload, 'solicitud_bpm', 'solicitudbpm') || ''),
    numero_reclamo: String(readField(payload, 'numero_reclamo', 'numeroreclamo') || ''),
    raw: payload
  };
}

export function isBpmClaimSuccess(result: BpmClaimResult | null | undefined): boolean {
  if (!result) {
    return false;
  }

  if (result.codigo === 0 || result.codigo === '0') {
    return true;
  }

  return isBpmSuccessDescription(result.descripcion);
}

export function isBpmSuccessDescription(message: any): boolean {
  const normalized = String(message || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  return normalized.includes('proceso exitoso');
}

function readField(record: any, ...keys: string[]): any {
  if (!record || typeof record !== 'object') {
    return '';
  }

  const lookup: Record<string, any> = {};
  Object.keys(record).forEach((key) => {
    lookup[key.toLowerCase()] = record[key];
  });

  for (const key of keys) {
    const value = lookup[key.toLowerCase()];
    if (value != null && value !== '') {
      return value;
    }
  }

  return '';
}
