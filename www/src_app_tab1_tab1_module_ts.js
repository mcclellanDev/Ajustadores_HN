(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 44211:
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FilterPipe = class FilterPipe {
  transform(value, buscar, tipo) {
    if (buscar === "" || buscar === " ") {
      return value;
    } else {
      if (tipo === 1) {
        var arreglo = value.filter(data => {
          return data.DESCRIPCION.toString().toLowerCase().includes(buscar.toString().toLocaleLowerCase());
        });
        return arreglo;
      }
      if (tipo === 2) {
        var arreglo = value.filter(data => {
          return data.Cliente.toString().toLowerCase().includes(buscar.toString().toLocaleLowerCase());
        });
        return arreglo;
      } else {
        return value;
      }
    }
  }
};
FilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'filtro'
})], FilterPipe);


/***/ }),

/***/ 48761:
/*!*****************************************!*\
  !*** ./src/app/interfaces/variables.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "versionAndroid": () => (/* binding */ versionAndroid),
/* harmony export */   "versionIOS": () => (/* binding */ versionIOS)
/* harmony export */ });
const versionAndroid = {
  versionNumero: '1',
  versionCodigo: '2.0.10'
};
const versionIOS = {
  versionNumero: '1',
  versionCodigo: '1.0.0'
};

/***/ }),

/***/ 77390:
/*!********************************************!*\
  !*** ./src/app/services/locate.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocateService": () => (/* binding */ LocateService)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let LocateService = class LocateService {
  constructor(geo) {
    this.geo = geo;
    this.laLocalidad = [];
    this.miLocalidad = [];
  }
  getCountry() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 1000
      });
      console.log("Tengo unas coordenadas ");
      console.dir(_this.coordinates);
      let precision = _this.coordinates.coords.accuracy;
      if (precision < 30) {
        clearInterval(_this.geoInterval);
        _this.geo.reverseGeocode(_this.coordinates.coords.latitude, _this.coordinates.coords.longitude).then(result => {
          _this.laLocalidad = result;
          console.log("Mi localidad es ");
          console.dir(_this.laLocalidad);
          _this.miLocalidad = JSON.stringify(_this.laLocalidad);
          _this.miPais = _this.laLocalidad[0].countryCode;
          _this.miPaisNombre = _this.laLocalidad[0].countryName;
          localStorage.setItem('codigoPais', _this.miPais);
          localStorage.setItem('nombrePais', _this.miPaisNombre);
        });
      } else {
        _this.geoInterval = setInterval(() => {
          _this.getCountry();
        }, 1000);
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__.NativeGeocoder
    }];
  }
};
LocateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], LocateService);


/***/ }),

/***/ 17601:
/*!*****************************************!*\
  !*** ./src/app/tab1/parallax-header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxHeader": () => (/* binding */ ParallaxHeader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let ParallaxHeader = class ParallaxHeader {
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
  }
  ngOnInit() {
    const content = this.element.nativeElement;
    if (content) {
      this.header = content.getElementsByClassName('header-image')[0];
      const mainContent = content.getElementsByClassName('main-content')[0];
      this.headerHeight = this.header.clientHeight;
      if (this.header) {
        this.renderer.setStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setStyle(this.header, 'background-size', 'cover');
      }
      if (mainContent) {
        this.renderer.setStyle(mainContent, 'position', 'absolute');
      }
    }
  }
  onWindowResize(ev) {
    this.headerHeight = this.header.clientHeight;
  }
  onContentScroll(ev) {
    if (ev) {
      this.updateParallaxHeader(ev);
    }
  }
  updateParallaxHeader(ev) {
    if (ev.detail.scrollTop >= 0) {
      this.translateAmt = ev.detail.scrollTop / 2;
      this.scaleAmt = 1;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
    }
    this.renderer.setStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }
};
ParallaxHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[parallax-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  }
})], ParallaxHeader);


/***/ }),

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [{
  path: '',
  component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
}];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], Tab1PageRoutingModule);


/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _parallax_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax-header */ 17601);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter.pipe */ 44211);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);









let Tab1PageModule = class Tab1PageModule {};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab1PageRoutingModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _parallax_header__WEBPACK_IMPORTED_MODULE_1__.ParallaxHeader, _filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe],
  exports: [_parallax_header__WEBPACK_IMPORTED_MODULE_1__.ParallaxHeader, _filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe]
})], Tab1PageModule);


/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 65);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/signatures */ 88538);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_locate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/locate.service */ 77390);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/storage.service */ 71188);
/* harmony import */ var _environments_mapas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/mapas */ 31624);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../filter.pipe */ 44211);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _services_countrydata_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/countrydata.service */ 52972);
/* harmony import */ var _interfaces_variables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../interfaces/variables */ 48761);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _environments_network__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/network */ 4322);





























