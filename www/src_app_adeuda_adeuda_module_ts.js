(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adeuda_adeuda_module_ts"],{

/***/ 7324:
/*!*************************************************!*\
  !*** ./src/app/adeuda/adeuda-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaPageRoutingModule": () => (/* binding */ AdeudaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _adeuda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adeuda.page */ 11319);




const routes = [{
  path: '',
  component: _adeuda_page__WEBPACK_IMPORTED_MODULE_0__.AdeudaPage
}];
let AdeudaPageRoutingModule = class AdeudaPageRoutingModule {};
AdeudaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AdeudaPageRoutingModule);


/***/ }),

/***/ 46952:
/*!*****************************************!*\
  !*** ./src/app/adeuda/adeuda.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaPageModule": () => (/* binding */ AdeudaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _adeuda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adeuda-routing.module */ 7324);
/* harmony import */ var _adeuda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adeuda.page */ 11319);







let AdeudaPageModule = class AdeudaPageModule {};
AdeudaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _adeuda_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdeudaPageRoutingModule],
  declarations: [_adeuda_page__WEBPACK_IMPORTED_MODULE_1__.AdeudaPage]
})], AdeudaPageModule);


/***/ }),

/***/ 11319:
/*!***************************************!*\
  !*** ./src/app/adeuda/adeuda.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdeudaPage": () => (/* binding */ AdeudaPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _adeuda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adeuda.page.html?ngResource */ 43651);
/* harmony import */ var _adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adeuda.page.scss?ngResource */ 17468);
/* harmony import */ var _adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _interfaces_extras__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces/extras */ 33105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);














