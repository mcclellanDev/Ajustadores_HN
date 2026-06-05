(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_clientehn_clientehn_module_ts"],{

/***/ 89614:
/*!*******************************************************!*\
  !*** ./src/app/clientehn/clientehn-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientehnPageRoutingModule": () => (/* binding */ ClientehnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _clientehn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientehn.page */ 56668);




const routes = [{
  path: '',
  component: _clientehn_page__WEBPACK_IMPORTED_MODULE_0__.ClientehnPage
}];
let ClientehnPageRoutingModule = class ClientehnPageRoutingModule {};
ClientehnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ClientehnPageRoutingModule);


/***/ }),

/***/ 19905:
/*!***********************************************!*\
  !*** ./src/app/clientehn/clientehn.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientehnPageModule": () => (/* binding */ ClientehnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _clientehn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientehn-routing.module */ 89614);
/* harmony import */ var _clientehn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientehn.page */ 56668);
/* harmony import */ var _maskito_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @maskito/angular */ 11750);








let ClientehnPageModule = class ClientehnPageModule {};
ClientehnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _clientehn_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientehnPageRoutingModule, _maskito_angular__WEBPACK_IMPORTED_MODULE_7__.MaskitoModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_clientehn_page__WEBPACK_IMPORTED_MODULE_1__.ClientehnPage]
})], ClientehnPageModule);


/***/ }),

/***/ 56668:
/*!*********************************************!*\
  !*** ./src/app/clientehn/clientehn.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientehnPage": () => (/* binding */ ClientehnPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _clientehn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientehn.page.html?ngResource */ 38002);
/* harmony import */ var _clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientehn.page.scss?ngResource */ 39533);
/* harmony import */ var _clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 54984);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/vehicles */ 73586);
/* harmony import */ var _environments_segments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/segments */ 33333);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/beneficiarios */ 15274);
/* harmony import */ var _environments_responsable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/responsable */ 76650);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _services_formatos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/formatos.service */ 70854);
/* harmony import */ var _services_countrydata_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/countrydata.service */ 52972);
/* harmony import */ var _validation_claim_validation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../validation/claim-validation */ 29003);
/* harmony import */ var _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../validation/claim-validation.rules */ 5057);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @capacitor/keyboard */ 10523);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_20__);



























