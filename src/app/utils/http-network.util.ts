import { HttpErrorResponse } from '@angular/common/http';

export const HTTP_TIMEOUT_DEFAULT_MS = 45000;
export const HTTP_TIMEOUT_SINIESTRO_MS = 60000;
export const HTTP_TIMEOUT_BPM_MS = 90000;
export const HTTP_TIMEOUT_PHOTOS_MS = 90000;

export const NETWORK_NO_RESPONSE_MESSAGE =
  'No hay respuesta del servidor. Revisa la conexión e intenta de nuevo.';

export const NETWORK_TIMEOUT_MESSAGE =
  'La solicitud tardó demasiado y se detuvo. Revisa la conexión e intenta de nuevo.';

export const SESSION_EXPIRED_MESSAGE =
  'Su sesión ha caducado. Vuelve a iniciar sesión.';

export function resolveHttpTimeoutMs(url: string): number {
  const target = (url || '').toLowerCase();
  if (target.includes('carga_reclamo_sinau_bpm_fico') || target.includes('subirfotos') || target.includes('subirfotografia')) {
    return HTTP_TIMEOUT_BPM_MS;
  }
  if (target.includes('guardarinformesiniestros')) {
    return HTTP_TIMEOUT_SINIESTRO_MS;
  }
  return HTTP_TIMEOUT_DEFAULT_MS;
}

export function isTimeoutLikeError(error: any): boolean {
  if (!error) {
    return false;
  }
  if (error.name === 'TimeoutError' || error.statusText === 'Timeout') {
    return true;
  }
  const message = `${error?.error?.Message || error?.message || ''}`.toLowerCase();
  return message.includes('tardó demasiado') || message.includes('timeout');
}

export function isNetworkStatusZero(error: any): boolean {
  return !!error && (error.status === 0 || error.status === '0');
}

export function toNetworkHttpError(error: any, url?: string): HttpErrorResponse {
  if (error instanceof HttpErrorResponse && error.status === 0) {
    const message = error.error?.Message || NETWORK_NO_RESPONSE_MESSAGE;
    return new HttpErrorResponse({
      status: 0,
      statusText: error.statusText || 'Network Error',
      url: error.url || url,
      error: { Message: message }
    });
  }

  if (isTimeoutLikeError(error)) {
    return new HttpErrorResponse({
      status: 0,
      statusText: 'Timeout',
      url,
      error: { Message: NETWORK_TIMEOUT_MESSAGE }
    });
  }

  return new HttpErrorResponse({
    status: 0,
    statusText: 'Network Error',
    url,
    error: { Message: NETWORK_NO_RESPONSE_MESSAGE }
  });
}

export function describeHttpFailure(error: any, fallback: string): string {
  if (isTimeoutLikeError(error)) {
    return NETWORK_TIMEOUT_MESSAGE;
  }
  if (isNetworkStatusZero(error)) {
    return error?.error?.Message || NETWORK_NO_RESPONSE_MESSAGE;
  }
  return error?.error?.Message || error?.message || error?.descripcion || fallback;
}

export function unwrapCapacitorHttpData(response: any): any {
  if (response == null) {
    return response;
  }
  if (typeof response === 'object' && 'data' in response && ('status' in response || 'headers' in response)) {
    return response.data;
  }
  return response;
}
