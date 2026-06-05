(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sesion_recovery_recovery_module_ts"],{

/***/ 77228:
/*!************************************************************!*\
  !*** ./src/app/sesion/recovery/recovery-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageRoutingModule": () => (/* binding */ RecoveryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery.page */ 41445);




const routes = [{
  path: '',
  component: _recovery_page__WEBPACK_IMPORTED_MODULE_0__.RecoveryPage
}];
let RecoveryPageRoutingModule = class RecoveryPageRoutingModule {};
RecoveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], RecoveryPageRoutingModule);


/***/ }),

/***/ 92268:
/*!****************************************************!*\
  !*** ./src/app/sesion/recovery/recovery.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageModule": () => (/* binding */ RecoveryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-routing.module */ 77228);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page */ 41445);







let RecoveryPageModule = class RecoveryPageModule {};
RecoveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPageRoutingModule],
  declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_1__.RecoveryPage]
})], RecoveryPageModule);


/***/ }),

/***/ 41445:
/*!**************************************************!*\
  !*** ./src/app/sesion/recovery/recovery.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPage": () => (/* binding */ RecoveryPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _recovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page.html?ngResource */ 29739);
/* harmony import */ var _recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recovery.page.scss?ngResource */ 35024);
/* harmony import */ var _recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32313);









let RecoveryPage = class RecoveryPage {
  constructor(router, api, alert, loading) {
    this.router = router;
    this.api = api;
    this.alert = alert;
    this.loading = loading;
    this.onSend = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.oTP = {
      first: '',
      second: '',
      third: '',
      forth: ''
    };
    this.isOtp = false;
    this.isEmailValid = true;
    this.load = false;
    this.regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.item = {
      email: "",
      userid: ""
    };
  }
  ngOnChanges(changes) {
    this.data = changes["data"].currentValue;
  }
  onSendFunc() {
    var _this = this;
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.load = true;
      this.onSend.emit(this.item);
      this.api.recuperarContrasena(this.item.email).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            _this.isOtp = true;
            _this.load = false;
          } else {
            const alert = yield _this.alert.create({
              header: 'HELP',
              message: 're',
              buttons: ['Ok']
            });
            yield alert.present();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  otpController(event, next, prev, index) {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (index == 4) {
        const otp = _this2.oTP.first + _this2.oTP.second + _this2.oTP.third + _this2.oTP.forth;
        console.log(otp);
        alert(' OTP: ' + otp + ', tamaño: ' + otp.length);
        if (otp.length === 4 && _this2.oTP.forth != '') {
          const loading = yield _this2.loading.create({});
          loading.present();
          let data = {
            clave: otp,
            user: _this2.item.email
          };
          _this2.api.validarOtp(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
            loading.dismiss();
          })).subscribe(res => {
            const nav = {
              state: _this2.item
            };
            _this2.router.navigate(['./new-password'], nav);
          }, /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
              console.log(err);
              const load = yield _this2.alert.create({
                header: "HELP",
                message: err.error.Message,
                buttons: ['OK']
              });
              load.present();
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          //
        }
      }

      if (event.target.value.length < 1 && prev) {
        prev.setFocus();
      } else if (next && event.target.value.length > 0) {
        next.setFocus();
      } else {
        return 0;
      }
    })();
  }
  validate() {
    this.isEmailValid = this.regex.test(this.item.email);
    return this.isEmailValid;
    //return true;
  }

  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
    }];
  }
  static {
    this.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
      }],
      onSend: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
      }]
    };
  }
};
RecoveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-recovery',
  template: _recovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RecoveryPage);


/***/ }),