let ClientehnPage = class ClientehnPage {
  // INICIALIZACION
  constructor(router, route, loading, alert, api, toast, location, platform, so, geo, toaster, formateador, countryService) {
    this.router = router;
    this.route = route;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.location = location;
    this.platform = platform;
    this.so = so;
    this.geo = geo;
    this.toaster = toaster;
    this.formateador = formateador;
    this.countryService = countryService;
    this.alertButtons = [{
      text: 'Continuar',
      cssClass: 'alert-button-cancel'
    }, {
      text: 'Sí, Salir',
      cssClass: 'alert-button-confirm',
      handler: () => {
        window.location.reload();
      }
    }];
    this.predicateCliente = /*#__PURE__*/function () {
      var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
        return el.getInputElement();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.idMask = {
      mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
    };
    this.idMaskFechaVencimiento = {
      mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    };
    this.phoneMask = {
      mask: ['(', '5', '0', '4', ')', ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
    };
    this.yearMask = {
      mask: [/\d/, /\d/, /\d/, /\d/]
    };
    this.kmMask = {
      mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    };
    this.emailMask = {
      mask: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]
    };
    this.beneficiarioTipos = _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_12__.beneficiariosTipos;
    this.responsableTipos = _environments_responsable__WEBPACK_IMPORTED_MODULE_13__.responsableTipos;
    this.requiredD = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredData;
    this.requiredMin = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredData_Less;
    this.requiredDLabels = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataLabels;
    this.dataProcess = [];
    this.copmleteByCase = [];
    this.marcasVehiculos = _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos;
    this.dataFormulario = [];
    this.marcas = [];
    this.modelos = [];
    this.modelosMarca = [];
    this.cliente = [];
    this.talleres = [];
    this.culpable = {};
    this.persona = {};
    this.acompaniante = []; // idpersona 1
    this.testigos = []; //idpersona 2
    this.lesionados = []; // idpersona 3
    this.ajustador = {};
    this.propiedadPrivada = {};
    this.propiedadesprivadas = [];
    this.tipoLicencia = [];
    this.tallerOtroArray = [];
    this.tipoConductor = [];
    this.validaNulos = [];
    this.clienteFiltro = [];
    this.ajustadorFiltro = [];
    this.segments = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments;
    // Arrays de volcado de datos
    this.tipoParentescos = [];
    this.elExpediente = [];
    this.nulosExpediente = [];
    this.culpableEsPropiertario = true;
    this.daSegment = "location";
    this.licenciaTipos = [];
    this.esMarca = false;
    this.openModal = false;
    this.isEditSig = false;
    this.isLoading = false;
    this.isTablet = false;
    this.isComplete = false;
    this.isCompleteAcuerdo = false;
    this.isSignature = false;
    this.tallerOtro = '';
    this.tallerOtroDireccion = '';
    // Variables de control de interfaz
    this.showPersona = false;
    this.showPersonaLesion = false;
    this.menu = [false, false, false, false, false, false, false, false, false, false];
    this.guardar = true;
    this.editar = false;
    this.showPropiedad = false;
    this.ancho = window.innerWidth;
    this.datoIndex = 0;
    this.vigencia = false;
    this.clientCompleteArray = [];
    this.isFormSaved = false;
    this.isVence = false;
    this.datosAtencion = [];
    this.esCacheCliente = false;
    this.esMenor = false;
    this.conductorEsAfiliado = false;
    this.laExpediente = [];
    this.DatosDeAtencion = [];
    this.progress = 0;
    this.nullsIndex = [];
    this.textoInfo = 'Validando ... Cuando todos los datos estén completos, se habilitará el botón de guardar.';
    this.firmaIcono = _environments_default_images__WEBPACK_IMPORTED_MODULE_10__.editarFirmaIcono;
    let datAtencion = localStorage.getItem('datosDeAtencion');
    this.DatosDeAtencion = JSON.parse(datAtencion);
    console.log('datAtencion');
    console.dir(this.DatosDeAtencion);
    this.identidadDelCliente = this.DatosDeAtencion[6].value;
    //self.alert(this.identidadDelCliente)
    let exped = localStorage.getItem('elExpediente');
    let numPol;
    console.log('Expediente en cliente : ' + exped);
    this.laExpediente = JSON.parse(exped);
    console.log('El nombre del cliente : ' + this.laExpediente[0].Cliente);
    numPol = this.laExpediente[0].PolizaExterna.split('-')[1];
    localStorage.setItem('nNumpol', numPol);
    localStorage.setItem('nNumCer', this.laExpediente[0].Certificado);
    this.clienteLatitud = this.laExpediente[0].LatitudCliente;
    this.clienteLongitud = this.laExpediente[0].LongitudCliente;
    //self.alert(this.clienteLongitud);
    let nombreC = localStorage.getItem('dataProcess-NombreConductor');
    //self.alert(nombreC == '')
    if (nombreC == 'undefined' || nombreC == '') {
      //self.alert('Puej ji')
      setTimeout(() => {
        this.nombreConductor = '';
        this.daNombreConductor = '';
        this.daIdentidadConductor = '';
        localStorage.setItem('dataProcess-NombreConductor', '');
        this.setNombreConductor('');
      }, 900);
    } else {
      this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
    }
    this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
    if (this.identidad == 'undefined' || this.identidad == '') {
      this.daIdentidadConductor = '';
    } else {}
    let responsableId;
    responsableId = localStorage.getItem('dataProcess-TerceroResponsable');
    this.tel = localStorage.getItem('dataProcess-TelefonoAsegurado');
    this.cel = localStorage.getItem('dataProcess-CelularAsegurado');
    this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
    this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
    let fechaN = localStorage.getItem('dataProcess-FechaNacimientoConductor');
    let parentesco = localStorage.getItem('dataProcess-Parentesco');
    let licenciaTipo = localStorage.getItem('dataProcess-TipoLicencia');
    let licencia = localStorage.getItem('dataProcess-Licencia');
    let alcoholemia = localStorage.getItem('dataProcess-PruebaAlcoholemia');
    let direccionC = localStorage.getItem('dataProcess-DireccionConductor');
    let esTerceroResponsable = localStorage.getItem('dataProcess-TerceroResponsable');
    this.elResponsableTipo = parseInt(responsableId);
    let nombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    let autoridad = localStorage.getItem('dataProcess-AutoridadInvolucrada');
    let ubicacion = localStorage.getItem('dataProcess-DondeSeEncuentraVehiculo');
    let audiencia = localStorage.getItem('dataProcess-AgendarAudiencia');
    let vehiculodet = localStorage.getItem('dataProcess-VehiculoDetenido');
    let conductorDet = localStorage.getItem('dataProcess-ConductorDetenido');
    let vehiculoVolcado = localStorage.getItem('dataProcess-VehiculoVolcado');
    let ubicacionVehiculoDet = localStorage.getItem('dataProcess-UbicacionVehiculoDetenido');
    let tercerosHeridos = localStorage.getItem('dataProcess-TercerosHeridos');
    let tercerosMuertos = localStorage.getItem('dataProcess-TercerosMuertos');
    let descripcionTercerosHeridos = localStorage.getItem('dataProcess-DescripcionTercerosHeridos');
    let descripcionTercerosMuertos = localStorage.getItem('dataProcess-DescripcionTercerosMuertos');
    let descripcionDanio = localStorage.getItem('dataProcess-DescripcionDanio');
    let descripcion = localStorage.getItem('dataProcess-Descripcion');
    let descripcionAudiencia = localStorage.getItem('dataProcess-DescripcionAudiencia');
    let fechaVigencia = localStorage.getItem('dataProcess-Vigencia');
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let navParams = this.router.getCurrentNavigation()?.extras.state;
        this.laLatitud = navParams?.data[1].latitud;
        this.laLongitud = navParams?.data[2].longitud;
        //self.alert('Latitud : '+this.laLatitud+' Longitud : '+this.laLongitud)
        this.cliente.Latitud = this.laExpediente[0].LatitudCliente;
        this.cliente.Longitud = this.laExpediente[0].LongitudCliente;
        this.clienteLatitud = this.laExpediente[0].LatitudCliente;
        this.clienteLongitud = this.laExpediente[0].LongitudCliente;
        if (this.laExpediente) {
          //self.alert('Hay expediente '+this.cliente.Latitud)
          localStorage.setItem('dataProcess-Latitud', this.cliente.Latitud);
          localStorage.setItem('dataProcess-Longitud', this.cliente.Longitud);
          localStorage.setItem('dataProcess-Nombre', this.laExpediente[0].Cliente);
          setTimeout(() => {
            console.log('Es el afiliado? ' + this.conductorEsAfiliado);
            console.log('El teléfono : ' + this.tel);
            if (this.tel) {
              this.cliente.TelefonFijo = this.tel;
              //this.elExpediente.TelefonoFijoConductor = this.tel;
            }

            if (tipoConductor) {
              this.seTipoConductor(tipoConductor, 2);
            } else {
              this.conductorEsAfiliado = true;
              this.elExpediente.ConducidoPor = 1;
            }
            // self.alert( 'tipoConductor '+tipoConductor+(this.TelefonoFijoConductor))
            if (this.TelefonoFijoConductor) {
              this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
              //this.seTelefonoConductor(this.daTelefonoFijoConductor);
              this.laExpediente[0].TelefonoConductor = this.TelefonoFijoConductor;
            }
            if (this.cel) {
              this.cliente.Celular = this.cel;
              this.setCelularConductor(this.cel);
              this.laExpediente[0].CelularConductor = this.TelefonoFijoConductor;
            }
            if (this.CelularConductor) {
              this.daCelularConductor = parseInt(this.CelularConductor);
            }
            if (parentesco) {
              this.setElTipoParentesco(parentesco);
            }
            if (licenciaTipo) {
              this.seTipoLicencia(licenciaTipo);
            }
            if (fechaVigencia) {
              console.log('Hay una fecha: ' + fechaVigencia);
              this.setVencimiento(fechaVigencia);
              this.isVence = true;
            } else {
              this.isVence = false;
            }
            if (usoPoliza) {
              this.elExpediente.UtilizoSerivicioAsistencia = usoPoliza;
              console.log('usoPoliza', usoPoliza);
              this.uPoli = usoPoliza;
              this.setUtilizacionAsistencia(usoPoliza);
            } else {
              this.elExpediente.UtilizoSerivicioAsistencia = 1;
              this.setUtilizacionAsistencia(1);
            }
            if (porqueNo) {
              this.setPorqueNoUso(porqueNo);
            }
            if (alcoholemia) {
              this.setPruebaAlcohol(alcoholemia);
            } else {
              this.elExpediente.PruebaAlcoholemia = 1;
              this.setPruebaAlcohol(1);
            }
            console.log('Aca voy a setear el nombre del conductor');
            //self.alert('Aca voy a setear el nombre del  '+this.nombreConductor);
            if (this.nombreConductor) {
              this.setNombreConductor(this.nombreConductor);
            }
            if (esTerceroResponsable) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#responsableRadioGroup').val(esTerceroResponsable).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#responsableRadioGroup').val('3').change();
              this.setResponsable(3);
            }
            if (audiencia) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#audiRadioGroup').val(audiencia).change();
              this.setAudiencia(audiencia);
            }
            if (vehiculodet) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoVRadioGroup').val(vehiculodet).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoVRadioGroup').val('2').change();
              this.setDetenido(2);
            }
            if (conductorDet) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoCRadioGroup').val(conductorDet).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoCRadioGroup').val('2').change();
              this.setDetenidoElConductor(2);
            }
            if (vehiculoVolcado) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#volcoRadioGroup').val(vehiculoVolcado).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#volcoRadioGroup').val('2').change();
              this.setVolcado(2);
            }
            if (tercerosHeridos) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#tHeridosRadioGroup').val(tercerosHeridos).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#tHeridosRadioGroup').val('2').change();
              this.setTercerosHeridos(2);
            }
            if (tercerosMuertos) {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#tMuertosRadioGroup').val(tercerosMuertos).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_20__('#tMuertosRadioGroup').val('2').change();
              this.setTercerosMuertos(2);
            }
            if (nombreAtribuyeAccidente) {
              this.elExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.laExpediente[0].NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.nombreAtribuye = nombreAtribuyeAccidente;
              console.log('Ajui juiiiiii....' + this.elExpediente.NombreAtribuyeAccidente);
              this.setNombreAtribuye(nombreAtribuyeAccidente);
            }
            if (unidad) {
              this.setUnidad(unidad);
            }
          }, 3000);
          console.log('Este es el conductor que enconré : ' + this.nombreConductor);
          let use = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
          let uso = parseInt(use);
          //self.alert(uso)
          if (this.nombreConductor) {
            if (uso == 1) {
              localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
              this.elExpediente.NombreConductor = this.nombreConductor;
            }
            setTimeout(() => {
              console.log('Ahora seteo el nombre del conductor');
              this.setNombreConductor(this.nombreConductor);
            }, 3000);
          } else {
            if (uso == 1) {
              localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
              this.elExpediente.NombreConductor = this.elExpediente.Cliente;
            }
          }
          if (this.identidad) {
            localStorage.setItem('dataProcess-IdentidaConductor', this.identidad);
          } else {
            localStorage.setItem('dataProcess-IdentidaConductor', this.identidadAsegurado);
          }
          if (poliza) {
            localStorage.setItem('dataProcess-Poliza', poliza);
          } else {
            localStorage.setItem('dataProcess-Poliza', this.elExpediente.PolizaExterna);
          }
          if (dCorrespondencia) {
            this.cliente.DireccionEnvioCorrespondencia = dCorrespondencia;
          }
          if (email) {
            this.cliente.CorreoElectronico = email;
            this.setCorreoConductor(email);
          }
          if (blindado) {
            this.setBlindado(blindado);
          } else {
            this.setBlindado(2);
          }
          if (unidad) {
            this.elExpediente.NoUnidad = unidad;
            this.laExpediente[0].NoUnidad = unidad;
          }
          if (fechaN) {
            this.formateadaNacimiento = fechaN;
            this.setFechaNacimiento(fechaN);
          } else {
            if (this.laExpediente[0].FechaNacimientoConductor != null) {
              //this.dataProcess.Edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
              //this.edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
              this.formateadaNacimiento = this.laExpediente[0].FechaNacimientoConductor.toString().split('T')[0];
            } else {
              this.formateadaNacimiento = new Date().toISOString().split('T')[0];
            }
          }
          if (licencia) {
            this.elExpediente.LicenciaNo = licencia;
            this.laExpediente[0].LicenciaNo = licencia;
            this.setLicencia(licencia);
          }
          if (autoridad) {
            this.elExpediente.AutoridadInvolucrada = autoridad;
            this.laExpediente[0].AutoridadInvolucrada = autoridad;
            this.setEntidadInvolucrada(autoridad);
          }
          if (ubicacion) {
            this.elExpediente.UbicacionVehiculoAsegurado = ubicacion;
            this.laExpediente[0].UbicacionVehiculoAsegurado = ubicacion;
            this.setUbicacionVehiculoDetenido(ubicacion);
          }
          if (ubicacionVehiculoDet) {
            this.elExpediente.UbicacionVehiculoDetenido = ubicacionVehiculoDet;
            this.laExpediente[0].UbicacionVehiculoDetenido = ubicacionVehiculoDet;
            this.setUbicacionVehiculoDetenido(ubicacionVehiculoDet);
          }
          if (descripcionTercerosHeridos) {
            this.elExpediente.DescripcionTercerosHeridos = descripcionTercerosHeridos;
          }
          if (descripcionTercerosMuertos) {
            this.elExpediente.DescripcionTercerosMuertos = descripcionTercerosMuertos;
          }
          if (descripcionDanio) {
            this.elExpediente.DescripcionDanioVehiculo = descripcionDanio;
            this.laExpediente[0].DescripcionDanioVehiculo = descripcionDanio;
            this.setDescripcionDanio(descripcionDanio);
          }
          if (descripcion) {
            this.elExpediente.DescripcionAccidente = descripcion;
            this.laExpediente[0].DescripcionAccidente = descripcion;
            this.setDescripcionAccidente(descripcion);
          }
          if (descripcionAudiencia) {
            this.elExpediente.DescripcionAudiencia = descripcionAudiencia;
            this.laExpediente[0].DescripcionAudiencia = descripcionAudiencia;
            this.setDescripcionAudiencia(descripcionAudiencia);
          }
          if (direccionC) {
            this.elExpediente.DireccionConductor = direccionC;
            this.laExpediente[0].DireccionConductor = direccionC;
            this.setDireccionConductor(direccionC);
          }
        }
        let fechaExpediente = this.laExpediente[0].FechaRegistro;
        console.log('fechaExpediente :' + fechaExpediente);
        this.formateadaSiniestro = fechaExpediente.split('T')[0]; //formateador.formatearFechaSiniestro(fechaExpediente);
        let laHora = fechaExpediente.split('T')[1];
        this.horaSiniestro = laHora.split('.')[0];
        localStorage.setItem('FechaRegistro', this.elExpediente.FechaRegistro);
        //Inicializacion del arreglo de datos de envio
        console.log('Ya estamos aqui');
        //console.log('El expediente lenght '+ItemsExpediente.length)
        for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente.length; index++) {
          const element = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente[index];
          const itemNombre = element.nombre;
          const valorExpediente = this.elExpediente[itemNombre];
          if (valorExpediente == null || valorExpediente == undefined) {
            this.nulosExpediente.push({
              nombre: itemNombre,
              valor: valorExpediente
            });
          }
          if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente.length - 1) {
            //console.dir(this.nulosExpediente)
          }
        }
        //self.alert('llenado de datos '+this.laExpediente[0].PolizaExterna)
        this.dataProcess['RefAtencionId'] = this.laExpediente[0].Id;
        this.dataProcess['RefProveedorAgenteId'] = this.laExpediente[0].RefGestorId;
        localStorage.setItem('dataProcess-RefProveedorAgenteId', this.laExpediente[0].RefGestorId);
        this.dataProcess['RefProveedorAgenteAbogadoId'] = this.laExpediente[0].RefProveedorAgenteAbogadoId;
        this.dataProcess['Poliza'] = this.laExpediente[0].PolizaExterna;
        this.dataProcess['Cliente'] = this.laExpediente[0].Cliente;
        this.dataProcess['IdentidaConductor'] = this.laExpediente[0].IdentidaConductor;
        this.dataProcess['Nombre'] = this.laExpediente[0].Cliente;
        this.dataProcess['MarcaVehiculo'] = this.laExpediente[0].Marca;
        this.dataProcess['ModeloVehiculo'] = this.laExpediente[0].Modelo;
        this.dataProcess['AnioVehiculo'] = this.laExpediente[0].Year;
        this.dataProcess['PlacaVehiculo'] = this.laExpediente[0].NumeroPlaca;
        this.dataProcess['ChasisVehiculo'] = this.laExpediente[0].Chasis;
        this.dataProcess['ColorVehiculo'] = this.laExpediente[0].Color;
        this.dataProcess['DescripcionVehiculo'] = "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca;
        localStorage.setItem('dataProcess-DescripcionVehiculo', "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca);
        this.dataProcess['FechaHora'] = this.laExpediente[0].FechaRegistro;
        this.dataProcess['Lugar'] = this.laExpediente[0].Direccion;
        localStorage.setItem('dataProcess-Lugar', this.laExpediente[0].Direccion);
        this.dataProcess['RefUsuarioId'] = this.laExpediente[0].RefGestorId;
        localStorage.setItem('dataProcess-RefUsuarioId', this.laExpediente[0].RefGestorId);
        this.dataProcess['RefPaisId'] = this.laExpediente[0].IdPais;
        localStorage.setItem('dataProcess-RefPaisId', this.laExpediente[0].IdPais);
        this.dataProcess['RefCiudadId'] = this.laExpediente[0].IdCiudad;
        localStorage.setItem('dataProcess-RefCiudadId', this.laExpediente[0].IdCiudad);
        this.dataProcess['RefDeptoId'] = this.laExpediente[0].RefDepartamentoId;
        this.dataProcess['Motor'] = this.laExpediente[0].Motor;
        this.dataProcess['ReclamoAsegurado'] = this.laExpediente[0].DescripcionDanioVehiculo;
        localStorage.setItem('dataProcess-ReclamoAsegurado', this.laExpediente[0].DescripcionDanioVehiculo);
        localStorage.setItem('dataProcess-MarcaVehiculo', this.laExpediente[0].Marca);
        localStorage.setItem('dataProcess-ModeloVehiculo', this.laExpediente[0].Modelo);
        localStorage.setItem('dataProcess-AnioVehiculo', this.laExpediente[0].Year);
        localStorage.setItem('dataProcess-PlacaVehiculo', this.laExpediente[0].NumeroPlaca);
        localStorage.setItem('dataProcess-ChasisVehiculo', this.laExpediente[0].Chasis);
        localStorage.setItem('dataProcess-ColorVehiculo', this.laExpediente[0].Color);
        //localStorage.setItem('dataProcess-Motor', this.laExpediente[0].Motor);
        //this.dataProcess['DireccionEnvioCorrespondencia'] = this.elExpediente.Direccion;
        for (let index = 0; index < this.nulosExpediente.length; index++) {
          const element = this.nulosExpediente[index];
          console.log('viene nulo ' + element.nombre);
          for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados.length; index++) {
            const elementPredet = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados[index].nombre;
            const elementPredetV = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados[index].valor;
            if (element.nombre.indexOf(elementPredet) > -1) {
              this.dataProcess[element.nombre] = elementPredetV;
            }
          }
        }
      }
    });
    console.dir(exped);
    console.dir(JSON.parse(exped));
    this.obtenerTipoConductor();
    //this.loadParentescos();
    //this.getTalleres();
    this.elExpediente = JSON.parse(exped);
    //self.alert('Bienvenido a la página de cliente del expediente '+this.elExpediente.length);
    console.log('Bienvenido a la página de cliente del expediente ' + this.elExpediente.length);
    let client = localStorage.getItem('elExpediente');
    this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
    this.cliente = JSON.parse(client);
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    if (this.firmaPrecargada) {
      console.log('Traigo una firma ' + this.firmaPrecargada);
    }
    console.log('El arreglo de segmentos');
    console.dir(_environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments);
    let poliza = localStorage.getItem('dataProcess-Poliza');
    let usoPoliza = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
    let dCorrespondencia = localStorage.getItem('dataProcess-DireccionEnvioCorrespondencia');
    let porqueNo = localStorage.getItem('dataProcess-PorqueNoUsoServicioAsistencia');
    let email = localStorage.getItem('dataProcess-CorreoElectronico');
    let fechaH = localStorage.getItem('dataProcess-FechaHora');
    let blindado = localStorage.getItem('dataProcess-Blindado');
    let unidad = localStorage.getItem('dataProcess-NumeroUnidad');
    let tipoConductor = localStorage.getItem('dataProcess-RefTipoConductorId');
    this.daTipoConductor = parseInt(tipoConductor);
    if (this.daTipoConductor) {
      let tipos = localStorage.getItem('tiposDeConductor');
      this.tipoConductor = JSON.parse(tipos);
      //localStorage.setItem('tiposDeConductor', JSON.stringify(res));
      this.seTipoConductor(this.daTipoConductor, 3);
      if (this.daTipoConductor == 1) {
        this.conductorEsAfiliado = true;
        this.elExpediente.NombreConductor = this.elExpediente.Cliente;
        this.laExpediente[0].NombreConductor = this.laExpediente[0].Cliente;
        this.laExpediente[0].IdentidaConductor = this.identidadDelCliente;
        /*
        if (uso == 1) {
          localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
          this.elExpediente.NombreConductor = this.nombreConductor;
        }
        */
        localStorage.setItem('dataProcess-NombreConductor', this.laExpediente[0].NombreConductor);
        localStorage.setItem('datos-NombreConductor', this.laExpediente[0].NombreConductor);
        localStorage.setItem('NombreConductor', this.laExpediente[0].NombreConductor);
        localStorage.setItem('nombreConductor', this.laExpediente[0].NombreConductor);
        //const element = this.tipoParentescos[0];
        //this.elTipoParentesco = element.CODIGO;
        //this.elTipoDeParentesco = element.DESCRIPCION;
        this.nombreCliente = this.laExpediente[0].Cliente;
        this.cliente.IdentidadConductor = this.identidadAsegurado;
        this.laExpediente[0].TelefonoFijoConductor = this.cliente.TelefonFijo;
        this.laExpediente[0].CelularConductor = this.cliente.Celular;
        this.nombreCliente = this.laExpediente[0].Cliente;
        this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
        this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
        this.dataProcess.ConductorAfiliado = 1;
        this.dataProcess['ConductorAfiliado'] = 1;
      } else {
        let nombreC = localStorage.getItem('dataProcess-NombreConductor');
        //self.alert(nombreC == '')
        if (nombreC == 'undefined' || nombreC == '') {
          //self.alert('Puej ji')
          setTimeout(() => {
            this.nombreConductor = '';
            this.daNombreConductor = '';
            this.daIdentidadConductor = '';
            localStorage.setItem('dataProcess-NombreConductor', '');
            this.setNombreConductor('');
          }, 900);
        } else {
          this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
          this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        }
        this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
        if (this.identidad == 'undefined' || this.identidad == '') {
          this.daIdentidadConductor = '';
        } else {}
        this.tel = localStorage.getItem('dataProcess-TelefonoAsegurado');
        this.cel = localStorage.getItem('dataProcess-CelularAsegurado');
        this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
        this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
        let fechaN = localStorage.getItem('dataProcess-FechaNacimientoConductor');
        let parentesco = localStorage.getItem('dataProcess-Parentesco');
        let licenciaTipo = localStorage.getItem('dataProcess-TipoLicencia');
        let licencia = localStorage.getItem('dataProcess-Licencia');
        let alcoholemia = localStorage.getItem('dataProcess-PruebaAlcoholemia');
        let direccionC = localStorage.getItem('dataProcess-DireccionConductor');
        let esTerceroResponsable = localStorage.getItem('dataProcess-TerceroResponsable');
        let tipoResp = localStorage.getItem('dataProcess-TerceroResponsable');
        this.elResponsableTipo = parseInt(tipoResp);
        let nombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
        let autoridad = localStorage.getItem('dataProcess-AutoridadInvolucrada');
        let ubicacion = localStorage.getItem('dataProcess-DondeSeEncuentraVehiculo');
        let audiencia = localStorage.getItem('dataProcess-AgendarAudiencia');
        let vehiculodet = localStorage.getItem('dataProcess-VehiculoDetenido');
        let conductorDet = localStorage.getItem('dataProcess-ConductorDetenido');
        let vehiculoVolcado = localStorage.getItem('dataProcess-VehiculoVolcado');
        let ubicacionVehiculoDet = localStorage.getItem('dataProcess-UbicacionVehiculoDetenido');
        let tercerosHeridos = localStorage.getItem('dataProcess-TercerosHeridos');
        let tercerosMuertos = localStorage.getItem('dataProcess-TercerosMuertos');
        let descripcionTercerosHeridos = localStorage.getItem('dataProcess-DescripcionTercerosHeridos');
        let descripcionTercerosMuertos = localStorage.getItem('dataProcess-DescripcionTercerosMuertos');
        let descripcionDanio = localStorage.getItem('dataProcess-DescripcionDanio');
        let descripcion = localStorage.getItem('dataProcess-Descripcion');
        let descripcionAudiencia = localStorage.getItem('dataProcess-DescripcionAudiencia');
        let fechaVigencia = localStorage.getItem('dataProcess-Vigencia');
        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation()?.extras.state) {
            let navParams = this.router.getCurrentNavigation()?.extras.state;
            this.laLatitud = navParams?.data[1].latitud;
            this.laLongitud = navParams?.data[2].longitud;
            this.cliente.Latitud = this.elExpediente.LatitudCliente;
            this.cliente.Longitud = this.elExpediente.LongitudCliente;
            this.clienteLatitud = this.laExpediente[0].LatitudCliente;
            this.clienteLongitud = this.laExpediente[0].LongitudCliente;
            if (this.elExpediente) {
              localStorage.setItem('dataProcess-Latitud', this.cliente.Latitud);
              localStorage.setItem('dataProcess-Longitud', this.cliente.Longitud);
              localStorage.setItem('dataProcess-Nombre', this.elExpediente.Cliente);
              setTimeout(() => {
                console.log('Es el afiliado? ' + this.conductorEsAfiliado);
                console.log('El teléfono : ' + this.tel);
                if (this.tel) {
                  this.cliente.TelefonFijo = this.tel;
                  //this.elExpediente.TelefonoFijoConductor = this.tel;
                }
                //self.alert((this.TelefonoFijoConductor))
                if (this.TelefonoFijoConductor) {
                  this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
                  //this.seTelefonoConductor(this.daTelefonoFijoConductor);
                  this.laExpediente[0].TelefonoConductor = this.TelefonoFijoConductor;
                }
                if (this.cel) {
                  this.cliente.Celular = this.cel;
                  this.setCelularConductor(this.cel);
                  this.laExpediente[0].CelularConductor = this.TelefonoFijoConductor;
                }
                if (this.CelularConductor) {
                  this.daCelularConductor = parseInt(this.CelularConductor);
                }
                if (tipoConductor) {
                  this.seTipoConductor(tipoConductor, 4);
                } else {
                  this.conductorEsAfiliado = true;
                  this.elExpediente.ConducidoPor = 1;
                }
                if (parentesco) {
                  this.setElTipoParentesco(parentesco);
                }
                if (licenciaTipo) {
                  this.seTipoLicencia(licenciaTipo);
                }
                if (fechaVigencia) {
                  console.log('Hay una fecha: ' + fechaVigencia);
                  this.setVencimiento(fechaVigencia);
                  this.isVence = true;
                } else {
                  this.isVence = false;
                }
                if (usoPoliza) {
                  this.elExpediente.UtilizoSerivicioAsistencia = usoPoliza;
                  console.log('usoPoliza', usoPoliza);
                  this.uPoli = usoPoliza;
                  this.setUtilizacionAsistencia(usoPoliza);
                } else {
                  this.elExpediente.UtilizoSerivicioAsistencia = 1;
                  this.setUtilizacionAsistencia(1);
                }
                if (porqueNo) {
                  this.setPorqueNoUso(porqueNo);
                }
                if (alcoholemia) {
                  this.setPruebaAlcohol(alcoholemia);
                } else {
                  this.elExpediente.PruebaAlcoholemia = 1;
                  this.setPruebaAlcohol(1);
                }
                console.log('Aca voy a setear el nombre del conductor');
                //self.alert('Aca voy a setear el nombre del  '+this.nombreConductor);
                if (this.nombreConductor) {
                  this.setNombreConductor(this.nombreConductor);
                }
                if (esTerceroResponsable) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#responsableRadioGroup').val(esTerceroResponsable).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#responsableRadioGroup').val('3').change();
                  this.setResponsable(3);
                }
                if (audiencia) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#audiRadioGroup').val(audiencia).change();
                  this.setAudiencia(audiencia);
                }
                if (vehiculodet) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoVRadioGroup').val(vehiculodet).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoVRadioGroup').val('2').change();
                  this.setDetenido(2);
                }
                if (conductorDet) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoCRadioGroup').val(conductorDet).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#detenidoCRadioGroup').val('2').change();
                  this.setDetenidoElConductor(2);
                }
                if (vehiculoVolcado) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#volcoRadioGroup').val(vehiculoVolcado).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#volcoRadioGroup').val('2').change();
                  this.setVolcado(2);
                }
                if (tercerosHeridos) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#tHeridosRadioGroup').val(tercerosHeridos).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#tHeridosRadioGroup').val('2').change();
                  this.setTercerosHeridos(2);
                }
                if (tercerosMuertos) {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#tMuertosRadioGroup').val(tercerosMuertos).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_20__('#tMuertosRadioGroup').val('2').change();
                  this.setTercerosMuertos(2);
                }
                if (nombreAtribuyeAccidente) {
                  this.elExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
                  this.laExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
                  this.nombreAtribuye = nombreAtribuyeAccidente;
                  console.log('Ajui juiiiiii....' + this.elExpediente.NombreAtribuyeAccidente);
                  this.setNombreAtribuye(nombreAtribuyeAccidente);
                }
                if (unidad) {
                  this.setUnidad(unidad);
                }
              }, 3000);
              let use = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
              let uso = parseInt(use);
              console.log('Este es el conductor que enconré : ' + this.nombreConductor);
              if (this.nombreConductor) {
                if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
                  this.elExpediente.NombreConductor = this.nombreConductor;
                }
                setTimeout(() => {
                  console.log('Ahora seteo el nombre del conductor');
                  this.setNombreConductor(this.nombreConductor);
                }, 3000);
              } else {
                if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
                  this.elExpediente.NombreConductor = this.elExpediente.Cliente;
                }
              }
              if (this.identidad) {
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidad);
              } else {
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidadAsegurado);
              }
              if (poliza) {
                localStorage.setItem('dataProcess-Poliza', poliza);
              } else {
                localStorage.setItem('dataProcess-Poliza', this.elExpediente.PolizaExterna);
              }
              if (dCorrespondencia) {
                this.cliente.DireccionEnvioCorrespondencia = dCorrespondencia;
              }
              /*
              setTimeout(() => {
                console.log('Es el afiliado? '+ this.conductorEsAfiliado);
                console.log('El teléfono : '+this.tel)
                if (this.tel) {
                  this.cliente.TelefonFijo = this.tel;
                  //this.elExpediente.TelefonoFijoConductor = this.tel;
                }
                                if (this.TelefonoFijoConductor) {
                  this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
                }
                                      if (this.cel) {
                  this.cliente.Celular = this.cel;
                }
                
                if (this.CelularConductor) {
                  this.daCelularConductor = parseInt(this.CelularConductor);
                }
                              }, 5000);
              */
              if (email) {
                this.cliente.CorreoElectronico = email;
              }
              if (blindado) {
                this.setBlindado(blindado);
              } else {
                this.setBlindado(2);
              }
              if (unidad) {
                this.elExpediente.NoUnidad = unidad;
                this.laExpediente[0].NoUnidad = unidad;
              }
              if (fechaN) {
                this.formateadaNacimiento = fechaN;
                this.setFechaNacimiento(fechaN);
              } else {
                if (this.laExpediente[0].FechaNacimientoConductor != null) {
                  //this.dataProcess.Edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  //this.edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  this.formateadaNacimiento = this.laExpediente[0].FechaNacimientoConductor.toString().split('T')[0];
                } else {
                  this.formateadaNacimiento = new Date().toISOString().split('T')[0];
                }
              }
              if (licencia) {
                this.elExpediente.LicenciaNo = licencia;
                this.laExpediente[0].LicenciaNo = licencia;
                this.setLicencia(licencia);
              }
              if (autoridad) {
                this.elExpediente.AutoridadInvolucrada = autoridad;
                this.laExpediente[0].AutoridadInvolucrada = autoridad;
                this.setEntidadInvolucrada(autoridad);
              }
              if (ubicacion) {
                this.elExpediente.UbicacionVehiculoAsegurado = ubicacion;
                this.laExpediente[0].UbicacionVehiculoAsegurado = ubicacion;
                this.setUbicacionVehiculoDetenido(ubicacion);
              }
              if (ubicacionVehiculoDet) {
                this.elExpediente.UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.laExpediente[0].UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.setUbicacionVehiculoDetenido(ubicacionVehiculoDet);
              }
              if (descripcionTercerosHeridos) {
                this.elExpediente.DescripcionTercerosHeridos = descripcionTercerosHeridos;
              }
              if (descripcionTercerosMuertos) {
                this.elExpediente.DescripcionTercerosMuertos = descripcionTercerosMuertos;
              }
              if (descripcionDanio) {
                this.elExpediente.DescripcionDanioVehiculo = descripcionDanio;
                this.laExpediente[0].DescripcionDanioVehiculo = descripcionDanio;
                this.setDescripcionDanio(descripcionDanio);
              }
              if (descripcion) {
                this.elExpediente.DescripcionAccidente = descripcion;
                this.laExpediente[0].DescripcionAccidente = descripcion;
                this.setDescripcionAccidente(descripcion);
              }
              if (descripcionAudiencia) {
                this.elExpediente.DescripcionAudiencia = descripcionAudiencia;
                this.laExpediente[0].DescripcionAudiencia = descripcionAudiencia;
                this.setDescripcionAudiencia(descripcionAudiencia);
              }
              if (direccionC) {
                this.elExpediente.DireccionConductor = direccionC;
                this.laExpediente[0].DireccionConductor = direccionC;
                this.setDireccionConductor(direccionC);
              }
            }
            let fechaExpediente = this.laExpediente[0].FechaRegistro;
            console.log('fechaExpediente :' + fechaExpediente);
            this.formateadaSiniestro = fechaExpediente.split('T')[0]; //formateador.formatearFechaSiniestro(fechaExpediente);
            let laHora = fechaExpediente.split('T')[1];
            this.horaSiniestro = laHora.split('.')[0];
            localStorage.setItem('FechaRegistro', this.elExpediente.FechaRegistro);
            //Inicializacion del arreglo de datos de envio
            console.log('Ya estamos aqui');
            //console.log('El expediente lenght '+ItemsExpediente.length)
            for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente.length; index++) {
              const element = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente[index];
              const itemNombre = element.nombre;
              const valorExpediente = this.elExpediente[itemNombre];
              if (valorExpediente == null || valorExpediente == undefined) {
                this.nulosExpediente.push({
                  nombre: itemNombre,
                  valor: valorExpediente
                });
              }
              if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.ItemsExpediente.length - 1) {
                //console.dir(this.nulosExpediente)
              }
            }
            //self.alert('llenado de datos '+this.laExpediente[0].PolizaExterna)
            this.dataProcess['RefAtencionId'] = this.laExpediente[0].Id;
            this.dataProcess['RefProveedorAgenteId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefProveedorAgenteId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefProveedorAgenteAbogadoId'] = this.laExpediente[0].RefProveedorAgenteAbogadoId;
            this.dataProcess['Poliza'] = this.laExpediente[0].PolizaExterna;
            this.dataProcess['Cliente'] = this.laExpediente[0].Cliente;
            this.dataProcess['IdentidaConductor'] = this.laExpediente[0].IdentidaConductor;
            this.dataProcess['Nombre'] = this.laExpediente[0].Cliente;
            this.dataProcess['MarcaVehiculo'] = this.laExpediente[0].Marca;
            this.dataProcess['ModeloVehiculo'] = this.laExpediente[0].Modelo;
            this.dataProcess['AnioVehiculo'] = this.laExpediente[0].Year;
            this.dataProcess['PlacaVehiculo'] = this.laExpediente[0].NumeroPlaca;
            this.dataProcess['ChasisVehiculo'] = this.laExpediente[0].Chasis;
            this.dataProcess['ColorVehiculo'] = this.laExpediente[0].Color;
            this.dataProcess['DescripcionVehiculo'] = "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca;
            localStorage.setItem('dataProcess-DescripcionVehiculo', "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca);
            this.dataProcess['FechaHora'] = this.laExpediente[0].FechaRegistro;
            this.dataProcess['Lugar'] = this.laExpediente[0].Direccion;
            this.dataProcess['RefUsuarioId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefUsuarioId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefPaisId'] = this.laExpediente[0].IdPais;
            localStorage.setItem('dataProcess-RefPaisId', this.laExpediente[0].IdPais);
            this.dataProcess['RefCiudadId'] = this.laExpediente[0].IdCiudad;
            localStorage.setItem('dataProcess-RefCiudadId', this.laExpediente[0].IdCiudad);
            this.dataProcess['RefDeptoId'] = this.laExpediente[0].RefDepartamentoId;
            localStorage.setItem('dataProcess-RefDeptoId', this.laExpediente[0].RefDepartamentoId);
            this.dataProcess['Motor'] = this.laExpediente[0].Motor;
            localStorage.setItem('dataProcess-MarcaVehiculo', this.laExpediente[0].Marca);
            localStorage.setItem('dataProcess-ModeloVehiculo', this.laExpediente[0].Modelo);
            localStorage.setItem('dataProcess-AnioVehiculo', this.laExpediente[0].Year);
            localStorage.setItem('dataProcess-PlacaVehiculo', this.laExpediente[0].NumeroPlaca);
            localStorage.setItem('dataProcess-ChasisVehiculo', this.laExpediente[0].Chasis);
            localStorage.setItem('dataProcess-ColorVehiculo', this.laExpediente[0].Color);
            //localStorage.setItem('dataProcess-Motor', this.laExpediente[0].Motor);
            //this.dataProcess['DireccionEnvioCorrespondencia'] = this.elExpediente.Direccion;
            for (let index = 0; index < this.nulosExpediente.length; index++) {
              const element = this.nulosExpediente[index];
              console.log('viene nulo ' + element.nombre);
              for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados.length; index++) {
                const elementPredet = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados[index].nombre;
                const elementPredetV = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.Predeterminados[index].valor;
                if (element.nombre.indexOf(elementPredet) > -1) {
                  this.dataProcess[element.nombre] = elementPredetV;
                }
              }
            }
          }
        });
      }
    } else {
      this.daTipoConductor = 1;
      this.seTipoConductor(this.daTipoConductor, 5);
    }
    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage[index];
      let cadena = localStorage.key(index);
      let objeto = localStorage.getItem(cadena);
      if (localStorage.key(index)?.indexOf('testigos-') == 0) {
        this.testigos.push(JSON.parse(objeto));
      }
      if (localStorage.key(index)?.indexOf('acompaniante-') == 0) {
        this.acompaniante.push(JSON.parse(objeto));
      }
      if (localStorage.key(index)?.indexOf('lesionados-') == 0) {
        this.lesionados.push(JSON.parse(objeto));
      }
      if (localStorage.key(index)?.indexOf('propiedadesprivadas-') == 0) {
        this.propiedadesprivadas.push(JSON.parse(objeto));
      }
    }
    this.firstInterval = setInterval(() => {
      this.setFirstSegment();
    }, 2000);
    this.api.ListTipoConductor();
    this.loadParentescos();
    this.getTalleres();
    if (this.platform.is('android')) {
      this.getCountry();
    }
    jquery__WEBPACK_IMPORTED_MODULE_20__('#botonFirmar').click();
  }
  hiddenMenu(i) {
    if (!this.menu[i]) {
      this.menu = this.menu.reduce(x => {
        return [...x, false];
      }, []);
    }
    this.menu[i] = !this.menu[i];
  }
  analizaNulo(indexFront, valor, inputIndex) {
    let segmentKey = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente[indexFront].segmentKey;
    let segmentId = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente[indexFront].segmentoId;
    let segmentIndex = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente[indexFront].segmentIndex;
    this.indexFront = jquery__WEBPACK_IMPORTED_MODULE_20__('.index-input').eq(indexFront).val(); //segmentIndex;
    //alert('valor '+valor+' en el index '+ inputIndex +', el segmento '+requiredDataCliente[indexFront].segmentKey)
    //$('.required-index').eq(inputIndex).addClass('required-missing');
    if (valor == 'undefined' || valor == undefined) {
      setTimeout(() => {
        //this.setSegment(segmentKey, indexSeg);
        jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).click();
        let daSegmentsContainer = document.getElementsByClassName('segment-icon');
        let daTitleContainer = document.getElementsByClassName('segment-title');
        let daSegmentsButton = document.getElementsByClassName('segment-item');
        let daIndex = segmentIndex;
        for (let index = 0; index < daSegmentsContainer.length; index++) {
          const element = daSegmentsContainer[index];
          const title = daTitleContainer[index];
          const segmentId = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments[index].idSegmento;
          if (daIndex == index) {
            jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).fadeIn('xslow');
            daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
            element.setAttribute('style', 'color:#0058CB');
            title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).fadeOut();
            daSegmentsButton[index].setAttribute('style', 'border:none');
            element.setAttribute('style', 'color:#7da1c4');
            title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
          }
        }
        //this.scrollToElement();
      }, 900);
    }
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  ionViewDidEnter() {
    let origin = localStorage.getItem('origin');
    this.esAudiencia = origin === '/prepare-send';
    this.platform.ready().then(() => {
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_19__.Keyboard.addListener('keyboardDidShow', () => {
        jquery__WEBPACK_IMPORTED_MODULE_20__('#firmaChip').fadeOut();
      });
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_19__.Keyboard.addListener('keyboardDidHide', () => {
        jquery__WEBPACK_IMPORTED_MODULE_20__('#firmaChip').fadeIn();
      });
      setTimeout(() => {
        const imgElement = document.getElementById("imagenFirma");
        if (imgElement) {
          console.log('Esta imagen ' + imgElement.src); // Obtiene el valor completo (resuelto a URL absoluta)
          console.log(imgElement.getAttribute("src")); // Obtiene exactamente lo que está en el atributo
        }

        this.firmar();
      }, 900);
    });
  }
  ngOnInit() {
    var _this = this;
    //alert('Bienvenido a la página de cliente del expediente ');
    for (let indexA = 0; indexA < this.datosAtencion.length; indexA++) {
      const elementA = this.datosAtencion[indexA];
      console.log('Los datos de atencion son ');
      console.dir(elementA);
    }
    setTimeout(() => {
      let segmentsContainer = document.getElementsByClassName('segment-item');
      //alert($('.segment-item').eq(9).text())
      jquery__WEBPACK_IMPORTED_MODULE_20__('.segment-item').eq(9).click(function () {
        setTimeout(() => {
          jquery__WEBPACK_IMPORTED_MODULE_20__('#signButton').click();
        }, 1000);
      });
      //$('#signButton').click();
    }, 1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    localStorage.setItem('atencionEnProceso', this.idAtencion);
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        this.expediente = res;
        this.moneda = this.expediente[0].Moneda;
        //alert(this.moneda)
        if (this.moneda == null) {
          this.miMoneda = "LEMPIRAS";
        } else {
          this.miMoneda = this.moneda;
        }
      });
      let polNum;
      let cerNum;
      setTimeout(() => {
        polNum = this.elExpediente[0].PolizaExterna.split('-')[1];
        cerNum = this.elExpediente[0].Certificado;
        const cobertura = {
          pNumPoliza: parseInt(polNum),
          pNumSiniestro: '',
          pNumCertificado: parseInt(cerNum),
          pNumEndoso: '',
          pNumAsegurado: ''
        };
        this.api.Valida_Lista_Coberturas(cobertura).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this.isLoading = false;
        }))).subscribe(res => {
          console.log('Cobertura de póliza ');
          console.dir(res);
          //localStorage.setItem('coberturas', JSON.stringify(res));
        });
      }, 3000);
      console.log('asi estan los acompas');
      console.dir(this.acompaniante);
    }
    this.platform.ready().then(() => {
      let elementWidth = document.getElementById('segmentsContent')?.clientWidth;
      if (this.platform.is('android')) {
        this.deviceWidth = this.platform.width() - 400;
      } else {
        this.deviceWidth = this.platform.width() - 370;
      }
      // se debe cambiar el id de la obtencion de la licencia por una variable. Temporalmente se tiene en duro el id de pais de honduras con fines de testeo
      let codigoPais = localStorage.getItem('codigoPais');
      const paisId = this.countryService.convertCountryCode(codigoPais); //this.convertCountryCode(codigoPais);
      //alert('Código de país : '+ paisId)
      //this.getTipoLicencia(paisId);
      this.getTipoLicencia(3);
      this.identificarPais();
    });
    if (_capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network) {
      this.checkConnection();
    }
  }
  // PROCESO
  goBack() {
    this.alertaSalir();
    //this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  alertaSalir() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: 'Salir del formulario?',
        message: 'Los datos se perderan sin haber enviado. Salir?',
        buttons: _this2.alertButtons
      });
      yield alert.present();
    })();
  }
  goMap() {
    this.router.navigate(['./mapa']);
  }
  scrollToElement() {
    this.content.scrollToPoint(0, 0, 1000);
  }
  limpiarCache() {
    window.location.reload();
  }
  saveFirma() {
    //console.log(this.sig.toDataURL("image/jpeg"));
  }
  addPersona() {
    switch (this.persona.TipoPersona) {
      case 1:
        this.acompaniante.push(this.persona);
        console.dir(this.acompaniante);
        for (let index = 0; index < this.acompaniante.length; index++) {
          const element = this.acompaniante[index];
          localStorage.setItem('acompaniante-' + index, JSON.stringify(element));
        }
        break;
      case 2:
        this.testigos.push(this.persona);
        console.dir(this.testigos);
        for (let index = 0; index < this.testigos.length; index++) {
          const element = this.testigos[index];
          localStorage.setItem('testigos-' + index, JSON.stringify(element));
        }
        break;
      case 3:
        this.lesionados.push(this.persona);
        console.log('Lesionados');
        console.dir(this.lesionados);
        for (let index = 0; index < this.lesionados.length; index++) {
          const element = this.lesionados[index];
          localStorage.setItem('lesionados-' + index, JSON.stringify(element));
        }
        break;
      default:
        break;
    }
    this.persona = {};
    this.showPersona = false;
    this.showPersonaLesion = false;
  }
  editPersona(i, tipo) {
    switch (tipo) {
      case 1:
        this.persona = this.acompaniante[i];
        break;
      case 2:
        this.persona = this.testigos[i];
        break;
      case 3:
        this.persona = this.lesionados[i];
        break;
      default:
        break;
    }
    this.indexPersona = i;
    this.editar = true;
    this.guardar = false;
    if (tipo == 3) {
      this.showPersonaLesion = true;
      this.modalLesion?.onDidDismiss().then(data => {
        this.showPersonaLesion = false;
        console.log(data + ', Hey');
      });
    } else {
      this.showPersona = true;
      this.daModal?.onDidDismiss().then(data => {
        this.showPersona = false;
      });
    }
    //this.showPersonaLesion = true;
  }

  updatePersona() {
    //alert(this.persona.TipoPersona)
    let miTipo = this.persona.TipoPersona;
    switch (this.persona.TipoPersona) {
      case 1:
        this.acompaniante[this.indexPersona] = this.persona;
        localStorage.setItem('acompaniante-' + this.indexPersona, JSON.stringify(this.persona));
        break;
      case 2:
        this.testigos[this.indexPersona] = this.persona;
        localStorage.setItem('testigos-' + this.indexPersona, JSON.stringify(this.persona));
        break;
      case 3:
        this.lesionados[this.indexPersona] = this.persona;
        localStorage.setItem('lesionados-' + this.indexPersona, JSON.stringify(this.persona));
        break;
      default:
        break;
    }
    this.persona = {};
    this.editar = false;
    this.guardar = true;
    console.log('El tipo de persona a editar es ' + miTipo);
    //let tipoString = this.persona.TipoPersona.toString();
    //let tipo = parseInt(tipoString)
    ///alert(tipo+1)
    //alert(this.persona.TipoPersona == 3)
    if (miTipo == 3) {
      this.showPersonaLesion = false;
      //this.showPersonaLesion = true;
      this.modalLesion?.onDidDismiss().then(data => {
        this.showPersonaLesion = false;
        console.log(data + ', Hey');
      });
    } else {
      this.showPersona = false;
      //alert('Ya estoy acá')
      //this.showPersona = true;
      this.daModal?.onDidDismiss().then(data => {
        this.showPersona = false;
      });
    }
  }
  deletePersona(i, tipo) {
    //console.log(i)
    switch (tipo) {
      case 1:
        this.acompaniante.splice(i, 1);
        localStorage.removeItem('acompaniante-' + i);
        break;
      case 2:
        this.testigos.splice(i, 1);
        localStorage.removeItem('testigos-' + i);
        break;
      case 3:
        this.lesionados.splice(i, 1);
        localStorage.removeItem('lesionados-' + i);
        break;
      default:
        break;
    }
  }
  insertarLesion(event) {
    console.log(event.detail.value);
    localStorage.setItem('lesion-' + this.idAtencion, event.detail.value);
  }
  getElTipoParentesco(event) {
    console.log(event);
    let tipoP = event.detail.value;
    this.elTipoParentesco = event.target.value;
    this.dataProcess['Parentesco'] = event.detail.value;
    localStorage.setItem('dataProcess-Parentesco', event.target.value);
    localStorage.setItem('datos-Parentesco', event.target.value);
    console.log('Este tipo ' + tipoP);
    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      //console.dir(element)
      if (tipoP == element.CODIGO) {
        this.elTipoDeParentesco = element.DESCRIPCION;
      }
    }
    //this.elTipoDeParentesco = this.tipoParentescos
  }

  setElTipoParentesco(parent) {
    this.elTipoParentesco = parent;
    localStorage.setItem('dataProcess-Parentesco', parent);
    localStorage.setItem('datos-Parentesco', parent);
  }
  tercerosHeridos(event) {
    this.esTercerosHeridos = event.target.value;
    this.dataProcess['TercerosHeridos'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-TercerosHeridos', event.target.value);
  }
  seTercerosHeridos(terceros) {
    this.esTercerosHeridos = terceros;
    this.dataProcess['TercerosHeridos'] = parseInt(terceros);
    localStorage.setItem('dataProcess-TercerosHeridos', terceros);
  }
  tercerosMuertos(event) {
    this.esTercerosMuertos = parseInt(event.target.value);
    this.dataProcess['TercerosMuertos'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-TercerosMuertos', event.target.value);
  }
  seTercerosMuertos(terceros) {
    this.esTercerosMuertos = terceros;
    this.dataProcess['TercerosMuertos'] = terceros;
    localStorage.setItem('dataProcess-TercerosMuertos', terceros);
  }
  loadParentescos() {
    var _this3 = this;
    this.api.ListTipoParentesco(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.tipoParentescos = res;
      });
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  personaModal(tipo) {
    //alert(tipo)
    this.persona.TipoPersona = tipo;
    if (tipo == 3) {
      this.showPersonaLesion = !this.showPersonaLesion;
      this.modalLesion?.onDidDismiss().then(data => {
        this.showPersonaLesion = false;
        console.log(data + ', Hey');
        this.persona.Nombre = '';
        this.persona.Telefono = '';
        this.persona.Direccion = '';
        this.persona.TipoLesion = '';
        this.persona.DireccionHospitalizacion = '';
      });
    } else {
      this.showPersona = !this.showPersona;
      this.daModal?.onDidDismiss().then(data => {
        this.showPersona = false;
        console.log(data + ', Hey');
        this.persona.Nombre = '';
        this.persona.Telefono = '';
        this.persona.Direccion = '';
      });
    }
  }
  openModaLesion(tipo) {
    this.persona.TipoPersona = tipo;
    this.showPersonaLesion = !this.showPersonaLesion;
  }
  openModalPropiedad() {
    this.propiedadPrivada = {};
    this.showPropiedad = !this.showPropiedad;
    this.propModal?.onDidDismiss().then(data => {
      this.showPropiedad = false;
      console.log(data + ', Hey');
    });
  }
  addPropiedad() {
    this.showPropiedad = !this.showPropiedad;
    this.propiedadesprivadas.push(this.propiedadPrivada);
    for (let index = 0; index < this.propiedadesprivadas.length; index++) {
      console.dir(this.propiedadesprivadas);
      const element = this.propiedadesprivadas[index];
      localStorage.setItem('propiedadesprivadas-' + index, JSON.stringify(element));
    }
  }
  editPropiedad(i) {
    this.propiedadPrivada = this.propiedadesprivadas[i];
    this.indexPersona = i;
    this.editar = true;
    this.guardar = false;
    this.showPropiedad = true;
  }
  updatePropiedad() {
    this.propiedadesprivadas[this.indexPropiedad] = this.propiedadPrivada;
    localStorage.setItem('propiedadesprivadas-' + this.indexPropiedad, JSON.stringify(this.propiedadPrivada));
    this.propiedadPrivada = {};
    this.editar = false;
    this.guardar = true;
    this.showPropiedad = false;
  }
  deletePropiedad(i) {
    this.propiedadesprivadas.splice(i, 1);
    localStorage.removeItem('propiedadesprivadas-' + i);
  }
  PropiedadModal(tipo) {
    this.showPropiedad = !this.showPersona;
  }
  next() {
    this.router.navigate(['./fotoshn']);
  }
  goAdeuda() {
    this.router.navigate(['./adeuda']);
  }
  goAjuste() {
    this.router.navigate(['./ajustadorhn']);
  }
  goCulpable() {
    this.router.navigate(['./culpable']);
  }
  goFotos() {
    this.router.navigate(['./fotoshn']);
  }
  presentToast(message, position, clase) {
    var _this4 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this4.toast.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this4.toast.create({
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
            //            this.location.back()
            window.location.reload();
          }
        }]
      });
      yield toast.present();
    })();
  }
  checkConnection() {
    if (_capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network) {
      _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus().then(status => {
        this.conexion = status;
        //console.log(status.connected)
        this.conectividad = status.connected;
        if (this.conectividad == false) {
          this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
        }
      });
    } else {
      this.conectividad = false;
    }
    _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      if (this.conectividad == false) {
        this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
      }
    });
  }
  presentToastErrorConexion(message, position, clase) {
    var _this5 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this5.toast.dismiss();
      }
      const toast = yield _this5.toast.create({
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
  seleccionarMarca(idMarca) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    this.elExpediente.Marca = _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos[elIndex].nombre;
    for (let index = 0; index < _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos.length; index++) {
      const element = _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos[index];
      if (element.id == elIndex) {
        //console.log("Estos son los modelos de esta marca ");
        this.modelosMarca = element.modelos;
        //console.dir(this.modelosMarca)
      }
    }
  }

  seleccionarModelo(idModelo) {
    this.elExpediente.Modelo = idModelo.target.value;
    //console.log(this.elExpediente.Modelo)
  }

  seleccionarMarcaCulpable(idMarca) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    //alert(elIndex)
    this.culpable.MarcaCulpable = _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos[elIndex - 1].nombre;
    for (let index = 0; index < _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos.length; index++) {
      const element = _environments_vehicles__WEBPACK_IMPORTED_MODULE_8__.marcasVehiculos[index];
      if (element.id == elIndex) {
        //console.log("Estos son los modelos de esta marca ");
        this.modelosMarca = element.modelos;
        //console.dir(this.modelosMarca)
      }
    }
  }

  seleccionarModeloCulpable(idModelo) {
    this.culpable.ModeloCulpable = idModelo.target.value;
    //console.log(this.culpable.ModeloCulpable)
  }
  //OJO DEBUG
  testThis() {
    //alert('testing')
  }
  seleccionarTipoConductor(tipoCId) {
    this.daType = tipoCId.target.value;
    for (let indexT = 0; indexT < this.tipoConductor.length; indexT++) {
      const element = this.tipoConductor[indexT];
      let idTipo = element.Id;
      if (idTipo == this.daType) {
        //alert(this.daType+', '+element.TipoConductor)
        this.elTipoDeConductor = element.TipoConductor;
        console.log('Tipo de conductor seleccionado : ' + this.elTipoDeConductor);
      }
    }
    //this.entraResponsable()
    //alert(this.daType+1)
    this.elExpediente.ConducidoPor = parseInt(tipoCId.target.value);
    this.laExpediente[0].ConducidoPor = parseInt(tipoCId.target.value);
    this.dataProcess.RefTipoConductorId = parseInt(tipoCId.target.value);
    this.dataProcess['RefTipoConductorId'] = parseInt(tipoCId.target.value);
    localStorage.setItem('dataProcess-RefTipoConductorId', tipoCId.target.value);
    this.formateadaNacimiento = null;
    this.elTipoDeParentesco = null;
    this.elTipoDeLicencia = null;
    this.laExpediente[0].TelefonoFijoConductor = null;
    this.laExpediente[0].DireccionConductor = null;
    this.laExpediente[0].CelularConductor = null;
    this.laExpediente[0].LicenciaNo = null;
    this.formateadaVigencia = null;
    this.daTelefonoFijoConductor = undefined;
    this.daCelularConductor = null;
    this.edad = undefined;
    for (let index = 0; index < this.tipoConductor.length; index++) {
      const element = this.tipoConductor[index];
      //console.log('Tipo de conductor '+tipoCId.target.value+', tipo '+element.TipoConductor);
      //console.dir(element)
      if (this.daType == element.Id) {
        this.elTipoDeConductor = element.TipoConductor;
      }
    }
    // limpiar variables de licencia
    this.dataProcess.RefTipoLicenciaId = null;
    this.dataProcess.TipoLicencia = null;
    this.elExpediente.TipoLicencia = null;
    this.laExpediente[0].TipoLicencia = null;
    this.elTipoParentesco = null;
    this.dataProcess['Parentesco'] = null;
    localStorage.removeItem('dataProcess-Parentesco');
    localStorage.removeItem('datos-Parentesco');
    localStorage.removeItem('dataProcess-TipoLicencia');
    localStorage.removeItem('dataProcess-RefTipoLicenciaId');
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elTipoLicenciaId');
    localStorage.removeItem('elParentesco');
    if (tipoCId.target.value == 1) {
      this.conductorEsAfiliado = true;
      this.elExpediente.NombreConductor = this.elExpediente.Cliente;
      this.laExpediente[0].NombreConductor = this.laExpediente[0].Cliente;
      this.laExpediente[0].IdentidaConductor = this.identidadDelCliente;
      localStorage.setItem('dataProcess-NombreConductor', this.laExpediente[0].NombreConductor);
      localStorage.setItem('datos-NombreConductor', this.laExpediente[0].NombreConductor);
      localStorage.setItem('NombreConductor', this.laExpediente[0].NombreConductor);
      localStorage.setItem('nombreConductor', this.laExpediente[0].NombreConductor);
      //const element = this.tipoParentescos[0];
      //this.elTipoParentesco = element.CODIGO;
      //this.elTipoDeParentesco = element.DESCRIPCION;
      this.nombreCliente = this.laExpediente[0].Cliente;
      this.cliente.IdentidadConductor = this.identidadAsegurado;
      this.laExpediente[0].TelefonoFijoConductor = this.cliente.TelefonFijo;
      this.laExpediente[0].CelularConductor = this.cliente.Celular;
      this.nombreCliente = this.laExpediente[0].Cliente;
      this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
      this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
      this.dataProcess.ConductorAfiliado = 1;
      this.dataProcess['ConductorAfiliado'] = 1;
      localStorage.setItem('dataProcess-ConductorAfiliado', '1');
      //this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
      this.daIdentidadConductor = localStorage.getItem('identidadAsegurado');
      this.daTelefonoFijoConductor = this.laExpediente[0].TelefonoOrigen;
      this.daCelularConductor = this.laExpediente[0].TelefonoOrigen;
    } else {
      this.conductorEsAfiliado = false;
      this.daNombreConductor = '';
      this.daIdentidadConductor = '';
      this.daTelefonoFijoConductor = null;
      this.daCelularConductor = null;
      this.dataProcess['NombreConductor'] = '';
      localStorage.setItem('dataProcess-NombreConductor', '');
      this.dataProcess.ConductorAfiliado = tipoCId.target.value;
      this.dataProcess['ConductorAfiliado'] = tipoCId.target.value;
      localStorage.setItem('dataProcess-ConductorAfiliado', tipoCId.target.value);
      //this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      if (this.nombreConductor) {
        if (this.nombreConductor == this.elExpediente.Cliente) {
          /*
          this.daNombreConductor = '';
          this.daIdentidadConductor = '';
          this.daTelefonoFijoConductor = null;
          this.daCelularConductor = null;
          localStorage.setItem('dataProcess-NombreConductor', '');
          localStorage.setItem('datos-NombreConductor', '');
          localStorage.setItem('NombreConductor', '');
          localStorage.setItem('nombreConductor', '');
          */
        }
        //alert('Tengo este conductor en caché '+this.nombreConductor+', y '+this.elExpediente.Cliente);
      } else {
        //alert('Aun no se ha ingresado un conductor');
      }
    }
  }
  seTipoConductor(tipoC, origen) {
    //alert('Yes '+tipoC)
    this.elExpediente.ConducidoPor = parseInt(tipoC);
    this.laExpediente[0].ConducidoPor = parseInt(tipoC);
    this.dataProcess.RefTipoConductorId = parseInt(tipoC);
    this.dataProcess['RefTipoConductorId'] = parseInt(tipoC);
    localStorage.setItem('dataProcess-RefTipoConductorId', tipoC);
    //alert(this.tipoConductor.length)
    for (let indexT = 0; indexT < this.tipoConductor.length; indexT++) {
      const element = this.tipoConductor[indexT];
      let idTipo = element.Id;
      //alert(idTipo+' == '+this.daTipoConductor+', '+(idTipo == this.daTipoConductor));
      if (idTipo == this.daTipoConductor) {
        this.elTipoDeConductor = element.TipoConductor;
      }
    }
    setTimeout(() => {
      let use = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
      let uso = parseInt(use);
      if (parseInt(tipoC) == 1) {
        this.cliente.Celular = jquery__WEBPACK_IMPORTED_MODULE_20__('#celularAsegurado').val();
        this.conductorEsAfiliado = true;
        this.elExpediente.NombreConductor = this.elExpediente.Cliente;
        this.laExpediente[0].NombreConductor = this.laExpediente[0].Cliente;
        this.nombreCliente = this.laExpediente[0].Cliente;
        this.nombreConductor = this.elExpediente.Cliente;
        this.cliente.IdentidadConductor = this.identidadAsegurado;
        this.laExpediente[0].TelefonoFijoConductor = this.cliente.TelefonFijo;
        this.elExpediente.TelefonoFijoConductor = this.cliente.TelefonFijo;
        this.elExpediente.CelularConductor = this.cliente.Celular;
        this.laExpediente[0].CelularConductor = this.cliente.Celular;
        this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
        this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
        this.dataProcess.ConductorAfiliado = 1;
        this.dataProcess['ConductorAfiliado'] = 1;
        localStorage.setItem('nombreConductor', this.laExpediente[0].Cliente);
        if (uso == 1) {
          localStorage.setItem('dataProcess-NombreConductor', this.laExpediente[0].Cliente);
        }
        this.dataProcess.ConductorAfiliado = 1;
        this.dataProcess['ConductorAfiliado'] = 1;
        localStorage.setItem('dataProcess-ConductorAfiliado', '1');
        this.laExpediente[0].IdentidaConductor = this.identidadDelCliente;
        localStorage.setItem('datos-NombreConductor', this.laExpediente[0].NombreConductor);
        localStorage.setItem('NombreConductor', this.laExpediente[0].NombreConductor);
        this.daIdentidadConductor = localStorage.getItem('identidadAsegurado');
        this.daTelefonoFijoConductor = this.laExpediente[0].TelefonoOrigen;
        this.daCelularConductor = this.cliente.Celular; //this.laExpediente[0].TelefonoOrigen;
        this.setCelularConductor(this.daCelularConductor);
        //alert('Celular Conductor '+this.daCelularConductor+', '+this.cliente.Celular)
      } else {
        this.conductorEsAfiliado = false;
        this.elExpediente.NombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.laExpediente[0].NombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.cliente.IdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
        this.daIdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
        this.laExpediente[0].TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
        this.laExpediente[0].CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
        this.nombreCliente = localStorage.getItem('dataProcess-NombreConductor');
        this.dataProcess.ConductorAfiliado = localStorage.getItem('dataProcess-ConductorAfiliado');
        this.dataProcess['ConductorAfiliado'] = localStorage.getItem('dataProcess-ConductorAfiliado');
        this.dataProcess.ConductorAfiliado = localStorage.getItem('dataProcess-ConductorAfiliado');
        this.dataProcess['ConductorAfiliado'] = localStorage.getItem('dataProcess-ConductorAfiliado');
        let cambiazo = localStorage.getItem('dataProcess-ConductorAfiliado');
        localStorage.setItem('dataProcess-ConductorAfiliado', cambiazo);
      }
    }, 1000);
  }
  setNombreConductor(nombre) {
    this.elExpediente.NombreConductor = nombre;
    this.laExpediente[0].NombreConductor = nombre;
    this.dataProcess.NombreConductor = nombre;
    this.dataProcess['NombreConductor'] = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('nombreConductor', this.laExpediente[0].NombreConductor);
    localStorage.setItem('dataProcess-NombreConductor', nombre);
  }
  entraNombreConductor(event) {
    console.log(this.daType);
    if (this.daType == 1) {
      console.log('soy el asegurado');
    } else {
      console.log(this.daNombreConductor);
      console.log('soy el conductor');
      localStorage.setItem('nombreConductor', this.daNombreConductor);
      localStorage.setItem('dataProcess-NombreConductor', this.daNombreConductor);
      localStorage.setItem('datos-NombreConductor', this.daNombreConductor);
      this.dataProcess.NombreConductor = this.daNombreConductor;
      this.dataProcess['NombreConductor'] = this.daNombreConductor;
    }
  }
  descripcionDanio(event) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = event.target.value;
    this.dataProcess['DescripcionDanio'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionDanio', event.target.value);
  }
  setDescripcionDanio(descripcion) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = descripcion;
    this.dataProcess['DescripcionDanio'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionDanio', descripcion);
  }
  descripcionAccidente(event) {
    //console.log(event.target.value)
    this.dataProcess['Descripcion'] = event.target.value;
    localStorage.setItem('dataProcess-Descripcion', event.target.value);
  }
  setDescripcionAccidente(descripcion) {
    //console.log(event.target.value)
    this.dataProcess['Descripcion'] = descripcion;
    localStorage.setItem('dataProcess-Descripcion', descripcion);
  }
  dTercerosHeridos(event) {
    this.dataProcess.DescripcionTercerosHeridos = event.target.value;
    this.dataProcess['DescripcionTercerosHeridos'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionTercerosHeridos', event.target.value);
  }
  dTercerosMuertos(event) {
    this.dataProcess.DescripcionTercerosMuertos = event.target.value;
    this.dataProcess['DescripcionTercerosMuertos'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionTercerosMuertos', event.target.value);
  }
  setTercerosHeridos(option) {
    this.dataProcess.TercerosHeridos = option;
    this.dataProcess['TercerosHeridos'] = parseInt(option);
    localStorage.setItem('dataProcess-TercerosHeridos', option);
  }
  setTercerosMuertos(option) {
    this.dataProcess.TercerosMuertos = option;
    this.dataProcess['TercerosMuertos'] = option;
    localStorage.setItem('dataProcess-TercerosMuertos', option);
  }
  entrarAnio(event) {
    this.elExpediente.Year = event.target.value;
    this.laExpediente[0].Year = event.target.value;
  }
  entrarMotor(event) {
    this.elExpediente.Motor = event.target.value;
    this.laExpediente[0].Motor = event.target.value;
  }
  entrarChasis(event) {
    this.elExpediente.Chasis = event.target.value;
    this.laExpediente[0].Chasis = event.target.value;
  }
  entrarPlaca(event) {
    this.elExpediente.NumeroPlaca = event.target.value;
    this.laExpediente[0].NumeroPlaca = event.target.value;
  }
  entrarUnidad(event) {
    this.elExpediente.NoUnidad = event.target.value;
    this.laExpediente[0].NoUnidad = event.target.value;
    this.dataProcess.NumeroUnidad = event.target.value;
    this.dataProcess['NumeroUnidad'] = event.target.value;
    localStorage.setItem('dataProcess-NumeroUnidad', event.target.value);
  }
  setUnidad(unidad) {
    this.elExpediente.NoUnidad = unidad;
    this.laExpediente[0].NoUnidad = unidad;
    this.dataProcess.NumeroUnidad = unidad;
    this.dataProcess['NumeroUnidad'] = unidad;
    localStorage.setItem('dataProcess-NumeroUnidad', unidad);
  }
  entraTipoLicencia(event) {
    let tipoLicencia = event.detail.value[0];
    console.log(tipoLicencia);
    this.elTipoDeLicencia = tipoLicencia;
    let tipo;
    let tipoId;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia == tipoLicencia) {
        tipoId = element.Id;
        tipo = tipoLicencia;
        console.log(tipo + ', ' + tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);
        //console.log(tipoLicencia)
        /*
        
        
        
        
        */
      }
    }
  }

  seTipoLicencia(tipoL) {
    let tipo;
    let tipoId;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia == tipoL) {
        tipo = tipoL;
        tipoId = element.Id;
        console.log(tipo + ', ' + tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);
      }
    }
  }
  entraVencimiento(event) {
    let vigenciaLength = event.target.value.length;
    if (vigenciaLength < 10) {} else {
      var dateFormat = event.target.value.split('T')[0];
      //console.log('dateFormat '+ dateFormat)
      let dia = dateFormat.toString().substring(0, 2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);
      let laFormateada = anio + '-' + mes + '-' + dia;
      localStorage.setItem('dataProcess-Vigencia', laFormateada);
      this.formateadaVigencia = laFormateada;
      this.isVence = true;
      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      let vigente;
      console.log(new Date(nowDate) + ', ' + new Date(laFormateada));
      if (new Date(nowDate) > new Date(laFormateada)) {
        vigente = false;
      } else {
        vigente = true;
      }
      console.log('Licencia está vigente? ');
      console.log(this.vigencia);
      if (vigente == false) {
        this.entraLicenciaEstadoCalculado(2);
      } else {
        this.entraLicenciaEstadoCalculado(1);
      }
      console.log(this.formateadaVigencia);
      let fechaVigencia = new Date(this.formateadaVigencia).toISOString();
      console.log(fechaVigencia);
      this.dataProcess.Vigencia = fechaVigencia;
      this.dataProcess['Vigencia'] = fechaVigencia;
      console.log('Finalmente la vigencia es ' + fechaVigencia);
    }
  }
  setVencimiento(fecha) {
    //alert(fecha)
    let vigenciaLength = fecha.length;
    if (vigenciaLength < 10) {} else {
      var dateFormat = fecha.split('T')[0];
      let dia = dateFormat.toString().substring(0, 2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);
      let laFormateada = anio + '-' + mes + '-' + dia;
      this.formateadaVigencia = dateFormat;
      this.isVence = true;
      console.log('la Fecha : ' + fecha + ', dateFormat ' + dateFormat);
      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      let vigente;
      console.log(new Date(nowDate) + ', ' + new Date(laFormateada));
      if (new Date(nowDate) > new Date(laFormateada)) {
        vigente = false;
      } else {
        vigente = true;
      }
      if (vigente == false) {
        this.entraLicenciaEstadoCalculado(2);
      } else {
        this.entraLicenciaEstadoCalculado(1);
      }
      this.laExpediente[0].Vigencia = fecha;
      this.dataProcess['Vigencia'] = fecha;
      localStorage.setItem('dataProcess-Vigencia', fecha);
    }
  }
  entraLicenciaEstado(event) {
    console.log(event.target.value);
    this.dataProcess.LicenciaEstado = event.target.value;
    this.dataProcess['LicenciaEstado'] = event.target.value;
    localStorage.setItem('dataProcess-LicenciaEstado', event.target.value);
  }
  entraLicenciaEstadoCalculado(estado) {
    jquery__WEBPACK_IMPORTED_MODULE_20__('#licenciaEstado').val(estado).change();
    this.dataProcess.LicenciaEstado = estado;
    this.dataProcess['LicenciaEstado'] = estado;
    localStorage.setItem('dataProcess-LicenciaEstado', estado);
  }
  entraDescripcionAudiencia(event) {
    this.dataProcess.DescripcionAudiencia = event.target.value;
    this.dataProcess['DescripcionAudiencia'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionAudiencia', event.target.value);
  }
  setDescripcionAudiencia(descripcion) {
    this.dataProcess.DescripcionAudiencia = descripcion;
    this.dataProcess['DescripcionAudiencia'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionAudiencia', descripcion);
  }
  entraObservacionTaller(event) {
    this.dataProcess.ObservacionTaller = event.target.value;
    this.dataProcess['ObservacionTaller'] = parseInt(event.target.value);
  }
  entraUbicacionVehiculoDetenido(event) {
    this.dataProcess.UbicacionVehiculoDetenido = event.target.value;
    this.dataProcess['UbicacionVehiculoDetenido'] = event.target.value;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', event.target.value);
  }
  setUbicacionVehiculoDetenido(ubicacion) {
    this.dataProcess.UbicacionVehiculoDetenido = ubicacion;
    this.dataProcess['UbicacionVehiculoDetenido'] = ubicacion;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', ubicacion);
  }
  entraResponsable(event) {
    let seleccion = event.detail.value;
    //alert('Tipo responsable : '+seleccion+', Tipo conductor : '+this.daType+', Nombre conductor no afiliado : '+this.daNombreConductor)
    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = '';
      this.laExpediente[0].NombreAtribuyeAccidente = '';
      //this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    } else {
      //alert(this.daNombreConductor)
      this.dataProcess.TerceroResponsable = 2;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        //alert(this.daType)
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
        } else {
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.laExpediente[0].NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);
        }
      } else {
        this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
      }
    }
  }
  setResponsable(selecId) {
    let seleccion = selecId;
    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
      this.laExpediente[0].NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    } else {
      this.dataProcess.TerceroResponsable = 2;
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
        } else {
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);
        }
        //this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.NombreConductor;
        //localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.NombreAtribuyeAccidente);
      } else {
        this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
        this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
      }
    }
  }
  entraNombreCulpable(event) {
    this.culpable.NombreCulpable = event.target.value;
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
  }
  entraNombrePropietarioCulpable(event) {
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
  }
  entraCorreoCulpable(event) {
    this.culpableCorreo = event.target.value;
  }
  entraTrabajoCulpable(event) {
    this.culpableTrabajo = event.target.value;
  }
  entraContactoCulpable(event) {
    this.culpableContacto = event.target.value;
  }
  entraContactoMNumeroCulpable(event) {
    this.culpableContactoNumero = event.target.value;
  }
  entraIdentidadCulpable(event) {
    this.culpableIdentidad = event.target.value;
  }
  entraNombreTaller(event) {
    console.log(event);
    this.taller = event.detail.value[0];
    this.tallerId = event.detail.value[1];
    this.dataProcess.DondeSeEncuentraVehiculo = event.detail.value[1];
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value[1];
  }
  entrarFechaInicio() {}
  entraTallerOtro(event) {
    this.tallerOtroArray = [];
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    this.tallerOtro = event.target.value;
    this.tallerOtroArray.push({
      nombre: event.target.value
    });
    //console.log(this.tallerOtro)
  }

  entraTallerOtroDireccion(event) {
    console.dir(this.tallerOtroArray);
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
    this.tallerOtroDireccion = event.target.value;
    //console.log(this.tallerOtroDireccion)
  }

  seTallerOtroDireccion(taller) {
    console.dir(this.tallerOtroArray);
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + taller;
    this.dataProcess['DondeSeEncuentraVehiculo'] = taller;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', taller);
    this.tallerOtroDireccion = taller;
    //console.log(this.tallerOtroDireccion)
  }

  entraUbicacionVehiculoAsegurado(event) {
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
  }
  setUbicacionVehiculoAsegurado(ubicacion) {
    this.dataProcess.DondeSeEncuentraVehiculo = ubicacion;
    this.dataProcess['DondeSeEncuentraVehiculo'] = ubicacion;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', ubicacion);
  }
  evaluateKm(event) {
    this.ajustador.Kilometraje = event.target.value;
    this.dataProcess.Kilometraje = event.target.value;
    this.dataProcess['Kilometraje'] = parseInt(event.target.value);
    if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '') {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      this.ajustador.Kilometraje = 0;
    } else {
      console.log(this.ajustador.Kilometraje);
    }
  }
  firmar() {
    var _this6 = this;
    //let laImagen = this.imagen.nativeElement;
    //this.imageHeight = this.imagen.nativeElement.offsetHeight;
    this.imageHeight = 200;
    //this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.api.obtenerFotoPorAtencion(this.idAtencion, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Firmas para este usuario : " + res.length);
        console.dir(res);
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          if (index == res.length - 1) {
            _this6.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_10__.imagePrefix + element.FotoFirma;
            localStorage.setItem("dSignatureAsegurado", _this6.firmaPrecargada);
            _this6.isSignature = true;
          }
        }
      });
      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref9 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this6.firmaPrecargada = _environments_signatures__WEBPACK_IMPORTED_MODULE_11__.emptySignatureWhite;
        localStorage.setItem("dSignatureAsegurado", _this6.firmaPrecargada);
        _this6.isSignature = false;
      });
      return function (_x5) {
        return _ref9.apply(this, arguments);
      };
    }());
  }
  marcarFecha(mydate) {
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.mydate = mydate;
    this.formateada = dateFormat + ' - ' + timeFormat;
    localStorage.setItem('fechaFirma', this.mydate);
  }
  getCountry() {
    var _this7 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let local = localStorage.getItem('miLocalidad');
      _this7.laLocalidad = JSON.parse(local);
      _this7.miLocalidad = JSON.stringify(_this7.laLocalidad);
      _this7.miPais = _this7.laLocalidad[0].countryCode;
      localStorage.setItem('codigoPais', _this7.miPais);
      _this7.miPaisLocalidad = _this7.laLocalidad[0].locality;
      _this7.miPaisNombre = _this7.laLocalidad[0].countryName;
      localStorage.setItem('nombrePais', _this7.miPaisNombre);
      let localidadCabina = localStorage.getItem('direccionCabina');
      _this7.miPaisLocalidadSub = _this7.laLocalidad[0].subLocality + ' ' + localidadCabina;
      //alert(this.miPaisLocalidad+', '+this.miPaisNombre+', '+this.miPaisLocalidadSub)
      localStorage.setItem('latitud', _this7.laLocalidad[0].latitude);
      localStorage.setItem('longitud', _this7.laLocalidad[0].longitude);
      _this7.isLoading = false;
      if (_this7.miPais == "HN") {
        _this7.miPaisBandera = '../../assets/img/flag-hn.png';
      } else if (_this7.miPais == "GT") {
        _this7.miPaisBandera = '../../assets/img/flag-gt.png';
      }
      _this7.isLoading = false;
    })();
  }
  getElTipoLicencia(event) {
    this.elTipoLicenciaId = event.target.value;
    console.log(this.elTipoLicenciaId);
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id?.toString()) {
        this.licenciaTipo = element.TipoLicencia;
        this.elExpediente.TipoLicencia = element.TipoLicencia;
      }
    }
  }
  getElTipoLicenciaCulpable(event) {
    this.elTipoLicenciaId = event.target.value;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id?.toString()) {
        this.licenciaTipo = element.TipoLicencia;
      }
    }
  }
  getElTipoGenero(event) {
    this.elTipoGenero = event.target.value;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
    } else if (this.elTipoGenero == 2) {
      this.inicialGenero = "F";
    }
  }
  definirGenero(event) {
    this.generoConductor = event.target.value;
    this.dataProcess.Sexo = event.target.value;
    this.dataProcess['Sexo'] = parseInt(event.target.value);
  }
  identificarPais() {
    this.obtenerTipoConductor();
    this.getTipoLicencia(3);
    let codigoPais = localStorage.getItem('codigoPais');
    /* Debug:Temporal
    if (codigoPais == "HN") {
      this.getTipoLicencia(3);
    }else{
      this.getTipoLicencia(4);
    }
    */
  }

  getTipoLicencia(paisIdentidad) {
    var _this8 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const load = await this.loading.create();
      //await  load.present();
      _this8.isLoading = true;
      _this8.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //        await load.dismiss();
        _this8.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this8.tipoLicencia = res;
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref12 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this8.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x7) {
          return _ref12.apply(this, arguments);
        };
      }());
    })();
  }
  getTipoVehiculo(paisIdentidad) {
    var _this9 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const load = await this.loading.create();
      //await  load.present();
      _this9.isLoading = true;
      _this9.api.TipoDeVehiculo(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //        await load.dismiss();
        _this9.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref14 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this9.tipoVehiculo = res;
        });
        return function (_x8) {
          return _ref14.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref15 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this9.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x9) {
          return _ref15.apply(this, arguments);
        };
      }());
    })();
  }
  getTalleres() {
    var _this10 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.api.ListTalleres().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this10.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref17 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this10.talleres = res;
        });
        return function (_x10) {
          return _ref17.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref18 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this10.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x11) {
          return _ref18.apply(this, arguments);
        };
      }());
    })();
  }
  obtenerTipoConductor() {
    var _this11 = this;
    //alert('Okay')
    this.api.ListTipoConductor().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Aqui se termina la carga de tipos de conductor');
    }))).subscribe( /*#__PURE__*/function () {
      var _ref20 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this11.tipoConductor = res;
        _this11.seTipoConductor(_this11.daTipoConductor, 1);
        console.log('Aqui obtengo los tipos de conductor');
        console.dir(res);
      });
      return function (_x12) {
        return _ref20.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref21 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        const alert = yield _this11.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        yield alert.present();
      });
      return function (_x13) {
        return _ref21.apply(this, arguments);
      };
    }());
  }
  setFirstSegment() {
    // copiamos el tipo de conductor desde el cache
    this.daType = this.daTipoConductor;
    let daFirstSegmentsContainer = document.getElementsByClassName('segment-icon');
    let daFirstTitleContainer = document.getElementsByClassName('segment-title');
    let daFirstSegmentsButton = document.getElementsByClassName('segment-item');
    this.setSegment('segmentCoordinates', 0);
    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      clearInterval(this.firstInterval);
      daFirstSegmentsButton[0].setAttribute('style', 'border:1px solid #0058CB');
      daFirstSegmentsContainer[0].setAttribute('style', 'color:#0058CB');
      daFirstTitleContainer[0].setAttribute('style', 'color:#0058CB;margin-left: 9px');
    }
  }
  setSegment(segmentInput, indexInput) {
    setTimeout(() => {
      let losIconos = document.getElementsByTagName('ion-select');
      //let elIcono = $('ion-select').eq(0).attr('style', 'color:red');
      //console.dir(elIcono)
      //alert(losIconos.length)
    }, 1300);
    //alert(segmentInput)
    //alert(this.elResponsableTipo);
    //this.entraResponsable(this.elResponsableTipo);
    if (segmentInput == 'help-circle') {
      //alert('Tipo de conductor '+this.daType+', tpo de responsable '+this.elResponsableTipo);
      //alert('Ji vooo')
      /*
            if (this.daType == 1) {
              if (this.elResponsableTipo == 1 || this.elResponsableTipo == 2) {
                this.setNombreAtribuye(this.laExpediente[0].Cliente);
              }else{
                this.setNombreAtribuye(this.laExpediente[0].NombreAtribuyeAccidente);
              }
            }else{
              if (this.elResponsableTipo == 1) {
                this.setNombreAtribuye(this.laExpediente[0].Cliente);
              }
          
              if (this.elResponsableTipo == 2) {
                this.setNombreAtribuye(this.daNombreConductor);
              }
          
              if (this.elResponsableTipo == 3) {
                this.setNombreAtribuye(this.laExpediente[0].NombreAtribuyeAccidente);
              }
            }
            */
    }
    this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
    this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
    this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
    this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
    let daSegmentsContainer = document.getElementsByClassName('segment-icon');
    let daTitleContainer = document.getElementsByClassName('segment-title');
    let daSegmentsButton = document.getElementsByClassName('segment-item');
    this.daSegment = segmentInput;
    let daIndex = indexInput;
    if (this.daSegment == 'ribbon') {
      jquery__WEBPACK_IMPORTED_MODULE_20__('#validateButton').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_20__('#validateButton').fadeOut();
    }
    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      const title = daTitleContainer[index];
      const segmentId = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments[index].idSegmento;
      if (daIndex == index) {
        jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).fadeIn('xslow');
        daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
        element.setAttribute('style', 'color:#0058CB');
        title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
        if (this.cantidadNulos == undefined) {
          //alert('Hey vooo!??')
        } else {
          //alert(this.cantidadNulos);
          if (segmentId != 'segmentSignature') {
            jquery__WEBPACK_IMPORTED_MODULE_20__('#dataNull').fadeOut();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_20__('#dataNull').fadeIn('xslow');
            //$('#segmentSignature').fadeOut();
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_20__("#" + segmentId).fadeOut();
        daSegmentsButton[index].setAttribute('style', 'border:none');
        element.setAttribute('style', 'color:#7da1c4');
        title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
      }
    }
  }
  entraDireccionConductor(event) {
    this.dataProcess['DireccionConductor'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionConductor', event.target.value);
  }
  setDireccionConductor(direccion) {
    this.dataProcess['DireccionConductor'] = direccion;
    localStorage.setItem('dataProcess-DireccionConductor', direccion);
  }
  entraDireccionConductorCorrespondencia(event) {
    this.dataProcess['DireccionEnvioCorrespondencia'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', event.target.value);
  }
  setDireccionConductorCorrespondencia(direccion) {
    this.dataProcess['DireccionEnvioCorrespondencia'] = direccion;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', direccion);
  }
  validar() {}
  randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //.toFixed(2);
  }

  signatureDisplay() {
    jquery__WEBPACK_IMPORTED_MODULE_20__('#segmentSignature').fadeIn();
  }
  // ENVIO
  validarDatos() {
    jquery__WEBPACK_IMPORTED_MODULE_20__('#dataNull').fadeIn('xslow');
    //$('#segmentSignature').fadeOut();
    if (this.daCelularConductor == null || this.daCelularConductor == undefined || this.daCelularConductor == 0 || isNaN(this.daCelularConductor) || this.daCelularConductor == '') {
      this.daCelularConductor = this.laExpediente[0].TelefonoOrigen;
    }
    if (this.conductorEsAfiliado == true) {
      this.daTelefonoFijoConductor = this.laExpediente[0].TelefonoOrigen;
    } else {
      let telefonoFijo = localStorage.getItem('dataProcess-TelefonoConductor');
      this.daTelefonoFijoConductor = parseInt(telefonoFijo);
    }
    //this.daTelefonoFijoConductor = localStorage
    //alert(this.daTelefonoFijoConductor)
    this.validaNulos = [];
    this.clienteFiltro = [];
    this.nullsIndex = [];
    //console.log(this.requiredD.length)
    let elnombre;
    let laEtiqueta;
    let elValorDP;
    let indexSeg;
    let inputIndex;
    if (this.daSegment == 'ribbon') {
      jquery__WEBPACK_IMPORTED_MODULE_20__('#validateButton').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_20__('#validateButton').fadeOut();
    }
    console.log('Filtro de cliente:');
    console.dir(_environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente);
    console.log('DataProcess : ');
    console.dir(this.dataProcess);
    const clienteValidationData = {
      ...this.dataProcess,
      CelularConductor: this.dataProcess['CelularConductor'] || this.daCelularConductor,
      TelefonoConductor: this.daTelefonoFijoConductor
    };
    const validationResult = (0,_validation_claim_validation__WEBPACK_IMPORTED_MODULE_17__.validateClaimStage)(clienteValidationData, _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_18__.clienteScreenValidationRules);
    const missingFields = new Set(validationResult.missing.map(item => item.field));
    for (let indexDP = 0; indexDP < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente.length; indexDP++) {
      const elementCLiente = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente[indexDP];
      elnombre = elementCLiente.nombre;
      laEtiqueta = elementCLiente.etiqueta;
      indexSeg = elementCLiente.segmentIndex;
      elValorDP = missingFields.has(elnombre) ? undefined : validationResult.data[elnombre];
      inputIndex = elementCLiente.inputIndex;
      if (indexDP == 12) {
        let conductorIdentidad = this.validaIdentidadConductor(this.daType, this.identidadDelCliente, this.daIdentidadConductor);
      }
      if (elnombre == 'CelularConductor') {
        console.log('Validando datos... celular conductor : ' + this.daCelularConductor + ', telefono fijo conductor : ' + this.daTelefonoFijoConductor + ', celular en variable : ' + this.dataProcess['CelularConductor']);
        console.log('Validando : ' + elnombre + ', valor : ' + elValorDP + ', etiqueta : ' + laEtiqueta + ', segmento : ' + indexSeg + ', inputIndex : ' + inputIndex);
        if (elValorDP == '' || elValorDP == null || elValorDP == undefined) {
          //this.dataProcess['CelularConductor'] = this.daCelularConductor;
          this.validaNulos.push({
            etiqueta: laEtiqueta,
            valor: this.daCelularConductor,
            indexSegmento: indexSeg,
            inputIndex: inputIndex
          });
        }
      } else {
        this.validaNulos.push({
          etiqueta: laEtiqueta,
          valor: elValorDP,
          indexSegmento: indexSeg,
          inputIndex: inputIndex
        });
      }
    }
    setTimeout(() => {
      const contenedor = document.getElementsByClassName('nulo-item');
      for (let index = 0; index < contenedor.length; index++) {
        const elemento = contenedor[index].textContent;
        let evalor = missingFields.has(_environments_predeterminados__WEBPACK_IMPORTED_MODULE_14__.requiredDataCliente[index]?.nombre);
        if (evalor == true) {
          this.nullsIndex.push(index);
          jquery__WEBPACK_IMPORTED_MODULE_20__('.nulo-item').eq(index).attr('style', 'color:red; font-weight: bold;');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_20__('.nulo-item').eq(index).attr('style', 'color:gray; font-weight: bold;');
        }
        /**/
        if (index == contenedor.length - 1) {
          //alert(this.nullsIndex.length)
          if (this.nullsIndex.length == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_20__('#validateButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_20__('#saveDataButton').fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_20__('#validateAgainButton').fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_20__('#cancelaButton').fadeIn();
            this.progress = 1;
            clearInterval(this.progInterval);
            this.textoInfo = 'Datos completados con éxito! Ahora puedes proceder a enviarlos haciendo click en GUARDAR DATOS';
            jquery__WEBPACK_IMPORTED_MODULE_20__('#spanProgress').removeClass('progress');
            jquery__WEBPACK_IMPORTED_MODULE_20__('#spanProgress').addClass('progress-end');
            let iconoContenedor = document.getElementById('infoText');
            let iconoAprobado = document.createElement('img');
            iconoAprobado.src = '../../assets/img/aprobar.svg';
            iconoAprobado.style.width = '45px';
            iconoAprobado.style.height = '45px';
            iconoAprobado.style.position = 'absolute';
            iconoAprobado.style.top = '-5px';
            iconoAprobado.style.right = '-5px';
            iconoContenedor.appendChild(iconoAprobado);
          }
        }
      }
    }, 900);
    this.progInterval = setInterval(() => {
      if (this.nullsIndex.length == 0) {
        this.progress = 1;
        clearInterval(this.progInterval);
      } else {
        this.progress += 0.01;
        if (this.progress > 1) {
          setTimeout(() => {}, 1000);
        }
      }
    }, 50);
  }
  GuardarDatos() {
    var _this12 = this;
    //alert('Tipo de conductor al guardar datos : '+this.daType+', Tipo de responsable : '+this.elResponsableTipo+', Nombre conductor : '+this.daNombreConductor+', celular conductor : '+this.daCelularConductor+', telefono fijo conductor : '+this.daTelefonoFijoConductor+', celular en variable : '+this.dataProcess['CelularConductor']+', validacion : '+this.conductorEsAfiliado)+', identidad conductor : '+this.daIdentidadConductor;
    //alert('Guardando datos... celular conductor : '+this.daCelularConductor+', telefono fijo conductor : '+this.daTelefonoFijoConductor+', celular en variable : '+this.dataProcess['CelularConductor']);
    if (this.dataProcess['CelularConductor'] == '' || this.dataProcess['CelularConductor'] == null || this.dataProcess['CelularConductor'] == undefined) {
      this.dataProcess['CelularConductor'] = this.daCelularConductor;
    }
    const cachedLatitud = localStorage.getItem('dataProcess-Latitud');
    const cachedLongitud = localStorage.getItem('dataProcess-Longitud');
    const latitudCliente = this.laLatitud || this.clienteLatitud || this.laExpediente?.[0]?.LatitudCliente || cachedLatitud || this.dataProcess['Latitud'];
    const longitudCliente = this.laLongitud || this.clienteLongitud || this.laExpediente?.[0]?.LongitudCliente || cachedLongitud || this.dataProcess['Longitud'];
    if (latitudCliente != null && latitudCliente != undefined && latitudCliente != 'undefined') {
      this.dataProcess['Latitud'] = latitudCliente;
      localStorage.setItem('dataProcess-Latitud', latitudCliente);
    }
    if (longitudCliente != null && longitudCliente != undefined && longitudCliente != 'undefined') {
      this.dataProcess['Longitud'] = longitudCliente;
      localStorage.setItem('dataProcess-Longitud', longitudCliente);
    }
    //alert('Latitud : '+this.laLatitud+', Longitud : '+this.laLongitud)
    if (this.elExpediente.UtilizoSerivicioAsistencia == 1) {
      this.dataProcess.PorqueNoUsoServicioAsistencia = 'N/A';
      this.dataProcess['PorqueNoUsoServicioAsistencia'] = 'N/A';
    }
    if (this.esTercerosHeridos == 2 || this.esTercerosHeridos == '2') {
      this.dataProcess['DescripcionTercerosHeridos'] = 'No hubieron heridos';
    }
    if (this.esTercerosMuertos == 2 || this.esTercerosMuertos == '2') {
      this.dataProcess['DescripcionTercerosMuertos'] = 'No hubieron fallecidos';
    }
    setTimeout(() => {
      if (this.firmaPrecargada != _environments_signatures__WEBPACK_IMPORTED_MODULE_11__.emptySignature && this.firmaPrecargada != _environments_signatures__WEBPACK_IMPORTED_MODULE_11__.emptySignatureWhite) {
        this.isLoading = false;
        this.toaster.presentToastNoButtons('Registro Creado Con Exito!', 'middle', 'siniestro');
        jquery__WEBPACK_IMPORTED_MODULE_20__('#signButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_20__('#goSignButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_20__('#saveButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_20__('#camButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_20__("#successLabel").fadeIn('slow');
        jquery__WEBPACK_IMPORTED_MODULE_20__("#buttonGoAjuste").fadeIn('slow');
        if (this.daType != 1) {
          //alert('No soy el asegurado');
          //this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
          //this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
        }
        if (this.daType == 1) {
          //alert('Soy el asegurado y mi identidad es : '+this.identidadDelCliente+', o es '+this.daIdentidadConductor+', valor que se asignara : '+conductorIdentidad);
          //this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
          //this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
        }
        console.log('dataProcess is');
        console.dir(this.dataProcess);
        this.api.GuardarCacheCliente(this.dataProcess).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          //alert('Finalice')
          _this12.isLoading = false;
          _this12.isComplete = true;
        }))).subscribe( /*#__PURE__*/function () {
          var _ref23 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log(res);
            jquery__WEBPACK_IMPORTED_MODULE_20__('#signButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_20__('#goSignButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_20__('#saveButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_20__('#camButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_20__('#saveDataButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_20__('#validateAgainButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_20__('#cancelaButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_20__("#successLabel").fadeIn('slow');
            jquery__WEBPACK_IMPORTED_MODULE_20__("#buttonGoAjuste").fadeIn('slow');
            _this12.copmleteByCase.push({
              idAtencion: _this12.idAtencion,
              esCompleto: true
            });
            localStorage.setItem('esCompleto', JSON.stringify(_this12.copmleteByCase));
            let completeArray = localStorage.getItem('esCompleto');
            _this12.clientCompleteArray = JSON.parse(completeArray);
            if (_this12.clientCompleteArray) {
              if (_this12.clientCompleteArray.includes(_this12.atencionId)) {}
            } else {
              _this12.clientCompleteArray = [];
              _this12.clientCompleteArray.push(_this12.atencionId);
              localStorage.setItem('clientCompleteArray', _this12.clientCompleteArray);
            }
          });
          return function (_x14) {
            return _ref23.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref24 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
            _this12.toaster.presentToast(error.error.Message, 'top', 'solicitante');
          });
          return function (_x15) {
            return _ref24.apply(this, arguments);
          };
        }());
        /**/
      } else {
        this.toaster.presentToastNoButtonsRed('Se debe firmar para guardar los datos.', 'top', 'firma-siniestro');
      }
    }, 300);
  }
  validaIdentidadConductor(daType, identidadDelCliente, daIdentidadConductor) {
    if (daType == 1) {
      if (identidadDelCliente == null) {
        if (daIdentidadConductor == null || daIdentidadConductor == 'null') {
          this.toaster.presentToastNoButtonsRed('La identidad del conductor no puede ser nula o vacía. Por favor, ingresa una identidad válida.', 'top', 'identidad-conductor');
          this.validaNulos.push({
            etiqueta: 'Identidad del conductor',
            valor: identidadDelCliente,
            indexSegmento: 3,
            inputIndex: 12
          });
        } else {
          identidadDelCliente = daIdentidadConductor;
        }
      } else {
        daIdentidadConductor = identidadDelCliente;
      }
    }
    this.dataProcess['IdentidaConductor'] = identidadDelCliente;
    return identidadDelCliente;
  }
  setTipoSolicitante(event) {
    this.elTipoSolicitante = event.target.value;
    //('Tipo solicitante '+this.elTipoSolicitante);
    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  }
  entraNombreAsegurado(event) {
    this.elExpediente.Cliente = event.target.value;
    this.nombreCliente = event.target.value;
    localStorage.setItem('dataProcess-Nombre', event.target.value);
  }
  setNombreAsegurado(nombre) {
    this.elExpediente.Cliente = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('dataProcess-Nombre', nombre);
  }
  entraEntidadInvolucrada(event) {
    this.dataProcess.AutoridadInvolucrada = event.target.value;
    this.dataProcess['AutoridadInvolucrada'] = event.target.value;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', event.target.value);
  }
  setEntidadInvolucrada(autoridad) {
    this.dataProcess.AutoridadInvolucrada = autoridad;
    this.dataProcess['AutoridadInvolucrada'] = autoridad;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', autoridad);
  }
  entraTipoVehiculo(event) {
    this.tipoDeVehiculo = event.target.value;
  }
  entraNombre(event) {
    this.elExpediente.Cliente = event.target.value;
  }
  entraIdentidadConductor(event) {
    if (this.daType == 1) {
      console.log('soy el asegurado');
    } else {
      console.log(this.daIdentidadConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-IdentidaConductor', this.daIdentidadConductor);
      this.elExpediente.IdentidadConductor = this.daIdentidadConductor;
      this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
      this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
    }
    /*
    console.log('la identidad '+ event.target.value)
    this.elExpediente.IdentidadConductor = event.target.value;
    this.dataProcess['IdentidaConductor'] = event.target.value;
    */
  }

  setIdentidadConductor(identidad) {
    console.log('la identidad ' + identidad);
    this.elExpediente.IdentidadConductor = identidad;
    this.dataProcess.IdentidaConductor = identidad;
    this.dataProcess['IdentidaConductor'] = identidad;
    localStorage.setItem('dataProcess-IdentidaConductor', identidad);
  }
  entraPolizaConductor(event) {
    this.cliente.Poliza = event.target.value;
    localStorage.setItem('dataProcess-Poliza', event.target.value);
  }
  setPolizaConductor(poliza) {
    this.cliente.Poliza = poliza;
    localStorage.setItem('dataProcess-Poliza', poliza);
  }
  entraCorreoCorrespondencia(event) {
    this.cliente.CorreoCorrespondencia = event.target.value;
  }
  entraDireccionCliente(event) {
    this.cliente.Direccion = event.target.value;
    this.dataProcess.Lugar = event.target.value;
    this.dataProcess['Lugar'] = event.target.value;
  }
  entraNombreAtribuye(event) {
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
    this.elExpediente.NombreAtribuyeAccidente = event.target.value;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', event.target.value);
  }
  setNombreAtribuye(nombre) {
    this.dataProcess.NombreAtribuyeAccidente = nombre;
    this.dataProcess['NombreAtribuyeAccidente'] = nombre;
    this.elExpediente.NombreAtribuyeAccidente = nombre;
    this.laExpediente[0].NombreAtribuyeAccidente = nombre;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', nombre);
  }
  entraTelefonoAsegurado(event) {
    console.log('Teléfono del asegurado ' + event.target.value);
    this.cliente.TelefonFijo = event.target.value;
    localStorage.setItem('dataProcess-TelefonoAsegurado', event.target.value);
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.TelefonFijo = event.target.value;
      this.dataProcess.TelefonoConductor  = event.target.value;
      this.dataProcess['TelefonoConductor'] = event.target.value;
      localStorage.setItem('dataProcess-TelefonoConductor', event.target.value);
    }else{
      if (this.daTelefonoFijoConductor) {
        console.log(this.daTelefonoFijoConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-TelefonoConductor', this.daTelefonoFijoConductor.toString());
      this.elExpediente.IdentidadConductor = this.daTelefonoFijoConductor;
      this.dataProcess['IdentidaConductor'] = this.daTelefonoFijoConductor;
      }
    }
    */
  }

  entraTelefonoConductor(event) {
    //alert('Mjm')
    console.log('Celular del conductor ' + event.target.value);
    console.log('Teléfono del conductor ' + this.cliente.TelefonFijo);
    localStorage.setItem('dataProcess-TelefonoConductor', event.target.value);
    this.dataProcess.TelefonoConductor = event.target.value;
    this.dataProcess['TelefonoConductor'] = event.target.value;
    this.laExpediente[0].TelefonoConductor = event.target.value;
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.TelefonFijo = event.target.value;
      this.dataProcess.TelefonoConductor  = event.target.value;
      this.dataProcess['TelefonoConductor'] = event.target.value;
      localStorage.setItem('dataProcess-TelefonoAsegurado', event.target.value);
    }else{
      if (this.daTelefonoFijoConductor) {
        console.log(this.daTelefonoFijoConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-TelefonoConductor', this.daTelefonoFijoConductor.toString());
      this.elExpediente.IdentidadConductor = this.daTelefonoFijoConductor;
      this.dataProcess['IdentidaConductor'] = this.daTelefonoFijoConductor;
      }
      
    }
    */
  }

  seTelefonoConductor(tel) {
    //alert('telefono afiliado es conductor '+tel)
    this.cliente.TelefonFijo = tel;
    this.dataProcess.TelefonoConductor = tel;
    this.dataProcess['TelefonoConductor'] = tel;
    localStorage.setItem('dataProcess-TelefonoConductor', tel);
    this.laExpediente[0].TelefonoConductor = tel;
  }
  entraCelularAsegurado(event) {
    this.cliente.Celular = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.Celular = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
    this.dataProcess['CelularConductor'] = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    }else{
      if (this.daCelularConductor) {
        console.log(this.daCelularConductor);
        console.log('soy el conductor');
        localStorage.setItem('dataProcess-CelularConductor', this.daCelularConductor.toString());
        this.elExpediente.IdentidadConductor = this.daCelularConductor;
        this.dataProcess['IdentidaConductor'] = this.daCelularConductor;
      }
      
    }
          */
  }

  entraCelularConductor(event) {
    localStorage.setItem('dataProcess-CelularConductor', event.target.value);
    this.dataProcess['CelularConductor'] = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
    //    this.laExpediente[0].CelularConductor = event.target.value;
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.Celular = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
    this.dataProcess['CelularConductor'] = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    }else{
      if (this.daCelularConductor) {
        console.log(this.daCelularConductor);
        console.log('soy el conductor');
        localStorage.setItem('dataProcess-CelularConductor', this.daCelularConductor.toString());
        this.elExpediente.IdentidadConductor = this.daCelularConductor;
        this.dataProcess['IdentidaConductor'] = this.daCelularConductor;
      }
      
    }
    */
  }

  setCelularConductor(cel) {
    this.cliente.Celular = cel;
    this.cliente[0].Celular = cel;
    this.dataProcess.CelularConductor = cel;
    this.dataProcess['CelularConductor'] = cel;
    localStorage.setItem('dataProcess-CelularConductor', cel);
  }
  entraCorreoConductor(event) {
    console.log(event.target.value);
    this.cliente.CorreoElectronico = event.target.value;
    this.dataProcess.CorreoElectronico = event.target.value;
    this.dataProcess['CorreoElectronico'] = event.target.value;
    localStorage.setItem('dataProcess-CorreoElectronico', event.target.value);
  }
  setCorreoConductor(correo) {
    console.log(correo);
    this.cliente.CorreoElectronico = correo;
    this.dataProcess.CorreoElectronico = correo;
    this.dataProcess['CorreoElectronico'] = correo;
    localStorage.setItem('dataProcess-CorreoElectronico', correo);
  }
  entraDireccion(event) {
    this.cliente.DireccionSiniestro = event.target.value;
    //localStorage.setItem('dataProcess-DireccionSiniestro', event.target.value);
  }

  setDireccion(direccion) {
    this.cliente.DireccionSiniestro = direccion;
    //localStorage.setItem('dataProcess-DireccionSiniestro', direccion);
  }

  entraLicencia(event) {
    this.elExpediente.LicenciaNo = event.target.value;
    this.dataProcess.Licencia = event.target.value;
    this.dataProcess['Licencia'] = event.target.value;
    localStorage.setItem('dataProcess-Licencia', event.target.value);
  }
  setLicencia(licenciaNum) {
    this.elExpediente.LicenciaNo = licenciaNum;
    this.dataProcess.Licencia = licenciaNum;
    this.dataProcess['Licencia'] = licenciaNum;
    localStorage.setItem('dataProcess-Licencia', licenciaNum);
  }
  esBlindado(event) {
    console.dir(event);
    this.dataProcess.Blindado = parseInt(event);
    this.dataProcess['Blindado'] = parseInt(event);
    //$("input[type='radio'][value="+this.dataProcess.Blindado+"]").attr("checked",'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', event);
  }
  setBlindado(blinda) {
    this.dataProcess.Blindado = parseInt(blinda);
    this.dataProcess['Blindado'] = parseInt(blinda);
    jquery__WEBPACK_IMPORTED_MODULE_20__("input[type='radio'][value=" + this.dataProcess.Blindado + "]").attr("checked", 'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', blinda);
  }
  marcarFechaSiniestro(laFechaSiniestrox) {
    this.elExpediente.FechaHoraAccidente = laFechaSiniestrox; //.target.value;
    this.formateadaSiniestro = this.formateador.formatearFechaSiniestro(laFechaSiniestrox); //.target.value);
    this.formateada = this.formateador.formatearFechaSiniestro(laFechaSiniestrox); //.target.value);
    this.mydate = laFechaSiniestrox; //.target.value;
  }

  marcarFechaNacimiento(laFechaNacimiento) {
    console.log('La fecha de nacimiento ' + laFechaNacimiento.detail.value);
    this.dataProcess['FechaNacimientoConductor'] = laFechaNacimiento.detail.value;
    this.elExpediente.FechaNacimientoConductor = laFechaNacimiento.detail.value.toString();
    localStorage.setItem('dataProcess-FechaNacimientoConductor', laFechaNacimiento.detail.value);
    this.fechaNacimiento = laFechaNacimiento.detail.value;
    let dAnio = this.elExpediente.FechaNacimientoConductor.toString().substring(0, 4);
    this.formateadaNacimiento = this.elExpediente.FechaNacimientoConductor.split('T')[0]; //this.formateador.formatearFechaNacimiento(laFechaNacimiento.detail.value);
    console.log(laFechaNacimiento);
    console.log(dAnio);
    this.edad = this.calcularEdad(laFechaNacimiento.detail.value);
    //alert(this.edad)
    if (this.edad < 18) {
      this.esMenor = true;
      this.toaster.presentToastNoButtonsRed('Edad seleccionada : ' + this.edad + '. El conductor es un menor de edad.', 'top', 'danger');
    } else {
      this.esMenor = false;
    }
  }
  onIonInfinite(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }
  setFechaNacimiento(laFecha) {
    console.log('La fecha de nacimiento ' + laFecha);
    this.dataProcess['FechaNacimientoConductor'] = laFecha;
    this.elExpediente.FechaNacimientoConductor = laFecha.toString();
    localStorage.setItem('dataProcess-FechaNacimientoConductor', laFecha);
    this.fechaNacimiento = laFecha;
    this.formateadaNacimiento = this.elExpediente.FechaNacimientoConductor.split('T')[0]; //his.formateador.formatearFechaNacimiento(laFecha);
    this.edad = this.calcularEdad(laFecha);
  }
  calcularEdad(fecha) {
    console.log(fecha);
    let dAnio = fecha.toString().substring(0, 4);
    console.log(dAnio);
    let thisYear = new Date().getFullYear();
    let dYear = parseInt(dAnio);
    let laEdad = thisYear - dYear;
    localStorage.setItem('dataProcess-Edad', laEdad.toString());
    this.dataProcess['Edad'] = laEdad;
    console.log(laEdad);
    return laEdad;
  }
  goESignature() {
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    this.router.navigate(['./esignature']);
  }
  goPrepare(idAtencion) {
    const navigateExtras = {
      state: {
        data: [{
          'forma': this.expediente
        }, {
          'idAtencion': idAtencion
        }]
      }
    };
    this.router.navigate(['./prepare-send'], navigateExtras);
  }
  goPrepareAudience(idAtencion) {
    const navigateExtras = {
      state: {
        data: [{
          'forma': this.expediente
        }, {
          'idAtencion': idAtencion
        }]
      }
    };
    this.router.navigate(['./prepare-audience'], navigateExtras);
  }
  utilizacionAsistencia(event) {
    console.log(event.detail.value + ', ' + event.target.value);
    let choiceValue = event.detail.value;
    if (choiceValue == 2) {
      //localStorage.setItem('dataProcess-NombreConductor', '');
      this.alertPrepare();
    }
    if (choiceValue == 1) {
      this.esAudiencia = false;
    }
    this.elExpediente.UtilizoSerivicioAsistencia = event.detail.value;
    this.cliente.UtilizoSerivicioAsistencia = event.target.value;
    this.dataProcess.AseguradoUsoPoliza = parseInt(event.target.value);
    this.dataProcess['AseguradoUsoPoliza'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AseguradoUsoPoliza', event.target.value);
  }
  setUtilizacionAsistencia(uso) {
    if (uso == 2) {
      //localStorage.setItem('dataProcess-NombreConductor', '');
      this.goPrepare(this.idAtencion);
    } else {
      this.cliente.UtilizoSerivicioAsistencia = uso;
      this.elExpediente.UtilizoSerivicioAsistencia = uso;
      jquery__WEBPACK_IMPORTED_MODULE_20__('#usoRadioGroup').val(uso).change();
      //$("input[type='radio'][value="+this.cliente.UtilizoSerivicioAsistencia+"]").attr("checked",'true').trigger("change");
      localStorage.setItem('dataProcess-AseguradoUsoPoliza', uso);
    }
  }
  entraPorqueNoUso(event) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = event.target.value;
    this.dataProcess['PorqueNoUsoServicioAsistencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', event.target.value);
  }
  setPorqueNoUso(porque) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = porque;
    this.cliente.PorqueNoUsoServicioAsistencia = porque;
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', porque);
  }
  pruebaAlcohol(event) {
    console.log('Alcohol ' + parseInt(event.detail.value));
    this.elExpediente.PruebaAlcoholemia = parseInt(event.detail.value);
    this.dataProcess['PruebaAlcoholemia'] = parseInt(event.detail.value);
    localStorage.setItem('dataProcess-PruebaAlcoholemia', event.detail.value);
  }
  setPruebaAlcohol(prueba) {
    console.log('Alcohol ' + parseInt(prueba));
    this.elExpediente.PruebaAlcoholemia = parseInt(prueba);
    jquery__WEBPACK_IMPORTED_MODULE_20__('#pruebaRadioGroup').val(prueba).change();
    localStorage.setItem('dataProcess-PruebaAlcoholemia', prueba);
  }
  agendoAudiencia(event) {
    this.dataProcess.AgendarAudiencia = parseInt(event.detail.value);
    this.dataProcess['AgendarAudiencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AgendarAudiencia', event.target.value);
  }
  audiciona(event) {
    console.log(event.detail.value);
    let auId = parseInt(event.detail.value);
    if (auId == 1) {
      //this.alertPrepareAudience();
    }
    //alert(audiencia+1)
    this.dataProcess.AgendarAudiencia = auId;
    this.dataProcess['AgendarAudiencia'] = auId;
    localStorage.setItem('dataProcess-AgendarAudiencia', event.detail.value);
  }
  setAudiencia(audiencia) {
    let auId = parseInt(audiencia);
    //alert(audiencia+1)
    this.dataProcess.AgendarAudiencia = auId;
    this.dataProcess['AgendarAudiencia'] = auId;
    localStorage.setItem('dataProcess-AgendarAudiencia', audiencia);
  }
  fueDetenido(event) {
    this.elExpediente.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess['VehiculoDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoDetenido', event.target.value);
  }
  fueDetenidoElConductor(event) {
    this.dataProcess.ConductorDetenido = parseInt(event.detail.value);
    this.dataProcess['ConductorDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-ConductorDetenido', event.target.value);
  }
  setDetenido(detenido) {
    this.elExpediente.VehiculoDetenido = detenido;
    this.dataProcess.VehiculoDetenido = detenido;
    localStorage.setItem('dataProcess-VehiculoDetenido', detenido);
  }
  setDetenidoElConductor(detenido) {
    this.dataProcess.ConductorDetenido = detenido;
    localStorage.setItem('dataProcess-ConductorDetenido', detenido);
  }
  fueVolcado(event) {
    this.dataProcess.VehiculoVolcado = event.detail.value;
    this.dataProcess['VehiculoVolcado'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoVolcado', event.target.value);
  }
  setVolcado(volcado) {
    this.dataProcess.VehiculoVolcado = volcado;
    this.dataProcess['VehiculoVolcado'] = volcado;
    localStorage.setItem('dataProcess-VehiculoVolcado', volcado);
  }
  cambiarPropietario(event) {
    if (event.target.value == 'on') {
      event.target.value = 'off';
      this.culpable.NombreDireccionPropietarioCulpable = '';
      this.elExpediente.DireccionPropietarioCulpable = '';
      this.culpableEsPropiertario = false;
    } else {
      event.target.value = 'on';
      this.culpableEsPropiertario = true;
      this.culpable.NombreDireccionPropietarioCulpable = this.culpable.NombreCulpable;
      this.elExpediente.DireccionPropietarioCulpable = this.culpable.DireccionCulpable;
    }
  }
  alertPrepare() {
    var _this13 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alert.create({
        header: 'HELP',
        message: 'Vamos a preparar el envío sin póliza para la atención ' + _this13.idAtencion + '. Continuar?',
        buttons: [{
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            _this13.setUtilizacionAsistencia(1);
          }
        }, {
          text: 'CONTINUAR',
          role: 'confirm',
          handler: () => {
            _this13.goPrepare(_this13.idAtencion);
          }
        }]
      });
      alert.present();
    })();
  }
  alertPrepareAudience() {
    var _this14 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this14.alert.create({
        header: 'HELP',
        message: 'Vamos a preparar los detalles de la audiencia para la atención ' + _this14.idAtencion + '. Continuar?',
        buttons: [{
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            _this14.setAudiencia(1);
          }
        }, {
          text: 'CONTINUAR',
          role: 'confirm',
          handler: () => {
            _this14.goPrepareAudience(_this14.idAtencion);
          }
        }]
      });
      alert.present();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ToastController
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_24__.Location
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
    }, {
      type: _services_formatos_service__WEBPACK_IMPORTED_MODULE_15__.FormatosService
    }, {
      type: _services_countrydata_service__WEBPACK_IMPORTED_MODULE_16__.CountrydataService
    }];
  }
  static {
    this.propDecorators = {
      imagen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['imagen']
      }],
      requerido: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['requerido']
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['modalNulos']
      }],
      daModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['daModal']
      }],
      propModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['propModal']
      }],
      modalLesion: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['modalLesion']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonContent]
      }],
      imagenFirma: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['imagenFirma']
      }]
    };
  }
};
ClientehnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
  selector: 'app-clientehn',
  template: _clientehn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ClientehnPage);


