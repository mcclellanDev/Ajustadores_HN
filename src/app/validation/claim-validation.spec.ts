import { isMissingValue, validateClaimStage } from './claim-validation';
import {
  ajustadorScreenValidationRules,
  clienteCacheValidationRules,
  clienteScreenValidationRules,
  ficohsaBpmConfirmationRules,
  ficohsaBpmValidationRules
} from './claim-validation.rules';

describe('claim validation', () => {
  it('treats stringified NaN / object / empty arrays as missing', () => {
    expect(isMissingValue('NaN')).toBeTrue();
    expect(isMissingValue('  nan ')).toBeTrue();
    expect(isMissingValue('[object Object]')).toBeTrue();
    expect(isMissingValue([])).toBeTrue();
    expect(isMissingValue(NaN)).toBeTrue();

    expect(isMissingValue('0')).toBeFalse();
    expect(isMissingValue(0)).toBeFalse();
    expect(isMissingValue('Toyota')).toBeFalse();
  });

  it('advises about zero-valued ajustador fields without flagging them as missing', () => {
    const kilometrajeRule = ajustadorScreenValidationRules.filter((rule) => rule.field === 'Kilometraje');

    const result = validateClaimStage({ Kilometraje: 0 }, kilometrajeRule);

    expect(result.complete).toBeTrue();
    expect(result.missing.length).toBe(0);
    expect(result.advisories.map((advisory) => advisory.field)).toEqual(['Kilometraje']);
    expect(result.advisories[0].value).toBe(0);
  });

  it('treats null-like strings as missing but keeps valid falsey values', () => {
    const result = validateClaimStage(
      {
        Nombre: 'undefined',
        Kilometraje: 0,
        EsConductor: false
      },
      [
        { field: 'Nombre', label: 'Nombre', severity: 'required' },
        { field: 'Kilometraje', label: 'Kilometraje', severity: 'required' },
        { field: 'EsConductor', label: 'Es conductor', severity: 'required' }
      ]
    );

    expect(result.complete).toBeFalse();
    expect(result.missing.map((item) => item.field)).toEqual(['Nombre']);
  });

  it('applies safe defaults for internal cliente cache fields', () => {
    const result = validateClaimStage(
      {
        IdAtencion: 101,
        Nombre: 'Cliente Prueba',
        AgendarAudiencia: null,
        VehiculoDetenido: undefined
      },
      clienteCacheValidationRules.filter((rule) => [
        'IdAtencion',
        'Nombre',
        'AgendarAudiencia',
        'VehiculoDetenido'
      ].includes(rule.field))
    );

    expect(result.complete).toBeTrue();
    expect(result.data.AgendarAudiencia).toBe(2);
    expect(result.data.VehiculoDetenido).toBe(2);
    expect(result.defaults.map((item) => item.field)).toEqual(['AgendarAudiencia', 'VehiculoDetenido']);
  });

  it('requires conditional cliente fields only when their trigger says so', () => {
    const rules = clienteScreenValidationRules.filter((rule) => rule.field === 'UbicacionVehiculoDetenido');

    const notRequired = validateClaimStage({ VehiculoDetenido: 2 }, rules);
    const required = validateClaimStage({ VehiculoDetenido: 1 }, rules);

    expect(notRequired.complete).toBeTrue();
    expect(required.complete).toBeFalse();
    expect(required.missing[0].field).toBe('UbicacionVehiculoDetenido');
  });

  it('guards the Ficohsa BPM payload and confirmation payload separately', () => {
    const bpmResult = validateClaimStage(
      {
        Chasis: 'ABC123',
        puntoServicio: '307'
      },
      ficohsaBpmValidationRules
    );

    const confirmationResult = validateClaimStage(
      {
        IdTablaAjustador: 99,
        CodigoBPMFicohsa: 'BPM-1',
        CodigoReclamoFicohsa: 'REC-1'
      },
      ficohsaBpmConfirmationRules
    );

    expect(bpmResult.complete).toBeFalse();
    expect(bpmResult.missing.length).toBeGreaterThan(0);
    expect(confirmationResult.complete).toBeTrue();
  });
});
