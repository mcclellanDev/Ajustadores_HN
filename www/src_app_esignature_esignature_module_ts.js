(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_esignature_esignature_module_ts"],{

/***/ 29618:
/*!*********************************************************!*\
  !*** ./src/app/esignature/esignature-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePageRoutingModule": () => (/* binding */ EsignaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _esignature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esignature.page */ 67020);




const routes = [{
  path: '',
  component: _esignature_page__WEBPACK_IMPORTED_MODULE_0__.EsignaturePage
}];
let EsignaturePageRoutingModule = class EsignaturePageRoutingModule {};
EsignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], EsignaturePageRoutingModule);


/***/ }),

/***/ 6885:
/*!*************************************************!*\
  !*** ./src/app/esignature/esignature.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePageModule": () => (/* binding */ EsignaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _esignature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esignature-routing.module */ 29618);
/* harmony import */ var _esignature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esignature.page */ 67020);







let EsignaturePageModule = class EsignaturePageModule {};
EsignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _esignature_routing_module__WEBPACK_IMPORTED_MODULE_0__.EsignaturePageRoutingModule],
  declarations: [_esignature_page__WEBPACK_IMPORTED_MODULE_1__.EsignaturePage]
})], EsignaturePageModule);


/***/ }),

/***/ 67020:
/*!***********************************************!*\
  !*** ./src/app/esignature/esignature.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EsignaturePage": () => (/* binding */ EsignaturePage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _esignature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esignature.page.html?ngResource */ 70738);
/* harmony import */ var _esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esignature.page.scss?ngResource */ 5046);
/* harmony import */ var _esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ajustadorhn_ajustadorhn_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ajustadorhn/ajustadorhn.page */ 32234);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/default-images */ 35263);















let EsignaturePage = class EsignaturePage {
  constructor(platform, navController, api, tostador, router) {
    this.platform = platform;
    this.navController = navController;
    this.api = api;
    this.tostador = tostador;
    this.router = router;
    this.hoy = new Date().toISOString();
    this.isLoading = false;
    this.elCliente = "";
    this.firma = [];
    this.component = _ajustadorhn_ajustadorhn_page__WEBPACK_IMPORTED_MODULE_5__.AjustadorhnPage;
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_8__.logoFicohsa;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.elCliente = localStorage.getItem('elCliente');
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width() - 90;
    } else {
      this.deviceWidth = this.platform.width() - 100;
    }
  }
  ngOnInit() {
    this.sig = new signature_pad__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas.nativeElement);
    this.sig.fromDataURL(_environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignatureWhite);
    setTimeout(() => {
      this.sig.clear();
    }, 1000);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
  }
  scrollToElement() {
    $('#ele').animate({
      scrollTop: 600
    }, 5000);
  }
  saveSignatureAsegurado(idAtencion) {
    var _this = this;
    idAtencion = parseInt(this.idAtencion);
    this.isLoading = true;
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    const mySignature = this.sig.toDataURL("image/jpeg");
    console.log(mySignature);
    if (mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignature && mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignatureWhite) {
      this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
      //console.dir(this.firmasAsegurados);
      this.firma.push({
        IdAtencion: idAtencion,
        RefTipoFotoId: 3,
        Foto: this.firmaPrecargada.split(',')[1],
        NombreFirmante: this.elCliente,
        FechaFirma: this.hoy
      });
      this.api.GuardarFirmaAsegurado(this.firma).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'token respuesta');
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        const element = document.getElementById('cardAsegurado');
        const elementInput = document.getElementById('nombreInput');
        element.setAttribute('style', 'border: none');
        elementInput.setAttribute('style', 'border: none');
        //this.isSignature = true;
      }, /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
          //this.isSignature = false;
          _this.isLoading = false;
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      setTimeout(() => {
        this.goBack();
      }, 900);
    } else {
      this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
      this.isLoading = false;
    }
    /**/
  }

  clear() {
    this.sig.clear();
  }
  goBack() {
    //$('#trackButton').attr('style', 'border: none');
    const returnTo = localStorage.getItem('signatureReturnTo');
    localStorage.removeItem('signatureReturnTo');
    this.router.navigate([returnTo || './clientehn']);
    //this.navController.back();
  }

  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }];
  }
  static {
    this.propDecorators = {
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["canvas6", {
          static: true
        }]
      }]
    };
  }
};
EsignaturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-esignature',
  template: _esignature_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_esignature_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EsignaturePage);


