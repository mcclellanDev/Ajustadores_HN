(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-cinformacion_segmento-cinformacion_module_ts"],{

/***/ 59428:
/*!*******************************************************************************!*\
  !*** ./src/app/segmento-cinformacion/segmento-cinformacion-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCinformacionPageRoutingModule": () => (/* binding */ SegmentoCinformacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_cinformacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cinformacion.page */ 4389);




const routes = [{
  path: '',
  component: _segmento_cinformacion_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoCinformacionPage
}];
let SegmentoCinformacionPageRoutingModule = class SegmentoCinformacionPageRoutingModule {};
SegmentoCinformacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoCinformacionPageRoutingModule);


/***/ }),

/***/ 4608:
/*!***********************************************************************!*\
  !*** ./src/app/segmento-cinformacion/segmento-cinformacion.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCinformacionPageModule": () => (/* binding */ SegmentoCinformacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_cinformacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cinformacion-routing.module */ 59428);
/* harmony import */ var _segmento_cinformacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-cinformacion.page */ 4389);







let SegmentoCinformacionPageModule = class SegmentoCinformacionPageModule {};
SegmentoCinformacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_cinformacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoCinformacionPageRoutingModule],
  declarations: [_segmento_cinformacion_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoCinformacionPage]
})], SegmentoCinformacionPageModule);


/***/ }),

/***/ 4389:
/*!*********************************************************************!*\
  !*** ./src/app/segmento-cinformacion/segmento-cinformacion.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCinformacionPage": () => (/* binding */ SegmentoCinformacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_cinformacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cinformacion.page.html?ngResource */ 16813);
/* harmony import */ var _segmento_cinformacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-cinformacion.page.scss?ngResource */ 36842);
/* harmony import */ var _segmento_cinformacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segmento_cinformacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SegmentoCinformacionPage = class SegmentoCinformacionPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SegmentoCinformacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-segmento-cinformacion',
  template: _segmento_cinformacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segmento_cinformacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentoCinformacionPage);


/***/ }),

/***/ 36842:
/*!**********************************************************************************!*\
  !*** ./src/app/segmento-cinformacion/segmento-cinformacion.page.scss?ngResource ***!
  \**********************************************************************************/
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

/***/ 16813:
/*!**********************************************************************************!*\
  !*** ./src/app/segmento-cinformacion/segmento-cinformacion.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>segmento-cinformacion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-cinformacion_segmento-cinformacion_module_ts.js.map