import { persistAttentionCurrencyOverride } from './currency-display.util';
import {
  BPM_PREFLIGHT_FIELD_ORDER,
  BpmClaimReservaRule,
  BpmClaimSuggestedPayload,
  BpmClaimValidationCampo,
  BpmClaimValidationResponse,
  BpmPreflightChassisSource,
  BpmPreflightCorrections,
  BpmPreflightFieldName,
  BpmPreflightMismatch,
  BpmPreflightState
} from '../interfaces/bpm-claim-validation';
import { hasValidVehicleIdentifier } from '../validation/inter-auto-chassis.validation';
import { normalizeChassis } from './claim-payload-normalizer';
import { persistExpediente } from './attention-details.util';

const STATE_PREFIX = 'bpmPreflightState-';

const FIELD_LABELS: Record<BpmPreflightFieldName, string> = {
  Chasis: 'Chasis',
  Poliza: 'Póliza',
  NombreAsegurado: 'Nombre del asegurado',
  Sucursal: 'Sucursal',
  Moneda: 'Moneda'
};

const FIELD_HINTS: Record<BpmPreflightFieldName, string> = {
  Chasis: '',
  Poliza: '',
  NombreAsegurado: '',
  Sucursal: 'Este código se sustituye automáticamente por el de Interamericana. Tegucigalpa suele ser 0001 y San Pedro Sula 0002. El agente no elige sucursal.',
  Moneda:
    'Si la moneda del Web Service es DÓLARES, el valor de reserva no debe superar 5 dígitos. Si es LEMPIRAS, no debe superar 28,000.'
};

export function isAutomaticBpmField(campo: BpmPreflightFieldName): boolean {
  return campo === 'Sucursal' || campo === 'Moneda';
}

export function monedaReservaHint(moneda: unknown): string {
  if (isDolares(moneda)) {
    return 'La moneda es DÓLARES. El valor de reserva no debe superar 5 dígitos.';
  }
  if (isLempiras(moneda)) {
    return 'La moneda es LEMPIRAS. El valor de reserva no debe superar 28,000.';
  }
  return FIELD_HINTS.Moneda;
}

export function bpmPreflightStateKey(attentionId: number | string): string {
  return `${STATE_PREFIX}${attentionId}`;
}

export function displayBpmValue(value: unknown): string {
  const text = (value ?? '').toString().trim();
  return text || 'N/D';
}

export function detectCrossedChassisAndMotor(chasis: unknown, motor: unknown): {
  expedienteChasis: string;
  expedienteMotor: string;
  likelySwapped: boolean;
  swappedChasis: string;
  swappedMotor: string;
} {
  const expedienteChasis = normalizeChassis(chasis);
  const expedienteMotor = normalizeChassis(motor);
  const likelySwapped = !hasValidVehicleIdentifier(expedienteChasis) && hasValidVehicleIdentifier(expedienteMotor);

  return {
    expedienteChasis,
    expedienteMotor,
    likelySwapped,
    swappedChasis: likelySwapped ? expedienteMotor : expedienteChasis,
    swappedMotor: likelySwapped ? expedienteChasis : expedienteMotor
  };
}

export interface RecoveredVehicleIdentifiers {
  chasis: string;
  motor: string;
  source: Exclude<BpmPreflightChassisSource, null> | null;
}

