(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_printer_printer_module_ts"],{

/***/ 85052:
/*!***************************************************!*\
  !*** ./src/app/printer/printer-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPageRoutingModule": () => (/* binding */ PrinterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _printer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer.page */ 18272);




const routes = [{
  path: '',
  component: _printer_page__WEBPACK_IMPORTED_MODULE_0__.PrinterPage
}];
let PrinterPageRoutingModule = class PrinterPageRoutingModule {};
PrinterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PrinterPageRoutingModule);


/***/ }),

/***/ 45957:
/*!*******************************************!*\
  !*** ./src/app/printer/printer.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPageModule": () => (/* binding */ PrinterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _printer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer-routing.module */ 85052);
/* harmony import */ var _printer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printer.page */ 18272);
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formulario/formulario.module */ 38312);








let PrinterPageModule = class PrinterPageModule {};
PrinterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_printer_page__WEBPACK_IMPORTED_MODULE_1__.PrinterPage],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _printer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrinterPageRoutingModule, _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_2__.FormularioPageModule]
})], PrinterPageModule);


/***/ }),

/***/ 18272:
/*!*****************************************!*\
  !*** ./src/app/printer/printer.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPage": () => (/* binding */ PrinterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _printer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer.page.html?ngResource */ 59864);
/* harmony import */ var _printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printer.page.scss?ngResource */ 92445);
/* harmony import */ var _printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_printer_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/printer-center */ 75929);






let PrinterPage = class PrinterPage {
  constructor(router) {
    this.router = router;
    this.results = [];
    this.imagenes = [];
    this.iconos = _environments_printer_center__WEBPACK_IMPORTED_MODULE_2__.printerIcons;
    this.dateAt = Date.now();
    this.timer = 0;
    this.busca = "";
    this.openingIndex = null;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.urlApi = localStorage.getItem('apiUrl');
    console.log('Hola printer');
    console.dir(this.iconos);
    /*
          for (let index = 0; index < printerIcons.length; index++) {
            const element = printerIcons[index];
            
            console.log('opcion de impresion '+ element.descripcion)
    
            if (index == (printerIcons.length-1)) {
              console.log('Si llegamos')
            }
          }
          */
  }

  ngOnInit() {}
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter(d => d.Cliente.toLowerCase().indexOf(query) > -1);
  }
  imprimirPDF(indexPrinter) {
    const isTestEnvironment = (this.urlApi || '').includes('testportal');
    const documents = isTestEnvironment ? _environments_printer_center__WEBPACK_IMPORTED_MODULE_2__.printerIcons_test : _environments_printer_center__WEBPACK_IMPORTED_MODULE_2__.printerIcons;
    const selectedDocument = documents[indexPrinter];
    if (!selectedDocument) {
      return;
    }
    this.openingIndex = indexPrinter;
    this.printUrl = selectedDocument.urlPreview + _environments_printer_center__WEBPACK_IMPORTED_MODULE_2__.printPrefix + this.idAtencion;
    window.open(this.printUrl, '_blank');
    setTimeout(() => {
      this.openingIndex = null;
    }, 900);
  }
  getDocumentDescription(description) {
    const normalized = description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (normalized.includes('fotograf')) {
      return 'Evidencia visual registrada durante la atención.';
    }
    if (normalized.includes('cotizacion')) {
      return 'Detalle de valoración y costos del taller seleccionado.';
    }
    if (normalized.includes('finiquito')) {
      return 'Constancia de entrega y aceptación del pago.';
    }
    if (normalized.includes('reclamo')) {
      return 'Información consolidada del reclamo del asegurado.';
    }
    if (normalized.includes('inspeccion')) {
      return 'Resultado documentado de la inspección del ajustador.';
    }
    if (normalized.includes('cobertura')) {
      return 'Resumen del análisis y cierre de las coberturas.';
    }
    if (normalized.includes('deuda') || normalized.includes('responsabilidad')) {
      return 'Acuerdo formal generado durante la gestión del caso.';
    } else {
      return 'Documento generado para el expediente de la atención.';
    }
  }
  goPrinters() {
    this.router.navigate(['./printer']);
  }
  goBack() {
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: Number(this.idAtencion),
        Source: 1
      }
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }];
  }
};
PrinterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-printer',
  template: _printer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrinterPage);


/***/ }),

