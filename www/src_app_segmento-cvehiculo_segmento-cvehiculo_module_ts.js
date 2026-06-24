(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-cvehiculo_segmento-cvehiculo_module_ts"],{

/***/ 59227:
/*!*************************************************************************!*\
  !*** ./src/app/segmento-cvehiculo/segmento-cvehiculo-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCvehiculoPageRoutingModule": () => (/* binding */ SegmentoCvehiculoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_cvehiculo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cvehiculo.page */ 8581);




const routes = [{
  path: '',
  component: _segmento_cvehiculo_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoCvehiculoPage
}];
let SegmentoCvehiculoPageRoutingModule = class SegmentoCvehiculoPageRoutingModule {};
SegmentoCvehiculoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoCvehiculoPageRoutingModule);


/***/ }),

/***/ 30202:
/*!*****************************************************************!*\
  !*** ./src/app/segmento-cvehiculo/segmento-cvehiculo.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCvehiculoPageModule": () => (/* binding */ SegmentoCvehiculoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_cvehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cvehiculo-routing.module */ 59227);
/* harmony import */ var _segmento_cvehiculo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-cvehiculo.page */ 8581);







let SegmentoCvehiculoPageModule = class SegmentoCvehiculoPageModule {};
SegmentoCvehiculoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_cvehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoCvehiculoPageRoutingModule],
  declarations: [_segmento_cvehiculo_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoCvehiculoPage]
})], SegmentoCvehiculoPageModule);


/***/ }),

/***/ 8581:
/*!***************************************************************!*\
  !*** ./src/app/segmento-cvehiculo/segmento-cvehiculo.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCvehiculoPage": () => (/* binding */ SegmentoCvehiculoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_cvehiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-cvehiculo.page.html?ngResource */ 31322);
/* harmony import */ var _segmento_cvehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-cvehiculo.page.scss?ngResource */ 69979);
/* harmony import */ var _segmento_cvehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segmento_cvehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SegmentoCvehiculoPage = class SegmentoCvehiculoPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SegmentoCvehiculoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-segmento-cvehiculo',
  template: _segmento_cvehiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segmento_cvehiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentoCvehiculoPage);


/***/ }),

/***/ 69979:
/*!****************************************************************************!*\
  !*** ./src/app/segmento-cvehiculo/segmento-cvehiculo.page.scss?ngResource ***!
  \****************************************************************************/
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

/***/ 31322:
/*!****************************************************************************!*\
  !*** ./src/app/segmento-cvehiculo/segmento-cvehiculo.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>segmento-cvehiculo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-cvehiculo_segmento-cvehiculo_module_ts.js.map