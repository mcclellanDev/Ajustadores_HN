(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-caracteristicas_segmento-caracteristicas_module_ts"],{

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

/***/ 6423:
/*!*************************************************************************************!*\
  !*** ./src/app/segmento-caracteristicas/segmento-caracteristicas-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaracteristicasPageRoutingModule": () => (/* binding */ SegmentoCaracteristicasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_caracteristicas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-caracteristicas.page */ 61860);




const routes = [{
  path: '',
  component: _segmento_caracteristicas_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoCaracteristicasPage
}];
let SegmentoCaracteristicasPageRoutingModule = class SegmentoCaracteristicasPageRoutingModule {};
SegmentoCaracteristicasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoCaracteristicasPageRoutingModule);


/***/ }),

/***/ 97976:
/*!*****************************************************************************!*\
  !*** ./src/app/segmento-caracteristicas/segmento-caracteristicas.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaracteristicasPageModule": () => (/* binding */ SegmentoCaracteristicasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_caracteristicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-caracteristicas-routing.module */ 6423);
/* harmony import */ var _segmento_caracteristicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-caracteristicas.page */ 61860);







let SegmentoCaracteristicasPageModule = class SegmentoCaracteristicasPageModule {};
SegmentoCaracteristicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_caracteristicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoCaracteristicasPageRoutingModule],
  declarations: [_segmento_caracteristicas_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoCaracteristicasPage]
})], SegmentoCaracteristicasPageModule);


/***/ }),

/***/ 61860:
/*!***************************************************************************!*\
  !*** ./src/app/segmento-caracteristicas/segmento-caracteristicas.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaracteristicasPage": () => (/* binding */ SegmentoCaracteristicasPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_caracteristicas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-caracteristicas.page.html?ngResource */ 26331);
/* harmony import */ var _segmento_caracteristicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-caracteristicas.page.scss?ngResource */ 19983);
/* harmony import */ var _segmento_caracteristicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmento_caracteristicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _environments_talleres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/talleres */ 87216);
/* harmony import */ var _environments_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/vehicles */ 73586);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);












