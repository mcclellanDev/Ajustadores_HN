(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_foto-reporte_foto-reporte_module_ts"],{

/***/ 69068:
/*!*************************************************************!*\
  !*** ./src/app/foto-reporte/foto-reporte-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoReportePageRoutingModule": () => (/* binding */ FotoReportePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _foto_reporte_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foto-reporte.page */ 31186);




const routes = [{
  path: '',
  component: _foto_reporte_page__WEBPACK_IMPORTED_MODULE_0__.FotoReportePage
}];
let FotoReportePageRoutingModule = class FotoReportePageRoutingModule {};
FotoReportePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FotoReportePageRoutingModule);


/***/ }),

/***/ 5618:
/*!*****************************************************!*\
  !*** ./src/app/foto-reporte/foto-reporte.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoReportePageModule": () => (/* binding */ FotoReportePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _foto_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foto-reporte-routing.module */ 69068);
/* harmony import */ var _foto_reporte_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foto-reporte.page */ 31186);







let FotoReportePageModule = class FotoReportePageModule {};
FotoReportePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _foto_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__.FotoReportePageRoutingModule],
  declarations: [_foto_reporte_page__WEBPACK_IMPORTED_MODULE_1__.FotoReportePage]
})], FotoReportePageModule);


/***/ }),

/***/ 31186:
/*!***************************************************!*\
  !*** ./src/app/foto-reporte/foto-reporte.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoReportePage": () => (/* binding */ FotoReportePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _foto_reporte_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foto-reporte.page.html?ngResource */ 3792);
/* harmony import */ var _foto_reporte_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foto-reporte.page.scss?ngResource */ 73476);
/* harmony import */ var _foto_reporte_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foto_reporte_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/default-images */ 35263);





let FotoReportePage = class FotoReportePage {
  constructor() {
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_2__.logoFicohsa;
  }
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
FotoReportePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-foto-reporte',
  template: _foto_reporte_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_foto_reporte_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FotoReportePage);


/***/ }),

/***/ 73476:
/*!****************************************************************!*\
  !*** ./src/app/foto-reporte/foto-reporte.page.scss?ngResource ***!
  \****************************************************************/
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

/***/ 3792:
/*!****************************************************************!*\
  !*** ./src/app/foto-reporte/foto-reporte.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<img alt=\"Ficohsa Seguros\" src=\"{{fsLogo}}\" style=\"width: 281px; height: 61px; margin-left: 15px; margin-top: 15px;\" />\n";

/***/ })

}]);
//# sourceMappingURL=src_app_foto-reporte_foto-reporte_module_ts.js.map