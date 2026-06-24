(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adeuda-signature_adeuda-signature_module_ts"],{

/***/ 77794:
/*!*********************************************************************!*\
  !*** ./src/app/adeuda-signature/adeuda-signature-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaSignaturePageRoutingModule": () => (/* binding */ AdeudaSignaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _adeuda_signature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adeuda-signature.page */ 25616);




const routes = [{
  path: '',
  component: _adeuda_signature_page__WEBPACK_IMPORTED_MODULE_0__.AdeudaSignaturePage
}];
let AdeudaSignaturePageRoutingModule = class AdeudaSignaturePageRoutingModule {};
AdeudaSignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AdeudaSignaturePageRoutingModule);


/***/ }),

/***/ 25425:
/*!*************************************************************!*\
  !*** ./src/app/adeuda-signature/adeuda-signature.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaSignaturePageModule": () => (/* binding */ AdeudaSignaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _adeuda_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adeuda-signature-routing.module */ 77794);
/* harmony import */ var _adeuda_signature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adeuda-signature.page */ 25616);







let AdeudaSignaturePageModule = class AdeudaSignaturePageModule {};
AdeudaSignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _adeuda_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdeudaSignaturePageRoutingModule],
  declarations: [_adeuda_signature_page__WEBPACK_IMPORTED_MODULE_1__.AdeudaSignaturePage]
})], AdeudaSignaturePageModule);


/***/ }),

/***/ 25616:
/*!***********************************************************!*\
  !*** ./src/app/adeuda-signature/adeuda-signature.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaSignaturePage": () => (/* binding */ AdeudaSignaturePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _adeuda_signature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adeuda-signature.page.html?ngResource */ 24826);
/* harmony import */ var _adeuda_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adeuda-signature.page.scss?ngResource */ 75882);
/* harmony import */ var _adeuda_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adeuda_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 84465);









let AdeudaSignaturePage = class AdeudaSignaturePage {
  constructor(platform, router, toaster) {
    this.platform = platform;
    this.router = router;
    this.toaster = toaster;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.debtorName = this.getDebtorName();
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
  getDebtorName() {
    const agreement = JSON.parse(localStorage.getItem('deuda') || '{}') || {};
    return agreement.NombreDeudor || 'Persona responsable';
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
    return `adeudaSignature-${this.idAtencion}`;
  }
  clear() {
    this.signaturePad?.clear();
  }
  save() {
    if (!this.signaturePad || this.signaturePad.isEmpty()) {
      this.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de continuar.', 'top', 'firma');
      return;
    }
    localStorage.setItem(this.signatureStorageKey, this.signaturePad.toDataURL('image/jpeg'));
    this.toaster.presentToastNoButtons('Firma del deudor registrada.', 'top', 'firma');
    this.router.navigate(['./adeuda']);
  }
  goBack() {
    this.router.navigate(['./adeuda']);
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
AdeudaSignaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-adeuda-signature',
  template: _adeuda_signature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_adeuda_signature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AdeudaSignaturePage);


/***/ }),

