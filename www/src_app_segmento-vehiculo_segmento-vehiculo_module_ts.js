(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-vehiculo_segmento-vehiculo_module_ts"],{

/***/ 87216:
/*!******************************************!*\
  !*** ./src/app/environments/talleres.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Talleres": () => (/* binding */ Talleres),
/* harmony export */   "TalleresCategorias": () => (/* binding */ TalleresCategorias),
/* harmony export */   "TalleresNoFiltrados": () => (/* binding */ TalleresNoFiltrados),
/* harmony export */   "rangoAnios": () => (/* binding */ rangoAnios)
/* harmony export */ });
let now = new Date();
let thisYear = now.getFullYear();
const rangoAnios = [{
  min10: 2010,
  min14: 2014,
  min15: 2015,
  min18: 2018,
  min19: 2019,
  max: thisYear
}];
const Talleres = [{
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: null,
  tipoEquipo: null,
  NombreTaller: 'NINGUNO',
  Categoria: null,
  Id: 1
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'A',
  Id: 2
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Auto Center',
  Categoria: 'A',
  Id: 3
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'B',
  Id: 4
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'BYB Autocenter',
  Categoria: 'B',
  Id: 5
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Inversiones Galo',
  Categoria: 'C',
  Id: 6
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Auto Servicios Union',
  Categoria: 'C',
  Id: 7
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Soto Automotriz',
  Categoria: 'C',
  Id: 8
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'CAM',
  Categoria: 'C',
  Id: 9
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Express Auto Center',
  Categoria: '',
  Id: 10
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Inversiones Galo',
  Categoria: '',
  Id: 11
}];
const TalleresCategorias = [{
  categoriaId: 1,
  categoria: null
}, {
  categoriaId: 2,
  categoria: 'A'
}, {
  categoriaId: 3,
  categoria: 'B'
}, {
  categoriaId: 4,
  categoria: 'C'
}];
const TalleresNoFiltrados = [{
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: null,
  tipoEquipo: null,
  NombreTaller: 'NINGUNO',
  Categoria: null,
  Id: 1
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Auto Servicios Union',
  Categoria: 'C',
  Id: 2
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Auto Center',
  Categoria: 'A',
  Id: 3
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Autocenter',
  Categoria: 'B',
  Id: 4
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'CAM',
  Categoria: 'C',
  Id: 5
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'A',
  Id: 6
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'B',
  Id: 7
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Express Auto Center',
  Categoria: '',
  Id: 8
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Inversiones Galo',
  Categoria: '',
  Id: 9
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Inversiones Galo',
  Categoria: 'C',
  Id: 10
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Soto Automotriz',
  Categoria: 'C',
  Id: 11
}];

/***/ }),

/***/ 73586:
/*!******************************************!*\
  !*** ./src/app/environments/vehicles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 81896:
/*!***********************************************************************!*\
  !*** ./src/app/segmento-vehiculo/segmento-vehiculo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoVehiculoPageRoutingModule": () => (/* binding */ SegmentoVehiculoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_vehiculo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-vehiculo.page */ 90948);




const routes = [{
  path: '',
  component: _segmento_vehiculo_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoVehiculoPage
}];
let SegmentoVehiculoPageRoutingModule = class SegmentoVehiculoPageRoutingModule {};
SegmentoVehiculoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoVehiculoPageRoutingModule);


/***/ }),

/***/ 52287:
/*!***************************************************************!*\
  !*** ./src/app/segmento-vehiculo/segmento-vehiculo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoVehiculoPageModule": () => (/* binding */ SegmentoVehiculoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-vehiculo-routing.module */ 81896);
/* harmony import */ var _segmento_vehiculo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-vehiculo.page */ 90948);







let SegmentoVehiculoPageModule = class SegmentoVehiculoPageModule {};
SegmentoVehiculoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoVehiculoPageRoutingModule],
  declarations: [_segmento_vehiculo_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoVehiculoPage]
})], SegmentoVehiculoPageModule);


/***/ }),

/***/ 90948:
/*!*************************************************************!*\
  !*** ./src/app/segmento-vehiculo/segmento-vehiculo.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoVehiculoPage": () => (/* binding */ SegmentoVehiculoPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_vehiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-vehiculo.page.html?ngResource */ 21756);
/* harmony import */ var _segmento_vehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-vehiculo.page.scss?ngResource */ 87351);
/* harmony import */ var _segmento_vehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmento_vehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_vehicles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/vehicles */ 73586);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _environments_talleres__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/talleres */ 87216);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ 84465);