let Tab1Page = class Tab1Page {
  constructor(router, loading, alert, api, toast, tostador, actionSheetCtrl, platform, toaster, so, geo, locateIt, alertController, call, myModal, countryService, storageService) {
    var _this = this;
    // console.log(window.location.pathname);
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.tostador = tostador;
    this.actionSheetCtrl = actionSheetCtrl;
    this.platform = platform;
    this.toaster = toaster;
    this.so = so;
    this.geo = geo;
    this.locateIt = locateIt;
    this.alertController = alertController;
    this.call = call;
    this.myModal = myModal;
    this.countryService = countryService;
    this.storageService = storageService;
    this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject(null);
    this.results = [];
    this.tipoFotos = [];
    this.canvasAseguradoWidth = 0;
    this.openFoto = false;
    this.foto = '';
    this.firma = [];
    this.firmaObtenida = [];
    this.tipoLicencia = [];
    this.lasFirmas = [];
    this.search = "";
    this.elCliente = "";
    this.elServicio = "";
    this.elColorEstado = "";
    this.textoEmergente1 = "";
    this.textoEmergente2 = "";
    this.canDismiss = false;
    this.firmaDemoAjustador = "";
    this.isSign = false;
    this.esAjustador = true;
    this.esClienteCompleto = false;
    this.esAjustadorCompleto = false;
    this.isLogout = false;
    this.user = null;
    this.atIndexId = 0;
    this.isSignature = false;
    this.emptySignature = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature;
    this.codigoPais = 'hn';
    this.imagePrefix = 'data:image/jpeg;base64,';
    this.notifications = [];
    this.presentingElement = null;
    this.filtroAtenciones = [];
    this.isSearch = false;
    this.isLoad = true;
    this.openModal = false;
    this.clientCompleteArray = [];
    this.lasAtenciones = [];
    this.atencionesActivas = [];
    this.readStatusArray = [];
    this.isKeyboard = false;
    this.isCacheClear = false;
    this.emptySignatureWhite = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
    this.gpsOn = false;
    this.readStatus = 1;
    let previousPage = localStorage.getItem('previous');
    if (previousPage) {
      console.log('En tab1 la pagina anterior ha sido ' + previousPage);
      if (previousPage == '/expediente') {
        window.location.reload();
      }
      localStorage.setItem('previous', window.location.pathname);
    } else {
      localStorage.setItem('previous', window.location.pathname);
    }
    this.presentingElement = document.querySelector('.ion-page');
    this.updateIcon = '../../assets/img/descargar.gif';
    this.api.ListTipoFoto().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.tipoFotos = res;
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        //console.log(res)
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    this.notifications.push({
      title: 'Coordinacion de ajustador por accidente de transito',
      atencionId: 44630
    }, {
      title: 'Coordinacion de ajustador por accidente de transito',
      atencionId: 44631
    }, {
      title: 'Coordinacion de ajustador por accidente de transito',
      atencionId: 44632
    });
    if (this.platform.is('android') == true) {
      this.notificationBadgeRight = '6vw';
      this.notificationBadgeTop = '1.4vh';
    } else {
      this.notificationBadgeRight = '4.97vw';
      this.notificationBadgeTop = '1vh';
    }
    this.tostador.dismissToast();
    this.isLoading = false;
    this.user = this.api.currentUser;
    this.atIndexId = 0;
    this.inicializarFirma();
    localStorage.setItem('nombreAjustador', this.user.NombreAgente);
    this.firstInterval = setInterval(() => {
      this.handleFirstSegment();
    }, 1000);
    if (JSON.parse(window.localStorage.getItem('Push'))) {
      var $data = JSON.parse(window.localStorage.getItem('Push'));
      if ($data.Type == "EmbebedUrl") {}
      if ($data.Type == "InternalView") {
        this.router.navigate([$data.Direction], {
          queryParams: {
            Id: $data.DirectionData
          }
        });
      }
    }
  }
  resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth * ratio;
    this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight * ratio;
    this.canvas.nativeElement.getContext("2d").scale(ratio, ratio);
    this.sig.clear();
  }
  inicializarFirma() {
    this.firmaPrecargadaAjustador = this.user.Firma;
    localStorage.setItem('firmaPrecargadaAjustador', this.firmaPrecargadaAjustador);
  }
  next() {
    if (this.elColorEstado == "green") {
      this.router.navigate(['./fotoshn']);
    } else {
      this.tostador.presentToastSiniestroCerrado("Este informe ya ha sido cerrado y no se puede editar. Para mayor información, contacta a tu administrador de sistema", 'middle', 'firma');
    }
  }
  goFotos() {
    this.router.navigate(['./fotoshn']);
  }
  goFotoReporte() {
    this.router.navigate(['./foto-reporte']);
  }
  openNotification(i) {
    jquery__WEBPACK_IMPORTED_MODULE_19__('.notification-item').eq(i).toggleClass('read');
  }
  checkAtencionEnProceso(idAtencionSeleccionada, idAtencionEnProceso) {
    let iguales = idAtencionSeleccionada == idAtencionEnProceso;
    if (iguales == false) {
      setTimeout(() => {
        this.presentAlertClearCache(idAtencionSeleccionada, 'HELP', 'Ajustadores', 'Existen datos en caché para la atención ' + idAtencionEnProceso + '. Deseas cambiar a la atención ' + idAtencionSeleccionada + '? Si aceptas, se borrarán los datos de la atención ' + idAtencionEnProceso + ' y se cargarán los de la atención ' + idAtencionSeleccionada + '.');
      }, 1000);
      /**/
    }
  }

  ngOnInit() {
    var _this2 = this;
    jquery__WEBPACK_IMPORTED_MODULE_19__('ion-tab-button').eq(0).click();
    setTimeout(() => {
      console.log('clienteContent');
      let evaluator = window.location.pathname == '/login';
      if (evaluator == false) {
        let myContent = document.getElementById('clienteContent');
        if (myContent) {} else {
          this.outletDeactivate();
          window.location.reload();
        }
      }
    }, 3000);
    localStorage.setItem('origin', window.location.pathname);
    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
    }))).subscribe(res => {
      console.log('Las atenciones en ngOnInit');
      console.dir(res);
      for (let indexA = 0; indexA < res.length; indexA++) {
        const elementA = res[indexA];
        if (elementA.ColorEstado == 'green') {
          this.atencionesActivas.push(elementA);
        }
        if (indexA == res.length - 1) {
          console.dir(this.atencionesActivas.sort((a, b) => b.IdAtencion - a.IdAtencion));
          console.dir(this.atencionesActivas);
          this.isLoad = true;
          this.idAtencion = this.atencionesActivas[0].IdAtencion;
          let idAtencionEnProceso = localStorage.getItem('atencionEnProceso');
          if (idAtencionEnProceso) {} else {}
        }
      }
    });
    this.androidVersion = _interfaces_variables__WEBPACK_IMPORTED_MODULE_18__.versionAndroid.versionCodigo;
    this.updateIntent();
    this.outletDeactivate();
  }
  outletDeactivate() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivationStart && e.snapshot.outlet === "tab1") this.outlet.deactivate();
    });
  }
  updateIntent() {
    var _this3 = this;
    this.api.GetAppVersion('android').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.dbVersion = res;
        if (_interfaces_variables__WEBPACK_IMPORTED_MODULE_18__.versionAndroid.versionCodigo) {
          _this3.store = 'https://portal.porsalud.net/Outer/AppRepositorio/HELP/NuevaVersion/HELP.apk';
          _this3.androidVersion = _interfaces_variables__WEBPACK_IMPORTED_MODULE_18__.versionAndroid.versionCodigo;
          let numbersDB = _this3.androidVersion.toString().replace(/[^0-9]/g, "");
          let numbersDV = _this3.dbVersion.toString().replace(/[^0-9]/g, "");
          if (numbersDB == numbersDV) {} else {
            setTimeout(() => {
              jquery__WEBPACK_IMPORTED_MODULE_19__('#open-modal-update').click();
            }, 3000);
          }
        }
      });
      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref7 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
  openStore(store) {
    this.outletDeactivate();
    window.open(store, '_system', 'location=yes');
  }
  ionViewWillEnter() {
    let gpsOn = localStorage.getItem('conectividad');
    if (gpsOn) {
      this.gpsOn = gpsOn === 'true' ? true : false;
    }
    for (let i = 0; i < 100; i++) {}
  }
  ionViewDidEnter() {
    const permissionResult = _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_15__.Geolocation.checkPermissions();
    let gpsOn = localStorage.getItem('conectividad');
    if (gpsOn) {
      this.gpsOn = gpsOn === 'true' ? true : false;
    }
    console.log('ionViewDidEnter checando los permisos de gelocacion ');
    console.dir(permissionResult);
    permissionResult.then(result => {
      console.log('ionViewDidEnter checando los permisos de gelocacion con then result ');
      console.dir(result);
      console.log(result.location);
      if (result.location == 'granted') {
        this.conectividad = true;
        this.gpsOn = true;
        this.estadoConexion = 'Conectado a Internet';
        this.estadoConexionGPS = 'Permisos GPS activados';
        //$('#gpsCard').css('display', 'none');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#saludoInicial').css('display', 'none');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').removeClass('gps-in');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').addClass('gps-out');
      }
      if (result.location == 'denied') {
        this.conectividad = false;
        this.gpsOn = false;
        this.estadoConexion = 'Sin conexión';
        this.estadoConexionGPS = 'Permisos GPS denegados';
        //$('#gpsCard').css('display', 'inherit');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#saludoInicial').css('display', 'inherit');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').removeClass('gps-out');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').addClass('gps-in');
      }
      setTimeout(() => {
        console.log('conectividad en ionViewDidEnter es ' + this.conectividad);
        if (this.conectividad) {
          localStorage.setItem('conectividad', this.gpsOn.toString());
        }
        //alert('Vamos a checar los permisos de ubicación y la conectividad a internet para mostrar el indicador de conexión. Permisos de ubicación: '+result.location+'\nConectividad: '+this.conectividad+'\nEstado conexión: '+this.estadoConexion+'\nEstado conexión GPS: '+this.estadoConexionGPS);
        if (this.conectividad == false) {
          //Geolocation.requestPermissions();
          //alert('Tengo permisos GPS y conexión a internet');
        } else {
          //alert('No tengo conexión a internet, pero tengo permisos GPS');
        }
        //alert('Permisos de ubicación: '+result.location+'\nConectividad: '+this.conectividad+'\nEstado conexión: '+this.estadoConexion+'\nEstado conexión GPS: '+this.estadoConexionGPS);
        //alert('Permisos de ubicación: '+result.location+'\nEstado conexión GPS: '+this.estadoConexionGPS);
      }, 3000);
    });
    localStorage.setItem('coberturas', JSON.stringify([]));
    this.ateIndex = localStorage.getItem('indexAtencion-0');
    if (this.ateIndex == null || this.ateIndex != undefined || this.ateIndex != '') {
      this.setFirstSegment();
    } else {
      //alert(this.ateIndex);
    }
    this.enterView();
  }
  enterView() {
    if (this.firmaPrecargadaAjustador != null && this.firmaPrecargadaAjustador != undefined) {
      this.isSign = true;
    } else {
      this.isSign = false;
    }
    if (this.platform.is('android') == true) {
      this.geoCodeReverse();
    } else {
      this.miPais = 'HN';
    }
    this.getAtencionesActivas();
    this.sig = new signature_pad__WEBPACK_IMPORTED_MODULE_14__["default"](this.canvas.nativeElement);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    this.sig.fromDataURL(_environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite);
    setTimeout(() => {
      this.sig.clear();
    }, 1000);
    this.platform.ready().then(() => {
      this.tostador.presentToastReload('Tira hacia abajo para actualizar', 'top', 'tab');
      this.sendTokenPush();
      if (_capacitor_network__WEBPACK_IMPORTED_MODULE_11__.Network) {
        this.checkConnection();
      }
    });
    this.getCanvasWidth();
  }
  getCanvasWidth() {
    this.cardWidth = document.getElementById('cardAsegurado').clientWidth;
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.cardWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.cardWidth - 50;
    }
  }
  clear() {
    this.sig.clear();
    this.isSignature = false;
  }
  saveSignatureAsegurado(idAtencion) {
    var _this4 = this;
    idAtencion = this.atIndex;
    this.hoy = new Date().toISOString();
    if (this.elColorEstado == "green") {
      this.isLoading = true;
      this.sig.backgroundColor = "rgb(255, 255, 255)";
      this.sig.minWidth = 1;
      this.sig.maxWidth = 1.5;
      this.sig.dotSize = 3;
      const mySignature = this.sig.toDataURL("image/jpeg");
      if (mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature && mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite) {
        this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
        this.firma.push({
          IdAtencion: idAtencion,
          RefTipoFotoId: 3,
          Foto: this.firmaPrecargada.split(',')[1],
          NombreFirmante: this.elCliente,
          FechaFirma: this.hoy
        });
        this.api.GuardarFirmaAsegurado(this.firma).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this4.isLoading = false;
        }))).subscribe(res => {
          this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
          const element = document.getElementById('cardAsegurado');
          const elementInput = document.getElementById('nombreInput');
          element.setAttribute('style', 'border: none');
          elementInput.setAttribute('style', 'border: none');
          this.isSignature = true;
          this.sig.clear();
        }, /*#__PURE__*/function () {
          var _ref9 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            _this4.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
            _this4.isSignature = false;
            _this4.isLoading = false;
          });
          return function (_x5) {
            return _ref9.apply(this, arguments);
          };
        }());
        setTimeout(() => {
          this.sig.clear();
        }, 300);
      } else {
        this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
        this.isLoading = false;
      }
    } else {
      this.tostador.presentToastSiniestroCerrado("Este informe ya ha sido cerrado y no se puede editar. Para mayor información, contacta a tu administrador de sistema", 'middle', 'firma');
      this.isLoading = false;
    }
  }
  saveSignature(agenteId) {
    var _this5 = this;
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    const mySignature = this.sig.toDataURL("image/jpeg");
    if (mySignature != _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature) {
      this.firmaPrecargadaAjustador = this.sig.toDataURL("image/jpeg");
      localStorage.setItem("dSignature", this.firmaPrecargadaAjustador.toString());
      this.firmaObtenida = {
        IdAgente: agenteId,
        Firma: this.firmaPrecargadaAjustador.split(',')[1]
      };
      this.api.GuardarFirmaAjustador(this.firmaObtenida).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this5.isLoading = false;
      }))).subscribe(res => {
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
      }, /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this5.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }());
    } else {
      this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
    }
  }
  onItemClickFunc() {
    if (event) {
      event.stopPropagation();
    }
  }
  sendTokenPush() {
    var _this6 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (JSON.parse(window.localStorage.getItem('token'))) {
        const data = {
          IdProveedorAgente: _this6.api.currentUser.ProveedorAgenteId,
          TokenPush: JSON.parse(window.localStorage.getItem('token'))
        };
        _this6.api.SendToken(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe(res => {}, /*#__PURE__*/function () {
          var _ref13 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this6.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x7) {
            return _ref13.apply(this, arguments);
          };
        }());
      }
    })();
  }
  getfondo(atencionId) {
    var _this7 = this;
    this.api.obtenerFotoPorAtencion(atencionId, 1).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
      var _ref15 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this7.laImg = _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.imagePrefix + res[0].FotoFirma;
      });
      return function (_x8) {
        return _ref15.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref16 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this7.laImg = _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.fondos[Math.floor(Math.random() * _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.fondos.length)];
      });
      return function (_x9) {
        return _ref16.apply(this, arguments);
      };
    }());
  }
  formatearFecha(mydate) {
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.fHora = timeFormat.toString().substring(0, 5);
    let anio = dateFormat.toString().substring(0, 4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);
    let laFormateada = dia + '-' + mes + '-' + anio;
    let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
    };
    return fechaArray;
  }
  getAtencionesActivas() {
    var _this8 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let atencionesCount = 0;
      localStorage.setItem('atencionesCount', atencionesCount.toString());
      _this8.isLoading = true;
      _this8.api.MisAtencionesActivas(_this8.api.currentUser.ProveedorAgenteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this8.isCacheClear == false) {
          _this8.isLoading = false;
        }
      }))).subscribe(res => {
        // DEBUG FECHA -- FechaInicio : "2024-06-19T08:39:38.01"
        _this8.filtroAtenciones = res;
        _this8.filtroAtenciones.sort((a, b) => b.IdAtencion - a.IdAtencion);
        atencionesCount = _this8.filtroAtenciones.length;
        for (let indexFilter = 0; indexFilter < _this8.filtroAtenciones.length; indexFilter++) {
          const element = _this8.filtroAtenciones[indexFilter];
          let fechaFormateada = _this8.formatearFecha(element.Fecha);
          _this8.filtroAtenciones[indexFilter].Fecha = fechaFormateada.fechaF;
          _this8.filtroAtenciones[indexFilter].Hora = fechaFormateada.horaF;
          if (indexFilter == 0) {
            _this8.firstSegmentId = element.IdAtencion;
          }
          if (indexFilter == _this8.filtroAtenciones.length - 1) {
            console.log('Las posiciones de los estados son ');
            console.dir(_this8.readStatusArray);
          }
        }
        setTimeout(() => {
          jquery__WEBPACK_IMPORTED_MODULE_19__('#segmentId').text(_this8.firstSegmentId);
        }, 1000);
        localStorage.setItem('atencionesCount', atencionesCount.toString());
      });
    })();
  }
  getActiveAttentionIndex() {
    const storedIndex = localStorage.getItem('indexAtencion-0');
    const selectedIndex = parseInt(storedIndex || '0', 10);
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= this.filtroAtenciones.length) {
      localStorage.setItem('indexAtencion', '0');
      localStorage.setItem('indexAtencion-0', '0');
      return 0;
    }
    return selectedIndex;
  }
  getAtenciones() {
    var _this9 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.isLoading = true;
      _this9.api.MisAtenciones(_this9.api.currentUser.ProveedorAgenteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this9.isLoading = false;
      }))).subscribe(res => {
        let indexAtenciones = 0;
        _this9.atenciones = res;
        _this9.lasAtenciones = res;
        _this9.results = res;
        let products = _this9.atenciones.sort((a, b) => b.IdAtencion - a.IdAtencion);
        if (products.length > 0) {
          for (let index = 0; index < products.length; index++) {
            const element = products[index];
            let fechaFormateada = _this9.formatearFecha(element.Fecha);
            _this9.results[index].Fecha = fechaFormateada.fechaF;
            _this9.results[index].Hora = fechaFormateada.horaF;
            if (index == products.length - 1) {}
          }
          setTimeout(() => {
            const atencionesIds = document.getElementsByClassName('atencion-id');
            for (let index = 0; index < _this9.atenciones.length; index++) {
              const element = _this9.atenciones[index];
              atencionesIds[index].setAttribute('style', 'color:' + element.ColorEstado);
            }
          }, 1000);
          _this9.atenciones.forEach(item => {
            _this9.atIndex = item.IdAtencion;
            _this9.elCliente = item.Cliente;
            _this9.elServicio = item.Servicio;
            _this9.elColorEstado = item.ColorEstado;
          });
        } else {}
      }, /*#__PURE__*/function () {
        var _ref19 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
        return function (_x10) {
          return _ref19.apply(this, arguments);
        };
      }());
    })();
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter(d => d.Cliente.toLowerCase().indexOf(query) > -1 || d.Fecha.toString().toLowerCase().indexOf(query) > -1 || d.IdAtencion.toString().toLowerCase().indexOf(query) > -1);
    setTimeout(() => {
      const atencionesIds = document.getElementsByClassName('atencion-id');
      if (this.results.length == this.atenciones.length) {
        for (let index = 0; index < this.atenciones.length; index++) {
          const element = this.atenciones[index];
          atencionesIds[index].setAttribute('style', 'color:' + element.ColorEstado);
        }
      }
    }, 400);
  }
  randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //.toFixed(2);
  }

  logout() {
    this.api.logout();
  }
  cerrarSesion() {
    var _this10 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alert.create({
        header: 'HELP',
        message: 'Asistencia de Seguros',
        buttons: [{
          text: 'Cerrar sesión?',
          handler: () => {
            _this10.isLogout = true;
            localStorage.setItem('isLogout', _this10.isLogout.toString());
            localStorage.setItem('previous', _this10.router.url);
            _this10.api.logout();
          }
        }, {
          text: 'Continuar',
          role: 'cancel'
        }, {
          text: 'Limpiar Caché',
          role: 'confirm',
          handler: () => {
            _this10.limpiarCache();
          }
        }]
      });
      alert.present();
    })();
  }
  limpiarCache() {
    this.isLoading = true;
    this.isCacheClear = true;
    this.clearSegmentsStorage();
    this.getAtencionesActivas();
    this.outletDeactivate();
    setTimeout(() => {
      this.isLoading = false;
      this.isCacheClear = false;
    }, this.randomIntFromInterval(2000, 4000));
  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  stopTrack() {
    var _this11 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const opt = {
        id: yield _this11.wait
      };
      _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_15__.Geolocation.clearWatch(opt).then(result => {});
    })();
  }
  handleRefresh(event) {
    setTimeout(() => {
      this.getAtencionesActivas();
      event.target.complete();
    }, 500);
  }
  presentActionSheet() {
    var _this12 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this12.actionSheetCtrl.create({
        header: 'HELP',
        subHeader: 'Opciones de usuario',
        buttons: [{
          text: 'Cerrar Sesión',
          handler: () => {
            _this12.cerrarSesion();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      actionSheet.present();
    })();
  }
  verExpediente(idAtencion) {
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: idAtencion,
        Source: 1
      }
    });
  }
  abrirMenu(idAtencion, indexInput) {
    this.openModal = true;
  }
  verExpedienteBusqueda(idAtencion, indexInput) {
    var _this13 = this;
    this.elColorEstado = this.results[indexInput].ColorEstado;
    localStorage.setItem('elColorEstado', this.elColorEstado);
    localStorage.setItem('idAtencion', idAtencion.toString());
    localStorage.setItem('indexAtencion', indexInput.toString());
    localStorage.setItem('indexAtencion-2', indexInput.toString());
    this.obtenerCacheCliente(idAtencion);
    this.api.DatosDeAtencion(idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
      var _ref21 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this13.datosDeAtencion = res;
        let identidadAsegurado = res[0].IdentidadCliente;
        localStorage.setItem('datosDeAtencion', _this13.datosDeAtencion);
        localStorage.setItem('identidadAsegurado', identidadAsegurado);
      });
      return function (_x11) {
        return _ref21.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref22 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
      return function (_x12) {
        return _ref22.apply(this, arguments);
      };
    }());
    this.results = [];
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: idAtencion,
        Source: 2
      }
    });
  }
  goProfile() {
    this.router.navigate(['./tabs/tab3'], {
      queryParams: {
        Id: 'idAtencion'
      }
    });
  }
  goESignature() {
    const idAtencion = this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');
    if (idAtencion) {
      localStorage.setItem('idAtencion', idAtencion.toString());
    }
    localStorage.setItem('elCliente', this.elCliente || localStorage.getItem('elCliente') || '');
    localStorage.setItem('signatureReturnTo', '/tabs/tab1');
    this.router.navigate(['./esignature']);
  }
  abrirExpediente() {
    if (this.isSignature == true) {
      this.router.navigate(['./expediente'], {
        queryParams: {
          Id: this.atIndex
        }
      });
      localStorage.setItem('isSignature', this.isSignature.toString());
    } else {
      this.presentAlertNoSig('HELP Importante!', 'Firma Pendiente', 'Aun no se ha guardado una firma para esta atención. Guarda una para poder continuar');
    }
    //    
  }

  presentToastEditSig(message, position, clase, idAtencion) {
    var _this14 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this14.toast.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'EDITAR FIRMA',
          role: 'cancel',
          handler() {}
        }, {
          text: 'IR AL EXPEDIENTE',
          role: 'confirm',
          handler() {
            this.router.navigate(['./expediente'], {
              queryParams: {
                Id: idAtencion
              }
            });
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentAlertClearCache(idAtencion, header, subheader, message) {
    var _this15 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this15.alertController.create({
        header: header,
        subHeader: subheader,
        message: message,
        buttons: [{
          text: 'NO CAMBIAR',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'CAMBIAR',
          role: 'confirm',
          handler: () => {
            _this15.isLoading = true;
            setTimeout(() => {
              _this15.storageService.clearSiniestroArrays();
            }, 600);
            setTimeout(() => {
              _this15.limpiarCache();
            }, 1200);
            setTimeout(() => {
              localStorage.removeItem('dataProcess-DescripcionTercerosMuertos');
              localStorage.removeItem('dataProcess-DescripcionTercerosHeridos');
              localStorage.removeItem('dataProcess-DescripcionAudiencia');
              localStorage.setItem('atencionEnProceso', idAtencion);
              localStorage.setItem('estaEvaluado', 'false');
              _this15.isLoading = false;
            }, 1800);
          }
        }]
      });
      yield alert.present();
    })();
  }
  presentAlertNoSig(header, subheader, message) {
    var _this16 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this16.alertController.create({
        header: header,
        subHeader: subheader,
        message: message,
        buttons: [{
          text: 'EDITAR FIRMA',
          role: 'cancel',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  presentToastClearStorage(message, position, clase) {
    var _this17 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this17.toast.dismiss();
      }
      const toast = yield _this17.toast.create({
        message: message,
        color: 'primary',
        duration: 60000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: []
      });
      yield toast.present();
    })();
  }
  presentToastReloadCache(message, position, clase) {
    var _this18 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this18.toast.dismiss();
      }
      const toast = yield _this18.toast.create({
        message: message,
        color: 'primary',
        duration: 60000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO CAMBIAR ATENCION',
          role: 'cancel'
        }, {
          text: 'CAMBIAR ATENCION',
          role: 'confirm',
          handler: () => {
            localStorage.setItem('atencionEnProceso', _this18.idAtencion);
            _this18.storageService.clearSiniestroArrays();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToast(message, position, clase) {
    var _this19 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this19.toast.dismiss();
      }
      const toast = yield _this19.toast.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO',
          role: 'cancel'
        }, {
          text: 'SI',
          role: 'confirm',
          handler: () => {
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastErrorConexion(message, position, clase) {
    var _this20 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this20.toast.dismiss();
      }
      const toast = yield _this20.toast.create({
        message: message,
        color: 'dark',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  checkConnection() {
    //alert('Voy')
    if (_capacitor_network__WEBPACK_IMPORTED_MODULE_11__.Network) {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_11__.Network.getStatus().then(status => {
        this.conexion = status;
        console.log('status.connected');
        console.log(status.connected);
        this.conectividad = status.connected;
        console.log('Mi estado de conectividad es ' + this.conectividad);
        for (let index = 0; index < _environments_network__WEBPACK_IMPORTED_MODULE_21__.NetworkInfo.status.length; index++) {
          const element = _environments_network__WEBPACK_IMPORTED_MODULE_21__.NetworkInfo.status[index];
          if (element.bool == this.conectividad) {
            this.conectividadStat = element.stat;
          }
        }
        if (this.conectividad == false) {
          //this.toaster.toastMessage = 'No hay conexión a internet';
          //this.toaster.toastClass = 'conectividad';
          //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
        }
      });
    } else {
      this.conectividad = false;
    }
    _capacitor_network__WEBPACK_IMPORTED_MODULE_11__.Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      for (let index = 0; index < _environments_network__WEBPACK_IMPORTED_MODULE_21__.NetworkInfo.status.length; index++) {
        const element = _environments_network__WEBPACK_IMPORTED_MODULE_21__.NetworkInfo.status[index];
        if (element.bool == this.conectividad) {
          this.conectividadStat = element.stat;
          localStorage.setItem('conectividad', this.conectividad.toString());
        }
      }
      localStorage.setItem('conectividad', this.conectividad.toString());
      if (this.conectividad == false) {
        //$('#connectIndicator').fadeIn();
        //this.toaster.toastMessage = 'No hay conexión a internet';
        //this.toaster.toastClass = 'conectividad';
        //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
      } else {
        //$('#connectIndicator').fadeOut();
      }
    });
  }
  permitirGPS() {
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_15__.Geolocation.requestPermissions().then(result => {
      console.log('Permisos de ubicación solicitados:', result);
      if (result.location == 'granted') {
        //this.conectividadStat = true;
        this.estadoConexionGPS = 'Permisos de ubicación precisa';
        jquery__WEBPACK_IMPORTED_MODULE_19__('#connectIndicatorLogin').fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').removeClass('gps-in');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#chipGPS').addClass('gps-out');
        //$('#gpsCard').css('display', 'none');
        jquery__WEBPACK_IMPORTED_MODULE_19__('#saludoInicial').css('display', 'none');
        setTimeout(() => {
          window.location.reload();
        }, 600);
      }
    });
  }
  /*
  checkConnection() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.conexion = status;
        this.conectividad = status.connected;
        if (this.conectividad == false) {
          this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
        }
      })
    } else {
      this.conectividad = false;
    }
        Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      if (this.conectividad == false) {
        this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
      }
    })
  }
  */
  handleFirstSegment() {
    // Handle the click event for the first segment
    this.ateIndex = localStorage.getItem('indexAtencion');
    if (this.ateIndex == null || this.ateIndex == undefined || this.ateIndex == '' || this.ateIndex == '0') {
      this.setFirstSegment();
    } else {
      let indexa = this.getActiveAttentionIndex();
      jquery__WEBPACK_IMPORTED_MODULE_19__('.segment-item-atenciones').eq(indexa).click();
      clearInterval(this.firstInterval);
    }
  }
  setFirstSegment() {
    let daFirstSegmentsButton = document.getElementsByClassName('segment-item-atenciones');
    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      daFirstSegmentsButton[0].setAttribute('style', 'color:#0090d0;border:1px solid #0090d0');
      let laIndexS = this.filtroAtenciones[0].IdAtencion;
      let laIndex; //= this.atenciones[0].IdAtencion;
      laIndex = parseInt(localStorage.getItem('atencionEnProceso'));
      if (!laIndex) {
        laIndex = this.filtroAtenciones[0].IdAtencion;
      }
      localStorage.setItem('idAtencionInicial', laIndex.toString());
      localStorage.setItem('idAtencion', laIndex.toString());
      ////////////////////////////////////////////////////
      this.ateIndex = localStorage.getItem('indexAtencion-0');
      if (this.ateIndex != '0') {
        //alert('El index de atención no es 0, es: '+this.ateIndex);
        let indexa = this.getActiveAttentionIndex();
        jquery__WEBPACK_IMPORTED_MODULE_19__('.segment-item-atenciones').eq(indexa).click();
      } else {
        localStorage.setItem('indexAtencion', '0');
        localStorage.setItem('indexAtencion-0', '0');
        jquery__WEBPACK_IMPORTED_MODULE_19__('.segment-item-atenciones').eq(0).click();
      }
      ////////////////////////////////////////////////////
      clearInterval(this.firstInterval);
    }
  }
  verNotificacion(event) {}
  openImg(foto) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  obtenerCacheCliente(AtencionId) {
    var _this21 = this;
    this.api.ObtenercacheCliente(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref24 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Detalles de cache en ver expediente: " + res.length);
        console.dir(res);
        if (res) {
          let indexFlag = 'no tiene';
          let respuesta = '';
          let verificacion;
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            respuesta = respuesta + element;
            if (index == res.length - 1) {
              verificacion = respuesta.indexOf(indexFlag);
              if (verificacion != -1) {
                _this21.esClienteCompleto = false;
              } else {
                _this21.esClienteCompleto == true;
              }
            }
          }
        } else {
          _this21.esClienteCompleto = false;
        }
      });
      return function (_x13) {
        return _ref24.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref25 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        _this21.esClienteCompleto = false;
      });
      return function (_x14) {
        return _ref25.apply(this, arguments);
      };
    }());
  }
  seleccionarAtencion(idAtencion, indexInput) {
    var _this22 = this;
    this.obtenerCacheCliente(idAtencion);
    this.isLoad = false;
    let idAtencionEnProceso = localStorage.getItem('atencionEnProceso');
    if (idAtencionEnProceso) {
      this.checkAtencionEnProceso(idAtencion, idAtencionEnProceso);
    } else {}
    this.elColorEstado = this.filtroAtenciones[indexInput].ColorEstado;
    localStorage.setItem('elColorEstado', this.elColorEstado);
    this.atIndex = idAtencion;
    this.idAtencion = this.atIndex;
    this.atIndexId = indexInput;
    localStorage.setItem('idAtencion', idAtencion);
    localStorage.setItem('indexAtencion', indexInput.toString());
    localStorage.setItem('indexAtencion-0', indexInput.toString());
    localStorage.setItem('elCliente', this.filtroAtenciones[indexInput].Cliente);
    this.getfondo(idAtencion);
    this.getCountry();
    if (this.elColorEstado == "green") {
      this.isLoading = true;
      this.api.DatosDeAtencion(idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this22.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref27 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          let identidadAsegurado = res[0].IdentidadCliente;
          _this22.datosDeAtencion = [];
          console.log("Los datos de atención");
          for (let indexa = 0; indexa < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_20__.datosAtencionKeys.length; indexa++) {
            const elementa = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_20__.datosAtencionKeys[indexa];
            let daKey = elementa.nombre;
            _this22.datosDeAtencion.push({
              key: elementa.nombre,
              value: res[0][daKey]
            });
            if (indexa == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_20__.datosAtencionKeys.length - 1) {
              console.log('Atención ' + idAtencion);
              let laFecha = res[0].FechaInicio.toString().split('T')[0];
              let laHora = res[0].HoraDeAccidente;
              console.log('FechaHora ' + (laFecha + 'T' + laHora));
              localStorage.setItem('FechaHora', laFecha + 'T' + laHora);
              console.dir(_this22.datosDeAtencion);
            }
          }
          localStorage.setItem('datosDeAtencion', JSON.stringify(_this22.datosDeAtencion));
          localStorage.setItem('identidadAsegurado', identidadAsegurado);
        });
        return function (_x15) {
          return _ref27.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref28 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
        return function (_x16) {
          return _ref28.apply(this, arguments);
        };
      }());
      this.api.obtenerFotoPorAtencion(idAtencion, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this22.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref30 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            if (index == res.length - 1) {
              _this22.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.imagePrefix + element.FotoFirma;
              localStorage.setItem("dSignatureAsegurado", _this22.firmaPrecargada);
              _this22.isSignature = true;
            }
          }
        });
        return function (_x17) {
          return _ref30.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref31 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this22.firmaPrecargada = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
          localStorage.setItem("dSignatureAsegurado", _this22.firmaPrecargada);
          _this22.isSignature = false;
        });
        return function (_x18) {
          return _ref31.apply(this, arguments);
        };
      }());
    } else {
      this.firmaPrecargada = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
      this.isSignature = false;
      this.textoEmergente1 = "Esta atención ya no puede editarse.\n\r";
      this.textoEmergente2 = 'Para mayor detalle, consulta a tu administrador de sistema.';
    }
    let daSegmentsContainer = document.getElementsByClassName('segment-item-atenciones');
    let daIndex = indexInput;
    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      if (daIndex == index) {
        element.setAttribute('style', 'color:#0058CB;border:2px solid #0058CB;');
      } else {
        element.setAttribute('style', 'color:gray;border:none');
      }
    }
    for (let index = 0; index < this.filtroAtenciones.length; index++) {
      const element = this.filtroAtenciones[index];
      if (idAtencion == element.IdAtencion) {
        this.atIndex = element.IdAtencion;
        this.elCliente = element.Cliente;
        this.elServicio = element.Servicio;
        this.elColorEstado = element.ColorEstado;
        this.laFecha = element.Fecha;
      }
    }
    this.sig.clear();
  }
  validarCorreo() {
    this.stripeForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.maxLength(70), _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), _angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required])]
    });
  }
  cambiarFirma() {
    this.isSign = false;
    this.sig = new signature_pad__WEBPACK_IMPORTED_MODULE_14__["default"](this.canvas.nativeElement);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
  }
  recargarFirma() {
    this.firmaPrecargadaAjustador = this.user.Firma;
    localStorage.setItem('firmaPrecargadaAjustador', this.firmaPrecargadaAjustador);
  }
  getCountry() {
    var _this23 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this23.api.Expediente(_this23.atIndex).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this23.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref33 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this23.elExpediente = res;
          let laLatitud = localStorage.getItem('laLatitud');
          let estaLatitud = parseFloat(laLatitud);
          _this23.latitud = _this23.elExpediente[0].LatitudCliente;
          _this23.longitud = _this23.elExpediente[0].LongitudCliente;
          _this23.FechaSiniestro = _this23.elExpediente[0].FechaRegistro;
          localStorage.setItem('FechaRegistro', _this23.FechaSiniestro);
          if (_this23.platform.is('android')) {
            _this23.geo.reverseGeocode(_this23.latitud, _this23.longitud).then(result => {
              _this23.laLocalidad = result;
              _this23.miLocalidad = JSON.stringify(_this23.laLocalidad);
              _this23.miPais = _this23.laLocalidad[0].countryCode;
              const paisId = _this23.countryService.convertCountryCode(_this23.miPais);
              _this23.miPaisNombre = _this23.laLocalidad[0].countryName;
              localStorage.setItem('codigoPais', _this23.miPais);
              localStorage.setItem('nombrePais', _this23.miPaisNombre);
              localStorage.setItem('miLocalidad', _this23.miLocalidad);
              _this23.identificarPais();
            });
          }
        });
        return function (_x19) {
          return _ref33.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref34 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this23.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x20) {
          return _ref34.apply(this, arguments);
        };
      }());
    })();
  }
  geoCodeReverse() {
    let laLatitud = localStorage.getItem('laLatitud');
    let laLongitud = localStorage.getItem('laLongitud');
    if (this.platform.is('android')) {
      this.geo.reverseGeocode(parseFloat(laLatitud), parseFloat(laLongitud)).then(result => {
        this.laLocalidad = result;
        this.miLocalidad = JSON.stringify(this.laLocalidad);
        this.miPais = this.laLocalidad[0].countryCode;
        this.miPaisNombre = this.laLocalidad[0].countryName;
        localStorage.setItem('codigoPais', this.miPais);
        localStorage.setItem('nombrePais', this.miPaisNombre);
        localStorage.setItem('miLocalidad', this.miLocalidad);
        this.identificarPais();
      });
    }
    /*   */
  }

  tryIt() {
    this.router.navigate(['./clientehn']);
  }
  clearSegmentsStorage() {
    // Segmento Solicitante
    localStorage.removeItem('dataProcess-CorreoElectronico');
    localStorage.removeItem('dataProcess-FechaNacimientoConductor');
    localStorage.removeItem('dataProcess-Edad');
    localStorage.removeItem('dataProcess-TerceroResponsable');
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elTipoLicenciaId');
    localStorage.removeItem('elGenero');
    localStorage.removeItem('elParentesco');
    localStorage.removeItem('tipoSolicitante');
    localStorage.removeItem('elSolicitante');
    localStorage.removeItem('tipoCobertura');
    localStorage.removeItem('laCobertura');
    localStorage.removeItem('elNombreCliente');
    localStorage.removeItem('laIdentidadCliente');
    localStorage.removeItem('elTelefonoOrigen');
    localStorage.removeItem('elCorreoElectronico');
    // Segmento Vehiculo
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elKilometraje');
    // Segmento Caracteristicas
    localStorage.removeItem('elTraslado');
    localStorage.removeItem('elTipoGrua');
    localStorage.removeItem('elTallerId');
    localStorage.removeItem('elTallernombre');
    localStorage.removeItem('elTallerOtro');
    localStorage.removeItem('elTallerOtroDireccion');
    localStorage.removeItem('laObservacionTaller');
    localStorage.removeItem('elTipoCombustibleId');
    localStorage.removeItem('elTipoCombustible');
    localStorage.removeItem('elAC');
    localStorage.removeItem('elBA');
    localStorage.removeItem('elCentra');
    localStorage.removeItem('laTransmisionId');
    localStorage.removeItem('laTransmision');
    localStorage.removeItem('elRetrovisor');
    localStorage.removeItem('elOverfender');
    localStorage.removeItem('laColaPato');
    localStorage.removeItem('laCinta');
    localStorage.removeItem('losRines');
    // Segmento Danios
    localStorage.removeItem('elCompromisoPago');
    localStorage.removeItem('elCompromisoPagoObservacion');
    localStorage.removeItem('laReserva');
    localStorage.removeItem('bpmArray-ValorReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');
    localStorage.removeItem('coords-latitud');
    localStorage.removeItem('coords-longitud');
    localStorage.removeItem('datos-Sexo');
    localStorage.removeItem('elGenero');
    localStorage.removeItem('elGeneroId');
    localStorage.removeItem('nombreConductor');
    localStorage.removeItem('tipoCobertura');
    localStorage.removeItem('laCobertura');
    localStorage.removeItem('dataProcess-PorqueNoUsoServicioAsistencia');
    localStorage.removeItem('dataProcess-DireccionEnvioCorrespondencia');
    localStorage.removeItem('dataProcess-DescripcionTercerosMuertos');
    localStorage.removeItem('dataProcess-DescripcionTercerosHeridos');
    localStorage.removeItem('dataProcess-UbicacionVehiculoDetenido');
    localStorage.removeItem('dataProcess-DondeSeEncuentraVehiculo');
    localStorage.removeItem('dataProcess-NombreAtribuyeAccidente');
    localStorage.removeItem('dataProcess-AutoridadInvolucrada');
    localStorage.removeItem('dataProcess-DescripcionAudiencia');
    localStorage.removeItem('dataProcess-DireccionConductor');
    localStorage.removeItem('dataProcess-TelefonoConductor');
    localStorage.removeItem('dataProcess-TelefonoAsegurado');
    localStorage.removeItem('dataProcess-DescripcionDanio');
    localStorage.removeItem('dataProcess-CelularConductor');
    localStorage.removeItem('dataProcess-CelularAsegurado');
    localStorage.removeItem('dataProcess-NombreConductor');
    localStorage.removeItem('dataProcess-NumeroUnidad');
    localStorage.removeItem('dataProcess-Descripcion');
    localStorage.removeItem('dataProcess-Licencia');
    localStorage.removeItem('dataProcess-Vigencia');
    localStorage.removeItem('datos-Kilometraje');
    localStorage.setItem('dataProcess-AseguradoUsoPoliza', '1');
    localStorage.setItem('dataProcess-RefTipoConductorId', '1');
    localStorage.setItem('dataProcess-TerceroResponsable', '3');
    localStorage.setItem('dataProcess-AgendarAudiencia', '2');
    localStorage.setItem('dataProcess-Parentesco', '37');
    localStorage.setItem('nombreConductor', '');
    localStorage.setItem('dataProcess-NombreConductor', '');
    localStorage.setItem('estaEvaluado', 'false');
  }
  identificarPais() {
    if (this.miPais == "HN") {
      this.banderaPais = '../../assets/img/flag-round-hn.png';
      this.codigoPais = 'hn';
      this.getTipoLicencia(3);
    } else if (this.miPais == "GT") {
      this.banderaPais = '../../assets/img/flag-round-gt.png';
      this.codigoPais = 'gt';
      this.getTipoLicencia(4);
    } else {
      this.iconIndex = this.randomize(0, 2);
      let elIcono = _environments_mapas__WEBPACK_IMPORTED_MODULE_9__.iconWorlds[this.iconIndex];
      this.banderaPais = elIcono.url;
    }
  }
  getTipoLicencia(paisIdentidad) {
    var _this24 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this24.isLoading = true;
      _this24.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this24.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref36 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this24.tipoLicencia = res;
        });
        return function (_x21) {
          return _ref36.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref37 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this24.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x22) {
          return _ref37.apply(this, arguments);
        };
      }());
    })();
  }
  validarFirmaGuardar() {
    this.presentToastFirma("Firma para?", 'middle', 'firma');
  }
  presentToastFirma(message, position, clase) {
    var _this25 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this25.toast.dismiss();
      }
      const toast = yield _this25.toaster.create({
        message: message,
        color: 'primary',
        duration: 90000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: ' | ',
          role: 'divider'
        }, {
          text: 'Firma Asegurado',
          role: 'confirm',
          handler: () => {
            _this25.esAjustador = false;
            _this25.saveSignatureAsegurado(_this25.atIndex);
          }
        }, {
          text: ' | ',
          role: 'divider'
        }, {
          text: 'Firma Ajustador',
          role: 'confirm',
          handler: () => {
            _this25.esAjustador = true;
            _this25.saveSignature(_this25.api.currentUser.ProveedorAgenteId);
          }
        }]
      });
      yield toast.present();
    })();
  }
  goSearch() {
    this.getAtenciones();
    jquery__WEBPACK_IMPORTED_MODULE_19__('#greenStat').fadeOut('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#gruaBoton').fadeOut('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#anyStat').fadeIn('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#iconsGrid').fadeIn('xslow');
    this.isSearch = true;
    let tabsContainer = document.getElementsByTagName('ion-tab-button');
    let tabbarContainer = document.getElementsByTagName('ion-tab-bar');
    tabbarContainer[0].setAttribute('style', 'background: white; height:90px');
    for (let index = 0; index < tabsContainer.length; index++) {
      const element = tabsContainer[index];
      element.setAttribute('style', 'display: none');
    }
  }
  closeSearch() {
    this.results = [];
    jquery__WEBPACK_IMPORTED_MODULE_19__('#greenStat').fadeIn('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#gruaBoton').fadeIn('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#anyStat').fadeOut('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_19__('#iconsGrid').fadeOut('xslow');
    this.isSearch = false;
    let tabsContainer = document.getElementsByTagName('ion-tab-button');
    let tabbarContainer = document.getElementsByTagName('ion-tab-bar');
    tabbarContainer[0].setAttribute('style', 'background: #0090d0;height:50px');
    for (let index = 0; index < tabsContainer.length; index++) {
      const element = tabsContainer[index];
      element.setAttribute('style', 'display: inherit');
    }
  }
  grua() {
    this.call.callNumber('22802886', true).then(res => console.log('')).catch(err => console.log(''));
  }
  goAdeuda() {
    this.router.navigate(['./adeuda']);
  }
  goCulpable() {
    this.router.navigate(['./culpable']);
  }
  goFiniquito() {
    let elFiniquito = {
      NumeroReclamo: "string",
      FechaDesde: "2023-11-14T19:55:55.849Z",
      FechaHasta: "2023-11-14T19:55:55.849Z",
      NombreCliente: this.elCliente,
      TipoCoberturaFicohsa: "string",
      FechaFirma: "2023-11-14T19:55:55.849Z",
      FirmaCliente: "string",
      NombreQuienRecibe: "string",
      IdentidadQuienRecibe: "string",
      NumeroCheque: "string",
      FechaDelCheque: "2023-11-14T19:55:55.849Z",
      ValorDelCheque: 0,
      NombreAFavor: "string",
      Poliza: "string",
      RefAtencionId: 0,
      Marca: "string",
      Modelo: "string",
      Anio: 0,
      Placa: "string",
      Chasis: "string",
      Motor: "string",
      beneficiarioTipo: 'string',
      fechaSiniestro: 'string'
    };
    localStorage.setItem('finiquito', JSON.stringify(elFiniquito));
    this.router.navigate(['./finiquito']);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ToastController
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_12__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ActionSheetController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.Platform
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ToastController
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__.ScreenOrientation
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_16__.NativeGeocoder
    }, {
      type: _services_locate_service__WEBPACK_IMPORTED_MODULE_5__.LocateService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.AlertController
    }, {
      type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.ModalController
    }, {
      type: _services_countrydata_service__WEBPACK_IMPORTED_MODULE_17__.CountrydataService
    }, {
      type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService
    }];
  }
  static {
    this.propDecorators = {
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild,
        args: ["canvas2", {
          static: true
        }]
      }],
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterOutlet]
      }]
    };
  }
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_filter_pipe__WEBPACK_IMPORTED_MODULE_10__.FilterPipe],
  styles: [(_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], Tab1Page);


