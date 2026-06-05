(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-solicitante_segmento-solicitante_module_ts"],{

/***/ 63817:
/*!*****************************************************************************!*\
  !*** ./src/app/segmento-solicitante/segmento-solicitante-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoSolicitantePageRoutingModule": () => (/* binding */ SegmentoSolicitantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_solicitante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-solicitante.page */ 19235);




const routes = [{
  path: '',
  component: _segmento_solicitante_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoSolicitantePage
}];
let SegmentoSolicitantePageRoutingModule = class SegmentoSolicitantePageRoutingModule {};
SegmentoSolicitantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoSolicitantePageRoutingModule);


/***/ }),

/***/ 26948:
/*!*********************************************************************!*\
  !*** ./src/app/segmento-solicitante/segmento-solicitante.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoSolicitantePageModule": () => (/* binding */ SegmentoSolicitantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_solicitante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-solicitante-routing.module */ 63817);
/* harmony import */ var _segmento_solicitante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-solicitante.page */ 19235);







let SegmentoSolicitantePageModule = class SegmentoSolicitantePageModule {};
SegmentoSolicitantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _segmento_solicitante_routing_module__WEBPACK_IMPORTED_MODULE_0__.SegmentoSolicitantePageRoutingModule],
  declarations: [_segmento_solicitante_page__WEBPACK_IMPORTED_MODULE_1__.SegmentoSolicitantePage]
})], SegmentoSolicitantePageModule);


/***/ }),

/***/ 19235:
/*!*******************************************************************!*\
  !*** ./src/app/segmento-solicitante/segmento-solicitante.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoSolicitantePage": () => (/* binding */ SegmentoSolicitantePage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_solicitante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-solicitante.page.html?ngResource */ 85049);
/* harmony import */ var _segmento_solicitante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-solicitante.page.scss?ngResource */ 75071);
/* harmony import */ var _segmento_solicitante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmento_solicitante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_formatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/formatos.service */ 70854);
/* harmony import */ var _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/predeterminados */ 11426);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_mapas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/mapas */ 31624);













