(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_culpable_culpable_module_ts"],{

/***/ 76049:
/*!*****************************************************!*\
  !*** ./src/app/culpable/culpable-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CulpablePageRoutingModule": () => (/* binding */ CulpablePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _culpable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./culpable.page */ 24951);




const routes = [{
  path: '',
  component: _culpable_page__WEBPACK_IMPORTED_MODULE_0__.CulpablePage
}];
let CulpablePageRoutingModule = class CulpablePageRoutingModule {};
CulpablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CulpablePageRoutingModule);


/***/ }),

/***/ 4220:
/*!*********************************************!*\
  !*** ./src/app/culpable/culpable.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CulpablePageModule": () => (/* binding */ CulpablePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _maskito_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @maskito/angular */ 11750);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _culpable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./culpable-routing.module */ 76049);
/* harmony import */ var _culpable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./culpable.page */ 24951);








let CulpablePageModule = class CulpablePageModule {};
CulpablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _culpable_routing_module__WEBPACK_IMPORTED_MODULE_0__.CulpablePageRoutingModule, _maskito_angular__WEBPACK_IMPORTED_MODULE_7__.MaskitoModule],
  declarations: [_culpable_page__WEBPACK_IMPORTED_MODULE_1__.CulpablePage]
})], CulpablePageModule);


/***/ }),

/***/ 24951:
/*!*******************************************!*\
  !*** ./src/app/culpable/culpable.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CulpablePage": () => (/* binding */ CulpablePage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _culpable_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./culpable.page.html?ngResource */ 57707);
/* harmony import */ var _culpable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./culpable.page.scss?ngResource */ 64418);
/* harmony import */ var _culpable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_culpable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_vehicles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/vehicles */ 73586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interfaces/extras */ 33105);













