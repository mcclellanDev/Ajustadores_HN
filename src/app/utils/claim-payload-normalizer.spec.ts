import { resolveClaimOccurrenceDate, resolveClaimVehicleIdentifiers, toClaimOccurrenceDate } from './claim-payload-normalizer';

describe('resolveClaimVehicleIdentifiers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('does not replace expediente chasis until the registration certificate is uploaded', () => {
    localStorage.setItem('idAtencion', '293506');
    localStorage.setItem('interAutoManualEntry-293506', 'true');
    localStorage.setItem('interAutoDraft-293506', JSON.stringify({
      chasis: '3N6CD33B1ZK379285',
      motor: 'YD25666033P',
      manualEntry: true
    }));

    const resolved = resolveClaimVehicleIdentifiers({
      Chasis: 'YD25666033P',
      Motor: 'ABC123'
    }, 293506);

    expect(resolved.Chasis).toBe('YD25666033P');
    expect(resolved.Motor).toBe('ABC123');
  });

  it('uses the manually entered chasis after the required image is uploaded', () => {
    localStorage.setItem('idAtencion', '293506');
    localStorage.setItem('interAutoManualEntry-293506', 'true');
    localStorage.setItem('interAutoRegistrationCertificateUploaded-293506', 'true');
    localStorage.setItem('interAutoDraft-293506', JSON.stringify({
      chasis: '3N6CD33B1ZK379285',
      motor: 'YD25666033P',
      manualEntry: true,
      registrationCertificateUploaded: true
    }));

    const resolved = resolveClaimVehicleIdentifiers({
      Chasis: 'YD25666033P',
      Motor: 'ABC123'
    }, 293506);

    expect(resolved.Chasis).toBe('3N6CD33B1ZK379285');
    expect(resolved.Motor).toBe('YD25666033P');
  });

  it('does not apply crossed-swap values to the claim JSON by itself', () => {
    const resolved = resolveClaimVehicleIdentifiers({
      Chasis: 'YD25666033P',
      Motor: '3N6CD33B1ZK379285',
      Plan: 'Inter Auto'
    }, 293506);

    expect(resolved.Chasis).toBe('YD25666033P');
  });
});

describe('toClaimOccurrenceDate', () => {
  it('keeps the calendar date from a SQL datetime without timezone', () => {
    expect(toClaimOccurrenceDate('2026-09-10T19:30:00')).toBe('2026-09-10');
    expect(toClaimOccurrenceDate('2026-09-10T19:30:00.123')).toBe('2026-09-10');
  });

  it('converts a UTC instant after 18:00 Honduras back to the local calendar day', () => {
    expect(toClaimOccurrenceDate('2026-09-11T01:30:00.000Z')).toBe('2026-09-10');
    expect(toClaimOccurrenceDate(new Date('2026-09-11T01:30:00.000Z'))).toBe('2026-09-10');
  });

  it('keeps a date-only value unchanged', () => {
    expect(toClaimOccurrenceDate('2026-09-10')).toBe('2026-09-10');
  });
});

describe('resolveClaimOccurrenceDate', () => {
  it('uses FechaRegistro and ignores an inspection date stored as UTC now', () => {
    const occurrence = resolveClaimOccurrenceDate({
      FechaRegistro: '2026-09-10T15:22:33',
      FechaOcurrencia: '2026-09-11T01:30:00.000Z'
    });

    expect(occurrence).toBe('2026-09-10');
  });

  it('does not post-date an attention created on 2026-09-10 when now is already 2026-09-11 UTC', () => {
    expect(resolveClaimOccurrenceDate({
      FechaRegistro: '2026-09-10T22:10:00'
    })).toBe('2026-09-10');
  });
});
