(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-fajustador_segmento-fajustador_module_ts"],{

/***/ 36518:
/*!***************************************************************************!*\
  !*** ./src/app/segmento-fajustador/segmento-fajustador-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFajustadorPageRoutingModule": () => (/* binding */ SegmentoFajustadorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_fajustador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-fajustador.page */ 9048);




const routes = [{
  path: '',
  component: _segmento_fajustador_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoFajustadorPage
}];
let SegmentoFajustadorPageRoutingModule = class SegmentoFajustadorPageRoutingModule {};
SegmentoFajustadorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoFajustadorPageRoutingModule);


/***/ }),

/***/ 64325:
/*!*******************************************************************!*\
  !*** ./src/app/segmento-fajustador/segmento-fajustador.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFajustadorPageModule": () => (/* binding */ SegmentoFajustadorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_fajustador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-fajustador-routing.module */ 36518);
/* harmony import */ var _segmento_fajustador_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-fajustador.page */ 9048);







let SegmentoFajustadorPageModule = class SegmentoFajustadorPageModule {};
SegmentoFajustadorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_fajustador_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoFajustadorPageRoutingModule],
  declarations: [_segmento_fajustador_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoFajustadorPage]
})], SegmentoFajustadorPageModule);


/***/ }),

/***/ 9048:
/*!*****************************************************************!*\
  !*** ./src/app/segmento-fajustador/segmento-fajustador.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFajustadorPage": () => (/* binding */ SegmentoFajustadorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_fajustador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-fajustador.page.html?ngResource */ 43416);
/* harmony import */ var _segmento_fajustador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-fajustador.page.scss?ngResource */ 4547);
/* harmony import */ var _segmento_fajustador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segmento_fajustador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SegmentoFajustadorPage = class SegmentoFajustadorPage {
  constructor() {
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
  }
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SegmentoFajustadorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-segmento-fajustador',
  template: _segmento_fajustador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segmento_fajustador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentoFajustadorPage);


/***/ }),

/***/ 4547:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-fajustador/segmento-fajustador.page.scss?ngResource ***!
  \******************************************************************************/
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

/***/ 43416:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-fajustador/segmento-fajustador.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-fajustador_segmento-fajustador_module_ts.js.map