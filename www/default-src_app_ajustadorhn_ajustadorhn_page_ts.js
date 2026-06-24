(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ajustadorhn_ajustadorhn_page_ts"],{

/***/ 32234:
/*!*************************************************!*\
  !*** ./src/app/ajustadorhn/ajustadorhn.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjustadorhnPage": () => (/* binding */ AjustadorhnPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ajustadorhn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajustadorhn.page.html?ngResource */ 54595);
/* harmony import */ var _ajustadorhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajustadorhn.page.scss?ngResource */ 41742);
/* harmony import */ var _ajustadorhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ajustadorhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _environments_segments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/segments */ 33333);
/* harmony import */ var _environments_vehicles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/vehicles */ 73586);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 29036);
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popover/popover.page */ 99890);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _environments_talleres__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/talleres */ 87216);
/* harmony import */ var _services_formatos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/formatos.service */ 70854);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _validation_claim_validation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../validation/claim-validation */ 29003);
/* harmony import */ var _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../validation/claim-validation.rules */ 5057);
/* harmony import */ var _utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/claim-payload-normalizer */ 93956);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _interfaces_extras__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../interfaces/extras */ 33105);





























const USER_DATA = 'MY_USER_DATA';
let AjustadorhnPage = class AjustadorhnPage {
  // INICIALIZACION
  constructor(router, loading, alert, api, toast, platform, so, geo, toaster, popControl, sanitizer, formateador, animationCtrl, thisModal) {
    var _this = this;
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.platform = platform;
    this.so = so;
    this.geo = geo;
    this.toaster = toaster;
    this.popControl = popControl;
    this.sanitizer = sanitizer;
    this.formateador = formateador;
    this.animationCtrl = animationCtrl;
    this.thisModal = thisModal;
    //DECLARACION
    //@ViewChild('imagen') imagen: ElementRef;
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
    this.predicate = /*#__PURE__*/function () {
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
      mask: ['+', '(', '5', '0', '4', ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };
    this.phoneMaskGuate = {
      mask: ['+', '(', '5', '0', '2', ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
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
    // /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.results = [];
    this.ajustador = {};
    this.tipoSolicitante = [];
    this.tipoLicencia = [];
    this.tipoFirma = [];
    this.tipoCombustible = [];
    this.navigateExtra = [];
    this.arrai = [];
    this.dataBPM = [];
    this.talleres = [];
    this.dataBPMupdate = [];
    this.danios = [];
    this.daniosSelectAju = [];
    this.danioResults = [];
    this.daniosOtros = [];
    this.nulosAtencion = [];
    this.siniestro = [{
      miPais: "HN",
      url: "GuardarSiniestroHN"
    }, {
      miPais: "GT",
      url: "GuardarSiniestro"
    }];
    this.segments_aju = _environments_segments__WEBPACK_IMPORTED_MODULE_4__.segments_aju;
    this.daSegment = "person";
    this.marcas = [];
    this.modelos = [];
    this.elUsuario = [];
    this.tipoGeneros = [];
    this.tipoParentescos = [];
    this.tipoSiniestros = [];
    this.formulario = {};
    this.valoresPredeterminados = [];
    this.miLogRespuesta = [];
    this.marcasVehiculos = _environments_vehicles__WEBPACK_IMPORTED_MODULE_5__.marcasVehiculos;
    this.modelosMarca = [];
    this.tiposTransmision = _environments_vehicles__WEBPACK_IMPORTED_MODULE_5__.tiposTransmision;
    this.isDate = false;
    this.isEditSig = false;
    this.isEeexittoooo = false;
    this.isUpdateBPM = false;
    this.isSearch = false;
    this.esTipoSolicitante = false;
    this.esFirma = false;
    this.laLocalidad = [];
    this.miLocalidad = [];
    this.esMarca = false;
    this.estaCompleto = false;
    this.canDismiss = false;
    this.presentingElement = null;
    this.tallerOtro = '';
    this.tallerOtroDireccion = '';
    this.dataSiniestro = [];
    this.danioSearchable = [];
    this.elFiniquito = [];
    this.datos = [];
    this.contador = 0;
    this.canvasAseguradoWidth = 0;
    this.talleresFiltrados = [];
    //sig: SignaturePad;
    this.menu = [false, false, false, false, false, false, false, false, false, false];
    this.esPesado = '2';
    this.validaNulosAju = [];
    this.requiredD = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.requiredDataAjustador;
    this.requiredDLabels = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.requiredDataLabels;
    this.fechaValida = true; // Debug : fechaValida
    this.isBPMcomplete = false;
    this.isFirstTime = true;
    this.clickCount = 0;
    this.contadorSegmentos = 0;
    this.storageKeys = [];
    this.countTrue = 0;
    this.storageArrayFilter = [];
    this.losParentescos = [];
    this.isRefreshing = false;
    this.isPressed = false;
    this.acompaniantes = [];
    this.testigos = [];
    this.lesionados = [];
    this.propiedades = [];
    this.formularioCompleto = false;
    this.clienteFiltroAju = [];
    this.nullsIndexAju = [];
    this.mostrarPanelValidacion = false;
    this.validationPanelIsActive = false;
    this.textoInfo = 'Validando ... Cuando todos los datos estén completos, se habilitará el botón de guardar.';
    this.textoInfoIncompleto = 'Faltan datos por completar. Por favor, revisa el formulario.';
    this.textoInfoDanios = 'Aún no se han seleccionado daños. Puedes guardar la atención, sin embargo no se reflejarán daños en los informes.';
    this.textoNoFotos = 'No hay fotografías o las fotografías se eliminaron.';
    this.textoFotosNoEnviadas = 'No se enviaron fotografías';
    this.textoFotosInfo = 'Puedes continuar, pero no se reflejarán tus fotos en los informes.';
    this.textoInfoDaniosCulpa = 'Falta completar el acuerdo de deuda. Puedes guardar la atención, sin embargo no se reflejarán datos del culpable en los informes.';
    this.cacheClienteFix = [];
    this.datosCompletados = [];
    this.datosIncompletos = [];
    this.datosComunes = [];
    this.estaEvaluado = false;
    this.daniosSelectCulpa = [];
    this.datosDeEnvio = [];
    this.datosDeEnvioFix = [];
    this.fotos = [];
    this.seleccionDeDanios = [];
    this.seleccionDeDaniosCulpable = [];
    this.arregloDeEnvio = [];
    this.coberturas = [];
    this.esConduceSeguro = false;
    this.toggleAccordion = position => {
      const nativeEl = this.accordionGroup;
      nativeEl.value = position;
    };
    this.enterAnimation = baseEl => {
      const root = baseEl.shadowRoot;
      const backdropAnimation = this.animationCtrl.create().addElement(root.querySelector('ion-backdrop')).fromTo('opacity', '0.01', 'var(--backdrop-opacity)');
      const wrapperAnimation = this.animationCtrl.create().addElement(root.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: '0',
        transform: 'scale(0)'
      }, {
        offset: 1,
        opacity: '0.99',
        transform: 'scale(1)'
      }]);
      return this.animationCtrl.create().addElement(baseEl).easing('ease-out').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    this.leaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
    this.OtrosTalleres = localStorage.getItem('OtrosTalleres');
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('acompaniante') == 0) {
        console.log('Un acompañante');
        let elAcompa = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.acompaniantes.push(elAcompa);
      }
      if (localStorage.key(i).indexOf('testigos') == 0) {
        console.log('Un testigo');
        let elTest = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.testigos.push(elTest);
      }
      if (localStorage.key(i).indexOf('lesionados') == 0) {
        console.log('Un testigo');
        let elLesionado = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.lesionados.push(elLesionado);
      }
      if (localStorage.key(i).indexOf('propiedadesprivadas') == 0) {
        console.log('Un lesionado');
        let lapropiedad = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.propiedades.push(lapropiedad);
      }
    }
    this.deudaSent = localStorage.getItem('deudaSent') === 'true';
    if (this.deudaSent == true) {
      console.log(this.deudaSent);
    } else {
      this.deudaSent = false;
    }
    this.ssucessIconRecycle = '../../assets/img/papel.gif';
    this.refreshIcon = '../../assets/img/recargar-1.svg';
    this.sucessIcon = '../../assets/img/guardado.gif';
    this.imageHeight = 300;
    this.isLoading = true;
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    this.daDate = new Date(); // Temporalmente la fecha actual del sistema
    this.dia = this.daDate.getDate();
    this.mes = this.daDate.getMonth();
    this.anio = this.daDate.getFullYear();
    console.log('Id del mes ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_12__.meses[this.mes].mes);
    console.log(_environments_calendario__WEBPACK_IMPORTED_MODULE_12__.meses[this.mes].mes);
    this.fechaParrafo = this.dia + ' de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_12__.meses[this.mes].mes + ' de ' + this.anio;
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_12__.meses[this.mesPie].mes + ' de ' + this.anioPie;
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    setTimeout(() => {
      let evaluado = localStorage.getItem('estaEvaluado');
      this.estaEvaluado = evaluado === 'true';
      console.log('El estado de evaluación es : ' + this.estaEvaluado);
      this.validarDatos(1);
      if (this.estaEvaluado == true) {
        //$('#validateButtona').fadeOut();
        //$('#saveDataButtona').fadeIn();
        //$('#validateAgainButtona').fadeIn();
        //$('#cancelaButtona').fadeIn();
      }
      //this.validarDatos();
      //this.setFirstSegment()
    }, 1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    console.log('La atencion es ' + this.idAtencion);
    this.atencionId = parseInt(this.idAtencion);
    let dIdAtencion = parseInt(this.idAtencion);
    /*
    let fotosLocal = JSON.parse(localStorage.getItem('fotos-'+this.atencionId));
      if (fotosLocal) {
        this.fotos = fotosLocal;
      }
      */
    this.api.DatosDeAtencion(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.dataSiniestro = res;
        console.log("Mis datos de atencion");
        console.dir(_this.dataSiniestro);
        for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.ItemsData.length; index++) {
          const element = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.ItemsData[index].nombre;
          let elElemento = _this.dataSiniestro[0][element];
          _this.identidadCliente = _this.dataSiniestro[0].IdentidadCliente;
          _this.elTipoLicencia = _this.dataSiniestro[0].RefTipoLicenciaId;
          //console.log(this.dataSiniestro[0][element]);
          if (elElemento == null || elElemento == undefined) {
            _this.nulosAtencion.push(element);
          }
          if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.ItemsData.length - 1) {
            console.log('los elementos vacios');
            console.dir(_this.nulosAtencion);
          }
        }
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref4 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.api.Expediente(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('So far so good as you should know my friend what we can do....');
      //this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.elExpediente = res;
        console.log('Mi querido expediente es :');
        console.dir(_this.elExpediente);
        console.log(_this.elExpediente[0].Cliente);
        // Setups date from register, if there is not a date set it up as today
        const fechaSiniestro = _this.elExpediente[0].FechaRegistro;
        const fechaInspeccionInicial = _this.getFechaInspeccionInicial();
        console.log('Fecha de inspeccion inicial : ' + fechaInspeccionInicial + ' ///////////////////////////////////////////////////////////');
        _this.fechaInspeccion = fechaInspeccionInicial;
        localStorage.setItem('datos-FechaHora', fechaInspeccionInicial);
        _this.marcarFecha(fechaSiniestro);
        _this.marcarFechaAjustador(fechaInspeccionInicial);
        _this.marcarFechaInspeccion(fechaInspeccionInicial);
        /*
        console.log('Esto es hoy'+ hoy);
        if (hoy != null){
          
        }else{
          hoy = new Date().toISOString();
          this.marcarFecha(hoy);
          this.marcarFechaAjustador(ahora);
          this.marcarFechaInspeccion(hoy);
        }
        */
        _this.elFiniquito = {
          NombreCliente: _this.elExpediente[0].Cliente,
          Poliza: _this.elExpediente[0].PolizaExterna,
          RefAtencionId: _this.idAtencion,
          Marca: _this.elExpediente[0].Marca,
          Modelo: _this.elExpediente[0].Modelo,
          Anio: _this.elExpediente[0].Year,
          Placa: _this.elExpediente[0].NumeroPlaca,
          Chasis: _this.elExpediente[0].Chasis,
          Motor: _this.elExpediente[0].Motor,
          // variables desde inputs
          NumeroReclamo: '',
          FechaDesde: "2023-11-14T19:55:55.849Z",
          FechaHasta: "2023-11-14T19:55:55.849Z",
          TipoCoberturaFicohsa: "",
          NombreQuienRecibe: "",
          IdentidadQuienRecibe: "",
          NumeroCheque: "",
          FechaDelCheque: "2023-11-14T19:55:55.849Z",
          ValorDelCheque: 0,
          NombreAFavor: "",
          FechaFirma: _this.fechaPie,
          FirmaCliente: "" // Desde el canvas
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
        localStorage.setItem('elFiniquito', JSON.stringify(_this.elFiniquito));
        _this.nombreCliente = _this.elExpediente[0].Cliente;
        _this.elTelefonoOrigen = _this.elExpediente[0].TelefonoOrigen;
        _this.elCorreoElectronico = _this.elExpediente[0].CorreoElectronico;
        _this.laMarcaAsegurado = _this.elExpediente[0].Marca;
        _this.elModeloAsegurado = _this.elExpediente[0].Modelo;
        _this.elAnioAsegurado = _this.elExpediente[0].Year;
        _this.elChasisAsegurado = _this.elExpediente[0].Chasis;
        _this.elNumeroPlacaAsegurado = _this.elExpediente[0].NumeroPlaca;
        _this.elMotorAsegurado = _this.elExpediente[0].Motor;
        _this.laPolizaExternaAsegurado = _this.elExpediente[0].PolizaExterna;
        _this.moneda = _this.elExpediente[0].Moneda;
        if (_this.moneda == null) {
          _this.miMoneda = "LEMPIRAS";
        } else {
          _this.miMoneda = _this.moneda;
        }
        // OJO
        if (_this.elExpediente[0].IdentidaConductor) {
          console.log('La identidad de este man es :' + _this.elExpediente[0].IdentidaConductor);
          _this.datos['IdentidaConductor'] = _this.elExpediente[0].IdentidaConductor;
        } else {}
        _this.laFechaSiniestroInspeccion = new Date();
        //toaster.presentToast(this.laFechaSiniestroInspeccion, 'top', 'algo');
        //this.ajustadorNombre = localStorage.getItem('nombreAgente');
        _this.aseguradoNombre = _this.elExpediente[0].Cliente;
        _this.getTiposDeCobertura();
        _this.loadParentescos();
        _this.loadSiniestros();
        _this.loadGeneros();
        _this.getTalleres();
        //this.filtrarTalleres();
        //this.getDanios();
        _this.valoresPredeterminados = [{
          puntoServicio: "307",
          Sucursal: "0001",
          Producto: "AU01",
          Ramo: "0002",
          Causa: "A001"
        }];
        //console.log('La data del tipo de conductor es : '+ this.dataSiniestro[0].RefTipoConductorId);
        _this.elExpedienteAjustador = _this.elExpediente[0].Nombre;
        _this.elExpedienteAjustadorAudienciaId = _this.elExpediente[0].IdAjustador;
        _this.elExpedienteCliente = _this.elExpediente[0].Cliente;
        _this.elExpedienteClienteIdentidad = _this.elExpediente[0].IdentidaConductor;
        _this.elExpedienteClienteTelefono = _this.elExpediente[0].TelefonoOrigen;
        _this.elExpedienteClienteCorreo = _this.elExpediente[0].CorreoElectronico;
        _this.elExpedienteClienteFechaSiniestro = _this.elExpediente[0].FechaRegistro;
        let fechaRegistro = _this.elExpediente[0].FechaRegistro;
        _this.formateadaSiniestro = 'Fecha : ' + fechaRegistro.split('T')[0].toString() + ', Hora : ' + fechaRegistro.split('T')[1].toString().split('.')[0];
        _this.elExpedienteClienteFechaInspeccion = _this.elExpediente[0].FechaRegistroAjuste;
        _this.elExpedienteMarca = _this.elExpediente[0].Marca;
        _this.elExpedienteModelo = _this.elExpediente[0].Modelo;
        _this.elExpedienteAnio = _this.elExpediente[0].Year;
        _this.elExpedientePlaca = _this.elExpediente[0].NumeroPlaca;
        _this.elExpedienteMotor = _this.elExpediente[0].Motor;
        _this.formateadaInspeccion = _this.elExpediente[0].FechaRegistroAjuste;
        if (parseInt(_this.dataSiniestro.RefTipoConductorId) == 1) {
          _this.ajustador.TipoSolicitante = _this.dataSiniestro.RefTipoConductorId;
          localStorage.setItem('TipoSolicitante', _this.ajustador.TipoSolicitante.toString());
          _this.datos['RefTipoSolicitanteInformeAjusteId'] = _this.dataSiniestro.RefTipoConductorId;
          _this.nombreDelConductor = _this.elExpediente[0].Cliente;
          _this.elTipoLicencia = _this.dataSiniestro.RefTipoLicenciaId;
          _this.elExpedienteSerie = _this.elExpediente[0].Chasis;
          if (_this.esTipoSolicitante == false) {
            setTimeout(() => {
              jquery__WEBPACK_IMPORTED_MODULE_19__("#tipoSolicitante").click();
              setTimeout(() => {
                alert.dismiss();
              }, 1000);
            }, 1000);
          } else {}
        } else {
          _this.ajustador.TipoSolicitante = _this.dataSiniestro.RefTipoConductorId;
          localStorage.setItem('TipoSolicitante', _this.ajustador.TipoSolicitante.toString());
          _this.nombreDelConductor = '';
        }
        console.log('El año del carro ' + _this.elExpediente[0].Year + ', el rango');
        console.dir(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.rangoAnios);
      });
      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
  /*
  toogleAccordion2 = (position) => {
    const nativeEl = this.accordionGroup2;
    nativeEl.value = position;
  }
  */
  focusValidationPanel() {
    const panel = document.getElementById('dataNullAju');
    if (!panel) {
      return;
    }
    //this.toogleAccordion2(this.cantidadNulos > 0 ? 'tres' : 'dos');
    this.validationPanelIsActive = true;
    setTimeout(() => {
      panel.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.ajustadorContent?.scrollToPoint(0, Math.max(panel.offsetTop - 10, 0), 450);
    }, 80);
    setTimeout(() => {
      this.validationPanelIsActive = false;
    }, 1800);
  }
  closeAccordions() {
    const nativeEl = this.accordionGroup;
    nativeEl.value = undefined;
  }
  ngOnInit() {
    const nativeEl = this.accordionGroup;
    this.daniosSelectAju = [];
    //nativeEl.value = 'second';
    setTimeout(() => {
      let cobert = localStorage.getItem('coberturas');
      this.coberturas = JSON.parse(cobert);
      console.log('Las coberturas en ajustador hn');
      console.dir(this.coberturas);
    }, 6000);
    setTimeout(() => {
      //this.setFirstSegment();
      this.getDanios();
      this.listarDanios();
      //this.insertarConvenioReparacion();
    }, 1000);
    setTimeout(() => {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              let tipo;
              this.daniosSelectAju.push(elementD);
              let tipoIndex = parseInt(localStorage.getItem('TipoReparacionIndex-' + indexSelect));
              let tipoId = parseInt(localStorage.getItem('TipoReparacion-' + indexSelect));
              if (tipoId == 1) {
                tipo = 'Reparación';
              } else {
                tipo = 'Cambio';
              }
              this.seleccionDeDanios.push({
                Codigo: elementD.Codigo,
                Descripcion: elementD.Descripcion,
                Id: elementD.Id,
                tipo: tipo,
                tipoId: tipoId
              });
              //console.dir(elementD);
            }
          }
        }

        if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              let tipo;
              this.daniosSelectAju.push(elementD);
              let tipoIndex = parseInt(localStorage.getItem('TipoReparacionCulpaIndex-' + indexSelect));
              let tipoId = parseInt(localStorage.getItem('TipoReparacionCulpa-' + indexSelect));
              if (tipoId == 1) {
                tipo = 'Reparación';
              } else {
                tipo = 'Cambio';
              }
              this.seleccionDeDaniosCulpable.push({
                Codigo: elementD.Codigo,
                Descripcion: elementD.Descripcion,
                Id: elementD.Id,
                tipo: tipo,
                tipoId: tipoId
              });
              //console.dir(elementD);
            }
          }
        }

        if (i == localStorage.length - 1) {}
      }
    }, 1500);
    setTimeout(() => {
      const nativeEl = this.accordionGroup;
      nativeEl.value = undefined;
      //$('.segment-item-aju').eq(0).click();
    }, 1500);
    setTimeout(() => {
      this.eliminarDuplicadosDanios(this.daniosSelectAju, 3);
      /*
              if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
                let elCodigo = localStorage.getItem(localStorage.key(i));
                let daCode = parseInt(elCodigo);
      
                let elTipo = localStorage.getItem('TipoReparacion-'+daCode);
                let daType = parseInt(elTipo);
                let elIndex = localStorage.getItem('TipoReparacionIndex-'+daCode);
                let daIndex = parseInt(elIndex);
              }
      */
    }, 5000);
    this.getTipoSolicitante();
    this.getTipoCombustible();
    this.loadUser();
    this.firmarInspector();
    this.loadCacheCliente();
    // se debe cambiar el id de la obtencion de la licencia por una variable. Temporalmente se tiene en duro el id de pais de honduras con fines de testeo
    let codigoPais = localStorage.getItem('codigoPais');
    const paisId = parseInt(codigoPais);
    //this.getTipoLicencia(paisId);
    this.getTipoLicencia(3);
    //this.getCountry();
    //this.getTipoLicencia(this.paisId);
    //this.sig = new SignaturePad(this.canvas.nativeElement);
    this.codigoPais = localStorage.getItem('codigoPais');
    this.platform.ready().then(() => {
      this.isTablet = this.platform.is('android');
    });
    /**/
  }

  handleCanvas() {
    this.isEditSig = true;
  }
  loadCacheCliente() {
    var _this2 = this;
    this.api.ObtenercacheCliente(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
      //this.isComplete = true;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref8 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        let parentescoId;
        _this2.cacheCliente = res[0];
        localStorage.setItem('cacheCliente', JSON.stringify(_this2.cacheCliente));
        //console.log('Cache de cliente');
        //console.dir(this.cacheCliente);
        //console.dir(this.tipoParentescos);
        parentescoId = parseInt(_this2.cacheCliente['Parentesco']);
        _this2.loadParentescos();
        for (let index = 0; index < _this2.tipoParentescos.length; index++) {
          const element = _this2.tipoParentescos[index];
        }
      });
      return function (_x5) {
        return _ref8.apply(this, arguments);
      };
    }());
  }
  analizaNulo(pagSegmento, segmentIndex) {
    this.setSegment(pagSegmento, segmentIndex);
    /*
    let segmentKey = requiredDataAjustador[indexFront].segmentKey;
    let segmentId = requiredDataAjustador[indexFront].segmentoId;
    let segmentIndex = requiredDataAjustador[indexFront].segmentIndex;
    this.indexFront = $('.index-input').eq(indexFront).val(); //segmentIndex;
    */
  }

  GuardarDatos() {
    var _this3 = this;
    jquery__WEBPACK_IMPORTED_MODULE_19__('#camButtonAju').fadeOut();
    this.switchButtonsAll(1);
    this.isLoading = true;
    this.datosDeEnvio = [];
    console.log('Datos en cacheCliente');
    console.dir(this.cacheClienteFix);
    this.producto = localStorage.getItem('coberturaId');
    if (this.producto) {} else {
      console.log('Mi producto es ' + this.producto);
    }
    let afiliado = localStorage.getItem('dataProcess-ConductorAfiliado');
    this.datosCompletados.push({
      nombre: 'ConductorAfiliado',
      valor: parseInt(afiliado ? afiliado : 1)
    });
    let danioIzq;
    let danioDer;
    let danioFrontal;
    let danioTrasero;
    danioIzq = localStorage.getItem('datos-DanioLataralIzquierdo');
    danioDer = localStorage.getItem('datos-DanioLateralDerecho');
    danioFrontal = localStorage.getItem('datos-DanioFrontal');
    danioTrasero = localStorage.getItem('datos-DanioTrasero');
    if (!danioIzq) {
      this.datosCompletados.push({
        nombre: 'DanioLataralIzquierdo',
        valor: 0
      });
    } else {
      this.datosCompletados.push({
        nombre: 'DanioLataralIzquierdo',
        valor: parseInt(danioIzq)
      });
    }
    if (!danioDer) {
      this.datosCompletados.push({
        nombre: 'DanioLateralDerecho',
        valor: 0
      });
    } else {
      this.datosCompletados.push({
        nombre: 'DanioLateralDerecho',
        valor: parseInt(danioDer)
      });
    }
    if (!danioFrontal) {
      this.datosCompletados.push({
        nombre: 'DanioFrontal',
        valor: 0
      });
    } else {
      this.datosCompletados.push({
        nombre: 'DanioFrontal',
        valor: parseInt(danioFrontal)
      });
    }
    if (!danioTrasero) {
      this.datosCompletados.push({
        nombre: 'DanioTrasero',
        valor: 0
      });
    } else {
      this.datosCompletados.push({
        nombre: 'DanioTrasero',
        valor: parseInt(danioTrasero)
      });
    }
    let descripcionV = localStorage.getItem('dataProcess-DescripcionVehiculo');
    this.datosCompletados.push({
      nombre: 'DescripcionVehiculo',
      valor: descripcionV ? descripcionV : 'Vehículo no identificado adecuadamente'
    });
    let identidad = localStorage.getItem('datos-IdentidaConductor');
    let dpi = localStorage.getItem('datos-DPI_Pasaporte');
    if (!dpi) {
      this.datosCompletados.push({
        nombre: 'DPI_Pasaporte',
        valor: identidad ? identidad : ''
      });
    } else {
      this.datosCompletados.push({
        nombre: 'DPI_Pasaporte',
        valor: dpi ? dpi : ''
      });
    }
    this.datosCompletados.push({
      nombre: 'LesionadosSinAudiencia',
      valor: 0
    });
    let lugar = localStorage.getItem('dataProcess-Lugar');
    this.datosCompletados.push({
      nombre: 'Lugar',
      valor: lugar ? lugar : 'Lugar no identificado adecuadamente'
    });
    let tallerOtroString = localStorage.getItem('elTallerOtro');
    let tallerOtroDireccion = localStorage.getItem('elTallerOtroDireccion');
    let tallerOtro;
    let tallerIdString = localStorage.getItem('datos-TallerMecanicoId');
    let tallerId = parseInt(tallerIdString);
    this.datosCompletados.push({
      nombre: 'TallerMecanicoId',
      valor: parseInt(tallerId)
    });
    //let tallerOtro:any = localStorage.getItem('datos-OtrosTalleres');
    if (tallerId == 1) {
      tallerOtro = tallerOtroString.split('-')[1] + ', ' + tallerOtroDireccion.split('-')[1];
      this.datosCompletados.push({
        nombre: 'OtrosTalleres',
        valor: tallerOtro
      });
    } else {
      this.datosCompletados.push({
        nombre: 'OtrosTalleres',
        valor: 'N/A'
      });
    }
    let reclamo = localStorage.getItem('dataProcess-ReclamoAsegurado');
    this.datosCompletados.push({
      nombre: 'ReclamoAsegurado',
      valor: reclamo ? reclamo : 'No especificado'
    });
    let ciudadId = localStorage.getItem('dataProcess-RefCiudadId');
    this.datosCompletados.push({
      nombre: 'RefCiudadId',
      valor: parseInt(ciudadId ? ciudadId : 0)
    });
    let deptoId = localStorage.getItem('dataProcess-RefDepartamentoId');
    this.datosCompletados.push({
      nombre: 'RefDeptoId',
      valor: parseInt(deptoId ? deptoId : 0)
    });
    this.datosCompletados.push({
      nombre: 'RefMunicipioId',
      valor: ''
    });
    let paisId = localStorage.getItem('dataProcess-RefPaisId');
    this.datosCompletados.push({
      nombre: 'RefPaisId',
      valor: parseInt(paisId ? paisId : 0)
    });
    this.datosCompletados.push({
      nombre: 'RefProveedorAgenteAbogadoId',
      valor: 0
    });
    let agenteId = localStorage.getItem('dataProcess-RefProveedorAgenteId');
    this.datosCompletados.push({
      nombre: 'RefProveedorAgenteId',
      valor: parseInt(agenteId ? agenteId : 0)
    });
    this.datosCompletados.push({
      nombre: 'RefUsuarioId',
      valor: parseInt(agenteId ? agenteId : 0)
    });
    for (let indexf = 0; indexf < this.cacheClienteFix.length; indexf++) {
      const element = this.cacheClienteFix[indexf];
      console.log('Buscando ' + element.nombre + ' en datos Cache');
      if (element.nombre == 'IdAtencion') {
        element.nombre = 'RefAtencionId';
      }
    }
    console.log('Datos en datosCompletados');
    console.dir(this.datosCompletados);
    console.log('Datos en datosIncompletos');
    console.dir(this.datosIncompletos);
    console.log('Datos en daniosSelectAju');
    console.dir(this.daniosSelectAju);
    console.log('Datos en daniosSelectCulpa');
    console.dir(this.daniosSelectCulpa);
    setTimeout(() => {
      this.datosDeEnvio = this.cacheClienteFix.concat(this.datosCompletados);
      console.log('Datos para envio');
      console.dir(this.datosDeEnvio);
      localStorage.setItem('datosDeEnvio', JSON.stringify(this.datosDeEnvio));
      localStorage.setItem('daniosSelectAju', JSON.stringify(this.daniosSelectAju));
      localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));
    }, 900);
    setTimeout(() => {
      this.eliminarDuplicadosEnvio(this.datosDeEnvio);
      const arregloParaEnviar = {};
      let polizaTrunk;
      this.latitud = this.elExpediente[0].LatitudCliente;
      this.longitud = this.elExpediente[0].LongitudCliente;
      for (let indexE = 0; indexE < this.datosDeEnvio.length; indexE++) {
        let element = this.datosDeEnvio[indexE];
        if (element.nombre == "CelularConductor") {
          console.log('Celular Conductor encontrado en datosDeEnvio');
          arregloParaEnviar[element.nombre] = localStorage.getItem('dataProcess-CelularConductor') ? localStorage.getItem('dataProcess-CelularAsegurado') : '';
        }
        if (element.nombre == "Parentesco") {
          if (element.valor == 37 || element.valor == '37') {
            arregloParaEnviar[element.nombre] = '0001';
          } else {
            arregloParaEnviar[element.nombre] = element.valor;
          }
        } else {
          arregloParaEnviar[element.nombre] = element.valor;
        }
        if (element.nombre == "Licencia") {
          console.log('Buscando licencia en cacheClienteFix ' + this.cacheClienteFix.find(e => e.nombre == 'Licencia'));
          console.log('Valor de licencia en cacheClienteFix ' + this.cacheClienteFix[10].nombre + ', valor : ' + this.cacheClienteFix[10].valor);
          console.dir(this.cacheClienteFix);
          arregloParaEnviar[element.nombre] = this.cacheClienteFix[10].valor;
        } else {}
        if (indexE == this.datosDeEnvio.length - 1) {
          console.log('Arreglo final para envio');
          console.dir(arregloParaEnviar);
          const expedienteActual = this.elExpediente && this.elExpediente.length > 0 ? this.elExpediente[0] : {};
          const coordenadasSiniestro = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.resolveClaimCoordinates)(expedienteActual, this.idAtencion);
          this.latitud = coordenadasSiniestro.Latitud;
          this.longitud = coordenadasSiniestro.Longitud;
          let reserva = localStorage.getItem('bpmArray-ValorReserva');
          this.valorReserva = reserva;
          this.datos['valorReserva'] = reserva;
          let fechaToString = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.resolveClaimDate)(expedienteActual);
          let fechaSplit = fechaToString.includes('T') ? fechaToString.split('T')[0] : fechaToString;
          this.nombreDelConductor = localStorage.getItem('datos-NombreConductor');
          if (!this.nombreDelConductor) {
            this.nombreDelConductor = localStorage.getItem('NombreConductor');
          }
          this.inicialGenero = localStorage.getItem('inicialGenero');
          if (this.valorReserva == null || this.valorReserva == undefined) {
            this.valorReserva = '0';
          }
          polizaTrunk = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizePolicyNumber)(expedienteActual.PolizaExterna);
          if (this.valorReserva == null || this.valorReserva == undefined) {
            this.valorReserva = '0';
          }
          arregloParaEnviar['Poliza'] = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizePolicyNumber)(arregloParaEnviar['Poliza'] || expedienteActual.PolizaExterna);
          arregloParaEnviar['PolizaExterna'] = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizePolicyNumber)(arregloParaEnviar['PolizaExterna'] || expedienteActual.PolizaExterna);
          arregloParaEnviar['ChasisVehiculo'] = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizeChassis)(arregloParaEnviar['ChasisVehiculo'] || expedienteActual.Chasis);
          arregloParaEnviar['Latitud'] = coordenadasSiniestro.Latitud;
          arregloParaEnviar['Longitud'] = coordenadasSiniestro.Longitud;
          arregloParaEnviar['Parentesco'] = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizeParentescoCode)(arregloParaEnviar['Parentesco'], this.tipoParentescos);
          let elParentesco = arregloParaEnviar['Parentesco'];
          console.log('He aqui la data siniestro');
          console.dir(arregloParaEnviar);
          this.api.GuardarSiniestroHN(arregloParaEnviar).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
            var _ref10 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              let polizaTrunk;
              console.log('Siniestro guardado');
              console.dir(res);
              //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
              _this3.audienciaId = res;
              _this3.idTablaAjustador = res.toString();
              if (_this3.propiedades.length > 0) {
                for (let index = 0; index < _this3.propiedades.length; index++) {
                  const element = _this3.propiedades[index];
                  const dataPropiedad = [{
                    "RefAjustadorAudienciaId": res,
                    "Nombre": element.NombrePropietario,
                    "Direccion": element.DireccionDelBien,
                    "DaniosPrivado": element.DescripcionDelDanio,
                    "RefAjustadorId": _this3.api.currentUser.ProveedorAgenteId,
                    "Telefono": element.Telefono,
                    "DescripcionDelBien": element.DescripcioDelBien,
                    "DireccionDelBien": element.DireccionDelBien,
                    "DescripcionDelDanio": element.DescripcionDelDanio,
                    "NombreDelBienAfectado": element.BienAfectado
                  }];
                  _this3.api.GuardarPropiedadTercero(dataPropiedad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
                    var _ref12 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
                    return function (_x7) {
                      return _ref12.apply(this, arguments);
                    };
                  }(), /*#__PURE__*/function () {
                    var _ref13 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                      _this3.toaster.presentToast(res.error.Message, 'top', 'propiedad');
                    });
                    return function (_x8) {
                      return _ref13.apply(this, arguments);
                    };
                  }());
                }
              }
              if (_this3.acompaniantes.length > 0) {
                for (let index = 0; index < _this3.acompaniantes.length; index++) {
                  const element = _this3.acompaniantes[index];
                  const dataTercero = {
                    Nombre: element.Nombre,
                    Telefono: element.Telefono,
                    Direccion: element.Direccion,
                    DescripcionLesion: null,
                    DireccionHospitalizacion: null,
                    TipoPersonaSiniestro: 1,
                    RefAjustadorAudienciaId: _this3.audienciaId
                  };
                  console.dir(dataTercero);
                  _this3.api.GuardarPersonaSiniestro(dataTercero).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
                    var _ref15 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
                    return function (_x9) {
                      return _ref15.apply(this, arguments);
                    };
                  }(), /*#__PURE__*/function () {
                    var _ref16 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                      _this3.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                    });
                    return function (_x10) {
                      return _ref16.apply(this, arguments);
                    };
                  }());
                }
              }
              if (_this3.testigos.length > 0) {
                for (let index = 0; index < _this3.testigos.length; index++) {
                  const element = _this3.testigos[index];
                  const dataTercero = {
                    Nombre: element.Nombre,
                    Telefono: element.Telefono,
                    Direccion: element.Direccion,
                    DescripcionLesion: null,
                    DireccionHospitalizacion: null,
                    TipoPersonaSiniestro: 2,
                    RefAjustadorAudienciaId: _this3.audienciaId
                  };
                  console.dir(dataTercero);
                  _this3.api.GuardarPersonaSiniestro(dataTercero).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    //await load.dismiss();
                  }))).subscribe( /*#__PURE__*/function () {
                    var _ref18 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
                    return function (_x11) {
                      return _ref18.apply(this, arguments);
                    };
                  }(), /*#__PURE__*/function () {
                    var _ref19 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                      _this3.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                    });
                    return function (_x12) {
                      return _ref19.apply(this, arguments);
                    };
                  }());
                }
              }
              if (_this3.lesionados.length > 0) {
                for (let index = 0; index < _this3.lesionados.length; index++) {
                  const element = _this3.lesionados[index];
                  const dataTercero = {
                    Nombre: element.Nombre,
                    Telefono: element.Telefono,
                    Direccion: element.Direccion,
                    DescripcionLesion: element.TipoLesion,
                    DireccionHospitalizacion: element.DireccionHospitalizacion,
                    TipoPersonaSiniestro: 3,
                    RefAjustadorAudienciaId: _this3.audienciaId
                  };
                  console.dir(dataTercero);
                  _this3.api.GuardarPersonaSiniestro(dataTercero).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                    //await load.dismiss();
                  }))).subscribe( /*#__PURE__*/function () {
                    var _ref21 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
                    return function (_x13) {
                      return _ref21.apply(this, arguments);
                    };
                  }(), /*#__PURE__*/function () {
                    var _ref22 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                      _this3.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                    });
                    return function (_x14) {
                      return _ref22.apply(this, arguments);
                    };
                  }());
                }
              }
              _this3.insertarConvenioReparacion();
              _this3.api.GuardarIdTablaAjustador(_this3.idAtencion, _this3.idTablaAjustador).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                console.log('Fin de guardar Id de Tabla');
              }))).subscribe( /*#__PURE__*/function () {
                var _ref24 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resTabla) {
                  console.log(resTabla);
                });
                return function (_x15) {
                  return _ref24.apply(this, arguments);
                };
              }());
              setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_19__('#camButtonAju').fadeIn();
                if (!_this3.elExpediente[0].NombreConductor) {
                  _this3.elExpediente.NombreConductor = _this3.nombreDelConductor;
                }
                _this3.nombreDelConductor = localStorage.getItem('datos-NombreConductor');
                if (!_this3.nombreDelConductor) {
                  _this3.nombreDelConductor = localStorage.getItem('NombreConductor');
                }
                const expedienteActualBpm = _this3.elExpediente && _this3.elExpediente.length > 0 ? _this3.elExpediente[0] : {};
                let fechaToString = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.resolveClaimDate)(expedienteActualBpm);
                let fechaSplit = fechaToString.includes('T') ? fechaToString.split('T')[0] : fechaToString;
                let reserva = localStorage.getItem('bpmArray-ValorReserva');
                _this3.valorReserva = reserva;
                _this3.inicialGenero = localStorage.getItem('inicialGenero');
                let elParentesco = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizeParentescoCode)(arregloParaEnviar['Parentesco'], _this3.tipoParentescos);
                polizaTrunk = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizePolicyNumber)(expedienteActualBpm.PolizaExterna);
                const coordenadasBpm = (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.resolveClaimCoordinates)(expedienteActualBpm, _this3.idAtencion);
                _this3.latitud = coordenadasBpm.Latitud;
                _this3.longitud = coordenadasBpm.Longitud;
                if (_this3.valorReserva == null || _this3.valorReserva == undefined) {
                  _this3.valorReserva = '0';
                }
                _this3.dataBPM = {
                  Chasis: (0,_utils_claim_payload_normalizer__WEBPACK_IMPORTED_MODULE_18__.normalizeChassis)(expedienteActualBpm.Chasis),
                  puntoServicio: _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.valoresPredeterminados[0].puntoServicio,
                  Poliza: polizaTrunk,
                  Certificado: _this3.elExpediente[0].Certificado.toString(),
                  NombreAsegurado: _this3.elExpediente[0].Cliente,
                  Sucursal: _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.valoresPredeterminados[0].Sucursal,
                  Producto: _this3.producto,
                  Ramo: _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.valoresPredeterminados[0].Ramo,
                  FechaOcurrencia: fechaSplit,
                  Causa: _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.valoresPredeterminados[0].Causa,
                  ValorReserva: _this3.valorReserva.toString(),
                  UsuarioBPM: _this3.elUsuario.UsuarioBPM,
                  Latitud: _this3.latitud,
                  Longitud: _this3.longitud,
                  NombreConductor: _this3.nombreDelConductor,
                  Genero: _this3.inicialGenero,
                  Parentesco: elParentesco,
                  Observacion: _this3.idTablaAjustador // Guardar Siniestro
                };

                console.log('He aqui la data BPM');
                console.dir(_this3.dataBPM);
                _this3.isLoading = true;
                _this3.estaCompleto = true;
                const bpmValidation = (0,_validation_claim_validation__WEBPACK_IMPORTED_MODULE_16__.validateClaimStage)(_this3.dataBPM, _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_17__.ficohsaBpmValidationRules);
                if (!bpmValidation.complete) {
                  _this3.isLoading = false;
                  _this3.estaCompleto = false;
                  const missingBpm = bpmValidation.missing.map(item => item.label).join(', ');
                  _this3.toaster.presentToastDataMissing('Faltan datos para enviar BPM Ficohsa: ' + missingBpm, 'top', 'bpm');
                  return;
                }
                _this3.api.GuardarBPM(_this3.dataBPM).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this3.isBPMcomplete = true;
                }))).subscribe( /*#__PURE__*/function () {
                  var _ref26 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resAtencion) {
                    console.log("Estoy guardando la data ");
                    if (resAtencion) {
                      console.dir(resAtencion);
                      if (resAtencion[0].codigo == 0 || resAtencion[0].codigo == "0") {
                        _this3.toaster.presentToastNoButtons(resAtencion[0].descripcion, 'top', 'bpm');
                        _this3.codigoBPMFicohsa = resAtencion[0].solicitud_bpm;
                        _this3.codigoReclamoFicohsa = resAtencion[0].numero_reclamo;
                        _this3.elFiniquito.NumeroReclamo = resAtencion[0].numero_reclamo;
                        localStorage.setItem('IdTablaAjustador', _this3.idTablaAjustador);
                        localStorage.setItem('codigoBPMF', _this3.codigoBPMFicohsa);
                        localStorage.setItem('codigoReclamo', resAtencion[0].numero_reclamo);
                        let dataBPMupdate = {
                          IdTablaAjustador: parseInt(_this3.idTablaAjustador),
                          CodigoReclamoFicohsa: _this3.codigoReclamoFicohsa.toString(),
                          CodigoBPMFicohsa: _this3.codigoBPMFicohsa.toString()
                        };
                        const bpmConfirmation = (0,_validation_claim_validation__WEBPACK_IMPORTED_MODULE_16__.validateClaimStage)(dataBPMupdate, _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_17__.ficohsaBpmConfirmationRules);
                        if (!bpmConfirmation.complete) {
                          _this3.isLoading = false;
                          const missingConfirmation = bpmConfirmation.missing.map(item => item.label).join(', ');
                          _this3.toaster.presentToastDataMissing('Faltan datos de confirmaciÃ³n BPM Ficohsa: ' + missingConfirmation, 'top', 'bpm');
                          return;
                        }
                        if (_this3.atencionId && _this3.codigoReclamoFicohsa && _this3.tipoDeCobertura) {
                          let updateFiniquito = {
                            RefAtencionId: _this3.atencionId,
                            NumeroReclamo: _this3.codigoReclamoFicohsa.toString(),
                            TipoCoberturaFicohsa: _this3.tipoDeCobertura
                          };
                          _this3.api.ActualizarFiniquito(updateFiniquito).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                            console.log('This is the end finiquito');
                          }))).subscribe( /*#__PURE__*/function () {
                            var _ref28 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
                            return function (_x17) {
                              return _ref28.apply(this, arguments);
                            };
                          }());
                        }
                        _this3.api.ActualizarBPM(dataBPMupdate).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                          console.log('This is the end');
                          _this3.isLoading = false;
                          _this3.clearSegmentsStorage();
                        }))).subscribe( /*#__PURE__*/function () {
                          var _ref30 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                            console.log('Eeeeeeexitooooo! ');
                            _this3.isEeexittoooo = true;
                            _this3.miLogRespuesta = res;
                            console.dir(res);
                            setTimeout(() => {
                              _this3.switchButtons(1);
                            }, 6000);
                          });
                          return function (_x18) {
                            return _ref30.apply(this, arguments);
                          };
                        }(), /*#__PURE__*/function () {
                          var _ref31 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
                            _this3.isLoading = false;
                            let errorKey = 'acsel';
                            let elError = error.error.Message;
                            setTimeout(() => {
                              _this3.switchButtons(2);
                            }, 6000);
                            console.log('El resdultado del intento con el bpm es ' + elError.toString().toLowerCase().includes(errorKey));
                            console.log('El resdultado indexOf del intento con el bpm es ' + elError.toString().toLowerCase().indexOf(errorKey));
                            console.dir(res);
                            if (elError.toString().toLowerCase().includes(errorKey)) {
                              _this3.toaster.presentToast('Este chasis no está registrado en un programa de Seguros Ficohsa. Esta atención deberá ser procesada de diferente forma. Consulta a tu administrador de operaciones para una mejor resolución.', 'top', 'solicitante');
                            } else {
                              _this3.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                              _this3.miLogRespuesta = res;
                            }
                          });
                          return function (_x19) {
                            return _ref31.apply(this, arguments);
                          };
                        }());
                      } else {
                        setTimeout(() => {
                          _this3.switchButtons(2);
                        }, 6000);
                        _this3.isLoading = false;
                        _this3.toaster.presentToastDataMissing("Código :  " + resAtencion[0].codigo + ', error :' + resAtencion[0].descripcion, 'top', 'bpm');
                      }
                    } else {
                      setTimeout(() => {
                        _this3.switchButtons(2);
                      }, 6000);
                      _this3.isLoading = false;
                      _this3.toaster.presentToast(resAtencion.error.Message, 'top', 'solicitante');
                    }
                  });
                  return function (_x16) {
                    return _ref26.apply(this, arguments);
                  };
                }(), /*#__PURE__*/function () {
                  var _ref32 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
                    _this3.isLoading = false;
                    _this3.toaster.presentToast(error.error.Message, 'top', 'solicitante');
                  });
                  return function (_x20) {
                    return _ref32.apply(this, arguments);
                  };
                }());
              }, 6000); //this.randomize(3, 6));
              //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            });
            return function (_x6) {
              return _ref10.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref33 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {});
            return function (_x21) {
              return _ref33.apply(this, arguments);
            };
          }());
          /**/
        }
      }
    }, 1500);
    setTimeout(() => {
      console.log('Datos para envio corregido?');
      console.dir(this.datosDeEnvio);
    }, 1800);
  }
  validarDatos(origen) {
    var _this4 = this;
    this.isLoading = true;
    this.mostrarPanelValidacion = true;
    this.datosComunes = [];
    this.cacheCliente = [];
    this.validaNulosAju = [];
    this.cacheClienteFix = [];
    this.datosIncompletos = [];
    this.datosCompletados = [];
    this.evaluarFotos();
    this.evaluarDeuda();
    this.cantidadNulos = 1;
    jquery__WEBPACK_IMPORTED_MODULE_19__('#camButtonAju').fadeOut();
    //this.accordionGroup.value = [];
    //this.toogleAccordion2('second');
    let fotosLocal = JSON.parse(localStorage.getItem('fotos-' + this.atencionId));
    if (fotosLocal) {
      this.fotos = fotosLocal;
    }
    this.api.ObtenercacheCliente(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
      var _ref35 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this4.cacheCliente = res && res.length > 0 ? res[0] : {};
        _this4.cacheClienteFix = _this4.normalizeRecordForReview(_this4.cacheCliente);
        _this4.datosCompletados = _this4.collectAjustadorLocalData();
        _this4.completeAjustadorValidationReview();
      });
      return function (_x22) {
        return _ref35.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref36 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        console.log('No se pudo obtener el cache del cliente para validacion');
        console.dir(error);
        _this4.cacheCliente = [];
        _this4.cacheClienteFix = [];
        _this4.datosCompletados = _this4.collectAjustadorLocalData();
        _this4.completeAjustadorValidationReview();
      });
      return function (_x23) {
        return _ref36.apply(this, arguments);
      };
    }());
  }
  evaluarDeuda() {
    let adeuda = localStorage.getItem('AcuerdoDeDeuda-' + this.idAtencion);
    this.AcuerdoDeDeuda = adeuda === 'true';
    if (this.AcuerdoDeDeuda == true) {} else {}
  }
  evaluarFotos() {
    let fotosLocal = JSON.parse(localStorage.getItem('fotos-' + this.atencionId));
    let enviadas;
    if (fotosLocal) {
      this.fotos = fotosLocal;
      enviadas = localStorage.getItem('fotosEnviadas-' + this.atencionId);
      this.fotosEnviadas = enviadas == 'true';
      if (this.fotos.length == 0) {
        if (this.fotosEnviadas == false) {
          this.textoFotos = this.textoNoFotos + '. ' + this.textoFotosNoEnviadas + '. ' + this.textoFotosInfo;
        } else {
          this.textoFotos = this.textoNoFotos + '. ' + this.textoFotosInfo;
        }
      } else {
        if (this.fotosEnviadas == false) {
          this.textoFotos = this.textoFotosNoEnviadas + '. ' + this.textoFotosInfo;
        } else {
          this.textoFotos = '';
        }
      }
    }
  }
  evaluarDanios() {
    console.log('Los daños seleccionados son ');
    console.dir(this.daniosSelectAju);
    if (this.daniosSelectAju.length == 0) {
      this.danioMessage = 'No se han seleccionado daños';
      this.danioPosition = 'top';
      this.danioClass = 'danioToast';
      this.textoInfo = 'Faltan daños por seleccionar. Puedes guardar la atención, sin embargo no se reflejarán daños en los informes.';
      jquery__WEBPACK_IMPORTED_MODULE_19__('#infoTexto').fadeIn();
    } else {
      for (let index = 0; index < this.daniosSelectAju.length; index++) {
        const element = this.daniosSelectAju[index];
        let codigoDanio = element.Id;
        let elTipo = localStorage.getItem('TipoReparacion-' + codigoDanio);
        if (index == this.daniosSelectAju.lenght - 1) {
          localStorage.setItem('daniosSeleccionados', JSON.stringify(this.daniosSelectAju));
        }
      }
      //this.eliminarDuplicadosDanios(this.daniosSelectAju, 2);
    }

    if (this.datosIncompletos.length > 0) {
      //$('#validateButtona').fadeIn();
      //$('#infoIncompleto').fadeIn();
      //$('#dataNullAju').fadeOut(); $('#dataNullAju').attr('style', 'display:none !important;');
    } else {
      //$('#validateButtona').fadeOut();
      //$('#infoIncompleto').fadeOut();
    }
    if (this.daniosSelectCulpa.length == 0) {
      this.textoInfoDaniosCulpa = 'Falta completar el acuerdo de deuda. Puedes guardar la atención, sin embargo no se reflejarán datos del culpable en los informes.';
    } else {
      //this.eliminarDuplicadosDanios(this.daniosSelectCulpa, 2);
    }
  }
  switchButtons(type) {
    if (type == 1) {
      //$('#validateButtona').fadeOut();
      //$('#infoIncompleto').fadeIn();
      //$('#saveDataButtona').fadeOut();
      //$('#validateAgainButtona').fadeOut();
      //$('#cancelaButtona').fadeOut();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#resultsButtona').fadeIn();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#goHomeButtona').fadeIn();
    } else {
      //$('#validateButtona').fadeIn();
      //$('#infoIncompleto').fadeIn();
      //$('#saveDataButtona').fadeIn();
      //$('#validateAgainButtona').fadeIn();
      //$('#cancelaButtona').fadeIn();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#resultsButtona').fadeOut();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#goHomeButtona').fadeOut();
    }
  }
  switchButtonsAll(type) {
    if (type == 1) {
      //$('#validateButtona').fadeOut();
      //$('#infoIncompleto').fadeIn();
      //$('#saveDataButtona').fadeOut();
      //$('#validateAgainButtona').fadeOut();
      //$('#cancelaButtona').fadeOut();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#resultsButtona').fadeOut();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#goHomeButtona').fadeOut();
    } else {
      //$('#validateButtona').fadeOut();
      //$('#infoIncompleto').fadeIn();
      //$('#saveDataButtona').fadeIn();
      //$('#validateAgainButtona').fadeIn();
      //$('#cancelaButtona').fadeIn();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#resultsButtona').fadeOut();
      jquery__WEBPACK_IMPORTED_MODULE_19__('#goHomeButtona').fadeOut();
    }
  }
  goResults() {
    this.router.navigate(['./end-process'], {
      queryParams: {
        Id: this.atencionId,
        CodigoReclamoFicohsa: this.codigoReclamoFicohsa.toString(),
        CodigoBPMFicohsa: this.codigoBPMFicohsa.toString()
      }
    });
  }
  goHome() {
    window.location.reload();
  }
  toValidationRecord(items) {
    return (items || []).reduce((record, item) => {
      if (item && item.nombre) {
        record[item.nombre] = item.valor;
      }
      return record;
    }, {});
  }
  normalizeRecordForReview(record) {
    if (!record) {
      return [];
    }
    const source = Array.isArray(record) ? record[0] : record;
    if (!source || typeof source !== 'object') {
      return [];
    }
    return Object.keys(source).filter(key => key && key !== '$id').map(key => ({
      nombre: key === 'IdAtencion' ? 'RefAtencionId' : key,
      valor: source[key]
    }));
  }
  valueBelongsToCurrentAttention(value) {
    if (value === null || value === undefined) {
      return false;
    }
    const stringValue = value.toString();
    const currentAttention = this.idAtencion?.toString();
    if (!currentAttention || !stringValue.includes('-')) {
      return true;
    }
    const [possibleAttention] = stringValue.split('-');
    if (possibleAttention === currentAttention) {
      return true;
    }
    return /^\d{5,}$/.test(possibleAttention) ? false : true;
  }
  cleanStoredValue(value) {
    if (value === null || value === undefined) {
      return value;
    }
    const stringValue = value.toString();
    const currentAttention = this.idAtencion?.toString();
    if (currentAttention && stringValue.startsWith(currentAttention + '-')) {
      return stringValue.split('-').slice(1).join('-');
    }
    return value;
  }
  collectAjustadorLocalData() {
    const completed = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || key.indexOf('datos-') !== 0) {
        continue;
      }
      const storageKey = key.split('-').slice(1).join('-');
      const storageVal = localStorage.getItem(key);
      if (!this.valueBelongsToCurrentAttention(storageVal)) {
        continue;
      }
      completed.push({
        nombre: storageKey,
        valor: this.cleanStoredValue(storageVal)
      });
    }
    return completed;
  }
  completeAjustadorValidationReview() {
    console.log('Cache cliente para revision');
    console.dir(this.cacheClienteFix);
    console.log('Datos completados para revision');
    console.dir(this.datosCompletados);
    const datosAjustador = this.buildAjustadorValidationRecord();
    const validationResult = (0,_validation_claim_validation__WEBPACK_IMPORTED_MODULE_16__.validateClaimStage)(datosAjustador, _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_17__.ajustadorScreenValidationRules);
    this.datosIncompletos = validationResult.missing.map(issue => {
      const item = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.requiredDataAjustador.find(requiredItem => requiredItem.nombre === issue.field);
      return {
        nombre: issue.label,
        valor: 'null',
        elementSegmento: item?.pagSegmento,
        indexSegmento: item?.segmentIndex
      };
    });
    this.datosComunes = _validation_claim_validation_rules__WEBPACK_IMPORTED_MODULE_17__.ajustadorScreenValidationRules.filter(rule => !validationResult.missing.some(issue => issue.field === rule.field)).map(rule => ({
      nombre: rule.field,
      valor: datosAjustador[rule.field]
    }));
    jquery__WEBPACK_IMPORTED_MODULE_19__('#camButtonAju').fadeIn();
    this.cantidadNulos = this.datosIncompletos.length;
    this.isLoading = false;
    this.focusValidationPanel();
    if (this.cantidadNulos == 0) {
      this.estaEvaluado = true;
      localStorage.setItem('estaEvaluado', 'true');
      this.evaluarDanios();
      const iconoContenedor = document.getElementById('infoText');
      if (iconoContenedor && !iconoContenedor.querySelector('.validation-success-icon')) {
        const iconoAprobado = document.createElement('img');
        iconoAprobado.src = '../../assets/img/aprobar.svg';
        iconoAprobado.className = 'validation-success-icon';
        iconoAprobado.style.width = '45px';
        iconoAprobado.style.height = '45px';
        iconoAprobado.style.position = 'absolute';
        iconoAprobado.style.top = '-5px';
        iconoAprobado.style.right = '-5px';
        iconoContenedor.appendChild(iconoAprobado);
      }
      this.textoInfo = 'Datos completados con éxito! Ahora puedes proceder a enviarlos haciendo click en GUARDAR DATOS';
      jquery__WEBPACK_IMPORTED_MODULE_19__('#spanProgressAju').removeClass('progress');
      jquery__WEBPACK_IMPORTED_MODULE_19__('#spanProgressAju').addClass('progress-end');
    } else {
      this.estaEvaluado = false;
      localStorage.setItem('estaEvaluado', 'true');
      this.textoInfo = 'Validación completada. Revisa los datos incompletos para continuar.';
      jquery__WEBPACK_IMPORTED_MODULE_19__('#spanProgressAju').removeClass('progress-end');
      jquery__WEBPACK_IMPORTED_MODULE_19__('#spanProgressAju').addClass('progress');
    }
  }
  buildAjustadorValidationRecord() {
    const datosAjustador = this.toValidationRecord(this.datosCompletados);
    const currentAttention = this.idAtencion?.toString();
    return _environments_predeterminados__WEBPACK_IMPORTED_MODULE_15__.requiredDataAjustador.reduce((record, item) => {
      const storageValue = localStorage.getItem(item.storageKey);
      const belongsToCurrentAttention = this.valueBelongsToCurrentAttention(storageValue);
      if (belongsToCurrentAttention) {
        record[item.nombre] = datosAjustador[item.nombre] ?? this.cleanStoredValue(storageValue);
      }
      return record;
    }, {});
  }
  evaluarDatosComunes(completados, incompletos) {
    const nombresArr2 = new Set(incompletos.map(e => e.nombre));
    const comunes = completados.filter(e => nombresArr2.has(e.nombre));
    this.datosComunes = comunes;
    console.log('comunes ');
    console.dir(comunes);
  }
  evaluateKm(event) {
    this.ajustador.Kilometraje = event.target.value;
    this.datos['Kilometraje'] = event.target.value;
    if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '' || this.ajustador.Kilometraje == 0) {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      this.ajustador.Kilometraje = 0;
    } else {
      this.toaster.dismissToast();
      //console.log(this.ajustador.Kilometraje);
    }
  }

  presentToastEditSig(message, position, clase) {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toast.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'CANCELAR',
          role: 'cancel',
          handler() {
            this.isEditSig = false;
          }
        }, {
          text: 'EDITAR FIRMA',
          role: 'confirm',
          handler() {
            this.isEditSig = true;
          }
        }]
      });
      yield toast.present();
    })();
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  checarCoberturas() {
    setTimeout(() => {
      let cobert = localStorage.getItem('coberturas');
      this.coberturas = JSON.parse(cobert);
      console.log('Las coberturas en segmento solicitante');
      console.dir(this.coberturas);
      if (this.coberturas.length == 0) {
        this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios.', 'top', 'danger', 10000);
        this.esConduceSeguro = true;
      } else {
        this.esConduceSeguro = false;
      }
    }, 300);
  }
  ionViewDidEnter() {
    var _this6 = this;
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
      this.api.Valida_Lista_Coberturas(cobertura).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this6.isLoading = false;
      }))).subscribe(res => {
        console.log('Cobertura de póliza ');
        console.dir(res);
        //localStorage.setItem('coberturas', JSON.stringify(res));
      });
    }, 3000);
    setTimeout(() => {
      let evaluado = localStorage.getItem('estaEvaluado');
      this.estaEvaluado = true; //(evaluado === 'true');
      console.log('El estado de evaluación es : ' + this.estaEvaluado);
      if (this.estaEvaluado == true) {
        //$('#validateButtona').fadeOut();
        //$('#saveDataButtona').fadeIn();
        //$('#validateAgainButtona').fadeIn();
        //$('#cancelaButtona').fadeIn();
        this.validarDatos(2);
        this.listarDanios();
      }
      //this.validarDatos();
      //this.setFirstSegment()
    }, 1000);
  }
  damagePosition(valor) {
    switch (valor) {
      case 1:
        if (this.formulario.DanioLataralIzquierdo === 1) {
          this.formulario.DanioLataralIzquierdo = 0;
          this.datos.DanioLataralIzquierdo = 0;
        } else {
          this.formulario.DanioLataralIzquierdo = 1;
          this.datos.DanioLataralIzquierdo = 1;
        }
        break;
      case 2:
        if (this.formulario.DanioLateralDerecho === 1) {
          this.formulario.DanioLateralDerecho = 0;
          this.datos.DanioLateralDerecho = 0;
        } else {
          this.formulario.DanioLateralDerecho = 1;
          this.datos.DanioLateralDerecho = 1;
        }
        break;
      case 3:
        if (this.formulario.VehiculoVolcado === 1) {
          this.formulario.VehiculoVolcado = 0;
          this.datos.VehiculoVolcado = 0;
        } else {
          this.formulario.VehiculoVolcado = 1;
          this.datos.VehiculoVolcado = 1;
        }
        break;
      case 4:
        if (this.formulario.DanioFrontal === 1) {
          this.formulario.DanioFrontal = 0;
          this.datos.DanioFrontal = 0;
        } else {
          this.formulario.DanioFrontal = 1;
          this.datos.DanioFrontal = 1;
        }
        break;
      case 5:
        if (this.formulario.DanioTrasero === 1) {
          this.formulario.DanioTrasero = 0;
          this.datos.DanioTrasero = 0;
        } else {
          this.formulario.DanioTrasero = 1;
          this.datos.DanioTrasero = 1;
        }
        break;
      default:
        break;
    }
  }
  loadUser() {
    var _this7 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.elUsuario = _this7.api.currentUser;
      _this7.firmaPrecargadaInspector = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.imagePrefix + _this7.elUsuario.Firma;
      _this7.idAjustador = _this7.elUsuario.ProveedorAgenteId;
      _this7.ajustadorNombre = _this7.elUsuario.NombreAgente;
      const user = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_11__.Preferences.get({
        key: USER_DATA
      });
      let userParse = JSON.parse(user.value);
    })();
  }
  loadGeneros() {
    var _this8 = this;
    this.api.ListTipoGenero().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref39 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.tipoGeneros = res;
        //console.log("Mis generos");
        //console.dir(this.tipoGeneros);
      });
      return function (_x24) {
        return _ref39.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref40 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x25) {
        return _ref40.apply(this, arguments);
      };
    }());
  }
  loadParentescos() {
    var _this9 = this;
    let cacheParentesco;
    cacheParentesco = this.cacheCliente['Parentesco'];
    this.api.ListTipoParentesco(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref42 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this9.tipoParentescos = res;
        console.log("Mis parentescos");
        console.dir(_this9.tipoParentescos);
        console.log('Cache de cliente');
        console.dir(_this9.cacheCliente);
        console.dir(_this9.tipoParentescos);
        for (let index = 0; index < _this9.tipoParentescos.length; index++) {
          const element = _this9.tipoParentescos[index];
          //console.log(element.CODIGO)
          if (cacheParentesco == element.CODIGO) {
            console.log(element.DESCRIPCION);
            _this9.elParentesco = element.CODIGO;
            _this9.elTipoParentesco = element.CODIGO;
          }
        }
      });
      return function (_x26) {
        return _ref42.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref43 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this9.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x27) {
        return _ref43.apply(this, arguments);
      };
    }());
  }
  loadSiniestros() {
    var _this10 = this;
    this.api.ListTipoSiniestro(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref45 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this10.tipoSiniestros = res;
        console.log("Mis siniestros");
        console.dir(_this10.tipoSiniestros);
      });
      return function (_x28) {
        return _ref45.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref46 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this10.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x29) {
        return _ref46.apply(this, arguments);
      };
    }());
  }
  getTalleres() {
    var _this11 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.api.ListTalleres().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this11.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref48 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log('Los talleres');
          console.dir(res);
          _this11.talleres = res;
        });
        return function (_x30) {
          return _ref48.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref49 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this11.alert.create({
            cssClass: 'ajustador-form-alert',
            header: 'HELP',
            message: res.error.Message,
            buttons: [{
              text: 'OK',
              role: 'cancel',
              cssClass: 'alert-button-ok'
            }]
          });
          yield alert.present();
        });
        return function (_x31) {
          return _ref49.apply(this, arguments);
        };
      }());
    })();
  }
  getDanios() {
    var _this12 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.isLoading = true;
      _this12.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this12.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref51 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this12.danios = res;
          _this12.danioSearchable = res;
          _this12.results = res;
          _this12.daniosIndex = _this12.danios.length;
          _this12.listarDanios();
          //console.log("Los danios");
          //console.dir(this.danios);
        });
        return function (_x32) {
          return _ref51.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref52 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this12.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x33) {
          return _ref52.apply(this, arguments);
        };
      }());
    })();
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.danioSearchable.filter(d => d.Descripcion.toLowerCase().indexOf(query) > -1);
  }
  verificarDeuda() {
    this.deudaSent = localStorage.getItem('deudaSent') === 'true';
    if (this.deudaSent == true) {
      console.log(this.deudaSent);
    } else {
      this.deudaSent = false;
    }
  }
  handleSave() {
    // se elimina getcountry
    this.validarDatos(3);
  }
  goFotos() {
    this.router.navigate(['./cargar-archivos']);
  }
  goESignature() {
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    this.router.navigate(['./esignature']);
  }
  goBeneficiario() {
    this.router.navigate(['./beneficiario']);
  }
  fixThis() {
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    //this.router.navigate(['./esignature']);
  }

  getCountry() {
    var _this13 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
      //console.log("Mi localidad es ");
      //console.dir(this.laLocalidad)
      _this13.miLocalidad = JSON.stringify(_this13.laLocalidad);
      _this13.miPais = _this13.laLocalidad[0].countryCode;
      _this13.miPaisNombre = _this13.laLocalidad[0].countryName;
      localStorage.setItem('codigoPais', _this13.miPais);
      localStorage.setItem('nombrePais', _this13.miPaisNombre);
      _this13.latitud = _this13.laLocalidad[0].latitude;
      _this13.longitud = _this13.laLocalidad[0].longitude;
      _this13.validarDatos(4);
    })();
  }
  scrollToElement() {
    jquery__WEBPACK_IMPORTED_MODULE_19__('#elemAju').animate({
      scrollTop: 200
    }, 1000);
  }
  getCanvasWith() {
    this.panelWidth = document.getElementById('cardAseguradoFinal').clientWidth;
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.panelWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.panelWidth - 50;
    }
  }
  identificarPais() {
    this.miPais = localStorage.getItem('codigoPais');
    if (this.miPais == "HN") {
      this.codigoPais = 'hn';
    } else if (this.miPais == "GT") {
      this.codigoPais = 'gt';
    }
  }
  getTipoSolicitante() {
    var _this14 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.isLoading = true;
      _this14.api.ListTipoDeSolicitanteInformeAjuste().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        //        await load.dismiss();
        _this14.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref54 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this14.tipoSolicitante = res;
        });
        return function (_x34) {
          return _ref54.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref55 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this14.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        });
        return function (_x35) {
          return _ref55.apply(this, arguments);
        };
      }());
    })();
  }
  getTipoAcuerdos() {
    this.api.ListarTiposAcuerdo().pipe();
  }
  getTipoFirma() {
    var _this15 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    const load = await this.loading.create();
      //    await  load.present();
      _this15.isLoading = true;
      _this15.api.ListTiposDeFotografia().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this15.isLoading = false;
        //        await load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref57 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this15.tipoFirma = res;
        });
        return function (_x36) {
          return _ref57.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref58 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this15.alert.create({
            cssClass: 'ajustador-form-alert',
            header: 'HELP',
            message: res.error.Message,
            buttons: [{
              text: 'OK',
              role: 'cancel',
              cssClass: 'alert-button-ok'
            }]
          });
          yield alert.present();
        });
        return function (_x37) {
          return _ref58.apply(this, arguments);
        };
      }());
    })();
  }
  getTipoCombustible() {
    var _this16 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    const load = await this.loading.create();
      //    await  load.present();
      _this16.isLoading = true;
      _this16.api.ListTipoCombustible().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this16.isLoading = false;
        //        await load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref60 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this16.tipoCombustible = res;
        });
        return function (_x38) {
          return _ref60.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref61 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this16.alert.create({
            cssClass: 'ajustador-form-alert',
            header: 'HELP',
            message: res.error.Message,
            buttons: [{
              text: 'OK',
              role: 'cancel',
              cssClass: 'alert-button-ok'
            }]
          });
          yield alert.present();
        });
        return function (_x39) {
          return _ref61.apply(this, arguments);
        };
      }());
    })();
  }
  getTiposDeCobertura() {
    var _this17 = this;
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this17.isLoading = false;
      //this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
      //this.finiquitoCompleto = true;
      //await load.dismiss();
    }))).subscribe( /*#__PURE__*/function () {
      var _ref63 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la cobertura');
        console.dir(res);
        _this17.tiposdeCobertura = res;
        //this.idTablaAjustador = res.toString();
      });
      return function (_x40) {
        return _ref63.apply(this, arguments);
      };
    }());
  }
  getElTipoLicencia(event) {
    this.elTipoLicenciaId = event.target.value;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      const laLicenciaTipo = element.TipoLicencia;
      if (element.Id == this.elTipoLicenciaId) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tipoLicenciaDisplay').text(laLicenciaTipo);
      }
      if (this.elTipoLicenciaId.toString() == element.Id.toString()) {
        this.licenciaTipo = element.TipoLicencia;
        //console.log(this.licenciaTipo);
      }
    }
  }

  getElTipoGenero(event) {
    this.elTipoGenero = event.target.value;
    //console.log(gender)
    console.dir(this.tipoGeneros);
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == this.elTipoGenero) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tipoDeGeneroDisplay').text(element.Genero);
      }
    }
    this.datos['Sexo'] = event.target.value;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
      //console.log(this.inicialGenero);
    } else if (this.elTipoGenero == 2) {
      this.inicialGenero = "F";
      //console.log(this.inicialGenero);
    }
  }

  getTipoLicencia(paisIdentidad) {
    var _this18 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    const load = await this.loading.create();
      //    await  load.present();
      _this18.isLoading = true;
      _this18.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this18.isLoading = false;
        //        await load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref65 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this18.tipoLicencia = res;
          //console.log("El tipo de licencia es : ");
          //console.dir(res);
        });
        return function (_x41) {
          return _ref65.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref66 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this18.alert.create({
            cssClass: 'ajustador-form-alert',
            header: 'HELP',
            message: res.error.Message,
            buttons: [{
              text: 'OK',
              role: 'cancel',
              cssClass: 'alert-button-ok'
            }]
          });
          yield alert.present();
        });
        return function (_x42) {
          return _ref66.apply(this, arguments);
        };
      }());
    })();
  }
  getElTipoParentesco(event) {
    this.elTipoParentesco = event.target.value;
    this.datos['Parentesco'] = event.target.value;
    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      if (this.elTipoParentesco == element.CODIGO) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#parentescoDisplay').text(element.DESCRIPCION);
      }
    }
  }
  getElTipoSiniestro(event) {
    this.elTipoSiniestro = event.target.value;
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];
      if (element.CODIGO == this.elTipoSiniestro) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
  }
  hiddenMenu(i) {
    if (!this.menu[i]) {
      this.menu = this.menu.reduce(x => {
        return [...x, false];
      }, []);
    }
    this.menu[i] = !this.menu[i];
  }
  randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //.toFixed(2);
  }

  onIonInfinite(ev) {
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }
  next(extra) {
    this.router.navigate(['./cargar-archivos'], extra);
  }
  saveFirma() {
    //console.log(this.sig.toDataURL("image/jpeg"));
  }
  goBack() {
    this.alertaSalir();
    //this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  alertaSalir() {
    var _this19 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this19.alert.create({
        cssClass: 'ajustador-form-alert',
        header: 'Salir del formulario?',
        message: 'Los datos se perderan sin haber enviado. Salir?',
        buttons: _this19.alertButtons
      });
      yield alert.present();
    })();
  }
  entraNombre(event) {
    this.elExpediente.Cliente = event.target.value;
  }
  entraNombreConductor(event) {
    console.log("Conductor " + event.target.value);
    this.nombreDelConductor = event.target.value;
  }
  entraNombreAjustador(event) {
    console.log("Conductor " + event.target.value);
  }
  entraDanioDescripcion(event) {
    this.datos.DescripcionDanio = event.target.value;
    this.datos['Descripcion'] = event.target.value;
  }
  entraTipoCombustible(event) {
    this.datos.RefTipoCombustibleId = event.target.value;
    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == event.target.value) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tipoCombustibleDisplay').text(element.TipoCombustible);
      }
    }
  }
  entraCompromisoPago(event) {
    console.log('Compromiso Pago ');
    console.dir(event);
    console.log(event.target.value);
    this.datos['CulpableCompromisoPago'] = event;
  }
  entraObservacionCompromisoPago(event) {
    this.datos['ObservacionCompromisoPago'] = event.target.value;
  }
  entraAC(event) {
    this.datos.AC = event.target.value;
  }
  entraRines(event) {
    this.datos.Rines = event.target.value;
  }
  entraBolsaAire(event) {
    this.datos.BolsaAire = event.target.value;
  }
  entraCierreCentralizado(event) {
    this.datos.CierreCentralizado = event.target.value;
  }
  entraMecanico(event) {
    this.datos.Mecanico = event.target.value;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == event.target.value) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tiposTransmisionDisplay').text(element.nombre);
      }
    }
  }
  entraRetrovisorElectronico(event) {
    //this.dataAppend.RetrovisorElectronico = event.target.value;
    this.datos.RetrovisorElectronico = event.target.value;
  }
  entraOverfenders(event) {
    //this.dataAppend.Overfenders = event.target.value;
    this.datos.Overfenders = event.target.value;
  }
  entraColaPato(event) {
    //this.dataAppend.ColaPato = event.target.value;
    this.datos.ColaPato = event.target.value;
  }
  entraCintaDecorativa(event) {
    //this.dataAppend.CintaDecorativa = event.target.value;
    this.datos.CintaDecorativa = event.target.value;
  }
  entraLicenciaEstado(event) {
    console.log('licencia estado ' + event.target.value);
    //this.dataAppend.LicenciaEstado = event.target.value;
    this.datos['LicenciaEstado'] = event.target.value;
  }
  entraTel(event) {
    this.elExpediente.TelefonoOrigen = event.target.value;
    this.datos['TelefonoOrigen'] = event.target.value;
  }
  entraCorreo(event) {
    this.elExpediente.CorreoElectronico = event.target.value;
    this.datos['CorreoElectronico'] = event.target.value;
  }
  entraTaller(event) {
    this.datos.TallerMecanicoId = event.target.value;
    console.log(this.tallerOtro);
    console.log(event.target.value);
    console.dir(this.talleresFiltrados);
    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];
      if (element.Id == event.target.value) {
        jquery__WEBPACK_IMPORTED_MODULE_19__('#tallerDisplay').text(element.NombreTaller);
      }
    }
    // talleresFiltrados
  }

  entraTallerOtro(event) {
    this.tallerOtro = event.target.value;
    console.log(this.tallerOtro);
    localStorage.setItem('datos-OtrosTalleres', this.tallerOtro);
  }
  entraTallerOtroDireccion(event) {
    this.tallerOtroDireccion = event.target.value;
    console.log(this.tallerOtroDireccion);
  }
  entraPesado(event) {
    this.talleresFiltrados = [];
    this.esPesado = event.target.value;
    console.log(this.esPesado);
    //this.filtrarTalleres();
  }

  entraObservaciones(event) {
    this.datos['Observaciones'] = event.target.value;
  }
  entraObservacionesFinales(event) {
    this.datos['ObservacionesFinales'] = event.target.value;
  }
  entraObservacionesTaller(event) {
    this.datos['ObservacionesTaller'] = event.target.value;
  }
  filtrarTalleres() {
    if (this.esPesado == '2') {
      if (this.between(this.elExpediente[0].Year, _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.rangoAnios[0].min10, _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.rangoAnios[0].max) == true) {
        console.log(this.between(this.elExpediente[0].Year, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.rangoAnios[0].max));
        if (this.between(this.elExpediente[0].Year, 2019, _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.rangoAnios[0].max) == true) {
          // agregar al filtro talleres categoria A
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[0]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[1]);
        } else if (this.between(this.elExpediente[0].Year, 2015, 2018) == true) {
          // agregar al filtro talleres categoria B
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[2]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[3]);
        } else {
          // agregar al filtro talleres categoria C
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[4]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[5]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[6]);
          this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[7]);
        }
      }
    } else {
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[8]);
      this.talleresFiltrados.push(_environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[9]);
      console.dir(this.talleresFiltrados);
    }
  }
  elminaDanio(i) {
    this.daniosSelectAju.splice(i, 1);
  }
  openDanioSearch() {
    this.isSearch = true;
    //this.toaster.presentToastNoButtons('Widget en desarrollo. Proximamente en función.', 'top', 'hey'); 
  }

  closeDanioSearch() {
    this.isSearch = false;
    let losSegmentos = jquery__WEBPACK_IMPORTED_MODULE_19__('.segment-item-aju');
    let howManyAju = losSegmentos.length;
    setTimeout(() => {
      losSegmentos.eq(3).click();
    }, 600);
    //    
  }

  presentToast(message, position, clase) {
    var _this20 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this20.toast.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this20.toast.create({
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
  seleccionarTipoCobertura(event) {
    this.tipoDeCobertura = event.target.value;
    localStorage.setItem('tipoCobertura', event.target.value);
    jquery__WEBPACK_IMPORTED_MODULE_19__("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
  }
  seleccionarMarca(idMarca) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    for (let index = 0; index < this.marcasVehiculos.length; index++) {
      const element = this.marcasVehiculos[index];
      if (element.id == elIndex) {
        this.elExpediente.Marca = element.nombre;
        this.modelosMarca = element.modelos;
      }
    }
  }
  seleccionarModelo(idModelo) {
    this.elExpediente.Modelo = idModelo.target.value;
    console.log(this.elExpediente.Modelo);
  }
  entrarAnio(event) {
    this.elExpediente.Year = event.target.value;
    console.log(event.target.value);
    for (let index = 0; index < _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres.length; index++) {
      const element = _environments_talleres__WEBPACK_IMPORTED_MODULE_13__.Talleres[index];
    }
  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
  esFechaSiniestro() {
    this.esSiniestro = true;
    this.esInspeccion = false;
  }
  esFechaInspeccion() {
    this.esSiniestro = false;
    this.esInspeccion = true;
  }
  firmar() {
    var _this21 = this;
    //let laImagen = this.imagen.nativeElement;
    //this.imageHeight = this.imagen.nativeElement.offsetHeight;
    this.imageHeight = 200;
    //this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.api.obtenerFotoPorAtencion(this.idAtencion, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref68 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Firmas para este usuario : " + res.length);
        console.dir(res);
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          if (index == res.length - 1) {
            _this21.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.imagePrefix + element.FotoFirma;
            localStorage.setItem("dSignatureAsegurado", _this21.firmaPrecargada);
            _this21.isSignature = true;
          }
        }
      });
      return function (_x43) {
        return _ref68.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref69 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this21.firmaPrecargada = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
        localStorage.setItem("dSignatureAsegurado", _this21.firmaPrecargada);
        _this21.isSignature = false;
      });
      return function (_x44) {
        return _ref69.apply(this, arguments);
      };
    }());
  }
  //Debug:Firmax
  firmarInspector() {
    this.firmaPrecargadaInspector = _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.imagePrefix + this.elUsuario.Firma;
  }
  marcarFecha(mydate) {
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.formateada = dateFormat + ' - ' + timeFormat;
    this.formateadaSiniestro = 'Fecha : ' + mydate.split('T')[0].toString() + ', Hora : ' + mydate.split('T')[1].toString().split('.')[0];
    //console.log(dateFormat+' ... '+timeFormat);
  }

  marcarFechaSiniestro(laFechaSiniestrox) {
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = laFechaSiniestrox.split('T')[0];
    var timeFormat = laFechaSiniestrox.split('T')[1];
    this.formateadaSiniestro = 'Fecha : ' + laFechaSiniestrox.split('T')[0].toString() + ', Hora : ' + laFechaSiniestrox.split('T')[1].toString().split('.')[0];
    //console.log(dateFormat+' ... '+timeFormat);
  }

  marcarFechaInspeccion(laFechaInspeccion) {
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = laFechaInspeccion.split('T')[0];
    var timeFormat = laFechaInspeccion.split('T')[1];
    this.formateadaInspeccion = dateFormat + ' - ' + timeFormat;
    //console.log(dateFormat+' ... '+timeFormat);
  }

  getFechaInspeccionInicial() {
    const ahora = new Date();
    this.minFechaInspeccion = this.getStartOfToday().toISOString();
    const fechaGuardada = localStorage.getItem('datos-FechaHora');
    if (fechaGuardada) {
      const fecha = new Date(fechaGuardada);
      if (!Number.isNaN(fecha.getTime()) && fecha >= this.getStartOfToday()) {
        return fecha.toISOString();
      }
    }
    return ahora.toISOString();
  }
  getStartOfToday() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return hoy;
  }
  marcarFechaAjustador(mydateAjustador) {
    let fechaSeleccionada = new Date(mydateAjustador);
    if (Number.isNaN(fechaSeleccionada.getTime()) || fechaSeleccionada < this.getStartOfToday()) {
      fechaSeleccionada = new Date();
    }
    const fechaIso = fechaSeleccionada.toISOString();
    this.fechaInspeccion = fechaIso;
    this.minFechaInspeccion = this.getStartOfToday().toISOString();
    localStorage.setItem('datos-FechaHora', fechaIso);
    let brakePoint;
    if (fechaIso.toString().indexOf('T') == -1) {
      brakePoint = ', ';
    } else {
      brakePoint = 'T';
    }
    this.fechaInspeccionLocal = fechaSeleccionada.toLocaleString();
    this.mydateAjustador = fechaIso.split(brakePoint)[0];
    this.laFechaInspeccion = 'Fecha : ' + fechaIso.split(brakePoint)[0].toString() + ', Hora : ' + fechaIso.split(brakePoint)[1].toString().split('.')[0];
  }
  formatearFecha(mydateAjustador) {}
  entraIdentidad(event) {
    if (event.target.value.length == event.target.maxlength) {
      this.elExpediente.IdentidaConductor = event.target.value;
      this.datos['IdentidaConductor'] = event.target.value;
      this.datos['Identificacion'] = event.target.value;
      this.datos['DPI_Pasaporte'] = event.target.value;
      localStorage.setItem('datos-DPI_Pasaporte', event.target.value);
    }
  }
  popThis(ev) {
    var _this22 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log(ev);
      const daPop = yield _this22.popControl.create({
        event: ev,
        component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_10__.PopoverPage
      });
      yield daPop.present();
    })();
  }
  validateEmail(status) {
    //console.log(status);
    if (status == "INVALID") {
      this.toaster.presentToastEmailInvalid('El correo no es válido', 'top', 'correo');
    }
    if (status == "VALID") {
      this.toaster.dismissToast();
    }
  }
  setFirstSegment() {
    jquery__WEBPACK_IMPORTED_MODULE_19__('.segment-item-aju').eq(0).click();
  }
  setSegment(segmentInput, indexInput) {
    let daIndex = indexInput;
    if (segmentInput == 'beneficiario') {
      console.log('Datos para finiquito');
      console.dir(this.elFiniquito);
    }
    this.segmentoTitulo = _environments_segments__WEBPACK_IMPORTED_MODULE_4__.segments_aju[daIndex].titulo;
    localStorage.setItem('segmentoTitulo', this.segmentoTitulo);
    if (segmentInput == 'culpable') {
      this.router.navigate(['./' + segmentInput], {
        queryParams: {
          pageSource: './ajustadorhn'
        }
      });
    } else {
      this.router.navigate(['./' + segmentInput]);
    }
  }
  setTipoSolicitante(event) {
    console.log(event);
    this.elTipoSolicitante = event.target.value;
    this.datos['RefTipoSolicitanteInformeAjusteId'] = event.target.value;
    for (let index = 0; index < this.tipoSolicitante.length; index++) {
      const element = this.tipoSolicitante[index];
      if (element.Id == this.elTipoSolicitante) {
        jquery__WEBPACK_IMPORTED_MODULE_19__("#TipoSolicitanteDisplay").text(element.TipoSolicitante);
      }
    }
    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
    if (this.elTipoSolicitante == 1) {
      this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
    } else {}
  }
  onTermsChanged(event) {
    const ev = event;
    this.canDismiss = ev.detail.checked;
  }
  clearStorageDanios() {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
  validarDaniosCulpa() {
    this.isRefreshingCulpa = true;
    this.isLoading = true;
    jquery__WEBPACK_IMPORTED_MODULE_19__('#loaderContainer').fadeIn();
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i))); //+1;
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          if (indexSelect == elementD.Id) {
            let tipo;
            let tipoIndex = parseInt(localStorage.getItem('TipoReparacionCulpaIndex-' + indexSelect));
            let tipoId = parseInt(localStorage.getItem('TipoReparacionCulpa-' + indexSelect));
            if (tipoId == 1) {
              tipo = 'Reparación';
            } else {
              tipo = 'Cambio';
            }
            this.daniosSelectCulpa.push(elementD);
            this.seleccionDeDaniosCulpable.push({
              Codigo: elementD.Codigo,
              Descripcion: elementD.Descripcion,
              Id: elementD.Id,
              tipo: tipo,
              tipoId: tipoId
            });
            //console.dir(elementD);
          }
        }
      }

      if (i == localStorage.length - 1) {
        this.isRefreshingCulpa = false;
        this.isLoading = false;
        jquery__WEBPACK_IMPORTED_MODULE_19__('#loaderContainer').fadeOut();
      }
    }
  }
  listarDanios() {
    this.daniosSelectAju = [];
    this.isRefreshing = true;
    console.log('Tengo esto en storage');
    console.dir(localStorage);
    setTimeout(() => {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i))); //+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              const duplicados = this.daniosSelectCulpa.filter(item => item.Id === elementD.Id);
              if (duplicados.length === 0) {
                this.daniosSelectCulpa.push(elementD);
                console.log('Elemento culpa');
              }
            }
          }
        }
        if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
          console.log(localStorage.getItem(localStorage.key(i)));
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i))); //+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              const duplicados = this.daniosSelectAju.filter(item => item.Id === elementD.Id);
              if (duplicados.length === 0) {
                this.daniosSelectAju.push(elementD);
              }
              //this.daniosSelectAju.push(elementD);
              console.log('Elemento daño');
              console.dir(elementD);
            }
          }
        }
        if (localStorage.key(i).indexOf('danioOtro-') == 0) {
          let otroKey = parseInt(localStorage.key(i).split('-')[1]);
          let otroVal = localStorage.getItem(localStorage.key(i));
          console.log('En listar ');
          console.dir(JSON.parse(otroVal));
        }
        if (i == localStorage.length - 1) {
          this.isRefreshing = false;
          this.eliminarDuplicadosDanios(this.daniosSelectAju, 1);
          localStorage.setItem('daniosSelectAju', JSON.stringify(this.daniosSelectAju));
        }
      }
    }, 3000);
  }
  insertarConvenioReparacion() {
    var _this23 = this;
    this.daniosSelectAju = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          if (indexSelect == elementD.Id) {
            this.daniosSelectAju.push(elementD);
            console.dir(elementD);
          }
        }
      }
    }
    setTimeout(() => {
      for (let index = 0; index < this.daniosSelectAju.length; index++) {
        const element = this.daniosSelectAju[index];
        let elTipoReparacion = localStorage.getItem('TipoReparacion-' + element.Codigo);
        let reparaArray = {
          codigoDanio: element.Codigo,
          descripcionDanio: element.Descripcion,
          fotografia: _environments_default_images__WEBPACK_IMPORTED_MODULE_3__.emptySignature.split(',')[1],
          idAtencion: this.idAtencion,
          refTipofotoId: element.Id,
          TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_20__.Entidades[0].tipoEntidad,
          FechaRegistro: new Date().toISOString(),
          TipoReparacion: elTipoReparacion
        };
        console.log('Esta es la data desde ajustador');
        console.dir(reparaArray);
        this.api.insertarConvenioReparacion(reparaArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this23.isLoading = false;
        }))).subscribe( /*#__PURE__*/function () {
          var _ref71 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            console.log(res);
            console.log("Convenio guardado");
            if (index == _this23.daniosSelectAju.length - 1) {
              _this23.api.EnviarNotificacionEmail(_this23.idAtencion);
            }
          });
          return function (_x45) {
            return _ref71.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref72 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
            //this.toaster.presentToast(error.error.Message, 'top', 'taller');
          });
          return function (_x46) {
            return _ref72.apply(this, arguments);
          };
        }());
        /**/
        if (index == this.daniosSelectAju.length - 1) {
          this.eliminarDuplicadosDanios(this.daniosSelectAju, 4);
        }
      }
    }, 900);
    /**/
  }

  toastDanio(danioInputDescripcion, danioInputId) {
    this.danioMessage = danioInputDescripcion;
    this.danioPosition = 'middle', this.danioClass = 'danio-select';
    this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, danioInputId);
  }
  presentToastDanio(message, position, clase, danioInputId) {
    var _this24 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.idSelect = danioInputId;
      const toast = yield _this24.toast.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'ELIMINAR',
          role: 'confirm',
          handler() {
            for (var i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).indexOf('daniosSelect') == 0) {
                let idEliminate = localStorage.getItem(localStorage.key(i));
                let idE = parseInt(idEliminate);
                if (idE == danioInputId) {
                  localStorage.removeItem(localStorage.key(i));
                }
              }
              if (localStorage.key(i).indexOf('danioOtro-') == 0) {
                let storageObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (storageObject.Id == danioInputId) {
                  console.log('tengo algo de extra, ' + localStorage.key(i) + ', ' + localStorage.getItem(localStorage.key(i)));
                  localStorage.removeItem('danioOtro-' + danioInputId);
                }
              }
              if (i == localStorage.length - 1) {
                jquery__WEBPACK_IMPORTED_MODULE_19__('#open-modal-recycle').click();
                setTimeout(() => {
                  jquery__WEBPACK_IMPORTED_MODULE_19__('#reloadDaniosButton').click();
                  setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_19__('#closeRecycleButton').click();
                  }, 4000);
                }, 2000);
              }
            }
            /**/
          }
        }, {
          text: '|'
        }, {
          text: 'NO ELIMINAR',
          role: 'cancel'
        }]
      });
      yield toast.present();
    })();
  }
  segmentAction(action) {
    if (action > 4) {
      if (action == 5) {}
      if (action == 6) {}
    }
  }
  eliminarDuplicadosEnvio(arreglo) {
    const claves = ['nombre'];
    const vistos = new Set();
    return arreglo.filter(envio => {
      const claveCompuesta = claves.map(campo => (envio[campo] || '').toString().trim().toUpperCase()).join('|');
      if (vistos.has(claveCompuesta)) {
        return false; // Ya lo vimos
      }

      vistos.add(claveCompuesta);
      return true; // Primer vez que se ve este conjunto de campos
    });
  }

  eliminarDuplicados(arreglo) {
    const claves = ['nombre', 'etiqueta', 'index'];
    const vistos = new Set();
    return arreglo.filter(vehiculo => {
      const claveCompuesta = claves.map(campo => (vehiculo[campo] || '').toString().trim().toUpperCase()).join('|');
      if (vistos.has(claveCompuesta)) {
        return false; // Ya lo vimos
      }

      vistos.add(claveCompuesta);
      return true; // Primer vez que se ve este conjunto de campos
    });
  }

  eliminarDuplicadosDanios(arreglo, origen) {
    const claves = ['Id', 'Descripcion', 'Codigo'];
    const vistos = new Set();
    return arreglo.filter(danio => {
      const claveCompuesta = claves.map(campo => (danio[campo] || '').toString().trim().toUpperCase()).join('|');
      if (vistos.has(claveCompuesta)) {
        return false; // Ya lo vimos
      }

      vistos.add(claveCompuesta);
      return true; // Primer vez que se ve este conjunto de campos
    });
  }

  clearSegmentsStorage() {
    console.log('limpiando las variables de segmentos');
    // Segmento Solicitante
    localStorage.removeItem('elTipoLicencia');
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
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('danioPic') == 0 || localStorage.key(i).indexOf('daniosSelect') == 0 || localStorage.key(i).indexOf('datos-') == 0 || localStorage.key(i).indexOf('dataProcess-')) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
    localStorage.removeItem('coords-latitud');
    localStorage.removeItem('coords-longitud');
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__.ScreenOrientation
    }, {
      type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeGeocoder
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.PopoverController
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.DomSanitizer
    }, {
      type: _services_formatos_service__WEBPACK_IMPORTED_MODULE_14__.FormatosService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AnimationController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController
    }];
  }
  static {
    this.propDecorators = {
      ajustadorContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['ajustadorContent', {
          static: false
        }]
      }],
      accordionGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['accordionGroup', {
          static: true
        }]
      }],
      accordionGroup2: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['accordionGroup2', {
          static: true
        }]
      }],
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChild,
        args: ['modalNulosAju']
      }]
    };
  }
};
AjustadorhnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
  selector: 'app-ajustadorhn',
  template: _ajustadorhn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ajustadorhn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AjustadorhnPage);