export function persistRecoveredVehicleIdentifiers(
  attentionId: number | string | null | undefined,
  chasis: string,
  motor?: string,
  options?: { source?: Exclude<BpmPreflightChassisSource, null> }
): void {
  const recoveredChasis = normalizeChassis(chasis);
  const recoveredMotor = normalizeChassis(motor);
  if (!recoveredChasis) {
    return;
  }

  localStorage.setItem('dataProcess-ChasisVehiculo', recoveredChasis);
  localStorage.setItem('datos-ChasisVehiculo', recoveredChasis);
  if (recoveredMotor) {
    localStorage.setItem('dataProcess-Motor', recoveredMotor);
  }

  try {
    const raw = localStorage.getItem('elExpediente');
    const parsed = raw ? JSON.parse(raw) : null;
    const record = Array.isArray(parsed) ? parsed[0] : parsed;
    if (record) {
      record.Chasis = recoveredChasis;
      if (recoveredMotor) {
        record.Motor = recoveredMotor;
      }
      persistExpediente(Array.isArray(parsed) ? parsed : [record]);
    }
  } catch {
    // Keep the recovered identifiers in dataProcess even if expediente cache is missing.
  }

  const state = loadBpmPreflightState(attentionId);
  if (state) {
    if (!state.corrections?.Chasis) {
      state.corrections = {
        ...state.corrections,
        Chasis: recoveredChasis
      };
    }
    state.recoveredChassis = recoveredChasis;
    state.recoveredMotor = recoveredMotor || state.recoveredMotor || '';
    if (options?.source) {
      state.recoveredChassisSource = options.source;
    }
    persistBpmPreflightState(state);
  }
}

export function loadRecoveredVehicleIdentifiers(
  attentionId?: number | string | null
): RecoveredVehicleIdentifiers | null {
  const state = loadBpmPreflightState(attentionId);
  const chasis = normalizeChassis(
    state?.recoveredChassis
    || state?.corrections?.Chasis
    || localStorage.getItem('dataProcess-ChasisVehiculo')
  );
  if (!chasis) {
    return null;
  }

  return {
    chasis,
    motor: normalizeChassis(state?.recoveredMotor || localStorage.getItem('dataProcess-Motor')),
    source: state?.recoveredChassisSource || null
  };
}

export function resolveRecoveredVehicleIdentifiers(
  attentionId: number | string | null | undefined,
  serverChasis: unknown,
  draft?: { chasis?: string; motor?: string; manualEntry?: boolean } | null
): RecoveredVehicleIdentifiers | null {
  const stored = loadRecoveredVehicleIdentifiers(attentionId);
  const chasis = normalizeChassis(draft?.chasis || stored?.chasis);
  if (!chasis) {
    return null;
  }

  const server = normalizeChassis(serverChasis);
  const source = stored?.source || (draft?.manualEntry ? 'manual' : null);
  if (chasis === server && source !== 'manual') {
    return null;
  }

  return {
    chasis,
    motor: normalizeChassis(draft?.motor || stored?.motor),
    source
  };
}

export function applyRecoveredVehicleIdentifiers(
  target: { Chasis?: unknown; Motor?: unknown } | null | undefined,
  recovered: RecoveredVehicleIdentifiers | null
): void {
  if (!target || !recovered?.chasis) {
    return;
  }

  target.Chasis = recovered.chasis;
  if (recovered.motor) {
    target.Motor = recovered.motor;
  }
}

export function normalizeBpmCampoName(value: unknown): BpmPreflightFieldName | null {
  const text = (value ?? '').toString().trim().toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z]/g, '');

  if (text === 'chasis') {
    return 'Chasis';
  }
  if (text === 'poliza') {
    return 'Poliza';
  }
  if (text === 'nombreasegurado') {
    return 'NombreAsegurado';
  }
  if (text === 'sucursal') {
    return 'Sucursal';
  }
  if (text === 'moneda') {
    return 'Moneda';
  }

  return null;
}

export function collectBpmPreflightMismatches(
  response: BpmClaimValidationResponse | null | undefined
): BpmPreflightMismatch[] {
  const campos = Array.isArray(response?.Campos) ? response.Campos : [];

  return BPM_PREFLIGHT_FIELD_ORDER.map((campo): BpmPreflightMismatch | null => {
    const item = campos.find((entry) => normalizeBpmCampoName(entry?.CampoBpm) === campo);
    if (!item || item.Coincide !== false) {
      return null;
    }

    const autoApply = isAutomaticBpmField(campo);
    return {
      campo,
      etiqueta: FIELD_LABELS[campo],
      valorExpediente: displayBpmValue(item.ValorExpediente),
      valorWebService: displayBpmValue(item.ValorWebService),
      observacion: (item.Observacion || '').toString().trim(),
      hint: campo === 'Moneda' ? monedaReservaHint(item.ValorWebService) : FIELD_HINTS[campo],
      correct: autoApply ? true : null,
      autoApply
    };
  }).filter((item): item is BpmPreflightMismatch => !!item);
}