/***/ 75882:
/*!************************************************************************!*\
  !*** ./src/app/adeuda-signature/adeuda-signature.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\nion-toolbar ion-button, ion-toolbar ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 52px;\n  text-align: center;\n}\n\n.debtor-signature-page {\n  --background: #eef3f7;\n}\n\n.signature-workspace {\n  box-sizing: border-box;\n  display: grid;\n  gap: 10px;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  height: 100%;\n  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n}\n\n.signature-context {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  gap: 14px;\n  min-height: 88px;\n  padding: 10px 14px;\n}\n\n.signature-context img {\n  flex: 0 0 auto;\n  height: auto;\n  max-width: 190px;\n  object-fit: contain;\n  width: 25%;\n}\n\n.signature-context span {\n  color: #0764d8;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.signature-context h1 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0;\n}\n\n.signature-context p {\n  color: #607792;\n  font-size: 0.76rem;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.signature-pad-shell {\n  background: #ffffff;\n  border: 2px dashed #aebfd0;\n  border-radius: 7px;\n  min-height: 0;\n  overflow: hidden;\n  position: relative;\n  touch-action: none;\n}\n\n.signature-pad-shell canvas {\n  display: block;\n  touch-action: none;\n}\n\n.signature-controls {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);\n}\n\n.signature-controls ion-button {\n  --border-radius: 6px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0;\n}\n\n@media (max-width: 699px) {\n  .signature-workspace {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .signature-context {\n    gap: 9px;\n    min-height: 78px;\n    padding: 8px 10px;\n  }\n  .signature-context img {\n    max-width: 115px;\n    width: 34%;\n  }\n  .signature-context h1 {\n    font-size: 0.88rem;\n  }\n  .signature-context p {\n    font-size: 0.68rem;\n  }\n  .signature-controls ion-button {\n    font-size: 0.75rem;\n    height: 44px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/adeuda-signature/adeuda-signature.page.scss"],"names":[],"mappings":"AAAA;EAAc,iCAAA;EAAmC,gBAAA;AAGjD;;AAFA;EAA+C,gBAAA;EAAkB,cAAA;AAOjE;;AANA;EAAwB,eAAA;EAAiB,gBAAA;EAAkB,iBAAA;EAAmB,oBAAA;EAAsB,kBAAA;AAcpG;;AAbA;EAAyB,qBAAA;AAiBzB;;AAhBA;EAAuB,sBAAA;EAAwB,aAAA;EAAe,SAAA;EAAW,4CAAA;EAA8C,YAAA;EAAc,2DAAA;AAyBrI;;AAxBA;EAAqB,mBAAA;EAAqB,mBAAA;EAAqB,yBAAA;EAA2B,kBAAA;EAAoB,aAAA;EAAe,SAAA;EAAW,gBAAA;EAAkB,kBAAA;AAmC1J;;AAlCA;EAAyB,cAAA;EAAgB,YAAA;EAAc,gBAAA;EAAkB,mBAAA;EAAqB,UAAA;AA0C9F;;AAzCA;EAA0B,cAAA;EAAgB,kBAAA;EAAmB,gBAAA;EAAkB,yBAAA;AAgD/E;;AA/CA;EAAwB,cAAA;EAAgB,eAAA;EAAiB,aAAA;AAqDzD;;AApDA;EAAuB,cAAA;EAAgB,kBAAA;EAAmB,iBAAA;EAAmB,SAAA;AA2D7E;;AA1DA;EAAuB,mBAAA;EAAqB,0BAAA;EAA4B,kBAAA;EAAoB,aAAA;EAAe,gBAAA;EAAkB,kBAAA;EAAoB,kBAAA;AAoEjJ;;AAnEA;EAA8B,cAAA;EAAgB,kBAAA;AAwE9C;;AAvEA;EAAsB,aAAA;EAAe,SAAA;EAAW,0DAAA;AA6EhD;;AA5EA;EAAiC,oBAAA;EAAsB,kBAAA;EAAmB,gBAAA;EAAkB,YAAA;EAAc,SAAA;AAoF1G;;AAnFA;EACE;IAAuB,iBAAA;IAAmB,kBAAA;EAwF1C;EAvFA;IAAqB,QAAA;IAAU,gBAAA;IAAkB,iBAAA;EA4FjD;EA3FA;IAAyB,gBAAA;IAAkB,UAAA;EA+F3C;EA9FA;IAAwB,kBAAA;EAiGxB;EAhGA;IAAuB,kBAAA;EAmGvB;EAlGA;IAAiC,kBAAA;IAAmB,YAAA;EAsGpD;AACF","sourcesContent":["ion-toolbar { --background: var(--primaryColor); --color: #ffffff; }\nion-toolbar ion-button, ion-toolbar ion-icon { --color: #ffffff; color: #ffffff; }\nion-toolbar ion-title { font-size: 1rem; font-weight: 800; letter-spacing: 0; padding-inline: 52px; text-align: center; }\n.debtor-signature-page { --background: #eef3f7; }\n.signature-workspace { box-sizing: border-box; display: grid; gap: 10px; grid-template-rows: auto minmax(0, 1fr) auto; height: 100%; padding: 10px 12px calc(10px + env(safe-area-inset-bottom)); }\n.signature-context { align-items: center; background: #ffffff; border: 1px solid #d8e3ed; border-radius: 7px; display: flex; gap: 14px; min-height: 88px; padding: 10px 14px; }\n.signature-context img { flex: 0 0 auto; height: auto; max-width: 190px; object-fit: contain; width: 25%; }\n.signature-context span { color: #0764d8; font-size: .68rem; font-weight: 800; text-transform: uppercase; }\n.signature-context h1 { color: #17365d; font-size: 1rem; margin: 2px 0; }\n.signature-context p { color: #607792; font-size: .76rem; line-height: 1.35; margin: 0; }\n.signature-pad-shell { background: #ffffff; border: 2px dashed #aebfd0; border-radius: 7px; min-height: 0; overflow: hidden; position: relative; touch-action: none; }\n.signature-pad-shell canvas { display: block; touch-action: none; }\n.signature-controls { display: grid; gap: 10px; grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr); }\n.signature-controls ion-button { --border-radius: 6px; font-size: .82rem; font-weight: 800; height: 46px; margin: 0; }\n@media (max-width: 699px) {\n  .signature-workspace { padding-left: 8px; padding-right: 8px; }\n  .signature-context { gap: 9px; min-height: 78px; padding: 8px 10px; }\n  .signature-context img { max-width: 115px; width: 34%; }\n  .signature-context h1 { font-size: .88rem; }\n  .signature-context p { font-size: .68rem; }\n  .signature-controls ion-button { font-size: .75rem; height: 44px; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 24826:
/*!************************************************************************!*\
  !*** ./src/app/adeuda-signature/adeuda-signature.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button aria-label=\"Regresar al acuerdo\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Firma del deudor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollY]=\"false\" class=\"debtor-signature-page\">\n  <main class=\"signature-workspace\">\n    <header class=\"signature-context\">\n      <img [src]=\"fsLogo\" alt=\"Ficohsa Seguros\" />\n      <div>\n        <span>Acuerdo de deuda - Atención #{{idAtencion}}</span>\n        <h1>{{debtorName}}</h1>\n        <p>Firme dentro del área blanca para confirmar la lectura y aceptación del reconocimiento de deuda.</p>\n      </div>\n    </header>\n\n    <section class=\"signature-pad-shell\" aria-label=\"Área de firma del deudor\">\n      <canvas #signatureCanvas></canvas>\n    </section>\n\n    <footer class=\"signature-controls\">\n      <ion-button fill=\"outline\" (click)=\"clear()\">\n        <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n        Limpiar\n      </ion-button>\n      <ion-button (click)=\"save()\">\n        <ion-icon slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n        Usar esta firma\n      </ion-button>\n    </footer>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adeuda-signature_adeuda-signature_module_ts.js.map