import { extractBpmClaimResult, isBpmClaimSuccess } from './bpm-claim-response.util';

describe('extractBpmClaimResult', () => {
  it('reads a camelCase success row', () => {
    const result = extractBpmClaimResult([{
      codigo: 0,
      descripcion: 'PROCESO EXITOSO EN EL SERVIDOR',
      solicitud_bpm: 'BPM-1',
      numero_reclamo: 'R-1'
    }]);

    expect(isBpmClaimSuccess(result)).toBeTrue();
    expect(result?.solicitud_bpm).toBe('BPM-1');
    expect(result?.numero_reclamo).toBe('R-1');
  });

  it('reads PascalCase fields from a wrapped object', () => {
    const result = extractBpmClaimResult({
      Codigo: '0',
      Descripcion: 'PROCESO EXITOSO EN EL SERVIDOR',
      Solicitud_bpm: 'BPM-2',
      Numero_reclamo: 'R-2'
    });

    expect(isBpmClaimSuccess(result)).toBeTrue();
    expect(result?.solicitud_bpm).toBe('BPM-2');
    expect(result?.numero_reclamo).toBe('R-2');
  });

  it('parses a JSON string body from CapacitorHttp', () => {
    const result = extractBpmClaimResult('{"codigo":0,"descripcion":"PROCESO EXITOSO EN EL SERVIDOR","solicitud_bpm":"BPM-3","numero_reclamo":"R-3"}');

    expect(isBpmClaimSuccess(result)).toBeTrue();
    expect(result?.solicitud_bpm).toBe('BPM-3');
  });

  it('treats PROCESO EXITOSO as success even if codigo is missing', () => {
    const result = extractBpmClaimResult({
      descripcion: 'PROCESO EXITOSO EN EL SERVIDOR',
      solicitud_bpm: 'BPM-4',
      numero_reclamo: 'R-4'
    });

    expect(isBpmClaimSuccess(result)).toBeTrue();
  });

  it('does not treat a real BPM rejection as success', () => {
    const result = extractBpmClaimResult({
      codigo: 1,
      descripcion: 'Ocurrio un error al procesar la solicitud'
    });

    expect(isBpmClaimSuccess(result)).toBeFalse();
  });

  it('does not treat a missing codigo as success unless the description says so', () => {
    expect(isBpmClaimSuccess(extractBpmClaimResult({
      descripcion: 'Ocurrio un error al procesar la solicitud'
    }))).toBeFalse();
  });
});
