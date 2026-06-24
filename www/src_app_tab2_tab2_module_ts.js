(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 24762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 50959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 91076);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let ExploreContainerComponent = class ExploreContainerComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }]
    };
  }
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-explore-container',
  template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ExploreContainerComponent);


/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 24762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
  declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
  exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
})], ExploreContainerComponentModule);


/***/ }),

/***/ 93092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);




const routes = [{
  path: '',
  component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
}];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], Tab2PageRoutingModule);


/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 93092);








let Tab2PageModule = class Tab2PageModule {};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule],
  declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
})], Tab2PageModule);


/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 71748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 98141);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/keyboard */ 10523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/printer-center */ 75929);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/tabs.page */ 7942);














let Tab2Page = class Tab2Page {
  constructor(router, alert, api, platform, so, tostador, tabsator) {
    this.router = router;
    this.alert = alert;
    this.api = api;
    this.platform = platform;
    this.so = so;
    this.tostador = tostador;
    this.tabsator = tabsator;
    this.imagenes = [];
    this.results = [];
    this.iconos = _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__.printerIcons;
    this.dateAt = Date.now();
    this.timer = 0;
    this.busca = "";
    this.isPrint = true;
    this.tostador.dismissToast();
    //this.searchInterval = setInterval(()=>{this.searchSequence()} ,  1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    for (let index = 0; index < _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__.printerIcons.length; index++) {
      const element = _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__.printerIcons[index];
      console.log('opcion de impresion ' + element.descripcion);
    }
  }
  ngOnInit() {
    let origin = localStorage.getItem('origin');
    this.platform.ready().then(() => {
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.addListener('keyboardDidShow', info => {
        console.log('keyboard did show with height:', info.keyboardHeight);
        this.isKeyboard = true;
        setTimeout(() => {}, 50);
      });
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.addListener('keyboardDidHide', () => {
        console.log('el teclado se escondio keyboardDidHide');
        this.isKeyboard = false;
      });
    });
    this.getAtenciones();
    //alert(window.location.pathname+', '+origin)
    //alert(parseInt(localStorage.getItem('atencionesCount'))+1)
    //this.isLoading  = true;
    let atencionesCounter = parseInt(localStorage.getItem('atencionesCount') || '0');
    //alert(atencionesCounter)
    if (atencionesCounter == 0) {
      //      this.router.navigate(['./tab1']);
      //window.location.reload();
      /*
      setTimeout(() => {
        this.tabsator.navigateTab1();
      }, 3000);
      */
    } else {
      /*
      this.platform.ready().then(() => {
        setTimeout(() => {
          this.isLoading = false;
                 if (origin == 'tab2') {
            this.isPrint = true;
            this.router.navigate(['./printer'])
          }else{
            this.isPrint = false;
            this.router.navigate(['./tabs/tab1'])
          }
          
        }, 500);
      });
      */
    }
  }
  searchSequence() {
    this.timer = this.getRandomInt(4);
    if (this.timer > 0) {
      clearInterval(this.searchInterval);
      this.getAtenciones();
    } else {
      this.searchSequence();
    }
  }
  getAtenciones() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      _this.api.MisAtenciones(_this.api.currentUser.ProveedorAgenteId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('fin');
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res);
          _this.results = res;
          _this.atenciones = res;
          _this.isLoading = false;
          localStorage.setItem('atenciones-ajustador', JSON.stringify(_this.atenciones));
          _this.atenciones?.sort((a, b) => b.IdAtencion - a.IdAtencion);
          setTimeout(() => {
            const atencionesIds = document.getElementsByClassName('result-id');
            const clientesNombres = document.getElementsByClassName('cliente-nombre');
            //alert(atencionesIds.length)  
            if (_this.atenciones) {
              for (let index = 0; index < _this.atenciones.length; index++) {
                const element = _this.atenciones[index];
                atencionesIds[index].setAttribute('style', 'color:' + element.ColorEstado);
                clientesNombres[index].setAttribute('style', 'color: black');
              }
            }
          }, 1000);
          /*
                  for (let index = 0; index < this.atenciones.length; index++) {
                    const element = this.atenciones[index];
                    
          
                    
                    this.api.obtenerFotoPorAtencion(element.IdAtencion, 1).pipe(
                      finalize(async ()=>{console.log('fin')})
                    ).subscribe(
                       async (res) =>{
                        this.imagenes.push({
                          id : element.IdAtencion,
                          url : imagePrefix+res[0].FotoFirma
                        })
                        //console.log(element.IdAtencion, imagePrefix+res[0].FotoFirma)
                      },
                      async (res) => {
                        //console.log(element.IdAtencion, fondos[Math.floor(Math.random() * fondos.length)])
          
                        this.imagenes.push({
                          id : element.IdAtencion,
                          url : fondos[Math.floor(Math.random() * fondos.length)]
                        })
                      }
                    )
                      //console.log(index == (this.atenciones.length-1));
                    if (index == (this.atenciones.length-1)) {
                      let imagesContainer = document.getElementsByClassName('crop_img');
                      
                      setTimeout(() => {
                        this.inputS.setFocus();
                        $('#search-case').click();
                        console.dir(this.imagenes);
                        console.log(imagesContainer.length)
                        for (let i = 0; i < imagesContainer.length ; i++){
                          const elementImg = imagesContainer[i];
                          let laImagen = this.imagenes[i].url;
          
                          //this.results[i].Img = laImagen;
                          //elementImg.setAttribute('src', laImagen);
          
                          if (i == (this.imagenes.length-1)) {
                            this.isLoading = false;
                          }
                          
                        }
          
                        
                      },this.timer);
                    }
                  }
                  */
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.isLoading = false;
          console.log(res);
          const alert = yield _this.alert.create({
            header: 'Help',
            message: res.Mensaje,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  abreAtencion(atencionId, atencionEstadoColor) {
    var _this2 = this;
    console.log(atencionId + ', ' + atencionEstadoColor);
    localStorage.setItem('elColorEstado', atencionEstadoColor);
    //localStorage.setItem('idAtencion', atencionId);
    console.log(atencionEstadoColor == "green");
    if (atencionEstadoColor == "green") {
      this.isLoading = true;
      this.api.DatosDeAtencion(atencionId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this2.isLoading = false;
      }))).subscribe( /*#__PURE__*/function () {
        var _ref5 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log("Detalles de audiencia : " + res.length);
          console.dir(res);
          if (res.length > 0) {
            _this2.esClienteCompleto = true;
            localStorage.setItem('esCompleto', _this2.esClienteCompleto.toString());
          }
        });
        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref6 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.esClienteCompleto = false;
          localStorage.setItem('esCompleto', _this2.esClienteCompleto.toString());
        });
        return function (_x4) {
          return _ref6.apply(this, arguments);
        };
      }());
      this.router.navigate(['./expediente'], {
        queryParams: {
          Id: atencionId
        }
      });
    } else {
      this.tostador.presentToastNoButtonsRed('Esta atención ya no puede editarse. Para mayor detalle, consulta a tu administrador de sistema.', 'top', 'search-case');
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  verExpedienteBusqueda(idAtencion, indexInput) {
    var _this3 = this;
    setTimeout(() => {
      console.log('idAtencion: ' + idAtencion + ', indexInput: ' + indexInput);
      console.dir(this.results);
      this.elColorEstado = this.results[indexInput].ColorEstado;
      localStorage.setItem('elColorEstado', this.elColorEstado);
      localStorage.setItem('idAtencion', idAtencion.toString());
      localStorage.setItem('indexAtencion-2', indexInput.toString());
      this.obtenerCacheCliente(idAtencion);
      this.api.DatosDeAtencion(idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}))).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.datosDeAtencion = res;
          let identidadAsegurado = res[0].IdentidadCliente;
          localStorage.setItem('datosDeAtencion', _this3.datosDeAtencion);
          localStorage.setItem('identidadAsegurado', identidadAsegurado);
        });
        return function (_x5) {
          return _ref8.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref9 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {});
        return function (_x6) {
          return _ref9.apply(this, arguments);
        };
      }());
      this.router.navigate(['./expediente'], {
        queryParams: {
          Id: idAtencion,
          Source: 2
        }
      });
    }, 300);
  }
  obtenerCacheCliente(AtencionId) {
    var _this4 = this;
    this.api.ObtenercacheCliente(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref11 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log("Detalles de cache en ver expediente: " + res.length);
        console.dir(res);
        if (res) {
          let indexFlag = 'no tiene';
          let respuesta = '';
          let verificacion;
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            respuesta = respuesta + element;
            if (index == res.length - 1) {
              verificacion = respuesta.indexOf(indexFlag);
              if (verificacion != -1) {
                _this4.esClienteCompleto = false;
              } else {
                _this4.esClienteCompleto == true;
              }
            }
          }
        } else {
          _this4.esClienteCompleto = false;
        }
      });
      return function (_x7) {
        return _ref11.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref12 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        _this4.esClienteCompleto = false;
      });
      return function (_x8) {
        return _ref12.apply(this, arguments);
      };
    }());
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones?.filter(d => d.Cliente.toLowerCase().indexOf(query) > -1 || d.Fecha.toString().toLowerCase().indexOf(query) > -1 || d.IdAtencion.toString().toLowerCase().indexOf(query) > -1);
    setTimeout(() => {
      const atencionesIds = document.getElementsByClassName('atencion-id');
      if (this.results.length == this.atenciones?.length) {
        for (let index = 0; index < this.atenciones?.length; index++) {
          const element = this.atenciones[index];
          atencionesIds[index].setAttribute('style', 'color:' + element.ColorEstado);
        }
      }
    }, 400);
  }
  imprimirPDF(tipo, indexPrinter) {
    if (tipo == 1) {
      this.printUrl = _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__.printerIcons[indexPrinter].urlPreview + this.idAtencion;
    } else {
      this.printUrl = _environments_printer_center__WEBPACK_IMPORTED_MODULE_7__.printerIcons[indexPrinter].urlPrint + this.idAtencion;
    }
    window.open(this.printUrl, '_blank');
  }
  goPrinters() {
    this.router.navigate(['./printer']);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
    }, {
      type: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_8__.TabsPage
    }];
  }
  static {
    this.propDecorators = {
      inputS: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["searchCase", {
          static: true
        }]
      }]
    };
  }
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], Tab2Page);


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

