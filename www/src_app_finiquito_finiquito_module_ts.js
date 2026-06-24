(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_finiquito_finiquito_module_ts"],{

/***/ 94153:
/*!********************************************!*\
  !*** ./src/app/environments/calendario.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendarTitles": () => (/* binding */ calendarTitles),
/* harmony export */   "meses": () => (/* binding */ meses)
/* harmony export */ });
const meses = [{
  mes: 'Enero'
}, {
  mes: 'Febrero'
}, {
  mes: 'Marzo'
}, {
  mes: 'Abril'
}, {
  mes: 'Mayo'
}, {
  mes: 'Junio'
}, {
  mes: 'Julio'
}, {
  mes: 'Agosto'
}, {
  mes: 'Septiembre'
}, {
  mes: 'Octubre'
}, {
  mes: 'Noviembre'
}, {
  mes: 'Diciembre'
}];
const calendarTitles = [{
  title: 'Fecha Desde'
}, {
  title: 'Fecha Hasta'
}, {
  title: 'Fecha Del Cheque'
}];

/***/ }),

/***/ 57729:
/*!*******************************************************!*\
  !*** ./src/app/finiquito/finiquito-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoPageRoutingModule": () => (/* binding */ FiniquitoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _finiquito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finiquito.page */ 32835);




const routes = [{
  path: '',
  component: _finiquito_page__WEBPACK_IMPORTED_MODULE_0__.FiniquitoPage
}];
let FiniquitoPageRoutingModule = class FiniquitoPageRoutingModule {};
FiniquitoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FiniquitoPageRoutingModule);


/***/ }),

/***/ 64093:
/*!***********************************************!*\
  !*** ./src/app/finiquito/finiquito.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoPageModule": () => (/* binding */ FiniquitoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _finiquito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finiquito-routing.module */ 57729);
/* harmony import */ var _finiquito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finiquito.page */ 32835);







let FiniquitoPageModule = class FiniquitoPageModule {};
FiniquitoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _finiquito_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiniquitoPageRoutingModule],
  declarations: [_finiquito_page__WEBPACK_IMPORTED_MODULE_1__.FiniquitoPage]
})], FiniquitoPageModule);


/***/ }),

/***/ 32835:
/*!*********************************************!*\
  !*** ./src/app/finiquito/finiquito.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoPage": () => (/* binding */ FiniquitoPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _finiquito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finiquito.page.html?ngResource */ 78816);
/* harmony import */ var _finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finiquito.page.scss?ngResource */ 35921);
/* harmony import */ var _finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _environments_exchange_rate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/exchange-rate */ 72196);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);















