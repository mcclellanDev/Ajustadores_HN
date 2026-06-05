(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_segmento-danio_segmento-danio_module_ts"],{

/***/ 78434:
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _press_press_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./press/press.directive */ 32419);




let DirectivesModule = class DirectivesModule {};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [_press_press_directive__WEBPACK_IMPORTED_MODULE_0__.PressDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  exports: [_press_press_directive__WEBPACK_IMPORTED_MODULE_0__.PressDirective]
})], DirectivesModule);


/***/ }),

/***/ 32419:
/*!*****************************************************!*\
  !*** ./src/app/directives/press/press.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressDirective": () => (/* binding */ PressDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


let PressDirective = class PressDirective {
  constructor() {
    this.press = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pressGesture = {
      name: 'press',
      enabled: false,
      interval: 251
    };
    this.pressTimeout = null;
    this.isPressing = false;
    this.lasTap = 0;
    this.tapCount = 0;
    this.tapTimeout = null;
  }
  ngOnInit() {
    this.pressGesture.enabled = true;
  }
  onPress(event) {
    console.log(event);
    if (!this.pressGesture.enabled) {
      return;
    }
    this.handlePressing(event.type);
  }
  handlePressing(type) {
    if (type == 'touchstart') {
      this.pressTimeout = setTimeout(() => {
        this.isPressing = true;
        this.press.emit('start');
      }, this.pressGesture.interval);
    } else if (type == 'touchend') {
      clearTimeout(this.pressTimeout);
      this.press.emit('end');
      this.resetTaps();
    }
    setTimeout(() => {
      this.isPressing = false;
    }, 50);
  }
  resetTaps() {
    clearTimeout(this.tapTimeout);
    this.tapCount = 0;
    this.tapTimeout = null;
    this.lasTap = 0;
  }
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      press: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
      }],
      onPress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
        args: ['touchstart', ['event']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
        args: ['touchend', ['event']]
      }]
    };
  }
};
PressDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appPress]'
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], PressDirective);


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

/***/ 57574:
/*!*****************************************************************!*\
  !*** ./src/app/segmento-danio/segmento-danio-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoDanioPageRoutingModule": () => (/* binding */ SegmentoDanioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _segmento_danio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmento-danio.page */ 90901);




const routes = [{
  path: '',
  component: _segmento_danio_page__WEBPACK_IMPORTED_MODULE_0__.SegmentoDanioPage
}];
let SegmentoDanioPageRoutingModule = class SegmentoDanioPageRoutingModule {};
SegmentoDanioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], SegmentoDanioPageRoutingModule);


/***/ }),

/***/ 37980:
/*!*********************************************************!*\
  !*** ./src/app/segmento-danio/segmento-danio.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoDanioPageModule": () => (/* binding */ SegmentoDanioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../directives/directives.module */ 78434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _segmento_danio_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-danio-routing.module */ 57574);
/* harmony import */ var _segmento_danio_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-danio.page */ 90901);








let SegmentoDanioPageModule = class SegmentoDanioPageModule {};
SegmentoDanioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _segmento_danio_routing_module__WEBPACK_IMPORTED_MODULE_1__.SegmentoDanioPageRoutingModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule],
  declarations: [_segmento_danio_page__WEBPACK_IMPORTED_MODULE_2__.SegmentoDanioPage]
})], SegmentoDanioPageModule);


/***/ }),

/***/ 90901:
/*!*******************************************************!*\
  !*** ./src/app/segmento-danio/segmento-danio.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentoDanioPage": () => (/* binding */ SegmentoDanioPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _segmento_danio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmento-danio.page.html?ngResource */ 798);
/* harmony import */ var _segmento_danio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segmento-danio.page.scss?ngResource */ 20625);
/* harmony import */ var _segmento_danio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_segmento_danio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _interfaces_extras__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interfaces/extras */ 33105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_signatures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/signatures */ 88538);