let AdeudaPage = class AdeudaPage {
  // datos a arreglar
  // poliza, agregar del cliente
  // fecha formato
  // 
  constructor(api, toaster, toast, alertController, router) {
    this.api = api;
    this.toaster = toaster;
    this.toast = toast;
    this.alertController = alertController;
    this.router = router;
    this.meses = _environments_calendario__WEBPACK_IMPORTED_MODULE_7__.meses;
    this.emptySignature = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature;
    this.isLoading = false;
    this.openModal = false;
    this.adeudaCompleta = false;
    this.ya = false;
    this.isEmptySignature = true;
    this.daniosSelectCulpable = [];
    this.daniosSelectC = [];
    this.danios = [];
    this.daniosSelectAju = [];
    this.daniosCulpable = [];
    this.commonDamages = [];
    this.manualDamages = [];
    this.deudaSent = localStorage.getItem('deudaSent'); //=== 'true';
    if (this.deudaSent) {
      this.isDeudaSent = this.deudaSent.toString().split('-')[0] === 'true';
      let deudaSentId = this.deudaSent.toString().split('-')[1];
      if (this.isDeudaSent == true && this.idAtencion === deudaSentId) {
        console.log('Deuda enviada');
        console.log(this.isDeudaSent);
      } else {
        this.isDeudaSent = false;
      }
    }
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.telFijo = localStorage.getItem('telFijo');
    this.acuerdoDeuda = JSON.parse(localStorage.getItem('deuda') || '{}') || {};
    this.daniosSelectCulpable = JSON.parse(localStorage.getItem('daniosSelectCulpa') || '[]') || [];
    this.commonDamages = this.acuerdoDeuda.DaniosComunes || this.daniosSelectCulpable;
    this.manualDamages = this.acuerdoDeuda.DaniosManuales || JSON.parse(localStorage.getItem('daniosSelectOtroCulpaDetalle') || '[]') || [];
    this.laPoliza = this.acuerdoDeuda.PolizaExterna || localStorage.getItem('datos-Poliza') || localStorage.getItem('poliza');
    this.getDanios();
    console.log('Los danios seleccionados');
    console.dir(this.daniosSelectCulpable);
    this.isSigned = localStorage.getItem('adeudaCompleta');
    this.adeudaCompleta = this.isSigned === 'true' || localStorage.getItem(`acuerdoDeudaEnviado-${this.idAtencion}`) === 'true';
    this.ya = this.adeudaCompleta;
    /*
    if (this.isSigned) {
      this.ya = this.isSigned;
    }
    */
    console.table(this.acuerdoDeuda);
    //alert(this.acuerdoDeuda['NombreDeudor']);
    /*
        for (let index = 0; index < this.acuerdoDeuda.length; index++) {
          const element = this.acuerdoDeuda[index];
          alert(element)
        }
        */
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();
    let daDate = localStorage.getItem('FechaRegistro') || new Date().toISOString();
    this.dia = daDate.split('T')[0].substring(8, 10);
    this.mes = daDate.split('T')[0].substring(5, 7);
    this.anio = daDate.split('T')[0].substring(0, 4);
    this.fechaParrafo = this.dia + ' de ' + this.meses[this.mes - 1].mes + ' de ' + this.anio;
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + this.meses[this.mesPie].mes + ' de ' + this.anioPie;
    console.log(this.diaPie + ' días' + ' del mes de ' + this.meses[this.mesPie].mes + ' de ' + this.anioPie, 'fecha siniestro');
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.logoFicohsa;
  }
  getDanios() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.daniosSelectAju = [];
      let losDanios;
      losDanios = localStorage.getItem('daniosSelectAju');
      _this.daniosSelectAju = JSON.parse(losDanios || '[]') || [];
      console.log('Danios desde localstorage');
      console.dir(_this.daniosSelectAju);
      _this.isLoading = true;
      _this.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.danios = res;
          console.log('Todos los daños');
          console.dir(_this.danios);
          for (let index = 0; index < localStorage.length; index++) {
            const element = localStorage.getItem(localStorage.key(index));
            if (localStorage.key(index).indexOf('daniosSelectCulpa') == 0) {
              console.log('Este daño : ' + element);
            }
          }
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
      _this.api.ObtenerDaniosExtras(_this.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_8__.Entidades[1].tipoEntidad).subscribe(res => {
        if (Array.isArray(res) && res.length > 0) {
          _this.manualDamages = res;
          _this.acuerdoDeuda.DaniosManuales = res;
          localStorage.setItem('daniosSelectOtroCulpaDetalle', JSON.stringify(res));
          localStorage.setItem('deuda', JSON.stringify(_this.acuerdoDeuda));
        }
      }, () => {
        console.log('No fue posible refrescar los daños manuales; se conservarán los datos locales.');
      });
    })();
  }
  ngOnInit() {
    setTimeout(() => {
      this.guardarConvenioReparacionTest();
    }, 1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      this.atencionId = parseInt(this.idAtencion);
      //alert(parseInt(this.idAtencion)+1)
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('fin');
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        this.expediente = res;
        this.moneda = this.expediente[0].Moneda;
        setTimeout(() => {
          console.log('Asi está armado el acuerdo');
          console.dir(this.expediente[0]);
          this.acuerdoDeuda.Anio = this.expediente[0].Year;
          this.acuerdoDeuda.Ciudad = this.expediente[0].Ciudad;
          this.acuerdoDeuda.FechaRegistro = this.expediente[0].FechaRegistro;
          this.acuerdoDeuda.Marca = this.expediente[0].Marca;
          this.acuerdoDeuda.Modelo = this.expediente[0].Modelo;
          this.acuerdoDeuda.NombreAsegurado = this.expediente[0].Cliente;
          this.acuerdoDeuda.Placa = this.expediente[0].NumeroPlaca;
          this.acuerdoDeuda.PolizaExterna = this.expediente[0].PolizaExterna;
          this.laPoliza = this.expediente[0].PolizaExterna || this.laPoliza;
          this.acuerdoDeuda.FechaRegistroDocumento = new Date().toISOString();
          this.acuerdoDeuda.DanioCausadoObservacion = this.acuerdoDeuda.Observaciones;
          //this.acuerdoDeuda.MotorImplicado = this.expediente[0].Motor;
          //this.acuerdoDeuda.ChasisImplicado = this.expediente[0].Chasis;
          console.dir(this.acuerdoDeuda);
          this.isLoading = false;
        }, 1000);
        //alert(this.moneda)
        if (this.moneda == null) {
          this.miMoneda = "LEMPIRAS";
        } else {
          this.miMoneda = this.moneda;
        }
      });
    }
  }
  ionViewWillEnter() {
    this.debtorSignature = localStorage.getItem(this.signatureStorageKey);
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  get signatureStorageKey() {
    return `adeudaSignature-${this.idAtencion}`;
  }
  get commitmentLabel() {
    return Number(this.acuerdoDeuda.CompromisoDePago) === 1 ? 'Sí' : 'No';
  }
  get licenseTypeLabel() {
    return this.acuerdoDeuda.TipoLicenciaDescripcion || this.acuerdoDeuda.TipoLicencia || 'Sin información';
  }
  get totalDamages() {
    return this.commonDamages.length + this.manualDamages.length;
  }
  goDebtorSignature() {
    this.router.navigate(['./adeuda-signature']);
  }
  confirmarEnvio() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.debtorSignature) {
        _this2.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de enviar el acuerdo.', 'top', 'firma');
        return;
      }
      const alert = yield _this2.alertController.create({
        cssClass: 'form-choice-alert',
        header: 'Confirmar envío',
        subHeader: `Atención #${_this2.idAtencion}`,
        message: 'Verifica que los datos del reconocimiento de deuda sean correctos. Después de enviarlo, el documento quedará registrado con esta firma.',
        buttons: [{
          text: 'Revisar nuevamente',
          role: 'cancel'
        }, {
          text: 'Sí, enviar',
          role: 'confirm',
          handler: () => _this2.testSave()
        }]
      });
      yield alert.present();
    })();
  }
  testSave() {
    if (!this.debtorSignature) {
      this.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de enviar el acuerdo.', 'top', 'firma');
      return;
    }
    this.isLoading = true;
    this.acuerdoDeuda.FirmaDeudor = this.debtorSignature.split(',')[1];
    this.guardarDeuda();
  }
  guardarDeuda() {
    var _this3 = this;
    this.isLoading = true;
    console.dir(this.acuerdoDeuda);
    this.api.insertarReconocimientoDeuda(this.acuerdoDeuda).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.isLoading = false;
      console.log('fin adeuda');
    })).subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la deuda');
        console.dir(res);
        _this3.isLoading = false;
        localStorage.setItem('AcuerdoDeDeuda-' + _this3.idAtencion, 'true');
        if (_this3.daniosSelectCulpable.length > 0) {
          for (let index = 0; index < _this3.daniosSelectCulpable.length; index++) {
            const element = _this3.daniosSelectCulpable[index];
            let elTipoReparacion = localStorage.getItem('TipoReparacionCulpa-' + element.Codigo);
            let reparaArray = {
              codigoDanio: element.Codigo,
              descripcionDanio: element.Descripcion,
              fotografia: _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature.split(',')[1],
              idAtencion: _this3.idAtencion,
              refTipofotoId: element.Id,
              TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_8__.Entidades[1].tipoEntidad,
              TipoReparacion: elTipoReparacion
            };
            console.log('Esta es la data desde ajustador');
            console.dir(reparaArray);
            _this3.api.insertarConvenioReparacion(reparaArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              _this3.isLoading = false;
            }))).subscribe( /*#__PURE__*/function () {
              var _ref7 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                console.log(res);
                console.log("Convenio guardado");
                if (index == _this3.daniosSelectCulpable.length - 1) {
                  _this3.api.EnviarNotificacionEmail(_this3.idAtencion);
                }
              });
              return function (_x4) {
                return _ref7.apply(this, arguments);
              };
            }(), /*#__PURE__*/function () {
              var _ref8 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                _this3.toaster.presentToast(res.error.Message, 'top', 'taller');
              });
              return function (_x5) {
                return _ref8.apply(this, arguments);
              };
            }());
            if (index == _this3.daniosSelectCulpable.length - 1) {
              _this3.ya = true;
              _this3.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
              _this3.adeudaCompleta = true;
              localStorage.setItem('adeudaCompleta', _this3.adeudaCompleta.toString());
              localStorage.setItem(`acuerdoDeudaEnviado-${_this3.idAtencion}`, 'true');
              localStorage.removeItem(_this3.signatureStorageKey);
            }
          }
        } else {
          _this3.ya = true;
          _this3.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
          _this3.adeudaCompleta = true;
          localStorage.setItem('adeudaCompleta', _this3.adeudaCompleta.toString());
          localStorage.setItem(`acuerdoDeudaEnviado-${_this3.idAtencion}`, 'true');
          localStorage.removeItem(_this3.signatureStorageKey);
        }
        localStorage.setItem('deudaSent', 'true-' + _this3.atencionId);
      });
      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }(), error => {
      this.toaster.presentToastNoButtonsRed(error?.error?.Message || 'No fue posible enviar el acuerdo de deuda. La firma se conservará para que puedas reintentar.', 'top', 'deuda');
    });
    /**/
  }

  goExpediente() {
    this.router.navigate(['./expediente'], {
      queryParams: {
        Id: this.atencionId || Number(this.idAtencion),
        Source: 1
      }
    });
  }
  guardarConvenioReparacionTest() {
    if (this.daniosSelectCulpable.length > 0) {
      for (let index = 0; index < this.daniosSelectCulpable.length; index++) {
        const element = this.daniosSelectCulpable[index];
        let elTipoReparacion = localStorage.getItem('TipoReparacionCulpa-' + element.Codigo);
        let reparaArray = {
          codigoDanio: element.Codigo,
          descripcionDanio: element.Descripcion,
          fotografia: _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature.split(',')[1],
          idAtencion: this.idAtencion,
          refTipofotoId: element.Id,
          TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_8__.Entidades[1].tipoEntidad,
          TipoReparacion: elTipoReparacion
        };
        let DanioOtro = JSON.parse(localStorage.getItem('danioOtroCulpa-' + element.Codigo));
        if (DanioOtro) {
          let TipoReparacionCulpa = localStorage.getItem('TipoReparacionCulpa-' + element.Codigo);
          let reparaArrayOtro = {
            RefAtencionId: this.idAtencion,
            DescripcionDeDanio: element.Descripcion,
            FechaRegistro: new Date().toISOString(),
            UsuarioId: this.api.currentUser.ProveedorAgenteId,
            TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_8__.Entidades[1].tipoEntidad,
            TipoReparacion: TipoReparacionCulpa,
            CodigoDanioVehiculo: DanioOtro.Id
          };
          console.log('Esta es la data desde ajustador danio otro');
          console.dir(reparaArrayOtro);
        }
        console.log('Esta es la data desde ajustador');
        console.dir(reparaArray);
      }
    }
  }
  printPdf() {
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/DownloadReconocimientoDeDeuda/';
    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl + parseInt(this.idAtencion), '_self');
    } else {
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de imprimirlo.', 'middle', 'deuda');
    }
  }
  previewPdf() {
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/ReconocimientoDeDeuda/';
    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl + parseInt(this.idAtencion), '_self');
    } else {
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de previsualizarlo.', 'middle', 'deuda');
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }];
  }
};
AdeudaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-adeuda',
  template: _adeuda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdeudaPage);


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

