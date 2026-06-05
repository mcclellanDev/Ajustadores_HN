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
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _adeuda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adeuda.page.html?ngResource */ 43651);
/* harmony import */ var _adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adeuda.page.scss?ngResource */ 17468);
/* harmony import */ var _adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adeuda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/signatures */ 88538);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var _environments_calendario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/calendario */ 94153);
/* harmony import */ var _interfaces_extras__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../interfaces/extras */ 33105);














let AdeudaPage = class AdeudaPage {
  // datos a arreglar
  // poliza, agregar del cliente
  // fecha formato
  // 
  constructor(platform, api, toaster, toast) {
    this.platform = platform;
    this.api = api;
    this.toaster = toaster;
    this.toast = toast;
    this.meses = _environments_calendario__WEBPACK_IMPORTED_MODULE_8__.meses;
    this.firmaDemoAjustador = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.firmaDemoAjustador;
    this.emptySignature = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature;
    this.emptySignatureWhite = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite;
    this.anySignature = _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.anySignature;
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
    this.deudaSent = localStorage.getItem('deudaSent'); //=== 'true';
    this.getDanios();
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
    this.laPoliza = localStorage.getItem('datos-Poliza');
    this.telFijo = localStorage.getItem('telFijo');
    this.acuerdoDeuda = JSON.parse(localStorage.getItem('deuda'));
    this.daniosSelectCulpable = JSON.parse(localStorage.getItem('daniosSelectCulpa'));
    console.log('Los danios seleccionados');
    console.dir(this.daniosSelectCulpable);
    this.isSigned = localStorage.getItem('adeudaCompleta');
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
    let daDate = localStorage.getItem('FechaRegistro');
    this.dia = daDate.split('T')[0].substring(8, 10);
    this.mes = daDate.split('T')[0].substring(5, 7);
    this.anio = daDate.split('T')[0].substring(0, 4);
    this.fechaParrafo = this.dia + ' de ' + this.meses[this.mes - 1].mes + ' de ' + this.anio;
    this.fechaPie = this.diaPie + ' días' + ' del mes de ' + this.meses[this.mesPie].mes + ' de ' + this.anioPie;
    console.log(this.diaPie + ' días' + ' del mes de ' + this.meses[this.mesPie].mes + ' de ' + this.anioPie, 'fecha siniestro');
    this.fsLogo = _environments_default_images__WEBPACK_IMPORTED_MODULE_4__.logoFicohsa;
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width() - 90;
    } else {
      this.deviceWidth = this.platform.width() - 100;
    }
  }
  getDanios() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.daniosSelectAju = [];
      let losDanios;
      losDanios = localStorage.getItem('daniosSelectAju');
      _this.daniosSelectAju = JSON.parse(losDanios);
      console.log('Danios desde localstorage');
      console.dir(_this.daniosSelectAju);
      _this.isLoading = true;
      _this.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
        var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  ngOnInit() {
    this.sig5 = new signature_pad__WEBPACK_IMPORTED_MODULE_7__["default"](this.canvas5.nativeElement);
    this.sig5.fromDataURL(_environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignatureWhite);
    setTimeout(() => {
      this.sig5.clear();
      this.guardarConvenioReparacionTest();
    }, 1000);
    this.sig5.backgroundColor = "rgb(255, 255, 255)";
    this.sig5.minWidth = 1;
    this.sig5.maxWidth = 1.5;
    this.sig5.dotSize = 3;
    //this.sig5.penColor = "rgb(66, 133, 244)";
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      this.atencionId = parseInt(this.idAtencion);
      //alert(parseInt(this.idAtencion)+1)
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  clear() {
    this.sig5.clear();
  }
  testSave() {
    this.isLoading = true;
    this.isEmptySignature = this.sig5.isEmpty();
    console.log(this.sig5.isEmpty());
    if (this.sig5.isEmpty()) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar el acuerdo.", "top", "firma");
      this.isLoading = false;
    } else {
      this.sig5.backgroundColor = "rgb(255, 255, 255)";
      this.sig5.minWidth = 1;
      this.sig5.maxWidth = 1.5;
      this.sig5.dotSize = 3;
      const mySignature = this.sig5.toDataURL("image/jpeg");
      console.log(mySignature);
      //const mySignature =this.sig5.toDataURL("image/jpeg");
      this.acuerdoDeuda.FirmaDeudor = mySignature.split(',')[1];
      console.dir(this.acuerdoDeuda);
      setTimeout(() => {
        this.guardarDeuda();
      }, 1800);
    }
  }
  guardarDeuda() {
    var _this2 = this;
    this.isLoading = true;
    console.dir(this.acuerdoDeuda);
    this.api.insertarReconocimientoDeuda(this.acuerdoDeuda).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fin adeuda');
      //await load.dismiss();
    }))).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Esto viene de la deuda');
        console.dir(res);
        _this2.isLoading = false;
        localStorage.setItem('AcuerdoDeDeuda-' + _this2.idAtencion, 'true');
        if (_this2.daniosSelectCulpable.length > 0) {
          for (let index = 0; index < _this2.daniosSelectCulpable.length; index++) {
            const element = _this2.daniosSelectCulpable[index];
            let elTipoReparacion = localStorage.getItem('TipoReparacionCulpa-' + element.Codigo);
            let reparaArray = {
              codigoDanio: element.Codigo,
              descripcionDanio: element.Descripcion,
              fotografia: _environments_signatures__WEBPACK_IMPORTED_MODULE_3__.emptySignature.split(',')[1],
              idAtencion: _this2.idAtencion,
              refTipofotoId: element.Id,
              TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_9__.Entidades[1].tipoEntidad,
              TipoReparacion: elTipoReparacion
            };
            console.log('Esta es la data desde ajustador');
            console.dir(reparaArray);
            _this2.api.insertarConvenioReparacion(reparaArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              _this2.isLoading = false;
            }))).subscribe( /*#__PURE__*/function () {
              var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                console.log(res);
                console.log("Convenio guardado");
                if (index == _this2.daniosSelectCulpable.length - 1) {
                  _this2.api.EnviarNotificacionEmail(_this2.idAtencion);
                }
              });
              return function (_x4) {
                return _ref8.apply(this, arguments);
              };
            }(), /*#__PURE__*/function () {
              var _ref9 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                _this2.toaster.presentToast(res.error.Message, 'top', 'taller');
              });
              return function (_x5) {
                return _ref9.apply(this, arguments);
              };
            }());
            if (index == _this2.daniosSelectCulpable.length - 1) {
              _this2.ya = true;
              _this2.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
              _this2.adeudaCompleta = true;
              localStorage.setItem('adeudaCompleta', _this2.adeudaCompleta.toString());
            }
          }
        } else {
          _this2.ya = true;
          _this2.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
          _this2.adeudaCompleta = true;
          localStorage.setItem('adeudaCompleta', _this2.adeudaCompleta.toString());
        }
        localStorage.setItem('deudaSent', 'true-' + _this2.atencionId);
      });
      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }());
    /**/
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
          TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_9__.Entidades[1].tipoEntidad,
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
            TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_9__.Entidades[1].tipoEntidad,
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
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
    }];
  }
  static {
    this.propDecorators = {
      canvas5: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["canvas5", {
          static: true
        }]
      }]
    };
  }
};
AdeudaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
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
___CSS_LOADER_EXPORT___.push([module.id, "strong {\n  font-weight: bolder;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n.impresora {\n  font-size: 2rem;\n  color: #f14f23;\n  position: absolute;\n  right: 1%;\n  top: 15%;\n}", "",{"version":3,"sources":["webpack://./src/app/adeuda/adeuda.page.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;;AAEA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAJ;;AAGA;EACI,eAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;AAAJ","sourcesContent":["strong{\r\n    font-weight: bolder;\r\n}\r\n\r\nion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\n.impresora {\r\n    font-size: 2rem;\r\n    color: #f14f23;\r\n    position: absolute;\r\n    right: 1%;\r\n    top: 15%;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43651:
/*!****************************************************!*\
  !*** ./src/app/adeuda/adeuda.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  <!--ion-fab id=\"button-back\" style=\"position: fixed;\" vertical=\"top\" horizontal=\"start\" (click)=\"goBack()\">\r\n    <ion-fab-button (click)=\"'confirmar()'\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </!--ion-fab -->\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">Acuerdo de Deuda - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <!--ion-col size=\"6\">Formulario Declaración - Atención # {{idAtencion}}</!--ion-col -->\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!--div *ngIf=\"isTablet == true\" style=\"margin-left: 40%;\">Formulario Declaración</!--div>\r\n      <div *ngIf=\"isTablet == false\" style=\"margin-left: 1%;\">Formulario Declaración</div -->\r\n    </ion-title>\r\n    <!--ion-label style=\"position: absolute; top:-10px;left:88.5%;color:blue;z-index: 999;\"><br>Atención # {{idAtencion}}</!--ion-label -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n  </ion-label>\r\n  <ion-grid style=\"margin-top: -40px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card style=\"margin: 0;padding:0;\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <img alt=\"Ficohsa Seguros\" src=\"{{fsLogo}}\" style=\"width: 281px; height: 61px; margin-left: 15px; margin-top: 15px;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <!--ion-icon class=\"impresora\" name=\"eye\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\" style=\"margin-right: 25%;\"></!--ion-icon>\r\n                <ion-icon class=\"impresora\" name=\"print\" (click)=\"this.modalPdf.present()\" id=\"open-modal-pdf\"></ion-icon -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          \r\n          <ion-card-header>\r\n            <ion-card-title>Reconocimiento de Deuda</ion-card-title>\r\n            <ion-card-subtitle style=\"text-align: justify;\">Yo {{acuerdoDeuda.NombreDeudor}}, mayor de edad, con tarjeta de identidad No {{acuerdoDeuda.IdentidadDeudor}}, con \r\n              domicilio en {{acuerdoDeuda.Domicilio}} No de teléfono {{acuerdoDeuda.TelefonoCulpable}}, celular No {{acuerdoDeuda.Celular}}, \r\n              trabajo en {{acuerdoDeuda.LugarDeTrabajo}}, correo electrónico <a>{{acuerdoDeuda.CorreoElectronico}}</a>, nombre de contacto (familiar o amigo)\r\n              {{acuerdoDeuda.NombreContacto}}, celular No {{acuerdoDeuda.CelularContacto}}\r\n\r\n              Declaro: <strong style=\"font-weight: bold;\">PRIMERO</strong>: Actuando en mi condición de deudor de INTERAMERICANA DE SEGUROS S.A., también conocida como FICOHSA SEGUROS,\r\n              por deuda contraída con esta institución, en el accidente de fecha {{fechaParrafo}}, en el cual resultó perjudicado \r\n              el vehículo marca {{acuerdoDeuda.Marca}} modelo {{acuerdoDeuda.Modelo}}, año {{acuerdoDeuda.Anio}}, placa {{acuerdoDeuda.Placa}} del asegurado {{acuerdoDeuda.NombreAsegurado}}, con poliza No {{laPoliza}}, \r\n              cuyos daños fueron ocasionados por el vehículo: marca {{acuerdoDeuda.MarcaImplicado}}, modelo {{acuerdoDeuda.ModeloImplicado}}, año {{acuerdoDeuda.AnioImplicado}}, placa {{acuerdoDeuda.PlacaImplicado}}, propiedad de {{acuerdoDeuda.NombrePersonaPropiedadImplicada}}.\r\n\r\n              <strong style=\"font-weight: bold;\">SEGUNDO</strong>: De dicho accidente resultaron los siguientes daños: \r\n              {{acuerdoDeuda.DanioCausadoObservacion}}, <span *ngFor=\"let danio of daniosSelectAju; let i = index\">{{danio.Descripcion}}<ion-text *ngIf=\"i<(daniosSelectAju.length-1)\">, </ion-text><ion-text *ngIf=\"i==(daniosSelectAju.length-1)\">. </ion-text> </span>\r\n\r\n              Acepto que quedan comprendidos en este acto, los daños mecánicos que aun no han sido constatados siempre y cuando estos sean\r\n              producto de la colisión causada por mi persona.\r\n\r\n              <strong style=\"font-weight: bold;\">TERCERO</strong>: Acepto que la factura de reparación de los daños mencionados en la cláusula SEGUNDA, formará para integrar el presente\r\n              Reconocimiento de Deuda.\r\n            </ion-card-subtitle>\r\n          </ion-card-header>\r\n        \r\n          <ion-card-content>\r\n            En fé de lo cual firmo en la ciudad de Tegucigalpa a los {{fechaPie}}.\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <!--ion-col size=\"12\" style=\"color: #3171e0;\">\r\n        <ion-label style=\"margin-left: 19px;\">Firma Implicado</ion-label>\r\n      </!--ion-col -->\r\n      <ion-col size=\"12\" style=\"margin-top: -10px;\">\r\n        <ion-card id=\"cardAsegurado\">\r\n          <ion-card-content>\r\n            <!--ion-img *ngIf=\"isSign == true\" src=\"{{firmaPrecargada}}\"/ -->\r\n            <canvas id=\"canvasAdeudado\" width=\"{{deviceWidth}}\" [height]=\"200\"  #canvas5 style=\"border: 6px dashed #ede9e9\"></canvas>\r\n            <!--canvas id=\"canvasAsegurado\" [width]=\"500\" [height]=\"150\"  #canvas2 style=\"border: 6px dashed #ede9e9\"></!--canvas -->\r\n          </ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-button expand=\"block\" (click)=\"clear()\">Limpiar Firma</ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-button *ngIf=\"ya == false\" expand=\"block\" (click)=\"testSave()\">Enviar</ion-button>\r\n                <ion-button *ngIf=\"ya == true\" expand=\"block\" disabled>Enviar</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-modal #modalPdf #modal trigger=\"open-modal-pdf\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Decargar PDFs</ion-toolbar>\r\n      <ion-list>\r\n        <ion-item (click)=\"printPdf()\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"wallet-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Acuerdo de Deuda</h2>\r\n            <p>Compromiso de deuda</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n        <!--ion-item id=\"step1\" (click)=\"printPdf(2)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"shield-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-label>\r\n                  <h2>Cierre de Cobertura</h2>\r\n                  <p>Cobertura de Seguro</p>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </!--ion-item>\r\n        <ion-item id=\"step2\" (click)=\"printPdf(3)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"document-attach-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Reclamo de Cliente</h2>\r\n            <p>Reclamo de Cobertura</p>\r\n          </ion-label>\r\n        </ion-item -->\r\n\r\n        <ion-item>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal #modalPdfPre trigger=\"open-modal-pdf-pre\" [initialBreakpoint]=\"0.5\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Decargar PDFs</ion-toolbar>\r\n      <ion-list>\r\n        <ion-item (click)=\"previewPdf()\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"wallet-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Acuerdo de Deuda</h2>\r\n            <p>Compromiso de deuda</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        \r\n        <!--ion-item id=\"step1\" (click)=\"printPdf(2)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"shield-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-label>\r\n                  <h2>Cierre de Cobertura</h2>\r\n                  <p>Cobertura de Seguro</p>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </!--ion-item>\r\n        <ion-item id=\"step2\" (click)=\"printPdf(3)\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 2.8rem;\" name=\"document-attach-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Reclamo de Cliente</h2>\r\n            <p>Reclamo de Cobertura</p>\r\n          </ion-label>\r\n        </ion-item -->\r\n\r\n        <ion-item>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adeuda_adeuda_module_ts.js.map