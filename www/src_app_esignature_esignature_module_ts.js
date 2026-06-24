(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_esignature_esignature_module_ts"],{

/***/ 29618:
/*!*********************************************************!*\
  !*** ./src/app/esignature/esignature-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePageRoutingModule": () => (/* binding */ EsignaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _esignature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esignature.page */ 67020);




const routes = [{
  path: '',
  component: _esignature_page__WEBPACK_IMPORTED_MODULE_0__.EsignaturePage
}];
let EsignaturePageRoutingModule = class EsignaturePageRoutingModule {};
EsignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EsignaturePageRoutingModule);


/***/ }),

/***/ 6885:
/*!*************************************************!*\
  !*** ./src/app/esignature/esignature.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePageModule": () => (/* binding */ EsignaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _esignature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esignature-routing.module */ 29618);
/* harmony import */ var _esignature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esignature.page */ 67020);







let EsignaturePageModule = class EsignaturePageModule {};
EsignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _esignature_routing_module__WEBPACK_IMPORTED_MODULE_0__.EsignaturePageRoutingModule],
  declarations: [_esignature_page__WEBPACK_IMPORTED_MODULE_1__.EsignaturePage]
})], EsignaturePageModule);


/***/ }),

/***/ 67020:
/*!***********************************************!*\
  !*** ./src/app/esignature/esignature.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePage": () => (/* binding */ EsignaturePage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _esignature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esignature.page.html?ngResource */ 70738);
/* harmony import */ var _esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esignature.page.scss?ngResource */ 5046);
/* harmony import */ var _esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ajustadorhn_ajustadorhn_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ajustadorhn/ajustadorhn.page */ 32234);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/device.service */ 34811);
















let EsignaturePage = class EsignaturePage {
  constructor(platform, navController, api, tostador, router, deviceService) {
    this.platform = platform;
    this.navController = navController;
    this.api = api;
    this.tostador = tostador;
    this.router = router;
    this.deviceService = deviceService;
    this.hoy = new Date().toISOString();
    this.isLoading = false;
    this.elCliente = "";
    this.firma = [];
    this.canvasHeight = 150;
    this.component = _ajustadorhn_ajustadorhn_page__WEBPACK_IMPORTED_MODULE_5__.AjustadorhnPage;
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_8__.logoFicohsa;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.elCliente = localStorage.getItem('elCliente');
    const platformWidth = this.platform.width();
    const platformHeight = this.platform.height();
    const isPhonePortrait = this.deviceService.isPhone && platformHeight > platformWidth;
    if (isPhonePortrait) {
      this.deviceWidth = Math.max(platformWidth - 28, 280);
      this.canvasHeight = 178;
    } else if (this.platform.is('android')) {
      this.deviceWidth = platformWidth - 90;
    } else {
      this.deviceWidth = platformWidth - 100;
    }
  }
  ngOnInit() {
    this.sig = new signature_pad__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas.nativeElement);
    this.sig.fromDataURL(_environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignatureWhite);
    setTimeout(() => {
      this.sig.clear();
    }, 1000);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
  }
  scrollToElement() {
    $('#ele').animate({
      scrollTop: 600
    }, 5000);
  }
  saveSignatureAsegurado(idAtencion) {
    var _this = this;
    idAtencion = parseInt(this.idAtencion);
    this.isLoading = true;
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    const mySignature = this.sig.toDataURL("image/jpeg");
    console.log(mySignature);
    if (mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignature && mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignatureWhite) {
      this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
      //console.dir(this.firmasAsegurados);
      this.firma.push({
        IdAtencion: idAtencion,
        RefTipoFotoId: 3,
        Foto: this.firmaPrecargada.split(',')[1],
        NombreFirmante: this.elCliente,
        FechaFirma: this.hoy
      });
      this.api.GuardarFirmaAsegurado(this.firma).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'token respuesta');
        localStorage.setItem('dSignatureAsegurado', this.firmaPrecargada);
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        const element = document.getElementById('cardAsegurado');
        const elementInput = document.getElementById('nombreInput');
        element?.setAttribute('style', 'border: none');
        elementInput?.setAttribute('style', 'border: none');
        this.goBack();
      }, /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
          //this.isSignature = false;
          _this.isLoading = false;
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    } else {
      this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
      this.isLoading = false;
    }
    /**/
  }

  clear() {
    this.sig.clear();
  }
  goBack() {
    //$('#trackButton').attr('style', 'border: none');
    const returnTo = localStorage.getItem('signatureReturnTo');
    localStorage.removeItem('signatureReturnTo');
    this.router.navigate([returnTo || './clientehn']);
    //this.navController.back();
  }

  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }, {
      type: _services_device_service__WEBPACK_IMPORTED_MODULE_9__.DeviceService
    }];
  }
  static {
    this.propDecorators = {
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ["canvas6", {
          static: true
        }]
      }]
    };
  }
};
EsignaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-esignature',
  template: _esignature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EsignaturePage);