export function enrichBpmPreflightMismatches(
  response: BpmClaimValidationResponse | null | undefined,
  mismatches: BpmPreflightMismatch[]
): BpmPreflightMismatch[] {
  const items = [...(mismatches || [])];
  if (!items.length) {
    return items;
  }

  const monedaCampo = findBpmCampo(response, 'Moneda');
  const wsMoneda = (response?.SugeridoParaBpm?.Moneda || monedaCampo?.ValorWebService || '').toString().trim();
  if (!wsMoneda || items.some((item) => item.campo === 'Moneda')) {
    return items;
  }

  items.push({
    campo: 'Moneda',
    etiqueta: FIELD_LABELS.Moneda,
    valorExpediente: displayBpmValue(monedaCampo?.ValorExpediente),
    valorWebService: displayBpmValue(wsMoneda),
    observacion: '',
    hint: monedaReservaHint(wsMoneda),
    correct: true,
    autoApply: true
  });

  return items;
}

export function findBpmCampo(
  response: BpmClaimValidationResponse | null | undefined,
  campo: string
): BpmClaimValidationCampo | null {
  const wanted = normalizeBpmCampoName(campo) || campo;
  return (response?.Campos || []).find((item) => normalizeBpmCampoName(item?.CampoBpm) === wanted) || null;
}

export function buildBpmPreflightState(
  attentionId: number,
  response: BpmClaimValidationResponse,
  mismatches: BpmPreflightMismatch[],
  decided = true
): BpmPreflightState {
  const suggested = response?.SugeridoParaBpm || {};
  const monedaCampo = findBpmCampo(response, 'Moneda');
  const sucursalCampo = findBpmCampo(response, 'Sucursal');
  const corrections: BpmPreflightCorrections = {};
  const wsMoneda = (suggested.Moneda || monedaCampo?.ValorWebService || '').toString().trim();
  const wsSucursal = pickSuggestedValue('Sucursal', suggested, displayBpmValue(sucursalCampo?.ValorWebService));

  if (wsSucursal) {
    corrections.Sucursal = wsSucursal;
  }

  for (const item of mismatches) {
    if (item.autoApply || isAutomaticBpmField(item.campo) || item.correct !== true) {
      continue;
    }

    const value = pickSuggestedValue(campoToSuggestedKey(item.campo), suggested, item.valorWebService);
    if (!value) {
      continue;
    }

    (corrections as Record<string, string>)[item.campo] = value;
  }

  return {
    idAtencion: attentionId,
    decided,
    corrections,
    applyMoneda: !!wsMoneda,
    moneda: wsMoneda,
    reservaRule: monedaCampo?.ReglaValorReserva || deriveReservaRule(wsMoneda),
    suggested
  };
}

export function persistBpmPreflightState(state: BpmPreflightState): void {
  if (!state?.idAtencion) {
    return;
  }

  localStorage.setItem(bpmPreflightStateKey(state.idAtencion), JSON.stringify(state));

  if (state.applyMoneda && state.moneda) {
    persistAttentionCurrencyOverride(state.idAtencion, state.moneda);
  }
}

export function loadBpmPreflightState(attentionId?: number | string | null): BpmPreflightState | null {
  const id = String(attentionId ?? localStorage.getItem('idAtencion') ?? '').trim();
  if (!id) {
    return null;
  }

  try {
    const raw = localStorage.getItem(bpmPreflightStateKey(id));
    return raw ? JSON.parse(raw) as BpmPreflightState : null;
  } catch {
    return null;
  }
}

