(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-casegurado_segmento-casegurado_module_ts"],{

/***/ 4661:
/*!***************************************************************************!*\
  !*** ./src/app/segmento-casegurado/segmento-casegurado-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaseguradoPageRoutingModule": () => (/* binding */ SegmentoCaseguradoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_casegurado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-casegurado.page */ 95363);




const routes = [{
  path: '',
  component: _segmento_casegurado_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoCaseguradoPage
}];
let SegmentoCaseguradoPageRoutingModule = class SegmentoCaseguradoPageRoutingModule {};
SegmentoCaseguradoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoCaseguradoPageRoutingModule);


/***/ }),

/***/ 70514:
/*!*******************************************************************!*\
  !*** ./src/app/segmento-casegurado/segmento-casegurado.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaseguradoPageModule": () => (/* binding */ SegmentoCaseguradoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_casegurado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-casegurado-routing.module */ 4661);
/* harmony import */ var _segmento_casegurado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-casegurado.page */ 95363);







let SegmentoCaseguradoPageModule = class SegmentoCaseguradoPageModule {};
SegmentoCaseguradoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_casegurado_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoCaseguradoPageRoutingModule],
  declarations: [_segmento_casegurado_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoCaseguradoPage]
})], SegmentoCaseguradoPageModule);


/***/ }),

/***/ 95363:
/*!*****************************************************************!*\
  !*** ./src/app/segmento-casegurado/segmento-casegurado.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoCaseguradoPage": () => (/* binding */ SegmentoCaseguradoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_casegurado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-casegurado.page.html?ngResource */ 90338);
/* harmony import */ var _segmento_casegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-casegurado.page.scss?ngResource */ 8406);
/* harmony import */ var _segmento_casegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segmento_casegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let SegmentoCaseguradoPage = class SegmentoCaseguradoPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SegmentoCaseguradoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-segmento-casegurado',
  template: _segmento_casegurado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_segmento_casegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SegmentoCaseguradoPage);


/***/ }),

/***/ 8406:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-casegurado/segmento-casegurado.page.scss?ngResource ***!
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

/***/ 90338:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-casegurado/segmento-casegurado.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>segmento-casegurado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-casegurado_segmento-casegurado_module_ts.js.map