let CulpablePage = class CulpablePage {
  constructor(loading, api, router, route, toaster, toast, navegador) {
    var _this = this;
    this.loading = loading;
    this.api = api;
    this.router = router;
    this.route = route;
    this.toaster = toaster;
    this.toast = toast;
    this.navegador = navegador;
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
    this.culpable = {};
    this.modelosMarca = [];
    this.elExpediente = [];
    this.reconocimientoDeuda = [];
    this.tipoLicencia = [];
    this.dataSiniestro = [];
    this.deuda = [];
    this.isLoading = false;
    this.marcasVehiculos = _environments_vehicles__WEBPACK_IMPORTED_MODULE_4__.marcasVehiculos;
    this.isVisible = false;
    this.marcasVehiculosFicohsa = [];
    this.nulos = [];
    this.isDataMissing = true;
    this.colorVigente = true;
    this.esCompromiso = false;
    this.danios = [];
    this.resultsCulpable = [];
    this.daniosOtros = [];
    this.daniosSelectCulpa = [];
    this.selectedIndex = [];
    this.danioResults = [];
    this.isXXOpen = false;
    this.daniosSelectOtroCulpa = [];
    this.daniosExtrasCulpa = [];
    this.licenseSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Tipo de licencia',
      subHeader: 'Selecciona una opción'
    };
    this.brandSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Marca del vehículo',
      subHeader: 'Selecciona una opción'
    };
    this.modelSelectOptions = {
      cssClass: 'form-choice-alert',
      header: 'Modelo del vehículo',
      subHeader: 'Selecciona una opción'
    };
    this.telFijo = localStorage.getItem('telFijo');
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.deudaSent = localStorage.getItem('deudaSent'); //=== 'true';
    console.log('Aqui el dato de la deuda');
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
    this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res.length > 0) {
          _this.dataSiniestro = res;
          console.log("Mis datos de atencion");
          console.dir(_this.dataSiniestro);
        } else {
          //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
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
    this.poliza = localStorage.getItem('poliza');
    this.fechaFirma = localStorage.getItem('fechaFirma');
    this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res.length > 0) {
          _this.elExpediente = res;
          console.log("Mis datos de atencion");
          console.dir(_this.dataSiniestro);
        } else {
          //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
        }
      });
      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref7 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }());
    this.getDanios();
    //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
    /*
        if (this.fechaFirma == undefined || this.fechaFirma == "undefined" || this.fechaFirma == null) {
          this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
        }else{
        }
        */
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.resultsCulpable = this.danioSearchable.filter(d => d.Descripcion.toLowerCase().indexOf(query) > -1);
  }
  openDanioSearch() {
    this.listarDanios();
    this.resultsCulpable = this.danioSearchable || this.danios;
    this.isSearchCulpable = true;
  }
  isDanioSelected(danioId) {
    return this.daniosSelectCulpa.some(danio => Number(danio.Id) === Number(danioId));
  }
  persistSelectedDamages() {
    const keysToRemove = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key?.startsWith('daniosSelectCulpa-')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
    this.daniosSelectCulpa.forEach(danio => {
      localStorage.setItem(`daniosSelectCulpa-${danio.Id}`, danio.Id.toString());
    });
    localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));
    this.contador = this.daniosSelectCulpa.length;
  }
  setReparacion(dannioId, tipo, i, origen) {
    localStorage.setItem('TipoReparacionCulpa-' + dannioId, tipo);
    localStorage.setItem('TipoReparacionCulpaIndex-' + dannioId, i);
    if (origen === 1) {
      if (tipo === 1) {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-culpable').eq(i).attr("style", "background:#7da1c4;border-radius:10px; width: 100%");
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-culpable').eq(i).attr("style", "background:transparent;color:#7da1c4; width: 100%");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-culpable').eq(i).attr("style", "background:transparent; color:#0058CB; width: 100%");
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-culpable').eq(i).attr("style", "background:#0058CB;border-radius:10px; width: 100%");
      }
    }
  }
  clearStorageDanios() {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectCulpa') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
  ngOnInit() {
    var _this2 = this;
    //this.isLoading = true;
    this.route.queryParams.subscribe(params => {
      this.pageSource = params.pageSource;
    });
    console.log('Caches en storage :');
    setTimeout(() => {
      this.listarDanios();
      this.listarDaniosExtras();
    }, 1000);
    setTimeout(() => {
      this.obtenerCache();
    }, 2000);
    this.getTipoLicencia(3);
    this.api.ListMarcasVehiculosFicohsa().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
    }))).subscribe(res => {
      console.log(res, 'respuesta marcas');
      this.marcasVehiculosFicohsa = res;
      let conteo = 10;
      for (let indexM = 0; indexM < this.marcasVehiculosFicohsa.length; indexM++) {
        const elementM = this.marcasVehiculosFicohsa[indexM];
        this.marcasVehiculos.push({
          "id": conteo,
          "nombre": elementM.DESCRIPCION,
          "modelos": []
        });
        conteo += 1;
      }
    });
    /**/
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.isLoading = false;
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
  }
  getDanios() {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = true;
      _this3.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref11 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.danios = res;
          _this3.danioSearchable = res;
          _this3.resultsCulpable = res;
          _this3.daniosIndex = _this3.danios.length;
          _this3.listarDanios();
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref12 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x7) {
          return _ref12.apply(this, arguments);
        };
      }());
      _this3.api.ObtenerDaniosExtras(_this3.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__.Entidades[1].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref14 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          //alert('Aca bien')
          _this3.daniosExtrasCulpa = res;
        });
        return function (_x8) {
          return _ref14.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref15 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          //alert('Aca mal')
          console.log('Acá mal : ' + error[0].Message);
        });
        return function (_x9) {
          return _ref15.apply(this, arguments);
        };
      }());
    })();
  }
  entraDanioCulpable(danioId, posicion) {
    const damage = this.danios.find(item => Number(item.Id) === Number(danioId));
    if (!damage) {
      return;
    }
    if (this.isDanioSelected(danioId)) {
      this.eliminaDanio(danioId, posicion, damage.Descripcion);
      return;
    }
    this.daniosSelectCulpa = [...this.daniosSelectCulpa, damage];
    this.persistSelectedDamages();
  }
  eliminaDanioX(danioInputId, index, tipo, codigo) {
    var _this4 = this;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectOtroCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if (idE == codigo) {
          localStorage.removeItem(localStorage.key(i));
          for (let indexDan = 0; indexDan < this.daniosSelectOtroCulpa.length; indexDan++) {
            const elementOtr = this.daniosSelectOtroCulpa[indexDan];
            if (indexDan > index) {
              let indexNew = indexDan - 1;
              console.log('indexDan ' + indexDan + ', indexNew' + indexNew);
              this.api.ActualizarIndexFront(elementOtr.Id, indexNew).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this4.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref17 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  console.dir(res);
                });
                return function (_x10) {
                  return _ref17.apply(this, arguments);
                };
              }());
            }
            if (indexDan == this.daniosSelectOtroCulpa.length - 1) {
              this.api.EliminaDanioExtra(danioInputId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this4.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref19 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  console.dir(res);
                  localStorage.removeItem('danioOtroCulpa-' + codigo);
                  localStorage.removeItem('TipoReparacionX-' + danioInputId);
                  localStorage.removeItem('TipoReparacionIndexX-' + danioInputId);
                  setTimeout(() => {
                    _this4.recargarDaniosExtras();
                  }, 1200);
                });
                return function (_x11) {
                  return _ref19.apply(this, arguments);
                };
              }());
            }
          }
        }
      }
    }
  }
  setReparacionX(dannioId, tipo, i, origen) {
    var _this5 = this;
    // alert(dannioId+', '+tipo+', '+i+', '+origen);
    localStorage.setItem('TipoReparacionX-' + dannioId, tipo);
    localStorage.setItem('TipoReparacionIndexX-' + dannioId, i);
    this.api.ActualizarTipoReparacion(dannioId, tipo, i).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref21 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Actualizado ' + res);
        _this5.recargarDaniosExtras();
      });
      return function (_x12) {
        return _ref21.apply(this, arguments);
      };
    }());
    /*
    if (origen === 1) {
      if (tipo === 1) {
        $('.action-repair-x').eq(i).attr("style","background:#7da1c4;border-radius:10px;width:100%");
        $('.action-change-x').eq(i).attr("style","background:transparent;color:#7da1c4;width:100%");
      }else{
        $('.action-repair-x').eq(i).attr("style","background:transparent; color:#0058CB;width:100%");
        $('.action-change-x').eq(i).attr("style","background:#0058CB;border-radius:10px;width:100%");
      }
    }
    */
  }

  eliminaDanio(danioInputId, index, descripcion) {
    this.daniosSelectCulpa = this.daniosSelectCulpa.filter(danio => Number(danio.Id) !== Number(danioInputId));
    localStorage.removeItem('TipoReparacionCulpa-' + danioInputId);
    localStorage.removeItem('TipoReparacionCulpaIndex-' + danioInputId);
    this.daniosSelectCulpa.forEach((danio, selectedIndex) => {
      localStorage.setItem(`TipoReparacionCulpaIndex-${danio.Id}`, selectedIndex.toString());
    });
    this.persistSelectedDamages();
    /*
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == danioInputId){
          localStorage.removeItem(localStorage.key(i));
        }
      }
           if (localStorage.key(i).indexOf('danioOtroCulpa-') == 0) {
        let storageObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (storageObject.Id == danioInputId) {
          console.log('tengo algo de extra, '+localStorage.key(i)+', '+localStorage.getItem(localStorage.key(i)));
          localStorage.removeItem('danioOtroCulpa-'+danioInputId);
        }
        
      }
           if (i == (localStorage.length-1)) {
        //this.listarDanios();
        console.log('seleccionados')
        console.dir(this.daniosSelectCulpa)
        for (let index = 0; index < this.daniosSelectCulpa.length; index++) {
          const element = this.daniosSelectCulpa[index];
          console.log(element.Id+', '+danioInputId);
          
          //alert(index === (this.daniosSelectCulpa.length-1));
          //if (index === (this.daniosSelectCulpa.length-1)) {
          for (let indexStore = 0; indexStore < localStorage.length; indexStore++) {
            if (localStorage.key(indexStore).indexOf('TipoReparacionCulpaIndex-') == 0) {
              if (indexStore == 0) {
                
              }
              //alert(localStorage.getItem(localStorage.key(indexStore)));
            }
          }
          //}
               if (element.Id === danioInputId) {
            this.daniosSelectCulpa.splice(index,1);
            localStorage.removeItem('TipoReparacionCulpa-'+danioInputId);
            localStorage.removeItem('TipoReparacionCulpaIndex-'+danioInputId);
          }
               //alert(index === (this.daniosSelectCulpa.length-1));
          
             }
      }
    }
    */
  }

  elminaDanioMarcado(i) {
    /*
    this.daniosSelectCulpa.splice(i,1);
    this.selectedIndex.splice(i,1);
    */
  }
  toastDanio(selectedDanio, selectedId, index) {
    console.dir(this.daniosSelectCulpa);
    console.log(selectedId + ', ' + selectedDanio + ', ' + index);
    this.danioMessage = selectedDanio;
    this.danioPosition = 'middle', this.danioClass = 'danio-select';
    this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, selectedId, index);
  }
  presentToastDanio(message, position, clase, selectId, index) {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.idSelect = selectId;
      const toast = yield _this6.toast.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'ELIMINAR',
          role: 'confirm',
          handler() {
            this.daniosSelectCulpa.splice(index, 1);
            this.selectedIndex.splice(index, 1);
            for (var i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).indexOf('daniosSelectCulpa') == 0) {
                let idEliminate = localStorage.getItem(localStorage.key(i));
                let idE = parseInt(idEliminate);
                if (idE + 1 == selectId) {
                  //alert((idE+1)+', Id : '+selectId)
                  localStorage.removeItem(localStorage.key(i));
                  jquery__WEBPACK_IMPORTED_MODULE_6__('#open-modal-recycle').click();
                }
              }
              if (i == localStorage.length - 1) {
                setTimeout(() => {
                  jquery__WEBPACK_IMPORTED_MODULE_6__('#reloadDaniosButton').click();
                }, 4000);
              }
            }
            setTimeout(() => {
              jquery__WEBPACK_IMPORTED_MODULE_6__('#closeRecycleButton').click();
            }, 6000);
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
  entraDanioOtro(danio) {
    var _this7 = this;
    let indexFront = this.daniosSelectOtroCulpa.length;
    this.api.ContarOtrosDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref23 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Conteo de Otros : ' + res[0].Mensaje);
        let othersCount = parseInt(res[0].Mensaje);
        _this7.daniosIndex = othersCount + 1;
        if (danio) {
          let elementOtro = {
            "RefAtencionId": _this7.idAtencion,
            "DescripcionDeDanio": danio.toUpperCase(),
            "FechaRegistro": new Date().toISOString(),
            "UsuarioId": _this7.api.currentUser.ProveedorAgenteId,
            "TipoEntidad": _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__.Entidades[1].tipoEntidad,
            "TipoReparacion": 0,
            "CodigoDanioVehiculo": _this7.daniosIndex,
            "indexFront": indexFront
          };
          console.dir(elementOtro);
          _this7.api.InsertarConvenioReparacionTallerExtra(elementOtro).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this7.isLoading = false;
          }))).subscribe( /*#__PURE__*/function () {
            var _ref25 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              _this7.daniosSelectOtroCulpa.push(elementOtro);
              localStorage.setItem('selectedIndex-xx', JSON.stringify(_this7.daniosIndex));
              localStorage.setItem('daniosSelectOtroCulpa-' + (_this7.daniosIndex - 1), _this7.daniosIndex);
              localStorage.setItem('danioOtroCulpa-' + _this7.daniosIndex, JSON.stringify(elementOtro));
              setTimeout(() => {
                _this7.recargarDaniosExtras();
              }, 300);
            });
            return function (_x14) {
              return _ref25.apply(this, arguments);
            };
          }());
        }
      });
      return function (_x13) {
        return _ref23.apply(this, arguments);
      };
    }());
  }
  listarDanios() {
    const selectedIds = new Set();
    const storedSelection = JSON.parse(localStorage.getItem('daniosSelectCulpa') || '[]') || [];
    storedSelection.forEach(danio => selectedIds.add(Number(danio.Id)));
    let contenedor = document.getElementsByClassName('input-index');
    let contenedorDescripcion = document.getElementsByClassName('danio-descripcion-input');
    let kikiriki = jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-descripcion-input').eq(0).val();
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        let daCode = parseInt(elCodigo); //.split('-')[1];
        selectedIds.add(daCode);
        console.log('elCodigo ' + daCode);
        for (let indexDan = 0; indexDan < this.danios.length; indexDan++) {
          const element = this.danios[indexDan];
          console.log(element.Descripcion + ', kikiriki' + kikiriki);
          for (let indexDes = 0; indexDes < contenedorDescripcion.length; indexDes++) {
            const elementDes = contenedorDescripcion[indexDes];
            let estaDescripcion = jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-descripcion-input').eq(indexDes).val();
            if (element.Descripcion === estaDescripcion) {
              //alert(element.Descripcion);  
            }
          }
        }
        //console.dir(elCodigo.split('-')[1]);
        let elTipo = localStorage.getItem('TipoReparacionCulpa-' + daCode);
        let daType = parseInt(elTipo);
        let elIndex = localStorage.getItem('TipoReparacionCulpaIndex-' + daCode);
        let daIndex = parseInt(elIndex);
        setTimeout(() => {
          if (daType === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-culpable').eq(daIndex).attr("style", "background:#7da1c4;border-radius:10px; width: 100%");
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-culpable').eq(daIndex).attr("style", "background:transparent;color:#7da1c4; width: 100%");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-culpable').eq(daIndex).attr("style", "background:transparent; color:#0058CB; width: 100%");
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-culpable').eq(daIndex).attr("style", "background:#0058CB;border-radius:10px; width: 100%");
          }
        }, 2000);
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i))); //+1;
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          if (indexSelect == elementD.Id) {
            selectedIds.add(Number(elementD.Id));
          }
        }
      }
      if (localStorage.key(i).indexOf('danioOtroCulpa-') == 0) {
        let otroKey = parseInt(localStorage.key(i).split('-')[1]);
        let otroVal = localStorage.getItem(localStorage.key(i));
        console.log('En listar ');
        console.dir(JSON.parse(otroVal));
        //this.daniosSelectCulpa.push(JSON.parse(otroVal));
      }
    }

    this.daniosSelectCulpa = this.danios.filter(danio => selectedIds.has(Number(danio.Id)));
    this.contador = this.daniosSelectCulpa.length;
  }
  closeOtrosDanios() {
    this.isXXOpen = false;
  }
  recargarDaniosExtras() {
    var _this8 = this;
    this.api.ObtenerDaniosExtras(this.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__.Entidades[1].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref27 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.daniosExtrasCulpa = res;
        _this8.listarDaniosExtras();
      });
      return function (_x15) {
        return _ref27.apply(this, arguments);
      };
    }());
  }
  listarDaniosExtras() {
    console.log('Los daños extras');
    console.dir(this.daniosExtrasCulpa);
    this.daniosSelectOtroCulpa = this.daniosExtrasCulpa;
    for (let indexExtras = 0; indexExtras < this.daniosExtrasCulpa.length; indexExtras++) {
      const elementExtras = this.daniosExtrasCulpa[indexExtras];
      let daType = elementExtras.TipoReparacion;
      let elIndex = elementExtras.indexFront;
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
      //alert((daType != 0)+', '+(daType === 1))
      if (daType != 0) {
        if (daType === 1) {
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-xx').eq(elIndex).attr("style", "background:#7da1c4;border-radius:10px; width: 100%");
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-xx').eq(elIndex).attr("style", "background:transparent;color:#7da1c4; width: 100%");
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-xx').eq(elIndex).attr("style", "background:transparent; color:#0058CB; width: 100%");
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-xx').eq(elIndex).attr("style", "background:#0058CB;border-radius:10px; width: 100%");
        }
      }
    }
  }
  closeDanioSearch() {
    this.listarDanios();
    this.isSearchCulpable = false;
  }
  seleccionarMarcaCulpable(idMarca) {
    this.modelosMarca = [];
    let idVehiculo = idMarca.target.value;
    for (let index = 0; index < _environments_vehicles__WEBPACK_IMPORTED_MODULE_4__.marcasVehiculos.length; index++) {
      const element = _environments_vehicles__WEBPACK_IMPORTED_MODULE_4__.marcasVehiculos[index];
      if (element.id == idVehiculo) {
        this.culpable.MarcaCulpable = element.nombre;
        this.modelosMarca = element.modelos;
        console.dir(this.modelosMarca);
      }
    }
  }
  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }
  handleBack() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (this.pageSource == './expediente') {
        this.router.navigate([this.pageSource], {
          queryParams: {
            Id: this.idAtencion,
            Source: 1
          }
        });
      } else {
        this.router.navigate([this.pageSource]);
      }
    }, 2000);
  }
  outletDeactivate() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivationStart && e.snapshot.outlet === "tab1") this.outlet.deactivate();
    });
  }
  presentToastHome(message, position, clase) {
    var _this9 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      if (currentToast.length > 0) {
        _this9.toast.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this9.toast.create({
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
  seleccionarModeloCulpable(idModelo) {
    this.elModelo = this.modelosMarca[idModelo.target.value];
    this.culpable.ModeloCulpable = idModelo.target.value;
    //console.log(this.culpable.ModeloCulpable)
  }

  entraNombreCulpable(event) {
    this.culpable.NombreCulpable = event.target.value;
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
  }
  entraNombrePropietarioCulpable(event) {
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
    this.NombrePropietario = event.target.value;
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
  guardaCache(position) {
    if (position == 0) {
      localStorage.setItem('deuda-NombreCulpable', this.culpable.NombreCulpable);
    }
    if (position == 1) {
      localStorage.setItem('deuda-culpableIdentidad', this.culpableIdentidad);
    }
    if (position == 2) {
      localStorage.setItem('deuda-DireccionCulpable', this.culpable.DireccionCulpable);
    }
    if (position == 3) {
      localStorage.setItem('deuda-TelefonoFijoCulpable', this.culpable.TelefonoFijoCulpable);
    }
    if (position == 4) {
      localStorage.setItem('deuda-CelularCulpable', this.culpable.CelularCulpable);
    }
    if (position == 5) {
      localStorage.setItem('deuda-EdadCulpable', this.EdadCulpable);
    }
    if (position == 6) {
      localStorage.setItem('deuda-culpableCorreo', this.culpableCorreo);
    }
    if (position == 7) {
      localStorage.setItem('deuda-culpableTrabajo', this.culpableTrabajo);
    }
    if (position == 8) {
      let daType = this.culpable.LicenciaTipoCulpable;
      this.TipoDeLicencia = this.tipoLicencia[daType - 1].TipoLicencia;
      localStorage.setItem('deuda-LicenciaTipoCulpable', this.culpable.LicenciaTipoCulpable.toString());
    }
    if (position == 9) {
      localStorage.setItem('deuda-NumeroLicenciaCulpable', this.culpable.NumeroLicenciaCulpable);
    }
    if (position == 10) {
      localStorage.setItem('deuda-FechaVencimientoLicenciaCulpable', this.culpable.FechaVencimientoLicenciaCulpable.toString());
    }
    if (position == 11) {
      localStorage.setItem('deuda-MarcaCulpable', this.culpable.MarcaCulpable);
    }
    if (position == 12) {
      localStorage.setItem('deuda-ModeloCulpable', this.culpable.ModeloCulpable);
    }
    if (position == 13) {
      localStorage.setItem('deuda-AnioCulpable', this.culpable.AnioCulpable.toString());
    }
    if (position == 14) {
      localStorage.setItem('deuda-MotorNoCulpable', this.culpable.MotorNoCulpable);
    }
    if (position == 15) {
      localStorage.setItem('deuda-Chasis', this.culpable.Chasis);
    }
    if (position == 16) {
      localStorage.setItem('deuda-NoPlacaCulpable', this.culpable.NoPlacaCulpable);
    }
    if (position == 17) {
      if (this.culpableEsPropietario == true) {
        localStorage.setItem('deuda-NombrePropietarioCulpable', this.culpable.NombreCulpable);
      } else {
        localStorage.setItem('deuda-NombrePropietarioCulpable', this.NombrePropietario);
      }
    }
    if (position == 18) {
      if (this.culpableEsPropietario == true) {
        localStorage.setItem('deuda-DireccionPropietarioCulpable', this.DireccionCulpable);
      } else {
        localStorage.setItem('deuda-DireccionPropietarioCulpable', this.DireccionPropietario);
      }
    }
    if (position == 19) {
      localStorage.setItem('deuda-CompromisoPago', this.culpable.CompromisoPago);
    }
    if (position == 20) {
      localStorage.setItem('deuda-culpableContacto', this.culpableContacto);
    }
    if (position == 21) {
      localStorage.setItem('deuda-culpableContactoNumero', this.culpableContactoNumero);
    }
    if (position == 22) {
      localStorage.setItem('deuda-ObservacionesCulpable', this.culpable.ObservacionesCulpable);
    }
  }
  obtenerCache() {
    let storageKey;
    let storageKeyFix;
    let storageKeyIndex;
    let storageValue;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('deuda-') == 0) {
        storageKey = localStorage.key(i).split('-')[1];
        storageValue = localStorage.getItem(localStorage.key(i));
        this.culpable[storageKey] = storageValue;
      }
      if (i == localStorage.length - 1) {
        this.culpableIdentidad = localStorage.getItem('deuda-culpableIdentidad');
        if (this.culpableIdentidad == undefined || this.culpableIdentidad == null || this.culpableIdentidad == '' || this.culpableIdentidad == 'undefined') {
          console.log('culpableIdentidad no existe');
          this.culpableIdentidad = '';
        }
        this.EdadCulpable = parseInt(localStorage.getItem('deuda-EdadCulpable'));
        if (this.EdadCulpable == undefined || this.EdadCulpable == null || this.EdadCulpable == '' || this.EdadCulpable == 'undefined' || isNaN(this.EdadCulpable)) {
          console.log('EdadCulpable no existe');
          this.EdadCulpable = 0;
          //this.EdadCulpable = '';
        }

        this.culpableCorreo = localStorage.getItem('deuda-culpableCorreo');
        if (this.culpableCorreo == undefined || this.culpableCorreo == null || this.culpableCorreo == '' || this.culpableCorreo == 'undefined') {
          console.log('culpableCorreo no existe');
          this.culpableCorreo = '';
        }
        this.culpableTrabajo = localStorage.getItem('deuda-culpableTrabajo');
        if (this.culpableTrabajo == undefined || this.culpableTrabajo == null || this.culpableTrabajo == '' || this.culpableTrabajo == 'undefined') {
          console.log('culpableTrabajo no existe');
          this.culpableTrabajo = '';
        }
        this.culpable.LicenciaTipoCulpable = parseInt(localStorage.getItem('deuda-LicenciaTipoCulpable'));
        if (this.culpable.LicenciaTipoCulpable == undefined || this.culpable.LicenciaTipoCulpable == null) {
          console.log('culpable.LicenciaTipoCulpable no existe');
          //this.culpable.LicenciaTipoCulpable = '';
        } else {
          //alert(this.culpable.LicenciaTipoCulpable+1)
        }
        this.culpableContacto = localStorage.getItem('deuda-culpableContacto');
        if (this.culpableContacto == undefined || this.culpableContacto == null || this.culpableContacto == '' || this.culpableContacto == 'undefined') {
          console.log('culpableContacto no existe');
          this.culpableContacto = '';
        }
        this.culpableContactoNumero = localStorage.getItem('deuda-culpableContactoNumero');
        if (this.culpableContactoNumero == undefined || this.culpableContactoNumero == null || this.culpableContactoNumero == '' || this.culpableContactoNumero == 'undefined') {
          console.log('culpableContactoNumero no existe');
          this.culpableContactoNumero = '';
        }
        this.culpable.MarcaCulpable = localStorage.getItem('deuda-MarcaCulpable');
        if (this.culpable.MarcaCulpable == undefined || this.culpable.MarcaCulpable == null || this.culpable.MarcaCulpable == '' || this.culpable.MarcaCulpable == 'undefined') {
          console.log('culpable.MarcaCulpable no existe');
          //this.culpable.MarcaCulpable = '';
        }

        let idLicenciaTipo = parseInt(localStorage.getItem('deuda-LicenciaTipoCulpable'));
        if (idLicenciaTipo == undefined || idLicenciaTipo == null) {
          console.log('idLicenciaTipo no existe');
          //idLicenciaTipo = '';
        }

        let culpaEsPro = localStorage.getItem('deuda-culpableEsPropietario') === 'true';
        if (culpaEsPro == undefined || culpaEsPro == null) {
          console.log('culpaEsPro no existe');
        } else {
          this.culpableEsPropietario = culpaEsPro;
          if (culpaEsPro == true) {
            this.CulpableNombre = this.culpable.NombreCulpable;
            this.CulpableDireccion = this.culpable.DireccionCulpable;
          } else {
            this.NombrePropietario = localStorage.getItem('deuda-NombrePropietarioCulpable');
            this.DireccionPropietario = localStorage.getItem('deuda-DireccionPropietarioCulpable');
            this.CulpableNombre = this.NombrePropietario;
            this.CulpableDireccion = this.DireccionPropietario;
          }
        }
      }
    }
  }
  getTipoLicencia(paisIdentidad) {
    var _this10 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this10.loading.create();
      yield load.present();
      _this10.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref29 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this10.tipoLicencia = res;
        });
        return function (_x16) {
          return _ref29.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref30 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          /*
          const alert = await this.alert.create({
            header:'HELP',
            message:res.error.Message,
            buttons:['Ok']
          });
          await alert.present();
          }
          */
        });
        return function (_x17) {
          return _ref30.apply(this, arguments);
        };
      }());
    })();
  }
  cambiarPropietario(event) {
    this.culpableEsPropietario = event.detail.checked;
    localStorage.setItem('deuda-culpableEsPropietario', this.culpableEsPropietario.toString());
    if (this.culpableEsPropietario == true) {
      this.CulpableNombre = this.culpable.NombreCulpable;
      this.CulpableDireccion = this.culpable.DireccionCulpable;
    } else {
      this.CulpableNombre = this.NombrePropietario;
      this.CulpableDireccion = this.DireccionPropietario;
    }
  }
  entraVencimiento(event) {
    let vigenciaLength = event.target.value.length;
    if (vigenciaLength < 10) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
      var dateFormat = event.target.value.split('T')[0];
      console.log('dateFormat ' + dateFormat);
      let dia = dateFormat.toString().substring(0, 2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);
      let laFormateada = anio + '-' + mes + '-' + dia;
      this.formateadaVigencia = laFormateada;
      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      this.vigente;
      let ahora = new Date(nowDate);
      let fechaVigencia = new Date(laFormateada);
      console.log(new Date(nowDate) + ', ' + new Date(anio, mes, dia));
      console.log(new Date(nowDate) > new Date(laFormateada));
      console.log(ahora.getFullYear() + ', ' + anio);
      console.log(ahora.getFullYear() > anio);
      ///////////////////////////////////////////////////////////////////
      if (ahora.getFullYear() > anio) {
        this.vigente = false;
      } else {
        this.vigente = true;
      }
      setTimeout(() => {
        if (this.vigente == false) {
          localStorage.setItem('dataProcess-LicenciaEstadoCulpable', '2');
        } else {
          localStorage.setItem('dataProcess-LicenciaEstadoCulpable', '1');
        }
      }, 1000);
      /*
      console.log(this.formateadaVigencia)
      let fechaVigencia = new Date(this.formateadaVigencia).toISOString();
      console.log(fechaVigencia)
      localStorage.setItem('dataProcess-VigenciaCulpable', fechaVigencia);
      
      console.log('Finalmente la vigencia es '+fechaVigencia)
      */
    }
  }

  print(item) {
    //console.log(item);
  }
  goAdeuda() {
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      this.atencionId = parseInt(this.idAtencion);
    }
    let dater = new Date();
    let time = 'T' + dater.getHours() + ':' + dater.getMinutes() + ':' + dater.getSeconds();
    let vDate = this.culpable.FechaVencimientoLicenciaCulpable;
    if (vDate == undefined || vDate == null) {
      this.isLoading = false;
      this.presentToastNoButtonsYellow('Fecha vacía!', 'top', 'warning');
      jquery__WEBPACK_IMPORTED_MODULE_6__('#vigenciaInput').attr('style', 'border-bottom: 1px solid red');
      jquery__WEBPACK_IMPORTED_MODULE_6__('#vigenciaLabel').attr('style', 'color: red');
      this.colorVigente = false;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_6__('#vigenciaInput').attr('style', 'border-bottom: 1px solid lightgray');
      jquery__WEBPACK_IMPORTED_MODULE_6__('#vigenciaLabel').attr('style', 'color: lightgray');
      this.colorVigente = true;
      console.log('Arreglando lo de la fecha :' + this.culpable.FechaVencimientoLicenciaCulpable);
      let dias = vDate.toString().substring(0, 2);
      let mes = vDate.toString().substring(3, 5);
      let anio = vDate.toString().substring(6, vDate.toString().length);
      console.log('dias : ' + dias + ', mes : ' + mes + ', Año : ' + anio);
      let vigenteDate;
      if (parseInt(mes) > 12) {
        this.presentToastNoButtonsYellow('Fecha no válida!', 'top', 'warning');
        this.isLoading = false;
        this.colorVigente = false;
      } else {
        this.colorVigente = true;
        vigenteDate = anio + '-' + mes + '-' + dias + time;
        let culpableCelular;
        let culpableContactoNumero;
        let culpableTelefono;
        let culpableLicenciaTipo;
        let inputValue;
        let evaluar;
        let contenedor;
        // data-input data-input-prop data-input-text
        let inputDataContainer = document.getElementsByClassName('data-input');
        let inputDataSelectContainer = document.getElementsByClassName('data-input-select');
        //alert(this.culpable.CompromisoPago)
        setTimeout(() => {
          if (this.culpable.CompromisoPago == undefined) {
            this.isDataMissing = true;
            this.esCompromiso = false;
          } else {
            this.isDataMissing = false;
            this.esCompromiso = true;
          }
        }, 600);
        setTimeout(() => {
          this.nulos = [];
          for (let index = 0; index < inputDataContainer.length; index++) {
            const element = inputDataContainer[index];
            inputValue = jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input').eq(index).val();
            if (inputValue == '') {
              jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input').eq(index).attr('style', 'border-bottom: 1px solid red');
              this.nulos.push({
                indexNull: index
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input').eq(index).attr('style', 'border-bottom: 1px solid lightgray');
            }
            if (index == inputDataContainer.length - 1) {
              if (this.nulos.length > 0) {
                this.isDataMissing = true;
              } else {
                this.isDataMissing = false;
              }
            }
          }
        }, 1000);
        setTimeout(() => {
          this.nulos = [];
          for (let index = 0; index < inputDataSelectContainer.length; index++) {
            const element = inputDataSelectContainer[index];
            inputValue = jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input-select').eq(index).val();
            //alert(inputValue)
            if (inputValue == undefined || inputValue == '') {
              jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input-select').eq(index).attr('style', 'border-bottom: 1px solid red');
              this.nulos.push({
                indexNull: index
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input-select').eq(index).attr('style', 'border-bottom: 1px solid lightgray');
            }
            if (index == inputDataSelectContainer.length - 1) {
              if (this.nulos.length > 0) {
                this.isDataMissing = true;
              } else {
                this.isDataMissing = false;
              }
            }
          }
        }, 1800);
        setTimeout(() => {
          if (this.isDataMissing == false) {
            this.toaster.dismissToast();
            const expedienteActual = this.expediente?.[0] || {};
            const tipoLicenciaSeleccionada = this.tipoLicencia.find(licencia => Number(licencia.Id) === Number(this.culpable.LicenciaTipoCulpable));
            this.reconocimientoDeuda = {
              Id: 0,
              NombreDeudor: this.culpable.NombreCulpable,
              IdentidadDeudor: this.culpableIdentidad,
              Edad: parseInt(this.EdadCulpable),
              Celular: this.culpable.CelularCulpable.toString(),
              Domicilio: this.culpable.DireccionCulpable,
              CorreoElectronico: this.culpableCorreo,
              LugarDeTrabajo: this.culpableTrabajo,
              NombreContacto: this.culpableContacto,
              CelularContacto: this.culpableContactoNumero.toString(),
              FechaRegistroDocumento: this.fechaFirma,
              Marca: expedienteActual.Marca,
              Modelo: expedienteActual.Modelo,
              Anio: expedienteActual.Year,
              Placa: expedienteActual.NumeroPlaca,
              NombreAsegurado: expedienteActual.Cliente,
              MarcaImplicado: this.culpable.MarcaCulpable,
              ModeloImplicado: this.culpable.ModeloCulpable,
              AnioImplicado: this.culpable.AnioCulpable,
              PlacaImplicado: this.culpable.NoPlacaCulpable,
              MotorImplicado: this.culpable.MotorNoCulpable,
              ChasisImplicado: this.culpable.Chasis,
              NombrePersonaPropiedadImplicada: this.CulpableNombre,
              DanioCausadoObservacion: this.culpable.ObservacionesCulpable,
              RefAtencionId: this.atencionId,
              FechaRegistro: this.fechaFirma,
              FirmaDeudor: "string",
              Ciudad: expedienteActual.Ciudad,
              TelefonoCulpable: this.culpable.TelefonoFijoCulpable.toString(),
              LicenciaCulpable: this.culpable.NumeroLicenciaCulpable,
              TipoLicencia: this.culpable.LicenciaTipoCulpable.toString(),
              FechaVencimientoLicencia: vigenteDate,
              NombreDireccionPropietarioVehiculoImplicado: this.CulpableDireccion,
              RefTipoFotografiaIdAdeudado: 0,
              RefTipoFotografiaIdBeneficiario: 0,
              CompromisoDePago: parseInt(this.culpable.CompromisoPago),
              Observaciones: this.culpable.ObservacionesCulpable,
              PolizaExterna: expedienteActual.PolizaExterna,
              TipoLicenciaDescripcion: tipoLicenciaSeleccionada?.TipoLicencia || this.TipoDeLicencia,
              DaniosComunes: this.daniosSelectCulpa,
              DaniosManuales: this.daniosSelectOtroCulpa
            };
            // NombrePersonaPropiedadImplicada  // NombreDireccionPropietarioVehiculoImplicado
            //this.reconocimientoDeuda.NombrePersonaPropiedadImplicada = $('.data-input').eq(14).val();
            setTimeout(() => {
              console.log('Los daños');
              console.dir(this.daniosSelectCulpa);
              console.dir(this.reconocimientoDeuda);
              localStorage.setItem('deuda', JSON.stringify(this.reconocimientoDeuda));
              localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));
              localStorage.setItem('daniosSelectOtroCulpaDetalle', JSON.stringify(this.daniosSelectOtroCulpa));
              localStorage.setItem('poliza', expedienteActual.PolizaExterna || this.poliza || '');
              localStorage.setItem('datos-Poliza', expedienteActual.PolizaExterna || this.poliza || '');
              localStorage.setItem('telFijo', this.telFijo);
              localStorage.setItem('fechaFirma', this.fechaFirma);
              this.isLoading = false;
              //alert(this.reconocimientoDeuda.length)
              this.router.navigate(['./adeuda']);
            }, 4000);
          } else {
            this.presentToastNoButtonsYellow('Faltan datos, porfavor revise!', 'top', 'warning');
            this.isLoading = false;
          }
        }, 3000);
      }
    }
  }
  isValidDate(d) {
    var timestamp = Date.parse(d);
    if (isNaN(timestamp) == false) {
      var dat = new Date(timestamp);
      return dat;
    } else {
      return 'No voo';
    }
  }
  presentToastNoButtonsYellow(message, position, color) {
    var _this11 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      //console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this11.toast.dismiss();
      }
      //await this.toast.dismiss();
      const toast = yield _this11.toast.create({
        message: message,
        color: color,
        duration: 60000,
        position: position,
        cssClass: ['custom-toast'],
        buttons: [
          /*{
            text: 'CORREGIR',
            role: 'cancel',
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
          //            this.location.back()
              //window.location.reload()
            }
          }
          */
        ]
      });
      yield toast.present();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
    }];
  }
  static {
    this.propDecorators = {
      outlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet]
      }]
    };
  }
};
CulpablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-culpable',
  template: _culpable_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_culpable_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CulpablePage);


