(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_beneficiario_beneficiario_module_ts"],{

/***/ 40467:
/*!*************************************************************!*\
  !*** ./src/app/beneficiario/beneficiario-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeneficiarioPageRoutingModule": () => (/* binding */ BeneficiarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _beneficiario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beneficiario.page */ 41964);




const routes = [{
  path: '',
  component: _beneficiario_page__WEBPACK_IMPORTED_MODULE_0__.BeneficiarioPage
}];
let BeneficiarioPageRoutingModule = class BeneficiarioPageRoutingModule {};
BeneficiarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BeneficiarioPageRoutingModule);


/***/ }),

/***/ 46011:
/*!*****************************************************!*\
  !*** ./src/app/beneficiario/beneficiario.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeneficiarioPageModule": () => (/* binding */ BeneficiarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _beneficiario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beneficiario-routing.module */ 40467);
/* harmony import */ var _beneficiario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beneficiario.page */ 41964);







let BeneficiarioPageModule = class BeneficiarioPageModule {};
BeneficiarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _beneficiario_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeneficiarioPageRoutingModule],
  declarations: [_beneficiario_page__WEBPACK_IMPORTED_MODULE_1__.BeneficiarioPage]
})], BeneficiarioPageModule);


/***/ }),

/***/ 41964:
/*!***************************************************!*\
  !*** ./src/app/beneficiario/beneficiario.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeneficiarioPage": () => (/* binding */ BeneficiarioPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _beneficiario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beneficiario.page.html?ngResource */ 9967);
/* harmony import */ var _beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiario.page.scss?ngResource */ 35142);
/* harmony import */ var _beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/beneficiarios */ 15274);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Modales_modal_guardar_modal_guardar_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modales/modal-guardar/modal-guardar.page */ 42426);














