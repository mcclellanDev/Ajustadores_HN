export const BPM_PREFLIGHT_FIELD_ORDER = [
  'Chasis',
  'Poliza',
  'NombreAsegurado',
  'Sucursal',
  'Moneda'
] as const;

export type BpmPreflightFieldName = typeof BPM_PREFLIGHT_FIELD_ORDER[number];

export interface BpmClaimReservaRule {
  Moneda?: string;
  EsDolares?: boolean;
  EsLempiras?: boolean;
  MaxDigitosDolares?: number;
  MaxLempiras?: number;
  Descripcion?: string;
}

export interface BpmClaimValidationCampo {
  CampoBpm?: string;
  CampoWebService?: string;
  ValorExpediente?: string | null;
  ValorWebService?: string | null;
  Coincide?: boolean;
  Requerido?: boolean;
  NoIncluidoEnJsonBpm?: boolean;
  Observacion?: string | null;
  ReglaValorReserva?: BpmClaimReservaRule | null;
}

export interface BpmClaimSuggestedPayload {
  Chasis?: string;
  Poliza?: string;
  Certificado?: string;
  NombreAsegurado?: string;
  Sucursal?: string;
  Moneda?: string;
  Observacion?: string;
}

export interface BpmClaimValidationResponse {
  AfiliadoEncontrado?: boolean;
  ListoParaBpm?: boolean;
  ChasisConsultado?: string;
  CodError?: string;
  Mensaje?: string;
  AmbienteConsulta?: string;
  IdAtencion?: number;
  IdAjusteAudiencia?: number;
  Campos?: BpmClaimValidationCampo[];
  SugeridoParaBpm?: BpmClaimSuggestedPayload;
  CamposNoValidadosAlInicio?: string[];
}

export interface BpmPreflightMismatch {
  campo: BpmPreflightFieldName;
  etiqueta: string;
  valorExpediente: string;
  valorWebService: string;
  observacion: string;
  hint: string;
  correct: boolean | null;
  autoApply?: boolean;
}

export interface BpmPreflightCorrections {
  Chasis?: string;
  Poliza?: string;
  NombreAsegurado?: string;
  Sucursal?: string;
}

export interface BpmPreflightState {
  idAtencion: number;
  decided: boolean;
  corrections: BpmPreflightCorrections;
  applyMoneda: boolean;
  moneda: string;
  reservaRule: BpmClaimReservaRule | null;
  suggested: BpmClaimSuggestedPayload;
  recoveredChassis?: string;
  recoveredMotor?: string;
  recoveredChassisSource?: Exclude<BpmPreflightChassisSource, null>;
}

export type BpmPreflightChassisSource = 'swap' | 'manual' | null;

export interface BpmChassisRecoveryContext {
  idAtencion: number;
  consultedChassis: string;
  expedienteChasis: string;
  expedienteMotor: string;
  likelySwapped: boolean;
  message: string;
}

export type BpmPreflightModalResult =
  | { kind: 'mismatches'; mismatches: BpmPreflightMismatch[] }
  | {
      kind: 'recovery';
      chasis: string;
      motor: string;
      swapped: boolean;
      source?: Exclude<BpmPreflightChassisSource, null>;
      mismatches: BpmPreflightMismatch[];
      response: BpmClaimValidationResponse | null;
    };