/***/ 92445:
/*!******************************************************!*\
  !*** ./src/app/printer/printer.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".reports-header ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n  --min-height: 58px;\n}\n\n.reports-header ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\n.reports-header ion-button,\n.reports-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.reports-content {\n  --background: #eef3f7;\n  --padding-bottom: calc(18px + env(safe-area-inset-bottom));\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 14px;\n}\n\n.reports-shell {\n  margin: 0 auto;\n  max-width: 1180px;\n}\n\n.reports-summary {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-left: 4px solid var(--primaryColor);\n  border-radius: 7px;\n  display: grid;\n  gap: 14px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  padding: 16px 18px;\n}\n\n.summary-icon {\n  align-items: center;\n  background: #eaf2ff;\n  border-radius: 6px;\n  color: var(--primaryColor);\n  display: flex;\n  height: 52px;\n  justify-content: center;\n  width: 52px;\n}\n\n.summary-icon ion-icon {\n  font-size: 1.75rem;\n}\n\n.summary-copy span,\n.reports-section-heading span,\n.report-copy span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.summary-copy h1 {\n  color: #17365d;\n  font-size: 1.15rem;\n  margin: 2px 0 3px;\n}\n\n.summary-copy p {\n  color: #61758a;\n  font-size: 0.82rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.summary-count {\n  align-items: center;\n  background: #f3f7fb;\n  border: 1px solid #dce6ef;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  min-width: 72px;\n  padding: 8px 10px;\n}\n\n.summary-count strong {\n  color: var(--primaryColor);\n  font-size: 1.15rem;\n}\n\n.summary-count span {\n  color: #617b94;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n\n.reports-section-heading {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 18px 2px 10px;\n}\n\n.reports-section-heading h2 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.reports-section-heading ion-icon {\n  color: #6e8aa4;\n  font-size: 1.4rem;\n}\n\n.reports-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.report-card {\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 190px;\n  padding: 14px;\n}\n\n.report-card-main {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n}\n\n.report-icon {\n  align-items: center;\n  background: #edf4fb;\n  border: 1px solid #d6e4f0;\n  border-radius: 6px;\n  color: var(--primaryColor);\n  display: flex;\n  flex: 0 0 46px;\n  height: 46px;\n  justify-content: center;\n}\n\n.report-icon ion-icon {\n  font-size: 1.55rem;\n}\n\n.report-copy {\n  min-width: 0;\n}\n\n.report-copy h3 {\n  color: #17365d;\n  font-size: 0.92rem;\n  line-height: 1.25;\n  margin: 1px 0 7px;\n  overflow-wrap: anywhere;\n}\n\n.report-copy p {\n  color: #667c91;\n  font-size: 0.75rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.report-card ion-button {\n  --border-color: var(--primaryColor);\n  --border-radius: 5px;\n  --box-shadow: none;\n  --color: var(--primaryColor);\n  font-size: 0.76rem;\n  font-weight: 800;\n  height: 40px;\n  margin: 14px 0 0;\n  text-transform: none;\n}\n\n.report-card ion-spinner {\n  height: 17px;\n  width: 17px;\n}\n\n@media (min-width: 1180px) {\n  .reports-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (max-width: 820px) {\n  .reports-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 520px) {\n  .reports-content {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 8px;\n  }\n  .reports-summary {\n    gap: 10px;\n    grid-template-columns: auto minmax(0, 1fr);\n    padding: 13px;\n  }\n  .summary-count {\n    align-items: baseline;\n    flex-direction: row;\n    gap: 5px;\n    grid-column: 1/-1;\n    justify-content: center;\n    min-width: 0;\n    padding: 6px 8px;\n  }\n  .summary-copy p {\n    font-size: 0.76rem;\n  }\n  .reports-grid {\n    grid-template-columns: 1fr;\n  }\n  .report-card {\n    min-height: 174px;\n    padding: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/printer/printer.page.scss"],"names":[],"mappings":"AAAA;EACE,iCAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,0DAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,0CAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,+CAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;;;EAGE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;EACE,0BAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,gDAAA;AACF;;AAEA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,SAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,0BAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,uBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,uBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,mCAAA;EACA,oBAAA;EACA,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;AACF;;AAEA;EACE;IACE,gDAAA;EACF;AACF;AAEA;EACE;IACE,gDAAA;EAAF;AACF;AAGA;EACE;IACE,kBAAA;IACA,oBAAA;IACA,kBAAA;EADF;EAIA;IACE,SAAA;IACA,0CAAA;IACA,aAAA;EAFF;EAKA;IACE,qBAAA;IACA,mBAAA;IACA,QAAA;IACA,iBAAA;IACA,uBAAA;IACA,YAAA;IACA,gBAAA;EAHF;EAMA;IACE,kBAAA;EAJF;EAOA;IACE,0BAAA;EALF;EAQA;IACE,iBAAA;IACA,aAAA;EANF;AACF","sourcesContent":[".reports-header ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n  --min-height: 58px;\n}\n\n.reports-header ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\n.reports-header ion-button,\n.reports-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.reports-content {\n  --background: #eef3f7;\n  --padding-bottom: calc(18px + env(safe-area-inset-bottom));\n  --padding-end: 14px;\n  --padding-start: 14px;\n  --padding-top: 14px;\n}\n\n.reports-shell {\n  margin: 0 auto;\n  max-width: 1180px;\n}\n\n.reports-summary {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-left: 4px solid var(--primaryColor);\n  border-radius: 7px;\n  display: grid;\n  gap: 14px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  padding: 16px 18px;\n}\n\n.summary-icon {\n  align-items: center;\n  background: #eaf2ff;\n  border-radius: 6px;\n  color: var(--primaryColor);\n  display: flex;\n  height: 52px;\n  justify-content: center;\n  width: 52px;\n}\n\n.summary-icon ion-icon {\n  font-size: 1.75rem;\n}\n\n.summary-copy span,\n.reports-section-heading span,\n.report-copy span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.summary-copy h1 {\n  color: #17365d;\n  font-size: 1.15rem;\n  margin: 2px 0 3px;\n}\n\n.summary-copy p {\n  color: #61758a;\n  font-size: 0.82rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.summary-count {\n  align-items: center;\n  background: #f3f7fb;\n  border: 1px solid #dce6ef;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  min-width: 72px;\n  padding: 8px 10px;\n}\n\n.summary-count strong {\n  color: var(--primaryColor);\n  font-size: 1.15rem;\n}\n\n.summary-count span {\n  color: #617b94;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n\n.reports-section-heading {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 18px 2px 10px;\n}\n\n.reports-section-heading h2 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.reports-section-heading ion-icon {\n  color: #6e8aa4;\n  font-size: 1.4rem;\n}\n\n.reports-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.report-card {\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 190px;\n  padding: 14px;\n}\n\n.report-card-main {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n}\n\n.report-icon {\n  align-items: center;\n  background: #edf4fb;\n  border: 1px solid #d6e4f0;\n  border-radius: 6px;\n  color: var(--primaryColor);\n  display: flex;\n  flex: 0 0 46px;\n  height: 46px;\n  justify-content: center;\n}\n\n.report-icon ion-icon {\n  font-size: 1.55rem;\n}\n\n.report-copy {\n  min-width: 0;\n}\n\n.report-copy h3 {\n  color: #17365d;\n  font-size: 0.92rem;\n  line-height: 1.25;\n  margin: 1px 0 7px;\n  overflow-wrap: anywhere;\n}\n\n.report-copy p {\n  color: #667c91;\n  font-size: 0.75rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.report-card ion-button {\n  --border-color: var(--primaryColor);\n  --border-radius: 5px;\n  --box-shadow: none;\n  --color: var(--primaryColor);\n  font-size: 0.76rem;\n  font-weight: 800;\n  height: 40px;\n  margin: 14px 0 0;\n  text-transform: none;\n}\n\n.report-card ion-spinner {\n  height: 17px;\n  width: 17px;\n}\n\n@media (min-width: 1180px) {\n  .reports-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 820px) {\n  .reports-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 520px) {\n  .reports-content {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 8px;\n  }\n\n  .reports-summary {\n    gap: 10px;\n    grid-template-columns: auto minmax(0, 1fr);\n    padding: 13px;\n  }\n\n  .summary-count {\n    align-items: baseline;\n    flex-direction: row;\n    gap: 5px;\n    grid-column: 1 / -1;\n    justify-content: center;\n    min-width: 0;\n    padding: 6px 8px;\n  }\n\n  .summary-copy p {\n    font-size: 0.76rem;\n  }\n\n  .reports-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .report-card {\n    min-height: 174px;\n    padding: 12px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59864:
/*!******************************************************!*\
  !*** ./src/app/printer/printer.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"reports-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button aria-label=\"Regresar al expediente\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Reportes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"reports-content\">\n  <div class=\"reports-shell\">\n    <section class=\"reports-summary\">\n      <div class=\"summary-icon\">\n        <ion-icon name=\"documents-outline\"></ion-icon>\n      </div>\n      <div class=\"summary-copy\">\n        <span>Centro de documentos</span>\n        <h1>Atención #{{idAtencion}}</h1>\n        <p>Consulta los documentos y reportes generados durante la gestión de esta atención.</p>\n      </div>\n      <div class=\"summary-count\" aria-label=\"Cantidad de reportes\">\n        <strong>{{iconos.length}}</strong>\n        <span>reportes</span>\n      </div>\n    </section>\n\n    <div class=\"reports-section-heading\">\n      <div>\n        <span>Documentos disponibles</span>\n        <h2>Historial de la atención</h2>\n      </div>\n      <ion-icon name=\"reader-outline\"></ion-icon>\n    </div>\n\n    <section class=\"reports-grid\">\n      <article class=\"report-card\" *ngFor=\"let item of iconos; let i = index\">\n        <div class=\"report-card-main\">\n          <div class=\"report-icon\">\n            <ion-icon [name]=\"item.name\"></ion-icon>\n          </div>\n          <div class=\"report-copy\">\n            <h3>{{item.descripcion}}</h3>\n            <p>{{getDocumentDescription(item.descripcion)}}</p>\n          </div>\n        </div>\n\n        <ion-button fill=\"outline\" expand=\"block\" [disabled]=\"openingIndex === i\" (click)=\"imprimirPDF(i)\">\n          <ion-spinner *ngIf=\"openingIndex === i\" slot=\"start\" name=\"crescent\"></ion-spinner>\n          <ion-icon *ngIf=\"openingIndex !== i\" slot=\"start\" name=\"eye-outline\"></ion-icon>\n          {{openingIndex === i ? 'Abriendo...' : 'Ver reporte'}}\n          <ion-icon *ngIf=\"openingIndex !== i\" slot=\"end\" name=\"open-outline\"></ion-icon>\n        </ion-button>\n      </article>\n    </section>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_printer_printer_module_ts.js.map