(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);




const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
  // canLoad: [AuthGuard]
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion/login/login.module */ 59293)).then(m => m.LoginPageModule)
}, {
  path: 'recovery',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_recovery_recovery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion/recovery/recovery.module */ 92268)).then(m => m.RecoveryPageModule)
}, {
  path: 'new-password',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_new-password_new-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion/new-password/new-password.module */ 24674)).then(m => m.NewPasswordPageModule)
}, {
  path: 'expediente',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_expediente_expediente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./expediente/expediente.module */ 66409)).then(m => m.ExpedientePageModule)
}, {
  path: 'formulario',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_formulario_formulario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./formulario/formulario.module */ 38312)).then(m => m.FormularioPageModule)
}, {
  path: 'mapa',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_mapa_mapa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mapa/mapa.module */ 30964)).then(m => m.MapaPageModule)
}, {
  path: 'declaracion',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_declaracion_declaracion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./declaracion/declaracion.module */ 33210)).then(m => m.DeclaracionPageModule)
}, {
  path: 'tercero',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tercero_tercero_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tercero/tercero.module */ 14627)).then(m => m.TerceroPageModule)
}, {
  path: 'fotografias',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fotografias_fotografias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fotografias/fotografias.module */ 31603)).then(m => m.FotografiasPageModule)
}, {
  path: 'propiedad',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_propiedad_propiedad_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./propiedad/propiedad.module */ 62921)).then(m => m.PropiedadPageModule)
}, {
  path: 'clientehn',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_environments_segments_ts-src_app_environments_vehicles_ts-src_app_services_fo-ac8850"), __webpack_require__.e("common"), __webpack_require__.e("src_app_clientehn_clientehn_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./clientehn/clientehn.module */ 19905)).then(m => m.ClientehnPageModule)
}, {
  path: 'ajustadorhn',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_environments_segments_ts-src_app_environments_vehicles_ts-src_app_services_fo-ac8850"), __webpack_require__.e("default-src_app_ajustadorhn_ajustadorhn_page_ts"), __webpack_require__.e("src_app_ajustadorhn_ajustadorhn_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ajustadorhn/ajustadorhn.module */ 98508)).then(m => m.AjustadorhnPageModule)
}, {
  path: 'fotoshn',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fotoshn_fotoshn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fotoshn/fotoshn.module */ 57561)).then(m => m.FotoshnPageModule)
}, {
  path: 'tallerhn',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tallerhn_tallerhn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tallerhn/tallerhn.module */ 46810)).then(m => m.TallerhnPageModule)
}, {
  path: 'popover',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_popover_popover_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./popover/popover.module */ 72415)).then(m => m.PopoverPageModule)
}, {
  path: 'adeuda',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_adeuda_adeuda_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./adeuda/adeuda.module */ 46952)).then(m => m.AdeudaPageModule)
}, {
  path: 'adeuda-signature',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_adeuda-signature_adeuda-signature_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./adeuda-signature/adeuda-signature.module */ 25425)).then(m => m.AdeudaSignaturePageModule)
}, {
  path: 'culpable',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_culpable_culpable_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./culpable/culpable.module */ 4220)).then(m => m.CulpablePageModule)
}, {
  path: 'esignature',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("default-src_app_environments_segments_ts-src_app_environments_vehicles_ts-src_app_services_fo-ac8850"), __webpack_require__.e("default-src_app_ajustadorhn_ajustadorhn_page_ts"), __webpack_require__.e("src_app_esignature_esignature_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./esignature/esignature.module */ 6885)).then(m => m.EsignaturePageModule)
}, {
  path: 'printer',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_formulario_formulario_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_printer_printer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./printer/printer.module */ 45957)).then(m => m.PrinterPageModule)
}, {
  path: 'foto-reporte',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_foto-reporte_foto-reporte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./foto-reporte/foto-reporte.module */ 5618)).then(m => m.FotoReportePageModule)
}, {
  path: 'finiquito',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_finiquito_finiquito_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./finiquito/finiquito.module */ 64093)).then(m => m.FiniquitoPageModule)
}, {
  path: 'finiquito-signature',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_finiquito-signature_finiquito-signature_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./finiquito-signature/finiquito-signature.module */ 79636)).then(m => m.FiniquitoSignaturePageModule)
}, {
  path: 'beneficiario',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_beneficiario_beneficiario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./beneficiario/beneficiario.module */ 46011)).then(m => m.BeneficiarioPageModule)
}, {
  path: 'segmento-solicitante',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_segmento-solicitante_segmento-solicitante_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-solicitante/segmento-solicitante.module */ 26948)).then(m => m.SegmentoSolicitantePageModule)
}, {
  path: 'segmento-vehiculo',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-vehiculo_segmento-vehiculo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-vehiculo/segmento-vehiculo.module */ 52287)).then(m => m.SegmentoVehiculoPageModule)
}, {
  path: 'segmento-caracteristicas',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-caracteristicas_segmento-caracteristicas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-caracteristicas/segmento-caracteristicas.module */ 97976)).then(m => m.SegmentoCaracteristicasPageModule)
}, {
  path: 'segmento-danio',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-danio_segmento-danio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-danio/segmento-danio.module */ 37980)).then(m => m.SegmentoDanioPageModule)
}, {
  path: 'segmento-fasegurado',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-fasegurado_segmento-fasegurado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-fasegurado/segmento-fasegurado.module */ 51341)).then(m => m.SegmentoFaseguradoPageModule)
}, {
  path: 'segmento-fajustador',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-fajustador_segmento-fajustador_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-fajustador/segmento-fajustador.module */ 64325)).then(m => m.SegmentoFajustadorPageModule)
}, {
  path: 'segmento-segment-request-aju',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-segment-request-aju_segmento-segment-request-aju_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-segment-request-aju/segmento-segment-request-aju.module */ 1236)).then(m => m.SegmentoSegmentRequestAjuPageModule)
}, {
  path: 'segmento-casegurado',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-casegurado_segmento-casegurado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-casegurado/segmento-casegurado.module */ 70514)).then(m => m.SegmentoCaseguradoPageModule)
}, {
  path: 'segmento-cvehiculo',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-cvehiculo_segmento-cvehiculo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-cvehiculo/segmento-cvehiculo.module */ 30202)).then(m => m.SegmentoCvehiculoPageModule)
}, {
  path: 'segmento-cconductor',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-cconductor_segmento-cconductor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-cconductor/segmento-cconductor.module */ 55911)).then(m => m.SegmentoCconductorPageModule)
}, {
  path: 'segmento-cinformacion',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_segmento-cinformacion_segmento-cinformacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./segmento-cinformacion/segmento-cinformacion.module */ 4608)).then(m => m.SegmentoCinformacionPageModule)
}, {
  path: 'vital-core',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_vital-core_vital-core_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vital-core/vital-core.module */ 48001)).then(m => m.VitalCorePageModule)
}, {
  path: 'formularios',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_formularios_formularios_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./formularios/formularios.module */ 11992)).then(m => m.FormulariosPageModule)
}, {
  path: 'end-process',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_end-process_end-process_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./end-process/end-process.module */ 17169)).then(m => m.EndProcessPageModule)
}, {
  path: 'materiales',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_materiales_materiales_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./materiales/materiales.module */ 56150)).then(m => m.MaterialesPageModule)
}, {
  path: 'prepare-send',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prepare-send_prepare-send_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prepare-send/prepare-send.module */ 54450)).then(m => m.PrepareSendPageModule)
}, {
  path: 'prepare-audience',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_prepare-audience_prepare-audience_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prepare-audience/prepare-audience.module */ 32619)).then(m => m.PrepareAudiencePageModule)
}, {
  path: 'modal-empresa-conductor',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Modales_modal-empresa-conductor_modal-empresa-conductor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Modales/modal-empresa-conductor/modal-empresa-conductor.module */ 88598)).then(m => m.ModalEmpresaConductorPageModule)
}, {
  path: 'modal-guardar',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_Modales_modal-guardar_modal-guardar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Modales/modal-guardar/modal-guardar.module */ 3054)).then(m => m.ModalGuardarPageModule)
}, {
  path: 'cargar-archivos',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Modales_modal-imagen_modal-imagen_page_ts"), __webpack_require__.e("src_app_cargar-archivos_cargar-archivos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cargar-archivos/cargar-archivos.module */ 28244)).then(m => m.CargarArchivosPageModule)
}, {
  path: 'cargar-archivos',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Modales_modal-imagen_modal-imagen_page_ts"), __webpack_require__.e("src_app_cargar-archivos_cargar-archivos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cargar-archivos/cargar-archivos.module */ 28244)).then(m => m.CargarArchivosPageModule)
}, {
  path: 'modal-imagen',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Modales_modal-imagen_modal-imagen_page_ts"), __webpack_require__.e("src_app_Modales_modal-imagen_modal-imagen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Modales/modal-imagen/modal-imagen.module */ 37959)).then(m => m.ModalImagenPageModule)
}
/*  {
    path: 'logout',
    loadChildren: () => import('./sesion/logout/logout.module').then( m => m.LogoutPageModule)
  }
  */];

let AppRoutingModule = class AppRoutingModule {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.ActivationStart && e.snapshot.outlet === "tabs") this.outlet.deactivate();
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
    }];
  }
  static {
    this.propDecorators = {
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet]
      }]
    };
  }
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! onesignal-cordova-plugin */ 10182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./environments/default-images */ 35263);
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/connection.service */ 72377);
/* harmony import */ var _environments_network__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./environments/network */ 4322);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/device.service */ 34811);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);



















let AppComponent = class AppComponent {
  constructor(plt, api, platform, so, tostador, router, connectionService, deviceService) {
    this.plt = plt;
    this.api = api;
    this.platform = platform;
    this.so = so;
    this.tostador = tostador;
    this.router = router;
    this.connectionService = connectionService;
    this.deviceService = deviceService;
    this.isTablet = false;
    this.emptySignature = _environments_default_images__WEBPACK_IMPORTED_MODULE_9__.emptySignature;
    this.connectionStatus$ = this.connectionService.status$;
    this.initializeApp();
  }
  checkConnection() {
    //alert('Voy')
    if (_capacitor_network__WEBPACK_IMPORTED_MODULE_8__.Network) {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_8__.Network.getStatus().then(status => {
        this.conexion = status;
        console.log('status.connected');
        console.log(status.connected);
        this.conectividad = status.connected;
        console.log('Mi estado de conectividad es ' + this.conectividad);
        for (let index = 0; index < _environments_network__WEBPACK_IMPORTED_MODULE_11__.NetworkInfo.status.length; index++) {
          const element = _environments_network__WEBPACK_IMPORTED_MODULE_11__.NetworkInfo.status[index];
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
    _capacitor_network__WEBPACK_IMPORTED_MODULE_8__.Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      for (let index = 0; index < _environments_network__WEBPACK_IMPORTED_MODULE_11__.NetworkInfo.status.length; index++) {
        const element = _environments_network__WEBPACK_IMPORTED_MODULE_11__.NetworkInfo.status[index];
        if (element.bool == this.conectividad) {
          this.conectividadStat = element.stat;
          localStorage.setItem('conectividad', this.conectividad.toString());
        }
      }
      localStorage.setItem('conectividad', this.conectividad.toString());
      if (this.conectividad == false) {
        jquery__WEBPACK_IMPORTED_MODULE_13__('#connectIndicator').fadeIn();
        //this.toaster.toastMessage = 'No hay conexión a internet';
        //this.toaster.toastClass = 'conectividad';
        //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_13__('#connectIndicator').fadeOut();
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
          //this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
        }
      })
    } else {
      this.conectividad = false;
    }
       Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      console.log('Mi estado de conectividad es '+this.conectividad)
      if (this.conectividad == false) {
        //this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
      }
    })
  }
  */
  initializeApp() {
    var _this = this;
    this.plt.ready().then( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Initialize here');
      _this.applyOrientationPolicy();
      yield _this.restoreSession();
      //Debug:temporal
      _this.geolocation();
      _this.OneSignalInit();
    }));
  }
  restoreSession() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hasSession = yield _this2.api.loadToken();
      const currentPath = window.location.pathname || _this2.router.url || '/';
      const publicRoutes = ['/login', '/recovery', '/new-password'];
      const isPublicRoute = publicRoutes.some(route => currentPath.startsWith(route));
      if (hasSession && (currentPath === '/' || isPublicRoute)) {
        _this2.router.navigateByUrl('/tabs/tab1', {
          replaceUrl: true
        });
        return;
      }
      if (!hasSession && !isPublicRoute) {
        _this2.router.navigateByUrl('/login', {
          replaceUrl: true
        });
      }
    })();
  }
  applyOrientationPolicy() {
    this.deviceService.configure(this.platform);
    this.isTablet = this.deviceService.isTablet;
    if (!this.platform.is('hybrid')) {
      return;
    }
    if (this.isTablet) {
      this.so.unlock();
      return;
    }
    this.so.lock(this.so.ORIENTATIONS.PORTRAIT);
  }
  OneSignalInit() {
    //alert('inicialicemos el onesignal')
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;
    // Cambios para android 33 
    // da94f896-3936-4550-87d3-6021e755623c
    // "current_key": "AIzaSyBwZp_AO2LEX7chxG8oDUDrVIsyiPj0bys"
    // AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ
    // da94f896-3936-4550-87d3-6021e755623c
    // da94f896-3936-4550-87d3-6021e755623c
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default().setAppId("da94f896-3936-4550-87d3-6021e755623c");
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default().setNotificationOpenedHandler(jsonData => {
      //alert('tengo un Json')
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      var $data = jsonData.notification.additionalData;
      if ($data.Type == "EmbebedUrl") {
        //this.openmodal($data.Direction);
      } else {
        if ($data.Type == "InternalView") {
          let localVariable = JSON.parse(localStorage.getItem('remenber') || 'false');
          if (JSON.parse(localVariable) == true) {
            window.localStorage.setItem('InternalView', JSON.stringify($data)); //datos.additionalData.DirectionData));
            //this.openData($data.Direction, $data.DirectionData);
          }
        }
      }
    });

    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default().promptForPushNotificationsWithUserResponse(function (accepted) {
      console.log("User accepted notifications: " + accepted);
    });
    onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_5___default().getDeviceState(d => {
      console.log('data o', d);
      window.localStorage.setItem('token', JSON.stringify(d.userId));
      this.api.setPushToken(d.userId);
      console.log('mi Token');
      console.log(d.pushToken);
      //alert(d.pushToken)
    });
    /*
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      var $data:any = jsonData.notification.additionalData
      window.localStorage.setItem('Push',JSON.stringify($data));
      
    });
         OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
    OneSignal.getDeviceState( d => {
      console.log('data o', d);
        window.localStorage.setItem('token',JSON.stringify(d.userId));
      console.log(d.pushToken,'token pushhh');
    });
    */
  }

  ngOnInit() {
    //alert('ngOnInit hay red '+Network.getStatus());
    this.connectionService.startMonitoring();
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivationStart && e.snapshot.outlet === "root") this.outlet?.deactivate();
    });
    this.outletDeactivate();
    setTimeout(() => {
      console.log('clienteContent');
      let evaluator = window.location.pathname == '/login';
      //alert(window.location.pathname+', '+evaluator);
      if (evaluator == false) {
        let myContent = document.getElementById('clienteContent');
        if (myContent) {
          //alert(myContent.tagName)
        } else {
          //alert('Time');
          //          window.location.reload();
        }
      }
    }, 3000);
    this.platform.ready().then(() => {
      //document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
    });
  }
  outletDeactivate() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivationStart && e.snapshot.outlet === "tab1") this.outlet?.deactivate();
    });
  }
  ionViewDidEnter() {
    this.platform.ready().then(() => {
      //this.checkConnection();
      //document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
    });
  }
  geolocation() {
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const permissionResult = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.checkPermissions();
      if (permissionResult.location === 'granted') {
        //alert('Hey Geo')
        // El usuario ha dado permisos de geolocalización
        const coordenadas = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition();
        localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
        console.log('Coordenadas en app');
        console.dir(coordenadas);
        //alert(coordenadas.coords.latitude)
        localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
        localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
        localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
      } else if (permissionResult.location === 'denied') {
        //alert('Hey Geo Denied')
        // El usuario ha denegado los permisos de geolocalización
      } else {
        //alert('Hey Geo Else')
        const permissionResult = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.requestPermissions();
        if (permissionResult.location === 'granted') {
          // El usuario ha otorgado los permisos de geolocalización
          const coordenadas = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition();
          localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
          console.log('Coordenadas en app');
          console.dir(coordenadas);
          //alert(coordenadas.coords.latitude)
          localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
          localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
          localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
        } else if (permissionResult.location === 'denied') {
          // El usuario ha denegado los permisos de geolocalización
        } else if (permissionResult.location === 'prompt') {
          // El usuario aún no ha tomado una decisión sobre los permisos de geolocalización
        }
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: _services_connection_service__WEBPACK_IMPORTED_MODULE_10__.ConnectionService
    }, {
      type: _services_device_service__WEBPACK_IMPORTED_MODULE_12__.DeviceService
    }];
  }
  static {
    this.propDecorators = {
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
        args: ["canvas", {
          static: true
        }]
      }],
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet]
      }]
    };
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/onesignal/ngx */ 13860);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onesignal-cordova-plugin */ 10182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 53543);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 3622);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _maskito_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @maskito/angular */ 11750);
















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot({
    backButtonText: ''
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _maskito_angular__WEBPACK_IMPORTED_MODULE_13__.MaskitoModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor,
    multi: true
  }, _awesome_cordova_plugins_onesignal_ngx__WEBPACK_IMPORTED_MODULE_0__.OneSignal, onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.OneSignalPlugin, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__.CallNumber, _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__.NativeGeocoder, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 35263:
/*!************************************************!*\
  !*** ./src/app/environments/default-images.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "banderaPais": () => (/* binding */ banderaPais),