/***/ }),

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

/***/ 87216:
/*!******************************************!*\
  !*** ./src/app/environments/talleres.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Talleres": () => (/* binding */ Talleres),
/* harmony export */   "TalleresCategorias": () => (/* binding */ TalleresCategorias),
/* harmony export */   "TalleresNoFiltrados": () => (/* binding */ TalleresNoFiltrados),
/* harmony export */   "rangoAnios": () => (/* binding */ rangoAnios)
/* harmony export */ });
let now = new Date();
let thisYear = now.getFullYear();
const rangoAnios = [{
  min10: 2010,
  min14: 2014,
  min15: 2015,
  min18: 2018,
  min19: 2019,
  max: thisYear
}];
const Talleres = [{
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: null,
  tipoEquipo: null,
  NombreTaller: 'NINGUNO',
  Categoria: null,
  Id: 1
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'A',
  Id: 2
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Auto Center',
  Categoria: 'A',
  Id: 3
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'B',
  Id: 4
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'BYB Autocenter',
  Categoria: 'B',
  Id: 5
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Inversiones Galo',
  Categoria: 'C',
  Id: 6
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Auto Servicios Union',
  Categoria: 'C',
  Id: 7
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Soto Automotriz',
  Categoria: 'C',
  Id: 8
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'CAM',
  Categoria: 'C',
  Id: 9
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Express Auto Center',
  Categoria: '',
  Id: 10
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Inversiones Galo',
  Categoria: '',
  Id: 11
}];
const TalleresCategorias = [{
  categoriaId: 1,
  categoria: null
}, {
  categoriaId: 2,
  categoria: 'A'
}, {
  categoriaId: 3,
  categoria: 'B'
}, {
  categoriaId: 4,
  categoria: 'C'
}];
const TalleresNoFiltrados = [{
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: null,
  tipoEquipo: null,
  NombreTaller: 'NINGUNO',
  Categoria: null,
  Id: 1
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Auto Servicios Union',
  Categoria: 'C',
  Id: 2
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Auto Center',
  Categoria: 'A',
  Id: 3
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'B&B Autocenter',
  Categoria: 'B',
  Id: 4
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'CAM',
  Categoria: 'C',
  Id: 5
}, {
  desde: rangoAnios[0].min19,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'A',
  Id: 6
}, {
  desde: rangoAnios[0].min15,
  hasta: rangoAnios[0].min18,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Express Auto Center',
  Categoria: 'B',
  Id: 7
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Express Auto Center',
  Categoria: '',
  Id: 8
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].max,
  tipoEquipoId: 2,
  tipoEquipo: 'Pesado',
  NombreTaller: 'Inversiones Galo',
  Categoria: '',
  Id: 9
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Inversiones Galo',
  Categoria: 'C',
  Id: 10
}, {
  desde: rangoAnios[0].min10,
  hasta: rangoAnios[0].min14,
  tipoEquipoId: 1,
  tipoEquipo: 'Liviano',
  NombreTaller: 'Soto Automotriz',
  Categoria: 'C',
  Id: 11
}];

