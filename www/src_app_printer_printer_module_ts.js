(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_printer_printer_module_ts"],{

/***/ 85052:
/*!***************************************************!*\
  !*** ./src/app/printer/printer-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPageRoutingModule": () => (/* binding */ PrinterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _printer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer.page */ 18272);




const routes = [{
  path: '',
  component: _printer_page__WEBPACK_IMPORTED_MODULE_0__.PrinterPage
}];
let PrinterPageRoutingModule = class PrinterPageRoutingModule {};
PrinterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PrinterPageRoutingModule);


/***/ }),

/***/ 45957:
/*!*******************************************!*\
  !*** ./src/app/printer/printer.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPageModule": () => (/* binding */ PrinterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _printer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer-routing.module */ 85052);
/* harmony import */ var _printer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printer.page */ 18272);
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formulario/formulario.module */ 38312);








let PrinterPageModule = class PrinterPageModule {};
PrinterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_printer_page__WEBPACK_IMPORTED_MODULE_1__.PrinterPage],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _printer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrinterPageRoutingModule, _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_2__.FormularioPageModule]
})], PrinterPageModule);


/***/ }),

/***/ 18272:
/*!*****************************************!*\
  !*** ./src/app/printer/printer.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterPage": () => (/* binding */ PrinterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _printer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer.page.html?ngResource */ 59864);
/* harmony import */ var _printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printer.page.scss?ngResource */ 92445);
/* harmony import */ var _printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_linkcheck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/linkcheck.service */ 27882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/printer-center */ 75929);








let PrinterPage = class PrinterPage {
  constructor(router, navController, linkCheck) {
    this.router = router;
    this.navController = navController;
    this.linkCheck = linkCheck;
    this.results = [];
    this.imagenes = [];
    this.iconos = _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__.printerIcons;
    this.dateAt = Date.now();
    this.timer = 0;
    this.busca = "";
    this.idAtencion = localStorage.getItem('idAtencion');
    this.urlApi = localStorage.getItem('apiUrl');
    console.log('Hola printer');
    console.dir(this.iconos);
    /*
          for (let index = 0; index < printerIcons.length; index++) {
            const element = printerIcons[index];
            
            console.log('opcion de impresion '+ element.descripcion)
    
            if (index == (printerIcons.length-1)) {
              console.log('Si llegamos')
            }
          }
          */
  }

  ngOnInit() {}
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter(d => d.Cliente.toLowerCase().indexOf(query) > -1);
  }
  imprimirPDF(tipo, indexPrinter) {
    let environmentValidate = this.urlApi.indexOf('testportal');
    if (environmentValidate != -1) {
      this.printUrl = _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__.printerIcons_test[indexPrinter].urlPreview + _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__.printPrefix + this.idAtencion;
    } else {
      this.printUrl = _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__.printerIcons[indexPrinter].urlPreview + _environments_printer_center__WEBPACK_IMPORTED_MODULE_3__.printPrefix + this.idAtencion;
    }
    setTimeout(() => {
      window.open(this.printUrl, '_blank');
    }, 1000);
  }
  goPrinters() {
    this.router.navigate(['./printer']);
  }
  goBack() {
    window.location.reload();
    //    this.navController.back();
  }

  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
    }, {
      type: _services_linkcheck_service__WEBPACK_IMPORTED_MODULE_2__.LinkcheckService
    }];
  }
};
PrinterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-printer',
  template: _printer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_printer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PrinterPage);


/***/ }),