let FiniquitoPage = class FiniquitoPage {
  constructor(platform, toaster, api, alertController, router) {
    this.platform = platform;
    this.toaster = toaster;
    this.api = api;
    this.alertController = alertController;
    this.router = router;
    this.acuerdoFiniquito = [];
    this.finiquitoCompleto = false;
    this.isInit = false;
    this.datosAtencion = [];
    this.ya = false;
    this.bchUsdReference = _environments_exchange_rate__WEBPACK_IMPORTED_MODULE_8__.bchUsdReference;
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_9__('#scrollIcon').fadeIn('xslow');
    }, 2000);
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    //  let daDate = this.acuerdoFiniquito.FechaRegistro;
    //  this.dia = daDate.split('T')[0].substring(8,10);
    //  this.mes = daDate.split('T')[0].substring(5,7);
    //  this.anio = daDate.split('T')[0].substring(0,4);
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_7__.meses[this.mesPie].mes + ' de ' + this.anioPie;
    //console.log((this.diaPie)+ ' días'+' del mes de '+ meses[this.mesPie].mes+' de '+this.anioPie,'fecha siniestro');
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width() - 90;
    } else {
      this.deviceWidth = this.platform.width() - 100;
    }
    /*
    {
    "NumeroReclamo": "string", // despues de crear el reclamo
    "FechaDesde": "2023-11-14T19:55:55.849Z", // Input directo
    "FechaHasta": "2023-11-14T19:55:55.849Z", // Input directo
    "NombreCliente": "string", // de la info del asegurado
    "TipoCoberturaFicohsa": "string", // Input directo
    "FechaFirma": "2023-11-14T19:55:55.849Z", // Input directo
    "FirmaCliente": "string", // Desde el canvas
    "NombreQuienRecibe": "string", // Input directo
    "IdentidadQuienRecibe": "string", // Input directo
    "NumeroCheque": "string", // Input directo
    "FechaDelCheque": "2023-11-14T19:55:55.849Z", // Input directo
    "ValorDelCheque": 0, // Input directo
    "NombreAFavor": "string", // Input directo
    "Poliza": "string", // de la info del asegurado
    "RefAtencionId": 0, // de la info del asegurado
    "Marca": "string", // de la info del asegurado
    "Modelo": "string", // de la info del asegurado
    "Anio": 0, // de la info del asegurado
    "Placa": "string", // de la info del asegurado
    "Chasis": "string", // de la info del asegurado
    "Motor": "string" // de la info del asegurado
    }
    */
    this.acuerdoFiniquito = JSON.parse(localStorage.getItem('elFiniquito') || '{}') || {};
    this.fechaDesde = this.acuerdoFiniquito.FechaDesde?.split('T')[0] || '';
    this.fechaHasta = this.acuerdoFiniquito.FechaHasta?.split('T')[0] || '';
    this.idAtencion = localStorage.getItem('idAtencion');
    this.finiquitoCompleto = localStorage.getItem(`finiquitoEnviado-${this.idAtencion}`) === 'true';
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_6__.logoFicohsa;
  }
  ngOnInit() {
    var _this = this;
    this.idBeneficiarioTipo = Number(this.acuerdoFiniquito.beneficiarioTipo);
    this.tipoDeBeneficiario = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_3__.tipoBeneficiario[this.idBeneficiarioTipo - 1]?.etiqueta || 'beneficiario';
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        this.expediente = res;
        this.moneda = this.expediente[0].Moneda;
        this.fechaSiniestro = this.expediente[0].FechaRegistro;
        console.log('Obtengamos la fecha pues ');
        let daDate = new Date(this.fechaSiniestro); // Temporalmente la fecha actual del sistema
        console.log(daDate);
        this.dia = daDate.getDate();
        this.mes = daDate.getMonth();
        this.anio = daDate.getFullYear();
        console.log(_environments_calendario__WEBPACK_IMPORTED_MODULE_7__.meses[this.mes].mes);
        this.fechaParrafo = this.dia + ' de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_7__.meses[this.mes].mes + ' de ' + this.anio;
        //alert(this.moneda)
        if (this.moneda == null) {
          this.miMoneda = "LEMPIRAS";
        } else {
          this.miMoneda = this.moneda;
        }
      });
      this.api.DatosDeAtencion(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        this.datosAtencion = res;
        this.CodigoReclamo = this.datosAtencion[0].CodigoReclamoFicohsa;
        this.TipoCoberturaFicohsa = this.datosAtencion[0].TipoAcuerdoFicohsa;
        //alert(this.moneda)
        if (this.moneda == null) {
          this.miMoneda = "LEMPIRAS";
        } else {
          this.miMoneda = this.moneda;
        }
      });
    }
  }
  ionViewWillEnter() {
    this.beneficiarySignature = localStorage.getItem(this.signatureStorageKey);
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  get isDollarPolicy() {
    const currency = (this.moneda || this.miMoneda || '').toString().trim().toUpperCase();
    return currency.includes('DOLAR') || currency.includes('DÓLAR') || currency.includes('USD') || currency === '$';
  }
  get signatureStorageKey() {
    return `finiquitoSignature-${this.idAtencion}`;
  }
  goBeneficiarySignature() {
    this.router.navigate(['./finiquito-signature']);
  }
  confirmarEnvio() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.beneficiarySignature) {
        _this2.toaster.presentToastNoButtonsRed("El beneficiario debe firmar antes de enviar el finiquito.", "top", "firma");
        return;
      }
      const alert = yield _this2.alertController.create({
        cssClass: 'form-choice-alert',
        header: 'Confirmar envío',
        subHeader: `Atención #${_this2.idAtencion}`,
        message: 'Verifica que los datos del finiquito sean correctos. Después de enviarlo, el documento quedará registrado con esta firma.',
        buttons: [{
          text: 'Revisar nuevamente',
          role: 'cancel'
        }, {
          text: 'Sí, enviar',
          role: 'confirm',
          handler: () => _this2.testSave()
        }]
      });
      yield alert.present();
    })();
  }
  testSave() {
    this.isLoading = true;
    this.acuerdoFiniquito.FirmaCliente = this.beneficiarySignature.split(',')[1];
    this.guardarFiniquito();
  }
  guardarFiniquito() {
    var _this3 = this;
    this.acuerdoFiniquito.TipoCoberturaFicohsa = localStorage.getItem('tipoCobertura');
    this.acuerdoFiniquito.NombreAFavor = localStorage.getItem('NombreAFavor');
    this.acuerdoFiniquito.IdentidadQuienRecibe = localStorage.getItem('IdentidadQuienRecibe');
    this.acuerdoFiniquito.NombreQuienRecibe = localStorage.getItem('NombreQuienRecibe');
    this.acuerdoFiniquito.ValorDelCheque = localStorage.getItem('ValorDelCheque');
    this.acuerdoFiniquito.NumeroCheque = localStorage.getItem('NumeroCheque');
    this.acuerdoFiniquito.NumeroReclamo = this.CodigoReclamo;
    this.acuerdoFiniquito.TipoCoberturaFicohsa = this.TipoCoberturaFicohsa;
    console.dir(this.acuerdoFiniquito);
    //alert(this.CodigoReclamo)
    if (!this.CodigoReclamo?.toString().trim()) {
      this.toaster.presentToastNoButtonsRed("Esta atención aún no ha sido completada y no cumple los requisitos para generar un finiquito.", "top", "finiquito");
      this.isLoading = false;
    } else {
      this.api.insertarFiniquitoManual(this.acuerdoFiniquito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.isLoading = false)).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.ya = true;
          _this3.finiquitoCompleto = true;
          localStorage.setItem(`finiquitoEnviado-${_this3.idAtencion}`, 'true');
          localStorage.removeItem(_this3.signatureStorageKey);
          _this3.toaster.presentToastNoButtons('Finiquito guardado exitosamente.', 'middle', 'finiquito');
          console.log('Esto viene del finiquito');
          console.dir(res);
        });
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), error => {
        this.toaster.presentToastNoButtonsRed(error?.error?.Message || 'No fue posible enviar el finiquito. Intenta nuevamente.', 'top', 'finiquito');
      });
      /**/
    }
  }

  goExpediente() {
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: this.atencionId || Number(this.idAtencion),
        Source: 1
      }
    });
  }
  printPdf() {
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/Finiquitomanualporliquidacion/';
    if (this.finiquitoCompleto == true) {
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl + parseInt(this.idAtencion), '_blank');
    } else {
      this.toaster.presentToastNoButtons('Debes guardar el finiquito firmado antes de imprimirlo.', 'middle', 'deuda');
    }
  }
  scrollToElement() {
    jquery__WEBPACK_IMPORTED_MODULE_9__('#ele').animate({
      scrollTop: 600
    }, 5000);
  }
  onScroll(event) {
    //alert('hey vo')
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_9__('#scrollIcon').fadeOut('xslow');
    }, 3000);
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }];
  }
};
FiniquitoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-finiquito',
  template: _finiquito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FiniquitoPage);


