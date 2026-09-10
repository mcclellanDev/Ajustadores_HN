import {
  applyBpmPreflightCorrections,
  buildBpmPreflightState,
  collectBpmPreflightMismatches,
  detectCrossedChassisAndMotor,
  enrichBpmPreflightMismatches,
  evaluateValorReservaLimit,
  loadRecoveredVehicleIdentifiers,
  monedaReservaHint,
  persistRecoveredVehicleIdentifiers,
  resolveRecoveredVehicleIdentifiers
} from './bpm-claim-preflight.util';
import { BpmClaimValidationResponse } from '../interfaces/bpm-claim-validation';

describe('bpm-claim-preflight.util', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('collects only fundamental mismatches in priority order', () => {
    const response: BpmClaimValidationResponse = {
      Campos: [
        { CampoBpm: 'Moneda', Coincide: false, ValorExpediente: 'LEMPIRAS', ValorWebService: 'DOLARES' },
        { CampoBpm: 'Chasis', Coincide: false, ValorExpediente: 'AAA', ValorWebService: 'BBB' },
        { CampoBpm: 'Poliza', Coincide: true, ValorExpediente: '1', ValorWebService: '1' },
        { CampoBpm: 'Certificado', Coincide: false, ValorExpediente: '1', ValorWebService: '2' }
      ]
    };

    const mismatches = collectBpmPreflightMismatches(response);
    expect(mismatches.map((item) => item.campo)).toEqual(['Chasis', 'Moneda']);
    expect(mismatches.find((item) => item.campo === 'Moneda')?.autoApply).toBeTrue();
    expect(mismatches.find((item) => item.campo === 'Chasis')?.autoApply).toBeFalsy();
  });

  it('matches backend field names regardless of casing or accents', () => {
    const response: BpmClaimValidationResponse = {
      Campos: [
        { CampoBpm: 'CHASIS', Coincide: false, ValorExpediente: 'AAA', ValorWebService: 'BBB' },
        { CampoBpm: 'Póliza', Coincide: false, ValorExpediente: '1', ValorWebService: '2' }
      ]
    };

    expect(collectBpmPreflightMismatches(response).map((item) => item.campo)).toEqual(['Chasis', 'Poliza']);
  });

  it('detects crossed chassis and motor when the motor looks like a VIN', () => {
    const crossed = detectCrossedChassisAndMotor('YD25666033P', 'KMFWBX7HAMU191980');
    expect(crossed.likelySwapped).toBeTrue();
    expect(crossed.swappedChasis).toBe('KMFWBX7HAMU191980');
    expect(crossed.swappedMotor).toBe('YD25666033P');
  });

  it('applies only accepted BPM corrections', () => {
    localStorage.setItem('bpmPreflightState-293347', JSON.stringify({
      idAtencion: 293347,
      decided: true,
      corrections: {
        Chasis: 'KMFWBX7HAMU191980',
        Sucursal: '0002'
      }
    }));

    const payload = applyBpmPreflightCorrections({
      Chasis: 'OLD',
      Poliza: '1001',
      NombreAsegurado: 'CLIENTE',
      Sucursal: '0001'
    }, 293347);

    expect(payload.Chasis).toBe('KMFWBX7HAMU191980');
    expect(payload.Poliza).toBe('1001');
    expect(payload.Sucursal).toBe('0002');
  });

  it('warns when dollar reserve exceeds 5 digits', () => {
    const result = evaluateValorReservaLimit(100000, {
      Moneda: 'DOLARES',
      EsDolares: true,
      MaxDigitosDolares: 5
    });

    expect(result.ok).toBeFalse();
  });

  it('warns when lempira reserve exceeds 28000', () => {
    const result = evaluateValorReservaLimit(28001, {
      Moneda: 'LEMPIRAS',
      EsLempiras: true,
      MaxLempiras: 28000
    });

    expect(result.ok).toBeFalse();
  });

  it('persists a recovered chassis so Datos Vehículo can reuse it', () => {
    localStorage.setItem('elExpediente', JSON.stringify([{ Id: 294048, Chasis: 'YD25666033P', Motor: '3N6CD33B1ZK379285' }]));
    localStorage.setItem('bpmPreflightState-294048', JSON.stringify({
      idAtencion: 294048,
      decided: true,
      corrections: {}
    }));

    persistRecoveredVehicleIdentifiers(294048, 'KMFWBX7HAMU191980', 'YD25666033P', { source: 'manual' });

    const recovered = loadRecoveredVehicleIdentifiers(294048);
    expect(recovered?.chasis).toBe('KMFWBX7HAMU191980');
    expect(recovered?.motor).toBe('YD25666033P');
    expect(recovered?.source).toBe('manual');
    expect(localStorage.getItem('dataProcess-ChasisVehiculo')).toBe('KMFWBX7HAMU191980');

    const expediente = JSON.parse(localStorage.getItem('elExpediente') || '[]');
    expect(expediente[0].Chasis).toBe('KMFWBX7HAMU191980');
  });

  it('keeps a manually recovered chassis even when the server still has the old value', () => {
    localStorage.setItem('bpmPreflightState-294048', JSON.stringify({
      idAtencion: 294048,
      decided: true,
      corrections: {},
      recoveredChassis: 'KMFWBX7HAMU191980',
      recoveredMotor: 'YD25666033P',
      recoveredChassisSource: 'manual'
    }));

    const recovered = resolveRecoveredVehicleIdentifiers(294048, 'YD25666033P');
    expect(recovered?.chasis).toBe('KMFWBX7HAMU191980');
    expect(recovered?.source).toBe('manual');
  });

  it('marks sucursal as an automatic substitution', () => {
    const mismatches = collectBpmPreflightMismatches({
      Campos: [
        { CampoBpm: 'Sucursal', Coincide: false, ValorExpediente: '0001', ValorWebService: '0002' }
      ]
    });

    expect(mismatches[0].campo).toBe('Sucursal');
    expect(mismatches[0].autoApply).toBeTrue();
    expect(mismatches[0].correct).toBeTrue();
  });

  it('always applies Web Service sucursal and moneda even if the agent would have said no', () => {
    const response: BpmClaimValidationResponse = {
      Campos: [
        { CampoBpm: 'Sucursal', Coincide: false, ValorExpediente: '0001', ValorWebService: '0002' },
        { CampoBpm: 'Moneda', Coincide: false, ValorExpediente: 'LEMPIRAS', ValorWebService: 'DOLARES' }
      ],
      SugeridoParaBpm: {
        Sucursal: '0002',
        Moneda: 'DOLARES'
      }
    };

    const state = buildBpmPreflightState(294048, response, [
      { campo: 'Sucursal', etiqueta: 'Sucursal', valorExpediente: '0001', valorWebService: '0002', observacion: '', hint: '', correct: false, autoApply: true },
      { campo: 'Moneda', etiqueta: 'Moneda', valorExpediente: 'LEMPIRAS', valorWebService: 'DOLARES', observacion: '', hint: '', correct: false, autoApply: true }
    ], true);

    expect(state.corrections.Sucursal).toBe('0002');
    expect(state.applyMoneda).toBeTrue();
    expect(state.moneda).toBe('DOLARES');
    expect(state.reservaRule?.EsDolares).toBeTrue();
  });

  it('adds the currency reserve hint when the modal already has other differences', () => {
    const response: BpmClaimValidationResponse = {
      Campos: [
        { CampoBpm: 'Chasis', Coincide: false, ValorExpediente: 'AAA', ValorWebService: 'BBB' },
        { CampoBpm: 'Moneda', Coincide: true, ValorExpediente: 'LEMPIRAS', ValorWebService: 'LEMPIRAS' }
      ],
      SugeridoParaBpm: { Moneda: 'LEMPIRAS' }
    };

    const items = enrichBpmPreflightMismatches(response, collectBpmPreflightMismatches(response));
    const moneda = items.find((item) => item.campo === 'Moneda');
    expect(moneda?.autoApply).toBeTrue();
    expect(moneda?.hint).toContain('28,000');
  });

  it('describes the dollar reserve cap from the Web Service currency', () => {
    expect(monedaReservaHint('DOLARES')).toContain('5 dígitos');
  });
});
