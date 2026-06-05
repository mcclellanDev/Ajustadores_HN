(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fotografias_fotografias_module_ts"],{

/***/ 74621:
/*!***********************************************************!*\
  !*** ./src/app/fotografias/fotografias-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotografiasPageRoutingModule": () => (/* binding */ FotografiasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fotografias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotografias.page */ 71829);




const routes = [{
  path: '',
  component: _fotografias_page__WEBPACK_IMPORTED_MODULE_0__.FotografiasPage
}];
let FotografiasPageRoutingModule = class FotografiasPageRoutingModule {};
FotografiasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FotografiasPageRoutingModule);


/***/ }),

/***/ 31603:
/*!***************************************************!*\
  !*** ./src/app/fotografias/fotografias.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotografiasPageModule": () => (/* binding */ FotografiasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fotografias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotografias-routing.module */ 74621);
/* harmony import */ var _fotografias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotografias.page */ 71829);







let FotografiasPageModule = class FotografiasPageModule {};
FotografiasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _fotografias_routing_module__WEBPACK_IMPORTED_MODULE_0__.FotografiasPageRoutingModule],
  declarations: [_fotografias_page__WEBPACK_IMPORTED_MODULE_1__.FotografiasPage]
})], FotografiasPageModule);


/***/ }),

/***/ 71829:
/*!*************************************************!*\
  !*** ./src/app/fotografias/fotografias.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotografiasPage": () => (/* binding */ FotografiasPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _fotografias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotografias.page.html?ngResource */ 45086);
/* harmony import */ var _fotografias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fotografias.page.scss?ngResource */ 25991);
/* harmony import */ var _fotografias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fotografias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32313);










let FotografiasPage = class FotografiasPage {
  constructor(router, loading, alert, api, toast) {
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.fotos = [];
    this.openFoto = false;
    this.formulario = {};
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    if (state.data) {
      this.formulario = state.data;
    }
  }
  ngOnInit() {}
  openImg(foto) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  showMeaPic() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraResultType.Base64
      });
      _this.fotos.push({
        IdAtencion: _this.formulario.RefAtencionId,
        Foto: img.base64String,
        RefTipoFotoId: 1
      });
      console.log(_this.fotos);
    })();
  }
  deleteFoto(i) {
    this.fotos.splice(i, 1);
  }
  next() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this2.loading.create();
      yield load.present();
      _this2.api.GuardarFotos(_this2.fotos).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this2.alert.create({
            header: 'HELP',
            message: 'Se enviado el formulario con exito',
            buttons: ['Ok']
          });
          yield alert.present();
          _this2.router.navigate(['./tabs']);
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this2.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
    }];
  }
};
FotografiasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-fotografias',
  template: _fotografias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_fotografias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FotografiasPage);


