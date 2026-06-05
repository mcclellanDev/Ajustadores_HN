(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_expediente_expediente_module_ts"],{

/***/ 94153:
/*!********************************************!*\
  !*** ./src/app/environments/calendario.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendarTitles": () => (/* binding */ calendarTitles),
/* harmony export */   "meses": () => (/* binding */ meses)
/* harmony export */ });
const meses = [{
  mes: 'Enero'
}, {
  mes: 'Febrero'
}, {
  mes: 'Marzo'
}, {
  mes: 'Abril'
}, {
  mes: 'Mayo'
}, {
  mes: 'Junio'
}, {
  mes: 'Julio'
}, {
  mes: 'Agosto'
}, {
  mes: 'Septiembre'
}, {
  mes: 'Octubre'
}, {
  mes: 'Noviembre'
}, {
  mes: 'Diciembre'
}];
const calendarTitles = [{
  title: 'Fecha Desde'
}, {
  title: 'Fecha Hasta'
}, {
  title: 'Fecha Del Cheque'
}];

/***/ }),

/***/ 94873:
/*!*********************************************************!*\
  !*** ./src/app/expediente/expediente-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpedientePageRoutingModule": () => (/* binding */ ExpedientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _expediente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expediente.page */ 50827);




const routes = [{
  path: '',
  component: _expediente_page__WEBPACK_IMPORTED_MODULE_0__.ExpedientePage
}];
let ExpedientePageRoutingModule = class ExpedientePageRoutingModule {};
ExpedientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ExpedientePageRoutingModule);


/***/ }),

/***/ 66409:
/*!*************************************************!*\
  !*** ./src/app/expediente/expediente.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpedientePageModule": () => (/* binding */ ExpedientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _expediente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expediente-routing.module */ 94873);
/* harmony import */ var _expediente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expediente.page */ 50827);







let ExpedientePageModule = class ExpedientePageModule {};
ExpedientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _expediente_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpedientePageRoutingModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_expediente_page__WEBPACK_IMPORTED_MODULE_1__.ExpedientePage]
})], ExpedientePageModule);


/***/ }),

/***/ 50827:
/*!***********************************************!*\
  !*** ./src/app/expediente/expediente.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpedientePage": () => (/* binding */ ExpedientePage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _expediente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expediente.page.html?ngResource */ 98307);
/* harmony import */ var _expediente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expediente.page.scss?ngResource */ 54688);
/* harmony import */ var _expediente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_expediente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _environments_mapas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/mapas */ 31624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/calendario */ 94153);















//import { GoogleMaps } from '@ionic-native/google-maps';