let SegmentoDanioPage = class SegmentoDanioPage {
  constructor(api, alert, toaster, toast, animationCtrl) {
    this.api = api;
    this.alert = alert;
    this.toaster = toaster;
    this.toast = toast;
    this.animationCtrl = animationCtrl;
    this.ajustador = {};
    this.isSearch = false;
    this.results = [];
    this.danios = [];
    this.daniosExtras = [];
    this.daniosSelect = [];
    this.danioResults = [];
    this.daniosOtros = [];
    this.danioSearchable = [];
    this.isLoading = false;
    this.contador = 0;
    this.datos = [];
    this.selectedIndex = [];
    this.selectedExtra = [];
    this.tipoSiniestros = [];
    this.formulario = {};
    this.danioOtro = [];
    this.daniosSelectOtro = [];
    this.isXOpen = false;
    this.leaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
    this.expediente = [];
    this.noReservadoAlerta = 'El valor de reserva está vacío. Se asignará un valor de 0 (cero) por defecto.';
    this.toggleAccordion = () => {
      const nativeEl = this.accordionGroup;
      console.log(nativeEl.value);
      if (nativeEl.value === 'second') {
        nativeEl.value = undefined;
      } else {
        nativeEl.value = 'second';
      }
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
    this.eaveAnimation = baseEl => {
      return this.enterAnimation(baseEl).direction('reverse');
    };
    this.ssucessIconRecycle = '../../assets/img/papel.gif';
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    let elCompromiso = localStorage.getItem('elCompromisoPago');
    let oPago = localStorage.getItem('elCompromisoPagoObservacion');
    //let reserva = localStorage.getItem('laReserva');
    let siniestro = localStorage.getItem('elTipoSiniestro');
    let descripcionDanios = localStorage.getItem('laDescripcion');
    let observaciones = localStorage.getItem('lasObservaciones');
    if (observaciones) {
      let obs = observaciones.split('-')[1];
      this.setObservaciones(obs);
    }
    if (descripcionDanios) {
      let daniosD = descripcionDanios.split('-')[1];
      this.setDanioDescripcion(daniosD);
    }
    if (siniestro) {
      this.elTipoSiniestro = siniestro.split('-')[1];
      console.log('elTipoSiniestro', this.elTipoSiniestro);
      this.loadSiniestros();
      setTimeout(() => {
        this.setElTipoSiniestro(this.elTipoSiniestro);
      }, 2000);
    }
    if (elCompromiso) {
      let compromisoId = parseInt(elCompromiso.split('-')[1]);
      this.datos.CompromisoPago = compromisoId;
      jquery__WEBPACK_IMPORTED_MODULE_6__("input[type='radio'][value=" + this.datos.CompromisoPago + "]").attr("checked", 'true').trigger("change");
      this.setCompromisoPago(compromisoId);
    }
    if (this.segmentoTitulo) {}
    if (oPago) {
      this.datos.ObservacionCompromisoPago = oPago.split('-')[1];
      this.setObservacionCompromisoPago(this.datos.ObservacionCompromisoPago);
    }
    this.getDanios();
    this.loadSiniestros();
  }
  ionViewDidEnter() {
    var _this = this;
    setTimeout(() => {
      let reserva = localStorage.getItem('bpmArray-ValorReserva');
      if (reserva === undefined || reserva === null || reserva === '') {
        this.setReserva('0');
        jquery__WEBPACK_IMPORTED_MODULE_6__('#noReservaTexto').fadeIn();
      } else {
        this.valorReserva = parseInt(reserva);
        jquery__WEBPACK_IMPORTED_MODULE_6__('#noReservaTexto').fadeOut();
      }
    }, 1300);
    this.api.Expediente(parseInt(this.idAtencion)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = false;
    }))).subscribe(res => {
      console.log(res, 'respuesta');
      this.expediente = res;
      this.moneda = this.expediente[0].Moneda;
    });
    setTimeout(() => {
      if (this.moneda == null) {
        this.miMoneda = "LEMPIRAS";
      } else {
        this.miMoneda = this.moneda;
      }
    }, 900);
  }
  ngOnInit() {
    console.log('Los seleccionados en caché');
    setTimeout(() => {
      this.listarDanios();
      this.listarDaniosExtras();
      this.recargaDaniosPosicion();
    }, 1000);
  }
  setReparacion(dannioId, tipo, i, origen) {
    localStorage.setItem('TipoReparacion-' + dannioId, tipo);
    localStorage.setItem('TipoReparacionIndex-' + dannioId, i);
    if (origen === 1) {
      if (tipo === 1) {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair').eq(i).attr("style", "background:#7da1c4;border-radius:10px;width:100%");
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change').eq(i).attr("style", "background:transparent;color:#7da1c4;width:100%");
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair').eq(i).attr("style", "background:transparent; color:#0058CB;width:100%");
        jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change').eq(i).attr("style", "background:#0058CB;border-radius:10px;width:100%");
      }
    }
  }
  setReparacionX(dannioId, tipo, i, origen) {
    var _this2 = this;
    // alert(dannioId+', '+tipo+', '+i+', '+origen);
    localStorage.setItem('TipoReparacionX-' + dannioId, tipo);
    localStorage.setItem('TipoReparacionIndexX-' + dannioId, i);
    this.api.ActualizarTipoReparacion(dannioId, tipo, i).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Actualizado ' + res);
        _this2.recargarDaniosExtras();
      });
      return function (_x) {
        return _ref3.apply(this, arguments);
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

  clearSegmentsStorage() {
    localStorage.removeItem('elCompromisoPago');
    localStorage.removeItem('elCompromisoPagoObservacion');
    localStorage.removeItem('laReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('danioPic') == 0 || localStorage.key(i).indexOf('daniosSelect') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
  recargaDanios() {
    /*
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++){
        //alert(localStorage.key(i).indexOf('daniosSelect'));
        if (localStorage.key(i).indexOf('daniosSelect') == 0) {
            //alert(localStorage.key(i).split('-')[1]+', '+localStorage.getItem(localStorage.key(i)).split('-')[1]);
            let indexDanio = localStorage.getItem(localStorage.key(i)).split('-')[1];
            let index = localStorage.key(i).split('-')[1];
            this.entraDanio(parseInt(indexDanio), parseInt(index));
        }
              if (localStorage.key(i).indexOf('danioOtro') == 0) {
          //const element = this.selectedIndex[i];
          let otroKey = parseInt(localStorage.key(i).split('-')[1]);
          let otroVal = localStorage.getItem(localStorage.key(i));
          for (let indexS = 0; indexS < this.selectedIndex.length; indexS++) {
            const element = this.selectedIndex[indexS];
            if (element==otroKey) {
              this.entraDanioOtro(otroVal);
            }
          }
        }
        
      }
            
    }
    */
  }
  recargaDaniosPosicion() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('danioPic') == 0) {
          let index = localStorage.key(i).split('-')[1];
          this.damagePosition(parseInt(index));
        }
      }
    }
  }
  getDanios() {
    var _this3 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = true;
      _this3.api.listDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.danios = res;
          _this3.danioSearchable = res;
          _this3.results = res;
        });
        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.toaster.presentToast(res.error.Message, 'top', 'danios');
        });
        return function (_x3) {
          return _ref6.apply(this, arguments);
        };
      }());
      _this3.api.ObtenerDaniosExtras(_this3.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_5__.Entidades[0].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this3.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.daniosExtras = res;
          _this3.daniosExtras.sort((a, b) => b.CodigoDanioFicohsa - a.CodigoDanioFicohsa);
        });
        return function (_x4) {
          return _ref8.apply(this, arguments);
        };
      }());
    })();
  }
  entraDanio(danioId, posicion) {
    for (let index = 0; index < this.danios.length; index++) {
      const element = this.danios[index];
      console.dir(element);
      console.log(element.Id + ', ' + danioId);
      console.log(element.Id === danioId);
      if (element.Id === danioId) {
        let elItem = jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-item').eq(index);
        if (elItem.hasClass("selected")) {
          this.eliminaDanio(danioId, posicion, element.Descripcion);
          elItem.removeClass('selected');
        } else {
          this.daniosSelect.push(element);
          this.contador = this.daniosSelect.length;
          localStorage.setItem('daniosSelect-' + posicion, danioId);
          elItem.addClass('selected');
        }
      }
    }
  }
  entraDanioOtro(danio) {
    var _this4 = this;
    //alert(danio)
    let indexFront = this.daniosSelectOtro.length;
    this.api.ContarOtrosDanios().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref10 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Conteo de Otros : ' + res[0].Mensaje);
        let othersCount = parseInt(res[0].Mensaje);
        _this4.daniosIndex = othersCount + 1;
        //alert(this.daniosIndex)
        if (danio) {
          let elementOtro = {
            "RefAtencionId": _this4.idAtencion,
            "DescripcionDeDanio": danio.toUpperCase(),
            "FechaRegistro": new Date().toISOString(),
            "UsuarioId": _this4.api.currentUser.ProveedorAgenteId,
            "TipoEntidad": _interfaces_extras__WEBPACK_IMPORTED_MODULE_5__.Entidades[0].tipoEntidad,
            "TipoReparacion": 0,
            "CodigoDanioVehiculo": _this4.daniosIndex,
            "indexFront": indexFront
          };
          console.dir(elementOtro);
          _this4.api.InsertarConvenioReparacionTallerExtra(elementOtro).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this4.isLoading = false;
          }))).subscribe( /*#__PURE__*/function () {
            var _ref12 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              _this4.daniosSelectOtro.push(elementOtro);
              localStorage.setItem('selectedIndex-x', JSON.stringify(_this4.daniosIndex));
              localStorage.setItem('daniosSelectOtro-' + (_this4.daniosIndex - 1), _this4.daniosIndex);
              localStorage.setItem('danioOtro-' + _this4.daniosIndex, JSON.stringify(elementOtro));
              setTimeout(() => {
                _this4.recargarDaniosExtras();
              }, 300);
              setTimeout(() => {
                _this4.openOtrosDanios();
              }, 600);
            });
            return function (_x6) {
              return _ref12.apply(this, arguments);
            };
          }());
        } else {}
      });
      return function (_x5) {
        return _ref10.apply(this, arguments);
      };
    }());
    /**/
  }

  recargarDaniosExtras() {
    var _this5 = this;
    this.api.ObtenerDaniosExtras(this.idAtencion, _interfaces_extras__WEBPACK_IMPORTED_MODULE_5__.Entidades[0].tipoEntidad).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref14 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this5.daniosExtras = res;
        _this5.listarDaniosExtras();
      });
      return function (_x7) {
        return _ref14.apply(this, arguments);
      };
    }());
  }
  insertarConvernioReparacion(Codigo, Descripcion, Id, elTipoReparacion) {
    var _this6 = this;
    let reparaArray = {
      codigoDanio: Codigo,
      descripcionDanio: Descripcion,
      fotografia: _environments_signatures__WEBPACK_IMPORTED_MODULE_7__.emptySignature.split(',')[1],
      idAtencion: this.idAtencion,
      refTipofotoId: Id,
      TipoEntidad: _interfaces_extras__WEBPACK_IMPORTED_MODULE_5__.Entidades[0].tipoEntidad,
      TipoReparacion: elTipoReparacion
    };
    this.api.insertarConvenioReparacion(reparaArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref16 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log(res);
        console.log("Danio guardado");
      });
      return function (_x8) {
        return _ref16.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref17 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this6.toaster.presentToast(res.error.Message, 'top', 'taller');
      });
      return function (_x9) {
        return _ref17.apply(this, arguments);
      };
    }());
  }
  entraDanioDescripcion(event) {
    this.datos.DescripcionDanio = event.target.value;
    this.datos.Descripcion = event.target.value;
    this.datos['DescripcionDanio'] = event.target.value;
    this.datos['Descripcion'] = event.target.value;
    localStorage.setItem('laDescripcion', this.idAtencion.toString() + '-' + this.datos.Descripcion);
    localStorage.setItem('datos-DescripcionDanio', event.target.value);
  }
  setDanioDescripcion(danioD) {
    this.datos.DescripcionDanio = danioD;
    this.datos.Descripcion = danioD;
    this.datos['DescripcionDanio'] = danioD;
    this.datos['Descripcion'] = danioD;
    localStorage.setItem('laDescripcion', this.idAtencion.toString() + '-' + danioD);
    localStorage.setItem('datos-DescripcionDanio', danioD);
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    //console.dir(query)
    this.results = this.danioSearchable.filter(d => d.Descripcion.toLowerCase().indexOf(query) > -1);
    console.dir(this.results);
  }
  openDanioSearch() {
    this.isSearch = true;
    this.clearStorageDanios();
    let danioContainer = document.getElementsByClassName('danio-entrada');
    if (this.daniosSelect.length > 0) {
      console.dir(danioContainer);
      setTimeout(() => {
        for (let index = 0; index < this.selectedIndex.length; index++) {
          const element = this.selectedIndex[index];
          jquery__WEBPACK_IMPORTED_MODULE_6__('.danio-item').eq(element).addClass('selected');
        }
      }, 1000);
    }
  }
  closeDanioSearch() {
    this.listarDanios();
    //this.listarDaniosExtras();
    this.isSearch = false;
  }
  onLongPress(event) {}
  eliminaDanio(danioInputId, index, descripcion) {
    //alert(danioInputId+', '+index+', '+descripcion);
    console.log('El daño en tabla ajustador :');
    console.dir(this.danios[danioInputId - 1]);
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if (idE == danioInputId) {
          localStorage.removeItem(localStorage.key(i));
        }
      }
    }
    setTimeout(() => {
      for (let indexDan = 0; indexDan < this.daniosSelect.length; indexDan++) {
        const element = this.daniosSelect[indexDan];
        if (indexDan == this.daniosSelect.length - 1) {
          for (let indexDan = 0; indexDan < this.daniosSelect.length; indexDan++) {
            const elementEnd = this.daniosSelect[indexDan];
            if (elementEnd.Id === danioInputId) {
              this.daniosSelect.splice(index, 1);
              localStorage.removeItem('TipoReparacion-' + danioInputId);
              localStorage.removeItem('TipoReparacionIndex-' + danioInputId);
            }
          }
          setTimeout(() => {
            this.listarDanios();
          }, 500);
        }
        if (indexDan > index) {
          console.log('En tabla : ' + indexDan + ', ' + element.Id + ', ' + element.Descripcion + '... Seleccionado : ' + danioInputId + ', ' + index + ', ' + descripcion);
          let resta = indexDan - 1;
          let elTipo = localStorage.getItem('TipoReparacion-' + element.Id);
          localStorage.setItem('TipoReparacionIndex-' + element.Id, resta.toString());
          this.setReparacion(element.Id, elTipo, resta, 2);
          //
        }
      }
    }, 300);
  }
  eliminaDanioX(danioInputId, index, tipo, codigo) {
    var _this7 = this;
    //alert(danioInputId+', '+index+', '+tipo+', '+codigo)
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelectOtro-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if (idE == codigo) {
          localStorage.removeItem(localStorage.key(i));
          for (let indexDan = 0; indexDan < this.daniosSelectOtro.length; indexDan++) {
            const elementOtr = this.daniosSelectOtro[indexDan];
            if (indexDan > index) {
              let indexNew = indexDan - 1;
              console.log('indexDan ' + indexDan + ', indexNew' + indexNew);
              this.api.ActualizarIndexFront(elementOtr.Id, indexNew).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this7.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref19 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  console.dir(res);
                });
                return function (_x10) {
                  return _ref19.apply(this, arguments);
                };
              }());
            }
            if (indexDan == this.daniosSelectOtro.length - 1) {
              this.api.EliminaDanioExtra(danioInputId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this7.isLoading = false;
              }))).subscribe( /*#__PURE__*/function () {
                var _ref21 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  console.dir(res);
                  localStorage.removeItem('danioOtro-' + codigo);
                  localStorage.removeItem('TipoReparacionX-' + danioInputId);
                  localStorage.removeItem('TipoReparacionIndexX-' + danioInputId);
                  setTimeout(() => {
                    _this7.recargarDaniosExtras();
                  }, 1200);
                });
                return function (_x11) {
                  return _ref21.apply(this, arguments);
                };
              }());
            }
          }
        }
      }
    }
    /* */
  }

  elminaDanioMarcado(i) {}
  clearStorageDanios() {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
        localStorage.removeItem(localStorage.key(i));
      }
    }
  }
  entraCompromisoPago(event) {
    console.log('Compromiso Pago ');
    console.dir(event);
    this.datos['CompromisoPago'] = event;
    this.datos.CompromisoPago = event;
    localStorage.setItem('elCompromisoPago', this.idAtencion.toString() + '-' + event);
    localStorage.setItem('datos-CulpableCompromisoPago', event);
  }
  setCompromisoPago(Compromiso) {
    console.log('Compromiso Pago ');
    console.log(Compromiso);
    this.datos['CompromisoPago'] = Compromiso;
    this.datos.CompromisoPago = Compromiso;
    localStorage.setItem('elCompromisoPago', this.idAtencion.toString() + '-' + Compromiso);
    localStorage.setItem('datos-CulpableCompromisoPago', Compromiso);
  }
  entraObservacionCompromisoPago(event) {
    this.datos['ObservacionCompromisoPago'] = event.target.value;
    this.datos.ObservacionCompromisoPago = event.target.value;
    localStorage.setItem('elCompromisoPagoObservacion', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-ObservacionCompromisoPago', event.target.value);
  }
  setObservacionCompromisoPago(observacion) {
    this.datos['ObservacionCompromisoPago'] = observacion;
    this.datos.ObservacionCompromisoPago = observacion;
    localStorage.setItem('elCompromisoPagoObservacion', this.idAtencion.toString() + '-' + observacion);
    localStorage.setItem('datos-ObservacionCompromisoPago', observacion);
  }
  entraObservaciones(event) {
    this.datos['Observaciones'] = event.target.value;
    this.datos['ObservacionesFinales'] = event.target.value;
    localStorage.setItem('lasObservaciones', this.idAtencion.toString() + '-' + event.target.value);
    localStorage.setItem('datos-Observaciones', event.target.value);
    localStorage.setItem('datos-ObservacionesFinales', event.target.value);
  }
  setObservaciones(observacion) {
    this.datos['Observaciones'] = observacion;
    this.datos['ObservacionesFinales'] = observacion;
    localStorage.setItem('lasObservaciones', this.idAtencion.toString() + '-' + observacion);
    localStorage.setItem('datos-Observaciones', observacion);
    localStorage.setItem('datos-ObservacionesFinales', observacion);
  }
  setReserva(valor) {
    if (valor === undefined || valor === null || valor === '' || valor === '0' || valor === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_6__('#noReservaTexto').fadeIn();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_6__('#noReservaTexto').fadeOut();
    }
    console.log('Soy el valor de reserva ' + this.valorReserva);
    this.valorReserva = valor;
    localStorage.setItem('laReserva', this.idAtencion.toString() + '-' + this.valorReserva);
    localStorage.setItem('bpmArray-ValorReserva', valor);
  }
  loadSiniestros() {
    var _this8 = this;
    this.api.ListTipoSiniestro(3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref23 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.tipoSiniestros = res;
        console.log("Mis siniestros");
        console.dir(_this8.tipoSiniestros);
      });
      return function (_x12) {
        return _ref23.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref24 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this8.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      });
      return function (_x13) {
        return _ref24.apply(this, arguments);
      };
    }());
  }
  getElTipoSiniestro(event) {
    this.elTipoSiniestro = event.target.value;
    localStorage.setItem('elTipoSiniestro', this.idAtencion.toString() + '-' + this.elTipoSiniestro);
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];
      if (element.CODIGO == this.elTipoSiniestro) {
        this.elTipoDeSiniestro = element.DESCRIPCION;
        //$('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
  }

  setElTipoSiniestro(tipo) {
    //alert(tipo)
    this.elTipoSiniestro = tipo;
    //alert(this.tipoSiniestros.length)
    localStorage.setItem('elTipoSiniestro', this.idAtencion.toString() + '-' + this.elTipoSiniestro);
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];
      //alert(element.CODIGO+', '+this.elTipoSiniestro)
      if (element.CODIGO == this.elTipoSiniestro) {
        this.elTipoDeSiniestro = element.DESCRIPCION;
        //alert(this.elTipoDeSiniestro)
        //$('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
  }

  damagePosition(valor) {
    let posicion;
    switch (valor) {
      case 1:
        posicion = 1;
        localStorage.removeItem('danioPic-' + posicion);
        if (this.formulario.DanioLataralIzquierdo === 1) {
          localStorage.setItem('datos-DanioLataralIzquierdo', '0');
          this.formulario.DanioLataralIzquierdo = 0;
          this.datos.DanioLataralIzquierdo = 0;
        } else {
          localStorage.setItem('danioPic-' + posicion, this.idAtencion.toString() + '-' + posicion);
          localStorage.setItem('datos-DanioLataralIzquierdo', '1');
          this.formulario.DanioLataralIzquierdo = 1;
          this.datos.DanioLataralIzquierdo = 1;
        }
        break;
      case 2:
        posicion = 2;
        localStorage.removeItem('danioPic-' + posicion);
        if (this.formulario.DanioLateralDerecho === 1) {
          localStorage.setItem('datos-DanioLateralDerecho', '0');
          this.formulario.DanioLateralDerecho = 0;
          this.datos.DanioLateralDerecho = 0;
        } else {
          localStorage.setItem('danioPic-' + posicion, this.idAtencion.toString() + '-' + posicion);
          localStorage.setItem('datos-DanioLateralDerecho', '1');
          this.formulario.DanioLateralDerecho = 1;
          this.datos.DanioLateralDerecho = 1;
        }
        break;
      case 3:
        posicion = 3;
        localStorage.removeItem('danioPic-' + posicion);
        if (this.formulario.VehiculoVolcado === 1) {
          localStorage.setItem('datos-VehiculoVolcado', '0');
          this.formulario.VehiculoVolcado = 0;
          this.datos.VehiculoVolcado = 0;
        } else {
          localStorage.setItem('danioPic-' + posicion, this.idAtencion.toString() + '-' + posicion);
          localStorage.setItem('datos-VehiculoVolcado', '1');
          this.formulario.VehiculoVolcado = 1;
          this.datos.VehiculoVolcado = 1;
        }
        break;
      case 4:
        posicion = 4;
        localStorage.removeItem('danioPic-' + posicion);
        if (this.formulario.DanioFrontal === 1) {
          localStorage.setItem('datos-DanioFrontal', '0');
          this.formulario.DanioFrontal = 0;
          this.datos.DanioFrontal = 0;
        } else {
          localStorage.setItem('danioPic-' + posicion, this.idAtencion.toString() + '-' + posicion);
          localStorage.setItem('datos-DanioFrontal', '1');
          this.formulario.DanioFrontal = 1;
          this.datos.DanioFrontal = 1;
        }
        break;
      case 5:
        posicion = 5;
        localStorage.removeItem('danioPic-' + posicion);
        if (this.formulario.DanioTrasero === 1) {
          localStorage.setItem('datos-DanioTrasero', '0');
          this.formulario.DanioTrasero = 0;
          this.datos.DanioTrasero = 0;
        } else {
          localStorage.setItem('danioPic-' + posicion, this.idAtencion.toString() + '-' + posicion);
          localStorage.setItem('datos-DanioTrasero', '1');
          this.formulario.DanioTrasero = 1;
          this.datos.DanioTrasero = 1;
        }
        break;
      default:
        break;
    }
  }
  listarDanios() {
    this.daniosSelect = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        let daCode = parseInt(elCodigo);
        let elTipo = localStorage.getItem('TipoReparacion-' + daCode);
        let daType = parseInt(elTipo);
        let elIndex = localStorage.getItem('TipoReparacionIndex-' + daCode);
        let daIndex = parseInt(elIndex);
        setTimeout(() => {
          if (daType === 1) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair').eq(daIndex).attr("style", "background:#7da1c4;border-radius:10px; width: 100%");
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change').eq(daIndex).attr("style", "background:transparent;color:#7da1c4; width: 100%");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair').eq(daIndex).attr("style", "background:transparent; color:#0058CB; width: 100%");
            jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change').eq(daIndex).attr("style", "background:#0058CB;border-radius:10px; width: 100%");
          }
        }, 2000);
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i))); //+1;
        console.log('los select');
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          console.log('un daño en danios Select');
          console.dir(elementD);
          console.log(indexSelect + ', ' + elementD.Id);
          console.log(indexSelect == elementD.Id);
          if (indexSelect == elementD.Id) {
            this.daniosSelect.push(elementD);
          }
        }
      }
    }
  }
  listarDaniosExtras() {
    console.log('Los daños extras');
    console.dir(this.daniosExtras);
    this.daniosSelectOtro = this.daniosExtras;
    for (let indexExtras = 0; indexExtras < this.daniosExtras.length; indexExtras++) {
      const elementExtras = this.daniosExtras[indexExtras];
      let daType = elementExtras.TipoReparacion;
      let elIndex = elementExtras.indexFront;
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
      //alert((daType != 0)+', '+(daType === 1))
      if (daType != 0) {
        if (daType === 1) {
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-x').eq(elIndex).attr("style", "background:#7da1c4;border-radius:10px; width: 100%");
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-x').eq(elIndex).attr("style", "background:transparent;color:#7da1c4; width: 100%");
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-repair-x').eq(elIndex).attr("style", "background:transparent; color:#0058CB; width: 100%");
          jquery__WEBPACK_IMPORTED_MODULE_6__('.action-change-x').eq(elIndex).attr("style", "background:#0058CB;border-radius:10px; width: 100%");
        }
      } else {}
      if (indexExtras == this.daniosExtras.length - 1) {
        //this.openOtrosDanios();
      }
    }
    /*
    for (let indexExtras = 0; indexExtras < this.daniosExtras.length; indexExtras++) {
      const elementExtras = this.daniosExtras[indexExtras];
      
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
    }
          this.daniosSelectOtro = [];
    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectOtro-') == 0) {
        let elCodigo = localStorage.key(i).split('-')[1];//localStorage.getItem(localStorage.key(i));
        let daIndex = parseInt(elCodigo);
              let elOtro = JSON.parse(localStorage.getItem('danioOtro-'+(daIndex+1)));
        let daOther = this.daniosExtras[daIndex];
              console.log('elOtro'); console.dir(elOtro); console.log(elOtro['Id']);
        console.dir(this.daniosExtras[daIndex]); console.log(daOther.TipoReparacion)
      
        let elTipo = elOtro.TipoReparacion;
        let elId = daOther.Id;
        let daType = parseInt(elTipo);
        let elIndexx = localStorage.getItem('TipoReparacionIndexX-'+elId);
        let elIndex = parseInt(elIndexx);
              //let daIndex = parseInt(elIndex);
              if (daOther.TipoReparacion === 0) {
          daType = 1;
          //alert('El tipo de reparación para el index : '+daIndex+', es '+daOther.TipoReparacion)
          setTimeout(() => {
            if (daType === 1) {
              $('.action-repair-x').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%");
              $('.action-change-x').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");
            }else{
              $('.action-repair-x').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%");
              $('.action-change-x').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%");
            }
          }, 2000);
        }else{
          daType = daOther.TipoReparacion;
          setTimeout(() => {
            if (daType === 1) {
              $('.action-repair-x').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%");
              $('.action-change-x').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");
            }else{
              $('.action-repair-x').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%");
              $('.action-change-x').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%");
            }
          }, 2000);
        }
        
                let indexSelectX = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
                console.log('indexSelectX : ');
          console.dir(indexSelectX);
                console.log('los select')
          for (let indexDanio = 0; indexDanio < this.daniosExtras.length; indexDanio++) {
            const elementD = this.daniosExtras[indexDanio];
            
            console.log('un daño en danios Select');
            console.dir(elementD)
            console.log(indexSelectX+', '+elementD.CodigoDanioFicohsa)
            console.log(indexSelectX == elementD.Id);
                  if (indexSelectX == elementD.CodigoDanioFicohsa) {
              this.daniosSelectOtro.push(elementD);
            }
            
          }
          
      }
            
          }
    */
  }

  toastDanio(selectedDanio, selectedId) {
    this.danioMessage = selectedDanio;
    this.danioPosition = 'middle', this.danioClass = 'danio-select';
    this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, selectedId);
  }
  presentToastDanio(message, position, clase, selectId) {
    var _this9 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.idSelect = selectId;
      const toast = yield _this9.toast.create({
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
  closeOtrosDanios() {
    this.isXOpen = false;
  }
  openOtrosDanios() {
    setTimeout(() => {
      if (this.isXOpen === true) {} else {
        jquery__WEBPACK_IMPORTED_MODULE_6__('.ion-accordion-toggle-icon').eq(1).click();
        this.isXOpen = true;
      }
    }, 600);
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AnimationController
    }];
  }
  static {
    this.propDecorators = {
      accordionGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ['accordionGroupX', {
          static: true
        }]
      }]
    };
  }
};
SegmentoDanioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-segmento-danio',
  template: _segmento_danio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_segmento_danio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SegmentoDanioPage);