/* harmony export */   "editarFirmaIcono": () => (/* binding */ editarFirmaIcono),
/* harmony export */   "emptySignature": () => (/* binding */ emptySignature),
/* harmony export */   "emptySignatureWhite": () => (/* binding */ emptySignatureWhite),
/* harmony export */   "errorImage": () => (/* binding */ errorImage),
/* harmony export */   "firmaDemoAjustador": () => (/* binding */ firmaDemoAjustador),
/* harmony export */   "fondos": () => (/* binding */ fondos),
/* harmony export */   "imagePrefix": () => (/* binding */ imagePrefix),
/* harmony export */   "logoFicohsa": () => (/* binding */ logoFicohsa)
/* harmony export */ });
const banderaPais = '../../assets/img/flag-round-hn.png';
const editarFirmaIcono = '../../assets/iconos/firma-digital-1.svg';
const imagePrefix = 'data:image/jpeg;base64,';
const fondos = ["../../assets/img/tab1/choque.jpeg", "../../assets/img/tab1/asistenciaLegal.jpeg", "../../assets/img/tab1/girl.jpg"];
const logoFicohsa = '../../assets/logos/ficohsa-seguros.png';
const firmaDemoAjustador = "data:image/jpeg;base64,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bZ9LfaerrpJ1NjpLJRunJcBkfMcNI+rerGDwtP4/xLa7LHW+2WPby3SFjxJVuFfXhhHOGYMefXpc1hHAz3WC17Y7o7QQyQ7T3azXyzl3WbRdqVlPUf6tTEG9bvrJgd12aPf+w22ojtm5enrxom4PPQPtGAvpJHf6OpjBY4fU4ChdT08QysHhbNvcct//AKrNA914/iUgllebV8hj3AZLffufvNO5a2m/Dlp2kvVLqvXOpL3rK+0j2SQ1NxqXtihex/W0xxg5AB/muc5v0VuLStN6s1/o23CxXajuNK44bPSTtljJ/eaSFur5uurautkvVuJLcwBzAbgMwHAALWpqeCnb+gAAOvTfidJRERUlZREREREREREREREREREREREREREXiaaGnjM1RKyKNvd73BoH6lAL5gi9ooled2tsdPtcbtr2xQuaQDGK6N8nP7DSXf1KIy+I/TFzmdSbe6X1NrGccCS2257adrvZ8snT0jvz0kLRgwivqBlRxOydpFh3uNgOaqSV9NEbOeL7L3PIZ1ba/HOa1pc4gADJJ7AKqPtHxHarb1UNh0zomlfg5rqh1wrAPcCMCP8AMO5591+SbF3PUrejczdTUeooHHMtDTllvo5fcPii5I4GB1D1PqVN1bDD9aqGt3Nu892T6H84Ufnkkn0MTjvPoj4+l/KtGgu9RuZvTaNV6Io+vT+lIa233G8SPxDXulaMQ04Ay/oeA7rz09/2eq51pWez2vT9sprLZKCGioaRgjgghb0tY0e39pPcnkrdVfEKtlU5rYm2YwZLb5za5NydpJJzZhoGYKalgdC1xebucbnZewGbdYfNERFQVlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERatzuVFZrbVXe5VDYKSihfUTyu7MjY0uc4/kAV1rS4hrRclcJDRcrDfr9Z9MWiqv1/uEVFQUbDJNNKcBo/tJJwABySQByqno7NqXfyRt51WK6xaCOHUNlZIYqm7M9JapzTlsZ7iMHnvngOPvTunL3vZcKLX2v4X0el4HipsOnS7InHBZVVeCQ4kctZ2APtnquTtwFuOezBRkREGo1u0hm5u12137OhufOs4NdiHpPFotQ+1vP8Owa9exatrtVtslvgtVnoIKKjpm9EMEEYYxjfYAcLbRFhucXkucbkrRADRYIiIuL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LBm3BY4YIKdnlU8LImDnpY0NH8AsiIqZN85VhERERERERERERERERERERERERR2+7daC1P1u1Bo2zV8kmS6WaijdJk9z146gfqCoPP4ZduYJjVaVq9Q6WnJ6hJZ7tLGQ73+cux+mFbSLQp8WrqUZMMzgNlzblo+Cqy0NNOcqSME7bZ+elVG3aXde1Pc7TniDvLWluOi6WuGuzjsOp5GPTJAz3Xtmn/EvQDpp9wNH3THHVW2uSEnHr91xz6q2UU/XVQ76RkbuMbL8w0H4qLq6JvYc4cHu8CSFU77l4nqIYm03t/cT6Gkq6qIf/U//AHkLzFr3xBU2WVewlHWOJy19NqemiaB7EPBJP1VtInWkRHp0sZ98fdeE8yeOzM8e6fFpVSR7ob3SPMLfDlUiQEj5tTUzWcftFmFkO4O/Ug6I/DzHE53AfJqykc1v1IDckfkrXRDiVLqo4+cv/anmk2ud/Jn5FUL9V+Jeo+Sm2r03SHv11F4Ejfywwgr1FV+Kevy37L26tbXDHVNJVyvb6ZHQSCfUZ491biLvWzAPRpoh3OPi4p5i49qZ57wPABR3RNJrukt0w3Au1qr658xdEbdTvijjjwPl+Y5cc554UiRFlzSmZ5kIAvqAsO4BXI2CNoaCTbbnKIiKNe0REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWKqpaatppaKtp4qinqGOililYHskY4Yc1zTwQQSCD3WVF0Eg3CEXzFRGw7SbZ6agmp7Noe0QsnkMsnXTiVxcST+KTJAGThoOB2ACklutVrs9MKO0W2loadvaKmhbEwf6rQAtpFNNVT1BJmeXE7ST4qKOGKIWjaBwFkREUClREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX/2Q==";
const emptySignature = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWArwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
const emptySignatureWhite = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWArwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
const errorImage = 'https://ionicframework.com/docs/img/demos/card-media.png';

/***/ }),

/***/ 4322:
/*!*****************************************!*\
  !*** ./src/app/environments/network.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkInfo": () => (/* binding */ NetworkInfo)
/* harmony export */ });
const NetworkInfo = {
  status: [{
    bool: true,
    stat: 'Conectado a Internet'
  }, {
    bool: false,
    stat: 'Sin Conexion'
  }]
};

/***/ }),

/***/ 11426:
/*!*************************************************!*\
  !*** ./src/app/environments/predeterminados.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsData": () => (/* binding */ ItemsData),
