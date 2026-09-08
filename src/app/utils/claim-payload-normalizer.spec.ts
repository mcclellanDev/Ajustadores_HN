import { resolveClaimVehicleIdentifiers } from './claim-payload-normalizer';

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