/***/ }),

/***/ 20625:
/*!********************************************************************!*\
  !*** ./src/app/segmento-danio/segmento-danio.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-radio {\n  width: 30px;\n  height: 30px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #7da1c4;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\ncanvas {\n  border: groove;\n  padding-top: 2px;\n}\n\n#button-back {\n  border-radius: 50%;\n  margin-bottom: 9px;\n}\n#button-back ion-fab-button {\n  padding-bottom: 25px;\n}\n#button-back ion-fab-button ion-icon {\n  color: white;\n}\n\nion-button {\n  color: white;\n}\n\n.icono-buscar {\n  position: inherit;\n  font-size: 2rem;\n  color: white;\n  font-weight: bolder;\n}\n\nion-modal {\n  --width:300px;\n  --height: 300px;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: gray;\n  color: gray;\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n  color: white;\n}\n\n#save-ajustador-button, #nuevaFirma :not(#button-back) {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n#aju-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-segment {\n  --background: rgb(232, 231, 231);\n  /* Material Design styles */\n  /* iOS styles */\n}\nion-segment ion-segment-button {\n  color: white;\n}\nion-segment ion-segment-button::part(indicator-background) {\n  background: #7da1c4;\n}\nion-segment ion-segment-button.md::part(native) {\n  color: #000;\n}\nion-segment .segment-button-checked.md::part(native) {\n  color: #7da1c4;\n}\nion-segment ion-segment-button.md::part(indicator-background) {\n  height: 4px;\n}\nion-segment ion-segment-button.ios::part(native) {\n  color: #7da1c4;\n}\nion-segment .segment-button-checked.ios::part(native) {\n  color: #fff;\n}\nion-segment ion-segment-button.ios::part(indicator-background) {\n  border-radius: 20px;\n}\n\nion-badge.badge-danio {\n  --background: #f14f23;\n  --color: white;\n  --padding-end: 20px;\n  --padding-start: 15px;\n}\nion-badge.badge-danio ion-icon.icon-delete {\n  color: white;\n  font-size: 1.5rem;\n}\n\n.selected {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-datetime {\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}\n\nion-split-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n#big-pane {\n  --side-width: 82%;\n  --side-max-width: 82%;\n}\n\n#pencil-pane {\n  --side-width: 50%;\n  --side-max-width: 50%;\n}\n\n.is-invalid {\n  color: red;\n}\n\n.is-valid {\n  color: inherit;\n}\n\n.is-keyboard {\n  display: none;\n}\n\n.no-keyboard {\n  display: inherit;\n}\n\n.item-segment {\n  background: red;\n}\n.item-segment div {\n  padding: 0;\n}\n\n.segment-active {\n  color: #7da1c4;\n  background: gray !important;\n  background-color: gray !important;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\nion-footer {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-menu {\n  margin-right: -7px;\n}\n\n.sig-edit modal-wrapper {\n  width: 90%;\n}\n\nion-select::part(text) {\n  font-size: 1.1rem;\n  color: white;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n.card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-damage);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.card-header-image-inactive {\n  position: relative;\n}\n.card-header-image-inactive ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image-inactive::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image-inactive img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.close-search {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.change-filled {\n  fill-opacity: 1;\n  fill: #0058CB;\n}\n\n.repair-filled {\n  fill-opacity: 1;\n  fill: #7da1c4;\n}\n\n.change-outlined {\n  fill-opacity: 0;\n  fill: transparent;\n}\n\n.repair-outlined {\n  fill-opacity: 0;\n  fill: transparent;\n}\n\nion-checkbox {\n  --size: 25px;\n  --checkbox-background-checked: #0058CB;\n  --background-checked: #0058CB;\n}\n\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid #0058CB;\n}\n\nion-radio {\n  --color-checked: #7da1c4;\n}\n\n.icono-buscar {\n  font-size: 2rem;\n  position: absolute;\n  right: 0;\n  top: 1vh;\n  color: #7da1c4;\n  font-weight: bolder;\n}\n\n.icon-delete {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/app/segmento-danio/segmento-danio.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEE;EACE,kBAAA;EACA,sBAAA;AACJ;;AAEE;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AACJ;;AAEE;EACE,mBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,UAAA;EACA,YAAA;EAEA,6BAAA;EACA,mBAAA;EACA,kBAAA;EAEA,wBAAA;AADJ;;AAGE;EACE,cAAA;EACA,gBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,kBAAA;AAAJ;AACI;EACE,oBAAA;AACN;AAAM;EAAS,YAAA;AAGf;;AACE;EACE,YAAA;AAEJ;;AACE;EACE,iBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;AAEJ;;AACE;EACE,aAAA;EACA,eAAA;AAEJ;;AACE;EACE,cAAA;EACA,wBAAA;AAEJ;;AACE;EACE,WAAA;AAEJ;;AACE;;EAEE,wBAAA;EAEA,iBAAA;AACJ;;AAEE;;EAEE,oCAAA;EACA,aAAA;EACA,WAAA;AACJ;;AAGE;;EAEE,qBAAA;EACA,cAAA;EACA,YAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAAJ;;AAGE;EACE,yBAAA;EACA,wCAAA;AAAJ;;AAIE;EACE,gCAAA;EAQA,2BAAA;EAaA,eAAA;AApBJ;AAAI;EACE,YAAA;AAEN;AAAI;EACE,mBAAA;AAEN;AAEI;EACE,WAAA;AAAN;AAGI;EACE,cAAA;AADN;AAII;EACE,WAAA;AAFN;AAMI;EACE,cAAA;AAJN;AAOI;EACE,WAAA;AALN;AAQI;EACE,mBAAA;AANN;;AAcE;EAKE,qBAAA;EACF,cAAA;EACA,mBAAA;EACA,qBAAA;AAfF;AAQI;EACE,YAAA;EACA,iBAAA;AANN;;AAcE;EACE,qBAAA;EACA,cAAA;AAXJ;;AAcE;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAXJ;;AAcE;EACE,iBAAA;EACA,qBAAA;AAXJ;;AAcE;EACE,iBAAA;EACA,qBAAA;AAXJ;;AAcE;EACE,iBAAA;EACA,qBAAA;AAXJ;;AAcE;EACE,UAAA;AAXJ;;AAcE;EACE,cAAA;AAXJ;;AAcE;EACE,aAAA;AAXJ;;AAcE;EACE,gBAAA;AAXJ;;AAcE;EACE,eAAA;AAXJ;AAYI;EACE,UAAA;AAVN;;AAcE;EACE,cAAA;EACA,2BAAA;EACA,iCAAA;AAXJ;;AAcE;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAXN;;AAeE;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAZN;;AAeE;EACE,kBAAA;AAZJ;;AAgBI;EACE,UAAA;AAbN;;AAkBE;EACE,iBAAA;EACA,YAAA;AAfJ;;AAkBE;EACE,yBAAA;AAfJ;;AAmBI;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AAhBJ;;AAmBE;EACE,2BAAA;EACA,YAAA;AAhBJ;;AAmBE;EACE,kBAAA;AAhBJ;AAiBI;EACE,YAAA;EACA,mBAAA;AAfN;AAiBI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAfN;AAkBI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AAhBN;;AAmBE;EACE,kBAAA;AAhBJ;AAiBI;EACE,YAAA;EACA,mBAAA;AAfN;AAiBI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAfN;AAkBI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AAhBN;;AAoBE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAjBJ;;AAoBE;EACE,eAAA;EACA,aAAA;AAjBJ;;AAoBE;EACE,eAAA;EACA,aAAA;AAjBJ;;AAoBE;EACE,eAAA;EACA,iBAAA;AAjBJ;;AAoBE;EACE,eAAA;EACA,iBAAA;AAjBJ;;AAwBE;EACE,YAAA;EACA,sCAAA;EACA,6BAAA;AArBJ;;AAwBE;EACE,kBAAA;EACA,yBAAA;AArBJ;;AAwBE;EAKE,wBAAA;AAzBJ;;AA4BE;EAOE,eAAA;EAAgB,kBAAA;EAAmB,QAAA;EAAS,QAAA;EAAS,cAAA;EAAe,mBAAA;AA1BxE;;AA6BE;EACE,YAAA;AA1BJ","sourcesContent":["ion-radio {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n  \r\n  ion-radio::part(container) {\r\n    border-radius: 8px;\r\n    border: 2px solid #ddd;\r\n  }\r\n  \r\n  ion-radio::part(mark) {\r\n    background: none;\r\n    transition: none;\r\n    transform: none;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(container) {\r\n    background: #7da1c4;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  ion-radio.radio-checked::part(mark) {\r\n    width: 6px;\r\n    height: 10px;\r\n  \r\n    border-width: 0px 2px 2px 0px;\r\n    border-style: solid;\r\n    border-color: #fff;\r\n  \r\n    transform: rotate(45deg);\r\n  }\r\n  canvas {\r\n    border: groove;\r\n    padding-top: 2px;\r\n  }\r\n\r\n  #button-back{\r\n    border-radius: 50%;\r\n    margin-bottom: 9px;\r\n    ion-fab-button{\r\n      padding-bottom: 25px;\r\n      ion-icon{color: white;}\r\n    }\r\n  }\r\n\r\n  ion-button{\r\n    color: white;\r\n  }\r\n\r\n  .icono-buscar{\r\n    position: inherit;\r\n    font-size: 2rem;\r\n    color: white;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  ion-modal {\r\n    --width:300px;\r\n    --height: 300px;\r\n  }\r\n\r\n  ion-accordion {\r\n    margin: 0 auto;\r\n    --width: 100% !important;\r\n  }\r\n\r\n  ion-accordion-group {\r\n    width: 100%;\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding,\r\n  ion-accordion.accordion-expanded {\r\n    width: calc(100% - 32px);\r\n  \r\n    margin: 16px auto;\r\n  }\r\n  \r\n  ion-accordion.accordion-collapsing ion-item[slot='header'],\r\n  ion-accordion.accordion-collapsed ion-item[slot='header'] {\r\n    --background: var(--ion-color-light);\r\n    --color: gray;//var(--ion-color-light-contrast);\r\n    color: gray;\r\n\r\n  }\r\n  \r\n  ion-accordion.accordion-expanding ion-item[slot='header'],\r\n  ion-accordion.accordion-expanded ion-item[slot='header'] {\r\n    --background: #7da1c4;//var(--ion-color-primary);\r\n    --color: white;//var(--ion-color-primary-contrast);\r\n    color: white;\r\n  }\r\n\r\n  #save-ajustador-button, #nuevaFirma :not(#button-back) {\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n  #aju-toolbar{\r\n    --background: transparent;\r\n    --ion-color-base: transparent !important;\r\n    \r\n  }\r\n\r\n  ion-segment {\r\n    --background: rgb(232, 231, 231);\r\n    ion-segment-button{\r\n      color: white;\r\n    }\r\n    ion-segment-button::part(indicator-background) {\r\n      background: #7da1c4;\r\n    }\r\n    \r\n    /* Material Design styles */\r\n    ion-segment-button.md::part(native) {\r\n      color: #000;\r\n    }\r\n    \r\n    .segment-button-checked.md::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    ion-segment-button.md::part(indicator-background) {\r\n      height: 4px;\r\n    }\r\n    \r\n    /* iOS styles */\r\n    ion-segment-button.ios::part(native) {\r\n      color: #7da1c4;\r\n    }\r\n    \r\n    .segment-button-checked.ios::part(native) {\r\n      color: #fff;\r\n    }\r\n    \r\n    ion-segment-button.ios::part(indicator-background) {\r\n      border-radius: 20px;\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  \r\n\r\n  ion-badge.badge-danio{\r\n    ion-icon.icon-delete{\r\n      color: white;\r\n      font-size: 1.5rem;\r\n    }\r\n    --background: #f14f23;\r\n  --color: white;\r\n  --padding-end: 20px;\r\n  --padding-start: 15px;\r\n  }\r\n\r\n  .selected{\r\n    --background: #7da1c4;\r\n    --color: white;\r\n  }\r\n\r\n  ion-datetime{\r\n    width: 100%;\r\n    max-width: 100%;\r\n    height: 69%;\r\n  }\r\n\r\n  ion-split-pane {\r\n    --side-width: 50%;\r\n    --side-max-width: 50%;\r\n  }\r\n\r\n  #big-pane{\r\n    --side-width: 82%;\r\n    --side-max-width: 82%;\r\n  }\r\n\r\n  #pencil-pane{\r\n    --side-width: 50%;\r\n    --side-max-width: 50%;\r\n  }\r\n\r\n  .is-invalid{\r\n    color: red;\r\n  }\r\n\r\n  .is-valid{\r\n    color: inherit;\r\n  }\r\n\r\n  .is-keyboard{\r\n    display: none;\r\n  }\r\n\r\n  .no-keyboard{\r\n    display: inherit;\r\n  }\r\n\r\n  .item-segment{\r\n    background: red;\r\n    div{\r\n      padding: 0;\r\n    }\r\n  }\r\n\r\n  .segment-active{\r\n    color: #7da1c4;\r\n    background: gray !important;\r\n    background-color: gray !important;\r\n  }\r\n\r\n  ion-spinner{\r\n    position: fixed;\r\n      top: 28%;\r\n      left: 40%;\r\n      z-index: 999;\r\n      width: 20%;\r\n      height: 20%;\r\n    //background-color: #00213f;\r\n  }\r\n  \r\n  ion-footer{\r\n    position: fixed;\r\n      background: black;\r\n      opacity: 0.6;\r\n      height: 100vh;\r\n      width: 100vw;\r\n      z-index: 900;\r\n      bottom: 0;\r\n  }\r\n\r\n  ion-menu{\r\n    margin-right: -7px;\r\n  }\r\n\r\n  .sig-edit {\r\n    modal-wrapper {\r\n      width:90%;\r\n    }\r\n  }\r\n\r\n  \r\n  ion-select::part(text) {\r\n    font-size: 1.1rem;\r\n    color: white;\r\n  }\r\n\r\n  .select-label{\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  ::ng-deep {\r\n    .alert-wrapper {\r\n    --min-width: 600px;\r\n    --max-width: 600px;\r\n    --width: 600px;\r\n  }\r\n}\r\n  .alert-wrapper{\r\n    max-width: 600px !important;\r\n    width: 600px;\r\n  }\r\n\r\n  .card-header-image {\r\n    position: relative;\r\n    ion-img{\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      height: 20vh;\r\n      width: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      mix-blend-mode: var(--cs-mode-image);\r\n      background: var(--cs-gradient-damage);\r\n      z-index: 5;\r\n    }\r\n  \r\n    img {\r\n      width: 100% !important;\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n  .card-header-image-inactive {\r\n    position: relative;\r\n    ion-img{\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n    &::before {\r\n      content: \"\";\r\n      display: block;\r\n      height: 20vh;\r\n      width: 100%;\r\n      top: 0;\r\n      left: 0;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      mix-blend-mode: var(--cs-mode-image);\r\n      background: var(--cs-gradient-linear);\r\n      z-index: 5;\r\n    }\r\n  \r\n    img {\r\n      width: 100% !important;\r\n      height: 20vh;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n\r\n  .close-search{\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n  .change-filled{\r\n    fill-opacity: 1;\r\n    fill: #0058CB;\r\n  }\r\n\r\n  .repair-filled{\r\n    fill-opacity: 1;\r\n    fill: #7da1c4;\r\n  }\r\n\r\n  .change-outlined{\r\n    fill-opacity: 0;\r\n    fill: transparent;\r\n  }\r\n\r\n  .repair-outlined{\r\n    fill-opacity: 0;\r\n    fill: transparent;\r\n  }\r\n\r\n  \r\n\r\n  \r\n\r\n  ion-checkbox {\r\n    --size: 25px;\r\n    --checkbox-background-checked: #0058CB;\r\n    --background-checked: #0058CB;\r\n  }\r\n  \r\n  ion-checkbox::part(container) {\r\n    border-radius: 6px;\r\n    border: 2px solid #0058CB;\r\n  }\r\n\r\n  ion-radio {\r\n    //--border-radius: 4px;\r\n    //--inner-border-radius: 4px;\r\n  \r\n    //--color: #ddd;\r\n    --color-checked: #7da1c4;\r\n  }\r\n\r\n  .icono-buscar{\r\n    //--background: #f14f23;\r\n    //--background-activated: #a8462a;\r\n    //--background-hover: #f66e48;\r\n    //--border-radius: 15px;\r\n    //--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    //--color: white;\r\n    font-size: 2rem;position: absolute;right: 0;top: 1vh;color: #7da1c4;font-weight: bolder;\r\n  }\r\n\r\n  .icon-delete{\r\n    color: white;\r\n  }\r\n  \r\n "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 798:
/*!********************************************************************!*\
  !*** ./src/app/segmento-danio/segmento-danio.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n      \r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">{{segmentoTitulo}} - Atención # {{idAtencion}} - {{miMoneda}}</ion-col>\r\n          <ion-col size=\"3\" style=\"float: right;color:blue;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSearch\" class=\"ion-padding\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <ion-badge>\r\n          Daños Comunes A Vehículos\r\n        </ion-badge>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button class=\"close-search\" style=\"float: right ;\" (click)=\"closeDanioSearch()\">\r\n          <ion-icon name=\"return-up-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-searchbar animated=\"true\" placeholder=\"Escribe un Daño de Vehículo\" show-clear-button=\"focus\" show-cancel-button=\"focus\" cancel-button-text=\"Cancelar\"\r\n  cancel-button-icon=\"trash-bin\" [debounce]=\"1000\" (ionInput)=\"handleInput($event)\"></ion-searchbar>\r\n\r\n  <ion-content color=\"light\">\r\n    <ion-list [inset]=\"true\" style=\"width: 97%;\">\r\n      <ion-item *ngFor=\"let result of results; let i = index\" (click)=\"entraDanio(danioId.value, posicion.value)\" style=\"padding-left: 10px;border-radius:9px;\"\r\n      class=\"danio-item\">\r\n      {{ result.Descripcion }}\r\n        <ion-input [hidden]=\"true\" #danioId [value]=\"result.Id\" class=\"danio-entrada\"></ion-input>\r\n        <ion-input [hidden]=\"true\" #posicion [value]=\"i\"></ion-input>\r\n      </ion-item>\r\n      <ion-item style=\"color: white;\">Ajustadores Ficohsa por Porsalud</ion-item>\r\n      <br><br><br>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"!isSearch\">\r\n  <ion-col id=\"segmentAfiliatedAju\" size=\"12\">\r\n    <ion-item lines=\"none\" class=\"ion-no-padding  input\">\r\n      <ion-label color=\"primary\" class=\"text-size-lg\" style=\"padding-left: 5px;\">\r\n        <ion-badge color=\"primary\">\r\n          {{segmentoTitulo}}\r\n        </ion-badge>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          \r\n          <ion-item class=\"ion-no-padding  input\">\r\n            <ion-grid style=\"width: 100%;\">\r\n              <ion-row>\r\n                <ion-col offset=\"4\" size=\"8\" style=\"text-align: right;\">\r\n                  <ion-button size=\"default\" (click)=\"modalDanio.present()\">\r\n                    Agregar Tipo de Daño.\r\n                  <ion-icon class=\"icono-buscar\" name=\"add-circle\" \r\n                  style=\"position: inherit; font-size: 2rem; color: white; font-weight: bolder;\r\n                  margin-left: 6px;\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button size=\"default\" (click)=\"openDanioSearch()\">\r\n                    Buscar Tipos de Daño.\r\n                  <ion-icon class=\"icono-buscar\" name=\"search-outline\" \r\n                  style=\"position: inherit; font-size: 2rem; color: white; font-weight: bolder;\r\n                  margin-left: 6px;\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-accordion-group #accordionGroupX id=\"accordionGroupX\" [multiple]=\"false\" [value]=\"['first']\">\r\n                <ion-accordion #danioAccordion value=\"first\" (click)=\"closeOtrosDanios()\">\r\n                  <ion-item slot=\"header\">\r\n                    <ion-label>Daños Seleccionados Asegurado</ion-label>\r\n                  </ion-item>\r\n                  <div class=\"ion-padding\" slot=\"content\">\r\n                    <ion-row *ngIf=\"daniosSelect.length > 0\"> \r\n                      <ion-card style=\"margin: 0;padding: 0;width: 100%;\">\r\n                        <ion-card-header>\r\n                          <ion-card-title>Lista de Daños Seleccionados</ion-card-title>\r\n                        </ion-card-header>\r\n                      \r\n                        <ion-card-content>\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                          <ion-row>\r\n                            <ion-col size=\"3\" *ngFor=\"let dannio of daniosSelect;let i = index\">\r\n                              <ion-card>\r\n                                <ion-input #selectedId [hidden]=\"true\" [value]=\"dannio.Id\" class=\"danio-input\"></ion-input>\r\n                                <input #danioInput [value]=\"dannio.Descripcion\" hidden>\r\n                                  <input #danioIdInput [value]=\"i\" class=\"input-index\" hidden>\r\n                                  <input #danioId [value]=\"dannio.Id\" class=\"danio-id\" hidden>\r\n                                  <ion-grid>\r\n                                    <ion-row>\r\n                                      <ion-col size=\"10\" style=\"color: gray;\">\r\n                                        {{dannio.Descripcion}}\r\n                                      </ion-col>\r\n                                      <ion-col size=\"2\">\r\n                                        <ion-icon color=\"danger\" name=\"trash-bin\" style=\"font-size: 2rem;\" (click)=\"eliminaDanio(danioId.value, i, danioInput.value)\"></ion-icon>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                    <br>\r\n                                    <ion-row style=\"width: 100%;\">\r\n                                      <ion-col size=\"2\"></ion-col>\r\n                                      <ion-col size=\"5\">\r\n                                        <ion-button size=\"small\" fill=\"outline\" class=\"action-change\" style=\"color: #0058CB;width: 100%;\" (click)=\"setReparacion(dannio.Id, 2, i, 1)\">Cambio</ion-button>\r\n                                      </ion-col>\r\n                                      <ion-col size=\"5\">\r\n                                        <ion-button size=\"small\" fill=\"outline\" class=\"action-repair\" style=\"color: #7da1c4;width: 100%;\" (click)=\"setReparacion(dannio.Id, 1, i, 1)\">Repara</ion-button>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                  </ion-grid>\r\n                              </ion-card>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-row>\r\n                  </div>\r\n                </ion-accordion>\r\n                <ion-accordion #danioAccordionX value=\"second\" (click)=\"isXOpen = true\">\r\n                  <ion-item slot=\"header\">\r\n                    <ion-label>Daños Otros Asegurado</ion-label>\r\n                  </ion-item>\r\n                  <div class=\"ion-padding\" slot=\"content\">\r\n                    <ion-row *ngIf=\"daniosSelectOtro.length > 0\"> \r\n                      <ion-card style=\"margin: 0;padding: 0;width: 100%;\">\r\n                        <ion-card-header>\r\n                          <ion-card-title>Lista de Daños Otros Seleccionados</ion-card-title>\r\n                        </ion-card-header>\r\n                      \r\n                        <ion-card-content>\r\n                        <ion-grid class=\"ion-no-padding\">\r\n                          <ion-row>\r\n                            <ion-col size=\"3\" *ngFor=\"let dannioX of daniosSelectOtro;let i = index\">\r\n                              <ion-card>\r\n                                <ion-input #selectedIdX [hidden]=\"true\" [value]=\"dannioX.Id\" class=\"danio-input-x\"></ion-input>\r\n                                <input #danioInputX [value]=\"dannioX.DescripcionDeDanio\" hidden>\r\n                                  <input #danioIdInputX [value]=\"i\" class=\"input-index-x\" hidden>\r\n                                  <input #danioIdX [value]=\"dannioX.Id\" class=\"danio-id-x\" hidden>\r\n                                  <input #danioCodigo [value]=\"dannioX.CodigoDanioFicohsa\" class=\"danio-code-x\" hidden>\r\n                                  <input #danioTipo [value]=\"dannioX.TipoReparacion\" class=\"danio-tipo-x\" hidden>\r\n                                  <ion-grid>\r\n                                    <ion-row>\r\n                                      <ion-col size=\"10\" style=\"color: gray;\">\r\n                                        {{dannioX.DescripcionDeDanio}}\r\n                                      </ion-col>\r\n                                      <ion-col size=\"2\">\r\n                                        <ion-icon color=\"danger\" name=\"trash-bin\" style=\"font-size: 2rem;\" (click)=\"eliminaDanioX(danioIdX.value, i, danioTipo.value, danioCodigo.value)\"></ion-icon>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                    <br>\r\n                                    <ion-row style=\"width: 100%;\">\r\n                                      <ion-col size=\"2\"></ion-col>\r\n                                      <ion-col size=\"5\">\r\n                                        <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 1 ? 'outline' : 'solid'\" class=\"action-change-x\" color=\"primary\" style=\"color: #0058CB;width: 100%;\" (click)=\"setReparacionX(danioIdX.value, 2, i, 1)\">Cambio</ion-button>\r\n                                      </ion-col>\r\n                                      <ion-col size=\"5\">\r\n                                        <ion-button size=\"small\" [fill]=\"dannioX.TipoReparacion == 2 ? 'outline' : 'solid'\" class=\"action-repair-x\" color=\"primary\" style=\"color: #7da1c4;width: 100%;\" (click)=\"setReparacionX(danioIdX.value, 1, i, 1)\">Repara</ion-button>\r\n                                      </ion-col>\r\n                                    </ion-row>\r\n                                  </ion-grid>\r\n                              </ion-card>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </ion-grid>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-row>\r\n                  </div>\r\n                </ion-accordion>\r\n              </ion-accordion-group>\r\n\r\n              \r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n          <br>\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    ¿Hay compromiso de pago?\r\n                      </ion-row>\r\n                  <ion-row style=\"float: right;\">\r\n                    <ion-radio-group [(ngModel)]=\"datos.CompromisoPago\" (ngModelChange)=\"entraCompromisoPago($event)\">\r\n                      <ion-item lines=\"none\" style=\"display: inline-block;\">\r\n                        <ion-label color=\"primary\">No</ion-label>&nbsp;\r\n                        <ion-radio color=\"primary\" [value]=\"2\"></ion-radio>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\"  style=\"display: inline-block;\">\r\n                        <ion-label color=\"primary\">Si</ion-label>&nbsp;\r\n                        <ion-radio color=\"primary\" [value]=\"1\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>  \r\n                  </ion-row>\r\n                </ion-grid>\r\n                        \r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Observaciones de compromiso de pago\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input [(ngModel)]=\"datos.ObservacionCompromisoPago\" (ionChange)=\"entraObservacionCompromisoPago($event)\" class=\"select-label\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Valor Reservado\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"9\">\r\n                      <ion-input type=\"number\" maxlength=\"10\" (ionChange)=\"setReserva(valorReserva)\" (ionBlur)=\"setReserva(valorReserva)\" [(ngModel)]=\"valorReserva\"></ion-input>\r\n                    </ion-col>\r\n                    <ion-col id=\"noReservaTexto\" size=\"3\" style=\"text-align: justify; color: red; display: inherit;\">\r\n                      El valor de reserva está vacío. Se asignará un valor de 0 (cero) por defecto.\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Tipo de siniestro\r\n                    <ion-chip id=\"caseTypeSelect\" [outline]=\"true\" style=\"position: absolute;right: 0; width: 15%; padding-left: 4%; font-size: 1rem;\r\n                      color: var(--blueGrayColor); border-color: var(--blueGrayColor); right: 15px; top: 22%;\">\r\n                      Seleccionar\r\n                    </ion-chip>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col id=\"tipoSiniestrosDisplay\" size=\"9\">{{elTipoDeSiniestro}}</ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-select class=\"text-size-xs\" [(ngModel)]=\"elTipoSiniestro\" multiple=\"false\" (ionChange)=\"getElTipoSiniestro($event)\"\r\n                      style=\"float: right;\">\r\n                        <ion-select-option *ngFor=\"let siniestro of tipoSiniestros\" [value]=\"siniestro.CODIGO\">\r\n                          {{siniestro.DESCRIPCION}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Descripción de los daños\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input [(ngModel)]=\"datos.DescripcionDanio\" (ionChange)=\"entraDanioDescripcion($event)\" class=\"select-label\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n\r\n              <ion-item class=\"ion-no-padding  input\">\r\n                <ion-grid>\r\n                  <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\r\n                    Observaciones (Comentario Final)\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-input [(ngModel)]=\"datos.Observaciones\" (ionChange)=\"entraObservaciones($event)\" class=\"select-label\"></ion-input>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-item>\r\n\r\n              <div id=\"my-node\">\r\n                <ion-row>\r\n                  <ion-col size=\"6\" (click)=\"damagePosition(1)\">\r\n                    <div [ngClass]=\"{'card-header-image': formulario.DanioLataralIzquierdo,\r\n                    'card-header-image-inactive': !formulario.DanioLataralIzquierdo}\">\r\n                      <ion-img class=\"images-filter\" src=\"../../assets/img/Carroleft.png\"></ion-img>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" (click)=\"damagePosition(2)\">\r\n                    <div [ngClass]=\"{'card-header-image': formulario.DanioLateralDerecho,\r\n                    'card-header-image-inactive': !formulario.DanioLateralDerecho}\">\r\n                      <ion-img class=\"images-filter\" src=\"../../assets/img/carroright.png\"></ion-img>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"3\" (click)=\"damagePosition(4)\">\r\n                    <div [ngClass]=\"{'card-header-image': formulario.DanioFrontal,\r\n                    'card-header-image-inactive': !formulario.DanioFrontal}\">\r\n                      <ion-img class=\"images-filter\" src=\"../../assets/img/carrofront.png\"></ion-img>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\" (click)=\"damagePosition(3)\">\r\n                    <div [ngClass]=\"{'card-header-image': formulario.VehiculoVolcado,\r\n                    'card-header-image-inactive': !formulario.VehiculoVolcado}\">\r\n                      <ion-img class=\"images-filter\" src=\"../../assets/img/carrotop.png\"></ion-img>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" (click)=\"damagePosition(5)\">\r\n                    <div [ngClass]=\"{'card-header-image': formulario.DanioTrasero,\r\n                    'card-header-image-inactive': !formulario.DanioTrasero}\">\r\n                      <ion-img class=\"images-filter\" src=\"../../assets/img/carroback.png\"></ion-img>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n<ion-button id=\"reloadDaniosButton\" style=\"position: fixed;width: 16%;height: 60px;bottom: 11%;right: 1%; z-index: 999;--background: #f14f23;\r\n--background-activated: #a8462a;\r\n--background-hover: #f66e48;\r\n--border-radius: 15px;\r\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"listarDanios()\" hidden>\r\n  <ion-icon name=\"cloud-upload\"></ion-icon>\r\n</ion-button>\r\n\r\n<ion-modal trigger=\"modal-danio\" #modalDanio class=\"danio-otro\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item  lines=\"none\" style=\"--background: #7da1c4;\" class=\"ion-no-padding  input\">\r\n              <ion-label color=\"primary\" class=\"text-size-lg\" style=\"color: white; padding-left: 5px;\">Agregue Un Daño </ion-label>\r\n            </ion-item>\r\n            <ion-item  class=\"ion-no-padding transparent input\">\r\n              <ion-label color=\"primary\" class=\"text-size-sm\" position=\"floating\">\r\n                Describa el daño</ion-label>\r\n              <ion-input #inputDanio type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-col size=\"12\">\r\n              <ion-button style=\"color: white;\" (click)=\"entraDanioOtro(inputDanio.value);modalDanio.dismiss(); openOtrosDanios()\" expand=\"block\" shape=\"round\">\r\n                Agregar\r\n              </ion-button>\r\n            </ion-col>\r\n            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n<ion-button id=\"open-modal-recycle\" expand=\"block\" hidden></ion-button>\r\n  <ion-modal #modalRecycle trigger=\"open-modal-recycle\" [enterAnimation]=\"enterAnimation\" [leaveAnimation]=\"leaveAnimation\">\r\n    <ng-template>\r\n      <ion-header style=\"display: none;\">\r\n        <ion-toolbar>\r\n          <ion-title>HELP</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button id=\"closeRecycleButton\" (click)=\"modalRecycle.dismiss()\" hidden>Close</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-card style=\"margin-top: 12%; border: none; box-shadow: none;\">\r\n          <img alt=\"Eeeexittoooo!\" [src]=\"ssucessIconRecycle\" style=\"width: 180px; margin-left: 15%; margin-bottom: -18px;\"/>\r\n          <h3> <strong> Registro eliminado con éxito! </strong> </h3>\r\n        </ion-card>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_segmento-danio_segmento-danio_module_ts.js.map