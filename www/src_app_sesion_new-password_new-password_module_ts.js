(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sesion_new-password_new-password_module_ts"],{

/***/ 99775:
/*!********************************************************************!*\
  !*** ./src/app/sesion/new-password/new-password-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPageRoutingModule": () => (/* binding */ NewPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-password.page */ 29248);




const routes = [{
  path: '',
  component: _new_password_page__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPage
}];
let NewPasswordPageRoutingModule = class NewPasswordPageRoutingModule {};
NewPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NewPasswordPageRoutingModule);


/***/ }),

/***/ 24674:
/*!************************************************************!*\
  !*** ./src/app/sesion/new-password/new-password.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPageModule": () => (/* binding */ NewPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-password-routing.module */ 99775);
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-password.page */ 29248);







let NewPasswordPageModule = class NewPasswordPageModule {};
NewPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPageRoutingModule],
  declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_1__.NewPasswordPage]
})], NewPasswordPageModule);


/***/ }),

/***/ 29248:
/*!**********************************************************!*\
  !*** ./src/app/sesion/new-password/new-password.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPage": () => (/* binding */ NewPasswordPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _new_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-password.page.html?ngResource */ 29158);
/* harmony import */ var _new_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-password.page.scss?ngResource */ 51227);
/* harmony import */ var _new_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32313);









let NewPasswordPage = class NewPasswordPage {
  constructor(router, loading, api, alert) {
    this.router = router;
    this.loading = loading;
    this.api = api;
    this.alert = alert;
    this.onDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isConfrimValid = true;
    this.isPasswordValid = true;
    this.item = {
      password: "",
      confrim: "",
      user: ""
    };
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      console.log(state);
      this.item.user = state.email;
      console.log(this.item);
    }
  }
  ngOnChanges(changes) {
    this.data = changes["data"].currentValue;
  }
  onDoneFunc() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event) {
        event.stopPropagation();
      }
      if (_this.validate()) {
        const loading = yield _this.loading.create({});
        loading.present();
        let data = {
          password: _this.item.password,
          user: _this.item.user
        };
        _this.api.cambiarPassword(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
          loading.dismiss();
        })).subscribe(res => {
          console.log(res, 'respuestica');
          _this.onDone.emit(_this.item);
          _this.router.navigate(['./']);
        }, /*#__PURE__*/function () {
          var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            console.log(err);
            const load = yield _this.alert.create({
              header: "HELP",
              message: err.error.Message,
              buttons: ['OK']
            });
            load.present();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }
  validate() {
    this.isConfrimValid = true;
    this.isPasswordValid = true;
    if (!this.item.password) {
      this.isPasswordValid = false;
    }
    if (!this.item.confrim) {
      this.isConfrimValid = false;
    }
    if (this.item.confrim !== this.item.password) {
      this.isConfrimValid = false;
    }
    return this.isPasswordValid && this.isConfrimValid;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
    }];
  }
  static {
    this.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
      }],
      onDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
      }]
    };
  }
};
NewPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-new-password',
  template: _new_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_new_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NewPasswordPage);


/***/ }),

/***/ 51227:
/*!***********************************************************************!*\
  !*** ./src/app/sesion/new-password/new-password.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --img-logo: 220px;\n}\n\nion-grid,\nion-row {\n  height: 100%;\n  background: var(--cs-background-primary, #ffffff);\n}\n\nion-img {\n  width: var(--img-logo);\n}\n\nh1 {\n  color: var(--cs-text-secondary, #0090d0);\n}\n\nion-item ion-input {\n  --padding-end: 8px;\n}\nion-item ion-icon {\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n}", "",{"version":3,"sources":["webpack://./src/app/sesion/new-password/new-password.page.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;AACJ;;AAEE;;EAEE,YAAA;EACA,iDAAA;AACJ;;AAEE;EACE,sBAAA;AACJ;;AAEE;EACE,wCAAA;AACJ;;AAGI;EACE,kBAAA;AAAN;AAEG;EACE,kBAAA;EACA,QAAA;EACA,WAAA;AAAL","sourcesContent":[":host{\r\n    --img-logo: 220px;\r\n  }\r\n  \r\n  ion-grid,\r\n  ion-row {\r\n    height: 100%;\r\n    background: var(--cs-background-primary, #ffffff);\r\n  }\r\n  \r\n  ion-img {\r\n    width: var(--img-logo);\r\n  }\r\n  \r\n  h1 {\r\n    color: var(--cs-text-secondary, #0090d0)\r\n  }\r\n  \r\n  ion-item {\r\n    ion-input {\r\n      --padding-end: 8px;\r\n    }\r\n   ion-icon {\r\n     position: absolute;\r\n     right: 0;\r\n     bottom: 8px\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 29158:
/*!***********************************************************************!*\
  !*** ./src/app/sesion/new-password/new-password.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = " <!-- Header -->\r\n <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Nueva Contraseña</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col class=\"ion-padding\" size=\"12\" size-md=\"10\" push-md=\"1\">\r\n        <h1 class=\"text-size-xl ion-text-wrap ion-text-capitalize\">\r\n          Resetear contraseña</h1>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"clearfix\"></div>\r\n        <ion-item class=\"ion-no-padding transparent input\">\r\n          <ion-label class=\"text-size-xs\" position=\"floating\">contraseña\r\n          </ion-label>\r\n          <ion-input required type=\"password\" [(ngModel)]=\"item.password\"\r\n            [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n          <ion-icon *ngIf=\"!isPasswordValid\" icon-small name=\"remove-circle\">\r\n          </ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding transparent input\">\r\n          <ion-label class=\"text-size-xs\" position=\"floating\">confirmar contraseña\r\n          </ion-label>\r\n          <ion-input required type=\"password\" [(ngModel)]=\"item.confrim\"\r\n            [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n          <ion-icon *ngIf=\"!isConfrimValid\" class=\"icon-small\" name=\"remove-circle\">\r\n          </ion-icon>\r\n        </ion-item>\r\n        <!---Send button-->\r\n        <ion-button class=\"ion-float-end ion-margin-top button-round\" shape=\"round\"\r\n          fill=\"outline\" (click)=\"onDoneFunc()\">\r\n          Cambiar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_new-password_new-password_module_ts.js.map