let SegmentoSolicitantePage = class SegmentoSolicitantePage {
  constructor(api, toaster, toast, alert, formateador) {
    var _this = this;
    this.api = api;
    this.toaster = toaster;
    this.toast = toast;
    this.alert = alert;
    this.formateador = formateador;
    this.tipoSolicitante = [];
    this.esTipoSolicitante = false;
    this.ajustador = {};
    this.datos = [];
    this.elExpediente = [];
    this.tipoParentescos = [];
    this.isNombreCliente = false;
    this.isStorageClienteNombre = false;
    this.isIdCliente = false;
    this.isTelCliente = false;
    this.isMailCliente = false;
    this.disExpediente = [];
    this.cacheDeCliente = [];
    this.coberturas = [];
    this.ajustador.TipoSolicitante = parseInt(localStorage.getItem('TipoSolicitante'));
    this.solicitanteId = parseInt(localStorage.getItem('tipoSolicitante'));
    let coberId = localStorage.getItem('coberturaId');
    //this.coberturaId = parseInt(coberId);
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {}
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : ' + idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }
    // Datos del LocalStorage para Guardado automático de datos
    this.isLoading = true;
    /*
    setTimeout(() => {
      let exped:any; let cache:any;
      exped = localStorage.getItem('disExpediente');
      cache = localStorage.getItem('cacheCliente');
      this.disExpediente = JSON.parse(exped);
      this.cacheDeCliente = JSON.parse(cache);
            console.log('Dis Expediente '); console.dir(this.disExpediente);
      console.dir(this.cacheDeCliente);
            this.elCorreoElectronico = this.cacheDeCliente[0].CorreoElectronico;
      this.setCorreo(this.elCorreoElectronico)
            let elSolicitante = localStorage.getItem('elSolicitante');
      let tipoSolicitante = localStorage.getItem('tipoSolicitante');
      let laCobertura = localStorage.getItem('laCobertura');
      let nombreCliente = localStorage.getItem('elNombreCliente');
      let identidadCliente = localStorage.getItem('laIdentidadCliente');
      let tipoLicencia = localStorage.getItem('elTipoLicencia');
      let tipoLicenciaId = localStorage.getItem('elTipoLicenciaId');
      let elGeneroTipo = localStorage.getItem('elGenero');
      let tipoGeneroId =  localStorage.getItem('elGeneroId');
      let elParentesco = localStorage.getItem('elParentesco');
      let elTelefonoCliente = localStorage.getItem('elTelefonoOrigen');
      let elCorreo = localStorage.getItem('dataProcess-CorreoElectronico');
      
      if (tipoSolicitante) {
        let solicitanteT = tipoSolicitante;
        //self.alert(tipoSolicitante)
        this.setSolicitante(tipoSolicitante)
        console.log('Este es el tipo de solicitante evaluado desde el inicio '+solicitanteT)
      }
            if (elSolicitante) {
        this.solicitanteDisplayName = elSolicitante.split('-')[1];
        console.log('Soclicit '+(parseInt(tipoSolicitante)+1))
        this.elTipoSolicitante = parseInt(tipoSolicitante);
        //this.setSolicitante(this.elTipoSolicitante);
        
        //$("#TipoSolicitanteDisplay").text(elSolicitante);
      }
      
      self.alert(laCobertura)
      if (laCobertura) {
        
        this.coberturaDisplayName = laCobertura.split('-')[1];
        localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
        this.seTipoCobertura(this.coberturaDisplayName);
      }
            if (nombreCliente) {
        this.nombreCliente = nombreCliente.split('-')[1];
        this.setNombre();
      }
            if (identidadCliente) {
        this.identidadCliente = identidadCliente.split('-')[1];
        this.setIdentidad();
      }
            if (tipoLicencia) {
        this.elTipoDeLicencia = tipoLicencia.split('-')[1];
        this.elTipoLicenciaId = parseInt(tipoLicenciaId.split('-')[1]);
        this.setElTipoLicencia(this.elTipoLicenciaId);
      }
            if (elGeneroTipo) {
        this.elGenero = elGeneroTipo.split('-')[1];
        this.elTipoGenero = parseInt(tipoGeneroId.split('-')[1]);
        console.log('El genero '+this.elGenero+', el Id de género : '+this.elTipoGenero);
              setTimeout(() => {
          this.isLoading = true;
          this.setElTipoGenero(this.elTipoGenero);
        }, 2000);
        
      }
            if (elParentesco) {
        this.elParentesco = elParentesco.split('-')[1];
        this.setElTipoParentesco(this.elParentesco);
      }
            console.log(elTelefonoCliente)
      if (elTelefonoCliente) {
        this.elTelefonoOrigen = elTelefonoCliente.split('-')[1];
        this.setTelefono();
      }
      
            this.isLoading = false;
    }, 1500);
    */
    this.api.DatosDeAtencion(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.dataSiniestro = res;
        console.log("Mis datos de atencion");
        console.dir(_this.dataSiniestro);
        for (let index = 0; index < _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__.ItemsData.length; index++) {
          const element = _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__.ItemsData[index].nombre;
          let elElemento = _this.dataSiniestro[0][element];
          _this.identidadCliente = _this.dataSiniestro[0].IdentidadCliente;
          localStorage.setItem('datos-Identificacion', _this.identidadCliente);
          localStorage.setItem('datos-IdentidaConductor', _this.identidadCliente);
          if (_this.identidadCliente) {
            _this.isIdCliente = true;
          } else {
            _this.isIdCliente = false;
          }
          _this.elTipoLicencia = _this.dataSiniestro[0].RefTipoLicenciaId;
          if (elElemento == null || elElemento == undefined) {}
          if (index == _environments_predeterminados__WEBPACK_IMPORTED_MODULE_4__.ItemsData.length - 1) {
            console.log('los elementos vacios');
            console.dir(_this.nulosAtencion);
          }
        }
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    this.api.Expediente(dIdAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('So far so good as you should know my friend what we can do....');
    }))).subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.elExpediente = res;
        localStorage.setItem('disExpediente', JSON.stringify(res));
        _this.nombreCliente = _this.elExpediente[0].Cliente;
        _this.moneda = _this.elExpediente[0].Moneda;
        if (_this.moneda == null) {
          _this.miMoneda = "LEMPIRAS";
        } else {
          _this.miMoneda = _this.moneda;
        }
        localStorage.setItem('datos-Nombre', _this.nombreCliente);
        localStorage.setItem('datos-NombreConductor', _this.nombreCliente);
        if (_this.nombreCliente) {
          _this.isNombreCliente = true;
        } else {
          _this.isNombreCliente = false;
        }
        _this.elTelefonoOrigen = _this.elExpediente[0].TelefonoOrigen;
        if (_this.elTelefonoOrigen) {
          _this.isTelCliente = true;
        } else {
          _this.isTelCliente = false;
        }
        _this.elCorreoElectronico = _this.elExpediente[0].CorreoElectronico;
        if (_this.elCorreoElectronico) {
          _this.isMailCliente = true;
        } else {
          _this.isMailCliente = false;
        }
        _this.testMail(_this.elCorreoElectronico);
        /*
        console.log('Asi viene el correo 2 : '+this.elCorreoElectronico)
        if (this.elCorreoElectronico == null) {
          this.elCorreoElectronico = localStorage.getItem('dataProcess-CorreoElectronico');
          console.log('Asi viene el correo 3 : '+this.elCorreoElectronico)
        }
            */
      });
      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
  testMail(elCorreoElectronico) {
    //alert(elCorreoElectronico)
    if (elCorreoElectronico == null) {
      setTimeout(() => {
        this.elCorreoElectronico = localStorage.getItem('dataProcess-CorreoElectronico');
        //alert(this.elCorreoElectronico)  
        if (this.elCorreoElectronico == null) {
          this.elCorreoElectronico = localStorage.getItem('datos-CorreoElectronico');
          //alert(this.elCorreoElectronico)
          if (this.elCorreoElectronico == null) {
            //this.elCorreoElectronico = localStorage.getItem('elCorreoElectronico').split('-')[1];
            //alert(this.elCorreoElectronico)
          }
        }
      }, 3000);
    }
  }
  ionViewDidEnter() {
    var _this2 = this;
    setTimeout(() => {
      this.api.Expediente(parseInt(this.idAtencion)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('So far so good as you should know my friend what we can do....');
      }))).subscribe( /*#__PURE__*/function () {
        var _ref7 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));
          _this2.nombreCliente = _this2.elExpediente[0].Cliente;
          _this2.moneda = _this2.elExpediente[0].Moneda;
          if (_this2.moneda == null) {
            _this2.miMoneda = "LEMPIRAS";
          } else {
            _this2.miMoneda = _this2.moneda;
          }
        });
        return function (_x4) {
          return _ref7.apply(this, arguments);
        };
      }());
      let elSolicitante = localStorage.getItem('elSolicitante');
      let tipoSolicitante = localStorage.getItem('tipoSolicitante');
      let laCobertura = localStorage.getItem('laCobertura');
      let nombreCliente = localStorage.getItem('elNombreCliente');
      let identidadCliente = localStorage.getItem('laIdentidadCliente');
      let tipoLicencia = localStorage.getItem('elTipoLicencia');
      let tipoLicenciaId = localStorage.getItem('elTipoLicenciaId');
      let elGeneroTipo = localStorage.getItem('elGenero');
      let tipoGeneroId = localStorage.getItem('elGeneroId');
      let elParentesco = localStorage.getItem('elParentesco');
      let elTelefonoCliente = localStorage.getItem('elTelefonoOrigen');
      let elCorreo = localStorage.getItem('dataProcess-CorreoElectronico');
      if (tipoSolicitante) {
        let solicitanteT = tipoSolicitante;
        //self.alert(tipoSolicitante)
        this.setSolicitante(tipoSolicitante);
        console.log('Este es el tipo de solicitante evaluado desde el inicio ' + solicitanteT);
      }
      if (elSolicitante) {
        this.solicitanteDisplayName = elSolicitante.split('-')[1];
        console.log('Soclicit ' + (parseInt(tipoSolicitante) + 1));
        this.elTipoSolicitante = parseInt(tipoSolicitante);
        //this.setSolicitante(this.elTipoSolicitante);
        //$("#TipoSolicitanteDisplay").text(elSolicitante);
      }

      if (laCobertura) {
        this.coberturaDisplayName = laCobertura.split('-')[1];
        localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
        this.seTipoCobertura(this.coberturaDisplayName);
      }
      if (nombreCliente) {
        this.nombreCliente = nombreCliente.split('-')[1];
        this.setNombre();
      }
      if (identidadCliente) {
        this.identidadCliente = identidadCliente.split('-')[1];
        this.setIdentidad();
      }
      if (tipoLicencia) {
        this.elTipoDeLicencia = tipoLicencia.split('-')[1];
        this.elTipoLicenciaId = parseInt(tipoLicenciaId.split('-')[1]);
        this.setElTipoLicencia(this.elTipoLicenciaId);
      }
      if (elGeneroTipo) {
        this.elGenero = elGeneroTipo.split('-')[1];
        this.elTipoGenero = parseInt(tipoGeneroId.split('-')[1]);
        console.log('El genero ' + this.elGenero + ', el Id de género : ' + this.elTipoGenero);
        setTimeout(() => {
          this.isLoading = true;
          this.setElTipoGenero(this.elTipoGenero);
        }, 2000);
      }
      if (elParentesco) {
        this.elParentesco = elParentesco.split('-')[1];
        this.setElTipoParentesco(this.elParentesco);
      }
      console.log(elTelefonoCliente);
      if (elTelefonoCliente) {
        this.elTelefonoOrigen = elTelefonoCliente.split('-')[1];
        this.setTelefono();
      }
      /*
      console.log('Correo en dataProcess + '+localStorage.getItem('dataProcess-CorreoElectronico'))
      if (elCorreo) {
        this.elCorreoElectronico = elCorreo;
        console.log('Asi viene el correo 1 : '+this.elCorreoElectronico)
        this.setCorreo();
      }
              */
      this.isLoading = false;
    }, 1500);
  }
  ngOnInit() {
    var _this3 = this;
    this.getTiposDeCobertura();
    this.getTipoSolicitante();
    this.getTipoLicencia(3);
    this.loadParentescos();
    this.loadGeneros();
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
      this.api.Valida_Lista_Coberturas(cobertura).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe(res => {
        console.log('Cobertura de póliza ');
        console.dir(res);
        //localStorage.setItem('coberturas', JSON.stringify(res));
      });
    }, 3000);
    setTimeout(() => {
      let cobert = localStorage.getItem('coberturas');
      this.coberturas = JSON.parse(cobert);
      console.log('Las coberturas en segmento solicitante');
      console.dir(this.coberturas);
      if (this.coberturas.length == 0) {
        this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios.', 'top', 'danger', 10000);
      } else {
        if (this.solicitanteId) {
          for (let index = 0; index < this.tipoSolicitante.length; index++) {
            const element = this.tipoSolicitante[index];
            if (element.Id == this.solicitanteId) {
              this.solicitanteDisplayName = element.TipoSolicitante;
            }
          }
        } else {
          this.solicitanteId = 1;
          this.solicitanteDisplayName = this.tipoSolicitante[0].TipoSolicitante;
        }
      }
    }, 3500);
  }
  identificarPais() {
    //alert('Identificando...')
    //alert(this.miPais)
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
      //alert(this.iconIndex)
      let elIcono = _environments_mapas__WEBPACK_IMPORTED_MODULE_8__.iconWorlds[this.iconIndex];
      //alert(elIcono.url)
      this.banderaPais = elIcono.url;
    }
  }
  randomize(arg0, arg1) {
    throw new Error('Method not implemented.');
  }
  getTipoSolicitante() {
    var _this4 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = true;
      _this4.api.ListTipoDeSolicitanteInformeAjuste().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref10 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.tipoSolicitante = res;
          console.log('TipoSolicitante');
          console.dir(_this4.tipoSolicitante);
        });
        return function (_x5) {
          return _ref10.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }());
    })();
  }
  getTiposDeCobertura() {
    var _this5 = this;
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref13 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la cobertura');
        console.dir(res);
        _this5.tiposdeCobertura = res;
        localStorage.setItem('tiposDeCobertura', JSON.stringify(_this5.tiposdeCobertura));
      });
      return function (_x7) {
        return _ref13.apply(this, arguments);
      };
    }());
  }
  getTipoLicencia(paisIdentidad) {
    var _this6 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isLoading = true;
      _this6.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this6.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref15 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this6.tipoLicencia = res;
        });
        return function (_x8) {
          return _ref15.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref16 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this6.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x9) {
          return _ref16.apply(this, arguments);
        };
      }());
    })();
  }
  loadGeneros() {
    var _this7 = this;
    this.api.ListTipoGenero().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref18 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this7.tipoGeneros = res;
      });
      return function (_x10) {
        return _ref18.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref19 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this7.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x11) {
        return _ref19.apply(this, arguments);
      };
    }());
  }
  loadParentescos() {
    var _this8 = this;
    this.api.ListTipoParentesco(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref21 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.tipoParentescos = res;
        console.log("Mis parentescos");
        console.dir(_this8.tipoParentescos);
      });
      return function (_x12) {
        return _ref21.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref22 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x13) {
        return _ref22.apply(this, arguments);
      };
    }());
  }
  getElTipoLicencia(event) {
    this.elTipoLicenciaId = event.target.value;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      const laLicenciaTipo = element.TipoLicencia;
      if (element.Id == this.elTipoLicenciaId) {
        localStorage.setItem('elTipoLicencia', this.idAtencion.toString() + '-' + laLicenciaTipo);
        localStorage.setItem('elTipoLicenciaId', this.idAtencion.toString() + '-' + element.Id);
        localStorage.setItem('datos-Licencia', laLicenciaTipo);
        localStorage.setItem('datos-TipoLicencia', laLicenciaTipo);
        localStorage.setItem('datos-RefTipoLicenciaId', element.Id);
        this.elTipoDeLicencia = laLicenciaTipo;
        this.setAtencionActual();
      }
      if (this.elTipoLicenciaId.toString() == element.Id.toString()) {
        this.licenciaTipo = element.TipoLicencia;
      }
    }
  }
  setElTipoLicencia(tipo) {
    console.dir(this.tipoLicencia.length);
    this.elTipoLicenciaId = tipo;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      const laLicenciaTipo = element.TipoLicencia;
      if (element.Id == this.elTipoLicenciaId) {
        localStorage.setItem('elTipoLicencia', this.idAtencion.toString() + '-' + laLicenciaTipo);
        localStorage.setItem('datos-Licencia', laLicenciaTipo);
        localStorage.setItem('datos-TipoLicencia', laLicenciaTipo);
        localStorage.setItem('datos-RefTipoLicenciaId', element.Id);
        this.elTipoDeLicencia = laLicenciaTipo;
        this.setAtencionActual();
      }
      if (this.elTipoLicenciaId.toString() == element.Id.toString()) {
        this.licenciaTipo = element.TipoLicencia;
      }
    }
  }
  getElTipoGenero(event) {
    console.dir(this.tipoGeneros);
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == event.target.value) {
        this.elGenero = element.Genero;
        this.elTipoGenero = element.Id;
        localStorage.setItem('datos-Sexo', element.Id);
        localStorage.setItem('elGenero', this.idAtencion.toString() + '-' + this.elGenero);
        localStorage.setItem('elGeneroId', this.idAtencion.toString() + '-' + element.Id);
        this.setAtencionActual();
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

    localStorage.setItem('inicialGenero', this.inicialGenero);
  }
  setElTipoGenero(tipo) {
    this.elTipoGenero = tipo;
    //alert(this.elTipoGenero)
    localStorage.setItem('datos-Sexo', this.elTipoGenero);
    //console.log(gender)
    console.dir(this.tipoGeneros);
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == this.elTipoGenero) {
        this.elGenero = element.Genero;
        localStorage.setItem('elGenero', this.idAtencion.toString() + '-' + this.elGenero);
        this.setAtencionActual();
      }
      if (index == this.tipoGeneros.length - 1) {
        this.isLoading = false;
      }
    }
    this.datos['Sexo'] = tipo;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
      //console.log(this.inicialGenero);
    } else if (this.elTipoGenero == 2) {
      this.inicialGenero = "F";
      //console.log(this.inicialGenero);
    }

    localStorage.setItem('inicialGenero', this.inicialGenero);
  }
  setAtencionActual() {
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      if (this.idAtencion != idAtencionActual) {
        localStorage.setItem('atencionEnProceso', this.idAtencion);
      }
    } else {
      localStorage.setItem('atencionEnProceso', this.idAtencion);
    }
  }
  getElTipoParentesco(event) {
    this.elTipoParentesco = event.target.value;
    this.datos['Parentesco'] = event.target.value;
    localStorage.setItem('datos-Parentesco', this.elTipoParentesco);
    console.log(this.elTipoParentesco);
    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      if (this.elTipoParentesco == element.CODIGO) {
        this.elParentesco = element.DESCRIPCION;
        localStorage.setItem('elParentesco', this.idAtencion.toString() + '-' + this.elParentesco);
        this.setAtencionActual();
      }
    }
  }
  setElTipoParentesco(tipo) {
    this.elTipoParentesco = tipo;
    this.datos['Parentesco'] = tipo;
    localStorage.setItem('datos-Parentesco', this.elTipoParentesco);
    console.log(this.elTipoParentesco);
    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      if (this.elTipoParentesco == element.CODIGO) {
        this.elParentesco = element.DESCRIPCION;
        localStorage.setItem('elParentesco', this.idAtencion.toString() + '-' + this.elParentesco);
        this.setAtencionActual();
      }
    }
  }
  setTipoSolicitante(event) {
    console.log(event);
    this.elTipoSolicitante = event.target.value;
    localStorage.setItem('datos-RefTipoSolicitanteInformeAjusteId', this.elTipoSolicitante);
    this.datos['RefTipoSolicitanteInformeAjusteId'] = event.target.value;
    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
    for (let index = 0; index < this.tipoSolicitante.length; index++) {
      const element = this.tipoSolicitante[index];
      if (element.Id == this.elTipoSolicitante) {
        localStorage.setItem('elSolicitante', this.idAtencion.toString() + '-' + element.TipoSolicitante);
        this.solicitanteDisplayName = element.TipoSolicitante;
        this.setAtencionActual();
      }
    }
    if (this.elTipoSolicitante == 1) {
      console.dir(this.elExpediente[0]);
      this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
      localStorage.setItem('datos-Nombre', this.elExpediente[0].Cliente);
      localStorage.setItem('datos-NombreConductor', this.elExpediente[0].Cliente);
      setTimeout(() => {
        this.nombreCliente = this.elExpediente[0].Cliente;
      }, 1000);
      this.isNombreCliente = true;
    } else {
      setTimeout(() => {
        let nombreSolicitante = localStorage.getItem('elNombreCliente').split('-')[1];
        if (nombreSolicitante) {
          this.nombreCliente = nombreSolicitante;
          localStorage.setItem('datos-Nombre', nombreSolicitante);
          localStorage.setItem('datos-NombreConductor', nombreSolicitante);
        }
      }, 1000);
      this.isNombreCliente = false;
    }
  }
  setSolicitante(solicitante) {
    //alert(solicitante)
    this.elTipoSolicitante = solicitante;
    this.ajustador.TipoSolicitante = parseInt(solicitante);
    localStorage.setItem('datos-RefTipoSolicitanteInformeAjusteId', this.elTipoSolicitante);
    this.datos['RefTipoSolicitanteInformeAjusteId'] = solicitante;
    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
    let elExp;
    let expediente;
    for (let index = 0; index < this.tipoSolicitante.length; index++) {
      const element = this.tipoSolicitante[index];
      if (element.Id == this.elTipoSolicitante) {
        localStorage.setItem('elSolicitante', this.idAtencion.toString() + '-' + element.TipoSolicitante);
        this.solicitanteDisplayName = element.TipoSolicitante;
        this.setAtencionActual();
        if (this.elTipoSolicitante == 1) {
          //alert('Esto');
          elExp = localStorage.getItem('elExpediente');
          this.elExpediente = JSON.parse(elExp);
          console.log('este Expediente');
          console.dir(this.elExpediente);
          this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
          setTimeout(() => {
            this.nombreCliente = this.elExpediente[0].Cliente;
            localStorage.setItem('datos-Nombre', this.elExpediente[0].Cliente);
            localStorage.setItem('datos-NombreConductor', this.elExpediente[0].Cliente);
          }, 1000);
          this.isNombreCliente = true;
        } else {
          let nombreSolicitante = localStorage.getItem('elNombreCliente').split('-')[1];
          if (nombreSolicitante) {
            this.nombreCliente = nombreSolicitante;
            localStorage.setItem('datos-Nombre', nombreSolicitante);
            localStorage.setItem('datos-NombreConductor', nombreSolicitante);
          }
          setTimeout(() => {
            this.isNombreCliente = false;
          }, 1000);
        }
      }
    }
  }
  entraNombre(event) {
    this.elExpediente.Cliente = event.target.value;
    console.log(event.target.value);
    localStorage.setItem('elNombreCliente', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-Nombre', event.target.value);
    localStorage.setItem('datos-NombreConductor', event.target.value);
    this.setAtencionActual();
  }
  setNombre() {
    localStorage.setItem('elNombreCliente', this.idAtencion.toString() + '-' + this.nombreCliente);
    localStorage.setItem('datos-Nombre', this.nombreCliente);
    localStorage.setItem('datos-NombreConductor', this.nombreCliente);
    this.setAtencionActual();
    this.elExpediente.Cliente = this.nombreCliente;
    if (this.elTipoSolicitante == 1) {
      this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
      setTimeout(() => {
        this.nombreCliente = this.elExpediente[0].Cliente;
      }, 1000);
      this.isNombreCliente = true;
    } else {
      let nombreSolicitante = localStorage.getItem('datos-Nombre');
      if (nombreSolicitante) {
        this.nombreCliente = nombreSolicitante;
      }
      setTimeout(() => {
        this.isNombreCliente = false;
      }, 1000);
    }
  }
  editarNombre() {
    this.toastEditWarning('Estás a punto de editar el nombre del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 1);
  }
  entraIdentidad(event) {
    if (event.target.value.length == event.target.maxlength) {
      this.elExpediente.IdentidaConductor = event.target.value;
      this.datos['IdentidaConductor'] = event.target.value;
      this.datos['Identificacion'] = event.target.value;
      this.datos['DPI_Pasaporte'] = event.target.value;
      localStorage.setItem('datos-Identificacion', this.elExpediente.IdentidaConductor);
      localStorage.setItem('datos-IdentidaConductor', this.elExpediente.IdentidaConductor);
    }
  }
  setIdentidad() {
    localStorage.setItem('laIdentidadCliente', this.idAtencion.toString() + '-' + this.identidadCliente);
    localStorage.setItem('datos-Identificacion', this.identidadCliente);
    localStorage.setItem('datos-IdentidaConductor', this.identidadCliente);
    this.setAtencionActual();
    this.dataSiniestro[0].IdentidadCliente = this.identidadCliente;
    this.isIdCliente = true;
  }
  editarIdentidad() {
    this.toastEditWarning('Estás a punto de editar la identidad del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 2);
  }
  seleccionarTipoCobertura(event) {
    this.tipoDeCobertura = event.target.value;
    localStorage.setItem('tipoCobertura', event.target.value);
    //localStorage.setItem('coberturaId', )
    for (let index = 0; index < this.coberturas.length; index++) {
      const element = this.coberturas[index];
      console.log(element.cOBERTURAField + ' == ' + this.tipoDeCobertura + ', ' + (element.cOBERTURAField == this.tipoDeCobertura));
      let validacion = element.cOBERTURAField == this.tipoDeCobertura;
      //alert('coberturaFIeld '+element.cOBERTURAField+' == tipoDeCobertura del front '+this.tipoDeCobertura+', validacion '+validacion)
      if (validacion == true) {
        this.coberturaDisplayName = element.dESCRIPCIONField;
        //alert('coberturaFIeld '+element.cOBERTURAField+' == tipoDeCobertura del front '+this.tipoDeCobertura+', validacion '+validacion+'coberturaDisplayName '+element.dESCRIPCIONField);
        localStorage.setItem('coberturaId', element.cOBERTURAField);
        this.seTipoCobertura(element.dESCRIPCIONField);
      }
    }
    //$("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
    //this.coberturaDisplayName = this.tipoDeCobertura;
    localStorage.setItem('laCobertura', this.idAtencion.toString() + '-' + this.coberturaDisplayName);
    localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
    this.setAtencionActual();
  }
  seTipoCobertura(tipo) {
    this.tipoDeCobertura = tipo;
    localStorage.setItem('tipoCobertura', tipo);
    jquery__WEBPACK_IMPORTED_MODULE_7__("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
    this.coberturaDisplayName = this.tipoDeCobertura;
    localStorage.setItem('laCobertura', this.idAtencion.toString() + '-' + this.coberturaDisplayName);
    localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
    this.setAtencionActual();
  }
  entraTel(event) {
    this.elExpediente.TelefonoOrigen = event.target.value;
    this.datos['TelefonoOrigen'] = event.target.value;
    this.elTelefonoOrigen = event.target.value;
    localStorage.setItem('elTelefonoOrigen', this.idAtencion.toString() + '-' + this.elTelefonoOrigen);
    localStorage.setItem('datos-TelefonoConductor', this.elTelefonoOrigen);
    localStorage.setItem('datos-CelularConductor', this.elTelefonoOrigen);
    this.setAtencionActual();
  }
  setTelefono() {
    localStorage.setItem('elTelefonoOrigen', this.idAtencion.toString() + '-' + this.elTelefonoOrigen);
    localStorage.setItem('datos-TelefonoConductor', this.elTelefonoOrigen);
    localStorage.setItem('datos-CelularConductor', this.elTelefonoOrigen);
    this.setAtencionActual();
    this.elExpediente[0].elTelefonoOrigen = this.elTelefonoOrigen;
    this.isTelCliente = true;
  }
  editarTelefono() {
    this.toastEditWarning('Estás a punto de editar el teléfono del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 3);
  }
  entraCorreo(event) {
    this.elExpediente.CorreoElectronico = event.target.value;
    this.datos['CorreoElectronico'] = event.target.value;
    this.elCorreoElectronico = event.target.value;
    localStorage.setItem('elCorreoElectronico', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-CorreoElectronico', this.elCorreoElectronico);
    this.setAtencionActual();
  }
  setCorreo(correo) {
    //alert('El correo '+correo);
    localStorage.setItem('elCorreoElectronico', this.idAtencion.toString() + '-' + this.elCorreoElectronico);
    localStorage.setItem('datos-CorreoElectronico', this.elCorreoElectronico);
    this.setAtencionActual();
    this.elExpediente[0].elTelefonoOrigen = this.elTelefonoOrigen;
    this.isMailCliente = true;
  }
  editarCorreo() {
    this.toastEditWarning('Estás a punto de editar el correo del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 4);
  }
  validateEmail(status, event) {
    console.log(status);
    if (status == "INVALID") {
      this.toaster.presentToastEmailInvalid('El correo no es válido', 'top', 'correo');
    }
    if (status == "VALID") {
      this.setCorreo(this.elCorreoElectronico);
      this.toaster.dismissToast();
    }
  }
  toastEditWarning(message, position, clase, tipo) {
    var _this9 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tost = yield _this9.toast.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO CONTINUAR',
          role: 'cancel',
          handler: () => {
            if (tipo == 1) {
              _this9.isNombreCliente = false;
            }
            if (tipo == 2) {
              _this9.isIdCliente = true;
            }
            if (tipo == 3) {
              _this9.isTelCliente = true;
            }
            if (tipo == 4) {
              _this9.isMailCliente = true;
            }
            tost.dismiss();
          }
        }, {
          text: 'SI CONTINUAR',
          role: 'reload',
          handler: () => {
            if (tipo == 1) {
              _this9.isNombreCliente = false;
            }
            if (tipo == 2) {
              _this9.isIdCliente = false;
            }
            if (tipo == 3) {
              _this9.isTelCliente = false;
            }
            if (tipo == 4) {
              _this9.isMailCliente = false;
            }
            tost.dismiss();
          }
        }]
      });
      yield tost.present();
    })();
  }
  clearSegmentsStorage() {
    console.log('limpiando las variables de segmentos');
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
  }
  formatearFecha(mydateAjustador) {
    console.log("Esta es mi fecha :");
    console.log(mydateAjustador);
    var dateFormat = mydateAjustador.split('T')[0];
    var timeFormat = mydateAjustador.split('T')[1];
    //this.fechaValida =  this.formateador.compararFechas(this.elExpediente[0].FechaRegistro, mydateAjustador);
    //alert('Fecha válida? '+this.fechaValida)
    /*
    
    
    console.log(this.fechaValida)
    if (this.fechaValida) {
      this.formateadaAjustador = dateFormat +' - '+timeFormat;
      if (document.getElementById('fechaInspeccion')) {
        document.getElementById('fechaInspeccion').setAttribute('style', '--background:#0090d0;');
      }
      //
      this.toaster.dismissToast();
    }else{
      this.toaster.presentToastNoButtonsRed('La fecha de inspección debe ser las misma fecha del siniestro o posterior.', 'top', 'validacion');
      document.getElementById('fechaInspeccion').setAttribute('style', '--background:red;');
    }
    */
    //console.log(dateFormat+' ... '+timeFormat);
  }

  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
    }, {
      type: _services_formatos_service__WEBPACK_IMPORTED_MODULE_3__.FormatosService
    }];
  }
};
SegmentoSolicitantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-segmento-solicitante',
  template: _segmento_solicitante_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_segmento_solicitante_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SegmentoSolicitantePage);


