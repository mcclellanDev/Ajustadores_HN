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
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _clientehn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientehn.page.html?ngResource */ 38002);
/* harmony import */ var _clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientehn.page.scss?ngResource */ 39533);
/* harmony import */ var _clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clientehn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 94666);
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
/* harmony import */ var _utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/claim-payload-normalizer */ 93956);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @capacitor/keyboard */ 10523);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_21__);




























let ClientehnPage = class ClientehnPage {
  get coordinateAlertState() {
    const rawLatitud = this.getCabinCoordinateValue('LatitudCliente');
    const rawLongitud = this.getCabinCoordinateValue('LongitudCliente');
    const hasLatitud = this.hasCoordinateText(rawLatitud);
    const hasLongitud = this.hasCoordinateText(rawLongitud);
    if (!hasLatitud && !hasLongitud) {
      return 'danger';
    }
    const latitud = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(rawLatitud);
    const longitud = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(rawLongitud);
    if (!latitud || !longitud || !this.isLikelyHondurasCoordinate(latitud, longitud)) {
      return 'warning';
    }
    return 'ok';
  }
  get coordinateAlertTitle() {
    return this.coordinateAlertState === 'danger' ? 'Coordenadas no disponibles' : 'Coordenadas por revisar';
  }
  get coordinateAlertMessage() {
    return this.coordinateAlertState === 'danger' ? 'Cabina no envió latitud ni longitud para esta atención. El envío debe detenerse hasta corregir el origen del dato.' : 'Cabina envió coordenadas incompletas, inválidas o fuera del rango esperado para Honduras. Revisa la ubicación antes de continuar.';
  }
  getCabinCoordinateValue(field) {
    if (field === 'LatitudCliente') {
      return this.clienteLatitud ?? this.laExpediente?.[0]?.LatitudCliente ?? this.elExpediente?.LatitudCliente;
    }
    return this.clienteLongitud ?? this.laExpediente?.[0]?.LongitudCliente ?? this.elExpediente?.LongitudCliente;
  }
  hasCoordinateText(value) {
    const text = (value ?? '').toString().trim().toLowerCase();
    return !!text && !['null', 'undefined', 'string', 'n/a', 'na', 'nd', 'n.d.', 's/d', 'sin dato'].includes(text);
  }
  isLikelyHondurasCoordinate(latitud, longitud) {
    const latitudNumerica = Number(latitud);
    const longitudNumerica = Number(longitud);
    return latitudNumerica >= 12 && latitudNumerica <= 18 && longitudNumerica >= -90.5 && longitudNumerica <= -83;
  }
  // INICIALIZACION
  constructor(router, route, loading, alert, api, toast, location, platform, so, geo, toaster, formateador, countryService, menuController) {
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
    this.menuController = menuController;
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
      var _ref = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
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
    this.segmentoTitulo = 'Formulario del cliente';
    this.birthDateMin = '1900-01-01';
    this.birthDateMax = new Date().toISOString().split('T')[0];
    this.driverTypeSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Tipo de conductor',
      subHeader: 'Selecciona una opción'
    };
    this.relationshipSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Tipo de parentesco',
      subHeader: 'Selecciona una opción'
    };
    this.licenceTypeSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Tipo de licencia',
      subHeader: 'Selecciona una opción'
    };
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
              jquery__WEBPACK_IMPORTED_MODULE_21__('#responsableRadioGroup').val(esTerceroResponsable).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#responsableRadioGroup').val('3').change();
              this.setResponsable(3);
            }
            if (audiencia) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#audiRadioGroup').val(audiencia).change();
              this.setAudiencia(audiencia);
            }
            if (vehiculodet) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoVRadioGroup').val(vehiculodet).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoVRadioGroup').val('2').change();
              this.setDetenido(2);
            }
            if (conductorDet) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoCRadioGroup').val(conductorDet).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoCRadioGroup').val('2').change();
              this.setDetenidoElConductor(2);
            }
            if (vehiculoVolcado) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#volcoRadioGroup').val(vehiculoVolcado).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#volcoRadioGroup').val('2').change();
              this.setVolcado(2);
            }
            if (tercerosHeridos) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#tHeridosRadioGroup').val(tercerosHeridos).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#tHeridosRadioGroup').val('2').change();
              this.setTercerosHeridos(2);
            }
            if (tercerosMuertos) {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#tMuertosRadioGroup').val(tercerosMuertos).change();
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_21__('#tMuertosRadioGroup').val('2').change();
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
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#responsableRadioGroup').val(esTerceroResponsable).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#responsableRadioGroup').val('3').change();
                  this.setResponsable(3);
                }
                if (audiencia) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#audiRadioGroup').val(audiencia).change();
                  this.setAudiencia(audiencia);
                }
                if (vehiculodet) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoVRadioGroup').val(vehiculodet).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoVRadioGroup').val('2').change();
                  this.setDetenido(2);
                }
                if (conductorDet) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoCRadioGroup').val(conductorDet).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#detenidoCRadioGroup').val('2').change();
                  this.setDetenidoElConductor(2);
                }
                if (vehiculoVolcado) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#volcoRadioGroup').val(vehiculoVolcado).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#volcoRadioGroup').val('2').change();
                  this.setVolcado(2);
                }
                if (tercerosHeridos) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#tHeridosRadioGroup').val(tercerosHeridos).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#tHeridosRadioGroup').val('2').change();
                  this.setTercerosHeridos(2);
                }
                if (tercerosMuertos) {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#tMuertosRadioGroup').val(tercerosMuertos).change();
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_21__('#tMuertosRadioGroup').val('2').change();
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
    jquery__WEBPACK_IMPORTED_MODULE_21__('#botonFirmar').click();
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
    this.indexFront = jquery__WEBPACK_IMPORTED_MODULE_21__('.index-input').eq(indexFront).val(); //segmentIndex;
    //alert('valor '+valor+' en el index '+ inputIndex +', el segmento '+requiredDataCliente[indexFront].segmentKey)
    //$('.required-index').eq(inputIndex).addClass('required-missing');
    if (valor == 'undefined' || valor == undefined) {
      setTimeout(() => {
        //this.setSegment(segmentKey, indexSeg);
        jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).click();
        let daSegmentsContainer = document.getElementsByClassName('segment-icon');
        let daTitleContainer = document.getElementsByClassName('segment-title');
        let daSegmentsButton = document.getElementsByClassName('segment-item');
        let daIndex = segmentIndex;
        for (let index = 0; index < daSegmentsContainer.length; index++) {
          const element = daSegmentsContainer[index];
          const title = daTitleContainer[index];
          const segmentId = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments[index].idSegmento;
          if (daIndex == index) {
            jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).fadeIn('xslow');
            daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
            element.setAttribute('style', 'color:#0058CB');
            title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).fadeOut();
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
    this.isTablet = this.platform.is('tablet');
    this.esAudiencia = origin === '/prepare-send';
    this.platform.ready().then(() => {
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_20__.Keyboard.addListener('keyboardDidShow', () => {
        jquery__WEBPACK_IMPORTED_MODULE_21__('.cliente-action-footer').fadeOut();
      });
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_20__.Keyboard.addListener('keyboardDidHide', () => {
        jquery__WEBPACK_IMPORTED_MODULE_21__('.cliente-action-footer').fadeIn();
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
      jquery__WEBPACK_IMPORTED_MODULE_21__('.segment-item').eq(9).click(function () {
        setTimeout(() => {
          jquery__WEBPACK_IMPORTED_MODULE_21__('#signButton').click();
        }, 1000);
      });
      //$('#signButton').click();
    }, 1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    localStorage.setItem('atencionEnProceso', this.idAtencion);
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        this.api.Valida_Lista_Coberturas(cobertura).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.api.ListTipoParentesco(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.tipoParentescos = res;
      });
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref6 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.router.navigate(['./cargar-archivos']);
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
    this.router.navigate(['./cargar-archivos']);
  }
  presentToast(message, position, clase) {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        this.cliente.Celular = jquery__WEBPACK_IMPORTED_MODULE_21__('#celularAsegurado').val();
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
    jquery__WEBPACK_IMPORTED_MODULE_21__('#licenciaEstado').val(estado).change();
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
    this.api.obtenerFotoPorAtencion(this.idAtencion, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref8 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
      var _ref9 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const load = await this.loading.create();
      //await  load.present();
      _this8.isLoading = true;
      _this8.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //        await load.dismiss();
        _this8.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref11 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this8.tipoLicencia = res;
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref12 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //const load = await this.loading.create();
      //await  load.present();
      _this9.isLoading = true;
      _this9.api.TipoDeVehiculo(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //        await load.dismiss();
        _this9.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref14 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this9.tipoVehiculo = res;
        });
        return function (_x8) {
          return _ref14.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref15 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.api.ListTalleres().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this10.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref17 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this10.talleres = res;
        });
        return function (_x10) {
          return _ref17.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref18 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.api.ListTipoConductor().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Aqui se termina la carga de tipos de conductor');
    }))).subscribe( /*#__PURE__*/function () {
      var _ref20 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this11.tipoConductor = res;
        _this11.seTipoConductor(_this11.daTipoConductor, 1);
        console.log('Aqui obtengo los tipos de conductor');
        console.dir(res);
      });
      return function (_x12) {
        return _ref20.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref21 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.setSegment('segmentCoordinates', 0, false);
    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      clearInterval(this.firstInterval);
      daFirstSegmentsButton[0].setAttribute('style', 'border:1px solid #0058CB');
      daFirstSegmentsContainer[0].setAttribute('style', 'color:#0058CB');
      daFirstTitleContainer[0].setAttribute('style', 'color:#0058CB;margin-left: 9px');
    }
  }
  closeClientForm() {
    this.menuController.close('cliente-form-menu');
  }
  setSegment(segmentInput, indexInput, openForm = true) {
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
    this.segmentoTitulo = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments[daIndex]?.titulo || 'Formulario del cliente';
    if (this.daSegment == 'ribbon') {
      jquery__WEBPACK_IMPORTED_MODULE_21__('#validateButton').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_21__('#validateButton').fadeOut();
    }
    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      const title = daTitleContainer[index];
      const segmentId = _environments_segments__WEBPACK_IMPORTED_MODULE_9__.segments[index].idSegmento;
      if (daIndex == index) {
        jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).fadeIn('xslow');
        daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
        element.setAttribute('style', 'color:#0058CB');
        title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
        if (this.cantidadNulos == undefined) {
          //alert('Hey vooo!??')
        } else {
          //alert(this.cantidadNulos);
          if (segmentId != 'segmentSignature') {
            jquery__WEBPACK_IMPORTED_MODULE_21__('#dataNull').fadeOut();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_21__('#dataNull').fadeIn('xslow');
            //$('#segmentSignature').fadeOut();
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_21__("#" + segmentId).fadeOut();
        daSegmentsButton[index].setAttribute('style', 'border:none');
        element.setAttribute('style', 'color:#7da1c4');
        title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
      }
    }
    if (openForm && !window.matchMedia('(min-width: 900px) and (orientation: landscape)').matches) {
      setTimeout(() => {
        this.menuController.open('cliente-form-menu');
      }, 120);
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
    jquery__WEBPACK_IMPORTED_MODULE_21__('#segmentSignature').fadeIn();
  }
  // ENVIO
  validarDatos() {
    jquery__WEBPACK_IMPORTED_MODULE_21__('#dataNull').fadeIn('xslow');
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
      jquery__WEBPACK_IMPORTED_MODULE_21__('#validateButton').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_21__('#validateButton').fadeOut();
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
          jquery__WEBPACK_IMPORTED_MODULE_21__('.nulo-item').eq(index).attr('style', 'color:red; font-weight: bold;');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_21__('.nulo-item').eq(index).attr('style', 'color:gray; font-weight: bold;');
        }
        /**/
        if (index == contenedor.length - 1) {
          //alert(this.nullsIndex.length)
          if (this.nullsIndex.length == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_21__('#validateButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_21__('#saveDataButton').fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_21__('#validateAgainButton').fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_21__('#cancelaButton').fadeIn();
            this.progress = 1;
            clearInterval(this.progInterval);
            this.textoInfo = 'Datos completados con éxito! Ahora puedes proceder a enviarlos haciendo click en GUARDAR DATOS';
            jquery__WEBPACK_IMPORTED_MODULE_21__('#spanProgress').removeClass('progress');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#spanProgress').addClass('progress-end');
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
    const expedienteActual = this.laExpediente?.[0] || this.elExpediente || {};
    const latitudExpediente = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(this.clienteLatitud) || (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(expedienteActual?.LatitudCliente);
    const longitudExpediente = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(this.clienteLongitud) || (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.normalizeCoordinate)(expedienteActual?.LongitudCliente);
    const coordenadasSiniestro = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_19__.resolveClaimCoordinates)({
      ...expedienteActual,
      LatitudCliente: latitudExpediente,
      LongitudCliente: longitudExpediente
    }, this.idAtencion);
    const latitudCliente = coordenadasSiniestro.Latitud;
    const longitudCliente = coordenadasSiniestro.Longitud;
    if (latitudCliente) {
      this.dataProcess['Latitud'] = latitudCliente;
      localStorage.setItem('dataProcess-Latitud', latitudCliente);
    } else {
      this.dataProcess['Latitud'] = '';
      localStorage.removeItem('dataProcess-Latitud');
    }
    if (longitudCliente) {
      this.dataProcess['Longitud'] = longitudCliente;
      localStorage.setItem('dataProcess-Longitud', longitudCliente);
    } else {
      this.dataProcess['Longitud'] = '';
      localStorage.removeItem('dataProcess-Longitud');
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
        jquery__WEBPACK_IMPORTED_MODULE_21__('#signButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__('#goSignButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__('#saveButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__('#camButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__('#footerSignButton').fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__("#successLabel").fadeIn('slow');
        jquery__WEBPACK_IMPORTED_MODULE_21__("#buttonGoAjuste").fadeIn('slow');
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
        this.api.GuardarCacheCliente(this.dataProcess).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          //alert('Finalice')
          _this12.isLoading = false;
          _this12.isComplete = true;
        }))).subscribe( /*#__PURE__*/function () {
          var _ref23 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log(res);
            jquery__WEBPACK_IMPORTED_MODULE_21__('#signButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#goSignButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#saveButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#camButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#footerSignButton').fadeOut('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__('#saveDataButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_21__('#validateAgainButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_21__('#cancelaButton').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_21__("#successLabel").fadeIn('slow');
            jquery__WEBPACK_IMPORTED_MODULE_21__("#buttonGoAjuste").fadeIn('slow');
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
          var _ref24 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
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
    jquery__WEBPACK_IMPORTED_MODULE_21__("input[type='radio'][value=" + this.dataProcess.Blindado + "]").attr("checked", 'true').trigger("change");
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
    this.esMenor = this.edad < 18;
  }
  calcularEdad(fecha) {
    const fechaTexto = fecha?.toString().split('T')[0];
    const partes = fechaTexto?.split('-').map(Number);
    if (!partes || partes.length !== 3 || partes.some(parte => Number.isNaN(parte))) {
      return 0;
    }
    const [anio, mes, dia] = partes;
    const hoy = new Date();
    let laEdad = hoy.getFullYear() - anio;
    const aunNoCumple = hoy.getMonth() + 1 < mes || hoy.getMonth() + 1 === mes && hoy.getDate() < dia;
    if (aunNoCumple) {
      laEdad--;
    }
    localStorage.setItem('dataProcess-Edad', laEdad.toString());
    this.dataProcess['Edad'] = laEdad;
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
      jquery__WEBPACK_IMPORTED_MODULE_21__('#usoRadioGroup').val(uso).change();
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
    jquery__WEBPACK_IMPORTED_MODULE_21__('#pruebaRadioGroup').val(prueba).change();
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alert.create({
        cssClass: 'form-choice-alert no-policy-alert',
        header: 'Continuar sin póliza',
        subHeader: 'Atención #' + _this13.idAtencion,
        message: 'Se preparará el envío de esta atención sin utilizar la póliza. ¿Deseas continuar?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'form-choice-cancel',
          handler: () => {
            _this13.setUtilizacionAsistencia(1);
          }
        }, {
          text: 'Continuar',
          role: 'confirm',
          cssClass: 'form-choice-confirm',
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.ToastController
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_25__.Location
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.Platform
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
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__.MenuController
    }];
  }
  static {
    this.propDecorators = {
      imagen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['imagen']
      }],
      requerido: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['requerido']
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['modalNulos']
      }],
      daModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['daModal']
      }],
      propModal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['propModal']
      }],
      modalLesion: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['modalLesion']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_24__.IonContent]
      }],
      imagenFirma: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_26__.ViewChild,
        args: ['imagenFirma']
      }]
    };
  }
};
ClientehnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_26__.Component)({
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

/***/ 19125:
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/keyboard/dist/esm/definitions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardResize": () => (/* binding */ KeyboardResize),
/* harmony export */   "KeyboardStyle": () => (/* binding */ KeyboardStyle)
/* harmony export */ });
/// <reference types="@capacitor/cli" />
var KeyboardStyle;
(function (KeyboardStyle) {
  /**
   * Dark keyboard.
   *
   * @since 1.0.0
   */
  KeyboardStyle["Dark"] = "DARK";
  /**
   * Light keyboard.
   *
   * @since 1.0.0
   */
  KeyboardStyle["Light"] = "LIGHT";
  /**
   * On iOS 13 and newer the keyboard style is based on the device appearance.
   * If the device is using Dark mode, the keyboard will be dark.
   * If the device is using Light mode, the keyboard will be light.
   * On iOS 12 the keyboard will be light.
   *
   * @since 1.0.0
   */
  KeyboardStyle["Default"] = "DEFAULT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
  /**
   * Only the `body` HTML element will be resized.
   * Relative units are not affected, because the viewport does not change.
   *
   * @since 1.0.0
   */
  KeyboardResize["Body"] = "body";
  /**
   * Only the `ion-app` HTML element will be resized.
   * Use it only for Ionic Framework apps.
   *
   * @since 1.0.0
   */
  KeyboardResize["Ionic"] = "ionic";
  /**
   * The whole native Web View will be resized when the keyboard shows/hides.
   * This affects the `vh` relative unit.
   *
   * @since 1.0.0
   */
  KeyboardResize["Native"] = "native";
  /**
   * Neither the app nor the Web View are resized.
   *
   * @since 1.0.0
   */
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));

