(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_finiquito-signature_finiquito-signature_module_ts"],{

/***/ 3101:
/*!***************************************************************************!*\
  !*** ./src/app/finiquito-signature/finiquito-signature-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoSignaturePageRoutingModule": () => (/* binding */ FiniquitoSignaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _finiquito_signature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finiquito-signature.page */ 42071);




const routes = [{
  path: '',
  component: _finiquito_signature_page__WEBPACK_IMPORTED_MODULE_0__.FiniquitoSignaturePage
}];
let FiniquitoSignaturePageRoutingModule = class FiniquitoSignaturePageRoutingModule {};
FiniquitoSignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FiniquitoSignaturePageRoutingModule);


/***/ }),

/***/ 79636:
/*!*******************************************************************!*\
  !*** ./src/app/finiquito-signature/finiquito-signature.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoSignaturePageModule": () => (/* binding */ FiniquitoSignaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _finiquito_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finiquito-signature-routing.module */ 3101);
/* harmony import */ var _finiquito_signature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finiquito-signature.page */ 42071);







let FiniquitoSignaturePageModule = class FiniquitoSignaturePageModule {};
FiniquitoSignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _finiquito_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__.FiniquitoSignaturePageRoutingModule],
  declarations: [_finiquito_signature_page__WEBPACK_IMPORTED_MODULE_1__.FiniquitoSignaturePage]
})], FiniquitoSignaturePageModule);


/***/ }),

/***/ 42071:
/*!*****************************************************************!*\
  !*** ./src/app/finiquito-signature/finiquito-signature.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniquitoSignaturePage": () => (/* binding */ FiniquitoSignaturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _finiquito_signature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finiquito-signature.page.html?ngResource */ 91950);
/* harmony import */ var _finiquito_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finiquito-signature.page.scss?ngResource */ 29701);
/* harmony import */ var _finiquito_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finiquito_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 84465);









let FiniquitoSignaturePage = class FiniquitoSignaturePage {
  constructor(platform, router, toaster) {
    this.platform = platform;
    this.router = router;
    this.toaster = toaster;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.receiverName = localStorage.getItem('NombreQuienRecibe') || 'Beneficiario';
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.logoFicohsa;
  }
  ngAfterViewInit() {
    setTimeout(() => this.initializeSignaturePad());
  }
  ionViewDidEnter() {
    if (!this.signaturePad) {
      setTimeout(() => this.initializeSignaturePad());
    }
  }
  initializeSignaturePad() {
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas || this.signaturePad) {
      return;
    }
    const wrapper = canvas.parentElement;
    const width = wrapper?.clientWidth || Math.max(this.platform.width() - 24, 280);
    const height = wrapper?.clientHeight || Math.max(this.platform.height() - 250, 260);
    const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.getContext('2d')?.scale(pixelRatio, pixelRatio);
    this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, {
      backgroundColor: '#ffffff',
      minWidth: 1,
      maxWidth: 2,
      dotSize: 3
    });
    const savedSignature = localStorage.getItem(this.signatureStorageKey);
    if (savedSignature) {
      this.signaturePad.fromDataURL(savedSignature, {
        ratio: pixelRatio
      });
    } else {
      this.signaturePad.clear();
    }
  }
  get signatureStorageKey() {
    return `finiquitoSignature-${this.idAtencion}`;
  }
  clear() {
    this.signaturePad?.clear();
  }
  save() {
    if (!this.signaturePad || this.signaturePad.isEmpty()) {
      this.toaster.presentToastNoButtonsRed('El beneficiario debe firmar antes de continuar.', 'top', 'firma');
      return;
    }
    localStorage.setItem(this.signatureStorageKey, this.signaturePad.toDataURL('image/jpeg'));
    this.toaster.presentToastNoButtons('Firma del beneficiario registrada.', 'top', 'firma');
    this.router.navigate(['./finiquito']);
  }
  goBack() {
    this.router.navigate(['./finiquito']);
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
    }];
  }
  static {
    this.propDecorators = {
      signatureCanvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
        args: ['signatureCanvas', {
          static: false
        }]
      }]
    };
  }
};
FiniquitoSignaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-finiquito-signature',
  template: _finiquito_signature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_finiquito_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FiniquitoSignaturePage);


/***/ }),

