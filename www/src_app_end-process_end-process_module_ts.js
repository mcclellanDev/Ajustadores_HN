(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_end-process_end-process_module_ts"],{

/***/ 72073:
/*!***********************************************************!*\
  !*** ./src/app/end-process/end-process-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndProcessPageRoutingModule": () => (/* binding */ EndProcessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _end_process_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-process.page */ 98896);




const routes = [{
  path: '',
  component: _end_process_page__WEBPACK_IMPORTED_MODULE_0__.EndProcessPage
}];
let EndProcessPageRoutingModule = class EndProcessPageRoutingModule {};
EndProcessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EndProcessPageRoutingModule);


/***/ }),

/***/ 17169:
/*!***************************************************!*\
  !*** ./src/app/end-process/end-process.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndProcessPageModule": () => (/* binding */ EndProcessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _end_process_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-process-routing.module */ 72073);
/* harmony import */ var _end_process_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./end-process.page */ 98896);







let EndProcessPageModule = class EndProcessPageModule {};
EndProcessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _end_process_routing_module__WEBPACK_IMPORTED_MODULE_0__.EndProcessPageRoutingModule],
  declarations: [_end_process_page__WEBPACK_IMPORTED_MODULE_1__.EndProcessPage]
})], EndProcessPageModule);


/***/ }),

/***/ 98896:
/*!*************************************************!*\
  !*** ./src/app/end-process/end-process.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndProcessPage": () => (/* binding */ EndProcessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _end_process_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./end-process.page.html?ngResource */ 30315);
/* harmony import */ var _end_process_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./end-process.page.scss?ngResource */ 69441);
/* harmony import */ var _end_process_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_end_process_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







let EndProcessPage = class EndProcessPage {
  constructor(routeActive, storageService, router) {
    this.routeActive = routeActive;
    this.storageService = storageService;
    this.router = router;
    this.storageCache = [];
    this.isLoading = false;
    this.routeActive.queryParams.subscribe(params => {
      this.idAtencion = params.Id;
      this.codigoReclamoFicohsa = params.CodigoReclamoFicohsa;
      this.codigoBPMFicohsa = params.CodigoBPMFicohsa;
    });
  }
  ngOnInit() {
    this.dataInterval = setInterval(() => {
      this.checkStorage();
    }, 1000);
    this.outletDeactivate();
  }
  outletDeactivate() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivationStart && e.snapshot.outlet === "tab1") this.outlet.deactivate();
    });
  }
  checkStorage() {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('danioPic') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('danioOtro') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('datos-') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (localStorage.key(i).indexOf('dataProcess') == 0) {
        this.storageCache.push(localStorage.key(i));
      }
      if (i == localStorage.length - 1) {
        this.isLoading = false;
        if (this.storageCache.length > 0) {
          console.log('limpiando ... ');
          this.storageService.clearSiniestroArrays();
          this.clearSegmentsStorage();
        } else {
          this.storageCache = [];
          clearInterval(this.dataInterval);
        }
      }
    }
  }
  goHome() {
    window.location.reload();
  }
  clearSegmentsStorage() {
    // Segmento Solicitante
    localStorage.removeItem('dataProcess-CorreoElectronico');
    localStorage.removeItem('dataProcess-FechaNacimientoConductor');
    localStorage.removeItem('dataProcess-Edad');
    localStorage.removeItem('dataProcess-TerceroResponsable');
    localStorage.removeItem('dataProcess-LicenciaEstadoCulpable');
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elGenero');
    localStorage.removeItem('elParentesco');
    localStorage.removeItem('tipoSolicitante');
    localStorage.removeItem('elSolicitante');
    localStorage.removeItem('tipoCobertura');
    localStorage.removeItem('laCobertura');
    localStorage.removeItem('elNombreCliente');
    localStorage.removeItem('laIdentidadCliente');
    localStorage.removeItem('elTelefonoOrigen');
    localStorage.removeItem('elCorreoElectronico');
    // Segmento Vehiculo
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elKilometraje');
    // Segmento Caracteristicas
    localStorage.removeItem('elTraslado');
    localStorage.removeItem('elTipoGrua');
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
    localStorage.removeItem('laTransmision');
    localStorage.removeItem('elRetrovisor');
    localStorage.removeItem('elOverfender');
    localStorage.removeItem('laColaPato');
    localStorage.removeItem('laCinta');
    localStorage.removeItem('losRines');
    // Segmento Danios
    localStorage.removeItem('elCompromisoPago');
    localStorage.removeItem('elCompromisoPagoObservacion');
    localStorage.removeItem('laReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');
    localStorage.removeItem('coords-latitud');
    localStorage.removeItem('coords-longitud');
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
    }, {
      type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }];
  }
  static {
    this.propDecorators = {
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet]
      }]
    };
  }
};
EndProcessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-end-process',
  template: _end_process_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_end_process_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EndProcessPage);


/***/ }),

/***/ 69441:
/*!**************************************************************!*\
  !*** ./src/app/end-process/end-process.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/end-process/end-process.page.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAJ","sourcesContent":["ion-spinner{\n\tposition: fixed;\n    top: 28%;\n    left: 40%;\n    z-index: 999;\n    width: 20%;\n    height: 20%;\n\t//background-color: #00213f;\n}\n\n#spinFooter{\n\tposition: fixed;\n    background: black;\n    opacity: 0.6;\n    height: 100vh;\n    width: 100vw;\n    z-index: 900;\n    bottom: 0;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30315:
/*!**************************************************************!*\
  !*** ./src/app/end-process/end-process.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\n  <br><br><br>\n <ion-grid>\n  <ion-row style=\"text-align: center;\">\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\" >\n        <ion-badge style=\"height: 120px;width: 100%;text-align: left;font-size: 1.1rem; background: var(--blueGrayColor);\">\n          <ion-grid style=\"width: 100%;\">\n            <ion-row style=\"width: 100%;\">\n              <ion-col size=\"12\">Atención {{idAtencion}} finalizada correctamente!</ion-col>\n              <ion-col size=\"2\">Código BPM</ion-col>\n              <ion-col size=\"8\">{{codigoBPMFicohsa}}</ion-col>\n            </ion-row>\n            <ion-row style=\"width: 100%;\">\n              <ion-col size=\"2\">Código Reclamo</ion-col>\n              <ion-col size=\"8\">{{codigoReclamoFicohsa}}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-badge>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <br><br><br><br><br><br><br>\n     <img style=\"width: 180px; height:180px\" src=\"../../assets/img/oficina-en-casa.gif\" />\n      <!--ion-icon name=\"eye\" style=\"font-size: 2rem; margin: 15px; color: #f14f23;\" id=\"open-modal-sign-aju\" (click)=\"recargarFirma()\"></!--ion-icon -->\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button (click)=\"goHome()\" style=\"float: right;\" size=\"large\">Volver a Inicio</ion-button>\n    </ion-col>\n    <ion-col size=\"4\"></ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_end-process_end-process_module_ts.js.map