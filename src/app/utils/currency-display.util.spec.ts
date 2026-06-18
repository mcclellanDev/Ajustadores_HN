import {
  formatAttentionCurrency,
  isDollarAttentionCurrency,
  normalizeAttentionCurrency,
  syncAttentionCurrency
} from './currency-display.util';

describe('currency-display.util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults empty values to lempiras', () => {
    expect(normalizeAttentionCurrency(null)).toBe('LEMPIRAS');
    expect(formatAttentionCurrency(undefined)).toBe('Lempiras');
    expect(formatAttentionCurrency('', 'short')).toBe('HNL');
  });

  it('detects dollar policies', () => {
    expect(normalizeAttentionCurrency('DOLARES')).toBe('DOLARES');
    expect(normalizeAttentionCurrency('DÓLARES')).toBe('DOLARES');
    expect(isDollarAttentionCurrency('USD')).toBeTrue();
  });

  it('persists normalized currency for reuse across screens', () => {
    expect(syncAttentionCurrency('dolares')).toBe('DOLARES');
    expect(localStorage.getItem('miMoneda')).toBe('DOLARES');
    expect(formatAttentionCurrency(localStorage.getItem('miMoneda'))).toBe('Dólares');
  });
});
