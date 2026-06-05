"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_environments_segments_ts-src_app_environments_vehicles_ts-src_app_services_fo-4be3a4"],{

/***/ 33333:
/*!******************************************!*\
  !*** ./src/app/environments/segments.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "segments": () => (/* binding */ segments),
/* harmony export */   "segments_aju": () => (/* binding */ segments_aju)
/* harmony export */ });
const segments = [{
  name: 'location',
  titulo: 'Coordenadas',
  idSegmento: 'segmentCoordinates'
}, {
  name: 'person',
  titulo: 'Datos Asegurado',
  idSegmento: 'segmentAfiliated'
}, {
  name: 'car-sport',
  titulo: 'Datos Vehículo',
  idSegmento: 'segmentVehicle'
}, {
  name: 'speedometer',
  titulo: 'Datos Conductor',
  idSegmento: 'segmentDriver'
}, {
  name: 'help-circle',
  titulo: 'Más Información',
  idSegmento: 'segmentInfo'
}, {
  name: 'people',
  titulo: 'Acompañantes',
  idSegmento: 'segmentCompany'
}, {
  name: 'woman',
  titulo: 'Testigos',
  idSegmento: 'segmentWitness'
}, {
  name: 'trash-bin',
  titulo: 'Propiedad Daños',
  idSegmento: 'segmentProperty'
}, {
  name: 'body',
  titulo: 'Lesion Persona',
  idSegmento: 'segmentDamage'
}, {
  name: 'ribbon',
  titulo: 'Envío de Datos',
  idSegmento: 'segmentSignature'
}];
const segments_aju = [{
  name: 'person',
  titulo: 'Datos Solicitante',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-solicitante'
}, {
  name: 'car-sport',
  titulo: 'Datos Vehículo',
  idSegmento: 'segmentVehicleAju',
  pagSegmento: 'segmento-vehiculo'
}, {
  name: 'car',
  titulo: 'Características',
  idSegmento: 'segmentInfoAju',
  pagSegmento: 'segmento-caracteristicas'
}, {
  name: 'chatbox-ellipses',
  titulo: 'Descripción Daño',
  idSegmento: 'segmentDamageAju',
  pagSegmento: 'segmento-danio'
}, {
  name: 'wallet',
  titulo: 'Acuerdo de Deuda',
  idSegmento: 'segmentAfiliatedAju',
  pagSegmento: 'culpable'
}
//{name:'cash', titulo: 'Finiquito', idSegmento: 'segmentSignatureAju', pagSegmento: 'beneficiario'}  //1
];

/***/ }),

/***/ 73586:
/*!******************************************!*\
  !*** ./src/app/environments/vehicles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marcasVehiculos": () => (/* binding */ marcasVehiculos),
