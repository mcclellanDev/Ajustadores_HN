import {
  evaluateInterAutoChassisValidation,
  hasValidVehicleIdentifier,
  isInterAutoAgreement,
  isInterAutoManualEntryMode,
  normalizeVehicleIdentifier,
  requiresInterAutoRegistrationCertificate
} from './inter-auto-chassis.validation';

describe('inter-auto-chassis.validation', () => {
  it('detects Inter Auto agreements', () => {
    expect(isInterAutoAgreement({ plan: 'Inter Auto Plus' })).toBeTrue();
    expect(isInterAutoAgreement({ nombreConvenio: 'CONVENIO INTER-AUTO' })).toBeTrue();
    expect(isInterAutoAgreement({ plan: 'Full Cobertura' })).toBeFalse();
  });

  it('treats placeholder values as empty', () => {
    expect(normalizeVehicleIdentifier('N/D')).toBe('');
    expect(normalizeVehicleIdentifier(' null ')).toBe('');
  });

  it('accepts valid chasis values', () => {
    expect(hasValidVehicleIdentifier('5XYPG4A3XGG076002')).toBeTrue();
    expect(hasValidVehicleIdentifier('123')).toBeFalse();
  });

  it('swaps crossed motor and chasis values', () => {
    const result = evaluateInterAutoChassisValidation({
      plan: 'Inter Auto',
      chasis: '123456',
      motor: '5XYPG4A3XGG076002',
      poliza: 'POL-123456'
    });

    expect(result.applies).toBeTrue();
    expect(result.mode).toBe('crossed_swap');
    expect(result.chasis).toBe('5XYPG4A3XGG076002');
    expect(result.motor).toBe('123456');
    expect(result.swappedValues).toBeTrue();
  });

  it('keeps chasis editable after reaching minimum length while motor is missing', () => {
    const result = evaluateInterAutoChassisValidation({
      plan: 'Inter Auto',
      chasis: '5XYPG4A3XGG0760',
      motor: '',
      poliza: 'POL-123456'
    });

    expect(result.mode).toBe('missing_motor');
    expect(result.enableManualChasis).toBeTrue();
    expect(result.enableManualMotor).toBeTrue();
  });

  it('requires manual entry when both identifiers are invalid', () => {
    const result = evaluateInterAutoChassisValidation({
      plan: 'Inter Auto',
      chasis: '123',
      motor: '456',
      poliza: 'POL-123456'
    });

    expect(result.mode).toBe('manual_entry');
    expect(result.enableManualChasis).toBeTrue();
    expect(result.enableManualMotor).toBeTrue();
  });

  it('does not apply outside Inter Auto agreements', () => {
    const result = evaluateInterAutoChassisValidation({
      plan: 'Otro plan',
      chasis: '',
      motor: ''
    });

    expect(result.applies).toBeFalse();
  });

  it('requires registration certificate only for manual entry with valid chasis', () => {
    const manualEntry = evaluateInterAutoChassisValidation({
      plan: 'Inter Auto',
      chasis: '5XYPG4A3XGG076002',
      motor: '',
      poliza: 'POL-123456'
    });

    expect(
      requiresInterAutoRegistrationCertificate(manualEntry, '5XYPG4A3XGG076002', true)
    ).toBeTrue();
    expect(
      requiresInterAutoRegistrationCertificate(manualEntry, '123', true)
    ).toBeFalse();
  });

  it('does not require registration certificate for automatic crossed swap', () => {
    const crossedSwap = evaluateInterAutoChassisValidation({
      plan: 'Inter Auto',
      chasis: '123456',
      motor: '5XYPG4A3XGG076002',
      poliza: 'POL-123456'
    });

    expect(isInterAutoManualEntryMode(crossedSwap, false)).toBeFalse();
    expect(
      requiresInterAutoRegistrationCertificate(
        crossedSwap,
        crossedSwap.chasis,
        false
      )
    ).toBeFalse();
    expect(isInterAutoManualEntryMode(crossedSwap, true)).toBeTrue();
    expect(
      requiresInterAutoRegistrationCertificate(
        crossedSwap,
        crossedSwap.chasis,
        true
      )
    ).toBeTrue();
  });
});