/* harmony export */   "ItemsExpediente": () => (/* binding */ ItemsExpediente),
/* harmony export */   "Predeterminados": () => (/* binding */ Predeterminados),
/* harmony export */   "actionButtons": () => (/* binding */ actionButtons),
/* harmony export */   "adeudaEtiquetas": () => (/* binding */ adeudaEtiquetas),
/* harmony export */   "cacheIndexArray": () => (/* binding */ cacheIndexArray),
/* harmony export */   "datosAtencionKeys": () => (/* binding */ datosAtencionKeys),
/* harmony export */   "requiredData": () => (/* binding */ requiredData),
/* harmony export */   "requiredDataAjustador": () => (/* binding */ requiredDataAjustador),
/* harmony export */   "requiredDataCliente": () => (/* binding */ requiredDataCliente),
/* harmony export */   "requiredDataLabels": () => (/* binding */ requiredDataLabels),
/* harmony export */   "requiredData_Less": () => (/* binding */ requiredData_Less),
/* harmony export */   "requiredData_NOP": () => (/* binding */ requiredData_NOP),
/* harmony export */   "tipoBeneficiario": () => (/* binding */ tipoBeneficiario),
/* harmony export */   "tiposDeReparacion": () => (/* binding */ tiposDeReparacion),
/* harmony export */   "valoresPredeterminados": () => (/* binding */ valoresPredeterminados)
/* harmony export */ });
const Predeterminados = [{
  nombre: 'AgendarAudiencia',
  valor: 2
}, {
  nombre: 'IdPais',
  valor: 3
}, {
  nombre: 'Sexo',
  valor: 1
}, {
  nombre: 'RefProveedorAgenteAbogadoId',
  valor: 0
}, {
  nombre: 'AseguradoUsoPoliza',
  valor: 1
}, {
  nombre: 'TerceroResponsable',
  valor: 1
}, {
  nombre: 'LesionadosSinAudiencia',
  valor: 0
}, {
  nombre: 'ConductorAfiliado',
  valor: 1
}, {
  nombre: 'ConductorDetenido',
  valor: 2
}, {
  nombre: 'VehiculoDetenido',
  valor: 2
}, {
  nombre: 'TercerosHeridos',
  valor: 2
}, {
  nombre: 'TercerosMuertos',
  valor: 2
}, {
  nombre: 'DanioFrontal',
  valor: 2
}, {
  nombre: 'DanioTrasero',
  valor: 2
}, {
  nombre: 'DanioLateralDerecho',
  valor: 2
}, {
  nombre: 'DanioLataralIzquierdo',
  valor: 2
}, {
  nombre: 'VehiculoVolcado',
  valor: 2
}, {
  nombre: 'FechaHora',
  valor: new Date().toISOString()
}, {
  nombre: 'Blindado',
  valor: 2
}, {
  nombre: 'Latitud',
  valor: localStorage.getItem('laLatitud')
}, {
  nombre: 'Longitud',
  valor: localStorage.getItem('laLongitud')
}, {
  nombre: 'RefTipoConductorId',
  valor: 1
}, {
  nombre: 'RefTipoLicenciaId',
  valor: 2
}, {
  nombre: 'PruebaAlcoholemia',
  valor: 2
}, {
  nombre: 'RefTipoCombustibleId',
  valor: 1
}, {
  nombre: 'AC',
  valor: 1
}, {
  nombre: 'Rines',
  valor: 2
}, {
  nombre: 'BolsaAire',
  valor: 1
}, {
  nombre: 'CierreCentralizado',
  valor: 1
}, {
  nombre: 'Mecanico',
  valor: 1
}, {
  nombre: 'RetrovisorElectronico',
  valor: 2
}, {
  nombre: 'Overfenders',
  valor: 2
}, {
  nombre: 'ColaPato',
  valor: 2
}, {
  nombre: 'CintaDecorativa',
  valor: 2
}, {
  nombre: 'LicenciaEstado',
  valor: 0
}, {
  nombre: 'RefTipoSolicitanteInformeAjusteId',
  valor: 1
}, {
  nombre: 'CulpableCompromisoPago',
  valor: 1
}, {
  nombre: 'Kilometraje',
  valor: 0
}, {
  nombre: 'RefMunicipioId',
  valor: 0
}];
const datosAtencionKeys = [{
  nombre: 'IdAtencion'
}, {
  nombre: 'PolizaPS'
}, {
  nombre: 'PolizaExterna'
}, {
  nombre: 'Plan'
}, {
  nombre: 'Certificado'
}, {
  nombre: 'RefIdentificacionTipo'
}, {
  nombre: 'IdentidadCliente'
}, {
  nombre: 'TelefonoOrigen'
}, {
  nombre: 'Cliente'
}, {
  nombre: 'RefTipoServicioId'
}, {
  nombre: 'FechaInicio'
}, {
  nombre: 'FechaFin'
}, {
  nombre: 'RefAgenteId'
}, {
  nombre: 'RefProveedorId'
}, {
  nombre: 'RefClienteId'
}, {
  nombre: 'RefEstadoId'
}, {
  nombre: 'CiudadId'
}, {
  nombre: 'RefColoniaId'
}, {
  nombre: 'FechaPagoCliente'
}, {
  nombre: 'IdPoliza'
}, {
  nombre: 'Direccion'
}, {
  nombre: 'ObservacionesAtencion'
}, {
  nombre: 'LatitudCliente'
}, {
  nombre: 'LongitudCliente'
}, {
  nombre: 'RefGestorId'
}, {
  nombre: 'TiempoMaximoEspera'
}, {
  nombre: 'IdEstadoAtencion'
}, {
  nombre: 'LbEstado'
}, {
  nombre: 'ColorEstado'
}, {
  nombre: 'LbTipoServicio'
}, {
  nombre: 'IdCategoriaServicio'
}, {
  nombre: 'IdCategoria'
}, {
  nombre: 'LbCategoriaServicio'
}, {
  nombre: 'IconClassName'
}, {
  nombre: 'UsuarioRegistroNombre'
}, {
  nombre: 'LbConvenio'
}, {
  nombre: 'LbPlan'
}, {
  nombre: 'NombreProveedor'
}, {
  nombre: 'Pais'
}, {
  nombre: 'PaisId'
}, {
  nombre: 'Zona'
}, {
  nombre: 'DireccionDestino'
}, {
  nombre: 'EstadoServicio'
}, {
  nombre: 'Ciudad'
}, {
  nombre: 'Colonia'
}, {
  nombre: 'Id'
}, {
  nombre: 'RefAtencionId'
}, {
  nombre: 'RefProveedorAgenteId'
}, {
  nombre: 'RefProveedorAgenteAbogadoId'
}, {
  nombre: 'AgendarAudiencia'
}, {
  nombre: 'AseguradoUsoPoliza'
}, {
  nombre: 'TerceroResponsable'
}, {
  nombre: 'LesionadosSinAudiencia'
}, {
  nombre: 'DescripcionAudiencia'
}, {
  nombre: 'RefEntidadComunicativaId'
}, {
  nombre: 'RefTipoAudienciaId'
}, {
  nombre: 'Poliza'
}, {
  nombre: 'Identificacion'
}, {
  nombre: 'Nombre'
}, {
  nombre: 'ConductorAfiliado'
}, {
  nombre: 'ConductorDetenido'
}, {
  nombre: 'Descripcion'
}, {
  nombre: 'MarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo'
}, {
  nombre: 'AnioVehiculo'
}, {
  nombre: 'PlacaVehiculo'
}, {
  nombre: 'ChasisVehiculo'
}, {
  nombre: 'ColorVehiculo'
}, {
  nombre: 'VehiculoDetenido'
}, {
  nombre: 'DescripcionVehiculo'
}, {
  nombre: 'TercerosHeridos'
}, {
  nombre: 'TercerosMuertos'
}, {
  nombre: 'DescripcionTercerosHeridos'
}, {
  nombre: 'DescripcionTercerosMuertos'
}, {
  nombre: 'DanioFrontal'
}, {
  nombre: 'DanioTrasero'
}, {
  nombre: 'DanioLateralDerecho'
}, {
  nombre: 'DanioLataralIzquierdo'
}, {
  nombre: 'VehiculoVolcado'
}, {
  nombre: 'DescripcionDanio'
}, {
  nombre: 'RefPaisId'
}, {
  nombre: 'RefCiudadId'
}, {
  nombre: 'RefDeptoId'
}, {
  nombre: 'RefMunicipioId'
}, {
  nombre: 'FechaHora'
}, {
  nombre: 'Lugar'
}, {
  nombre: 'RefUsuarioId'
}, {
  nombre: 'FechaRegistro'
}, {
  nombre: 'TallerMecanicoId'
}, {
  nombre: 'Blindado'
}, {
  nombre: 'ObservacionTaller'
}, {
  nombre: 'ReclamoAsegurado'
}, {
  nombre: 'Observaciones'
}, {
  nombre: 'Latitud'
}, {
  nombre: 'Longitud'
}, {
  nombre: 'NombreConductor'
}, {
  nombre: 'IdentidaConductor'
}, {
  nombre: 'DPI_Pasaporte'
}, {
  nombre: 'TelefonoConductor'
}, {
  nombre: 'CelularConductor'
}, {
  nombre: 'Edad'
}, {
  nombre: 'Licencia'
}, {
  nombre: 'TipoLicencia'
}, {
  nombre: 'Vigencia'
}, {
  nombre: 'DireccionConductor'
}, {
  nombre: 'Sexo'
}, {
  nombre: 'RefTipoConductorId'
}, {
  nombre: 'NumeroReclamoFicohsa'
}, {
  nombre: 'DireccionEnvioCorrespondencia'
}, {
  nombre: 'CorreoElectronico'
}, {
  nombre: 'RefConducidoPorId'
}, {
  nombre: 'RefTipoLicenciaId'
}, {
  nombre: 'NombreAtribuyeAccidente'
}, {
  nombre: 'AutoridadInvolucrada'
}, {
  nombre: 'UbicacionVehiculoDetenido'
}, {
  nombre: 'PruebaAlcoholemia'
}, {
  nombre: 'RefTipoCombustibleId'
}, {
  nombre: 'AC'
}, {
  nombre: 'RInes'
}, {
  nombre: 'BolsaAire'
}, {
  nombre: 'CierreCentralizado'
}, {
  nombre: 'Mecanico'
}, {
  nombre: 'RetrovisorElectronico'
}, {
  nombre: 'Overfenders'
}, {
  nombre: 'ColaPato'
}, {
  nombre: 'CintaDecorativa'
}, {
  nombre: 'LicenciaEstado'
}, {
  nombre: 'RefTipoSolicitanteInformeAjusteId'
}, {
  nombre: 'ObservacionesFinales'
}, {
  nombre: 'Reserva1'
}, {
  nombre: 'Reserva2'
}, {
  nombre: 'Reserva3'
}, {
  nombre: 'Llantas'
}, {
  nombre: 'Cristales'
}, {
  nombre: 'TipoSiniestro'
}, {
  nombre: 'TipoVehiculo'
}, {
  nombre: 'CodigoBPMFicohsa'
}, {
  nombre: 'AppEstado'
}, {
  nombre: 'CodigoReclamoFicohsa'
}, {
  nombre: 'TipoAcuerdoFicohsa'
}, {
  nombre: 'DondeSeEncuentraVehiculo'
}];
const ItemsExpediente = [{
  nombre: 'Id'
}, {
  nombre: 'RefGestorId'
}, {
  nombre: 'RefProveedorAgenteAbogadoId'
}, {
  nombre: 'PolizaExterna'
}, {
  nombre: 'IdentidaConductor'
}, {
  nombre: 'Cliente'
}, {
  nombre: 'Marca'
}, {
  nombre: 'Modelo'
}, {
  nombre: 'Year'
}, {
  nombre: 'NumeroPlaca'
}, {
  nombre: 'Chasis'
}, {
  nombre: 'Color'
}, {
  nombre: 'FechaRegistro'
}, {
  nombre: 'Direccion'
}, {
  nombre: 'IdPais'
}, {
  nombre: 'IdCiudad'
}, {
  nombre: 'RefDepartamentoId'
}, {
  nombre: 'ServicioAtencionId'
}, {
  nombre: 'DireccionDestino'
}, {
  nombre: 'Pais'
}, {
  nombre: 'Ciudad'
}, {
  nombre: 'Colonia'
}, {
  nombre: 'NombreAdicional'
}, {
  nombre: 'NombreCorredor'
}, {
  nombre: 'RefPlanId'
}, {
  nombre: 'NombreConvenio'
}, {
  nombre: 'Plan'
}, {
  nombre: 'Zona'
}, {
  nombre: 'Taller'
}, {
  nombre: 'TelefonoAdicional'
}, {
  nombre: 'TelefonoOrigen'
}, {
  nombre: 'TelefonoReportante'
}, {
  nombre: 'Observaciones'
}, {
  nombre: 'Nombre'
}, {
  nombre: 'RefProveedorId'
}, {
  nombre: 'NombreProveedor'
}, {
  nombre: 'NombreAgente'
}, {
  nombre: 'TipoAgente'
}, {
  nombre: 'Servicio'
}, {
  nombre: 'NombreCategoria'
}, {
  nombre: 'IdAjusteAudiencia'
}, {
  nombre: 'AgendarAudiencia'
}, {
  nombre: 'AseguradoUsoPoliza'
}, {
  nombre: 'Blindado'
}, {
  nombre: 'ColorVehiculo'
}, {
  nombre: 'ConductorAfiliado'
}, {
  nombre: 'ConductorDetenido'
}, {
  nombre: 'DanioFrontal'
}, {
  nombre: 'DanioLataralIzquierdo'
}, {
  nombre: 'DanioLateralDerecho'
}, {
  nombre: 'DanioTrasero'
}, {
  nombre: 'VersionAsegurado'
}, {
  nombre: 'DescripcionAudiencia'
}, {
  nombre: 'AnalisisAsesorEmergencia'
}, {
  nombre: 'DescripcionTercerosHeridos'
}, {
  nombre: 'DescripcionTercerosMuertos'
}, {
  nombre: 'DañosVehiculo'
}, {
  nombre: 'FechaHora'
}, {
  nombre: 'FechaRegistroAjuste'
}, {
  nombre: 'LesionadosSinAudiencia'
}, {
  nombre: 'LugarAudiencia'
}, {
  nombre: 'MarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo'
}, {
  nombre: 'ChasisVehiculo'
}, {
  nombre: 'PlacaVehiculo'
}, {
  nombre: 'AnioVehiculo'
}, {
  nombre: 'NombreAsegurado'
}, {
  nombre: 'NombreConductor'
}, {
  nombre: 'Poliza'
}, {
  nombre: 'ObservacionTaller'
}, {
  nombre: 'RefProveedorAgenteId'
}, {
  nombre: 'TerceroResponsable'
}, {
  nombre: 'TercerosMuertos'
}, {
  nombre: 'VehiculoDetenido'
}, {
  nombre: 'VehiculoVolcado'
}, {
  nombre: 'IdAjustador'
}, {
  nombre: 'Motor'
}, {
  nombre: 'Tipo_Vehiculo'
}, {
  nombre: 'Ramo'
}, {
  nombre: 'CorreoElectronico'
}, {
  nombre: 'Seccion1'
}, {
  nombre: 'Seccion2'
}, {
  nombre: 'Seccion3'
}, {
  nombre: 'Certificado'
}, {
  nombre: 'TipoSiniestro'
}, {
  nombre: 'TipoVehiculo'
}, {
  nombre: 'Parentesco'
}, {
  nombre: 'Deducible'
}, {
  nombre: 'ValorReserva'
}, {
  nombre: 'Moneda'
}];
const ItemsData = [{
  nombre: 'RefAtencionId'
}, {
  nombre: 'RefProveedorAgenteId'
}, {
  nombre: 'RefProveedorAgenteAbogadoId'
}, {
  nombre: 'AgendarAudiencia'
}, {
  nombre: 'AseguradoUsoPoliza'
}, {
  nombre: 'TerceroResponsable'
}, {
  nombre: 'LesionadosSinAudiencia'
}, {
  nombre: 'DescripcionAudiencia'
}, {
  nombre: 'Poliza'
}, {
  nombre: 'Identificacion'
}, {
  nombre: 'Nombre'
}, {
  nombre: 'ConductorAfiliado'
}, {
  nombre: 'ConductorDetenido'
}, {
  nombre: 'Descripcion'
}, {
  nombre: 'MarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo'
}, {
  nombre: 'AnioVehiculo'
}, {
  nombre: 'PlacaVehiculo'
}, {
  nombre: 'ChasisVehiculo'
}, {
  nombre: 'ColorVehiculo'
}, {
  nombre: 'VehiculoDetenido'
}, {
  nombre: 'DescripcionVehiculo'
}, {
  nombre: 'TercerosHeridos'
}, {
  nombre: 'TercerosMuertos'
}, {
  nombre: 'DescripcionTercerosHeridos'
}, {
  nombre: 'DescripcionTercerosMuertos'
}, {
  nombre: 'DanioFrontal'
}, {
  nombre: 'DanioTrasero'
}, {
  nombre: 'DanioLateralDerecho'
}, {
  nombre: 'DanioLataralIzquierdo'
}, {
  nombre: 'VehiculoVolcado'
}, {
  nombre: 'DescripcionDanio'
}, {
  nombre: 'RefPaisId'
}, {
  nombre: 'RefCiudadId'
}, {
  nombre: 'RefDeptoId'
}, {
  nombre: 'RefMunicipioId'
}, {
  nombre: 'FechaHora'
}, {
  nombre: 'Lugar'
}, {
  nombre: 'RefUsuarioId'
}, {
  nombre: 'TallerMecanicoId'
}, {
  nombre: 'Blindado'
}, {
  nombre: 'ObservacionTaller'
}, {
  nombre: 'ReclamoAsegurado'
}, {
  nombre: 'Observaciones'
}, {
  nombre: 'Latitud'
}, {
  nombre: 'Longitud'
}, {
  nombre: 'NombreConductor'
}, {
  nombre: 'IdentidaConductor'
}, {
  nombre: 'DPI_Pasaporte'
}, {
  nombre: 'TelefonoConductor'
}, {
  nombre: 'CelularConductor'
}, {
  nombre: 'Edad'
}, {
  nombre: 'Licencia'
}, {
  nombre: 'TipoLicencia'
}, {
  nombre: 'Vigencia'
}, {
  nombre: 'DireccionConductor'
}, {
  nombre: 'Sexo'
}, {
  nombre: 'RefTipoConductorId'
}, {
  nombre: 'DireccionEnvioCorrespondencia'
}, {
  nombre: 'CorreoElectronico'
}, {
  nombre: 'RefTipoLicenciaId'
}, {
  nombre: 'NombreAtribuyeAccidente'
}, {
  nombre: 'AutoridadInvolucrada'
}, {
  nombre: 'UbicacionVehiculoDetenido'
}, {
  nombre: 'PruebaAlcoholemia'
}, {
  nombre: 'RefTipoCombustibleId'
}, {
  nombre: 'AC'
}, {
  nombre: 'Rines'
}, {
  nombre: 'BolsaAire'
}, {
  nombre: 'CierreCentralizado'
}, {
  nombre: 'Mecanico'
}, {
  nombre: 'RetrovisorElectronico'
}, {
  nombre: 'Overfenders'
}, {
  nombre: 'ColaPato'
}, {
  nombre: 'CintaDecorativa'
}, {
  nombre: 'LicenciaEstado'
}, {
  nombre: 'ObservacionesFinales'
}, {
  nombre: 'RefTipoSolicitanteInformeAjusteId'
}, {
  nombre: 'TipoAcuerdoFicohsa'
}, {
  nombre: 'DondeSeEncuentraVehiculo'
}, {
  nombre: 'NumeroUnidad'
}, {
  nombre: 'Parentesco'
}, {
  nombre: 'FechaNacimientoConductor'
}, {
  nombre: 'CulpableCompromisoPago'
}, {
  nombre: 'ObservacionCompromisoPago'
}, {
  nombre: 'PorqueNoUsoServicioAsistencia'
}, {
  nombre: 'Kilometraje'
}, {
  nombre: 'Motor'
}, {
  nombre: 'OtrosTalleres'
}];
// required-data
const requiredDataAjustador = [/*{name:'person', titulo: 'Datos Solicitante', idSegmento: 'segmentRequestAju', pagSegmento: 'segmento-solicitante'} */
//{nombre: 'Parentesco', idSegmento: 'segmentRequestAju', pagSegmento: 'segmento-solicitante', segmentIndex: 0, requerido: true, etiqueta: 'Parentesco', categoria: 'ajustador', storageKey: 'elParentesco'},
//{nombre: 'Cliente', idSegmento: 'segmentRequestAju', pagSegmento: 'segmento-solicitante', segmentIndex: 0, requerido: true, etiqueta: 'Nombre Del Conductor', categoria: 'ajustador', storageKey: 'elNombreCliente'},
//{nombre: 'RefTipoSolicitanteInformeAjusteId', idSegmento: 'segmentRequestAju', pagSegmento: 'segmento-solicitante', segmentIndex: 0, requerido: true, etiqueta: 'Tipo De Solicitante', categoria: 'ajustador', storageKey: 'tipoSolicitante'},
//{nombre: 'Kilometraje', idSegmento: 'segmentRequestAju', pagSegmento: 'segmento-solicitante', segmentIndex: 1, requerido: true, etiqueta: 'Kilometraje', categoria: 'ajustador', storageKey: 'elKilometraje'},
{
  nombre: 'Kilometraje',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-vehiculo',
  segmentIndex: 1,
  requerido: true,
  etiqueta: 'Kilometraje',
  categoria: 'ajustador',
  storageKey: 'elKilometraje'
}, {
  nombre: 'RefTipoCombustibleId',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Tipo de Combustible',
  categoria: 'ajustador',
  storageKey: 'elTipoCombustible'
}, {
  nombre: 'AC',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Aire Acondicionado',
  categoria: 'ajustador',
  storageKey: 'elAC'
}, {
  nombre: 'Rines',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Rines',
  categoria: 'ajustador',
  storageKey: 'losRines'
}, {
  nombre: 'BolsaAire',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Bolsa de Aire',
  categoria: 'ajustador',
  storageKey: 'elBA'
}, {
  nombre: 'CierreCentralizado',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Cierre Centralizado',
  categoria: 'ajustador',
  storageKey: 'elCentra'
}, {
  nombre: 'Mecanico',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Mecánico',
  categoria: 'ajustador',
  storageKey: 'laTransmisionId'
}, {
  nombre: 'RetrovisorElectronico',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Retrovisor Electrónico',
  categoria: 'ajustador',
  storageKey: 'elRetrovisor'
}, {
  nombre: 'Overfenders',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Overfenders',
  categoria: 'ajustador',
  storageKey: 'elOverfender'
}, {
  nombre: 'ColaPato',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Cola De Pato',
  categoria: 'ajustador',
  storageKey: 'laColaPato'
}, {
  nombre: 'CintaDecorativa',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Cinta Decorativa',
  categoria: 'ajustador',
  storageKey: 'laCinta'
}, {
  nombre: 'ObservacionesFinales',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-danio',
  segmentIndex: 3,
  requerido: true,
  etiqueta: 'Observaciones Finales',
  categoria: 'ajustador',
  storageKey: 'lasObservaciones'
}, {
  nombre: 'Observaciones',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-danio',
  segmentIndex: 3,
  requerido: true,
  etiqueta: 'Observaciones',
  categoria: 'ajustador',
  storageKey: 'laObservacionTaller'
}, {
  nombre: 'TallerMecanicoId',
  idSegmento: 'segmentRequestAju',
  pagSegmento: 'segmento-caracteristicas',
  segmentIndex: 2,
  requerido: true,
  etiqueta: 'Taller',
  categoria: 'ajustador',
  storageKey: 'elTallerId'
}];
const requiredDataCliente = [{
  nombre: 'AseguradoUsoPoliza',
  requerido: true,
  etiqueta: 'Usó Póliza',
  categoria: 'cliente',
  segmentoId: 'segmentCoordinates',
  inputIndex: 0,
  segmentIndex: 0,
  segmentKey: 'location',
  storageKey: 'elAseguradoUsoPoliza'
}, {
  nombre: 'Cliente',
  requerido: true,
  etiqueta: 'Cliente',
  categoria: 'cliente',
  segmentoId: 'segmentAfiliated',
  inputIndex: 1,
  segmentIndex: 1,
  segmentKey: 'person',
  storageKey: 'elNombreCliente'
}, {
  nombre: 'Poliza',
  requerido: true,
  etiqueta: 'Póliza',
  categoria: 'cliente',
  segmentoId: 'segmentAfiliated',
  inputIndex: 2,
  segmentIndex: 1,
  segmentKey: 'person',
  storageKey: 'laPoliza'
}, {
  nombre: 'DireccionEnvioCorrespondencia',
  requerido: true,
  etiqueta: 'Dirección Envío Correspondencia',
  categoria: 'cliente',
  segmentoId: 'segmentAfiliated',
  inputIndex: 4,
  segmentIndex: 1,
  segmentKey: 'person',
  storageKey: 'laDireccionEnmvio'
}, {
  nombre: 'CorreoElectronico',
  requerido: true,
  etiqueta: 'Correo Electrónico',
  categoria: 'cliente',
  segmentoId: 'segmentAfiliated',
  inputIndex: 3,
  segmentIndex: 1,
  segmentKey: 'person',
  storageKey: 'elCorreoElectronico'
}, {
  nombre: 'FechaHora',
  requerido: true,
  etiqueta: 'Fecha Hora Siniestro',
  categoria: 'cliente',
  segmentoId: 'segmentAfiliated',
  inputIndex: 4,
  segmentIndex: 1,
  segmentKey: 'person',
  storageKey: 'laFechaHora'
}, {
  nombre: 'MarcaVehiculo',
  requerido: true,
  etiqueta: 'Marca Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentVehicle',
  inputIndex: 5,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'laMarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo',
  requerido: true,
  etiqueta: 'Modelo Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentVehicle',
  inputIndex: 6,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'elModeloVehiculo'
}, {
  nombre: 'AnioVehiculo',
  requerido: true,
  etiqueta: 'Año Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentVehicle',
  inputIndex: 7,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'elAnioVehiculo'
}, {
  nombre: 'ChasisVehiculo',
  requerido: true,
  etiqueta: 'Chasis Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentVehicle',
  inputIndex: 8,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'elChasisVehiculo'
}, {
  nombre: 'PlacaVehiculo',
  requerido: true,
  etiqueta: 'Placa Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentVehicle',
  inputIndex: 9,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'laPlacaVehiculo'
}, {
  nombre: 'NumeroUnidad',
  requerido: true,
  etiqueta: 'Número de Unidad',
  segmentoId: 'segmentVehicle',
  inputIndex: 10,
  segmentIndex: 2,
  segmentKey: 'car-sport',
  storageKey: 'elNumeroUnidad'
}, {
  nombre: 'NombreConductor',
  requerido: true,
  etiqueta: 'Nombre Conductor',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 11,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'elNombreCliente'
},
//{nombre: 'IdentidaConductor', requerido: true, etiqueta: 'Identidad Conductor', categoria: 'cliente', segmentoId: 'segmentDriver', inputIndex: 12, segmentIndex: 3, segmentKey: 'speedometer', storageKey: 'laIdentidadCliente'},
{
  nombre: 'FechaNacimientoConductor',
  requerido: true,
  etiqueta: 'Fecha Nacimiento Conductor',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 13,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'laFechaNacimientoConductor'
}, {
  nombre: 'Parentesco',
  requerido: true,
  etiqueta: 'Parentesco',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 14,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'elParentesco'
}, {
  nombre: 'TipoLicencia',
  requerido: true,
  etiqueta: 'Tipo Licencia',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 23,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'elTipoLicencia'
}, {
  nombre: 'Licencia',
  requerido: true,
  etiqueta: 'Licencia',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 15,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'laLicencia'
}, {
  nombre: 'Vigencia',
  requerido: true,
  etiqueta: 'Vigencia',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 16,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'laVigencia'
}, {
  nombre: 'DireccionConductor',
  requerido: true,
  etiqueta: 'Dirección Conductor',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 17,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'laDireccionConductor'
}, {
  nombre: 'TelefonoConductor',
  requerido: true,
  etiqueta: 'Teléfono Conductor',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 18,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'elTelefonoOrigen'
}, {
  nombre: 'CelularConductor',
  requerido: true,
  etiqueta: 'Celular Conductor',
  categoria: 'cliente',
  segmentoId: 'segmentDriver',
  inputIndex: 19,
  segmentIndex: 3,
  segmentKey: 'speedometer',
  storageKey: 'elTelefonoOrigen'
}, {
  nombre: 'NombreAtribuyeAccidente',
  requerido: true,
  etiqueta: 'Nombre Del Responsable',
  categoria: 'cliente',
  segmentoId: 'segmentInfo',
  inputIndex: 20,
  segmentIndex: 4,
  segmentKey: 'help-circle',
  storageKey: 'elNombreAtribuyeAccidente'
}, {
  nombre: 'AutoridadInvolucrada',
  requerido: true,
  etiqueta: 'Autoridad Involucrada',
  categoria: 'cliente',
  segmentoId: 'segmentInfo',
  inputIndex: 21,
  segmentIndex: 4,
  segmentKey: 'help-circle',
  storageKey: 'laAutoridadInvolucrada'
}, {
  nombre: 'DondeSeEncuentraVehiculo',
  requerido: true,
  etiqueta: 'Dónde Se Encuentra El Vehículo',
  categoria: 'cliente',
  segmentoId: 'segmentInfo',
  inputIndex: 22,
  segmentIndex: 4,
  segmentKey: 'help-circle',
  storageKey: 'elDondeSeEncuentraVehiculo'
}, {
  nombre: 'UbicacionVehiculoDetenido',
  requerido: true,
  etiqueta: 'Ubicación Vehículo Detenido',
  categoria: 'cliente',
  segmentoId: 'segmentInfo',
  inputIndex: 23,
  segmentIndex: 4,
  segmentKey: 'help-circle',
  storageKey: 'laUbicacionVehiculoDetenido'
}, {
  nombre: 'DescripcionDanio',
  requerido: true,
  etiqueta: 'Descripción Daño',
  categoria: 'cliente',
  segmentoId: 'segmentInfo',
  inputIndex: 24,
  segmentIndex: 4,
  segmentKey: 'help-circle',
  storageKey: 'laDescripcion'
}, {
  nombre: 'RefAtencionId',
  requerido: true,
  etiqueta: 'Id de Atención',
  categoria: 'cliente',
  segmentoId: '',
  inputIndex: 0,
  segmentIndex: 25,
  segmentKey: '',
  storageKey: 'laRefAtencionId'
}];
const requiredData = [{
  nombre: 'Poliza',
  requerido: true,
  etiqueta: 'Póliza',
  categoria: 'cliente',
  storageKey: 'laPoliza'
}, {
  nombre: 'Cliente',
  requerido: true,
  etiqueta: 'Cliente',
  categoria: 'cliente',
  storageKey: 'elNombreCliente'
}, {
  nombre: 'DireccionEnvioCorrespondencia',
  requerido: true,
  etiqueta: 'Dirección Envío Correspondencia',
  categoria: 'cliente',
  storageKey: 'laDireccionEnmvio'
}, {
  nombre: 'FechaHora',
  requerido: true,
  etiqueta: 'Fecha Hora Siniestro',
  categoria: 'cliente',
  storageKey: 'laFechaHora'
}, {
  nombre: 'AseguradoUsoPoliza',
  requerido: true,
  etiqueta: 'Usó Póliza',
  categoria: 'cliente',
  storageKey: 'elAseguradoUsoPoliza'
}, {
  nombre: 'MarcaVehiculo',
  requerido: true,
  etiqueta: 'Marca Vehículo',
  categoria: 'cliente',
  storageKey: 'laMarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo',
  requerido: true,
  etiqueta: 'Modelo Vehículo',
  categoria: 'cliente',
  storageKey: 'elModeloVehiculo'
}, {
  nombre: 'AnioVehiculo',
  requerido: true,
  etiqueta: 'Año Vehículo',
  categoria: 'cliente',
  storageKey: 'elAnioVehiculo'
}, {
  nombre: 'PlacaVehiculo',
  requerido: true,
  etiqueta: 'Placa Vehículo',
  categoria: 'cliente',
  storageKey: 'laPlacaVehiculo'
}, {
  nombre: 'ChasisVehiculo',
  requerido: true,
  etiqueta: 'Chasis Vehículo',
  categoria: 'cliente',
  storageKey: 'elChasisVehiculo'
}, {
  nombre: 'NumeroUnidad',
  requerido: true,
  etiqueta: 'Número de Unidad',
  storageKey: 'elNumeroUnidad'
}, {
  nombre: 'NombreConductor',
  requerido: true,
  etiqueta: 'Nombre Conductor',
  categoria: 'cliente',
  storageKey: 'elNombreCliente'
}, {
  nombre: 'Parentesco',
  requerido: true,
  etiqueta: 'Parentesco',
  categoria: 'cliente',
  storageKey: 'elParentesco'
}, {
  nombre: 'IdentidaConductor',
  requerido: true,
  etiqueta: 'Identidad Conductor',
  categoria: 'cliente',
  storageKey: 'laIdentidadCliente'
}, {
  nombre: 'FechaNacimientoConductor',
  requerido: true,
  etiqueta: 'Fecha Nacimiento Conductor',
  categoria: 'cliente',
  storageKey: 'laFechaNacimientoConductor'
}, {
  nombre: 'TipoLicencia',
  requerido: true,
  etiqueta: 'Tipo Licencia',
  categoria: 'cliente',
  storageKey: 'elTipoLicencia'
}, {
  nombre: 'Licencia',
  requerido: true,
  etiqueta: 'Licencia',
  categoria: 'cliente',
  storageKey: 'laLicencia'
}, {
  nombre: 'Vigencia',
  requerido: true,
  etiqueta: 'Vigencia',
  categoria: 'cliente',
  storageKey: 'laVigencia'
}, {
  nombre: 'DireccionConductor',
  requerido: true,
  etiqueta: 'Dirección Conductor',
  categoria: 'cliente',
  storageKey: 'laDireccionConductor'
}, {
  nombre: 'TelefonFijo',
  requerido: true,
  etiqueta: 'Teléfono Conductor',
  categoria: 'cliente',
  storageKey: 'elTelefonoOrigen'
}, {
  nombre: 'CelularConductor',
  requerido: true,
  etiqueta: 'Celular Conductor',
  categoria: 'cliente',
  storageKey: 'elTelefonoOrigen'
}, {
  nombre: 'NombreAtribuyeAccidente',
  requerido: true,
  etiqueta: 'Nombre Del Responsable',
  categoria: 'cliente',
  storageKey: 'elNombreAtribuyeAccidente'
}, {
  nombre: 'AutoridadInvolucrada',
  requerido: true,
  etiqueta: 'Autoridad Involucrada',
  categoria: 'cliente',
  storageKey: 'laAutoridadInvolucrada'
}, {
  nombre: 'DondeSeEncuentraVehiculo',
  requerido: true,
  etiqueta: 'Dónde Se Encuentra El Vehículo',
  categoria: 'cliente',
  storageKey: 'elDondeSeEncuentraVehiculo'
}, {
  nombre: 'UbicacionVehiculoDetenido',
  requerido: true,
  etiqueta: 'Ubicación Vehículo Detenido',
  categoria: 'cliente',
  storageKey: 'laUbicacionVehiculoDetenido'
}, {
  nombre: 'DescripcionDanio',
  requerido: true,
  etiqueta: 'Descripción Daño',
  categoria: 'cliente',
  storageKey: 'laDescripcion'
}, {
  nombre: 'CorreoElectronico',
  requerido: true,
  etiqueta: 'Correo Electrónico',
  categoria: 'cliente',
  storageKey: 'elCorreoElectronico'
}, {
  nombre: 'RefAtencionId',
  requerido: true,
  etiqueta: 'Id de Atención',
  categoria: 'cliente',
  storageKey: 'laRefAtencionId'
}, {
  nombre: 'RefTipoSolicitanteInformeAjusteId',
  requerido: true,
  etiqueta: 'Tipo De Solicitante',
  categoria: 'ajustador',
  storageKey: 'tipoSolicitante'
}, {
  nombre: 'Kilometraje',
  requerido: true,
  etiqueta: 'Kilometraje',
  categoria: 'ajustador',
  storageKey: 'elKilometraje'
}, {
  nombre: 'RefTipoCombustibleId',
  requerido: true,
  etiqueta: 'Tipo de Combustible',
  categoria: 'ajustador',
  storageKey: 'elTipoCombustible'
}, {
  nombre: 'AC',
  requerido: true,
  etiqueta: 'Aire Acondicionado',
  categoria: 'ajustador',
  storageKey: 'elAC'
}, {
  nombre: 'Rines',
  requerido: true,
  etiqueta: 'Rines',
  categoria: 'ajustador',
  storageKey: 'losRines'
}, {
  nombre: 'BolsaAire',
  requerido: true,
  etiqueta: 'Bolsa de Aire',
  categoria: 'ajustador',
  storageKey: 'elBA'
}, {
  nombre: 'CierreCentralizado',
  requerido: true,
  etiqueta: 'Cierre Centralizado',
  categoria: 'ajustador',
  storageKey: 'elCentra'
}, {
  nombre: 'Mecanico',
  requerido: true,
  etiqueta: 'Mecánico',
  categoria: 'ajustador',
  storageKey: 'laTransmisionId'
}, {
  nombre: 'RetrovisorElectronico',
  requerido: true,
  etiqueta: 'Retrovisor Electrónico',
  categoria: 'ajustador',
  storageKey: 'elRetrovisor'
}, {
  nombre: 'Overfenders',
  requerido: true,
  etiqueta: 'Overfenders',
  categoria: 'ajustador',
  storageKey: 'elOverfender'
}, {
  nombre: 'ColaPato',
  requerido: true,
  etiqueta: 'Cola De Pato',
  categoria: 'ajustador',
  storageKey: 'laColaPato'
}, {
  nombre: 'CintaDecorativa',
  requerido: true,
  etiqueta: 'Cinta Decorativa',
  categoria: 'ajustador',
  storageKey: 'laCinta'
}, {
  nombre: 'LicenciaEstado',
  requerido: true,
  etiqueta: 'Estado De La Licencia',
  categoria: 'cliente',
  storageKey: 'laLicenciaEstado'
}, {
  nombre: 'ObservacionesFinales',
  requerido: true,
  etiqueta: 'Observaciones Finales',
  categoria: 'ajustador',
  storageKey: 'lasObservaciones'
}, {
  nombre: 'Observaciones',
  requerido: true,
  etiqueta: 'Observaciones',
  categoria: 'ajustador',
  storageKey: 'laObservacionTaller'
}, {
  nombre: 'TallerMecanicoId',
  requerido: true,
  etiqueta: 'Taller',
  categoria: 'ajustador',
  storageKey: 'elTallerId'
}];
const requiredData_Less = [{
  nombre: 'Poliza',
  requerido: true,
  etiqueta: 'Póliza',
  categoria: 'cliente',
  storageKey: 'laPoliza'
}, {
  nombre: 'Cliente',
  requerido: true,
  etiqueta: 'Cliente',
  categoria: 'cliente',
  storageKey: 'elNombreCliente'
}, {
  nombre: 'FechaHora',
  requerido: true,
  etiqueta: 'Fecha Hora Siniestro',
  categoria: 'cliente',
  storageKey: 'laFechaHora'
}, {
  nombre: 'AseguradoUsoPoliza',
  requerido: true,
  etiqueta: 'Usó Póliza',
  categoria: 'cliente',
  storageKey: 'elAseguradoUsoPoliza'
}, {
  nombre: 'MarcaVehiculo',
  requerido: true,
  etiqueta: 'Marca Vehículo',
  categoria: 'cliente',
  storageKey: 'laMarcaVehiculo'
}, {
  nombre: 'ModeloVehiculo',
  requerido: true,
  etiqueta: 'Modelo Vehículo',
  categoria: 'cliente',
  storageKey: 'elModeloVehiculo'
}, {
  nombre: 'AnioVehiculo',
  requerido: true,
  etiqueta: 'Año Vehículo',
  categoria: 'cliente',
  storageKey: 'elAnioVehiculo'
}, {
  nombre: 'PlacaVehiculo',
  requerido: true,
  etiqueta: 'Placa Vehículo',
  categoria: 'cliente',
  storageKey: 'laPlacaVehiculo'
}, {
  nombre: 'ChasisVehiculo',
  requerido: true,
  etiqueta: 'Chasis Vehículo',
  categoria: 'cliente',
  storageKey: 'elChasisVehiculo'
}, {
  nombre: 'NombreConductor',
  requerido: true,
  etiqueta: 'Nombre Conductor',
  categoria: 'cliente',
  storageKey: 'elNombreCliente'
}, {
  nombre: 'RefAtencionId',
  requerido: true,
  etiqueta: 'Id de Atención',
  categoria: 'cliente',
  storageKey: 'laRefAtencionId'
}];
const requiredData_NOP = [{
  nombre: 'TipoAcuerdoFicohsa'
}, {
  nombre: 'NombreConductor'
}, {
  nombre: 'elTipoGenero'
}];
const actionButtons = [{
  title: 'Materiales',
  icon: '../../assets/img/arrive6.svg'
}, {
  title: 'Chat',
  icon: '../../assets/img/arrive5.svg'
}, {
  title: 'Calificar',
  icon: '../../assets/img/arrive4.svg'
}, {
  title: 'Marcar contacto',
  icon: '../../assets/img/arrive3.svg'
}, {
  title: 'En arribo',
  icon: '../../assets/img/arrive2.svg'
}, {
  title: 'Acciones',
  icon: '../../assets/img/action1.svg'
}];
const requiredDataLabels = [{
  etiqueta: 'Póliza'
}, {
  etiqueta: 'Cliente'
}, {
  etiqueta: 'Dirección Envío Correspondencia'
}, {
  etiqueta: 'Teléfono Conductor'
}, {
  etiqueta: 'Celular Conductor'
}, {
  etiqueta: 'Correo Electrónico'
}, {
  etiqueta: 'Fecha Hora Siniestro'
}, {
  etiqueta: 'Usó Póliza'
}, {
  etiqueta: 'Marca Vehículo'
}, {
  etiqueta: 'Modelo Vehículo'
}, {
  etiqueta: 'Año Vehículo'
}, {
  etiqueta: 'Placa Vehículo'
}, {
  etiqueta: 'Chasis Vehículo'
}, {
  etiqueta: 'Motor Vehículo'
}, {
  etiqueta: 'Número Unidad'
}, {
  etiqueta: 'Nombre Conductor'
}, {
  etiqueta: 'Parentesco'
}, {
  etiqueta: 'Identidad Conductor'
}, {
  etiqueta: 'Fecha Nacimiento Conductor'
}, {
  etiqueta: 'Tipo Licencia'
}, {
  etiqueta: 'Licencia'
}, {
  etiqueta: 'Vigencia'
}, {
  etiqueta: 'Dirección Conductor'
}, {
  etiqueta: 'Teléfono Conductor'
}, {
  etiqueta: 'Celular Conductor'
}, {
  etiqueta: 'Nombre Del Responsable'
}, {
  etiqueta: 'Autoridad Involucrada'
}, {
  etiqueta: 'Dónde Se Encuentra El Vehículo'
}, {
  etiqueta: 'Ubicación Vehículo Detenido'
}, {
  etiqueta: 'Descripción Daño'
}, {
  etiqueta: 'Tipo De Solicitante'
}, {
  etiqueta: 'Nombre'
}, {
  etiqueta: 'Correo Electrónico'
}, {
  etiqueta: 'Teléfono Solicitante'
}, {
  etiqueta: 'Fecha Siniestro'
}, {
  etiqueta: 'Fecha Inspección'
}, {
  etiqueta: 'Id de Atención'
}, {
  etiqueta: 'Kilometraje'
}, {
  etiqueta: 'Tipo de Combustible'
}, {
  etiqueta: 'Aire Acondicionado'
}, {
  etiqueta: 'Rines'
}, {
  etiqueta: 'Bolsa de Aire'
}, {
  etiqueta: 'Cierre Centralizado'
}, {
  etiqueta: 'Mecánico'
}, {
  etiqueta: 'Retrovisor Electrónico'
}, {
  etiqueta: 'Overfenders'
}, {
  etiqueta: 'Cola De Pato'
}, {
  etiqueta: 'Cinta Decorativa'
}, {
  etiqueta: 'Estado De La Licencia'
}, {
  etiqueta: 'Observaciones Finales'
}, {
  etiqueta: 'Observaciones'
}, {
  etiqueta: 'Daños'
}, {
  etiqueta: 'Taller'
}, {
  etiqueta: 'Dirección Culpable'
}, {
  etiqueta: 'Código De Reclamo'
}];
const adeudaEtiquetas = [{
  etiqueta: "Id"
}, {
  etiqueta: "NombreDeudor"
}, {
  etiqueta: "IdentidadDeudor"
}, {
  etiqueta: "Celular"
}, {
  etiqueta: "Domicilio"
}, {
  etiqueta: "CorreoElectronico"
}, {
  etiqueta: "LugarDeTrabajo"
}, {
  etiqueta: "NombreContacto"
}, {
  etiqueta: "CelularContacto"
}, {
  etiqueta: "FechaRegistroDocumento"
}, {
  etiqueta: "Marca"
}, {
  etiqueta: "Modelo"
}, {
  etiqueta: "Anio"
}, {
  etiqueta: "Placa"
}, {
  etiqueta: "NombreAsegurado"
}, {
  etiqueta: "MarcaImplicado"
}, {
  etiqueta: "ModeloImplicado"
}, {
  etiqueta: "AnioImplicado"
}, {
  etiqueta: "PlacaImplicado"
}, {
  etiqueta: "NombrePersonaPropiedadImplicada"
}, {
  etiqueta: "DanioCausadoObservacion"
}, {
  etiqueta: "RefAtencionId"
}, {
  etiqueta: "FechaRegistro"
}, {
  etiqueta: "FirmaDeudor"
}, {
  etiqueta: "Ciudad"
}, {
  etiqueta: "TelefonoCulpable"
}, {
  etiqueta: "LicenciaCulpable"
}, {
  etiqueta: "TipoLicencia"
}, {
  etiqueta: "FechaVencimientoLicencia"
}, {
  etiqueta: "NombreDireccionPropietarioVehiculoImplicado"
}, {
  etiqueta: "CompromisoDePago"
}, {
  etiqueta: "Observaciones"
}, {
  etiqueta: "Edad"
}, {
  etiqueta: "RefTipoFotografiaIdAdeudado"
}, {
  etiqueta: "RefTipoFotografiaIdBeneficiario"
}];
const tipoBeneficiario = [{
  tipo: 1,
  etiqueta: 'Asegurado'
}, {
  tipo: 2,
  etiqueta: 'Beneficiario'
}, {
  tipo: 3,
  etiqueta: 'Tercero'
}];
const tiposDeReparacion = [{
  tipo: 1,
  etiqueta: 'Reparacion'
}, {
  tipo: 2,
  etiqueta: 'Cambio'
}, {
  tipo: 3,
  etiqueta: 'No Reparar'
}];
const cacheIndexArray = [{
  title: 'IdAtencion'
}, {
  title: 'Nombre'
}, {
  title: 'AutoridadInvolucrada'
}, {
  title: 'NombreConductor'
}, {
  title: 'IdentidaConductor'
}, {
  title: 'Poliza'
}, {
  title: 'NombreAtribuyeAccidente'
}, {
  title: 'TelefonoConductor'
}, {
  title: 'CelularConductor'
}, {
  title: 'CorreoElectronico'
}, {
  title: 'Licencia'
}, {
  title: 'Blindado'
}, {
  title: 'FechaNacimientoConductor'
}, {
  title: 'Edad'
}, {
  title: 'AseguradoUsoPoliza'
}, {
  title: 'PorqueNoUsoServicioAsistencia'
}, {
  title: 'PruebaAlcoholemia'
}, {
  title: 'AgendarAudiencia'
}, {
  title: 'VehiculoDetenido'
}, {
  title: 'ConductorDetenido'
}, {
  title: 'VehiculoVolcado'
}, {
  title: 'DireccionEnvioCorrespondencia'
}, {
  title: 'DireccionConductor'
}, {
  title: 'DondeSeEncuentraVehiculo'
}, {
  title: 'TerceroResponsable'
}, {
  title: 'UbicacionVehiculoDetenido'
}, {
  title: 'DescripcionAudiencia'
}, {
  title: 'LicenciaEstado'
}, {
  title: 'Vigencia'
}, {
  title: 'RefTipoLicenciaId'
}, {
  title: 'TipoLicencia'
}, {
  title: 'NumeroUnidad'
}, {
  title: 'DescripcionTercerosMuertos'
}, {
  title: 'DescripcionTercerosHeridos'
}, {
  title: 'Descripcion'
}, {
  title: 'DescripcionDanio'
}, {
  title: 'RefTipoConductorId'
}, {
  title: 'TercerosMuertos'
}, {
  title: 'TercerosHeridos'
}, {
  title: 'Parentesco'
}, {
  title: 'Latitud'
}, {
  title: 'Longitud'
}, {
  title: 'AnioVehiculo'
}, {
  title: 'ModeloVehiculo'
}, {
  title: 'PlacaVehiculo'
}, {
  title: 'ColorVehiculo'
}, {
  title: 'MarcaVehiculo'
}, {
  title: 'ChasisVehiculo'
}, {
  title: 'Motor'
}];
const valoresPredeterminados = [{
  puntoServicio: "307",
  Sucursal: "0001",
  Producto: "AU01",
  Ramo: "0002",
  Causa: "A001"
}];