/***/ }),

/***/ 76650:
/*!*********************************************!*\
  !*** ./src/app/environments/responsable.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsableTipos": () => (/* binding */ responsableTipos)
/* harmony export */ });
const responsableTipos = ['Asegurado', 'Conductor', 'Tercero'];

/***/ }),

/***/ 39533:
/*!**********************************************************!*\
  !*** ./src/app/clientehn/clientehn.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n}\n\n.uso-opcion {\n  margin-left: 5px;\n  --border-radius: 4px;\n  --inner-border-radius: 4px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-item {\n  padding-left: 10px;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #7da1c4;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#d-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  background: white !important;\n}\nion-toolbar .toolbar-content {\n  background: white !important;\n}\n\nion-alert button {\n  background: red;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #7da1c4;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #7da1c4;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #7da1c4;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-icon {\n  color: black;\n}\n\nion-label {\n  padding-top: 8px;\n  text-overflow: inherit;\n  max-width: 100%;\n  color: #7da1c4;\n}\n\nion-datetime {\n  --background-rgb: white;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: rgba(128, 128, 128, 0.3) 0px 10px 15px -3px;\n}\n\nion-badge:not(#esMenorLabel) {\n  background: #7da1c4;\n  font-size: 1rem;\n  padding: 6px;\n}\n\n#esMenorLabel {\n  font-size: 1rem;\n  padding: 6px;\n}\n\n.input-label {\n  font-size: 1.4rem;\n}\n\nion-button:not(#cancelaButton) {\n  color: white;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane-cliente {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.modal-fecha-input .modal-wrapper {\n  width: 30%;\n}\n\n.modal-fecha-input .modal-wrapper {\n  height: 30%;\n  width: 90%;\n  border-radius: 15px;\n}\n\nion-spinner:not(.top-spinner) {\n  width: 30px;\n  height: 30px;\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n.chip-firma {\n  position: absolute;\n  right: 8%;\n  bottom: 10%;\n  width: 80%;\n}\n\n.meter {\n  height: 5px;\n  position: relative;\n  background: #f3efe6;\n  overflow: hidden;\n}\n\n.meter span {\n  display: block;\n  height: 100%;\n}\n\n.progress-end {\n  background-color: var(--blueGrayColor);\n  animation: progressBarEnd 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.progress {\n  background-color: var(--blueGrayColor);\n  animation: progressBar infinite 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n@keyframes progressBar {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.required-index {\n  display: none;\n}\n\n.required-missing {\n  border: 2px solid red;\n  border-radius: 30px;\n}\n\n@keyframes progressBarEnd {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-input.custom {\n  text-transform: uppercase !important;\n}\n\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-fab-button :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\n.select-icon {\n  color: var(--blueGrayColor);\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-modal ion-input {\n  text-transform: uppercase;\n}\n\nion-chip:not(.date-siniestro) {\n  width: 25%;\n  height: 40px;\n  text-align: left;\n}\n\n.date-siniestro {\n  width: 100%;\n  height: 60px;\n  text-align: left;\n}\n\nion-avatar img {\n  width: 30px;\n  height: 30px;\n  margin-top: 15px;\n  margin-left: 3px;\n}\n\n.date-label {\n  margin-left: -25px;\n}\n\n.chip-icon {\n  position: absolute;\n  right: 15px;\n}\n\n.chip-label {\n  font-size: 1.3rem;\n}\n\n/*\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n*/", "",{"version":3,"sources":["webpack://./src/app/clientehn/clientehn.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEE;EACE,gBAAA;EACA,oBAAA;EACF,0BAAA;AACF;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,kBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,mBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AADJ;;AAGE;EACE,cAAA;EACA,gBAAA;AAAJ;;AAGE;EACE,yBAAA;EACA,wCAAA;AAAJ;;AAIE;EACE,4BAAA;AADJ;AAEE;EACE,4BAAA;AAAJ;;AAKI;EACE,eAAA;AAFN;;AAME;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AAtBJ;AAEI;EACE,YAAA;AAAN;AAEI;EACE,mBAAA;AAAN;AAII;EACE,WAAA;AAFN;AAKI;EACE,cAAA;AAHN;AAMI;EACE,WAAA;AAJN;AAQI;EACE,cAAA;AANN;AASI;EACE,WAAA;AAPN;AAUI;EACE,mBAAA;AARN;;AAcA;EACE,kBAAA;EACA,kBAAA;AAXF;AAYE;EACE,oBAAA;AAVJ;AAWI;EAAS,YAAA;AARb;;AAYA;EACE,YAAA;AATF;;AAYA;EACE,gBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AATF;;AAWA;EACE,uBAAA;EACA,WAAA;EACA,mBAAA;EACA,uDAAA;AARF;;AAWA;EACE,mBAAA;EACA,eAAA;EACA,YAAA;AARF;;AAYA;EACE,eAAA;EACA,YAAA;AATF;;AAcA;EACE,iBAAA;AAXF;;AAcA;EACE,YAAA;AAXF;;AAcA;EACE,iBAAA;EACA,qBAAA;AAXF;;AAcA;EACE,iBAAA;EACE,qBAAA;AAXJ;;AAcA;EACE,iBAAA;AAXF;;AAgBE;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AAbF;;AAgBA;EACE,2BAAA;EACA,YAAA;AAbF;;AAkBE;EACE,UAAA;AAfJ;;AAoBE;EACC,WAAA;EACA,UAAA;EACA,mBAAA;AAjBH;;AAoBA;EACE,WAAA;EACA,YAAA;EACD,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAjBJ;;AAqBA;EACE,kBAAA;EACE,SAAA;EACA,WAAA;EACA,UAAA;AAlBJ;;AAqBA;EACI,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AAlBJ;;AAqBA;EACI,cAAA;EACA,YAAA;AAlBJ;;AAqBA;EACI,sCAAA;EACA,wCAAA;EACA,yBAAA;AAlBJ;;AAqBA;EACI,sCAAA;EACA,8CAAA;EACA,yBAAA;AAlBJ;;AAqBA;EACE;IAAK,QAAA;EAjBL;EAkBA;IAAO,WAAA;EAfP;AACF;AAiBA;EACE,aAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,mBAAA;AAfF;;AAkBA;EACE;IAAK,WAAA;EAdL;EAeA;IAAO,WAAA;EAZP;AACF;AAcA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAZJ;;AAeA;EACE,kBAAA;EACA,kBAAA;AAZF;AAaE;EACE,oBAAA;AAXJ;AAYI;EAAS,YAAA;AATb;;AAaA;EACE,oCAAA;AAVF;;AAaA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAVF;;AAaA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAVF;;AAaA;EACE,cAAA;EACA,wBAAA;AAVF;;AAaA;EACE,WAAA;AAVF;;AAaA;EACE,yBAAA;AAVF;;AAaA;EACE,2BAAA;AAVF;;AAaA;;EAEE,wBAAA;EAEA,iBAAA;AAXF;;AAcA;;EAEE,oCAAA;EACA,wCAAA;AAXF;;AAeA;;EAEE,qBAAA;EACA,cAAA;AAZF;;AAgBE;EACE,yBAAA;AAbJ;;AAiBA;EACE,UAAA;EACA,YAAA;EACA,gBAAA;AAdF;;AAiBA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AAdF;;AAkBE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAfJ;;AAmBA;EACE,kBAAA;AAhBF;;AAmBA;EACE,kBAAA;EACA,WAAA;AAhBF;;AAmBA;EACE,iBAAA;AAhBF;;AAmBA;;;;;;;;;CAAA","sourcesContent":["ion-radio {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .uso-opcion{\r\n    margin-left: 5px;\r\n    --border-radius: 4px;\r\n  --inner-border-radius: 4px;\r\n  }\r\n  \r\n  ion-radio::part(container) {\r\n    border-radius: 8px;\r\n    border: 2px solid #ddd;\r\n  }\r\n\r\n  ion-item{\r\n    padding-left: 10px;\r\n  }\r\n  \r\n  ion-radio::part(mark) {\r\n    background: none;\r\n    transition: none;\r\n    transform: none;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(container) {\r\n    background: #7da1c4;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(mark) {\r\n    width: 6px;\r\n    height: 10px;\r\n  \r\n    border-width: 0px 2px 2px 0px;\r\n    border-style: solid;\r\n    border-color: #fff;\r\n  \r\n    transform: rotate(45deg);\r\n  }\r\n  canvas {\r\n    border: groove;\r\n    padding-top: 2px;\r\n  }\r\n\r\n  #d-toolbar{\r\n    --background: transparent;\r\n    --ion-color-base: transparent !important;\r\n    \r\n  }\r\n\r\n  ion-toolbar{\r\n    background: white !important;\r\n  .toolbar-content{\r\n    background: white !important;\r\n  }\r\n}\r\n\r\n  ion-alert{\r\n    button{\r\n      background: red;\r\n    }\r\n  }\r\n    \r\n  ion-segment {\r\n    --background: rgb(232, 231, 231);\r\n    ion-segment-button{\r\n      color: white;\r\n    }\r\n    ion-segment-button::part(indicator-background) {\r\n      background: #7da1c4;\r\n    }\r\n    \r\n    /* Material Design styles */\r\n    ion-segment-button.md::part(native) {\r\n      color: #000;\r\n    }\r\n    \r\n    .segment-button-checked.md::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    ion-segment-button.md::part(indicator-background) {\r\n      height: 4px;\r\n    }\r\n    \r\n    /* iOS styles */\r\n    ion-segment-button.ios::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    .segment-button-checked.ios::part(native) {\r\n      color: #fff;\r\n    }\r\n    \r\n    ion-segment-button.ios::part(indicator-background) {\r\n      border-radius: 20px;\r\n    }\r\n  }\r\n\r\n\r\n  \r\n#button-back{\r\n  border-radius: 50%;\r\n  margin-bottom: 9px;\r\n  ion-fab-button{\r\n    padding-bottom: 25px;\r\n    ion-icon{color: white;}\r\n  }\r\n}\r\n\r\nion-icon{\r\n  color: black;\r\n}\r\n\r\nion-label{\r\n  padding-top: 8px;\r\n  text-overflow: inherit;\r\n  max-width: 100%;\r\n  color: #7da1c4;\r\n}\r\nion-datetime {\r\n  --background-rgb: white;\r\n  width: 100%;\r\n  border-radius: 16px;\r\n  box-shadow: rgba(gray, 0.3) 0px 10px 15px -3px;\r\n}\r\n\r\nion-badge:not(#esMenorLabel){\r\n  background: #7da1c4;\r\n  font-size: 1rem;\r\n  padding: 6px;\r\n  //width: 130px;\r\n}\r\n\r\n#esMenorLabel{\r\n  font-size: 1rem;\r\n  padding: 6px;\r\n}\r\n\r\n\r\n\r\n.input-label{\r\n  font-size: 1.4rem;\r\n}\r\n\r\nion-button:not(#cancelaButton){\r\n  color: white;\r\n}\r\n\r\nion-split-pane {\r\n  --side-width: 50%;\r\n  --side-max-width: 50%;\r\n}\r\n\r\n#big-pane-cliente{\r\n  --side-width: 82%;\r\n    --side-max-width: 82%;\r\n}\r\n\r\nion-select::part(text) {\r\n  font-size: 1.1rem;\r\n  //color: var(--blueGrayColor);\r\n}\r\n\r\n::ng-deep {\r\n  .alert-wrapper {\r\n  --min-width: 600px;\r\n  --max-width: 600px;\r\n  --width: 600px;\r\n}\r\n}\r\n.alert-wrapper{\r\n  max-width: 600px !important;\r\n  width: 600px;\r\n}\r\n\r\n.modal-fecha-input\r\n{ \r\n  .modal-wrapper{\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n.modal-fecha-input{\r\n  .modal-wrapper{\r\n   height: 30%;\r\n   width: 90%;\r\n   border-radius: 15px;\r\n }\r\n}\r\nion-spinner:not(.top-spinner){\r\n  width: 30px;\r\n  height: 30px;\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n.chip-firma{\r\n  position: absolute;\r\n    right: 8%;\r\n    bottom: 10%;\r\n    width: 80%;\r\n}\r\n\r\n.meter { \r\n    height: 5px;\r\n    position: relative;\r\n    background: #f3efe6;\r\n    overflow: hidden;\r\n}\r\n\r\n.meter span {\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\n.progress-end {\r\n    background-color: var(--blueGrayColor);\r\n    animation: progressBarEnd 3s ease-in-out;\r\n    animation-fill-mode:both; \r\n}\r\n\r\n.progress {\r\n    background-color: var(--blueGrayColor);\r\n    animation: progressBar infinite 3s ease-in-out;\r\n    animation-fill-mode:both; \r\n}\r\n\r\n@keyframes progressBar {\r\n  0% { width: 0; }\r\n  100% { width: 100%; }\r\n}\r\n\r\n.required-index{\r\n  display: none;\r\n}\r\n\r\n.required-missing{\r\n  border: 2px solid red;\r\n  border-radius: 30px;\r\n}\r\n\r\n@keyframes progressBarEnd {\r\n  0% { width: 100%; }\r\n  100% { width: 100%; }\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\n#button-back{\r\n  border-radius: 50%;\r\n  margin-bottom: 9px;\r\n  ion-fab-button{\r\n    padding-bottom: 25px;\r\n    ion-icon{color: white;}\r\n  }\r\n}\r\n\r\nion-input.custom {\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\r\n  --background: #f14f23;\r\n  --background-activated: #a8462a;\r\n  --background-hover: #f66e48;\r\n  --border-radius: 15px;\r\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n  --color: white;\r\n}\r\n\r\nion-fab-button :not(#button-back) {\r\n  --background: #f14f23;\r\n  --background-activated: #a8462a;\r\n  --background-hover: #f66e48;\r\n  --border-radius: 15px;\r\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n  --color: white;\r\n}\r\n\r\nion-accordion {\r\n  margin: 0 auto;\r\n  --width: 100% !important;\r\n}\r\n\r\nion-accordion-group {\r\n  width: 100%;\r\n}\r\n\r\n.select-label{\r\n  text-transform: uppercase;\r\n}\r\n\r\n.select-icon{\r\n  color: var(--blueGrayColor);\r\n}\r\n\r\nion-accordion.accordion-expanding,\r\nion-accordion.accordion-expanded {\r\n  width: calc(100% - 32px);\r\n\r\n  margin: 16px auto;\r\n}\r\n\r\nion-accordion.accordion-collapsing ion-item[slot='header'],\r\nion-accordion.accordion-collapsed ion-item[slot='header'] {\r\n  --background: var(--ion-color-light);\r\n  --color: var(--ion-color-light-contrast);\r\n\r\n}\r\n\r\nion-accordion.accordion-expanding ion-item[slot='header'],\r\nion-accordion.accordion-expanded ion-item[slot='header'] {\r\n  --background: #7da1c4;//var(--ion-color-primary);\r\n  --color: white;//var(--ion-color-primary-contrast);\r\n}\r\n\r\nion-modal{\r\n  ion-input{\r\n    text-transform: uppercase;\r\n  }\r\n}\r\n\r\nion-chip:not(.date-siniestro){\r\n  width: 25%;\r\n  height: 40px;\r\n  text-align: left;\r\n}\r\n\r\n.date-siniestro{\r\n  width: 100%;\r\n  height: 60px;\r\n  text-align: left;\r\n}\r\n\r\nion-avatar{\r\n  img{\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-top: 15px;\r\n    margin-left: 3px;\r\n  }\r\n}\r\n\r\n.date-label{\r\n  margin-left: -25px;\r\n}\r\n\r\n.chip-icon{\r\n  position: absolute;\r\n  right: 15px;\r\n}\r\n\r\n.chip-label{\r\n  font-size: 1.3rem;\r\n}\r\n \r\n/*\r\nion-fab-button {\r\n  --background: #f14f23;\r\n  --background-activated: #a8462a;\r\n  --background-hover: #f66e48;\r\n  --border-radius: 15px;\r\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n  --color: white;\r\n}\r\n*/\r\n\r\n "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38002:
