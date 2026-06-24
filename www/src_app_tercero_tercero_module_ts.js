(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tercero_tercero_module_ts"],{

/***/ 29634:
/*!***************************************************!*\
  !*** ./src/app/tercero/tercero-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerceroPageRoutingModule": () => (/* binding */ TerceroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tercero_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tercero.page */ 70816);




const routes = [{
  path: '',
  component: _tercero_page__WEBPACK_IMPORTED_MODULE_0__.TerceroPage
}];
let TerceroPageRoutingModule = class TerceroPageRoutingModule {};
TerceroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TerceroPageRoutingModule);


/***/ }),

/***/ 14627:
/*!*******************************************!*\
  !*** ./src/app/tercero/tercero.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerceroPageModule": () => (/* binding */ TerceroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tercero_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tercero-routing.module */ 29634);
/* harmony import */ var _tercero_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tercero.page */ 70816);







let TerceroPageModule = class TerceroPageModule {};
TerceroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tercero_routing_module__WEBPACK_IMPORTED_MODULE_0__.TerceroPageRoutingModule],
  declarations: [_tercero_page__WEBPACK_IMPORTED_MODULE_1__.TerceroPage]
})], TerceroPageModule);


/***/ }),

/***/ 70816:
/*!*****************************************!*\
  !*** ./src/app/tercero/tercero.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerceroPage": () => (/* binding */ TerceroPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tercero_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tercero.page.html?ngResource */ 95106);
/* harmony import */ var _tercero_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tercero.page.scss?ngResource */ 72098);
/* harmony import */ var _tercero_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tercero_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);









let TerceroPage = class TerceroPage {
  constructor(router, loading, alert, api, toast) {
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.datoTercero = false;
    this.datosVehiculo = false;
    this.danosVehiculoTercero = false;
    this.terceroDanosVehiculo = {};
    this.formulario = {};
    this.terceroSql = {};
    this.terceroSqlList = [];
    this.guardar = true;
    this.editar = false;
    this.showPersona = false;
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    if (state.data) {
      this.AtencionIds = state.data;
    }
  }
  ngOnInit() {}
  addPersona() {
    this.terceroSqlList.push(this.terceroSql);
    this.terceroSql = {};
    this.showPersona = false;
  }
  editPersona(i) {
    this.terceroSql = this.terceroSqlList[i];
    this.index = i;
    this.editar = true;
    this.guardar = false;
    this.showPersona = true;
  }
  updatePersona() {
    this.terceroSqlList[this.index] = this.terceroSql;
    this.terceroSql = {};
    this.editar = false;
    this.guardar = true;
    this.showPersona = false;
  }
  deletePersona(i) {
    this.terceroSqlList.splice(i, 1);
  }
  personaModal() {
    this.showPersona = !this.showPersona;
  }
  damagePosition(valor) {
    switch (valor) {
      case 1:
        this.terceroDanosVehiculo.DanioLataralIzquierdo = !this.terceroDanosVehiculo.DanioLataralIzquierdo;
        this.toastAlert("Daño Latateral Izquierdo: " + this.terceroDanosVehiculo.DanioLataralIzquierdo);
        break;
      case 2:
        this.terceroDanosVehiculo.DanioLateralDerecho = !this.terceroDanosVehiculo.DanioLateralDerecho;
        this.toastAlert("Daño Latateral Derecho: " + this.terceroDanosVehiculo.DanioLateralDerecho);
        break;
      case 3:
        this.terceroDanosVehiculo.VehiculoVolcado = !this.terceroDanosVehiculo.VehiculoVolcado;
        this.toastAlert("Vehículo Volcado: " + this.terceroDanosVehiculo.VehiculoVolcado);
        break;
      case 4:
        this.terceroDanosVehiculo.DanioFrontal = !this.terceroDanosVehiculo.DanioFrontal;
        this.toastAlert("Daño Frontal: " + this.terceroDanosVehiculo.DanioFrontal);
        break;
      case 5:
        this.terceroDanosVehiculo.DanioTrasero = !this.terceroDanosVehiculo.DanioTrasero;
        this.toastAlert("Daño Trasero: " + this.terceroDanosVehiculo.DanioTrasero);
        break;
      default:
        break;
    }
  }
  toastAlert(mensaje) {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toa = yield _this.toast.create({
        message: mensaje,
        duration: 2000,
        position: "bottom"
      });
      yield toa.present();
    })();
  }
  next() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.terceroSqlList.length > 0) {
        const load = yield _this2.loading.create();
        yield load.present();
        console.log(_this2.terceroSqlList);
        _this2.api.GuardarTerceros(_this2.terceroSqlList).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield load.dismiss();
        }))).subscribe(res => {
          const navigateExtras = {
            state: {
              data: _this2.AtencionIds
            }
          };
          _this2.router.navigate(['./propiedad'], navigateExtras);
        }, /*#__PURE__*/function () {
          var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this2.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        const alert = yield _this2.alert.create({
          header: 'HELP',
          message: 'No agrego terceros ¿Desea continuar?',
          buttons: [{
            text: 'No',
            role: 'cancel'
          }, {
            text: 'Si',
            handler: () => {
              const navigateExtras = {
                state: {
                  data: _this2.AtencionIds
                }
              };
              _this2.router.navigate(['./propiedad'], navigateExtras);
            }
          }]
        });
        yield alert.present();
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
    }];
  }
};
TerceroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-tercero',
  template: _tercero_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tercero_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], TerceroPage);


