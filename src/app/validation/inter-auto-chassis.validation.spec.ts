import {
  evaluateInterAutoChassisValidation,
  hasValidVehicleIdentifier,
  isInterAutoAgreement,
  normalizeVehicleIdentifier
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
});