/***/ }),

/***/ 5046:
/*!************************************************************!*\
  !*** ./src/app/esignature/esignature.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-fab-button {\n  /*\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  */\n  --color: white;\n}\n\n.signature-back-button {\n  left: 8px;\n  position: fixed;\n  top: calc(env(safe-area-inset-top) + 4px);\n  z-index: 20;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n.signature-page {\n  --background: #ffffff;\n}\n\n.signature-brand-logo {\n  height: 61px;\n  margin-left: 15px;\n  margin-top: 15px;\n  object-fit: contain;\n  object-position: left center;\n  width: 281px;\n}\n\n.signature-legal-copy {\n  color: #111827;\n  font-size: 1rem;\n  height: 39%;\n  overflow-y: scroll;\n  padding: 3%;\n  text-align: justify;\n  white-space: normal;\n  width: 99%;\n}\n\n.signature-footer {\n  background: white;\n  bottom: 0;\n  height: 50%;\n  left: 0;\n  position: fixed;\n}\n\n.signature-label-row {\n  color: #3171e0;\n}\n\n.signature-label-row ion-label {\n  margin-left: 19px;\n}\n\n.signature-card-column {\n  margin-top: -10px;\n}\n\n.signature-card {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.signature-card-content {\n  padding: 13px 16px;\n}\n\n.signature-canvas {\n  border: 6px dashed #ede9e9;\n  display: block;\n  max-width: 100%;\n}\n\n.signature-actions-grid ion-button {\n  --border-radius: 8px;\n}\n\n.card-signature-mobile {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 95%;\n}\n\n.card-canvas-mobile {\n  width: 100%;\n}\n\n@media (orientation: portrait) and (max-width: 699px) {\n  .signature-back-button {\n    top: calc(env(safe-area-inset-top) + 0px);\n  }\n  ion-toolbar ion-title {\n    font-size: 0.82rem;\n    padding-inline: 48px;\n    text-align: center;\n  }\n  ion-toolbar ion-title ion-grid {\n    padding: 0;\n  }\n  ion-toolbar ion-title ion-col:first-child,\n  ion-toolbar ion-title ion-col:last-child {\n    display: none;\n  }\n  ion-toolbar ion-title ion-col:nth-child(2) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    text-align: center;\n    width: 100%;\n  }\n  .signature-brand {\n    margin-top: 2px;\n  }\n  .signature-brand-logo {\n    height: auto;\n    margin-left: 12px;\n    margin-top: 10px;\n    max-width: 220px;\n    width: 58vw;\n  }\n  .signature-legal-copy {\n    font-size: 0.88rem;\n    height: 44%;\n    line-height: 1.35;\n    padding: 10px 14px 2px;\n    width: 100%;\n  }\n  .signature-footer {\n    height: 43%;\n    padding-bottom: max(4px, env(safe-area-inset-bottom));\n  }\n  .signature-footer-grid {\n    height: 100%;\n    padding: 0 6px 0;\n  }\n  .signature-footer-grid > ion-row {\n    width: 100%;\n  }\n  .signature-label-row {\n    padding-bottom: 0;\n    padding-top: 2px;\n  }\n  .signature-label-row ion-label {\n    display: block;\n    font-size: 0.9rem;\n    font-weight: 700;\n    margin-left: 8px;\n  }\n  .signature-card-column {\n    margin-top: -4px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .signature-card {\n    border-radius: 8px;\n    box-shadow: 0 8px 22px rgba(15, 45, 82, 0.1);\n    margin: 0;\n    width: 100%;\n  }\n  .signature-card-content {\n    padding: 6px 8px 5px;\n  }\n  .signature-canvas {\n    border-width: 4px;\n    box-sizing: border-box;\n    height: 170px;\n    width: 100%;\n  }\n  .signature-actions-grid {\n    padding: 0 6px 6px;\n  }\n  .signature-actions-grid ion-button {\n    font-size: 0.84rem;\n    height: 42px;\n    margin: 0;\n  }\n}\n@media (orientation: portrait) and (max-width: 699px) and (max-height: 760px) {\n  .signature-legal-copy {\n    height: 39%;\n  }\n  .signature-footer {\n    height: 48%;\n  }\n  .signature-canvas {\n    height: 150px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/esignature/esignature.page.scss"],"names":[],"mappings":"AAAE;EACE;;;;;;GAAA;EAOA,cAAA;AACJ;;AAEE;EACE,SAAA;EACA,eAAA;EACA,yCAAA;EACA,WAAA;AACJ;;AAEE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACN;;AAKE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAFN;;AAKE;EACE,qBAAA;AAFJ;;AAKE;EACE,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,4BAAA;EACA,YAAA;AAFJ;;AAKE;EACE,cAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;AAFJ;;AAKE;EACE,iBAAA;EACA,SAAA;EACA,WAAA;EACA,OAAA;EACA,eAAA;AAFJ;;AAKE;EACE,cAAA;AAFJ;;AAKE;EACE,iBAAA;AAFJ;;AAKE;EACE,iBAAA;AAFJ;;AAKE;EACE,iBAAA;EACA,kBAAA;AAFJ;;AAKE;EACE,kBAAA;AAFJ;;AAKE;EACE,0BAAA;EACA,cAAA;EACA,eAAA;AAFJ;;AAKE;EACE,oBAAA;AAFJ;;AAKE;EACE,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AAFJ;;AAKE;EACE,WAAA;AAFJ;;AAKE;EACE;IACE,yCAAA;EAFJ;EAKE;IACE,kBAAA;IACA,oBAAA;IACA,kBAAA;EAHJ;EAME;IACE,UAAA;EAJJ;EAOE;;IAEE,aAAA;EALJ;EAQE;IACE,cAAA;IACA,eAAA;IACA,kBAAA;IACA,WAAA;EANJ;EASE;IACE,eAAA;EAPJ;EAUE;IACE,YAAA;IACA,iBAAA;IACA,gBAAA;IACA,gBAAA;IACA,WAAA;EARJ;EAWE;IACE,kBAAA;IACA,WAAA;IACA,iBAAA;IACA,sBAAA;IACA,WAAA;EATJ;EAYE;IACE,WAAA;IACA,qDAAA;EAVJ;EAaE;IACE,YAAA;IACA,gBAAA;EAXJ;EAcE;IACE,WAAA;EAZJ;EAeE;IACE,iBAAA;IACA,gBAAA;EAbJ;EAgBE;IACE,cAAA;IACA,iBAAA;IACA,gBAAA;IACA,gBAAA;EAdJ;EAiBE;IACE,gBAAA;IACA,eAAA;IACA,gBAAA;EAfJ;EAkBE;IACE,kBAAA;IACA,4CAAA;IACA,SAAA;IACA,WAAA;EAhBJ;EAmBE;IACE,oBAAA;EAjBJ;EAoBE;IACE,iBAAA;IACA,sBAAA;IACA,aAAA;IACA,WAAA;EAlBJ;EAqBE;IACE,kBAAA;EAnBJ;EAsBE;IACE,kBAAA;IACA,YAAA;IACA,SAAA;EApBJ;AACF;AAuBE;EACE;IACE,WAAA;EArBJ;EAwBE;IACE,WAAA;EAtBJ;EAyBE;IACE,aAAA;EAvBJ;AACF","sourcesContent":["  ion-fab-button {\n    /*\n    --background: #f14f23;\n    --background-activated: #a8462a;\n    --background-hover: #f66e48;\n    --border-radius: 15px;\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n    */\n    --color: white;\n  }\n\n  .signature-back-button {\n    left: 8px;\n    position: fixed;\n    top: calc(env(safe-area-inset-top) + 4px);\n    z-index: 20;\n  }\n\n  ion-spinner{\n    position: fixed;\n      top: 28%;\n      left: 40%;\n      z-index: 999;\n      width: 20%;\n      height: 20%;\n    //background-color: #00213f;\n  }\n\n\n  \n  #spinFooter{\n    position: fixed;\n      background: black;\n      opacity: 0.6;\n      height: 100vh;\n      width: 100vw;\n      z-index: 900;\n      bottom: 0;\n  }\n\n  .signature-page {\n    --background: #ffffff;\n  }\n\n  .signature-brand-logo {\n    height: 61px;\n    margin-left: 15px;\n    margin-top: 15px;\n    object-fit: contain;\n    object-position: left center;\n    width: 281px;\n  }\n\n  .signature-legal-copy {\n    color: #111827;\n    font-size: 1rem;\n    height: 39%;\n    overflow-y: scroll;\n    padding: 3%;\n    text-align: justify;\n    white-space: normal;\n    width: 99%;\n  }\n\n  .signature-footer {\n    background: white;\n    bottom: 0;\n    height: 50%;\n    left: 0;\n    position: fixed;\n  }\n\n  .signature-label-row {\n    color: #3171e0;\n  }\n\n  .signature-label-row ion-label {\n    margin-left: 19px;\n  }\n\n  .signature-card-column {\n    margin-top: -10px;\n  }\n\n  .signature-card {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .signature-card-content {\n    padding: 13px 16px;\n  }\n\n  .signature-canvas {\n    border: 6px dashed #ede9e9;\n    display: block;\n    max-width: 100%;\n  }\n\n  .signature-actions-grid ion-button {\n    --border-radius: 8px;\n  }\n\n  .card-signature-mobile{\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 95%;\n  }\n\n  .card-canvas-mobile{\n    width: 100%;\n  }\n\n  @media (orientation: portrait) and (max-width: 699px) {\n    .signature-back-button {\n      top: calc(env(safe-area-inset-top) + 0px);\n    }\n\n    ion-toolbar ion-title {\n      font-size: 0.82rem;\n      padding-inline: 48px;\n      text-align: center;\n    }\n\n    ion-toolbar ion-title ion-grid {\n      padding: 0;\n    }\n\n    ion-toolbar ion-title ion-col:first-child,\n    ion-toolbar ion-title ion-col:last-child {\n      display: none;\n    }\n\n    ion-toolbar ion-title ion-col:nth-child(2) {\n      flex: 0 0 100%;\n      max-width: 100%;\n      text-align: center;\n      width: 100%;\n    }\n\n    .signature-brand {\n      margin-top: 2px;\n    }\n\n    .signature-brand-logo {\n      height: auto;\n      margin-left: 12px;\n      margin-top: 10px;\n      max-width: 220px;\n      width: 58vw;\n    }\n\n    .signature-legal-copy {\n      font-size: 0.88rem;\n      height: 44%;\n      line-height: 1.35;\n      padding: 10px 14px 2px;\n      width: 100%;\n    }\n\n    .signature-footer {\n      height: 43%;\n      padding-bottom: max(4px, env(safe-area-inset-bottom));\n    }\n\n    .signature-footer-grid {\n      height: 100%;\n      padding: 0 6px 0;\n    }\n\n    .signature-footer-grid > ion-row {\n      width: 100%;\n    }\n\n    .signature-label-row {\n      padding-bottom: 0;\n      padding-top: 2px;\n    }\n\n    .signature-label-row ion-label {\n      display: block;\n      font-size: 0.9rem;\n      font-weight: 700;\n      margin-left: 8px;\n    }\n\n    .signature-card-column {\n      margin-top: -4px;\n      padding-left: 0;\n      padding-right: 0;\n    }\n\n    .signature-card {\n      border-radius: 8px;\n      box-shadow: 0 8px 22px rgba(15, 45, 82, 0.10);\n      margin: 0;\n      width: 100%;\n    }\n\n    .signature-card-content {\n      padding: 6px 8px 5px;\n    }\n\n    .signature-canvas {\n      border-width: 4px;\n      box-sizing: border-box;\n      height: 170px;\n      width: 100%;\n    }\n\n    .signature-actions-grid {\n      padding: 0 6px 6px;\n    }\n\n    .signature-actions-grid ion-button {\n      font-size: 0.84rem;\n      height: 42px;\n      margin: 0;\n    }\n  }\n\n  @media (orientation: portrait) and (max-width: 699px) and (max-height: 760px) {\n    .signature-legal-copy {\n      height: 39%;\n    }\n\n    .signature-footer {\n      height: 48%;\n    }\n\n    .signature-canvas {\n      height: 150px;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70738:
/*!************************************************************!*\
  !*** ./src/app/esignature/esignature.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\n  <ion-fab id=\"button-back\" class=\"signature-back-button\" vertical=\"top\" horizontal=\"start\" (click)=\"goBack()\">\n    <ion-fab-button (click)=\"'confirmar()'\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"6\">Firma Asegurado o Conductor Atención # {{idAtencion}}</ion-col>\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content class=\"signature-page\">\n  <ion-grid class=\"signature-brand\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <img class=\"signature-brand-logo\" alt=\"Ficohsa Seguros\" src=\"{{fsLogo}}\" />\n      </ion-col>\n      <ion-col size=\"2\">\n        <!--ion-icon class=\"impresora\" name=\"eye\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\" style=\"margin-right: 25%;\"></!--ion-icon>\n        <ion-icon class=\"impresora\" name=\"print\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\"></ion-icon -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div id=\"ele\" class=\"signature-legal-copy\">\n    El Congreso Nacional de la República de Honduras, reunido en asamblea general aprobó la LEY SOBRE FIRMAS  ELECTRÓNICAS mediante el Decreto № 149-2103 emitido el 11  de diciembre del mismo año.\n\n    La LEY SOBRE FIRMAS ELECTRÓNICAS y su Reglamento procuran establecer la regulación de uso y eficacia jurídica y prevé el régimen aplicable a los Prestadores de Servicios de Certificación. Igualmente de conformidad al Capítulo V, Artículo № 24 de la Ley, nomina a la DIRECCIÓN GENERAL DE PROPIEDAD INTELECTUAL (DIGEPIH) como AUTORIDAD ACREDITADORA y desarrollar las actividades administrativas para el REGISTRO en el que habrán de inscribirse estos Prestadores de Servicios de Certificación, regular la expedición y pérdida de vigencia de las acreditaciones.\n    <br><br><br>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\"></ion-col>\n      <ion-col size=\"4\"></ion-col>\n      <ion-col offset=\"10\" size=\"2\">\n        <ion-button size=\"small\" (click)=\"scrollToElement()\" style=\"float: right;margin-right:9%\">Ver Más</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-footer class=\"signature-footer\">\n    <ion-grid class=\"signature-footer-grid\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"signature-label-row\">\n          <ion-label> Guardar Firma</ion-label>\n        </ion-col>\n        <ion-col size=\"12\" class=\"signature-card-column\">\n          <ion-card id=\"cardAseguradoFinal\" class=\"signature-card\">\n            <ion-card-content class=\"signature-card-content\">\n              <canvas id=\"canvasAseguradoFinal\" class=\"signature-canvas\" width=\"{{deviceWidth}}\" [height]=\"canvasHeight\" #canvas6></canvas>\n            </ion-card-content>\n            <ion-grid class=\"signature-actions-grid\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button expand=\"block\" (click)=\"saveSignatureAsegurado(idAtencion)\">Guardar Firma</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_esignature_esignature_module_ts.js.map