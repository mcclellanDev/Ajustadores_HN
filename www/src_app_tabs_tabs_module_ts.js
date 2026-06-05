(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'tab1',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
  }, {
    path: 'tab2',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 14608)).then(m => m.Tab2PageModule)
  }, {
    path: 'tab3',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 53746)).then(m => m.Tab3PageModule)
  }, {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 62146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);








let TabsPage = class TabsPage {
  constructor(router, toaster, call) {
    this.router = router;
    this.toaster = toaster;
    this.call = call;
    this.gpsOn = false;
    //console.log(this.outlet.isActivated.valueOf()) 
    console.log('Este outlet');
    console.dir(this.outlet);
    //this.handleNavigation(0);
  }

  ngOnInit() {
    //alert(window.location.pathname);
    let previousPage = localStorage.getItem('previous');
    if (previousPage) {
      //console.log('La pagina anterior ha sido '+previousPage);
    }
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivationStart && e.snapshot.outlet === "tabs") this.outlet.deactivate();
    });
  }
  ionViewDidEnter() {
    let gpsOn = localStorage.getItem('conectividad');
    this.gpsOn = gpsOn === 'true' ? true : false;
  }
  handleNavigation(origin) {
    localStorage.setItem('origin', origin);
    let contenedor = document.getElementsByTagName('ion-tab-button');
    jquery__WEBPACK_IMPORTED_MODULE_4__('ion-tab-button').removeAttr('style');
    jquery__WEBPACK_IMPORTED_MODULE_4__('ion-tab-button').eq(origin).attr('style', '    color: var(--primaryColor); background: white; border-radius: 30px;');
    //localStorage.setItem('atencionIndex', origin.toString());
  }

  navigateTab1() {
    setTimeout(() => {
      let contenedor = document.getElementsByTagName('ion-tab-button');
      jquery__WEBPACK_IMPORTED_MODULE_4__('ion-tab-button').eq(0).click();
    }, 2000);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
    }, {
      type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber
    }];
  }
  static {
    this.propDecorators = {
      inicio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
        args: ['inicio']
      }],
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet]
      }]
    };
  }
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 62146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-tab-bar {\n  background: var(--secondaryColor);\n  color: white;\n}\n\nion-tab-button {\n  background: var(--secondaryColor);\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.page.scss"],"names":[],"mappings":"AACA;EACI,iCAAA;EACA,YAAA;AAAJ;;AAGE;EACE,iCAAA;EACA,YAAA;AAAJ","sourcesContent":["\r\nion-tab-bar {\r\n    background: var(--secondaryColor);\r\n    color: white;\r\n  }\r\n\r\n  ion-tab-button {\r\n    background: var(--secondaryColor);\r\n    color: white;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs color=\"tertiary\">\r\n\r\n  <ion-tab-bar color=\"tertiary\">\r\n\r\n    \r\n\r\n    <ion-tab-button #inicio id=\"inicio\" tab=\"tab1\" (click)=\"handleNavigation(0)\" \r\n    [disabled]=\"!gpsOn\">\r\n      <ion-icon name=\"apps-outline\"></ion-icon>\r\n      <ion-label>Inicio</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\" (click)=\"handleNavigation(1)\"\r\n    [disabled]=\"!gpsOn\">\r\n      <ion-icon name=\"search\"></ion-icon>\r\n      <ion-label>Mis Atenciones</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\" (click)=\"handleNavigation(2)\"\r\n    [disabled]=\"!gpsOn\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map