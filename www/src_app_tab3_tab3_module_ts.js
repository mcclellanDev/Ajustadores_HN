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
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        header: 'HELP',
        message: 'Asistencia de Seguros',
        buttons: [{
          text: 'Cerrar sesión?',
          handler: () => {
            _this.isLogout = true;
            localStorage.setItem('isLogout', _this.isLogout.toString());
            _this.api.logout();
          }
        }, {
          text: 'Continuar',
          role: 'cancel'
        }, {
          text: 'Cambiar Contraseña',
          role: 'confirm',
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.api.GuardarFirmaAsegurado(this.firma).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isLoading = false;
    }))).subscribe(res => {
      console.log(res, 'token respuesta');
      alert(jquery__WEBPACK_IMPORTED_MODULE_9__('#reloadSignatureButton').length);
      this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
      jquery__WEBPACK_IMPORTED_MODULE_9__('#reloadSignatureButton').click();
    }, /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
      this.api.GuardarFirmaAjustador(this.firmaObtenida).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.isLoading = false;
      }))).subscribe(res => {
        console.log(res, 'token respuesta');
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        this.sig.clear();
      }, /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
          _this5.api.GuardarFotoAjustador(_this5.dataFoto).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this5.tostador.presentToastNoButtons('Fotografía actualizada con éxito! Si tienes sesión abierta en otro dispositivo, deberás reiniciar la sesión para ver el cambio', 'top', 'foto');
            _this5.user.Foto = _this5.imagePrefix + img.base64String;
            document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
            _this5.isLoading = false;
          }))).subscribe( /*#__PURE__*/function () {
            var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              let codigo = res.status;
              //alert(codigo)
            });
            return function (_x3) {
              return _ref6.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref7 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let usuarioActual = localStorage.getItem('correoActual');
      let passwordActual = localStorage.getItem('passwordActual');
      //alert(usuarioActual + ', ' + passwordActual + ' usuario y password actual');
      let sendData = {
        User: usuarioActual,
        Password: passwordActual
      };
      _this6.api.login(sendData).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          console.log(res, 'login response');
          if (res.status == 200) {
            //this.firmaPrecargadaInspector = imagePrefix + res.Firma;
          }
        });
        return function (_x5) {
          return _ref8.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref9 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --cs-size-avatar: 120px;\n}\n\nion-card {\n  padding-top: 10px;\n}\nion-card ion-avatar {\n  height: var(--cs-size-avatar);\n  width: var(--cs-size-avatar);\n  margin: 0 auto;\n}\n\nion-button .active {\n  color: var(--cs-icon-color-primary, #00c0e8) !important;\n}\n\n#profile-toolbar {\n  --background:var(--primaryColor);\n  background: var(--primaryColor);\n  height: 105px;\n}\n\n.mi-logo {\n  width: 120px;\n  margin-top: 18px;\n}\n\n.toolbar-container {\n  height: 100px;\n}\n\n#firmaPrevisualizacion {\n  height: 180px;\n}\n\nion-avatar {\n  filter: none !important;\n}\nion-avatar ion-icon {\n  font-size: 2rem;\n  position: absolute;\n  top: 8vh;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-split-pane {\n  --side-width: 400px;\n  --side-max-width: 400px;\n}", "",{"version":3,"sources":["webpack://./src/app/tab3/tab3.page.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;AACJ;;AAEE;EAEE,iBAAA;AAAJ;AACI;EACE,6BAAA;EACA,4BAAA;EACA,cAAA;AACN;;AAII;EACE,uDAAA;AADN;;AAKE;EACE,gCAAA;EACA,+BAAA;EACA,aAAA;AAFJ;;AAKE;EACA,YAAA;EACA,gBAAA;AAFF;;AAKA;EACE,aAAA;AAFF;;AAKA;EACE,aAAA;AAFF;;AAKE;EAEM,uBAAA;AAHR;AAKQ;EACI,eAAA;EACA,kBAAA;EACA,QAAA;AAHZ;;AAOI;EACE,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAJR;;AAQI;EACE,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AALR;;AAQI;EACF,mBAAA;EACA,uBAAA;AALF","sourcesContent":[":host{\r\n    --cs-size-avatar: 120px;\r\n  }\r\n  \r\n  ion-card {\r\n    // Settings Avatar\r\n    padding-top: 10px;\r\n    ion-avatar {\r\n      height: var(--cs-size-avatar);\r\n      width: var(--cs-size-avatar);\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n  \r\n  ion-button {\r\n    .active {\r\n      color: var(--cs-icon-color-primary, #00c0e8) !important;\r\n    }\r\n  }\r\n\r\n  #profile-toolbar{\r\n    --background:var(--primaryColor);\r\n    background: var(--primaryColor);\r\n    height: 105px;\r\n  }\r\n\r\n  .mi-logo{\r\n  width: 120px;\r\n  margin-top: 18px;\r\n}\r\n\r\n.toolbar-container{\r\n  height: 100px;\r\n}\r\n\r\n#firmaPrevisualizacion {\r\n  height: 180px;\r\n}\r\n\r\n  ion-avatar {\r\n    //    --border-radius: 4px;\r\n        filter:none !important;\r\n    \r\n        ion-icon{\r\n            font-size: 2rem;\r\n            position: absolute;\r\n            top: 8vh;\r\n        }\r\n    }\r\n\r\n    ion-spinner{\r\n      position: fixed;\r\n        top: 28%;\r\n        left: 40%;\r\n        z-index: 999;\r\n        width: 20%;\r\n        height: 20%;\r\n      //background-color: #00213f;\r\n    }\r\n    \r\n    #spinFooter{\r\n      position: fixed;\r\n        background: black;\r\n        opacity: 0.6;\r\n        height: 100vh;\r\n        width: 100vw;\r\n        z-index: 900;\r\n        bottom: 0;\r\n    }\r\n\r\n    ion-split-pane {\r\n  --side-width: 400px;\r\n  --side-max-width: 400px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar id=\"profile-toolbar\" class=\"toolbar-container\">\n    <div class=\"profile-toolbar-content\">\n      <div>\n        <span class=\"panel-kicker\">Perfil</span>\n        <h1>Ajustador</h1>\n      </div>\n\n      <ion-button class=\"menu-button\" fill=\"clear\" (click)=\"cerrarSesion()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <div class=\"loading-backdrop\" *ngIf=\"isLoading == true\">\n    <ion-spinner color=\"primary\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <section class=\"profile-workspace\">\n    <aside class=\"profile-panel\">\n      <div class=\"profile-card\">\n        <div class=\"avatar-wrap\">\n          <ion-avatar id=\"avatarPerfil\">\n            <img *ngIf=\"user?.Foto\" [src]=\"user.Foto\" alt=\"\" (click)=\"openImg(user.Foto.split(',')[1])\"\n              onerror=\"this.src='../../assets/img/usuario.svg'\">\n            <ion-icon *ngIf=\"!user?.Foto\" class=\"avatar-empty\" name=\"person-circle\"></ion-icon>\n          </ion-avatar>\n\n          <ion-button class=\"camera-button\" fill=\"clear\" (click)=\"abrirCamara()\">\n            <ion-icon slot=\"icon-only\" name=\"camera-outline\"></ion-icon>\n          </ion-button>\n        </div>\n\n        <h2>{{user?.NombreAgente}}</h2>\n        <p>{{user?.ProveedorName}}</p>\n\n        <div class=\"profile-meta\">\n          <div>\n            <span>Pais</span>\n            <strong>{{miPais || 'HN'}}</strong>\n          </div>\n          <div>\n            <span>Agente</span>\n            <strong>{{idAjustador || user?.ProveedorAgenteId}}</strong>\n          </div>\n        </div>\n      </div>\n    </aside>\n\n    <main class=\"signature-panel\">\n      <div class=\"panel-heading\">\n        <div>\n          <span class=\"panel-kicker\">Firma actual</span>\n          <h2>Registro del ajustador</h2>\n        </div>\n        <ion-badge class=\"signature-status\"\n          *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">Pendiente</ion-badge>\n        <ion-badge class=\"signature-status ready\"\n          *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\">Guardada</ion-badge>\n      </div>\n\n      <div class=\"signature-preview\"\n        *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n        <span>Aun no se ha precargado una firma para el ajustador.</span>\n      </div>\n\n      <ion-img id=\"firmaPrevisualizacion\" class=\"signature-image\"\n        *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\"\n        src=\"{{firmaPrecargadaInspector}}\"></ion-img>\n\n      <div class=\"signature-editor\">\n        <div class=\"section-heading\">\n          <div>\n            <span class=\"panel-kicker\">Cambiar firma</span>\n            <h3>Nueva firma</h3>\n          </div>\n        </div>\n\n        <ion-card id=\"cardFirmaAjustador\" class=\"signature-canvas-card\">\n          <ion-card-content>\n            <canvas id=\"canvas3\" #canvas3 width=\"{{canvasAseguradoWidth}}\" [height]=\"170\"></canvas>\n          </ion-card-content>\n        </ion-card>\n\n        <div class=\"signature-actions\">\n          <ion-button fill=\"clear\" (click)=\"clear()\">\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n            Limpiar\n          </ion-button>\n          <ion-button (click)=\"saveSignature()\">\n            <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n            Guardar firma\n          </ion-button>\n        </div>\n      </div>\n    </main>\n  </section>\n</ion-content>\n\n<ion-modal #modalSignAju trigger=\"open-modal-sign-aju\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.5, 0.75, 1]\">\n  <ng-template>\n    <ion-content class=\"ion-padding\">\n      <section class=\"modal-signature\">\n        <div class=\"panel-heading\">\n          <div>\n            <span class=\"panel-kicker\">Firma ajustador</span>\n            <h2>Vista previa</h2>\n          </div>\n        </div>\n\n        <div class=\"signature-preview\"\n          *ngIf=\"!firmaPrecargadaInspector || firmaPrecargadaInspector == '' || firmaPrecargadaInspector == null || firmaPrecargadaInspector == undefined || firmaPrecargadaInspector == emptySignatureWhite || firmaPrecargadaInspector == emptySignature\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n          <span>Aun no se ha precargado una firma para el ajustador.</span>\n        </div>\n\n        <ion-img class=\"signature-image\"\n          *ngIf=\"firmaPrecargadaInspector && firmaPrecargadaInspector != '' && firmaPrecargadaInspector != null && firmaPrecargadaInspector != undefined && firmaPrecargadaInspector != emptySignatureWhite && firmaPrecargadaInspector != emptySignature\"\n          src=\"{{firmaPrecargadaInspector}}\"></ion-img>\n\n        <ion-button expand=\"block\" (click)=\"this.modalSignAju.dismiss()\">Usar</ion-button>\n      </section>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal class=\"Img\" #appointmentAlert [isOpen]=\"openFoto\">\n  <ng-template>\n    <ion-content (click)=\"openFoto=false\">\n      <ion-img [src]=\"'data:image/jpeg;base64,'+foto\"></ion-img>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map