/***/ }),

/***/ 70854:
/*!**********************************************!*\
  !*** ./src/app/services/formatos.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatosService": () => (/* binding */ FormatosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let FormatosService = class FormatosService {
  constructor() {}
  formatearFechaSiniestro(mydate) {
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.fHora = timeFormat.toString().substring(0, 5);
    let anio = dateFormat.toString().substring(0, 4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);
    let laFormateada = dia + '-' + mes + '-' + anio;
    console.log(laFormateada);
    let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
    };
    console.dir(fechaArray);
    return fechaArray;
  }
  formatearFechaNacimiento(mydate) {
    console.log("Esta es mi fecha :");
    console.log(mydate);
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.fHora = timeFormat.toString().substring(0, 5);
    let anio = dateFormat.toString().substring(0, 4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);
    let laFormateada = dia + '-' + mes + '-' + anio;
    console.log(laFormateada);
    let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
    };
    console.dir(fechaArray);
    return fechaArray;
  }
  formatearVigencia(Vdate) {
    var dateFormat = Vdate.split('T')[0];
    //console.log('dateFormat '+ dateFormat)
    let dia = dateFormat.toString().substring(0, 2);
    let mes = dateFormat.toString().substring(3, 5);
    let anio = dateFormat.toString().substring(6);
    let laFormateada = anio + '-' + mes + '-' + dia;
    //this.calcularVigencia(laFormateada);
    return laFormateada;
  }
  calcularVigencia(Vdate) {
    let now = new Date().toISOString();
    let nowDate = now.split('T')[0];
    let vigente;
    //console.log('Licencia está vigente? ');
    console.log(new Date(nowDate) + ', ' + new Date(Vdate));
    //console.log(nowDate > Vdate);
    if (new Date(nowDate) > new Date(Vdate)) {
      vigente = false;
    } else {
      vigente = true;
    }
    return vigente;
  }
  compararFechas(SFecha, IFecha) {
    let brakePoint = 'T';
    if (SFecha.toString().indexOf('T') == -1) {
      SFecha = SFecha.toISOString();
    } else {}
    if (IFecha.toString().indexOf('T') == -1) {
      IFecha = IFecha.toISOString();
    } else {}
    let valida;
    alert(SFecha.split(brakePoint)[0] + ', ' + IFecha.split(brakePoint)[0] + ', ' + (SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]));
    console.log(SFecha.split(brakePoint)[0] + ', ' + IFecha.split(brakePoint)[0]);
    console.log(SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]);
    if (SFecha.split(brakePoint)[0] <= IFecha.split(brakePoint)[0]) {
      valida = true;
    } else {
      valida = false;
    }
    return valida;
  }
  desformatearFecha(Ddate) {
    let revertida;
    revertida = new Date(Ddate).toISOString();
    return revertida;
  }
  static {
    this.ctorParameters = () => [];
  }
};
FormatosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], FormatosService);