/***/ 35024:
/*!***************************************************************!*\
  !*** ./src/app/sesion/recovery/recovery.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Style component 1\n========================================================*/\n:host {\n  --img-logo: 240px;\n}\n\nion-grid,\nion-row {\n  height: 100%;\n  background: var(--cs-background-primary, #ffffff);\n}\n\nion-img {\n  width: var(--img-logo);\n  text-align: center;\n  margin: 0 auto;\n}\n\nh1 {\n  color: var(--cs-text-secondary, #0090d0);\n}\n\nion-item ion-input {\n  --padding-end: 8px;\n}\nion-item ion-icon {\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n}\n\n.x {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  --background:#e1e1e1;\n  --padding-start:7px;\n}\n\nion-button.warning-button {\n  --background: none;\n  --background-hover: none;\n  --background-activated: none;\n  --background-focused: none;\n  --color: #F04F23;\n  --border-radius: 60px;\n  --border-color: none;\n  --border-style: none;\n  --border-width: none;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: rgb(41, 35, 38);\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --color-hover: blue;\n}", "",{"version":3,"sources":["webpack://./src/app/sesion/recovery/recovery.page.scss"],"names":[],"mappings":"AAAA;yDAAA;AAEA;EACI,iBAAA;AACJ;;AAEE;;EAEE,YAAA;EACA,iDAAA;AACJ;;AAEE;EACE,sBAAA;EACA,kBAAA;EACA,cAAA;AACJ;;AAEE;EACE,wCAAA;AACJ;;AAII;EACE,kBAAA;AADN;AAGG;EACE,kBAAA;EACA,QAAA;EACA,WAAA;AADL;;AAIE;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;AADJ;;AAII;EACE,kBAAA;EACA,wBAAA;EACA,4BAAA;EACA,0BAAA;EAEA,gBAAA;EAEA,qBAAA;EACA,oBAAA;EACA,oBAAA;EACA,oBAAA;EAEA,4CAAA;EAEA,+BAAA;EAEA,mBAAA;EACA,sBAAA;EACA,mBAAA;AANN","sourcesContent":["/* Style component 1\r\n========================================================*/\r\n:host{\r\n    --img-logo: 240px;\r\n  }\r\n  \r\n  ion-grid,\r\n  ion-row {\r\n    height: 100%;\r\n    background: var(--cs-background-primary, #ffffff);\r\n  }\r\n  \r\n  ion-img {\r\n    width: var(--img-logo);\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  h1 {\r\n    color: var(--cs-text-secondary, #0090d0)\r\n  }\r\n  \r\n  \r\n  ion-item {\r\n    ion-input {\r\n      --padding-end: 8px;\r\n    }\r\n   ion-icon {\r\n     position: absolute;\r\n     right: 0;\r\n     bottom: 8px\r\n    }\r\n  }\r\n  .x{\r\n    display:inline-block;\r\n    width:30px;\r\n    height:30px;\r\n    margin:10px;\r\n    --background:#e1e1e1;\r\n    --padding-start:7px;\r\n    }\r\n\r\n    ion-button.warning-button {\r\n      --background: none;\r\n      --background-hover: none;\r\n      --background-activated: none;\r\n      --background-focused: none;\r\n    \r\n      --color: #F04F23;\r\n    \r\n      --border-radius: 60px;\r\n      --border-color: none;\r\n      --border-style: none;\r\n      --border-width: none;\r\n    \r\n      --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\r\n    \r\n      --ripple-color: rgb(41, 35, 38);\r\n    \r\n      --padding-top: 10px;\r\n      --padding-bottom: 10px;\r\n      --color-hover: blue;\r\n    }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 29739:
/*!***************************************************************!*\
  !*** ./src/app/sesion/recovery/recovery.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Recuperar contraseña</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid class=\" ion-padding\" *ngIf=\"!isOtp\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col class=\"ion-padding\" size=\"12\" size-md=\"10\" push-md=\"1\">\r\n        <!---Logo-->\r\n        <!-- <ion-img class=\"ion-float-end\" src=\"../../../assets/logos/help.png\"></ion-img> -->\r\n        <div class=\"clearfix\"></div>\r\n        <h1 class=\"text-size-xl ion-text-wrap ion-text-capitalize\">\r\n         Ingresa tu correo</h1>\r\n        <div class=\"clearfix\"></div>\r\n        <h2 class=\"text-size-xs ion-text-wrap ion-padding-end\">\r\n         Enviaremos a tu correo un código OTP para que recupere su contraseña</h2>\r\n        <div class=\"clearfix\"></div>\r\n        <ion-item class=\"ion-no-padding transparent input\">\r\n          <!---Input field email-->\r\n          <ion-label class=\"text-size-sm\" position=\"floating\">\r\n          Correo</ion-label>\r\n          <ion-input required type=\"email\"\r\n            pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\"\r\n            required [(ngModel)]=\"item.email\"\r\n            [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n          <ion-icon *ngIf=\"!isEmailValid\" class=\"icon-small\"\r\n          name=\"remove-circle\"></ion-icon>\r\n        </ion-item>\r\n        <!---Send button-->\r\n        <ion-button class=\"ion-margin-top button-round ion-float-end\"\r\n        shape=\"round\" fill=\"outline\" (click)=\"onSendFunc()\" [disabled]=\"load\">\r\n          Enviar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\" ion-padding\" *ngIf=\"isOtp\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col class=\"ion-padding\" size=\"12\" size-md=\"10\" push-md=\"1\">\r\n        <!---Logo-->\r\n        <!-- <ion-img class=\"ion-float-end\" src=\"../../../assets/logos/help.png\"></ion-img> -->\r\n        <div class=\"clearfix\"></div>\r\n        <h1 class=\"text-size-xl ion-text-wrap ion-text-capitalize\">\r\n         Ingresa el código OTP</h1>\r\n        <div class=\"clearfix\"></div>\r\n        <h2 class=\"text-size-xs ion-text-wrap ion-padding-end\">\r\n         Enviamos a tu correo un código OTP para que recupere su contraseña</h2>\r\n        <div class=\"clearfix\"></div>\r\n        <ion-item class=\"ion-no-padding transparent input\" style=\"text-align:center;\">\r\n          <ion-input class=\"x\" #otp1 required=\"true\" maxLength=\"1\" [(ngModel)] =\"oTP.first\" (keyup)=\"otpController($event,otp2,'', 1)\">\r\n          </ion-input>\r\n          <ion-input class=\"x\" #otp2 required=\"true\" maxLength=\"1\" [(ngModel)]=\"oTP.second\" (keyup)=\"otpController($event,otp3,otp1, 2)\">\r\n          </ion-input>\r\n          <ion-input class=\"x\" #otp3 required=\"true\" maxLength=\"1\" [(ngModel)]=\"oTP.third\"  (keyup)=\"otpController($event,otp4,otp2, 3)\">\r\n          </ion-input>\r\n     \r\n          <ion-input class=\"x\" #otp4 required=\"true\" maxLength=\"1\" [(ngModel)]=\"oTP.forth\"  (keyup)=\"otpController($event,'',otp3,4)\">\r\n         </ion-input>\r\n        </ion-item>\r\n        <!---Send button-->\r\n        <ion-button class=\"ion-margin-top button-round ion-float-start\"\r\n        shape=\"round\" fill=\"outline\" (click)=\"onSendFunc()\">\r\n          Reenviar código OTP\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_recovery_recovery_module_ts.js.map