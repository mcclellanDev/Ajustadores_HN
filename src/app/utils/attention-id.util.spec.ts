import { parseAttentionId, persistAttentionId, resolveAttentionIdFromSources } from './attention-id.util';

describe('attention-id.util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('accepts numeric ids and numeric strings', () => {
    expect(parseAttentionId(293347)).toBe(293347);
    expect(parseAttentionId('293347')).toBe(293347);
    expect(parseAttentionId(' 293347 ')).toBe(293347);
  });

  it('never treats empty, null, or placeholder values as an attention id', () => {
    expect(parseAttentionId(null)).toBeNull();
    expect(parseAttentionId(undefined)).toBeNull();
    expect(parseAttentionId('')).toBeNull();
    expect(parseAttentionId('null')).toBeNull();
    expect(parseAttentionId('undefined')).toBeNull();
    expect(parseAttentionId('[object Object]')).toBeNull();
    expect(parseAttentionId(0)).toBeNull();
  });

  it('does not parse dates or prefixed text as an id', () => {
    expect(parseAttentionId('2026-09-09')).toBeNull();
    expect(parseAttentionId('Atención # 293347')).toBeNull();
  });

  it('reads ids nested in objects, arrays, and JSON', () => {
    expect(parseAttentionId({ idAtencion: '293347' })).toBe(293347);
    expect(parseAttentionId([{ forma: {} }, { idAtencion: 293347 }])).toBe(293347);
    expect(parseAttentionId('{"IdAtencion":293347}')).toBe(293347);
  });

  it('prefers the value already shown on the signature screen over history state', () => {
    const resolved = resolveAttentionIdFromSources([
      293347,
      null,
      history.state,
      localStorage.getItem('idAtencion'),
      'null'
    ]);

    expect(resolved).toBe(293347);
  });

  it('does not let Ionic history.state steal the id', () => {
    expect(parseAttentionId({ navigationId: 12 })).toBeNull();
    expect(resolveAttentionIdFromSources([
      { navigationId: 12 },
      localStorage.getItem('idAtencion'),
      293347
    ])).toBe(293347);
  });

  it('persists only valid ids', () => {
    expect(persistAttentionId('null')).toBeNull();
    expect(localStorage.getItem('idAtencion')).toBeNull();

    expect(persistAttentionId(293347)).toBe(293347);
    expect(localStorage.getItem('idAtencion')).toBe('293347');
  });
});
