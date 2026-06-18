import { InterAutoVehicleCacheService } from './inter-auto-vehicle-cache.service';
import { InterAutoRegistrationCertificateService } from './inter-auto-registration-certificate.service';

describe('InterAutoVehicleCacheService', () => {
  let service: InterAutoVehicleCacheService;
  let registrationCertificate: jasmine.SpyObj<InterAutoRegistrationCertificateService>;

  beforeEach(() => {
    registrationCertificate = jasmine.createSpyObj<InterAutoRegistrationCertificateService>(
      'InterAutoRegistrationCertificateService',
      ['isManualEntry', 'isRegistrationCertificateUploaded', 'clear']
    );
    registrationCertificate.isManualEntry.and.returnValue(false);
    registrationCertificate.isRegistrationCertificateUploaded.and.returnValue(false);
    registrationCertificate.clear.and.returnValue(Promise.resolve());

    service = new InterAutoVehicleCacheService(registrationCertificate);
    localStorage.clear();
  });

  it('does not recover drafts when server chasis is already valid', () => {
    expect(service.shouldRecoverDraft('5XYPG4A3XGG076002')).toBeFalse();
  });

  it('allows draft recovery when server chasis is missing or invalid', () => {
    expect(service.shouldRecoverDraft('')).toBeTrue();
    expect(service.shouldRecoverDraft('123')).toBeTrue();
    expect(service.shouldRecoverDraft('N/D')).toBeTrue();
  });

  it('applies only present draft fields to expediente', () => {
    const expediente: { Chasis?: string; Motor?: string; PolizaExterna?: string } = {
      Chasis: '',
      Motor: '',
      PolizaExterna: 'POL-1'
    };

    service.applyDraftToExpediente(expediente, {
      chasis: '5XYPG4A3XGG076002',
      motor: 'MOTOR-1234567890',
      poliza: '',
      manualEntry: true,
      registrationCertificateUploaded: false,
      updatedAt: '2026-06-17T00:00:00.000Z'
    });

    expect(expediente.Chasis).toBe('5XYPG4A3XGG076002');
    expect(expediente.Motor).toBe('MOTOR-1234567890');
    expect(expediente.PolizaExterna).toBe('POL-1');
  });
});
