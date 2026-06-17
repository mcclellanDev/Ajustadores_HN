import {
  attentionNeedsClaimLookup,
  getAttentionClaimCode,
  resolveAttentionStatus
} from './attention-status.util';

describe('attention-status.util', () => {
  it('marks green attentions as active', () => {
    const status = resolveAttentionStatus({ ColorEstado: 'green' });
    expect(status.label).toBe('Activa');
    expect(status.tone).toBe('active');
  });

  it('marks orange attentions as voided', () => {
    const status = resolveAttentionStatus({ ColorEstado: 'orange' });
    expect(status.label).toBe('Anulada');
    expect(status.tone).toBe('voided');
  });

  it('differentiates finished red attentions with BPM claim code', () => {
    const status = resolveAttentionStatus({
      ColorEstado: 'red',
      CodigoReclamoFicohsa: 'REC-12345'
    });

    expect(status.label).toBe('Finalizada');
    expect(status.tone).toBe('finished');
    expect(status.claimCode).toBe('REC-12345');
    expect(getAttentionClaimCode({ CodigoReclamoFicohsa: 'REC-12345' })).toBe('REC-12345');
  });

  it('marks red attentions without claim code as closed', () => {
    const status = resolveAttentionStatus({
      ColorEstado: 'red',
      LbEstado: 'Cancelada'
    });

    expect(status.label).toBe('Cancelada');
    expect(status.tone).toBe('closed');
  });

  it('requests claim lookup only for red items missing claim code', () => {
    expect(attentionNeedsClaimLookup({ ColorEstado: 'red' })).toBeTrue();
    expect(attentionNeedsClaimLookup({ ColorEstado: 'red', CodigoReclamoFicohsa: 'REC-1' })).toBeFalse();
    expect(attentionNeedsClaimLookup({ ColorEstado: 'green' })).toBeFalse();
  });
});
