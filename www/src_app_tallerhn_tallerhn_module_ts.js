(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tallerhn_tallerhn_module_ts"],{

/***/ 29329:
/*!*****************************************************!*\
  !*** ./src/app/tallerhn/tallerhn-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TallerhnPageRoutingModule": () => (/* binding */ TallerhnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tallerhn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallerhn.page */ 94717);




const routes = [{
  path: '',
  component: _tallerhn_page__WEBPACK_IMPORTED_MODULE_0__.TallerhnPage
}];
let TallerhnPageRoutingModule = class TallerhnPageRoutingModule {};
TallerhnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TallerhnPageRoutingModule);


/***/ }),

/***/ 46810:
/*!*********************************************!*\
  !*** ./src/app/tallerhn/tallerhn.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TallerhnPageModule": () => (/* binding */ TallerhnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tallerhn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallerhn-routing.module */ 29329);
/* harmony import */ var _tallerhn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tallerhn.page */ 94717);







let TallerhnPageModule = class TallerhnPageModule {};
TallerhnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tallerhn_routing_module__WEBPACK_IMPORTED_MODULE_0__.TallerhnPageRoutingModule],
  declarations: [_tallerhn_page__WEBPACK_IMPORTED_MODULE_1__.TallerhnPage]
})], TallerhnPageModule);


/***/ }),

/***/ 94717:
/*!*******************************************!*\
  !*** ./src/app/tallerhn/tallerhn.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TallerhnPage": () => (/* binding */ TallerhnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tallerhn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tallerhn.page.html?ngResource */ 99553);
/* harmony import */ var _tallerhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tallerhn.page.scss?ngResource */ 33484);
/* harmony import */ var _tallerhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tallerhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let TallerhnPage = class TallerhnPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
TallerhnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tallerhn',
  template: _tallerhn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tallerhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TallerhnPage);


/***/ }),

/***/ 33484:
/*!********************************************************!*\
  !*** ./src/app/tallerhn/tallerhn.page.scss?ngResource ***!
  \********************************************************/
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

/***/ 99553:
/*!********************************************************!*\
  !*** ./src/app/tallerhn/tallerhn.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tallerhn</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tallerhn_tallerhn_module_ts.js.map