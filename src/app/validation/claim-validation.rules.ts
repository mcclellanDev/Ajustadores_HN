import { cacheIndexArray, requiredDataAjustador, requiredDataCliente } from '../environments/predeterminados';
import { ValidationRule } from './claim-validation';

const clienteCacheDefaultableFields: Record<string, any> = {
  AgendarAudiencia: 2,
  AseguradoUsoPoliza: 1,
  ConductorAfiliado: 1,
  ConductorDetenido: 2,
  TerceroResponsable: 3,
  TercerosHeridos: 2,
  TercerosMuertos: 2,
  VehiculoDetenido: 2,
  VehiculoVolcado: 2,
  PruebaAlcoholemia: 2,
  Blindado: 2,
  Edad: 0
};

export const clienteCacheValidationRules: ValidationRule[] = cacheIndexArray.map((item) => {
  const defaultValue = clienteCacheDefaultableFields[item.title];

  return {
    field: item.title,
    label: item.title,
    stage: 'cliente-cache',
    severity: defaultValue === undefined ? 'required' : 'defaultable',
    defaultValue
  };
});

export const clienteScreenValidationRules: ValidationRule[] = requiredDataCliente.map((item) => ({
  field: item.nombre,
  label: item.etiqueta,
  stage: 'clientehn',
  segment: item.segmentKey,
  severity: 'required',
  when: conditionalClienteRule(item.nombre)
}));

// Fields where a value of 0 is acceptable (so it must NOT be flagged as missing),
// but the agent should be advised that it stays 0 unless manually changed.
const ajustadorAdviseOnZeroFields = new Set<string>([
  'Kilometraje',
  'ValorReserva',
  'AC',
  'Rines',
  'BolsaAire',
  'CierreCentralizado',
  'RetrovisorElectronico',
  'Overfenders',
  'ColaPato',
  'CintaDecorativa',
  'Mecanico'
]);

const isZeroValue = (value: any): boolean => {
  if (value === 0) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim() === '0';
  }
  return false;
};

export const ajustadorScreenValidationRules: ValidationRule[] = requiredDataAjustador.map((item) => ({
  field: item.nombre,
  label: item.etiqueta,
  stage: 'ajustadorhn',
  segment: item.pagSegmento,
  severity: item.requerido ? 'required' : 'recommended',
  adviseWhen: ajustadorAdviseOnZeroFields.has(item.nombre) ? isZeroValue : undefined,
  advisoryMessage: ajustadorAdviseOnZeroFields.has(item.nombre)
    ? `${item.etiqueta} está en 0 y se guardará así salvo que lo modifiques manualmente.`
    : undefined
}));

export const ficohsaBpmValidationRules: ValidationRule[] = [
  'Chasis',
  'puntoServicio',
  'Poliza',
  'Certificado',
  'NombreAsegurado',
  'Sucursal',
  'Producto',
  'Cobertura',
  'Ramo',
  'FechaOcurrencia',
  'Causa',
  'ValorReserva',
  'UsuarioBPM',
  'Latitud',
  'Longitud',
  'NombreConductor',
  'Genero',
  'Parentesco',
  'Observacion'
].map((field) => ({
  field,
  label: field,
  stage: 'ficohsa-bpm',
  severity: 'required'
}));

export const ficohsaBpmConfirmationRules: ValidationRule[] = [
  'IdTablaAjustador',
  'CodigoBPMFicohsa',
  'CodigoReclamoFicohsa'
].map((field) => ({
  field,
  label: field,
  stage: 'ficohsa-confirmacion',
  severity: 'required'
}));

function conditionalClienteRule(field: string) {
  if (field === 'UbicacionVehiculoDetenido') {
    return (data: Record<string, any>) => Number(data.VehiculoDetenido) === 1;
  }

  if (field === 'DescripcionTercerosHeridos') {
    return (data: Record<string, any>) => Number(data.TercerosHeridos) === 1;
  }

  if (field === 'DescripcionTercerosMuertos') {
    return (data: Record<string, any>) => Number(data.TercerosMuertos) === 1;
  }

  if (field === 'PorqueNoUsoServicioAsistencia') {
    return (data: Record<string, any>) => Number(data.AseguradoUsoPoliza) === 2;
  }

  return undefined;
}
