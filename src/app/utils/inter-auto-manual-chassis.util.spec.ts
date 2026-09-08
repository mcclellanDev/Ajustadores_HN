import { isInterAutoManualChassisReadyForClaim } from './inter-auto-manual-chassis.util';

describe('isInterAutoManualChassisReadyForClaim', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('requires both the manual input flag and the uploaded certificate', () => {
    localStorage.setItem('idAtencion', '293506');
    localStorage.setItem('interAutoManualEntry-293506', 'true');

    expect(isInterAutoManualChassisReadyForClaim(293506)).toBeFalse();

    localStorage.setItem('interAutoRegistrationCertificateUploaded-293506', 'true');
    expect(isInterAutoManualChassisReadyForClaim(293506)).toBeTrue();
  });
});
