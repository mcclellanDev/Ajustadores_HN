(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_propiedad_propiedad_module_ts"],{

/***/ 62385:
/*!*******************************************************!*\
  !*** ./src/app/propiedad/propiedad-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropiedadPageRoutingModule": () => (/* binding */ PropiedadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _propiedad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propiedad.page */ 48400);




const routes = [{
  path: '',
  component: _propiedad_page__WEBPACK_IMPORTED_MODULE_0__.PropiedadPage
}];
let PropiedadPageRoutingModule = class PropiedadPageRoutingModule {};
PropiedadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PropiedadPageRoutingModule);


/***/ }),

/***/ 62921:
/*!***********************************************!*\
  !*** ./src/app/propiedad/propiedad.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropiedadPageModule": () => (/* binding */ PropiedadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _propiedad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propiedad-routing.module */ 62385);
/* harmony import */ var _propiedad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propiedad.page */ 48400);







let PropiedadPageModule = class PropiedadPageModule {};
PropiedadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _propiedad_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropiedadPageRoutingModule],
  declarations: [_propiedad_page__WEBPACK_IMPORTED_MODULE_1__.PropiedadPage]
})], PropiedadPageModule);


/***/ }),

/***/ 48400:
/*!*********************************************!*\
  !*** ./src/app/propiedad/propiedad.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropiedadPage": () => (/* binding */ PropiedadPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _propiedad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propiedad.page.html?ngResource */ 6971);
/* harmony import */ var _propiedad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propiedad.page.scss?ngResource */ 10331);
/* harmony import */ var _propiedad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_propiedad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 32313);









let PropiedadPage = class PropiedadPage {
  constructor(router, loading, alert, api, toast) {
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.propiedadPrivada = {};
    this.propiedadPrivadaList = [];
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
    this.propiedadPrivada.RefAjustadorAudienciaId = this.AtencionIds.RefAjustadorAudienciaId;
    this.propiedadPrivada.RefAjustadorId = this.api.currentUser.ProveedorAgenteId;
    this.propiedadPrivadaList.push(this.propiedadPrivada);
    console.log(this.propiedadPrivadaList);
    this.propiedadPrivada = {};
  }
  editPersona(i) {
    this.propiedadPrivada = this.propiedadPrivadaList[i];
    this.index = i;
    this.editar = true;
    this.guardar = false;
    this.showPersona = true;
  }
  updatePersona() {
    this.propiedadPrivadaList[this.index] = this.propiedadPrivada;
    this.propiedadPrivada = {};
    this.editar = false;
    this.guardar = true;
    this.showPersona = false;
  }
  deletePersona(i) {
    this.propiedadPrivadaList.splice(i, 1);
  }
  personaModal() {
    this.showPersona = !this.showPersona;
  }
  next() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.propiedadPrivadaList.length > 0) {
        const load = yield _this.loading.create();
        yield load.present();
        _this.api.GuardarPropiedadTercero(_this.propiedadPrivadaList).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield load.dismiss();
        }))).subscribe(res => {
          const navigateExtras = {
            state: {
              data: _this.AtencionIds
            }
          };
          _this.router.navigate(['./fotografias'], navigateExtras);
        }, /*#__PURE__*/function () {
          var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this.alert.create({
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
        const alert = yield _this.alert.create({
          header: 'HELP',
          message: 'No agrego propiedad dañiada a terceros ¿Desea continuar?',
          buttons: [{
            text: 'No',
            role: 'cancel'
          }, {
            text: 'Si',
            handler: () => {
              const navigateExtras = {
                state: {
                  data: _this.AtencionIds
                }
              };
              _this.router.navigate(['./fotografias'], navigateExtras);
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
PropiedadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-propiedad',
  template: _propiedad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_propiedad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PropiedadPage);


/***/ }),

/***/ 10331:
/*!**********************************************************!*\
  !*** ./src/app/propiedad/propiedad.page.scss?ngResource ***!
  \**********************************************************/
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

/***/ 6971:
/*!**********************************************************!*\
  !*** ./src/app/propiedad/propiedad.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Propiedades Privada Dañiada</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <!-- datos de los terceros -->\n      <ion-col size=\"12\">\n        <ion-item  lines=\"none\" style=\"--background: #0090D0;\" class=\"ion-no-padding  input\">\n          <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Propiedades Dañiadas</ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" style=\"padding-left: 70%;--border-radius: 0px;\">\n          <ion-button style=\"color: white; width: 100%;\" shape=\"round\"  (click)=\"personaModal()\">\n            Agregar\n          </ion-button>\n      </ion-item>\n       </ion-col>\n        <ion-col  size=\"12\">\n          <ion-item *ngFor=\"let item of propiedadPrivadaList; let i = index \" >\n            <ion-icon style=\"color: red;\" (click)=\"deletePersona(i)\" slot=\"start\" name=\"trash\"></ion-icon>\n            <ion-label (click)=\"editPersona(i)\">{{item.Nombre}}</ion-label>\n            <ion-icon (click)=\"editPersona(i)\" slot=\"end\" style=\"color: #0090d0; \"name=\"create\"></ion-icon>\n          </ion-item>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button style=\"color: white;left: 0px;top: 90%;position: sticky; width: 50%; margin-left: 25%;margin-right: 25%;right: 0px;\" (click)=\"next()\" shape=\"round\">\n    Continuar\n  </ion-button>\n</ion-content>\n<!-- tercero modal  -->\n<ion-modal class=\"persona\" [isOpen]=\"showPersona\">\n  <ng-template>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-row>\n           <!-- Datos del tercero -->  \n           <ion-col size=\"12\">\n            <ion-item  lines=\"none\" style=\"--background: #0090D0;\" class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Dato De La Propiedad Dañiada</ion-label>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Nombre y Apellido Del Propietario</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.Nombre\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Dirección</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.Direccion\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Descripción Del Daño</ion-label>\n                <ion-textarea rows=\"10%\" cols=\"1\"  [(ngModel)]=\"propiedadPrivada.DaniosPrivado\">\n                </ion-textarea>\n            </ion-item>\n           </ion-col>\n          <ion-col size=\"12\">\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\n                Agregar\n              </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"editar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\n                Actualizar\n              </ion-button>\n            </ion-col>\n          </ion-col>    \n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_propiedad_propiedad_module_ts.js.map