/***/ }),

/***/ 73586:
/*!******************************************!*\
  !*** ./src/app/environments/vehicles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "marcasVehiculos": () => (/* binding */ marcasVehiculos),
/* harmony export */   "tiposTransmision": () => (/* binding */ tiposTransmision)
/* harmony export */ });
const tiposTransmision = [{
  id: 'tr01',
  nombre: "Mecánica (Manual)"
}, {
  id: 'tr02',
  nombre: "Automático"
}, {
  id: 'tr03',
  nombre: "Doble Embrague"
}, {
  id: 'tr04',
  nombre: "Continua Variable (CVT)"
}];
const marcasVehiculos = [{
  "id": 1,
  "nombre": "Audi",
  "modelos": ["A5", "A3", "A4", "A6", "S3", "S4", "TT", "A1", "TTS", "A1 1.4 T", "Q7", "Q5", "Q3", "Q2"]
}, {
  "id": 2,
  "nombre": "BMW",
  "modelos": ["Serie 6", "Serie 7", "Z4", "M6", "Serie 1", "Serie 3", "Serie 5", "Serie 8", "1800", "M", "Serie 4", "Serie 2", "M235", "428i", "i", "1M", "M4", "M3", "M2", "X6", "X1", "X3", "X5", "X4", "X2"]
}, {
  "id": 3,
  "nombre": "Chevrolet",
  "modelos": ["Alto", "Astra", "Bel Air", "Camaro", "Aveo", "Cavalier", "Celebrity", "Citation", "Corsa", "Chevy", "Epica", "Esteem", "Impala", "Malibu", "Monza", "Optra", "Spark", "Sprint", "Style", "Line", "Swift", "Wagon R+", "Sail", "Buick", "Cruze", "39", "Cobalt", "Sonic", "Onix", "Beat", "Vivant", "Blazer 4x2", "Captiva", "Tahoe", "HHR", "Courier", "Zafira", "Blazer", "4x4", "Grand", "Vitara", "Grand Blazer", "Rodeo", "Suburban", "Trail", "Blazer", "Traverse", "Orlando", "Tracker", "Equinox", "Jimny", "Samurai", "Trooper", "Vitara", "FSR", "FVR", "FTR", "NNR", "Cheyenne", "C30", "3100", "Luv", "Brigadier", "C70", "Carry", "NHR", "NPR", "NKR", "Super", "Brigadier", "Super", "Carry", "Kodiak", "NQR", "FRR", "FVZ", "N300", "Luv", "D-max", "DMAX", "Super", "Carry", "NQR", "FRR", "Carry", "CHR", "LV", "NKR", "NPR", "Luv", "D-max", "SSR", "Luv Dmax", "N300", "Apache", "C10", "C30", "Cheyenne", "Luv 1.6", "Luv 2.2", "Luv 2.3", "Luv 2.5", "Colorado", "Luv 2.8", "Silverado", "Optra", "Spark", "Corsa", "Taxi", "Chevette", "Chevytaxi", "7:24", "ChevyVan", "ChevyWagon", "Super", "Carry", "N200", "N300"]
}, {
  "id": 4,
  "nombre": "Citroen",
  "modelos": ["Xsara", "Picasso", "C3", "C5", "Saxo", "Xantia", "ZX", "C4", "C2", "Xsara", "DS3", "DS4", "DS5", "C-Elysee", "Aircross", "Aircross", "C4", "C3", "Berlingo", "Jumper", "Jumpy", "Berlingo"]
}, {
  "id": 5,
  "nombre": "Daihatsu",
  "modelos": ["Charade", "Charmant", "Sirion", "Materia", "Terios", "F20", "Feroza", "Rocky", "Delta", "V126"]
}, {
  "id": 6,
  "nombre": "Dodge",
  "modelos": ["Coronet", "Dart", "Demon", "D100", "Royal", "Journey", "Caliber", "Fargo", "Durango", "300", "600", "900", "500", "Ram", "D100", "Dakota", "Caravan"]
}, {
  "id": 7,
  "nombre": "Fiat",
  "modelos": ["Zastava", "Idea", "124", "Punto", "147", "Palio", "Polsky", "Premio", "Siena", "Stilo", "Tipo", "Topolino", "Uno", "500", "Linea", "Nuevo", "Palio", "Argo", "Cronos", "Adventure", "500", "X", "Fiorino", "Furgon", "Strada", "Idea"]
}, {
  "id": 8,
  "nombre": "Ford",
  "modelos": ["Fusion", "Crown", "Victoria", "Falcon", "Festiva", "Fiesta", "Focus", "Granada", "Laser", "Mustang", "Taurus", "Hot", "Rod", "Escort", "Ltd", "555E", "Chiva", "Ecosport", "Panel", "Edge", "Flex", "Courier", "Escape", "Expedition", "Explorer", "Llanero", "Bronco", "Piragua", "Aeromax", "Cargo", "815", "F350", "600", "F8000", "F 600", "F 350[7]", "F9000", "F-150", "Cargo 1019", "Cargo 816", "F250", "Nueva", "Ranger", "Explorer", "F100", "F-150", "F350", "Ranger"]
}, {
  "id": 9,
  "nombre": "KIA",
  "modelos": ["Carens", "Sportage", "Soluto", "K3", "Picanto", "Seltos", "K2700", "Sonet"]
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

/***/ 64418:
/*!********************************************************!*\
  !*** ./src/app/culpable/culpable.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  height: 20%;\n  left: 40%;\n  position: fixed;\n  top: 28%;\n  width: 20%;\n  z-index: 999;\n}\n\n#spinFooter {\n  background: rgba(0, 0, 0, 0.6);\n  bottom: 0;\n  height: 100vh;\n  position: fixed;\n  width: 100vw;\n  z-index: 900;\n}\n\n.culpable-header ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #fff;\n  --min-height: 58px;\n}\n\n.culpable-header ion-title {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  padding-inline: 56px;\n  text-align: center;\n}\n\n.culpable-header ion-button, .culpable-header ion-icon {\n  --color: #fff;\n  color: #fff;\n}\n\n.culpable-content, .damage-search-content {\n  --background: #eef3f7;\n  --padding-bottom: 20px;\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 12px;\n}\n\n.culpable-shell, .damage-search-shell {\n  margin: 0 auto;\n  max-width: 1080px;\n}\n\n.culpable-shell {\n  display: grid;\n  gap: 12px;\n}\n\n.form-intro, .form-section, .damage-search-shell {\n  background: #fff;\n  border: 1px solid #d8e3ed;\n  border-radius: 7px;\n}\n\n.form-intro {\n  align-items: center;\n  border-left: 4px solid var(--primaryColor);\n  display: flex;\n  gap: 13px;\n  padding: 15px 17px;\n}\n\n.intro-icon {\n  align-items: center;\n  background: #eaf2ff;\n  border-radius: 6px;\n  color: var(--primaryColor);\n  display: flex;\n  flex: 0 0 50px;\n  height: 50px;\n  justify-content: center;\n}\n\n.intro-icon ion-icon {\n  font-size: 1.7rem;\n}\n\n.form-intro span, .section-heading span, .form-field > span, .damage-search-heading span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.form-intro h1 {\n  color: #17365d;\n  font-size: 1.08rem;\n  margin: 2px 0 3px;\n}\n\n.form-intro p {\n  color: #61758a;\n  font-size: 0.79rem;\n  line-height: 1.4;\n  margin: 0;\n}\n\n.form-section {\n  padding: 14px;\n}\n\n.section-heading {\n  border-bottom: 1px solid #e4ebf1;\n  margin-bottom: 12px;\n  padding-bottom: 9px;\n}\n\n.section-heading h2 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.section-heading-actions, .section-heading-toggle {\n  align-items: center;\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.damage-actions {\n  display: flex;\n  gap: 7px;\n}\n\n.damage-actions ion-button {\n  --border-radius: 5px;\n  font-size: 0.72rem;\n  font-weight: 800;\n  height: 36px;\n  margin: 0;\n  text-transform: none;\n}\n\n.form-grid {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.form-grid-three {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.form-field {\n  background: #fff;\n  border: 1px solid #dce5ed;\n  border-radius: 6px;\n  display: block;\n  padding: 9px 10px;\n}\n\n.form-field-wide {\n  grid-column: 1/-1;\n}\n\n.form-field > span {\n  display: block;\n  margin-bottom: 6px;\n}\n\n.form-field ion-input, .form-field ion-select, .form-field ion-textarea {\n  --background: #f5f8fb;\n  --color: #17365d;\n  --highlight-color-focused: var(--primaryColor);\n  --padding-bottom: 9px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 9px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-size: 0.88rem;\n  min-height: 42px;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.form-field ion-input[readonly] {\n  opacity: 0.72;\n}\n\n.form-field ion-select::part(icon) {\n  color: var(--primaryColor);\n  opacity: 1;\n}\n\n.date-field {\n  position: relative;\n}\n\n.date-field > ion-icon {\n  font-size: 1.3rem;\n  position: absolute;\n  right: 18px;\n  top: 39px;\n  z-index: 2;\n}\n\n.owner-toggle {\n  --background: #f5f8fb;\n  --inner-padding-end: 9px;\n  --min-height: 42px;\n  --padding-start: 9px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n}\n\n.owner-toggle ion-label {\n  color: #315b80;\n  font-size: 0.74rem;\n  font-weight: 800;\n  white-space: normal;\n}\n\n.owner-toggle ion-checkbox {\n  --checkbox-background-checked: var(--primaryColor);\n  --border-color-checked: var(--primaryColor);\n  margin-right: 8px;\n}\n\n.commitment-field ion-radio-group {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.commitment-field ion-item {\n  --background: #f5f8fb;\n  --inner-padding-end: 10px;\n  --min-height: 44px;\n  --padding-start: 10px;\n  border: 1px solid #d8e3ed;\n  border-radius: 5px;\n}\n\n.commitment-field ion-label {\n  color: #315b80;\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n\n.damage-accordions {\n  display: grid;\n  gap: 8px;\n}\n\n.damage-accordions ion-accordion {\n  border: 1px solid #dbe5ed;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.damage-accordions ion-item[slot=header] {\n  --background: #f4f8fb;\n  --color: #17365d;\n  --min-height: 48px;\n}\n\n.damage-accordions ion-item[slot=header] ion-icon {\n  color: var(--primaryColor);\n}\n\n.damage-accordions ion-label {\n  font-size: 0.82rem;\n  font-weight: 800;\n}\n\n.damage-accordions ion-badge {\n  --background: #e4eefb;\n  --color: var(--primaryColor);\n}\n\n.damage-content {\n  background: #fbfdff;\n  padding: 10px;\n}\n\n.empty-damage {\n  color: #71869a;\n  font-size: 0.78rem;\n  margin: 5px;\n}\n\n.damage-grid {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.damage-card {\n  background: #fff;\n  border: 1px solid #dbe5ed;\n  border-radius: 6px;\n  padding: 9px;\n}\n\n.damage-card-heading {\n  align-items: flex-start;\n  display: flex;\n  gap: 6px;\n  justify-content: space-between;\n  min-height: 43px;\n}\n\n.damage-card-heading strong {\n  color: #315b80;\n  font-size: 0.76rem;\n  line-height: 1.3;\n}\n\n.damage-card-heading ion-button {\n  --padding-end: 3px;\n  --padding-start: 3px;\n  height: 28px;\n  margin: -4px -3px 0 0;\n}\n\n.repair-actions {\n  display: grid;\n  gap: 6px;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 7px;\n}\n\n.repair-actions ion-button {\n  --border-radius: 4px;\n  font-size: 0.68rem;\n  height: 32px;\n  margin: 0;\n  text-transform: none;\n}\n\n.damage-search-shell {\n  overflow: hidden;\n  padding-bottom: 72px;\n  position: relative;\n}\n\n.damage-search-heading {\n  align-items: center;\n  border-bottom: 1px solid #e1e9f0;\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 16px;\n}\n\n.damage-search-heading h1 {\n  color: #17365d;\n  font-size: 1rem;\n  margin: 2px 0 0;\n}\n\n.damage-search-heading ion-button {\n  --color: var(--primaryColor);\n  margin: 0;\n}\n\n.damage-search-shell ion-searchbar {\n  --background: #f3f7fa;\n  --border-radius: 6px;\n  --box-shadow: none;\n  padding: 10px;\n}\n\n.damage-results {\n  background: transparent;\n  padding: 0 10px 12px;\n}\n\n.damage-results ion-item {\n  --background: #fff;\n  --color: #315b80;\n  --min-height: 48px;\n  border-bottom: 1px solid #e3eaf0;\n  font-size: 0.82rem;\n}\n\n.damage-results ion-icon {\n  color: #7890a6;\n}\n\n.damage-results .selected {\n  --background: #eaf2ff;\n  --color: var(--primaryColor);\n}\n\n.damage-results .selected ion-icon {\n  color: var(--primaryColor);\n}\n\n.selected-check {\n  font-size: 1.3rem;\n}\n\n.damage-search-confirm {\n  align-items: center;\n  background: #fff;\n  border-top: 1px solid #d9e1e8;\n  bottom: 0;\n  box-shadow: 0 -4px 12px rgba(0, 33, 63, 0.08);\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n  left: 0;\n  padding: 9px 12px;\n  position: absolute;\n  right: 0;\n}\n\n.damage-search-confirm > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.damage-search-confirm strong {\n  color: var(--primaryColor);\n  font-size: 1rem;\n}\n\n.damage-search-confirm span {\n  color: #617b94;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n\n.damage-search-confirm ion-button {\n  --border-radius: 5px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  height: 40px;\n  margin: 0;\n  text-transform: none;\n}\n\n.culpable-footer {\n  background: #fff;\n  border-top: 1px solid #d9e1e8;\n  box-shadow: 0 -4px 14px rgba(0, 33, 63, 0.08);\n}\n\n.culpable-footer ion-toolbar {\n  --background: #fff;\n  --min-height: 66px;\n  --padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --padding-top: 8px;\n}\n\n.culpable-footer ion-button {\n  --border-radius: 6px;\n  --box-shadow: none;\n  font-size: 0.86rem;\n  font-weight: 800;\n  height: 46px;\n  margin: 0 auto;\n  max-width: 520px;\n}\n\nion-modal.damage-entry-modal {\n  --backdrop-opacity: .48;\n  --border-radius: 10px;\n  --height: 330px;\n  --max-width: 480px;\n  --width: calc(100% - 20px);\n}\n\n.damage-entry-modal ion-toolbar {\n  --background: var(--primaryColor);\n  --color: #fff;\n}\n\n.damage-entry-modal ion-title {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 800;\n  text-align: center;\n}\n\n.damage-entry-modal ion-button, .damage-entry-modal ion-icon {\n  --color: #fff;\n  color: #fff;\n}\n\n.damage-entry-form {\n  padding: 18px;\n}\n\n.damage-entry-form > ion-label {\n  color: #617b94;\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  margin-bottom: 7px;\n  text-transform: uppercase;\n}\n\n.damage-entry-form ion-textarea {\n  --background: #f5f8fb;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n  border: 1px solid #d8e3ed;\n  border-radius: 6px;\n}\n\n.damage-entry-form > ion-button {\n  --border-radius: 6px;\n  font-weight: 800;\n  margin: 16px 0 0;\n}\n\n@media (max-width: 760px) {\n  .form-grid-three {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .damage-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .culpable-content, .damage-search-content {\n    --padding-end: 8px;\n    --padding-start: 8px;\n    --padding-top: 8px;\n  }\n  .form-intro {\n    align-items: flex-start;\n    padding: 13px;\n  }\n  .form-section {\n    padding: 10px;\n  }\n  .section-heading-actions, .section-heading-toggle {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .damage-actions {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .form-grid, .form-grid-three, .damage-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-field-wide {\n    grid-column: auto;\n  }\n  .commitment-field ion-radio-group {\n    grid-template-columns: 1fr 1fr;\n  }\n  .damage-card {\n    min-height: 0;\n  }\n  .damage-search-confirm {\n    position: fixed;\n  }\n  .damage-search-confirm ion-button {\n    min-width: 180px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/culpable/culpable.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-spinner { height: 20%; left: 40%; position: fixed; top: 28%; width: 20%; z-index: 999; }\n#spinFooter { background: rgba(0, 0, 0, 0.6); bottom: 0; height: 100vh; position: fixed; width: 100vw; z-index: 900; }\n\n.culpable-header ion-toolbar { --background: var(--primaryColor); --color: #fff; --min-height: 58px; }\n.culpable-header ion-title { color: #fff; font-size: 1rem; font-weight: 800; letter-spacing: 0; padding-inline: 56px; text-align: center; }\n.culpable-header ion-button, .culpable-header ion-icon { --color: #fff; color: #fff; }\n\n.culpable-content, .damage-search-content { --background: #eef3f7; --padding-bottom: 20px; --padding-end: 12px; --padding-start: 12px; --padding-top: 12px; }\n.culpable-shell, .damage-search-shell { margin: 0 auto; max-width: 1080px; }\n.culpable-shell { display: grid; gap: 12px; }\n\n.form-intro, .form-section, .damage-search-shell { background: #fff; border: 1px solid #d8e3ed; border-radius: 7px; }\n.form-intro { align-items: center; border-left: 4px solid var(--primaryColor); display: flex; gap: 13px; padding: 15px 17px; }\n.intro-icon { align-items: center; background: #eaf2ff; border-radius: 6px; color: var(--primaryColor); display: flex; flex: 0 0 50px; height: 50px; justify-content: center; }\n.intro-icon ion-icon { font-size: 1.7rem; }\n.form-intro span, .section-heading span, .form-field > span, .damage-search-heading span { color: #617b94; font-size: .68rem; font-weight: 800; text-transform: uppercase; }\n.form-intro h1 { color: #17365d; font-size: 1.08rem; margin: 2px 0 3px; }\n.form-intro p { color: #61758a; font-size: .79rem; line-height: 1.4; margin: 0; }\n\n.form-section { padding: 14px; }\n.section-heading { border-bottom: 1px solid #e4ebf1; margin-bottom: 12px; padding-bottom: 9px; }\n.section-heading h2 { color: #17365d; font-size: 1rem; margin: 2px 0 0; }\n.section-heading-actions, .section-heading-toggle { align-items: center; display: flex; gap: 12px; justify-content: space-between; }\n.damage-actions { display: flex; gap: 7px; }\n.damage-actions ion-button { --border-radius: 5px; font-size: .72rem; font-weight: 800; height: 36px; margin: 0; text-transform: none; }\n\n.form-grid { display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0, 1fr)); }\n.form-grid-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n.form-field { background: #fff; border: 1px solid #dce5ed; border-radius: 6px; display: block; padding: 9px 10px; }\n.form-field-wide { grid-column: 1 / -1; }\n.form-field > span { display: block; margin-bottom: 6px; }\n.form-field ion-input, .form-field ion-select, .form-field ion-textarea { --background: #f5f8fb; --color: #17365d; --highlight-color-focused: var(--primaryColor); --padding-bottom: 9px; --padding-end: 10px; --padding-start: 10px; --padding-top: 9px; border: 1px solid #d8e3ed; border-radius: 5px; box-sizing: border-box; font-size: .88rem; min-height: 42px; text-transform: uppercase; width: 100%; }\n.form-field ion-input[readonly] { opacity: .72; }\n.form-field ion-select::part(icon) { color: var(--primaryColor); opacity: 1; }\n.date-field { position: relative; }\n.date-field > ion-icon { font-size: 1.3rem; position: absolute; right: 18px; top: 39px; z-index: 2; }\n\n.owner-toggle { --background: #f5f8fb; --inner-padding-end: 9px; --min-height: 42px; --padding-start: 9px; border: 1px solid #d8e3ed; border-radius: 5px; }\n.owner-toggle ion-label { color: #315b80; font-size: .74rem; font-weight: 800; white-space: normal; }\n.owner-toggle ion-checkbox { --checkbox-background-checked: var(--primaryColor); --border-color-checked: var(--primaryColor); margin-right: 8px; }\n.commitment-field ion-radio-group { display: grid; gap: 8px; grid-template-columns: repeat(2, minmax(0, 1fr)); }\n.commitment-field ion-item { --background: #f5f8fb; --inner-padding-end: 10px; --min-height: 44px; --padding-start: 10px; border: 1px solid #d8e3ed; border-radius: 5px; }\n.commitment-field ion-label { color: #315b80; font-size: .82rem; font-weight: 800; }\n\n.damage-accordions { display: grid; gap: 8px; }\n.damage-accordions ion-accordion { border: 1px solid #dbe5ed; border-radius: 6px; overflow: hidden; }\n.damage-accordions ion-item[slot='header'] { --background: #f4f8fb; --color: #17365d; --min-height: 48px; }\n.damage-accordions ion-item[slot='header'] ion-icon { color: var(--primaryColor); }\n.damage-accordions ion-label { font-size: .82rem; font-weight: 800; }\n.damage-accordions ion-badge { --background: #e4eefb; --color: var(--primaryColor); }\n.damage-content { background: #fbfdff; padding: 10px; }\n.empty-damage { color: #71869a; font-size: .78rem; margin: 5px; }\n.damage-grid { display: grid; gap: 8px; grid-template-columns: repeat(3, minmax(0, 1fr)); }\n.damage-card { background: #fff; border: 1px solid #dbe5ed; border-radius: 6px; padding: 9px; }\n.damage-card-heading { align-items: flex-start; display: flex; gap: 6px; justify-content: space-between; min-height: 43px; }\n.damage-card-heading strong { color: #315b80; font-size: .76rem; line-height: 1.3; }\n.damage-card-heading ion-button { --padding-end: 3px; --padding-start: 3px; height: 28px; margin: -4px -3px 0 0; }\n.repair-actions { display: grid; gap: 6px; grid-template-columns: 1fr 1fr; margin-top: 7px; }\n.repair-actions ion-button { --border-radius: 4px; font-size: .68rem; height: 32px; margin: 0; text-transform: none; }\n\n.damage-search-shell { overflow: hidden; padding-bottom: 72px; position: relative; }\n.damage-search-heading { align-items: center; border-bottom: 1px solid #e1e9f0; display: flex; justify-content: space-between; padding: 14px 16px; }\n.damage-search-heading h1 { color: #17365d; font-size: 1rem; margin: 2px 0 0; }\n.damage-search-heading ion-button { --color: var(--primaryColor); margin: 0; }\n.damage-search-shell ion-searchbar { --background: #f3f7fa; --border-radius: 6px; --box-shadow: none; padding: 10px; }\n.damage-results { background: transparent; padding: 0 10px 12px; }\n.damage-results ion-item { --background: #fff; --color: #315b80; --min-height: 48px; border-bottom: 1px solid #e3eaf0; font-size: .82rem; }\n.damage-results ion-icon { color: #7890a6; }\n.damage-results .selected { --background: #eaf2ff; --color: var(--primaryColor); }\n.damage-results .selected ion-icon { color: var(--primaryColor); }\n.selected-check { font-size: 1.3rem; }\n.damage-search-confirm { align-items: center; background: #fff; border-top: 1px solid #d9e1e8; bottom: 0; box-shadow: 0 -4px 12px rgba(0,33,63,.08); display: flex; gap: 12px; justify-content: space-between; left: 0; padding: 9px 12px; position: absolute; right: 0; }\n.damage-search-confirm > div { display: flex; flex-direction: column; }\n.damage-search-confirm strong { color: var(--primaryColor); font-size: 1rem; }\n.damage-search-confirm span { color: #617b94; font-size: .68rem; font-weight: 700; }\n.damage-search-confirm ion-button { --border-radius: 5px; font-size: .75rem; font-weight: 800; height: 40px; margin: 0; text-transform: none; }\n\n.culpable-footer { background: #fff; border-top: 1px solid #d9e1e8; box-shadow: 0 -4px 14px rgba(0, 33, 63, .08); }\n.culpable-footer ion-toolbar { --background: #fff; --min-height: 66px; --padding-bottom: calc(8px + env(safe-area-inset-bottom)); --padding-end: 12px; --padding-start: 12px; --padding-top: 8px; }\n.culpable-footer ion-button { --border-radius: 6px; --box-shadow: none; font-size: .86rem; font-weight: 800; height: 46px; margin: 0 auto; max-width: 520px; }\n\nion-modal.damage-entry-modal { --backdrop-opacity: .48; --border-radius: 10px; --height: 330px; --max-width: 480px; --width: calc(100% - 20px); }\n.damage-entry-modal ion-toolbar { --background: var(--primaryColor); --color: #fff; }\n.damage-entry-modal ion-title { color: #fff; font-size: 1rem; font-weight: 800; text-align: center; }\n.damage-entry-modal ion-button, .damage-entry-modal ion-icon { --color: #fff; color: #fff; }\n.damage-entry-form { padding: 18px; }\n.damage-entry-form > ion-label { color: #617b94; display: block; font-size: .72rem; font-weight: 800; margin-bottom: 7px; text-transform: uppercase; }\n.damage-entry-form ion-textarea { --background: #f5f8fb; --padding-bottom: 10px; --padding-end: 10px; --padding-start: 10px; --padding-top: 10px; border: 1px solid #d8e3ed; border-radius: 6px; }\n.damage-entry-form > ion-button { --border-radius: 6px; font-weight: 800; margin: 16px 0 0; }\n\n@media (max-width: 760px) {\n  .form-grid-three { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .damage-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 560px) {\n  .culpable-content, .damage-search-content { --padding-end: 8px; --padding-start: 8px; --padding-top: 8px; }\n  .form-intro { align-items: flex-start; padding: 13px; }\n  .form-section { padding: 10px; }\n  .section-heading-actions, .section-heading-toggle { align-items: stretch; flex-direction: column; }\n  .damage-actions { display: grid; grid-template-columns: 1fr 1fr; }\n  .form-grid, .form-grid-three, .damage-grid { grid-template-columns: 1fr; }\n  .form-field-wide { grid-column: auto; }\n  .commitment-field ion-radio-group { grid-template-columns: 1fr 1fr; }\n  .damage-card { min-height: 0; }\n  .damage-search-confirm { position: fixed; }\n  .damage-search-confirm ion-button { min-width: 180px; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 57707:
/*!********************************************************!*\
  !*** ./src/app/culpable/culpable.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"culpable-header\">\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading\"></ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button aria-label=\"Regresar\" (click)=\"handleBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Atención #{{idAtencion}} - {{miMoneda}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"isSearchCulpable\" class=\"damage-search-content\">\n  <div class=\"damage-search-shell\">\n    <div class=\"damage-search-heading\">\n      <div>\n        <span>Catálogo de daños</span>\n        <h1>Daños comunes del vehículo</h1>\n      </div>\n      <ion-button fill=\"clear\" aria-label=\"Cerrar búsqueda\" (click)=\"closeDanioSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <ion-searchbar animated=\"true\" placeholder=\"Buscar tipo de daño\" show-clear-button=\"focus\"\n      [debounce]=\"500\" (ionInput)=\"handleInput($event)\"></ion-searchbar>\n\n    <ion-list class=\"damage-results\">\n      <ion-item button detail=\"false\" *ngFor=\"let result of resultsCulpable; let i = index\"\n        (click)=\"entraDanioCulpable(danioId.value, posicion.value)\" class=\"danio-item-culpa\"\n        [class.selected]=\"isDanioSelected(result.Id)\">\n        <ion-icon slot=\"start\" name=\"construct-outline\"></ion-icon>\n        <ion-label>{{result.Descripcion}}</ion-label>\n        <ion-icon slot=\"end\" name=\"checkmark-circle\" class=\"selected-check\"\n          *ngIf=\"isDanioSelected(result.Id)\"></ion-icon>\n        <ion-input [hidden]=\"true\" #danioId [value]=\"result.Id\" class=\"danio-entrada\"></ion-input>\n        <ion-input [hidden]=\"true\" #posicion [value]=\"i\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"damage-search-confirm\">\n      <div>\n        <strong>{{daniosSelectCulpa.length}}</strong>\n        <span>{{daniosSelectCulpa.length === 1 ? 'daño seleccionado' : 'daños seleccionados'}}</span>\n      </div>\n      <ion-button (click)=\"closeDanioSearch()\">\n        Confirmar selección\n        <ion-icon slot=\"end\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"!isSearchCulpable\" class=\"culpable-content\">\n  <div class=\"culpable-shell\">\n    <section class=\"form-intro\">\n      <div class=\"intro-icon\"><ion-icon name=\"person-circle-outline\"></ion-icon></div>\n      <div>\n        <span>Acuerdo de deuda</span>\n        <h1>Datos de la persona responsable</h1>\n        <p>Registra la información del implicado y los daños que formarán parte del reconocimiento de deuda.</p>\n      </div>\n    </section>\n\n    <section class=\"form-section damage-section\">\n      <div class=\"section-heading section-heading-actions\">\n        <div>\n          <span>Daños del vehículo</span>\n          <h2>Elementos incluidos en el acuerdo</h2>\n        </div>\n        <div class=\"damage-actions\">\n          <ion-button fill=\"outline\" (click)=\"modalDanioCulpa.present()\">\n            <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>Otro daño\n          </ion-button>\n          <ion-button (click)=\"openDanioSearch()\">\n            <ion-icon slot=\"start\" name=\"search-outline\"></ion-icon>Buscar daños\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-accordion-group [multiple]=\"true\" [value]=\"['common', 'other']\" class=\"damage-accordions\">\n        <ion-accordion value=\"common\" (click)=\"closeOtrosDanios()\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon slot=\"start\" name=\"car-sport-outline\"></ion-icon>\n            <ion-label>Daños comunes seleccionados</ion-label>\n            <ion-badge slot=\"end\">{{daniosSelectCulpa.length}}</ion-badge>\n          </ion-item>\n          <div slot=\"content\" class=\"damage-content\">\n            <p class=\"empty-damage\" *ngIf=\"daniosSelectCulpa.length === 0\">Aún no has seleccionado daños comunes.</p>\n            <div class=\"damage-grid\" *ngIf=\"daniosSelectCulpa.length > 0\">\n              <article class=\"damage-card\" *ngFor=\"let dannio of daniosSelectCulpa; let i = index\">\n                <ion-input #selectedId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\"></ion-input>\n                <input #danioInput [value]=\"dannio.Descripcion\" hidden>\n                <input #danioId [value]=\"dannio.Id\" hidden>\n                <div class=\"damage-card-heading\">\n                  <strong>{{dannio.Descripcion}}</strong>\n                  <ion-button fill=\"clear\" color=\"danger\" aria-label=\"Eliminar daño\"\n                    (click)=\"eliminaDanio(danioId.value, i, danioInput.value)\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n                <div class=\"repair-actions\">\n                  <ion-button size=\"small\" fill=\"outline\" class=\"action-change-culpable\"\n                    (click)=\"setReparacion(dannio.Id, 2, i, 1)\">Cambio</ion-button>\n                  <ion-button size=\"small\" fill=\"outline\" class=\"action-repair-culpable\"\n                    (click)=\"setReparacion(dannio.Id, 1, i, 1)\">Repara</ion-button>\n                </div>\n              </article>\n            </div>\n          </div>\n        </ion-accordion>\n\n        <ion-accordion value=\"other\" (click)=\"isXXOpen = true\">\n          <ion-item slot=\"header\" lines=\"none\">\n            <ion-icon slot=\"start\" name=\"create-outline\"></ion-icon>\n            <ion-label>Otros daños agregados</ion-label>\n            <ion-badge slot=\"end\">{{daniosSelectOtroCulpa.length}}</ion-badge>\n          </ion-item>\n          <div slot=\"content\" class=\"damage-content\">\n            <p class=\"empty-damage\" *ngIf=\"daniosSelectOtroCulpa.length === 0\">No se han agregado daños personalizados.</p>\n            <div class=\"damage-grid\" *ngIf=\"daniosSelectOtroCulpa.length > 0\">\n              <article class=\"damage-card\" *ngFor=\"let dannioX of daniosSelectOtroCulpa; let i = index\">\n                <input #danioIdXX [value]=\"dannioX.Id\" hidden>\n                <input #danioCodigoXX [value]=\"dannioX.CodigoDanioFicohsa\" hidden>\n                <input #danioTipoXX [value]=\"dannioX.TipoReparacion\" hidden>\n                <div class=\"damage-card-heading\">\n                  <strong>{{dannioX.DescripcionDeDanio}}</strong>\n                  <ion-button fill=\"clear\" color=\"danger\" aria-label=\"Eliminar daño\"\n                    (click)=\"eliminaDanioX(danioIdXX.value, i, danioTipoXX.value, danioCodigoXX.value)\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n                <div class=\"repair-actions\">\n                  <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 2 ? 'solid' : 'outline'\"\n                    (click)=\"setReparacionX(danioIdXX.value, 2, i, 1)\">Cambio</ion-button>\n                  <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 1 ? 'solid' : 'outline'\"\n                    (click)=\"setReparacionX(danioIdXX.value, 1, i, 1)\">Repara</ion-button>\n                </div>\n              </article>\n            </div>\n          </div>\n        </ion-accordion>\n      </ion-accordion-group>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\"><span>Información personal</span><h2>Conductor responsable</h2></div>\n      <div class=\"form-grid\">\n        <label class=\"form-field form-field-wide\"><span>Nombre del conductor</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.NombreCulpable\"\n            (ionChange)=\"guardaCache(0); entraNombreCulpable($event)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Número de identidad</span>\n          <ion-input type=\"text\" inputmode=\"numeric\" [(ngModel)]=\"culpableIdentidad\"\n            (ionChange)=\"guardaCache(1); entraIdentidadCulpable($event)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Edad</span>\n          <ion-input type=\"number\" inputmode=\"numeric\" [(ngModel)]=\"EdadCulpable\"\n            (ionChange)=\"guardaCache(5)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field form-field-wide\"><span>Dirección</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.DireccionCulpable\"\n            (ionChange)=\"guardaCache(2)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Teléfono</span>\n          <ion-input type=\"tel\" inputmode=\"tel\" [(ngModel)]=\"culpable.TelefonoFijoCulpable\"\n            (ionChange)=\"guardaCache(3)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Celular</span>\n          <ion-input type=\"tel\" inputmode=\"tel\" [(ngModel)]=\"culpable.CelularCulpable\"\n            (ionChange)=\"guardaCache(4)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Correo electrónico</span>\n          <ion-input type=\"email\" inputmode=\"email\" [(ngModel)]=\"culpableCorreo\"\n            (ionChange)=\"guardaCache(6); entraCorreoCulpable($event)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Lugar de trabajo</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpableTrabajo\"\n            (ionChange)=\"guardaCache(7); entraTrabajoCulpable($event)\" class=\"data-input\"></ion-input>\n        </label>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\"><span>Documento de conducción</span><h2>Licencia del conductor</h2></div>\n      <div class=\"form-grid form-grid-three\">\n        <label class=\"form-field\"><span>Tipo de licencia</span>\n          <ion-select [(ngModel)]=\"culpable.LicenciaTipoCulpable\" (ionChange)=\"guardaCache(8)\"\n            class=\"data-input-select\" interface=\"alert\" [interfaceOptions]=\"licenseSelectOptions\"\n            placeholder=\"Seleccionar\" toggleIcon=\"chevron-down-outline\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n            <ion-select-option *ngFor=\"let licencia of tipoLicencia\" [value]=\"licencia.Id\">{{licencia.TipoLicencia}}</ion-select-option>\n          </ion-select>\n        </label>\n        <label class=\"form-field\"><span>Número de licencia</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.NumeroLicenciaCulpable\"\n            (ionChange)=\"guardaCache(9)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field date-field\"><span>Fecha de vencimiento</span>\n          <ion-input id=\"vigenciaInput\" type=\"text\" inputmode=\"numeric\" placeholder=\"DD/MM/AAAA\"\n            [maskito]=\"idMaskFechaVencimiento\" [maskitoElement]=\"predicateCliente\"\n            [(ngModel)]=\"culpable.FechaVencimientoLicenciaCulpable\"\n            (ionChange)=\"entraVencimiento($event); guardaCache(10)\" class=\"data-input\"></ion-input>\n          <ion-icon *ngIf=\"isVisible\" [name]=\"vigente ? 'checkmark-circle' : 'alert-circle'\"\n            [color]=\"vigente ? 'success' : 'danger'\"></ion-icon>\n        </label>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\"><span>Vehículo implicado</span><h2>Identificación del vehículo</h2></div>\n      <div class=\"form-grid form-grid-three\">\n        <label class=\"form-field\"><span>Marca</span>\n          <ion-select [(ngModel)]=\"culpable.MarcaCulpable\"\n            (ionChange)=\"seleccionarMarcaCulpable($event); guardaCache(11)\" class=\"data-input-select\"\n            interface=\"alert\" [interfaceOptions]=\"brandSelectOptions\" placeholder=\"Seleccionar\"\n            toggleIcon=\"chevron-down-outline\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n            <ion-select-option *ngFor=\"let marca of marcasVehiculos\" [value]=\"marca.Id\">{{marca.nombre}}</ion-select-option>\n          </ion-select>\n        </label>\n        <label class=\"form-field\"><span>Modelo</span>\n          <ion-input *ngIf=\"modelosMarca.length === 0\" type=\"text\" [(ngModel)]=\"culpable.ModeloCulpable\"\n            (ionChange)=\"guardaCache(12)\" class=\"data-input\"></ion-input>\n          <ion-select *ngIf=\"modelosMarca.length > 0\" [(ngModel)]=\"culpable.ModeloCulpable\"\n            (ionChange)=\"seleccionarModeloCulpable($event); guardaCache(12)\" class=\"data-input-select\"\n            interface=\"alert\" [interfaceOptions]=\"modelSelectOptions\" placeholder=\"Seleccionar\"\n            toggleIcon=\"chevron-down-outline\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n            <ion-select-option *ngFor=\"let modelo of modelosMarca\" [value]=\"modelo\">{{modelo}}</ion-select-option>\n          </ion-select>\n        </label>\n        <label class=\"form-field\"><span>Año</span>\n          <ion-input type=\"number\" inputmode=\"numeric\" [(ngModel)]=\"culpable.AnioCulpable\"\n            (ionChange)=\"guardaCache(13)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Motor</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.MotorNoCulpable\"\n            (ionChange)=\"guardaCache(14)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Chasis</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.Chasis\"\n            (ionChange)=\"guardaCache(15)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Número de placa</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpable.NoPlacaCulpable\"\n            (ionChange)=\"guardaCache(16)\" class=\"data-input\"></ion-input>\n        </label>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading section-heading-toggle\">\n        <div><span>Propiedad y compromiso</span><h2>Responsabilidad del implicado</h2></div>\n        <ion-item lines=\"none\" class=\"owner-toggle\">\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"culpableEsPropietario\" (ionChange)=\"cambiarPropietario($event)\"></ion-checkbox>\n          <ion-label>El conductor es propietario</ion-label>\n        </ion-item>\n      </div>\n      <div class=\"form-grid\">\n        <label class=\"form-field\"><span>Nombre del propietario</span>\n          <ion-input *ngIf=\"culpableEsPropietario\" type=\"text\" [(ngModel)]=\"culpable.NombreCulpable\"\n            readonly (ionChange)=\"guardaCache(17)\" class=\"data-input\"></ion-input>\n          <ion-input *ngIf=\"!culpableEsPropietario\" type=\"text\" [(ngModel)]=\"NombrePropietario\"\n            (ionChange)=\"entraNombrePropietarioCulpable($event); guardaCache(17)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Dirección del propietario</span>\n          <ion-input *ngIf=\"culpableEsPropietario\" type=\"text\" [(ngModel)]=\"culpable.DireccionCulpable\"\n            readonly (ionChange)=\"guardaCache(18)\" class=\"data-input\"></ion-input>\n          <ion-input *ngIf=\"!culpableEsPropietario\" type=\"text\" [(ngModel)]=\"DireccionPropietario\"\n            (ionChange)=\"guardaCache(18)\" class=\"data-input\"></ion-input>\n        </label>\n        <div class=\"form-field form-field-wide commitment-field\">\n          <span>¿Hay compromiso de pago?</span>\n          <ion-radio-group [(ngModel)]=\"culpable.CompromisoPago\" (ngModelChange)=\"print(culpable.CompromisoPago); guardaCache(19)\">\n            <ion-item lines=\"none\"><ion-label>Sí</ion-label><ion-radio value=\"1\"></ion-radio></ion-item>\n            <ion-item lines=\"none\"><ion-label>No</ion-label><ion-radio value=\"2\"></ion-radio></ion-item>\n          </ion-radio-group>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"form-section\">\n      <div class=\"section-heading\"><span>Contacto y observaciones</span><h2>Información complementaria</h2></div>\n      <div class=\"form-grid\">\n        <label class=\"form-field\"><span>Nombre del contacto</span>\n          <ion-input type=\"text\" [(ngModel)]=\"culpableContacto\"\n            (ionChange)=\"entraContactoCulpable($event); guardaCache(20)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field\"><span>Número de contacto</span>\n          <ion-input type=\"tel\" inputmode=\"tel\" [(ngModel)]=\"culpableContactoNumero\"\n            (ionChange)=\"entraContactoMNumeroCulpable($event); guardaCache(21)\" class=\"data-input\"></ion-input>\n        </label>\n        <label class=\"form-field form-field-wide\"><span>Descripción de los daños</span>\n          <ion-textarea autoGrow=\"true\" rows=\"4\" [(ngModel)]=\"culpable.ObservacionesCulpable\"\n            (ionChange)=\"guardaCache(22)\" class=\"data-input\"></ion-textarea>\n        </label>\n      </div>\n    </section>\n  </div>\n</ion-content>\n\n<ion-footer class=\"culpable-footer\" *ngIf=\"!isSearchCulpable\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" (click)=\"goAdeuda()\" [disabled]=\"isLoading\">\n      Revisar acuerdo de deuda\n      <ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-modal #modalDanioCulpa class=\"damage-entry-modal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Agregar otro daño</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button aria-label=\"Cerrar\" (click)=\"modalDanioCulpa.dismiss()\"><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"damage-entry-form\">\n        <ion-label>Descripción del daño</ion-label>\n        <ion-textarea #inputDanio autoGrow=\"true\" rows=\"4\" placeholder=\"Describe el daño observado\"></ion-textarea>\n        <ion-button expand=\"block\" [disabled]=\"!inputDanio.value?.toString().trim()\"\n          (click)=\"entraDanioOtro(inputDanio.value); modalDanioCulpa.dismiss()\">\n          <ion-icon slot=\"start\" name=\"add-outline\"></ion-icon>Agregar daño\n        </ion-button>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_culpable_culpable_module_ts.js.map