/***/ }),

/***/ 5046:
/*!************************************************************!*\
  !*** ./src/app/esignature/esignature.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-fab-button {\n  /*\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  */\n  --color: white;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/esignature/esignature.page.scss"],"names":[],"mappings":"AAAA;EACI;;;;;;GAAA;EAOA,cAAA;AACJ;;AAEE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACN;;AAGE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAN","sourcesContent":["ion-fab-button {\r\n    /*\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    */\r\n    --color: white;\r\n  }\r\n\r\n  ion-spinner{\r\n    position: fixed;\r\n      top: 28%;\r\n      left: 40%;\r\n      z-index: 999;\r\n      width: 20%;\r\n      height: 20%;\r\n    //background-color: #00213f;\r\n  }\r\n  \r\n  #spinFooter{\r\n    position: fixed;\r\n      background: black;\r\n      opacity: 0.6;\r\n      height: 100vh;\r\n      width: 100vw;\r\n      z-index: 900;\r\n      bottom: 0;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70738:
/*!************************************************************!*\
  !*** ./src/app/esignature/esignature.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-fab id=\"button-back\" style=\"position: fixed;top: 0;left: 0;\" vertical=\"top\" horizontal=\"start\" (click)=\"goBack()\">\r\n    <ion-fab-button (click)=\"'confirmar()'\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">Firma Asegurado o Conductor Atención # {{idAtencion}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <img alt=\"Ficohsa Seguros\" src=\"{{fsLogo}}\" style=\"width: 281px; height: 61px; margin-left: 15px; margin-top: 15px;\" />\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <!--ion-icon class=\"impresora\" name=\"eye\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\" style=\"margin-right: 25%;\"></!--ion-icon>\r\n        <ion-icon class=\"impresora\" name=\"print\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\"></ion-icon -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div id=\"ele\" style=\"width: 99%;padding: 3%;text-align: justify;font-size: 1rem;white-space: normal;color: #3171e0;overflow-y: scroll;height: 39%;\">\r\n    El Congreso Nacional de la República de Honduras, reunido en asamblea general aprobó la LEY SOBRE FIRMAS  ELECTRÓNICAS mediante el Decreto № 149-2103 emitido el 11  de diciembre del mismo año.\r\n\r\n    La LEY SOBRE FIRMAS ELECTRÓNICAS y su Reglamento procuran establecer la regulación de uso y eficacia jurídica y prevé el régimen aplicable a los Prestadores de Servicios de Certificación. Igualmente de conformidad al Capítulo V, Artículo № 24 de la Ley, nomina a la DIRECCIÓN GENERAL DE PROPIEDAD INTELECTUAL (DIGEPIH) como AUTORIDAD ACREDITADORA y desarrollar las actividades administrativas para el REGISTRO en el que habrán de inscribirse estos Prestadores de Servicios de Certificación, regular la expedición y pérdida de vigencia de las acreditaciones.\r\n    <br><br><br>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\"></ion-col>\r\n      <ion-col size=\"4\"></ion-col>\r\n      <ion-col offset=\"10\" size=\"2\">\r\n        <ion-button size=\"small\" (click)=\"scrollToElement()\" style=\"float: right;margin-right:9%\">Ver Más</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-footer style=\"position: fixed; bottom: 0;left:0;height:50%; background: white;\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"color: #3171e0;\">\r\n          <ion-label style=\"margin-left: 19px;\"> Guardar Firma</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"margin-top: -10px;\">\r\n          <ion-card id=\"cardAseguradoFinal\">\r\n            <ion-card-content>\r\n              <canvas id=\"canvasAseguradoFinal\" width=\"{{deviceWidth}}\" [height]=\"150\"  #canvas6 style=\"border: 6px dashed #ede9e9\"></canvas>\r\n            </ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                  <ion-button expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <ion-button expand=\"block\" (click)=\"saveSignatureAsegurado(idAtencion)\">Guardar Firma</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_esignature_esignature_module_ts.js.map