export function applyStoredPreflightCurrency(attentionId?: number | string | null): string | null {
  const state = loadBpmPreflightState(attentionId);
  if (!state?.applyMoneda || !state.moneda) {
    return null;
  }

  return persistAttentionCurrencyOverride(state.idAtencion, state.moneda);
}

export function applyBpmPreflightCorrections(dataBpm: any, attentionId?: number | string | null): any {
  if (!dataBpm) {
    return dataBpm;
  }

  const state = loadBpmPreflightState(attentionId);
  const corrections = state?.corrections || {};

  if (corrections.Chasis) {
    dataBpm.Chasis = corrections.Chasis;
  }
  if (corrections.Poliza) {
    dataBpm.Poliza = corrections.Poliza;
  }
  if (corrections.NombreAsegurado) {
    dataBpm.NombreAsegurado = corrections.NombreAsegurado;
  }
  if (corrections.Sucursal) {
    dataBpm.Sucursal = corrections.Sucursal;
  }

  return dataBpm;
}

export function evaluateValorReservaLimit(
  rawValue: unknown,
  rule?: BpmClaimReservaRule | null,
  attentionId?: number | string | null
): { ok: boolean; message: string } {
  const resolvedRule = rule || loadBpmPreflightState(attentionId)?.reservaRule;
  if (!resolvedRule) {
    return { ok: true, message: '' };
  }

  const numeric = Number(rawValue);
  if (!Number.isFinite(numeric) || numeric < 0) {
    return { ok: true, message: '' };
  }

  if (resolvedRule.EsDolares || isDolares(resolvedRule.Moneda)) {
    const maxDigits = resolvedRule.MaxDigitosDolares || 5;
    const digits = Math.floor(numeric).toString().replace('-', '').length;
    if (digits > maxDigits) {
      return {
        ok: false,
        message: `La moneda es DÓLARES. El valor de reserva no debe superar ${maxDigits} dígitos.`
      };
    }
  }

  if (resolvedRule.EsLempiras || isLempiras(resolvedRule.Moneda)) {
    const maxLempiras = resolvedRule.MaxLempiras || 28000;
    if (numeric > maxLempiras) {
      return {
        ok: false,
        message: `La moneda es LEMPIRAS. El valor de reserva no debe superar ${maxLempiras.toLocaleString('es-HN')}.`
      };
    }
  }

  return { ok: true, message: '' };
}

function campoToSuggestedKey(campo: BpmPreflightFieldName): keyof BpmClaimSuggestedPayload {
  return campo;
}

function pickSuggestedValue(
  key: keyof BpmClaimSuggestedPayload,
  suggested: BpmClaimSuggestedPayload,
  fallback: string
): string {
  const fromSuggested = (suggested?.[key] || '').toString().trim();
  if (fromSuggested && fromSuggested !== 'N/D') {
    return fromSuggested;
  }

  return fallback === 'N/D' ? '' : fallback;
}

function deriveReservaRule(moneda: unknown): BpmClaimReservaRule | null {
  const text = (moneda || '').toString().trim();
  if (!text) {
    return null;
  }

  if (isDolares(text)) {
    return {
      Moneda: 'DOLARES',
      EsDolares: true,
      EsLempiras: false,
      MaxDigitosDolares: 5,
      Descripcion: 'Si Moneda es DOLARES, ValorReserva no debe exceder 5 dígitos.'
    };
  }

  if (isLempiras(text)) {
    return {
      Moneda: 'LEMPIRAS',
      EsDolares: false,
      EsLempiras: true,
      MaxLempiras: 28000,
      Descripcion: 'Si Moneda es LEMPIRAS, ValorReserva no debe exceder 28000.'
    };
  }

  return null;
}

function isDolares(value: unknown): boolean {
  const text = (value || '').toString().toUpperCase();
  return text.includes('DOLAR') || text.includes('USD');
}

function isLempiras(value: unknown): boolean {
  const text = (value || '').toString().toUpperCase();
  return text.includes('LEMPIRA') || text.includes('HNL');
}
