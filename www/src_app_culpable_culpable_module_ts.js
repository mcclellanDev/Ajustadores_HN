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
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
    this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
      var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.poliza = localStorage.getItem('poliza');
    this.fechaFirma = localStorage.getItem('fechaFirma');
    this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
      var _ref7 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.isSearchCulpable = true;
    //this.clearStorageDanios();
    let danioContainer = document.getElementsByClassName('danio-entrada');
    if (this.daniosSelectCulpa.length > 0) {
      console.dir(danioContainer);
      setTimeout(() => {
        for (let index = 0; index < this.selectedIndex.length; index++) {
          const element = this.selectedIndex[index];
          jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-item-culpa').eq(element).addClass('selected');
        }
      }, 1000);
    }
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
    this.api.ListMarcasVehiculosFicohsa().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      this.api.Expediente(this.atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = true;
      _this3.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref11 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.danios = res;
          _this3.danioSearchable = res;
          _this3.resultsCulpable = res;
          _this3.daniosIndex = _this3.danios.length;
        });
        return function (_x6) {
          return _ref11.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref12 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x7) {
          return _ref12.apply(this, arguments);
        };
      }());
      _this3.api.ObtenerDaniosExtras(_this3.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__.Entidades[1].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref14 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          //alert('Aca bien')
          _this3.daniosExtrasCulpa = res;
        });
        return function (_x8) {
          return _ref14.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref15 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
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
    for (let index = 0; index < this.danios.length; index++) {
      const element = this.danios[index];
      console.log('Daño');
      console.dir(JSON.stringify(element));
      console.dir(element);
      console.log(element.Id + ', ' + danioId);
      console.log(element.Id === danioId);
      if (element.Id === danioId) {
        let elItem = jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-item-culpa').eq(index);
        if (elItem.hasClass("selected")) {
          this.eliminaDanio(danioId, posicion, element.Descripcion);
          elItem.removeClass('selected');
        } else {
          this.daniosSelectCulpa.push(element);
          this.contador = this.daniosSelectCulpa.length;
          localStorage.setItem('daniosSelectCulpa-' + posicion, danioId);
          elItem.addClass('selected');
        }
      }
    }
    /**/
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
              this.api.ActualizarIndexFront(elementOtr.Id, indexNew).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this4.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref17 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  console.dir(res);
                });
                return function (_x10) {
                  return _ref17.apply(this, arguments);
                };
              }());
            }
            if (indexDan == this.daniosSelectOtroCulpa.length - 1) {
              this.api.EliminaDanioExtra(danioInputId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this4.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref19 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.api.ActualizarTipoReparacion(dannioId, tipo, i).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref21 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    //alert(danioInputId+', '+index+', '+descripcion);
    console.log('El daño en tabla :');
    console.dir(this.danios[danioInputId - 1]);
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if (idE == danioInputId) {
          localStorage.removeItem(localStorage.key(i));
        }
      }
    }
    setTimeout(() => {
      for (let indexDan = 0; indexDan < this.daniosSelectCulpa.length; indexDan++) {
        const element = this.daniosSelectCulpa[indexDan];
        if (indexDan == this.daniosSelectCulpa.length - 1) {
          for (let indexDan = 0; indexDan < this.daniosSelectCulpa.length; indexDan++) {
            const elementEnd = this.daniosSelectCulpa[indexDan];
            if (elementEnd.Id === danioInputId) {
              this.daniosSelectCulpa.splice(index, 1);
              localStorage.removeItem('TipoReparacionCulpa-' + danioInputId);
              localStorage.removeItem('TipoReparacionCulpaIndex-' + danioInputId);
            }
          }
        }
        if (indexDan > index) {
          console.log('En tabla : ' + indexDan + ', ' + element.Id + ', ' + element.Descripcion + '... Seleccionado : ' + danioInputId + ', ' + index + ', ' + descripcion);
          let resta = indexDan - 1;
          let elTipo = localStorage.getItem('TipoReparacionCulpa-' + element.Id);
          //alert('el index '+indexDan+' va a cambiar a '+resta+', y su tipo es'+elTipo);
          localStorage.setItem('TipoReparacionCulpaIndex-' + element.Id, resta.toString());
          this.setReparacion(element.Id, elTipo, resta, 2);
          //
        }
      }
    }, 300);
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.api.ContarOtrosDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref23 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
          _this7.api.InsertarConvenioReparacionTallerExtra(elementOtro).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this7.isLoading = false;
          }))).subscribe( /*#__PURE__*/function () {
            var _ref25 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    this.daniosSelectCulpa = [];
    let contenedor = document.getElementsByClassName('input-index');
    let contenedorDescripcion = document.getElementsByClassName('danio-descripcion-input');
    let kikiriki = jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-descripcion-input').eq(0).val();
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        let daCode = parseInt(elCodigo); //.split('-')[1];
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
            this.daniosSelectCulpa.push(elementD);
            console.dir(elementD);
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
  }

  closeOtrosDanios() {
    this.isXXOpen = false;
  }
  recargarDaniosExtras() {
    var _this8 = this;
    this.api.ObtenerDaniosExtras(this.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_7__.Entidades[1].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref27 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this10.loading.create();
      yield load.present();
      _this10.api.TipoDeLicencia(paisIdentidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref29 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this10.tipoLicencia = res;
        });
        return function (_x16) {
          return _ref29.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref30 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
              Marca: 'this.elExpediente[0].Marca',
              Modelo: 'this.elExpediente[0].Modelo',
              Anio: 'this.elExpediente[0].Year',
              Placa: 'this.elExpediente[0].NumeroPlaca',
              NombreAsegurado: 'this.elExpediente[0].Cliente',
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
              Ciudad: 'this.elExpediente[0].Ciudad',
              TelefonoCulpable: this.culpable.TelefonoFijoCulpable.toString(),
              LicenciaCulpable: this.culpable.NumeroLicenciaCulpable,
              TipoLicencia: this.culpable.LicenciaTipoCulpable.toString(),
              FechaVencimientoLicencia: vigenteDate,
              NombreDireccionPropietarioVehiculoImplicado: this.CulpableDireccion,
              RefTipoFotografiaIdAdeudado: 0,
              RefTipoFotografiaIdBeneficiario: 0,
              CompromisoDePago: parseInt(this.culpable.CompromisoPago),
              Observaciones: this.culpable.ObservacionesCulpable
            };
            // NombrePersonaPropiedadImplicada  // NombreDireccionPropietarioVehiculoImplicado
            //this.reconocimientoDeuda.NombrePersonaPropiedadImplicada = $('.data-input').eq(14).val();
            this.reconocimientoDeuda.NombreDireccionPropietarioVehiculoImplicado = jquery__WEBPACK_IMPORTED_MODULE_6__('.data-input').eq(15).val();
            setTimeout(() => {
              console.log('Los daños');
              console.dir(this.daniosSelectCulpa);
              console.dir(this.reconocimientoDeuda);
              localStorage.setItem('deuda', JSON.stringify(this.reconocimientoDeuda));
              localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));
              localStorage.setItem('poliza', this.poliza);
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n  --color-checked: #7da1c4;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-label {\n  color: var(--blueGrayColor);\n  font-size: 1.1rem;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: white;\n  color: white;\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n  color: white;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #7da1c4;\n  border-color: transparent;\n}\n\nion-checkbox {\n  --checkbox-background-checked: #7da1c4;\n  width: 26px;\n  height: 26px;\n  border-radius: 30px;\n  --color-checked: #7da1c4;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#d-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-toolbar {\n  background: white !important;\n}\nion-toolbar .toolbar-content {\n  background: white !important;\n}\n\n.close-search {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.selected {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-alert button {\n  background: red;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #7da1c4;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #7da1c4;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #7da1c4;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-datetime {\n  --background-rgb: white;\n  width: 100%;\n  border-radius: 16px;\n  box-shadow: rgba(128, 128, 128, 0.3) 0px 10px 15px -3px;\n}\n\nion-badge {\n  font-size: 1rem;\n  padding: 6px;\n}\n\nion-button {\n  color: white;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane-cliente {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n}\n\n.data-input::part(text) {\n  color: black;\n}\n\n.data-input {\n  text-transform: uppercase;\n}\n\n.text-uppercase {\n  text-transform: uppercase;\n}\n\n.modal-fecha-input .modal-wrapper {\n  width: 30%;\n}\n\n.modal-fecha-input .modal-wrapper {\n  height: 30%;\n  width: 90%;\n  border-radius: 15px;\n}\n\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n/*\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n*/", "",{"version":3,"sources":["webpack://./src/app/culpable/culpable.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,wBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,2BAAA;EACA,iBAAA;AACJ;;AAEE;EACE,cAAA;EACA,wBAAA;AACJ;;AAEE;EACE,WAAA;AACJ;;AAEE;;EAEE,wBAAA;EAEA,iBAAA;AAAJ;;AAGE;;EAEE,oCAAA;EACA,cAAA;EACA,YAAA;AAAJ;;AAIE;;EAEE,qBAAA;EACA,cAAA;EACA,YAAA;AADJ;;AAIE;EACE,mBAAA;EACA,yBAAA;AADJ;;AAIE;EACM,sCAAA;EACJ,WAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;AADJ;;AAIE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AAHJ;;AAKE;EACE,cAAA;EACA,gBAAA;AAFJ;;AAKE;EACE,yBAAA;EACA,wCAAA;AAFJ;;AAME;EACE,4BAAA;AAHJ;AAIE;EACE,4BAAA;AAFJ;;AAMA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAHF;;AAMA;EACE,qBAAA;EACA,cAAA;AAHF;;AAMI;EACE,eAAA;AAHN;;AAOE;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AAvBJ;AAGI;EACE,YAAA;AADN;AAGI;EACE,mBAAA;AADN;AAKI;EACE,WAAA;AAHN;AAMI;EACE,cAAA;AAJN;AAOI;EACE,WAAA;AALN;AASI;EACE,cAAA;AAPN;AAUI;EACE,WAAA;AARN;AAWI;EACE,mBAAA;AATN;;AAeA;EACE,kBAAA;EACA,kBAAA;AAZF;AAaE;EACE,oBAAA;AAXJ;AAYI;EAAS,YAAA;AATb;;AAaA;EACE,uBAAA;EACA,WAAA;EACA,mBAAA;EACA,uDAAA;AAVF;;AAaA;EACE,eAAA;EACA,YAAA;AAVF;;AAcA;EACE,YAAA;AAXF;;AAcA;EACE,iBAAA;EACA,qBAAA;AAXF;;AAcA;EACE,iBAAA;EACE,qBAAA;AAXJ;;AAcA;EACE,iBAAA;AAXF;;AAcA;EACE,YAAA;AAXF;;AAeA;EACE,yBAAA;AAZF;;AAeA;EACE,yBAAA;AAZF;;AAiBE;EACE,UAAA;AAdJ;;AAmBE;EACC,WAAA;EACA,UAAA;EACA,mBAAA;AAhBH;;AAoBA;EACI,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAjBJ;;AAmBE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAhBN;;AAoBE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAjBN;;AAmBA;;;;;;;;;CAAA","sourcesContent":["ion-radio {\r\n    width: 30px;\r\n    height: 30px;\r\n    --color-checked: #7da1c4;\r\n  }\r\n  \r\n  ion-radio::part(container) {\r\n    border-radius: 8px;\r\n    border: 2px solid #ddd;\r\n  }\r\n  \r\n  ion-radio::part(mark) {\r\n    background: none;\r\n    transition: none;\r\n    transform: none;\r\n    border-radius: 0;\r\n  }\r\n\r\n  ion-label {\r\n    color: var(--blueGrayColor);\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  ion-accordion {\r\n    margin: 0 auto;\r\n    --width: 100% !important;\r\n  }\r\n\r\n  ion-accordion-group {\r\n    width: 100%;\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding,\r\n  ion-accordion.accordion-expanded {\r\n    width: calc(100% - 32px);\r\n  \r\n    margin: 16px auto;\r\n  }\r\n  \r\n  ion-accordion.accordion-collapsing ion-item[slot='header'],\r\n  ion-accordion.accordion-collapsed ion-item[slot='header'] {\r\n    --background: var(--ion-color-light);\r\n    --color: white;//var(--ion-color-light-contrast);\r\n    color: white;\r\n\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding ion-item[slot='header'],\r\n  ion-accordion.accordion-expanded ion-item[slot='header'] {\r\n    --background: #7da1c4;//var(--ion-color-primary);\r\n    --color: white;//var(--ion-color-primary-contrast);\r\n    color: white;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(container) {\r\n    background: #7da1c4;\r\n    border-color: transparent;\r\n  }\r\n\r\n  ion-checkbox {\r\n        --checkbox-background-checked: #7da1c4;\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 30px;\r\n    --color-checked: #7da1c4;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(mark) {\r\n    width: 6px;\r\n    height: 10px;\r\n  \r\n    border-width: 0px 2px 2px 0px;\r\n    border-style: solid;\r\n    border-color: #fff;\r\n  \r\n    transform: rotate(45deg);\r\n  }\r\n  canvas {\r\n    border: groove;\r\n    padding-top: 2px;\r\n  }\r\n\r\n  #d-toolbar{\r\n    --background: transparent;\r\n    --ion-color-base: transparent !important;\r\n    \r\n  }\r\n\r\n  ion-toolbar{\r\n    background: white !important;\r\n  .toolbar-content{\r\n    background: white !important;\r\n  }\r\n}\r\n\r\n.close-search{\r\n  --background: #f14f23;\r\n  --background-activated: #a8462a;\r\n  --background-hover: #f66e48;\r\n  --border-radius: 15px;\r\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n  --color: white;\r\n}\r\n\r\n.selected{\r\n  --background: #7da1c4;\r\n  --color: white;\r\n}\r\n  ion-alert{\r\n    button{\r\n      background: red;\r\n    }\r\n  }\r\n    \r\n  ion-segment {\r\n    --background: rgb(232, 231, 231);\r\n    ion-segment-button{\r\n      color: white;\r\n    }\r\n    ion-segment-button::part(indicator-background) {\r\n      background: #7da1c4;\r\n    }\r\n    \r\n    /* Material Design styles */\r\n    ion-segment-button.md::part(native) {\r\n      color: #000;\r\n    }\r\n    \r\n    .segment-button-checked.md::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    ion-segment-button.md::part(indicator-background) {\r\n      height: 4px;\r\n    }\r\n    \r\n    /* iOS styles */\r\n    ion-segment-button.ios::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    .segment-button-checked.ios::part(native) {\r\n      color: #fff;\r\n    }\r\n    \r\n    ion-segment-button.ios::part(indicator-background) {\r\n      border-radius: 20px;\r\n    }\r\n  }\r\n\r\n\r\n  \r\n#button-back{\r\n  border-radius: 50%;\r\n  margin-bottom: 9px;\r\n  ion-fab-button{\r\n    padding-bottom: 25px;\r\n    ion-icon{color: white;}\r\n  }\r\n}\r\n\r\nion-datetime {\r\n  --background-rgb: white;\r\n  width: 100%;\r\n  border-radius: 16px;\r\n  box-shadow: rgba(gray, 0.3) 0px 10px 15px -3px;\r\n}\r\n\r\nion-badge{\r\n  font-size: 1rem;\r\n  padding: 6px;\r\n  //width: 130px;\r\n}\r\n\r\nion-button{\r\n  color: white;\r\n}\r\n\r\nion-split-pane {\r\n  --side-width: 50%;\r\n  --side-max-width: 50%;\r\n}\r\n\r\n#big-pane-cliente{\r\n  --side-width: 82%;\r\n    --side-max-width: 82%;\r\n}\r\n\r\nion-select::part(text) {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.data-input::part(text) {\r\n  color: black;\r\n  \r\n}\r\n\r\n.data-input{\r\n  text-transform: uppercase;\r\n}\r\n\r\n.text-uppercase{\r\n  text-transform: uppercase;\r\n}\r\n\r\n.modal-fecha-input\r\n{ \r\n  .modal-wrapper{\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n.modal-fecha-input{\r\n  .modal-wrapper{\r\n   height: 30%;\r\n   width: 90%;\r\n   border-radius: 15px;\r\n }\r\n}\r\n\r\nion-fab-button {\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n  ion-spinner{\r\n    position: fixed;\r\n      top: 28%;\r\n      left: 40%;\r\n      z-index: 999;\r\n      width: 20%;\r\n      height: 20%;\r\n    //background-color: #00213f;\r\n  }\r\n  \r\n  #spinFooter{\r\n    position: fixed;\r\n      background: black;\r\n      opacity: 0.6;\r\n      height: 100vh;\r\n      width: 100vw;\r\n      z-index: 900;\r\n      bottom: 0;\r\n  }\r\n/*\r\nion-fab-button {\r\n  --background: #f14f23;\r\n  --background-activated: #a8462a;\r\n  --background-hover: #f66e48;\r\n  --border-radius: 15px;\r\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n  --color: white;\r\n}\r\n*/\r\n\r\n "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 57707:
/*!********************************************************!*\
  !*** ./src/app/culpable/culpable.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!--ion-back-button></!--ion-back-button -->\r\n      <ion-button id=\"submitClaim\" style=\"position: relative;width: 40px;height: 30px; z-index: 999;--background: transparent;\r\n          --background-activated: transparent;\r\n          --background-hover: transparent;\r\n          --border-radius: 15px;\r\n          --color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"handleBack()\">\r\n            <ion-icon style=\"font-size: 2rem; color: white;\" name=\"chevron-back\"></ion-icon>\r\n          </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"></ion-col>\r\n          <ion-col size=\"4\">Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"4\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSearchCulpable\" class=\"ion-padding\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <ion-badge>\r\n          Daños Comunes A Vehículos\r\n        </ion-badge>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button class=\"close-search\" style=\"float: right ;\" (click)=\"closeDanioSearch()\">\r\n          <ion-icon name=\"return-up-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-searchbar animated=\"true\" placeholder=\"Escribe un Daño de Vehículo\" show-clear-button=\"focus\" show-cancel-button=\"focus\" cancel-button-text=\"Cancelar\"\r\n  cancel-button-icon=\"trash-bin\" [debounce]=\"1000\" (ionInput)=\"handleInput($event)\"></ion-searchbar>\r\n\r\n  <ion-content color=\"light\">\r\n    <ion-list [inset]=\"true\" style=\"width: 97%;\">\r\n      <ion-item *ngFor=\"let result of resultsCulpable; let i = index\" (click)=\"entraDanioCulpable(danioId.value, posicion.value)\" style=\"padding-left: 10px;border-radius:9px;\"\r\n      class=\"danio-item-culpa\">\r\n        {{ result.Descripcion }}\r\n        <ion-input [hidden]=\"true\" #danioId [value]=\"result.Id\" class=\"danio-entrada\"></ion-input>\r\n        <ion-input [hidden]=\"true\" #posicion [value]=\"i\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"color: white;\">Ajustadores Ficohsa por Porsalud</ion-item>\r\n      <br><br><br>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"!isSearchCulpable\">\r\n\r\n    <ion-list style=\"width: 95%; margin-left:2%;margin-top: 3%;\">\r\n\r\n<ion-label class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n              <ion-badge color=\"primary\">\r\n                Datos Culpable\r\n              </ion-badge>\r\n            </ion-label>\r\n    \r\n            <ion-item class=\"ion-no-padding  input\">\r\n              <ion-grid class=\"ion-no-grid\">\r\n                <ion-row>\r\n                  <ion-col offset=\"4\" size=\"8\" style=\"text-align: right;\">\r\n                    <ion-button size=\"default\" (click)=\"modalDanioCulpa.present()\">\r\n                      Agregar Tipo de Daño.\r\n                    <ion-icon class=\"icono-buscar\" name=\"add-circle\" style=\"margin-left: 6px;\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button size=\"default\" (click)=\"openDanioSearch()\">\r\n                      Buscar Tipos de Daño.\r\n                    <ion-icon class=\"icono-buscar\" name=\"search-outline\" style=\"margin-left: 6px;\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-accordion-group #accordionGroupXX id=\"accordionGroupXX\" [multiple]=\"false\" [value]=\"['first']\">\r\n                  <ion-accordion #danioAccordion value=\"first\" (click)=\"closeOtrosDanios()\">\r\n                    <ion-item slot=\"header\" style=\"color: white;\">\r\n                      <ion-label>Daños Seleccionados Implicado</ion-label>\r\n                    </ion-item>\r\n                    <div class=\"ion-padding\" slot=\"content\">\r\n                      <ion-row *ngIf=\"daniosSelectCulpa.length > 0\">\r\n                        <ion-card style=\"margin: 0;padding: 0;width: 100%;\">\r\n                          <ion-card-header>\r\n                            <ion-card-title>Lista de Daños Seleccionados Implicado</ion-card-title>\r\n                          </ion-card-header>\r\n\r\n                          <ion-card-content>\r\n                            <ion-grid class=\"ion-no-padding\">\r\n                              <ion-row>\r\n                                <ion-col size=\"3\" *ngFor=\"let dannio of daniosSelectCulpa;let i = index\">\r\n                                  <ion-card>\r\n                                    <ion-input #selectedId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\"></ion-input>\r\n                                    <input #danioInput [value]=\"dannio.Descripcion\" hidden>\r\n                                    <input #danioIdInput [value]=\"i\" class=\"input-index\" hidden>\r\n                                    <input #danioId [value]=\"dannio.Id\" class=\"danio-id\" hidden>\r\n\r\n                                    <ion-grid>\r\n                                      <ion-row>\r\n                                        <ion-col size=\"10\" style=\"color: gray;\">\r\n                                          {{dannio.Descripcion}}\r\n                                        </ion-col>\r\n                                        <ion-col size=\"2\">\r\n                                          <ion-icon color=\"danger\" name=\"trash-bin\" style=\"font-size: 2rem;\" (click)=\"eliminaDanio(danioId.value, i, danioInput.value)\"></ion-icon>\r\n                                        </ion-col>\r\n                                      </ion-row>\r\n                                      <br>\r\n                                      <ion-row style=\"width: 100%;\">\r\n                                        <ion-col size=\"2\"></ion-col>\r\n                                        <ion-col size=\"5\">\r\n                                          <ion-button size=\"small\" fill=\"outline\" class=\"action-change-culpable\" style=\"color: #0058CB;width: 100%;\" (click)=\"setReparacion(dannio.Id, 2, i, 1)\">Cambio</ion-button>\r\n                                        </ion-col>\r\n                                        <ion-col size=\"5\">\r\n                                          <ion-button size=\"small\" fill=\"outline\" class=\"action-repair-culpable\" style=\"color: #7da1c4;width: 100%;\" (click)=\"setReparacion(dannio.Id, 1, i, 1)\">Repara</ion-button>\r\n                                        </ion-col>\r\n                                      </ion-row>\r\n                                    </ion-grid>\r\n\r\n                                  </ion-card>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                          </ion-card-content>\r\n                        </ion-card>\r\n                      </ion-row>\r\n                    </div>\r\n                  </ion-accordion>\r\n\r\n                  <ion-accordion #danioAccordionXX value=\"second\" (click)=\"isXXOpen = true\">\r\n                    <ion-item slot=\"header\" style=\"color: white;\">\r\n                      <ion-label>Daños Otros Implicado</ion-label>\r\n                    </ion-item>\r\n                    <div class=\"ion-padding\" slot=\"content\">\r\n                      <ion-row *ngIf=\"daniosSelectOtroCulpa.length > 0\"> \r\n                        <ion-card style=\"margin: 0;padding: 0;width: 100%;\">\r\n                          <ion-card-header>\r\n                            <ion-card-title>Lista de Daños Otros Seleccionados</ion-card-title>\r\n                          </ion-card-header>\r\n\r\n                          <ion-card-content>\r\n                            <ion-grid class=\"ion-no-padding\">\r\n                              <ion-row>\r\n                                <ion-col size=\"3\" *ngFor=\"let dannioX of daniosSelectOtroCulpa;let i = index\">\r\n                                  <ion-card>\r\n                                    <ion-input #selectedIdXX [hidden]=\"true\" [value]=\"dannioX.Id\" class=\"danio-input-xx\"></ion-input>\r\n                                    <input #danioInputXX [value]=\"dannioX.DescripcionDeDanio\" hidden>\r\n                                    <input #danioIdInputXX [value]=\"i\" class=\"input-index-xx\" hidden>\r\n                                    <input #danioIdXX [value]=\"dannioX.Id\" class=\"danio-id-xx\" hidden>\r\n                                    <input #danioCodigoXX [value]=\"dannioX.CodigoDanioFicohsa\" class=\"danio-code-xx\" hidden>\r\n                                    <input #danioTipoXX [value]=\"dannioX.TipoReparacion\" class=\"danio-tipo-xx\" hidden>\r\n                                    <ion-grid>\r\n                                      <ion-row>\r\n                                        <ion-col size=\"10\" style=\"color: gray;\">\r\n                                          {{dannioX.DescripcionDeDanio}}\r\n                                        </ion-col>\r\n                                        <ion-col size=\"2\">\r\n                                          <ion-icon color=\"danger\" name=\"trash-bin\" style=\"font-size: 2rem;\" (click)=\"eliminaDanioX(danioIdXX.value, i, danioTipoXX.value, danioCodigoXX.value)\"></ion-icon>\r\n                                        </ion-col>\r\n                                      </ion-row>\r\n                                      <br>\r\n                                      <ion-row style=\"width: 100%;\">\r\n                                        <ion-col size=\"2\"></ion-col>\r\n                                        <ion-col size=\"5\">\r\n                                          <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 1 ? 'outline' : 'solid'\" class=\"action-change-xx\" color=\"primary\" style=\"color: #0058CB;width: 100%;\" (click)=\"setReparacionX(danioIdXX.value, 2, i, 1)\">Cambio</ion-button>\r\n                                        </ion-col>\r\n                                        <ion-col size=\"5\">\r\n                                          <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 2 ? 'outline' : 'solid'\" class=\"action-repair-xx\" color=\"primary\" style=\"color: #7da1c4;width: 100%;\" (click)=\"setReparacionX(danioIdXX.value, 1, i, 1)\">Repara</ion-button>\r\n                                        </ion-col>\r\n                                      </ion-row>\r\n                                    </ion-grid>\r\n                                  </ion-card>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                          </ion-card-content>\r\n                        </ion-card>\r\n                      </ion-row>\r\n                    </div>\r\n                  </ion-accordion>\r\n                </ion-accordion-group>\r\n\r\n                <!--ion-row *ngIf=\"daniosSelectCulpa.length > 0\" style=\"margin:0;padding:0;\"> \r\n                  <ion-card class=\"ion-no-grid\" style=\"margin: 0;padding: 0;width: 100%;\">\r\n                    <ion-card-header>\r\n                      <ion-card-title>Lista de Daños Seleccionados</ion-card-title>\r\n                    </ion-card-header>\r\n                  \r\n                    <ion-card-content>\r\n                    <ion-grid class=\"ion-no-padding\">\r\n                      <ion-row>\r\n                        <ion-col size=\"3\" *ngFor=\"let dannio of daniosSelectCulpa;let i = index\">\r\n                          <ion-card>\r\n                          <ion-input #selectedId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\"></ion-input>\r\n                          \r\n                              <ion-input #danioInputId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\"></ion-input>\r\n                              <input #danioInput [value]=\"dannio.Descripcion\" hidden class=\"danio-descripcion-input\">\r\n                              <input #danioIdInput [value]=\"i\" class=\"input-index\" hidden>\r\n                              <input #danioId [value]=\"dannio.Id\" class=\"danio-id\" hidden>\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <ion-col size=\"10\" style=\"color: gray;\">\r\n                                    {{dannio.Descripcion}}\r\n                                  </ion-col>\r\n                                  <ion-col size=\"2\">\r\n                                    <ion-icon color=\"danger\" name=\"trash-bin\" style=\"font-size: 2rem;\" (click)=\"eliminaDanio(danioInputId.value, i, danioInput.value)\"></ion-icon>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <br>\r\n                                <ion-row style=\"width: 100%;\">\r\n                                  <ion-col size=\"2\"></ion-col>\r\n                                  <ion-col size=\"5\">\r\n                                    <ion-button size=\"small\" fill=\"outline\" class=\"action-change-culpable\" style=\"color: #0058CB;width: 100%;\" (click)=\"setReparacion(dannio.Id, 2, i, 1)\">Cambio</ion-button>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"5\">\r\n                                    <ion-button size=\"small\" fill=\"outline\" class=\"action-repair-culpable\" style=\"color: #7da1c4;width: 100%;\" (click)=\"setReparacion(dannio.Id, 1, i, 1)\">Repara</ion-button>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </ion-card>\r\n                               \r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n  \r\n                  \r\n                </!--ion-row -->\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            \r\n\r\n            <ion-list>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.NombreCulpable\" (ionChange)=\"guardaCache(0); entraNombreCulpable($event)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Nombre del conductor</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              \r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpableIdentidad\" (ionChange)=\"guardaCache(1); entraIdentidadCulpable($event)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Identidad Número</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.DireccionCulpable\" (ionChange)=\"guardaCache(2);\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Dirección</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.TelefonoFijoCulpable\" (ionChange)=\"guardaCache(3);\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Teléfono</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.CelularCulpable\" (ionChange)=\"guardaCache(4);\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Celular</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [maskito]=\"yearMask\" [maskitoElement]=\"predicateCliente\" [(ngModel)]=\"EdadCulpable\" (ionChange)=\"guardaCache(5);\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Edad (Años)</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"email\" [(ngModel)]=\"culpableCorreo\" (ionChange)=\"guardaCache(6);entraCorreoCulpable($event)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Correo electrónico</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"email\" [(ngModel)]=\"culpableTrabajo\" (ionChange)=\"guardaCache(7);\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Lugar De Trabajo</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -28px;\" class=\"input\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-chip id=\"driverTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4.5%; font-size: 1rem;\r\n                      color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%; height: 40px;\">\r\n                      Seleccionar\r\n                    </ion-chip>\r\n                    <ion-col size=\"3\">\r\n                      <ion-label style=\"margin-left: 0px; color: var(--blueGrayColor); text-transform: uppercase;\">\r\n                        Tipo de licencia\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"9\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"8\">\r\n                            {{TipoDeLicencia}}\r\n                          </ion-col>\r\n                          <ion-col size=\"4\">\r\n                            <ion-select class=\"text-size-xs\" [(ngModel)]=\"culpable.LicenciaTipoCulpable\" multiple=\"false\" (ionChange)=\"guardaCache(8)\"  style=\"float: right;color: white;\">\r\n                              <ion-select-option *ngFor=\"let licencia of tipoLicencia\" [value]=\"licencia.Id\">\r\n                                {{licencia.TipoLicencia}}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.NumeroLicenciaCulpable\" (ionChange)=\"guardaCache(9)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Licencia</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input id=\"vigenciaInput\" labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":DD/MM/AA\" \r\n                type=\"text\" [maskito]=\"idMaskFechaVencimiento\" [maskitoElement]=\"predicateCliente\" [(ngModel)]=\"culpable.FechaVencimientoLicenciaCulpable\"\r\n                (ionChange)=\"entraVencimiento($event);guardaCache(10)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" [color]=\"colorVigente ? 'primary' : 'danger'\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Fecha de vencimiento</ion-label>\r\n                </ion-input>\r\n                <ion-icon slot=\"start\" [hidden]=\"isVisible==false\" [name]=\"vigente ? 'checkmark-circle-sharp' : 'alert-circle-sharp'\" aria-hidden=\"true\" [color]=\"vigente ? 'success' : 'danger'\" \r\n              style=\"float: right; right: 0%;font-size: 2rem;z-index: 1090;position: absolute;\"\r\n                            (click)=\"'toggleVisual()'\">\r\n                          </ion-icon>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -28px;\" class=\"input\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-chip id=\"driverTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4.5%; font-size: 1rem;\r\n                      color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%; height: 40px;\">\r\n                      Seleccionar\r\n                    </ion-chip>\r\n                    <ion-col size=\"3\">\r\n                      <ion-label style=\"margin-left: 0px; color: var(--blueGrayColor); text-transform: uppercase;\">\r\n                        Marca\r\n                        \r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"9\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"8\">\r\n                            {{culpable.MarcaCulpable}}\r\n                          </ion-col>\r\n                          <ion-col size=\"4\">\r\n                            <ion-select class=\"text-size-xs data-input-select\" [(ngModel)]=\"culpable.MarcaCulpable\" multiple=\"false\" (ionChange)=\"seleccionarMarcaCulpable($event);guardaCache(11)\" multiple=\"false\" style=\"float: right;color: white;\">\r\n                              <ion-select-option *ngFor=\"let marca of marcasVehiculos\" [value]=\"marca.Id\">\r\n                                {{marca.nombre}}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input *ngIf=\"modelosMarca.length == 0\" labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"email\" [(ngModel)]=\"culpable.ModeloCulpable\" (ionChange)=\"guardaCache(12)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Modelo</ion-label>\r\n                </ion-input>\r\n                <ion-select *ngIf=\"modelosMarca.length > 0\" class=\"text-size-xs data-input-select\" [(ngModel)]=\"culpable.ModeloCulpable\" multiple=\"false\" (ionChange)=\"seleccionarModeloCulpable($event);guardaCache(12)\">\r\n                  <ion-select-option *ngFor=\"let modelo of modelosMarca\"  [value]=\"modelo\">{{modelo}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                [maskito]=\"yearMask\" [maskitoElement]=\"predicateCliente\" [(ngModel)]=\"culpable.AnioCulpable\" (ionChange)=\"guardaCache(13)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Año</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.MotorNoCulpable\" (ionChange)=\"guardaCache(14)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Motor No.</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.Chasis\" (ionChange)=\"guardaCache(15)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Chasis No.</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpable.NoPlacaCulpable\" (ionChange)=\"guardaCache(16)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    No. de placa</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <ion-item style=\"border: none;\" no-lines>\r\n                <br>\r\n                <ion-checkbox slot=\"end\" [ngModel]=\"culpableEsPropietario\" (ionChange)=\"cambiarPropietario($event)\" labelPlacement=\"end\"></ion-checkbox>\r\n                <span style=\"position: absolute;right: 4%;top: 4px;color: #7da1c4;\">\r\n                  El conductor es el propietario?</span>\r\n              </ion-item>\r\n              \r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                *ngIf=\"culpableEsPropietario == true\" type=\"text\" [(ngModel)]=\"culpable.NombreCulpable\" readonly (ionChange)=\"guardaCache(17)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Nombre del propietario</ion-label>\r\n                </ion-input>\r\n\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                *ngIf=\"culpableEsPropietario == false\" type=\"text\" [(ngModel)]=\"NombrePropietario\" (ionChange)=\"entraNombrePropietarioCulpable($event);guardaCache(17)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Nombre del propietario</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                *ngIf=\"culpableEsPropietario == true\" type=\"text\" [(ngModel)]=\"culpable.DireccionCulpable\" readonly (ionChange)=\"guardaCache(18)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Dirección del propietario</ion-label>\r\n                </ion-input>\r\n\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                *ngIf=\"culpableEsPropietario == false\" type=\"text\" [(ngModel)]=\"DireccionPropietario\" (ionChange)=\"guardaCache(18)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Dirección del propietario</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <br>\r\n              <ion-label style=\"text-transform: uppercase;\">\r\n                ¿Hay compromiso de pago?</ion-label>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-radio-group [(ngModel)]=\"culpable.CompromisoPago\" (ngModelChange)=\"print(culpable.CompromisoPago);guardaCache(19)\"\r\n                style=\"float: right; position: absolute; right: 0;\">\r\n                  <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                    <ion-label style=\"margin-right: 3px;\">No</ion-label>\r\n                    <ion-radio value=\"2\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                  <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                    <ion-label style=\"margin-right: 3px;\">Si</ion-label>\r\n                    <ion-radio value=\"1\"></ion-radio>\r\n                  </ion-item>\r\n\r\n                </ion-radio-group>  \r\n              </ion-item>\r\n\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpableContacto\" (ionChange)=\"entraContactoCulpable($event);guardaCache(20)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Nombre De Contacto</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n              <br>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-input labelPlacement=\"stacked\" label=\"Nombre\" placeholder=\":\" \r\n                type=\"text\" [(ngModel)]=\"culpableContactoNumero\" (ionChange)=\"entraContactoMNumeroCulpable($event);guardaCache(21)\"\r\n                class=\"data-input\">\r\n                  <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor);\">\r\n                    Numero De Contacto</ion-label>\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <br>\r\n              <ion-label slot=\"start\" style=\"max-width: 100%;width: 25%; color: var(--blueGrayColor); text-transform: uppercase;\">\r\n                Descripción de los Daños</ion-label>\r\n              <ion-item style=\"margin-left: -18px;\" class=\"input\">\r\n                <ion-textarea class=\"data-input\" rows=\"5\" columns=\"1\" style=\"width: 100%;\" type=\"text\" [(ngModel)]=\"culpable.ObservacionesCulpable\" (ionChange)=\"guardaCache(22)\"></ion-textarea>\r\n              </ion-item>\r\n            </ion-list> <!-- Acá -->\r\n            <br>\r\n            <ion-grid style=\"color: white;\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">Ajustadores Por Salud</ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <br><br><br>\r\n\r\n    </ion-list>\r\n\r\n    <ion-footer style=\"position: fixed; bottom: 0;left:0;height:auto;\">\r\n      <!--ion-fab *ngIf=\"true\" style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button [disabled]=\"deudaSent==true\" (click)=\"goAdeuda()\">\r\n          <ion-icon name=\"chevron-forward\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab -->\r\n\r\n      <ion-button id=\"validateButtonCulpa\" style=\"position: fixed;width: 200px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\r\n      --background-activated: var(--blueGrayColor);\r\n      --background-hover: var(--blueGrayColor);\r\n      --border-radius: 15px;\r\n      --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n      --color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"goAdeuda()\">\r\n        Enviar\r\n      </ion-button>\r\n    </ion-footer>\r\n\r\n</ion-content>\r\n\r\n<ion-modal trigger=\"modal-danio-culpa\" #modalDanioCulpa class=\"danio-otro\">\r\n  <ng-template>\r\n    <ion-content>\r\n      \r\n\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Agregue Un Daño </ion-label>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label >\r\n                Describa el daño</ion-label>\r\n              <ion-input #inputDanio type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-col size=\"12\">\r\n              <ion-button style=\"color: white;\" (click)=\"entraDanioOtro(inputDanio.value);modalDanioCulpa.dismiss()\" expand=\"block\" shape=\"round\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-col>\r\n            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_culpable_culpable_module_ts.js.map