let ExpedientePage = class ExpedientePage {
  constructor(router, loading, alert, toaster, toastr, api, routeActive, call, myModal, platform, so, geo, location) {
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.toaster = toaster;
    this.toastr = toastr;
    this.api = api;
    this.routeActive = routeActive;
    this.call = call;
    this.myModal = myModal;
    this.platform = platform;
    this.so = so;
    this.geo = geo;
    this.location = location;
    this.laLocalidad = [];
    this.miLocalidad = [];
    this.openModal = false;
    this.esClienteCompleto = false;
    this.clienteCompleto = 'false';
    this.copmleteByCase = [];
    this.isLoading = false;
    this.isLoadingData = false;
    this.leido = false;
    this.user = null;
    this.formulario = false;
    this.asignacion = false;
    this.agentes = [];
    this.clienteHn = {};
    this.ajustadorHN = {};
    this.ajustadoresList = [];
    this.esAjustadorCompleto = false;
    this.isTrack = false;
    this.isArrived = false;
    this.isTracking = false;
    this.breakpoint = 1;
    this.newMarkers = [];
    this.cacheCount = 0;
    this.cacheCliente = [];
    this.coordenadasDeCorreccion = [];
    this.laExpediente = [];
    this.user = this.api.currentUser;
    this.routeActive.queryParams.subscribe(params => {
      this.idAtencion = params.Id;
    });
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    this.daDate = new Date(); // Temporalmente la fecha actual del sistema
    this.dia = this.daDate.getDate();
    this.mes = this.daDate.getMonth();
    this.anio = this.daDate.getFullYear();
    console.log('Id del mes ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_10__.meses[this.mes].mes);
    console.log(_environments_calendario__WEBPACK_IMPORTED_MODULE_10__.meses[this.mes].mes);
    this.fechaParrafo = this.dia + ' de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_10__.meses[this.mes].mes + ' de ' + this.anio;
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_10__.meses[this.mesPie].mes + ' de ' + this.anioPie;
    localStorage.setItem('previous', window.location.pathname);
    this.getCountry();
    localStorage.setItem('clienteCompleto', 'false');
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }
  ionViewDidEnter() {
    var _this = this;
    let polNum;
    let cerNum;
    this.getExpediente();
    this.getAtenciones();
    //alert(this.idAtencion);
    setTimeout(() => {
      let exped = localStorage.getItem('elExpediente');
      let numPol;
      this.laExpediente = JSON.parse(exped);
      polNum = this.laExpediente[0].PolizaExterna.split('-')[1];
      cerNum = this.laExpediente[0].Certificado;
      const cobertura = {
        pNumPoliza: parseInt(polNum),
        pNumSiniestro: '',
        pNumCertificado: parseInt(cerNum),
        pNumEndoso: '',
        pNumAsegurado: ''
      };
      this.api.Valida_Lista_Coberturas(cobertura).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log('Cobertura de póliza ');
        console.dir(res);
        //localStorage.setItem('coberturas', JSON.stringify(res));
      });
    }, 2000);
    this.api.ObtenerFiniquito(parseInt(this.idAtencion)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('El finiquito');
        console.log(res);
      });
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.log('no hay finiquito ' + error);
      });
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  ngOnInit() {
    var _this2 = this;
    // Manejo de botón de regreso
    localStorage.setItem('origin', window.location.pathname);
    this.platform.backButton.subscribe(() => {
      this.clearIntervals();
      this.Torval();
      //this.router.navigate(['./tab1']);
      this.toastr.dismissToast();
      this.myModal.dismiss().then();
      window.location.reload();
    });
    // Manejo de orientación del app
    this.platform.ready().then(() => {
      this.elColorEstado = localStorage.getItem('elColorEstado');
      //alert(this.elColorEstado)
    });
    // Maneo de carga de atenciones y características de logística
    this.user = this.api.currentUser;
    this.routeActive.queryParams.subscribe(params => {
      this.idAtencion = params.Id;
      this.source = params.Source;
      setTimeout(() => {
        this.obtenerCacheCliente(this.idAtencion);
        this.triggerModalInfo();
        this.api.ActualizaLogAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.isLoading = false;
        }))).subscribe( /*#__PURE__*/function () {
          var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log(res);
          });
          return function (_x3) {
            return _ref6.apply(this, arguments);
          };
        }());
        this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.isLoading = false;
        }))).subscribe( /*#__PURE__*/function () {
          var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log("Detalles de audiencia en ver expediente: " + res.length);
            console.dir(res);
            if (res) {
              _this2.identidadAsegurado = res[0].IdentidadCliente;
              _this2.bpmFicohsa = res[0].CodigoBPMFicohsa;
              localStorage.setItem('identidadAsegurado', _this2.identidadAsegurado);
            }
          });
          return function (_x4) {
            return _ref8.apply(this, arguments);
          };
        }());
      }, 3000);
    });
    //this.getExpediente();
    this.api.Ajustadores(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fin');
    }))).subscribe(res => {
      if (res) {
        this.agentes = JSON.parse(res);
        console.log(this.agentes[0].IdAjustador, 'mi respuesta');
        this.ajustadorId = this.agentes[0].IdAjustador;
      }
    }, /*#__PURE__*/function () {
      var _ref10 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this2.router.navigate(['./tabs']);
        const alert = yield _this2.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        yield alert.present();
      });
      return function (_x5) {
        return _ref10.apply(this, arguments);
      };
    }());
    this.outletDeactivate();
  }
  outletDeactivate() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivationStart && e.snapshot.outlet === "tab1") this.outlet.deactivate();
    });
  }
  handleForward() {
    this.isLoading = true;
    this.obtenerCacheCliente(this.idAtencion);
    //alert('El cliente completo es '+ this.esClienteCompleto);
    setTimeout(() => {
      if (this.esClienteCompleto == true) {
        //alert('Voy a ajustar el HN');
        this.ajustadorHn();
      } else {
        //alert('Voy a ir al cliente');
        this.goCliente();
      }
      this.isLoading = false;
    }, 3000);
  }
  triggerModalInfo() {
    console.dir(document.getElementById('open-modal-info'));
    jquery__WEBPACK_IMPORTED_MODULE_9__('#open-modal-info').click();
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_9__('.ion-accordion-toggle-icon').eq(2).click();
    }, 600);
  }
  moveTo(breakpoint) {
    const {
      nativeElement
    } = this.modalInfo;
    if (!nativeElement) {
      return;
    }
    nativeElement.setCurrentBreakpoint(breakpoint);
  }
  goAdeuda() {
    this.Torval();
    this.router.navigate(['./adeuda']);
  }
  goCulpable() {
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    //this.router.navigate(['./culpable']);
    this.router.navigate(['./culpable'], {
      queryParams: {
        pageSource: './expediente'
      }
    });
  }
  goBeneficiario() {
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    this.router.navigate(['./beneficiario']);
  }
  goFiniquito() {
    this.Torval();
    localStorage.setItem('finiquito', JSON.stringify(this.elFiniquito));
    this.router.navigate(['./finiquito']);
  }
  getAtenciones() {
    var _this3 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let atencionesCount = 0;
      localStorage.setItem('atencionesCount', atencionesCount.toString());
      _this3.isLoading = true;
      _this3.api.MisAtenciones(_this3.api.currentUser.ProveedorAgenteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe(res => {
        let indexAtenciones = 0;
        _this3.atenciones = res;
        let products = _this3.atenciones.sort((a, b) => b.IdAtencion - a.IdAtencion);
        console.log('las atenciones son ');
        console.dir(products);
        _this3.atenciones.forEach(item => {
          _this3.elCliente = item.Cliente;
          _this3.elColorEstado = item.ColorEstado;
        });
      }, /*#__PURE__*/function () {
        var _ref12 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          //alert(res.length)
          /*
          const alert = await this.alert.create({
            header: 'HELP',
            message: res.error.Message + 'Por cambio a producción',
            buttons: ['Ok']
                });
          await alert.present();
          */
        });
        return function (_x6) {
          return _ref12.apply(this, arguments);
        };
      }());
    })();
  }
  goBack() {
    localStorage.setItem('coberturas', JSON.stringify([]));
    this.clearIntervals();
    this.toastr.dismissToast();
    this.Torval();
    if (this.source == 2) {
      this.router.navigate(['./tabs/tab2']);
      return;
    }
    window.location.reload();
    //this.location.back();
    //this.router.navigate(['./tab1']);
  }

  centroDeImpresion() {
    localStorage.setItem('idAtencion', this.idAtencion);
    this.router.navigate(['./printer']);
  }
  getExpediente() {
    var _this4 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = true;
      _this4.api.Expediente(_this4.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        _this4.expediente = res;
        console.log('El expediente es ');
        console.dir(_this4.expediente);
        console.log('la zona es : ' + _this4.expediente[0].Zona);
        _this4.moneda = _this4.expediente[0].Moneda;
        //alert(this.moneda)
        if (_this4.moneda == null) {
          _this4.miMoneda = "LEMPIRAS";
        } else {
          _this4.miMoneda = _this4.moneda;
        }
        _this4.latitud = _this4.expediente[0].LatitudCliente;
        _this4.longitud = _this4.expediente[0].LongitudCliente;
        let direccionCabina = _this4.expediente[0].Direccion;
        localStorage.setItem('direccionCabina', direccionCabina);
        let fechaRegistro = _this4.expediente[0].FechaRegistro;
        _this4.formateadaSiniestro = 'Fecha : ' + fechaRegistro.toString().split('T')[0].toString() + ', Hora : ' + fechaRegistro.toString().split('T')[1].toString().split('.')[0];
        _this4.directionsService = new google.maps.DirectionsService();
        _this4.directionsDisplay = new google.maps.DirectionsRenderer();
        _this4.directionsDisplay.setMap(_this4.mapa);
        _this4.createMap(_this4.directionsService, _this4.directionsDisplay);
        _this4.elFiniquito = {
          NombreCliente: _this4.expediente[0].Cliente,
          Poliza: _this4.expediente[0].PolizaExterna,
          RefAtencionId: _this4.idAtencion,
          Marca: _this4.expediente[0].Marca,
          Modelo: _this4.expediente[0].Modelo,
          Anio: _this4.expediente[0].Year,
          Placa: _this4.expediente[0].NumeroPlaca,
          Chasis: _this4.expediente[0].Chasis,
          Motor: _this4.expediente[0].Motor,
          // variables desde inputs
          NumeroReclamo: 'string',
          FechaDesde: "2023-11-14T19:55:55.849Z",
          FechaHasta: "2023-11-14T19:55:55.849Z",
          TipoCoberturaFicohsa: "string",
          NombreQuienRecibe: "string",
          IdentidadQuienRecibe: "string",
          NumeroCheque: "string",
          FechaDelCheque: "2023-11-14T19:55:55.849Z",
          ValorDelCheque: 0,
          NombreAFavor: "string",
          FechaFirma: _this4.fechaPie,
          FirmaCliente: "string" // Desde el canvas
        };

        let thisThing = {
          "NumeroReclamo": "string",
          "FechaDesde": "2024-07-12T01:05:45.677Z",
          "FechaHasta": "2024-07-12T01:05:45.677Z",
          "NombreCliente": "string",
          "TipoCoberturaFicohsa": "string",
          "FechaFirma": "2024-07-12T01:05:45.677Z",
          "FirmaCliente": "string",
          "NombreQuienRecibe": "string",
          "IdentidadQuienRecibe": "string",
          "NumeroCheque": "string",
          "FechaDelCheque": "2024-07-12T01:05:45.677Z",
          "ValorDelCheque": 0,
          "NombreAFavor": "string",
          "Poliza": "string",
          "RefAtencionId": 0,
          "Marca": "string",
          "Modelo": "string",
          "Anio": 0,
          "Placa": "string",
          "Chasis": "string",
          "Motor": "string"
        };
        localStorage.setItem('elFiniquito', JSON.stringify(_this4.elFiniquito));
        if (_this4.platform.is('android')) {
          if (_this4.expediente[0].Ciudad == null || _this4.expediente[0].Ciudad == '') {
            _this4.expediente[0].Ciudad = _this4.laLocalidad[0].locality;
          }
          if (_this4.expediente[0].Zona == null || _this4.expediente[0].Zona == '') {
            _this4.expediente[0].Zona = _this4.laLocalidad[0].subAdministrativeArea;
          }
          if (_this4.expediente[0].Direccion == null || _this4.expediente[0].Direccion == '') {
            _this4.expediente[0].Direccion = _this4.laLocalidad[0].subLocality;
          }
          if (_this4.expediente[0].DireccionDestino == null || _this4.expediente[0].DireccionDestino == '') {
            _this4.expediente[0].DireccionDestino = _this4.laLocalidad[0].administrativeArea;
          }
        }
        _this4.miExpediente = res[0];
        console.log("Este expediente es ");
        console.dir(_this4.miExpediente);
        //localStorage.setItem('elExpediente', JSON.stringify(this.miExpediente));
      }, /*#__PURE__*/function () {
        var _ref14 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.router.navigate(['./tabs']);
          const alert = yield _this4.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x7) {
          return _ref14.apply(this, arguments);
        };
      }());
    })();
  }
  listarAjustadores() {
    var _this5 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = true;
      _this5.api.Ajustadores(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this5.isLoading = false;
      }))).subscribe(res => {
        console.log(res);
        _this5.ajustadores = res;
      });
    })();
  }
  reasignarAjustador() {
    var _this6 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isLoading = true;
      const data = {
        IdAtencion: _this6.idAtencion,
        IdAgenteProveedor: _this6.idAgente
      };
      console.log(data);
      _this6.api.Reasignar(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this6.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref17 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res);
          _this6.asignacion = false;
          const alert = yield _this6.alert.create({
            header: 'HELP',
            message: 'La atención ' + _this6.idAtencion + ' fue reasignada con éxito.',
            buttons: [{
              text: 'Ok',
              role: 'cancel'
            }]
          });
          yield alert.present();
          _this6.router.navigate(['./tabs']);
        });
        return function (_x8) {
          return _ref17.apply(this, arguments);
        };
      }());
    })();
  }
  alertReasignar() {
    var _this7 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alert.create({
        header: 'HELP',
        message: '¿Está seguro de que desea reasignar? Una vez se reasignar al hacerlo esta no estara en tu lista.',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Si',
          handler: () => {
            _this7.asignacion = !_this7.asignacion;
          }
        }]
      });
      yield alert.present();
    })();
  }
  confirmar() {
    var _this8 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.message = "¿Está seguro de que desea aceptar la asignación?";
      _this8.position = "middle";
      _this8.class = "alertador";
      if (_this8.elColorEstado == 'green') {
        _this8.presentToast(_this8.message, _this8.position, _this8.class);
      } else {
        if (_this8.elColorEstado == 'red') {
          _this8.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
        } else {
          _this8.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
        }
      }
    })();
  }
  limpiarCache() {
    this.Torval();
    window.location.reload();
  }
  obtenerCacheCliente(AtencionId) {
    var _this9 = this;
    this.api.ObtenercacheCliente(AtencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref19 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Detalles de cache en ver expediente: " + res.length);
        console.dir(res);
        if (res) {
          let indexFlag = 'no tiene';
          let respuesta = '';
          let verificacion;
          let answer = '';
          /*
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            
            answer = answer + element;
            verificacion = answer.indexOf(indexFlag);
                    alert('El elemento es '+element+ ' y la palabra es '+answer+ ' y la verificacion es '+verificacion);
            console.log('El elemento es '+element+ ' y la palabra es '+answer+ ' y la verificacion es '+verificacion);
            console.dir(element)
                    respuesta = respuesta+element;
            
            if (index== (res.length-1)) {
              verificacion = answer.indexOf(indexFlag);
              console.log('verificacion '+ verificacion)
              if (verificacion != -1) {
                this.esClienteCompleto = false;
              }
                      if (verificacion == -1 || verificacion == '-1') {
                this.esClienteCompleto = true;
              }
                      setTimeout(() => {
                //alert('El cliente completo es '+ this.esClienteCompleto);
              }, 600);
            }
          }
          */
          _this9.cacheCount = res.length;
          //alert('La cache tiene '+ this.cacheCount+ ' elementos, mas '+(this.cacheCount+1)+ ' evaluacion '+(this.cacheCount>0));
          if (_this9.cacheCount > 1) {
            _this9.esClienteCompleto = false;
          } else {
            _this9.esClienteCompleto = true;
          }
        } else {
          //this.esClienteCompleto = false;
        }
      });
      return function (_x9) {
        return _ref19.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref20 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.log('Nou');
        //this.esClienteCompleto = false;
        //this.cacheCount = 0;
      });
      return function (_x10) {
        return _ref20.apply(this, arguments);
      };
    }());
    setTimeout(() => {
      //alert(this.esClienteCompleto)
    }, 1000);
  }
  handleBack() {
    localStorage.setItem('coberturas', JSON.stringify([]));
    this.Torval();
    if (this.source == 2) {
      this.router.navigate(['./tabs/tab2']);
      return;
    }
    this.router.navigate(['./tabs/tab1'], {
      queryParams: {
        Id: this.idAtencion,
        Source: 1
      }
    });
  }
  goCliente() {
    //this.Torval();
    this.elColorEstado = localStorage.getItem('elColorEstado');
    //alert(this.elColorEstado)
    if (this.elColorEstado == 'green') {
      //this.presentToast(this.message, this.position, this.class);
      //alert(this.idAtencion)
      this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('fin');
        //alert('Ya')
      }))).subscribe(res => {
        console.dir(res.length);
        //alert(res.length)
        if (res.length > 0) {
          //this.Torval();
          this.clearIntervals();
          this.openModal = false;
          this.toastr.dismissToast();
          //this.myModal.dismiss();
          const navigateExtras = {
            state: {
              data: [{
                'forma': this.expediente
              }, {
                'latitud': this.latitud
              }, {
                'longitud': this.longitud
              }]
            }
          };
          //$('#clickButton').fadeOut('slow');
          //$('#trackButton').attr('style', 'border: none');
          //alert(navigateExtras.state.data[0].forma[0].Cliente);
          this.router.navigate(['./clientehn'], navigateExtras);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_9__('#clickButton').fadeIn('slow');
          //$('#trackButton').attr('style', 'border: 1px solid red');
          this.toastr.presentToastNoButtonsRed('Aun no has activado la geolocalización en vivo. Presiona el botón de ruta e intenta nuevamente tomar la atención.', 'top', 'ruta');
        }
        /**/
      });
    } else {}
    if (this.elColorEstado == 'red') {
      this.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
    if (this.elColorEstado == 'orange') {
      this.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
  }
  comenzarFormulario() {
    const navigateExtra = {
      state: {
        data: this.expediente
      }
    };
    this.router.navigate(['./mapa'], navigateExtra);
  }
  clientehond() {
    this.openModal = false;
    this.myModal.dismiss();
    const navigateExtra = {
      state: {
        data: this.expediente
      }
    };
    this.router.navigate(['./mapa'], navigateExtra);
  }
  modalDismissListener() {
    //alert('Aheyyyy')
  }
  ajustadorHn() {
    this.elColorEstado = localStorage.getItem('elColorEstado');
    //alert(this.elColorEstado)
    this.Torval();
    if (this.elColorEstado == 'green') {
      this.openModal = false;
      this.myModal.dismiss();
      this.router.navigate(['./ajustadorhn']);
    } else {}
    if (this.elColorEstado == 'red') {
      this.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
    if (this.elColorEstado == 'orange') {
      this.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
  }
  getCambiarEstado(estado) {
    var _this10 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.openModal = true;
      _this10.isLoading = true;
      const data = {
        id: _this10.expediente[0].Id,
        estado: estado
      };
      _this10.api.cambiarEstadoOrden(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this10.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        if (estado === 8) {
          _this10.formulario = true;
        }
        if (estado === 9) {
          _this10.router.navigate(['./tabs']);
        }
      }, /*#__PURE__*/function () {
        var _ref23 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this10.router.navigate(['./tabs']);
          const alert = yield _this10.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x11) {
          return _ref23.apply(this, arguments);
        };
      }());
    })();
  }
  grua() {
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    this.call.callNumber('22802886', true).then(res => console.log('Llamada realizada', res)).catch(err => console.log('Error Realizando la llamada', err));
  }
  rechazar() {
    var _this11 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alert.create({
        header: 'HELP',
        cssClass: 'ion-alerta',
        message: '¿Está seguro de que desea rechazar esta orden?',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Si',
          handler: () => {
            _this11.getCambiarEstado(9);
          }
        }]
      });
      yield alert.present();
    })();
  }
  cerrarModal() {
    this.myModal.dismiss();
  }
  presentToast(message, position, clase) {
    var _this12 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this12.toaster.dismiss();
      }
      const toast = yield _this12.toaster.create({
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
            if (!_this12.leido) {
              _this12.toaster;
            } else {}
            _this12.getCambiarEstado(6);
          }
        }]
      });
      yield toast.present();
    })();
  }
  getCountry() {
    var _this13 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this13.platform.is('android')) {
        _this13.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
        _this13.miLocalidad = JSON.stringify(_this13.laLocalidad);
        //this.latitud = this.laLocalidad[0].latitude;
        //this.longitud = this.laLocalidad[0].longitude;
        localStorage.setItem('expedienteLatitud', _this13.latitud);
        localStorage.setItem('expedienteLongitud', _this13.longitud);
        // alert(this.latitud+', '+this.longitud)
        _this13.miPais = _this13.laLocalidad[0].countryCode;
        localStorage.setItem('codigoPais', _this13.miPais);
        _this13.miPaisLocalidad = _this13.laLocalidad[0].locality;
        _this13.miPaisNombre = _this13.laLocalidad[0].countryName;
        localStorage.setItem('nombrePais', _this13.miPaisNombre);
        _this13.miPaisLocalidadSub = _this13.laLocalidad[0].subLocality;
        localStorage.setItem('latitud', _this13.laLocalidad[0].latitude);
        localStorage.setItem('longitud', _this13.laLocalidad[0].longitude);
        _this13.isLoading = false;
        if (_this13.miPais == "HN") {
          _this13.miPaisBandera = '../../assets/img/flag-hn.png';
        } else if (_this13.miPais == "GT") {
          _this13.miPaisBandera = '../../assets/img/flag-gt.png';
        }
        _this13.isLoading = false;
      } else {
        _this13.coordinates = localStorage.getItem('coordinates');
        _this13.miPaisBandera = '../../assets/img/flag-hn.png';
        _this13.latitud = _this13.laLocalidad[0].latitude;
        _this13.longitud = _this13.laLocalidad[0].longitude;
        //alert(this.latitud)
        _this13.miPais = 'HN';
        localStorage.setItem('codigoPais', _this13.miPais);
        _this13.miPaisLocalidad = 'Tegucigalpa';
        _this13.miPaisNombre = 'Honduras';
        localStorage.setItem('nombrePais', _this13.miPaisNombre);
        _this13.miPaisLocalidadSub = 'Colonia Hato de Enmedio';
        localStorage.setItem('latitud', _this13.latitud);
        localStorage.setItem('longitud', _this13.longitud);
        _this13.isLoading = false;
      }
    })();
  }
  createMap(directionsService, directionsDisplay) {
    var _this14 = this;
    this.coordsLat = localStorage.getItem('coords-latitud');
    //let latitud = localStorage.getItem('expedienteLatitud');
    jquery__WEBPACK_IMPORTED_MODULE_9__('#mapFooter').fadeIn('slow');
    setTimeout( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let coodernadas;
      //alert(this.latitud)
      coodernadas = {
        lat: _this14.latitud,
        lng: _this14.longitud
      };
      localStorage.setItem('clienteLatitud', _this14.latitud);
      localStorage.setItem('clienteLongitud', _this14.longitud);
      console.log("Las coordenadas");
      console.dir(coodernadas);
      let mapOptions = {
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };
      _this14.mapa = new google.maps.Map(document.getElementById("mapExpediente"), mapOptions);
      if (_this14.mapa) {
        _this14.mapa.addListener("click", event => {
          let nuevaLatitud = event.latLng.lat();
          let nuevaLongitud = event.latLng.lng();
          localStorage.setItem('coords-latitud', nuevaLatitud);
          localStorage.setItem('coords-longitud', nuevaLongitud);
          _this14.setCrashIconNew(nuevaLatitud, nuevaLongitud);
          _this14.geoloc = navigator.geolocation;
          _this14.geoloc.getCurrentPosition(pos => {
            _this14.proveedorLatitud = pos.coords.latitude;
            _this14.proveedorLongitud = pos.coords.longitude;
            if (_this14.proveedorLatitud != undefined && _this14.proveedorLatitud != null) {
              _this14.coordenadasAju = {
                lat: _this14.proveedorLatitud,
                lng: _this14.proveedorLongitud
              };
            } else {
              _this14.coordenadasAju = coodernadas;
            }
            let coordenadas;
            setTimeout(() => {
              coordenadas = {
                lat: nuevaLatitud,
                lng: nuevaLongitud
              };
              console.log('coordenadas de ');
              console.dir(coordenadas);
              console.dir(_this14.coordenadasAju);
              //this.displayDirectionInit(this.directionsService,this.directionsDisplay, parseFloat(nuevaLatitud), parseFloat(nuevaLongitud), this.latitudAju, this.longitudAju);  
              directionsService.route({
                origin: _this14.coordenadasAju,
                destination: coordenadas,
                travelMode: 'DRIVING'
              }, (response, status) => {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                  jquery__WEBPACK_IMPORTED_MODULE_9__('#botonRuta').click();
                  _this14.rutaInicial = response.routes[0];
                  _this14.pointsArray = response.routes[0].legs[0];
                  _this14.routeString = JSON.stringify(response);
                }
              });
            }, 1000);
          });
          const jsonPositionCorreccion = {
            Latitud: nuevaLatitud,
            Longitud: nuevaLongitud,
            RefAtencionId: _this14.idAtencion,
            RefUsuarioId: _this14.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_CORRECCION',
            Contador: 0
          };
          _this14.api.setPositionNRoute(jsonPositionCorreccion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log('fin');
          }))).subscribe(res => {}, /*#__PURE__*/function () {
            var _ref26 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const alert = yield _this14.alert.create({
                header: 'HELP',
                message: res.error.Message,
                buttons: ['Ok']
              });
              yield alert.present();
            });
            return function (_x12) {
              return _ref26.apply(this, arguments);
            };
          }());
        });
      }
      _this14.directionsService = new google.maps.DirectionsService();
      _this14.directionsDisplay = new google.maps.DirectionsRenderer();
      _this14.directionsDisplay.setMap(_this14.mapa);
      _this14.isTracking = true;
      _this14.isLoadingData = true;
      _this14.isTrack = true;
      setTimeout(() => {
        _this14.displayDirectionInit(_this14.directionsService, _this14.directionsDisplay, _this14.latitud, _this14.longitud, _this14.latitud, _this14.longitud);
      }, 1000);
      setTimeout(() => {
        _this14.mapa.setZoom(18);
      }, 2500);
    }), 2000);
  }
  trazaRuta(directionsService, directionsDisplay) {
    var _this15 = this;
    this.isLoading = true;
    jquery__WEBPACK_IMPORTED_MODULE_9__('#botonCerrarModal').click();
    this.bounds = new google.maps.LatLngBounds();
    this.geoloc = navigator.geolocation;
    console.dir(this.geoloc);
    this.geoloc.getCurrentPosition(pos => {
      this.proveedorLatitud = pos.coords.latitude;
      this.proveedorLongitud = pos.coords.longitude;
      console.log('proveedorLatitud ' + this.proveedorLatitud);
      //alert('Aca 1 proveedorLatitud ' + this.proveedorLatitud);
      const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45, 45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      let coordenadas; // = {lat: this.latitud, lng: this.longitud}
      this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_CORRECCION').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('getting corrected route');
        //alert('Ya')
      }))).subscribe(res => {
        console.dir(res.length);
        if (res.length > 0) {
          console.log('La ruta corregida debería ser ');
          console.dir(res);
          this.coordenadasDeCorreccion = res.sort((a, b) => b.FechaRegistro - a.FechaRegistro);
          let fixedCoords = this.coordenadasDeCorreccion[res.length - 1];
          //console.dir(this.coordenadasDeCorreccion[res.length-1])
          coordenadas = {
            lat: parseFloat(fixedCoords.Latitud),
            lng: parseFloat(fixedCoords.Longitud)
          };
          //alert('Ya existen coordenadas corregidas de este proveedor')
        } else {
          coordenadas = {
            lat: this.latitud,
            lng: this.longitud
          };
        }
      });
      let coordenadasAju = {
        lat: this.proveedorLatitud,
        lng: this.proveedorLongitud
      };
      this.ajuMarker = new google.maps.Marker({
        map: this.mapa,
        position: coordenadasAju,
        icon: ajuIcon
      });
      this.ajuMarker.setMap(this.mapa);
      setTimeout(() => {
        console.log('Ok pues ');
        console.dir(coordenadas);
        directionsService.route({
          origin: coordenadasAju,
          destination: coordenadas,
          travelMode: 'DRIVING'
        }, (response, status) => {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            this.bounds.extend(this.ajuMarker.getPosition());
            this.mapa.fitBounds(this.bounds);
            this.isLoading = false;
            const jsonProviderPosition = {
              Latitud: this.proveedorLatitud,
              Longitud: this.proveedorLongitud,
              RefUsuarioId: this.api.currentUser.ProveedorAgenteId
            };
            this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('fin');
              _this15.isLoading = false;
              //alert('Ya')
            }))).subscribe(res => {
              console.dir(res.length);
              if (res.length > 0) {
                //alert('Ya existen coordenadas iniciales de este proveedor')
              } else {
                this.api.setAjuPosition(jsonProviderPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  console.log('fin');
                  //alert('Ya')
                }))).subscribe(res => {
                  //alert('setPositionNRoute')
                  const jsonPosition = {
                    Latitud: this.proveedorLatitud,
                    Longitud: this.proveedorLongitud,
                    RefAtencionId: this.idAtencion,
                    RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
                    Tipo: 'AJU_INI',
                    Contador: 0
                  };
                  this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    console.log('fin');
                  }))).subscribe(res => {
                    //alert('setPositionNRoute hecho')
                  }, /*#__PURE__*/function () {
                    var _ref31 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                      const alert = yield _this15.alert.create({
                        header: 'HELP',
                        message: res.error.Message,
                        buttons: ['Ok']
                      });
                      yield alert.present();
                    });
                    return function (_x13) {
                      return _ref31.apply(this, arguments);
                    };
                  }());
                }, /*#__PURE__*/function () {
                  var _ref32 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                    const alert = yield _this15.alert.create({
                      header: 'HELP',
                      message: res.error.Message,
                      buttons: ['Ok']
                    });
                    yield alert.present();
                  });
                  return function (_x14) {
                    return _ref32.apply(this, arguments);
                  };
                }());
              }
            });
          }
        });
      }, 1000);
      setTimeout(() => {
        this.trackRoute();
      }, 3000);
    });
    //this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
  }

  trackRoute() {
    var _this16 = this;
    this.geoloc = navigator.geolocation;
    this.watcher = this.geoloc.watchPosition(this.savePositionNow, this.positionError, {
      enableHighAccuracy: true
    });
    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }
    this.trackInterval = setInterval(() => {
      let latMovi = localStorage.getItem('moveLatitide');
      let lonMovi = localStorage.getItem('moveLongitude');
      if (latMovi) {
        console.log(latMovi);
        let coordsAju = {
          lat: parseFloat(latMovi),
          lng: parseFloat(lonMovi)
        };
        localStorage.setItem('moveCoords', JSON.stringify(coordsAju));
        const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
        const ajuIcon = {
          url: ajuIconUrl,
          color: 'orange',
          scaledSize: new google.maps.Size(45, 45),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        };
        if (this.marcadorAju) {
          this.marcadorAju.setMap(null);
        }
        this.marcadorAju = new google.maps.Marker({
          position: coordsAju,
          map: this.mapa,
          icon: ajuIcon
        });
        this.marcadorAju.setPosition(coordsAju);
        if (coordsAju) {
          const jsonPosition = {
            Latitud: latMovi,
            Longitud: lonMovi,
            RefAtencionId: this.idAtencion,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_MOV',
            Contador: 0
          };
          this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log('fin');
          }))).subscribe(res => {}, /*#__PURE__*/function () {
            var _ref34 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const alert = yield _this16.alert.create({
                header: 'HELP',
                message: res.error.Message,
                buttons: ['Ok']
              });
              yield alert.present();
            });
            return function (_x15) {
              return _ref34.apply(this, arguments);
            };
          }());
        }
      }
    }, 60000);
  }
  savePositionNow(pos) {
    console.log('Las nuevas coordenadas en tracking');
    console.dir(pos);
    localStorage.setItem('moveLatitide', pos.coords.latitude);
    localStorage.setItem('moveLongitude', pos.coords.longitude);
  }
  trackONCache() {
    var _this17 = this;
    //alert('Voy a crear el otro tipo de mapa')
    this.toastr.dismissToast();
    //$('#clickButton').fadeOut('slow');
    this.isTracking = true;
    this.isLoadingData = true;
    this.Torval();
    this.isTrack = true;
    this.latitudAju = localStorage.getItem('laLatitud');
    this.longitudAju = localStorage.getItem('laLongitud');
    //alert(this.latitudAju)
    const jsonAjuPosition = {
      Latitud: parseFloat(this.latitudAju),
      Longitud: parseFloat(this.longitudAju),
      RefUsuarioId: this.api.currentUser.ProveedorAgenteId
    };
    // Confirmar si existen coordenadas por esta atención
    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fin');
      _this17.isLoading = false;
      //alert('Ya')
    }))).subscribe(res => {
      console.dir(res.length);
      if (res.length > 0) {
        //alert('Ya existen coordenadas iniciales de ajustador')
      } else {
        this.api.setAjuPosition(jsonAjuPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('fin');
          //alert('Ya')
        }))).subscribe(res => {
          //alert('setPositionNRoute')
          const jsonPosition = {
            Latitud: parseFloat(this.latitudAju),
            Longitud: parseFloat(this.longitudAju),
            RefAtencionId: this.idAtencion,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_INI',
            Contador: 0
          };
          this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log('fin');
          }))).subscribe(res => {
            //alert('setPositionNRoute hecho')
          }, /*#__PURE__*/function () {
            var _ref38 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const alert = yield _this17.alert.create({
                header: 'HELP',
                message: res.error.Message,
                buttons: ['Ok']
              });
              yield alert.present();
            });
            return function (_x16) {
              return _ref38.apply(this, arguments);
            };
          }());
        }, /*#__PURE__*/function () {
          var _ref39 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this17.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x17) {
            return _ref39.apply(this, arguments);
          };
        }());
      }
    });
    //this.distancia = this.getDistanceFromLatLonInKm(this.latitud, this.longitud, this.latitudAju, this.longitudAju);
    //localStorage.setItem('distanciaInicial', this.distancia);
    let mapOptions = {
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    };
    this.mapa = new google.maps.Map(document.getElementById("mapExpediente"), mapOptions);
    //this.initAutocomplete();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.mapa);
    if (this.mapa) {
      this.mapa.addListener("click", event => {
        let nuevaLatitud = event.latLng.lat();
        let nuevaLongitud = event.latLng.lng();
        localStorage.setItem('coords-latitud', nuevaLatitud);
        localStorage.setItem('coords-longitud', nuevaLongitud);
        this.setCrashIconNew(nuevaLatitud, nuevaLongitud);
        const jsonPosition = {
          Latitud: nuevaLatitud,
          Longitud: nuevaLongitud,
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_CORRECCION',
          Contador: 0
        };
        this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('fin');
        }))).subscribe(res => {}, /*#__PURE__*/function () {
          var _ref41 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this17.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x18) {
            return _ref41.apply(this, arguments);
          };
        }());
        setTimeout(() => {
          this.displayDirectionInit(this.directionsService, this.directionsDisplay, parseFloat(nuevaLatitud), parseFloat(nuevaLongitud), this.latitudAju, this.longitudAju);
        }, 1000);
        //alert('Hey map '+event.latLng.lat())
      });
    }

    setTimeout(() => {
      this.displayDirectionInit(this.directionsService, this.directionsDisplay, parseFloat(this.coordsLat), parseFloat(this.coordsLon), this.latitudAju, this.longitudAju);
    }, 1000);
    this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
    if (this.rutaInicial) {
      for (let index = 0; index < this.rutaInicial.length; index++) {
        const element = this.rutaInicial[index];
        console.log('Punto de ruta ' + element);
      }
    } else {}
    this.geoloc = navigator.geolocation;
    this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {
      enableHighAccuracy: true
    });
    //this.mapa.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
    this.anyInterval = this.trackInterval;
    this.trackInterval = setInterval(() => {
      this.moveCoords = JSON.parse(localStorage.getItem('moveCoords'));
      this.moverCoordenadas = localStorage.getItem('moveCoords');
      this.moveLatitud = localStorage.getItem('moveLatitide');
      this.moveLongitud = localStorage.getItem('moveLongitude');
      this.diferencia = localStorage.getItem('diferencia');
      //this.distanciaFinal = localStorage.getItem('distancia');
      this.distanciaFinal = localStorage.getItem('dist');
      this.distanciaInicialMetros = this.distancia * 1000;
      this.distanciaMetros = parseFloat(localStorage.getItem('distM')); //parseFloat(this.distanciaFinal) * 1000;
      let calculo = this.distanciaMetros + 5;
      //alert('distancia en metros es '+calculo)
      if (this.distanciaMetros < 6) {
        this.mapInfoText = 'Has llegado al lugar del siniestro.';
        this.isArrived = true;
        // Coordenadas: {{moverCoordenadas}} <br> Distancia: {{distanciaFinal}}
        // Has llegado al lugar del siniestro
        //this.toastr.presentToastArrival('Has llegado a tu destino', 'top', 'tracking');
      } else {
        this.isArrived = false;
        this.mapInfoText = 'Coordenadas: ' + this.moverCoordenadas + ' | ' + 'Distancia: ' + this.distanciaFinal;
      }
      this.distanciaConvert = parseFloat(this.distanciaFinal).toFixed(2);
      this.distanciaString = this.distanciaConvert.toString();
      this.diferenciaMetros = Math.round(this.distanciaInicialMetros - this.distanciaMetros);
      this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
      this.mediaLatitud = localStorage.getItem('mediaLatitud');
      this.mediaLongitud = localStorage.getItem('mediaLongitud');
      this.moveMarker(this.moveCoords, this.moveLatitud, this.moveLongitud);
      this.counter = 1;
      if (this.moveCoords) {
        console.log("Eeeeeeeexitoooooo" + ', ' + this.moveLatitud + ', ' + this.moveLongitud + ', ' + this.counter);
        const jsonPosition = {
          Latitud: parseFloat(this.moveLatitud),
          Longitud: parseFloat(this.moveLongitud),
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_MOV',
          Contador: 0
        };
        this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('fin');
        }))).subscribe(res => {}, /*#__PURE__*/function () {
          var _ref43 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this17.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x19) {
            return _ref43.apply(this, arguments);
          };
        }());
      }
    }, 10000);
    /**/
  }

  trackON() {
    var _this18 = this;
    this.toastr.dismissToast();
    //$('#clickButton').fadeOut('slow');
    this.isTracking = true;
    this.isLoadingData = true;
    //this.Torval();
    this.isTrack = true;
    this.latitudAju = localStorage.getItem('laLatitud');
    this.longitudAju = localStorage.getItem('laLongitud');
    const jsonAjuPosition = {
      Latitud: parseFloat(this.latitudAju),
      Longitud: parseFloat(this.longitudAju),
      RefUsuarioId: this.api.currentUser.ProveedorAgenteId
    };
    // Confirmar si existen coordenadas por esta atención
    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fin');
      _this18.isLoading = false;
      //alert('Ya')
    }))).subscribe(res => {
      console.dir(res.length);
      if (res.length > 0) {
        //alert('Ya existen coordenadas iniciales de ajustador')
      } else {
        this.api.setAjuPosition(jsonAjuPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('fin');
          //alert('Ya')
        }))).subscribe(res => {
          //alert('setPositionNRoute')
          const jsonPosition = {
            Latitud: parseFloat(this.latitudAju),
            Longitud: parseFloat(this.longitudAju),
            RefAtencionId: this.idAtencion,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_INI',
            Contador: 0
          };
          this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log('fin');
          }))).subscribe(res => {
            //alert('setPositionNRoute hecho')
          }, /*#__PURE__*/function () {
            var _ref47 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const alert = yield _this18.alert.create({
                header: 'HELP',
                message: res.error.Message,
                buttons: ['Ok']
              });
              yield alert.present();
            });
            return function (_x20) {
              return _ref47.apply(this, arguments);
            };
          }());
        }, /*#__PURE__*/function () {
          var _ref48 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this18.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x21) {
            return _ref48.apply(this, arguments);
          };
        }());
        /**/
      }
    });
    //this.distancia = this.getDistanceFromLatLonInKm(this.latitud, this.longitud, this.latitudAju, this.longitudAju);
    //localStorage.setItem('distanciaInicial', this.distancia);
    let mapOptions = {
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    };
    this.mapa = new google.maps.Map(document.getElementById("mapExpediente"), mapOptions);
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.mapa);
    if (this.mapa) {
      this.mapa.addListener("click", event => {
        let nuevaLatitud = event.latLng.lat();
        let nuevaLongitud = event.latLng.lng();
        localStorage.setItem('coords-latitud', nuevaLatitud);
        localStorage.setItem('coords-longitud', nuevaLongitud);
        this.setCrashIconNew(nuevaLatitud, nuevaLongitud);
      });
    }
    this.geoloc = navigator.geolocation;
    this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {
      enableHighAccuracy: true
    });
    //this.mapa.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
    this.anyInterval = this.trackInterval;
    this.trackInterval = setInterval(() => {
      this.moveCoords = JSON.parse(localStorage.getItem('moveCoords'));
      this.moverCoordenadas = localStorage.getItem('moveCoords');
      this.moveLatitud = localStorage.getItem('moveLatitide');
      this.moveLongitud = localStorage.getItem('moveLongitude');
      this.diferencia = localStorage.getItem('diferencia');
      //this.distanciaFinal = localStorage.getItem('distancia');
      this.distanciaFinal = localStorage.getItem('dist');
      this.distanciaInicialMetros = this.distancia * 1000;
      this.distanciaMetros = parseFloat(localStorage.getItem('distM')); //parseFloat(this.distanciaFinal) * 1000;
      let calculo = this.distanciaMetros + 5;
      //alert('distancia en metros es '+calculo)
      if (this.distanciaMetros < 6) {
        this.mapInfoText = 'Has llegado al lugar del siniestro.';
        this.isArrived = true;
        // Coordenadas: {{moverCoordenadas}} <br> Distancia: {{distanciaFinal}}
        // Has llegado al lugar del siniestro
        //this.toastr.presentToastArrival('Has llegado a tu destino', 'top', 'tracking');
      } else {
        this.isArrived = false;
        this.mapInfoText = 'Coordenadas: ' + this.moverCoordenadas + ' | ' + 'Distancia: ' + this.distanciaFinal;
      }
      this.distanciaConvert = parseFloat(this.distanciaFinal).toFixed(2);
      this.distanciaString = this.distanciaConvert.toString();
      this.diferenciaMetros = Math.round(this.distanciaInicialMetros - this.distanciaMetros);
      this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
      this.mediaLatitud = localStorage.getItem('mediaLatitud');
      this.mediaLongitud = localStorage.getItem('mediaLongitud');
      this.moveMarker(this.moveCoords, this.moveLatitud, this.moveLongitud);
      this.counter = 1;
      if (this.moveCoords) {
        console.log("Eeeeeeeexitoooooo" + ', ' + this.moveLatitud + ', ' + this.moveLongitud + ', ' + this.counter);
        const jsonPosition = {
          Latitud: parseFloat(this.moveLatitud),
          Longitud: parseFloat(this.moveLongitud),
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_MOV',
          Contador: 0
        };
        this.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.log('fin');
        }))).subscribe(res => {}, /*#__PURE__*/function () {
          var _ref50 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const alert = yield _this18.alert.create({
              header: 'HELP',
              message: res.error.Message,
              buttons: ['Ok']
            });
            yield alert.present();
          });
          return function (_x22) {
            return _ref50.apply(this, arguments);
          };
        }());
      }
    }, 10000);
  }
  goFotos() {
    this.Torval();
    this.router.navigate(['./fotoshn']);
  }
  displayDirectionInit(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    var _this19 = this;
    let coordenadas;
    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_CORRECCION').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('getting corrected route');
      _this19.isLoading = false;
      //alert('Ya')
    }))).subscribe(res => {
      console.dir(res.length);
      if (res.length > 0) {
        console.log('La ruta corregida debería ser ');
        console.dir(res);
        this.coordenadasDeCorreccion = res.sort((a, b) => b.FechaRegistro - a.FechaRegistro);
        let fixedCoords = this.coordenadasDeCorreccion[res.length - 1];
        //console.dir(this.coordenadasDeCorreccion[res.length-1])
        coordenadas = {
          lat: parseFloat(fixedCoords.Latitud),
          lng: parseFloat(fixedCoords.Longitud)
        };
        //alert('Ya existen coordenadas corregidas de este proveedor')
      } else {
        coordenadas = {
          lat: latI,
          lng: lngI
        };
      }
    });
    //coordenadas = {lat: latI, lng: lngI}
    //this.setCrashIconInit();
    setTimeout(() => {
      console.dir(coordenadas);
      directionsService.route({
        origin: coordenadas,
        destination: coordenadas,
        travelMode: 'DRIVING'
      }, (response, status) => {
        // let distancia = response.trips[0].routes[0].distance.value;
        //alert('directionsDisplay.setDirections(response)'+ response.legs.length)
        console.log('la ruta inicial es ');
        // console.log('La distancia es '+ distancia)
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          let title = 'LUGAR DEL SINIESTRO : ';
          let subtitle = this.expediente[0].Ciudad + ', ' + this.expediente[0].Direccion;
          const contentString = '<div id="dInfoWindow">' +
          //'<button id="acceptButton" style="padding:9px;background:blue;color:white;float:right;"> Aceptar' +
          //"</button>" +
          '<h5 id="firstHeading" class="firstHeading">' + title + '</h5>' + '<div id="bodyContent">' + "<p><b>" + subtitle + "</b>.</p>" + "</div>" + "</div>";
          var infowindow2 = new google.maps.InfoWindow();
          infowindow2.setContent(contentString);
          infowindow2.setPosition(coordenadas);
          infowindow2.open(this.mapa);
          setTimeout(() => {
            let miElemento = document.getElementById('dInfoWindow'); //document.querySelectorAll('[role="dialog"]');
            console.dir(miElemento);
            jquery__WEBPACK_IMPORTED_MODULE_9__('#dInfoWindow').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_9__('#open-modal-info').click();
              setTimeout(() => {
                infowindow2.close();
                //$('.ion-accordion-toggle-icon').eq(2).click();
              }, 300);
            });
          }, 3000);
          /*
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "Lugar del siniesstro",
            position: coordenadas
          });
                        infowindow.open({
            anchor: coordenadas
          });
          */
          //this.pointsArray =  //response.routes[0].legs[0];
          let dist = response.routes[0].legs[0].distance.text;
          let distM = response.routes[0].legs[0].distance.value; //(response.routes[0].legs[0].distance)*1000;
          localStorage.setItem('dist', dist);
          localStorage.setItem('distM', distM.toString());
          this.isLoadingData = false;
        }
      });
    }, 1000);
  }
  displayDirection(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };
    let coordenadas;
    coordenadas = {
      lat: latI,
      lng: lngI
    };
    let coordenadasAju = {
      lat: parseFloat(latF),
      lng: parseFloat(lngF)
    };
    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });
    this.ajuMarker.setMap(this.mapa);
    this.setCrashIcon();
    directionsService.route({
      origin: coordenadasAju,
      destination: coordenadas,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        //directionsDisplay.setDirections(response);
        this.rutaInicial = response.routes[0];
        this.pointsArray = response.routes[0].legs[0];
        this.routeString = JSON.stringify(response);
        //alert(this.pointsArray.length)
        localStorage.setItem('rutaInicial', JSON.stringify(this.rutaInicial));
        localStorage.setItem('routeString', JSON.stringify(this.routeString));
        this.puntos = JSON.stringify(this.rutaInicial);
        //this.mapa.setZoom(10);
      }
    });
  }

  setCrashIcon() {
    let coordenadas;
    coordenadas = {
      lat: this.latitud,
      lng: this.longitud
    };
    let ii = 0;
    let tiempo;
    tiempo = this.randomTimer(0, 1);
    this.anyInterval = this.firstInterval;
    this.firstInterval = setInterval(() => {
      tiempo = this.randomTimer(0, 1);
      const crashIconUrl = _environments_mapas__WEBPACK_IMPORTED_MODULE_8__.iconColors[3].url;
      const crashIcon = {
        url: crashIconUrl,
        color: 'green',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      this.crashMarker = new google.maps.Marker({
        map: this.mapa,
        position: coordenadas,
        icon: crashIcon
      });
      this.crashMarker.setMap(this.mapa);
      if (ii == 3) {
        ii = 0;
      } else {
        ii++;
      }
    }, 200);
  }
  setCrashIconNew(lat, lon) {
    let coordenadas;
    let markersCount;
    let tempMark;
    coordenadas = {
      lat: lat,
      lng: lon
    };
    this.anyInterval = this.firstInterval;
    const crashIconUrl = _environments_mapas__WEBPACK_IMPORTED_MODULE_8__.iconColors[3].url;
    const crashIcon = {
      url: crashIconUrl,
      color: 'green',
      draggable: true,
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 60)
    };
    this.crashMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadas,
      icon: crashIcon
    });
    this.crashMarker.setMap(this.mapa);
    this.newMarkers.push(this.crashMarker);
    markersCount = this.newMarkers.length;
    for (let index = 0; index < markersCount; index++) {
      //const element = this.newMarkers[index];
      //element.setMap(null);
      //console.dir(element, 'el nuevo marcador')
      if (markersCount > 1) {
        if (index != markersCount - 1) {
          this.newMarkers[index].setMap(null);
        }
      }
    }
    this.mapa.panTo(coordenadas);
    this.mapa.setCenter(coordenadas);
    this.mapa.setZoom(23);
    setTimeout(() => {
      this.mapa.setCenter(coordenadas);
      this.mapa.setZoom(18);
    }, 3000);
  }
  randomTimer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
  }
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // this.deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  testItOut() {}
  goAudience() {
    this.Torval();
    this.clearIntervals();
    if (this.myModal) {
      this.myModal.dismiss();
      this.openModal = false;
    }
    if (this.toastr) {
      this.toastr.dismissToast();
    }
    const navigateExtras = {
      state: {
        data: [{
          'forma': this.expediente
        }, {
          'idAtencion': this.idAtencion
        }]
      }
    };
    this.router.navigate(['./prepare-audience'], navigateExtras);
  }
  goAudienceNo() {
    this.Torval();
    this.clearIntervals();
    if (this.myModal) {
      this.myModal.dismiss();
      this.openModal = false;
    }
    if (this.toastr) {
      this.toastr.dismissToast();
    }
    this.router.navigate(['./prepare-audience']);
  }
  goPrinter() {
    this.Torval();
    this.clearIntervals();
    if (this.myModal) {
      this.myModal.dismiss();
      this.openModal = false;
    }
    if (this.toastr) {
      this.toastr.dismissToast();
    }
    this.router.navigate(['./printer']);
  }
  savePosition(pos) {
    //alert('savePosition'+ pos.coords.longitude)
    var R = 6371;
    console.log('GPS posicion actual');
    console.dir(pos);
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };
    let latitud = localStorage.getItem('clienteLatitud');
    let longitud = localStorage.getItem('clienteLongitud');
    //alert('La latitud '+latitud)
    if (pos) {
      //$("#positionBadge").text('latitud: '+pos.coords.latitude+', longitud: '+pos.coords.longitude);
      let coordsAju = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      //this.directionsService = new google.maps.DirectionsService;
      //this.directionsDisplay = new google.maps.DirectionsRenderer;
      //this.directionsDisplay.setMap(this.mapa);
      localStorage.setItem('moveCoords', JSON.stringify(coordsAju));
      localStorage.setItem('moveLatitide', pos.coords.latitude);
      localStorage.setItem('moveLongitude', pos.coords.longitude);
      var dLat = (latitud - pos.coords.latitude) * (Math.PI / 180); // this.deg2rad below
      var dLon = (longitud - pos.coords.longitude) * (Math.PI / 180);
      //alert(dLat);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(pos.coords.latitude * (Math.PI / 180)) * Math.cos(latitud * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distancia = R * c;
      var xDist = latitud - pos.coords.latitude;
      var yDist = longitud - pos.coords.longitude;
      var dist = Math.sqrt(xDist * xDist + yDist * yDist);
      let len = distancia / 2;
      var fractionOfTotal = len / dist;
      let mediaLatitud = (latitud + pos.coords.latitude) / 2;
      let mediaLongitud = (longitud + pos.coords.longitude) / 2;
      let mediaLatitude = pos.coords.latitude + xDist * fractionOfTotal;
      let mediaLongitude = pos.coords.longitude + yDist * fractionOfTotal;
      //      alert((mediaLatitude+3) +', '+mediaLongitude)
      localStorage.setItem('mediaLatitud', mediaLatitude + 3);
      localStorage.setItem('mediaLongitud', mediaLongitude);
      let distanciaInicial = localStorage.getItem('distanciaInicial');
      let diferencia = distanciaInicial - distancia;
      localStorage.setItem('diferencia', diferencia);
      localStorage.setItem('distancia', distancia.toString());
      const elementStatus = document.getElementById("statusFlag");
      const elementArrow = document.getElementById("statusArrow");
      ///alert(this.coordsLat+', '+this.coordsLon)
      this.displayDirection(this.directionsService, this.directionsDisplay, latitud, longitud, pos.coords.latitude, pos.coords.longitude);
      if (diferencia == 0) {
        elementStatus.setAttribute('style', 'background:#FDCF49;border-radius:10px');
        elementArrow.setAttribute('name', 'chevron-expand');
        elementArrow.setAttribute('style', 'color:#FDCF49;font-weight: bolder');
      } else if (diferencia > 0) {
        if (distanciaInicial > distancia) {
          elementStatus.setAttribute('style', 'background:#90EE90;border-radius:10px');
          elementArrow.setAttribute('name', 'chevron-back');
          elementArrow.setAttribute('style', 'color:#90EE90;font-weight: bolder');
        } else {
          elementStatus.setAttribute('style', 'background:#F32837;border-radius:10px');
          elementArrow.setAttribute('name', 'chevron-forward');
          elementArrow.setAttribute('style', 'color:#F32837;font-weight: bolder');
        }
      }
    }
  }
  positionError(err) {
    //alert(`ERROR ${err.code}: ${err.message}`);
  }
  moveMarker(location, mLat, mLng) {
    this.bounds = new google.maps.LatLngBounds();
    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }
    if (this.marcadorAju) {
      this.marcadorAju.setPosition(new google.maps.LatLng(mLat, mLng));
      //this.mapa.setZoom(16);
      this.mapa.panTo(new google.maps.LatLng(mLat, mLng));
      this.bounds.extend(this.marcadorAju.getPosition());
      this.mapa.fitBounds(this.bounds);
    } else {
      const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45, 45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      this.marcadorAju = new google.maps.Marker({
        position: location,
        map: this.mapa,
        icon: ajuIcon
      });
      this.marcadorAju.setPosition(location);
    }
  }
  cerrarMapa() {
    this.Torval();
    jquery__WEBPACK_IMPORTED_MODULE_9__('#expedienteContent').fadeIn('slow');
    jquery__WEBPACK_IMPORTED_MODULE_9__('#mapaContent').fadeOut('slow');
    jquery__WEBPACK_IMPORTED_MODULE_9__('#mapFooter').fadeOut('slow');
  }
  addMapMarker(coordenates) {
    var _this20 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(coordenates.lat + ', ' + coordenates.lng);
      const markerId = yield _this20.newMaP.addMarker({
        coordinate: {
          lat: coordenates.lat,
          lng: coordenates.lng
        },
        title: 'LUGAR DEL SINIESTRO : ' + _this20.expediente[0].Ciudad + ', ' + _this20.expediente[0].Direccion
      });
      _this20.markerId = markerId;
    })();
  }
  clickInMap() {
    var _this21 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const click = yield _this21.newMaP.setOnMapClickListener(click => {
        _this21.newMaP.removeMarker(_this21.markerId);
        let coodernadas;
        coodernadas = {
          lat: click.latitude,
          lng: click.longitude
        };
        _this21.latitud = click.latitude;
        _this21.longitud = click.longitude;
        _this21.addMapMarker(coodernadas);
      });
    })();
  }
  Torval() {
    var _this22 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.newMaP !== undefined) {
        const putin = _this22.newMaP.destroy();
      }
      if (_this22.watcher) {
        _this22.geoloc.clearWatch(_this22.watcher);
      }
      _this22.clearIntervals();
      if (_this22.mapa !== undefined) {
        google.maps.event.clearInstanceListeners(window);
        google.maps.event.clearInstanceListeners(document);
        if (_this22.mapa) {
          google.maps.event.clearInstanceListeners(_this22.mapa[0]);
          _this22.mapa = null;
        }
      }
    })();
  }
  clearIntervals() {
    if (this.firstInterval) {
      clearInterval(this.firstInterval);
    }
    if (this.trackInterval) {
      clearInterval(this.trackInterval);
    }
  }
  cambiarBotonera() {
    this.esClienteCompleto = !this.esClienteCompleto;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
    }, {
      type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__.NativeGeocoder
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location
    }];
  }
  static {
    this.propDecorators = {
      mapRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
        args: ['mapExpediente']
      }],
      modalInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
        args: ['#modalInfo']
      }],
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet]
      }]
    };
  }
};
ExpedientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-expediente',
  template: _expediente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_expediente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ExpedientePage);


