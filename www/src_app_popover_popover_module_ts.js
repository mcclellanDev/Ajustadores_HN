(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_popover_popover_module_ts"],{

/***/ 4240:
/*!***************************************************!*\
  !*** ./src/app/popover/popover-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPageRoutingModule": () => (/* binding */ PopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.page */ 99890);




const routes = [{
  path: '',
  component: _popover_page__WEBPACK_IMPORTED_MODULE_0__.PopoverPage
}];
let PopoverPageRoutingModule = class PopoverPageRoutingModule {};
PopoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PopoverPageRoutingModule);


/***/ }),

/***/ 72415:
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPageModule": () => (/* binding */ PopoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-routing.module */ 4240);
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.page */ 99890);







let PopoverPageModule = class PopoverPageModule {};
PopoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopoverPageRoutingModule],
  declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_1__.PopoverPage]
})], PopoverPageModule);


/***/ }),

/***/ 99890:
/*!*****************************************!*\
  !*** ./src/app/popover/popover.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPage": () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.page.html?ngResource */ 77057);
/* harmony import */ var _popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.page.scss?ngResource */ 99292);
/* harmony import */ var _popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PopoverPage = class PopoverPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
PopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-popover',
  template: _popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PopoverPage);


/***/ }),

/***/ 99292:
/*!******************************************************!*\
  !*** ./src/app/popover/popover.page.scss?ngResource ***!
  \******************************************************/
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

/***/ 77057:
/*!******************************************************!*\
  !*** ./src/app/popover/popover.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\r\n  Hola pue\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_popover_popover_module_ts.js.map