let BeneficiarioPage = class BeneficiarioPage {
  constructor(router, api, toaster, myModal, animationCtrl, alert) {
    this.router = router;
    this.api = api;
    this.toaster = toaster;
    this.myModal = myModal;
    this.animationCtrl = animationCtrl;
    this.alert = alert;
    this.alertButtons = [{
      text: 'Continuar',
      cssClass: 'alert-button-cancel'
    }, {
      text: 'Sí, Salir',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.salir();
      }
    }];
    this.elFiniquito = [];
    this.beneficiarioTipos = [];
    this.tiposdeCobertura = [];
    this.isLoading = false;
    this.tipoFecha = 0;
    this.isInit = false;
    this.calendarTitles = [] = _environments_calendario__WEBPACK_IMPORTED_MODULE_5__.calendarTitles;
    this.canDismiss = false;
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
    this.idAtencion = localStorage.getItem('idAtencion');
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    //  let daDate = this.acuerdoFiniquito.FechaRegistro;
    //  this.dia = daDate.split('T')[0].substring(8,10);
    //  this.mes = daDate.split('T')[0].substring(5,7);
    //  this.anio = daDate.split('T')[0].substring(0,4);
    let daDate = new Date(); // Temporalmente la fecha actual del sistema
    this.fechaFirma = daDate.toISOString();
    this.dia = daDate.getDate();
    this.mes = daDate.getMonth();
    this.anio = daDate.getFullYear();
    console.log(_environments_calendario__WEBPACK_IMPORTED_MODULE_5__.meses[this.mes].mes);
    this.fechaParrafo = this.dia + ' de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_5__.meses[this.mes].mes + ' de ' + this.anio;
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + _environments_calendario__WEBPACK_IMPORTED_MODULE_5__.meses[this.mesPie].mes + ' de ' + this.anioPie;
    this.elFiniquito = JSON.parse(localStorage.getItem('elFiniquito'));
    console.log('El Finiquito');
    console.dir(this.elFiniquito);
    this.numeroDeReclamo = localStorage.getItem('codigoReclamo');
    this.fechaDeFirma = this.fechaFirma;
    this.getTiposDeCobertura();
  }
  ngOnInit() {
    var _this = this;
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    }
    setTimeout(() => {
      console.log('Caches en storage :');
      this.obtenerCache();
    }, 2000);
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  getBeneficiariosTipos() {
    for (let index = 0; index < _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__.beneficiariosTipos.length; index++) {
      const element = _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__.beneficiariosTipos[index];
      this.beneficiarioTipos.push(element);
      //alert(element)
    }
  }

  seleccionarTipoBeneficiario(event) {
    //alert(event.target.value)
    this.elFiniquito.beneficiarioTipo = event.target.value;
  }
  goBack() {
    this.alertaSalir();
    //this.toaster.presentToastSave('Salir del formulario? Los datos se perderan sin haber guardado. Salir?', 'middle', 'primary', 'this.elExpediente');
    //this.openModalGuardar();
    //this.location.back();
  }

  salir() {
    window.location.reload();
  }
  alertaSalir() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: 'Salir del formulario?',
        message: 'Los datos se perderan sin haber guardado. Salir?',
        buttons: _this2.alertButtons
      });
      yield alert.present();
    })();
  }
  openModalGuardar() {
    var _this3 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('openModalOTP');
      alert('openModalGuardar');
      const modal = yield _this3.myModal.create({
        component: _Modales_modal_guardar_modal_guardar_page__WEBPACK_IMPORTED_MODULE_8__.ModalGuardarPage,
        componentProps: {},
        breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
        initialBreakpoint: 0.3,
        cssClass: 'modal-guardar custom-modal-size'
        //enterAnimation: this.enterAnimation,
        //canDismiss:this.canDismiss
      });

      setTimeout(() => {
        jquery__WEBPACK_IMPORTED_MODULE_7__('ion-modal').fadeIn('xslow');
        let wrappers = jquery__WEBPACK_IMPORTED_MODULE_7__('ion-modal');
        for (let index = 0; index < wrappers.length; index++) {
          const element = wrappers[index];
          jquery__WEBPACK_IMPORTED_MODULE_7__(element).find('.modal-wrapper').attr('style', ' transition: height 0.25s ease-in; height: 50vh; min-width: 60vw; max-width: 90vw; border-radius: 12px; align-self: center;');
        }
        //alert(wrappers.length);
      }, 3000);
      setTimeout(() => {}, 6000);
      modal.onDidDismiss().then(() => {
        console.log('Modal cerrado');
      });
      return yield modal.present();
    })();
  }
  entraAFavorDe(event) {
    this.elFiniquito.NombreAFavor = event.target.value;
    localStorage.setItem('NombreAFavor', this.elFiniquito.NombreAFavor);
  }
  entraentraReceptorIdentidad(event) {
    this.elFiniquito.IdentidadQuienRecibe = event.target.value;
    localStorage.setItem('IdentidadQuienRecibe', this.elFiniquito.IdentidadQuienRecibe);
  }
  entraReceptorNombre(event) {
    this.elFiniquito.NombreQuienRecibe = event.target.value;
    localStorage.setItem('NombreQuienRecibe', this.elFiniquito.NombreQuienRecibe);
  }
  entraChequeMonto(event) {
    this.elFiniquito.ValorDelCheque = event.target.value;
    localStorage.setItem('ValorDelCheque', this.elFiniquito.ValorDelCheque);
  }
  entraChequeNumero(event) {
    this.elFiniquito.NumeroCheque = event.target.value;
    localStorage.setItem('NumeroCheque', this.elFiniquito.NumeroCheque);
  }
  goFiniquito() {
    console.log('antes de ir al finiquito');
    this.elFiniquito.NumeroReclamo = localStorage.getItem('codigoReclamo');
    this.elFiniquito.FechaFirma = new Date().toISOString();
    console.dir(this.elFiniquito);
    localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));
    this.router.navigate(['./finiquito']);
  }
  getTiposDeCobertura() {
    var _this4 = this;
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = false;
      //this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
      //this.finiquitoCompleto = true;
      //await load.dismiss();
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la cobertura');
        console.dir(res);
        _this4.tiposdeCobertura = res;
        //this.idTablaAjustador = res.toString();
      });
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  clickConfirm() {
    //alert($('#confirm-button').text())
    jquery__WEBPACK_IMPORTED_MODULE_7__('#confirm-button').click();
  }
  guardaCache(position) {
    if (position == 0) {
      localStorage.setItem('finiquito-beneficiarioTipo', this.elFiniquito.beneficiarioTipo);
    }
    if (position == 1) {
      localStorage.setItem('finiquito-FechaDesde', this.elFiniquito.FechaDesde);
      //alert(this.elFiniquito.FechaDesde)
    }

    if (position == 2) {
      localStorage.setItem('finiquito-FechaHasta', this.elFiniquito.FechaHasta);
    }
    if (position == 3) {
      localStorage.setItem('finiquito-FechaDelCheque', this.elFiniquito.FechaDelCheque);
    }
    if (position == 4) {
      localStorage.setItem('finiquito-numeroCheque', this.elFiniquito.NumeroCheque);
    }
    if (position == 5) {
      localStorage.setItem('finiquito-ValorDelCheque', this.elFiniquito.ValorDelCheque);
    }
    if (position == 6) {
      localStorage.setItem('finiquito-NombreQuienRecibe', this.elFiniquito.NombreQuienRecibe);
    }
    if (position == 7) {
      localStorage.setItem('finiquito-IdentidadQuienRecibe', this.elFiniquito.IdentidadQuienRecibe);
    }
    if (position == 8) {
      localStorage.setItem('finiquito-NombreAFavor', this.elFiniquito.NombreAFavor);
    }
  }
  obtenerCache() {
    this.elFiniquito.beneficiarioTipo = parseInt(localStorage.getItem('finiquito-beneficiarioTipo'));
    this.desdeFecha = localStorage.getItem('finiquito-FechaDesde');
    this.hastaFecha = localStorage.getItem('finiquito-FechaHasta');
    this.chequeFecha = localStorage.getItem('finiquito-FechaDelCheque');
    this.numeroCheque = localStorage.getItem('finiquito-numeroCheque');
    this.montoCheque = localStorage.getItem('finiquito-ValorDelCheque');
    this.receptorNombre = localStorage.getItem('finiquito-NombreQuienRecibe');
    this.receptorIdentidad = localStorage.getItem('finiquito-IdentidadQuienRecibe');
    this.aFavorDe = localStorage.getItem('finiquito-NombreAFavor');
    this.isLoading = false;
  }
  marcarFecha(laFecha, tipoFecha) {
    let titleIndex = tipoFecha - 1;
    this.calendarTitle = _environments_calendario__WEBPACK_IMPORTED_MODULE_5__.calendarTitles[titleIndex].title;
    if (tipoFecha == 1) {
      this.elFiniquito.FechaDesde = new Date(laFecha).toISOString().split("T")[0];
      this.fechaInicio = new Date(laFecha).toISOString().split("T")[0];
      this.desdeFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaInicio + ', ' + tipoFecha);
    }
    if (tipoFecha == 2) {
      this.elFiniquito.FechaHasta = new Date(laFecha).toISOString().split("T")[0];
      this.fechaFinal = new Date(laFecha).toISOString().split("T")[0];
      this.hastaFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaFinal + ', ' + tipoFecha);
    }
    if (tipoFecha == 3) {
      this.elFiniquito.FechaDelCheque = new Date(laFecha).toISOString().split("T")[0];
      this.fechaCheque = new Date(laFecha).toISOString().split("T")[0];
      this.chequeFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaCheque + ', ' + tipoFecha);
    }
    setTimeout(() => {
      this.guardaCache(tipoFecha);
    }, 600);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AnimationController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
    }];
  }
};
BeneficiarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-beneficiario',
  template: _beneficiario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BeneficiarioPage);


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

