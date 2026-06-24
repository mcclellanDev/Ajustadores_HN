"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ajustadorhn_ajustadorhn_module_ts"],{

/***/ 23144:
/*!***********************************************************!*\
  !*** ./src/app/ajustadorhn/ajustadorhn-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustadorhnPageRoutingModule": () => (/* binding */ AjustadorhnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ajustadorhn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajustadorhn.page */ 32234);




const routes = [{
  path: '',
  component: _ajustadorhn_page__WEBPACK_IMPORTED_MODULE_0__.AjustadorhnPage
}];
let AjustadorhnPageRoutingModule = class AjustadorhnPageRoutingModule {};
AjustadorhnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AjustadorhnPageRoutingModule);


/***/ }),

/***/ 98508:
/*!***************************************************!*\
  !*** ./src/app/ajustadorhn/ajustadorhn.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustadorhnPageModule": () => (/* binding */ AjustadorhnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _ajustadorhn_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustadorhn-routing.module */ 23144);
/* harmony import */ var _ajustadorhn_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajustadorhn.page */ 32234);
/* harmony import */ var _maskito_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @maskito/angular */ 11750);









let AjustadorhnPageModule = class AjustadorhnPageModule {};
AjustadorhnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ajustadorhn_routing_module__WEBPACK_IMPORTED_MODULE_1__.AjustadorhnPageRoutingModule, _maskito_angular__WEBPACK_IMPORTED_MODULE_8__.MaskitoModule],
  declarations: [_ajustadorhn_page__WEBPACK_IMPORTED_MODULE_2__.AjustadorhnPage],
  providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeGeocoder]
})], AjustadorhnPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_ajustadorhn_ajustadorhn_module_ts.js.map