import {
  buildDatosDeAtencion,
  getAttentionDetailRecord,
  parseStoredJson,
  persistDatosDeAtencion,
  persistExpediente
} from './attention-details.util';

describe('attention-details.util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('reads the first record from an array response', () => {
    const record = getAttentionDetailRecord([{ IdentidadCliente: '0801' }, { IdentidadCliente: 'x' }]);
    expect(record.IdentidadCliente).toBe('0801');
  });

  it('persists datosDeAtencion as a JSON key/value list', () => {
    persistDatosDeAtencion({
      IdentidadCliente: '0801199012345',
      Cliente: 'Juan Perez',
      ColorEstado: 'GREEN',
      FechaInicio: '2026-09-08T10:00:00',
      HoraDeAccidente: '09:30:00'
    });

    const stored = JSON.parse(localStorage.getItem('datosDeAtencion') || '[]');
    const identidad = stored.find((item: { key: string }) => item.key === 'IdentidadCliente');

    expect(identidad.value).toBe('0801199012345');
    expect(localStorage.getItem('identidadAsegurado')).toBe('0801199012345');
    expect(localStorage.getItem('elColorEstado')).toBe('green');
    expect(localStorage.getItem('FechaHora')).toBe('2026-09-08T09:30:00');
  });

  it('stores expediente as an array even when given a single object', () => {
    persistExpediente({ Cliente: 'Maria', PolizaExterna: 'FIC-123' });

    const stored = JSON.parse(localStorage.getItem('elExpediente') || '[]');
    expect(Array.isArray(stored)).toBe(true);
    expect(stored[0].Cliente).toBe('Maria');
  });

  it('builds an empty list when the record is missing', () => {
    expect(buildDatosDeAtencion(null).length).toBe(0);
  });

  it('does not overwrite stored datosDeAtencion when the record is missing', () => {
    localStorage.setItem('datosDeAtencion', JSON.stringify([{ key: 'Cliente', value: 'Ana' }]));
    persistDatosDeAtencion(null);
    expect(JSON.parse(localStorage.getItem('datosDeAtencion') || '[]')[0].value).toBe('Ana');
  });

  it('returns the fallback when stored JSON is invalid', () => {
    expect(parseStoredJson('[object Object]', []).length).toBe(0);
  });
});
