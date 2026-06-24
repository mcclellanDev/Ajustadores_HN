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
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _beneficiario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beneficiario.page.html?ngResource */ 9967);
/* harmony import */ var _beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiario.page.scss?ngResource */ 35142);
/* harmony import */ var _beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_beneficiario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/beneficiarios */ 15274);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _Modales_modal_guardar_modal_guardar_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modales/modal-guardar/modal-guardar.page */ 42426);
/* harmony import */ var _environments_exchange_rate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/exchange-rate */ 72196);















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
    this.validationAttempted = false;
    this.invalidBeneficiaryType = false;
    this.invalidCoverage = false;
    this.invalidStartDate = false;
    this.invalidEndDate = false;
    this.invalidCheckDate = false;
    this.invalidCheckNumber = false;
    this.invalidCheckAmount = false;
    this.invalidReceiverName = false;
    this.invalidReceiverId = false;
    this.invalidPayee = false;
    this.coverageSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Tipo de cobertura',
      subHeader: 'Selecciona una opción'
    };
    this.bchUsdReference = _environments_exchange_rate__WEBPACK_IMPORTED_MODULE_9__.bchUsdReference;
    this.claimEligibilityChecked = false;
    this.canGenerateSettlement = false;
    this.claimValidationError = false;
    this.claimAlertOpen = false;
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
    this.elFiniquito = JSON.parse(localStorage.getItem('elFiniquito') || '{}') || {};
    if (this.elFiniquito.TipoCoberturaFicohsa?.toString().trim().toLowerCase() === 'string') {
      this.elFiniquito.TipoCoberturaFicohsa = '';
      localStorage.removeItem('tipoCobertura');
    }
    console.log('El Finiquito');
    console.dir(this.elFiniquito);
    this.numeroDeReclamo = localStorage.getItem('codigoReclamo');
    this.fechaDeFirma = this.fechaFirma;
    this.getTiposDeCobertura();
  }
  ngOnInit() {
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).subscribe(res => {
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
      this.validateClaimEligibility();
    } else {
      this.isLoading = false;
      this.claimEligibilityChecked = true;
      this.claimValidationError = true;
    }
  }
  validateClaimEligibility() {
    let responseReceived = false;
    this.isLoading = true;
    this.claimEligibilityChecked = false;
    this.claimValidationError = false;
    this.api.DatosDeAtencion(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
      this.isLoading = false;
      this.claimEligibilityChecked = true;
    })).subscribe(res => {
      responseReceived = true;
      const attention = Array.isArray(res) ? res[0] : res;
      const claimCode = attention?.CodigoReclamoFicohsa?.toString().trim() || '';
      this.codigoReclamo = claimCode;
      this.numeroDeReclamo = claimCode;
      this.canGenerateSettlement = !!claimCode;
      if (this.canGenerateSettlement) {
        localStorage.setItem('codigoReclamo', claimCode);
        console.log('Caches en storage :');
        this.obtenerCache();
        return;
      }
      localStorage.removeItem('codigoReclamo');
      this.presentClaimRequiredAlert();
    }, () => {
      this.canGenerateSettlement = false;
      this.claimValidationError = true;
      this.presentClaimValidationErrorAlert();
    }, () => {
      if (!responseReceived) {
        localStorage.removeItem('codigoReclamo');
        this.canGenerateSettlement = false;
        this.presentClaimRequiredAlert();
      }
    });
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  get isDollarPolicy() {
    const currency = (this.moneda || this.miMoneda || '').toString().trim().toUpperCase();
    return currency.includes('DOLAR') || currency.includes('DÓLAR') || currency.includes('USD') || currency === '$';
  }
  openBchExchangeRate() {
    window.open(this.bchUsdReference.sourceUrl, '_system', 'location=yes');
  }
  getBeneficiariosTipos() {
    for (let index = 0; index < _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__.beneficiariosTipos.length; index++) {
      const element = _environments_beneficiarios__WEBPACK_IMPORTED_MODULE_6__.beneficiariosTipos[index];
      this.beneficiarioTipos.push(element);
      //alert(element)
    }
  }

  seleccionarTipoBeneficiario(event) {
    this.elFiniquito.beneficiarioTipo = event.target.value;
    this.invalidBeneficiaryType = false;
  }
  seleccionarTipoCobertura(event) {
    this.elFiniquito.TipoCoberturaFicohsa = event.target.value;
    localStorage.setItem('tipoCobertura', event.target.value);
    this.invalidCoverage = false;
  }
  goBack() {
    if (this.claimEligibilityChecked && !this.canGenerateSettlement) {
      this.goExpediente();
      return;
    }
    this.alertaSalir();
    //this.toaster.presentToastSave('Salir del formulario? Los datos se perderan sin haber guardado. Salir?', 'middle', 'primary', 'this.elExpediente');
    //this.openModalGuardar();
    //this.location.back();
  }

  goExpediente() {
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: this.atencionId || Number(this.idAtencion),
        Source: 1
      }
    });
  }
  presentClaimRequiredAlert() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.claimAlertOpen) {
        return;
      }
      _this.claimAlertOpen = true;
      const alert = yield _this.alert.create({
        cssClass: 'form-choice-alert',
        header: 'Finiquito no disponible',
        subHeader: `Atención #${_this.idAtencion}`,
        message: 'Esta atención todavía no tiene un reclamo generado. Debes completar ese proceso antes de registrar al beneficiario, el cheque y la firma del finiquito.',
        buttons: [{
          text: 'Regresar al expediente',
          cssClass: 'alert-button-confirm',
          handler: () => _this.goExpediente()
        }]
      });
      alert.onDidDismiss().then(() => _this.claimAlertOpen = false);
      yield alert.present();
    })();
  }
  presentClaimValidationErrorAlert() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.claimAlertOpen) {
        return;
      }
      _this2.claimAlertOpen = true;
      const alert = yield _this2.alert.create({
        cssClass: 'form-choice-alert',
        header: 'No pudimos verificar el reclamo',
        message: 'Revisa tu conexión e intenta nuevamente antes de completar el finiquito.',
        buttons: [{
          text: 'Regresar',
          cssClass: 'alert-button-cancel',
          handler: () => _this2.goExpediente()
        }, {
          text: 'Reintentar',
          cssClass: 'alert-button-confirm',
          handler: () => _this2.validateClaimEligibility()
        }]
      });
      alert.onDidDismiss().then(() => _this2.claimAlertOpen = false);
      yield alert.present();
    })();
  }
  salir() {
    window.location.reload();
  }
  alertaSalir() {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alert.create({
        cssClass: 'form-choice-alert',
        header: 'Salir del formulario?',
        message: 'Los datos se perderan sin haber guardado. Salir?',
        buttons: _this3.alertButtons
      });
      yield alert.present();
    })();
  }
  openModalGuardar() {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('openModalOTP');
      alert('openModalGuardar');
      const modal = yield _this4.myModal.create({
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
    this.invalidPayee = !this.elFiniquito.NombreAFavor?.toString().trim();
    localStorage.setItem('NombreAFavor', this.elFiniquito.NombreAFavor);
  }
  entraentraReceptorIdentidad(event) {
    this.elFiniquito.IdentidadQuienRecibe = event.target.value;
    this.invalidReceiverId = !this.elFiniquito.IdentidadQuienRecibe?.toString().trim();
    localStorage.setItem('IdentidadQuienRecibe', this.elFiniquito.IdentidadQuienRecibe);
  }
  entraReceptorNombre(event) {
    this.elFiniquito.NombreQuienRecibe = event.target.value;
    this.invalidReceiverName = !this.elFiniquito.NombreQuienRecibe?.toString().trim();
    localStorage.setItem('NombreQuienRecibe', this.elFiniquito.NombreQuienRecibe);
  }
  entraChequeMonto(event) {
    this.elFiniquito.ValorDelCheque = event.target.value;
    this.invalidCheckAmount = !this.elFiniquito.ValorDelCheque || Number(this.elFiniquito.ValorDelCheque) <= 0;
    localStorage.setItem('ValorDelCheque', this.elFiniquito.ValorDelCheque);
  }
  entraChequeNumero(event) {
    this.elFiniquito.NumeroCheque = event.target.value;
    this.invalidCheckNumber = !this.elFiniquito.NumeroCheque?.toString().trim();
    localStorage.setItem('NumeroCheque', this.elFiniquito.NumeroCheque);
  }
  goFiniquito() {
    if (!this.claimEligibilityChecked || !this.canGenerateSettlement || !this.codigoReclamo?.toString().trim()) {
      this.presentClaimRequiredAlert();
      return;
    }
    if (!this.canContinue()) {
      return;
    }
    console.log('antes de ir al finiquito');
    this.elFiniquito.NumeroReclamo = this.codigoReclamo;
    this.elFiniquito.FechaFirma = new Date().toISOString();
    console.dir(this.elFiniquito);
    localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));
    this.router.navigate(['./finiquito']);
  }
  getTiposDeCobertura() {
    var _this5 = this;
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = false;
      //this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
      //this.finiquitoCompleto = true;
      //await load.dismiss();
    }))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la cobertura');
        console.dir(res);
        _this5.tiposdeCobertura = res;
        //this.idTablaAjustador = res.toString();
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
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
    const beneficiaryType = localStorage.getItem('finiquito-beneficiarioTipo');
    this.elFiniquito.beneficiarioTipo = beneficiaryType ? parseInt(beneficiaryType, 10) : this.elFiniquito.beneficiarioTipo;
    this.desdeFecha = localStorage.getItem('finiquito-FechaDesde');
    this.hastaFecha = localStorage.getItem('finiquito-FechaHasta');
    this.chequeFecha = localStorage.getItem('finiquito-FechaDelCheque');
    this.numeroCheque = localStorage.getItem('finiquito-numeroCheque');
    this.montoCheque = localStorage.getItem('finiquito-ValorDelCheque');
    this.receptorNombre = localStorage.getItem('finiquito-NombreQuienRecibe');
    this.receptorIdentidad = localStorage.getItem('finiquito-IdentidadQuienRecibe');
    this.aFavorDe = localStorage.getItem('finiquito-NombreAFavor');
    this.elFiniquito.FechaDesde = this.desdeFecha || this.elFiniquito.FechaDesde;
    this.elFiniquito.FechaHasta = this.hastaFecha || this.elFiniquito.FechaHasta;
    this.elFiniquito.FechaDelCheque = this.chequeFecha || this.elFiniquito.FechaDelCheque;
    this.elFiniquito.NumeroCheque = this.numeroCheque || this.elFiniquito.NumeroCheque;
    this.elFiniquito.ValorDelCheque = this.montoCheque || this.elFiniquito.ValorDelCheque;
    this.elFiniquito.NombreQuienRecibe = this.receptorNombre || this.elFiniquito.NombreQuienRecibe;
    this.elFiniquito.IdentidadQuienRecibe = this.receptorIdentidad || this.elFiniquito.IdentidadQuienRecibe;
    this.elFiniquito.NombreAFavor = this.aFavorDe || this.elFiniquito.NombreAFavor;
    const cachedCoverage = localStorage.getItem('tipoCobertura');
    this.elFiniquito.TipoCoberturaFicohsa = this.elFiniquito.TipoCoberturaFicohsa || (cachedCoverage?.trim().toLowerCase() === 'string' ? '' : cachedCoverage);
    this.isLoading = false;
  }
  openDatePicker(type, modal) {
    this.tipoFecha = type;
    this.calendarTitle = this.calendarTitles[type - 1].title;
    const currentDate = type === 1 ? this.desdeFecha : type === 2 ? this.hastaFecha : this.chequeFecha;
    this.laFecha = currentDate || new Date().toISOString();
    modal.present();
  }
  updateValidationState() {
    this.invalidBeneficiaryType = !this.elFiniquito.beneficiarioTipo;
    this.invalidCoverage = !this.elFiniquito.TipoCoberturaFicohsa?.toString().trim();
    this.invalidStartDate = !this.desdeFecha;
    this.invalidEndDate = !this.hastaFecha || !!this.desdeFecha && this.hastaFecha < this.desdeFecha;
    this.invalidCheckDate = !this.chequeFecha;
    this.invalidCheckNumber = !this.numeroCheque?.toString().trim();
    this.invalidCheckAmount = !this.montoCheque || Number(this.montoCheque) <= 0;
    this.invalidReceiverName = !this.receptorNombre?.toString().trim();
    this.invalidReceiverId = !this.receptorIdentidad?.toString().trim();
    this.invalidPayee = !this.aFavorDe?.toString().trim();
  }
  canContinue() {
    this.validationAttempted = true;
    this.updateValidationState();
    const invalid = this.invalidBeneficiaryType || this.invalidCoverage || this.invalidStartDate || this.invalidEndDate || this.invalidCheckDate || this.invalidCheckNumber || this.invalidCheckAmount || this.invalidReceiverName || this.invalidReceiverId || this.invalidPayee;
    if (invalid) {
      this.toaster.presentToastNoButtonsRed('Completa los campos marcados antes de revisar y firmar el finiquito.', 'top', 'finiquito');
      return false;
    }
    return true;
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
      this.invalidStartDate = false;
    }
    if (tipoFecha == 2) {
      this.elFiniquito.FechaHasta = new Date(laFecha).toISOString().split("T")[0];
      this.fechaFinal = new Date(laFecha).toISOString().split("T")[0];
      this.hastaFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaFinal + ', ' + tipoFecha);
      this.invalidEndDate = !!this.desdeFecha && this.hastaFecha < this.desdeFecha;
    }
    if (tipoFecha == 3) {
      this.elFiniquito.FechaDelCheque = new Date(laFecha).toISOString().split("T")[0];
      this.fechaCheque = new Date(laFecha).toISOString().split("T")[0];
      this.chequeFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaCheque + ', ' + tipoFecha);
      this.invalidCheckDate = false;
    }
    setTimeout(() => {
      this.guardaCache(tipoFecha);
    }, 600);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AnimationController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
    }];
  }
};
BeneficiarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
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
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  height: 20%;\n  left: 40%;\n  position: fixed;\n  top: 28%;\n  width: 20%;\n  z-index: 999;\n}\n\n#spinFooter {\n  background: rgba(0, 0, 0, 0.6);\n  bottom: 0;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  z-index: 900;\n}\n\nion-header ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\nion-header ion-button,\nion-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.beneficiary-content {\n  --background: #eef3f7;\n  --padding-bottom: 22px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 12px;\n}\n\n.beneficiary-form {\n  display: grid;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 980px;\n}\n\n.claim-blocked-state {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: column;\n  margin: min(12vh, 90px) auto 0;\n  max-width: 540px;\n  padding: 28px 22px;\n  text-align: center;\n}\n\n.claim-blocked-icon {\n  align-items: center;\n  background: #eaf2ff;\n  border-radius: 50%;\n  color: var(--primaryColor);\n  display: flex;\n  height: 62px;\n  justify-content: center;\n  margin-bottom: 14px;\n  width: 62px;\n}\n\n.claim-blocked-icon ion-icon {\n  font-size: 2rem;\n}\n\n.claim-blocked-state > span {\n  color: #617b94;\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.claim-blocked-state h2 {\n  color: #17365d;\n  font-size: 1.15rem;\n  margin: 5px 0 8px;\n}\n\n.claim-blocked-state p {\n  color: #557089;\n  font-size: 0.86rem;\n  line-height: 1.5;\n  margin: 0;\n  max-width: 440px;\n}\n\n.claim-blocked-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.claim-blocked-actions ion-button {\n  --border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  margin: 0;\n}\n\n.form-section {\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  padding: 14px;\n}\n\n.section-heading {\n  border-bottom: 1px solid #e4ebf1;\n  margin-bottom: 12px;\n  padding-bottom: 9px;\n}\n\n.section-heading span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.section-heading h2 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.form-grid,\n.date-fields {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.exchange-rate-notice {\n  align-items: flex-start;\n  background: #fff8e8;\n  border: 1px solid #efcf82;\n  border-radius: 6px;\n  color: #614b18;\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  padding: 11px 12px 8px;\n}\n\n.exchange-rate-notice > ion-icon {\n  color: #b57600;\n  flex: 0 0 auto;\n  font-size: 1.45rem;\n  margin-top: 1px;\n}\n\n.exchange-rate-notice strong {\n  display: block;\n  font-size: 0.82rem;\n  line-height: 1.35;\n}\n\n.exchange-rate-notice p {\n  font-size: 0.76rem;\n  line-height: 1.4;\n  margin: 4px 0 2px;\n}\n\n.exchange-rate-notice ion-button {\n  --color: #075fca;\n  font-size: 0.72rem;\n  font-weight: 800;\n  height: 32px;\n  margin: 0;\n  text-transform: none;\n}\n\n.date-fields {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.form-field {\n  background: #ffffff;\n  border: 1px solid #dce5ed;\n  border-radius: 6px;\n  padding: 10px;\n}\n\n.form-field-wide {\n  grid-column: 1/-1;\n}\n\n.form-field > ion-label {\n  color: #617b94;\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.form-field ion-input,\n.form-field ion-select {\n  --background: #f5f8fb;\n  --color: #17365d;\n  --highlight-color-focused: var(--primaryColor);\n  --padding-bottom: 9px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 9px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-size: 0.92rem;\n  min-height: 42px;\n  width: 100%;\n}\n\n.select-control {\n  align-items: stretch;\n  display: grid;\n  gap: 6px;\n  grid-template-columns: minmax(0, 1fr) 48px;\n}\n\n.select-control > span {\n  align-items: center;\n  background: #edf2f6;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n  color: #315b80;\n  display: flex;\n  font-size: 0.84rem;\n  font-weight: 700;\n  min-height: 42px;\n  overflow-wrap: anywhere;\n  padding: 8px 10px;\n}\n\n.select-control ion-select {\n  --padding-end: 8px;\n  --padding-start: 8px;\n  min-width: 48px;\n}\n\n.select-control ion-select::part(text),\n.select-control ion-select::part(placeholder) {\n  display: none;\n}\n\n.select-control ion-select::part(icon) {\n  color: var(--primaryColor);\n  font-size: 1.35rem;\n  opacity: 1;\n}\n\n.beneficiary-type-field ion-radio-group {\n  display: grid;\n  gap: 7px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.beneficiary-type-field ion-item {\n  --background: #f5f8fb;\n  --inner-padding-end: 6px;\n  --min-height: 76px;\n  --padding-start: 6px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n}\n\n.beneficiary-type-field ion-item::part(native) {\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 8px 4px;\n}\n\n.beneficiary-type-field ion-label {\n  color: #315b80;\n  font-size: 0.76rem;\n  font-weight: 800;\n  margin: 0 0 7px;\n  text-align: center;\n  white-space: normal;\n}\n\n.beneficiary-type-field ion-radio {\n  height: 28px;\n  margin: 0;\n  min-height: 28px;\n  min-width: 28px;\n  width: 28px;\n}\n\n.date-field {\n  appearance: none;\n  background: #f5f8fb;\n  border: 1px solid #d8e3ed;\n  border-radius: 6px;\n  color: #17365d;\n  min-height: 82px;\n  padding: 10px 40px 10px 11px;\n  position: relative;\n  text-align: left;\n}\n\n.date-field span {\n  color: #617b94;\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.date-field strong {\n  font-size: 0.88rem;\n}\n\n.date-field ion-icon {\n  color: var(--primaryColor);\n  font-size: 1.35rem;\n  position: absolute;\n  right: 12px;\n  top: calc(50% - 11px);\n}\n\n.field-invalid,\n.date-field.field-invalid {\n  border-color: #d93636;\n  box-shadow: 0 0 0 1px #d93636;\n}\n\n.field-invalid > ion-label,\n.date-field.field-invalid span {\n  color: #c62828;\n}\n\n.field-invalid ion-input,\n.field-invalid .select-control > span,\n.field-invalid .select-control ion-select,\n.field-invalid ion-item {\n  border-color: #d93636;\n}\n\n.beneficiary-footer {\n  background: #ffffff;\n  border-top: 1px solid #d9e1e8;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n}\n\n.beneficiary-footer ion-toolbar {\n  --background: #ffffff;\n  --min-height: 66px;\n  --padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 8px;\n}\n\n.beneficiary-footer ion-button {\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0 auto;\n  max-width: 520px;\n}\n\nion-modal.beneficiary-date-modal {\n  --backdrop-opacity: 0.48;\n  --border-radius: 12px;\n  --height: min(590px, calc(100vh - 28px));\n  --max-width: 430px;\n  --width: calc(100% - 12px);\n}\n\n.beneficiary-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.beneficiary-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.beneficiary-date-modal ion-button,\n.beneficiary-date-modal ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.date-modal-content {\n  --background: #f4f7fa;\n  --padding-bottom: 12px;\n  --padding-end: 6px;\n  --padding-start: 6px;\n  --padding-top: 12px;\n}\n\n.date-modal-content ion-datetime {\n  --background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 5px 18px rgba(18, 54, 87, 0.12);\n  margin: 0 auto;\n  max-width: calc(100vw - 24px);\n  overflow: hidden;\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .beneficiary-content {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 8px;\n  }\n  .form-section {\n    padding: 10px;\n  }\n  .form-grid,\n  .date-fields {\n    grid-template-columns: 1fr;\n  }\n  .form-field-wide {\n    grid-column: auto;\n  }\n  .claim-blocked-state {\n    margin-top: 8vh;\n    padding: 24px 16px;\n  }\n  .claim-blocked-actions {\n    flex-direction: column;\n  }\n  .claim-blocked-actions ion-button {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/beneficiario/beneficiario.page.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,SAAA;EACA,eAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;AACF;;AAEA;EACE,8BAAA;EACA,SAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,QAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AACF;;AAEA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;AACF;;AAEA;EACE,gCAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,eAAA;AACF;;AAEA;;EAEE,aAAA;EACA,SAAA;EACA,gDAAA;AACF;;AAEA;EACE,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;EACA,sBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;EACA,oBAAA;AACF;;AAEA;EACE,gDAAA;AACF;;AAEA;EACE,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;AACF;;AAEA;;EAEE,qBAAA;EACA,gBAAA;EACA,8CAAA;EACA,qBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,oBAAA;EACA,aAAA;EACA,QAAA;EACA,0CAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,iBAAA;AACF;;AAEA;EACE,kBAAA;EACA,oBAAA;EACA,eAAA;AACF;;AAEA;;EAEE,aAAA;AACF;;AAEA;EACE,0BAAA;EACA,kBAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;EACA,QAAA;EACA,gDAAA;AACF;;AAEA;EACE,qBAAA;EACA,wBAAA;EACA,kBAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,0BAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,qBAAA;EACA,6BAAA;AACF;;AAEA;;EAEE,cAAA;AACF;;AAEA;;;;EAIE,qBAAA;AACF;;AAEA;EACE,mBAAA;EACA,6BAAA;EACA,6CAAA;AACF;;AAEA;EACE,qBAAA;EACA,kBAAA;EACA,yDAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,wBAAA;EACA,qBAAA;EACA,wCAAA;EACA,kBAAA;EACA,0BAAA;AACF;;AAEA;EACE,iCAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,mBAAA;EACA,6CAAA;EACA,cAAA;EACA,6BAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE;IACE,kBAAA;IACA,oBAAA;IACA,kBAAA;EACF;EAEA;IACE,aAAA;EAAF;EAGA;;IAEE,0BAAA;EADF;EAIA;IACE,iBAAA;EAFF;EAKA;IACE,eAAA;IACA,kBAAA;EAHF;EAMA;IACE,sBAAA;EAJF;EAOA;IACE,WAAA;EALF;AACF","sourcesContent":["ion-spinner {\n  height: 20%;\n  left: 40%;\n  position: fixed;\n  top: 28%;\n  width: 20%;\n  z-index: 999;\n}\n\n#spinFooter {\n  background: rgba(0, 0, 0, 0.6);\n  bottom: 0;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  z-index: 900;\n}\n\nion-header ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\nion-header ion-button,\nion-header ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.beneficiary-content {\n  --background: #eef3f7;\n  --padding-bottom: 22px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 12px;\n}\n\n.beneficiary-form {\n  display: grid;\n  gap: 12px;\n  margin: 0 auto;\n  max-width: 980px;\n}\n\n.claim-blocked-state {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  display: flex;\n  flex-direction: column;\n  margin: min(12vh, 90px) auto 0;\n  max-width: 540px;\n  padding: 28px 22px;\n  text-align: center;\n}\n\n.claim-blocked-icon {\n  align-items: center;\n  background: #eaf2ff;\n  border-radius: 50%;\n  color: var(--primaryColor);\n  display: flex;\n  height: 62px;\n  justify-content: center;\n  margin-bottom: 14px;\n  width: 62px;\n}\n\n.claim-blocked-icon ion-icon {\n  font-size: 2rem;\n}\n\n.claim-blocked-state > span {\n  color: #617b94;\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.claim-blocked-state h2 {\n  color: #17365d;\n  font-size: 1.15rem;\n  margin: 5px 0 8px;\n}\n\n.claim-blocked-state p {\n  color: #557089;\n  font-size: 0.86rem;\n  line-height: 1.5;\n  margin: 0;\n  max-width: 440px;\n}\n\n.claim-blocked-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  margin-top: 20px;\n  width: 100%;\n}\n\n.claim-blocked-actions ion-button {\n  --border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  margin: 0;\n}\n\n.form-section {\n  background: #ffffff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n  padding: 14px;\n}\n\n.section-heading {\n  border-bottom: 1px solid #e4ebf1;\n  margin-bottom: 12px;\n  padding-bottom: 9px;\n}\n\n.section-heading span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.section-heading h2 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.form-grid,\n.date-fields {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.exchange-rate-notice {\n  align-items: flex-start;\n  background: #fff8e8;\n  border: 1px solid #efcf82;\n  border-radius: 6px;\n  color: #614b18;\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  padding: 11px 12px 8px;\n}\n\n.exchange-rate-notice > ion-icon {\n  color: #b57600;\n  flex: 0 0 auto;\n  font-size: 1.45rem;\n  margin-top: 1px;\n}\n\n.exchange-rate-notice strong {\n  display: block;\n  font-size: 0.82rem;\n  line-height: 1.35;\n}\n\n.exchange-rate-notice p {\n  font-size: 0.76rem;\n  line-height: 1.4;\n  margin: 4px 0 2px;\n}\n\n.exchange-rate-notice ion-button {\n  --color: #075fca;\n  font-size: 0.72rem;\n  font-weight: 800;\n  height: 32px;\n  margin: 0;\n  text-transform: none;\n}\n\n.date-fields {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.form-field {\n  background: #ffffff;\n  border: 1px solid #dce5ed;\n  border-radius: 6px;\n  padding: 10px;\n}\n\n.form-field-wide {\n  grid-column: 1 / -1;\n}\n\n.form-field > ion-label {\n  color: #617b94;\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.form-field ion-input,\n.form-field ion-select {\n  --background: #f5f8fb;\n  --color: #17365d;\n  --highlight-color-focused: var(--primaryColor);\n  --padding-bottom: 9px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 9px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-size: 0.92rem;\n  min-height: 42px;\n  width: 100%;\n}\n\n.select-control {\n  align-items: stretch;\n  display: grid;\n  gap: 6px;\n  grid-template-columns: minmax(0, 1fr) 48px;\n}\n\n.select-control > span {\n  align-items: center;\n  background: #edf2f6;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n  color: #315b80;\n  display: flex;\n  font-size: 0.84rem;\n  font-weight: 700;\n  min-height: 42px;\n  overflow-wrap: anywhere;\n  padding: 8px 10px;\n}\n\n.select-control ion-select {\n  --padding-end: 8px;\n  --padding-start: 8px;\n  min-width: 48px;\n}\n\n.select-control ion-select::part(text),\n.select-control ion-select::part(placeholder) {\n  display: none;\n}\n\n.select-control ion-select::part(icon) {\n  color: var(--primaryColor);\n  font-size: 1.35rem;\n  opacity: 1;\n}\n\n.beneficiary-type-field ion-radio-group {\n  display: grid;\n  gap: 7px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.beneficiary-type-field ion-item {\n  --background: #f5f8fb;\n  --inner-padding-end: 6px;\n  --min-height: 76px;\n  --padding-start: 6px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n}\n\n.beneficiary-type-field ion-item::part(native) {\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 8px 4px;\n}\n\n.beneficiary-type-field ion-label {\n  color: #315b80;\n  font-size: 0.76rem;\n  font-weight: 800;\n  margin: 0 0 7px;\n  text-align: center;\n  white-space: normal;\n}\n\n.beneficiary-type-field ion-radio {\n  height: 28px;\n  margin: 0;\n  min-height: 28px;\n  min-width: 28px;\n  width: 28px;\n}\n\n.date-field {\n  appearance: none;\n  background: #f5f8fb;\n  border: 1px solid #d8e3ed;\n  border-radius: 6px;\n  color: #17365d;\n  min-height: 82px;\n  padding: 10px 40px 10px 11px;\n  position: relative;\n  text-align: left;\n}\n\n.date-field span {\n  color: #617b94;\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n}\n\n.date-field strong {\n  font-size: 0.88rem;\n}\n\n.date-field ion-icon {\n  color: var(--primaryColor);\n  font-size: 1.35rem;\n  position: absolute;\n  right: 12px;\n  top: calc(50% - 11px);\n}\n\n.field-invalid,\n.date-field.field-invalid {\n  border-color: #d93636;\n  box-shadow: 0 0 0 1px #d93636;\n}\n\n.field-invalid > ion-label,\n.date-field.field-invalid span {\n  color: #c62828;\n}\n\n.field-invalid ion-input,\n.field-invalid .select-control > span,\n.field-invalid .select-control ion-select,\n.field-invalid ion-item {\n  border-color: #d93636;\n}\n\n.beneficiary-footer {\n  background: #ffffff;\n  border-top: 1px solid #d9e1e8;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n}\n\n.beneficiary-footer ion-toolbar {\n  --background: #ffffff;\n  --min-height: 66px;\n  --padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 8px;\n}\n\n.beneficiary-footer ion-button {\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.88rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0 auto;\n  max-width: 520px;\n}\n\nion-modal.beneficiary-date-modal {\n  --backdrop-opacity: 0.48;\n  --border-radius: 12px;\n  --height: min(590px, calc(100vh - 28px));\n  --max-width: 430px;\n  --width: calc(100% - 12px);\n}\n\n.beneficiary-date-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #ffffff;\n}\n\n.beneficiary-date-modal ion-title {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.beneficiary-date-modal ion-button,\n.beneficiary-date-modal ion-icon {\n  --color: #ffffff;\n  color: #ffffff;\n}\n\n.date-modal-content {\n  --background: #f4f7fa;\n  --padding-bottom: 12px;\n  --padding-end: 6px;\n  --padding-start: 6px;\n  --padding-top: 12px;\n}\n\n.date-modal-content ion-datetime {\n  --background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 5px 18px rgba(18, 54, 87, 0.12);\n  margin: 0 auto;\n  max-width: calc(100vw - 24px);\n  overflow: hidden;\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .beneficiary-content {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 8px;\n  }\n\n  .form-section {\n    padding: 10px;\n  }\n\n  .form-grid,\n  .date-fields {\n    grid-template-columns: 1fr;\n  }\n\n  .form-field-wide {\n    grid-column: auto;\n  }\n\n  .claim-blocked-state {\n    margin-top: 8vh;\n    padding: 24px 16px;\n  }\n\n  .claim-blocked-actions {\n    flex-direction: column;\n  }\n\n  .claim-blocked-actions ion-button {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9967:
/*!****************************************************************!*\
  !*** ./src/app/beneficiario/beneficiario.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading\"></ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button aria-label=\"Regresar\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Atención # {{idAtencion}} - {{miMoneda}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"beneficiary-content\">\n  <section class=\"claim-blocked-state\" *ngIf=\"claimEligibilityChecked && !canGenerateSettlement\">\n    <div class=\"claim-blocked-icon\">\n      <ion-icon [name]=\"claimValidationError ? 'cloud-offline-outline' : 'document-lock-outline'\"></ion-icon>\n    </div>\n    <span>Validación previa</span>\n    <h2>{{claimValidationError ? 'No pudimos verificar el reclamo' : 'Finiquito no disponible'}}</h2>\n    <p *ngIf=\"!claimValidationError\">\n      La atención #{{idAtencion}} todavía no tiene un reclamo generado. Completa ese proceso antes de\n      registrar al beneficiario, el cheque y la firma.\n    </p>\n    <p *ngIf=\"claimValidationError\">\n      Revisa tu conexión y vuelve a intentar la consulta antes de completar el finiquito.\n    </p>\n    <div class=\"claim-blocked-actions\">\n      <ion-button fill=\"outline\" (click)=\"goExpediente()\">Regresar al expediente</ion-button>\n      <ion-button *ngIf=\"claimValidationError\" (click)=\"validateClaimEligibility()\">Reintentar</ion-button>\n    </div>\n  </section>\n\n  <div class=\"beneficiary-form\" *ngIf=\"claimEligibilityChecked && canGenerateSettlement\">\n    <section class=\"form-section\">\n      <div class=\"section-heading\">\n        <span>Beneficiario del pago</span>\n        <h2>Tipo de beneficiario</h2>\n      </div>\n\n      <div class=\"form-field beneficiary-type-field\" [class.field-invalid]=\"validationAttempted && invalidBeneficiaryType\">\n        <ion-label>¿Quién recibirá el pago?</ion-label>\n        <ion-radio-group [(ngModel)]=\"elFiniquito.beneficiarioTipo\"\n          (ionChange)=\"seleccionarTipoBeneficiario($event); guardaCache(0)\">\n          <ion-item lines=\"none\">\n            <ion-label>Tercero</ion-label>\n            <ion-radio [value]=\"3\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Beneficiario</ion-label>\n            <ion-radio [value]=\"2\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Asegurado</ion-label>\n            <ion-radio [value]=\"1\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </div>\n\n      <div class=\"form-field\" [class.field-invalid]=\"validationAttempted && invalidCoverage\">\n        <ion-label>Tipo de cobertura</ion-label>\n        <div class=\"select-control\">\n          <span>{{elFiniquito.TipoCoberturaFicohsa || 'Sin seleccionar'}}</span>\n          <ion-select [(ngModel)]=\"elFiniquito.TipoCoberturaFicohsa\"\n            (ionChange)=\"seleccionarTipoCobertura($event)\" interface=\"alert\"\n            [interfaceOptions]=\"coverageSelectOptions\" okText=\"Seleccionar\" cancelText=\"Cancelar\"\n            toggleIcon=\"chevron-down-outline\">\n            <ion-select-option *ngFor=\"let tipoC of tiposdeCobertura\" [value]=\"tipoC.Descripcion\">\n              {{tipoC.Descripcion}}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\">\n        <span>Período y emisión</span>\n        <h2>Fechas del finiquito</h2>\n      </div>\n\n      <div class=\"date-fields\">\n        <button type=\"button\" class=\"date-field\" [class.field-invalid]=\"validationAttempted && invalidStartDate\"\n          (click)=\"openDatePicker(1, modal)\">\n          <span>Vigencia desde</span>\n          <strong>{{desdeFecha || 'Seleccionar fecha'}}</strong>\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </button>\n        <button type=\"button\" class=\"date-field\" [class.field-invalid]=\"validationAttempted && invalidEndDate\"\n          (click)=\"openDatePicker(2, modal)\">\n          <span>Vigencia hasta</span>\n          <strong>{{hastaFecha || 'Seleccionar fecha'}}</strong>\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </button>\n        <button type=\"button\" class=\"date-field\" [class.field-invalid]=\"validationAttempted && invalidCheckDate\"\n          (click)=\"openDatePicker(3, modal)\">\n          <span>Fecha del cheque</span>\n          <strong>{{chequeFecha || 'Seleccionar fecha'}}</strong>\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </button>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\">\n        <span>Entrega manual</span>\n        <h2>Información del cheque</h2>\n      </div>\n\n      <aside class=\"exchange-rate-notice\" *ngIf=\"isDollarPolicy\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <div>\n          <strong>La póliza está expresada en dólares, pero el cheque se emite en lempiras.</strong>\n          <p>\n            Referencia BCH: US$1.00 = L {{bchUsdReference.rate | number:'1.4-4'}},\n            vigente al {{bchUsdReference.effectiveDate}}. El monto debe registrarse manualmente y\n            verificarse contra la publicación oficial antes de continuar.\n          </p>\n          <ion-button fill=\"clear\" size=\"small\" (click)=\"openBchExchangeRate()\">\n            <ion-icon slot=\"start\" name=\"open-outline\"></ion-icon>\n            Consultar tasa vigente en BCH\n          </ion-button>\n        </div>\n      </aside>\n\n      <div class=\"form-grid\">\n        <div class=\"form-field\" [class.field-invalid]=\"validationAttempted && invalidCheckNumber\">\n          <ion-label>Número de cheque</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"numeroCheque\"\n            (ionInput)=\"entraChequeNumero($event); guardaCache(4)\"></ion-input>\n        </div>\n        <div class=\"form-field\" [class.field-invalid]=\"validationAttempted && invalidCheckAmount\">\n          <ion-label>Monto del cheque (Lempiras)</ion-label>\n          <ion-input type=\"number\" inputmode=\"decimal\" [(ngModel)]=\"montoCheque\"\n            (ionInput)=\"entraChequeMonto($event); guardaCache(5)\"></ion-input>\n        </div>\n        <div class=\"form-field\" [class.field-invalid]=\"validationAttempted && invalidReceiverName\">\n          <ion-label>Nombre de quien recibe</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"receptorNombre\"\n            (ionInput)=\"entraReceptorNombre($event); guardaCache(6)\"></ion-input>\n        </div>\n        <div class=\"form-field\" [class.field-invalid]=\"validationAttempted && invalidReceiverId\">\n          <ion-label>Identidad de quien recibe</ion-label>\n          <ion-input type=\"text\" inputmode=\"numeric\" [(ngModel)]=\"receptorIdentidad\"\n            (ionInput)=\"entraentraReceptorIdentidad($event); guardaCache(7)\"></ion-input>\n        </div>\n        <div class=\"form-field form-field-wide\" [class.field-invalid]=\"validationAttempted && invalidPayee\">\n          <ion-label>Cheque a favor de</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"aFavorDe\"\n            (ionInput)=\"entraAFavorDe($event); guardaCache(8)\"></ion-input>\n        </div>\n      </div>\n    </section>\n  </div>\n</ion-content>\n\n<ion-footer class=\"beneficiary-footer\" *ngIf=\"claimEligibilityChecked && canGenerateSettlement\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"goFiniquito()\">\n      Revisar y firmar finiquito\n      <ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-modal #modal class=\"beneficiary-date-modal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{calendarTitle}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button aria-label=\"Cerrar\" (click)=\"modal.dismiss()\">\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"date-modal-content\">\n      <ion-datetime presentation=\"date\" [preferWheel]=\"true\" locale=\"es-HN\" [firstDayOfWeek]=\"1\"\n        [showDefaultButtons]=\"true\" doneText=\"Guardar\" cancelText=\"Cancelar\"\n        [(ngModel)]=\"laFecha\" (ionChange)=\"marcarFecha(laFecha, tipoFecha)\">\n      </ion-datetime>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_beneficiario_beneficiario_module_ts.js.map