/***/ }),

/***/ 10523:
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/keyboard/dist/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard),
/* harmony export */   "KeyboardResize": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.KeyboardResize),
/* harmony export */   "KeyboardStyle": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.KeyboardStyle)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 19125);

const Keyboard = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Keyboard');



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
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n}\n\n.uso-opcion {\n  margin-left: 5px;\n  --border-radius: 4px;\n  --inner-border-radius: 4px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-item {\n  padding-left: 10px;\n}\n\n.icono-cerrar {\n  --background: transparent;\n  --background-activated: var(--primaryColor);\n  --box-shadow: none;\n  --color: white;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #7da1c4;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#d-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  background: white !important;\n}\nion-toolbar .toolbar-content {\n  background: white !important;\n}\n\n.cliente-page-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  padding-left: 0;\n  text-align: center;\n}\n\n.cliente-action-footer {\n  background: white;\n  border-top: 1px solid #d9e1e8;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n  padding: 8px 12px calc(8px + env(safe-area-inset-bottom));\n  z-index: 900;\n}\n\n.cliente-action-bar,\n.cliente-fixed-actions,\n.cliente-state-actions,\n.cliente-success-actions {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n\n.cliente-action-bar {\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.cliente-fixed-actions,\n.cliente-state-actions,\n.cliente-success-actions {\n  flex-wrap: wrap;\n}\n\n.cliente-state-actions {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n\n.cliente-success-actions {\n  margin-left: auto;\n}\n\n.cliente-action-footer ion-button {\n  height: 46px;\n  margin: 0;\n  min-width: 112px;\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.cliente-action-footer .cliente-action-button,\n.cliente-action-footer .cliente-secondary-action {\n  --border-color: var(--blueGrayColor);\n  --color: var(--blueGrayColor);\n  color: var(--blueGrayColor) !important;\n}\n\n.cliente-action-footer .cliente-primary-action {\n  --background: var(--primaryColor);\n  --background-activated: var(--primaryColor);\n  --color: white;\n  color: white !important;\n}\n\n.cliente-action-footer ion-icon {\n  color: currentColor;\n  font-size: 1.2rem;\n}\n\n.cliente-action-footer .cliente-action-button ion-icon,\n.cliente-action-footer .cliente-secondary-action ion-icon {\n  color: var(--blueGrayColor) !important;\n}\n\n.cliente-action-footer .cliente-primary-action ion-icon {\n  color: white !important;\n}\n\n#successLabel {\n  --background: var(--blueGrayColor);\n  --color: white;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  height: 46px;\n  padding: 15px;\n}\n\n.coordinate-alert {\n  align-items: flex-start;\n  border-radius: 8px;\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  padding: 10px 12px;\n}\n\n.coordinate-alert ion-icon {\n  flex: 0 0 auto;\n  font-size: 1.35rem;\n  margin-top: 2px;\n}\n\n.coordinate-alert strong,\n.coordinate-alert span {\n  display: block;\n  line-height: 1.25;\n}\n\n.coordinate-alert strong {\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.coordinate-alert span {\n  font-size: 0.86rem;\n  margin-top: 3px;\n}\n\n.coordinate-alert.warning {\n  background: #fff7df;\n  border: 1px solid #f2c96d;\n  color: #87600e;\n}\n\n.coordinate-alert.danger {\n  background: #fff0f0;\n  border: 1px solid #f1a5a5;\n  color: #aa1f1f;\n}\n\n.coordinate-chip-row {\n  row-gap: 8px;\n}\n\n.coordinate-chip {\n  border-radius: 8px;\n  min-height: 58px;\n  padding: 10px 12px;\n}\n\n.coordinate-chip span {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.coordinate-chip strong {\n  display: block;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1.15;\n  overflow-wrap: anywhere;\n}\n\n.coordinate-chip.ok {\n  background: #effaf4;\n  border: 1px solid #9bd7b2;\n}\n\n.coordinate-chip.ok span,\n.coordinate-chip.ok strong {\n  color: #137343;\n}\n\n.coordinate-chip.warning {\n  background: #fff7df;\n  border: 1px solid #f2c96d;\n}\n\n.coordinate-chip.warning span,\n.coordinate-chip.warning strong {\n  color: #87600e;\n}\n\n.coordinate-chip.danger {\n  background: #fff0f0;\n  border: 1px solid #f1a5a5;\n}\n\n.coordinate-chip.danger span,\n.coordinate-chip.danger strong {\n  color: #aa1f1f;\n}\n\nion-alert button {\n  background: red;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #7da1c4;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #7da1c4;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #7da1c4;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-icon {\n  color: black;\n}\n\nion-label {\n  padding-top: 8px;\n  text-overflow: inherit;\n  max-width: 100%;\n  color: #7da1c4;\n}\n\nion-datetime {\n  --background-rgb: white;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: rgba(128, 128, 128, 0.3) 0px 10px 15px -3px;\n}\n\nion-modal.birth-date-modal {\n  --backdrop-opacity: 0.48;\n  --border-radius: 12px;\n  --height: min(620px, calc(100vh - 32px));\n  --max-height: 92vh;\n  --max-width: 430px;\n  --width: calc(100% - 12px);\n}\n\nion-modal.birth-date-modal::part(content) {\n  left: 0;\n  margin-inline: auto;\n  right: 0;\n}\n\n.birth-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.birth-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.birth-date-modal ion-button,\n.birth-date-modal ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.birth-date-modal-content {\n  --background: #f4f7fa;\n  --padding-bottom: calc(16px + env(safe-area-inset-bottom));\n  --padding-end: 6px;\n  --padding-start: 6px;\n  --padding-top: 14px;\n}\n\n.birth-date-guidance {\n  color: #526b84;\n  font-size: 0.82rem;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.birth-date-picker {\n  box-sizing: border-box;\n  box-shadow: 0 5px 18px rgba(18, 54, 87, 0.12);\n  margin: 0 auto;\n  max-width: calc(100vw - 24px);\n  overflow: hidden;\n  width: 100%;\n}\n\n.birth-date-result {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  color: #17365d;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding: 10px 12px;\n}\n\n.birth-date-result span {\n  color: #24733e;\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-align: right;\n}\n\n.birth-date-result .minor-driver-warning {\n  color: #c3352b;\n}\n\nion-badge:not(#esMenorLabel) {\n  background: #7da1c4;\n  font-size: 1rem;\n  padding: 6px;\n}\n\n#esMenorLabel {\n  font-size: 1rem;\n  padding: 6px;\n}\n\n.input-label {\n  font-size: 1.4rem;\n}\n\nion-button:not(#cancelaButton) {\n  color: white;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane-cliente {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\n.cliente-form-toolbar,\n.cliente-segments-toolbar {\n  --background: var(--primaryColor);\n  --color: white;\n}\n\n.cliente-form-toolbar ion-title,\n.cliente-segments-toolbar ion-title {\n  color: white;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-align: center;\n}\n\n.cliente-form-close ion-button,\n.cliente-form-shortcut ion-menu-button {\n  --color: white;\n  color: white;\n}\n\n.cliente-form-close ion-icon {\n  color: white;\n  font-size: 1.7rem;\n}\n\n.cliente-form-floating-close {\n  display: none;\n}\n\n.cliente-form-content {\n  --padding-start: 3%;\n  --padding-end: 3%;\n  --padding-bottom: 96px;\n  font-size: 1rem;\n  text-align: justify;\n  white-space: normal;\n}\n\n.segment-form-body {\n  background: var(--ion-color-light, #f4f5f8);\n  display: block;\n  width: 100%;\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .cliente-form-close,\n  .cliente-form-shortcut {\n    display: none;\n  }\n}\n@media (orientation: portrait), (max-width: 899px) {\n  #big-pane-cliente {\n    --side-width: 100%;\n    --side-max-width: 100%;\n  }\n  ion-menu.cliente-form-menu {\n    --width: 100%;\n    --min-width: 100%;\n    --max-width: 100%;\n  }\n  ion-menu.cliente-form-menu::part(container) {\n    border-radius: 0;\n    box-shadow: none;\n  }\n  .cliente-form-floating-close {\n    display: block;\n    margin-top: 8px;\n    margin-right: 8px;\n    z-index: 30;\n  }\n  .cliente-form-floating-close ion-fab-button {\n    --background: transparent;\n    --background-activated: var(--primaryColor);\n    --box-shadow: none;\n    --color: white;\n    margin-top: 1px;\n    margin-right: -8px;\n  }\n  .cliente-form-floating-close-tablet ion-fab-button {\n    --background: var(--primaryColor);\n    --background-activated: var(--primaryColor);\n    --box-shadow: 0 4px 12px rgba(0, 33, 63, 0.28);\n    --color: white;\n    margin-top: 1px;\n    margin-right: -8px;\n    border-radius: 50%;\n    color: white;\n  }\n  .cliente-form-floating-close ion-icon {\n    color: white;\n    font-size: 1.45rem;\n  }\n  #main {\n    width: 100%;\n  }\n  .cliente-segments-toolbar ion-title {\n    padding-inline: 48px 0;\n  }\n  .segment-item {\n    min-height: 60px;\n    --padding-start: 18px;\n    --padding-end: 14px;\n  }\n  .segment-title {\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  .segment-icon {\n    font-size: 1.45rem;\n  }\n  .chip-firma {\n    right: 16px;\n    bottom: 96px;\n    width: calc(100% - 32px);\n  }\n  .cliente-action-bar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .cliente-fixed-actions,\n  .cliente-state-actions,\n  .cliente-success-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    margin-left: 0;\n    width: 100%;\n  }\n  .cliente-state-actions > :only-child,\n  .cliente-success-actions > :only-child,\n  #successLabel {\n    grid-column: 1/-1;\n    width: 100%;\n  }\n  .cliente-state-actions .cliente-primary-action {\n    grid-column: 1/-1;\n  }\n  .cliente-action-footer ion-button {\n    min-width: 0;\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .cliente-form-content {\n    --background: #eef3f7;\n    --padding-start: 0;\n    --padding-end: 0;\n    --padding-top: 8px;\n    --padding-bottom: calc(156px + env(safe-area-inset-bottom));\n  }\n  .cliente-form-content > ion-grid,\n  .cliente-form-content > ion-grid > ion-row,\n  .cliente-form-content .segmento,\n  .cliente-form-content .segmento > ion-content,\n  .cliente-form-content .segmento ion-list,\n  .cliente-form-content .segmento ion-grid,\n  .cliente-form-content .segmento ion-row {\n    margin-left: 0;\n    margin-right: 0;\n    max-width: none;\n    padding-left: 0;\n    padding-right: 0;\n    width: 100%;\n  }\n  .cliente-form-content .segmento {\n    background: #eef3f7;\n    flex: 0 0 100%;\n    max-width: 100%;\n    padding-bottom: 32px;\n  }\n  .cliente-form-content .segmento:last-child {\n    padding-bottom: 120px;\n  }\n  .cliente-form-content .segmento .segment-form-body {\n    background: transparent;\n    min-height: 0;\n    overflow: visible;\n    padding-bottom: 24px;\n  }\n  .cliente-form-content .segmento > ion-label {\n    display: block;\n    padding: 0 10px 8px !important;\n    width: 100%;\n  }\n  .cliente-form-content .segmento > ion-label ion-badge {\n    align-items: center;\n    background: var(--primaryColor);\n    border-radius: 6px;\n    display: flex;\n    font-size: 0.86rem;\n    font-weight: 800;\n    height: 40px;\n    justify-content: flex-start;\n    letter-spacing: 0;\n    padding: 0 14px;\n    text-transform: none;\n    width: 100%;\n  }\n  .cliente-form-content .segmento > ion-content {\n    --background: transparent;\n  }\n  .cliente-form-content .segmento ion-list[inset] {\n    margin-inline: 0;\n  }\n  .cliente-form-content .segmento ion-list {\n    background: transparent;\n    padding: 0 10px;\n  }\n  .cliente-form-content .segmento ion-item.input {\n    --background: #ffffff;\n    --border-color: #dce5ed;\n    --inner-border-width: 0 0 1px 0;\n    --inner-padding-end: 12px;\n    --min-height: 72px;\n    --padding-start: 12px;\n    --padding-end: 0;\n    margin: 0;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-item.input:first-child {\n    border-radius: 7px 7px 0 0;\n  }\n  .cliente-form-content .segmento ion-item.input:last-of-type {\n    border-radius: 0 0 7px 7px;\n  }\n  .cliente-form-content .segmento ion-item.input ion-col {\n    margin-left: 0;\n    max-width: 100%;\n    offset: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .cliente-form-content .segmento ion-item.input ion-col:not([size=\"12\"]) {\n    flex: 0 0 100%;\n    margin-left: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-input,\n  .cliente-form-content .segmento ion-select,\n  .cliente-form-content .segmento ion-textarea {\n    --background: #f5f8fb;\n    --color: #17365d;\n    --highlight-color-focused: var(--primaryColor);\n    --padding-bottom: 8px;\n    --padding-end: 10px;\n    --padding-start: 10px;\n    --padding-top: 8px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    font-size: 0.92rem;\n    min-height: 42px;\n    max-width: 100%;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-input[readonly] {\n    --background: #edf2f6;\n    --color: #526b84;\n  }\n  .cliente-form-content .segmento ion-item.input ion-grid > ion-row:first-child {\n    color: #617b94 !important;\n    font-size: 0.74rem !important;\n    font-weight: 800;\n    letter-spacing: 0;\n    line-height: 1.2;\n    padding: 8px 0 5px;\n    text-transform: uppercase;\n  }\n  .cliente-form-content .segmento ion-item.input ion-grid > ion-row:not(:first-child) {\n    padding-bottom: 8px;\n  }\n  .cliente-form-content .segmento ion-select {\n    float: none !important;\n  }\n  .cliente-form-content .segmento .insured-email-column,\n  .cliente-form-content .segmento .accident-date-column,\n  .cliente-form-content .segmento .driver-type-select-column,\n  .cliente-form-content .segmento .birth-date-button-column,\n  .cliente-form-content .segmento .licence-expiration-display,\n  .cliente-form-content .segmento .licence-expiration-input-column {\n    flex: 0 0 100% !important;\n    margin-left: 0 !important;\n    max-width: 100% !important;\n    width: 100% !important;\n  }\n  .cliente-form-content .segmento .insured-email-column ion-input,\n  .cliente-form-content .segmento .accident-date-column ion-badge,\n  .cliente-form-content .segmento .licence-expiration-input-column ion-input {\n    box-sizing: border-box;\n    max-width: none !important;\n    width: 100% !important;\n  }\n  .cliente-form-content .segmento .accident-date-row,\n  .cliente-form-content .segmento .birth-date-row,\n  .cliente-form-content .segmento .licence-expiration-row {\n    gap: 8px;\n  }\n  .cliente-form-content .segmento .accident-date-badge {\n    align-items: center;\n    display: flex;\n    font-size: 0.9rem;\n    gap: 8px;\n    justify-content: center;\n    min-height: 42px;\n    padding: 8px 12px;\n    white-space: normal;\n    width: 100%;\n  }\n  .cliente-form-content .segmento .driver-type-row {\n    align-items: stretch;\n    gap: 6px;\n  }\n  .cliente-form-content .segmento .driver-type-display {\n    align-items: center;\n    background: #edf2f6;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: flex;\n    flex: 1 1 auto !important;\n    min-height: 42px;\n    padding: 8px 10px;\n  }\n  .cliente-form-content .segmento .driver-type-select-column {\n    flex-basis: 48px !important;\n    max-width: 48px !important;\n    width: 48px !important;\n  }\n  .cliente-form-content .segmento .driver-type-select {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    min-width: 48px;\n  }\n  .cliente-form-content .segmento .driver-type-select::part(text),\n  .cliente-form-content .segmento .driver-type-select::part(placeholder) {\n    display: none;\n  }\n  .cliente-form-content .segmento .driver-type-select::part(icon) {\n    color: var(--primaryColor);\n    font-size: 1.35rem;\n    opacity: 1;\n  }\n  .cliente-form-content .segmento .compact-choice-row {\n    align-items: stretch;\n    gap: 6px;\n  }\n  .cliente-form-content .segmento .compact-choice-display {\n    align-items: center;\n    background: #edf2f6;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: flex;\n    flex: 1 1 auto !important;\n    min-height: 42px;\n    padding: 8px 10px;\n  }\n  .cliente-form-content .segmento .compact-choice-select-column {\n    flex: 0 0 48px !important;\n    margin-left: 0 !important;\n    max-width: 48px !important;\n    width: 48px !important;\n  }\n  .cliente-form-content .segmento .compact-choice-select {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    min-width: 48px;\n  }\n  .cliente-form-content .segmento .compact-choice-select::part(text),\n  .cliente-form-content .segmento .compact-choice-select::part(placeholder) {\n    display: none;\n  }\n  .cliente-form-content .segmento .compact-choice-select::part(icon) {\n    color: var(--primaryColor);\n    font-size: 1.35rem;\n    opacity: 1;\n  }\n  .cliente-form-content .segmento .birth-date-displays {\n    display: grid;\n    gap: 8px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .cliente-form-content .segmento .birth-date-chip,\n  .cliente-form-content .segmento .birth-age-chip {\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    min-width: 0;\n    overflow: visible;\n    width: 100% !important;\n  }\n  .cliente-form-content .segmento .birth-date-chip ion-label:not(.date-label),\n  .cliente-form-content .segmento .birth-age-chip ion-label:not(.date-label) {\n    margin: 0;\n    overflow: visible;\n    text-overflow: clip;\n    white-space: nowrap;\n  }\n  .cliente-form-content .segmento .birth-date-chip ion-avatar,\n  .cliente-form-content .segmento .birth-date-chip ion-icon,\n  .cliente-form-content .segmento .birth-age-chip ion-icon {\n    flex: 0 0 auto;\n    margin: 0;\n    position: static;\n  }\n  .birth-date-chip {\n    padding-left: 0;\n  }\n  .cliente-form-content .segmento .birth-date-button-column ion-button {\n    font-size: 0.86rem;\n    height: 44px;\n    margin: 0;\n    min-width: 0;\n    white-space: nowrap;\n    width: 100% !important;\n  }\n  .cliente-form-content .segmento .birth-date-button-column ion-button::part(native) {\n    padding-inline: 12px;\n  }\n  .cliente-form-content .segmento .licence-expiration-display {\n    color: #17365d;\n    padding: 4px 0;\n  }\n  .cliente-form-content .segmento .licence-expiration-input {\n    --padding-end: 12px;\n    --padding-start: 12px;\n    font-variant-numeric: tabular-nums;\n    min-width: 0;\n    text-align: left !important;\n  }\n  .cliente-form-content .segmento .licence-expiration-input::part(native) {\n    min-width: 0;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-radio-group {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    justify-content: flex-start;\n    padding: 3px 0 8px;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-radio-group ion-item {\n    --background: #f5f8fb;\n    --inner-padding-end: 6px;\n    --min-height: 78px;\n    --padding-start: 6px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: inline-flex !important;\n    flex: 1 1 calc(50% - 3px);\n    margin: 0;\n    min-width: 0;\n    max-width: calc(50% - 3px);\n    width: calc(50% - 3px);\n  }\n  .cliente-form-content .segmento ion-radio-group ion-item::part(native) {\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 78px;\n    overflow: visible;\n    padding-bottom: 7px;\n    padding-top: 7px;\n  }\n  .cliente-form-content .segmento ion-radio-group:has(ion-item:nth-child(3)) ion-item {\n    flex-basis: calc(33.333% - 4px);\n    max-width: calc(33.333% - 4px);\n    width: calc(33.333% - 4px);\n  }\n  .cliente-form-content .segmento ion-radio-group ion-label {\n    color: #315b80 !important;\n    font-size: 0.8rem;\n    font-weight: 700;\n    line-height: 1.15;\n    margin: 0 0 6px !important;\n    padding: 0;\n    text-align: center;\n    white-space: normal;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-radio {\n    flex: 0 0 30px;\n    min-height: 30px;\n    min-width: 30px;\n    margin: 0 !important;\n    overflow: visible;\n    height: 30px;\n    width: 30px;\n  }\n  .cliente-form-content .segmento ion-item.input:has(> ion-radio-group)::part(native) {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .cliente-form-content .segmento ion-item.input:has(> ion-radio-group) > ion-grid {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-item.input ion-col:has(ion-radio-group) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    text-align: left !important;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) {\n    --background: #f5f8fb;\n    --inner-padding-end: 8px;\n    --min-height: 78px;\n    --padding-start: 8px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: inline-flex;\n    margin: 3px;\n    min-width: calc(50% - 8px);\n    width: calc(50% - 8px);\n  }\n  .cliente-form-content .segmento ion-item:has(ion-checkbox)::part(native) {\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 78px;\n    overflow: visible;\n    padding-bottom: 7px;\n    padding-top: 7px;\n  }\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) ion-label {\n    color: #315b80 !important;\n    font-size: 0.8rem;\n    font-weight: 700;\n    line-height: 1.15;\n    margin: 0 0 6px;\n    text-align: center;\n    white-space: normal;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) ion-checkbox {\n    flex: 0 0 26px;\n    height: 26px;\n    margin: 0;\n    min-height: 26px;\n    min-width: 26px;\n    overflow: visible;\n    width: 26px;\n  }\n  .cliente-form-content .segmento ion-accordion,\n  .cliente-form-content .segmento ion-accordion.accordion-expanding,\n  .cliente-form-content .segmento ion-accordion.accordion-expanded {\n    margin: 0;\n    width: 100%;\n  }\n  .cliente-form-content .segmento ion-accordion-group {\n    background: #ffffff;\n    border-radius: 7px;\n    margin: 0 10px;\n    overflow: hidden;\n    width: calc(100% - 20px);\n  }\n  .cliente-form-content .segmento ion-accordion ion-item[slot=header] {\n    --background: #ffffff;\n    --color: #17365d;\n    --min-height: 52px;\n    font-size: 0.88rem;\n    font-weight: 800;\n  }\n  .cliente-form-content .segmento ion-accordion div[slot=content].ion-padding {\n    padding: 12px;\n  }\n  .cliente-form-content .segmento ion-chip:not(.date-siniestro) {\n    border-color: #cbd9e5;\n    color: #315b80;\n    font-size: 0.78rem;\n    min-height: 38px;\n    max-width: 100%;\n    width: auto;\n  }\n  .cliente-form-content .segmento .date-siniestro {\n    background: #f5f8fb;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    height: 44px;\n    margin: 0;\n  }\n  .cliente-form-content .segmento > ion-list > ion-item:not(.input),\n  .cliente-form-content .segmento > ion-item:not(.input) {\n    --background: #ffffff;\n    --border-color: #dce5ed;\n    --min-height: 52px;\n    margin: 0 10px;\n  }\n  .cliente-form-content .segmento > ion-list ion-button,\n  .cliente-form-content .segmento > ion-item ion-button {\n    height: 42px;\n    margin: 6px 0;\n    min-width: 120px;\n    width: auto !important;\n    --border-radius: 5px;\n    font-size: 0.82rem;\n    font-weight: 800;\n    letter-spacing: 0;\n    text-transform: none;\n  }\n  .cliente-form-content .segmento ion-list > br {\n    display: none;\n  }\n  #driverTypeSelect,\n  #parentTypeSelect,\n  #licenceTypeSelect {\n    display: none;\n  }\n  #segmentSignature > ion-grid > ion-row > ion-col {\n    flex: 0 0 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n  #segmentSignature ion-card {\n    border: 1px solid #d8e3ed;\n    border-radius: 7px;\n    box-shadow: none;\n    margin: 8px 10px 14px;\n    width: calc(100% - 20px);\n  }\n  #segmentSignature ion-card img {\n    border: 2px dashed #cbd9e5 !important;\n    margin: 8px !important;\n    width: calc(100% - 16px) !important;\n  }\n  #segmentSignature .text-size-lg {\n    color: #315b80 !important;\n    display: block;\n    font-size: 0.78rem;\n    font-weight: 800;\n    padding: 8px 10px 0 !important;\n    text-transform: uppercase;\n  }\n}\nion-select::part(text) {\n  font-size: 1.1rem;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.modal-fecha-input .modal-wrapper {\n  width: 30%;\n}\n\n.modal-fecha-input .modal-wrapper {\n  height: 30%;\n  width: 90%;\n  border-radius: 15px;\n}\n\nion-spinner:not(.top-spinner) {\n  width: 30px;\n  height: 30px;\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n.chip-firma {\n  position: absolute;\n  right: 8%;\n  bottom: 10%;\n  width: 80%;\n}\n\n.meter {\n  height: 5px;\n  position: relative;\n  background: #f3efe6;\n  overflow: hidden;\n}\n\n.meter span {\n  display: block;\n  height: 100%;\n}\n\n.progress-end {\n  background-color: var(--blueGrayColor);\n  animation: progressBarEnd 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.progress {\n  background-color: var(--blueGrayColor);\n  animation: progressBar infinite 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n@keyframes progressBar {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.required-index {\n  display: none;\n}\n\n.required-missing {\n  border: 2px solid red;\n  border-radius: 30px;\n}\n\n@keyframes progressBarEnd {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-input.custom {\n  text-transform: uppercase !important;\n}\n\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-fab-button :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\n.select-icon {\n  color: var(--blueGrayColor);\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-modal ion-input {\n  text-transform: uppercase;\n}\n\nion-chip:not(.date-siniestro) {\n  width: 25%;\n  height: 40px;\n  text-align: left;\n}\n\n.date-siniestro {\n  width: 100%;\n  height: 60px;\n  text-align: left;\n}\n\nion-avatar img {\n  width: 30px;\n  height: 30px;\n  margin-top: 15px;\n  margin-left: 3px;\n}\n\n.date-label {\n  margin-left: -25px;\n}\n\n.chip-icon {\n  position: absolute;\n  right: 15px;\n}\n\n.chip-label {\n  font-size: 1.3rem;\n}\n\n/*\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n*/", "",{"version":3,"sources":["webpack://./src/app/clientehn/clientehn.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEE;EACE,gBAAA;EACA,oBAAA;EACF,0BAAA;AACF;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,kBAAA;AACJ;;AAEE;EACE,yBAAA;EACA,2CAAA;EACA,kBAAA;EACA,cAAA;AACJ;;AAGE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAAJ;;AAGE;EACE,mBAAA;EACA,yBAAA;AAAJ;;AAGE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AAFJ;;AAIE;EACE,cAAA;EACA,gBAAA;AADJ;;AAIE;EACE,yBAAA;EACA,wCAAA;AADJ;;AAKA;EACI,4BAAA;AAFJ;AAGE;EACE,4BAAA;AADJ;;AAKA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,eAAA;EACA,kBAAA;AAFF;;AAKA;EACE,iBAAA;EACA,6BAAA;EACA,6CAAA;EACA,yDAAA;EACA,YAAA;AAFF;;AAKA;;;;EAIE,mBAAA;EACA,aAAA;EACA,QAAA;AAFF;;AAKA;EACE,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AAFF;;AAKA;;;EAGE,eAAA;AAFF;;AAKA;EACE,yBAAA;EACA,iBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,YAAA;EACA,SAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAFF;;AAKA;;EAEE,oCAAA;EACA,6BAAA;EACA,sCAAA;AAFF;;AAKA;EACE,iCAAA;EACA,2CAAA;EACA,cAAA;EACA,uBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,iBAAA;AAFF;;AAKA;;EAEE,sCAAA;AAFF;;AAKA;EACE,uBAAA;AAFF;;AAKA;EACE,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;AAFF;;AAKA;EACE,uBAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,cAAA;EACA,kBAAA;EACA,eAAA;AAFF;;AAKA;;EAEE,cAAA;EACA,iBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,gBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,eAAA;AAFF;;AAKA;EACE,mBAAA;EACA,yBAAA;EACA,cAAA;AAFF;;AAKA;EACE,mBAAA;EACA,yBAAA;EACA,cAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,yBAAA;AAFF;;AAKA;;EAEE,cAAA;AAFF;;AAKA;EACE,mBAAA;EACA,yBAAA;AAFF;;AAKA;;EAEE,cAAA;AAFF;;AAKA;EACE,mBAAA;EACA,yBAAA;AAFF;;AAKA;;EAEE,cAAA;AAFF;;AAMI;EACE,eAAA;AAHN;;AAOE;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AAvBJ;AAGI;EACE,YAAA;AADN;AAGI;EACE,mBAAA;AADN;AAKI;EACE,WAAA;AAHN;AAMI;EACE,cAAA;AAJN;AAOI;EACE,WAAA;AALN;AASI;EACE,cAAA;AAPN;AAUI;EACE,WAAA;AARN;AAWI;EACE,mBAAA;AATN;;AAeA;EACE,kBAAA;EACA,kBAAA;AAZF;AAaE;EACE,oBAAA;AAXJ;AAYI;EAAS,YAAA;AATb;;AAaA;EACE,YAAA;AAVF;;AAaA;EACE,gBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AAVF;;AAYA;EACE,uBAAA;EACA,WAAA;EACA,mBAAA;EACA,uDAAA;AATF;;AAYA;EACE,wBAAA;EACA,qBAAA;EACA,wCAAA;EACA,kBAAA;EACA,kBAAA;EACA,0BAAA;AATF;;AAYA;EACE,OAAA;EACA,mBAAA;EACA,QAAA;AATF;;AAYA;EACE,iCAAA;EACA,gBAAA;AATF;;AAYA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AATF;;AAYA;;EAEE,gBAAA;EACA,cAAA;AATF;;AAYA;EACE,qBAAA;EACA,0DAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;AATF;;AAYA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AATF;;AAYA;EACE,sBAAA;EACA,6CAAA;EACA,cAAA;EACA,6BAAA;EACA,gBAAA;EACA,WAAA;AATF;;AAYA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,8BAAA;EACA,gBAAA;EACA,kBAAA;AATF;;AAYA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AATF;;AAYA;EACE,cAAA;AATF;;AAYA;EACE,mBAAA;EACA,eAAA;EACA,YAAA;AATF;;AAaA;EACE,eAAA;EACA,YAAA;AAVF;;AAeA;EACE,iBAAA;AAZF;;AAeA;EACE,YAAA;AAZF;;AAeA;EACE,iBAAA;EACA,qBAAA;AAZF;;AAeA;EACE,iBAAA;EACA,qBAAA;AAZF;;AAeA;;EAEE,iCAAA;EACA,cAAA;AAZF;;AAeA;;EAEE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAZF;;AAeA;;EAEE,cAAA;EACA,YAAA;AAZF;;AAeA;EACE,YAAA;EACA,iBAAA;AAZF;;AAeA;EACE,aAAA;AAZF;;AAeA;EACE,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;AAZF;;AAeA;EACE,2CAAA;EACA,cAAA;EACA,WAAA;AAZF;;AAeA;EACE;;IAEE,aAAA;EAZF;AACF;AAeA;EACE;IACE,kBAAA;IACA,sBAAA;EAbF;EAgBA;IACE,aAAA;IACA,iBAAA;IACA,iBAAA;EAdF;EAiBA;IACE,gBAAA;IACA,gBAAA;EAfF;EAkBA;IACE,cAAA;IACA,eAAA;IACA,iBAAA;IACA,WAAA;EAhBF;EAmBA;IACE,yBAAA;IACA,2CAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;IACA,kBAAA;EAjBF;EAoBA;IACE,iCAAA;IACA,2CAAA;IACA,8CAAA;IACA,cAAA;IACA,eAAA;IACA,kBAAA;IACA,kBAAA;IACA,YAAA;EAlBF;EAqBA;IACE,YAAA;IACA,kBAAA;EAnBF;EAsBA;IACE,WAAA;EApBF;EAuBA;IACE,sBAAA;EArBF;EAwBA;IACE,gBAAA;IACA,qBAAA;IACA,mBAAA;EAtBF;EAyBA;IACE,eAAA;IACA,gBAAA;EAvBF;EA0BA;IACE,kBAAA;EAxBF;EA2BA;IACE,WAAA;IACA,YAAA;IACA,wBAAA;EAzBF;EA4BA;IACE,oBAAA;IACA,sBAAA;EA1BF;EA6BA;;;IAGE,aAAA;IACA,gDAAA;IACA,cAAA;IACA,WAAA;EA3BF;EA8BA;;;IAGE,iBAAA;IACA,WAAA;EA5BF;EA+BA;IACE,iBAAA;EA7BF;EAgCA;IACE,YAAA;IACA,WAAA;EA9BF;AACF;AAiCA;EACE;IACE,qBAAA;IACA,kBAAA;IACA,gBAAA;IACA,kBAAA;IACA,2DAAA;EA/BF;EAkCA;;;;;;;IAOE,cAAA;IACA,eAAA;IACA,eAAA;IACA,eAAA;IACA,gBAAA;IACA,WAAA;EAhCF;EAmCA;IACE,mBAAA;IACA,cAAA;IACA,eAAA;IACA,oBAAA;EAjCF;EAoCA;IACE,qBAAA;EAlCF;EAqCA;IACE,uBAAA;IACA,aAAA;IACA,iBAAA;IACA,oBAAA;EAnCF;EAsCA;IACE,cAAA;IACA,8BAAA;IACA,WAAA;EApCF;EAuCA;IACE,mBAAA;IACA,+BAAA;IACA,kBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;IACA,YAAA;IACA,2BAAA;IACA,iBAAA;IACA,eAAA;IACA,oBAAA;IACA,WAAA;EArCF;EAwCA;IACE,yBAAA;EAtCF;EAyCA;IACE,gBAAA;EAvCF;EA0CA;IACE,uBAAA;IACA,eAAA;EAxCF;EA2CA;IACE,qBAAA;IACA,uBAAA;IACA,+BAAA;IACA,yBAAA;IACA,kBAAA;IACA,qBAAA;IACA,gBAAA;IACA,SAAA;IACA,WAAA;EAzCF;EA4CA;IACE,0BAAA;EA1CF;EA6CA;IACE,0BAAA;EA3CF;EA8CA;IACE,cAAA;IACA,eAAA;IACA,SAAA;IACA,eAAA;IACA,gBAAA;EA5CF;EA+CA;IACE,cAAA;IACA,cAAA;IACA,eAAA;IACA,WAAA;EA7CF;EAgDA;;;IAGE,qBAAA;IACA,gBAAA;IACA,8CAAA;IACA,qBAAA;IACA,mBAAA;IACA,qBAAA;IACA,kBAAA;IACA,yBAAA;IACA,kBAAA;IACA,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,WAAA;EA9CF;EAiDA;IACE,qBAAA;IACA,gBAAA;EA/CF;EAkDA;IACE,yBAAA;IACA,6BAAA;IACA,gBAAA;IACA,iBAAA;IACA,gBAAA;IACA,kBAAA;IACA,yBAAA;EAhDF;EAmDA;IACE,mBAAA;EAjDF;EAoDA;IACE,sBAAA;EAlDF;EAqDA;;;;;;IAME,yBAAA;IACA,yBAAA;IACA,0BAAA;IACA,sBAAA;EAnDF;EAsDA;;;IAGE,sBAAA;IACA,0BAAA;IACA,sBAAA;EApDF;EAuDA;;;IAGE,QAAA;EArDF;EAwDA;IACE,mBAAA;IACA,aAAA;IACA,iBAAA;IACA,QAAA;IACA,uBAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,WAAA;EAtDF;EAyDA;IACE,oBAAA;IACA,QAAA;EAvDF;EA0DA;IACE,mBAAA;IACA,mBAAA;IACA,yBAAA;IACA,kBAAA;IACA,aAAA;IACA,yBAAA;IACA,gBAAA;IACA,iBAAA;EAxDF;EA2DA;IACE,2BAAA;IACA,0BAAA;IACA,sBAAA;EAzDF;EA4DA;IACE,kBAAA;IACA,oBAAA;IACA,eAAA;EA1DF;EA6DA;;IAEE,aAAA;EA3DF;EA8DA;IACE,0BAAA;IACA,kBAAA;IACA,UAAA;EA5DF;EA+DA;IACE,oBAAA;IACA,QAAA;EA7DF;EAgEA;IACE,mBAAA;IACA,mBAAA;IACA,yBAAA;IACA,kBAAA;IACA,aAAA;IACA,yBAAA;IACA,gBAAA;IACA,iBAAA;EA9DF;EAiEA;IACE,yBAAA;IACA,yBAAA;IACA,0BAAA;IACA,sBAAA;EA/DF;EAkEA;IACE,kBAAA;IACA,oBAAA;IACA,eAAA;EAhEF;EAmEA;;IAEE,aAAA;EAjEF;EAoEA;IACE,0BAAA;IACA,kBAAA;IACA,UAAA;EAlEF;EAqEA;IACE,aAAA;IACA,QAAA;IACA,gDAAA;EAnEF;EAsEA;;IAEE,mBAAA;IACA,sBAAA;IACA,aAAA;IACA,8BAAA;IACA,SAAA;IACA,YAAA;IACA,iBAAA;IACA,sBAAA;EApEF;EAuEA;;IAEE,SAAA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;EArEF;EAwEA;;;IAGE,cAAA;IACA,SAAA;IACA,gBAAA;EAtEF;EAyEA;IACE,eAAA;EAvEF;EA0EA;IACE,kBAAA;IACA,YAAA;IACA,SAAA;IACA,YAAA;IACA,mBAAA;IACA,sBAAA;EAxEF;EA2EA;IACE,oBAAA;EAzEF;EA4EA;IACE,cAAA;IACA,cAAA;EA1EF;EA6EA;IACE,mBAAA;IACA,qBAAA;IACA,kCAAA;IACA,YAAA;IACA,2BAAA;EA3EF;EA8EA;IACE,YAAA;IACA,WAAA;EA5EF;EA+EA;IACE,mBAAA;IACA,aAAA;IACA,eAAA;IACA,QAAA;IACA,2BAAA;IACA,kBAAA;IACA,WAAA;EA7EF;EAgFA;IACE,qBAAA;IACA,wBAAA;IACA,kBAAA;IACA,oBAAA;IACA,yBAAA;IACA,kBAAA;IACA,+BAAA;IACA,yBAAA;IACA,SAAA;IACA,YAAA;IACA,0BAAA;IACA,sBAAA;EA9EF;EAiFA;IACE,mBAAA;IACA,sBAAA;IACA,uBAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,gBAAA;EA/EF;EAkFA;IACE,+BAAA;IACA,8BAAA;IACA,0BAAA;EAhFF;EAmFA;IACE,yBAAA;IACA,iBAAA;IACA,gBAAA;IACA,iBAAA;IACA,0BAAA;IACA,UAAA;IACA,kBAAA;IACA,mBAAA;IACA,WAAA;EAjFF;EAoFA;IACE,cAAA;IACA,gBAAA;IACA,eAAA;IACA,oBAAA;IACA,iBAAA;IACA,YAAA;IACA,WAAA;EAlFF;EAqFA;IACE,oBAAA;IACA,sBAAA;EAnFF;EAsFA;IACE,cAAA;IACA,WAAA;EApFF;EAuFA;IACE,cAAA;IACA,eAAA;IACA,2BAAA;IACA,WAAA;EArFF;EAwFA;IACE,qBAAA;IACA,wBAAA;IACA,kBAAA;IACA,oBAAA;IACA,yBAAA;IACA,kBAAA;IACA,oBAAA;IACA,WAAA;IACA,0BAAA;IACA,sBAAA;EAtFF;EAyFA;IACE,mBAAA;IACA,sBAAA;IACA,uBAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,gBAAA;EAvFF;EA0FA;IACE,yBAAA;IACA,iBAAA;IACA,gBAAA;IACA,iBAAA;IACA,eAAA;IACA,kBAAA;IACA,mBAAA;IACA,WAAA;EAxFF;EA2FA;IACE,cAAA;IACA,YAAA;IACA,SAAA;IACA,gBAAA;IACA,eAAA;IACA,iBAAA;IACA,WAAA;EAzFF;EA4FA;;;IAGE,SAAA;IACA,WAAA;EA1FF;EA6FA;IACE,mBAAA;IACA,kBAAA;IACA,cAAA;IACA,gBAAA;IACA,wBAAA;EA3FF;EA8FA;IACE,qBAAA;IACA,gBAAA;IACA,kBAAA;IACA,kBAAA;IACA,gBAAA;EA5FF;EA+FA;IACE,aAAA;EA7FF;EAgGA;IACE,qBAAA;IACA,cAAA;IACA,kBAAA;IACA,gBAAA;IACA,eAAA;IACA,WAAA;EA9FF;EAiGA;IACE,mBAAA;IACA,yBAAA;IACA,kBAAA;IACA,YAAA;IACA,SAAA;EA/FF;EAkGA;;IAEE,qBAAA;IACA,uBAAA;IACA,kBAAA;IACA,cAAA;EAhGF;EAmGA;;IAEE,YAAA;IACA,aAAA;IACA,gBAAA;IACA,sBAAA;IACA,oBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,oBAAA;EAjGF;EAoGA;IACE,aAAA;EAlGF;EAqGA;;;IAGE,aAAA;EAnGF;EAsGA;IACE,cAAA;IACA,eAAA;IACA,WAAA;EApGF;EAuGA;IACE,yBAAA;IACA,kBAAA;IACA,gBAAA;IACA,qBAAA;IACA,wBAAA;EArGF;EAwGA;IACE,qCAAA;IACA,sBAAA;IACA,mCAAA;EAtGF;EAyGA;IACE,yBAAA;IACA,cAAA;IACA,kBAAA;IACA,gBAAA;IACA,8BAAA;IACA,yBAAA;EAvGF;AACF;AA0GA;EACE,iBAAA;AAxGF;;AA6GE;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AA1GF;;AA6GA;EACE,2BAAA;EACA,YAAA;AA1GF;;AA+GE;EACE,UAAA;AA5GJ;;AAiHE;EACC,WAAA;EACA,UAAA;EACA,mBAAA;AA9GH;;AAiHA;EACE,WAAA;EACA,YAAA;EACD,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AA9GJ;;AAkHA;EACE,kBAAA;EACE,SAAA;EACA,WAAA;EACA,UAAA;AA/GJ;;AAkHA;EACI,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AA/GJ;;AAkHA;EACI,cAAA;EACA,YAAA;AA/GJ;;AAkHA;EACI,sCAAA;EACA,wCAAA;EACA,yBAAA;AA/GJ;;AAkHA;EACI,sCAAA;EACA,8CAAA;EACA,yBAAA;AA/GJ;;AAkHA;EACE;IAAK,QAAA;EA9GL;EA+GA;IAAO,WAAA;EA5GP;AACF;AA8GA;EACE,aAAA;AA5GF;;AA+GA;EACE,qBAAA;EACA,mBAAA;AA5GF;;AA+GA;EACE;IAAK,WAAA;EA3GL;EA4GA;IAAO,WAAA;EAzGP;AACF;AA2GA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAzGJ;;AA4GA;EACE,kBAAA;EACA,kBAAA;AAzGF;AA0GE;EACE,oBAAA;AAxGJ;AAyGI;EAAS,YAAA;AAtGb;;AA0GA;EACE,oCAAA;AAvGF;;AA0GA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAvGF;;AA0GA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAvGF;;AA0GA;EACE,cAAA;EACA,wBAAA;AAvGF;;AA0GA;EACE,WAAA;AAvGF;;AA0GA;EACE,yBAAA;AAvGF;;AA0GA;EACE,2BAAA;AAvGF;;AA0GA;;EAEE,wBAAA;EAEA,iBAAA;AAxGF;;AA2GA;;EAEE,oCAAA;EACA,wCAAA;AAxGF;;AA4GA;;EAEE,qBAAA;EACA,cAAA;AAzGF;;AA6GE;EACE,yBAAA;AA1GJ;;AA8GA;EACE,UAAA;EACA,YAAA;EACA,gBAAA;AA3GF;;AA8GA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AA3GF;;AA+GE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AA5GJ;;AAgHA;EACE,kBAAA;AA7GF;;AAgHA;EACE,kBAAA;EACA,WAAA;AA7GF;;AAgHA;EACE,iBAAA;AA7GF;;AAgHA;;;;;;;;;CAAA","sourcesContent":["ion-radio {\n    width: 30px;\n    height: 30px;\n  }\n\n  .uso-opcion{\n    margin-left: 5px;\n    --border-radius: 4px;\n  --inner-border-radius: 4px;\n  }\n  \n  ion-radio::part(container) {\n    border-radius: 8px;\n    border: 2px solid #ddd;\n  }\n\n  ion-item{\n    padding-left: 10px;\n  }\n\n  .icono-cerrar{\n    --background: transparent;\n    --background-activated: var(--primaryColor);\n    --box-shadow: none;\n    --color: white;\n    \n  }\n  \n  ion-radio::part(mark) {\n    background: none;\n    transition: none;\n    transform: none;\n    border-radius: 0;\n  }\n  \n  ion-radio.radio-checked::part(container) {\n    background: #7da1c4;\n    border-color: transparent;\n  }\n  \n  ion-radio.radio-checked::part(mark) {\n    width: 6px;\n    height: 10px;\n  \n    border-width: 0px 2px 2px 0px;\n    border-style: solid;\n    border-color: #fff;\n  \n    transform: rotate(45deg);\n  }\n  canvas {\n    border: groove;\n    padding-top: 2px;\n  }\n\n  #d-toolbar{\n    --background: transparent;\n    --ion-color-base: transparent !important;\n    \n  }\n\nion-toolbar{\n    background: white !important;\n  .toolbar-content{\n    background: white !important;\n  }\n}\n\n.cliente-page-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  padding-left: 0;\n  text-align: center;\n}\n\n.cliente-action-footer {\n  background: white;\n  border-top: 1px solid #d9e1e8;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n  padding: 8px 12px calc(8px + env(safe-area-inset-bottom));\n  z-index: 900;\n}\n\n.cliente-action-bar,\n.cliente-fixed-actions,\n.cliente-state-actions,\n.cliente-success-actions {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n\n.cliente-action-bar {\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.cliente-fixed-actions,\n.cliente-state-actions,\n.cliente-success-actions {\n  flex-wrap: wrap;\n}\n\n.cliente-state-actions {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n\n.cliente-success-actions {\n  margin-left: auto;\n}\n\n.cliente-action-footer ion-button {\n  height: 46px;\n  margin: 0;\n  min-width: 112px;\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.cliente-action-footer .cliente-action-button,\n.cliente-action-footer .cliente-secondary-action {\n  --border-color: var(--blueGrayColor);\n  --color: var(--blueGrayColor);\n  color: var(--blueGrayColor) !important;\n}\n\n.cliente-action-footer .cliente-primary-action {\n  --background: var(--primaryColor);\n  --background-activated: var(--primaryColor);\n  --color: white;\n  color: white !important;\n}\n\n.cliente-action-footer ion-icon {\n  color: currentColor;\n  font-size: 1.2rem;\n}\n\n.cliente-action-footer .cliente-action-button ion-icon,\n.cliente-action-footer .cliente-secondary-action ion-icon {\n  color: var(--blueGrayColor) !important;\n}\n\n.cliente-action-footer .cliente-primary-action ion-icon {\n  color: white !important;\n}\n\n#successLabel {\n  --background: var(--blueGrayColor);\n  --color: white;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  height: 46px;\n  padding: 15px;\n}\n\n.coordinate-alert {\n  align-items: flex-start;\n  border-radius: 8px;\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  padding: 10px 12px;\n}\n\n.coordinate-alert ion-icon {\n  flex: 0 0 auto;\n  font-size: 1.35rem;\n  margin-top: 2px;\n}\n\n.coordinate-alert strong,\n.coordinate-alert span {\n  display: block;\n  line-height: 1.25;\n}\n\n.coordinate-alert strong {\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.coordinate-alert span {\n  font-size: 0.86rem;\n  margin-top: 3px;\n}\n\n.coordinate-alert.warning {\n  background: #fff7df;\n  border: 1px solid #f2c96d;\n  color: #87600e;\n}\n\n.coordinate-alert.danger {\n  background: #fff0f0;\n  border: 1px solid #f1a5a5;\n  color: #aa1f1f;\n}\n\n.coordinate-chip-row {\n  row-gap: 8px;\n}\n\n.coordinate-chip {\n  border-radius: 8px;\n  min-height: 58px;\n  padding: 10px 12px;\n}\n\n.coordinate-chip span {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.coordinate-chip strong {\n  display: block;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1.15;\n  overflow-wrap: anywhere;\n}\n\n.coordinate-chip.ok {\n  background: #effaf4;\n  border: 1px solid #9bd7b2;\n}\n\n.coordinate-chip.ok span,\n.coordinate-chip.ok strong {\n  color: #137343;\n}\n\n.coordinate-chip.warning {\n  background: #fff7df;\n  border: 1px solid #f2c96d;\n}\n\n.coordinate-chip.warning span,\n.coordinate-chip.warning strong {\n  color: #87600e;\n}\n\n.coordinate-chip.danger {\n  background: #fff0f0;\n  border: 1px solid #f1a5a5;\n}\n\n.coordinate-chip.danger span,\n.coordinate-chip.danger strong {\n  color: #aa1f1f;\n}\n\n  ion-alert{\n    button{\n      background: red;\n    }\n  }\n    \n  ion-segment {\n    --background: rgb(232, 231, 231);\n    ion-segment-button{\n      color: white;\n    }\n    ion-segment-button::part(indicator-background) {\n      background: #7da1c4;\n    }\n    \n    /* Material Design styles */\n    ion-segment-button.md::part(native) {\n      color: #000;\n    }\n    \n    .segment-button-checked.md::part(native) {\n      color: #7da1c4;\n    }\n    \n    ion-segment-button.md::part(indicator-background) {\n      height: 4px;\n    }\n    \n    /* iOS styles */\n    ion-segment-button.ios::part(native) {\n      color: #7da1c4;\n    }\n    \n    .segment-button-checked.ios::part(native) {\n      color: #fff;\n    }\n    \n    ion-segment-button.ios::part(indicator-background) {\n      border-radius: 20px;\n    }\n  }\n\n\n  \n#button-back{\n  border-radius: 50%;\n  margin-bottom: 9px;\n  ion-fab-button{\n    padding-bottom: 25px;\n    ion-icon{color: white;}\n  }\n}\n\nion-icon{\n  color: black;\n}\n\nion-label{\n  padding-top: 8px;\n  text-overflow: inherit;\n  max-width: 100%;\n  color: #7da1c4;\n}\nion-datetime {\n  --background-rgb: white;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: rgba(gray, 0.3) 0px 10px 15px -3px;\n}\n\nion-modal.birth-date-modal {\n  --backdrop-opacity: 0.48;\n  --border-radius: 12px;\n  --height: min(620px, calc(100vh - 32px));\n  --max-height: 92vh;\n  --max-width: 430px;\n  --width: calc(100% - 12px);\n}\n\nion-modal.birth-date-modal::part(content) {\n  left: 0;\n  margin-inline: auto;\n  right: 0;\n}\n\n.birth-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.birth-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.birth-date-modal ion-button,\n.birth-date-modal ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.birth-date-modal-content {\n  --background: #f4f7fa;\n  --padding-bottom: calc(16px + env(safe-area-inset-bottom));\n  --padding-end: 6px;\n  --padding-start: 6px;\n  --padding-top: 14px;\n}\n\n.birth-date-guidance {\n  color: #526b84;\n  font-size: 0.82rem;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.birth-date-picker {\n  box-sizing: border-box;\n  box-shadow: 0 5px 18px rgba(18, 54, 87, 0.12);\n  margin: 0 auto;\n  max-width: calc(100vw - 24px);\n  overflow: hidden;\n  width: 100%;\n}\n\n.birth-date-result {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  color: #17365d;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding: 10px 12px;\n}\n\n.birth-date-result span {\n  color: #24733e;\n  font-size: 0.76rem;\n  font-weight: 800;\n  text-align: right;\n}\n\n.birth-date-result .minor-driver-warning {\n  color: #c3352b;\n}\n\nion-badge:not(#esMenorLabel){\n  background: #7da1c4;\n  font-size: 1rem;\n  padding: 6px;\n  //width: 130px;\n}\n\n#esMenorLabel{\n  font-size: 1rem;\n  padding: 6px;\n}\n\n\n\n.input-label{\n  font-size: 1.4rem;\n}\n\nion-button:not(#cancelaButton){\n  color: white;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane-cliente{\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\n.cliente-form-toolbar,\n.cliente-segments-toolbar {\n  --background: var(--primaryColor);\n  --color: white;\n}\n\n.cliente-form-toolbar ion-title,\n.cliente-segments-toolbar ion-title {\n  color: white;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-align: center;\n}\n\n.cliente-form-close ion-button,\n.cliente-form-shortcut ion-menu-button {\n  --color: white;\n  color: white;\n}\n\n.cliente-form-close ion-icon {\n  color: white;\n  font-size: 1.7rem;\n}\n\n.cliente-form-floating-close {\n  display: none;\n}\n\n.cliente-form-content {\n  --padding-start: 3%;\n  --padding-end: 3%;\n  --padding-bottom: 96px;\n  font-size: 1rem;\n  text-align: justify;\n  white-space: normal;\n}\n\n.segment-form-body {\n  background: var(--ion-color-light, #f4f5f8);\n  display: block;\n  width: 100%;\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .cliente-form-close,\n  .cliente-form-shortcut {\n    display: none;\n  }\n}\n\n@media (orientation: portrait), (max-width: 899px) {\n  #big-pane-cliente {\n    --side-width: 100%;\n    --side-max-width: 100%;\n  }\n\n  ion-menu.cliente-form-menu {\n    --width: 100%;\n    --min-width: 100%;\n    --max-width: 100%;\n  }\n\n  ion-menu.cliente-form-menu::part(container) {\n    border-radius: 0;\n    box-shadow: none;\n  }\n\n  .cliente-form-floating-close {\n    display: block;\n    margin-top: 8px;\n    margin-right: 8px;\n    z-index: 30;\n  }\n\n  .cliente-form-floating-close ion-fab-button {\n    --background: transparent;//var(--primaryColor);\n    --background-activated: var(--primaryColor);\n    --box-shadow: none;//0 4px 12px rgba(0, 33, 63, 0.28);\n    --color: white;\n    margin-top: 1px;\n    margin-right: -8px;\n  }\n\n  .cliente-form-floating-close-tablet ion-fab-button {\n    --background: var(--primaryColor);\n    --background-activated: var(--primaryColor);\n    --box-shadow: 0 4px 12px rgba(0, 33, 63, 0.28);\n    --color: white;\n    margin-top: 1px;\n    margin-right: -8px;\n    border-radius: 50%;\n    color: white;\n  }\n\n  .cliente-form-floating-close ion-icon {\n    color: white;\n    font-size: 1.45rem;\n  }\n\n  #main {\n    width: 100%;\n  }\n\n  .cliente-segments-toolbar ion-title {\n    padding-inline: 48px 0;\n  }\n\n  .segment-item {\n    min-height: 60px;\n    --padding-start: 18px;\n    --padding-end: 14px;\n  }\n\n  .segment-title {\n    font-size: 1rem;\n    font-weight: 700;\n  }\n\n  .segment-icon {\n    font-size: 1.45rem;\n  }\n\n  .chip-firma {\n    right: 16px;\n    bottom: 96px;\n    width: calc(100% - 32px);\n  }\n\n  .cliente-action-bar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .cliente-fixed-actions,\n  .cliente-state-actions,\n  .cliente-success-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    margin-left: 0;\n    width: 100%;\n  }\n\n  .cliente-state-actions > :only-child,\n  .cliente-success-actions > :only-child,\n  #successLabel {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n\n  .cliente-state-actions .cliente-primary-action {\n    grid-column: 1 / -1;\n  }\n\n  .cliente-action-footer ion-button {\n    min-width: 0;\n    width: 100%;\n  }\n}\n\n@media (max-width: 600px) {\n  .cliente-form-content {\n    --background: #eef3f7;\n    --padding-start: 0;\n    --padding-end: 0;\n    --padding-top: 8px;\n    --padding-bottom: calc(156px + env(safe-area-inset-bottom));\n  }\n\n  .cliente-form-content > ion-grid,\n  .cliente-form-content > ion-grid > ion-row,\n  .cliente-form-content .segmento,\n  .cliente-form-content .segmento > ion-content,\n  .cliente-form-content .segmento ion-list,\n  .cliente-form-content .segmento ion-grid,\n  .cliente-form-content .segmento ion-row {\n    margin-left: 0;\n    margin-right: 0;\n    max-width: none;\n    padding-left: 0;\n    padding-right: 0;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento {\n    background: #eef3f7;\n    flex: 0 0 100%;\n    max-width: 100%;\n    padding-bottom: 32px;\n  }\n\n  .cliente-form-content .segmento:last-child {\n    padding-bottom: 120px;\n  }\n\n  .cliente-form-content .segmento .segment-form-body {\n    background: transparent;\n    min-height: 0;\n    overflow: visible;\n    padding-bottom: 24px;\n  }\n\n  .cliente-form-content .segmento > ion-label {\n    display: block;\n    padding: 0 10px 8px !important;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento > ion-label ion-badge {\n    align-items: center;\n    background: var(--primaryColor);\n    border-radius: 6px;\n    display: flex;\n    font-size: 0.86rem;\n    font-weight: 800;\n    height: 40px;\n    justify-content: flex-start;\n    letter-spacing: 0;\n    padding: 0 14px;\n    text-transform: none;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento > ion-content {\n    --background: transparent;\n  }\n\n  .cliente-form-content .segmento ion-list[inset] {\n    margin-inline: 0;\n  }\n\n  .cliente-form-content .segmento ion-list {\n    background: transparent;\n    padding: 0 10px;\n  }\n\n  .cliente-form-content .segmento ion-item.input {\n    --background: #ffffff;\n    --border-color: #dce5ed;\n    --inner-border-width: 0 0 1px 0;\n    --inner-padding-end: 12px;\n    --min-height: 72px;\n    --padding-start: 12px;\n    --padding-end: 0;\n    margin: 0;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-item.input:first-child {\n    border-radius: 7px 7px 0 0;\n  }\n\n  .cliente-form-content .segmento ion-item.input:last-of-type {\n    border-radius: 0 0 7px 7px;\n  }\n\n  .cliente-form-content .segmento ion-item.input ion-col {\n    margin-left: 0;\n    max-width: 100%;\n    offset: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .cliente-form-content .segmento ion-item.input ion-col:not([size=\"12\"]) {\n    flex: 0 0 100%;\n    margin-left: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-input,\n  .cliente-form-content .segmento ion-select,\n  .cliente-form-content .segmento ion-textarea {\n    --background: #f5f8fb;\n    --color: #17365d;\n    --highlight-color-focused: var(--primaryColor);\n    --padding-bottom: 8px;\n    --padding-end: 10px;\n    --padding-start: 10px;\n    --padding-top: 8px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    font-size: 0.92rem;\n    min-height: 42px;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-input[readonly] {\n    --background: #edf2f6;\n    --color: #526b84;\n  }\n\n  .cliente-form-content .segmento ion-item.input ion-grid > ion-row:first-child {\n    color: #617b94 !important;\n    font-size: 0.74rem !important;\n    font-weight: 800;\n    letter-spacing: 0;\n    line-height: 1.2;\n    padding: 8px 0 5px;\n    text-transform: uppercase;\n  }\n\n  .cliente-form-content .segmento ion-item.input ion-grid > ion-row:not(:first-child) {\n    padding-bottom: 8px;\n  }\n\n  .cliente-form-content .segmento ion-select {\n    float: none !important;\n  }\n\n  .cliente-form-content .segmento .insured-email-column,\n  .cliente-form-content .segmento .accident-date-column,\n  .cliente-form-content .segmento .driver-type-select-column,\n  .cliente-form-content .segmento .birth-date-button-column,\n  .cliente-form-content .segmento .licence-expiration-display,\n  .cliente-form-content .segmento .licence-expiration-input-column {\n    flex: 0 0 100% !important;\n    margin-left: 0 !important;\n    max-width: 100% !important;\n    width: 100% !important;\n  }\n\n  .cliente-form-content .segmento .insured-email-column ion-input,\n  .cliente-form-content .segmento .accident-date-column ion-badge,\n  .cliente-form-content .segmento .licence-expiration-input-column ion-input {\n    box-sizing: border-box;\n    max-width: none !important;\n    width: 100% !important;\n  }\n\n  .cliente-form-content .segmento .accident-date-row,\n  .cliente-form-content .segmento .birth-date-row,\n  .cliente-form-content .segmento .licence-expiration-row {\n    gap: 8px;\n  }\n\n  .cliente-form-content .segmento .accident-date-badge {\n    align-items: center;\n    display: flex;\n    font-size: 0.9rem;\n    gap: 8px;\n    justify-content: center;\n    min-height: 42px;\n    padding: 8px 12px;\n    white-space: normal;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento .driver-type-row {\n    align-items: stretch;\n    gap: 6px;\n  }\n\n  .cliente-form-content .segmento .driver-type-display {\n    align-items: center;\n    background: #edf2f6;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: flex;\n    flex: 1 1 auto !important;\n    min-height: 42px;\n    padding: 8px 10px;\n  }\n\n  .cliente-form-content .segmento .driver-type-select-column {\n    flex-basis: 48px !important;\n    max-width: 48px !important;\n    width: 48px !important;\n  }\n\n  .cliente-form-content .segmento .driver-type-select {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    min-width: 48px;\n  }\n\n  .cliente-form-content .segmento .driver-type-select::part(text),\n  .cliente-form-content .segmento .driver-type-select::part(placeholder) {\n    display: none;\n  }\n\n  .cliente-form-content .segmento .driver-type-select::part(icon) {\n    color: var(--primaryColor);\n    font-size: 1.35rem;\n    opacity: 1;\n  }\n\n  .cliente-form-content .segmento .compact-choice-row {\n    align-items: stretch;\n    gap: 6px;\n  }\n\n  .cliente-form-content .segmento .compact-choice-display {\n    align-items: center;\n    background: #edf2f6;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: flex;\n    flex: 1 1 auto !important;\n    min-height: 42px;\n    padding: 8px 10px;\n  }\n\n  .cliente-form-content .segmento .compact-choice-select-column {\n    flex: 0 0 48px !important;\n    margin-left: 0 !important;\n    max-width: 48px !important;\n    width: 48px !important;\n  }\n\n  .cliente-form-content .segmento .compact-choice-select {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    min-width: 48px;\n  }\n\n  .cliente-form-content .segmento .compact-choice-select::part(text),\n  .cliente-form-content .segmento .compact-choice-select::part(placeholder) {\n    display: none;\n  }\n\n  .cliente-form-content .segmento .compact-choice-select::part(icon) {\n    color: var(--primaryColor);\n    font-size: 1.35rem;\n    opacity: 1;\n  }\n\n  .cliente-form-content .segmento .birth-date-displays {\n    display: grid;\n    gap: 8px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .cliente-form-content .segmento .birth-date-chip,\n  .cliente-form-content .segmento .birth-age-chip {\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    min-width: 0;\n    overflow: visible;\n    width: 100% !important;\n  }\n\n  .cliente-form-content .segmento .birth-date-chip ion-label:not(.date-label),\n  .cliente-form-content .segmento .birth-age-chip ion-label:not(.date-label){\n    margin: 0;\n    overflow: visible;\n    text-overflow: clip;\n    white-space: nowrap;\n  }\n\n  .cliente-form-content .segmento .birth-date-chip ion-avatar,\n  .cliente-form-content .segmento .birth-date-chip ion-icon,\n  .cliente-form-content .segmento .birth-age-chip ion-icon {\n    flex: 0 0 auto;\n    margin: 0;\n    position: static;\n  }\n\n  .birth-date-chip{\n    padding-left: 0;\n  }\n\n  .cliente-form-content .segmento .birth-date-button-column ion-button {\n    font-size: 0.86rem;\n    height: 44px;\n    margin: 0;\n    min-width: 0;\n    white-space: nowrap;\n    width: 100% !important;\n  }\n\n  .cliente-form-content .segmento .birth-date-button-column ion-button::part(native) {\n    padding-inline: 12px;\n  }\n\n  .cliente-form-content .segmento .licence-expiration-display {\n    color: #17365d;\n    padding: 4px 0;\n  }\n\n  .cliente-form-content .segmento .licence-expiration-input {\n    --padding-end: 12px;\n    --padding-start: 12px;\n    font-variant-numeric: tabular-nums;\n    min-width: 0;\n    text-align: left !important;\n  }\n\n  .cliente-form-content .segmento .licence-expiration-input::part(native) {\n    min-width: 0;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-radio-group {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    justify-content: flex-start;\n    padding: 3px 0 8px;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-radio-group ion-item {\n    --background: #f5f8fb;\n    --inner-padding-end: 6px;\n    --min-height: 78px;\n    --padding-start: 6px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: inline-flex !important;\n    flex: 1 1 calc(50% - 3px);\n    margin: 0;\n    min-width: 0;\n    max-width: calc(50% - 3px);\n    width: calc(50% - 3px);\n  }\n\n  .cliente-form-content .segmento ion-radio-group ion-item::part(native) {\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 78px;\n    overflow: visible;\n    padding-bottom: 7px;\n    padding-top: 7px;\n  }\n\n  .cliente-form-content .segmento ion-radio-group:has(ion-item:nth-child(3)) ion-item {\n    flex-basis: calc(33.333% - 4px);\n    max-width: calc(33.333% - 4px);\n    width: calc(33.333% - 4px);\n  }\n\n  .cliente-form-content .segmento ion-radio-group ion-label {\n    color: #315b80 !important;\n    font-size: 0.8rem;\n    font-weight: 700;\n    line-height: 1.15;\n    margin: 0 0 6px !important;\n    padding: 0;\n    text-align: center;\n    white-space: normal;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-radio {\n    flex: 0 0 30px;\n    min-height: 30px;\n    min-width: 30px;\n    margin: 0 !important;\n    overflow: visible;\n    height: 30px;\n    width: 30px;\n  }\n\n  .cliente-form-content .segmento ion-item.input:has(> ion-radio-group)::part(native) {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .cliente-form-content .segmento ion-item.input:has(> ion-radio-group) > ion-grid {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-item.input ion-col:has(ion-radio-group) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    text-align: left !important;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) {\n    --background: #f5f8fb;\n    --inner-padding-end: 8px;\n    --min-height: 78px;\n    --padding-start: 8px;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    display: inline-flex;\n    margin: 3px;\n    min-width: calc(50% - 8px);\n    width: calc(50% - 8px);\n  }\n\n  .cliente-form-content .segmento ion-item:has(ion-checkbox)::part(native) {\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 78px;\n    overflow: visible;\n    padding-bottom: 7px;\n    padding-top: 7px;\n  }\n\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) ion-label {\n    color: #315b80 !important;\n    font-size: 0.8rem;\n    font-weight: 700;\n    line-height: 1.15;\n    margin: 0 0 6px;\n    text-align: center;\n    white-space: normal;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-item:has(ion-checkbox) ion-checkbox {\n    flex: 0 0 26px;\n    height: 26px;\n    margin: 0;\n    min-height: 26px;\n    min-width: 26px;\n    overflow: visible;\n    width: 26px;\n  }\n\n  .cliente-form-content .segmento ion-accordion,\n  .cliente-form-content .segmento ion-accordion.accordion-expanding,\n  .cliente-form-content .segmento ion-accordion.accordion-expanded {\n    margin: 0;\n    width: 100%;\n  }\n\n  .cliente-form-content .segmento ion-accordion-group {\n    background: #ffffff;\n    border-radius: 7px;\n    margin: 0 10px;\n    overflow: hidden;\n    width: calc(100% - 20px);\n  }\n\n  .cliente-form-content .segmento ion-accordion ion-item[slot=\"header\"] {\n    --background: #ffffff;\n    --color: #17365d;\n    --min-height: 52px;\n    font-size: 0.88rem;\n    font-weight: 800;\n  }\n\n  .cliente-form-content .segmento ion-accordion div[slot=\"content\"].ion-padding {\n    padding: 12px;\n  }\n\n  .cliente-form-content .segmento ion-chip:not(.date-siniestro) {\n    border-color: #cbd9e5;\n    color: #315b80;\n    font-size: 0.78rem;\n    min-height: 38px;\n    max-width: 100%;\n    width: auto;\n  }\n\n  .cliente-form-content .segmento .date-siniestro {\n    background: #f5f8fb;\n    border: 1px solid #d8e3ed;\n    border-radius: 5px;\n    height: 44px;\n    margin: 0;\n  }\n\n  .cliente-form-content .segmento > ion-list > ion-item:not(.input),\n  .cliente-form-content .segmento > ion-item:not(.input) {\n    --background: #ffffff;\n    --border-color: #dce5ed;\n    --min-height: 52px;\n    margin: 0 10px;\n  }\n\n  .cliente-form-content .segmento > ion-list ion-button,\n  .cliente-form-content .segmento > ion-item ion-button {\n    height: 42px;\n    margin: 6px 0;\n    min-width: 120px;\n    width: auto !important;\n    --border-radius: 5px;\n    font-size: 0.82rem;\n    font-weight: 800;\n    letter-spacing: 0;\n    text-transform: none;\n  }\n\n  .cliente-form-content .segmento ion-list > br {\n    display: none;\n  }\n\n  #driverTypeSelect,\n  #parentTypeSelect,\n  #licenceTypeSelect {\n    display: none;\n  }\n\n  #segmentSignature > ion-grid > ion-row > ion-col {\n    flex: 0 0 100%;\n    max-width: 100%;\n    width: 100%;\n  }\n\n  #segmentSignature ion-card {\n    border: 1px solid #d8e3ed;\n    border-radius: 7px;\n    box-shadow: none;\n    margin: 8px 10px 14px;\n    width: calc(100% - 20px);\n  }\n\n  #segmentSignature ion-card img {\n    border: 2px dashed #cbd9e5 !important;\n    margin: 8px !important;\n    width: calc(100% - 16px) !important;\n  }\n\n  #segmentSignature .text-size-lg {\n    color: #315b80 !important;\n    display: block;\n    font-size: 0.78rem;\n    font-weight: 800;\n    padding: 8px 10px 0 !important;\n    text-transform: uppercase;\n  }\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n  //color: var(--blueGrayColor);\n}\n\n::ng-deep {\n  .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n}\n.alert-wrapper{\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.modal-fecha-input\n{ \n  .modal-wrapper{\n    width: 30%;\n  }\n}\n\n.modal-fecha-input{\n  .modal-wrapper{\n   height: 30%;\n   width: 90%;\n   border-radius: 15px;\n }\n}\nion-spinner:not(.top-spinner){\n  width: 30px;\n  height: 30px;\n\tposition: fixed;\n    top: 28%;\n    left: 40%;\n    z-index: 999;\n    width: 20%;\n    height: 20%;\n\t//background-color: #00213f;\n}\n\n.chip-firma{\n  position: absolute;\n    right: 8%;\n    bottom: 10%;\n    width: 80%;\n}\n\n.meter { \n    height: 5px;\n    position: relative;\n    background: #f3efe6;\n    overflow: hidden;\n}\n\n.meter span {\n    display: block;\n    height: 100%;\n}\n\n.progress-end {\n    background-color: var(--blueGrayColor);\n    animation: progressBarEnd 3s ease-in-out;\n    animation-fill-mode:both; \n}\n\n.progress {\n    background-color: var(--blueGrayColor);\n    animation: progressBar infinite 3s ease-in-out;\n    animation-fill-mode:both; \n}\n\n@keyframes progressBar {\n  0% { width: 0; }\n  100% { width: 100%; }\n}\n\n.required-index{\n  display: none;\n}\n\n.required-missing{\n  border: 2px solid red;\n  border-radius: 30px;\n}\n\n@keyframes progressBarEnd {\n  0% { width: 100%; }\n  100% { width: 100%; }\n}\n\n#spinFooter{\n\tposition: fixed;\n    background: black;\n    opacity: 0.6;\n    height: 100vh;\n    width: 100vw;\n    z-index: 900;\n    bottom: 0;\n}\n\n#button-back{\n  border-radius: 50%;\n  margin-bottom: 9px;\n  ion-fab-button{\n    padding-bottom: 25px;\n    ion-icon{color: white;}\n  }\n}\n\nion-input.custom {\n  text-transform: uppercase !important;\n}\n\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-fab-button :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\n.select-label{\n  text-transform: uppercase;\n}\n\n.select-icon{\n  color: var(--blueGrayColor);\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot='header'],\nion-accordion.accordion-collapsed ion-item[slot='header'] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n\n}\n\nion-accordion.accordion-expanding ion-item[slot='header'],\nion-accordion.accordion-expanded ion-item[slot='header'] {\n  --background: #7da1c4;//var(--ion-color-primary);\n  --color: white;//var(--ion-color-primary-contrast);\n}\n\nion-modal{\n  ion-input{\n    text-transform: uppercase;\n  }\n}\n\nion-chip:not(.date-siniestro){\n  width: 25%;\n  height: 40px;\n  text-align: left;\n}\n\n.date-siniestro{\n  width: 100%;\n  height: 60px;\n  text-align: left;\n}\n\nion-avatar{\n  img{\n    width: 30px;\n    height: 30px;\n    margin-top: 15px;\n    margin-left: 3px;\n  }\n}\n\n.date-label{\n  margin-left: -25px;\n}\n\n.chip-icon{\n  position: absolute;\n  right: 15px;\n}\n\n.chip-label{\n  font-size: 1.3rem;\n}\n \n/*\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n*/\n\n \n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38002:
/*!**********************************************************!*\
  !*** ./src/app/clientehn/clientehn.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"cliente-page-title\">Atención # {{idAtencion}} <br>- {{miMoneda}}</ion-title>\n    <input class=\"required-index\" value=\"40\">\n  </ion-toolbar>\n</ion-header>\n<ion-split-pane id=\"big-pane-nulls\" contentId=\"main-nulls\">\n  <div class=\"ion-page\" id=\"main-nulls\"></div>\n</ion-split-pane>\n<ion-split-pane id=\"big-pane-cliente\" when=\"(min-width: 900px) and (orientation: landscape)\" contentId=\"main\">\n  <ion-menu id=\"ele\" menuId=\"cliente-form-menu\" contentId=\"main\" type=\"overlay\" class=\"cliente-form-menu\">\n    <ion-header>\n      <ion-toolbar class=\"cliente-form-toolbar\">\n        <ion-title>{{segmentoTitulo || 'Formulario del cliente'}}</ion-title>\n        <ion-buttons slot=\"end\" class=\"cliente-form-close\">\n          <ion-button aria-label=\"Cerrar formulario\" (click)=\"closeClientForm()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding cliente-form-content\" id=\"segmentsContent\">\n      <ion-fab slot=\"fixed\" vertical=\"top\" horizontal=\"end\" [ngClass]=\"isTablet == true ? 'cliente-form-floating-close-tablet' : 'cliente-form-floating-close'\">\n        <ion-fab-button size=\"small\" aria-label=\"Cerrar formulario\" (click)=\"closeClientForm()\"\n        >\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n      <ion-grid>\n        <ion-row>\n          \n\n          <ion-col class=\"segmento\" id=\"segmentCoordinates\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge style=\"color: white;\">\n                Coordenadas\n              </ion-badge>\n            </ion-label>\n\n            <ion-accordion-group [multiple]=\"true\" [value]=\"['first', 'second', 'third']\">\n              <ion-accordion class=\"acordion\" value=\"first\">\n                <ion-item slot=\"header\">\n                  <ion-label>Uso del servicio</ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item  class=\"ion-no-padding  input\">\n                      <ion-grid>\n                        <ion-row size=\"12\" style=\"color: var(--blueGrayColor);font-size:1rem;\">\n                          El asegurado utilizó póliza?\n                            </ion-row>\n                        <ion-row>\n                          <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                            <ion-radio-group id=\"usoRadioGroup\" (ionChange)=\"utilizacionAsistencia($event)\" class=\"required-data\">\n                              \n                              <ion-item lines=\"none\" style=\"display: inline-block;\">\n                                <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                                <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                              </ion-item>\n                              <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                                <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                                <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                              </ion-item>\n                            </ion-radio-group>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </ion-item>\n                    \n                  </ion-list>\n                </div>\n\n              </ion-accordion>\n              <ion-accordion class=\"acordion\" value=\"second\">\n                <ion-item slot=\"header\">\n                  <ion-label>Posicionamiento</ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ion-grid>\n                    <ion-row *ngIf=\"coordinateAlertState !== 'ok'\">\n                      <ion-col size=\"12\">\n                        <div class=\"coordinate-alert\" [ngClass]=\"coordinateAlertState\">\n                          <ion-icon [name]=\"coordinateAlertState === 'danger' ? 'alert-circle' : 'warning'\"></ion-icon>\n                          <div>\n                            <strong>{{coordinateAlertTitle}}</strong>\n                            <span>{{coordinateAlertMessage}}</span>\n                          </div>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row class=\"coordinate-chip-row\">\n                      <ion-col size=\"12\" size-md=\"6\">\n                        <div class=\"coordinate-chip\" [ngClass]=\"coordinateAlertState\">\n                          <span>Latitud</span>\n                          <strong>{{clienteLatitud || 'No disponible'}}</strong>\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"12\" size-md=\"6\">\n                        <div class=\"coordinate-chip\" [ngClass]=\"coordinateAlertState\">\n                          <span>Longitud</span>\n                          <strong>{{clienteLongitud || 'No disponible'}}</strong>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </ion-accordion>\n              <ion-accordion class=\"acordion\" value=\"third\">\n                <ion-item slot=\"header\">\n                  <ion-label>Ubicación</ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\">\n                  <strong>\n                    SINIESTRO OCURRIDO EN LA REGIÓN DE {{miPaisNombre}}\n                  </strong>\n\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        LOCALIDAD DE {{miPaisLocalidad}}, {{miPaisLocalidadSub}}\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group>\n          </ion-col>\n    \n          <ion-col class=\"segmento\" id=\"segmentAfiliated\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Datos Asegurado\n              </ion-badge>\n            </ion-label>\n    \n            <div class=\"segment-form-body\">\n              <ion-list [inset]=\"true\">\n                \n                <ion-item class=\"ion-no-padding  input required-data\">\n                  <input class=\"required-index\" value=\"1\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Asegurado Ó Empresa\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input class=\"custom\" *ngIf=\"laExpediente[0].Cliente != null\" [(ngModel)]=\"laExpediente[0].Cliente\" readonly></ion-input>\n                        <ion-input class=\"custom\" *ngIf=\"laExpediente[0].Cliente == null || laExpediente[0].Cliente == ''\" type=\"text\" \n                        (ionChange)=\"entraNombreAsegurado($event)\" [(ngModel)]=\"laExpediente[0].Cliente\"></ion-input>\n                        \n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>                  \n                </ion-item>\n                <ion-item class=\"ion-no-padding  input required-data\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Identidad Asegurado\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"identidadAsegurado\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input required-data\">\n                  <input class=\"required-index\" value=\"3\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Póliza\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].PolizaExterna.split('-')[1]\" (ionChange)=\"entraPolizaConductor($event)\" readonly></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input required-data\">\n                  <input class=\"required-index\" value=\"4\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Dirección correspondencia\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input class=\"custom\" type=\"text\" [(ngModel)]=\"cliente.DireccionEnvioCorrespondencia\" (ionChange)=\"entraDireccionConductorCorrespondencia($event)\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding  input required-data\">\n                  \n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Teléfono\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"number\" [(ngModel)]=\"cliente.TelefonFijo\" (ionChange)=\"entraTelefonoAsegurado($event)\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Celular\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input id=\"celularAsegurado\" type=\"number\" [(ngModel)]=\"cliente.Celular\" (ionChange)=\"entraCelularAsegurado($event)\" class=\"required-data\"></ion-input>\n                        \n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Correo electrónico\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\" class=\"insured-email-column\">\n                        <ion-input type=\"email\" [(ngModel)]=\"cliente.CorreoElectronico\" (ionChange)=\"entraCorreoConductor($event)\" class=\"required-data custom\"></ion-input>\n                        <input class=\"required-index\" value=\"7\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Dirección del siniestro\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input class=\"custom\" type=\"text\" [(ngModel)]=\"laExpediente[0].Direccion\" (ionChange)=\"entraDireccion($event)\" class=\"required-data\"></ion-input>\n                        \n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Fecha y hora del siniestro\n                    </ion-row>\n                    <ion-row style=\"padding-top: 6px;\" class=\"accident-date-row\">\n                      <ion-col size=\"12\" class=\"accident-date-column\">\n                        <ion-badge style=\"margin-top: 2.5px;\" class=\"required-data accident-date-badge\">{{formateadaSiniestro}} <small>{{horaSiniestro}}</small> </ion-badge>\n                        <input class=\"required-index\" value=\"9\">\n                        <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                \n                <ion-item style=\"color: white;height: 3vh;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <br><br><br><br><br><br>\n                </ion-item>\n                <ion-item lines=\"none\"></ion-item>\n              </ion-list>\n              <ion-grid style=\"color: #f7f7f7;\">\n                <ion-row>\n                  <ion-col size=\"12\">           ...</ion-col>\n                </ion-row>\n              </ion-grid>\n              <br><br><br><br><br><br>\n            </div>\n            \n          </ion-col>\n    \n          <ion-col class=\"segmento\" id=\"segmentVehicle\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Datos Asegurado Vehículo\n              </ion-badge>\n            </ion-label>\n    \n            <div class=\"segment-form-body\">\n            <ion-list [inset]=\"true\">\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Marca\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].Marca != null\" readonly [value]=\"laExpediente[0].Marca\"></ion-input>\n                      <ion-select *ngIf=\"laExpediente[0].Marca == null\" class=\"text-size-xs required-data\" (ionChange)=\"seleccionarMarca($event)\" [(ngModel)]=\"laExpediente[0].Marca\" multiple=\"false\" >\n                        <ion-select-option *ngFor=\"let marca of marcasVehiculos\"  [value]=\"marca.id\">{{marca.nombre}}\n                        </ion-select-option>\n                      </ion-select>\n                      <input class=\"required-index\" value=\"10\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Modelo\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].Modelo != null\" readonly [value]=\"laExpediente[0].Modelo\"></ion-input>\n                      <ion-select *ngIf=\"laExpediente[0].Modelo == null\" class=\"text-size-xs required-data\" [(ngModel)]=\"laExpediente[0].Modelo\" multiple=\"false\" (ionChange)=\"seleccionarModelo($event)\">\n                        <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\n                        <ion-select-option *ngFor=\"let modelo of modelosMarca\"  [value]=\"modelo\">{{modelo}}\n                        </ion-select-option>\n                      </ion-select>\n                      <input class=\"required-index\" value=\"11\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Año\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].Year != null\" readonly [value]=\"laExpediente[0].Year\"></ion-input>\n                      <ion-input *ngIf=\"laExpediente[0].Year == null\" [maskito]=\"yearMask\" [maskitoElement]=\"predicateCliente\" [(ngModel)]=\"laExpediente[0].Year\" (ionChange)=\"entrarAnio($event)\"\n                      class=\"required-data\"></ion-input>\n                      <input class=\"required-index\" value=\"12\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Motor No.\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].Motor != null\" readonly [value]=\"laExpediente[0].Motor\"></ion-input>\n                      <ion-input *ngIf=\"laExpediente[0].Motor == null\" type=\"text\" [(ngModel)]=\"laExpediente[0].Motor\" (ionChange)=\"entrarMotor($event)\"\n                      class=\"required-data\"></ion-input>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Chasis\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].Chasis != null\" readonly [value]=\"laExpediente[0].Chasis\"></ion-input>\n                      <ion-input *ngIf=\"laExpediente[0].Chasis == null || laExpediente[0].Chasis == '' || laExpediente[0].Chasis == 'N/D'\" type=\"text\" [(ngModel)]=\"laExpediente[0].Chasis\"\n                      (ionChange)=\"entrarChasis($event)\" class=\"required-data\"></ion-input>\n                      <input class=\"required-index\" value=\"14\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Placa\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input *ngIf=\"laExpediente[0].NumeroPlaca != null\" readonly [value]=\"laExpediente[0].NumeroPlaca\"></ion-input>\n                      <ion-input *ngIf=\"laExpediente[0].NumeroPlaca == null\" type=\"text\" [(ngModel)]=\"laExpediente[0].NumeroPlaca\"\n                      (ionChange)=\"entrarPlaca($event)\" class=\"required-data\"></ion-input>\n                      <input class=\"required-index\" value=\"15\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item  class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    Blindado?\n                    </ion-row>\n                  <ion-row>\n                    <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                      <ion-radio-group [(ngModel)]=\"dataProcess.Blindado\" (ngModelChange)=\"esBlindado($event)\" >\n                        <ion-item lines=\"none\" style=\"display: inline-block;\">\n                          <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                          <ion-radio class=\"uso-opcion\" [value]=\"2\"></ion-radio>\n                        </ion-item>\n                        <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                          <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                          <ion-radio class=\"uso-opcion\" [value]=\"1\"></ion-radio>\n                        </ion-item>\n                      </ion-radio-group>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                  \n              </ion-item>\n\n              <ion-item class=\"ion-no-padding  input\">\n                <ion-grid>\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                    No. de unidad\n                    </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                      <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].NoUnidad\" (ionChange)=\"entrarUnidad($event)\" class=\"required-data custom\"></ion-input>\n                      <input class=\"required-index\" value=\"16\">\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-grid style=\"color: #f7f7f7;\">\n                <ion-row>\n                  <ion-col size=\"12\">Ajustadores Por Salud</ion-col>\n                </ion-row>\n              </ion-grid>\n              <br><br><br><br><br><br>\n            </ion-list>\n            \n          </div>\n          </ion-col>\n\n          <ion-col class=\"segmento\" id=\"segmentDriver\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge color=\"primary\">\n                Datos Asegurado Conductor\n              </ion-badge>\n            </ion-label>\n    \n            <div class=\"segment-form-body\">\n            <ion-list [inset]=\"true\">\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Conducido por \n                  <ion-chip id=\"driverTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\n                    Seleccionar\n                  </ion-chip>\n                </ion-row>\n                <ion-row class=\"driver-type-row\">\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label driver-type-display\">{{elTipoDeConductor}}</ion-col>\n                    <ion-col size=\"3\" class=\"driver-type-select-column\">\n                      <ion-select class=\"driver-type-select\" [(ngModel)]=\"laExpediente[0].ConducidoPor\" multiple=\"false\"\n                        (ionChange)=\"seleccionarTipoConductor($event)\" interface=\"alert\"\n                        [interfaceOptions]=\"driverTypeSelectOptions\" okText=\"Seleccionar\" cancelText=\"Cancelar\"\n                        toggleIcon=\"chevron-down-outline\" placeholder=\"Seleccionar\">\n                      <ion-select-option *ngFor=\"let tipoC of tipoConductor\" [value]=\"tipoC.Id\" >{{tipoC.TipoConductor}}</ion-select-option>\n                    </ion-select>\n                    </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Nombre y Apellido\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input [hidden]=\"conductorEsAfiliado === false\" type=\"text\" [(ngModel)]=\"laExpediente[0].NombreConductor\" class=\"required-data select-label\"></ion-input>\n                    <input class=\"required-index\" value=\"17\">\n                    <ion-input [hidden]=\"conductorEsAfiliado === true\" type=\"text\" (ionChange)=\"entraNombreConductor($event)\" [(ngModel)]=\"daNombreConductor\" class=\"required-data select-label\"></ion-input>\n                    <input class=\"required-index\" value=\"18\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Número de identidad\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" [(ngModel)]=\"identidadDelCliente\" type=\"text\" class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"19\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" [(ngModel)]=\"daIdentidadConductor\" type=\"text\" (ionChange)=\"entraIdentidadConductor($event)\"\n                    class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"20\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">Fecha de nacimiento</ion-row>\n                <ion-row style=\"padding-top: 6px;\" class=\"birth-date-row\">\n                  <ion-col size=\"12\" class=\"birth-date-displays\">\n                    <ion-chip class=\"birth-date-chip\">\n                      <ion-avatar>\n                        <img src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\n                      </ion-avatar>\n                      <ion-label class=\"date-label\">{{formateadaNacimiento}}</ion-label>\n                      <ion-icon name=\"calendar\" class=\"chip-icon\"></ion-icon>\n                    </ion-chip>\n                    <input class=\"required-index\" value=\"21\">\n                    <ion-chip class=\"birth-age-chip\" [color]=\"esMenor == true ? 'danger' : ''\">\n                      <ion-icon name=\"hourglass\" style=\"color: var(--blueGrayColor);\"></ion-icon>\n                      <ion-label>{{edad}} años</ion-label>\n                      <ion-icon name=\"time\" class=\"chip-icon\"></ion-icon>\n                    </ion-chip>\n                  </ion-col>\n                  <ion-col size=\"12\" class=\"birth-date-button-column\">\n                    <ion-button id=\"open-modal-fecha-nacimiento\" expand=\"block\" (click)=\"modalFechaNacimiento.present()\">Seleccionar Fecha</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Tipo de parentesco\n                  <ion-chip id=\"parentTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\n                    Seleccionar\n                  </ion-chip>\n                </ion-row>\n                <ion-row class=\"compact-choice-row\">\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label compact-choice-display\">{{elTipoDeParentesco}}</ion-col>\n                    <ion-col size=\"3\" class=\"compact-choice-select-column\">\n                      <ion-select class=\"text-size-xs compact-choice-select\" [(ngModel)]=\"elTipoParentesco\" multiple=\"false\"\n                      (ionChange)=\"getElTipoParentesco($event)\" interface=\"alert\"\n                      [interfaceOptions]=\"relationshipSelectOptions\" okText=\"Seleccionar\" cancelText=\"Cancelar\"\n                      toggleIcon=\"chevron-down-outline\" placeholder=\"Seleccionar\">\n                      <ion-select-option *ngFor=\"let parentesco of tipoParentescos\" [value]=\"parentesco.CODIGO\" class=\"required-data\">\n                        {{parentesco.DESCRIPCION}}\n                        <ion-input #parentescoId [hidden]=\"true\" [value]=\"parentesco.Id\"></ion-input>\n                        <ion-input #parentescoDescripcion [hidden]=\"true\" [value]=\"parentesco.DESCRIPCION\"></ion-input>\n                      </ion-select-option>\n                      \n                    </ion-select>\n                    <input class=\"required-index\" value=\"22\">\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Tipo de licencia\n                  <ion-chip id=\"licenceTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 2.75%; font-size: 1rem;\n                    color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\n                    Seleccionar\n                  </ion-chip>\n                </ion-row>\n                <ion-row class=\"compact-choice-row\">\n                  <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\" class=\"select-label compact-choice-display\">{{elTipoDeLicencia}}</ion-col>\n                    <ion-col size=\"3\" class=\"compact-choice-select-column\">\n                      <ion-select class=\"text-size-xs compact-choice-select\" [(ngModel)]=\"laExpediente[0].TipoLicencia\" multiple=\"false\"\n                      (ionChange)=\"entraTipoLicencia($event)\" interface=\"alert\"\n                      [interfaceOptions]=\"licenceTypeSelectOptions\" okText=\"Seleccionar\" cancelText=\"Cancelar\"\n                      toggleIcon=\"chevron-down-outline\" placeholder=\"Seleccionar\">\n                      <ion-select-option *ngFor=\"let licencia of tipoLicencia\" [value]=\"[licencia.TipoLicencia]\" class=\"required-data\">\n                        {{licencia.TipoLicencia}}\n                      </ion-select-option>\n                    </ion-select>\n                    <input class=\"required-index\" value=\"23\">\n                    </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  No. Licencia\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].LicenciaNo\" (ionChange)=\"entraLicencia($event)\" class=\"required-data select-label\"></ion-input>\n                    <input class=\"required-index\" value=\"24\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row class=\"licence-expiration-row\">\n                  <ion-col size=\"12\" class=\"licence-expiration-display\">\n                    <ion-text style=\"color: var(--blueGrayColor);\">Fecha de Vencimiento : </ion-text><br>\n                    {{formateadaVigencia}}\n                  </ion-col>\n                  <ion-col size=\"12\" class=\"licence-expiration-input-column\">\n                    <ion-input [maskito]=\"idMaskFechaVencimiento\" [maskitoElement]=\"predicateCliente\"\n                    placeholder=\"DD/MM/AAAA\" [(ngModel)]=\"formateadaVigencia\" (ionChange)=\"entraVencimiento($event)\" class=\"required-data licence-expiration-input\"\n                    style=\"text-align: right;\"></ion-input>\n                    <input class=\"required-index\" value=\"25\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n            </ion-item>\n\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Estado de la Licencia\n                    </ion-row>\n                <ion-row>\n                  <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                    <ion-radio-group id=\"licenciaEstado\" (ionChange)=\"entraLicenciaEstado($event)\" class=\"required-data\">\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\n                        <ion-label style=\"margin-left:5px; color: var(--blueGrayColor);\">Vencida</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                      </ion-item>\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                        <ion-label style=\"margin-left:5px; color: var(--blueGrayColor);\">Vigente</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n                \n            </ion-item>\n\n            <ion-item  class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Prueba de Alcoholemia?\n                    </ion-row>\n                <ion-row>\n                  <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                    <ion-radio-group id=\"pruebaRadioGroup\" (ionChange)=\"pruebaAlcohol($event)\" >\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\n                        <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                      </ion-item>\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                        <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Dirección del conductor\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DireccionConductor\" (ionChange)=\"entraDireccionConductor($event)\"\n                    class=\"required-data select-label\"></ion-input>\n                    <input class=\"required-index\" value=\"27\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Teléfono \n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" type=\"number\" [(ngModel)]=\"laExpediente[0].TelefonoFijoConductor\"\n                    class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"28\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" type=\"number\" [(ngModel)]=\"daTelefonoFijoConductor\" \n                    (ionChange)=\"entraTelefonoConductor($event)\"\n                    class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"29\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item class=\"ion-no-padding  input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Celular\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == false\" type=\"number\" [(ngModel)]=\"laExpediente[0].TelefonoOrigen\"\n                    class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"30\">\n                    <ion-input [hidden]=\"conductorEsAfiliado == true\" type=\"number\" [(ngModel)]=\"daCelularConductor\"\n                    (ionChange)=\"entraCelularConductor($event)\"\n                    class=\"required-data\"></ion-input>\n                    <input class=\"required-index\" value=\"31\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-list>\n          <ion-grid style=\"color: white;\">\n            <ion-row>\n              <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\n            </ion-row>\n          </ion-grid>\n          <br><br><br><br><br><br>\n        </div>\n          </ion-col>\n\n          <ion-col class=\"segmento\" id=\"segmentInfo\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Datos Información Relacionada\n              </ion-badge>\n            </ion-label>\n\n            <div class=\"segment-form-body\">\n              <ion-list [inset]=\"true\">\n                <ion-item  class=\"ion-no-padding  input\">\n                  \n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Se responsabiliza a?\n                        </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\"></ion-col>\n                    </ion-row>\n                  </ion-grid>\n\n                  \n                    <ion-radio-group id=\"responsableRadioGroup\" (ionChange)=\"entraResponsable($event)\" >\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\n                        <ion-label style=\"color: var(--blueGrayColor);\">Tercero</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"3\"></ion-radio>\n                      </ion-item>\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\n                        <ion-label style=\"color: var(--blueGrayColor);\">Conductor</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                      </ion-item>\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                        <ion-label style=\"color: var(--blueGrayColor);\">Asegurado</ion-label>\n                        <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                      </ion-item>\n                    </ion-radio-group>\n                </ion-item>\n\n\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Responsable\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].NombreAtribuyeAccidente\" (ionChange)=\"entraNombreAtribuye($event)\"\n                  class=\"required-data select-label\"></ion-input>\n                  <input class=\"required-index\" value=\"32\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Autoridad\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].AutoridadInvolucrada\" (ionChange)=\"entraEntidadInvolucrada($event)\"\n                  class=\"required-data select-label\"></ion-input>\n                  <input class=\"required-index\" value=\"33\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Ubicación vehículo\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].UbicacionVehiculoAsegurado\" (ionChange)=\"entraUbicacionVehiculoAsegurado($event)\"\n                  class=\"required-data select-label\"></ion-input>\n                  <input class=\"required-index\" value=\"34\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Se agendó audiencia?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"audiRadioGroup\" (ionChange)=\"audiciona($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                    \n                </ion-item>\n\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Fue detenido el vehiculo?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"detenidoVRadioGroup\" (ionChange)=\"fueDetenido($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                    \n                </ion-item>\n\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Fue detenido el conductor?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"detenidoCRadioGroup\" (ionChange)=\"fueDetenidoElConductor($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                    \n                </ion-item>\n\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Volcó el vehiculo?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"volcoRadioGroup\" (ionChange)=\"fueVolcado($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      En qué comisaría ó juzgado se encuentra el vehículo?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].UbicacionVehiculoDetenido\" (ionChange)=\"entraUbicacionVehiculoDetenido($event)\"\n                  class=\"required-data select-label\"></ion-input>\n                  <input class=\"required-index\" value=\"35\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n    \n    \n                <!-- pregunta, vehiculo culpable? -->\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Terceros heridos?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"tHeridosRadioGroup\" (ionChange)=\"tercerosHeridos($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Descripcion heridos.\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DescripcionTercerosHeridos\" (ionChange)=\"dTercerosHeridos($event)\"\n                        class=\"custom\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item  class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Terceros fallecidos?\n                    </ion-row>\n                    <ion-row>\n                      <ion-col offset=\"6\" size=\"6\" style=\"text-align: right;\">\n                        <ion-radio-group id=\"tMuertosRadioGroup\" (ionChange)=\"tercerosMuertos($event)\" >\n                          <ion-item lines=\"none\" style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">No</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"2\"></ion-radio>\n                          </ion-item>\n                          <ion-item lines=\"none\"  style=\"display: inline-block;\">\n                            <ion-label style=\"color: var(--blueGrayColor);\">Si</ion-label>\n                            <ion-radio class=\"uso-opcion\" value=\"1\"></ion-radio>\n                          </ion-item>\n                        </ion-radio-group>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Descripcion fallecidos\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input type=\"text\" [(ngModel)]=\"laExpediente[0].DescripcionTercerosMuertos\" (ionChange)=\"dTercerosMuertos($event)\"\n                        class=\"custom\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Descripción accidente\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionAccidente\" (ionChange)=\"descripcionAccidente($event)\"\n                    class=\"required-data custom\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Descripción audiencia\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionAudiencia\" (ionChange)=\"entraDescripcionAudiencia($event)\"\n                        class=\"custom\"></ion-input>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item class=\"ion-no-padding  input\">\n                  <ion-grid>\n                    <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                      Descripción del daño al vehículo\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-input [(ngModel)]=\"laExpediente[0].DescripcionDanioVehiculo\" (ionChange)=\"descripcionDanio($event)\"\n                    class=\"required-data custom\"></ion-input>\n                    <input class=\"required-index\" value=\"37\">\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-grid style=\"color: white;\">\n                  <ion-row>\n                    <ion-col size=\"12\">            Ajustadores Por Salud</ion-col>\n                  </ion-row>\n                </ion-grid>\n                <br><br><br><br><br><br>\n              </ion-list>\n            </div>\n\n          \n          </ion-col>\n\n          <ion-col class=\"segmento\" id=\"segmentCompany\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Datos Asegurado Acompañantes\n              </ion-badge>\n            </ion-label>\n            \n            <ion-list>\n              <ion-item lines=\"none\">\n                <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(1)\">\n                  Agregar\n                </ion-button>\n                </ion-item>\n                <ion-item *ngFor=\"let item of acompaniante; let i = index \" >\n                  <ion-icon style=\"color: orangered;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\n                  <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\n                  <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4;\" name=\"create\"></ion-icon>\n                </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col class=\"segmento\" id=\"segmentWitness\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Datos Testigos\n              </ion-badge>\n            </ion-label>\n    \n            <ion-item lines=\"none\">\n              <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(2)\">\n                Agregar\n              </ion-button>\n            </ion-item>\n          \n            <ion-list [inset]=\"true\">\n              <ion-item *ngFor=\"let item of testigos; let i = index \" >\n                <ion-icon style=\"color: orangered;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\n                <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\n                <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4; \"name=\"create\"></ion-icon>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n    \n          <ion-col class=\"segmento\" id=\"segmentProperty\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Daños a la Propiedad Privada\n              </ion-badge>\n            </ion-label>\n    \n            <ion-list [inset]=\"true\">\n              <ion-item lines=\"none\">\n                <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"openModalPropiedad()\">\n                  Agregar\n                </ion-button>\n              </ion-item>\n              <ion-item *ngFor=\"let item of propiedadesprivadas; let i = index \" >\n                <ion-icon style=\"color: orangered;\" (click)=\"deletePropiedad(i)\" slot=\"start\" name=\"trash\"></ion-icon>\n                <ion-label (click)=\"editPropiedad(i)\" class=\"select-label\">{{item.BienAfectado}}</ion-label>\n                <ion-icon (click)=\"editPropiedad(i)\" slot=\"end\" style=\"color: #7da1c4;\" name=\"create\"></ion-icon>\n              </ion-item>\n            </ion-list>\n    \n            \n    \n          </ion-col>\n          <ion-col class=\"segmento\" id=\"segmentDamage\" size=\"12\">\n            <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\n              <ion-badge>\n                Lesiones a Personas\n              </ion-badge>\n            </ion-label>\n    \n            <ion-item lines=\"none\">\n              <ion-button style=\"color: white; width: 30%;\" shape=\"round\"  (click)=\"personaModal(3)\">\n                Agregar\n              </ion-button>\n            </ion-item>\n\n            <div class=\"segment-form-body\">\n              <ion-list [inset]=\"true\">\n                <ion-item *ngFor=\"let item of lesionados; let i = index \">\n                  <ion-icon style=\"color: red;\" (click)=\"deletePersona(i, item.TipoPersona)\" slot=\"start\" name=\"trash\"></ion-icon>\n                  <ion-label (click)=\"editPersona(i, item.TipoPersona)\" class=\"select-label\">{{item.Nombre}}</ion-label>\n                  <ion-icon (click)=\"editPersona(i, item.TipoPersona)\" slot=\"end\" style=\"color: #7da1c4; \"name=\"create\"></ion-icon>\n                </ion-item>\n              </ion-list>\n            </div>\n          </ion-col>\n\n          <ion-col class=\"segmento\" id=\"segmentSignature\" size=\"12\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"12\">\n                          <ion-label class=\"text-size-lg\" style=\"padding-left: 10px;color: #3171e0;\">\n                             Firma Asegurado o conductor\n                          </ion-label>\n                            <ion-card style=\"height:202px\">\n                              <img #imagen id=\"imagenFirma\" alt=\"Firmar\" src=\"{{firmaPrecargada}}\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\"\n                              style=\"    border: 6px dashed rgb(237, 233, 233);margin-top: 1%; width: 98%; height: 150px; margin-left: 1%;\"/>\n                            \n                              <ion-card-content style=\"padding: 0; margin-bottom: 6px;padding-left: 1%;\" (click)=\"signatureDisplay();goESignature()\">\n                                {{laExpediente[0].Cliente}} <ion-text style=\"position: absolute; right: 60px; bottom: 0; top: 16px;\">Editar firma</ion-text> <img src=\"{{firmaIcono}}\" style=\"width: 50px; height: auto; position: absolute; right: 5px; bottom: 0; top: -13px;\"/>\n                              </ion-card-content>\n                            </ion-card>\n                        </ion-col>\n\n                      </ion-row>\n                    </ion-grid>\n\n                </ion-col>\n                <ion-col size=\"6\">\n                <ion-content class=\"ion-no-padding\">\n                  <ion-grid style=\"padding-top: 0;\">\n                    <ion-row>\n                      \n                      <ion-col size=\"12\">\n                        <ion-label class=\"text-size-lg\" style=\"padding-left: 10px;color: #3171e0;\">\n                          Fecha del Siniestro\n                        </ion-label>\n                        <ion-card style=\"height:210px\">\n                          <ion-card-content style=\"margin-top: 10%;\">\n                            <ion-chip class=\"date-siniestro\">\n                              <ion-icon name=\"calendar\" style=\"color: var(--blueGrayColor);\"></ion-icon>\n                              <ion-label class=\"chip-label\">{{formateadaSiniestro}}</ion-label>\n                              <ion-icon name=\"time\" class=\"chip-icon\"></ion-icon>\n                            </ion-chip>\n                          </ion-card-content>\n                        </ion-card>\n                      </ion-col>\n                      \n                    </ion-row>\n                  </ion-grid>\n                </ion-content>\n                \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                  \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>          \n        </ion-row>\n        <ion-row id=\"dataNull\" style=\"display: none;\">\n          <ion-col size=\"12\">\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>\n                  <div class=\"meter\">\n                      <span id=\"spanProgress\" style=\"width:100%;\"><span class=\"progress\"></span></span>\n                  </div>\n                </ion-card-subtitle>\n                <ion-card-subtitle id=\"infoText\">{{textoInfo}}</ion-card-subtitle>\n              </ion-card-header>\n              <ion-card-content>\n                \n                <br>\n                  <ion-icon name=\"flag\" color=\"danger\"></ion-icon> Elementos Incompletos<br>\n                  <ion-icon name=\"flag\" color=\"medium\"></ion-icon> Elementos Completos\n                <ion-list>\n                  <ion-item class=\"nulo-item\" *ngFor=\"let nulo of validaNulos; let i = index\" style=\"color: gray;\" (click)=\"analizaNulo(i, nulo.valor, nulo.inputIndex);scrollToElement();\">\n                    <ion-label>{{i+1}}. {{nulo.etiqueta}} : <strong *ngIf=\"nulo.valor != 'undefined' && nulo.valor != undefined\">{{nulo.valor}}</strong></ion-label>\n                    <div class=\"meter\">\n                        <span style=\"width:100%;\"><span class=\"progress\"></span></span>\n                    </div>\n                    <input class=\"index-input\" style=\"display: none;\" [value]=nulo.inputIndex />\n                    <input class=\"value-input\" style=\"display: none;\" [value]=nulo.valor />\n                    <ion-chip *ngIf=\"nulo.valor == 'undefined' || nulo.valor == undefined\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 7%; font-size: 1rem;\n                    color: red; border-color: red;\">Ir</ion-chip>\n                  </ion-item>\n                  <br>\n                  <ion-item style=\"color: white;\">Ajustadores HELP Porsalud Ficohsa</ion-item>\n                </ion-list>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ion-menu>\n  <div class=\"ion-page\" id=\"main\">\n    <ion-header>\n      <ion-toolbar class=\"cliente-segments-toolbar\">\n        <ion-title>Secciones del formulario</ion-title>\n        <ion-buttons slot=\"end\" class=\"cliente-form-shortcut\">\n          <ion-menu-button menu=\"cliente-form-menu\" aria-label=\"Abrir formulario\"></ion-menu-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-no-padding\" style=\"width: 99%;padding: 3%;text-align: justify;font-size: 1rem;white-space: normal;overflow-y: scroll;height: 39%;\">\n      <ion-list style=\"width: 100%;\">\n        <ion-item *ngFor=\"let segment of segments; let i = index\" class=\"segment-item\" (click)=\"setSegment(segmentInput.value, indexInput.value, true)\">\n          <ion-input #segmentInput [hidden]=\"true\" [value]=\"segment.name\"></ion-input>\n          <ion-input #indexInput [hidden]=\"true\" [value]=\"i\"></ion-input>\n          <ion-icon style=\"color: gray;\" class=\"segment-icon\" name={{segment.name}}></ion-icon><span class=\"segment-title\" style=\"margin-left: 9px;\">{{segment.titulo}}</span>\n        </ion-item>\n      </ion-list>\n\n    </ion-content>\n  </div>\n  \n\n</ion-split-pane>\n\n<ion-footer class=\"cliente-action-footer\">\n  <div class=\"cliente-action-bar\">\n    <div class=\"cliente-fixed-actions\">\n      <ion-button id=\"camButton\" fill=\"outline\" class=\"cliente-action-button\" (click)=\"goFotos()\">\n        <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\n        Fotos\n      </ion-button>\n\n      <ion-button id=\"footerSignButton\" fill=\"outline\" class=\"cliente-action-button\" (click)=\"goESignature()\">\n        <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n        Firma\n      </ion-button>\n    </div>\n\n    <div class=\"cliente-state-actions\">\n      <ion-button id=\"audienciaButton\" *ngIf=\"esAudiencia == true\" class=\"cliente-primary-action\" (click)=\"goPrepare(idAtencion)\">\n        <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\n        Seguir sin póliza\n      </ion-button>\n\n      <ion-button id=\"validateButton\" *ngIf=\"daSegment == 'ribbon'\" class=\"cliente-primary-action\" (click)=\"validarDatos()\">\n        <ion-icon slot=\"start\" name=\"checkmark-circle-outline\"></ion-icon>\n        Validar datos\n      </ion-button>\n\n      <ion-button id=\"cancelaButton\" *ngIf=\"daSegment == 'ribbon'\" fill=\"outline\" class=\"cliente-secondary-action\" style=\"display: none;\" (click)=\"goBack()\">\n        <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n        Cancelar\n      </ion-button>\n\n      <ion-button id=\"validateAgainButton\" *ngIf=\"daSegment == 'ribbon'\" fill=\"outline\" class=\"cliente-secondary-action\" style=\"display: none;\" (click)=\"validarDatos()\">\n        <ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>\n        Revisar\n      </ion-button>\n\n      <ion-button id=\"saveDataButton\" *ngIf=\"daSegment == 'ribbon'\" class=\"cliente-primary-action\" style=\"display: none;\" (click)=\"GuardarDatos()\">\n        <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n        Guardar datos\n      </ion-button>\n    </div>\n\n    <div class=\"cliente-success-actions\">\n      <ion-badge id=\"successLabel\" style=\"display: none;\">Registro guardado con éxito</ion-badge>\n      <ion-button id=\"buttonGoAjuste\" style=\"display: none;\" class=\"cliente-primary-action\" (click)=\"goAjuste()\">\n        <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n        Ir a Ajustador\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n\n\n\n<ion-modal #daModal id=\"daModal\" class=\"persona\" [isOpen]=\"showPersona\">\n  <ng-template>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-row>\n          <!-- Datos del tercero -->  \n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos </ion-label>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Nombre\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Nombre\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              \n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Teléfono\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"number\" [(ngModel)]=\"persona.Telefono\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Dirección\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Direccion\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\n                Agregar\n              </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"editar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\n                Actualizar\n              </ion-button>\n            </ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n\n  <ion-modal #modalLesion id=\"modalLesion\" class=\"persona-lesion\" [isOpen]=\"showPersonaLesion\">\n  <ng-template>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Lesionado</ion-label>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Nombre\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Nombre\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              \n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Teléfono\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"number\" [(ngModel)]=\"persona.Telefono\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Dirección\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.Direccion\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Tipo de lesión\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.TipoLesion\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-grid>\n                <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n                  Hospital o Clínica\n                    </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-input type=\"text\" [(ngModel)]=\"persona.DireccionHospitalizacion\"></ion-input>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n          </ion-col>\n          \n\n          <ion-col size=\"12\">\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"addPersona()\" expand=\"block\" shape=\"round\">\n                Agregar\n              </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"editar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"updatePersona()\" expand=\"block\" shape=\"round\">\n                Actualizar\n              </ion-button>\n            </ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n<!---->\n\n\n<ion-modal #propModal id=\"propModal\" class=\"propiedad\" [isOpen]=\"showPropiedad\">\n  <ng-template>\n    <ion-content>\n      <ion-grid fixed>\n        <ion-row>\n          <!-- Datos del tercero -->  \n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos De la Propiedad</ion-label>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Nombre del Bien</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.BienAfectado\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Nombre Propietario</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.NombrePropietario\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Telefono</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"propiedadPrivada.Telefono\"></ion-input>\n            </ion-item>\n\n            <ion-item  class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Dirección</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DireeccionPropietario\"></ion-input>\n            </ion-item>\n            \n          </ion-col>\n          <!-- Datos del vehiculo -->\n          <ion-col size=\"12\">\n            <ion-item  style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Datos Daño</ion-label>\n            </ion-item>\n            <ion-item   class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Descripción del Bien</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DescripcioDelBien\"></ion-input>\n            </ion-item>\n            <ion-item   class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Dirección del Bien</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DireccionDelBien\"></ion-input>\n            </ion-item>\n            <ion-item   class=\"ion-no-padding transparent input\">\n              <ion-label class=\"text-size-sm\" position=\"floating\">\n                Descripción del Daño</ion-label>\n                <ion-input [(ngModel)]=\"propiedadPrivada.DescripcionDelDanio\" label=\"input\" placeholder=\"Describa el daño\" [autoGrow]=\"true\"></ion-input>\n              <!--ion-input type=\"text\" [(ngModel)]=\"propiedadPrivada.DescripcionDelDanio\"></!--ion-input -->\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-col *ngIf=\"guardar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"addPropiedad()\" expand=\"block\" shape=\"round\">\n                Agregar\n              </ion-button>\n            </ion-col>\n            <ion-col *ngIf=\"editar\"  size=\"6\">\n              <ion-button style=\"color: white;\" (click)=\"updatePropiedad()\" expand=\"block\" shape=\"round\">\n                Actualizar\n              </ion-button>\n            </ion-col>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal #modalFechaSiniestro trigger=\"open-modal-fecha-siniestro\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n  <ng-template>\n    <ion-content>\n      <ion-datetime style=\"margin-left:120px\" [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\n      [(ngModel)]=\"laExpediente[0].FechaHoraAccidente\" (ionChange)=\"marcarFechaSiniestro(laExpediente[0].FechaHoraAccidente)\"></ion-datetime>\n    </ion-content>\n    <!--ion-button>Guardar Fecha</!--ion-button -->\n  </ng-template>\n</ion-modal>\n\n<ion-modal #modalFechaNacimiento trigger=\"open-modal-fecha-nacimiento\" class=\"birth-date-modal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Fecha de nacimiento</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button aria-label=\"Cerrar\" (click)=\"modalFechaNacimiento.dismiss()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"birth-date-modal-content\">\n      <div class=\"birth-date-guidance\">\n        Selecciona día, mes y año. La edad se calculará automáticamente.\n      </div>\n      <ion-datetime presentation=\"date\" [preferWheel]=\"true\" locale=\"es-HN\" [firstDayOfWeek]=\"1\"\n      [min]=\"birthDateMin\" [max]=\"birthDateMax\" [showDefaultButtons]=\"true\"\n      doneText=\"Guardar\" cancelText=\"Cancelar\" [(ngModel)]=\"formateadaNacimiento\"\n      (ionChange)=\"marcarFechaNacimiento($event)\" class=\"required-data birth-date-picker\"></ion-datetime>\n      <div class=\"birth-date-result\" *ngIf=\"edad !== undefined && edad !== null\">\n        <strong>{{edad}} años</strong>\n        <span [class.minor-driver-warning]=\"esMenor\">\n          {{esMenor ? 'Advertencia: conductor menor de edad' : 'Conductor mayor de edad'}}\n        </span>\n      </div>\n      <input class=\"required-index\" value=\"38\">\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal #modalFechaVencimiento trigger=\"open-modal-fecha-vencimiento\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n  <ng-template>\n    <ion-content>\n      <ion-datetime style=\"margin-left:120px\" [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\n      [(ngModel)]=\"dataProcess.Vigencia\" [maskito]=\"idMaskFechaVencimiento\" [predicate]=\"predicateCliente\" (ionChange)=\"entraVencimiento($event)\"\n      class=\"required-data\"></ion-datetime>\n      <input class=\"required-index\" value=\"39\">\n      <!--span color=\"danger\" style=\"padding: 6px;height: 23px;width: 23px;\">*</!--span -->\n    </ion-content>\n    <!--ion-button>Guardar Fecha</!--ion-button -->\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_clientehn_clientehn_module_ts.js.map