/***/ }),

/***/ 54688:
/*!************************************************************!*\
  !*** ./src/app/expediente/expediente.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "modal {\n  --background: var(--primaryColor);\n  color: white;\n}\nmodal::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\nmodal .item.sc-ion-label-md-h, modal .item .sc-ion-label-md-h {\n  white-space: normal;\n  padding: 10px;\n  font-size: 1.2rem;\n  white-space: normal;\n  font-weight: bold;\n}\nmodal ion-content {\n  --background: transparent;\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\nmodal ion-content ion-img {\n  width: 100%;\n  height: 100%;\n}\nmodal ion-content .item.sc-ion-label-ios-h, modal ion-content .item .sc-ion-label-ios-h {\n  --color: initial;\n  display: block;\n  font-size: 1.2rem;\n  color: var(--color);\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\nmodal ion-button {\n  color: white;\n}\n\nmain {\n  background: white;\n}\n\nion-card {\n  height: 300px;\n}\n\nion-fab-button:not(#botonCerrarModal):not(#statusFlag):not(#gruaButton):not(#buttonsButton), .action-button {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n#botonCerrarModal {\n  color: white;\n}\n\n.ion-alerta {\n  --background: #161e2c!important;\n  --color:#FF0000!important;\n  --border-radius:5px!important;\n}\n\nion-badge {\n  font-size: 1rem;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-item-divider {\n  background: var(--primaryColor);\n  color: aliceblue;\n}\n\n#modalInfo .modal-wrapper {\n  width: 90%;\n}\n\nion-modal.info-modal {\n  --max-width:90%;\n  --width:90%;\n}\n\nion-searchbar.custom {\n  --width: 50%;\n  --background: white;\n  --color: #0090d0;\n  --placeholder-color: #0090d0;\n  --icon-color: #0090d0;\n  --clear-button-color: #0090d0;\n  --border-radius: 4px;\n}\n\nion-searchbar.ios.custom {\n  --cancel-button-color: #0090d0;\n}\n\nion-searchbar.md.custom {\n  --cancel-button-color: #0090d0;\n}\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\npac-card {\n  background-color: #fff;\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n  padding: 0 0.5em;\n  font: 400 18px Roboto, Arial, sans-serif;\n  overflow: hidden;\n  font-family: Roboto;\n  padding: 0;\n}\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n#pac-input:focus {\n  border-color: var(--primaryColor);\n}\n\n#title {\n  color: #fff;\n  background-color: var(--primaryColor);\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n#target {\n  width: 345px;\n}\n\ncapacitor-google-map {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n}\n\nion-button.option-button {\n  --background: transparent;\n  --background-hover: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --color: #737373;\n  --width:200px;\n  --ripple-color: #cecdcd;\n  --padding-top: 40px;\n  --padding-bottom: 40px;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/expediente/expediente.page.scss"],"names":[],"mappings":"AACA;EACI,iCAAA;EACA,YAAA;AAAJ;AACI;EACI,kCAAA;UAAA,0BAAA;AACR;AACI;EACI,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AACR;AACI;EACI,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AACR;AAAQ;EACJ,WAAA;EACA,YAAA;AAEJ;AACQ;EACI,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AACZ;AAEI;EACI,YAAA;AAAR;;AAIA;EACI,iBAAA;AADJ;;AAIA;EACI,aAAA;AADJ;;AAKA;EACI,kCAAA;EACF,4CAAA;EACA,wCAAA;EACE,qBAAA;EACA,qFAAA;EACA,cAAA;AAFJ;;AAKE;EACE,YAAA;AAFJ;;AAKE;EACE,+BAAA;EACH,yBAAA;EACA,6BAAA;AAFD;;AAKE;EACE,eAAA;AAFJ;;AAKE;EACD,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAFJ;;AAMA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAHJ;;AAMA;EACI,+BAAA;EACA,gBAAA;AAHJ;;AAQE;EACE,UAAA;AALJ;;AASA;EAGI,eAAA;EACA,WAAA;AARJ;;AAWE;EACE,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,qBAAA;EACA,6BAAA;EAEA,oBAAA;AATJ;;AAYE;EACE,8BAAA;AATJ;;AAYE;EACE,8BAAA;AATJ;;AAYE;EACE,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;AATJ;;AAYE;EACE,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,6CAAA;EACA,YAAA;EACA,gBAAA;EACA,wCAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;AATJ;;AAYE;EACE,oBAAA;EACA,kBAAA;AATJ;;AAYE;EACE,qBAAA;EACA,iBAAA;AATJ;;AAYE;EACE,mBAAA;EACA,eAAA;EACA,gBAAA;AATJ;;AAYE;EACE,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;AATJ;;AAYE;EACE,iCAAA;AATJ;;AAYE;EACE,WAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AATJ;;AAYE;EACE,YAAA;AATJ;;AAYA;EACI,YAAA;EACA,WAAA;EACA,qBAAA;AATJ;;AAaA;EACI,yBAAA;EACA,+BAAA;EACA,mCAAA;EACA,iCAAA;EAEA,gBAAA;EAEA,aAAA;EAEA,uBAAA;EAEA,mBAAA;EACA,sBAAA;AAdJ;;AAiBE;EACE,cAAA;EACA,wBAAA;AAdJ;;AAiBE;EACE,WAAA;AAdJ;;AAiBE;;EAEE,wBAAA;EAEA,iBAAA;AAfJ;;AAkBE;;EAEE,oCAAA;EACA,wCAAA;AAfJ;;AAmBE;;EAEE,qBAAA;EACA,cAAA;AAhBJ","sourcesContent":["\r\nmodal{\r\n    --background: var(--primaryColor);// rgba(44,39,45,0.2);\r\n    color:white;\r\n    &::part(content){\r\n        backdrop-filter: blur(6px);\r\n    }\r\n    .item.sc-ion-label-md-h, .item .sc-ion-label-md-h{\r\n        white-space: normal;\r\n        padding: 10px;\r\n        font-size: 1.2rem;\r\n        white-space: normal;\r\n        font-weight: bold;\r\n    }\r\n    ion-content{\r\n        --background: transparent;\r\n        --padding-top: 20px;\r\n        --padding-start: 20px;\r\n        --padding-end: 20px;\r\n        ion-img{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    }\r\n        .item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{\r\n            --color: initial;\r\n            display: block;\r\n            font-size: 1.2rem;\r\n            color: var(--color);\r\n            font-weight: bold;\r\n            text-overflow: ellipsis;\r\n            white-space: normal;\r\n        }\r\n    }\r\n    ion-button{\r\n        color:white;\r\n    }\r\n}\r\n\r\nmain{\r\n    background: white;\r\n}\r\n\r\nion-card{\r\n    height: 300px;\r\n    //box-shadow: none;\r\n}\r\n\r\nion-fab-button:not(#botonCerrarModal):not(#statusFlag):not(#gruaButton):not(#buttonsButton), .action-button {\r\n    --background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n  #botonCerrarModal{\r\n    color: white;\r\n  }\r\n\r\n  .ion-alerta{\r\n    --background: #161e2c!important;   \r\n --color:#FF0000!important;\r\n --border-radius:5px!important;\r\n  }\r\n\r\n  ion-badge{\r\n    font-size: 1rem;\r\n  }\r\n\r\n  ion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\nion-item-divider{\n    background: var(--primaryColor);\r\n    color: aliceblue;\r\n}\r\n\r\n#modalInfo\r\n{ \r\n  .modal-wrapper{\r\n    width: 90%;\r\n  }\r\n}\r\n\r\nion-modal.info-modal {\r\n    //--box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\r\n    //--backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\r\n    --max-width:90%;\r\n    --width:90%;\r\n  }\r\n\r\n  ion-searchbar.custom {\r\n    --width: 50%;\r\n    --background: white;\r\n    --color: #0090d0;\r\n    --placeholder-color: #0090d0;\r\n    --icon-color: #0090d0;\r\n    --clear-button-color: #0090d0;\r\n  \r\n    --border-radius: 4px;\r\n  }\r\n  \r\n  ion-searchbar.ios.custom {\r\n    --cancel-button-color: #0090d0;\r\n  }\r\n  \r\n  ion-searchbar.md.custom {\r\n    --cancel-button-color: #0090d0;\r\n  }\r\n\r\n  #pac-input {\r\n    background-color: #fff;\r\n    font-family: Roboto;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    margin-left: 12px;\r\n    padding: 0 11px 0 13px;\r\n    text-overflow: ellipsis;\r\n    width: 400px;\r\n  }\r\n\r\n  pac-card {\r\n    background-color: #fff;\r\n    border: 0;\r\n    border-radius: 2px;\r\n    box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);\r\n    margin: 10px;\r\n    padding: 0 0.5em;\r\n    font: 400 18px Roboto, Arial, sans-serif;\r\n    overflow: hidden;\r\n    font-family: Roboto;\r\n    padding: 0;\r\n  }\r\n  \r\n  #pac-container {\r\n    padding-bottom: 12px;\r\n    margin-right: 12px;\r\n  }\r\n  \r\n  .pac-controls {\r\n    display: inline-block;\r\n    padding: 5px 11px;\r\n  }\r\n  \r\n  .pac-controls label {\r\n    font-family: Roboto;\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  #pac-input {\r\n    background-color: #fff;\r\n    font-family: Roboto;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    margin-left: 12px;\r\n    padding: 0 11px 0 13px;\r\n    text-overflow: ellipsis;\r\n    width: 400px;\r\n  }\r\n  \r\n  #pac-input:focus {\r\n    border-color: var(--primaryColor);\r\n  }\r\n  \r\n  #title {\r\n    color: #fff;\r\n    background-color: var(--primaryColor);\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    padding: 6px 12px;\r\n  }\r\n  \r\n  #target {\r\n    width: 345px;\r\n  }\r\n\r\ncapacitor-google-map{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-block;\r\n\r\n}\r\n\r\nion-button.option-button{\r\n    --background: transparent;\r\n    --background-hover: transparent;\r\n    --background-activated: transparent;\r\n    --background-focused: transparent;\r\n  \r\n    --color: #737373;\r\n\r\n    --width:200px;\r\n    \r\n    --ripple-color: #cecdcd;\r\n  \r\n    --padding-top: 40px;\r\n    --padding-bottom: 40px;\r\n  }\r\n\r\n  ion-accordion {\r\n    margin: 0 auto;\r\n    --width: 100% !important;\r\n  }\r\n\r\n  ion-accordion-group {\r\n    width: 100%;\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding,\r\n  ion-accordion.accordion-expanded {\r\n    width: calc(100% - 32px);\r\n  \r\n    margin: 16px auto;\r\n  }\r\n  \r\n  ion-accordion.accordion-collapsing ion-item[slot='header'],\r\n  ion-accordion.accordion-collapsed ion-item[slot='header'] {\r\n    --background: var(--ion-color-light);\r\n    --color: var(--ion-color-light-contrast);\r\n\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding ion-item[slot='header'],\r\n  ion-accordion.accordion-expanded ion-item[slot='header'] {\r\n    --background: #7da1c4;//var(--ion-color-primary);\r\n    --color: white;//var(--ion-color-primary-contrast);\r\n  }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98307:
/*!************************************************************!*\
  !*** ./src/app/expediente/expediente.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <!--ion-back-button defaultHref=\"/\" (click)=\"Torval()\"></!--ion-back-button -->\r\n      <ion-button id=\"submitClaim\" style=\"position: relative;width: 40px;height: 30px; z-index: 999;--background: transparent;\r\n          --background-activated: transparent;\r\n          --background-hover: transparent;\r\n          --border-radius: 15px;\r\n          --color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"handleBack()\">\r\n            <ion-icon style=\"font-size: 2rem; color: white;\" name=\"chevron-back\"></ion-icon>\r\n          </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"></ion-col>\r\n          <ion-col size=\"4\">Expediente atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col offset=\"8\" size=\"2\" style=\"text-align: left;\">\r\n            <ion-fab *ngIf=\"true\" style=\"position: fixed;padding-right: 10px;width: 50%;\" vertical=\"top\" horizontal=\"end\">\r\n              <!--ion-searchbar animated=\"true\" placeholder=\"Buscar Fecha, Atención o Asegurado\" show-clear-button=\"focus\" show-cancel-button=\"never\" cancel-button-text=\"Cancelar\"\r\n          cancel-button-icon=\"trash-bin\" [debounce]=\"400\" (ionChange)=\"'handleInput($event)'\" class=\"custom\" style=\"width: 100%;\" [(ngModel)]=\"lugar\"></!--ion-searchbar -->\r\n              <!--ion-icon name=\"search\" style=\"font-size: 1.5rem;\"></!--ion-icon -->\r\n              <!--ion-fab-button id=\"buttonsButton\" (click)=\"modalOpciones.present()\">\r\n                <img id=\"open-modal-opciones\" label=\"Llamar Grua\" slot=\"start\" name=\"star\" style=\"width: 50px; height:50px; color: #737373;\" src=\"../../assets/img/opcion.svg\" alt=\"opciones\" />\r\n              </!--ion-fab-button -->\r\n            </ion-fab>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"expedienteContent\"  style=\"--background:transparent\" #page>\r\n  <capacitor-google-map id=\"mapExpediente\" #mapExpediente (mapClick)=\"'addMapMarker($event)'\"></capacitor-google-map>\r\n</ion-content>\r\n<ion-content id=\"mapaContent\" style=\"--background: transparent;display: none;\">\r\n  <ion-grid fixed style=\"overflow: hidden;\">\r\n    <ion-row>\r\n      <ion-fab style=\"position: fixed;margin-bottom: 190px;\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button (click)=\"centroDeImpresion()\">\r\n          <ion-icon name=\"print\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      <ion-fab style=\"position: fixed;margin-bottom: 120px;\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"location\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n\r\n      <ion-fab style=\"position: fixed;margin-bottom: 50px;\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button (click)=\"getCambiarEstado(8)\">\r\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n        <!--ion-fab-list side=\"top\">\r\n          \r\n          <ion-fab-button (click)=\"goCulpable()\">\r\n            <ion-icon name=\"wallet\"></ion-icon>\r\n          </ion-fab-button>\r\n          <ion-fab-button (click)=\"goBeneficiario()\">\r\n            <ion-icon name=\"golf\"></ion-icon>\r\n          </ion-fab-button>\r\n        </!--ion-fab-list -->\r\n      </ion-fab>\r\n      <!--ion-col>\r\n        <ion-fab style=\"position: fixed;margin-bottom: 100px;\" vertical=\"bottom\" horizontal=\"end\">\r\n          <ion-fab-button (click)=\"centroDeImpresion()\">\r\n            <ion-icon name=\"print\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </!--ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-fab style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n          <ion-fab-button (click)=\"confirmar()\">\r\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-col -->\r\n    </ion-row>\r\n    <ion-row id=\"mapInfo\" *ngFor=\"let item of expediente\" style=\"display: none;\">\r\n      <ion-col size=\"6\">\r\n        <ion-card>\n          <ion-card-header>\r\n            <ion-card-title><ion-badge style=\"font-size: 1.2rem;\">Datos del asegurado</ion-badge></ion-card-title>\r\n            <ion-card-subtitle><ion-label class=\"text-size-sm;\">\r\n              Nombre: {{item.Cliente| titlecase}}</ion-label></ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            Telefono: {{item.TelefonoOrigen}}<br>\r\n            Correo: {{item.Correo}}<br>\r\n            Poliza: {{item.PolizaExterna| titlecase}}<br>\r\n            Moneda: {{miMoneda}}\r\n            Identidad : {{identidadAsegurado}}<br>\r\n            Fecha del Siniestro : {{formateadaSiniestro}}<br>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title><ion-badge style=\"font-size: 1.2rem;\">Datos del vehículo</ion-badge></ion-card-title>\r\n            <ion-card-subtitle><ion-label class=\"text-size-sm;\">\r\n              Marca: {{item.Marca| titlecase}}</ion-label></ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            Modelo: {{item.Modelo| titlecase}}<br>\r\n            Color: {{item.Color || \"N/D\"| titlecase}}<br>\r\n            Año: {{item.Year || \"N/D\"}}<br>\r\n            Placa: {{item.NumeroPlaca || \"N/D\"}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title><ion-badge style=\"font-size: 1.2rem;\">Datos del siniestro</ion-badge></ion-card-title>\r\n            <ion-card-subtitle><ion-label class=\"text-size-sm;\">\r\n              Ciudad: {{item.Ciudad | titlecase}}</ion-label></ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            Zona: {{item.Zona | titlecase}}<br>\r\n            Dirección: {{item.Direccion  | titlecase}}<br>\r\n            Direción Destino: {{item.DireccionDestino | titlecase}}<br>\r\n            Servicio: {{item.Servicio | titlecase}}<br>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-content>\r\n\r\n  <ion-footer id=\"mapFooter\" slot=\"fixed\" style=\"bottom: 0;left:0;height:80px; background: white;display: none;\r\n  color: black;\">\r\n    <ion-grid hidden>\r\n      <ion-row>\r\n        <ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"cambiarBotonera()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" name=\"options\"></ion-icon></ion-button>\r\n        </ion-col>\r\n        <ion-col offset=\"6\" size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"grua()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" src=\"../../assets/img/remolque-de-camiones.svg\"></ion-icon></ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"goPrinter()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" src=\"../../assets/img/imprimir.svg\"></ion-icon></ion-button>\r\n        </ion-col>\r\n        <!--ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"goCulpable()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" src=\"../../assets/img/cartera.svg\"></ion-icon></ion-button>\r\n        </!--ion-col -->\r\n        <ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"goBeneficiario()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" src=\"../../assets/img/gastos.svg\"></ion-icon></ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"goFotos()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" src=\"../../assets/img/camara.svg\"></ion-icon></ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"1\" style=\"text-align: center;\">\r\n          <ion-button class=\"action-button\" (click)=\"handleForward()\" style=\"height: 60px;width:60px\"><ion-icon style=\"font-size: 3rem; color: white;\" name=\"chevron-forward\"></ion-icon></ion-button>\r\n        </ion-col>\r\n      \r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n    <!-- *ngIf=\"esClienteCompleto == true\" -->\r\n    <div id=\"fabsContainer\">\r\n      <ion-fab *ngIf=\"isArrived == true\" style=\"position: fixed;margin-right: 18%;\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button id=\"open-modal-coordenadas-no\" (click)=\"'trackON();'\">\r\n          <ion-icon style=\"font-size: 3rem;\" name=\"checkmark\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n\r\n\r\n    <ion-fab  style=\"position: fixed;right: 37.3%;\" vertical=\"bottom\">\r\n      <ion-fab-button style=\"font-weight: bolder;\" (click)=\"goAudience()\">\r\n        <ion-icon style=\"font-size: 2rem; color: white;\" src=\"../../assets/img/discusion.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab  style=\"position: fixed;right: 31%;\" vertical=\"bottom\">\r\n      <ion-fab-button style=\"font-weight: bolder;\" (click)=\"goPrinter()\">\r\n        <ion-icon style=\"font-size: 2rem; color: white;\" src=\"../../assets/img/imprimir.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab  style=\"position: fixed;right: 25%;\" vertical=\"bottom\">\r\n      <ion-fab-button style=\"font-weight: bolder;\" (click)=\"grua()\">\r\n        <ion-icon style=\"font-size: 2rem; color: white;\" src=\"../../assets/img/remolque-de-camiones.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab  style=\"position: fixed;right: 19%;\" vertical=\"bottom\">\r\n      <ion-fab-button style=\"font-weight: bolder;\" (click)=\"goBeneficiario()\">\r\n        <ion-icon style=\"font-size: 2rem; color: white;\" src=\"../../assets/img/gastos.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab  style=\"position: fixed;right: 13%;\" vertical=\"bottom\">\r\n      <ion-fab-button style=\"font-weight: bolder;\" (click)=\"goFotos()\">\r\n        <ion-icon id=\"statusArrow\" style=\"font-size: 2rem;font-weight: bolder;\" name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab style=\"position: fixed;margin-right: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button id=\"open-modal-info\" (click)=\"modalInfo.present(); triggerModalInfo()\">\r\n        <ion-icon style=\"font-size: 3rem;\" name=\"alert-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <!--ion-fab [hidden]=\"source==2\" style=\"position: fixed;margin-right: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button>\r\n        \r\n        <ion-icon style=\"font-size: 3rem;\" src=\"../../assets/img/clear-cache.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </!--ion-fab>\r\n    <ion-fab [hidden]=\"source==1\" style=\"position: fixed;margin-right: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button>\r\n        \r\n        <ion-icon style=\"font-size: 3rem;\" src=\"../../assets/img/clear-cache.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab  style=\"position: fixed;margin-left: 14%;\" vertical=\"bottom\" horizontal=\"start\">\r\n      <ion-fab-button id=\"statusFlag\" (click)=\"'goBack()'\">\r\n        <ion-icon id=\"statusIcon\" style=\"font-size: 3rem;\" src=\"../../assets/img/ajucar-white.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab -->\r\n\r\n    \r\n    \r\n\r\n    <!--ion-fab  style=\"position: fixed;left: 6%;\" vertical=\"bottom\">\r\n      <ion-fab-button id=\"arrowFlag\" style=\"font-weight: bolder;\" (click)=\"cambiarBotonera()\">\r\n        <ion-icon id=\"statusArrow\" style=\"font-size: 2rem;\" name=\"options\"></ion-icon>\r\n      </ion-fab-button>\r\n    </!--ion-fab -->\r\n\r\n    <ion-fab style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"start\">\r\n      <ion-fab-button (click)=\"goBack()\">\r\n        <ion-icon name=\"return-up-back\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab id=\"buttonGoCliente\" style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"handleForward()\">\r\n        <ion-icon name=\"chevron-forward\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    \r\n  </div>\r\n\r\n  </ion-footer>\r\n\r\n<ion-modal class=\"modal\" [isOpen]=\"asignacion\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-list-header style=\"text-align: center; align-items: center; margin: 0px;\">\r\n        <ion-label class=\"text-size-lg\" style=\"margin:0px;\">Selecione un nuevo ajustador</ion-label>\r\n      </ion-list-header>\r\n      <ion-list lines=\"none\" style=\"overflow-y:scroll; max-height:78%;\">\r\n        <ion-radio-group [(ngModel)]=\"idAgente\">\r\n          \r\n          <ion-item lines=\"none\" *ngFor=\"let item of ajustadores\" >\r\n            <ion-label>{{item.AgenteNombre| titlecase}}</ion-label>\r\n            <ion-radio value={{item.IdAjustador| titlecase}}></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n       \r\n      </ion-list>\r\n      <ion-row style=\"bottom: 2px; position:absolute; width:100%;\">\r\n        <ion-col size=\"6\">\r\n          <ion-button style=\"color: white;\" expand=\"block\" shape=\"round\"  (click)=\"asignacion = false\" >\r\n           Cancelar\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button style=\"color: white;\"  expand=\"block\" shape=\"round\" (click)=\"reasignarAjustador()\">\r\n            Reasignar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n\r\n<ion-modal id=\"modalInfo\" #modalInfo trigger=\"open-modal-info\" [presentingElement]=\"page\" [backdropDismiss]=true [initialBreakpoint]=\"1\" [breakpoints]=\"[0, 0.25, 0.5, 0.75, 1]\"\r\nclass=\"info-modal\" style=\"overflow-y: scroll;width:100%\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        \r\n        \r\n        <ion-buttons slot=\"start\">\r\n          <ion-fab slot=\"start\" style=\"background: transparent;\">\r\n            <ion-fab-button id=\"botonCerrarModal\" (click)=\"cerrarModal()\">\r\n              <ion-icon style=\"font-size: 2rem; color: aliceblue;\" name=\"chevron-down\"></ion-icon>\r\n              <!--ion-icon style=\"font-size: 3rem;color: aliceblue;\" src=\"../../assets/img/map-icon.svg\"></!--ion-icon -->\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </ion-buttons>\r\n        <ion-title slot=\"end\">Atención # {{idAtencion}}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      <ion-grid id=\"mapGrid\">\r\n        <!--ion-row>\r\n          <ion-col size=\"6\" (click)=\"setStatusAccept(2)\" style=\"border-bottom-left-radius: 9px;border-top-right-radius: 9px;border: 1px solid lightgray;\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"9\">\r\n                  <ion-select #razonesSelect id=\"razonesSelect\" class=\"text-size-xs\" [(ngModel)]=\"laRazon\" multiple=\"false\" \r\n                    style=\"float: right; color: white;display: none;\" (ionChange)=\"InsertarAsignacion()\" ok-text=\"Seleccionar\" cancel-text=\"Cancelar\"\r\n                    (ionCancel)=\"handleCancel()\">Razón de Rechazo\r\n                    <ion-select-option *ngFor=\"let razon of razonesAsignacion; let i = index;\" [value]=\"razon.IdRazon\">\r\n                      {{razon.LaRazon}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n\r\n                  <ion-card-subtitle>\r\n                    <ion-label><strong>Rechazar</strong></ion-label>\r\n                  </ion-card-subtitle>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-toggle [enableOnOffLabels]=\"true\" [checked]=\"acceptStatus\" (ionChange)=\"'setStatus($event)'\">Habilitar Unidad</ion-toggle>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n          <ion-col size=\"6\" (click)=\"setStatusAccept(1)\" style=\"background: #007CDC;border-bottom-right-radius: 9px;border-top-left-radius: 9px;\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-card-subtitle style=\"text-align: right; color: white; margin-right: 13px;\">\r\n                    <ion-label><strong>Aceptar</strong></ion-label>\r\n                  </ion-card-subtitle>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            \r\n          </ion-col>\r\n        </!--ion-row>\r\n\r\n        <br -->\r\n        <ion-row>\r\n          <ion-accordion-group *ngFor=\"let item of expediente\">\r\n            <ion-accordion class=\"acordion\" value=\"first\">\r\n              <ion-item slot=\"header\">\r\n                <ion-label>Datos del asegurado</ion-label>\r\n              </ion-item>\r\n              <div class=\"ion-padding\" slot=\"content\">\r\n                <strong>Nombre: {{item.Cliente| titlecase}}</strong><br><br>\r\n                Telefono: {{item.TelefonoOrigen}}<br>\r\n                Poliza: {{item.PolizaExterna.split('-')[1]| titlecase}}<br>\r\n                Moneda: {{miMoneda}}\r\n              </div>\r\n            </ion-accordion>\r\n            <ion-accordion class=\"acordion\" value=\"second\">\r\n              <ion-item slot=\"header\">\r\n                <ion-label>Datos del vehículo</ion-label>\r\n              </ion-item>\r\n              <div class=\"ion-padding\" slot=\"content\">\r\n                <strong> Marca: {{item.Marca| titlecase}}</strong><br><br>\r\n                Modelo: {{item.Modelo| titlecase}}<br>\r\n                Color: {{item.Color || \"N/D\"| titlecase}}<br>\r\n                Año: {{item.Year || \"N/D\"}}<br>\r\n                Placa: {{item.NumeroPlaca || \"N/D\"}}\r\n              </div>\r\n            </ion-accordion>\r\n            <ion-accordion class=\"acordion\" value=\"third\">\r\n              <ion-item slot=\"header\">\r\n                <ion-label>Datos del siniestro</ion-label>\r\n              </ion-item>\r\n              <div class=\"ion-padding\" slot=\"content\">\r\n                <strong> {{item.Direccion}}</strong><br><br>\r\n                Ciudad: {{item.Ciudad | titlecase}}\r\n                Zona: {{item.Zona | titlecase}}<br>\r\n                Dirección: {{item.Direccion  | titlecase}}<br>\r\n                Direción Destino: {{item.DireccionDestino | titlecase}}<br>\r\n                Servicio: {{item.Servicio | titlecase}}<br>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-icon style=\"font-size: 5rem;\r\n                      color: aliceblue;\r\n                      margin-right: 2%;\r\n                      float: right;\" src=\"../../assets/img/ruta.svg\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col offset=\"8\" size=\"4\">\r\n                      <ion-button id=\"botonRuta\" class=\"ruta\" style=\"float: right;\" (click)=\"trazaRuta(directionsService, directionsDisplay)\">\r\n                        Trazar Ruta\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n              \r\n            </ion-accordion>\r\n          </ion-accordion-group>\r\n        </ion-row>\r\n      \r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal id=\"modalOpciones\" #modalOpciones trigger=\"open-modal-opciones\" [presentingElement]=\"page\" [backdropDismiss]=true [initialBreakpoint]=\"0.25\" [breakpoints]=\"[0, 0.25]\"\r\nclass=\"info-modal\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar (click)=\"cerrarModal()\">\r\n        \r\n        \r\n        <ion-buttons slot=\"start\">\r\n          <ion-fab slot=\"start\" style=\"background: transparent;\">\r\n            <ion-fab-button id=\"botonCerrarModal\">\r\n              <ion-icon style=\"font-size: 3rem;color: aliceblue;\" src=\"../../assets/img/map-icon.svg\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n        </ion-buttons>\r\n        <ion-title slot=\"end\">Atención # {{idAtencion}}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n\r\n  \r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_expediente_expediente_module_ts.js.map