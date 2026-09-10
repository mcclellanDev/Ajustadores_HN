import { isTechnicalClientError, resolveVisibleAlertMessage } from './help-alert.util';

describe('help-alert.util', () => {
  it('hides Promise.all TypeErrors so HELP does not show an empty or exception alert', () => {
    const error = new TypeError('object is not iterable');
    expect(isTechnicalClientError(error)).toBeTrue();
    expect(resolveVisibleAlertMessage(error, 'fallback')).toBe('');
  });

  it('keeps a real API message', () => {
    expect(resolveVisibleAlertMessage({ error: { Message: 'Sin señal GPS' } })).toBe('Sin señal GPS');
  });

  it('does not invent a message when the payload is empty', () => {
    expect(resolveVisibleAlertMessage({ error: { Message: undefined } })).toBe('');
    expect(resolveVisibleAlertMessage({ Mensaje: undefined })).toBe('');
  });
});