/***/ }),

/***/ 72098:
/*!******************************************************!*\
  !*** ./src/app/tercero/tercero.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-damage);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.card-header-image-inactive {\n  position: relative;\n}\n.card-header-image-inactive ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image-inactive::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image-inactive img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}", "",{"version":3,"sources":["webpack://./src/app/tercero/tercero.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;AAAI;EACE,YAAA;EACA,mBAAA;AAEN;AAAI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAEN;AACI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AACN;;AAEE;EACE,kBAAA;AACJ;AAAI;EACE,YAAA;EACA,mBAAA;AAEN;AAAI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAEN;AACI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AACN","sourcesContent":[".card-header-image {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-damage);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }\n  .card-header-image-inactive {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-linear);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95106:
/*!******************************************************!*\
  !*** ./src/app/tercero/tercero.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Datos Del Tercero</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <!-- datos de los terceros -->\n      <ion-col size=\"12\">\n        <ion-item  lines=\"none\" style=\"--background: #0090D0;\" class=\"ion-no-padding  input\">\n          <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos de el/los terceros</ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" style=\"padding-left: 70%;--border-radius: 0px;\">\n            <ion-button style=\"color: white; width: 100%;\" shape=\"round\"  (click)=\"personaModal()\">\n              Agregar\n            </ion-button>\n        </ion-item>\n        <ion-col  size=\"12\">\n          <ion-item *ngFor=\"let item of terceroSqlList; let i = index \" >\n            <ion-icon style=\"color: red;\" (click)=\"deletePersona(i)\" slot=\"start\" name=\"trash\"></ion-icon>\n            <ion-label (click)=\"editPersona(i)\">{{item.NombrePiloto}}</ion-label>\n            <ion-icon (click)=\"editPersona(i)\" slot=\"end\" style=\"color: #0090d0; \"name=\"create\"></ion-icon>\n          </ion-item>\n        </ion-col>\n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button style=\"color: white;left: 0px;top: 90%;position: sticky; width: 50%; margin-left: 25%;margin-right: 25%;right: 0px;\" (click)=\"next()\" shape=\"round\">\n    Continuar\n  </ion-button>\n</ion-content>\n<!-- tercero modal  -->\n<ion-modal class=\"persona\" [isOpen]=\"showPersona\">\n  <ng-template>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-row>\n           <!-- Datos del tercero -->  \n      <ion-col size=\"12\">\n        <ion-item  lines=\"none\" style=\"--background: #0090D0;\" class=\"ion-no-padding  input\">\n          <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Del Tercero</ion-label>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Nombre y Apellido Del Propietario</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.NombrePropietario\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Nombre y Apellido Del Conductor</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.NombrePiloto\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Teléfono</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.Telefono\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <!-- Datos del vehiculo -->\n      <ion-col size=\"12\">\n        <ion-item  lines=\"none\" style=\"--background: #0090D0;\" class=\"ion-no-padding  input\">\n          <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Del Vehículo Tercero</ion-label>\n        </ion-item>\n        <ion-item   class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Marca</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.Marca\"></ion-input>\n        </ion-item>\n        <ion-item   class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Modelo(Año)</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.Modelo\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Placa</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.Placa\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding transparent input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Chasis</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"terceroSql.Chasis\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"ion-no-padding  input\">\n          <ion-label class=\"text-size-sm\" position=\"floating\">\n            Descripción Del Daño</ion-label>\n            <ion-textarea rows=\"10%\" cols=\"1\"  [(ngModel)]=\"terceroSql.DaniosObservacion\">\n            </ion-textarea>\n        </ion-item>\n      </ion-col>\n          <ion-col size=\"12\">\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\n                Agregar\n              </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"editar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\n                Actualizar\n              </ion-button>\n            </ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_tercero_tercero_module_ts.js.map