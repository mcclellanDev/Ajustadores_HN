import { HttpErrorResponse } from '@angular/common/http';
import {
  HTTP_TIMEOUT_BPM_MS,
  HTTP_TIMEOUT_DEFAULT_MS,
  HTTP_TIMEOUT_SINIESTRO_MS,
  NETWORK_NO_RESPONSE_MESSAGE,
  NETWORK_TIMEOUT_MESSAGE,
  describeHttpFailure,
  isNetworkStatusZero,
  resolveHttpTimeoutMs,
  toNetworkHttpError,
  unwrapCapacitorHttpData
} from './http-network.util';

describe('http-network.util', () => {
  it('gives longer timeouts to BPM, photos, and siniestro sends', () => {
    expect(resolveHttpTimeoutMs('https://portal/api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico')).toBe(HTTP_TIMEOUT_BPM_MS);
    expect(resolveHttpTimeoutMs('https://portal/api/Proveedor/SubirFotosSiniestro')).toBe(HTTP_TIMEOUT_BPM_MS);
    expect(resolveHttpTimeoutMs('https://portal/api/Proveedor/GuardarInformeSiniestros_HN')).toBe(HTTP_TIMEOUT_SINIESTRO_MS);
    expect(resolveHttpTimeoutMs('https://portal/api/Proveedor/ObtenercacheCliente')).toBe(HTTP_TIMEOUT_DEFAULT_MS);
  });

  it('treats status 0 as a network failure with a visible message', () => {
    const error = new HttpErrorResponse({ status: 0, statusText: 'Unknown Error', url: 'https://portal/api' });
    expect(isNetworkStatusZero(error)).toBeTrue();
    expect(describeHttpFailure(error, 'fallback')).toBe(NETWORK_NO_RESPONSE_MESSAGE);
    expect(toNetworkHttpError(error).error.Message).toBe(NETWORK_NO_RESPONSE_MESSAGE);
  });

  it('maps timeout-like errors to a stoppable send message', () => {
    expect(describeHttpFailure({ name: 'TimeoutError' }, 'fallback')).toBe(NETWORK_TIMEOUT_MESSAGE);
    expect(toNetworkHttpError({ name: 'TimeoutError' }).statusText).toBe('Timeout');
  });

  it('unwraps CapacitorHttp envelopes without changing plain API bodies', () => {
    expect(unwrapCapacitorHttpData({ data: [{ codigo: 0 }], status: 200, headers: {} })).toEqual([{ codigo: 0 }]);
    expect(unwrapCapacitorHttpData(40129)).toBe(40129);
    expect(unwrapCapacitorHttpData([{ codigo: 0 }])).toEqual([{ codigo: 0 }]);
  });

  it('parses JSON string bodies returned by CapacitorHttp', () => {
    expect(unwrapCapacitorHttpData({
      data: '{"codigo":0,"descripcion":"PROCESO EXITOSO EN EL SERVIDOR"}',
      status: 200,
      headers: {}
    })).toEqual({ codigo: 0, descripcion: 'PROCESO EXITOSO EN EL SERVIDOR' });
  });
});