/***/ }),

/***/ 88538:
/*!********************************************!*\
  !*** ./src/app/environments/signatures.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "anySignature": () => (/* binding */ anySignature),
/* harmony export */   "emptySignature": () => (/* binding */ emptySignature),
/* harmony export */   "emptySignatureWhite": () => (/* binding */ emptySignatureWhite),
/* harmony export */   "firmaDemoAjustador": () => (/* binding */ firmaDemoAjustador)
/* harmony export */ });
const firmaDemoAjustador = "data:image/jpeg;base64,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bZ9LfaerrpJ1NjpLJRunJcBkfMcNI+rerGDwtP4/xLa7LHW+2WPby3SFjxJVuFfXhhHOGYMefXpc1hHAz3WC17Y7o7QQyQ7T3azXyzl3WbRdqVlPUf6tTEG9bvrJgd12aPf+w22ojtm5enrxom4PPQPtGAvpJHf6OpjBY4fU4ChdT08QysHhbNvcct//AKrNA914/iUgllebV8hj3AZLffufvNO5a2m/Dlp2kvVLqvXOpL3rK+0j2SQ1NxqXtihex/W0xxg5AB/muc5v0VuLStN6s1/o23CxXajuNK44bPSTtljJ/eaSFur5uurautkvVuJLcwBzAbgMwHAALWpqeCnb+gAAOvTfidJRERUlZREREREREREREREREREREREREREXiaaGnjM1RKyKNvd73BoH6lAL5gi9ooled2tsdPtcbtr2xQuaQDGK6N8nP7DSXf1KIy+I/TFzmdSbe6X1NrGccCS2257adrvZ8snT0jvz0kLRgwivqBlRxOydpFh3uNgOaqSV9NEbOeL7L3PIZ1ba/HOa1pc4gADJJ7AKqPtHxHarb1UNh0zomlfg5rqh1wrAPcCMCP8AMO5591+SbF3PUrejczdTUeooHHMtDTllvo5fcPii5I4GB1D1PqVN1bDD9aqGt3Nu892T6H84Ufnkkn0MTjvPoj4+l/KtGgu9RuZvTaNV6Io+vT+lIa233G8SPxDXulaMQ04Ay/oeA7rz09/2eq51pWez2vT9sprLZKCGioaRgjgghb0tY0e39pPcnkrdVfEKtlU5rYm2YwZLb5za5NydpJJzZhoGYKalgdC1xebucbnZewGbdYfNERFQVlERERERERERERERERERERERERERERERERERERERERERERERERERERERERERatzuVFZrbVXe5VDYKSihfUTyu7MjY0uc4/kAV1rS4hrRclcJDRcrDfr9Z9MWiqv1/uEVFQUbDJNNKcBo/tJJwABySQByqno7NqXfyRt51WK6xaCOHUNlZIYqm7M9JapzTlsZ7iMHnvngOPvTunL3vZcKLX2v4X0el4HipsOnS7InHBZVVeCQ4kctZ2APtnquTtwFuOezBRkREGo1u0hm5u12137OhufOs4NdiHpPFotQ+1vP8Owa9exatrtVtslvgtVnoIKKjpm9EMEEYYxjfYAcLbRFhucXkucbkrRADRYIiIuL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LBm3BY4YIKdnlU8LImDnpY0NH8AsiIqZN85VhERERERERERERERERERERERERR2+7daC1P1u1Bo2zV8kmS6WaijdJk9z146gfqCoPP4ZduYJjVaVq9Q6WnJ6hJZ7tLGQ73+cux+mFbSLQp8WrqUZMMzgNlzblo+Cqy0NNOcqSME7bZ+elVG3aXde1Pc7TniDvLWluOi6WuGuzjsOp5GPTJAz3Xtmn/EvQDpp9wNH3THHVW2uSEnHr91xz6q2UU/XVQ76RkbuMbL8w0H4qLq6JvYc4cHu8CSFU77l4nqIYm03t/cT6Gkq6qIf/U//AHkLzFr3xBU2WVewlHWOJy19NqemiaB7EPBJP1VtInWkRHp0sZ98fdeE8yeOzM8e6fFpVSR7ob3SPMLfDlUiQEj5tTUzWcftFmFkO4O/Ug6I/DzHE53AfJqykc1v1IDckfkrXRDiVLqo4+cv/anmk2ud/Jn5FUL9V+Jeo+Sm2r03SHv11F4Ejfywwgr1FV+Kevy37L26tbXDHVNJVyvb6ZHQSCfUZ491biLvWzAPRpoh3OPi4p5i49qZ57wPABR3RNJrukt0w3Au1qr658xdEbdTvijjjwPl+Y5cc554UiRFlzSmZ5kIAvqAsO4BXI2CNoaCTbbnKIiKNe0REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWKqpaatppaKtp4qinqGOililYHskY4Yc1zTwQQSCD3WVF0Eg3CEXzFRGw7SbZ6agmp7Noe0QsnkMsnXTiVxcST+KTJAGThoOB2ACklutVrs9MKO0W2loadvaKmhbEwf6rQAtpFNNVT1BJmeXE7ST4qKOGKIWjaBwFkREUClREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX/2Q==";
const emptySignature = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWArwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
const emptySignatureWhite = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWArwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";
const anySignature = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADIBDgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=";