/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 25991:
/*!**************************************************************!*\
  !*** ./src/app/fotografias/fotografias.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-card {\n  height: 150px;\n  width: 45vw;\n  border-radius: 0;\n  background-size: cover;\n}\nion-card ion-card-content {\n  position: relative;\n  background: rgba(36, 36, 36, 0.4);\n  width: 100%;\n  width: max-content;\n}\nion-card ion-card-content h2,\nion-card ion-card-content .icon-small {\n  color: var(--cs-text-primary, #ffffff);\n}\n\n.Img {\n  --background: rgba(44,39,45,0.2);\n  color: #4ba8ed;\n}\n.Img::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.Img .item.sc-ion-label-md-h, .Img .item .sc-ion-label-md-h {\n  white-space: normal;\n  padding: 10px;\n  font-size: 1.2rem;\n  white-space: normal;\n  font-weight: bold;\n}\n.Img ion-content {\n  --background: transparent;\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n.Img ion-content ion-img {\n  width: 100%;\n  height: 100%;\n}\n.Img ion-content .item.sc-ion-label-ios-h, .Img ion-content .item .sc-ion-label-ios-h {\n  --color: initial;\n  display: block;\n  font-size: 1.2rem;\n  color: var(--color);\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: normal;\n}", "",{"version":3,"sources":["webpack://./src/app/fotografias/fotografias.page.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AACJ;AAAI;EACE,kBAAA;EACA,iCAAA;EACA,WAAA;EAKA,kBAAA;AAFN;AAFM;;EAEE,sCAAA;AAIR;;AACE;EAEC,gCAAA;EACA,cAAA;AACH;AAAG;EACC,kCAAA;UAAA,0BAAA;AAEJ;AAAG;EACC,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAEJ;AAAG;EACC,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AAEJ;AADI;EACM,WAAA;EACA,YAAA;AAGV;AAAI;EACC,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AAEL","sourcesContent":["ion-card {\r\n    height: 150px;\r\n    width: 45vw;\r\n    border-radius: 0;\r\n    background-size: cover;\r\n    ion-card-content {\r\n      position: relative;\r\n      background: rgba(36, 36, 36, 0.40);\r\n      width: 100%;\r\n      h2,\r\n      .icon-small {\r\n        color: var(--cs-text-primary, #ffffff);\r\n      }\r\n      width: max-content;\r\n    }\r\n  }\r\n  .Img{\r\n\t\t//ion-modal{\r\n\t\t\t--background: rgba(44,39,45,0.2);\r\n\t\t\tcolor:#4ba8ed;\r\n\t\t\t&::part(content){\r\n\t\t\t\tbackdrop-filter: blur(6px);\r\n\t\t\t}\r\n\t\t\t.item.sc-ion-label-md-h, .item .sc-ion-label-md-h{\r\n\t\t\t\twhite-space: normal;\r\n\t\t\t\tpadding: 10px;\r\n\t\t\t\tfont-size: 1.2rem;\r\n\t\t\t\twhite-space: normal;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t}\r\n\t\t\tion-content{\r\n\t\t\t\t--background: transparent;\r\n\t\t\t\t--padding-top: 20px;\r\n\t\t\t\t--padding-start: 20px;\r\n\t\t\t\t--padding-end: 20px;\r\n\t\t\t\tion-img{\r\n          width: 100%;\r\n          height: 100%;\r\n          \r\n        }\r\n\t\t\t\t.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{\r\n\t\t\t\t\t--color: initial;\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tfont-size: 1.2rem;\r\n\t\t\t\t\tcolor: var(--color);\r\n\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\t\twhite-space: normal;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t//}\r\n\t\t\r\n\t}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 45086:
/*!**************************************************************!*\
  !*** ./src/app/fotografias/fotografias.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>fotografias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button style=\"color: white;left: 0px; width: 30%; margin-left: 35%;margin-right: 35%;right: 0px; margin-top: 3%; margin-bottom: 3%;\"  (click)=\"showMeaPic()\" color=\"primary\" expand=\"block\" shape=\"round\">\r\n    <ion-icon name=\"camera-outline\"></ion-icon>\r\n  </ion-button>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n\r\n        <ion-col size=\"6\" size-md=\"6\" *ngFor=\"let item of fotos;let i = index\">\r\n          <ion-card (click)=\"openImg(item.Foto)\" class=\"ion-no-margin background-size ion-no-padding\"\r\n            [ngStyle]=\"{'background-image': 'url('+'data:image/jpeg;base64,' + item.Foto + ')'}\"\r\n            >\r\n            <!-- Card Content -->\r\n            <ion-card-content class=\"transparent ion-no-padding\">\r\n              <ion-item class=\"transparent\" lines=\"none\" (click)=\"deleteFoto(i)\">\r\n\r\n                <ion-label class=\"ion-float-left\">\r\n                  <h2 class=\"text-size-lg\"></h2>\r\n                </ion-label>\r\n                <ion-icon (click)=\"deleteFoto(i)\" class=\"icon icon-small\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n                <!-- <i class=\"icon icon-small\" slot=\"end\"\r\n                (click)=\"onFavoriteFunc(item, $event)\"\r\n                  [ngClass]=\"{ 'icon-trash-outline'}\">\r\n                </i> -->\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-button style=\"color: white;left: 0px;top: 90%;position: sticky; width: 50%; margin-left: 25%;margin-right: 25%;right: 0px;\" (click)=\"next()\" shape=\"round\">\r\n    Continuar\r\n  </ion-button>\r\n  <!-- <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" >\r\n    <ion-fab-button (click)=\"showMeaPic()\" color=\"primary\">\r\n      <ion-icon name=\"camera-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n</ion-content>\r\n<ion-modal class=\"Img\" #appointmentAlert [isOpen]=\"openFoto\">\r\n\t<ng-template>\r\n\t\t<ion-content (click)=\"openFoto=false\">\r\n\t\t\t<ion-img [src]=\"'data:image/jpeg;base64,'+foto\"></ion-img>\r\n\t\t</ion-content>\r\n\t</ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_fotografias_fotografias_module_ts.js.map