/***/ 27882:
/*!***********************************************!*\
  !*** ./src/app/services/linkcheck.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkcheckService": () => (/* binding */ LinkcheckService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let LinkcheckService = class LinkcheckService {
  constructor() {}
  checkLink(checkUrl) {
    var links = document.querySelectorAll("a");
    var linkReport = [];
    var linksChecked = 0;
    links.forEach(function (link) {
      link = checkUrl;
      var reportLine = {
        url: link,
        status: 0,
        redirectedTo: "",
        message: "",
        element: link
      };
      //var reportLine = {url: link.getAttribute('href'), status:0, redirectedTo: "", message : "", element : link};
      linkReport.push(reportLine);
      console.log("HEAD " + reportLine.url);
      fetch(checkUrl, {
        method: 'HEAD',
        mode: 'cors',
        //mode: 'no-cors',
        redirect: 'follow'
      }).then(function (response) {
        linksChecked++;
        reportLine.status = response.status;
        reportLine.message = response.statusText + " | " + response.type + " | " + (response.text || "") + " | " + JSON.stringify(response.headers);
        if (response.redirected) {
          reportLine.redirectedTo = response.url;
        }
        console.table(response);
      }).catch(function (error) {
        reportLine.message = error;
        console.table(error);
        linksChecked++;
      });
    });
    function imgreport(links) {
      links.forEach(function (link) {
        if (link.status == 0) {
          // trigger error messages with status 
          // to the console for status of 0
          var img = new Image();
          img.src = link.url;
        }
      });
    }
    var finishReport = setInterval(function () {
      if (linksChecked >= linkReport.length) {
        console.table(linkReport);
        imgreport(linkReport);
        clearInterval(finishReport);
      }
    }, 3000);
  }
  static {
    this.ctorParameters = () => [];
  }
};
LinkcheckService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], LinkcheckService);


/***/ }),

/***/ 92445:
/*!******************************************************!*\
  !*** ./src/app/printer/printer.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/printer/printer.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,kBAAA;AACJ;AAAI;EACE,oBAAA;AAEN;AADM;EAAS,YAAA;AAIf","sourcesContent":["#button-back{\r\n    border-radius: 50%;\r\n    margin-bottom: 9px;\r\n    ion-fab-button{\r\n      padding-bottom: 25px;\r\n      ion-icon{color: white;}\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59864:
/*!******************************************************!*\
  !*** ./src/app/printer/printer.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-fab id=\"button-back\" style=\"position: fixed;\" vertical=\"top\" horizontal=\"start\" (click)=\"goBack()\">\r\n    <ion-fab-button (click)=\"'confirmar()'\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"3\"></ion-col>\r\n        <ion-col size=\"6\">Historial De Documentos De Atención # {{idAtencion}}</ion-col>\r\n        <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <!--ion-toolbar>\r\n    <ion-searchbar #searchCase id=\"search-case\" placeholder=\"Buscar asignación\" inputmode=\"text\" type=\"text\"\r\n    [debounce]=\"1000\" (ionInput)=\"handleInput($event)\"></ion-searchbar>\r\n  </!--ion-toolbar -->\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding\" style=\"width: 100%;\">\r\n    <ion-row>\r\n      <ion-col size=\"3\" *ngFor=\"let item of iconos; let i = index\" style=\"margin-bottom: 10px;\">\r\n        <ion-card style=\"height: 100%;max-height:100%;\" (click)=\"imprimirPDF(1, indexPrinter.value)\">\r\n          <!--a href=\"{{item.urlPreview}}/{{idAtencion}}\"></!--a -->\r\n          <a href=\"#\"></a>\r\n          <ion-card-header style=\"text-align: center;\">\r\n            <ion-icon name=\"{{item.name}}\" style=\"font-size: 6rem; margin: 5px; margin-top: 8%; color: var(--blueGrayColor);\" id=\"open-modal-sign\" (click)=\"'recargarFirma()'\"></ion-icon>\r\n            <ion-card-subtitle style=\"color: gray;\">{{item.descripcion}}</ion-card-subtitle>\r\n            <ion-input #indexPrinter [value]=\"i\" [hidden]=\"true\"></ion-input>\r\n          </ion-card-header>\r\n          <ion-grid>\r\n            <!--ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-button style=\"width: 100%; border-radius: 0;\" fill=\"outline\" (click)=\"imprimirPDF(1, indexPrinter.value)\">VER</ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-button style=\"width: 100%; border-radius: 0;\" fill=\"solid\" (click)=\"imprimirPDF(2, indexPrinter.value)\">IMPRIMIR</ion-button>\r\n              </ion-col>\r\n            </!--ion-row -->\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <br><br><br>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_printer_printer_module_ts.js.map