/*!**********************************************************!*\
  !*** ./src/app/clientehn/clientehn.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"></ion-col>\r\n          <ion-col size=\"4\">Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <input class=\"required-index\" value=\"40\">\r\n          <ion-col size=\"4\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-split-pane id=\"big-pane-nulls\" contentId=\"main-nulls\">\r\n  <div class=\"ion-page\" id=\"main-nulls\"></div>\r\n</ion-split-pane>\r\n<ion-split-pane id=\"big-pane-cliente\" when=\"xs\" contentId=\"main\">\r\n  <ion-menu id=\"ele\" style=\"width: 99%;padding: 3%;text-align: justify;font-size: 1rem;white-space: normal;overflow-y: scroll;height: 92%;\">\r\n    <ion-header>\r\n      <ion-toolbar style=\"color: var(--blueGrayColor);\">\r\n        <ion-title>Menú</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\" id=\"segmentsContent\" style=\"width: 99%;padding: 3%;text-align: justify;font-size: 1rem;white-space: normal;overflow-y: scroll;height: 39%;\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          \r\n\r\n          <ion-col class=\"segmento\" id=\"segmentCoordinates\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge style=\"color: white;\">\r\n                Coordenadas\r\n              </ion-badge>\r\n            </ion-label>\r\n\r\n            <ion-accordion-group [multiple]=\"true\" [value]=\"['first', 'second', 'third']\">\r\n              <ion-accordion class=\"acordion\" value=\"first\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>Uso del servicio</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding\" slot=\"content\">\r\n                  <ion-list class=\"ion-no-padding\">\r\n                    <ion-item  class=\"ion-no-padding  input\">\r\n                      <ion-grid>\r\n                        <ion-row size=\"12\" style=\"color: var(--blueGrayColor);font-size:1rem;\">\r\n                          El asegurado utilizó póliza?\r\n                            </ion-row>\r\n                        <ion-row>\r\n                          <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                            <ion-radio-group id=\"usoRadioGroup\" (ionChange)=\"utilizacionAsistencia($event)\" class=\"required-data\">\r\n                              \r\n                              <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                                <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                                <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                              </ion-item>\r\n                              <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                                <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                                <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                              </ion-item>\r\n                            </ion-radio-group>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ion-item>\r\n                    \r\n                  </ion-list>\r\n                </div>\r\n\r\n              </ion-accordion>\r\n              <ion-accordion class=\"acordion\" value=\"second\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>Posicionamiento</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding\" slot=\"content\">\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\">\r\n                        <strong>Latitud : </strong> &nbsp; <ion-text style=\"color: var(--blueGrayColor);\">{{clienteLatitud}}</ion-text>\r\n                      </ion-col>\r\n                      <ion-col size=\"6\">\r\n                        <strong>Longitud : </strong> &nbsp; <ion-text style=\"color: var(--blueGrayColor);\">{{clienteLongitud}}</ion-text>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </div>\r\n              </ion-accordion>\r\n              <ion-accordion class=\"acordion\" value=\"third\">\r\n                <ion-item slot=\"header\">\r\n                  <ion-label>Ubicación</ion-label>\r\n                </ion-item>\r\n                <div class=\"ion-padding\" slot=\"content\">\r\n                  <strong>\r\n                    SINIESTRO OCURRIDO EN LA REGIÓN DE {{miPaisNombre}}\r\n                  </strong>\r\n\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        LOCALIDAD DE {{miPaisLocalidad}}, {{miPaisLocalidadSub}}\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </div>\r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n          </ion-col>\r\n    \r\n          <ion-col class=\"segmento\" id=\"segmentAfiliated\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Datos Asegurado\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-content color=\"light\" style=\"height: 100vh\">\r\n              <ion-list [inset]=\"true\">\r\n                \r\n                <ion-item class=\"ion-no-padding  input required-data\">\r\n                  <input class=\"required-index\" value=\"1\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Asegurado Ó Empresa\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input class=\"custom\" *ngIf=\"laExpediente[0].Cliente != null\" [(ngModel)]=\"laExpediente[0].Cliente\" readonly></ion-input>\r\n                        <ion-input class=\"custom\" *ngIf=\"laExpediente[0].Cliente == null || laExpediente[0].Cliente == ''\" type=\"text\" \r\n                        (ionChange)=\"entraNombreAsegurado($event)\" [(ngModel)]=\"laExpediente[0].Cliente\"></ion-input>\r\n                        \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>                  \r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input required-data\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Identidad Asegurado\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"identidadAsegurado\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input required-data\">\r\n                  <input class=\"required-index\" value=\"3\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Póliza\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].PolizaExterna.split('-')[1]\" (ionChange)=\"entraPolizaConductor($event)\" readonly></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input required-data\">\r\n                  <input class=\"required-index\" value=\"4\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Dirección correspondencia\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input class=\"custom\" type=\"text\" [(ngModel)]=\"cliente.DireccionEnvioCorrespondencia\" (ionChange)=\"entraDireccionConductorCorrespondencia($event)\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-no-padding  input required-data\">\r\n                  \r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Teléfono\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"number\" [(ngModel)]=\"cliente.TelefonFijo\" (ionChange)=\"entraTelefonoAsegurado($event)\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Celular\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input id=\"celularAsegurado\" type=\"number\" [(ngModel)]=\"cliente.Celular\" (ionChange)=\"entraCelularAsegurado($event)\" class=\"required-data\"></ion-input>\r\n                        \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Correo electrónico\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"7\">\r\n                        <ion-input type=\"email\" [(ngModel)]=\"cliente.CorreoElectronico\" (ionChange)=\"entraCorreoConductor($event)\" class=\"required-data custom\"></ion-input>\r\n                        <input class=\"required-index\" value=\"7\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Dirección del siniestro\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input class=\"custom\" type=\"text\" [(ngModel)]=\"laExpediente[0].Direccion\" (ionChange)=\"entraDireccion($event)\" class=\"required-data\"></ion-input>\r\n                        \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Fecha y hora del siniestro\r\n                    </ion-row>\r\n                    <ion-row style=\"padding-top: 6px;\">\r\n                      <ion-col offset=\"9\" size=\"3\">\r\n                        <ion-badge style=\"margin-top: 2.5px;\" class=\"required-data\">{{formateadaSiniestro}} <small>{{horaSiniestro}}</small> </ion-badge>\r\n                        <input class=\"required-index\" value=\"9\">\r\n                        <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\r\n                      </ion-col>\r\n                      <ion-col size=\"3\">\r\n                        <!--ion-button id=\"open-modal-fecha-siniestro\" expand=\"block\" (click)=\"modalFechaSiniestro.present()\">Seleccionar Fecha</!--ion-button -->\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                \r\n                <ion-item style=\"color: white;height: 3vh;\">\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  <br><br><br><br><br><br>\r\n                </ion-item>\r\n                <ion-item lines=\"none\"></ion-item>\r\n              </ion-list>\r\n              <ion-grid style=\"color: #f7f7f7;\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\">           ...</ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <br><br><br><br><br><br>\r\n            </ion-content>\r\n            \r\n          </ion-col>\r\n    \r\n          <ion-col class=\"segmento\" id=\"segmentVehicle\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Datos Asegurado Vehículo\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-content color=\"light\" style=\"height: 100vh\">\r\n            <ion-list [inset]=\"true\">\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Marca\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].Marca != null\" readonly [value]=\"laExpediente[0].Marca\"></ion-input>\r\n                      <ion-select *ngIf=\"laExpediente[0].Marca == null\" class=\"text-size-xs required-data\" (ionChange)=\"seleccionarMarca($event)\" [(ngModel)]=\"laExpediente[0].Marca\" multiple=\"false\" >\r\n                        <ion-select-option *ngFor=\"let marca of marcasVehiculos\"  [value]=\"marca.id\">{{marca.nombre}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <input class=\"required-index\" value=\"10\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Modelo\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].Modelo != null\" readonly [value]=\"laExpediente[0].Modelo\"></ion-input>\r\n                      <ion-select *ngIf=\"laExpediente[0].Modelo == null\" class=\"text-size-xs required-data\" [(ngModel)]=\"laExpediente[0].Modelo\" multiple=\"false\" (ionChange)=\"seleccionarModelo($event)\">\r\n                        <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\r\n                        <ion-select-option *ngFor=\"let modelo of modelosMarca\"  [value]=\"modelo\">{{modelo}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                      <input class=\"required-index\" value=\"11\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Año\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].Year != null\" readonly [value]=\"laExpediente[0].Year\"></ion-input>\r\n                      <ion-input *ngIf=\"laExpediente[0].Year == null\" [maskito]=\"yearMask\" [maskitoElement]=\"predicateCliente\" [(ngModel)]=\"laExpediente[0].Year\" (ionChange)=\"entrarAnio($event)\"\r\n                      class=\"required-data\"></ion-input>\r\n                      <input class=\"required-index\" value=\"12\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Motor No.\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].Motor != null\" readonly [value]=\"laExpediente[0].Motor\"></ion-input>\r\n                      <ion-input *ngIf=\"laExpediente[0].Motor == null\" type=\"text\" [(ngModel)]=\"laExpediente[0].Motor\" (ionChange)=\"entrarMotor($event)\"\r\n                      class=\"required-data\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Chasis\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].Chasis != null\" readonly [value]=\"laExpediente[0].Chasis\"></ion-input>\r\n                      <ion-input *ngIf=\"laExpediente[0].Chasis == null || laExpediente[0].Chasis == '' || laExpediente[0].Chasis == 'N/D'\" type=\"text\" [(ngModel)]=\"laExpediente[0].Chasis\"\r\n                      (ionChange)=\"entrarChasis($event)\" class=\"required-data\"></ion-input>\r\n                      <input class=\"required-index\" value=\"14\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Placa\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input *ngIf=\"laExpediente[0].NumeroPlaca != null\" readonly [value]=\"laExpediente[0].NumeroPlaca\"></ion-input>\r\n                      <ion-input *ngIf=\"laExpediente[0].NumeroPlaca == null\" type=\"text\" [(ngModel)]=\"laExpediente[0].NumeroPlaca\"\r\n                      (ionChange)=\"entrarPlaca($event)\" class=\"required-data\"></ion-input>\r\n                      <input class=\"required-index\" value=\"15\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-item  class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Blindado?\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                      <ion-radio-group [(ngModel)]=\"dataProcess.Blindado\" (ngModelChange)=\"esBlindado($event)\" >\r\n                        <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                          <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                          <ion-radio class=\"uso-opcion\" [value]=\"2\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                          <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                          <ion-radio class=\"uso-opcion\" [value]=\"1\"></ion-radio>\r\n                        </ion-item>\r\n                      </ion-radio-group>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                  \r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    No. de unidad\r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].NoUnidad\" (ionChange)=\"entrarUnidad($event)\" class=\"required-data custom\"></ion-input>\r\n                      <input class=\"required-index\" value=\"16\">\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <ion-grid style=\"color: #f7f7f7;\">\r\n                <ion-row>\r\n                  <ion-col size=\"12\">Ajustadores Por Salud</ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <br><br><br><br><br><br>\r\n            </ion-list>\r\n            \r\n          </ion-content>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"segmento\" id=\"segmentDriver\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge color=\"primary\">\r\n                Datos Asegurado Conductor\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-content color=\"light\" style=\"height: 100vh\">\r\n            <ion-list [inset]=\"true\">\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Conducido por \r\n                  <ion-chip id=\"driverTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\r\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                    Seleccionar\r\n                  </ion-chip>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label\">{{elTipoDeConductor}}</ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-select [(ngModel)]=\"laExpediente[0].ConducidoPor\" multiple=\"false\" (ionChange)=\"seleccionarTipoConductor($event)\"\r\n                        style=\"float: right;color: white;\"\r\n                        toggleIcon=\"caret-down-sharp\"\r\n                        placeholder=\"Seleccionar\">\r\n                      <ion-select-option *ngFor=\"let tipoC of tipoConductor\" [value]=\"tipoC.Id\" >{{tipoC.TipoConductor}}</ion-select-option>\r\n                    </ion-select>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Nombre y Apellido\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado === false\" type=\"text\" [(ngModel)]=\"laExpediente[0].NombreConductor\" class=\"required-data select-label\"></ion-input>\r\n                    <input class=\"required-index\" value=\"17\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado === true\" type=\"text\" (ionChange)=\"entraNombreConductor($event)\" [(ngModel)]=\"daNombreConductor\" class=\"required-data select-label\"></ion-input>\r\n                    <input class=\"required-index\" value=\"18\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Número de identidad\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" [(ngModel)]=\"identidadDelCliente\" type=\"text\" class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"19\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" [(ngModel)]=\"daIdentidadConductor\" type=\"text\" (ionChange)=\"entraIdentidadConductor($event)\"\r\n                    class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"20\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">Fecha de nacimiento</ion-row>\r\n                <ion-row style=\"padding-top: 6px;\">\r\n                  <ion-col size=\"12\">\r\n                    <ion-chip>\r\n                      <ion-avatar>\r\n                        <img src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\r\n                      </ion-avatar>\r\n                      <ion-label class=\"date-label\">{{formateadaNacimiento}}</ion-label>\r\n                      <ion-icon name=\"calendar\" class=\"chip-icon\"></ion-icon>\r\n                    </ion-chip>\r\n                    <input class=\"required-index\" value=\"21\">\r\n                    <ion-chip [color]=\"esMenor == true ? 'danger' : ''\">\r\n                      <ion-icon name=\"hourglass\" style=\"color: var(--blueGrayColor);\"></ion-icon>\r\n                      <ion-label>{{edad}} años</ion-label>\r\n                      <ion-icon name=\"time\" class=\"chip-icon\"></ion-icon>\r\n                    </ion-chip>\r\n                  </ion-col>\r\n                  <ion-col offset=\"9\" size=\"3\">\r\n                    <ion-button id=\"open-modal-fecha-nacimiento\" expand=\"block\" (click)=\"modalFechaNacimiento.present()\">Seleccionar Fecha</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Tipo de parentesco\r\n                  <ion-chip id=\"parentTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\r\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                    Seleccionar\r\n                  </ion-chip>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label\">{{elTipoDeParentesco}}</ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-select class=\"text-size-xs\" [(ngModel)]=\"elTipoParentesco\" multiple=\"false\" (ionChange)=\"getElTipoParentesco($event)\"\r\n                    style=\"float: right;color: white;\">\r\n                      <ion-select-option *ngFor=\"let parentesco of tipoParentescos\" [value]=\"parentesco.CODIGO\" class=\"required-data\">\r\n                        {{parentesco.DESCRIPCION}}\r\n                        <ion-input #parentescoId [hidden]=\"true\" [value]=\"parentesco.Id\"></ion-input>\r\n                        <ion-input #parentescoDescripcion [hidden]=\"true\" [value]=\"parentesco.DESCRIPCION\"></ion-input>\r\n                      </ion-select-option>\r\n                      \r\n                    </ion-select>\r\n                    <input class=\"required-index\" value=\"22\">\r\n                    </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Tipo de licencia\r\n                  <ion-chip id=\"licenceTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\r\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                    Seleccionar\r\n                  </ion-chip>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label\">{{elTipoDeLicencia}}</ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-select class=\"text-size-xs\" [(ngModel)]=\"laExpediente[0].TipoLicencia\" multiple=\"false\" (ionChange)=\"entraTipoLicencia($event)\"\r\n                    style=\"float: right;color: white;\">\r\n                      <ion-select-option *ngFor=\"let licencia of tipoLicencia\" [value]=\"[licencia.TipoLicencia]\" class=\"required-data\">\r\n                        {{licencia.TipoLicencia}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                    <input class=\"required-index\" value=\"23\">\r\n                    </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  No. Licencia\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].LicenciaNo\" (ionChange)=\"entraLicencia($event)\" class=\"required-data select-label\"></ion-input>\r\n                    <input class=\"required-index\" value=\"24\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"7\">\r\n                    <ion-text style=\"color: var(--blueGrayColor);\">Fecha de Vencimiento : </ion-text><br>\r\n                    {{formateadaVigencia}}\r\n                  </ion-col>\r\n                  <ion-col offset=\"2\" size=\"3\">\r\n                    <ion-input [maskito]=\"idMaskFechaVencimiento\" [maskitoElement]=\"predicateCliente\"\r\n                    placeholder=\"DD/MM/AAAA\" [(ionModel)]=\"formateadaVigencia\" (ionChange)=\"entraVencimiento($event)\" class=\"required-data\"\r\n                    style=\"text-align: right;\"></ion-input>\r\n                    <input class=\"required-index\" value=\"25\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid> \r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Estado de la Licencia\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                    <ion-radio-group id=\"licenciaEstado\" (ionChange)=\"entraLicenciaEstado($event)\" class=\"required-data\">\r\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                        <ion-label style=\"margin-left:5px; color: var(--blueGrayColor);\">Vencida</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                        <ion-label style=\"margin-left:5px; color: var(--blueGrayColor);\">Vigente</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n                \r\n            </ion-item>\r\n\r\n            <ion-item  class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Prueba de Alcoholemia?\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                    <ion-radio-group id=\"pruebaRadioGroup\" (ionChange)=\"pruebaAlcohol($event)\" >\r\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                        <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                        <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Dirección del conductor\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DireccionConductor\" (ionChange)=\"entraDireccionConductor($event)\"\r\n                    class=\"required-data select-label\"></ion-input>\r\n                    <input class=\"required-index\" value=\"27\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Teléfono \r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" type=\"number\" [(ngModel)]=\"laExpediente[0].TelefonoFijoConductor\"\r\n                    class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"28\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" type=\"number\" [(ngModel)]=\"daTelefonoFijoConductor\" \r\n                    (ionChange)=\"entraTelefonoConductor($event)\"\r\n                    class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"29\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Celular\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" type=\"number\" [(ngModel)]=\"laExpediente[0].TelefonoOrigen\"\r\n                    class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"30\">\r\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" type=\"number\" [(ngModel)]=\"daCelularConductor\"\r\n                    (ionChange)=\"entraCelularConductor($event)\"\r\n                    class=\"required-data\"></ion-input>\r\n                    <input class=\"required-index\" value=\"31\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-grid style=\"color: white;\">\r\n            <ion-row>\r\n              <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          <br><br><br><br><br><br>\r\n        </ion-content>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"segmento\" id=\"segmentInfo\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Datos Información Relacionada\r\n              </ion-badge>\r\n            </ion-label>\r\n\r\n            <ion-content color=\"light\" style=\"height: 100vh\">\r\n              <ion-list [inset]=\"true\">\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  \r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Se responsabiliza a?\r\n                        </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\"></ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  \r\n                    <ion-radio-group id=\"responsableRadioGroup\" (ionChange)=\"entraResponsable($event)\" >\r\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                        <ion-label style=\"color: var(--blueGrayColor);\">Tercero</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"3\"></ion-radio>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                        <ion-label style=\"color: var(--blueGrayColor);\">Conductor</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                        <ion-label style=\"color: var(--blueGrayColor);\">Asegurado</ion-label>\r\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Responsable\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].NombreAtribuyeAccidente\" (ionChange)=\"entraNombreAtribuye($event)\"\r\n                  class=\"required-data select-label\"></ion-input>\r\n                  <input class=\"required-index\" value=\"32\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Autoridad\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].AutoridadInvolucrada\" (ionChange)=\"entraEntidadInvolucrada($event)\"\r\n                  class=\"required-data select-label\"></ion-input>\r\n                  <input class=\"required-index\" value=\"33\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Ubicación vehículo\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].UbicacionVehiculoAsegurado\" (ionChange)=\"entraUbicacionVehiculoAsegurado($event)\"\r\n                  class=\"required-data select-label\"></ion-input>\r\n                  <input class=\"required-index\" value=\"34\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Se agendó audiencia?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"audiRadioGroup\" (ionChange)=\"audiciona($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                    \r\n                </ion-item>\r\n\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Fue detenido el vehiculo?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"detenidoVRadioGroup\" (ionChange)=\"fueDetenido($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                    \r\n                </ion-item>\r\n\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Fue detenido el conductor?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"detenidoCRadioGroup\" (ionChange)=\"fueDetenidoElConductor($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                    \r\n                </ion-item>\r\n\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Volcó el vehiculo?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"volcoRadioGroup\" (ionChange)=\"fueVolcado($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      En qué comisaría ó juzgado se encuentra el vehículo?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].UbicacionVehiculoDetenido\" (ionChange)=\"entraUbicacionVehiculoDetenido($event)\"\r\n                  class=\"required-data select-label\"></ion-input>\r\n                  <input class=\"required-index\" value=\"35\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n    \r\n    \r\n                <!-- pregunta, vehiculo culpable? -->\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Terceros heridos?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"tHeridosRadioGroup\" (ionChange)=\"tercerosHeridos($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Descripcion heridos.\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DescripcionTercerosHeridos\" (ionChange)=\"dTercerosHeridos($event)\"\r\n                        class=\"custom\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item  class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Terceros fallecidos?\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\r\n                        <ion-radio-group id=\"tMuertosRadioGroup\" (ionChange)=\"tercerosMuertos($event)\" >\r\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\r\n                          </ion-item>\r\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\r\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\r\n                          </ion-item>\r\n                        </ion-radio-group>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Descripcion fallecidos\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DescripcionTercerosMuertos\" (ionChange)=\"dTercerosMuertos($event)\"\r\n                        class=\"custom\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Descripción accidente\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionAccidente\" (ionChange)=\"descripcionAccidente($event)\"\r\n                    class=\"required-data custom\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Descripción audiencia\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionAudiencia\" (ionChange)=\"entraDescripcionAudiencia($event)\"\r\n                        class=\"custom\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-no-padding  input\">\r\n                  <ion-grid>\r\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                      Descripción del daño al vehículo\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionDanioVehiculo\" (ionChange)=\"descripcionDanio($event)\"\r\n                    class=\"required-data custom\"></ion-input>\r\n                    <input class=\"required-index\" value=\"37\">\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-grid style=\"color: white;\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <br><br><br><br><br><br>\r\n              </ion-list>\r\n            </ion-content>\r\n\r\n          \r\n          </ion-col>\r\n\r\n          <ion-col class=\"segmento\" id=\"segmentCompany\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Datos Asegurado Acompañantes\r\n              </ion-badge>\r\n            </ion-label>\r\n            \r\n            <ion-list>\r\n              <ion-item lines=\"none\">\r\n                <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(1)\">\r\n                  Agregar\r\n                </ion-button>\r\n                </ion-item>\r\n                <ion-item *ngFor=\"let item of acompaniante; let i = index \" >\r\n                  <ion-icon style=\"color: orangered;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\r\n                  <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\r\n                  <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4;\" name=\"create\"></ion-icon>\r\n                </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"segmento\" id=\"segmentWitness\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Datos Testigos\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-item lines=\"none\">\r\n              <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(2)\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-item>\r\n          \r\n            <ion-list [inset]=\"true\">\r\n              <ion-item *ngFor=\"let item of testigos; let i = index \" >\r\n                <ion-icon style=\"color: orangered;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\r\n                <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\r\n                <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4; \"name=\"create\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n    \r\n          <ion-col class=\"segmento\" id=\"segmentProperty\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Daños a la Propiedad Privada\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-list [inset]=\"true\">\r\n              <ion-item lines=\"none\">\r\n                <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"openModalPropiedad()\">\r\n                  Agregar\r\n                </ion-button>\r\n              </ion-item>\r\n              <ion-item *ngFor=\"let item of propiedadesprivadas; let i = index \" >\r\n                <ion-icon style=\"color: orangered;\" (click)=\"deletePropiedad(i)\" slot=\"start\" name=\"trash\"></ion-icon>\r\n                <ion-label (click)=\"editPropiedad(i)\" class=\"select-label\">{{item.BienAfectado}}</ion-label>\r\n                <ion-icon (click)=\"editPropiedad(i)\" slot=\"end\" style=\"color: #7da1c4;\" name=\"create\"></ion-icon>\r\n              </ion-item>\r\n            </ion-list>\r\n    \r\n            \r\n    \r\n          </ion-col>\r\n          <ion-col class=\"segmento\" id=\"segmentDamage\" size=\"12\">\r\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge>\r\n                Lesiones a Personas\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-item lines=\"none\">\r\n              <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(3)\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-content color=\"light\" style=\"height: 100vh\">\r\n              <ion-list [inset]=\"true\">\r\n                <ion-item *ngFor=\"let item of lesionados; let i = index \">\r\n                  <ion-icon style=\"color: red;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\r\n                  <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\r\n                  <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4; \"name=\"create\"></ion-icon>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-content>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"segmento\" id=\"segmentSignature\" size=\"12\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          <ion-label class=\"text-size-lg\" style=\"padding-left: 10px;color: #3171e0;\">\r\n                             Firma Asegurado o conductor\r\n                          </ion-label>\r\n                            <ion-card style=\"height:202px\">\r\n                              <img #imagen id=\"imagenFirma\" alt=\"Firmar\" src=\"{{firmaPrecargada}}\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\"\r\n                              style=\"    border: 6px dashed rgb(237, 233, 233);margin-top: 1%; width: 98%; height: 150px; margin-left: 1%;\"/>\r\n                            \r\n                              <ion-card-content style=\"padding: 0; margin-bottom: 6px;padding-left: 1%;\" (click)=\"signatureDisplay();goESignature()\">\r\n                                {{laExpediente[0].Cliente}} <ion-text style=\"position: absolute; right: 60px; bottom: 0; top: 16px;\">Editar firma</ion-text> <img src=\"{{firmaIcono}}\" style=\"width: 50px; height: auto; position: absolute; right: 5px; bottom: 0; top: -13px;\"/>\r\n                              </ion-card-content>\r\n                            </ion-card>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                <ion-content class=\"ion-no-padding\">\r\n                  <ion-grid style=\"padding-top: 0;\">\r\n                    <ion-row>\r\n                      \r\n                      <ion-col size=\"12\">\r\n                        <ion-label class=\"text-size-lg\" style=\"padding-left: 10px;color: #3171e0;\">\r\n                          Fecha del Siniestro\r\n                        </ion-label>\r\n                        <ion-card style=\"height:210px\">\r\n                          <ion-card-content style=\"margin-top: 10%;\">\r\n                            <ion-chip class=\"date-siniestro\">\r\n                              <ion-icon name=\"calendar\" style=\"color: var(--blueGrayColor);\"></ion-icon>\r\n                              <ion-label class=\"chip-label\">{{formateadaSiniestro}}</ion-label>\r\n                              <ion-icon name=\"time\" class=\"chip-icon\"></ion-icon>\r\n                            </ion-chip>\r\n                          </ion-card-content>\r\n                        </ion-card>\r\n                      </ion-col>\r\n                      \r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-content>\r\n                \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>          \r\n        </ion-row>\r\n        <ion-row id=\"dataNull\" style=\"display: none;\">\r\n          <ion-col size=\"12\">\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>\r\n                  <div class=\"meter\">\r\n                      <span id=\"spanProgress\" style=\"width:100%;\"><span class=\"progress\"></span></span>\r\n                  </div>\r\n                </ion-card-subtitle>\r\n                <ion-card-subtitle id=\"infoText\">{{textoInfo}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                \r\n                <br>\r\n                  <ion-icon name=\"flag\" color=\"danger\"></ion-icon> Elementos Incompletos<br>\r\n                  <ion-icon name=\"flag\" color=\"medium\"></ion-icon> Elementos Completos\r\n                <ion-list>\r\n                  <ion-item class=\"nulo-item\" *ngFor=\"let nulo of validaNulos; let i = index\" style=\"color: gray;\" (click)=\"analizaNulo(i, nulo.valor, nulo.inputIndex);scrollToElement();\">\r\n                    <ion-label>{{i+1}}. {{nulo.etiqueta}} : <strong *ngIf=\"nulo.valor != 'undefined' && nulo.valor != undefined\">{{nulo.valor}}</strong></ion-label>\r\n                    <div class=\"meter\">\r\n                        <span style=\"width:100%;\"><span class=\"progress\"></span></span>\r\n                    </div>\r\n                    <input class=\"index-input\" style=\"display: none;\" [value]=nulo.inputIndex />\r\n                    <input class=\"value-input\" style=\"display: none;\" [value]=nulo.valor />\r\n                    <ion-chip *ngIf=\"nulo.valor == 'undefined' || nulo.valor == undefined\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 7%; font-size: 1rem;\r\n                    color: red; border-color: red;\">Ir</ion-chip>\r\n                  </ion-item>\r\n                  <br>\r\n                  <ion-item style=\"color: white;\">Ajustadores HELP Porsalud Ficohsa</ion-item>\r\n                </ion-list>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <div class=\"ion-page\" id=\"main\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>Main View</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-no-padding\" style=\"width: 99%;padding: 3%;text-align: justify;font-size: 1rem;white-space: normal;overflow-y: scroll;height: 39%;\">\r\n      <ion-list style=\"width: 100%;\">\r\n        <ion-item *ngFor=\"let segment of segments; let i = index\" class=\"segment-item\" (click)=\"setSegment(segmentInput.value, indexInput.value)\">\r\n          <ion-input #segmentInput [hidden]=\"true\" [value]=\"segment.name\"></ion-input>\r\n          <ion-input #indexInput [hidden]=\"true\" [value]=\"i\"></ion-input>\r\n          <ion-icon style=\"color: gray;\" class=\"segment-icon\" name={{segment.name}}></ion-icon><span class=\"segment-title\" style=\"margin-left: 9px;\">{{segment.titulo}}</span>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-chip id=\"firmaChip\" class=\"chip-firma\" style=\"    position: absolute;\r\n    height: 70px;\r\n    right: 8%;\r\n    bottom: 12%;\r\n    width: 80%;\r\n    --background: none;\r\n    color: gray;\r\n    padding-top: 52px;\r\n    text-align: right;\r\n    float: right;\r\n    padding-left: 65px;\" (click)=\"goESignature()\">\r\n        \r\n        Editar Firma\r\n\r\n        <img src=\"{{firmaIcono}}\" style=\"width: 50px; height: auto; position: absolute; right: 5px; bottom: 0; \"/>\r\n      </ion-chip>\r\n    </ion-content>\r\n  </div>\r\n  \r\n\r\n</ion-split-pane>\r\n\r\n    <!--ion-button id=\"signButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 60px;height: 60px;bottom: 1%;right: 15%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"firmar()\">\r\n  <ion-icon name=\"refresh\"></ion-icon>\r\n</ion-button>\r\n\r\n    <ion-button id=\"goSignButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 60px;height: 60px;bottom: 1%;right: 8%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goESignature()\">\r\n  <ion-icon name=\"pencil\"></ion-icon>\r\n</ion-button>\r\n\r\n  <ion-button id=\"saveButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 60px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"GuardarDatos()\">\r\n  <ion-icon name=\"chevron-forward\"></ion-icon>\r\n</ion-button -->\r\n<ion-button id=\"audienciaButton\" *ngIf=\"esAudiencia == true\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goPrepare(idAtencion)\">\r\n  Seguir Sin Poliza\r\n</ion-button>\r\n\r\n<ion-button id=\"validateButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"validarDatos()\">\r\n  Validar Datos\r\n</ion-button>\r\n\r\n<ion-button id=\"cancelaButton\" *ngIf=\"daSegment == 'ribbon'\" fill=\"outline\" color=\"--blueGrayColor\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 35%; z-index: 999;\r\n--border-radius: 15px; \r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: var(--blueGrayColor); display: none;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goBack()\">\r\n  Cancelar Envío\r\n</ion-button>\r\n\r\n<ion-button id=\"validateAgainButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 18%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white; display: none;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"validarDatos()\">\r\n  Validar Datos <ion-icon name=\"reload\" style=\"    position: absolute;\r\n    right: 0px;\r\n    color: white;\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-button id=\"saveDataButton\" *ngIf=\"daSegment == 'ribbon'\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--primaryColor);\r\n  --background-activated: var(--primaryColor);\r\n  --background-hover: var(--primaryColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;display: none;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"GuardarDatos()\">\r\n  Guardar Datos\r\n</ion-button>\r\n\r\n<ion-button id=\"camButton\" style=\"position: fixed;width: 60px;height: 60px;bottom: 1%;left: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goFotos()\">\r\n  <ion-icon name=\"camera\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-badge id=\"successLabel\" color=\"warning\" style=\"position: fixed; left: 10px; bottom: 10px; width: auto; padding: 15px; height: 46px; text-align: left;z-index: 999; display: none;color: white;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\" vertical=\"bottom\" horizontal=\"end\">\r\n  Registro guardado con éxito! \r\n</ion-badge>\r\n\r\n<ion-button id=\"buttonGoAjuste\" style=\"position: fixed; left: 290px; bottom: 7px;height: 46px; z-index: 999; display: none;color: white;\" vertical=\"bottom\" horizontal=\"start\"\r\n(click)=\"goAjuste()\">Ir a Ajustador</ion-button>\r\n\r\n<ion-footer slot=\"fixed\" style=\"bottom: 0;left:0;height:80px; background: white;\"></ion-footer>\r\n\r\n\r\n\r\n<ion-modal #daModal id=\"daModal\" class=\"persona\" [isOpen]=\"showPersona\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <!-- Datos del tercero -->  \r\n          <ion-col size=\"12\">\r\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos </ion-label>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Nombre\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Nombre\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              \r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Teléfono\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"number\" [(ngModel)]=\"persona.Telefono\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Dirección\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Direccion\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"editar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\r\n                Actualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n\r\n  <ion-modal #modalLesion id=\"modalLesion\" class=\"persona-lesion\" [isOpen]=\"showPersonaLesion\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Lesionado</ion-label>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Nombre\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Nombre\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              \r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Teléfono\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"number\" [(ngModel)]=\"persona.Telefono\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Dirección\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Direccion\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Tipo de lesión\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.TipoLesion\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-grid>\r\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                  Hospital o Clínica\r\n                    </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.DireccionHospitalizacion\"></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          \r\n\r\n          <ion-col size=\"12\">\r\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"editar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\r\n                Actualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n<!---->\r\n\r\n\r\n<ion-modal #propModal id=\"propModal\" class=\"propiedad\" [isOpen]=\"showPropiedad\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <!-- Datos del tercero -->  \r\n          <ion-col size=\"12\">\r\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos De la Propiedad</ion-label>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Nombre del Bien</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.BienAfectado\"></ion-input>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Nombre Propietario</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.NombrePropietario\"></ion-input>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Telefono</ion-label>\r\n              <ion-input type=\"number\" [(ngModel)]=\"propiedadPrivada.Telefono\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Dirección</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DireeccionPropietario\"></ion-input>\r\n            </ion-item>\r\n            \r\n          </ion-col>\r\n          <!-- Datos del vehiculo -->\r\n          <ion-col size=\"12\">\r\n            <ion-item  style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Daño</ion-label>\r\n            </ion-item>\r\n            <ion-item   class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Descripción del Bien</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DescripcioDelBien\"></ion-input>\r\n            </ion-item>\r\n            <ion-item   class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Dirección del Bien</ion-label>\r\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DireccionDelBien\"></ion-input>\r\n            </ion-item>\r\n            <ion-item   class=\"ion-no-padding transparent input\">\r\n              <ion-label class=\"text-size-sm\" position=\"floating\">\r\n                Descripción del Daño</ion-label>\r\n                <ion-input [(ngModel)]=\"propiedadPrivada.DescripcionDelDanio\" label=\"input\" placeholder=\"Describa el daño\" [autoGrow]=\"true\"></ion-input>\r\n              <!--ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DescripcionDelDanio\"></!--ion-input -->\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"addPropiedad()\" expand=\"block\" shape=\"round\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"editar\"  size=\"6\">\r\n              <ion-button style=\"color: white;\" (click)=\"updatePropiedad()\" expand=\"block\" shape=\"round\">\r\n                Actualizar\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal #modalFechaSiniestro trigger=\"open-modal-fecha-siniestro\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-datetime style=\"margin-left:120px\" [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\r\n      [(ngModel)]=\"laExpediente[0].FechaHoraAccidente\" (ionChange)=\"marcarFechaSiniestro(laExpediente[0].FechaHoraAccidente)\"></ion-datetime>\r\n    </ion-content>\r\n    <!--ion-button>Guardar Fecha</!--ion-button -->\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal #modalFechaNacimiento trigger=\"open-modal-fecha-nacimiento\" [initialBreakpoint]=\"1\" [breakpoints]=\"[0, 0.25, 0.5, 0.75, 1]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-datetime style=\"margin-left:120px\" [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\r\n      [(ngModel)]=\"formateadaNacimiento\" (ionChange)=\"marcarFechaNacimiento($event)\"\r\n      class=\"required-data\"></ion-datetime>\r\n      <input class=\"required-index\" value=\"38\">\r\n      <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\r\n    </ion-content>\r\n    <!--ion-button>Guardar Fecha</!--ion-button -->\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal #modalFechaVencimiento trigger=\"open-modal-fecha-vencimiento\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-datetime style=\"margin-left:120px\" [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\r\n      [(ngModel)]=\"dataProcess.Vigencia\" [maskito]=\"idMaskFechaVencimiento\" [predicate]=\"predicateCliente\" (ionChange)=\"entraVencimiento($event)\"\r\n      class=\"required-data\"></ion-datetime>\r\n      <input class=\"required-index\" value=\"39\">\r\n      <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\r\n    </ion-content>\r\n    <!--ion-button>Guardar Fecha</!--ion-button -->\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_clientehn_clientehn_module_ts.js.map