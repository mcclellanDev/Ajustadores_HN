export const INTER_AUTO_MIN_IDENTIFIER_LENGTH = 15;

const EMPTY_IDENTIFIER_VALUES = new Set([
  '',
  'n/d',
  'nd',
  's/d',
  'sin dato',
  'null',
  'undefined'
]);

export type InterAutoChassisValidationMode =
  | 'valid'
  | 'crossed_swap'
  | 'manual_entry'
  | 'missing_motor'
  | 'missing_policy';

export interface InterAutoChassisInput {
  chasis?: unknown;
  motor?: unknown;
  poliza?: unknown;
  plan?: unknown;
  nombreConvenio?: unknown;
  lbPlan?: unknown;
  convenio?: unknown;
  lbConvenio?: unknown;
}

export interface InterAutoChassisValidationState {
  applies: boolean;
  mode: InterAutoChassisValidationMode;
  message: string;
  chasis: string;
  motor: string;
  poliza: string;
  enableManualChasis: boolean;
  enableManualMotor: boolean;
  enableManualPoliza: boolean;
  swappedValues: boolean;
}

export function normalizeVehicleIdentifier(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  const normalized = String(value).trim();
  if (!normalized) {
    return '';
  }

  if (EMPTY_IDENTIFIER_VALUES.has(normalized.toLowerCase())) {
    return '';
  }

  return normalized;
}

export function isInterAutoAgreement(input: Pick<
  InterAutoChassisInput,
  'plan' | 'nombreConvenio' | 'lbPlan' | 'convenio' | 'lbConvenio'
>): boolean {
  const candidates = [
    input.plan,
    input.nombreConvenio,
    input.lbPlan,
    input.convenio,
    input.lbConvenio
  ]
    .map((value) => normalizeVehicleIdentifier(value).toLowerCase())
    .filter(Boolean);

  return candidates.some((value) => value.includes('inter') && value.includes('auto'));
}

export function hasValidVehicleIdentifier(value: unknown): boolean {
  return normalizeVehicleIdentifier(value).length >= INTER_AUTO_MIN_IDENTIFIER_LENGTH;
}

const MANUAL_ATTEMPT_SUFFIX =
  ' Captura los valores manualmente. El envío del reclamo se intentará con la información corregida, pero no se garantiza que sea aceptado. Si no funciona, contacte a las autoridades de su departamento para completar el trámite manualmente.';

const CROSSED_SWAP_SUFFIX =
  ' Se intentará enviar el reclamo corrigiendo los valores automáticamente, pero no se garantiza que sea aceptado. Si no funciona, contacte a las autoridades de su departamento para completar el trámite manualmente.';

export function evaluateInterAutoChassisValidation(
  input: InterAutoChassisInput
): InterAutoChassisValidationState {
  const inactiveState: InterAutoChassisValidationState = {
    applies: false,
    mode: 'valid',
    message: '',
    chasis: normalizeVehicleIdentifier(input.chasis),
    motor: normalizeVehicleIdentifier(input.motor),
    poliza: normalizeVehicleIdentifier(input.poliza),
    enableManualChasis: false,
    enableManualMotor: false,
    enableManualPoliza: false,
    swappedValues: false
  };

  if (!isInterAutoAgreement(input)) {
    return inactiveState;
  }

  let chasis = normalizeVehicleIdentifier(input.chasis);
  let motor = normalizeVehicleIdentifier(input.motor);
  const poliza = normalizeVehicleIdentifier(input.poliza);
  let swappedValues = false;
  const warnings: string[] = [];

  if (!poliza) {
    warnings.push('La póliza del expediente está vacía o inválida. Inter Auto requiere póliza y chasis suscritos.');
  }

  if (hasValidVehicleIdentifier(chasis) && !motor) {
    return {
      applies: true,
      mode: 'missing_motor',
      message: `El chasis cumple la longitud mínima requerida (${INTER_AUTO_MIN_IDENTIFIER_LENGTH} caracteres), pero el motor está vacío o inválido.${MANUAL_ATTEMPT_SUFFIX}`,
      chasis,
      motor,
      poliza,
      enableManualChasis: false,
      enableManualMotor: true,
      enableManualPoliza: !poliza,
      swappedValues: false
    };
  }

  if (hasValidVehicleIdentifier(chasis) && motor) {
    const message = warnings.length
      ? `${warnings.join(' ')} Revise la póliza antes de continuar.`
      : '';

    return {
      applies: !!message,
      mode: message ? 'missing_policy' : 'valid',
      message,
      chasis,
      motor,
      poliza,
      enableManualChasis: false,
      enableManualMotor: false,
      enableManualPoliza: !poliza,
      swappedValues: false
    };
  }

  if (!hasValidVehicleIdentifier(chasis) && hasValidVehicleIdentifier(motor)) {
    chasis = motor;
    motor = normalizeVehicleIdentifier(input.chasis);
    swappedValues = true;

    return {
      applies: true,
      mode: 'crossed_swap',
      message:
        'Detectamos que el chasis y el motor del expediente probablemente están cruzados. ' +
        'El valor del motor cumple la longitud requerida, por lo que se intercambiarán automáticamente para el envío del reclamo.' +
        CROSSED_SWAP_SUFFIX +
        (warnings.length ? ` ${warnings.join(' ')}` : ''),
      chasis,
      motor,
      poliza,
      enableManualChasis: false,
      enableManualMotor: false,
      enableManualPoliza: !poliza,
      swappedValues
    };
  }

  const manualMessage =
    !chasis && !motor
      ? 'El chasis y el motor del expediente están vacíos o inválidos.'
      : !chasis
        ? 'El chasis del expediente está vacío o inválido.'
        : `El chasis no cumple la longitud mínima requerida (${INTER_AUTO_MIN_IDENTIFIER_LENGTH} caracteres) y el motor tampoco es válido.`;

  return {
    applies: true,
    mode: 'manual_entry',
    message: `${manualMessage}${MANUAL_ATTEMPT_SUFFIX}${warnings.length ? ` ${warnings.join(' ')}` : ''}`,
    chasis,
    motor,
    poliza,
    enableManualChasis: true,
    enableManualMotor: true,
    enableManualPoliza: !poliza,
    swappedValues: false
  };
}

export function buildInterAutoValidationInput(source: {
  Chasis?: unknown;
  Motor?: unknown;
  PolizaExterna?: unknown;
  Plan?: unknown;
  NombreConvenio?: unknown;
  LbPlan?: unknown;
  Convenio?: unknown;
  LbConvenio?: unknown;
} | null | undefined): InterAutoChassisInput {
  return {
    chasis: source?.Chasis,
    motor: source?.Motor,
    poliza: source?.PolizaExterna,
    plan: source?.Plan,
    nombreConvenio: source?.NombreConvenio,
    lbPlan: source?.LbPlan,
    convenio: source?.Convenio,
    lbConvenio: source?.LbConvenio
  };
}
