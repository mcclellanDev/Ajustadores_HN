(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_vital-core_vital-core_module_ts"],{

/***/ 82751:
/*!*********************************************************!*\
  !*** ./src/app/vital-core/vital-core-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalCorePageRoutingModule": () => (/* binding */ VitalCorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vital_core_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vital-core.page */ 59195);




const routes = [{
  path: '',
  component: _vital_core_page__WEBPACK_IMPORTED_MODULE_0__.VitalCorePage
}];
let VitalCorePageRoutingModule = class VitalCorePageRoutingModule {};
VitalCorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], VitalCorePageRoutingModule);


/***/ }),

/***/ 48001:
/*!*************************************************!*\
  !*** ./src/app/vital-core/vital-core.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalCorePageModule": () => (/* binding */ VitalCorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vital_core_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vital-core-routing.module */ 82751);
/* harmony import */ var _vital_core_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vital-core.page */ 59195);







let VitalCorePageModule = class VitalCorePageModule {};
VitalCorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _vital_core_routing_module__WEBPACK_IMPORTED_MODULE_0__.VitalCorePageRoutingModule],
  declarations: [_vital_core_page__WEBPACK_IMPORTED_MODULE_1__.VitalCorePage]
})], VitalCorePageModule);


/***/ }),

/***/ 59195:
/*!***********************************************!*\
  !*** ./src/app/vital-core/vital-core.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VitalCorePage": () => (/* binding */ VitalCorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _vital_core_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vital-core.page.html?ngResource */ 29153);
/* harmony import */ var _vital_core_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vital-core.page.scss?ngResource */ 17572);
/* harmony import */ var _vital_core_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vital_core_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let VitalCorePage = class VitalCorePage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
VitalCorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-vital-core',
  template: _vital_core_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_vital_core_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], VitalCorePage);


/***/ }),

/***/ 17572:
/*!************************************************************!*\
  !*** ./src/app/vital-core/vital-core.page.scss?ngResource ***!
  \************************************************************/
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

/***/ 29153:
/*!************************************************************!*\
  !*** ./src/app/vital-core/vital-core.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>vital-core</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <img style=\"width: 180px; height:200px\" src=\"../../assets/img/formulario.gif\" alt=\"search\"/>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_vital-core_vital-core_module_ts.js.map