let SegmentoVehiculoPage = class SegmentoVehiculoPage {
  constructor(api, toaster) {
    var _this = this;
    this.api = api;
    this.toaster = toaster;
    this.predicate = /*#__PURE__*/function () {
      var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
        return el.getInputElement();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.idMask = {
      mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
    };
    this.idMaskFechaVencimiento = {
      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    };
    this.phoneMask = {
      mask: ['+', '(', '5', '0', '4', ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
    this.phoneMaskGuate = {
      mask: ['+', '(', '5', '0', '2', ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
    this.yearMask = {
      mask: [/\d/, /\d/, /\d/, /\d/]
    };
    this.kmMask = {
      mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    };
    this.emailMask = {
      mask: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]
    };
    this.isFirstTime = true;
    this.clickCount = 0;
    this.contadorSegmentos = 0;
    this.marcasVehiculos = _environments_vehicles__WEBPACK_IMPORTED_MODULE_3__.marcasVehiculos;
    this.modelosMarca = [];
    this.isMarca = false;
    this.isModelo = false;
    this.talleresFiltrados = [];
    this.ajustador = {};
    this.datos = [];
    this.esKilometraje = false;
    this.isLoading = false;
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {}
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : ' + idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }
    let tipoPesadoId = localStorage.getItem('elTipoPesado');
    if (tipoPesadoId) {
      this.esPesado = parseInt(tipoPesadoId.split('-')[1]);
      jquery__WEBPACK_IMPORTED_MODULE_6__("input[type='radio'][value=" + this.esPesado + "]").attr("checked", 'true').trigger("change");
      console.log('Aca se tendría que setear el tipo pesado ' + this.esPesado);
    }
    let kilometraje = localStorage.getItem('elKilometraje');
    if (kilometraje) {
      let kilometers = kilometraje.split('-')[1];
      this.elExpedienteKilometraje = parseInt(kilometers);
      this.setKilo(parseInt(kilometers));
    }
    this.api.Expediente(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('So far so good as you should know my friend what we can do....');
      //this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.elExpediente = res;
        _this.laMarcaAsegurado = _this.elExpediente[0].Marca;
        localStorage.setItem('datos-MarcaVehiculo', _this.laMarcaAsegurado);
        _this.elModeloAsegurado = _this.elExpediente[0].Modelo;
        localStorage.setItem('datos-ModeloVehiculo', _this.elModeloAsegurado);
        _this.elAnioAsegurado = _this.elExpediente[0].Year;
        localStorage.setItem('datos-AnioVehiculo', _this.elAnioAsegurado);
        _this.elChasisAsegurado = _this.elExpediente[0].Chasis;
        _this.elExpedienteSerie = _this.elExpediente[0].Chasis;
        localStorage.setItem('datos-ChasisVehiculo', _this.elChasisAsegurado);
        _this.elNumeroPlacaAsegurado = _this.elExpediente[0].NumeroPlaca;
        localStorage.setItem('datos-PlacaVehiculo', _this.elNumeroPlacaAsegurado);
        _this.laPolizaExternaAsegurado = _this.elExpediente[0].PolizaExterna;
        localStorage.setItem('datos-Poliza', _this.laPolizaExternaAsegurado);
        _this.elMotorAsegurado = _this.elExpediente[0].Motor;
        if (_this.laMarcaAsegurado) {
          for (let index = 0; index < _environments_vehicles__WEBPACK_IMPORTED_MODULE_3__.marcasVehiculos.length; index++) {
            const element = _environments_vehicles__WEBPACK_IMPORTED_MODULE_3__.marcasVehiculos[index];
            console.log(element.nombre + ', ' + _this.laMarcaAsegurado + ', ' + (element.nombre == _this.laMarcaAsegurado));
            if (element.nombre == _this.laMarcaAsegurado) {
              let elIdMarca = element.id;
              _this.modelosMarca = element.modelos;
            }
          }
          _this.isMarca = true;
          console.log('El arreglo de las marcas es ');
          console.dir(_this.marcasVehiculos);
        }
        if (_this.elAnioAsegurado) {
          localStorage.setItem('anioAsegurado', _this.elAnioAsegurado);
        }
        if (_this.elModeloAsegurado) {
          _this.isModelo = true;
        }
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  ionViewDidEnter() {
    var _this2 = this;
    setTimeout(() => {
      this.api.Expediente(parseInt(this.idAtencion)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('So far so good as you should know my friend what we can do....');
      }))).subscribe( /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));
          _this2.moneda = _this2.elExpediente[0].Moneda;
          if (_this2.moneda == null) {
            _this2.miMoneda = "LEMPIRAS";
          } else {
            _this2.miMoneda = _this2.moneda;
          }
        });
        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }());
    }, 1500);
  }
  ngOnInit() {}
  seleccionarMarca(idMarca) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    for (let index = 0; index < this.marcasVehiculos.length; index++) {
      const element = this.marcasVehiculos[index];
      if (element.id == elIndex) {
        this.elExpediente.Marca = element.nombre;
        this.modelosMarca = element.modelos;
      }
    }
  }
  seleccionarModelo(idModelo) {
    this.elExpediente.Modelo = idModelo.target.value;
    console.log(this.elExpediente.Modelo);
    console.log('Los modelos de esta marca son ');
    console.dir(this.modelosMarca);
    this.isModelo = true;
    // this.elModeloAsegurado = this.modelosMarca
    this.setAtencionActual();
  }
  editarModelo() {
    this.isModelo = false;
  }
  entrarAnio(event) {
    this.elExpediente.Year = event.target.value;
    console.log(event.target.value);
    for (let index = 0; index < _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres.length; index++) {
      const element = _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[index];
    }
    this.setAtencionActual();
  }
  entraPesado(event) {
    this.talleresFiltrados = [];
    this.esPesado = event.target.value;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString() + '-' + this.esPesado);
    //this.talleresFiltrados = Talleres;
    //this.filtrarTalleres();
    this.setAtencionActual();
  }
  filtrarTalleres() {
    if (this.esPesado == '2') {
      if (this.between(this.elExpediente[0].Year, _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.rangoAnios[0].min10, _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.rangoAnios[0].max) == true) {
        console.log(this.between(this.elExpediente[0].Year, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.rangoAnios[0].max));
        if (this.between(this.elExpediente[0].Year, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_5__.rangoAnios[0].max) == true) {
          // agregar al filtro talleres categoria A
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[0]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[1]);
        } else if (this.between(this.elExpediente[0].Year, 2015, 2018) == true) {
          // agregar al filtro talleres categoria B
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[2]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[3]);
        } else {
          // agregar al filtro talleres categoria C
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[4]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[5]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[6]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[7]);
        }
      }
    } else {
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[8]);
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_5__.Talleres[9]);
      console.dir(this.talleresFiltrados);
    }
  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
  evaluateKm(event) {
    this.ajustador.Kilometraje = event.target.value;
    this.datos['Kilometraje'] = event.target.value;
    localStorage.setItem('elKilometraje', this.idAtencion.toString() + '-' + event.target.value.toString());
    localStorage.setItem('datos-Kilometraje', this.ajustador.Kilometraje.toString());
    if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '' || this.ajustador.Kilometraje == 0) {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      this.ajustador.Kilometraje = 0;
    } else {
      this.toaster.dismissToast();
      //console.log(this.ajustador.Kilometraje);
    }

    this.esKilometraje = true;
    this.setAtencionActual();
  }
  setKilo(kilo) {
    this.ajustador.Kilometraje = kilo;
    this.datos['Kilometraje'] = kilo;
    this.esKilometraje = true;
    localStorage.setItem('elKilometraje', this.idAtencion.toString() + '-' + kilo.toString());
    localStorage.setItem('datos-Kilometraje', kilo.toString());
  }
  editarKilo() {
    this.esKilometraje = false;
  }
  clearSegmentsStorage() {
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elKilometraje');
  }
  setAtencionActual() {
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      if (this.idAtencion != idAtencionActual) {
        localStorage.setItem('atencionEnProceso', this.idAtencion);
      }
    } else {
      localStorage.setItem('atencionEnProceso', this.idAtencion);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
    }];
  }
};
SegmentoVehiculoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-segmento-vehiculo',
  template: _segmento_vehiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_segmento_vehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SegmentoVehiculoPage);