/* harmony export */   "tiposTransmision": () => (/* binding */ tiposTransmision)
/* harmony export */ });
const tiposTransmision = [{
  id: 'tr01',
  nombre: "Mecánica (Manual)"
}, {
  id: 'tr02',
  nombre: "Automático"
}, {
  id: 'tr03',
  nombre: "Doble Embrague"
}, {
  id: 'tr04',
  nombre: "Continua Variable (CVT)"
}];
const marcasVehiculos = [{
  "id": 1,
  "nombre": "Audi",
  "modelos": ["A5", "A3", "A4", "A6", "S3", "S4", "TT", "A1", "TTS", "A1 1.4 T", "Q7", "Q5", "Q3", "Q2"]
}, {
  "id": 2,
  "nombre": "BMW",
  "modelos": ["Serie 6", "Serie 7", "Z4", "M6", "Serie 1", "Serie 3", "Serie 5", "Serie 8", "1800", "M", "Serie 4", "Serie 2", "M235", "428i", "i", "1M", "M4", "M3", "M2", "X6", "X1", "X3", "X5", "X4", "X2"]
}, {
  "id": 3,
  "nombre": "Chevrolet",
  "modelos": ["Alto", "Astra", "Bel Air", "Camaro", "Aveo", "Cavalier", "Celebrity", "Citation", "Corsa", "Chevy", "Epica", "Esteem", "Impala", "Malibu", "Monza", "Optra", "Spark", "Sprint", "Style", "Line", "Swift", "Wagon R+", "Sail", "Buick", "Cruze", "39", "Cobalt", "Sonic", "Onix", "Beat", "Vivant", "Blazer 4x2", "Captiva", "Tahoe", "HHR", "Courier", "Zafira", "Blazer", "4x4", "Grand", "Vitara", "Grand Blazer", "Rodeo", "Suburban", "Trail", "Blazer", "Traverse", "Orlando", "Tracker", "Equinox", "Jimny", "Samurai", "Trooper", "Vitara", "FSR", "FVR", "FTR", "NNR", "Cheyenne", "C30", "3100", "Luv", "Brigadier", "C70", "Carry", "NHR", "NPR", "NKR", "Super", "Brigadier", "Super", "Carry", "Kodiak", "NQR", "FRR", "FVZ", "N300", "Luv", "D-max", "DMAX", "Super", "Carry", "NQR", "FRR", "Carry", "CHR", "LV", "NKR", "NPR", "Luv", "D-max", "SSR", "Luv Dmax", "N300", "Apache", "C10", "C30", "Cheyenne", "Luv 1.6", "Luv 2.2", "Luv 2.3", "Luv 2.5", "Colorado", "Luv 2.8", "Silverado", "Optra", "Spark", "Corsa", "Taxi", "Chevette", "Chevytaxi", "7:24", "ChevyVan", "ChevyWagon", "Super", "Carry", "N200", "N300"]
}, {
  "id": 4,
  "nombre": "Citroen",
  "modelos": ["Xsara", "Picasso", "C3", "C5", "Saxo", "Xantia", "ZX", "C4", "C2", "Xsara", "DS3", "DS4", "DS5", "C-Elysee", "Aircross", "Aircross", "C4", "C3", "Berlingo", "Jumper", "Jumpy", "Berlingo"]
}, {
  "id": 5,
  "nombre": "Daihatsu",
  "modelos": ["Charade", "Charmant", "Sirion", "Materia", "Terios", "F20", "Feroza", "Rocky", "Delta", "V126"]
}, {
  "id": 6,
  "nombre": "Dodge",
  "modelos": ["Coronet", "Dart", "Demon", "D100", "Royal", "Journey", "Caliber", "Fargo", "Durango", "300", "600", "900", "500", "Ram", "D100", "Dakota", "Caravan"]
}, {
  "id": 7,
  "nombre": "Fiat",
  "modelos": ["Zastava", "Idea", "124", "Punto", "147", "Palio", "Polsky", "Premio", "Siena", "Stilo", "Tipo", "Topolino", "Uno", "500", "Linea", "Nuevo", "Palio", "Argo", "Cronos", "Adventure", "500", "X", "Fiorino", "Furgon", "Strada", "Idea"]
}, {
  "id": 8,
  "nombre": "Ford",
  "modelos": ["Fusion", "Crown", "Victoria", "Falcon", "Festiva", "Fiesta", "Focus", "Granada", "Laser", "Mustang", "Taurus", "Hot", "Rod", "Escort", "Ltd", "555E", "Chiva", "Ecosport", "Panel", "Edge", "Flex", "Courier", "Escape", "Expedition", "Explorer", "Llanero", "Bronco", "Piragua", "Aeromax", "Cargo", "815", "F350", "600", "F8000", "F 600", "F 350[7]", "F9000", "F-150", "Cargo 1019", "Cargo 816", "F250", "Nueva", "Ranger", "Explorer", "F100", "F-150", "F350", "Ranger"]
}, {
  "id": 9,
  "nombre": "KIA",
  "modelos": ["Carens", "Sportage", "Soluto", "K3", "Picanto", "Seltos", "K2700", "Sonet"]
}];

/***/ }),

/***/ 70854:
/*!**********************************************!*\
  !*** ./src/app/services/formatos.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatosService": () => (/* binding */ FormatosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FormatosService = class FormatosService {
  constructor() {}
  formatearFechaSiniestro(mydate) {
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.fHora = timeFormat.toString().substring(0, 5);
    let anio = dateFormat.toString().substring(0, 4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);
    let laFormateada = dia + '-' + mes + '-' + anio;
    console.log(laFormateada);
    let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
    };
    console.dir(fechaArray);
    return fechaArray;
  }
  formatearFechaNacimiento(mydate) {
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.fHora = timeFormat.toString().substring(0, 5);
    let anio = dateFormat.toString().substring(0, 4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);
    let laFormateada = dia + '-' + mes + '-' + anio;
    console.log(laFormateada);
    let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
    };
    console.dir(fechaArray);
    return fechaArray;
  }
  formatearVigencia(Vdate) {
    var dateFormat = Vdate.split('T')[0];
    //console.log('dateFormat '+ dateFormat)
    let dia = dateFormat.toString().substring(0, 2);
    let mes = dateFormat.toString().substring(3, 5);
    let anio = dateFormat.toString().substring(6);
    let laFormateada = anio + '-' + mes + '-' + dia;
    //this.calcularVigencia(laFormateada);
    return laFormateada;
  }
  calcularVigencia(Vdate) {
    let now = new Date().toISOString();
    let nowDate = now.split('T')[0];
    let vigente;
    //console.log('Licencia está vigente? ');
    console.log(new Date(nowDate) + ', ' + new Date(Vdate));
    //console.log(nowDate > Vdate);
    if (new Date(nowDate) > new Date(Vdate)) {
      vigente = false;
    } else {
      vigente = true;
    }
    return vigente;
  }
  compararFechas(SFecha, IFecha) {
    let brakePoint = 'T';
    if (SFecha.toString().indexOf('T') == -1) {
      SFecha = SFecha.toISOString();
    } else {}
    if (IFecha.toString().indexOf('T') == -1) {
      IFecha = IFecha.toISOString();
    } else {}
    let valida;
    alert(SFecha.split(brakePoint)[0] + ', ' + IFecha.split(brakePoint)[0] + ', ' + (SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]));
    console.log(SFecha.split(brakePoint)[0] + ', ' + IFecha.split(brakePoint)[0]);
    console.log(SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]);
    if (SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]) {
      valida = true;
    } else {
      valida = false;
    }
    return valida;
  }
  desformatearFecha(Ddate) {
    let revertida;
    revertida = new Date(Ddate).toISOString();
    return revertida;
  }
  static {
    this.ctorParameters = () => [];
  }
};
FormatosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], FormatosService);


