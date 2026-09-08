import { datosAtencionKeys } from '../environments/predeterminados';
import { normalizeAttentionColor } from './attention-status.util';

export interface DatosDeAtencionEntry {
  key: string;
  value: any;
}

export function getAttentionDetailRecord(detailResponse: any): any {
  if (Array.isArray(detailResponse)) {
    return detailResponse[0] || null;
  }

  return detailResponse || null;
}

export function buildDatosDeAtencion(record: any): DatosDeAtencionEntry[] {
  if (!record) {
    return [];
  }

  return (datosAtencionKeys || []).map((item) => ({
    key: item.nombre,
    value: record[item.nombre]
  }));
}

export function persistDatosDeAtencion(record: any): DatosDeAtencionEntry[] {
  if (!record) {
    return [];
  }

  const datos = buildDatosDeAtencion(record);
  localStorage.setItem('datosDeAtencion', JSON.stringify(datos));

  if (record?.IdentidadCliente != null && record.IdentidadCliente !== '') {
    localStorage.setItem('identidadAsegurado', String(record.IdentidadCliente));
  }

  if (record?.FechaInicio && record?.HoraDeAccidente) {
    const fecha = record.FechaInicio.toString().split('T')[0];
    localStorage.setItem('FechaHora', `${fecha}T${record.HoraDeAccidente}`);
  }

  const color = normalizeAttentionColor(record?.ColorEstado);
  if (color) {
    localStorage.setItem('elColorEstado', color);
  }

  return datos;
}

export function persistExpediente(expediente: any): void {
  if (!expediente) {
    return;
  }

  const payload = Array.isArray(expediente) ? expediente : [expediente];
  localStorage.setItem('elExpediente', JSON.stringify(payload));
}

export function parseStoredJson<T>(raw: string | null, fallback: T): T {
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}