/***/ }),

/***/ 75071:
/*!********************************************************************************!*\
  !*** ./src/app/segmento-solicitante/segmento-solicitante.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #0090D0;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-chip:not(.date-siniestro) {\n  width: 25%;\n  height: 40px;\n  text-align: left;\n}\n\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n#aju-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #0090d0;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #0090d0;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #0090d0;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\nion-badge {\n  height: 25px;\n  padding-top: 5px;\n  font-size: 1rem;\n}\n\nion-datetime {\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\n#pencil-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n.is-invalid {\n  color: red;\n}\n\n.is-valid {\n  color: inherit;\n}\n\n.is-keyboard {\n  display: none;\n}\n\n.no-keyboard {\n  display: inherit;\n}\n\n.item-segment {\n  background: red;\n}\n.item-segment div {\n  padding: 0;\n  padding-start: 0;\n}\n\n.segment-active {\n  color: #0090d0;\n  background: gray !important;\n  background-color: gray !important;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\nion-footer {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-menu {\n  margin-right: -7px;\n}\n\n.sig-edit modal-wrapper {\n  width: 90%;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n  color: white;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-damage);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.card-header-image-inactive {\n  position: relative;\n}\n.card-header-image-inactive ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image-inactive::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image-inactive img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.close-search {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.icono-buscar {\n  font-size: 2rem;\n  position: absolute;\n  right: 0;\n  top: 1vh;\n  color: #0090d0;\n  font-weight: bolder;\n}", "",{"version":3,"sources":["webpack://./src/app/segmento-solicitante/segmento-solicitante.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,mBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AADJ;;AAGE;EACE,cAAA;EACA,gBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,kBAAA;AAAJ;AACI;EACE,oBAAA;AACN;AAAM;EAAS,YAAA;AAGf;;AACE;EACA,UAAA;EACA,YAAA;EACA,gBAAA;AAEF;;AACE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAEJ;;AACE;EACE,yBAAA;EACA,wCAAA;AAEJ;;AAEE;EACE,yBAAA;AACJ;;AAEE;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AAlBJ;AAFI;EACE,YAAA;AAIN;AAFI;EACE,mBAAA;AAIN;AAAI;EACE,WAAA;AAEN;AACI;EACE,cAAA;AACN;AAEI;EACE,WAAA;AAAN;AAII;EACE,cAAA;AAFN;AAKI;EACE,WAAA;AAHN;AAMI;EACE,mBAAA;AAJN;;AAUE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AAPJ;;AAUE;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAPJ;;AAUE;EACE,iBAAA;EACA,qBAAA;AAPJ;;AAUE;EACE,iBAAA;EACA,qBAAA;AAPJ;;AAUE;EACE,iBAAA;EACA,qBAAA;AAPJ;;AAUE;EACE,UAAA;AAPJ;;AAUE;EACE,cAAA;AAPJ;;AAUE;EACE,aAAA;AAPJ;;AAUE;EACE,gBAAA;AAPJ;;AAUE;EACE,eAAA;AAPJ;AAQI;EACE,UAAA;EACA,gBAAA;AANN;;AAWE;EACE,cAAA;EACA,2BAAA;EACA,iCAAA;AARJ;;AAWE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AARN;;AAYE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AATN;;AAYE;EACE,kBAAA;AATJ;;AAaI;EACE,UAAA;AAVN;;AAeE;EACE,iBAAA;EACA,YAAA;AAZJ;;AAgBI;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AAbJ;;AAgBE;EACE,2BAAA;EACA,YAAA;AAbJ;;AAgBE;EACE,kBAAA;AAbJ;AAcI;EACE,YAAA;EACA,mBAAA;AAZN;AAcI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAZN;AAeI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AAbN;;AAgBE;EACE,kBAAA;AAbJ;AAcI;EACE,YAAA;EACA,mBAAA;AAZN;AAcI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAZN;AAeI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AAbN;;AAiBE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAdJ;;AAiBE;EAOE,eAAA;EAAgB,kBAAA;EAAmB,QAAA;EAAS,QAAA;EAAS,cAAA;EAAe,mBAAA;AAfxE","sourcesContent":["ion-radio {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n  \r\n  ion-radio::part(container) {\r\n    border-radius: 8px;\r\n    border: 2px solid #ddd;\r\n  }\r\n  \r\n  ion-radio::part(mark) {\r\n    background: none;\r\n    transition: none;\r\n    transform: none;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(container) {\r\n    background: #0090D0;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(mark) {\r\n    width: 6px;\r\n    height: 10px;\r\n  \r\n    border-width: 0px 2px 2px 0px;\r\n    border-style: solid;\r\n    border-color: #fff;\r\n  \r\n    transform: rotate(45deg);\r\n  }\r\n  canvas {\r\n    border: groove;\r\n    padding-top: 2px;\r\n  }\r\n\r\n  #button-back{\r\n    border-radius: 50%;\r\n    margin-bottom: 9px;\r\n    ion-fab-button{\r\n      padding-bottom: 25px;\r\n      ion-icon{color: white;}\r\n    }\r\n  }\r\n\r\n  ion-chip:not(.date-siniestro){\r\n  width: 25%;\r\n  height: 40px;\r\n  text-align: left;\r\n}\r\n\r\n  #save-ajustador-button, #nuevaFirma :not(#button-back) {\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n  #aju-toolbar{\r\n    --background: transparent;\r\n    --ion-color-base: transparent !important;\r\n    \r\n  }\r\n\r\n  .select-label{\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  ion-segment {\r\n    --background: rgb(232, 231, 231);\r\n    ion-segment-button{\r\n      color: white;\r\n    }\r\n    ion-segment-button::part(indicator-background) {\r\n      background: #0090d0;\r\n    }\r\n    \r\n    /* Material Design styles */\r\n    ion-segment-button.md::part(native) {\r\n      color: #000;\r\n    }\r\n    \r\n    .segment-button-checked.md::part(native) {\r\n      color: #0090d0;\r\n    }\r\n    \r\n    ion-segment-button.md::part(indicator-background) {\r\n      height: 4px;\r\n    }\r\n    \r\n    /* iOS styles */\r\n    ion-segment-button.ios::part(native) {\r\n      color: #0090d0;\r\n    }\r\n    \r\n    .segment-button-checked.ios::part(native) {\r\n      color: #fff;\r\n    }\r\n    \r\n    ion-segment-button.ios::part(indicator-background) {\r\n      border-radius: 20px;\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  ion-badge{\r\n    height: 25px;\r\n    padding-top: 5px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  ion-datetime{\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 69%;\r\n  }\r\n\r\n  ion-split-pane {\r\n    --side-width: 50%;\r\n    --side-max-width: 50%;\r\n  }\r\n\r\n  #big-pane{\r\n    --side-width: 82%;\r\n    --side-max-width: 82%;\r\n  }\r\n\r\n  #pencil-pane{\r\n    --side-width: 50%;\r\n    --side-max-width: 50%;\r\n  }\r\n\r\n  .is-invalid{\r\n    color: red;\r\n  }\r\n\r\n  .is-valid{\r\n    color: inherit;\r\n  }\r\n\r\n  .is-keyboard{\r\n    display: none;\r\n  }\r\n\r\n  .no-keyboard{\r\n    display: inherit;\r\n  }\r\n\r\n  .item-segment{\r\n    background: red;\r\n    div{\r\n      padding: 0;\r\n      padding-start: 0;\r\n      \r\n    }\r\n  }\r\n\r\n  .segment-active{\r\n    color: #0090d0;\r\n    background: gray !important;\r\n    background-color: gray !important;\r\n  }\r\n\r\n  ion-spinner{\r\n    position: fixed;\r\n      top: 28%;\r\n      left: 40%;\r\n      z-index: 999;\r\n      width: 20%;\r\n      height: 20%;\r\n    //background-color: #00213f;\r\n  }\r\n  \r\n  ion-footer{\r\n    position: fixed;\r\n      background: black;\r\n      opacity: 0.6;\r\n      height: 100vh;\r\n      width: 100vw;\r\n      z-index: 900;\r\n      bottom: 0;\r\n  }\r\n\r\n  ion-menu{\r\n    margin-right: -7px;\r\n  }\r\n\r\n  .sig-edit {\r\n    modal-wrapper {\r\n      width:90%;\r\n    }\r\n  }\r\n\r\n  \r\n  ion-select::part(text) {\r\n    font-size: 1.1rem;\r\n    color: white;\r\n  }\r\n\r\n  ::ng-deep {\r\n    .alert-wrapper {\r\n    --min-width: 600px;\r\n    --max-width: 600px;\r\n    --width: 600px;\r\n  }\r\n}\r\n  .alert-wrapper{\r\n    max-width: 600px !important;\r\n    width: 600px;\r\n  }\r\n\r\n  .card-header-image {\r\n    position: relative;\r\n    ion-img{\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      height: 20vh;\r\n      width: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      mix-blend-mode: var(--cs-mode-image);\r\n      background: var(--cs-gradient-damage);\r\n      z-index: 5;\r\n    }\r\n  \r\n    img {\r\n      width: 100% !important;\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n  .card-header-image-inactive {\r\n    position: relative;\r\n    ion-img{\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      height: 20vh;\r\n      width: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      mix-blend-mode: var(--cs-mode-image);\r\n      background: var(--cs-gradient-linear);\r\n      z-index: 5;\r\n    }\r\n  \r\n    img {\r\n      width: 100% !important;\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n\r\n  .close-search{\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n  .icono-buscar{\r\n    //--background: #f14f23;\r\n    //--background-activated: #a8462a;\r\n    //--background-hover: #f66e48;\r\n    //--border-radius: 15px;\r\n    //--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    //--color: white;\r\n    font-size: 2rem;position: absolute;right: 0;top: 1vh;color: #0090d0;font-weight: bolder;\r\n  }\r\n  \r\n "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 85049:
/*!********************************************************************************!*\
  !*** ./src/app/segmento-solicitante/segmento-solicitante.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">{{segmentoTitulo}} - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col id=\"segmentRequestAju\" size=\"12\">\r\n        <ion-item lines=\"none\" class=\"ion-no-padding  input\">\r\n          <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n            <ion-badge color=\"primary\">\r\n              {{segmentoTitulo}}\r\n            </ion-badge>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de solicitante\r\n              <ion-chip id=\"driverTypeSelecta\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col #TipoSolicitanteDisplay id=\"TipoSolicitanteDisplay\" size=\"8\" class=\"select-label\">{{solicitanteDisplayName}}</ion-col>\r\n              <ion-col size=\"4\" style=\"text-align: left;\">\r\n                <ion-select id=\"tipoSolicitante\" class=\"text-size-xs\" [(ngModel)]=\"ajustador.TipoSolicitante\" multiple=\"false\" (ionChange)=\"setTipoSolicitante($event)\" style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let tipo of tipoSolicitante\"  [value]=\"tipo.Id\">{{tipo.TipoSolicitante}} \r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de Cobertura\r\n              <ion-chip id=\"coverTypeSelecta\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col #TipoAcuerdoDisplay id=\"TipoAcuerdoDisplay\" size=\"8\">{{coberturaDisplayName}}</ion-col>\r\n              <ion-col size=\"4\" style=\"text-align: rigth;\">\r\n                <ion-select class=\"text-size-xs\" (ionChange)=\"seleccionarTipoCobertura($event)\" [(ngModel)]=\"datos.TipoAcuerdoFicohsa\" multiple=\"false\" \r\n                style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let tipoC of coberturas;let i = index\"  [value]=\"tipoC.cOBERTURAField\"\r\n                  style=\"color: white;\">{{tipoC.dESCRIPCIONField}}\r\n                  <input hidden style=\"display: none;\" value=tipoC>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Nombre del asegurado\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isNombreCliente\" #NombreClienteDisplay id=\"NombreClienteDisplay\" size=\"12\" style=\"margin-top: 9px;\">{{nombreCliente}}</ion-col>\r\n              \r\n              <ion-col *ngIf=\"!isNombreCliente\" size=\"11\" style=\"text-align: rigth;\">\r\n                <ion-input [(ngModel)]=\"nombreCliente\" (ionBlur)=\"setNombre()\"></ion-input>\r\n                <!--ion-input id=\"nombreInput\" *ngIf=\"nombreCliente == null || nombreCliente == ''\" type=\"text\" (ionChange)=\"entraNombre($event)\" (ionBlur)=\"setNombre()\" class=\"required-data\"></!--ion-input -->\r\n              </ion-col>\r\n              <ion-col  *ngIf=\"!isNombreCliente\" size=\"1\" style=\"text-align: rigth;\" (click)=\"editarNombre()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item  class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Número de identidad\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isIdCliente\" #IdentidadClienteDisplay id=\"IdentidadClienteDisplay\" size=\"12\">{{identidadCliente}}</ion-col>\r\n              <!--ion-col  *ngIf=\"isIdCliente\" size=\"1\" style=\"text-align: rigth;\" (click)=\"editarIdentidad()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </!--ion-col -->\r\n              <ion-col *ngIf=\"!isIdCliente\" size=\"12\" style=\"text-align: rigth;\">\r\n                <ion-input [(ngModel)]=\"identidadCliente\" (ionBlur)=\"setIdentidad()\" maxlength=\"13\" class=\"required-data\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de licencia\r\n              <ion-chip id=\"licenceTypeSelecta\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"tipoLicenciaDisplay\" size=\"9\">{{elTipoDeLicencia}}</ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: rigth;\">\r\n                <ion-select id=\"tipoLicenciaId\" class=\"text-size-xs required-data\" [(ngModel)]=\"elTipoLicencia\" multiple=\"false\" (ionChange)=\"getElTipoLicencia($event)\"\r\n                style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let licencia of tipoLicencia\" [value]=\"licencia.Id\">\r\n                    {{licencia.TipoLicencia}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de género\r\n              <ion-chip id=\"genderTypeSelecta\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"tipoDeGeneroDisplay\" size=\"9\" class=\"select-label\">{{elGenero}}</ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: rigth;\">\r\n                <ion-select id=\"tipoGeneroId\" class=\"text-size-xs required-data\" [(ngModel)]=\"elTipoGenero\" multiple=\"false\" (ionChange)=\"getElTipoGenero($event)\"\r\n                style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let genero of tipoGeneros\" [value]=\"genero.Id\">\r\n                    {{genero.Genero}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Tipo de parentesco\r\n              <ion-chip id=\"parentalTypeSelecta\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                Seleccionar\r\n              </ion-chip>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col id=\"parentescoDisplay\" size=\"9\">{{elParentesco}}</ion-col>\r\n              <ion-col size=\"3\" style=\"text-align: rigth;\">\r\n                <ion-select class=\"text-size-xs required-data\" [(ngModel)]=\"elTipoParentesco\" multiple=\"false\" (ionChange)=\"getElTipoParentesco($event)\"\r\n                style=\"float: right;\">\r\n                  <ion-select-option *ngFor=\"let parentesco of tipoParentescos\" [value]=\"parentesco.CODIGO\">\r\n                    {{parentesco.DESCRIPCION}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item class=\"ion-no-padding  input\" (click)=\"identificarPais()\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Teléfono\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isTelCliente\" #telefonoClienteDisplay id=\"telefonoClienteDisplay\" size=\"11\">{{elTelefonoOrigen}}</ion-col>\r\n              <ion-col  *ngIf=\"isTelCliente\" size=\"1\" style=\"text-align: rigth;\" (click)=\"editarTelefono()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!isTelCliente\" size=\"12\" style=\"text-align: rigth;\">\r\n                <ion-input [(ngModel)]=\"elTelefonoOrigen\" (ionBlur)=\"setTelefono()\" class=\"required-data\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item  class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Correo electrónico\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col *ngIf=\"isMailCliente\" #elCorreoClienteDisplay id=\"elCorreoClienteDisplay\" size=\"11\" class=\"select-label\">{{elCorreoElectronico}}</ion-col>\r\n              <ion-col  *ngIf=\"isMailCliente\" size=\"1\" style=\"text-align: rigth;\" (click)=\"editarCorreo()\">\r\n                <ion-img src=\"../../assets/img/lapiz.svg\" style=\"width: 25px; float: right;\"></ion-img>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!isMailCliente\" size=\"12\" style=\"text-align: rigth;\">\r\n                <ion-input #email=\"ngModel\" type=\"email\" email name=\"email\" placeholder=\"Ingrese un correo válido\" \r\n            errorText=\"Correo Inválido\" [(ngModel)]=\"elCorreoElectronico\" [ngClass]=\"{'is-invalid': email.touched && email.invalid, 'is-valid': email.touched && email.valid}\"\r\n            (ionBlur)=\"validateEmail(email.status, $event)\" class=\"required-data select-label\"></ion-input>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <!--ion-item  class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Fecha y hora del siniestro\r\n            </ion-row>\r\n            <ion-row style=\"padding-top: 6px;\">\r\n              <ion-col offset='6' size=\"3\">\r\n                <ion-badge class=\"required-data\">{{formateadaSiniestro}}</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n        </!--ion-item>\r\n\r\n        <ion-item  class=\"ion-no-padding  input\">\r\n          <ion-grid>\r\n            <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n              Fecha de inspección\r\n            </ion-row>\r\n            <ion-row style=\"padding-top: 6px;\">\r\n              <ion-col offset='6' size=\"3\">\r\n                <ion-badge class=\"required-data\">{{formateadaInspeccion}}</ion-badge>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-button id=\"open-modal-inspeccion\" expand=\"block\">Seleccionar Fecha</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-solicitante_segmento-solicitante_module_ts.js.map