/***/ }),

/***/ 53543:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);









let JwtInterceptor = class JwtInterceptor {
  constructor(apiService, toastCtrl, loading) {
    this.apiService = apiService;
    this.toastCtrl = toastCtrl;
    this.loading = loading;
  }
  intercept(request, next) {
    if (this.isInBlockedList(request.url)) {
      return next.handle(request);
    } else {
      return next.handle(this.addToken(request)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
          console.log(err, 'estado');
          switch (err.status) {
            // case 400:
            //    return this.handle400Error(err);
            case 401:
              return this.handle401Error(request, next);
            case 0:
              return this.handle401Error();
            default:
              return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
          }
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
        }
      }));
    }
  }
  isInBlockedList(url) {
    if (url == `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}/Login/Autenticacion` || this.apiService.whiteList.includes(url)) {
      return true;
    } else {
      return false;
    }
  }
  addToken(req) {
    if (this.apiService.currentAccessToken) {
      return req.clone({
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
          Authorization: this.apiService.currentAccessToken //`Bearer ${this.apiService.currentAccessToken}`
        })
      });
    } else {
      return req;
    }
  }
  handle400Error(err) {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loading.create();
      loading.dismiss();
      const toast = yield _this.toastCtrl.create({
        message: err.error.Message,
        duration: 2000
      });
      toast.present();
      // this.apiService.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(err.error.Message);
    })();
  }
  // private async handle401Error(){
  //   const toast = await this.toastCtrl.create({
  //     message:'Su sesión ha caducado',
  //     duration:2000
  //   });
  //   toast.present();
  //   this.apiService.logout();
  //   return of(null);
  // }
  handle401Error(request, next) {
    if (!request || !next) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.apiService.refreshSessionSilently()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(sessionRefreshed => {
      if (sessionRefreshed) {
        return next.handle(this.addToken(request));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }));
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
    }];
  }
};
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()], JwtInterceptor);


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/predeterminados */ 11426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! capacitor-secure-storage-plugin */ 16520);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast.service */ 84465);