let SegmentoCaracteristicasPage = class SegmentoCaracteristicasPage {
  constructor(api, alert, toaster) {
    this.api = api;
    this.alert = alert;
    this.toaster = toaster;
    this.datos = [];
    this.talleresFiltrados = [];
    this.isLoading = false;
    this.tiposTransmision = _environments_vehicles__WEBPACK_IMPORTED_MODULE_5__.tiposTransmision;
    this.tipoCombustible = [];
    this.ajustador = {};
    this.contadorTallerOtro = 0;
    this.esTallerOtro = false;
    this.tallerCategoria = [];
    this.tallerCategoriaA = [];
    this.tallerCategoriaB = [];
    this.tallerCategoriaC = [];
    this.talleresCategorias = [];
    this.elExpediente = [];
    this.talleresTGU = [];
    this.talleresSPS = [];
    this.talleresCategorias = _environments_talleres__WEBPACK_IMPORTED_MODULE_4__.TalleresCategorias;
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.anioAsegurado = parseInt(localStorage.getItem('anioAsegurado'));
    this.esPesado = localStorage.getItem('elTipoPesado');
    let tallerId = localStorage.getItem('elTallerId');
    let tipoGrua = localStorage.getItem('elTipoGrua');
    let tallerOtro = localStorage.getItem('elTallerOtro');
    let tallerOtroDireccion = localStorage.getItem('elTallerOtroDireccion');
    let observacionesTaller = localStorage.getItem('laObservacionTaller');
    let tipoCombustibleId = localStorage.getItem('elTipoCombustibleId');
    let aireAcondicionado = localStorage.getItem('elAC');
    let bolsaAire = localStorage.getItem('elBA');
    let centralizado = localStorage.getItem('elCentra');
    let transmision = localStorage.getItem('laTransmisionId');
    let retro = localStorage.getItem('elRetrovisor');
    let over = localStorage.getItem('elOverfender');
    let cola = localStorage.getItem('laColaPato');
    let cinta = localStorage.getItem('laCinta');
    let rines = localStorage.getItem('losRines');
    let tipoPesadoId = localStorage.getItem('elTipoPesado');
    if (retro) {
      let Retrovisor = retro.split('-')[1];
      this.ajustador.Retrovisor = parseInt(Retrovisor);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.Retrovisor + "]").attr("checked", 'true').trigger("change");
      this.setRetrovisorElectronico(this.ajustador.Retrovisor);
    }
    if (over) {
      let Overfender = over.split('-')[1];
      this.ajustador.Overfenders = parseInt(Overfender);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.Overfenders + "]").attr("checked", 'true').trigger("change");
      this.setOverfenders(this.ajustador.Overfenders);
    }
    if (cola) {
      let colaPato = cola.split('-')[1];
      this.ajustador.ColaPato = parseInt(colaPato);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.ColaPato + "]").attr("checked", 'true').trigger("change");
      this.setColaPato(this.ajustador.ColaPato);
    }
    if (rines) {
      let rinesDecorativos = rines.split('-')[1];
      this.ajustador.Rines = rinesDecorativos;
      this.rinesId = parseInt(rinesDecorativos);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.rinesId + "]").attr("checked", 'true').trigger("change");
      this.setRines(this.ajustador.Rines);
    }
    if (cinta) {
      let cintaDecorativa = cinta.split('-')[1];
      this.ajustador.CintaDecorativa = parseInt(cintaDecorativa);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.CintaDecorativa + "]").attr("checked", 'true').trigger("change");
      this.setCintaDecorativa(this.ajustador.CintaDecorativa);
    }
    if (transmision) {
      let transId = transmision.split('-')[1];
      this.setMecanico(transId);
    }
    if (centralizado) {
      this.ajustador.CierreCentralizado = parseInt(centralizado.split('-')[1]);
      this.setCentralizado(this.ajustador.CierreCentralizado);
    }
    if (tipoCombustibleId) {
      this.ajustador.TipoCombustible = parseInt(tipoCombustibleId.split('-')[1]);
      setTimeout(() => {
        this.setTipoCombustible(parseInt(tipoCombustibleId.split('-')[1]));
      }, 3000);
    }
    if (tallerId) {
      let elTallerId = tallerId.split('-')[1];
      console.log('Este Id de taller ' + tallerId + ', ' + elTallerId) + ', ' + (parseInt(elTallerId) + 1);
      this.datos.TallerMecanicoId = parseInt(elTallerId);
      localStorage.setItem('datos-TallerMecanicoId', elTallerId);
      setTimeout(() => {
        this.setTaller(parseInt(elTallerId));
      }, 3000);
      /**/
    }

    if (aireAcondicionado) {
      this.datos.AC = aireAcondicionado.split('-')[1];
      this.ajustador.AC = parseInt(this.datos.AC);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.AC + "]").attr("checked", 'true').trigger("change");
      this.setAC(aireAcondicionado.split('-')[1]);
    }
    if (bolsaAire) {
      this.datos.BolsasAire = bolsaAire.split('-')[1];
      this.ajustador.BolsasAire = parseInt(this.datos.BolsasAire);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.ajustador.BolsasAire + "]").attr("checked", 'true').trigger("change");
      this.setBolsaAire(bolsaAire.split('-')[1]);
    }
    if (observacionesTaller) {
      this.datos.ObservacionesTaller = observacionesTaller.split('-')[1];
      this.setObservacionesTaller(observacionesTaller.split('-')[1]);
    }
    if (tallerOtro) {
      this.tallerOtro = tallerOtro.split('-')[1];
      this.setTallerOtro(this.tallerOtro);
    }
    if (tallerOtroDireccion) {
      this.tallerOtroDireccion = tallerOtroDireccion.split('-')[1];
      this.setDireccionTallerOtro(this.tallerOtroDireccion);
    }
    if (this.anioAsegurado && this.esPesado) {
      //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    }
    if (tipoGrua) {
      let tipoId = tipoGrua.split('-')[1];
      this.tipoGrua = parseInt(tipoId);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.tipoGrua + "]").attr("checked", 'true').trigger("change");
      this.setTipoGrua(parseInt(tipoId));
    }
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : ' + idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {}
    let trasladoGrua = localStorage.getItem('elTraslado');
    if (trasladoGrua) {
      this.esTraslado = parseInt(trasladoGrua.split('-')[1]);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.esTraslado + "]").attr("checked", 'true').trigger("change");
    }
    if (tipoPesadoId) {
      this.esPesado = parseInt(tipoPesadoId.split('-')[1]);
      console.log('Aja pesado ' + tipoPesadoId);
      console.log('Pesado el vehiculo ' + this.esPesado);
      jquery__WEBPACK_IMPORTED_MODULE_7__("input[type='radio'][value=" + this.esPesado + "]").attr("checked", 'true').trigger("change");
      //this.setPesado(this.esPesado);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.getTipoCombustible();
    }, 2000);
  }
  ionViewDidEnter() {
    var _this = this;
    setTimeout(() => {
      this.api.Expediente(parseInt(this.idAtencion)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('So far so good as you should know my friend what we can do....');
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));
          _this.moneda = _this.elExpediente[0].Moneda;
          _this.ciudad = _this.elExpediente[0].Ciudad;
          localStorage.setItem('ciudadAtencion', _this.ciudad ? _this.ciudad.toString() : '');
          if (_this.moneda == null) {
            _this.miMoneda = "LEMPIRAS";
          } else {
            _this.miMoneda = _this.moneda;
          }
          _this.getTalleres();
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }, 1500);
  }
  normalizarCiudad(ciudad) {
    return (ciudad ? ciudad.toString() : '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase();
  }
  esCiudadTegucigalpa(ciudad) {
    const ciudadNormalizada = this.normalizarCiudad(ciudad);
    return ciudadNormalizada.indexOf('TEGUCIGALPA') >= 0 || ciudadNormalizada.indexOf('DISTRITO CENTRAL') >= 0;
  }
  talleresPorCiudad() {
    return this.esCiudadTegucigalpa(this.ciudad) ? this.talleresTGU : this.talleresSPS;
  }
  entraTraslado(event) {
    this.esTraslado = event.target.value;
    localStorage.setItem('elTraslado', this.idAtencion.toString() + '-' + this.esTraslado);
    this.setAtencionActual();
  }
  entraGrua(event) {
    this.tipoGrua = event.target.value;
    localStorage.setItem('elTipoGrua', this.idAtencion.toString() + '-' + this.tipoGrua);
    this.setAtencionActual();
  }
  setTipoGrua(tipo) {
    this.tipoGrua = tipo;
    localStorage.setItem('elTipoGrua', this.idAtencion.toString() + '-' + this.tipoGrua);
    this.setAtencionActual();
  }
  clearSegmentsStorage() {
    localStorage.removeItem('elTraslado');
    localStorage.removeItem('elTipoGrua');
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elTallerId');
    localStorage.removeItem('elTallernombre');
    localStorage.removeItem('elTallerOtro');
    localStorage.removeItem('elTallerOtroDireccion');
    localStorage.removeItem('laObservacionTaller');
    localStorage.removeItem('elTipoCombustibleId');
    localStorage.removeItem('elTipoCombustible');
    localStorage.removeItem('elAC');
    localStorage.removeItem('elBA');
    localStorage.removeItem('elCentra');
    localStorage.removeItem('laTransmisionId');
    localStorage.removeItem('elRetrovisor');
    localStorage.removeItem('elOverfender');
    localStorage.removeItem('laColaPato');
    localStorage.removeItem('laCinta');
    localStorage.removeItem('losRines');
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
  entraTaller(event) {
    this.talleresFiltrados = this.talleresPorCiudad();
    //alert('Taller seleccionado : '+event.target.value);
    this.datos.TallerMecanicoId = event.target.value;
    this.datos['TallerMecanicoId'] = event.target.value;
    localStorage.setItem('datos-TallerMecanicoId', event.target.value);
    if (event.target.value == 1) {
      this.esTallerOtro = true;
    } else {
      this.esTallerOtro = false;
    }
    console.log(this.tallerOtro);
    console.log(event.target.value);
    console.dir(this.talleresFiltrados);
    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];
      if (element.Id == event.target.value) {
        this.tallerNombreDisplay = element.NombreTaller;
        //alert('Taller seleccionado : '+this.tallerNombreDisplay);
        localStorage.setItem('elTallerId', this.idAtencion.toString() + '-' + event.target.value);
        localStorage.setItem('elTallernombre', this.idAtencion.toString() + '-' + this.tallerNombreDisplay);
      }
    }
  }
  setTaller(tallerId) {
    this.talleresFiltrados = this.talleresPorCiudad();
    this.datos.TallerMecanicoId = tallerId;
    if (tallerId == 1) {
      this.esTallerOtro = true;
    } else {
      this.esTallerOtro = false;
    }
    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];
      if (element.Id == tallerId) {
        this.tallerNombreDisplay = element.NombreTaller;
        localStorage.setItem('elTallerId', this.idAtencion.toString() + '-' + tallerId);
        localStorage.setItem('elTallernombre', this.idAtencion.toString() + '-' + this.tallerNombreDisplay);
      }
    }
    /* */
  }

  entraTallerOtro(OtrosTalleres) {
    localStorage.setItem('OtrosTalleres', OtrosTalleres);
    localStorage.setItem('elTallerOtro', this.idAtencion.toString() + '-' + this.tallerOtro);
  }
  setTallerOtro(taller) {}
  entraTallerOtroDireccion(event) {
    this.tallerOtroDireccion = event.target.value;
    console.log(this.tallerOtroDireccion);
    localStorage.setItem('elTallerOtroDireccion', this.idAtencion.toString() + '-' + this.tallerOtroDireccion);
  }
  setDireccionTallerOtro(direccion) {
    this.tallerOtroDireccion = direccion;
    localStorage.setItem('elTallerOtroDireccion', this.idAtencion.toString() + '-' + this.tallerOtroDireccion);
  }
  entraObservacionesTaller(event) {
    this.datos['ObservacionesTaller'] = event.target.value;
    localStorage.setItem('laObservacionTaller', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-ObservacionTaller', event.target.value);
  }
  setObservacionesTaller(observaciones) {
    this.datos['ObservacionesTaller'] = observaciones;
    localStorage.setItem('laObservacionTaller', this.idAtencion.toString() + '-' + observaciones);
    localStorage.setItem('datos-ObservacionTaller', observaciones);
  }
  getTipoCombustible() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = true;
      _this2.api.ListTipoCombustible().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.tipoCombustible = res;
          console.log("Tipos de combustible : ");
          console.dir(_this2.tipoCombustible);
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this2.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  entraTipoCombustible(event) {
    this.datos.RefTipoCombustibleId = event.target.value;
    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == event.target.value) {
        this.tipoDeCombustible = element.TipoCombustible;
        localStorage.setItem('elTipoCombustibleId', this.idAtencion.toString() + '-' + event.target.value);
        localStorage.setItem('elTipoCombustible', this.idAtencion.toString() + '-' + this.tipoDeCombustible);
        localStorage.setItem('datos-RefTipoCombustibleId', event.target.value);
      }
    }
  }
  setTipoCombustible(tipo) {
    this.datos.RefTipoCombustibleId = tipo;
    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == tipo) {
        this.tipoDeCombustible = element.TipoCombustible;
        localStorage.setItem('elTipoCombustibleId', this.idAtencion.toString() + '-' + tipo);
        localStorage.setItem('elTipoCombustible', this.idAtencion.toString() + '-' + this.tipoDeCombustible);
        localStorage.setItem('datos-RefTipoCombustibleId', tipo);
      }
    }
  }
  entraAC(event) {
    this.datos.AC = event.target.value;
    localStorage.setItem('elAC', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-AC', event.target.value);
  }
  setAC(ac) {
    this.datos.AC = ac;
    localStorage.setItem('elAC', this.idAtencion.toString() + '-' + ac);
    localStorage.setItem('datos-AC', ac);
  }
  entraBolsaAire(event) {
    this.datos.BolsaAire = event.target.value;
    localStorage.setItem('elBA', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-BolsaAire', event.target.value);
  }
  setBolsaAire(ba) {
    this.datos.BolsaAire = ba;
    localStorage.setItem('elBA', this.idAtencion.toString() + '-' + ba);
    localStorage.setItem('datos-BolsaAire', ba);
  }
  entraCierreCentralizado(event) {
    this.datos.CierreCentralizado = event.target.value;
    this.ajustador.CierreCentralizado = event.target.value;
    localStorage.setItem('elCentra', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-CierreCentralizado', event.target.value);
  }
  setCentralizado(centra) {
    this.datos.CierreCentralizado = centra;
    this.ajustador.CierreCentralizado = centra;
    localStorage.setItem('elCentra', this.idAtencion.toString() + '-' + centra);
    localStorage.setItem('datos-CierreCentralizado', centra);
  }
  entraMecanico(event) {
    //this.dataAppend.Mecanico = event.target.value;
    this.datos.Mecanico = event.target.value;
    this.ajustador.Transmicion = event.target.value;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == event.target.value) {
        this.tipotransmision = element.nombre;
        localStorage.setItem('laTransmisionId', this.idAtencion.toString() + '-' + event.target.value);
        localStorage.setItem('laTransmision', this.idAtencion.toString() + '-' + element.nombre);
        if (element.id == 'tr01') {
          localStorage.setItem('datos-Mecanico', '1');
        } else {
          localStorage.setItem('datos-Mecanico', '0');
        }
      }
    }
  }
  setMecanico(mecanico) {
    this.datos.Mecanico = mecanico;
    this.ajustador.Transmicion = mecanico;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == mecanico) {
        this.tipotransmision = element.nombre;
        localStorage.setItem('laTransmisionId', this.idAtencion.toString() + '-' + mecanico);
        localStorage.setItem('laTransmision', this.idAtencion.toString() + '-' + element.nombre);
        if (element.id == 'tr01') {
          localStorage.setItem('datos-Mecanico', '1');
        } else {
          localStorage.setItem('datos-Mecanico', '0');
        }
      }
    }
  }
  entraRetrovisorElectronico(event) {
    this.datos.RetrovisorElectronico = event.target.value;
    this.ajustador.Retrovisor = event.target.value;
    localStorage.setItem('elRetrovisor', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-RetrovisorElectronico', event.target.value);
  }
  setRetrovisorElectronico(retro) {
    this.datos.RetrovisorElectronico = retro;
    this.ajustador.Retrovisor = retro;
    localStorage.setItem('elRetrovisor', this.idAtencion.toString() + '-' + retro);
    localStorage.setItem('datos-RetrovisorElectronico', retro);
  }
  entraOverfenders(event) {
    this.datos.Overfenders = event.target.value;
    this.ajustador.Overfenders = event.target.value;
    localStorage.setItem('elOverfender', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-Overfenders', event.target.value);
  }
  setOverfenders(over) {
    this.datos.Overfenders = over;
    this.ajustador.Overfenders = over;
    localStorage.setItem('elOverfender', this.idAtencion.toString() + '-' + over);
    localStorage.setItem('datos-Overfenders', over);
  }
  entraColaPato(event) {
    this.datos.ColaPato = event.target.value;
    this.ajustador.ColaPato = event.target.value;
    localStorage.setItem('laColaPato', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-ColaPato', event.target.value);
  }
  setColaPato(cola) {
    this.datos.ColaPato = cola;
    this.ajustador.ColaPato = cola;
    localStorage.setItem('laColaPato', this.idAtencion.toString() + '-' + cola);
    localStorage.setItem('datos-ColaPato', cola);
  }
  entraCintaDecorativa(event) {
    this.datos.CintaDecorativa = event.target.value;
    this.ajustador.CintaDecorativa = event.target.value;
    localStorage.setItem('laCinta', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-CintaDecorativa', event.target.value);
  }
  setCintaDecorativa(cinta) {
    this.datos.CintaDecorativa = cinta;
    this.ajustador.CintaDecorativa = cinta;
    localStorage.setItem('laCinta', this.idAtencion.toString() + '-' + cinta);
    localStorage.setItem('datos-CintaDecorativa', cinta);
  }
  entraRines(event) {
    let rinesTipo;
    this.datos.Rines = event.target.value;
    this.ajustador.Rines = event.target.value;
    this.rinesId = parseInt(event.target.value);
    localStorage.setItem('losRines', this.idAtencion.toString() + '-' + event.target.value);
    if (this.rinesId == 1) {
      rinesTipo = 'De Lujo';
    } else {
      rinesTipo = 'Convencionales';
    }
    localStorage.setItem('datos-Rines', rinesTipo);
  }
  setRines(rines) {
    let rinesTipo;
    let rinesId = parseInt(rines);
    this.datos.Rines = rinesId;
    this.ajustador.Rines = rines;
    this.rinesId = rinesId;
    localStorage.setItem('losRines', this.idAtencion.toString() + '-' + rines);
    if (rinesId == 1) {
      rinesTipo = 'De Lujo';
    } else {
      rinesTipo = 'Convencionales';
    }
    localStorage.setItem('datos-Rines', rinesTipo);
  }
  entraPesado(event) {
    this.esPesado = event.target.value;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString() + '-' + this.esPesado);
    //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    this.setAtencionActual();
  }
  setPesado(pesado) {
    this.esPesado = pesado;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString() + '-' + this.esPesado);
    //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    this.setAtencionActual();
  }
  filtrarTalleres(anio, pesado) {
    this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[0]);
    if (pesado == '2') {
      if (this.between(anio, _environments_talleres__WEBPACK_IMPORTED_MODULE_4__.rangoAnios[0].min10, _environments_talleres__WEBPACK_IMPORTED_MODULE_4__.rangoAnios[0].max) == true) {
        console.log(this.between(anio, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_4__.rangoAnios[0].max));
        if (this.between(anio, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_4__.rangoAnios[0].max) == true) {
          // agregar al filtro talleres categoria A
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[1]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[2]);
        } else if (this.between(anio, 2015, 2018) == true) {
          // agregar al filtro talleres categoria B
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[3]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[4]);
        } else {
          // agregar al filtro talleres categoria C
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[5]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[6]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[7]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[8]);
        }
      }
    } else {
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[9]);
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_4__.Talleres[10]);
      console.dir(this.talleresFiltrados);
    }
  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
  getTalleres() {
    var _this3 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //alert('obteniendo los talleres');
      _this3.talleresTGU = [];
      _this3.talleresSPS = [];
      _this3.talleresFiltrados = [];
      _this3.api.ListTalleres().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref7 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log('Los talleres');
          console.dir(res);
          //alert('Mi ciudad es '+this.ciudad);
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            const esTallerSinCiudad = !element.Ciudad || element.Id == 1;
            if (esTallerSinCiudad) {
              _this3.talleresTGU.push(element);
              _this3.talleresSPS.push(element);
              continue;
            }
            if (_this3.esCiudadTegucigalpa(element.Ciudad)) {
              _this3.talleresTGU.push(element);
            } else {
              _this3.talleresSPS.push(element);
            }
            /*
            if (mismaCiudad == true && element.Ciudad == 'TEGUCIGALPA') {
              this.talleresFiltrados.push(element);
            }else{
              console.log('Comparando ciudad '+element.Ciudad+' con TEGUCIGALPA');
              console.log('Es la misma ciudad ? '+mismaCiudad+', Resultado de la comparación : '+(element.Ciudad == 'TEGUCIGALPA'));
              
              if (mismaCiudad == false && element.Ciudad != 'TEGUCIGALPA') {
                this.talleresFiltrados.push(element);
              }
            }
            */
          }

          _this3.talleresFiltrados = _this3.talleresPorCiudad();
        });
        return function (_x4) {
          return _ref7.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this3.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x5) {
          return _ref8.apply(this, arguments);
        };
      }());
      /*
      setTimeout(() => {
        this.talleresFiltrados = Talleres;
      }, 1000);
      
        
      for (let indexT = 0; indexT < this.talleresFiltrados.length; indexT++) {
        const elementT = this.talleresFiltrados[indexT];
        if (elementT.Categoria == 'A') {
          this.tallerCategoriaA.push(elementT);
        }
        if (elementT.Categoria == 'B') {
          this.tallerCategoriaB.push(elementT);
        }
        if (elementT.Categoria == 'C') {
          this.tallerCategoriaC.push(elementT);
        }
        if (elementT.Categoria == '') {
          this.tallerCategoria.push(elementT);
        }
        //alert(elementT.NombreTaller)
      }
            
      
      */
    })();
  }

  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }];
  }
};
SegmentoCaracteristicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-segmento-caracteristicas',
  template: _segmento_caracteristicas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_segmento_caracteristicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SegmentoCaracteristicasPage);