/***/ }),

/***/ 35921:
/*!**********************************************************!*\
  !*** ./src/app/finiquito/finiquito.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --finiquito-blue: #0764d8;\n  --finiquito-ink: #16375d;\n  --finiquito-muted: #607792;\n  --finiquito-line: #d5e1ed;\n  --finiquito-surface: #f4f7fa;\n}\n\nion-toolbar {\n  --background: var(--finiquito-blue);\n  --color: #ffffff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-align: center;\n}\n\nion-back-button {\n  --color: #ffffff;\n}\n\n.finiquito-page {\n  --background: #eef3f7;\n}\n\n.finiquito-loading {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.78);\n  display: flex;\n  inset: 0;\n  justify-content: center;\n  position: fixed;\n  z-index: 1000;\n}\n\n.finiquito-loading ion-spinner {\n  height: 54px;\n  width: 54px;\n}\n\n.finiquito-layout {\n  display: grid;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 1180px;\n  min-height: 100%;\n  padding: 14px;\n}\n\n.finiquito-document,\n.finiquito-signature {\n  background: #ffffff;\n  border: 1px solid var(--finiquito-line);\n  border-radius: 8px;\n}\n\n.finiquito-document {\n  overflow: hidden;\n}\n\n.document-header {\n  align-items: center;\n  border-bottom: 1px solid var(--finiquito-line);\n  display: flex;\n  gap: 22px;\n  padding: 18px 22px;\n}\n\n.document-logo {\n  height: auto;\n  max-width: 230px;\n  object-fit: contain;\n  width: 30%;\n}\n\n.document-heading {\n  flex: 1;\n  text-align: right;\n}\n\n.document-heading span,\n.signature-heading span {\n  color: var(--finiquito-blue);\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.document-heading h1 {\n  color: var(--finiquito-ink);\n  font-size: 1.28rem;\n  margin: 3px 0;\n  text-transform: uppercase;\n}\n\n.document-heading p {\n  color: var(--finiquito-muted);\n  font-size: 0.82rem;\n  margin: 0;\n}\n\n.document-summary,\n.payment-details {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  background: var(--finiquito-line);\n  border-bottom: 1px solid var(--finiquito-line);\n}\n\n.document-summary > div,\n.payment-details > div {\n  background: var(--finiquito-surface);\n  min-width: 0;\n  padding: 10px 12px;\n}\n\n.document-summary span,\n.payment-details span {\n  color: var(--finiquito-muted);\n  display: block;\n  font-size: 0.64rem;\n  font-weight: 800;\n  margin-bottom: 3px;\n  text-transform: uppercase;\n}\n\n.document-summary strong,\n.payment-details strong {\n  color: var(--finiquito-ink);\n  display: block;\n  font-size: 0.82rem;\n  overflow-wrap: anywhere;\n}\n\n.document-copy {\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.55;\n  padding: 12px 22px;\n  text-align: justify;\n}\n\n.document-copy p {\n  margin: 0 0 12px;\n}\n\n.document-copy .exchange-reference {\n  background: #fff8e8;\n  border: 1px solid #efcf82;\n  border-radius: 6px;\n  color: #614b18;\n  font-size: 0.8rem;\n  padding: 9px 10px;\n  text-align: left;\n}\n\n.payment-details {\n  border-bottom: 0;\n  border-top: 1px solid var(--finiquito-line);\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.finiquito-signature {\n  align-self: end;\n  padding: 14px;\n}\n\n.signature-heading {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.signature-heading h2 {\n  color: var(--finiquito-ink);\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.signature-heading ion-icon {\n  color: var(--finiquito-blue);\n  font-size: 1.8rem;\n}\n\n.signature-preview {\n  align-items: center;\n  background: #ffffff;\n  border: 2px dashed #b9c9da;\n  border-radius: 6px;\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n}\n\n.signature-preview img {\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-empty {\n  align-items: center;\n  color: var(--finiquito-muted);\n  display: flex;\n  flex-direction: column;\n  font-size: 0.78rem;\n  gap: 7px;\n  padding: 14px;\n  text-align: center;\n}\n\n.signature-empty ion-icon {\n  color: var(--finiquito-blue);\n  font-size: 1.8rem;\n}\n\n.signature-note {\n  color: var(--finiquito-muted);\n  font-size: 0.76rem;\n  margin: 8px 0 10px;\n}\n\n.signature-actions {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);\n}\n\n.signature-actions ion-button,\n.return-button {\n  --border-radius: 6px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 44px;\n  margin: 0;\n}\n\n.finiquito-signature.is-complete {\n  border-color: #9fd5b5;\n}\n\n.finiquito-signature.is-complete .signature-heading ion-icon {\n  color: #16834b;\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .finiquito-layout {\n    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.75fr);\n  }\n  .finiquito-document {\n    max-height: calc(100vh - 88px);\n    overflow-y: auto;\n  }\n  .finiquito-signature {\n    position: sticky;\n    bottom: 14px;\n  }\n}\n@media (max-width: 699px) {\n  ion-toolbar ion-title {\n    font-size: 0.88rem;\n    padding-inline: 48px;\n  }\n  .finiquito-layout {\n    gap: 10px;\n    padding: 8px 8px calc(10px + env(safe-area-inset-bottom));\n  }\n  .document-header {\n    align-items: flex-start;\n    gap: 10px;\n    padding: 12px;\n  }\n  .document-logo {\n    max-width: 135px;\n    width: 38%;\n  }\n  .document-heading h1 {\n    font-size: 0.88rem;\n  }\n  .document-heading span,\n  .document-heading p {\n    font-size: 0.6rem;\n  }\n  .document-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .document-copy {\n    font-size: 0.82rem;\n    line-height: 1.48;\n    padding: 10px 12px;\n  }\n  .payment-details {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .finiquito-signature {\n    padding: 10px;\n  }\n  .signature-preview {\n    height: 130px;\n  }\n  .signature-actions ion-button,\n  .return-button {\n    font-size: 0.76rem;\n    height: 42px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/finiquito/finiquito.page.scss"],"names":[],"mappings":"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","sourcesContent":[":host {\n  --finiquito-blue: #0764d8;\n  --finiquito-ink: #16375d;\n  --finiquito-muted: #607792;\n  --finiquito-line: #d5e1ed;\n  --finiquito-surface: #f4f7fa;\n}\n\nion-toolbar {\n  --background: var(--finiquito-blue);\n  --color: #ffffff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-align: center;\n}\n\nion-back-button {\n  --color: #ffffff;\n}\n\n.finiquito-page {\n  --background: #eef3f7;\n}\n\n.finiquito-loading {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.78);\n  display: flex;\n  inset: 0;\n  justify-content: center;\n  position: fixed;\n  z-index: 1000;\n}\n\n.finiquito-loading ion-spinner {\n  height: 54px;\n  width: 54px;\n}\n\n.finiquito-layout {\n  display: grid;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 1180px;\n  min-height: 100%;\n  padding: 14px;\n}\n\n.finiquito-document,\n.finiquito-signature {\n  background: #ffffff;\n  border: 1px solid var(--finiquito-line);\n  border-radius: 8px;\n}\n\n.finiquito-document {\n  overflow: hidden;\n}\n\n.document-header {\n  align-items: center;\n  border-bottom: 1px solid var(--finiquito-line);\n  display: flex;\n  gap: 22px;\n  padding: 18px 22px;\n}\n\n.document-logo {\n  height: auto;\n  max-width: 230px;\n  object-fit: contain;\n  width: 30%;\n}\n\n.document-heading {\n  flex: 1;\n  text-align: right;\n}\n\n.document-heading span,\n.signature-heading span {\n  color: var(--finiquito-blue);\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.document-heading h1 {\n  color: var(--finiquito-ink);\n  font-size: 1.28rem;\n  margin: 3px 0;\n  text-transform: uppercase;\n}\n\n.document-heading p {\n  color: var(--finiquito-muted);\n  font-size: 0.82rem;\n  margin: 0;\n}\n\n.document-summary,\n.payment-details {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  background: var(--finiquito-line);\n  border-bottom: 1px solid var(--finiquito-line);\n}\n\n.document-summary > div,\n.payment-details > div {\n  background: var(--finiquito-surface);\n  min-width: 0;\n  padding: 10px 12px;\n}\n\n.document-summary span,\n.payment-details span {\n  color: var(--finiquito-muted);\n  display: block;\n  font-size: 0.64rem;\n  font-weight: 800;\n  margin-bottom: 3px;\n  text-transform: uppercase;\n}\n\n.document-summary strong,\n.payment-details strong {\n  color: var(--finiquito-ink);\n  display: block;\n  font-size: 0.82rem;\n  overflow-wrap: anywhere;\n}\n\n.document-copy {\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.55;\n  padding: 12px 22px;\n  text-align: justify;\n}\n\n.document-copy p {\n  margin: 0 0 12px;\n}\n\n.document-copy .exchange-reference {\n  background: #fff8e8;\n  border: 1px solid #efcf82;\n  border-radius: 6px;\n  color: #614b18;\n  font-size: 0.8rem;\n  padding: 9px 10px;\n  text-align: left;\n}\n\n.payment-details {\n  border-bottom: 0;\n  border-top: 1px solid var(--finiquito-line);\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.finiquito-signature {\n  align-self: end;\n  padding: 14px;\n}\n\n.signature-heading {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.signature-heading h2 {\n  color: var(--finiquito-ink);\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.signature-heading ion-icon {\n  color: var(--finiquito-blue);\n  font-size: 1.8rem;\n}\n\n.signature-preview {\n  align-items: center;\n  background: #ffffff;\n  border: 2px dashed #b9c9da;\n  border-radius: 6px;\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n}\n\n.signature-preview img {\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-empty {\n  align-items: center;\n  color: var(--finiquito-muted);\n  display: flex;\n  flex-direction: column;\n  font-size: 0.78rem;\n  gap: 7px;\n  padding: 14px;\n  text-align: center;\n}\n\n.signature-empty ion-icon {\n  color: var(--finiquito-blue);\n  font-size: 1.8rem;\n}\n\n.signature-note {\n  color: var(--finiquito-muted);\n  font-size: 0.76rem;\n  margin: 8px 0 10px;\n}\n\n.signature-actions {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);\n}\n\n.signature-actions ion-button,\n.return-button {\n  --border-radius: 6px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 44px;\n  margin: 0;\n}\n\n.finiquito-signature.is-complete {\n  border-color: #9fd5b5;\n}\n\n.finiquito-signature.is-complete .signature-heading ion-icon {\n  color: #16834b;\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .finiquito-layout {\n    grid-template-columns: minmax(0, 1.55fr) minmax(320px, 0.75fr);\n  }\n\n  .finiquito-document {\n    max-height: calc(100vh - 88px);\n    overflow-y: auto;\n  }\n\n  .finiquito-signature {\n    position: sticky;\n    bottom: 14px;\n  }\n}\n\n@media (max-width: 699px) {\n  ion-toolbar ion-title {\n    font-size: 0.88rem;\n    padding-inline: 48px;\n  }\n\n  .finiquito-layout {\n    gap: 10px;\n    padding: 8px 8px calc(10px + env(safe-area-inset-bottom));\n  }\n\n  .document-header {\n    align-items: flex-start;\n    gap: 10px;\n    padding: 12px;\n  }\n\n  .document-logo {\n    max-width: 135px;\n    width: 38%;\n  }\n\n  .document-heading h1 {\n    font-size: 0.88rem;\n  }\n\n  .document-heading span,\n  .document-heading p {\n    font-size: 0.6rem;\n  }\n\n  .document-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .document-copy {\n    font-size: 0.82rem;\n    line-height: 1.48;\n    padding: 10px 12px;\n  }\n\n  .payment-details {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .finiquito-signature {\n    padding: 10px;\n  }\n\n  .signature-preview {\n    height: 130px;\n  }\n\n  .signature-actions ion-button,\n  .return-button {\n    font-size: 0.76rem;\n    height: 42px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78816:
/*!**********************************************************!*\
  !*** ./src/app/finiquito/finiquito.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <div class=\"finiquito-loading\" *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/beneficiario\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Finiquito - Atención #{{idAtencion}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"finiquito-page\">\n  <main class=\"finiquito-layout\">\n    <section class=\"finiquito-document\" aria-label=\"Documento de finiquito\">\n      <header class=\"document-header\">\n        <img class=\"document-logo\" alt=\"Ficohsa Seguros\" [src]=\"fsLogo\" />\n        <div class=\"document-heading\">\n          <span>Documento para revisión</span>\n          <h1>Finiquito manual por liquidación</h1>\n          <p>Siniestro No. {{idAtencion}}</p>\n        </div>\n      </header>\n\n      <div class=\"document-summary\">\n        <div>\n          <span>Asegurado</span>\n          <strong>{{acuerdoFiniquito.NombreCliente || 'Sin información'}}</strong>\n        </div>\n        <div>\n          <span>Póliza de autos</span>\n          <strong>{{acuerdoFiniquito.Poliza || 'Sin información'}}</strong>\n        </div>\n        <div>\n          <span>Vigencia</span>\n          <strong>{{fechaDesde}} al {{fechaHasta}}</strong>\n        </div>\n        <div>\n          <span>Moneda de la póliza</span>\n          <strong>{{miMoneda || 'LEMPIRAS'}}</strong>\n        </div>\n      </div>\n\n      <article class=\"document-copy\">\n        <p class=\"exchange-reference\" *ngIf=\"isDollarPolicy\">\n          <strong>Referencia informativa BCH:</strong> US$1.00 = L {{bchUsdReference.rate | number:'1.4-4'}},\n          vigente al {{bchUsdReference.effectiveDate}}. El valor del cheque fue registrado manualmente\n          en lempiras.\n        </p>\n\n        <p>\n          Yo, <strong>{{acuerdoFiniquito.NombreQuienRecibe}}</strong>, en mi condición de\n          <strong>{{tipoDeBeneficiario}}</strong>, hago constar que en esta fecha he recibido de\n          INTERAMERICANA DE SEGUROS, S.A. el pago por indemnización por el siniestro ocurrido el\n          {{fechaParrafo}}.\n        </p>\n\n        <p>\n          El pago corresponde a la cobertura de <strong>{{TipoCoberturaFicohsa}}</strong>, del vehículo\n          marca {{acuerdoFiniquito.Marca}}, modelo {{acuerdoFiniquito.Modelo}}, año\n          {{acuerdoFiniquito.Anio}}, motor {{acuerdoFiniquito.Motor}} y placa\n          {{acuerdoFiniquito.Placa}}, amparado por la póliza antes indicada.\n        </p>\n\n        <p>\n          En virtud de lo anterior, relevo a INTERAMERICANA DE SEGUROS, S.A. de toda responsabilidad\n          derivada del siniestro descrito, renuncio a cualquier otro reclamo o acción extrajudicial o\n          judicial relacionado con el mismo y extiendo el más amplio y eficaz finiquito de solvencia.\n        </p>\n\n        <p>\n          Para constancia y seguridad de INTERAMERICANA DE SEGUROS, S.A., extiendo y firmo este\n          finiquito en la ciudad de {{acuerdoFiniquito.Ciudad || 'Tegucigalpa'}}, a los {{fechaPie}}.\n        </p>\n      </article>\n\n      <div class=\"payment-details\">\n        <div><span>Nombre de quien recibe</span><strong>{{acuerdoFiniquito.NombreQuienRecibe}}</strong></div>\n        <div><span>Identidad</span><strong>{{acuerdoFiniquito.IdentidadQuienRecibe}}</strong></div>\n        <div><span>Cheque No.</span><strong>{{acuerdoFiniquito.NumeroCheque}}</strong></div>\n        <div><span>Fecha del cheque</span><strong>{{acuerdoFiniquito.FechaDelCheque}}</strong></div>\n        <div><span>Valor del cheque (HNL)</span><strong>L. {{acuerdoFiniquito.ValorDelCheque}}</strong></div>\n        <div><span>A favor de</span><strong>{{acuerdoFiniquito.NombreAFavor}}</strong></div>\n      </div>\n    </section>\n\n    <section class=\"finiquito-signature\" [class.is-complete]=\"finiquitoCompleto\">\n      <div class=\"signature-heading\">\n        <div>\n          <span>{{finiquitoCompleto ? 'Envío completado' : 'Firma del beneficiario'}}</span>\n          <h2>{{finiquitoCompleto ? 'Finiquito enviado correctamente' : (beneficiarySignature ? 'Firma registrada' : 'Firma pendiente')}}</h2>\n        </div>\n        <ion-icon [name]=\"finiquitoCompleto ? 'checkmark-circle' : 'create-outline'\"></ion-icon>\n      </div>\n\n      <div class=\"signature-preview\" *ngIf=\"!finiquitoCompleto\">\n        <img *ngIf=\"beneficiarySignature\" [src]=\"beneficiarySignature\" alt=\"Firma del beneficiario\" />\n        <div *ngIf=\"!beneficiarySignature\" class=\"signature-empty\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n          <span>Aún no se ha registrado la firma del beneficiario.</span>\n        </div>\n      </div>\n\n      <p class=\"signature-note\" *ngIf=\"!finiquitoCompleto\">\n        La firma se captura en una pantalla independiente para mantener el área completamente libre.\n      </p>\n\n      <div class=\"signature-actions\" *ngIf=\"!finiquitoCompleto\">\n        <ion-button fill=\"outline\" (click)=\"goBeneficiarySignature()\">\n          <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n          {{beneficiarySignature ? 'Editar firma' : 'Firmar'}}\n        </ion-button>\n        <ion-button (click)=\"confirmarEnvio()\" [disabled]=\"isLoading || !beneficiarySignature\">\n          <ion-icon slot=\"start\" name=\"send-outline\"></ion-icon>\n          Enviar finiquito\n        </ion-button>\n      </div>\n\n      <ion-button class=\"return-button\" expand=\"block\" *ngIf=\"finiquitoCompleto\" (click)=\"goExpediente()\">\n        <ion-icon slot=\"start\" name=\"folder-open-outline\"></ion-icon>\n        Regresar al expediente\n      </ion-button>\n    </section>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_finiquito_finiquito_module_ts.js.map