//Constantes
const ACCESS_TOKEN_KEY = 'MY_ACCESS_CODE'; //this change maybe later
const USER_DATA = 'MY_USER_DATA'; // CHANGE LATER TOO
const PUSH_TOKEN = 'MY_PUSH_TOKEN'; // the value is generate by onesignal is send when login
let ApiService = class ApiService {
  constructor(http, router, toaster) {
    this.http = http;
    this.router = router;
    this.toaster = toaster;
    this.firmaDemoAjustador = _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.firmaDemoAjustador;
    this.emptySignature = _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignature;
    this.emptySignatureWhite = _environments_signatures__WEBPACK_IMPORTED_MODULE_6__.emptySignatureWhite;
    this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.currentAccessToken = null;
    this.currentUser = null;
    // Environment test
    /*
    whiteList=[`${environment.api_url}/Login/Autenticacion`]
           apiUrl = environment.api_url;
    */
    // Environment producción
    this.whiteList = [`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url}/Login/Autenticacion`];
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url;
    this.filesUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.helpFilesUrl.api_url;
    this.siniestroData = [];
    this.coberturas = [];
    this.silentLoginPromise = null;
    localStorage.setItem('apiUrl', this.apiUrl);
  }
  request(urlRequest, data) {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        url: _this.apiUrl + urlRequest,
        headers: {
          'X-Fake-Header': 'Fake-Value'
        },
        params: data
      };
      console.log(options);
      const response = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.CapacitorHttp.post(options);
    })();
  }
  loadToken() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
        key: ACCESS_TOKEN_KEY
      }); // maybe need use JSON.parse
      const user = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
        key: USER_DATA
      }); // this is the local variable user
      if (token && token.value && user && user.value) {
        _this2.currentAccessToken = token.value;
        _this2.currentUser = JSON.parse(user.value);
        _this2.isAuthenticated.next(true);
        localStorage.setItem('ajustadorActual', user.value);
        return true;
      } else {
        _this2.isAuthenticated.next(false);
        return false;
      }
    })();
  }
  MisAtenciones(credentials) {
    console.log(credentials);
    // 3912
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerMisAtenciones?IdProveedorAgente=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  MisAtencionesActivas(credentials) {
    console.log(credentials);
    // 3912
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerMisAtencionesActivas?IdProveedorAgente=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // get /api/Proveedor/ContarOtrosDanios
  ContarOtrosDanios() {
    // 3912
    return this.http.get(`${this.apiUrl}/Proveedor/ContarOtrosDanios`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/GuardarTiposPersonasSiniestros
  GuardarLesionado(credentials) {
    let body = {
      Nombre: credentials.Nombre,
      Telefono: credentials.Telefono,
      Direccion: credentials.Direccion,
      DescripcionLesion: credentials.DescripcionLesion,
      DireccionHospitalizacion: credentials.DireccionHospitalizacion,
      TipoPersonaSiniestro: credentials.TipoPersonaSiniestro,
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId
    };
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTiposPersonasSiniestros`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/GuardarTiposPersonasSiniestros
  GuardarPersonaSiniestro(credentials) {
    let body = {
      Nombre: credentials.Nombre,
      Telefono: credentials.Telefono,
      Direccion: credentials.Direccion,
      DescripcionLesion: credentials.DescripcionLesion,
      DireccionHospitalizacion: credentials.DireccionHospitalizacion,
      TipoPersonaSiniestro: credentials.TipoPersonaSiniestro,
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId
    };
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTiposPersonasSiniestros`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Guardar Tercero
  GuardarTerceros(credentials) {
    let body = {
      RefAjustadorAudienciaId: credentials.RefAjustadorAudienciaId,
      NombreCompleto: credentials.NombreCompleto,
      Identificacion: credentials.Identificacion,
      DPI_Pasaporte: credentials.DPI_Pasaporte,
      Telefono: credentials.Telefono,
      Celular: credentials.Telefono,
      Vigencia: credentials.Vigencia,
      TipoLicencia: credentials.TipoLicencia,
      Licencia: credentials.Licencia,
      Edad: credentials.Edad,
      Sexo: credentials.Sexo,
      Culpalble: credentials.Culpalble,
      Afectado: credentials.Afectado,
      Marca: credentials.Marca,
      Modelo: credentials.Modelo,
      TipoVehiculo: credentials.TipoVehiculo,
      Anio: credentials.Anio,
      Placa: credentials.Placa,
      Color: credentials.Color,
      Chasis: credentials.Chasis,
      Motor: credentials.Motor,
      RefAgenteProveedorId: credentials.RefAgenteProveedorId,
      TipoTercero: credentials.TipoTercero
    };
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarTercerosReclamo`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Guardar Propiedad 
  GuardarPropiedadTercero(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarPropiedadDaniadaSiniestro_HN`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Guardar Firmas
  GuardarFirmaAsegurado(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFirmas`, credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //POST /api/Proveedor/SubirFirmaAjustador
  GuardarFirmaAjustador(credentials) {
    let body = {
      FotoFirma: credentials.Firma,
      IdAgente: credentials.IdAgente
    };
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFirmaAjustador`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/FicohsaHN/Subir_Archivos_WSFH
  GuardarArchivoSiniestro(credentials) {
    let body = {
      filetxt: credentials.filetxt,
      CodigoSolicitud_BPM: credentials.CodigoSolicitud_BPM,
      NombreTipoExtensionFile: credentials.NombreTipoExtensionFile
    };
    return this.http.post(`${this.apiUrl}/FicohsaHN/Subir_Archivos_WSFH`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/FicohsaHN/Valida_Lista_Coberturas
  Valida_Lista_Coberturas(cobertura) {
    console.log('cobertura');
    console.dir(cobertura);
    let body = {
      pNumPoliza: cobertura.pNumPoliza,
      pNumSiniestro: cobertura.pNumSiniestro,
      pNumCertificado: cobertura.pNumCertificado,
      pNumEndoso: cobertura.pNumEndoso,
      pNumAsegurado: cobertura.pNumAsegurado
    };
    return this.http.post(`${this.apiUrl}/FicohsaHN/Valida_Lista_Coberturas`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      if (res.length == 0) {
        this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios. ', 'top', 'danger', 10000);
      } else {
        localStorage.setItem('coberturas', JSON.stringify(res));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Guardar fotos
  GuardarFotos(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFotosSiniestro`, credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/SubirFotografiaAjustador
  GuardarFotoAjustador(credentials) {
    let body = {
      Fotografia: credentials[0].Fotografia,
      IdAgente: credentials[0].IdAgente
    };
    console.log("body en el envio de la fotografia del ajustador ");
    console.dir(credentials);
    return this.http.post(`${this.apiUrl}/Proveedor/SubirFotografiaAjustador`, body).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Envio de token push
  SendToken(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/TokenPushOneSignal?IdProveedorAgente=${credentials.IdProveedorAgente}&TokenPush=${credentials.TokenPush}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Guardar Siniestros
  GuardarSiniestro(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/GuardarCacheCliente
  GuardarCacheCliente(credentials) {
    this.idAtencion = localStorage.getItem('idAtencion');
    console.log('Cache en api');
    console.dir(credentials);
    let cacheData = {};
    for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_2__.cacheIndexArray.length; index++) {
      const element = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_2__.cacheIndexArray[index];
      let key = element.title;
      let valor = credentials[key];
      cacheData[key] = valor;
      if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_2__.cacheIndexArray.length - 1) {
        cacheData['IdAtencion'] = parseInt(this.idAtencion);
        console.log('Esta data voy a enviar');
        console.dir(cacheData);
      }
    }
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarCacheCliente`, cacheData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  handleSiniestroData(siniestroData) {
    let nombre;
    let valor;
    console.log('Siniestro en api');
    console.dir(siniestroData);
    for (let index = 0; index < siniestroData.length; index++) {
      const elementE = siniestroData[index];
      const duplicados = this.siniestroData.filter(item => item.nombre === elementE.nombre);
      console.log('Duplicados de ' + elementE.nombre + ' son: ' + duplicados.length);
      if (duplicados.length === 0) {
        nombre = elementE.nombre;
        valor = elementE.valor;
        this.siniestroData[nombre] = valor;
        //this.siniestroData.push({nombre: valor});
      }

      if (index == siniestroData.length - 1) {
        console.log('Siniestro corregido en api');
        console.dir(this.siniestroData);
        setTimeout(() => {
          this.GuardarSiniestroHN(this.siniestroData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
            var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              console.log('Siniestro guardado');
              console.dir(res);
            });
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
        }, 600);
      }
    }
  }
  GuardarSiniestroHN(envioData) {
    console.log('Siniestro en api');
    console.dir(envioData);
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, envioData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  GuardarSiniestroHN_Sin_Poliza(siniestroData) {
    //alert('Aqui voy otra vez');
    console.log('Soy un feliz envío sin póliza =) ');
    console.dir(siniestroData);
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, siniestroData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  GuardarInformeAjustador(credentials) {
    console.log('Informe ajustador en api');
    console.dir(credentials);
    let siniestroData = {};
    for (let index = 0; index < credentials.length; index++) {
      const element = credentials[index];
      console.log(element.nombre + ', ' + element.valor);
      if (element.valor != null || element.valor != undefined) {
        siniestroData[element.nombre] = element.valor;
      }
      if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_2__.ItemsData.length - 1) {
        console.dir(siniestroData);
      }
    }
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarInformeSiniestros_HN`, siniestroData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  /*
    
     for (let index = 0; index < ItemsData.length; index++) {
     const element = ItemsData[index];
     console.log(element.nombre)
     console.log(credentials[element.nombre])
       let valor = credentials[element.nombre];
     
     
   }
  */
  // POST /api/Proveedor/GuardaInformerAjustador_HN
  /*
  GuardarInforme(credentials:any): Observable<any> {
   console.log('Informe en api');
   console.dir(credentials)
   let siniestroData = {}
   for (let index = 0; index < ItemsData.length; index++) {
     const element = ItemsData[index];
     console.log(element.nombre)
     console.log(credentials[element.nombre])
     let valor = credentials[element.nombre];
     if (valor != null || valor != undefined) {
       siniestroData[element.nombre] =valor
     }
       if (index == (ItemsData.length-1)) {
       console.dir(siniestroData)
     }
   }
   return this.http.post(`${this.apiUrl}/Proveedor/GuardaInformerAjustador_HN`,siniestroData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
     switchMap(( res: any  ) => {
       return of(res);
     }),
    tap(_ => {
      this.isAuthenticated.next(true);
    })
  )
  }
  */
  //Datos tipos de siniestros
  tipoDeSiniestros() {
    return this.http.post(`${this.apiUrl}/Proveedor/TiposDeSiniestroFicohsa`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/ActualizarFiniquito
  ActualizarFiniquito(credentials) {
    console.log(credentials);
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarFiniquito?RefAtencionId=${credentials.RefAtencionId}&NumeroReclamo=${credentials.NumeroReclamo}&TipoCoberturaFicohsa=${credentials.TipoCoberturaFicohsa}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      if (res === null) {
        res = "yes";
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ObtenerAgenteProveedor
  ObtenerAgenteProveedor(agenteId) {
    let finiquitoData = {
      agenteId: agenteId
    };
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerAgenteProveedor?agenteId=${agenteId}}`, finiquitoData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      if (res === null) {
        res = "yes";
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/ObtenerFiniquito
  ObtenerFiniquito(RefAtencionId) {
    let finiquitoData = {
      RefAtencionId: RefAtencionId
    };
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerFiniquito?RefAtencionId=${RefAtencionId}}`, finiquitoData).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      if (res === null) {
        res = "yes";
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Cambio de estado de expediente
  cambiarEstadoOrden(credentials) {
    console.log(credentials);
    return this.http.post(`${this.apiUrl}/Proveedor/TomarORCancelarAtencion?IdAtencion=${credentials.id}&Estado=${credentials.estado}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      if (res === null) {
        res = "yes";
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/ActualizaLogAtencion
  ActualizaLogAtencion(credentials) {
    console.log('Para actualizar el estado de ' + credentials);
    console.log(credentials);
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizaLogAtencion?IdAtencion=${credentials}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      if (res === null) {
        res = "yes";
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // Retomar lista de ajutadores para reasignar 
  Ajustadores(credentials) {
    return this.http.get(`${this.apiUrl}/Proveedor/ListadoAjustadores?IdPais=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // get /api/Proveedor/ListadoAbogados
  Abogados(credentials) {
    return this.http.get(`${this.apiUrl}/Proveedor/ListadoAbogados?IdPais=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // Hacer cambio de asignacion asignar a otro.
  Reasignar(credentials) {
    return this.http.post(`${this.apiUrl}/Proveedor/ReAsignarExpediente?IdAtencion=${credentials.IdAtencion}&IdAgenteProveedor=${credentials.IdAgenteProveedor}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Datos de expedientes
  Expediente(credentials) {
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerDatosExpedientes?IdAtencion=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      localStorage.setItem('elExpediente', JSON.stringify(res));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //get /api/Proveedor/ObtenerDatosDeAtencion 
  DatosDeAtencion(credentials) {
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerDatosDeAtencion?IdAtencion=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log("Hasta este punto, todo bien : " + res.length);
      //console.dir(res[0]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //GET /api/Proveedor/ObtenerCacheCliente
  ObtenercacheCliente(credentials) {
    return this.http.get(`${this.apiUrl}/Proveedor/ObtenerCacheCliente?IdAtencion=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log("Datos del caché del cliente : " + res.length);
      //console.dir(res[0]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ObtenerDaniosExtras
  ObtenerDaniosExtras(IdAtencion, TipoEntidad) {
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerDaniosExtras?RefAtencionId=${IdAtencion}&TipoEntidad=${TipoEntidad}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ActualizarTipoReparacion
  ActualizarTipoReparacion(Id, Tipo, indexFront) {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarTipoReparacion?Id=${Id}&Tipo=${Tipo}&indexFront=${indexFront}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ActualizarIndexFront
  ActualizarIndexFront(Id, indexFront) {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarIndexFront?Id=${Id}&indexFront=${indexFront}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ActualizarEstadoDanioExtraAtencion
  ActualizarEstadoDanioExtraAtencion(RefAtencionId) {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarEstadoDanioExtraAtencion?Id=${RefAtencionId}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/EliminaDanioExtra
  EliminaDanioExtra(Id) {
    return this.http.post(`${this.apiUrl}/Proveedor/EliminaDanioExtra?Id=${Id}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/GuardarIdTablaAjustador
  GuardarIdTablaAjustador(IdAtencion, IdAgenteProveedor) {
    return this.http.post(`${this.apiUrl}/Proveedor/GuardarIdTablaAjustador?IdAtencion=${IdAtencion}&IdTablaAjustador=${IdAgenteProveedor}`, {}).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // post /api/Proveedor/ActualizarAudicion
  ActualizarAudicion(audicion) {
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarAudicion?IdAjustadorAudiencia=${audicion.IdAjustadorAudiencia}&RefProveedorAgenteAbogadoId=${audicion.RefProveedorAgenteAbogadoId}
      &AgendarAudiencia=${audicion.AgendarAudiencia}&FechaHora=${audicion.FechaHora}&Fecha=${audicion.Fecha}&Hora=${audicion.Hora}&Lugar=${audicion.Lugar}&idAgente=${audicion.idAgente}`, {
      audicion
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ObtenerIdTablaAjustador(IdAtencion) {
    let jssonIdTabla = {
      IdAtencion: IdAtencion
    };
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerIdTablaAjustador?IdAtencion=${IdAtencion}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/ObtenerEstadoLog
  ObtenerEstadoLog(IdAtencion) {
    return this.http.post(`${this.apiUrl}/Proveedor/ObtenerEstadoLog?IdAtencion=${IdAtencion}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Recuperar Contraseña
  recuperarContrasena(credentials) {
    console.log(credentials);
    this.whiteList.push(`${this.apiUrl}/Login/RecuperarPassword?user=${credentials}`);
    return this.http.post(`${this.apiUrl}/Login/RecuperarPassword?user=${credentials}`, credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //cambiar password
  cambiarPassword(credentials) {
    console.log(credentials);
    this.whiteList.push(`${this.apiUrl}/Login/ActualizarPassword?user=${credentials.user}&password=${credentials.password}`);
    return this.http.post(`${this.apiUrl}/Login/ActualizarPassword?user=${credentials.user}&password=${credentials.password}`, null);
  }
  //Validar OTP
  validarOtp(credentials) {
    console.log(credentials);
    this.whiteList.push(`${this.apiUrl}/Login/ValidarClave?clave=${credentials.clave}&user=${credentials.user}`);
    return this.http.post(`${this.apiUrl}/Login/ValidarClave?clave=${credentials.clave}&user=${credentials.user}`, null);
  }
  //Login Api
  //POST /api/Login/SubirVideo
  GuardarVideo(file, idAtencion) {
    this.currentAccessToken = null;
    const formData = new FormData();
    formData.append('File', file, file.name);
    formData.append('IdAtencion', idAtencion.toString());
    formData.append('IdProveedor', this.currentUser.ProveedorAgenteId);
    return this.http.post(this.filesUrl, formData).pipe(e => {
      try {
        console.log(e);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(e);
      } catch (ex) {
        console.log(ex);
      }
    }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      //this.isAuthenticated.next(true);
      console.log("X1");
    }));
  }
  login(credentials) {
    console.log('Login credentials:', credentials);
    console.dir(credentials);
    return this.http.post(`${this.apiUrl}/Login/Autenticacion`, credentials).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(Data => {
      console.log(Data[0], 'los datos');
      this.currentAccessToken = Data[0].Token;
      this.currentUser = Data[0];
      localStorage.setItem('ajustadorActual', JSON.stringify(Data[0]));
      localStorage.setItem('correoActual', credentials.User);
      localStorage.setItem('passwordActual', credentials.Password);
      // this.userData.next(Data[0].Data[0]);
      //this.user = Data.Data;
      const storeAccess = _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
        key: ACCESS_TOKEN_KEY,
        value: Data[0].Token
      });
      const userData = _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
        key: USER_DATA,
        value: JSON.stringify(Data[0])
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all([storeAccess, userData]));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  refreshSessionSilently() {
    if (this.silentLoginPromise) {
      return this.silentLoginPromise;
    }
    this.silentLoginPromise = this.executeSilentLogin().finally(() => {
      this.silentLoginPromise = null;
    });
    return this.silentLoginPromise;
  }
  executeSilentLogin() {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const credentials = yield _this3.getStoredLoginCredentials();
      if (!credentials.User || !credentials.Password) {
        return false;
      }
      return new Promise(resolve => {
        _this3.login(credentials).subscribe(() => resolve(true), () => resolve(false));
      });
    })();
  }
  getStoredLoginCredentials() {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const secureUser = yield _this4.readSecureValue('User');
      const securePassword = yield _this4.readSecureValue('Password');
      return {
        User: secureUser || localStorage.getItem('correoActual') || '',
        Password: securePassword || localStorage.getItem('passwordActual') || ''
      };
    })();
  }
  readSecureValue(key) {
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const result = yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_4__.SecureStoragePlugin.get({
          key
        });
        return result?.value || '';
      } catch {
        return '';
      }
    })();
  }
  // POST /api/Login/EnviarNotificacionAccidente
  EnviarNotificacionEmail(credentials) {
    return this.http.get(`${this.apiUrl}/Login/EnviarNotificacionAccidente?IdAtencion=${credentials}`).pipe(
    //switchMap((tokens: {accessToken, refreshToken }) => {
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      localStorage.setItem('Email enviado', res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Login/GetAppVersion
  GetAppVersion(credentials) {
    let versionData = {
      plataforma: credentials
    };
    return this.http.post(`${this.apiUrl}/Login/GetAppVersion?plataforma=${credentials}`, versionData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  GetAppVersionProveedores(credentials) {
    let versionData = {
      plataforma: credentials
    };
    return this.http.post(`${this.apiUrl}/Login/GetAppVersion?plataforma=${credentials}`, versionData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // GET ALL LIST
  ListTiposDeFotografia() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeFotografia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoSiniestroFicohsa() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeSiniestroFicohsa`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoConductor() {
    //    console.log("Aqui llamo a los tipos de conductor");
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeConductor`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      localStorage.setItem('tiposDeConductor', JSON.stringify(res));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoGenero() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeGenero`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //GET /api/SeleccionMultiple/TiposDeParentescoFicohsa
  ListTipoParentesco(idPais) {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeParentescoFicohsa?IdPais=${idPais}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //GET /api/SeleccionMultiple/TiposDeSiniestroFicohsa
  ListTipoSiniestro(idPais) {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeSiniestroFicohsa?IdPais=${idPais}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoDeAudiencia() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeAudiencia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoCombustible() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeCombustible`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoFoto() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeFotografia`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //Omar McClellan, 11 de Septiembre de 2023
  //Tipo licencia cambia a un solo endpoint llamado TipoDeLicencia y recibe id de pais 3 para Honduras, 4 para Guatemala
  TipoDeLicencia(paisId) {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicencia?IdPais=${paisId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  TipoDeVehiculo(paisId) {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TiposDeVehiculosFicohsa?IdPais=${paisId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // Lista de los 100 daños más comunes
  //GET /api/SeleccionMultiple/ListadoDanioAlVehiculoFicohsa
  listDanios() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/ListadoDanioAlVehiculoFicohsa`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // GET /api/SeleccionMultiple/ListadoTalleresFicohsa
  ListTalleres() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/ListadoTalleresFicohsa`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // GET /api/Proveedor/ListaTipoAcuerdos
  ListarTiposAcuerdo() {
    return this.http.get(`${this.apiUrl}/Proveedor/ListaTipoAcuerdos`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //GET /api/Proveedor/ListaFotografiasFirmasAtencion
  //  obtenerFirmaPorAtencion(atencionId:any, TipoFotoFirma:any) : Observable<any> {
  obtenerFotoPorAtencion(atencionId, TipoFotoFirma) {
    let body = {
      IdAtencion: atencionId,
      TipoFotoFirma: TipoFotoFirma
    };
    // ?IdAtencion=${atencionId}&TipoFotoFirma=${TipoFotoFirma}
    return this.http.post(`${this.apiUrl}/Proveedor/ListaFotografiasFirmasAtencion`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // GET /api/Proveedor/VectorGpsAtencion
  obtenerCoordenadasPorAtencion(atencionId, Tipo) {
    let body = {
      IdAtencion: atencionId,
      Tipo: Tipo
    };
    // ?IdAtencion=${atencionId}&TipoFotoFirma=${TipoFotoFirma}
    return this.http.get(`${this.apiUrl}/Proveedor/VectorGpsAtencion?IdAtencion=${atencionId}&Tipo=${Tipo}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/ActualizarCordenadasAjustador
  // ?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}
  setAjuPosition(credentials) {
    const jsonPosition = {
      Latitud: credentials.Latitud,
      Longitud: credentials.Longitud,
      RefUsuarioId: credentials.RefUsuarioId,
      Contador: credentials.Contador
    };
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarCordenadasAjustador?Longitud=${credentials.Longitud}&Latitud=${credentials.Latitud}&IdProveedorAgente=${credentials.RefUsuarioId}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de insertar coordenadas del ajustador inicialmente');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // POST /api/Proveedor/InsertarCoordenadasAtencionAgenteProveedor
  setPositionNRoute(credentials) {
    const jsonPosition = {
      Latitud: credentials.Latitud,
      Longitud: credentials.Longitud,
      RefAtencionId: credentials.RefAtencionId,
      RefUsuarioId: credentials.RefUsuarioId,
      Tipo: credentials.Tipo,
      FechaRegistro: new Date().toISOString(),
      Contador: credentials.Contador
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarCoordenadasAtencionAgenteProveedor`, jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de insertar coordenadas ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
    /**/
  }
  // POST /api/Proveedor/InsertarConvenioReparacionTaller
  insertarConvenioReparacion(credentials) {
    const jsonRepara = {
      CodigoDanioVehiculo: credentials.codigoDanio,
      Descripcion: credentials.descripcionDanio,
      Fotografia: credentials.fotografia,
      IdAtencion: credentials.idAtencion,
      RefTipoFotoId: credentials.refTipofotoId,
      TipoEntidad: credentials.TipoEntidad,
      TipoReparacion: credentials.TipoReparacion,
      FechaRegistro: new Date().toISOString()
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarConvenioReparacionTaller`, jsonRepara).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la Convenio Taller ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
    /**/
  }
  // post /api/Proveedor/InsertarConvenioReparacionTallerExtra
  InsertarConvenioReparacionTallerExtra(credentials) {
    const jsonRepara = {
      RefAtencionId: credentials.RefAtencionId,
      DescripcionDeDanio: credentials.DescripcionDeDanio,
      FechaRegistro: credentials.FechaRegistro,
      UsuarioId: credentials.UsuarioId,
      TipoEntidad: credentials.TipoEntidad,
      TipoReparacion: credentials.TipoReparacion,
      CodigoDanioVehiculo: credentials.CodigoDanioVehiculo,
      indexFront: credentials.indexFront
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarConvenioReparacionTallerExtra`, jsonRepara).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la Convenio Taller Extra ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
    /**/
  }
  //POST /api/Proveedor/InsertarFiniquitoManual
  /*
  {
  "NumeroReclamo": "string",
  "FechaDesde": "2023-11-15T17:24:18.116Z",
  "FechaHasta": "2023-11-15T17:24:18.116Z",
  "NombreCliente": "string",
  "TipoCoberturaFicohsa": "string",
  "FechaFirma": "2023-11-15T17:24:18.116Z",
  "FirmaCliente": "string",
  "NombreQuienRecibe": "string",
  "IdentidadQuienRecibe": "string",
  "NumeroCheque": "string",
  "FechaDelCheque": "2023-11-15T17:24:18.116Z",
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
  }
       {
  "NumeroReclamo": "string", // despues de crear el reclamo
  "FechaDesde": "2023-11-14T19:55:55.849Z", // Input directo
  "FechaHasta": "2023-11-14T19:55:55.849Z", // Input directo
  "NombreCliente": "string", // de la info del asegurado
  "TipoCoberturaFicohsa": "string", // Input directo
  "FechaFirma": "2023-11-14T19:55:55.849Z", // Input directo
  "FirmaCliente": "string", // Desde el canvas
  "NombreQuienRecibe": "string", // Input directo
  "IdentidadQuienRecibe": "string", // Input directo
  "NumeroCheque": "string", // Input directo
  "FechaDelCheque": "2023-11-14T19:55:55.849Z", // Input directo
  "ValorDelCheque": 0, // Input directo
  "NombreAFavor": "string", // Input directo
  "Poliza": "string", // de la info del asegurado
  "RefAtencionId": 0, // de la info del asegurado
  "Marca": "string", // de la info del asegurado
  "Modelo": "string", // de la info del asegurado
  "Anio": 0, // de la info del asegurado
  "Placa": "string", // de la info del asegurado
  "Chasis": "string", // de la info del asegurado
  "Motor": "string" // de la info del asegurado
  }
    */
  insertarFiniquitoManual(credentials) {
    const jsonFiniquito = {
      NumeroReclamo: credentials.NumeroReclamo,
      FechaDesde: credentials.FechaDesde,
      FechaHasta: credentials.FechaHasta,
      RefAtencionId: credentials.RefAtencionId,
      NombreCliente: credentials.NombreCliente,
      TipoCoberturaFicohsa: credentials.TipoCoberturaFicohsa,
      FechaFirma: credentials.FechaFirma,
      FirmaCliente: credentials.FirmaCliente,
      NombreQuienRecibe: credentials.NombreQuienRecibe,
      IdentidadQuienRecibe: credentials.IdentidadQuienRecibe,
      NumeroCheque: credentials.NumeroCheque,
      FechaDelCheque: credentials.FechaDelCheque,
      ValorDelCheque: credentials.ValorDelCheque,
      NombreAFavor: credentials.NombreAFavor,
      Poliza: credentials.Poliza,
      Marca: credentials.Marca,
      Modelo: credentials.Modelo,
      Anio: credentials.Anio,
      Placa: credentials.Placa,
      Chasis: credentials.Chasis,
      Motor: credentials.Motor
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarFiniquitoManual`, jsonFiniquito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar el finiquito ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
    /**/
  }
  // POST /api/Proveedor/InsertarReconocimientoDeDeuda
  insertarReconocimientoDeuda(credentials) {
    const jsonDeuda = {
      Id: 0,
      NombreDeudor: credentials.NombreDeudor,
      IdentidadDeudor: credentials.IdentidadDeudor,
      Celular: credentials.Celular,
      Domicilio: credentials.Domicilio,
      CorreoElectronico: credentials.CorreoElectronico,
      LugarDeTrabajo: credentials.LugarDeTrabajo,
      NombreContacto: credentials.NombreContacto,
      CelularContacto: credentials.CelularContacto,
      FechaRegistroDocumento: credentials.FechaRegistroDocumento,
      Marca: credentials.Marca,
      Modelo: credentials.Modelo,
      Anio: credentials.Anio,
      Placa: credentials.Placa,
      NombreAsegurado: credentials.NombreAsegurado,
      MarcaImplicado: credentials.MarcaImplicado,
      ModeloImplicado: credentials.ModeloImplicado,
      AnioImplicado: credentials.AnioImplicado,
      PlacaImplicado: credentials.PlacaImplicado,
      MotorImplicado: credentials.MotorImplicado,
      ChasisImplicado: credentials.ChasisImplicado,
      NombrePersonaPropiedadImplicada: credentials.NombrePersonaPropiedadImplicada,
      DanioCausadoObservacion: credentials.DanioCausadoObservacion,
      RefAtencionId: credentials.RefAtencionId,
      FechaRegistro: credentials.FechaRegistro,
      FirmaDeudor: credentials.FirmaDeudor,
      Ciudad: credentials.Ciudad,
      TelefonoCulpable: credentials.TelefonoCulpable,
      LicenciaCulpable: credentials.LicenciaCulpable,
      TipoLicencia: credentials.TipoLicencia,
      FechaVencimientoLicencia: credentials.FechaVencimientoLicencia,
      NombreDireccionPropietarioVehiculoImplicado: credentials.NombreDireccionPropietarioVehiculoImplicado,
      CompromisoDePago: credentials.CompromisoDePago,
      Observaciones: credentials.Observaciones,
      Edad: credentials.Edad,
      RefTipoFotografiaIdAdeudado: credentials.RefTipoFotografiaIdAdeudado,
      RefTipoFotografiaIdBeneficiario: credentials.RefTipoFotografiaIdBeneficiario
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarReconocimientoDeDeuda`, jsonDeuda).pipe(
    //      return this.http.post(`${this.apiUrl}/Proveedor/InsertarReconocimientoDeDeuda?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}`, {}).pipe(
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la deuda ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  /*
  ListLicenciaHn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaHN`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
     
  ListLicenciaHn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaHN`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  ListLicenciaGT(): Observable<any> {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeLicenciaGT`).pipe(
      switchMap(( res: any  ) => {
      return from(Promise.all(res));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
  */
  ListTipoDeEntidadComunicativa() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeEntidadComunicativa`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  // GET /api/Proveedor/ListaVehiculosFicohsa
  ListMarcasVehiculosFicohsa() {
    return this.http.get(`${this.apiUrl}/Proveedor/ListaVehiculosFicohsa`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoDeSolicitanteInformeAjuste() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDeSolicitanteInformeAjuste`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  ListTipoDePersonaSiniestro() {
    return this.http.get(`${this.apiUrl}/SeleccionMultiple/TipoDePersonaSiniestro`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //End list
  //https://gist.github.com/AnndresRodriguez/a4216e3f82f45fc4514dc954f967fe9a#file-models-json
  //POST /api/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico
  GuardarBPM(credentials) {
    console.log("Las credenciales que me envias son :");
    console.table(credentials); // hasta aqui funciona
    /*
    let misdatos ={
      Chasis: "5XYPG4A3XGG076002",
      puntoServicio: "307",
      Poliza: "2001069268",
      Certificado: "1",
      NombreAsegurado: " ROLVIN FERNANDO FIGUEROA ZEPEDA",
      Sucursal: "0001",
      Producto: "AU01",
      Ramo: "0002",
      FechaOcurrencia: "2024-05-21T16:39:36",
      Causa: "A001",
      ValorReserva: "2500",
      UsuarioBPM: "HN15169",
      Latitud: "14.0985125",
      Longitud: "-87.1849219",
      NombreConductor: " ROLVIN FERNANDO FIGUEROA ZEPEDA",
      Genero: "M",
      Parentesco: "0001",
      Observacion: "40129"
    }
         
         */
    let misdatos = {
      Chasis: credentials.Chasis,
      puntoServicio: credentials.puntoServicio,
      Poliza: credentials.Poliza,
      Certificado: credentials.Certificado,
      NombreAsegurado: credentials.NombreAsegurado,
      Sucursal: credentials.Sucursal,
      Producto: credentials.Producto,
      Ramo: credentials.Ramo,
      FechaOcurrencia: credentials.FechaOcurrencia,
      Causa: credentials.Causa,
      ValorReserva: credentials.ValorReserva,
      UsuarioBPM: credentials.UsuarioBPM,
      Latitud: credentials.Latitud,
      Longitud: credentials.Longitud,
      NombreConductor: credentials.NombreConductor,
      Genero: credentials.Genero,
      Parentesco: credentials.Parentesco,
      Observacion: credentials.Observacion
    };
    return this.http.post(`${this.apiUrl}/FicohsaHN/Carga_Reclamo_Sinau_BPM_Fico`, misdatos).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la nueva atencion ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  //POST /api/Proveedor/ActualizarCodigoBPMAjustador
  ActualizarBPM(credentials) {
    console.log("Las credenciales para actualizar son :");
    console.table(credentials); // hasta aqui funciona
    const jsonUpdate = {
      IdTablaAjustador: credentials.IdTablaAjustador,
      CodigoBPMFicohsa: credentials.CodigoBPMFicohsa,
      CodigoReclamoFicohsa: credentials.CodigoReclamoFicohsa
    };
    return this.http.post(`${this.apiUrl}/Proveedor/ActualizarCodigoBPMAjustador?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}`, {
      jsonUpdate
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la nueva atencion ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  setPushToken(push) {
    //this.currentPushToken = push;
    const storePushToken = _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
      key: PUSH_TOKEN,
      value: push
    });
  }
  //POST /api/Proveedor/InsertarLesionesHospitalizacion
  insertarHospitalizacion(credentials) {
    console.log("Las credenciales para actualizar son :");
    console.table(credentials); // hasta aqui funciona
    const jsonUpdate = {
      IdAjustadorAudiencia: credentials.IdAjustadorAudiencia,
      TipoLesionesTercerosAfectados: credentials.TipoLesionesTercerosAfectados,
      NombreHospital: credentials.NombreHospital
    };
    return this.http.post(`${this.apiUrl}/Proveedor/InsertarLesionesHospitalizacion?IdAjustadorAudiencia=${credentials.IdAjustadorAudiencia}&TipoLesionesTercerosAfectados=${credentials.TipoLesionesTercerosAfectados}&NombreHospital=${credentials.NombreHospital}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(res => {
      console.log('Respuesta de ingresar la nueva atencion ');
      console.dir(res);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all(res));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(_ => {
      this.isAuthenticated.next(true);
    }));
  }
  logout() {
    this.currentAccessToken = null;
    this.currentUser = null;
    // Remove all stored tokens
    localStorage.setItem('previous', this.router.url);
    const deleteAccess = _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({
      key: ACCESS_TOKEN_KEY
    });
    const deleteUserData = _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({
      key: USER_DATA
    });
    const deleteSecureUser = capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_4__.SecureStoragePlugin.remove({
      key: 'User'
    }).catch(() => null);
    const deleteSecurePassword = capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_4__.SecureStoragePlugin.remove({
      key: 'Password'
    }).catch(() => null);
    localStorage.removeItem('correoActual');
    localStorage.removeItem('passwordActual');
    localStorage.removeItem('ajustadorActual');
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('login', {
      replaceUrl: true
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(Promise.all([deleteAccess, deleteUserData, deleteSecureUser, deleteSecurePassword])); //, deleteRefresh]));
    //  }),
    //  tap(_ => {
    // this.isAuthenticated.next(false);
    // this.router.navigateByUrl('/', { replaceUrl: true });
    // })
    // ).subscribe();
  }

  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
    }, {
      type: _toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
    }];
  }
};
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 72377:
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionService": () => (/* binding */ ConnectionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 87580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ConnectionService = class ConnectionService {
  constructor(httpBackend) {
    this.slowThresholdMs = 3500;
    this.timeoutMs = 8000;
    this.probeIntervalMs = 30000;
    this.probeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url;
    this.monitorStarted = false;
    this.probeSequence = 0;
    this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
      connected: true,
      quality: 'checking',
      message: 'Verificando conexion...'
    });
    this.status$ = this.statusSubject.asObservable();
    this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient(httpBackend);
  }
  startMonitoring() {
    if (this.monitorStarted) {
      return;
    }
    this.monitorStarted = true;
    this.checkConnection();
    if (_capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network) {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.addListener('networkStatusChange', status => {
        this.conexion = status;
        this.conectividad = status.connected;
        this.evaluateStatus(status);
      });
    }
    setInterval(() => this.checkConnection(), this.probeIntervalMs);
  }
  checkConnection() {
    if (!_capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network) {
      this.conectividad = false;
      this.setOffline();
      return;
    }
    _capacitor_network__WEBPACK_IMPORTED_MODULE_0__.Network.getStatus().then(status => {
      this.conexion = status;
      this.conectividad = status.connected;
      this.evaluateStatus(status);
    });
  }
  evaluateStatus(status) {
    if (!status.connected) {
      this.probeSequence++;
      this.setOffline(status.connectionType);
      return;
    }
    this.setOnline(status.connectionType);
    this.probeBackend(status.connectionType);
  }
  probeBackend(connectionType) {
    const sequence = ++this.probeSequence;
    const startedAt = Date.now();
    const url = `${this.probeUrl}?connectivityCheck=${startedAt}`;
    this.http.get(url, {
      observe: 'response',
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(this.timeoutMs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(error))).subscribe(result => {
      if (sequence !== this.probeSequence) {
        return;
      }
      const latencyMs = Date.now() - startedAt;
      if (result instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpErrorResponse && result.status === 0) {
        this.setOnline(connectionType);
        return;
      }
      if (latencyMs >= this.slowThresholdMs) {
        this.statusSubject.next({
          connected: true,
          quality: 'slow',
          message: `Conexion lenta (${latencyMs} ms)`,
          latencyMs,
          connectionType
        });
        return;
      }
      this.statusSubject.next({
        connected: true,
        quality: 'online',
        message: `Conectado (${latencyMs} ms)`,
        latencyMs,
        connectionType
      });
    });
  }
  setOffline(connectionType) {
    this.statusSubject.next({
      connected: false,
      quality: 'offline',
      message: 'Sin conexion a internet',
      connectionType
    });
  }
  setOnline(connectionType) {
    this.statusSubject.next({
      connected: true,
      quality: 'online',
      message: 'Conectado',
      connectionType
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpBackend
    }];
  }
};
ConnectionService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], ConnectionService);


/***/ }),

/***/ 34811:
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceService": () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let DeviceService = class DeviceService {
  constructor() {
    this.isTablet = false;
    this.isPhone = true;
  }
  configure(platform) {
    this.isTablet = platform.is('tablet');
    this.isPhone = !this.isTablet;
  }
};
DeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], DeviceService);


/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





let ToastService = class ToastService {
  constructor(toaster, loading, router) {
    this.toaster = toaster;
    this.loading = loading;
    this.router = router;
    this.lasAtenciones = [];
    this.siniestroTercero = [];
    this.toastMessage = 'PORSALUD 360';
    this.toastPosition = 'top';
    this.toastClass = 'por-salud';
  }
  dismissToast() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this.toaster.dismiss();
      }
    })();
  }
  presentToastReload(message, position, clase) {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this2.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this2.toaster.create({
        message: message,
        color: 'primary',
        duration: 2000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: []
      });
      yield toast.present();
    })();
  }
  presentToastNoButtons(message, position, clase) {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this3.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this3.toaster.create({
        message: message,
        color: 'primary',
        duration: 10000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: []
      });
      yield toast.present();
    })();
  }
  presentToastAlert(message, position, clase, duration) {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this4.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this4.toaster.create({
        message: message,
        color: clase,
        duration: duration,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: []
      });
      yield toast.present();
    })();
  }
  presentToastNoButtonsRed(message, position, clase) {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this5.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this5.toaster.create({
        message: message,
        color: 'danger',
        duration: 60000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield toast.present();
    })();
  }
  presentToastDangerOk(message, position, clase) {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this6.toaster.dismiss();
      }
      const toast = yield _this6.toaster.create({
        message: message,
        color: 'danger',
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield toast.present();
    })();
  }
  /*
  
  */
  presentToastArrival(message, position, clase) {
    var _this7 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this7.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this7.toaster.create({
        message: message,
        color: 'success',
        duration: 360000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: () => {
            //            this.location.back()
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToast(message, position, clase) {
    var _this8 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this8.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this8.toaster.create({
        message: message,
        color: 'primary',
        duration: 45000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO',
          role: 'cancel'
        }, {
          text: 'SI',
          role: 'confirm',
          handler: () => {
            //            this.location.back()
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastAdeuda(message, position, clase, atencionId) {
    var _this9 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this9.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this9.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'SALIR',
          role: 'cancel',
          handler: () => {
            window.location.reload();
          }
        }, {
          text: 'IR A PDF',
          role: 'confirm',
          handler: () => {
            window.open('https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/DownloadReconocimientoDeDeuda/' + atencionId, '_blank');
          }
        }]
      });
      yield toast.present();
    })();
  }
  //presentToastSaveCliente
  presentToastSaveCliente(message, position, clase, idAtencion) {
    var _this10 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      //let laPlaca = data.NumeroPlaca;
      //let laAtencion = data.Id;
      if (currentToast.length > 0) {
        _this10.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this10.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO SALIR',
          role: 'cancel'
        }, {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            _this10.router.navigate(['./expediente'], {
              queryParams: {
                Id: idAtencion
              }
            });
            //window.location.reload()
          }
        }]
      });

      yield toast.present();
    })();
  }
  presentToastSiniestroGuardado(message, position, clase) {
    var _this11 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      //let idAtencion = data;
      if (currentToast.length > 0) {
        _this11.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this11.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'LISTO',
          role: 'cancel',
          handler: () => {}
        }]
      });
      yield toast.present();
    })();
  }
  presentToastSave(message, position, clase, data) {
    var _this12 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      let laPlaca = data.NumeroPlaca;
      let laAtencion = data.Id;
      if (currentToast.length > 0) {
        _this12.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this12.toaster.create({
        message: message,
        color: clase,
        duration: 30000,
        position: position,
        cssClass: ['custom-toast'],
        buttons: [{
          text: 'NO SALIR',
          role: 'cancel'
        }, {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastHome(message, position, clase) {
    var _this13 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this13.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this13.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO SALIR',
          role: 'cancel'
        }, {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastSavedDebt(message, position, clase) {
    var _this14 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this14.toaster.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this14.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'LISTO, GRACIAS!',
          role: 'cancel'
        }, {
          text: 'DESCARGAR COPIA',
          role: 'reload',
          handler: () => {
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastErrorConexion(message, position, clase) {
    var _this15 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this15.toaster.dismiss();
      }
      const toast = yield _this15.toaster.create({
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
  presentToastSiniestroCerrado(message, position, clase) {
    var _this16 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this16.toaster.dismiss();
      }
      const toast = yield _this16.toaster.create({
        message: message,
        color: 'danger',
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
  presentToastSiniestroCancelado(message, position, clase) {
    var _this17 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this17.toaster.dismiss();
      }
      const toast = yield _this17.toaster.create({
        message: message,
        color: 'warning',
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
  presentToastEditSig(message, position, clase) {
    var _this18 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let editResponse;
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this18.toaster.dismiss();
      }
      const toast = yield _this18.toaster.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'CANCELAR',
          role: 'cancel',
          handler() {
            this.editResponse = false;
            localStorage.setItem('editResponse', this.editResponse);
          }
        }, {
          text: 'EDITAR FIRMA',
          role: 'confirm',
          handler() {
            this.editResponse = true;
            localStorage.setItem('editResponse', this.editResponse);
          }
        }]
      });
      yield toast.present();
    })();
  }
  presentToastEmailInvalid(message, position, clase) {
    var _this19 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this19.toaster.dismiss();
      }
      const toast = yield _this19.toaster.create({
        message: message,
        color: 'danger',
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
  presentToastDataMissing(message, position, clase) {
    var _this20 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this20.toaster.dismiss();
      }
      const toast = yield _this20.toaster.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'SALIR',
          role: 'cancel'
        }, {
          text: 'CONTINUAR',
          role: 'confirm'
        }]
      });
      yield toast.present();
    })();
  }
  presentToastDataMissingExpediente(message, position, clase) {
    var _this21 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this21.toaster.dismiss();
      }
      const toast = yield _this21.toaster.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
    }];
  }
};
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ToastService);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "environment_local": () => (/* binding */ environment_local),
/* harmony export */   "helpFilesUrl": () => (/* binding */ helpFilesUrl),
/* harmony export */   "helpFilesUrlTest": () => (/* binding */ helpFilesUrlTest)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  api_url: "https://portal.porsalud.net/Outer/WSRestApiHelp/api",
  message: "PRU"
};
const helpFilesUrlTest = {
  production: false,
  api_url: "https://portal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive"
};
const helpFilesUrl = {
  production: true,
  api_url: "https://portal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive"
};
const environment_local = {
  production: false,
  api_url: 'https://localhost:44352/api' //this is a test to JWT 
};
/*
export const environment = {
  production: false,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT
};

export const environment_test = {
  production: false,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT
};

export const environment_local = {
  production: false,
  api_url: 'https://localhost:44352/api'  //this is a test to JWT
}

export const environment_local_files = {
  production: false,
  api_url: 'https://localhost:44352'  //this is a test to JWT
}

export const environment_local_videos = {
  production: false,
  api_url: 'http://localhost:18951/help_CargaDeArchivos/UploadArchive'  //this is a test to JWT
}






 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#avatarPerfil {\n  filter: none;\n}\n\n.app-connection-chip {\n  position: fixed;\n  top: calc(10px + env(safe-area-inset-top));\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10000;\n  min-width: 280px;\n  max-width: calc(100vw - 24px);\n  height: 44px;\n  padding: 0 16px;\n  border-radius: 6px;\n  color: white;\n  font-weight: 700;\n  letter-spacing: 0;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.24);\n}\n\n.app-connection-chip ion-label {\n  white-space: normal;\n}\n\n.app-connection-chip ion-icon {\n  color: white;\n  font-size: 1.25rem;\n}\n\n.app-connection-chip-offline {\n  --background: #b42318;\n}\n\n.app-connection-chip-slow {\n  --background: #b54708;\n}", "",{"version":3,"sources":["webpack://./src/app/app.component.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAEA;EACI,eAAA;EACA,0CAAA;EACA,SAAA;EACA,2BAAA;EACA,cAAA;EACA,gBAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,0CAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ;;AAEA;EACI,qBAAA;AACJ","sourcesContent":["#avatarPerfil{\n    filter: none;\n}\n\n.app-connection-chip {\n    position: fixed;\n    top: calc(10px + env(safe-area-inset-top));\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10000;\n    min-width: 280px;\n    max-width: calc(100vw - 24px);\n    height: 44px;\n    padding: 0 16px;\n    border-radius: 6px;\n    color: white;\n    font-weight: 700;\n    letter-spacing: 0;\n    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.24);\n}\n\n.app-connection-chip ion-label {\n    white-space: normal;\n}\n\n.app-connection-chip ion-icon {\n    color: white;\n    font-size: 1.25rem;\n}\n\n.app-connection-chip-offline {\n    --background: #b42318;\n}\n\n.app-connection-chip-slow {\n    --background: #b54708;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ng-container *ngIf=\"connectionStatus$ | async as connection\">\n    <ion-chip\n      *ngIf=\"connection.quality === 'offline' || connection.quality === 'slow'\"\n      class=\"app-connection-chip\"\n      [class.app-connection-chip-offline]=\"connection.quality === 'offline'\"\n      [class.app-connection-chip-slow]=\"connection.quality === 'slow'\">\n      <ion-icon [name]=\"connection.quality === 'offline' ? 'cloud-offline' : 'warning'\"></ion-icon>\n      <ion-label>{{ connection.message }}</ion-label>\n    </ion-chip>\n  </ng-container>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map