/***/ }),

/***/ 5057:
/*!******************************************************!*\
  !*** ./src/app/validation/claim-validation.rules.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajustadorScreenValidationRules": () => (/* binding */ ajustadorScreenValidationRules),
/* harmony export */   "clienteCacheValidationRules": () => (/* binding */ clienteCacheValidationRules),
/* harmony export */   "clienteScreenValidationRules": () => (/* binding */ clienteScreenValidationRules),
/* harmony export */   "ficohsaBpmConfirmationRules": () => (/* binding */ ficohsaBpmConfirmationRules),
/* harmony export */   "ficohsaBpmValidationRules": () => (/* binding */ ficohsaBpmValidationRules)
/* harmony export */ });
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);

const clienteCacheDefaultableFields = {
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
const clienteCacheValidationRules = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_0__.cacheIndexArray.map(item => {
  const defaultValue = clienteCacheDefaultableFields[item.title];
  return {
    field: item.title,
    label: item.title,
    stage: 'cliente-cache',
    severity: defaultValue === undefined ? 'required' : 'defaultable',
    defaultValue
  };
});
const clienteScreenValidationRules = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_0__.requiredDataCliente.map(item => ({
  field: item.nombre,
  label: item.etiqueta,
  stage: 'clientehn',
  segment: item.segmentKey,
  severity: 'required',
  when: conditionalClienteRule(item.nombre)
}));
const ajustadorScreenValidationRules = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_0__.requiredDataAjustador.map(item => ({
  field: item.nombre,
  label: item.etiqueta,
  stage: 'ajustadorhn',
  segment: item.pagSegmento,
  severity: item.requerido ? 'required' : 'recommended'
}));
const ficohsaBpmValidationRules = ['Chasis', 'puntoServicio', 'Poliza', 'Certificado', 'NombreAsegurado', 'Sucursal', 'Producto', 'Ramo', 'FechaOcurrencia', 'Causa', 'ValorReserva', 'UsuarioBPM', 'Latitud', 'Longitud', 'NombreConductor', 'Genero', 'Parentesco', 'Observacion'].map(field => ({
  field,
  label: field,
  stage: 'ficohsa-bpm',
  severity: 'required'
}));
const ficohsaBpmConfirmationRules = ['IdTablaAjustador', 'CodigoBPMFicohsa', 'CodigoReclamoFicohsa'].map(field => ({
  field,
  label: field,
  stage: 'ficohsa-confirmacion',
  severity: 'required'
}));
function conditionalClienteRule(field) {
  if (field === 'UbicacionVehiculoDetenido') {
    return data => Number(data.VehiculoDetenido) === 1;
  }
  if (field === 'DescripcionTercerosHeridos') {
    return data => Number(data.TercerosHeridos) === 1;
  }
  if (field === 'DescripcionTercerosMuertos') {
    return data => Number(data.TercerosMuertos) === 1;
  }
  if (field === 'PorqueNoUsoServicioAsistencia') {
    return data => Number(data.AseguradoUsoPoliza) === 2;
  }
  return undefined;
}

/***/ }),

/***/ 29003:
/*!************************************************!*\
  !*** ./src/app/validation/claim-validation.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMissingValue": () => (/* binding */ isMissingValue),
/* harmony export */   "validateClaimStage": () => (/* binding */ validateClaimStage)
/* harmony export */ });
function isMissingValue(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'number') {
    return Number.isNaN(value);
  }
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === '' || normalized === 'undefined' || normalized === 'null';
  }
  return false;
}
function validateClaimStage(data, rules, context) {
  const validatedData = {
    ...(data || {})
  };
  const missing = [];
  const warnings = [];
  const defaults = [];
  for (const rule of rules) {
    if (rule.when && !rule.when(validatedData, context)) {
      continue;
    }
    const value = validatedData[rule.field];
    if (!isMissingValue(value)) {
      continue;
    }
    if (rule.severity === 'defaultable' && !isMissingValue(rule.defaultValue)) {
      validatedData[rule.field] = rule.defaultValue;
      defaults.push({
        field: rule.field,
        label: rule.label,
        value: rule.defaultValue
      });
      continue;
    }
    const issue = {
      field: rule.field,
      label: rule.label,
      stage: rule.stage,
      segment: rule.segment,
      severity: rule.severity,
      value
    };
    if (rule.severity === 'recommended') {
      warnings.push(issue);
    } else {
      missing.push(issue);
    }
  }
  return {
    complete: missing.length === 0,
    missing,
    warnings,
    defaults,
    data: validatedData
  };
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_environments_segments_ts-src_app_environments_vehicles_ts-src_app_services_fo-4be3a4.js.map