/***/ 29701:
/*!******************************************************************************!*\
  !*** ./src/app/finiquito-signature/finiquito-signature.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 52px;\n  text-align: center;\n}\n\n.beneficiary-signature-page {\n  --background: #eef3f7;\n}\n\n.signature-workspace {\n  box-sizing: border-box;\n  display: grid;\n  gap: 10px;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  height: 100%;\n  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n}\n\n.signature-context {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  gap: 14px;\n  min-height: 88px;\n  padding: 10px 14px;\n}\n\n.signature-context img {\n  flex: 0 0 auto;\n  height: auto;\n  max-width: 190px;\n  object-fit: contain;\n  width: 25%;\n}\n\n.signature-context span {\n  color: #0764d8;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.signature-context h1 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0;\n}\n\n.signature-context p {\n  color: #607792;\n  font-size: 0.76rem;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.signature-pad-shell {\n  background: #ffffff;\n  border: 2px dashed #aebfd0;\n  border-radius: 7px;\n  min-height: 0;\n  overflow: hidden;\n  position: relative;\n  touch-action: none;\n}\n\n.signature-pad-shell canvas {\n  display: block;\n  touch-action: none;\n}\n\n.signature-controls {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);\n}\n\n.signature-controls ion-button {\n  --border-radius: 6px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0;\n}\n\n@media (max-width: 699px) {\n  .signature-workspace {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .signature-context {\n    gap: 9px;\n    min-height: 78px;\n    padding: 8px 10px;\n  }\n  .signature-context img {\n    max-width: 115px;\n    width: 34%;\n  }\n  .signature-context h1 {\n    font-size: 0.88rem;\n  }\n  .signature-context p {\n    font-size: 0.68rem;\n  }\n  .signature-controls ion-button {\n    font-size: 0.75rem;\n    height: 44px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/finiquito-signature/finiquito-signature.page.scss"],"names":[],"mappings":"AAAA;EACE,iCAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,sBAAA;EACA,aAAA;EACA,SAAA;EACA,4CAAA;EACA,YAAA;EACA,2DAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,aAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACF;;AAEA;EACE,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,0DAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;AACF;;AAEA;EACE;IACE,iBAAA;IACA,kBAAA;EACF;EAEA;IACE,QAAA;IACA,gBAAA;IACA,iBAAA;EAAF;EAGA;IACE,gBAAA;IACA,UAAA;EADF;EAIA;IACE,kBAAA;EAFF;EAKA;IACE,kBAAA;EAHF;EAMA;IACE,kBAAA;IACA,YAAA;EAJF;AACF","sourcesContent":["ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 52px;\n  text-align: center;\n}\n\n.beneficiary-signature-page {\n  --background: #eef3f7;\n}\n\n.signature-workspace {\n  box-sizing: border-box;\n  display: grid;\n  gap: 10px;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  height: 100%;\n  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n}\n\n.signature-context {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  gap: 14px;\n  min-height: 88px;\n  padding: 10px 14px;\n}\n\n.signature-context img {\n  flex: 0 0 auto;\n  height: auto;\n  max-width: 190px;\n  object-fit: contain;\n  width: 25%;\n}\n\n.signature-context span {\n  color: #0764d8;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.signature-context h1 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0;\n}\n\n.signature-context p {\n  color: #607792;\n  font-size: 0.76rem;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.signature-pad-shell {\n  background: #ffffff;\n  border: 2px dashed #aebfd0;\n  border-radius: 7px;\n  min-height: 0;\n  overflow: hidden;\n  position: relative;\n  touch-action: none;\n}\n\n.signature-pad-shell canvas {\n  display: block;\n  touch-action: none;\n}\n\n.signature-controls {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);\n}\n\n.signature-controls ion-button {\n  --border-radius: 6px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0;\n}\n\n@media (max-width: 699px) {\n  .signature-workspace {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  .signature-context {\n    gap: 9px;\n    min-height: 78px;\n    padding: 8px 10px;\n  }\n\n  .signature-context img {\n    max-width: 115px;\n    width: 34%;\n  }\n\n  .signature-context h1 {\n    font-size: 0.88rem;\n  }\n\n  .signature-context p {\n    font-size: 0.68rem;\n  }\n\n  .signature-controls ion-button {\n    font-size: 0.75rem;\n    height: 44px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 91950:
/*!******************************************************************************!*\
  !*** ./src/app/finiquito-signature/finiquito-signature.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button aria-label=\"Regresar al finiquito\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Firma del beneficiario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\" class=\"beneficiary-signature-page\">\n  <main class=\"signature-workspace\">\n    <header class=\"signature-context\">\n      <img [src]=\"fsLogo\" alt=\"Ficohsa Seguros\" />\n      <div>\n        <span>Finiquito - Atención #{{idAtencion}}</span>\n        <h1>{{receiverName}}</h1>\n        <p>Firme dentro del área blanca para confirmar la lectura y aceptación del documento.</p>\n      </div>\n    </header>\n\n    <section class=\"signature-pad-shell\" aria-label=\"Área de firma del beneficiario\">\n      <canvas #signatureCanvas></canvas>\n    </section>\n\n    <footer class=\"signature-controls\">\n      <ion-button fill=\"outline\" (click)=\"clear()\">\n        <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n        Limpiar\n      </ion-button>\n      <ion-button (click)=\"save()\">\n        <ion-icon slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n        Usar esta firma\n      </ion-button>\n    </footer>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_finiquito-signature_finiquito-signature_module_ts.js.map