/***/ 35142:
/*!****************************************************************!*\
  !*** ./src/app/beneficiario/beneficiario.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n.etiqueta-opcion {\n  font-size: 1.2rem;\n  color: var(--blueGrayColor);\n}\n\n.etiqueta-fecha {\n  width: 230px;\n  font-size: 1.2rem;\n  color: var(--primaryColor);\n}\n\n.bene-input {\n  margin-left: 70px;\n}\n\n.implicado-opcion {\n  margin-left: 3px;\n  --border-radius: 4px;\n  --inner-border-radius: 4px;\n}\n\n.etiqueta-input {\n  flex: initial;\n  max-width: 230px;\n  pointer-events: none;\n  width: 230px;\n  color: var(--primaryColor);\n}\n\n.modal-guardar {\n  height: 50%;\n}\n\n.custom-modal-size .modal-wrapper {\n  height: 50vh;\n  min-width: 60vw;\n  max-width: 90vw;\n  border-radius: 12px;\n  align-self: center;\n}\n\nion-alert.custom-alert {\n  --backdrop-opacity: 0.7;\n}\n\n.custom-alert .alert-button-group {\n  padding: 8px;\n}\n\nbutton.alert-button.alert-button-confirm {\n  background-color: var(--ion-color-success);\n  color: var(--ion-color-success-contrast);\n}\n\n.md button.alert-button.alert-button-confirm {\n  border-radius: 4px;\n}\n\n.ios .custom-alert button.alert-button {\n  border: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\n}\n\n.ios button.alert-button.alert-button-cancel {\n  border-right: 0;\n  border-bottom-left-radius: 13px;\n  border-top-left-radius: 13px;\n}\n\n.ios button.alert-button.alert-button-confirm {\n  border-bottom-right-radius: 13px;\n  border-top-right-radius: 13px;\n}\n\nion-button.date-button {\n  --background: var(--blueGrayColor);\n  --color: white;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n}\n\n#button-back-bene {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back-bene ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back-bene ion-fab-button ion-icon {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/beneficiario/beneficiario.page.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACQ,iBAAA;EACA,2BAAA;AAAR;;AAGA;EACI,YAAA;EACA,iBAAA;EACA,0BAAA;AAAJ;;AAGA;EACI,iBAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,oBAAA;EACF,0BAAA;AAAF;;AAGA;EACI,aAAA;EACA,gBAAA;EACA,oBAAA;EACA,YAAA;EACA,0BAAA;AAAJ;;AAGA;EACI,WAAA;AAAJ;;AAGA;EACE,YAAA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,uBAAA;AAAF;;AAGA;EACE,YAAA;AAAF;;AAGA;EACE,0CAAA;EACA,wCAAA;AAAF;;AAGA;EACE,kBAAA;AAAF;;AAGA;EACE,kEAAA;AAAF;;AAGA;EACE,eAAA;EACA,+BAAA;EACA,4BAAA;AAAF;;AAGA;EACE,gCAAA;EACA,6BAAA;AAAF;;AAGA;EACI,kCAAA;EAEF,cAAA;AADF;;AAIA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AADJ;;AAIA;EACI,iBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,kBAAA;AADJ;AAEI;EACE,oBAAA;AAAN;AACM;EAAS,YAAA;AAEf","sourcesContent":["ion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n.etiqueta-opcion{\r\n        font-size: 1.2rem;\r\n        color: var(--blueGrayColor);\r\n}\r\n\r\n.etiqueta-fecha{\r\n    width: 230px;\r\n    font-size: 1.2rem;\r\n    color: var(--primaryColor);\r\n}\r\n\r\n.bene-input{\r\n    margin-left: 70px;\r\n}\r\n\r\n.implicado-opcion{\r\n    margin-left: 3px;\r\n    --border-radius: 4px;\r\n  --inner-border-radius: 4px;\r\n}\r\n\r\n.etiqueta-input{\r\n    flex: initial;\r\n    max-width: 230px;\r\n    pointer-events: none;\r\n    width: 230px;\r\n    color: var(--primaryColor);\r\n}\r\n\r\n.modal-guardar{\r\n    height: 50%;\r\n}\r\n\r\n.custom-modal-size .modal-wrapper {\r\n  height: 50vh;       // 50% del alto de la pantalla\r\n  min-width: 60vw;    // mínimo 60% del ancho de la pantalla\r\n  max-width: 90vw;    // opcional: limita a no ser demasiado grande\r\n  border-radius: 12px;\r\n  align-self: center; // centra verticalmente en pantallas grandes\r\n}\r\n\r\nion-alert.custom-alert {\r\n  --backdrop-opacity: 0.7;\r\n}\r\n\r\n.custom-alert .alert-button-group {\r\n  padding: 8px;\r\n}\r\n\r\nbutton.alert-button.alert-button-confirm {\r\n  background-color: var(--ion-color-success);\r\n  color: var(--ion-color-success-contrast);\r\n}\r\n\r\n.md button.alert-button.alert-button-confirm {\r\n  border-radius: 4px;\r\n}\r\n\r\n.ios .custom-alert button.alert-button {\r\n  border: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\r\n}\r\n\r\n.ios button.alert-button.alert-button-cancel {\r\n  border-right: 0;\r\n  border-bottom-left-radius: 13px;\r\n  border-top-left-radius: 13px;\r\n}\r\n\r\n.ios button.alert-button.alert-button-confirm {\r\n  border-bottom-right-radius: 13px;\r\n  border-top-right-radius: 13px;\r\n}\r\n\r\nion-button.date-button{\r\n    --background: var(--blueGrayColor);\r\n\r\n  --color: white;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\nion-select::part(text) {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n#button-back-bene{\r\n    border-radius: 50%;\r\n    margin-bottom: 9px;\r\n    ion-fab-button{\r\n      padding-bottom: 25px;\r\n      ion-icon{color: white;}\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9967:
/*!****************************************************************!*\
  !*** ./src/app/beneficiario/beneficiario.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-fab id=\"button-back-bene\" style=\"position: fixed;\" vertical=\"top\" horizontal=\"start\" (click)=\"goBack()\">\r\n    <ion-fab-button (click)=\"'confirmar()'\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"></ion-col>\r\n          <ion-col size=\"4\">Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"4\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\" style=\"height: 100vh\">\r\n  <ion-list [inset]=\"true\">\r\n    <ion-item class=\"ion-no-padding  input\">\r\n      <ion-grid>\r\n        <ion-row size=\"12\" style=\"color: var(--primaryColor);font-size:1.2rem;\">\r\n          Tipo de Beneficiario\r\n            </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <!--ion-input type=\"number\" [(ngModel)]=\"elExpediente.CelularConductor\"\r\n      class=\"required-data\"></!--ion-input -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-radio-group [(ngModel)]=\"elFiniquito.beneficiarioTipo\" (ionChange)=\"seleccionarTipoBeneficiario($event);guardaCache(0)\" >\r\n        <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n          <ion-label class=\"etiqueta-opcion\">Tercero</ion-label>\r\n          <ion-radio class=\"implicado-opcion\" [value]=\"3\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n          <ion-label class=\"etiqueta-opcion\">Beneficiario</ion-label>\r\n          <ion-radio class=\"implicado-opcion\" [value]=\"2\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n          <ion-label class=\"etiqueta-opcion\">Asegurado</ion-label>\r\n          <ion-radio class=\"implicado-opcion\" [value]=\"1\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-item>\r\n    <!--ion-item class=\"ion-no-padding  input\">\r\n      <ion-label class=\"text-size-sm\" position=\"floating\">\r\n        Tipo de Cobertura</ion-label>\r\n      \r\n      <ion-select class=\"text-size-xs\" (ionChange)=\"seleccionarTipoCobertura($event)\" [(ngModel)]=\"elFiniquito.TipoCoberturaFicohsa\" multiple=\"false\" >\r\n        <ion-select-option *ngFor=\"let tipoC of tiposdeCobertura;let i = index\"  [value]=\"tipoC.Descripcion\">{{tipoC.Descripcion}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </!--ion-item -->\r\n    <ion-item  class=\"ion-no-padding  input\">\r\n      <ion-grid>\r\n        <ion-row style=\"padding-top: 6px;\">\r\n          <ion-col size=\"3\">\r\n            <ion-label class=\"text-size-sm etiqueta-fecha\">\r\n              Fecha Desde <span style=\"float: right;\"> :</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\"><span style=\"color: black;width: 100%;\">{{desdeFecha}}</span></ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-button expand=\"block\" class=\"date-button\" (click)=\"tipoFecha = 1; calendarTitle = calendarTitles[0].title; modal.present()\" (ionChange)=\"guardaCache(1)\">Seleccionar Fecha</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-item>\r\n    <ion-item  class=\"ion-no-padding  input\">\r\n      <ion-grid>\r\n        <ion-row style=\"padding-top: 6px;\">\r\n          <ion-col size=\"3\">\r\n            <ion-label class=\"text-size-sm etiqueta-fecha\">\r\n              Fecha Hasta <span style=\"float: right;\"> :</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\"><span style=\"color: black;width: 100%;\">{{hastaFecha}}</span></ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-button expand=\"block\" class=\"date-button\" (click)=\"tipoFecha = 2; calendarTitle = calendarTitles[1].title; modal.present()\" (ionChange)=\"guardaCache(2)\">Seleccionar Fecha</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-item>\r\n    <ion-item  class=\"ion-no-padding  input\">\r\n      <ion-grid>\r\n        <ion-row style=\"padding-top: 6px;\">\r\n          <ion-col size=\"3\">\r\n            <ion-label class=\"text-size-sm etiqueta-fecha\">\r\n              Fecha Del Cheque <span style=\"float: right;\"> :</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\"><span style=\"color: black;width: 100%;\">{{chequeFecha}}</span></ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-button expand=\"block\" class=\"date-button\" (click)=\"tipoFecha = 3; calendarTitle = calendarTitles[2].title; modal.present()\" (ionChange)=\"guardaCache(3)\">Seleccionar Fecha</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-item>\r\n    \r\n    <ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        Numero de Cheque <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"text\"[(ngModel)]=\"numeroCheque\" (ionChange)=\"entraChequeNumero($event);guardaCache(4)\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!--ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        Numero de Cheque <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"text\" [(ngModel)]=\"numeroCheque\" (ionChange)=\"entraChequeNumero($event);guardaCache(4)\"></ion-input>\r\n    </!--ion-item -->\r\n    <ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        Monto de Cheque <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"number\" maxlength=\"10\" [(ngModel)]=\"montoCheque\" (ionChange)=\"entraChequeMonto($event);guardaCache(5)\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        Receptor Nombre <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"text\"[(ngModel)]=\"receptorNombre\" (ionChange)=\"entraReceptorNombre($event);guardaCache(6)\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        Receptor Identidad <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"text\" [(ngModel)]=\"receptorIdentidad\" (ionChange)=\"entraentraReceptorIdentidad($event);guardaCache(7)\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding  input\" style=\"padding: 9px;\">\r\n      <ion-label class=\"text-size-sm etiqueta-input\" position=\"start\">\r\n        A Favor De? <span style=\"float: right;\"> :</span></ion-label>\r\n      <ion-input class=\"bene-input\" type=\"text\" [(ngModel)]=\"aFavorDe\" (ionChange)=\"entraAFavorDe($event);guardaCache(8)\"></ion-input>\r\n    </ion-item>\r\n    \r\n  </ion-list>  \r\n</ion-content>\r\n\r\n<ion-button style=\"position: fixed;width: 60px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goFiniquito()\">\r\n  <ion-icon name=\"chevron-forward\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-modal #modal trigger=\"open-modal-siniestro\" [initialBreakpoint]=\"0.9\" [breakpoints]=\"[0, 0.25, 0.5, 0.75, 0.9]\">\r\n  <ng-template><!--ion-button (click)=\"clickConfirm()\">Guardar Fecha</!--ion-button -->\r\n    <ion-content style=\"padding-bottom: 6px;\">\r\n      <ion-label style=\"margin-top: 3%;margin-left:3%;\"><strong style=\"color: #0090d0;\">{{calendarTitle}}</strong></ion-label>\r\n      <ion-datetime [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\r\n      [(ngModel)]=\"laFecha\" (ionChange)=\"marcarFecha(laFecha, tipoFecha)\" style=\"margin-left: 20%; margin-top: 10%;\"></ion-datetime>\r\n    </ion-content>\r\n    \r\n  </ng-template>\r\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_beneficiario_beneficiario_module_ts.js.map