/***/ 91076:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/app/explore-container/explore-container.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EAEA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,QAAA;EACA,2BAAA;AAAF;;AAGA;EACE,eAAA;EACA,iBAAA;AAAF;;AAGA;EACE,eAAA;EACA,iBAAA;EAEA,cAAA;EAEA,SAAA;AAFF;;AAKA;EACE,qBAAA;AAFF","sourcesContent":["#container {\n  text-align: center;\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n\n  color: #8c8c8c;\n\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98141:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --blue-ink: #14365f;\n  --muted-text: #637389;\n  --panel-border: #dce5ef;\n}\n\n.cliente-nombre {\n  color: var(--primaryColor);\n}\n\n.search-toolbar {\n  --background: #f4f7fb;\n  --border-width: 0;\n  padding: 10px 16px 0;\n}\n\n.search-shell {\n  align-items: center;\n  display: grid;\n  gap: 18px;\n  grid-template-columns: minmax(160px, 0.32fr) minmax(260px, 1fr);\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.search-title h1,\n.panel-heading h2 {\n  color: var(--blue-ink);\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.search-title h1 {\n  font-size: 1.45rem;\n}\n\n.panel-heading h2 {\n  font-size: 1.25rem;\n}\n\n.panel-kicker {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n\nion-searchbar.custom {\n  --background: #ffffff;\n  --border-radius: 10px;\n  --box-shadow: 0 8px 22px rgba(15, 45, 82, 0.08);\n  --color: var(--blue-ink);\n  --icon-color: #0058cb;\n  --placeholder-color: #7b8ca3;\n  padding: 0;\n}\n\n.search-workspace {\n  background: #f4f7fb;\n  min-height: 100%;\n  padding: 16px;\n}\n\n.results-panel {\n  background: #ffffff;\n  border: 1px solid var(--panel-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 116px);\n  margin: 0 auto;\n  max-width: 1180px;\n  min-height: 0;\n  padding: 16px;\n}\n\n.panel-heading {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.count-badge {\n  --background: #e9f2ff;\n  --color: #0058cb;\n  border-radius: 999px;\n  font-weight: 800;\n  min-width: 42px;\n  text-align: center;\n}\n\n.results-list {\n  flex: 1;\n  margin: 14px 0 0;\n  min-height: 0;\n  overflow: auto;\n  padding: 0;\n}\n\n.result-item {\n  --background: #ffffff;\n  --border-color: transparent;\n  --inner-padding-end: 10px;\n  --min-height: 78px;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.result-item::part(native) {\n  padding-left: 26px;\n}\n\n.status-strip {\n  background: var(--status-color, #7da1c4);\n  bottom: 0;\n  left: -26px;\n  position: absolute;\n  top: 0;\n  width: 5px;\n}\n\n.result-main {\n  align-items: center;\n}\n\n.result-item strong {\n  color: #193a5e;\n  display: block;\n  font-size: 0.94rem;\n  line-height: 1.2;\n}\n\n.result-service {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.78rem;\n  line-height: 1.25;\n  margin-top: 6px;\n}\n\n.result-timing {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.15;\n  text-align: right;\n}\n\n.result-id,\n.result-date,\n.result-hour {\n  color: var(--muted-text);\n  font-size: 0.8rem;\n  text-align: right;\n}\n\n.result-date {\n  font-weight: 700;\n  margin-top: 7px;\n}\n\n.result-hour {\n  font-size: 0.54rem;\n  margin-top: 3px;\n}\n\n.list-spacer {\n  --background: transparent;\n  --border-color: transparent;\n  color: transparent;\n}\n\n.loading-backdrop {\n  align-items: center;\n  background: rgba(15, 28, 45, 0.42);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 900;\n}\n\n.loading-backdrop ion-spinner {\n  height: 86px;\n  width: 86px;\n}\n\n@media (max-width: 760px) {\n  .search-shell {\n    align-items: stretch;\n    grid-template-columns: 1fr;\n  }\n  .results-panel {\n    height: auto;\n    min-height: calc(100vh - 150px);\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/tab2/tab2.page.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,qBAAA;EACA,uBAAA;AACF;;AAEA;EACE,0BAAA;AACF;;AAEA;EACE,qBAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,SAAA;EACA,+DAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AACF;;AAEA;;EAEE,sBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,+CAAA;EACA,wBAAA;EACA,qBAAA;EACA,4BAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;EACE,mBAAA;EACA,qCAAA;EACA,mBAAA;EACA,6CAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,aAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,SAAA;EACA,8BAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;AACF;;AAEA;EACE,OAAA;EACA,gBAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;AACF;;AAEA;EACE,qBAAA;EACA,2BAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,wCAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,UAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;;;EAGE,wBAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;EACE,gBAAA;EACA,eAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,yBAAA;EACA,2BAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,kCAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,OAAA;EACA,eAAA;EACA,QAAA;EACA,MAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;AACF;;AAEA;EACE;IACE,oBAAA;IACA,0BAAA;EACF;EAEA;IACE,YAAA;IACA,+BAAA;EAAF;AACF","sourcesContent":[":host {\n  --blue-ink: #14365f;\n  --muted-text: #637389;\n  --panel-border: #dce5ef;\n}\n\n.cliente-nombre{\n  color: var(--primaryColor);\n}\n\n.search-toolbar {\n  --background: #f4f7fb;\n  --border-width: 0;\n  padding: 10px 16px 0;\n}\n\n.search-shell {\n  align-items: center;\n  display: grid;\n  gap: 18px;\n  grid-template-columns: minmax(160px, 0.32fr) minmax(260px, 1fr);\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.search-title h1,\n.panel-heading h2 {\n  color: var(--blue-ink);\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.search-title h1 {\n  font-size: 1.45rem;\n}\n\n.panel-heading h2 {\n  font-size: 1.25rem;\n}\n\n.panel-kicker {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n\nion-searchbar.custom {\n  --background: #ffffff;\n  --border-radius: 10px;\n  --box-shadow: 0 8px 22px rgba(15, 45, 82, 0.08);\n  --color: var(--blue-ink);\n  --icon-color: #0058cb;\n  --placeholder-color: #7b8ca3;\n  padding: 0;\n}\n\n.search-workspace {\n  background: #f4f7fb;\n  min-height: 100%;\n  padding: 16px;\n}\n\n.results-panel {\n  background: #ffffff;\n  border: 1px solid var(--panel-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 116px);\n  margin: 0 auto;\n  max-width: 1180px;\n  min-height: 0;\n  padding: 16px;\n}\n\n.panel-heading {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.count-badge {\n  --background: #e9f2ff;\n  --color: #0058cb;\n  border-radius: 999px;\n  font-weight: 800;\n  min-width: 42px;\n  text-align: center;\n}\n\n.results-list {\n  flex: 1;\n  margin: 14px 0 0;\n  min-height: 0;\n  overflow: auto;\n  padding: 0;\n}\n\n.result-item {\n  --background: #ffffff;\n  --border-color: transparent;\n  --inner-padding-end: 10px;\n  --min-height: 78px;\n  border: 1px solid #e0e8f1;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.result-item::part(native) {\n  padding-left: 26px;\n}\n\n.status-strip {\n  background: var(--status-color, #7da1c4);\n  bottom: 0;\n  left: -26px;\n  position: absolute;\n  top: 0;\n  width: 5px;\n}\n\n.result-main {\n  align-items: center;\n}\n\n.result-item strong {\n  color: #193a5e;\n  display: block;\n  font-size: 0.94rem;\n  line-height: 1.2;\n}\n\n.result-service {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.78rem;\n  line-height: 1.25;\n  margin-top: 6px;\n}\n\n.result-timing {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.15;\n  text-align: right;\n}\n\n.result-id,\n.result-date,\n.result-hour {\n  color: var(--muted-text);\n  font-size: 0.8rem;\n  text-align: right;\n}\n\n.result-date {\n  font-weight: 700;\n  margin-top: 7px;\n}\n\n.result-hour {\n  font-size: 0.54rem;\n  margin-top: 3px;\n}\n\n.list-spacer {\n  --background: transparent;\n  --border-color: transparent;\n  color: transparent;\n}\n\n.loading-backdrop {\n  align-items: center;\n  background: rgba(15, 28, 45, 0.42);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 900;\n}\n\n.loading-backdrop ion-spinner {\n  height: 86px;\n  width: 86px;\n}\n\n@media (max-width: 760px) {\n  .search-shell {\n    align-items: stretch;\n    grid-template-columns: 1fr;\n  }\n\n  .results-panel {\n    height: auto;\n    min-height: calc(100vh - 150px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 71748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"search-toolbar\">\n    <div class=\"search-shell\">\n      <div class=\"search-title\">\n        <span class=\"panel-kicker\">Busqueda</span>\n        <h1>Atenciones</h1>\n      </div>\n\n      <ion-searchbar animated=\"true\" placeholder=\"Buscar fecha, atencion o asegurado\" show-clear-button=\"focus\"\n        show-cancel-button=\"never\" cancel-button-text=\"Cancelar\" cancel-button-icon=\"trash-bin\" [debounce]=\"400\"\n        (ionChange)=\"handleInput($event)\" class=\"custom\" mode=\"ios\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <div class=\"loading-backdrop\" *ngIf=\"isLoading == true\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <section class=\"search-workspace\">\n    <div class=\"results-panel\">\n      <div class=\"panel-heading\">\n        <div>\n          <span class=\"panel-kicker\">Listado</span>\n          <h2>Resultados</h2>\n        </div>\n        <ion-badge class=\"count-badge\">{{results.length || 0}}</ion-badge>\n      </div>\n\n      <ion-list class=\"results-list\" [inset]=\"true\">\n        <ion-item *ngFor=\"let atencion of results; let i = index;\" class=\"result-item\"\n          [style.--status-color]=\"atencion.ColorEstado\"\n          (click)=\"verExpedienteBusqueda(atencion.IdAtencion, indexInput.value)\">\n          <div class=\"status-strip\"></div>\n\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"result-main\">\n              <ion-col size=\"7\">\n                <strong class=\"cliente-nombre\">{{atencion.Cliente}}</strong>\n                <span class=\"result-service\">{{atencion.Servicio}}</span>\n              </ion-col>\n\n              <ion-col size=\"5\" class=\"result-timing\">\n                <span class=\"result-id\">#{{atencion.IdAtencion}}</span>\n                <span class=\"result-date\">{{atencion.Fecha.split('T')[0]}}</span>\n                <span class=\"result-hour\">{{atencion.Fecha.split('T')[1].substring(0, 5)}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-input [hidden]=\"true\" #colorInput [value]=\"atencion.ColorEstado\"></ion-input>\n          <ion-input #indexInput [hidden]=\"true\" [value]=\"i\" class=\"index-input\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"list-spacer\">Ajustadores Ficohsa por Porsalud</ion-item>\n      </ion-list>\n    </div>\n  </section>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map