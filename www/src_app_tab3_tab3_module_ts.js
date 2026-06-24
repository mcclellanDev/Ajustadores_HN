(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [{
  path: '',
  component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
}];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], Tab3PageRoutingModule);


/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);








let Tab3PageModule = class Tab3PageModule {};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: '',
    component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
  }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule],
  declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
})], Tab3PageModule);


/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 99769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 5540);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _environments_default_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/default-images */ 35263);
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! signature_pad */ 61032);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);















let Tab3Page = class Tab3Page {
  constructor(api, alert, platform, so, tostador, router) {
    this.api = api;
    this.alert = alert;
    this.platform = platform;
    this.so = so;
    this.tostador = tostador;
    this.router = router;
    this.user = null;
    this.elUsuario = [];
    this.foto = '';
    this.openFoto = false;
    this.banderaPais = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.banderaPais;
    this.firmasAsegurados = [];
    this.fotos = [];
    this.img = {};
    this.dataFoto = [];
    this.firma = [];
    this.firmaObtenida = [];
    this.fotoData = [];
    this.isSignature = false;
    this.isLoading = false;
    this.isSign = false;
    this.atIndexId = 0;
    this.lasAtenciones = [];
    this.esTablet = true;
    this.isLogout = false;
    this.imagePrefix = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.imagePrefix;
    this.canvasAseguradoWidth = 0;
    this.emptySignatureWhite = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.emptySignatureWhite;
    this.emptySignature = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.emptySignature;
    this.getCountry();
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width() - 90;
    } else {
      this.deviceWidth = this.platform.width() - 100;
    }
    this.tostador.dismissToast();
    this.user = this.api.currentUser;
    this.atencionId = localStorage.getItem('idAtencion');
  }
  ngOnInit() {
    localStorage.setItem('origin', window.location.pathname);
    this.sig = new signature_pad__WEBPACK_IMPORTED_MODULE_8__["default"](this.canvas.nativeElement);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    //this.sig.minWidth = 1;
    //this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    this.sig.fromDataURL(_environments_default_images__WEBPACK_IMPORTED_MODULE_7__.emptySignatureWhite);
    setTimeout(() => {
      this.sig.clear();
    }, 1000);
  }
  ionViewDidEnter() {
    this.getCanvasWidth();
    this.firmarInspector();
  }
  getCanvasWidth() {
    this.cardWidth = document.getElementById('cardFirmaAjustador').clientWidth;
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.cardWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.cardWidth - 50;
    }
  }
  cerrarSesion() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        cssClass: 'profile-menu-alert',
        header: 'HELP Ajustadores',
        message: 'Selecciona una accion para continuar.',
        buttons: [{
          text: 'Cerrar sesión',
          cssClass: 'profile-menu-danger',
          handler: () => {
            _this.isLogout = true;
            localStorage.setItem('isLogout', _this.isLogout.toString());
            _this.api.logout();
          }
        }, {
          text: 'Continuar',
          role: 'cancel',
          cssClass: 'profile-menu-cancel'
        }, {
          text: 'Cambiar Contraseña',
          role: 'confirm',
          cssClass: 'profile-menu-password',
          handler: () => {
            _this.goPasswordChange();
          }
        }]
      });
      alert.present();
    })();
  }
  openImg(foto) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  getCountry() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('getCountry');
      if (_this2.platform.is('android')) {
        _this2.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
        _this2.miPais = _this2.laLocalidad[0].countryCode;
        localStorage.setItem('codigoPais', _this2.miPais);
        localStorage.setItem('latitud', _this2.laLocalidad[0].latitude);
        localStorage.setItem('longitud', _this2.laLocalidad[0].longitude);
        _this2.isLoading = false;
        if (_this2.miPais == "HN") {
          _this2.banderaPais = '../../assets/img/flag-round-hn.png';
        } else if (_this2.miPais == "GT") {
          _this2.banderaPais = '../../assets/img/flag-round-gt.png';
        }
        _this2.isLoading = false;
      } else {
        _this2.banderaPais = '../../assets/img/flag-round-hn.png';
        console.log('Tengo esta bandera : ' + _this2.banderaPais);
        _this2.miPais = 'HN';
        localStorage.setItem('codigoPais', _this2.miPais);
        _this2.isLoading = false;
      }
    })();
  }
  identificarPais() {
    this.miPais = localStorage.getItem('codigoPais');
    if (this.miPais == "HN") {
      this.codigoPais = 'hn';
      this.banderaPais = '../../assets/img/flag-round-hn.png';
    } else if (this.miPais == "GT") {
      this.banderaPais = '../../assets/img/flag-round-gt.png';
      this.codigoPais = 'gt';
    }
  }
  clear() {
    this.sig.clear();
    this.isSignature = false;
  }
  limpiarCache() {
    for (let index = 0; index < this.atenciones.length; index++) {
      const element = this.atenciones[index];
      this.firmasAsegurados.push({
        'atencionId': element.IdAtencion,
        'firma': _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.emptySignature
      });
    }
    localStorage.removeItem('dSignatureAsegurado');
    localStorage.removeItem('firmasAsegurados');
    localStorage.removeItem('miLocalidad');
    localStorage.removeItem('coordinates');
    localStorage.removeItem('codigoPais');
    localStorage.removeItem('nombrePais');
    window.location.reload();
  }
  saveSignatureAjustadorBackup() {
    var _this3 = this;
    this.isLoading = true;
    this.firma.push({
      IdAtencion: this.atencionId,
      RefTipoFotoId: 3,
      Foto: this.firmaPrecargadaAjustador.split(',')[1]
    });
    this.api.GuardarFirmaAsegurado(this.firma).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
    }))).subscribe(res => {
      console.log(res, 'token respuesta');
      alert(jquery__WEBPACK_IMPORTED_MODULE_9__('#reloadSignatureButton').length);
      this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
      jquery__WEBPACK_IMPORTED_MODULE_9__('#reloadSignatureButton').click();
    }, /*#__PURE__*/function () {
      var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        _this3.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  saveSignature() {
    var _this4 = this;
    this.isLoading = true;
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    const mySignature = this.sig.toDataURL("image/png");
    if (mySignature != _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.emptySignature) {
      this.firmaPrecargadaAjustador = this.sig.toDataURL("image/jpeg");
      this.firmaPrecargadaInspector = this.sig.toDataURL("image/jpeg");
      localStorage.setItem("dSignature", this.firmaPrecargadaAjustador.toString());
      this.firmaObtenida = {
        IdAgente: this.api.currentUser.ProveedorAgenteId,
        Firma: this.firmaPrecargadaAjustador.split(',')[1]
      };
      this.api.GuardarFirmaAjustador(this.firmaObtenida).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'token respuesta');
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        this.sig.clear();
      }, /*#__PURE__*/function () {
        var _ref4 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this4.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    } else {
      this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
    }
  }
  recargarFirma() {
    this.firmaPrecargadaAjustador = localStorage.getItem("dSignature");
    alert(this.firmaPrecargadaAjustador);
  }
  firmarInspectorNO() {
    this.firmaPrecargadaInspector = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.imagePrefix + this.elUsuario.Firma;
  }
  abrirCamara() {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.isLoading = true;
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this5.img.IdTipo = 2;
      _this5.img.Tipo = 'Otro';
      _this5.img.Foto = img.base64String; //.split(',')[1];
      _this5.fotos.push(_this5.img);
      _this5.dataFoto.push({
        Fotografia: _this5.imagePrefix + _this5.img.Foto,
        IdAgente: _this5.user.ProveedorAgenteId
      });
      _this5.img = {};
      for (let index = 0; index < _this5.fotos.length; index++) {
        const element = _this5.fotos[index];
        if (index == _this5.fotos.length - 1) {
          console.log("La foto del ajustador ");
          console.dir(_this5.dataFoto);
          _this5.api.GuardarFotoAjustador(_this5.dataFoto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this5.tostador.presentToastNoButtons('Fotografía actualizada con éxito! Si tienes sesión abierta en otro dispositivo, deberás reiniciar la sesión para ver el cambio', 'top', 'foto');
            _this5.user.Foto = _this5.imagePrefix + img.base64String;
            document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
            _this5.isLoading = false;
          }))).subscribe( /*#__PURE__*/function () {
            var _ref6 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              let codigo = res.status;
              //alert(codigo)
            });
            return function (_x3) {
              return _ref6.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref7 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              let codigo = res.status;
            });
            return function (_x4) {
              return _ref7.apply(this, arguments);
            };
          }());
        }
      }
    })();
  }
  goPasswordChange() {
    this.router.navigate(['./recovery']);
  }
  firmarInspector() {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let usuarioActual = localStorage.getItem('correoActual');
      let passwordActual = localStorage.getItem('passwordActual');
      //alert(usuarioActual + ', ' + passwordActual + ' usuario y password actual');
      let sendData = {
        User: usuarioActual,
        Password: passwordActual
      };
      _this6.api.login(sendData).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res, 'login response');
          if (res.status == 200) {
            //this.firmaPrecargadaInspector = imagePrefix + res.Firma;
          }
        });
        return function (_x5) {
          return _ref8.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref9 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res, 'error login');
        });
        return function (_x6) {
          return _ref9.apply(this, arguments);
        };
      }());
      setTimeout(() => {
        let usuarioActual = localStorage.getItem('ajustadorActual');
        let miUsuario = JSON.parse(usuarioActual);
        let firmaAlmacenada = miUsuario.Firma;
        console.log(firmaAlmacenada, 'firma almacenada');
        if (firmaAlmacenada) {
          _this6.firmaPrecargadaInspector = _environments_default_images__WEBPACK_IMPORTED_MODULE_7__.imagePrefix + firmaAlmacenada;
          console.log(_this6.firmaPrecargadaInspector, 'firma precargada inspector');
        }
      }, 600);
      _this6.elUsuario = _this6.api.currentUser;
      _this6.idAjustador = _this6.elUsuario.ProveedorAgenteId;
      // aqui
      _this6.ajustadorNombre = _this6.elUsuario.NombreAgente;
      localStorage.setItem('ajustadorNombre', _this6.ajustadorNombre);
      let nombreAjustador = localStorage.getItem('ajustadorNombre');
      jquery__WEBPACK_IMPORTED_MODULE_9__('#ajustadorNombre').val(nombreAjustador);
      setTimeout(() => {}, 2000);
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }];
  }
  static {
    this.propDecorators = {
      canvas: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ["canvas3", {
          static: true
        }]
      }]
    };
  }
};
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tab3',
  template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], Tab3Page);