/***/ }),

/***/ 33105:
/*!**************************************!*\
  !*** ./src/app/interfaces/extras.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entidades": () => (/* binding */ Entidades)
/* harmony export */ });
const Entidades = [{
  tipoEntidad: 'Asegurado'
}, {
  tipoEntidad: 'Tercero'
}];

/***/ }),

/***/ 99890:
/*!*****************************************!*\
  !*** ./src/app/popover/popover.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPage": () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.page.html?ngResource */ 77057);
/* harmony import */ var _popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.page.scss?ngResource */ 99292);
/* harmony import */ var _popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PopoverPage = class PopoverPage {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
PopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-popover',
  template: _popover_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_popover_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PopoverPage);


/***/ }),

/***/ 41742:
/*!**************************************************************!*\
  !*** ./src/app/ajustadorhn/ajustadorhn.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #0090D0;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\n.meter {\n  height: 5px;\n  position: relative;\n  background: #f3efe6;\n  overflow: hidden;\n}\n\n.meter span {\n  display: block;\n  height: 100%;\n}\n\n.progress-end {\n  background-color: var(--blueGrayColor);\n  animation: progressBarEnd 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n.progress {\n  background-color: var(--blueGrayColor);\n  animation: progressBar infinite 3s ease-in-out;\n  animation-fill-mode: both;\n}\n\n@keyframes progressBar {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.required-index {\n  display: none;\n}\n\n.required-missing {\n  border: 2px solid red;\n  border-radius: 30px;\n}\n\n@keyframes progressBarEnd {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n#aju-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #0090d0;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #0090d0;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #0090d0;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\nion-badge {\n  height: 25px;\n  padding-top: 5px;\n  font-size: 1rem;\n  background: #3171e0;\n}\n\nion-datetime {\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\n#pencil-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n.is-invalid {\n  color: red;\n}\n\n.is-valid {\n  color: inherit;\n}\n\n.is-keyboard {\n  display: none;\n}\n\n.no-keyboard {\n  display: inherit;\n}\n\n.item-segment {\n  background: red;\n}\n.item-segment div {\n  padding: 0;\n}\n\n.segment-active {\n  color: #0090d0;\n  background: gray !important;\n  background-color: gray !important;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-input.custom {\n  text-transform: uppercase !important;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\nion-menu {\n  margin-right: -7px;\n}\n\n.sig-edit modal-wrapper {\n  width: 90%;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n  color: white;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-damage);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.card-header-image-inactive {\n  position: relative;\n}\n.card-header-image-inactive ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image-inactive::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image-inactive img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.close-search {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.icono-buscar {\n  font-size: 2rem;\n  position: absolute;\n  right: 0;\n  top: 1vh;\n  color: #0090d0;\n  font-weight: bolder;\n}\n\nion-card-title#ioncardTitle {\n  --font-size: 1rem;\n}\n\nion-badge.badge-danio {\n  --background: purple;\n  --color: white;\n  --padding-end: 20px;\n  --padding-start: 15px;\n}\nion-badge.badge-danio ion-icon.icon-delete {\n  color: white;\n  font-size: 1.5rem;\n}\n\n.selected {\n  --background: purple;\n  --color: white;\n}\n\n.icon-delete {\n  color: white;\n}\n\nion-label.danio-label {\n  font-size: 0.8rem;\n}\n\nion-card#ioncardSelected {\n  --margin:0 !important;\n  --border-radius: none;\n}\n\nion-card-header#daniosCardHeader {\n  background: #3171e0;\n}\n\nion-card-subtitle#daniosCardSubtitle {\n  --color: white !important;\n}\n\n.toast-cancel-button {\n  --color:var(--background-activated) ;\n}\n\nion-modal {\n  --width:300px;\n  --height: 300px;\n}\n\n.date-siniestro {\n  width: 100%;\n  height: 60px;\n  text-align: left;\n}\n\n.chip-icon {\n  position: absolute;\n  right: 15px;\n}\n\nion-chip:not(.date-siniestro) {\n  margin-top: 0%;\n  width: 100%;\n  height: 60px;\n  border-radius: 30px;\n}\n\nion-avatar {\n  width: 45px;\n  height: 45px;\n  margin-top: -3px;\n  margin-left: 5px;\n}\n\nion-icon.dis-icon {\n  font-size: 2rem;\n  position: absolute;\n  right: 15px;\n}\n\nion-icon.da-icon {\n  font-size: 2rem;\n}\n\n.ajustador-header ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n  --min-height: 58px;\n}\n\n.ajustador-header ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\n.ajustador-header ion-button,\n.ajustador-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n#button-back {\n  margin: 0;\n}\n\n.ajustador-content {\n  --background: #eef4f8;\n}\n\n.claim-shell {\n  display: grid;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 1180px;\n  padding: 14px 14px 110px;\n  width: 100%;\n}\n\n.claim-hero,\n.review-card,\n.segments-card,\n.validation-card,\n.result-card {\n  background: #ffffff;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 28px rgba(21, 48, 95, 0.08);\n}\n\n.claim-hero {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 18px;\n}\n\n.claim-kicker {\n  color: #6c83a0;\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.claim-hero h1,\n.section-title h2 {\n  color: #17365d;\n  font-weight: 900;\n  letter-spacing: 0;\n  margin: 2px 0 0;\n}\n\n.claim-hero h1 {\n  font-size: 1.45rem;\n}\n\n.section-title h2 {\n  font-size: 1.08rem;\n}\n\n.claim-state {\n  --background: #fff3e8;\n  --color: #ef5a22;\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.9rem;\n  font-weight: 900;\n  height: 38px;\n  padding: 0 14px;\n}\n\n.claim-state-ready {\n  --background: #e9fbf0;\n  --color: #1d8f4e;\n}\n\n.review-grid {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);\n}\n\n.review-card,\n.segments-card,\n.validation-card {\n  padding: 14px;\n}\n\n.validation-card {\n  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;\n}\n\n.validation-card.validation-focus {\n  border-color: var(--primaryColor);\n  box-shadow: 0 12px 30px rgba(0, 102, 204, 0.18);\n  transform: translateY(-2px);\n}\n\n.section-title {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.section-title ion-button {\n  --background: #eef4fb;\n  --border-radius: 12px;\n  --box-shadow: none;\n  --color: var(--primaryColor);\n  height: 40px;\n  width: 44px;\n}\n\n.signature-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.signature-tile {\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 9px;\n  display: grid;\n  gap: 6px;\n  padding: 10px;\n}\n\n.signature-tile img {\n  background: #ffffff;\n  border: 1.5px dashed #cbd9e7;\n  border-radius: 8px;\n  height: 118px;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-tile span,\n.date-grid span,\n.selected-date-chip span {\n  color: #6c83a0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.signature-tile strong,\n.date-grid strong {\n  color: #17365d;\n  font-size: 0.9rem;\n  font-weight: 850;\n  letter-spacing: 0;\n}\n\n.date-grid {\n  display: grid;\n  gap: 10px;\n}\n\n.date-grid div {\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 9px;\n  display: grid;\n  gap: 6px;\n  min-height: 72px;\n  padding: 12px;\n}\n\n.segments-list {\n  background: transparent;\n  display: grid;\n  gap: 8px;\n  padding: 0;\n}\n\n.segments-list ion-item.segment-item-aju {\n  --background: #f8fbfe;\n  --border-color: transparent;\n  --border-radius: 10px;\n  --inner-border-width: 0;\n  --min-height: 68px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  color: #17365d;\n  margin: 0;\n}\n\n.segment-icon-shell {\n  align-items: center;\n  background: #eaf2fb;\n  border-radius: 12px;\n  display: inline-flex;\n  height: 42px;\n  justify-content: center;\n  margin-right: 8px;\n  width: 42px;\n}\n\n.segment-icon-aju {\n  color: var(--primaryColor);\n  font-size: 1.3rem;\n}\n\n.segments-list ion-label {\n  display: grid;\n  gap: 3px;\n}\n\n.segments-list ion-label span {\n  color: #6c83a0;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.segments-list ion-label strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.empty-damages {\n  align-items: center;\n  background: #f8fbfe;\n  border: 1px dashed #cbd9e7;\n  border-radius: 10px;\n  color: #6c83a0;\n  display: grid;\n  gap: 8px;\n  justify-items: center;\n  min-height: 132px;\n  padding: 16px;\n  text-align: center;\n}\n\n.empty-damages img {\n  height: 76px;\n  object-fit: contain;\n  width: 76px;\n}\n\n.empty-damages ion-icon {\n  color: var(--primaryColor);\n  font-size: 3.2rem;\n}\n\n.empty-damages span {\n  font-size: 0.92rem;\n  font-weight: 850;\n}\n\n.damage-list {\n  background: transparent;\n  max-height: 240px;\n  overflow: auto;\n}\n\n.damage-list ion-item,\n.review-accordions ion-list ion-item {\n  --background: transparent;\n  --border-color: #d8e4f0;\n  --color: #17365d;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  font-weight: 750;\n}\n\n.result-card {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 14px;\n}\n\n.result-card div {\n  background: #eaf7f0;\n  border: 1px solid #bdebd0;\n  border-radius: 9px;\n  display: grid;\n  gap: 5px;\n  padding: 12px;\n}\n\n.result-card span {\n  color: #387453;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.result-card strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n}\n\n.validation-card p {\n  color: #506985;\n  font-size: 0.9rem;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 12px 0;\n}\n\n.validation-card p span {\n  margin-top: 8px;\n}\n\n.warning-text {\n  color: var(--pantoneRedColor);\n}\n\n.soft-warning {\n  color: #aa7214;\n  display: block;\n}\n\n.review-accordions ion-accordion {\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  margin: 8px 0;\n  overflow: hidden;\n  width: 100%;\n}\n\n.review-accordions ion-accordion.accordion-expanding,\n.review-accordions ion-accordion.accordion-expanded {\n  margin: 8px 0;\n  width: 100%;\n}\n\n.review-accordions ion-item[slot=header] {\n  --background: #f8fbfe;\n  --color: #17365d;\n  --inner-border-width: 0;\n  --min-height: 52px;\n}\n\n.review-accordions ion-item[slot=header] ion-icon {\n  color: var(--primaryColor);\n}\n\n.review-accordions ion-item[slot=header] ion-label {\n  font-size: 0.9rem;\n  font-weight: 850;\n}\n\n.review-accordions ion-badge {\n  --background: #eaf2fb;\n  --color: var(--primaryColor);\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 900;\n  height: 26px;\n}\n\n.review-accordions .danger-badge {\n  --background: #fff0eb;\n  --color: #ef5a22;\n}\n\n.accordion-body {\n  background: #ffffff;\n  padding: 6px 10px 10px;\n}\n\n.accordion-body ion-chip {\n  --background: #ffffff;\n  --color: #17365d;\n  border-color: #b9c8d8;\n  font-size: 0.72rem;\n  font-weight: 800;\n  height: 30px;\n  width: auto;\n}\n\n.small-empty {\n  min-height: 84px;\n}\n\n.inspection-date-modal {\n  --height: min(680px, 92vh);\n  --width: min(440px, calc(100vw - 24px));\n}\n\n.inspection-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.inspection-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 850;\n  text-align: center;\n}\n\n.date-modal-body {\n  display: grid;\n  gap: 12px;\n  padding: 14px;\n}\n\n.selected-date-chip {\n  align-items: center;\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  display: grid;\n  gap: 4px;\n  grid-template-columns: auto 1fr;\n  padding: 12px;\n}\n\n.selected-date-chip ion-icon {\n  color: var(--primaryColor);\n  font-size: 1.45rem;\n  grid-row: span 2;\n}\n\n.selected-date-chip strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n}\n\n.ajustador-action-footer {\n  background: white;\n  border-top: 1px solid #d9e1e8;\n  bottom: 0;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n  height: auto !important;\n  left: 0;\n  min-height: 70px;\n  padding: 8px 12px calc(8px + env(safe-area-inset-bottom));\n  position: fixed;\n  right: 0;\n  top: auto;\n  width: 100%;\n  z-index: 1000;\n}\n\n.ajustador-action-bar,\n.ajustador-fixed-actions,\n.ajustador-state-actions {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n\n.ajustador-action-bar {\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.ajustador-fixed-actions,\n.ajustador-state-actions {\n  flex-wrap: wrap;\n}\n\n.ajustador-state-actions {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n\n.ajustador-action-footer ion-button {\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  height: 46px !important;\n  letter-spacing: 0;\n  margin: 0 !important;\n  min-width: 112px;\n  position: static !important;\n  text-transform: none;\n  width: auto !important;\n}\n\n.ajustador-action-button,\n.ajustador-secondary-action {\n  --border-color: var(--blueGrayColor);\n  --color: var(--blueGrayColor);\n  color: var(--blueGrayColor) !important;\n}\n\n.ajustador-primary-action {\n  --background: var(--primaryColor);\n  --background-activated: var(--primaryColor);\n  --color: white;\n  color: white !important;\n}\n\n.ajustador-secondary-filled-action {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --color: white;\n  color: white !important;\n}\n\n.ajustador-action-footer ion-icon {\n  color: currentColor;\n  font-size: 1.2rem;\n}\n\n.ajustador-action-button ion-icon,\n.ajustador-secondary-action ion-icon {\n  color: var(--blueGrayColor) !important;\n}\n\n.ajustador-primary-action ion-icon,\n.ajustador-secondary-filled-action ion-icon {\n  color: white !important;\n}\n\n::ng-deep .ajustador-form-alert {\n  --backdrop-opacity: 0.45;\n}\n::ng-deep .ajustador-form-alert .alert-wrapper {\n  --width: min(430px, calc(100vw - 32px));\n  --min-width: 0;\n  --max-width: 430px;\n  border-radius: 16px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n  overflow: hidden;\n}\n::ng-deep .ajustador-form-alert .alert-head {\n  background: var(--primaryColor);\n  padding: 17px 20px 15px;\n}\n::ng-deep .ajustador-form-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.04rem;\n  font-weight: 850;\n  letter-spacing: 0;\n  margin: 0;\n}\n::ng-deep .ajustador-form-alert .alert-message {\n  color: #17365d;\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1.38;\n  padding: 18px 20px 4px;\n}\n::ng-deep .ajustador-form-alert .alert-button-group {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 14px 20px 20px;\n}\n::ng-deep .ajustador-form-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 10px;\n  color: #17365d;\n  font-size: 0.82rem;\n  font-weight: 850;\n  height: 44px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 6px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .ajustador-form-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .ajustador-form-alert .alert-button-confirm {\n  border-color: #ef5a22;\n  color: #ef5a22;\n}\n::ng-deep .ajustador-form-alert .alert-button-cancel {\n  border-color: #b9c8d8;\n  color: #17365d;\n}\n::ng-deep .ajustador-form-alert .alert-button-ok {\n  border-color: var(--primaryColor);\n  color: var(--primaryColor);\n  grid-column: 1/-1;\n}\n\n@media (max-width: 899px), (orientation: portrait) and (max-width: 1199px) {\n  .claim-shell {\n    max-width: 760px;\n    padding: 12px 10px 130px;\n  }\n  .review-grid {\n    grid-template-columns: 1fr;\n  }\n  .signature-grid,\n  .result-card {\n    grid-template-columns: 1fr;\n  }\n  .signature-tile img {\n    height: 104px;\n  }\n  .ajustador-action-bar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .ajustador-fixed-actions,\n  .ajustador-state-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    margin-left: 0;\n    width: 100%;\n  }\n  .ajustador-state-actions .ajustador-primary-action {\n    grid-column: 1/-1;\n  }\n  .ajustador-action-footer ion-button {\n    font-size: 0.78rem;\n    min-width: 0;\n    width: 100% !important;\n  }\n}\n@media (min-width: 900px) and (orientation: landscape) {\n  .claim-shell {\n    grid-template-columns: minmax(340px, 0.95fr) minmax(480px, 1.25fr);\n  }\n  .claim-hero,\n  .review-grid,\n  .validation-card,\n  .result-card {\n    grid-column: 1/-1;\n  }\n  .segments-card {\n    align-self: start;\n  }\n  .damage-review {\n    align-self: start;\n  }\n}\n@media (max-width: 430px) {\n  .ajustador-header ion-title {\n    font-size: 0.92rem;\n    padding-inline: 48px;\n  }\n  .claim-hero {\n    padding: 14px;\n  }\n  .claim-hero h1 {\n    font-size: 1.25rem;\n  }\n  .review-card,\n  .segments-card,\n  .validation-card {\n    padding: 12px;\n  }\n  .section-title h2 {\n    font-size: 1rem;\n  }\n  .ajustador-action-footer {\n    gap: 7px;\n    padding-inline: 8px;\n  }\n  .ajustador-action-footer ion-button {\n    font-size: 0.68rem;\n    height: 44px !important;\n    --padding-end: 5px;\n    --padding-start: 5px;\n  }\n  #camButtonAju {\n    flex-basis: 48px;\n    width: 48px !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/ajustadorhn/ajustadorhn.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,mBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AADJ;;AAGE;EACE,cAAA;EACA,gBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,kBAAA;AAAJ;AACI;EACE,oBAAA;AACN;AAAM;EAAS,YAAA;AAGf;;AACE;EACE,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AAEJ;;AACA;EACI,cAAA;EACA,YAAA;AAEJ;;AACA;EACI,sCAAA;EACA,wCAAA;EACA,yBAAA;AAEJ;;AACA;EACI,sCAAA;EACA,8CAAA;EACA,yBAAA;AAEJ;;AACA;EACE;IAAK,QAAA;EAGL;EAFA;IAAO,WAAA;EAKP;AACF;AAHA;EACE,aAAA;AAKF;;AAFA;EACE,qBAAA;EACA,mBAAA;AAKF;;AAFA;EACE;IAAK,WAAA;EAML;EALA;IAAO,WAAA;EAQP;AACF;AANE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAQJ;;AALE;EACE,yBAAA;EACA,wCAAA;AAQJ;;AAJE;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AAZJ;AARI;EACE,YAAA;AAUN;AARI;EACE,mBAAA;AAUN;AANI;EACE,WAAA;AAQN;AALI;EACE,cAAA;AAON;AAJI;EACE,WAAA;AAMN;AAFI;EACE,cAAA;AAIN;AADI;EACE,WAAA;AAGN;AAAI;EACE,mBAAA;AAEN;;AAIE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AADJ;;AAIE;EACE,WAAA;EACA,eAAA;EACA,WAAA;AADJ;;AAIE;EACE,iBAAA;EACA,qBAAA;AADJ;;AAIE;EACE,iBAAA;EACA,qBAAA;AADJ;;AAIE;EACE,iBAAA;EACA,qBAAA;AADJ;;AAIE;EACE,UAAA;AADJ;;AAIE;EACE,cAAA;AADJ;;AAIE;EACE,aAAA;AADJ;;AAIE;EACE,gBAAA;AADJ;;AAIE;EACE,eAAA;AADJ;AAEI;EACE,UAAA;AAAN;;AAKE;EACE,cAAA;EACA,2BAAA;EACA,iCAAA;AAFJ;;AAKE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAFN;;AAME;EACI,cAAA;EACA,wBAAA;AAHN;;AAMI;EACE,WAAA;AAHN;;AAMI;;EAEE,wBAAA;EAEA,iBAAA;AAJN;;AAOI;;EAEE,oCAAA;EACA,wCAAA;AAJN;;AAQI;;EAEE,qBAAA;EACA,cAAA;AALN;;AAQI;EACE,oCAAA;AALN;;AAQI;EACE,yBAAA;AALN;;AAQE;EACE,kBAAA;AALJ;;AASI;EACE,UAAA;AANN;;AAWE;EACE,iBAAA;EACA,YAAA;AARJ;;AAYI;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AATJ;;AAYE;EACE,2BAAA;EACA,YAAA;AATJ;;AAYE;EACE,kBAAA;AATJ;AAUI;EACE,YAAA;EACA,mBAAA;AARN;AAUI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AARN;AAWI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AATN;;AAYE;EACE,kBAAA;AATJ;AAUI;EACE,YAAA;EACA,mBAAA;AARN;AAUI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AARN;AAWI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AATN;;AAaE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAVJ;;AAaE;EAOE,eAAA;EAAgB,kBAAA;EAAmB,QAAA;EAAS,QAAA;EAAS,cAAA;EAAe,mBAAA;AAXxE;;AAeE;EAEE,iBAAA;AAbJ;;AAgBE;EAKE,oBAAA;EACF,cAAA;EACA,mBAAA;EACA,qBAAA;AAjBF;AAUI;EACE,YAAA;EACA,iBAAA;AARN;;AAgBE;EACE,oBAAA;EACA,cAAA;AAbJ;;AAgBE;EACE,YAAA;AAbJ;;AAgBE;EACE,iBAAA;AAbJ;;AAgBE;EACE,qBAAA;EACA,qBAAA;AAbJ;;AAgBE;EACE,mBAAA;AAbJ;;AAiBE;EACE,yBAAA;AAdJ;;AAiBE;EACE,oCAAA;AAdJ;;AAiBE;EACE,aAAA;EACA,eAAA;AAdJ;;AAiBE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AAdJ;;AAiBE;EACE,kBAAA;EACA,WAAA;AAdJ;;AAkBE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AAfJ;;AAkBE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAfJ;;AAkBE;EACE,eAAA;EACA,kBAAA;EACA,WAAA;AAfJ;;AAkBE;EACE,eAAA;AAfJ;;AAkBA;EACE,iCAAA;EACA,gBAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AAfF;;AAkBA;;EAEE,gBAAA;EACA,cAAA;AAfF;;AAkBA;EACE,SAAA;AAfF;;AAkBA;EACE,qBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;EACA,cAAA;EACA,iBAAA;EACA,wBAAA;EACA,WAAA;AAfF;;AAkBA;;;;;EAKE,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,8CAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AAfF;;AAkBA;;EAEE,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;EACA,8DAAA;AAfF;;AAkBA;;;EAGE,aAAA;AAfF;;AAkBA;EACE,gFAAA;AAfF;;AAkBA;EACE,iCAAA;EACA,+CAAA;EACA,2BAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,4BAAA;EACA,YAAA;EACA,WAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;EACA,gDAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,aAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,4BAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;AAfF;;AAkBA;;;EAGE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AAfF;;AAkBA;;EAEE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,gBAAA;EACA,aAAA;AAfF;;AAkBA;EACE,uBAAA;EACA,aAAA;EACA,QAAA;EACA,UAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,2BAAA;EACA,qBAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,SAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,WAAA;AAfF;;AAkBA;EACE,0BAAA;EACA,iBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,QAAA;AAfF;;AAkBA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,mBAAA;EACA,0BAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,qBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,YAAA;EACA,mBAAA;EACA,WAAA;AAfF;;AAkBA;EACE,0BAAA;EACA,iBAAA;AAfF;;AAkBA;EACE,kBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,uBAAA;EACA,iBAAA;EACA,cAAA;AAfF;;AAkBA;;EAEE,yBAAA;EACA,uBAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;EACA,gDAAA;EACA,aAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,aAAA;AAfF;;AAkBA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;AAfF;;AAkBA;EACE,eAAA;AAfF;;AAkBA;EACE,6BAAA;AAfF;;AAkBA;EACE,cAAA;EACA,cAAA;AAfF;;AAkBA;EACE,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,WAAA;AAfF;;AAkBA;;EAEE,aAAA;EACA,WAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,0BAAA;AAfF;;AAkBA;EACE,iBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,4BAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,sBAAA;AAfF;;AAkBA;EACE,qBAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;AAfF;;AAkBA;EACE,gBAAA;AAfF;;AAkBA;EACE,0BAAA;EACA,uCAAA;AAfF;;AAkBA;EACE,iCAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,SAAA;EACA,aAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,QAAA;EACA,+BAAA;EACA,aAAA;AAfF;;AAkBA;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,iBAAA;EACA,6BAAA;EACA,SAAA;EACA,6CAAA;EACA,uBAAA;EACA,OAAA;EACA,gBAAA;EACA,yDAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;AAfF;;AAkBA;;;EAGE,mBAAA;EACA,aAAA;EACA,QAAA;AAfF;;AAkBA;EACE,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AAfF;;AAkBA;;EAEE,eAAA;AAfF;;AAkBA;EACE,yBAAA;EACA,iBAAA;AAfF;;AAkBA;EACE,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,iBAAA;EACA,oBAAA;EACA,gBAAA;EACA,2BAAA;EACA,oBAAA;EACA,sBAAA;AAfF;;AAkBA;;EAEE,oCAAA;EACA,6BAAA;EACA,sCAAA;AAfF;;AAkBA;EACE,iCAAA;EACA,2CAAA;EACA,cAAA;EACA,uBAAA;AAfF;;AAkBA;EACE,kCAAA;EACA,4CAAA;EACA,cAAA;EACA,uBAAA;AAfF;;AAkBA;EACE,mBAAA;EACA,iBAAA;AAfF;;AAkBA;;EAEE,sCAAA;AAfF;;AAkBA;;EAEE,uBAAA;AAfF;;AAmBE;EACE,wBAAA;AAhBJ;AAkBI;EACE,uCAAA;EACA,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,8CAAA;EACA,gBAAA;AAhBN;AAmBI;EACE,+BAAA;EACA,uBAAA;AAjBN;AAoBI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;AAlBN;AAqBI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAnBN;AAsBI;EACE,aAAA;EACA,QAAA;EACA,gDAAA;EACA,uBAAA;AApBN;AAuBI;EACE,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;AArBN;AAwBI;EACE,uBAAA;AAtBN;AAyBI;EACE,qBAAA;EACA,cAAA;AAvBN;AA0BI;EACE,qBAAA;EACA,cAAA;AAxBN;AA2BI;EACE,iCAAA;EACA,0BAAA;EACA,iBAAA;AAzBN;;AA8BA;EACE;IACE,gBAAA;IACA,wBAAA;EA3BF;EA8BA;IACE,0BAAA;EA5BF;EA+BA;;IAEE,0BAAA;EA7BF;EAgCA;IACE,aAAA;EA9BF;EAiCA;IACE,oBAAA;IACA,sBAAA;EA/BF;EAkCA;;IAEE,aAAA;IACA,gDAAA;IACA,cAAA;IACA,WAAA;EAhCF;EAmCA;IACE,iBAAA;EAjCF;EAoCA;IACE,kBAAA;IACA,YAAA;IACA,sBAAA;EAlCF;AACF;AAqCA;EACE;IACE,kEAAA;EAnCF;EAsCA;;;;IAIE,iBAAA;EApCF;EAuCA;IACE,iBAAA;EArCF;EAwCA;IACE,iBAAA;EAtCF;AACF;AAyCA;EACE;IACE,kBAAA;IACA,oBAAA;EAvCF;EA0CA;IACE,aAAA;EAxCF;EA2CA;IACE,kBAAA;EAzCF;EA4CA;;;IAGE,aAAA;EA1CF;EA6CA;IACE,eAAA;EA3CF;EA8CA;IACE,QAAA;IACA,mBAAA;EA5CF;EA+CA;IACE,kBAAA;IACA,uBAAA;IACA,kBAAA;IACA,oBAAA;EA7CF;EAgDA;IACE,gBAAA;IACA,sBAAA;EA9CF;AACF","sourcesContent":["ion-radio {\n    width: 30px;\n    height: 30px;\n  }\n  \n  ion-radio::part(container) {\n    border-radius: 8px;\n    border: 2px solid #ddd;\n  }\n  \n  ion-radio::part(mark) {\n    background: none;\n    transition: none;\n    transform: none;\n    border-radius: 0;\n  }\n  \n  ion-radio.radio-checked::part(container) {\n    background: #0090D0;\n    border-color: transparent;\n  }\n  \n  ion-radio.radio-checked::part(mark) {\n    width: 6px;\n    height: 10px;\n  \n    border-width: 0px 2px 2px 0px;\n    border-style: solid;\n    border-color: #fff;\n  \n    transform: rotate(45deg);\n  }\n  canvas {\n    border: groove;\n    padding-top: 2px;\n  }\n\n  #button-back{\n    border-radius: 50%;\n    margin-bottom: 9px;\n    ion-fab-button{\n      padding-bottom: 25px;\n      ion-icon{color: white;}\n    }\n  }\n\n  .meter { \n    height: 5px;\n    position: relative;\n    background: #f3efe6;\n    overflow: hidden;\n}\n\n.meter span {\n    display: block;\n    height: 100%;\n}\n\n.progress-end {\n    background-color: var(--blueGrayColor);\n    animation: progressBarEnd 3s ease-in-out;\n    animation-fill-mode:both; \n}\n\n.progress {\n    background-color: var(--blueGrayColor);\n    animation: progressBar infinite 3s ease-in-out;\n    animation-fill-mode:both; \n}\n\n@keyframes progressBar {\n  0% { width: 0; }\n  100% { width: 100%; }\n}\n\n.required-index{\n  display: none;\n}\n\n.required-missing{\n  border: 2px solid red;\n  border-radius: 30px;\n}\n\n@keyframes progressBarEnd {\n  0% { width: 100%; }\n  100% { width: 100%; }\n}\n\n  #save-ajustador-button, #nuevaFirma :not(#button-back) {\n    --background: #f14f23;\n    --background-activated: #a8462a;\n    --background-hover: #f66e48;\n    --border-radius: 15px;\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n    --color: white;\n  }\n\n  #aju-toolbar{\n    --background: transparent;\n    --ion-color-base: transparent !important;\n    \n  }\n\n  ion-segment {\n    --background: rgb(232, 231, 231);\n    ion-segment-button{\n      color: white;\n    }\n    ion-segment-button::part(indicator-background) {\n      background: #0090d0;\n    }\n    \n    /* Material Design styles */\n    ion-segment-button.md::part(native) {\n      color: #000;\n    }\n    \n    .segment-button-checked.md::part(native) {\n      color: #0090d0;\n    }\n    \n    ion-segment-button.md::part(indicator-background) {\n      height: 4px;\n    }\n    \n    /* iOS styles */\n    ion-segment-button.ios::part(native) {\n      color: #0090d0;\n    }\n    \n    .segment-button-checked.ios::part(native) {\n      color: #fff;\n    }\n    \n    ion-segment-button.ios::part(indicator-background) {\n      border-radius: 20px;\n    }\n\n    \n  }\n\n  ion-badge{\n    height: 25px;\n    padding-top: 5px;\n    font-size: 1rem;\n    background: #3171e0;\n  }\n\n  ion-datetime{\n    width: 100%;\n    max-width: 100%;\n    height: 69%;\n  }\n\n  ion-split-pane {\n    --side-width: 50%;\n    --side-max-width: 50%;\n  }\n\n  #big-pane{\n    --side-width: 82%;\n    --side-max-width: 82%;\n  }\n\n  #pencil-pane{\n    --side-width: 50%;\n    --side-max-width: 50%;\n  }\n\n  .is-invalid{\n    color: red;\n  }\n\n  .is-valid{\n    color: inherit;\n  }\n\n  .is-keyboard{\n    display: none;\n  }\n\n  .no-keyboard{\n    display: inherit;\n  }\n\n  .item-segment{\n    background: red;\n    div{\n      padding: 0;\n      \n    }\n  }\n\n  .segment-active{\n    color: #0090d0;\n    background: gray !important;\n    background-color: gray !important;\n  }\n\n  ion-spinner{\n    position: fixed;\n      top: 28%;\n      left: 40%;\n      z-index: 999;\n      width: 20%;\n      height: 20%;\n    //background-color: #00213f;\n  }\n  \n  ion-accordion {\n      margin: 0 auto;\n      --width: 100% !important;\n    }\n  \n    ion-accordion-group {\n      width: 100%;\n    }\n    \n    ion-accordion.accordion-expanding,\n    ion-accordion.accordion-expanded {\n      width: calc(100% - 32px);\n    \n      margin: 16px auto;\n    }\n    \n    ion-accordion.accordion-collapsing ion-item[slot='header'],\n    ion-accordion.accordion-collapsed ion-item[slot='header'] {\n      --background: var(--ion-color-light);\n      --color: var(--ion-color-light-contrast);\n  \n    }\n    \n    ion-accordion.accordion-expanding ion-item[slot='header'],\n    ion-accordion.accordion-expanded ion-item[slot='header'] {\n      --background: #7da1c4;//var(--ion-color-primary);\n      --color: white;//var(--ion-color-primary-contrast);\n    }\n  \n    ion-input.custom {\n      text-transform: uppercase !important;\n    }\n  \n    .select-label{\n      text-transform: uppercase;\n    }\n\n  ion-menu{\n    margin-right: -7px;\n  }\n\n  .sig-edit {\n    modal-wrapper {\n      width:90%;\n    }\n  }\n\n  \n  ion-select::part(text) {\n    font-size: 1.1rem;\n    color: white;\n  }\n\n  ::ng-deep {\n    .alert-wrapper {\n    --min-width: 600px;\n    --max-width: 600px;\n    --width: 600px;\n  }\n}\n  .alert-wrapper{\n    max-width: 600px !important;\n    width: 600px;\n  }\n\n  .card-header-image {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-damage);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }\n  .card-header-image-inactive {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-linear);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }\n\n  .close-search{\n    --background: #f14f23;\n    --background-activated: #a8462a;\n    --background-hover: #f66e48;\n    --border-radius: 15px;\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n    --color: white;\n  }\n\n  .icono-buscar{\n    //--background: #f14f23;\n    //--background-activated: #a8462a;\n    //--background-hover: #f66e48;\n    //--border-radius: 15px;\n    //--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n    //--color: white;\n    font-size: 2rem;position: absolute;right: 0;top: 1vh;color: #0090d0;font-weight: bolder;\n  }\n\n\n  ion-card-title#ioncardTitle {\n    //--color: #52ffe4;\n    --font-size: 1rem;\n  }\n\n  ion-badge.badge-danio{\n    ion-icon.icon-delete{\n      color: white;\n      font-size: 1.5rem;\n    }\n    --background: purple;\n  --color: white;\n  --padding-end: 20px;\n  --padding-start: 15px;\n  }\n  \n  .selected{\n    --background: purple;\n    --color: white;\n  }\n  \n  .icon-delete{\n    color: white;\n  }\n\n  ion-label.danio-label{\n    font-size: 0.8rem;\n  }\n\n  ion-card#ioncardSelected{\n    --margin:0 !important;\n    --border-radius: none;\n  }\n\n  ion-card-header#daniosCardHeader{\n    background: #3171e0;\n   \n  }\n\n  ion-card-subtitle#daniosCardSubtitle{\n    --color: white !important;\n  }\n\n  .toast-cancel-button{\n    --color:var(--background-activated)\n  }\n\n  ion-modal {\n    --width:300px;\n    --height: 300px;\n  }\n\n  .date-siniestro{\n    width: 100%;\n    height: 60px;\n    text-align: left;\n  }\n\n  .chip-icon{\n    position: absolute;\n    right: 15px;\n  }\n\n\n  ion-chip:not(.date-siniestro){\n    margin-top: 0%;\n    width: 100%;\n    height: 60px;\n    border-radius: 30px;\n  }\n\n  ion-avatar{\n    width: 45px;\n    height: 45px;\n    margin-top: -3px;\n    margin-left: 5px;\n  }\n\n  ion-icon.dis-icon {\n    font-size: 2rem;\n    position: absolute;\n    right: 15px;\n  }\n\n  ion-icon.da-icon {\n    font-size: 2rem;\n  }\n\n.ajustador-header ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n  --min-height: 58px;\n}\n\n.ajustador-header ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\n.ajustador-header ion-button,\n.ajustador-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n#button-back {\n  margin: 0;\n}\n\n.ajustador-content {\n  --background: #eef4f8;\n}\n\n.claim-shell {\n  display: grid;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 1180px;\n  padding: 14px 14px 110px;\n  width: 100%;\n}\n\n.claim-hero,\n.review-card,\n.segments-card,\n.validation-card,\n.result-card {\n  background: #ffffff;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  box-shadow: 0 10px 28px rgba(21, 48, 95, 0.08);\n}\n\n.claim-hero {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 18px;\n}\n\n.claim-kicker {\n  color: #6c83a0;\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.claim-hero h1,\n.section-title h2 {\n  color: #17365d;\n  font-weight: 900;\n  letter-spacing: 0;\n  margin: 2px 0 0;\n}\n\n.claim-hero h1 {\n  font-size: 1.45rem;\n}\n\n.section-title h2 {\n  font-size: 1.08rem;\n}\n\n.claim-state {\n  --background: #fff3e8;\n  --color: #ef5a22;\n  align-items: center;\n  border-radius: 999px;\n  display: inline-flex;\n  font-size: 0.9rem;\n  font-weight: 900;\n  height: 38px;\n  padding: 0 14px;\n}\n\n.claim-state-ready {\n  --background: #e9fbf0;\n  --color: #1d8f4e;\n}\n\n.review-grid {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);\n}\n\n.review-card,\n.segments-card,\n.validation-card {\n  padding: 14px;\n}\n\n.validation-card {\n  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;\n}\n\n.validation-card.validation-focus {\n  border-color: var(--primaryColor);\n  box-shadow: 0 12px 30px rgba(0, 102, 204, 0.18);\n  transform: translateY(-2px);\n}\n\n.section-title {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.section-title ion-button {\n  --background: #eef4fb;\n  --border-radius: 12px;\n  --box-shadow: none;\n  --color: var(--primaryColor);\n  height: 40px;\n  width: 44px;\n}\n\n.signature-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.signature-tile {\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 9px;\n  display: grid;\n  gap: 6px;\n  padding: 10px;\n}\n\n.signature-tile img {\n  background: #ffffff;\n  border: 1.5px dashed #cbd9e7;\n  border-radius: 8px;\n  height: 118px;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-tile span,\n.date-grid span,\n.selected-date-chip span {\n  color: #6c83a0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.signature-tile strong,\n.date-grid strong {\n  color: #17365d;\n  font-size: 0.9rem;\n  font-weight: 850;\n  letter-spacing: 0;\n}\n\n.date-grid {\n  display: grid;\n  gap: 10px;\n}\n\n.date-grid div {\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 9px;\n  display: grid;\n  gap: 6px;\n  min-height: 72px;\n  padding: 12px;\n}\n\n.segments-list {\n  background: transparent;\n  display: grid;\n  gap: 8px;\n  padding: 0;\n}\n\n.segments-list ion-item.segment-item-aju {\n  --background: #f8fbfe;\n  --border-color: transparent;\n  --border-radius: 10px;\n  --inner-border-width: 0;\n  --min-height: 68px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  color: #17365d;\n  margin: 0;\n}\n\n.segment-icon-shell {\n  align-items: center;\n  background: #eaf2fb;\n  border-radius: 12px;\n  display: inline-flex;\n  height: 42px;\n  justify-content: center;\n  margin-right: 8px;\n  width: 42px;\n}\n\n.segment-icon-aju {\n  color: var(--primaryColor);\n  font-size: 1.3rem;\n}\n\n.segments-list ion-label {\n  display: grid;\n  gap: 3px;\n}\n\n.segments-list ion-label span {\n  color: #6c83a0;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n\n.segments-list ion-label strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.empty-damages {\n  align-items: center;\n  background: #f8fbfe;\n  border: 1px dashed #cbd9e7;\n  border-radius: 10px;\n  color: #6c83a0;\n  display: grid;\n  gap: 8px;\n  justify-items: center;\n  min-height: 132px;\n  padding: 16px;\n  text-align: center;\n}\n\n.empty-damages img {\n  height: 76px;\n  object-fit: contain;\n  width: 76px;\n}\n\n.empty-damages ion-icon {\n  color: var(--primaryColor);\n  font-size: 3.2rem;\n}\n\n.empty-damages span {\n  font-size: 0.92rem;\n  font-weight: 850;\n}\n\n.damage-list {\n  background: transparent;\n  max-height: 240px;\n  overflow: auto;\n}\n\n.damage-list ion-item,\n.review-accordions ion-list ion-item {\n  --background: transparent;\n  --border-color: #d8e4f0;\n  --color: #17365d;\n  --inner-padding-end: 0;\n  font-size: 0.9rem;\n  font-weight: 750;\n}\n\n.result-card {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 14px;\n}\n\n.result-card div {\n  background: #eaf7f0;\n  border: 1px solid #bdebd0;\n  border-radius: 9px;\n  display: grid;\n  gap: 5px;\n  padding: 12px;\n}\n\n.result-card span {\n  color: #387453;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.result-card strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n}\n\n.validation-card p {\n  color: #506985;\n  font-size: 0.9rem;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 12px 0;\n}\n\n.validation-card p span {\n  margin-top: 8px;\n}\n\n.warning-text {\n  color: var(--pantoneRedColor);\n}\n\n.soft-warning {\n  color: #aa7214;\n  display: block;\n}\n\n.review-accordions ion-accordion {\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  margin: 8px 0;\n  overflow: hidden;\n  width: 100%;\n}\n\n.review-accordions ion-accordion.accordion-expanding,\n.review-accordions ion-accordion.accordion-expanded {\n  margin: 8px 0;\n  width: 100%;\n}\n\n.review-accordions ion-item[slot='header'] {\n  --background: #f8fbfe;\n  --color: #17365d;\n  --inner-border-width: 0;\n  --min-height: 52px;\n}\n\n.review-accordions ion-item[slot='header'] ion-icon {\n  color: var(--primaryColor);\n}\n\n.review-accordions ion-item[slot='header'] ion-label {\n  font-size: 0.9rem;\n  font-weight: 850;\n}\n\n.review-accordions ion-badge {\n  --background: #eaf2fb;\n  --color: var(--primaryColor);\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 900;\n  height: 26px;\n}\n\n.review-accordions .danger-badge {\n  --background: #fff0eb;\n  --color: #ef5a22;\n}\n\n.accordion-body {\n  background: #ffffff;\n  padding: 6px 10px 10px;\n}\n\n.accordion-body ion-chip {\n  --background: #ffffff;\n  --color: #17365d;\n  border-color: #b9c8d8;\n  font-size: 0.72rem;\n  font-weight: 800;\n  height: 30px;\n  width: auto;\n}\n\n.small-empty {\n  min-height: 84px;\n}\n\n.inspection-date-modal {\n  --height: min(680px, 92vh);\n  --width: min(440px, calc(100vw - 24px));\n}\n\n.inspection-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.inspection-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 850;\n  text-align: center;\n}\n\n.date-modal-body {\n  display: grid;\n  gap: 12px;\n  padding: 14px;\n}\n\n.selected-date-chip {\n  align-items: center;\n  background: #f8fbfe;\n  border: 1px solid #d8e4f0;\n  border-radius: 10px;\n  display: grid;\n  gap: 4px;\n  grid-template-columns: auto 1fr;\n  padding: 12px;\n}\n\n.selected-date-chip ion-icon {\n  color: var(--primaryColor);\n  font-size: 1.45rem;\n  grid-row: span 2;\n}\n\n.selected-date-chip strong {\n  color: #17365d;\n  font-size: 1rem;\n  font-weight: 900;\n}\n\n.ajustador-action-footer {\n  background: white;\n  border-top: 1px solid #d9e1e8;\n  bottom: 0;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n  height: auto !important;\n  left: 0;\n  min-height: 70px;\n  padding: 8px 12px calc(8px + env(safe-area-inset-bottom));\n  position: fixed;\n  right: 0;\n  top: auto;\n  width: 100%;\n  z-index: 1000;\n}\n\n.ajustador-action-bar,\n.ajustador-fixed-actions,\n.ajustador-state-actions {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n\n.ajustador-action-bar {\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.ajustador-fixed-actions,\n.ajustador-state-actions {\n  flex-wrap: wrap;\n}\n\n.ajustador-state-actions {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n\n.ajustador-action-footer ion-button {\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  height: 46px !important;\n  letter-spacing: 0;\n  margin: 0 !important;\n  min-width: 112px;\n  position: static !important;\n  text-transform: none;\n  width: auto !important;\n}\n\n.ajustador-action-button,\n.ajustador-secondary-action {\n  --border-color: var(--blueGrayColor);\n  --color: var(--blueGrayColor);\n  color: var(--blueGrayColor) !important;\n}\n\n.ajustador-primary-action {\n  --background: var(--primaryColor);\n  --background-activated: var(--primaryColor);\n  --color: white;\n  color: white !important;\n}\n\n.ajustador-secondary-filled-action {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --color: white;\n  color: white !important;\n}\n\n.ajustador-action-footer ion-icon {\n  color: currentColor;\n  font-size: 1.2rem;\n}\n\n.ajustador-action-button ion-icon,\n.ajustador-secondary-action ion-icon {\n  color: var(--blueGrayColor) !important;\n}\n\n.ajustador-primary-action ion-icon,\n.ajustador-secondary-filled-action ion-icon {\n  color: white !important;\n}\n\n::ng-deep {\n  .ajustador-form-alert {\n    --backdrop-opacity: 0.45;\n\n    .alert-wrapper {\n      --width: min(430px, calc(100vw - 32px));\n      --min-width: 0;\n      --max-width: 430px;\n      border-radius: 16px;\n      box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n      overflow: hidden;\n    }\n\n    .alert-head {\n      background: var(--primaryColor);\n      padding: 17px 20px 15px;\n    }\n\n    .alert-title {\n      color: #ffffff;\n      font-size: 1.04rem;\n      font-weight: 850;\n      letter-spacing: 0;\n      margin: 0;\n    }\n\n    .alert-message {\n      color: #17365d;\n      font-size: 0.94rem;\n      font-weight: 700;\n      line-height: 1.38;\n      padding: 18px 20px 4px;\n    }\n\n    .alert-button-group {\n      display: grid;\n      gap: 9px;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      padding: 14px 20px 20px;\n    }\n\n    .alert-button {\n      background: #ffffff;\n      border: 1.5px solid #d8e4f0;\n      border-radius: 10px;\n      color: #17365d;\n      font-size: 0.82rem;\n      font-weight: 850;\n      height: 44px;\n      justify-content: center;\n      letter-spacing: 0;\n      margin: 0;\n      min-width: 0;\n      padding-inline: 6px;\n      text-transform: none;\n      width: 100%;\n    }\n\n    .alert-button-inner {\n      justify-content: center;\n    }\n\n    .alert-button-confirm {\n      border-color: #ef5a22;\n      color: #ef5a22;\n    }\n\n    .alert-button-cancel {\n      border-color: #b9c8d8;\n      color: #17365d;\n    }\n\n    .alert-button-ok {\n      border-color: var(--primaryColor);\n      color: var(--primaryColor);\n      grid-column: 1 / -1;\n    }\n  }\n}\n\n@media (max-width: 899px), (orientation: portrait) and (max-width: 1199px) {\n  .claim-shell {\n    max-width: 760px;\n    padding: 12px 10px 130px;\n  }\n\n  .review-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .signature-grid,\n  .result-card {\n    grid-template-columns: 1fr;\n  }\n\n  .signature-tile img {\n    height: 104px;\n  }\n\n  .ajustador-action-bar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .ajustador-fixed-actions,\n  .ajustador-state-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    margin-left: 0;\n    width: 100%;\n  }\n\n  .ajustador-state-actions .ajustador-primary-action {\n    grid-column: 1 / -1;\n  }\n\n  .ajustador-action-footer ion-button {\n    font-size: 0.78rem;\n    min-width: 0;\n    width: 100% !important;\n  }\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .claim-shell {\n    grid-template-columns: minmax(340px, 0.95fr) minmax(480px, 1.25fr);\n  }\n\n  .claim-hero,\n  .review-grid,\n  .validation-card,\n  .result-card {\n    grid-column: 1 / -1;\n  }\n\n  .segments-card {\n    align-self: start;\n  }\n\n  .damage-review {\n    align-self: start;\n  }\n}\n\n@media (max-width: 430px) {\n  .ajustador-header ion-title {\n    font-size: 0.92rem;\n    padding-inline: 48px;\n  }\n\n  .claim-hero {\n    padding: 14px;\n  }\n\n  .claim-hero h1 {\n    font-size: 1.25rem;\n  }\n\n  .review-card,\n  .segments-card,\n  .validation-card {\n    padding: 12px;\n  }\n\n  .section-title h2 {\n    font-size: 1rem;\n  }\n\n  .ajustador-action-footer {\n    gap: 7px;\n    padding-inline: 8px;\n  }\n\n  .ajustador-action-footer ion-button {\n    font-size: 0.68rem;\n    height: 44px !important;\n    --padding-end: 5px;\n    --padding-start: 5px;\n  }\n\n  #camButtonAju {\n    flex-basis: 48px;\n    width: 48px !important;\n  }\n}\n  \n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99292:
/*!******************************************************!*\
  !*** ./src/app/popover/popover.page.scss?ngResource ***!
  \******************************************************/
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

/***/ 54595:
/*!**************************************************************!*\
  !*** ./src/app/ajustadorhn/ajustadorhn.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ajustador-header\">\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button id=\"button-back\" fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Atención # {{idAtencion}} - {{miMoneda}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #ajustadorContent class=\"ajustador-content\" fullscreen=\"true\">\n  <main class=\"claim-shell\">\n    <section class=\"claim-hero\">\n      <div>\n        <span class=\"claim-kicker\">Envío de reclamo</span>\n        <h1>Revisión final</h1>\n      </div>\n      <ion-badge class=\"claim-state\" [class.claim-state-ready]=\"cantidadNulos == 0\">\n        {{cantidadNulos == 0 ? 'Listo' : (cantidadNulos || 0) + ' pendientes'}}\n      </ion-badge>\n    </section>\n\n    <section class=\"review-grid\">\n      <article class=\"review-card signature-review\">\n        <div class=\"section-title\">\n          <div>\n            <span class=\"claim-kicker\">Firmas</span>\n            <h2>Validación visual</h2>\n          </div>\n        </div>\n        <div class=\"signature-grid\">\n          <div class=\"signature-tile\">\n            <img #firmaAsegurado id=\"firmaAsegurado\" alt=\"Firma asegurado\" src=\"{{firmaPrecargada}}\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\" />\n            <span>Asegurado o conductor</span>\n            <strong>{{aseguradoNombre}}</strong>\n          </div>\n          <div class=\"signature-tile\">\n            <img alt=\"Firma ajustador\" src=\"{{firmaPrecargadaInspector}}\" [(ngModel)]=\"firmaPrecargadaInspector\" onerror=\"this.src='https://ionicframework.com/docs/img/demos/card-media.png'\" />\n            <span>Ajustador</span>\n            <strong>{{ajustadorNombre}}</strong>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"review-card date-review\">\n        <div class=\"section-title\">\n          <div>\n            <span class=\"claim-kicker\">Fechas</span>\n            <h2>Siniestro e inspección</h2>\n          </div>\n          <ion-button id=\"open-inspection-date\" fill=\"clear\">\n            <ion-icon slot=\"icon-only\" name=\"calendar-outline\"></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"date-grid\">\n          <div>\n            <span>Fecha del siniestro</span>\n            <strong>{{formateadaSiniestro}}</strong>\n          </div>\n          <div>\n            <span>Fecha de inspección</span>\n            <strong>{{fechaInspeccionLocal || laFechaInspeccion}}</strong>\n          </div>\n        </div>\n      </article>\n    </section>\n\n    <section class=\"segments-card\">\n      <div class=\"section-title\">\n        <div>\n          <span class=\"claim-kicker\">Formulario</span>\n          <h2>Segmentos del reclamo</h2>\n        </div>\n      </div>\n      <ion-list class=\"segments-list\">\n        <ion-item *ngFor=\"let segment of segments_aju; let i = index; let first = first; let last = last\" (click)=\"setSegment(segment.pagSegmento, i)\"\n          class=\"segment-item-aju\" [ngClass]=\"{ first: first, last: last }\" detail=\"true\">\n          <div class=\"segment-icon-shell\" slot=\"start\">\n            <ion-icon class=\"segment-icon-aju\" name={{segment.name}}></ion-icon>\n          </div>\n          <ion-label>\n            <span>Segmento {{i + 1}}</span>\n            <strong>{{segment.titulo}}</strong>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section class=\"review-card damage-review\">\n      <div class=\"section-title\">\n        <div>\n          <span class=\"claim-kicker\">Daños seleccionados</span>\n          <h2>Vehículo afiliado</h2>\n        </div>\n        <ion-button fill=\"clear\" (click)=\"listarDanios()\">\n          <ion-icon slot=\"icon-only\" name=\"reload-outline\"></ion-icon>\n        </ion-button>\n      </div>\n      <div class=\"empty-damages\" *ngIf=\"daniosSelectAju.length == 0\" (click)=\"listarDanios()\">\n        <img id=\"refreshIconButton\" [hidden]=\"isRefreshing == false\" src=\"../../assets/img/recargar-2.gif\" alt=\"Cargando daños\" />\n        <ion-icon [hidden]=\"isRefreshing == true\" [src]=\"refreshIcon\"></ion-icon>\n        <span>Cargar daños</span>\n      </div>\n      <ion-list class=\"damage-list\" *ngIf=\"daniosSelectAju.length > 0\">\n        <ion-item *ngFor=\"let dannio of daniosSelectAju;let i = index\" (click)=\"toastDanio(danioInputDescripcion.value, danioInputId.value)\">\n          <input #danioInputId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\">\n          <input #danioInputDescripcion [value]=\"dannio.Descripcion\" hidden>\n          <ion-label>{{i + 1}}. {{dannio.Descripcion}}</ion-label>\n        </ion-item>\n      </ion-list>\n    </section>\n\n    <section id=\"dataSegment\" class=\"result-card\" *ngIf=\"(cantidadNulos == 0 || cantidadNulos == null || cantidadNulos == undefined) && isEeexittoooo == true\">\n      <div>\n        <span>Código BPM</span>\n        <strong>{{codigoBPMFicohsa}}</strong>\n      </div>\n      <div>\n        <span>Código Reclamo</span>\n        <strong>{{codigoReclamoFicohsa}}</strong>\n      </div>\n    </section>\n\n    <section *ngIf=\"mostrarPanelValidacion\" id=\"dataNullAju\" class=\"validation-card\" [class.validation-focus]=\"validationPanelIsActive\">\n      <div class=\"section-title\">\n        <div>\n          <span class=\"claim-kicker\">Estado del envío</span>\n          <h2>Validación del reclamo</h2>\n        </div>\n      </div>\n      <div class=\"meter\">\n        <span id=\"spanProgressAju\"><span class=\"progress\"></span></span>\n      </div>\n      <p id=\"infoText\">\n        {{textoInfo}}\n        <span id=\"infoIncompleto\" class=\"warning-text\" [style.display]=\"cantidadNulos > 0 ? 'block' : 'none'\">{{textoInfoIncompleto}}</span>\n        <span *ngIf=\"daniosSelectAju.length == 0\" class=\"soft-warning\">{{textoInfoDanios}}</span>\n        <span *ngIf=\"daniosSelectCulpa.length == 0\" class=\"soft-warning\">{{textoInfoDaniosCulpa}}</span>\n        <span *ngIf=\"fotosEnviadas == false\" class=\"soft-warning\">{{textoFotos}}</span>\n      </p>\n\n      <ion-accordion-group #accordionGroup2 id=\"accordionGroup2\" class=\"review-accordions\" [multiple]=\"false\">\n        <ion-accordion value=\"uno\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon name=\"server-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Datos en caché</ion-label>\n            <ion-badge slot=\"end\">{{cacheClienteFix.length}}</ion-badge>\n          </ion-item>\n          <div class=\"accordion-body\" slot=\"content\">\n            <ion-list>\n              <ion-item *ngFor=\"let cache of cacheClienteFix; let i = index\">\n                <ion-label>{{i+1}}. {{cache.nombre}} <strong>{{cache.valor}}</strong></ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-accordion>\n\n        <ion-accordion value=\"dos\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Datos completados</ion-label>\n            <ion-badge slot=\"end\">{{datosCompletados.length}}</ion-badge>\n          </ion-item>\n          <div class=\"accordion-body\" slot=\"content\">\n            <ion-list>\n              <ion-item *ngFor=\"let dato of datosCompletados; let i = index\">\n                <ion-label>{{i+1}}. {{dato.nombre}} <strong>{{dato.valor}}</strong></ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-accordion>\n\n        <ion-accordion value=\"tres\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon name=\"alert-circle-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Datos incompletos</ion-label>\n            <ion-badge class=\"danger-badge\" slot=\"end\">{{datosIncompletos.length}}</ion-badge>\n          </ion-item>\n          <div class=\"accordion-body\" slot=\"content\">\n            <ion-list>\n              <ion-item *ngFor=\"let dato of datosIncompletos; let i = index\" (click)=\"analizaNulo(dato.elementSegmento, dato.indexSegmento)\" detail=\"true\">\n                <ion-label>{{i+1}}. {{dato.nombre}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-accordion>\n\n        <ion-accordion value=\"cuatro\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon name=\"car-sport-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Daños vehículo afiliado</ion-label>\n            <ion-badge slot=\"end\">{{seleccionDeDanios.length}}</ion-badge>\n          </ion-item>\n          <div class=\"accordion-body\" slot=\"content\">\n            <ion-list>\n              <ion-item *ngFor=\"let danio of seleccionDeDanios; let i = index\">\n                <ion-label>{{i+1}}. {{danio.Descripcion}}</ion-label>\n                <ion-chip *ngIf=\"danio.tipoId == 1 || danio.tipoId == 2\" outline=\"true\">{{danio.tipo}}</ion-chip>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-accordion>\n\n        <ion-accordion value=\"cinco\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon name=\"wallet-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Daños tercero/contraparte</ion-label>\n            <ion-badge slot=\"end\">{{seleccionDeDaniosCulpable.length}}</ion-badge>\n          </ion-item>\n          <div class=\"accordion-body\" slot=\"content\">\n            <ion-list *ngIf=\"seleccionDeDaniosCulpable.length > 0\">\n              <ion-item *ngFor=\"let danio of seleccionDeDaniosCulpable; let i = index\">\n                <ion-label>{{i+1}}. {{danio.Descripcion}}</ion-label>\n                <ion-chip *ngIf=\"danio.tipoId == 1 || danio.tipoId == 2\" outline=\"true\">{{danio.tipo}}</ion-chip>\n              </ion-item>\n            </ion-list>\n            <div class=\"empty-damages small-empty\" *ngIf=\"seleccionDeDaniosCulpable.length == 0\" (click)=\"validarDaniosCulpa()\">\n              <ion-icon id=\"reloadDaniosCulpa\" name=\"reload-outline\"></ion-icon>\n              <span>No hay daños seleccionados. Validar selección.</span>\n            </div>\n          </div>\n        </ion-accordion>\n      </ion-accordion-group>\n    </section>\n  </main>\n</ion-content>\n\n<ion-modal trigger=\"open-inspection-date\" class=\"inspection-date-modal\" [initialBreakpoint]=\"0.86\" [breakpoints]=\"[0, 0.86, 1]\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Fecha de inspección</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"date-modal-body\">\n        <div class=\"selected-date-chip\">\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n          <span>Fecha seleccionada</span>\n          <strong>{{fechaInspeccionLocal || laFechaInspeccion}}</strong>\n        </div>\n        <ion-datetime [(ngModel)]=\"fechaInspeccion\" [min]=\"minFechaInspeccion\" (ionChange)=\"marcarFechaAjustador(fechaInspeccion)\"></ion-datetime>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<!--ion-button id=\"verificarDeudaButton\" style=\"position: fixed;width: 16%;height: 60px;bottom: 11%;right: 1%; z-index: 999;--background: #f14f23;\n--background-activated: #a8462a;\n--background-hover: #f66e48;\n--border-radius: 15px;\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"verificarDeuda()\">\n  <ion-icon name=\"refresh\"></ion-icon>\n</!--ion-button -->\n\n<!--ion-button id=\"reloadDaniosButton\" style=\"position: fixed;width: 16%;height: 60px;bottom: 11%;right: 1%; z-index: 999;--background: #f14f23;\n--background-activated: #a8462a;\n--background-hover: #f66e48;\n--border-radius: 15px;\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"listarDanios()\" hidden>\n  <ion-icon name=\"refresh\"></ion-icon>\n</ion-button>\n\n<span>\n<ion-button id=\"submitClaim\" style=\"position: fixed;width: 16%;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n--border-radius: 15px;\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"handleSave();isPressed=true\">\n  <ion-icon name=\"chevron-forward\"></ion-icon>\n</ion-button -->\n<ion-footer id=\"footerAju\" class=\"ajustador-action-footer\">\n  <div class=\"ajustador-action-bar\">\n    <div class=\"ajustador-fixed-actions\">\n      <ion-button id=\"camButtonAju\" fill=\"outline\" class=\"ajustador-action-button\" (click)=\"goFotos()\">\n        <ion-icon slot=\"start\" name=\"camera-outline\"></ion-icon>\n        Fotos\n      </ion-button>\n    </div>\n\n    <div class=\"ajustador-state-actions\">\n      <ion-button id=\"validateButtona\" class=\"ajustador-primary-action\" (click)=\"handleSave();isPressed=true\"\n        [style.display]=\"cantidadNulos > 0 ? 'block' : 'none'\">\n        <ion-icon slot=\"start\" name=\"checkmark-circle-outline\"></ion-icon>\n        Validar datos\n      </ion-button>\n\n      <ion-button id=\"cancelaButtona\" fill=\"outline\" class=\"ajustador-secondary-action\" (click)=\"goBack()\"\n        [style.display]=\"cantidadNulos == 0 ? 'block' : 'none'\">\n        <ion-icon slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n        Cancelar envío\n      </ion-button>\n\n      <ion-button id=\"validateAgainButtona\" class=\"ajustador-secondary-filled-action\" (click)=\"validarDatos(5)\"\n        [style.display]=\"cantidadNulos == 0 ? 'block' : 'none'\">\n        <ion-icon slot=\"start\" name=\"reload-outline\"></ion-icon>\n        Validar datos\n      </ion-button>\n\n      <ion-button id=\"saveDataButtona\" class=\"ajustador-primary-action\" (click)=\"GuardarDatos()\"\n        [style.display]=\"cantidadNulos == 0 ? 'block' : 'none'\" [disabled]=\"esConduceSeguro == true\">\n        <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n        Guardar datos\n      </ion-button>\n\n      <ion-button id=\"resultsButtona\" fill=\"outline\" class=\"ajustador-secondary-action\" style=\"display: none;\" (click)=\"goResults()\">\n        <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\n        Ver resultados\n      </ion-button>\n\n      <ion-button id=\"goHomeButtona\" class=\"ajustador-primary-action\" style=\"display: none;\" (click)=\"goHome()\">\n        <ion-icon slot=\"start\" name=\"home-outline\"></ion-icon>\n        Ir a inicio\n      </ion-button>\n    </div>\n  </div>\n</ion-footer>\n\n\n<!--ion-button [hidden]=\"isPressed==false\" id=\"submitClaim\" style=\"position: fixed;width: 16%;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: #f14f23;\n--background-activated: #a8462a;\n--background-hover: #f66e48;\n--border-radius: 15px;\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n--color: white;\" vertical=\"bottom\" horizontal=\"end\">\n  <ion-icon name=\"chevron-forward\"></ion-icon>\n</!--ion-button -->\n\n\n  <ion-modal trigger=\"open-modal\" [initialBreakpoint]=\"1\" [breakpoints]=\"[0, 1]\">\n    <ng-template>\n      <div class=\"block\">\n        <ion-img\n          src=\"{{myCanvasImage}}\"\n        ></ion-img>\n      </div>\n    </ng-template>\n  </ion-modal>\n\n\n  <ion-modal #modalPdf #modal trigger=\"open-modal-pdf\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n    <ng-template>\n      <ion-content>\n        <ion-toolbar>Previsualizar PDFs</ion-toolbar>\n        <ion-list>\n          \n          <ion-item id=\"step1\">\n            <ion-avatar slot=\"start\">\n              <ion-icon style=\"font-size: 2.8rem;\" name=\"shield-outline\"></ion-icon>\n            </ion-avatar>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-label>\n                    <h2>Cierre de Cobertura</h2>\n                    <p>Cobertura de Seguro</p>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item id=\"step2\">\n            <ion-avatar slot=\"start\">\n              <ion-icon style=\"font-size: 2.8rem;\" name=\"document-attach-outline\"></ion-icon>\n            </ion-avatar>\n            <ion-label>\n              <h2>Reclamo de Cliente</h2>\n              <p>Reclamo de Cobertura</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n  <ion-modal #modalNulosAju [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\n    <ng-template>\n      <ion-content>\n        <ion-badge id=\"nullsBadgeAju\" style=\"width: 100%;font-size: 1rem;\" color=\"danger\">\n          Los siguientes campos aun no se han completado : \n          <ion-grid>\n            <ion-row>\n            </ion-row>\n          </ion-grid>\n        </ion-badge>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n\n<ion-button id=\"open-modal-success\" expand=\"block\" hidden></ion-button>\n  <ion-modal #modalSuccess trigger=\"open-modal-success\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\n    <ng-template>\n      <ion-header style=\"display: none;\">\n        <ion-toolbar>\n          <ion-title>HELP</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button id=\"closeSuccessButton\" (click)=\"modalSuccess.dismiss()\" hidden>Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-card style=\"margin-top: 12%; border: none; box-shadow: none;\">\n          <img alt=\"Eeeexittoooo!\" [src]=\"sucessIcon\" style=\"width: 180px; margin-left: 15%; margin-bottom: -18px;\"/>\n          <h3> <strong> Registro guardado con éxito! BPM actualizado. </strong> </h3>\n        </ion-card>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n\n  <ion-button id=\"open-modal-recycle\" expand=\"block\" hidden></ion-button>\n  <ion-modal #modalRecycle trigger=\"open-modal-recycle\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\n    <ng-template>\n      <ion-header style=\"display: none;\">\n        <ion-toolbar>\n          <ion-title>HELP</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button id=\"closeRecycleButton\" (click)=\"modalRecycle.dismiss()\" hidden>Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-card style=\"margin-top: 12%; border: none; box-shadow: none;\">\n          <img alt=\"Eeeexittoooo!\" [src]=\"ssucessIconRecycle\" style=\"width: 180px; margin-left: 15%; margin-bottom: -18px;\"/>\n          <h3> <strong> Registro eliminado con éxito! </strong> </h3>\n        </ion-card>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n  \n";

/***/ }),

/***/ 77057:
/*!******************************************************!*\
  !*** ./src/app/popover/popover.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  Hola pue\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ajustadorhn_ajustadorhn_page_ts.js.map