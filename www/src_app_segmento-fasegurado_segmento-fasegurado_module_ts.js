(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-fasegurado_segmento-fasegurado_module_ts"],{

/***/ 340:
/*!***************************************************************************!*\
  !*** ./src/app/segmento-fasegurado/segmento-fasegurado-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFaseguradoPageRoutingModule": () => (/* binding */ SegmentoFaseguradoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_fasegurado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-fasegurado.page */ 84429);




const routes = [{
  path: '',
  component: _segmento_fasegurado_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoFaseguradoPage
}];
let SegmentoFaseguradoPageRoutingModule = class SegmentoFaseguradoPageRoutingModule {};
SegmentoFaseguradoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoFaseguradoPageRoutingModule);


/***/ }),

/***/ 51341:
/*!*******************************************************************!*\
  !*** ./src/app/segmento-fasegurado/segmento-fasegurado.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFaseguradoPageModule": () => (/* binding */ SegmentoFaseguradoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_fasegurado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-fasegurado-routing.module */ 340);
/* harmony import */ var _segmento_fasegurado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-fasegurado.page */ 84429);







let SegmentoFaseguradoPageModule = class SegmentoFaseguradoPageModule {};
SegmentoFaseguradoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_fasegurado_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoFaseguradoPageRoutingModule],
  declarations: [_segmento_fasegurado_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoFaseguradoPage]
})], SegmentoFaseguradoPageModule);


/***/ }),

/***/ 84429:
/*!*****************************************************************!*\
  !*** ./src/app/segmento-fasegurado/segmento-fasegurado.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoFaseguradoPage": () => (/* binding */ SegmentoFaseguradoPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_fasegurado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-fasegurado.page.html?ngResource */ 51051);
/* harmony import */ var _segmento_fasegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-fasegurado.page.scss?ngResource */ 38830);
/* harmony import */ var _segmento_fasegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmento_fasegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);










let SegmentoFaseguradoPage = class SegmentoFaseguradoPage {
  constructor(api, alert, toaster) {
    var _this = this;
    this.api = api;
    this.alert = alert;
    this.toaster = toaster;
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.imageHeight = 200;
    this.api.Expediente(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('So far so good as you should know my friend what we can do....');
      //this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.elExpediente = res;
        _this.aseguradoNombre = _this.elExpediente[0].Cliente;
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  ngOnInit() {
    setTimeout(() => {}, 3000);
  }
  firmar() {
    var _this2 = this;
    //let laImagen = this.imagen.nativeElement;
    //this.imageHeight = this.imagen.nativeElement.offsetHeight;
    this.imageHeight = 200;
    //this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.api.obtenerFotoPorAtencion(this.idAtencion, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Firmas para este usuario : " + res.length);
        console.dir(res);
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          if (index == res.length - 1) {
            _this2.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.imagePrefix + element.FotoFirma;
            localStorage.setItem("dSignatureAsegurado", _this2.firmaPrecargada);
            //alert(this.firmaPrecargada)
            _this2.isSignature = true;
          }
        }
      });
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this2.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
        //alert(this.firmaPrecargada)
        localStorage.setItem("dSignatureAsegurado", _this2.firmaPrecargada);
        _this2.isSignature = false;
      });
      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }];
  }
};
SegmentoFaseguradoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-segmento-fasegurado',
  template: _segmento_fasegurado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_segmento_fasegurado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SegmentoFaseguradoPage);


/***/ }),

/***/ 38830:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-fasegurado/segmento-fasegurado.page.scss?ngResource ***!
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

/***/ 51051:
/*!******************************************************************************!*\
  !*** ./src/app/segmento-fasegurado/segmento-fasegurado.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">{{segmentoTitulo}} - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-col id=\"segmentAfiliatedAju\" size=\"12\">\r\n    <ion-item lines=\"none\" class=\"ion-no-padding  input\">\r\n      <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n        <ion-badge>\r\n          {{segmentoTitulo}} o Conductor\r\n        </ion-badge>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      \r\n      <ion-col size=\"12\">\r\n                  \r\n        <ion-card style=\"height:405px\">\r\n          <img *ngIf=\"firmaPrecargada\" #imagen name=\"firma\" alt=\"Firmar\" src=\"{{firmaPrecargada}}\" [(ngModel)]=\"firmaPrecargada\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\"\r\n          style=\"width: 100%;margin-top: 30%; height: '{{imageHeight}}'\"/>\r\n\r\n          <!--img #imagen alt=\"Firmar\" src=\"{{firmaPrecargada}}\" [(ngModel)]=\"firmaPrecargada\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\"\r\n          style=\"width: 100%;margin-top: 30%; height: '{{imageHeight}}'\"/ -->\r\n        \r\n          <ion-card-content style=\"    padding: 0; margin-bottom: 50px;\">\r\n            \r\n          </ion-card-content>\r\n        </ion-card>\r\n        <br>\r\n        <ion-item style=\"padding-top: 9%;\">\r\n          <ion-input id=\"aseguradoNombre\" type=\"text\" placeholder=\"Nombre Completo\" [(ngModel)]=\"aseguradoNombre\" readonly></ion-input>\r\n        </ion-item> \r\n        \r\n        <ion-item lines=\"none\">\r\n        </ion-item>\r\n      \r\n\r\n    </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n\r\n<!--\r\n  \r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                \r\n                <ion-col size=\"6\">\r\n                <ion-content class=\"ion-no-padding\">\r\n                  <ion-grid style=\"padding-top: 0;\">\r\n                    <ion-row>\r\n                      \r\n                      <ion-col size=\"12\" style=\"padding-top: 0;\">\r\n                        <ion-card style=\"height:405px\">\r\n                          <ion-card-header style=\"font-size:1rem\">\r\n                            Fecha del Siniestro\r\n                          </ion-card-header>\r\n                          <ion-card-content style=\"margin-top: 26%;\">\r\n                            <ion-badge style=\"margin-left: 0px;padding: 20px;font-size: 1.3rem;height: 60px;width: 410px;\">{{formateada}}</ion-badge>\r\n                          </ion-card-content>\r\n                        </ion-card>\r\n                        \r\n                      </ion-col>\r\n                      \r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-content>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            \r\n          </ion-col>\r\n-->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-fasegurado_segmento-fasegurado_module_ts.js.map