/***/ }),

/***/ 19983:
/*!****************************************************************************************!*\
  !*** ./src/app/segmento-caracteristicas/segmento-caracteristicas.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\nion-footer {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n.select-label {\n  text-transform: uppercase;\n}", "",{"version":3,"sources":["webpack://./src/app/segmento-caracteristicas/segmento-caracteristicas.page.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACN;;AAGE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAN;;AAIE;EACE,yBAAA;AADJ","sourcesContent":["ion-spinner{\r\n    position: fixed;\r\n      top: 28%;\r\n      left: 40%;\r\n      z-index: 999;\r\n      width: 20%;\r\n      height: 20%;\r\n    //background-color: #00213f;\r\n  }\r\n  \r\n  ion-footer{\r\n    position: fixed;\r\n      background: black;\r\n      opacity: 0.6;\r\n      height: 100vh;\r\n      width: 100vw;\r\n      z-index: 900;\r\n      bottom: 0;\r\n  }\r\n\r\n\r\n  .select-label{\r\n    text-transform: uppercase;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26331:
/*!****************************************************************************************!*\
  !*** ./src/app/segmento-caracteristicas/segmento-caracteristicas.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">{{segmentoTitulo}} - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col id=\"segmentInfoAju\" size=\"12\">\r\n\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  input\">\r\n          <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n            <ion-badge color=\"primary\">\r\n              {{segmentoTitulo}}\r\n            </ion-badge> \r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Fue el vehículo Trasladado En Grúa?\r\n                </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"9\"></ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: right;\">\r\n                <ion-radio-group [(ngModel)]=\"esTraslado\" (ionChange)=\"entraTraslado($event)\">\r\n                  <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                    <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"2\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                    <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"1\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de Grúa\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"tipoGrua\" (ionChange)=\"entraGrua($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\">Ninguna</ion-label>&nbsp;<ion-radio [value]=\"0\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\">Liviana</ion-label>&nbsp;<ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\">Pesada (Mayor de 3.5 toneladas)</ion-label>&nbsp;<ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Vehículo es Equipo Pesado?\r\n                </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"9\"></ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: right;\">\r\n                <ion-radio-group [(ngModel)]=\"esPesado\" (ionChange)=\"entraPesado($event)\">\r\n                  <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                    <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"2\"></ion-radio>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                    <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                    <ion-radio [value]=\"1\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Si el vehículo se encuentra en un taller, seleccione uno.\r\n              <ion-chip id=\"tallerSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"tallerDisplay\" size=\"9\" class=\"select-label\">{{tallerNombreDisplay}}</ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-select #tallerSelect class=\"text-size-xs\" [(ngModel)]=\"datos.TallerMecanicoId\" multiple=\"false\" \r\n                style=\"float: right;color: white;\" (ionChange)=\"entraTaller($event)\">\r\n                  <ion-select-option *ngFor=\"let taller of talleresFiltrados\" [value]=\"taller.Id\">\n                    <strong> {{taller.NombreTaller}} </strong>, Categoría {{taller.Categoria}}\n                  </ion-select-option>\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid style=\"width: 100%;\">\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Taller/Agencia no registrado o Lugar donde se trasladó el vehículo.\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input type=\"text\" [(ngModel)]=\"tallerOtro\" (ionBlur)=\"entraTallerOtro(tallerOtro)\" class=\"select-label\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Ubicación del taller.\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input type=\"text\" [(ngModel)]=\"tallerOtroDireccion\" (ionChange)=\"entraTallerOtroDireccion($event)\" class=\"select-label\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Observaciones Para el Taller\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-input [(ngModel)]=\"datos.ObservacionesTaller\" (ionChange)=\"entraObservacionesTaller($event)\" class=\"select-label\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de combustible\r\n              <ion-chip id=\"fuelTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"tipoCombustibleDisplay\" size=\"9\" class=\"select-label\">{{tipoDeCombustible}}</ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-select class=\"text-size-xs required-data\" [(ngModel)]=\"ajustador.TipoCombustible\" multiple=\"false\" (ionChange)=\"entraTipoCombustible($event)\"\r\n                style=\"float: right;color: white;\">\r\n                  <ion-select-option *ngFor=\"let tipo of tipoCombustible\"  [value]=\"tipo.Id\" style=\"color: white;\">{{tipo.TipoCombustible}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Aire Acondicionado\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.AC\" (ionChange)=\"entraAC($event)\" class=\"required-data\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Bolsas de Aire\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.BolsasAire\" (ionChange)=\"entraBolsaAire($event)\" class=\"required-data\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Cierre centralizado\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.CierreCentralizado\" (ionChange)=\"entraCierreCentralizado($event)\"\r\n            class=\"required-data\">\r\n              <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                <ion-radio [value]=\"2\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                <ion-radio [value]=\"1\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de transmisión\r\n              <ion-chip id=\"misionTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"tiposTransmisionDisplay\" size=\"9\" class=\"select-label\">{{tipotransmision}}</ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-select class=\"text-size-xs\" [(ngModel)]=\"ajustador.Transmicion\" multiple=\"false\" (ionChange)=\"entraMecanico($event)\"\r\n                class=\"required-data\" style=\"float: right;color: white;\">\r\n                  <ion-select-option *ngFor=\"let transmision of tiposTransmision\" [value]=\"transmision.id\">{{transmision.nombre}}</ion-select-option>\r\n                  \r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Retrovisores eléctricos\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.Retrovisor\" (ionChange)=\"entraRetrovisorElectronico($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Overfenders\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.Overfenders\" (ionChange)=\"entraOverfenders($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Cola de pato\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.ColaPato\" (ionChange)=\"entraColaPato($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Cinta decorativa\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"ajustador.CintaDecorativa\" (ionChange)=\"entraCintaDecorativa($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">No</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Si</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-no-padding  input\">\r\n              \r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Rines\r\n                </ion-row>\r\n            <ion-row style=\"float: right;\">\r\n              <ion-radio-group [(ngModel)]=\"rinesId\" (ionChange)=\"entraRines($event)\">\r\n                <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">Convencionales</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"2\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                  <ion-label color=\"primary\" style=\"margin-left:5px\">De Lujo</ion-label>&nbsp;\r\n                  <ion-radio [value]=\"1\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-caracteristicas_segmento-caracteristicas_module_ts.js.map