/***/ }),

/***/ 87351:
/*!**************************************************************************!*\
  !*** ./src/app/segmento-vehiculo/segmento-vehiculo.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 21756:
/*!**************************************************************************!*\
  !*** ./src/app/segmento-vehiculo/segmento-vehiculo.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-header>\r\n    <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n    <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n    \r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n        \r\n      </ion-buttons>\r\n      <ion-title>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\"></ion-col>\r\n            <ion-col size=\"6\">{{segmentoTitulo}} - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n            <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col id=\"segmentVehicleAju\" size=\"12\">\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  input\">\r\n          <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n            <ion-badge color=\"primary\">\r\n              {{segmentoTitulo}}\r\n            </ion-badge>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Marca\r\n              <ion-chip id=\"marcaSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isMarca\" id=\"marcaDisplay\" size=\"12\">{{laMarcaAsegurado}}</ion-col>\r\n              <ion-col *ngIf=\"!isMarca\" id=\"marcaDisplay\" size=\"9\">{{laMarcaAsegurado}}</ion-col>\r\n              <ion-col *ngIf=\"!isMarca\" size=\"3\" style=\"text-align: rigth;\">\r\n                <ion-select id=\"marcaId\" class=\"text-size-xs required-data\" [(ngModel)]=\"laMarcaAsegurado\" multiple=\"false\" (ionChange)=\"seleccionarMarca($event)\"\r\n                style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let marca of marcasVehiculos\" [value]=\"marca.Id\">\r\n                    {{marca.nombre}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Modelo\r\n              <ion-chip id=\"modelSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isModelo\" id=\"modeloDisplay\" size=\"12\">{{elModeloAsegurado}}</ion-col>\r\n              <!--ion-col  *ngIf=\"isModelo\" size=\"1\" style=\"text-align: rigth;\" (click)=\"editarModelo()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </!--ion-col -->\r\n\r\n              <ion-col *ngIf=\"!isModelo\" id=\"modeloDisplay\" size=\"9\">{{elModeloAsegurado}}</ion-col>\r\n              <ion-col *ngIf=\"!isModelo\" size=\"3\" style=\"text-align: rigth;\">\r\n                <ion-select id=\"marcaId\" class=\"text-size-xs required-data\" [(ngModel)]=\"elModeloAsegurado\" multiple=\"false\" (ionChange)=\"seleccionarModelo($event)\"\r\n                style=\"float: right; color: white;\">\r\n                  <ion-select-option *ngFor=\"let modelo of modelosMarca\" [value]=\"modelo\">\r\n                    {{modelo}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Año\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"elAnioAsegurado != null\" readonly [value]=\"elAnioAsegurado\"></ion-input>\r\n            <ion-input *ngIf=\"elAnioAsegurado == null\" maxlength=\"4\" [(ngModel)]=\"elAnioAsegurado\" (ionChange)=\"entrarAnio($event)\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!--ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Equipo Es Pesado?\r\n                </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"9\"></ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: right;\">\r\n                <ion-radio-group [(ngModel)]=\"esPesado\" (ionChange)=\"entraPesado($event)\">\r\n                  <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                    <ion-label style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"2\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                    <ion-label style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"1\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </!--ion-item -->\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Kilomentraje\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"esKilometraje\" size=\"11\">{{ajustador.Kilometraje}}</ion-col>\r\n              <ion-col *ngIf=\"esKilometraje\"  size=\"1\" style=\"text-align: rigth;\" (click)=\"editarKilo()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!esKilometraje\" size=\"12\">\r\n                <ion-input type=\"number\" maxlength=\"7\" [(ngModel)]=\"ajustador.Kilometraje\" placeholder=\"0\"\r\n            (ionBlur)=\"evaluateKm($event)\" class=\"required-data\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Serie/Vin\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"elExpedienteSerie\" readonly [value]=\"elChasisAsegurado\"></ion-input>\r\n                <ion-input *ngIf=\"!elExpedienteSerie\" type=\"text\" [(ngModel)]=\"elChasisAsegurado\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Placa\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"elNumeroPlacaAsegurado != null\" readonly [value]=\"elNumeroPlacaAsegurado\"></ion-input>\r\n                <ion-input *ngIf=\"elNumeroPlacaAsegurado == null\" type=\"text\" [(ngModel)]=\"elNumeroPlacaAsegurado\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              No. del motor\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"elMotorAsegurado\" readonly [value]=\"elMotorAsegurado\"></ion-input>\r\n                <ion-input *ngIf=\"!elMotorAsegurado\" type=\"text\" [(ngModel)]=\"elMotorAsegurado\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Chasis\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"elChasisAsegurado != null\" readonly [value]=\"elChasisAsegurado\"></ion-input>\r\n                <ion-input *ngIf=\"elChasisAsegurado == null || elChasisAsegurado == '' || elChasisAsegurado == 'N/D'\" type=\"text\" [(ngModel)]=\"elChasisAsegurado\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Póliza\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input *ngIf=\"laPolizaExternaAsegurado != null\" readonly [value]=\"laPolizaExternaAsegurado\"></ion-input>\r\n                <ion-input *ngIf=\"laPolizaExternaAsegurado == null || laPolizaExternaAsegurado == '' || laPolizaExternaAsegurado == 'N/D'\" type=\"text\" [(ngModel)]=\"laPolizaExternaAsegurado\" class=\"required-data\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-vehiculo_segmento-vehiculo_module_ts.js.map