/***/ 17468:
/*!****************************************************!*\
  !*** ./src/app/adeuda/adeuda.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --adeuda-blue: #0764d8;\n  --adeuda-ink: #16375d;\n  --adeuda-muted: #607792;\n  --adeuda-line: #d5e1ed;\n  --adeuda-surface: #f4f7fa;\n}\n\nion-toolbar {\n  --background: var(--adeuda-blue);\n  --color: #fff;\n}\n\nion-toolbar ion-title {\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-align: center;\n}\n\nion-back-button {\n  --color: #fff;\n}\n\n.adeuda-page {\n  --background: #eef3f7;\n}\n\n.adeuda-loading {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.78);\n  display: flex;\n  inset: 0;\n  justify-content: center;\n  position: fixed;\n  z-index: 1000;\n}\n\n.adeuda-loading ion-spinner {\n  height: 54px;\n  width: 54px;\n}\n\n.adeuda-layout {\n  display: grid;\n  gap: 14px;\n  margin: 0 auto;\n  max-width: 1180px;\n  min-height: 100%;\n  padding: 14px;\n}\n\n.adeuda-document, .adeuda-signature {\n  background: #fff;\n  border: 1px solid var(--adeuda-line);\n  border-radius: 8px;\n}\n\n.adeuda-document {\n  overflow: hidden;\n}\n\n.document-header {\n  align-items: center;\n  border-bottom: 1px solid var(--adeuda-line);\n  display: flex;\n  gap: 22px;\n  padding: 18px 22px;\n}\n\n.document-logo {\n  height: auto;\n  max-width: 230px;\n  object-fit: contain;\n  width: 30%;\n}\n\n.document-heading {\n  flex: 1;\n  text-align: right;\n}\n\n.document-heading span, .signature-heading span {\n  color: var(--adeuda-blue);\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.document-heading h1 {\n  color: var(--adeuda-ink);\n  font-size: 1.28rem;\n  margin: 3px 0;\n  text-transform: uppercase;\n}\n\n.document-heading p {\n  color: var(--adeuda-muted);\n  font-size: 0.82rem;\n  margin: 0;\n}\n\n.document-summary, .contact-details {\n  background: var(--adeuda-line);\n  border-bottom: 1px solid var(--adeuda-line);\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.document-summary > div, .contact-details > div {\n  background: var(--adeuda-surface);\n  min-width: 0;\n  padding: 10px 12px;\n}\n\n.document-summary span, .contact-details span {\n  color: var(--adeuda-muted);\n  display: block;\n  font-size: 0.64rem;\n  font-weight: 800;\n  margin-bottom: 3px;\n  text-transform: uppercase;\n}\n\n.document-summary strong, .contact-details strong {\n  color: var(--adeuda-ink);\n  display: block;\n  font-size: 0.82rem;\n  overflow-wrap: anywhere;\n}\n\n.document-copy {\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.55;\n  padding: 12px 22px;\n  text-align: justify;\n}\n\n.document-copy p {\n  margin: 0 0 12px;\n}\n\n.review-section {\n  border-bottom: 1px solid var(--adeuda-line);\n  padding: 13px 22px;\n}\n\n.review-heading {\n  margin-bottom: 9px;\n}\n\n.review-heading span, .vehicle-review > span, .commitment-summary span {\n  color: var(--adeuda-blue);\n  display: block;\n  font-size: 0.64rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.review-heading h2 {\n  color: var(--adeuda-ink);\n  font-size: 0.92rem;\n  margin: 2px 0 0;\n}\n\n.review-grid {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  background: var(--adeuda-line);\n  border: 1px solid var(--adeuda-line);\n}\n\n.review-grid-three {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.review-grid > div {\n  background: var(--adeuda-surface);\n  min-width: 0;\n  padding: 8px 10px;\n}\n\n.review-grid span {\n  color: var(--adeuda-muted);\n  display: block;\n  font-size: 0.61rem;\n  font-weight: 800;\n  margin-bottom: 3px;\n  text-transform: uppercase;\n}\n\n.review-grid strong {\n  color: var(--adeuda-ink);\n  display: block;\n  font-size: 0.76rem;\n  overflow-wrap: anywhere;\n}\n\n.vehicle-review-grid, .damage-review-groups {\n  display: grid;\n  gap: 9px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.vehicle-review {\n  background: var(--adeuda-surface);\n  border: 1px solid var(--adeuda-line);\n  border-radius: 6px;\n  padding: 10px;\n}\n\n.vehicle-review strong {\n  color: var(--adeuda-ink);\n  display: block;\n  font-size: 0.8rem;\n  margin: 4px 0;\n}\n\n.vehicle-review p, .vehicle-review small {\n  color: var(--adeuda-muted);\n  display: block;\n  font-size: 0.7rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.commitment-summary {\n  align-items: center;\n  background: #edf5ff;\n  border: 1px solid #c9ddf3;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 9px;\n  padding: 8px 10px;\n}\n\n.commitment-summary strong {\n  color: var(--adeuda-ink);\n  font-size: 0.8rem;\n}\n\n.damage-observation {\n  background: #f7f9fb;\n  border-left: 3px solid var(--adeuda-blue);\n  color: #344c66;\n  font-size: 0.74rem;\n  line-height: 1.4;\n  margin: 0 0 9px;\n  padding: 8px 10px;\n}\n\n.damage-review-groups > div {\n  background: var(--adeuda-surface);\n  border: 1px solid var(--adeuda-line);\n  border-radius: 6px;\n  padding: 9px 10px;\n}\n\n.damage-review-groups h3 {\n  color: var(--adeuda-ink);\n  font-size: 0.76rem;\n  margin: 0 0 6px;\n}\n\n.damage-review-groups ul {\n  color: #344c66;\n  font-size: 0.72rem;\n  line-height: 1.45;\n  margin: 0;\n  padding-left: 18px;\n}\n\n.empty-review {\n  color: var(--adeuda-muted);\n  font-size: 0.7rem;\n  margin: 0;\n}\n\n.contact-details {\n  border-bottom: 0;\n  border-top: 1px solid var(--adeuda-line);\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.adeuda-signature {\n  align-self: end;\n  padding: 14px;\n}\n\n.signature-heading {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.signature-heading h2 {\n  color: var(--adeuda-ink);\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.signature-heading ion-icon {\n  color: var(--adeuda-blue);\n  font-size: 1.8rem;\n}\n\n.signature-preview {\n  align-items: center;\n  background: #fff;\n  border: 2px dashed #b9c9da;\n  border-radius: 6px;\n  display: flex;\n  height: 150px;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n}\n\n.signature-preview img {\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.signature-empty {\n  align-items: center;\n  color: var(--adeuda-muted);\n  display: flex;\n  flex-direction: column;\n  font-size: 0.78rem;\n  gap: 7px;\n  padding: 14px;\n  text-align: center;\n}\n\n.signature-empty ion-icon {\n  color: var(--adeuda-blue);\n  font-size: 1.8rem;\n}\n\n.signature-note {\n  color: var(--adeuda-muted);\n  font-size: 0.76rem;\n  margin: 8px 0 10px;\n}\n\n.signature-actions {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);\n}\n\n.signature-actions ion-button, .return-button {\n  --border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 800;\n  height: 44px;\n  margin: 0;\n}\n\n.adeuda-signature.is-complete {\n  background: #f1fbf5;\n  border-color: #9fd7b2;\n}\n\n.adeuda-signature.is-complete .signature-heading span, .adeuda-signature.is-complete .signature-heading ion-icon {\n  color: #168342;\n}\n\n@media (min-width: 900px) and (orientation: landscape) {\n  .adeuda-layout {\n    grid-template-columns: minmax(0, 1.65fr) minmax(300px, 0.75fr);\n  }\n  .adeuda-signature {\n    position: sticky;\n    top: 14px;\n  }\n}\n@media (max-width: 700px) {\n  ion-toolbar ion-title {\n    font-size: 0.86rem;\n    padding-inline: 48px;\n  }\n  .adeuda-layout {\n    padding: 8px;\n  }\n  .document-header {\n    align-items: flex-start;\n    gap: 10px;\n    padding: 12px;\n  }\n  .document-logo {\n    max-width: 115px;\n    width: 36%;\n  }\n  .document-heading h1 {\n    font-size: 0.92rem;\n  }\n  .document-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .review-section {\n    padding: 11px 12px;\n  }\n  .review-grid, .review-grid-three {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .vehicle-review-grid, .damage-review-groups {\n    grid-template-columns: 1fr;\n  }\n  .contact-details {\n    grid-template-columns: 1fr;\n  }\n  .document-copy {\n    font-size: 0.8rem;\n    line-height: 1.48;\n    padding: 10px 12px;\n  }\n  .signature-actions {\n    grid-template-columns: 1fr;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/adeuda/adeuda.page.scss"],"names":[],"mappings":"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","sourcesContent":[":host { --adeuda-blue: #0764d8; --adeuda-ink: #16375d; --adeuda-muted: #607792; --adeuda-line: #d5e1ed; --adeuda-surface: #f4f7fa; }\nion-toolbar { --background: var(--adeuda-blue); --color: #fff; }\nion-toolbar ion-title { font-size: 1rem; font-weight: 700; letter-spacing: 0; text-align: center; }\nion-back-button { --color: #fff; }\n.adeuda-page { --background: #eef3f7; }\n.adeuda-loading { align-items: center; background: rgba(255,255,255,.78); display: flex; inset: 0; justify-content: center; position: fixed; z-index: 1000; }\n.adeuda-loading ion-spinner { height: 54px; width: 54px; }\n.adeuda-layout { display: grid; gap: 14px; margin: 0 auto; max-width: 1180px; min-height: 100%; padding: 14px; }\n.adeuda-document, .adeuda-signature { background: #fff; border: 1px solid var(--adeuda-line); border-radius: 8px; }\n.adeuda-document { overflow: hidden; }\n.document-header { align-items: center; border-bottom: 1px solid var(--adeuda-line); display: flex; gap: 22px; padding: 18px 22px; }\n.document-logo { height: auto; max-width: 230px; object-fit: contain; width: 30%; }\n.document-heading { flex: 1; text-align: right; }\n.document-heading span, .signature-heading span { color: var(--adeuda-blue); display: block; font-size: .68rem; font-weight: 800; text-transform: uppercase; }\n.document-heading h1 { color: var(--adeuda-ink); font-size: 1.28rem; margin: 3px 0; text-transform: uppercase; }\n.document-heading p { color: var(--adeuda-muted); font-size: .82rem; margin: 0; }\n.document-summary, .contact-details { background: var(--adeuda-line); border-bottom: 1px solid var(--adeuda-line); display: grid; gap: 1px; grid-template-columns: repeat(4, minmax(0, 1fr)); }\n.document-summary > div, .contact-details > div { background: var(--adeuda-surface); min-width: 0; padding: 10px 12px; }\n.document-summary span, .contact-details span { color: var(--adeuda-muted); display: block; font-size: .64rem; font-weight: 800; margin-bottom: 3px; text-transform: uppercase; }\n.document-summary strong, .contact-details strong { color: var(--adeuda-ink); display: block; font-size: .82rem; overflow-wrap: anywhere; }\n.document-copy { color: #1f2937; font-size: .9rem; line-height: 1.55; padding: 12px 22px; text-align: justify; }\n.document-copy p { margin: 0 0 12px; }\n.review-section { border-bottom: 1px solid var(--adeuda-line); padding: 13px 22px; }\n.review-heading { margin-bottom: 9px; }\n.review-heading span, .vehicle-review > span, .commitment-summary span { color: var(--adeuda-blue); display: block; font-size: .64rem; font-weight: 800; text-transform: uppercase; }\n.review-heading h2 { color: var(--adeuda-ink); font-size: .92rem; margin: 2px 0 0; }\n.review-grid { display: grid; gap: 1px; grid-template-columns: repeat(4, minmax(0,1fr)); background: var(--adeuda-line); border: 1px solid var(--adeuda-line); }\n.review-grid-three { grid-template-columns: repeat(3, minmax(0,1fr)); }\n.review-grid > div { background: var(--adeuda-surface); min-width: 0; padding: 8px 10px; }\n.review-grid span { color: var(--adeuda-muted); display: block; font-size: .61rem; font-weight: 800; margin-bottom: 3px; text-transform: uppercase; }\n.review-grid strong { color: var(--adeuda-ink); display: block; font-size: .76rem; overflow-wrap: anywhere; }\n.vehicle-review-grid, .damage-review-groups { display: grid; gap: 9px; grid-template-columns: repeat(2, minmax(0,1fr)); }\n.vehicle-review { background: var(--adeuda-surface); border: 1px solid var(--adeuda-line); border-radius: 6px; padding: 10px; }\n.vehicle-review strong { color: var(--adeuda-ink); display: block; font-size: .8rem; margin: 4px 0; }\n.vehicle-review p, .vehicle-review small { color: var(--adeuda-muted); display: block; font-size: .7rem; line-height: 1.4; margin: 0; }\n.commitment-summary { align-items: center; background: #edf5ff; border: 1px solid #c9ddf3; border-radius: 5px; display: flex; justify-content: space-between; margin-top: 9px; padding: 8px 10px; }\n.commitment-summary strong { color: var(--adeuda-ink); font-size: .8rem; }\n.damage-observation { background: #f7f9fb; border-left: 3px solid var(--adeuda-blue); color: #344c66; font-size: .74rem; line-height: 1.4; margin: 0 0 9px; padding: 8px 10px; }\n.damage-review-groups > div { background: var(--adeuda-surface); border: 1px solid var(--adeuda-line); border-radius: 6px; padding: 9px 10px; }\n.damage-review-groups h3 { color: var(--adeuda-ink); font-size: .76rem; margin: 0 0 6px; }\n.damage-review-groups ul { color: #344c66; font-size: .72rem; line-height: 1.45; margin: 0; padding-left: 18px; }\n.empty-review { color: var(--adeuda-muted); font-size: .7rem; margin: 0; }\n.contact-details { border-bottom: 0; border-top: 1px solid var(--adeuda-line); grid-template-columns: repeat(3, minmax(0, 1fr)); }\n.adeuda-signature { align-self: end; padding: 14px; }\n.signature-heading { align-items: center; display: flex; justify-content: space-between; margin-bottom: 10px; }\n.signature-heading h2 { color: var(--adeuda-ink); font-size: 1rem; margin: 2px 0 0; }\n.signature-heading ion-icon { color: var(--adeuda-blue); font-size: 1.8rem; }\n.signature-preview { align-items: center; background: #fff; border: 2px dashed #b9c9da; border-radius: 6px; display: flex; height: 150px; justify-content: center; overflow: hidden; width: 100%; }\n.signature-preview img { height: 100%; object-fit: contain; width: 100%; }\n.signature-empty { align-items: center; color: var(--adeuda-muted); display: flex; flex-direction: column; font-size: .78rem; gap: 7px; padding: 14px; text-align: center; }\n.signature-empty ion-icon { color: var(--adeuda-blue); font-size: 1.8rem; }\n.signature-note { color: var(--adeuda-muted); font-size: .76rem; margin: 8px 0 10px; }\n.signature-actions { display: grid; gap: 10px; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); }\n.signature-actions ion-button, .return-button { --border-radius: 6px; font-size: .8rem; font-weight: 800; height: 44px; margin: 0; }\n.adeuda-signature.is-complete { background: #f1fbf5; border-color: #9fd7b2; }\n.adeuda-signature.is-complete .signature-heading span, .adeuda-signature.is-complete .signature-heading ion-icon { color: #168342; }\n@media (min-width: 900px) and (orientation: landscape) {\n  .adeuda-layout { grid-template-columns: minmax(0,1.65fr) minmax(300px,.75fr); }\n  .adeuda-signature { position: sticky; top: 14px; }\n}\n@media (max-width: 700px) {\n  ion-toolbar ion-title { font-size: .86rem; padding-inline: 48px; }\n  .adeuda-layout { padding: 8px; }\n  .document-header { align-items: flex-start; gap: 10px; padding: 12px; }\n  .document-logo { max-width: 115px; width: 36%; }\n  .document-heading h1 { font-size: .92rem; }\n  .document-summary { grid-template-columns: repeat(2, minmax(0,1fr)); }\n  .review-section { padding: 11px 12px; }\n  .review-grid, .review-grid-three { grid-template-columns: repeat(2, minmax(0,1fr)); }\n  .vehicle-review-grid, .damage-review-groups { grid-template-columns: 1fr; }\n  .contact-details { grid-template-columns: 1fr; }\n  .document-copy { font-size: .8rem; line-height: 1.48; padding: 10px 12px; }\n  .signature-actions { grid-template-columns: 1fr; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43651:
/*!****************************************************!*\
  !*** ./src/app/adeuda/adeuda.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <div class=\"adeuda-loading\" *ngIf=\"isLoading\"><ion-spinner color=\"primary\" name=\"lines\"></ion-spinner></div>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"><ion-back-button defaultHref=\"/culpable\"></ion-back-button></ion-buttons>\n    <ion-title>Acuerdo de deuda - Atención #{{idAtencion}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"adeuda-page\">\n  <main class=\"adeuda-layout\">\n    <section class=\"adeuda-document\" aria-label=\"Reconocimiento de deuda\">\n      <header class=\"document-header\">\n        <img class=\"document-logo\" alt=\"Ficohsa Seguros\" [src]=\"fsLogo\" />\n        <div class=\"document-heading\">\n          <span>Documento para revisión</span>\n          <h1>Reconocimiento de deuda</h1>\n          <p>Atención No. {{idAtencion}}</p>\n        </div>\n      </header>\n\n      <div class=\"document-summary\">\n        <div><span>Persona responsable</span><strong>{{acuerdoDeuda.NombreDeudor || 'Sin información'}}</strong></div>\n        <div><span>Identidad</span><strong>{{acuerdoDeuda.IdentidadDeudor || 'Sin información'}}</strong></div>\n        <div><span>Póliza externa</span><strong>{{laPoliza || 'Sin información'}}</strong></div>\n        <div><span>Daños registrados</span><strong>{{totalDamages}}</strong></div>\n      </div>\n\n      <section class=\"review-section\">\n        <div class=\"review-heading\"><span>Datos registrados</span><h2>Persona responsable y contacto</h2></div>\n        <div class=\"review-grid\">\n          <div><span>Edad</span><strong>{{acuerdoDeuda.Edad || 'Sin información'}}</strong></div>\n          <div><span>Domicilio</span><strong>{{acuerdoDeuda.Domicilio || 'Sin información'}}</strong></div>\n          <div><span>Teléfono</span><strong>{{acuerdoDeuda.TelefonoCulpable || 'Sin información'}}</strong></div>\n          <div><span>Celular</span><strong>{{acuerdoDeuda.Celular || 'Sin información'}}</strong></div>\n          <div><span>Correo electrónico</span><strong>{{acuerdoDeuda.CorreoElectronico || 'Sin información'}}</strong></div>\n          <div><span>Lugar de trabajo</span><strong>{{acuerdoDeuda.LugarDeTrabajo || 'Sin información'}}</strong></div>\n          <div><span>Contacto</span><strong>{{acuerdoDeuda.NombreContacto || 'Sin información'}}</strong></div>\n          <div><span>Celular del contacto</span><strong>{{acuerdoDeuda.CelularContacto || 'Sin información'}}</strong></div>\n        </div>\n      </section>\n\n      <section class=\"review-section\">\n        <div class=\"review-heading\"><span>Documento de conducción</span><h2>Licencia y vigencia</h2></div>\n        <div class=\"review-grid review-grid-three\">\n          <div><span>Tipo de licencia</span><strong>{{licenseTypeLabel}}</strong></div>\n          <div><span>Número de licencia</span><strong>{{acuerdoDeuda.LicenciaCulpable || 'Sin información'}}</strong></div>\n          <div><span>Fecha de vencimiento</span><strong>{{acuerdoDeuda.FechaVencimientoLicencia | date:'dd/MM/yyyy'}}</strong></div>\n        </div>\n      </section>\n\n      <section class=\"review-section\">\n        <div class=\"review-heading\"><span>Vehículos y propiedad</span><h2>Información incluida en el acuerdo</h2></div>\n        <div class=\"vehicle-review-grid\">\n          <div class=\"vehicle-review\">\n            <span>Vehículo asegurado</span>\n            <strong>{{acuerdoDeuda.Marca}} {{acuerdoDeuda.Modelo}} · {{acuerdoDeuda.Anio}}</strong>\n            <p>Placa {{acuerdoDeuda.Placa || 'sin información'}} · Asegurado: {{acuerdoDeuda.NombreAsegurado || 'sin información'}}</p>\n            <small>Póliza externa: {{laPoliza || 'Sin información'}}</small>\n          </div>\n          <div class=\"vehicle-review\">\n            <span>Vehículo implicado</span>\n            <strong>{{acuerdoDeuda.MarcaImplicado}} {{acuerdoDeuda.ModeloImplicado}} · {{acuerdoDeuda.AnioImplicado}}</strong>\n            <p>Placa {{acuerdoDeuda.PlacaImplicado || 'sin información'}} · Motor {{acuerdoDeuda.MotorImplicado || 'sin información'}} · Chasis {{acuerdoDeuda.ChasisImplicado || 'sin información'}}</p>\n            <small>Propietario: {{acuerdoDeuda.NombrePersonaPropiedadImplicada || 'Sin información'}}</small>\n            <small>Dirección: {{acuerdoDeuda.NombreDireccionPropietarioVehiculoImplicado || 'Sin información'}}</small>\n          </div>\n        </div>\n        <div class=\"commitment-summary\">\n          <span>Compromiso de pago</span><strong>{{commitmentLabel}}</strong>\n        </div>\n      </section>\n\n      <section class=\"review-section damage-review-section\">\n        <div class=\"review-heading\"><span>Daños registrados</span><h2>Detalle para el reconocimiento de deuda</h2></div>\n        <p class=\"damage-observation\"><strong>Observación general:</strong> {{acuerdoDeuda.Observaciones || 'Sin observaciones adicionales.'}}</p>\n        <div class=\"damage-review-groups\">\n          <div>\n            <h3>Daños comunes</h3>\n            <p class=\"empty-review\" *ngIf=\"commonDamages.length === 0\">No se seleccionaron daños comunes.</p>\n            <ul *ngIf=\"commonDamages.length > 0\">\n              <li *ngFor=\"let danio of commonDamages\">{{danio.Descripcion}}</li>\n            </ul>\n          </div>\n          <div>\n            <h3>Daños agregados manualmente</h3>\n            <p class=\"empty-review\" *ngIf=\"manualDamages.length === 0\">No se agregaron daños manuales.</p>\n            <ul *ngIf=\"manualDamages.length > 0\">\n              <li *ngFor=\"let danio of manualDamages\">{{danio.DescripcionDeDanio || danio.Descripcion}}</li>\n            </ul>\n          </div>\n        </div>\n      </section>\n\n      <article class=\"document-copy\">\n        <p>\n          Yo, <strong>{{acuerdoDeuda.NombreDeudor}}</strong>, mayor de edad, con tarjeta de identidad\n          No. {{acuerdoDeuda.IdentidadDeudor}}, con domicilio en {{acuerdoDeuda.Domicilio}}, teléfono\n          {{acuerdoDeuda.TelefonoCulpable}}, celular {{acuerdoDeuda.Celular}}, lugar de trabajo\n          {{acuerdoDeuda.LugarDeTrabajo}} y correo electrónico {{acuerdoDeuda.CorreoElectronico}},\n          declaro lo siguiente:\n        </p>\n\n        <p>\n          <strong>PRIMERO:</strong> Actuando en mi condición de deudor de INTERAMERICANA DE SEGUROS,\n          S.A., también conocida como FICOHSA SEGUROS, reconozco la deuda contraída con esta institución\n          por el accidente ocurrido el {{fechaParrafo}}.\n        </p>\n\n        <p>\n          En dicho accidente resultó perjudicado el vehículo marca {{acuerdoDeuda.Marca}}, modelo\n          {{acuerdoDeuda.Modelo}}, año {{acuerdoDeuda.Anio}}, placa {{acuerdoDeuda.Placa}}, propiedad del\n          asegurado {{acuerdoDeuda.NombreAsegurado}} y amparado por la póliza No. {{laPoliza}}. Los daños\n          fueron ocasionados por el vehículo marca {{acuerdoDeuda.MarcaImplicado}}, modelo\n          {{acuerdoDeuda.ModeloImplicado}}, año {{acuerdoDeuda.AnioImplicado}}, placa\n          {{acuerdoDeuda.PlacaImplicado}}, propiedad de {{acuerdoDeuda.NombrePersonaPropiedadImplicada}}.\n        </p>\n\n        <p>\n          <strong>SEGUNDO:</strong> Del accidente resultaron los siguientes daños:\n          {{acuerdoDeuda.DanioCausadoObservacion}}.\n          <span *ngFor=\"let danio of commonDamages; let i = index\">\n            {{danio.Descripcion}}<span *ngIf=\"i < commonDamages.length - 1\">, </span><span *ngIf=\"i === commonDamages.length - 1\">. </span>\n          </span>\n          <span *ngFor=\"let danio of manualDamages; let i = index\">\n            {{danio.DescripcionDeDanio || danio.Descripcion}}<span *ngIf=\"i < manualDamages.length - 1\">, </span><span *ngIf=\"i === manualDamages.length - 1\">. </span>\n          </span>\n          Quedan comprendidos los daños mecánicos que aún no hayan sido constatados, siempre que sean\n          producto de la colisión causada por mi persona.\n        </p>\n\n        <p>\n          <strong>TERCERO:</strong> Acepto que la factura de reparación de los daños mencionados en la\n          cláusula segunda formará parte integral del presente reconocimiento de deuda.\n        </p>\n\n        <p>En fe de lo cual firmo en la ciudad de {{acuerdoDeuda.Ciudad || 'Tegucigalpa'}}, a los {{fechaPie}}.</p>\n      </article>\n\n      <div class=\"contact-details\">\n        <div><span>Ciudad de firma</span><strong>{{acuerdoDeuda.Ciudad || 'Tegucigalpa'}}</strong></div>\n        <div><span>Compromiso de pago</span><strong>{{commitmentLabel}}</strong></div>\n        <div><span>Propietario implicado</span><strong>{{acuerdoDeuda.NombrePersonaPropiedadImplicada || 'Sin información'}}</strong></div>\n      </div>\n    </section>\n\n    <section class=\"adeuda-signature\" [class.is-complete]=\"adeudaCompleta\">\n      <div class=\"signature-heading\">\n        <div>\n          <span>{{adeudaCompleta ? 'Envío completado' : 'Firma de la persona responsable'}}</span>\n          <h2>{{adeudaCompleta ? 'Acuerdo enviado correctamente' : (debtorSignature ? 'Firma registrada' : 'Firma pendiente')}}</h2>\n        </div>\n        <ion-icon [name]=\"adeudaCompleta ? 'checkmark-circle' : 'create-outline'\"></ion-icon>\n      </div>\n\n      <div class=\"signature-preview\" *ngIf=\"!adeudaCompleta\">\n        <img *ngIf=\"debtorSignature\" [src]=\"debtorSignature\" alt=\"Firma del deudor\" />\n        <div *ngIf=\"!debtorSignature\" class=\"signature-empty\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n          <span>Aún no se ha registrado la firma de la persona responsable.</span>\n        </div>\n      </div>\n\n      <p class=\"signature-note\" *ngIf=\"!adeudaCompleta\">\n        La firma se captura en una pantalla independiente para mantener el área completamente libre.\n      </p>\n\n      <div class=\"signature-actions\" *ngIf=\"!adeudaCompleta\">\n        <ion-button fill=\"outline\" (click)=\"goDebtorSignature()\">\n          <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n          {{debtorSignature ? 'Editar firma' : 'Firmar'}}\n        </ion-button>\n        <ion-button (click)=\"confirmarEnvio()\" [disabled]=\"isLoading || !debtorSignature\">\n          <ion-icon slot=\"start\" name=\"send-outline\"></ion-icon>\n          Enviar acuerdo\n        </ion-button>\n      </div>\n\n      <ion-button class=\"return-button\" expand=\"block\" *ngIf=\"adeudaCompleta\" (click)=\"goExpediente()\">\n        <ion-icon slot=\"start\" name=\"folder-open-outline\"></ion-icon>\n        Regresar al expediente\n      </ion-button>\n    </section>\n  </main>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adeuda_adeuda_module_ts.js.map