/***/ }),

/***/ 65:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --cs-size-avatar: 120px;\n}\n\nion-header ion-card {\n  padding-top: 10px;\n}\nion-header ion-card ion-avatar {\n  height: var(--cs-size-avatar);\n  width: var(--cs-size-avatar);\n  margin: 0 auto;\n}\nion-header ion-button .active {\n  color: var(--cs-icon-color-primary, #0058CB) !important;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 500px;\n  --max-width: 500px;\n  --width: 500px;\n}\n\n.card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 55vh;\n}\n.card-header-image::before {\n  content: \"\";\n  display: none;\n  height: 55vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 28vh;\n}\n\n/* Style component 1\n========================================================*/\nion-item ion-thumbnail {\n  width: 140px;\n  height: 200px;\n  margin: 0 10px 0 0;\n  --border-radius: 4px;\n}\nion-item ion-card-content {\n  height: 100%;\n  position: relative;\n}\nion-item ion-card-content .social-share {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n}\n\n#profile-toolbar {\n  --background:var(--primaryColor);\n  background: var(--primaryColor);\n  height: 100px;\n}\n\n#titulo {\n  padding: 0;\n  margin: 0;\n  margin-top: -10px;\n  margin-bottom: 10px;\n}\n\n.mi-logo {\n  width: 120px;\n  margin-top: 18px;\n}\n\n#firmaPrevisualizacionCliente {\n  height: 150px;\n}\n\nion-badge {\n  font-size: 1rem;\n}\n\nion-fab-button {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-datetime {\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#loaderFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-item-divider {\n  background: #0090d0;\n  color: aliceblue;\n}\n\nion-toast .toast-wrapper .toast-container .toast-button-group button {\n  background-color: #0058CB !important;\n  color: white;\n}\n\nion-toast.custom-toast::part(button) {\n  border-left: 1px solid #d2d2d2;\n  color: #030207;\n  font-size: 15px;\n}\n\nion-icon.red {\n  color: red;\n}\n\n.ola-encabezado {\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  top: -470px;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  transform: rotate(0deg);\n  object-fit: contain; /* Equivalente a background-size: contain */\n  object-position: left; /* Equivalente a background-position: left */\n  z-index: 999;\n}\n\n.close-search {\n  --background: #ef5a22;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.my-custom-class .modal-wrapper, #modal-localidad {\n  position: absolute;\n  left: 5%;\n  top: 5%;\n  --width: 90%;\n  border-radius: 25px;\n  display: block;\n  overflow-x: scroll;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n.chip-connect {\n  margin-left: 20%;\n  width: 60%;\n  height: 100px;\n  --background: #7da1c4;\n  --color: white;\n  border-radius: 90px;\n}\n\n.boton-gps {\n  color: white;\n  position: absolute;\n  top: 60px;\n  left: 33%;\n  width: 450px;\n  height: 60px;\n}\n\n.chip-gps {\n  width: 99%;\n  height: 600px;\n  --background: white;\n  --color: gray;\n  padding-top: 0px;\n  padding-left: 20%;\n  padding-right: 20%;\n  margin-bottom: -1600px;\n  z-index: 999;\n  box-shadow: 3px 3px 9px gray;\n}\n\n.gps-in {\n  width: 99%;\n  height: 600px;\n  --background: white;\n  --color: gray;\n  padding-top: 0px;\n  padding-left: 20%;\n  padding-right: 20%;\n  z-index: 999;\n  box-shadow: 3px 3px 9px #808080;\n  transform: translate(0px, -600px);\n  transition: transform 0.75s ease-in-out;\n}\n\n.gps-out {\n  width: 99%;\n  height: 600px;\n  --background: white;\n  --color: gray;\n  padding-top: 0px;\n  padding-left: 20%;\n  padding-right: 20%;\n  z-index: 999;\n  box-shadow: 3px 3px 9px gray;\n  transform: translate(0px, 560px);\n  transition: transform 0.75s ease-in-out;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n#nombreInput, #servicioInput {\n  font-size: 1rem;\n}\n\n.unread {\n  font-weight: bold;\n}\n\n.read {\n  font-weight: inherit;\n}\n\nion-toggle {\n  padding: 15px;\n  --track-background: #ddd;\n  --track-background-checked: #ddd;\n  --handle-background: #7da1c4;\n  --handle-background-checked: #0058CB;\n  --handle-width: 20px;\n  --handle-height: 20px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n  --handle-border-radius: 4px;\n  --handle-box-shadow: none;\n}\n\nion-toggle::part(track) {\n  height: 10px;\n  width: 65px;\n  /* Required for iOS handle to overflow the height of the track */\n  overflow: visible;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}\n\n/*\nion-split-pane {\n  --side-width: 1%;\n  --side-max-width: 1%;\n  --side-min-width: 0;\n  margin-left: -3%;\n  margin-top: -15%;\n}\n\n#big-pane-home{\n  --side-width: 2%;\n    --side-max-width: 2%;\n    --side-min-width: 0;\n    margin-left: -3%;\n    margin-top: -15%;\n}\n\n*/\nion-chip {\n  --background: var(--primaryColor);\n  --color: #7da1c4;\n  height: 20px;\n  font-weight: bold;\n}\n\nion-avatar {\n  filter: none !important;\n}\n/* Beta 2 home dashboard\n========================================================*/\n#greenStat.home-workspace {\n  height: 100%;\n  padding: 0 18px 18px;\n  background: #f4f7fb;\n}\n\n#greenStat.home-workspace > ion-col {\n  height: 100%;\n  padding: 0;\n}\n\n#greenStat.home-workspace > ion-col > ion-grid {\n  display: none;\n}\n\n.home-dashboard {\n  display: grid;\n  grid-template-columns: minmax(280px, 34%) minmax(0, 1fr);\n  gap: 16px;\n  width: 100%;\n  height: 95%;\n  min-height: 0;\n}\n\n.appointments-panel,\n.case-panel {\n  min-height: 0;\n  border: 1px solid #dce5ef;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n}\n\n.appointments-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.case-panel {\n  display: grid;\n  grid-template-rows: auto auto minmax(0, 1fr) auto;\n  gap: 14px;\n  overflow: hidden;\n  padding: 18px;\n}\n\n.panel-heading,\n.case-summary,\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.panel-kicker {\n  display: block;\n  color: #637389;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 1;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.panel-heading h1,\n.case-title h2,\n.section-heading h3 {\n  color: #14365f;\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.panel-heading h1 {\n  font-size: 1.35rem;\n}\n\n.case-title h2 {\n  font-size: 1.5rem;\n}\n\n.section-heading h3 {\n  font-size: 1.15rem;\n}\n\n.count-badge,\n.status-badge,\n.signature-status {\n  --background: #e7f0fb;\n  --color: #0058cb;\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.82rem;\n  height: 28px;\n  justify-content: center;\n  min-width: 36px;\n  padding: 0 12px;\n}\n\n.status-badge {\n  --color: #ffffff;\n  gap: 6px;\n}\n\n.status-badge ion-icon {\n  font-size: 0.9rem;\n}\n\n.signature-status {\n  --background: #fff4e6;\n  --color: #a95c00;\n}\n\n.signature-status.ready {\n  --background: #e8f7ef;\n  --color: #13733a;\n}\n\n.appointments-list {\n  flex: 1;\n  margin: 14px 0 0;\n  min-height: 0;\n  overflow: auto;\n  padding: 0;\n}\n\n.appointment-item {\n  --background: #ffffff;\n  --border-color: transparent;\n  --inner-padding-end: 8px;\n  --min-height: 74px;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.appointment-item::part(native) {\n  padding-left: 24px;\n}\n\n.status-strip {\n  background: var(--status-color, #7da1c4);\n  bottom: 0;\n  left: -24px;\n  position: absolute;\n  top: 0;\n  width: 5px;\n}\n\n.appointment-item strong {\n  color: #193a5e;\n  display: block;\n  font-size: 0.92rem;\n  line-height: 1.2;\n}\n\n.appointment-timing {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.15;\n  text-align: right;\n}\n\n.appointment-id,\n.appointment-date,\n.appointment-hour {\n  color: #637389;\n  font-size: 0.8rem;\n  text-align: right;\n}\n\n.appointment-hour {\n  font-size: 0.54rem;\n  margin-top: 3px;\n}\n\n.appointment-date {\n  font-weight: 700;\n  margin-top: 7px;\n}\n\n.new-badge {\n  --background: #f04f23;\n  --color: #ffffff;\n  border-radius: 999px;\n  font-size: 0.68rem;\n  height: 22px;\n  padding: 0 9px;\n}\n\n.empty-state-card {\n  border: 1px dashed #cdd9e8;\n  border-radius: 12px;\n  box-shadow: none;\n  margin: 18px 0 0;\n  text-align: center;\n}\n\n.empty-state-card img {\n  height: 64px;\n  margin-bottom: 12px;\n  width: 64px;\n}\n\n.empty-state-card h2 {\n  color: #14365f;\n  font-size: 1rem;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n\n.empty-state-card p {\n  color: #637389;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.version-footer {\n  align-items: center;\n  color: #0058cb;\n  display: flex;\n  font-size: 0.78rem;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.version-footer ion-icon {\n  font-size: 1.4rem;\n}\n\n.case-meta {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.case-meta div {\n  background: #f7f9fc;\n  border: 1px solid #e1e9f2;\n  border-radius: 10px;\n  padding: 12px;\n}\n\n.case-meta span {\n  color: #637389;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 5px;\n}\n\n.case-meta strong {\n  color: #14365f;\n  display: block;\n  font-size: 0.98rem;\n  line-height: 1.25;\n}\n\n.case-actions {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.case-actions ion-button,\n.signature-actions ion-button {\n  --border-radius: 8px;\n  height: 44px;\n  margin: 0;\n  text-transform: none;\n}\n\n.signature-section {\n  border: 1px solid #dfe8f2;\n  border-radius: 12px;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n  padding: 14px;\n}\n\n.signature-tools {\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  gap: 8px;\n}\n\n.edit-signature-button {\n  --border-radius: 8px;\n  --color: #0058cb;\n  height: 32px;\n  margin: 0;\n  width: 32px;\n}\n\n.edit-signature-button ion-icon {\n  font-size: 1.25rem;\n}\n\n.signature-preview,\n.signature-image {\n  align-items: center;\n  background: #f7f9fc;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 112px;\n  padding: 14px;\n}\n\n.signature-preview {\n  color: #637389;\n  gap: 10px;\n}\n\n.signature-preview-action {\n  --background-hover: rgba(0, 88, 203, 0.08);\n  --border-radius: 8px;\n  --color: #0058cb;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  flex: 0 0 auto;\n  height: 36px;\n  margin: 0;\n  width: 36px;\n}\n\n.signature-preview-action::part(native) {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.signature-preview-action ion-icon,\n.signature-preview-icon {\n  color: #0058cb;\n  font-size: 1.7rem;\n  opacity: 1;\n}\n\n.signature-image {\n  background: #ffffff;\n  box-sizing: border-box;\n  height: 100%;\n  min-height: 220px;\n  object-fit: contain;\n  padding: 0;\n  width: 100%;\n}\n\n.signature-image::part(image) {\n  background: #ffffff;\n  border-radius: 9px;\n  display: block;\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-editor {\n  background: #ffffff;\n  border-radius: 10px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.signature-editor canvas {\n  border: 2px dashed #cbd7e6;\n  border-radius: 10px;\n  min-height: 128px;\n  width: 100%;\n}\n\n.signature-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.home-floating-action {\n  display: none;\n}\n\n@media (orientation: portrait), (max-width: 820px) {\n  #greenStat.home-workspace {\n    overflow: auto;\n    padding: 0 12px 14px;\n  }\n  .home-dashboard {\n    grid-template-columns: 1fr;\n    height: auto;\n    min-height: 95%;\n  }\n  .appointments-panel {\n    min-height: 34vh;\n  }\n  .appointments-list {\n    max-height: 34vh;\n  }\n  .case-panel {\n    grid-template-rows: auto auto minmax(220px, 1fr) auto;\n    overflow: hidden;\n  }\n  .case-summary,\n  .section-heading {\n    align-items: flex-start;\n  }\n  .case-meta,\n  .case-actions {\n    grid-template-columns: 1fr;\n  }\n  .signature-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/tab1/tab1.page.scss"],"names":[],"mappings":"AACA;EACE,uBAAA;AAAF;;AAGE;EAEE,iBAAA;AADJ;AAEI;EACE,6BAAA;EACA,4BAAA;EACA,cAAA;AAAN;AAKI;EACE,uDAAA;AAHN;;AASE;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AANF;;AAUA;EACE,kBAAA;AAPF;AAQE;EACE,YAAA;AANJ;AASE;EACE,WAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAPJ;AAUE;EACE,sBAAA;EACA,YAAA;AARJ;;AAWA;yDAAA;AAGE;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;AATJ;AAYE;EACE,YAAA;EACA,kBAAA;AAVJ;AAYI;EACE,kBAAA;EACA,SAAA;EACA,WAAA;AAVN;;AAeA;EACE,gCAAA;EACA,+BAAA;EACA,aAAA;AAZF;;AAeA;EACA,UAAA;EACI,SAAA;EACA,iBAAA;EACA,mBAAA;AAZJ;;AAeA;EACE,YAAA;EACA,gBAAA;AAZF;;AAeA;EACE,aAAA;AAZF;;AAeA;EACE,eAAA;AAZF;;AAeA;EACE,kCAAA;EACA,4CAAA;EACA,wCAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAZF;;AAeA;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAZF;;AAeA;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAZJ;;AAgBG;EACD,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAbJ;;AAgBG;EACD,mBAAA;EACA,gBAAA;AAbF;;AAoBQ;EACE,oCAAA;EACA,YAAA;AAjBV;;AAwBA;EACE,8BAAA;EACA,cAAA;EACA,eAAA;AArBF;;AAwBA;EACE,UAAA;AArBF;;AAwBA;EACE,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,OAAA;EACA,WAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA,EAAA,2CAAA;EACA,qBAAA,EAAA,4CAAA;EACA,YAAA;AArBF;;AAwBA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AArBF;;AAwBA;EAEE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AAtBF;;AAyBA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAtBJ;;AA0BC;EACG,gBAAA;EACA,UAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;AAvBJ;;AA0BE;EACE,YAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;AAvBJ;;AA0BE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,4BAAA;AAvBJ;;AA0BE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,+BAAA;EACE,iCAAA;EACJ,uCAAA;AAvBF;;AA0BI;EACE,UAAA;EACF,aAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,4BAAA;EACE,gCAAA;EACA,uCAAA;AAvBN;;AA4BA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAzBJ;;AA4BA;EACE,eAAA;AAzBF;;AA4BA;EACE,iBAAA;AAzBF;;AA4BA;EACE,oBAAA;AAzBF;;AA4BA;EACE,aAAA;EAEA,wBAAA;EACA,gCAAA;EAEA,4BAAA;EACA,oCAAA;EAEA,oBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;EAEA,2BAAA;EACA,yBAAA;AA7BF;;AAgCA;EACE,YAAA;EACA,WAAA;EAEA,gEAAA;EACA,iBAAA;AA9BF;;AAiCA;EACE,cAAA;EACA,wBAAA;AA9BF;;AAiCA;EACE,WAAA;AA9BF;;AAiCA;;EAEE,wBAAA;EAEA,iBAAA;AA/BF;;AAkCA;;EAEE,oCAAA;EACA,wCAAA;AA/BF;;AAmCA;;EAEE,qBAAA;EACA,cAAA;AAhCF;;AAqCA;;;;;;;;;;;;;;;;;CAAA;AAmBA;EACE,iCAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;AAnCF;;AAuCA;EAEM,uBAAA;AArCN;AA8CA;yDAAA;AAEA;EACE,YAAA;EACA,oBAAA;EACA,mBAAA;AA5CF;;AA+CA;EACE,YAAA;EACA,UAAA;AA5CF;;AA+CA;EACE,aAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,wDAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;AA5CF;;AA+CA;;EAEE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,sBAAA;EACA,aAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,iDAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;AA5CF;;AA+CA;;;EAGE,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,SAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;AA5CF;;AA+CA;;;EAGE,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;AA5CF;;AA+CA;EACE,kBAAA;AA5CF;;AA+CA;EACE,iBAAA;AA5CF;;AA+CA;EACE,kBAAA;AA5CF;;AA+CA;;;EAGE,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,eAAA;AA5CF;;AA+CA;EACE,gBAAA;EACA,QAAA;AA5CF;;AA+CA;EACE,iBAAA;AA5CF;;AA+CA;EACE,qBAAA;EACA,gBAAA;AA5CF;;AA+CA;EACE,qBAAA;EACA,gBAAA;AA5CF;;AA+CA;EACE,OAAA;EACA,gBAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;AA5CF;;AA+CA;EACE,qBAAA;EACA,2BAAA;EACA,wBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AA5CF;;AA+CA;EACE,kBAAA;AA5CF;;AA+CA;EACE,wCAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,iBAAA;AA5CF;;AA+CA;;;EAGE,cAAA;EACA,iBAAA;EACA,iBAAA;AA5CF;;AA+CA;EACE,kBAAA;EACA,eAAA;AA5CF;;AA+CA;EACE,gBAAA;EACA,eAAA;AA5CF;;AA+CA;EACE,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;AA5CF;;AA+CA;EACE,0BAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AA5CF;;AA+CA;EACE,YAAA;EACA,mBAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,iBAAA;EACA,SAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,gBAAA;AA5CF;;AA+CA;EACE,iBAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AA5CF;;AA+CA;;EAEE,oBAAA;EACA,YAAA;EACA,SAAA;EACA,oBAAA;AA5CF;;AA+CA;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,aAAA;EACA,cAAA;EACA,QAAA;AA5CF;;AA+CA;EACE,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,kBAAA;AA5CF;;AA+CA;;EAEE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;AA5CF;;AA+CA;EACE,cAAA;EACA,SAAA;AA5CF;;AA+CA;EACE,0CAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,aAAA;EACA,uBAAA;AA5CF;;AA+CA;;EAEE,cAAA;EACA,iBAAA;EACA,UAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,OAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AA5CF;;AA+CA;EACE,0BAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;AA5CF;;AA+CA;EACE,aAAA;EACA,SAAA;EACA,yBAAA;AA5CF;;AA+CA;EACE,aAAA;AA5CF;;AA+CA;EACE;IACE,cAAA;IACA,oBAAA;EA5CF;EA+CA;IACE,0BAAA;IACA,YAAA;IACA,eAAA;EA7CF;EAgDA;IACE,gBAAA;EA9CF;EAiDA;IACE,gBAAA;EA/CF;EAkDA;IACE,qDAAA;IACA,gBAAA;EAhDF;EAmDA;;IAEE,uBAAA;EAjDF;EAoDA;;IAEE,0BAAA;EAlDF;EAqDA;IACE,aAAA;IACA,0BAAA;EAnDF;AACF","sourcesContent":["\n:host{\n  --cs-size-avatar: 120px;\n}\nion-header{\n  ion-card {\n    // Settings Avatar\n    padding-top: 10px;\n    ion-avatar {\n      height: var(--cs-size-avatar);\n      width: var(--cs-size-avatar);\n      margin: 0 auto;\n    }\n  }\n  \n  ion-button {\n    .active {\n      color: var(--cs-icon-color-primary, #0058CB) !important;\n    }\n  }\n}\n\n::ng-deep {\n  .alert-wrapper {\n  --min-width: 500px;\n  --max-width: 500px;\n  --width: 500px;\n  }\n}\n\n.card-header-image {\n  position: relative;\n  ion-img{\n    height: 55vh;\n  }\n  \n  &::before {\n    content: \"\";\n    display: none;\n    height: 55vh;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    pointer-events: none;\n    mix-blend-mode: var(--cs-mode-image);\n    background: var(--cs-gradient-linear);\n    z-index: 5;\n  }\n\n  img {\n    width: 100% !important;\n    height: 28vh;\n  }\n}\n/* Style component 1\n========================================================*/\nion-item {\n  ion-thumbnail {\n    width: 140px;\n    height: 200px;\n    margin: 0 10px 0 0;\n    --border-radius: 4px;\n  }\n\n  ion-card-content {\n    height: 100%;\n    position: relative;\n\n    .social-share {\n      position: absolute;\n      bottom: 0;\n      right: 10px;\n    }\n  }\n}\n\n#profile-toolbar{\n  --background:var(--primaryColor);\n  background: var(--primaryColor);\n  height: 100px;\n}\n\n#titulo {\npadding: 0;\n    margin: 0;\n    margin-top: -10px;\n    margin-bottom: 10px;\n}\n\n.mi-logo{\n  width: 120px;\n  margin-top: 18px;\n}\n\n#firmaPrevisualizacionCliente {\n  height: 150px;\n}\n\nion-badge{\n  font-size: 1rem;\n}\n\nion-fab-button {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-datetime{\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}\n\nion-spinner{\n\t\tposition: fixed;\n\t\t  top: 28%;\n\t\t  left: 40%;\n\t\t  z-index: 999;\n\t\t  width: 20%;\n\t\t  height: 20%;\n\t\t//background-color: #00213f;\n\t  }\n\t  \n\t  #loaderFooter{\n\t\tposition: fixed;\n\t\t  background: black;\n\t\t  opacity: 0.6;\n\t\t  height: 100vh;\n\t\t  width: 100vw;\n\t\t  z-index: 900;\n\t\t  bottom: 0;\n\t  }\n\n\t  ion-item-divider{\n\t\tbackground: #0090d0;\n\t\tcolor: aliceblue;\n\t}\n\nion-toast {\n    .toast-wrapper{\n      .toast-container{\n        .toast-button-group{\n        button{\n          background-color: #0058CB !important;\n          color: white;\n        }\n      }\n    }\n  }\n}\n\nion-toast.custom-toast::part(button) {\n  border-left: 1px solid #d2d2d2;\n  color: #030207;\n  font-size: 15px;\n}\n\nion-icon.red {\n  color: red; // your red color\n}\n\n.ola-encabezado{\n  border: none;\n  box-shadow: none;\n  position: absolute;\n  top: -470px;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  transform: rotate(0deg);\n  object-fit: contain;   /* Equivalente a background-size: contain */\n  object-position: left; /* Equivalente a background-position: left */\n  z-index: 999;\n}\n\n.close-search{\n  --background: #ef5a22;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.my-custom-class .modal-wrapper, #modal-localidad {    \n  //--height: 90%;\n  position: absolute; \n  left: 5%;\n  top: 5%;\n  --width: 90%;\n  border-radius: 25px;\n  display: block;\n  overflow-x: scroll;\n}\n\nion-spinner{\n\tposition: fixed;\n    top: 28%;\n    left: 40%;\n    z-index: 999;\n    width: 20%;\n    height: 20%;\n\t//background-color: #00213f;\n}\n\n .chip-connect {\n    margin-left: 20%;\n    width: 60%;\n    height: 100px;\n    --background: #7da1c4;\n    --color: white;\n    border-radius: 90px;\n  }\n\n  .boton-gps{\n    color: white;\n    position: absolute;\n    top: 60px;\n    left: 33%;\n    width: 450px;\n    height: 60px;\n  }\n\n  .chip-gps {\n    width: 99%;\n    height: 600px;\n    --background: white;//var(--secondaryColor);\n    --color: gray;\n    padding-top: 0px;\n    padding-left: 20%;\n    padding-right: 20%;\n    margin-bottom: -1600px;\n    z-index: 999;\n    box-shadow: 3px 3px 9px gray;\n  }\n\n  .gps-in {\n    width: 99%;\n    height: 600px;\n    --background: white;//var(--secondaryColor);\n    --color: gray;\n    padding-top: 0px;\n    padding-left: 20%;\n    padding-right: 20%;\n    z-index: 999;\n    box-shadow: 3px 3px 9px #808080;\n      transform: translate(0px, -600px);\n  transition: transform 0.75s ease-in-out;\n    }\n\n    .gps-out {\n      width: 99%;\n    height: 600px;\n    --background: white;//var(--secondaryColor);\n    --color: gray;\n    padding-top: 0px;\n    padding-left: 20%;\n    padding-right: 20%;\n    z-index: 999;\n    box-shadow: 3px 3px 9px gray;\n      transform: translate(0px, 560px);\n      transition: transform 0.75s ease-in-out;\n    }\n\n\n\n#spinFooter{\n\tposition: fixed;\n    background: black;\n    opacity: 0.6;\n    height: 100vh;\n    width: 100vw;\n    z-index: 900;\n    bottom: 0;\n}\n\n#nombreInput, #servicioInput{\n  font-size: 1rem;\n}\n\n.unread{\n  font-weight: bold;\n}\n\n.read{\n  font-weight: inherit;\n}\n\nion-toggle {\n  padding: 15px;\n\n  --track-background: #ddd;\n  --track-background-checked: #ddd;\n\n  --handle-background: #7da1c4;\n  --handle-background-checked: #0058CB;\n\n  --handle-width: 20px;\n  --handle-height: 20px;\n  --handle-max-height: auto;\n  --handle-spacing: 6px;\n\n  --handle-border-radius: 4px;\n  --handle-box-shadow: none;\n}\n\nion-toggle::part(track) {\n  height: 10px;\n  width: 65px;\n\n  /* Required for iOS handle to overflow the height of the track */\n  overflow: visible;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot='header'],\nion-accordion.accordion-collapsed ion-item[slot='header'] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n\n}\n\nion-accordion.accordion-expanding ion-item[slot='header'],\nion-accordion.accordion-expanded ion-item[slot='header'] {\n  --background: #7da1c4;//var(--ion-color-primary);\n  --color: white;//var(--ion-color-primary-contrast);\n}\n\n\n\n/*\nion-split-pane {\n  --side-width: 1%;\n  --side-max-width: 1%;\n  --side-min-width: 0;\n  margin-left: -3%;\n  margin-top: -15%;\n}\n\n#big-pane-home{\n  --side-width: 2%;\n    --side-max-width: 2%;\n    --side-min-width: 0;\n    margin-left: -3%;\n    margin-top: -15%;\n}\n\n*/\n\nion-chip {\n  --background: var(--primaryColor);\n  --color: #7da1c4;\n  height: 20px;\n  font-weight: bold;\n}\n\n\nion-avatar {\n  //    --border-radius: 4px;\n      filter:none !important;\n  \n      ion-icon{\n          //font-size: 2rem;\n          //position: absolute;\n          //top: 8vh;\n      }\n  }\n\n/* Beta 2 home dashboard\n========================================================*/\n#greenStat.home-workspace {\n  height: 100%;\n  padding: 0 18px 18px;\n  background: #f4f7fb;\n}\n\n#greenStat.home-workspace > ion-col {\n  height: 100%;\n  padding: 0;\n}\n\n#greenStat.home-workspace > ion-col > ion-grid {\n  display: none;\n}\n\n.home-dashboard {\n  display: grid;\n  grid-template-columns: minmax(280px, 34%) minmax(0, 1fr);\n  gap: 16px;\n  width: 100%;\n  height: 95%;\n  min-height: 0;\n}\n\n.appointments-panel,\n.case-panel {\n  min-height: 0;\n  border: 1px solid #dce5ef;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n}\n\n.appointments-panel {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.case-panel {\n  display: grid;\n  grid-template-rows: auto auto minmax(0, 1fr) auto;\n  gap: 14px;\n  overflow: hidden;\n  padding: 18px;\n}\n\n.panel-heading,\n.case-summary,\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.panel-kicker {\n  display: block;\n  color: #637389;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 1;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.panel-heading h1,\n.case-title h2,\n.section-heading h3 {\n  color: #14365f;\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.panel-heading h1 {\n  font-size: 1.35rem;\n}\n\n.case-title h2 {\n  font-size: 1.5rem;\n}\n\n.section-heading h3 {\n  font-size: 1.15rem;\n}\n\n.count-badge,\n.status-badge,\n.signature-status {\n  --background: #e7f0fb;\n  --color: #0058cb;\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.82rem;\n  height: 28px;\n  justify-content: center;\n  min-width: 36px;\n  padding: 0 12px;\n}\n\n.status-badge {\n  --color: #ffffff;\n  gap: 6px;\n}\n\n.status-badge ion-icon {\n  font-size: 0.9rem;\n}\n\n.signature-status {\n  --background: #fff4e6;\n  --color: #a95c00;\n}\n\n.signature-status.ready {\n  --background: #e8f7ef;\n  --color: #13733a;\n}\n\n.appointments-list {\n  flex: 1;\n  margin: 14px 0 0;\n  min-height: 0;\n  overflow: auto;\n  padding: 0;\n}\n\n.appointment-item {\n  --background: #ffffff;\n  --border-color: transparent;\n  --inner-padding-end: 8px;\n  --min-height: 74px;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.appointment-item::part(native) {\n  padding-left: 24px;\n}\n\n.status-strip {\n  background: var(--status-color, #7da1c4);\n  bottom: 0;\n  left: -24px;\n  position: absolute;\n  top: 0;\n  width: 5px;\n}\n\n.appointment-item strong {\n  color: #193a5e;\n  display: block;\n  font-size: 0.92rem;\n  line-height: 1.2;\n}\n\n.appointment-timing {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.15;\n  text-align: right;\n}\n\n.appointment-id,\n.appointment-date,\n.appointment-hour {\n  color: #637389;\n  font-size: 0.8rem;\n  text-align: right;\n}\n\n.appointment-hour {\n  font-size: 0.54rem;\n  margin-top: 3px;\n}\n\n.appointment-date {\n  font-weight: 700;\n  margin-top: 7px;\n}\n\n.new-badge {\n  --background: #f04f23;\n  --color: #ffffff;\n  border-radius: 999px;\n  font-size: 0.68rem;\n  height: 22px;\n  padding: 0 9px;\n}\n\n.empty-state-card {\n  border: 1px dashed #cdd9e8;\n  border-radius: 12px;\n  box-shadow: none;\n  margin: 18px 0 0;\n  text-align: center;\n}\n\n.empty-state-card img {\n  height: 64px;\n  margin-bottom: 12px;\n  width: 64px;\n}\n\n.empty-state-card h2 {\n  color: #14365f;\n  font-size: 1rem;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n\n.empty-state-card p {\n  color: #637389;\n  line-height: 1.35;\n  margin: 0;\n}\n\n.version-footer {\n  align-items: center;\n  color: #0058cb;\n  display: flex;\n  font-size: 0.78rem;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.version-footer ion-icon {\n  font-size: 1.4rem;\n}\n\n.case-meta {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.case-meta div {\n  background: #f7f9fc;\n  border: 1px solid #e1e9f2;\n  border-radius: 10px;\n  padding: 12px;\n}\n\n.case-meta span {\n  color: #637389;\n  display: block;\n  font-size: 0.78rem;\n  margin-bottom: 5px;\n}\n\n.case-meta strong {\n  color: #14365f;\n  display: block;\n  font-size: 0.98rem;\n  line-height: 1.25;\n}\n\n.case-actions {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.case-actions ion-button,\n.signature-actions ion-button {\n  --border-radius: 8px;\n  height: 44px;\n  margin: 0;\n  text-transform: none;\n}\n\n.signature-section {\n  border: 1px solid #dfe8f2;\n  border-radius: 12px;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n  padding: 14px;\n}\n\n.signature-tools {\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  gap: 8px;\n}\n\n.edit-signature-button {\n  --border-radius: 8px;\n  --color: #0058cb;\n  height: 32px;\n  margin: 0;\n  width: 32px;\n}\n\n.edit-signature-button ion-icon {\n  font-size: 1.25rem;\n}\n\n.signature-preview,\n.signature-image {\n  align-items: center;\n  background: #f7f9fc;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 112px;\n  padding: 14px;\n}\n\n.signature-preview {\n  color: #637389;\n  gap: 10px;\n}\n\n.signature-preview-action {\n  --background-hover: rgba(0, 88, 203, 0.08);\n  --border-radius: 8px;\n  --color: #0058cb;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  flex: 0 0 auto;\n  height: 36px;\n  margin: 0;\n  width: 36px;\n}\n\n.signature-preview-action::part(native) {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.signature-preview-action ion-icon,\n.signature-preview-icon {\n  color: #0058cb;\n  font-size: 1.7rem;\n  opacity: 1;\n}\n\n.signature-image {\n  background: #ffffff;\n  box-sizing: border-box;\n  height: 100%;\n  min-height: 220px;\n  object-fit: contain;\n  padding: 0;\n  width: 100%;\n}\n\n.signature-image::part(image) {\n  background: #ffffff;\n  border-radius: 9px;\n  display: block;\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-editor {\n  background: #ffffff;\n  border-radius: 10px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 0;\n}\n\n.signature-editor canvas {\n  border: 2px dashed #cbd7e6;\n  border-radius: 10px;\n  min-height: 128px;\n  width: 100%;\n}\n\n.signature-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n\n.home-floating-action {\n  display: none;\n}\n\n@media (orientation: portrait), (max-width: 820px) {\n  #greenStat.home-workspace {\n    overflow: auto;\n    padding: 0 12px 14px;\n  }\n\n  .home-dashboard {\n    grid-template-columns: 1fr;\n    height: auto;\n    min-height: 95%;\n  }\n\n  .appointments-panel {\n    min-height: 34vh;\n  }\n\n  .appointments-list {\n    max-height: 34vh;\n  }\n\n  .case-panel {\n    grid-template-rows: auto auto minmax(220px, 1fr) auto;\n    overflow: hidden;\n  }\n\n  .case-summary,\n  .section-heading {\n    align-items: flex-start;\n  }\n\n  .case-meta,\n  .case-actions {\n    grid-template-columns: 1fr;\n  }\n\n  .signature-actions {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"loaderFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n\r\n  <ion-grid id=\"connectIndicator\" style=\"background: transparent; height: 53px;padding: 0; display: none; position: absolute;left: 0; top: 0; z-index: 1000;\r\n  width: 100%;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-chip class=\"chip-connect\">\r\n          <ion-label>\r\n            Estado de conectividad :<br>\r\n          <div style=\"margin-top: 5px;\">{{estadoConexion}}</div>\r\n          </ion-label>\r\n          <ion-icon name=\"close-circle\" style=\"position: absolute;\r\n          right: 15px;\r\n          color: white;\r\n          font-size: 1.6rem;\"\r\n          (click)=\"'collapseConnectIndicator()'\"></ion-icon>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<!--ion-grid id=\"connectIndicatorLogin\" style=\"background: transparent; height: 0px;padding: 0; display: none; position: absolute;left: 0; top: 0; z-index: 1000;\r\n        width: 100%;\" (click)=\"permitirGPS(conectividadStat)\">\r\n        <ion-row style=\"width: 100%;\">\r\n          <ion-col size=\"12\">\r\n            <ion-chip class=\"chip-connect\">\r\n              <ion-icon name=\"locate\" style=\"position: absolute;\r\n              left: 220px;\r\n              color: white;\r\n              font-size: 2rem;\"\r\n              ></ion-icon>\r\n\r\n              <ion-label style=\"margin-left: 250px; font-size: 1.3rem;\">\r\n                {{estadoConexionGPS}} \r\n              </ion-label>\r\n            </ion-chip>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid -->\r\n\r\n<ion-content id=\"clienteContent\"   fullscreen=\"true\" class=\"ion-page\">\r\n  <ion-footer class=\"ion-no-border\" style=\"position: fixed;bottom:0;height:89%;\">\r\n    <ion-refresher style=\"background: white;\" slot=\"fixed\" style=\"padding-bottom:5px\" (ionRefresh)=\"handleRefresh($event)\">\r\n      <ion-refresher-content>\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-grid class=\"ion-no-padding\" style=\"padding-top: 2px;height: 100%;overflow: hidden;\">\r\n      \r\n      <ion-row id=\"anyStat\" style=\"height: 100%;display: none;\">\r\n        <ion-col size=\"12\">\r\n          <ion-grid style=\"margin-top: 15px;\">\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <ion-badge>\r\n                  Mis Atenciones\r\n                </ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-button id=\"closeSearchButton\" class=\"close-search\" style=\"float: right ;\" (click)=\"closeSearch()\">\r\n                  <ion-icon name=\"return-up-back\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n          <ion-searchbar animated=\"true\" placeholder=\"Buscar Fecha, Atención o Asegurado\" show-clear-button=\"focus\" show-cancel-button=\"never\" cancel-button-text=\"Cancelar\"\r\n          cancel-button-icon=\"trash-bin\" [debounce]=\"400\" (ionChange)=\"handleInput($event)\"></ion-searchbar>\r\n          \r\n          <ion-grid style=\"width:95%;\">\r\n            <ion-row>\r\n              <ion-col class=\"atencion-id-head\" size=\"1\">Atención</ion-col>\r\n              <ion-col size=\"4\">Nombre Asegurado</ion-col>\r\n              <ion-col size=\"5\">Servicio</ion-col>\r\n              <ion-col size=\"2\">Fecha y Hora</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n\r\n          <ion-content color=\"light\">\r\n            <ion-list [inset]=\"true\" style=\"width: 97%;\">\r\n              <ion-item *ngFor=\"let atencion of results; let i = index;\" (click)=\"verExpedienteBusqueda(atencion.IdAtencion, indexInput.value)\" style=\"padding-left: 10px;border-radius:9px;\">\r\n              <!--ion-item *ngFor=\"let atencion of results; let i = index;\" (click)=\"verExpedienteBusqueda(atencion.IdAtencion, indexInput.value)\" style=\"padding-left: 10px;border-radius:9px;\" -->\r\n                <ion-grid style=\"width:100%;\">\r\n                  <ion-row>\r\n                    <ion-col class=\"atencion-id\" size=\"1\" [style.--color]=\"atencion.ColorEstado\">{{ atencion.IdAtencion }}</ion-col>\r\n                    <ion-col size=\"4\">{{atencion.Cliente}}</ion-col>\r\n                    <ion-col size=\"5\">{{atencion.Servicio}}</ion-col>\r\n                    <ion-col size=\"2\" style=\"text-align: right;\">{{atencion.Fecha}} <small style=\"color: gray;\">{{atencion.Hora}}</small></ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <ion-input [hidden]=\"true\" #colorInput [value]=\"atencion.ColorEstado\"></ion-input>\r\n                <ion-input #indexInput [hidden]=\"true\" [value]=\"i\" class=\"index-input\"></ion-input>\r\n              </ion-item>\r\n              <ion-item style=\"color: white;\">Ajustadores Ficohsa por Porsalud</ion-item>\r\n              <br><br><br><br><br>\r\n            </ion-list>\r\n          </ion-content>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <br><br>\r\n      <ion-row id=\"greenStat\" class=\"home-workspace\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"home-dashboard\">\r\n            <section class=\"appointments-panel\">\r\n              <div class=\"panel-heading\">\r\n                <div>\r\n                  <span class=\"panel-kicker\">Bandeja</span>\r\n                  <h1>Mis atenciones</h1>\r\n                </div>\r\n                <ion-badge class=\"count-badge\">{{filtroAtenciones.length}}</ion-badge>\r\n              </div>\r\n\r\n              <ion-card class=\"empty-state-card\" *ngIf=\"filtroAtenciones.length == 0\">\r\n                <ion-card-content>\r\n                  <img src=\"../../assets/img/busqueda-icono.gif\" alt=\"Buscar atenciones\" />\r\n                  <h2>No hay atenciones asignadas</h2>\r\n                  <p>Cuando tu proveedor asigne una atencion a tu nombre, aparecera en esta bandeja.</p>\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n              <ion-list class=\"appointments-list\" [inset]=\"true\" *ngIf=\"filtroAtenciones.length > 0\">\r\n                <ion-item *ngFor=\"let item of filtroAtenciones; let i = index; let first = first; let last = last\" (click)=\"seleccionarAtencion(item.IdAtencion, indexInput.value)\"\r\n                  [style.--status-color]=\"item.ColorEstado\" class=\"appointment-item\">\r\n                  <div class=\"status-strip\"></div>\r\n                  <ion-grid class=\"ion-no-padding\">\r\n                    <ion-row>\n                      <ion-col size=\"7\">\n                        <strong>{{item.Cliente}}</strong>\n                      </ion-col>\n                      <ion-col size=\"5\" class=\"appointment-timing\">\n                        <span class=\"appointment-id\">#{{item.IdAtencion}}</span>\n                        <span class=\"appointment-date\">{{item.Fecha}}</span>\n                        <span class=\"appointment-hour\">{{item.Hora}}</span>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-badge class=\"new-badge\" [hidden]=\"item.LogEstado==2\">Nueva</ion-badge>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\r\n                  <ion-input #indexInput [hidden]=\"true\" [value]=\"i\" class=\"index-input\"></ion-input>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-label id=\"versionFooter\" class=\"version-footer\">\r\n                <ion-icon src=\"../../assets/img/versiones.svg\"></ion-icon>\r\n                HELP Ajustadores, Version {{androidVersion}}\r\n              </ion-label>\r\n            </section>\r\n\r\n            <section class=\"case-panel\">\r\n              <div class=\"case-summary\">\r\n                <div class=\"case-title\">\r\n                  <span class=\"panel-kicker\">Atencion seleccionada</span>\r\n                  <h2 *ngIf=\"atIndexId == 0\">Atencion #{{firstSegmentId}}</h2>\r\n                  <h2 *ngIf=\"atIndexId > 0\">Atencion #{{atIndex}}</h2>\r\n                </div>\r\n                <ion-badge class=\"status-badge\" [ngStyle]=\"{'--background':elColorEstado}\">\r\n                  <ion-icon name=\"radio-button-on-outline\"></ion-icon>\r\n                  Estado\r\n                </ion-badge>\r\n              </div>\r\n\r\n              <div class=\"case-meta\">\r\n                <div>\r\n                  <span>Asegurado</span>\r\n                  <strong>{{elCliente}}</strong>\r\n                </div>\r\n                <div>\r\n                  <span>Servicio</span>\r\n                  <strong>{{elServicio}}</strong>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"signature-section\">\r\n                <div class=\"section-heading\">\n                  <div>\n                    <span class=\"panel-kicker\">Firma del cliente</span>\n                    <h3>Registro de firma</h3>\n                  </div>\n                  <div class=\"signature-tools\">\n                    <ion-badge class=\"signature-status\" *ngIf=\"!firmaPrecargada || firmaPrecargada == '' || firmaPrecargada == null || firmaPrecargada == undefined || firmaPrecargada == emptySignatureWhite || firmaPrecargada == emptySignature\">Pendiente</ion-badge>\n                    <ion-badge class=\"signature-status ready\" *ngIf=\"firmaPrecargada  && firmaPrecargada != '' && firmaPrecargada != null && firmaPrecargada != undefined && firmaPrecargada != emptySignatureWhite && firmaPrecargada != emptySignature\">Guardada</ion-badge>\n                    <ion-button class=\"edit-signature-button\" fill=\"clear\" (click)=\"goESignature()\" [disabled]=\"filtroAtenciones.length == 0\">\n                      <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </div>\n                </div>\n\r\n                <div class=\"signature-preview\" *ngIf=\"!firmaPrecargada || firmaPrecargada == '' || firmaPrecargada == null || firmaPrecargada == undefined || firmaPrecargada == emptySignatureWhite || firmaPrecargada == emptySignature\">\n                  <ion-button class=\"signature-preview-action\" fill=\"clear\" (click)=\"goESignature()\" [disabled]=\"filtroAtenciones.length == 0\">\n                    <ion-icon class=\"signature-preview-icon\" slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                  </ion-button>\n                  <span>Aun no se ha precargado una firma para el cliente.</span>\n                </div>\n                <ion-img id=\"firmaPrevisualizacionCliente\" class=\"signature-image\" *ngIf=\"firmaPrecargada  && firmaPrecargada != '' && firmaPrecargada != null && firmaPrecargada != undefined && firmaPrecargada != emptySignatureWhite && firmaPrecargada != emptySignature\" src=\"{{firmaPrecargada}}\"></ion-img>\r\n\r\n                <!--div class=\"signature-editor\">\r\n                  <canvas id=\"canvasAsegurado\" width=\"{{canvasAseguradoWidth}}\" [height]=\"150\" #canvas2></canvas>\r\n                  <div class=\"signature-actions\">\r\n                    <ion-button fill=\"clear\" (click)=\"clear()\">\r\n                      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\r\n                      Limpiar\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"filtroAtenciones.length == 0\" disabled>\r\n                      <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\r\n                      Guardar firma\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"filtroAtenciones.length > 0\" (click)=\"saveSignatureAsegurado(atIndex)\">\r\n                      <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\r\n                      Guardar firma\r\n                    </ion-button>\r\n                  </div>\r\n                </div -->\r\n\r\n              </div>\r\n\r\n              <div class=\"case-actions\">\r\n                <ion-button fill=\"outline\" color=\"warning\" (click)=\"grua()\">\r\n                  <ion-icon slot=\"start\" src=\"../../assets/img/remolque-de-camiones.svg\"></ion-icon>\r\n                  Grua\r\n                </ion-button>\r\n                \r\n                <ion-button fill=\"outline\" (click)=\"goFotos()\" [disabled]=\"filtroAtenciones.length == 0\">\r\n                  <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\r\n                  Fotos\r\n                </ion-button>\r\n                \r\n                <ion-button (click)=\"verExpediente(atIndex)\" [disabled]=\"filtroAtenciones.length == 0\">\r\n                  <ion-icon slot=\"start\" name=\"folder-open-outline\"></ion-icon>\r\n                  Expediente\r\n                </ion-button>\r\n              </div>\r\n\r\n              \r\n            </section>\r\n          </div>\r\n          <ion-grid style=\"height: 90%;\">\r\n            <ion-row style=\"height: 100%;\">\r\n              <ion-col size=\"4\" style=\"padding-right: 15px; border-right: 1px solid lightgray;\">\r\n                \r\n                <ion-card *ngIf=\"filtroAtenciones.length == 0\">\r\n                  <ion-card-header>\r\n                    <ion-card-title>\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"8\"></ion-col>\r\n                          <ion-col size=\"4\">\r\n                            <img style=\"width: 60px; height:60px\" src=\"../../assets/img/busqueda-icono.gif\" alt=\"search\" />\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid> \r\n                    </ion-card-title>\r\n                    <ion-card-subtitle>Revisa tus atenciones.</ion-card-subtitle>\r\n                  </ion-card-header>\r\n                \r\n                  <ion-card-content>\r\n                    Haz click en el botón de búsqueda.\r\n                  </ion-card-content>\r\n                </ion-card>\r\n                <ion-card *ngIf=\"filtroAtenciones.length == 0\">\r\n                  <ion-card-header>\r\n                    <ion-card-title>Bienvenido(a)!</ion-card-title>\r\n                    <ion-card-subtitle>Aun no cuentas con atenciones asignadas.</ion-card-subtitle>\r\n                  </ion-card-header>\r\n                \r\n                  <ion-card-content>\r\n                    Una vez que tu proveedor asigne atenciones a tu nombre, las verás disponibles en este listado.\r\n                    Éxitos! <ion-icon name=\"thumbs-up\"></ion-icon>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-list [inset]=\"true\" style=\"width: 95%; overflow-y: scroll; height: 80%;\">\r\n                  <ion-item *ngFor=\"let item of filtroAtenciones; let i = index; let first = first; let last = last\" (click)=\"seleccionarAtencion(item.IdAtencion, indexInput.value)\" \r\n                  [style.--color]=\"item.ColorEstado\" class=\"segment-item-atenciones\">\r\n                  <ion-grid class=\"ion-no-padding\">\r\n                    <ion-row>\r\n                      <ion-col size=\"8\">\r\n                        <small><strong>{{item.Cliente}}</strong></small>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\" style=\"text-align: right;\"><small>{{item.IdAtencion}}</small></ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"4\" style=\"text-align: left;\">\r\n                        <small [hidden]=\"item.LogEstado==2\">\r\n                          <ion-badge color=\"danger\">\r\n                              Nueva\r\n                          </ion-badge>\r\n                        </small>\r\n                    </ion-col>\r\n                      <ion-col size=\"8\"><span class=\"end span-small ion-text-wrap\" style=\"float: right;\"><small style=\"font-size: 0.8rem;\">{{item.Fecha| date:'short'}}</small></span></ion-col>\r\n                      \r\n                    <ion-input #indexInput [hidden]=\"true\" [value]=\"i\" class=\"index-input\"></ion-input>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                    \r\n                    \r\n                    \r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-label id=\"versionFooter\" style=\"text-align: right;padding-right:15px; color: #0058CB; background: white; position: absolute; bottom: 5%; left: 15px;\">\r\n                  <ion-icon style=\"font-size: 2rem;\" src=\"../../assets/img/versiones.svg\"></ion-icon> HELP Ajustadores, Versión {{androidVersion}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"8\" style=\"padding-left: 15px; padding-top: 0px;\">\r\n                <ion-card class=\"box-shadow ion-padding\" style=\"margin: 0; height: 100%;margin-top: 0px;\">\r\n                  <ion-grid style=\"width: 100%;\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-item-divider color=\"primary\" style=\"color: azure; box-shadow: 3px 3px 5px rgba(0,0,0,0.2); border-radius: 30px; margin-top: -5px;    height: 50px;\r\n    padding-top: 15px;\">\r\n                          <ion-title id=\"titulo\" style=\"font-size: 0.8rem;\" *ngIf=\"atIndexId == 0\">Atención {{firstSegmentId}} para {{elCliente}}, {{elServicio}} </ion-title>\r\n                          <ion-title id=\"titulo\" style=\"font-size: 0.8rem;\" *ngIf=\"atIndexId > 0\">Atención {{atIndex}} para {{elCliente}}, {{elServicio}} </ion-title>\r\n                        </ion-item-divider>\r\n                      </ion-col>\r\n                    </ion-row>\r\n\r\n                    <br>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\" style=\"color: #3171e0;\">\r\n                        <ion-label style=\"margin-left: 19px;\"> Firma Actual Cliente</ion-label>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <ion-badge style=\"text-align: left;width: 87%;text-align: left;margin-left: 2.5%;height: 150px;border-radius: 30px; padding: 20px;\" *ngIf=\"!firmaPrecargada || firmaPrecargada == '' || firmaPrecargada == null || firmaPrecargada == undefined || firmaPrecargada == emptySignatureWhite || firmaPrecargada == emptySignature\">Aun no se ha precargado una firma para el cliente. <br>Puedes guardar una desde el panel de firma.</ion-badge>\r\n                        <ion-img id=\"firmaPrevisualizacionCliente\" style=\"border: 6px solid rgb(237, 233, 233);padding-top: 10px; border-radius: 50px; width: 87%; margin-left: 2.5%;\" *ngIf=\"firmaPrecargada  && firmaPrecargada != '' && firmaPrecargada != null && firmaPrecargada != undefined && firmaPrecargada != emptySignatureWhite && firmaPrecargada != emptySignature\" src=\"{{firmaPrecargada}}\"></ion-img>\r\n                      </ion-col>\r\n                    </ion-row>\r\n\r\n                    \r\n                    <ion-row>\r\n                      <ion-col size=\"11\">\r\n                        <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\" style=\"color: #0058CB;\">\r\n                              <ion-grid class=\"ion-no-padding\">\r\n                                <ion-row>\r\n                                  <ion-col size=\"12\" style=\"color: #3171e0;\">\r\n                                    <ion-label style=\"margin-left: 19px;\"> Cambiar Firma</ion-label>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </ion-col>\r\n                            <ion-col size=\"12\" style=\"margin-top: -10px;\">\r\n                              <ion-card id=\"cardAsegurado\">\r\n                                <ion-card-content>\r\n                                  <canvas id=\"canvasAsegurado\" width=\"{{canvasAseguradoWidth}}\" [height]=\"150\"  #canvas2 style=\"border: 6px dashed #ede9e9\"></canvas>\r\n                                </ion-card-content>\r\n                                <ion-grid>\r\n                                  <ion-row>\r\n                                    <ion-col size=\"6\">\r\n                                      <ion-button expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" *ngIf=\"filtroAtenciones.length == 0\">\r\n                                      <ion-button expand=\"block\" disabled>Guardar Firma</ion-button>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" *ngIf=\"filtroAtenciones.length > 0\">\r\n                                      <ion-button expand=\"block\" (click)=\"saveSignatureAsegurado(atIndex)\">Guardar Firma</ion-button>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </ion-card>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                      </ion-col>\r\n                      <ion-col size=\"1\">\r\n                        <div class=\"card-header-image\">\r\n                          <span class=\"span-small ion-text-wrap\" style=\"position: absolute; right: 10px;top: 10px;z-index: 999;\">\r\n                            <ion-icon [ngStyle]=\"{'color':elColorEstado}\" name=\"radio-button-on-outline\"></ion-icon></span>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          <!--ion-split-pane when=\"xs\" contentId=\"main\" style=\"overflow: hidden;\">\r\n            <ion-menu id=\"atencionesContainer\" contentId=\"main\">\r\n              <ion-header>\r\n                <ion-toolbar color=\"primary\" style=\"height: 30px;\">\r\n                  <ion-grid style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-toolbar>\r\n              </ion-header>\r\n              <ion-content class=\"ion-padding\">\r\n                <ion-card *ngIf=\"filtroAtenciones.length == 0\">\r\n                  <ion-card-header>\r\n                    <ion-card-title>\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"8\"></ion-col>\r\n                          <ion-col size=\"4\">\r\n                            <img style=\"width: 60px; height:60px\" src=\"../../assets/img/busqueda-icono.gif\" alt=\"search\" />\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid> \r\n                    </ion-card-title>\r\n                    <ion-card-subtitle>Revisa tus atenciones.</ion-card-subtitle>\r\n                  </ion-card-header>\r\n                \r\n                  <ion-card-content>\r\n                    Haz click en el botón de búsqueda.\r\n                  </ion-card-content>\r\n                </ion-card>\r\n                <ion-card *ngIf=\"filtroAtenciones.length == 0\">\r\n                  <ion-card-header>\r\n                    <ion-card-title>Bienvenido(a)!</ion-card-title>\r\n                    <ion-card-subtitle>Aun no cuentas con atenciones asignadas.</ion-card-subtitle>\r\n                  </ion-card-header>\r\n                \r\n                  <ion-card-content>\r\n                    Una vez que tu proveedor asigne atenciones a tu nombre, las verás disponibles en este listado.\r\n                    Éxitos! <ion-icon name=\"thumbs-up\"></ion-icon>\r\n                  </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-list>\r\n                  <ion-item *ngFor=\"let item of filtroAtenciones; let i = index; let first = first; let last = last\" (click)=\"seleccionarAtencion(item.IdAtencion, indexInput.value)\" \r\n                  [style.--color]=\"item.ColorEstado\" class=\"segment-item-atenciones\">\r\n                  <ion-grid class=\"ion-no-padding\">\r\n                    <ion-row>\r\n                      <ion-col size=\"8\">\r\n                        <small><strong>{{item.Cliente}}</strong></small>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\" style=\"text-align: right;\"><small>{{item.IdAtencion}}</small></ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"4\" style=\"text-align: left;\">\r\n                        <small [hidden]=\"item.LogEstado==2\">\r\n                          <ion-badge color=\"danger\">\r\n                              Nueva\r\n                          </ion-badge>\r\n                        </small>\r\n                    </ion-col>\r\n                      <ion-col size=\"8\"><span class=\"end span-small ion-text-wrap\" style=\"float: right;\"><small style=\"font-size: 0.8rem;\">{{item.Fecha| date:'short'}}</small></span></ion-col>\r\n                      \r\n                    <ion-input #indexInput [hidden]=\"true\" [value]=\"i\" class=\"index-input\"></ion-input>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                    \r\n                    \r\n                    \r\n                  </ion-item>\r\n                </ion-list>\r\n                \r\n              </ion-content>\r\n              \r\n            </ion-menu>\r\n          \r\n            <div class=\"ion-page\" id=\"main\">\r\n              <ion-header>\r\n                <ion-toolbar color=\"primary\" style=\"height: 30px;\">\r\n                  \r\n                  \r\n                </ion-toolbar>\r\n              </ion-header>\r\n              <ion-content class=\"ion-padding\">\r\n                \r\n                \r\n              </ion-content>\r\n            </div>\r\n\r\n            <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n          </ion-split-pane -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-fab id=\"gruaBoton\" class=\"home-floating-action\" style=\"position: fixed;margin-bottom: 12%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"grua()\">\r\n        <ion-icon style=\"font-size: 2rem; color: white;\" src=\"../../assets/img/remolque-de-camiones.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab class=\"home-floating-action\" *ngIf=\"isSearch == false && filtroAtenciones.length == 0\" style=\"position: fixed;margin-bottom: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"goFotos()\" disabled>\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab class=\"home-floating-action\" *ngIf=\"isSearch == false && filtroAtenciones.length == 0\" style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"verExpediente(atIndex)\" disabled>\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab class=\"home-floating-action\" *ngIf=\"isSearch == false && filtroAtenciones.length > 0\" style=\"position: fixed;margin-bottom: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"goFotos()\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab class=\"home-floating-action\" *ngIf=\"isSearch == false && filtroAtenciones.length > 0\" style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"verExpediente(atIndex)\">\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n\r\n    <ion-grid id=\"saludoInicial\" style=\"background: transparent; height: 100%;padding: 0; display: inherit; position: absolute;left: 0; bottom: 0; z-index: 1000;\r\n      width: 100%;\">\r\n      <ion-row style=\"width: 100%; position: absolute; bottom: 420px; z-index: 1040;\">\r\n        <ion-col size=\"12\">\r\n          <ion-chip id=\"chipGPS\" class=\"chip-gps\">\r\n            <ion-button shape=\"round\" class=\"boton-gps\" (click)=\"permitirGPS()\">\r\n              <ion-icon name=\"locate\" style=\"position: absolute;\r\n              left: 0px;\r\n              color: white;\r\n              font-size: 2rem;\"\r\n              ></ion-icon>\r\n\r\n              <ion-label style=\"margin-left: 10px; font-size: 1.1rem; text-transform: capitalize;\">\r\n                Permisos de ubicación precisa\r\n              </ion-label>\r\n            </ion-button>\r\n\r\n            <br><br>\r\n            <span style=\"text-align: justify;\">\r\n              HELP AJUSTADORES, para una mejor experiencia activa los permisos de ubicación precisa. <br><br>\r\n             Esto nos ayudará a brindarte un mejor servicio, con tiempos de respuesta más rápidos y una ubicación más precisa para tus atenciones. <br><br>\r\n             ¡Gracias por confiar en nosotros! <ion-icon name=\"heart\"></ion-icon>\r\n            </span>\r\n            \r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!--ion-row style=\"position: absolute;\r\n    top: 35%;\r\n    z-index: 3000;\r\n    left: 35%;\r\n    --height: 300px;\r\n    \">\r\n        \r\n        <ion-col size=\"12\">\r\n          <ion-card id=\"gpsCard\" style=\"height: 300px;border: none;\r\n    box-shadow: none;\" [style.display]=\"gpsOn ? 'block' : 'none'\">\r\n            <ion-card-header>\r\n              <ion-card-title>HELP AJUSTADOR</ion-card-title>\r\n              <ion-card-subtitle>Ubicación Precisa</ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              Activar  permisos de ubicación precisa.\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        \r\n      </ion-row -->\r\n    </ion-grid>\r\n    \r\n  </ion-footer>\r\n\r\n  <ion-modal [isOpen]=\"openModal\" #modalOptions trigger=\"open-modal-sign\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.5, 0.75, 1]\">\r\n    <ng-template>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item-divider>\r\n                  <ion-label> Firma Asegurado </ion-label>\r\n                </ion-item-divider>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              \r\n              <ion-col size=\"12\">\r\n                <ion-badge style=\"width: 100%;text-align: left;\" *ngIf=\"(!firmaPrecargada || firmaPrecargada == null || firmaPrecargada == '' || firmaPrecargada == emptySignature) && elColorEstado != 'green'\">\r\n                  {{textoEmergente1}}<br>{{textoEmergente2}}\r\n                </ion-badge>\r\n                <ion-badge style=\"width: 100%;text-align: left;\" *ngIf=\"(!firmaPrecargada || firmaPrecargada == null || firmaPrecargada == '' || firmaPrecargada == emptySignature) && elColorEstado == 'green'\">\r\n                  Aun no se ha precargado una firma para este asegurado. <br>Si el informe aun está vigente, puedes guardar una nueva.\r\n                </ion-badge>\r\n                <ion-img *ngIf=\"firmaPrecargada && firmaPrecargada != emptySignature\" src=\"{{firmaPrecargada}}\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n            \r\n          </ion-grid>\r\n          </ion-card-content>\r\n          \r\n        </ion-card>\r\n        <ion-grid style=\"width: 100%;\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button *ngIf=\"isSign == false\" style=\"color: white;opacity: 0;\" expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" (click)=\"this.modalOptions.dismiss()\">Usar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n  <ion-modal #modalNotifications trigger=\"open-modal-notifications\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.5, 0.75, 1]\">\r\n    <ng-template>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-item-divider>\r\n                  <ion-label> Notificaciones </ion-label>\r\n                </ion-item-divider>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              \r\n              <ion-col size=\"12\">\r\n                <ion-list>\r\n                  <ion-item *ngFor=\"let not of this.notifications; let i = index;\"></ion-item>\r\n                  <ion-item>{{miLocalidad}}</ion-item>\r\n                </ion-list>\r\n              </ion-col>\r\n            </ion-row>\r\n            \r\n          </ion-grid>\r\n          </ion-card-content>\r\n          \r\n        </ion-card>\r\n        <ion-grid style=\"width: 100%;\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button *ngIf=\"isSign == false\" style=\"color: white;opacity: 0;\" expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button expand=\"block\" (click)=\"this.modalNotifications.dismiss()\">Usar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n  <div class=\"ion-page\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>\r\n                <img id=\"logoHelpBLanco\" class=\"mi-logo\" src=\"../../../assets/logos/help-white.png\" alt=\"Ficohsa Logo\" />\r\n        </ion-title>\r\n\r\n        <ion-button style=\"right: 2vw; top:2vh; position: fixed; --background: white; --border-radius: 30px;\" (click)=\"cerrarSesion()\"\r\n        [disabled]=\"!gpsOn\">\r\n          <ion-icon color=\"primary\" style=\"font-size: 30px; margin-left: 1px; margin-right: 0px;\" name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      \r\n  \r\n      <ion-modal #modalNotify trigger=\"open-modal-notify\" [presentingElement]=\"presentingElement\">\r\n        <ng-template>\r\n          <ion-header>\r\n            <ion-toolbar>\r\n              <ion-title>Modal</ion-title>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button (click)=\"modalNotify.dismiss()\">Close</ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n          </ion-header>\r\n          <ion-content>\r\n            <ion-list>\r\n              <ion-item class=\"notification-item unread\" *ngFor=\"let notificacion of this.notifications; let i = index;\"\r\n              (click)=\"openNotification(i)\">\r\n                <ion-label>\r\n                  <h2>{{notificacion.title}}</h2>\r\n                  <p>Atencion # {{notificacion.atencionId}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-content>\r\n        </ng-template>\r\n      </ion-modal>\r\n    </ion-content>\r\n  </div>\r\n\r\n  <ion-modal #modalFoto class=\"Img\" #appointmentAlert [isOpen]=\"openFoto\">\r\n    <ng-template>\r\n      <ion-content (click)=\"openFoto=false\">\r\n        <ion-img [src]=\"foto\"></ion-img>\r\n      </ion-content>\r\n      <ion-button expand=\"block\" (click)=\"this.modalFoto.dismiss();abrirExpediente()\">Ver Expediente</ion-button>\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n\r\n  <ion-modal [isOpen]=\"openModal == true\" [hidden]=\"openModal == false\" #modalMenu trigger=\"open-modal-menu\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.95]\"\r\n>\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Opciones Disponibles</ion-toolbar>\r\n      <ion-list>\r\n        <ion-item-divider>\r\n          <ion-label> Servicios </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <ion-item (click)=\"grua()\">\r\n          <ion-avatar slot=\"start\">\r\n            <!--ion-icon style=\"font-size: 3rem;\" src=\"../../assets/img/wheeled-crane.svg\"></!--ion-icon -->\r\n            <img style=\"width: 60px; height:60px\" src=\"../../assets/img/camion-grua-1.gif\" alt=\"search\" (click)=\"grua()\"/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Solicitar Grua</h2>\r\n            <p>Asistencia Inmediata</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <!--Bypass-->\r\n        <br>\r\n        <ion-item-divider>\r\n          <ion-label> Formularios </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <br>\r\n        <ion-item id=\"step2\" *ngIf=\"esClienteCompleto == true && esAjustadorCompleto == true\" (click)=\"goCulpable()\">\r\n          <ion-avatar slot=\"start\">\r\n            <!--ion-icon style=\"font-size: 2.8rem;\" name=\"wallet\"></!--ion-icon -->\r\n            <img style=\"width: 60px; height:60px\" src=\"../../assets/img/adeuda1.gif\" alt=\"search\" (click)=\"'modalOptions.present()'\"/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Formulario De Culpable</h2>\r\n            <p>Acuerdo de Deuda y de Responsabilidad</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <br>\r\n        <ion-item id=\"step2\" *ngIf=\"esClienteCompleto == true && esAjustadorCompleto == true\">\r\n          <ion-avatar slot=\"start\">\r\n            <!--ion-icon style=\"font-size: 2.8rem;\" name=\"golf\"></!--ion-icon -->\r\n            <img style=\"width: 75px; height:75px\" src=\"../../assets/img/finiquito.gif\" alt=\"search\" (click)=\"'modalOptions.present()'\"/>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Formulario De Finiquito</h2>\r\n            <p>Para Asegurado, Beneficiario o Tercero</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-button id=\"open-modal-update\" expand=\"block\" hidden>Accionar Modal</ion-button>\r\n    <ion-modal #modalUpdate trigger=\"open-modal-update\" [canDismiss]=\"canDismiss\" [presentingElement]=\"presentingElement\">\r\n      <ng-template>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-title>HELP AJUSTADORES</ion-title>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button id=\"closeUpdate\" (click)=\"modalUpdate.dismiss()\" hidden>Close</ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n          <ion-card style=\"margin-top: 10%; border: none; box-shadow: none;text-align: center;\">\r\n            <img alt=\"Eeeexittoooo!\" [src]=\"updateIcon\" style=\"width: 180px; margin-bottom: -18px;\"/>\r\n            <h3> <strong> Hay una nueva versión disponible; </strong> </h3>\r\n            <ion-button id=\"submitClaim\" style=\"position: relative;width: 24%;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: #f14f23;\r\n            --background-activated: #a8462a;\r\n            --background-hover: #f66e48;\r\n            --border-radius: 15px;\r\n            --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n            --color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"openStore(store)\">\r\n              ACTUALIZAR\r\n            </ion-button>\r\n          </ion-card>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-modal>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map