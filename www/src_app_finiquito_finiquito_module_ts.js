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
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _finiquito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finiquito.page.html?ngResource */ 78816);
/* harmony import */ var _finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finiquito.page.scss?ngResource */ 35921);
/* harmony import */ var _finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_finiquito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);















let FiniquitoPage = class FiniquitoPage {
  constructor(platform, toaster, api) {
    this.platform = platform;
    this.toaster = toaster;
    this.api = api;
    this.acuerdoFiniquito = [];
    this.finiquitoCompleto = false;
    this.isInit = false;
    this.datosAtencion = [];
    this.ya = false;
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_10__('#scrollIcon').fadeIn('xslow');
    }, 2000);
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    //  let daDate = this.acuerdoFiniquito.FechaRegistro;
    //  this.dia = daDate.split('T')[0].substring(8,10);
    //  this.mes = daDate.split('T')[0].substring(5,7);
    //  this.anio = daDate.split('T')[0].substring(0,4);
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_9__.meses[this.mesPie].mes + ' de ' + this.anioPie;
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
    this.acuerdoFiniquito = JSON.parse(localStorage.getItem('elFiniquito'));
    this.fechaDesde = this.acuerdoFiniquito.FechaDesde.split('T')[0];
    this.fechaHasta = this.acuerdoFiniquito.FechaHasta.split('T')[0];
    this.idAtencion = localStorage.getItem('idAtencion');
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_8__.logoFicohsa;
  }
  ngOnInit() {
    var _this = this;
    this.sig6 = new signature_pad__WEBPACK_IMPORTED_MODULE_7__["default"](this.canvas6.nativeElement);
    this.sig6.fromDataURL(_environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite);
    setTimeout(() => {
      this.sig6.clear();
    }, 1000);
    this.sig6.backgroundColor = "rgb(255, 255, 255)";
    this.sig6.minWidth = 1;
    this.sig6.maxWidth = 1.5;
    this.sig6.dotSize = 3;
    this.idBeneficiarioTipo = this.acuerdoFiniquito.beneficiarioTipo;
    this.tipoDeBeneficiario = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__.tipoBeneficiario[this.idBeneficiarioTipo - 1].etiqueta;
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        console.log(_environments_calendario__WEBPACK_IMPORTED_MODULE_9__.meses[this.mes].mes);
        this.fechaParrafo = this.dia + ' de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_9__.meses[this.mes].mes + ' de ' + this.anio;
        //alert(this.moneda)
        if (this.moneda == null) {
          this.miMoneda = "LEMPIRAS";
        } else {
          this.miMoneda = this.moneda;
        }
      });
      this.api.DatosDeAtencion(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  clear() {
    this.sig6.clear();
  }
  testSave() {
    this.isLoading = true;
    this.isEmptySignature = this.sig6.isEmpty();
    console.log(this.sig6.isEmpty());
    if (this.sig6.isEmpty()) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar el acuerdo.", "top", "firma");
      //this.isLoading = false;
    } else {
      this.sig6.backgroundColor = "rgb(255, 255, 255)";
      this.sig6.minWidth = 1;
      this.sig6.maxWidth = 1.5;
      this.sig6.dotSize = 3;
      const mySignature = this.sig6.toDataURL("image/jpeg");
      console.log(mySignature);
      //const mySignature =this.sig5.toDataURL("image/jpeg");
      //this.acuerdoDeuda.FirmaDeudor = mySignature.split(',')[1];
      this.acuerdoFiniquito.FirmaCliente = mySignature.split(',')[1];
      console.dir(this.acuerdoFiniquito);
      setTimeout(() => {
        this.guardarFiniquito();
      }, 1800);
    }
  }
  guardarFiniquito() {
    var _this2 = this;
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
    if (this.CodigoReclamo == null) {
      this.toaster.presentToastNoButtonsRed("Esta atención aún no ha sido completada y no cumple los requisitos para generar un finiquito.", "top", "finiquito");
      this.isLoading = false;
    } else {
      this.api.insertarFiniquitoManual(this.acuerdoFiniquito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.ya = true;
        _this2.toaster.presentToastNoButtons('Finiquito Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
        _this2.finiquitoCompleto = true;
        //await load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.isLoading = false;
          console.log('Esto viene del finiquito');
          console.dir(res);
          //this.idTablaAjustador = res.toString();
        });
        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }());
      /**/
    }
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
    jquery__WEBPACK_IMPORTED_MODULE_10__('#ele').animate({
      scrollTop: 600
    }, 5000);
  }
  onScroll(event) {
    //alert('hey vo')
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_10__('#scrollIcon').fadeOut('xslow');
    }, 3000);
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
    }];
  }
  static {
    this.propDecorators = {
      canvas6: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ["canvas6", {
          static: true
        }]
      }]
    };
  }
};
FiniquitoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
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
___CSS_LOADER_EXPORT___.push([module.id, "strong {\n  font-weight: bolder;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n.impresora {\n  font-size: 2rem;\n  color: #f14f23;\n  position: absolute;\n  right: 1%;\n  top: 15%;\n}", "",{"version":3,"sources":["webpack://./src/app/finiquito/finiquito.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAJ;;AAGA;EACI,eAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;AAAJ","sourcesContent":["strong{\r\n    font-weight: bolder;\r\n}\r\n\r\nion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\n.impresora {\r\n    font-size: 2rem;\r\n    color: #f14f23;\r\n    position: absolute;\r\n    right: 1%;\r\n    top: 15%;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78816:
/*!**********************************************************!*\
  !*** ./src/app/finiquito/finiquito.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">Finiquito Manual - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--ion-button id=\"scrollIcon\" size=\"small\" style=\"position: absolute;top:30%;right:0;z-index: 999;font-size: 5rem;opacity: 0.4;display: none;color: cornflowerblue;\">Ver Mas...</!--ion-button -->\r\n  <!--ion-icon id=\"scrollIcon\" name=\"swap-vertical\" style=\"position: absolute;top:30%;right:0;z-index: 999;font-size: 5rem;opacity: 0.4;display: none;color: cornflowerblue;\"></!--ion-icon>\r\n  <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n  </ion-label -->\r\n  <ion-grid style=\"margin-top: -30px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card id=\"ele\" style=\"margin: 0;padding:0;height: 350px;overflow-y: scroll;\" (touchstart)=\"onScroll($event)\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <img alt=\"Ficohsa Seguros\" src=\"{{fsLogo}}\" style=\"width: 281px; height: 61px; margin-left: 15px; margin-top: 15px;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <!--ion-icon class=\"impresora\" name=\"print\" (click)=\"this.modalPdfiniquito.present()\" id=\"open-modal-pdf\"></!--ion-icon -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n          <ion-card-header>\r\n            <ion-card-title><strong>FINIQUITO MANUAL POR LIQUIDACIÓN</strong></ion-card-title>\r\n            <ion-card-subtitle><strong>Siniestro No. </strong> {{idAtencion}}</ion-card-subtitle>\r\n            <ion-card-subtitle><strong>Asegurado: </strong>{{acuerdoFiniquito.NombreCliente}}</ion-card-subtitle>\r\n            <ion-card-subtitle><strong>Póliza de Autos No.: </strong>{{acuerdoFiniquito.Poliza}}</ion-card-subtitle>\r\n            <ion-card-subtitle><strong>Vigencia: </strong> Desde {{fechaDesde}}, Hasta {{fechaHasta}}</ion-card-subtitle>\r\n            <br>\r\n            <ion-card-subtitle style=\"text-align: justify;\">\r\n              Yo, {{acuerdoFiniquito.NombreQuienRecibe}} en mi condición de {{tipoDeBeneficiario}} hago constar que en esta fecha he recibido de \r\n              INTERAMERICANA DE SEGUROS, S.A., el pago por indemnización por el siniestro ocurrido el {{fechaParrafo}} que a continuación describo: \r\n              Pago Total por la cobertura de {{TipoCoberturaFicohsa}}, del vehículo marca: {{acuerdoFiniquito.Marca}}, {{acuerdoFiniquito.Modelo}} Año: {{acuerdoFiniquito.Anio}}, motor: {{acuerdoFiniquito.Motor}}, \r\n              Placa: {{acuerdoFiniquito.Placa}}, que se encuentra amparada en la póliza supra mencionada.\r\n              En virtud de lo anterior y en mi condición indicada, por este acto relevo a INTERAMERICANA DE SEGUROS, S.A. de toda responsabilidad derivada del siniestro \r\n              descrito, renuncio a cualquier otro reclamo o acción extrajudicial o judicial relacionado con el mismo, y en consecuencia, le extiendo él más amplio y eficaz \r\n              finiquito de solvencia.\r\n            </ion-card-subtitle>\r\n            <!--ion-card-subtitle style=\"text-align: justify;\">Yo, MANUEL ALEJANDRO PALMA HENRIQUEZ en mi condición de (Asegurado, Tercero, Beneficiario) hago constar que en esta fecha he recibido de \r\n              INTERAMERICANA DE SEGUROS, S.A., el pago por indemnización por el siniestro ocurrido el 17 de Noviembre del 2023 que a continuación describo: \r\n              Pago Total por la cobertura de __________________________________________, del vehículo marca: Toyota, Modelo Corolla XLT Año: 2023, motor: 878798987987987877, \r\n              Placa: PBC78987, que se encuentra amparada en la póliza supra mencionada.\r\n              En virtud de lo anterior y en mi condición indicada, por este acto relevo a INTERAMERICANA DE SEGUROS, S.A. de toda responsabilidad derivada del siniestro \r\n              descrito, renuncio a cualquier otro reclamo o acción extrajudicial o judicial relacionado con el mismo, y en consecuencia, le extiendo él más amplio y eficaz \r\n              finiquito de solvencia.\r\n\r\n              Para constancia y seguridad de INTERAMERICANA DE SEGUROS, S.A., extiendo y firmo este finiquito en la ciudad de Tegucigalpa, a los {{fechaPie}}.\r\n            </!--ion-card-subtitle -->\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            \r\n            <br>\r\n            <ion-card-subtitle>\r\n              Para constancia y seguridad de INTERAMERICANA DE SEGUROS, S.A., extiendo y firmo este finiquito en la ciudad de {{acuerdoFiniquito.Ciudad}}, a los {{fechaPie}}.\r\n            </ion-card-subtitle>\r\n            <br>\r\n            <!--ion-card-subtitle>\r\n              <strong>Firma. </strong>\r\n              {{acuerdoFiniquito.FirmaCliente}}\r\n            </!--ion-card-subtitle -->\r\n            <ion-card-subtitle>\r\n              <strong>Nombre de quien recibe. </strong>\r\n              {{acuerdoFiniquito.NombreQuienRecibe}}\r\n            </ion-card-subtitle>\r\n            <ion-card-subtitle>\r\n              <strong>Identidad #. </strong>\r\n              {{acuerdoFiniquito.IdentidadQuienRecibe}}\r\n            </ion-card-subtitle>\r\n            <ion-card-subtitle>\r\n              <strong>Cheque No.: </strong>\r\n              {{acuerdoFiniquito.NumeroCheque}}\r\n            </ion-card-subtitle>\r\n            <ion-card-subtitle>\r\n              <strong>Fecha: </strong>\r\n              {{acuerdoFiniquito.FechaDelCheque}}\r\n            </ion-card-subtitle>\r\n            <ion-card-subtitle>\r\n              <strong>Valor del Cheque: </strong>\r\n              L. {{acuerdoFiniquito.ValorDelCheque}}\r\n            </ion-card-subtitle>\r\n            <ion-card-subtitle>\r\n              <strong>A favor de: </strong>\r\n              {{acuerdoFiniquito.NombreAFavor}}\r\n            </ion-card-subtitle>\r\n          </ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col offset=\"9\" size=\"3\">\r\n                <ion-button size=\"small\" style=\"position: fixed; right: 2%; bottom: 60%;\" (click)=\"scrollToElement()\">Ver Mas</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <!--ion-col size=\"12\" style=\"color: #3171e0;\">\r\n        <ion-label style=\"margin-left: 19px;\">Firma Implicado</ion-label>\r\n      </!--ion-col -->\r\n      <ion-col size=\"12\" style=\"margin-top: -10px;\">\r\n        <ion-card id=\"cardAsegurado\">\r\n          <ion-card-content>\r\n            <!--ion-img *ngIf=\"isSign == true\" src=\"{{firmaPrecargada}}\"/ -->\r\n            <canvas id=\"canvasFiniquito\" width=\"{{deviceWidth}}\" [height]=\"200\"  #canvas6 style=\"border: 6px dashed #ede9e9\"></canvas>\r\n            <!--canvas id=\"canvasAsegurado\" [width]=\"500\" [height]=\"150\"  #canvas2 style=\"border: 6px dashed #ede9e9\"></!--canvas -->\r\n          </ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-button expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-button expand=\"block\" (click)=\"testSave()\">Enviar</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-modal #modalPdfiniquito #modal trigger=\"open-modal-pdf\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Decargar PDFs</ion-toolbar>\r\n      <ion-list>\r\n        <ion-item (click)=\"printPdf()\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"wallet-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Finiquito Manual </h2>\r\n            <p>Chequera de Liquidación</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_finiquito_finiquito_module_ts.js.map