/***/ }),

/***/ 34830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 34830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 71327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 5540:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --blue-ink: #14365f;\n  --muted-text: #637389;\n  --panel-border: #dce5ef;\n}\n\nion-content {\n  --background: #f4f7fb;\n}\n\n.toolbar-container {\n  --background: #f4f7fb;\n  --border-width: 0;\n  padding: 10px 16px 0;\n}\n\n.profile-toolbar-content {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.profile-toolbar-content h1,\n.panel-heading h2,\n.section-heading h3,\n.profile-card h2 {\n  color: var(--blue-ink);\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.profile-toolbar-content h1 {\n  font-size: 1.45rem;\n}\n\n.panel-heading h2 {\n  font-size: 1.35rem;\n}\n\n.section-heading h3 {\n  font-size: 1.05rem;\n}\n\n.panel-kicker {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n\n.menu-button {\n  --background: #ffffff;\n  --border-radius: 999px;\n  --box-shadow: 0 8px 22px rgba(15, 45, 82, 0.10);\n  --color: #0058cb;\n  height: 46px;\n  width: 46px;\n}\n\n.menu-button ion-icon {\n  font-size: 1.65rem;\n}\n\n.profile-workspace {\n  background: #f4f7fb;\n  display: grid;\n  gap: 16px;\n  grid-template-columns: minmax(260px, 0.34fr) minmax(0, 1fr);\n  min-height: 100%;\n  padding: 16px;\n}\n\n.profile-panel,\n.signature-panel {\n  background: #ffffff;\n  border: 1px solid var(--panel-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n  min-width: 0;\n}\n\n.profile-panel {\n  align-content: stretch;\n  display: grid;\n  padding: 16px;\n}\n\n.profile-card {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100%;\n  text-align: center;\n}\n\n.avatar-wrap {\n  height: 132px;\n  margin-bottom: 18px;\n  position: relative;\n  width: 132px;\n}\n\n#avatarPerfil {\n  border: 5px solid #e9f2ff;\n  box-shadow: 0 14px 32px rgba(20, 54, 95, 0.18);\n  filter: none !important;\n  height: 132px;\n  overflow: hidden;\n  width: 132px;\n}\n\n#avatarPerfil img {\n  filter: none !important;\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n\n.avatar-empty {\n  color: #7da1c4;\n  font-size: 7rem;\n}\n\n.camera-button {\n  --background: #0058cb;\n  --border-radius: 999px;\n  --box-shadow: 0 10px 24px rgba(0, 88, 203, 0.28);\n  --color: #ffffff;\n  bottom: 2px;\n  height: 42px;\n  position: absolute;\n  right: 2px;\n  width: 42px;\n}\n\n.camera-button ion-icon {\n  font-size: 1.25rem;\n}\n\n.profile-card h2 {\n  font-size: 1.25rem;\n  max-width: 100%;\n  overflow-wrap: anywhere;\n}\n\n.profile-card p {\n  color: var(--muted-text);\n  font-size: 0.92rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin: 8px 0 0;\n  overflow-wrap: anywhere;\n}\n\n.profile-meta {\n  display: none;\n  gap: 10px;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 22px;\n  width: 100%;\n}\n\n.profile-meta div {\n  background: #f6f9fd;\n  border: 1px solid #dce7f2;\n  border-radius: 10px;\n  padding: 12px 10px;\n}\n\n.profile-meta span {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.profile-meta strong {\n  color: var(--blue-ink);\n  display: block;\n  font-size: 0.95rem;\n  margin-top: 4px;\n}\n\n.signature-panel {\n  display: grid;\n  gap: 16px;\n  grid-template-rows: auto minmax(128px, auto) minmax(0, 1fr);\n  padding: 18px;\n}\n\n.panel-heading,\n.section-heading {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.signature-status {\n  --background: #fff3e8;\n  --color: #9b4d11;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  min-width: 86px;\n  padding: 8px 12px;\n  text-align: center;\n}\n\n.signature-status.ready {\n  --background: #e9f7ef;\n  --color: #157347;\n}\n\n.signature-preview,\n.signature-image {\n  align-items: center;\n  background: #f6f9fd;\n  border: 1px solid #d9e5f1;\n  border-radius: 12px;\n  color: var(--muted-text);\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  min-height: 132px;\n  overflow: hidden;\n  padding: 18px;\n}\n\n.signature-preview ion-icon {\n  color: #0058cb;\n  font-size: 1.65rem;\n}\n\n.signature-preview span {\n  font-size: 0.94rem;\n  font-weight: 700;\n}\n\n.signature-image {\n  object-fit: contain;\n}\n\n.signature-editor {\n  display: grid;\n  gap: 10px;\n  min-height: 0;\n}\n\n.signature-canvas-card {\n  border: 1px solid #d9e5f1;\n  border-radius: 12px;\n  box-shadow: none;\n  margin: 0;\n  min-height: 212px;\n  overflow: hidden;\n  padding-top: 0;\n  width: 100%;\n}\n\n.signature-canvas-card ion-card-content {\n  background: #ffffff;\n  display: grid;\n  gap: 8px;\n  padding: 12px;\n}\n\n#canvas3 {\n  background: #ffffff;\n  border: 4px solid #f0f5fb;\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 170px;\n  touch-action: none;\n  width: 100%;\n}\n\n.signature-actions {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.36fr) minmax(0, 1fr);\n}\n\n.signature-actions ion-button {\n  --border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  height: 25px;\n  letter-spacing: 0;\n  margin: 0;\n  min-height: 25px;\n  text-transform: none;\n}\n\n.signature-actions ion-icon {\n  font-size: 0.92rem;\n  margin-right: 1px;\n}\n\n.signature-actions ion-button[fill=clear] {\n  --background: #ffffff;\n  --border-color: #ef5a22;\n  --border-style: solid;\n  --border-width: 1.5px;\n  --color: #ef5a22;\n}\n\n.signature-actions ion-button:not([fill=clear]) {\n  --background: #0058cb;\n  --background-activated: #0047a5;\n  --background-hover: #0b66db;\n  --box-shadow: 0 10px 24px rgba(0, 88, 203, 0.20);\n  --color: #ffffff;\n}\n\n.modal-signature {\n  display: grid;\n  gap: 16px;\n}\n\n.Img {\n  --background: rgba(0, 0, 0, 0.7);\n}\n\n.Img ion-content {\n  --background: rgba(0, 0, 0, 0.7);\n}\n\n.Img ion-img {\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.loading-backdrop {\n  align-items: center;\n  background: rgba(15, 28, 45, 0.42);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 900;\n}\n\n.loading-backdrop ion-spinner {\n  height: 86px;\n  width: 86px;\n}\n\n::ng-deep .profile-menu-alert {\n  --backdrop-opacity: 0.42;\n}\n::ng-deep .profile-menu-alert .alert-wrapper {\n  --width: 430px;\n  --min-width: 430px;\n  --max-width: 430px;\n  border-radius: 18px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n  overflow: hidden;\n}\n::ng-deep .profile-menu-alert .alert-head {\n  background: #0058cb;\n  padding: 18px 22px 16px;\n}\n::ng-deep .profile-menu-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n::ng-deep .profile-menu-alert .alert-message {\n  color: #15305f;\n  font-size: 0.96rem;\n  font-weight: 700;\n  line-height: 1.35;\n  padding: 18px 22px 4px;\n}\n::ng-deep .profile-menu-alert .alert-button-group {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  padding: 14px 22px 22px;\n}\n::ng-deep .profile-menu-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  height: 46px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 4px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .profile-menu-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .profile-menu-alert .profile-menu-danger {\n  border-color: #ef5a22;\n  color: #ef5a22;\n}\n::ng-deep .profile-menu-alert .profile-menu-password {\n  border-color: #0058cb;\n  color: #0058cb;\n}\n::ng-deep .profile-menu-alert .profile-menu-cancel {\n  border-color: #b9c8d8;\n  color: #15305f;\n}\n\n@media (orientation: portrait) and (min-width: 700px) {\n  .profile-workspace {\n    grid-template-columns: minmax(250px, 0.36fr) minmax(0, 1fr);\n  }\n}\n@media (max-width: 699px) {\n  .toolbar-container {\n    padding: 8px 10px 0;\n  }\n  .profile-toolbar-content h1 {\n    font-size: 1.22rem;\n  }\n  .profile-workspace {\n    grid-template-columns: 1fr;\n    padding: 10px;\n  }\n  .profile-panel,\n  .signature-panel {\n    border-radius: 10px;\n  }\n  .profile-panel {\n    padding: 12px;\n  }\n  .profile-card {\n    align-items: flex-start;\n    display: grid;\n    gap: 12px;\n    grid-template-columns: auto minmax(0, 1fr);\n    text-align: left;\n  }\n  .avatar-wrap {\n    grid-row: 1/span 2;\n    height: 96px;\n    margin-bottom: 0;\n    width: 96px;\n  }\n  #avatarPerfil {\n    height: 96px;\n    width: 96px;\n  }\n  .avatar-empty {\n    font-size: 5rem;\n  }\n  .camera-button {\n    height: 34px;\n    width: 34px;\n  }\n  .profile-card h2 {\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.02rem;\n    margin-top: 4px;\n  }\n  .profile-card p {\n    font-size: 0.8rem;\n    grid-column: 2;\n    grid-row: 2;\n  }\n  .profile-meta {\n    grid-column: 1/-1;\n    margin-top: 4px;\n  }\n  .profile-meta div {\n    padding: 10px;\n  }\n  .signature-panel {\n    gap: 12px;\n    grid-template-rows: auto auto auto;\n    padding: 12px;\n  }\n  .panel-heading h2 {\n    font-size: 1.16rem;\n  }\n  .signature-status {\n    font-size: 0.7rem;\n    min-width: 76px;\n    padding: 7px 10px;\n  }\n  .signature-preview,\n  .signature-image {\n    min-height: 118px;\n    padding: 14px;\n  }\n  .signature-canvas-card {\n    min-height: 194px;\n  }\n  #canvas3 {\n    height: 154px;\n  }\n  .signature-actions {\n    gap: 8px;\n    grid-template-columns: minmax(0, 0.44fr) minmax(0, 1fr);\n  }\n  .signature-actions ion-button {\n    --border-radius: 9px;\n    font-size: 0.7rem;\n    height: 25px;\n    min-height: 25px;\n  }\n  .signature-actions ion-icon {\n    font-size: 0.9rem;\n    margin-right: 1px;\n  }\n  ::ng-deep .profile-menu-alert {\n    align-items: center;\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n  ::ng-deep .profile-menu-alert .alert-wrapper {\n    --width: calc(100vw - 32px);\n    --min-width: 0;\n    --max-width: 360px;\n    border-radius: 14px;\n  }\n  ::ng-deep .profile-menu-alert .alert-head {\n    padding: 15px 18px 13px;\n  }\n  ::ng-deep .profile-menu-alert .alert-title {\n    font-size: 1rem;\n  }\n  ::ng-deep .profile-menu-alert .alert-message {\n    font-size: 0.86rem;\n    padding: 15px 18px 2px;\n  }\n  ::ng-deep .profile-menu-alert .alert-button-group {\n    gap: 6px;\n    padding: 12px 14px 16px;\n  }\n  ::ng-deep .profile-menu-alert .alert-button {\n    border-radius: 9px;\n    font-size: 0.66rem;\n    height: 42px;\n    padding-inline: 2px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/tab3/tab3.page.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,qBAAA;EACA,uBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,qBAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AACF;;AAEA;;;;EAIE,sBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,SAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;AACF;;AAEA;EACE,qBAAA;EACA,sBAAA;EACA,+CAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,SAAA;EACA,2DAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,qCAAA;EACA,mBAAA;EACA,6CAAA;EACA,YAAA;AACF;;AAEA;EACE,sBAAA;EACA,aAAA;EACA,aAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AACF;;AAEA;EACE,yBAAA;EACA,8CAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;AACF;;AAEA;EACE,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,WAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;AACF;;AAEA;EACE,qBAAA;EACA,sBAAA;EACA,gDAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;EACA,uBAAA;AACF;;AAEA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,8BAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;AACF;;AAEA;EACE,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AACF;;AAEA;EACE,sBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,2DAAA;EACA,aAAA;AACF;;AAEA;;EAEE,uBAAA;EACA,aAAA;EACA,SAAA;EACA,8BAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,wBAAA;EACA,aAAA;EACA,SAAA;EACA,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,aAAA;AACF;;AAEA;EACE,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,QAAA;EACA,aAAA;AACF;;AAEA;EACE,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,uDAAA;AACF;;AAEA;EACE,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;EACA,gBAAA;EACA,oBAAA;AACF;;AAEA;EACE,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,qBAAA;EACA,uBAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,gDAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;AACF;;AAEA;EACE,gCAAA;AACF;;AAEA;EACE,gCAAA;AACF;;AAEA;EACE,YAAA;EACA,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,kCAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,OAAA;EACA,eAAA;EACA,QAAA;EACA,MAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;AACF;;AAGE;EACE,wBAAA;AAAJ;AAEI;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,8CAAA;EACA,gBAAA;AAAN;AAGI;EACE,mBAAA;EACA,uBAAA;AADN;AAII;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AAFN;AAKI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAHN;AAMI;EACE,aAAA;EACA,SAAA;EACA,gDAAA;EACA,uBAAA;AAJN;AAOI;EACE,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;AALN;AAQI;EACE,uBAAA;AANN;AASI;EACE,qBAAA;EACA,cAAA;AAPN;AAUI;EACE,qBAAA;EACA,cAAA;AARN;AAWI;EACE,qBAAA;EACA,cAAA;AATN;;AAcA;EACE;IACE,2DAAA;EAXF;AACF;AAcA;EACE;IACE,mBAAA;EAZF;EAeA;IACE,kBAAA;EAbF;EAgBA;IACE,0BAAA;IACA,aAAA;EAdF;EAiBA;;IAEE,mBAAA;EAfF;EAkBA;IACE,aAAA;EAhBF;EAmBA;IACE,uBAAA;IACA,aAAA;IACA,SAAA;IACA,0CAAA;IACA,gBAAA;EAjBF;EAoBA;IACE,kBAAA;IACA,YAAA;IACA,gBAAA;IACA,WAAA;EAlBF;EAqBA;IACE,YAAA;IACA,WAAA;EAnBF;EAsBA;IACE,eAAA;EApBF;EAuBA;IACE,YAAA;IACA,WAAA;EArBF;EAwBA;IACE,cAAA;IACA,WAAA;IACA,kBAAA;IACA,eAAA;EAtBF;EAyBA;IACE,iBAAA;IACA,cAAA;IACA,WAAA;EAvBF;EA0BA;IACE,iBAAA;IACA,eAAA;EAxBF;EA2BA;IACE,aAAA;EAzBF;EA4BA;IACE,SAAA;IACA,kCAAA;IACA,aAAA;EA1BF;EA6BA;IACE,kBAAA;EA3BF;EA8BA;IACE,iBAAA;IACA,eAAA;IACA,iBAAA;EA5BF;EA+BA;;IAEE,iBAAA;IACA,aAAA;EA7BF;EAgCA;IACE,iBAAA;EA9BF;EAiCA;IACE,aAAA;EA/BF;EAkCA;IACE,QAAA;IACA,uDAAA;EAhCF;EAmCA;IACE,oBAAA;IACA,iBAAA;IACA,YAAA;IACA,gBAAA;EAjCF;EAoCA;IACE,iBAAA;IACA,iBAAA;EAlCF;EAsCE;IACE,mBAAA;IACA,iBAAA;IACA,cAAA;EApCJ;EAsCI;IACE,2BAAA;IACA,cAAA;IACA,kBAAA;IACA,mBAAA;EApCN;EAuCI;IACE,uBAAA;EArCN;EAwCI;IACE,eAAA;EAtCN;EAyCI;IACE,kBAAA;IACA,sBAAA;EAvCN;EA0CI;IACE,QAAA;IACA,uBAAA;EAxCN;EA2CI;IACE,kBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;EAzCN;AACF","sourcesContent":[":host {\n  --blue-ink: #14365f;\n  --muted-text: #637389;\n  --panel-border: #dce5ef;\n}\n\nion-content {\n  --background: #f4f7fb;\n}\n\n.toolbar-container {\n  --background: #f4f7fb;\n  --border-width: 0;\n  padding: 10px 16px 0;\n}\n\n.profile-toolbar-content {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: 1180px;\n  width: 100%;\n}\n\n.profile-toolbar-content h1,\n.panel-heading h2,\n.section-heading h3,\n.profile-card h2 {\n  color: var(--blue-ink);\n  font-weight: 800;\n  letter-spacing: 0;\n  line-height: 1.15;\n  margin: 0;\n}\n\n.profile-toolbar-content h1 {\n  font-size: 1.45rem;\n}\n\n.panel-heading h2 {\n  font-size: 1.35rem;\n}\n\n.section-heading h3 {\n  font-size: 1.05rem;\n}\n\n.panel-kicker {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n\n.menu-button {\n  --background: #ffffff;\n  --border-radius: 999px;\n  --box-shadow: 0 8px 22px rgba(15, 45, 82, 0.10);\n  --color: #0058cb;\n  height: 46px;\n  width: 46px;\n}\n\n.menu-button ion-icon {\n  font-size: 1.65rem;\n}\n\n.profile-workspace {\n  background: #f4f7fb;\n  display: grid;\n  gap: 16px;\n  grid-template-columns: minmax(260px, 0.34fr) minmax(0, 1fr);\n  min-height: 100%;\n  padding: 16px;\n}\n\n.profile-panel,\n.signature-panel {\n  background: #ffffff;\n  border: 1px solid var(--panel-border);\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(15, 45, 82, 0.08);\n  min-width: 0;\n}\n\n.profile-panel {\n  align-content: stretch;\n  display: grid;\n  padding: 16px;\n}\n\n.profile-card {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100%;\n  text-align: center;\n}\n\n.avatar-wrap {\n  height: 132px;\n  margin-bottom: 18px;\n  position: relative;\n  width: 132px;\n}\n\n#avatarPerfil {\n  border: 5px solid #e9f2ff;\n  box-shadow: 0 14px 32px rgba(20, 54, 95, 0.18);\n  filter: none !important;\n  height: 132px;\n  overflow: hidden;\n  width: 132px;\n}\n\n#avatarPerfil img {\n  filter: none !important;\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n\n.avatar-empty {\n  color: #7da1c4;\n  font-size: 7rem;\n}\n\n.camera-button {\n  --background: #0058cb;\n  --border-radius: 999px;\n  --box-shadow: 0 10px 24px rgba(0, 88, 203, 0.28);\n  --color: #ffffff;\n  bottom: 2px;\n  height: 42px;\n  position: absolute;\n  right: 2px;\n  width: 42px;\n}\n\n.camera-button ion-icon {\n  font-size: 1.25rem;\n}\n\n.profile-card h2 {\n  font-size: 1.25rem;\n  max-width: 100%;\n  overflow-wrap: anywhere;\n}\n\n.profile-card p {\n  color: var(--muted-text);\n  font-size: 0.92rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin: 8px 0 0;\n  overflow-wrap: anywhere;\n}\n\n.profile-meta {\n  display: none;\n  gap: 10px;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 22px;\n  width: 100%;\n}\n\n.profile-meta div {\n  background: #f6f9fd;\n  border: 1px solid #dce7f2;\n  border-radius: 10px;\n  padding: 12px 10px;\n}\n\n.profile-meta span {\n  color: var(--muted-text);\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.profile-meta strong {\n  color: var(--blue-ink);\n  display: block;\n  font-size: 0.95rem;\n  margin-top: 4px;\n}\n\n.signature-panel {\n  display: grid;\n  gap: 16px;\n  grid-template-rows: auto minmax(128px, auto) minmax(0, 1fr);\n  padding: 18px;\n}\n\n.panel-heading,\n.section-heading {\n  align-items: flex-start;\n  display: flex;\n  gap: 12px;\n  justify-content: space-between;\n}\n\n.signature-status {\n  --background: #fff3e8;\n  --color: #9b4d11;\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 800;\n  min-width: 86px;\n  padding: 8px 12px;\n  text-align: center;\n}\n\n.signature-status.ready {\n  --background: #e9f7ef;\n  --color: #157347;\n}\n\n.signature-preview,\n.signature-image {\n  align-items: center;\n  background: #f6f9fd;\n  border: 1px solid #d9e5f1;\n  border-radius: 12px;\n  color: var(--muted-text);\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  min-height: 132px;\n  overflow: hidden;\n  padding: 18px;\n}\n\n.signature-preview ion-icon {\n  color: #0058cb;\n  font-size: 1.65rem;\n}\n\n.signature-preview span {\n  font-size: 0.94rem;\n  font-weight: 700;\n}\n\n.signature-image {\n  object-fit: contain;\n}\n\n.signature-editor {\n  display: grid;\n  gap: 10px;\n  min-height: 0;\n}\n\n.signature-canvas-card {\n  border: 1px solid #d9e5f1;\n  border-radius: 12px;\n  box-shadow: none;\n  margin: 0;\n  min-height: 212px;\n  overflow: hidden;\n  padding-top: 0;\n  width: 100%;\n}\n\n.signature-canvas-card ion-card-content {\n  background: #ffffff;\n  display: grid;\n  gap: 8px;\n  padding: 12px;\n}\n\n#canvas3 {\n  background: #ffffff;\n  border: 4px solid #f0f5fb;\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 170px;\n  touch-action: none;\n  width: 100%;\n}\n\n.signature-actions {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: minmax(0, 0.36fr) minmax(0, 1fr);\n}\n\n.signature-actions ion-button {\n  --border-radius: 10px;\n  font-size: 0.74rem;\n  font-weight: 800;\n  height: 25px;\n  letter-spacing: 0;\n  margin: 0;\n  min-height: 25px;\n  text-transform: none;\n}\n\n.signature-actions ion-icon {\n  font-size: 0.92rem;\n  margin-right: 1px;\n}\n\n.signature-actions ion-button[fill=\"clear\"] {\n  --background: #ffffff;\n  --border-color: #ef5a22;\n  --border-style: solid;\n  --border-width: 1.5px;\n  --color: #ef5a22;\n}\n\n.signature-actions ion-button:not([fill=\"clear\"]) {\n  --background: #0058cb;\n  --background-activated: #0047a5;\n  --background-hover: #0b66db;\n  --box-shadow: 0 10px 24px rgba(0, 88, 203, 0.20);\n  --color: #ffffff;\n}\n\n.modal-signature {\n  display: grid;\n  gap: 16px;\n}\n\n.Img {\n  --background: rgba(0, 0, 0, 0.7);\n}\n\n.Img ion-content {\n  --background: rgba(0, 0, 0, 0.7);\n}\n\n.Img ion-img {\n  height: 100%;\n  object-fit: contain;\n  width: 100%;\n}\n\n.loading-backdrop {\n  align-items: center;\n  background: rgba(15, 28, 45, 0.42);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 900;\n}\n\n.loading-backdrop ion-spinner {\n  height: 86px;\n  width: 86px;\n}\n\n::ng-deep {\n  .profile-menu-alert {\n    --backdrop-opacity: 0.42;\n\n    .alert-wrapper {\n      --width: 430px;\n      --min-width: 430px;\n      --max-width: 430px;\n      border-radius: 18px;\n      box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n      overflow: hidden;\n    }\n\n    .alert-head {\n      background: #0058cb;\n      padding: 18px 22px 16px;\n    }\n\n    .alert-title {\n      color: #ffffff;\n      font-size: 1.1rem;\n      font-weight: 800;\n      letter-spacing: 0;\n      margin: 0;\n      text-transform: uppercase;\n    }\n\n    .alert-message {\n      color: #15305f;\n      font-size: 0.96rem;\n      font-weight: 700;\n      line-height: 1.35;\n      padding: 18px 22px 4px;\n    }\n\n    .alert-button-group {\n      display: grid;\n      gap: 10px;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      padding: 14px 22px 22px;\n    }\n\n    .alert-button {\n      background: #ffffff;\n      border: 1.5px solid #d8e4f0;\n      border-radius: 12px;\n      font-size: 0.78rem;\n      font-weight: 800;\n      height: 46px;\n      justify-content: center;\n      letter-spacing: 0;\n      margin: 0;\n      min-width: 0;\n      padding-inline: 4px;\n      text-transform: none;\n      width: 100%;\n    }\n\n    .alert-button-inner {\n      justify-content: center;\n    }\n\n    .profile-menu-danger {\n      border-color: #ef5a22;\n      color: #ef5a22;\n    }\n\n    .profile-menu-password {\n      border-color: #0058cb;\n      color: #0058cb;\n    }\n\n    .profile-menu-cancel {\n      border-color: #b9c8d8;\n      color: #15305f;\n    }\n  }\n}\n\n@media (orientation: portrait) and (min-width: 700px) {\n  .profile-workspace {\n    grid-template-columns: minmax(250px, 0.36fr) minmax(0, 1fr);\n  }\n}\n\n@media (max-width: 699px) {\n  .toolbar-container {\n    padding: 8px 10px 0;\n  }\n\n  .profile-toolbar-content h1 {\n    font-size: 1.22rem;\n  }\n\n  .profile-workspace {\n    grid-template-columns: 1fr;\n    padding: 10px;\n  }\n\n  .profile-panel,\n  .signature-panel {\n    border-radius: 10px;\n  }\n\n  .profile-panel {\n    padding: 12px;\n  }\n\n  .profile-card {\n    align-items: flex-start;\n    display: grid;\n    gap: 12px;\n    grid-template-columns: auto minmax(0, 1fr);\n    text-align: left;\n  }\n\n  .avatar-wrap {\n    grid-row: 1 / span 2;\n    height: 96px;\n    margin-bottom: 0;\n    width: 96px;\n  }\n\n  #avatarPerfil {\n    height: 96px;\n    width: 96px;\n  }\n\n  .avatar-empty {\n    font-size: 5rem;\n  }\n\n  .camera-button {\n    height: 34px;\n    width: 34px;\n  }\n\n  .profile-card h2 {\n    grid-column: 2;\n    grid-row: 1;\n    font-size: 1.02rem;\n    margin-top: 4px;\n  }\n\n  .profile-card p {\n    font-size: 0.8rem;\n    grid-column: 2;\n    grid-row: 2;\n  }\n\n  .profile-meta {\n    grid-column: 1 / -1;\n    margin-top: 4px;\n  }\n\n  .profile-meta div {\n    padding: 10px;\n  }\n\n  .signature-panel {\n    gap: 12px;\n    grid-template-rows: auto auto auto;\n    padding: 12px;\n  }\n\n  .panel-heading h2 {\n    font-size: 1.16rem;\n  }\n\n  .signature-status {\n    font-size: 0.7rem;\n    min-width: 76px;\n    padding: 7px 10px;\n  }\n\n  .signature-preview,\n  .signature-image {\n    min-height: 118px;\n    padding: 14px;\n  }\n\n  .signature-canvas-card {\n    min-height: 194px;\n  }\n\n  #canvas3 {\n    height: 154px;\n  }\n\n  .signature-actions {\n    gap: 8px;\n    grid-template-columns: minmax(0, 0.44fr) minmax(0, 1fr);\n  }\n\n  .signature-actions ion-button {\n    --border-radius: 9px;\n    font-size: 0.7rem;\n    height: 25px;\n    min-height: 25px;\n  }\n\n  .signature-actions ion-icon {\n    font-size: 0.9rem;\n    margin-right: 1px;\n  }\n\n  ::ng-deep {\n    .profile-menu-alert {\n      align-items: center;\n      padding-bottom: 0;\n      padding-top: 0;\n\n      .alert-wrapper {\n        --width: calc(100vw - 32px);\n        --min-width: 0;\n        --max-width: 360px;\n        border-radius: 14px;\n      }\n\n      .alert-head {\n        padding: 15px 18px 13px;\n      }\n\n      .alert-title {\n        font-size: 1rem;\n      }\n\n      .alert-message {\n        font-size: 0.86rem;\n        padding: 15px 18px 2px;\n      }\n\n      .alert-button-group {\n        gap: 6px;\n        padding: 12px 14px 16px;\n      }\n\n      .alert-button {\n        border-radius: 9px;\n        font-size: 0.66rem;\n        height: 42px;\n        padding-inline: 2px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar id=\"profile-toolbar\" class=\"toolbar-container\">\n    <div class=\"profile-toolbar-content\">\n      <div>\n        <span class=\"panel-kicker\">Perfil</span>\n        <h1>Ajustador</h1>\n      </div>\n\n      <ion-button class=\"menu-button\" fill=\"clear\" (click)=\"cerrarSesion()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <div class=\"loading-backdrop\" *ngIf=\"isLoading == true\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <section class=\"profile-workspace\">\n    <aside class=\"profile-panel\">\n      <div class=\"profile-card\">\n        <div class=\"avatar-wrap\">\n          <ion-avatar id=\"avatarPerfil\">\n            <img *ngIf=\"user?.Foto\" [src]=\"user.Foto\" alt=\"\" (click)=\"openImg(user.Foto.split(',')[1])\"\n              onerror=\"this.src='../../assets/img/usuario.svg'\">\n            <ion-icon *ngIf=\"!user?.Foto\" class=\"avatar-empty\" name=\"person-circle\"></ion-icon>\n          </ion-avatar>\n\n          <ion-button class=\"camera-button\" fill=\"clear\" (click)=\"abrirCamara()\">\n            <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n          </ion-button>\n        </div>\n\n        <h2>{{user?.NombreAgente}}</h2>\n        <p>{{user?.ProveedorName}}</p>\n\n        <div class=\"profile-meta\">\n          <div>\n            <span>Pais</span>\n            <strong>{{miPais || 'HN'}}</strong>\n          </div>\n          <div>\n            <span>Agente</span>\n            <strong>{{idAjustador || user?.ProveedorAgenteId}}</strong>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    <main class=\"signature-panel\">\n      <div class=\"panel-heading\">\n        <div>\n          <span class=\"panel-kicker\">Firma actual</span>\n          <h2>Registro del ajustador</h2>\n        </div>\n        <ion-badge class=\"signature-status\"\n          *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">Pendiente</ion-badge>\n        <ion-badge class=\"signature-status ready\"\n          *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\">Guardada</ion-badge>\n      </div>\n\n      <div class=\"signature-preview\"\n        *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n        <span>Aun no se ha precargado una firma para el ajustador.</span>\n      </div>\n\n      <ion-img id=\"firmaPrevisualizacion\" class=\"signature-image\"\n        *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\"\n        src=\"{{firmaPrecargadaInspector}}\"></ion-img>\n\n      <div class=\"signature-editor\">\n        <div class=\"section-heading\">\n          <div>\n            <span class=\"panel-kicker\">Cambiar firma</span>\n            <h3>Nueva firma</h3>\n          </div>\n        </div>\n\n        <ion-card id=\"cardFirmaAjustador\" class=\"signature-canvas-card\">\n          <ion-card-content>\n            <canvas id=\"canvas3\" #canvas3 width=\"{{canvasAseguradoWidth}}\" [height]=\"170\"></canvas>\n\n            <div class=\"signature-actions\">\n              <ion-button fill=\"clear\" (click)=\"clear()\">\n                <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n                Limpiar\n              </ion-button>\n              <ion-button (click)=\"saveSignature()\">\n                <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                Guardar firma\n              </ion-button>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </main>\n  </section>\n</ion-content>\n\n<ion-modal #modalSignAju trigger=\"open-modal-sign-aju\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.5, 0.75, 1]\">\n  <ng-template>\n    <ion-content class=\"ion-padding\">\n      <section class=\"modal-signature\">\n        <div class=\"panel-heading\">\n          <div>\n            <span class=\"panel-kicker\">Firma ajustador</span>\n            <h2>Vista previa</h2>\n          </div>\n        </div>\n\n        <div class=\"signature-preview\"\n          *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n          <span>Aun no se ha precargado una firma para el ajustador.</span>\n        </div>\n\n        <ion-img class=\"signature-image\"\n          *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\"\n          src=\"{{firmaPrecargadaInspector}}\"></ion-img>\n\n        <ion-button expand=\"block\" (click)=\"this.modalSignAju.dismiss()\">Usar</ion-button>\n      </section>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal class=\"Img\" #appointmentAlert [isOpen]=\"openFoto\">\n  <ng-template>\n    <ion-content (click)=\"openFoto=false\">\n      <ion-img [src]=\"'data:image/jpeg;base64,'+foto\"></ion-img>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map