(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sesion_login_login_module_ts"],{

/***/ 10563:
/*!*********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessageComponent": () => (/* binding */ ErrorMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _error_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.component.html?ngResource */ 46035);
/* harmony import */ var _error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-message.component.scss?ngResource */ 85808);
/* harmony import */ var _error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let ErrorMessageComponent = class ErrorMessageComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }]
    };
  }
};
ErrorMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-error-message',
  template: _error_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_error_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ErrorMessageComponent);


/***/ }),

/***/ 32550:
/*!*****************************************!*\
  !*** ./src/app/environments/domains.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailDomains": () => (/* binding */ emailDomains)
/* harmony export */ });
const emailDomains = [".com", ".net", ".aol", ".hn", ".es", ".org", ".edu", ".gov", ".mil", ".int", ".ac.uk", ".co.uk", ".me.uk", ".info", ".name", ".pro", ".museum", ".us", ".ca", ".de", ".ru", ".ch"];

/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);







let HttpService = class HttpService {
  constructor(httpClient) {
    var _this = this;
    this.httpClient = httpClient;
    this.apiUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.api_url;
    this.request = /*#__PURE__*/function () {
      var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, urlRequest) {
        const options = {
          url: `${_this.apiUrl}` + urlRequest,
          headers: {
            'X-Fake-Header': 'Fake-Value',
            'Content-Type': 'application/json',
            "Accept": "*/*"
          },
          data: data
        };
        console.log(data);
        console.log(options);
        const reponse = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorHttp.post(options);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorHttp.post(options));
        //return CapacitorHttp.post(options);
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  consulta(data, url) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    console.log(`${this.apiUrl}` + url);
    return this.httpClient.post(`${this.apiUrl}` + url, data, {
      headers
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }];
  }
};
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], HttpService);


/***/ }),

/***/ 13365:
/*!******************************************************!*\
  !*** ./src/app/sesion/login/login-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 13590);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 59293:
/*!**********************************************!*\
  !*** ./src/app/sesion/login/login.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 13365);
/* harmony import */ var src_app_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/error-message/error-message.component */ 10563);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 13590);








let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage, src_app_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_1__.ErrorMessageComponent]
})], LoginPageModule);


/***/ }),

/***/ 13590:
/*!********************************************!*\
  !*** ./src/app/sesion/login/login.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 68418);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 24817);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/http.service */ 6858);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/keyboard */ 10523);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_environments_domains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/environments/domains */ 32550);
/* harmony import */ var capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! capacitor-secure-storage-plugin */ 16520);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);


















let LoginPage = class LoginPage {
  constructor(router, alert, api, fb, loading, httpService, platform, so, toaster) {
    this.router = router;
    this.alert = alert;
    this.api = api;
    this.fb = fb;
    this.loading = loading;
    this.httpService = httpService;
    this.platform = platform;
    this.so = so;
    this.toaster = toaster;
    this.item = {
      user: '',
      password: ''
    };
    this.dominios = [];
    this.isVisible = false;
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.isLoading = false;
    this.isLoginLogo = false;
    this.isLogout = false;
    this.valorMarca = [];
    this.onLogin = false;
    this.dataDeEnvio = [];
    this.isPassword = true;
    this.valorMarca = this.marcasArray;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.api_url;
    this.dominios = src_app_environments_domains__WEBPACK_IMPORTED_MODULE_9__.emailDomains;
    //this.readInput();
    //this.loginInterval = setInterval(()=>{this.setLogo()} ,  1000); 
  }

  obtenerCacheUsuario() {
    capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_10__.SecureStoragePlugin.get({
      key: 'User'
    }).then(result => {
      this.item.user = result.value;
      this.usuarioCache = this.item.user;
      console.log('User retrieved from secure storage:', this.item.user);
    });
    capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_10__.SecureStoragePlugin.get({
      key: 'Password'
    }).then(result => {
      this.item.password = result.value;
      this.passwordCache = this.item.password;
      console.log('Password retrieved from secure storage:', this.item.password);
    });
  }
  ionViewDidEnter() {
    const permissionResult = _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_11__.Geolocation.checkPermissions();
    console.log('ionViewDidEnter checando los permisos de gelocacion ');
    console.dir(permissionResult);
    permissionResult.then(result => {
      console.log('ionViewDidEnter checando los permisos de gelocacion con then result ');
      console.dir(result);
      console.log(result.location);
      if (result.location == 'granted') {
        this.conectividadStat = true;
        this.estadoConexionGPS = 'Permisos de ubicación precisa';
        //$('#connectIndicatorLogin').fadeIn('xslow');
      }

      if (result.location == 'denied') {
        this.conectividadStat = false;
        this.estadoConexionGPS = 'Permisos de ubicación precisa';
        //$('#connectIndicatorLogin').fadeOut();
      }
    });
  }

  ionViewWillLeave() {}
  ngOnInit() {
    this.platform.ready().then(() => {
      this.obtenerCacheUsuario();
      setTimeout(() => {
        //alert('Estas credenciales ... usuario'+this.usuarioCache+' ... contraseña'+this.passwordCache)
      }, 900);
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_5__.Keyboard.addListener('keyboardDidHide', () => {
        this.showRegister();
      });
    });
    this.credenciales = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl([''], [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl([], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required)
    });
  }
  permitirGPS(conectividadStat) {
    _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_11__.Geolocation.requestPermissions();
    /*
    if (conectividadStat == true) {
      Geolocation.requestPermissions().then((result) => {
        console.log('Permisos de ubicación solicitados:', result);
        if (result.location == 'granted') {
          this.conectividadStat = true;
          this.estadoConexionGPS = 'Permisos de ubicación precisa';
          $('#connectIndicatorLogin').fadeIn('xslow');
        }
      });
    }else{
          }
    */
  }

  setLogo() {
    let checkLogout = localStorage.getItem('isLogout');
    console.log('Logout es ' + checkLogout);
    this.currentUrl = this.router.url;
    this.previousUrl = localStorage.getItem('previous');
    let logoContainer = document.getElementsByTagName('ion-img');
    let logoCounter = logoContainer.length;
    if (logoCounter > 0) {
      this.isLoginLogo = true;
      console.log("Tengo un logo");
      clearInterval(this.loginInterval);
    } else {
      console.log('nada aun');
    }
  }
  login() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      console.log(_this.credenciales.value);
      let data = _this.credenciales.value;
      _this.dataDeEnvio.push({
        key: 'User',
        value: data.user
      });
      _this.dataDeEnvio.push({
        key: 'Password',
        value: data.password
      });
      let sendData = {
        User: data.user,
        Password: data.password
      };
      console.log(sendData);
      console.log('Success');
      for (let indexD = 0; indexD < _this.dataDeEnvio.length; indexD++) {
        const element = _this.dataDeEnvio[indexD];
        capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_10__.SecureStoragePlugin.set({
          key: element.key,
          value: element.value
        }).then(success => console.dir(success));
      }
      _this.api.login(sendData).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          // alert('lo logré')
          _this.isLoading = false;
          console.log("la respuesta del login");
          console.dir(res);
          _this.router.navigate(['./tabs/tab1']);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.isLoading = false;
          console.log(res);
          const alert = yield _this.alert.create({
            header: 'Fallo inicio de sesión',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      /**/
    })();
  }

  onLoginFunc() {
    var _this2 = this;
    this.validatePassword();
    if (this.validateEmail() && this.validatePassword()) {
      this.api.login(this.item).subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          if (res) {
            _this2.router.navigate(['./tabs/tab1']);
          } else {
            const alert = yield _this2.alert.create({
              header: 'HELP',
              message: 'Error al iniciar sesión valide sus credenciales',
              buttons: ['Ok']
            });
            yield alert.present();
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }
  validateEmail() {
    this.isUsernameValid = true;
    //    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // 
    if (!emailRegex.test(this.item.user)) {
      this.isUsernameValid = false;
      this.toaster.presentToastNoButtonsRed('El correo no es válido', 'top', 'login');
    } else {
      this.toaster.dismissToast();
    }
    return this.isUsernameValid;
  }
  walkEmail(event) {
    let daEmail = event.target.value;
    for (let index = 0; index < this.dominios.length; index++) {
      const element = this.dominios[index];
      console.log(daEmail + ', ' + element + ', ' + daEmail.includes(element.toString()));
      if (daEmail.includes(element.toString())) {
        this.toaster.dismissToast();
        break;
      }
    }
  }
  readInput() {
    console.log("El correo es " + this.item.user);
  }
  hideRegister() {
    jquery__WEBPACK_IMPORTED_MODULE_12__('#logoHelp').fadeOut();
    jquery__WEBPACK_IMPORTED_MODULE_12__('#olaAbajo').fadeOut();
  }
  showRegister() {
    jquery__WEBPACK_IMPORTED_MODULE_12__('#logoHelp').fadeIn();
    jquery__WEBPACK_IMPORTED_MODULE_12__('#olaAbajo').fadeIn();
  }
  validatePassword() {
    this.isPasswordValid = true;
    console.log(this.item.password + ', ' + this.item.password.length);
    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
      this.toaster.presentToastNoButtonsRed('La contraseña no es válida. Escribe tu contraseña para iniciar sesión.', 'bottom', 'login');
    } else {
      this.toaster.dismissToast();
    }
    console.log(this.item.password);
    return this.isPasswordValid;
  }
  toggleVisual() {
    this.isVisible = !this.isVisible;
  }
  recoveryPassword() {
    this.router.navigate(['./recovery']);
  }
  show() {
    if (this.item.password.length > 0) {
      this.isPassword = false;
    } else {
      this.isPassword = true;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController
    }, {
      type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
    }];
  }
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginPage);


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "environment_local": () => (/* binding */ environment_local),
/* harmony export */   "helpFilesUrl": () => (/* binding */ helpFilesUrl)
/* harmony export */ });
const environment = {
  production: false,
  api_url: "https://portal.porsalud.net/Outer/WSRestApiHelp/api",
  message: "PRO"
};
const helpFilesUrl = {
  production: true,
  api_url: "https://portal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive"
};
const environment_local = {
  production: false,
  api_url: 'https://localhost:44352/api' //this is a test to JWT 
};
/*
export const environment = {
  production: true,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT
};

export const environment_production = {
  production: false,
  api_url: 'https://portal.porsalud.net/Outer/WSRestApiHelp/api'  //this production

};

*/

/***/ }),

/***/ 11085:
/*!******************************************************************************!*\
  !*** ./node_modules/capacitor-secure-storage-plugin/dist/esm/definitions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 16520:
/*!************************************************************************!*\
  !*** ./node_modules/capacitor-secure-storage-plugin/dist/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecureStoragePlugin": () => (/* binding */ SecureStoragePlugin)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 11085);

const SecureStoragePlugin = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SecureStoragePlugin', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-secure-storage-plugin_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 61004)).then(m => new m.SecureStoragePluginWeb())
});



/***/ }),

/***/ 85808:
/*!**********************************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 24817:
/*!*********************************************************!*\
  !*** ./src/app/sesion/login/login.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  --img-logo: 30vh;\n}\n\nform {\n  width: 86%;\n}\n\nion-grid:not(.login-grid),\nion-row:not(.login-row) {\n  height: 100%;\n  background: var(--cs-background-primary, #fff);\n}\n\nion-input.sesion-dato {\n  --background: transparent;\n  --color: black;\n  --placeholder-color: #7a85c4;\n  --placeholder-opacity: 0.8;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n  border: 1px solid lightgray;\n  border-radius: 30px;\n  --highlight-color-focused: white;\n  height: 50px;\n}\n\nion-input.login-dato {\n  --background: var(--quaterniaryColor);\n  --color: var(--primaryColor);\n  --placeholder-color: #7a85c4;\n  --placeholder-opacity: 0.8;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n  border: 1px solid var(--quaterniaryColor);\n  border-radius: 30px;\n  --highlight-color-focused: white;\n  font-weight: bold;\n}\n\nion-img {\n  width: var(--img-logo);\n  text-align: center;\n  margin: 0 auto;\n}\n\nion-item ion-input {\n  --padding-end: 8px;\n  --margin-right: 8px;\n}\nion-item ion-icon {\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n}\n\nion-button.warning-button {\n  --background: none;\n  --background-hover: none;\n  --background-activated: none;\n  --background-focused: none;\n  --color: #F04F23;\n  --border-radius: 60px;\n  --border-color: none;\n  --border-style: none;\n  --border-width: none;\n  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n  --ripple-color: rgb(41, 35, 38);\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --color-hover: blue;\n}\n\nion-split-pane {\n  --side-width: 40%;\n  --side-max-width: 40%;\n  --border: 10px groove #b3baff;\n}\nion-split-pane ion-menu {\n  border-radius: 30%;\n}\n\n#formularioInicio {\n  background: transparent;\n  z-index: 1050;\n}\n\n#someGrid {\n  background: transparent;\n}\n\n.mi-logo {\n  width: 190px;\n  position: fixed;\n  top: 4%;\n  left: 28%;\n}\n\n.mi-imagen {\n  border: none;\n  box-shadow: none;\n  position: fixed;\n  bottom: -182px;\n  left: 0;\n  width: 100%;\n  height: 1000px;\n  transform: rotate(0deg);\n  object-fit: contain; /* Equivalente a background-size: contain */\n  object-position: left; /* Equivalente a background-position: left */\n  z-index: 999;\n}\n\n.chip-connect {\n  margin-left: 20%;\n  width: 60%;\n  height: 100px;\n  --background: #7da1c4;\n  --color: white;\n  border-radius: 90px;\n}\n\n.mi-imagensita {\n  border: none !important;\n  box-shadow: none !important;\n  outline: none !important;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  width: auto;\n  height: auto;\n  transform: rotate(0deg);\n  background-size: contain;\n  background-position: left;\n  background-color: transparent;\n  image-rendering: crisp-edges;\n  z-index: 999;\n}\n\nion-split-pane:before {\n  --border: 10px groove orangered;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n.custom-toast-multi {\n  transform: translateY(56px) !important;\n}\n\n/*\n  ion-button.warning-button {\n    --background: #F04F23;\n    --background-hover: #F04F23;\n    --background-activated: #F04F23;\n    --background-focused: #F04F23;\n\n    --color: white;\n\n    --border-radius: 60px;\n    --border-color: #85341d;\n    --border-style: solid;\n    --border-width: 1px;\n\n    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\n\n    --ripple-color: rgb(41, 35, 38);\n\n    --padding-top: 10px;\n    --padding-bottom: 10px;\n\n  }\n*/", "",{"version":3,"sources":["webpack://./src/app/sesion/login/login.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ;;AAEE;EACE,UAAA;AACJ;;AACE;;EAEE,YAAA;EACA,8CAAA;AAEJ;;AACE;EACA,yBAAA;EACA,cAAA;EACA,4BAAA;EACA,0BAAA;EAEA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gCAAA;EACA,YAAA;AACF;;AAEA;EACE,qCAAA;EACA,4BAAA;EACA,4BAAA;EACA,0BAAA;EAEA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yCAAA;EACA,mBAAA;EACA,gCAAA;EACA,iBAAA;AAAF;;AAIE;EACE,sBAAA;EACA,kBAAA;EACA,cAAA;AADJ;;AAKI;EACE,kBAAA;EACA,mBAAA;AAFN;AAIG;EACE,kBAAA;EACA,QAAA;EACA,WAAA;AAFL;;AAQE;EACE,kBAAA;EACA,wBAAA;EACA,4BAAA;EACA,0BAAA;EAEA,gBAAA;EAEA,qBAAA;EACA,oBAAA;EACA,oBAAA;EACA,oBAAA;EAEA,4CAAA;EAEA,+BAAA;EAEA,mBAAA;EACA,sBAAA;EACA,mBAAA;AAVJ;;AAaE;EACE,iBAAA;EACA,qBAAA;EAEA,6BAAA;AAXJ;AAaI;EACE,kBAAA;AAXN;;AAeE;EACE,uBAAA;EACA,aAAA;AAZJ;;AAeE;EACE,uBAAA;AAZJ;;AAeE;EACM,YAAA;EACJ,eAAA;EACA,OAAA;EACA,SAAA;AAZJ;;AAeE;EACE,YAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;EACA,OAAA;EACA,WAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA,EAAA,2CAAA;EACA,qBAAA,EAAA,4CAAA;EACA,YAAA;AAZJ;;AAeE;EACE,gBAAA;EACA,UAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;AAZJ;;AAeE;EACE,uBAAA;EACA,2BAAA;EACA,wBAAA;EACA,eAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,wBAAA;EACA,yBAAA;EACA,6BAAA;EACA,4BAAA;EACA,YAAA;AAZJ;;AAeE;EACE,+BAAA;AAZJ;;AAiBE;EACE,YAAA;AAdJ;;AAgBA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAbJ;;AAgBA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AAbJ;;AAiBA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAdJ;;AAiBA;EACE,sCAAA;AAdF;;AAiBE;;;;;;;;;;;;;;;;;;;;;;CAAA","sourcesContent":[":host {\r\n    --img-logo: 30vh;\r\n  }\r\n  \r\n  form{\r\n    width: 86%;\r\n  }\r\n  ion-grid:not(.login-grid),\r\n  ion-row:not(.login-row)  {\r\n    height: 100%;\r\n    background: var(--cs-background-primary, #fff);\r\n  }\r\n\r\n  ion-input.sesion-dato {\r\n  --background: transparent;\r\n  --color: black;\r\n  --placeholder-color: #7a85c4;\r\n  --placeholder-opacity: 0.8;\r\n\r\n  --padding-bottom: 10px;\r\n  --padding-end: 10px;\r\n  --padding-start: 10px;\r\n  --padding-top: 10px;\r\n  border: 1px solid lightgray;\r\n  border-radius: 30px;\r\n  --highlight-color-focused : white;\r\n  height: 50px;\r\n}\r\n\r\nion-input.login-dato{\r\n  --background: var(--quaterniaryColor);\r\n  --color: var(--primaryColor);\r\n  --placeholder-color: #7a85c4;\r\n  --placeholder-opacity: 0.8;\r\n\r\n  --padding-bottom: 10px;\r\n  --padding-end: 10px;\r\n  --padding-start: 10px;\r\n  --padding-top: 10px;\r\n  border: 1px solid var(--quaterniaryColor);\r\n  border-radius: 30px;\r\n  --highlight-color-focused : white;\r\n  font-weight: bold;\r\n}\r\n  \r\n  \r\n  ion-img {\r\n    width: var(--img-logo);\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  ion-item {\r\n    ion-input {\r\n      --padding-end: 8px;\r\n      --margin-right: 8px;\r\n    }\r\n   ion-icon {\r\n     position: absolute;\r\n     right: 0;\r\n     bottom: 8px\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  ion-button.warning-button {\r\n    --background: none;\r\n    --background-hover: none;\r\n    --background-activated: none;\r\n    --background-focused: none;\r\n  \r\n    --color: #F04F23;\r\n  \r\n    --border-radius: 60px;\r\n    --border-color: none;\r\n    --border-style: none;\r\n    --border-width: none;\r\n  \r\n    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\r\n  \r\n    --ripple-color: rgb(41, 35, 38);\r\n  \r\n    --padding-top: 10px;\r\n    --padding-bottom: 10px;\r\n    --color-hover: blue;\r\n  }\r\n\r\n  ion-split-pane {\r\n    --side-width: 40%;\r\n    --side-max-width: 40%;\r\n\r\n    --border: 10px groove #b3baff;\r\n\r\n    ion-menu{\r\n      border-radius:30%;\r\n    }\r\n  }\r\n\r\n  #formularioInicio{\r\n    background: transparent;\r\n    z-index: 1050;\r\n  }\r\n\r\n  #someGrid{\r\n    background: transparent;\r\n  }\r\n\r\n  .mi-logo{\r\n        width: 190px;\r\n    position: fixed;\r\n    top: 4%;\r\n    left: 28%;\r\n  }\r\n\r\n  .mi-imagen{\r\n    border: none;\r\n    box-shadow: none;\r\n    position: fixed;\r\n    bottom: -182px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1000px;\r\n    transform: rotate(0deg);\r\n    object-fit: contain;   /* Equivalente a background-size: contain */\r\n    object-position: left; /* Equivalente a background-position: left */\r\n    z-index: 999;\r\n  }\r\n\r\n  .chip-connect {\r\n    margin-left: 20%;\r\n    width: 60%;\r\n    height: 100px;\r\n    --background: #7da1c4;\r\n    --color: white;\r\n    border-radius: 90px;\r\n  }\r\n\r\n  .mi-imagensita{\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 0px;\r\n    width: auto;\r\n    height: auto;\r\n    transform: rotate(0deg);\r\n    background-size: contain;\r\n    background-position: left;\r\n    background-color: transparent;\r\n    image-rendering: crisp-edges;\r\n    z-index: 999;\r\n  }\r\n\r\n  ion-split-pane:before {\r\n    --border: 10px groove orangered;\r\n  }\r\n\r\n  \r\n\r\n  ion-grid{\r\n    height: 100%;\r\n}\r\nion-row{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\nion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\n.custom-toast-multi{\r\n  transform: translateY(56px) !important;\r\n}\r\n\r\n  /*\r\n  ion-button.warning-button {\r\n    --background: #F04F23;\r\n    --background-hover: #F04F23;\r\n    --background-activated: #F04F23;\r\n    --background-focused: #F04F23;\r\n  \r\n    --color: white;\r\n  \r\n    --border-radius: 60px;\r\n    --border-color: #85341d;\r\n    --border-style: solid;\r\n    --border-width: 1px;\r\n  \r\n    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);\r\n  \r\n    --ripple-color: rgb(41, 35, 38);\r\n  \r\n    --padding-top: 10px;\r\n    --padding-bottom: 10px;\r\n    \r\n  }\r\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46035:
/*!**********************************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"alert alert-danger\">{{message}}</div>\r\n\r\n";

/***/ }),

/***/ 68418:
/*!*********************************************************!*\
  !*** ./src/app/sesion/login/login.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- lOGIN FROMA --COMPONENT 1 -->\r\n    <!-- Content -->\r\n    <ion-content style=\"position: absolute;bottom:0;left:0; overflow: hidden; overflow-y: hidden;\">\r\n      <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n      <ion-footer *ngIf=\"isLoading == true\"></ion-footer>\r\n\r\n      \r\n\r\n      <strong></strong>\r\n      <img id=\"logoHelp\" class=\"mi-logo\" src=\"../../../assets/logos/help.png\" alt=\"Ficohsa Waves\" />\r\n\r\n      <img id=\"olaAbajo\" class=\"mi-imagen\" src=\"../../../assets/materiales/ola_abajo.svg\" alt=\"Ficohsa Waves\" />\r\n      <img id=\"olaArriba\" class=\"mi-imagensita\" src=\"../../../assets/materiales/ola_arriba.svg\" alt=\"Ficohsa Waves\"/>\r\n      <ion-footer style=\"position: fixed;\r\n      bottom: 0;\r\n      left: 0;\r\n      width: 50%;\r\n      margin: 0;\r\n      padding: 0;\r\n      height: 100%;\r\n      box-shadow: none;\r\n      border: none;\r\n      margin-left: 26%;\r\n      z-index: 1050;\">\r\n        <ion-grid id=\"someGrid\" style=\"background: transparent;\" class=\"login-grid\">\r\n          <ion-row style=\"margin-left: -5px; margin-right: 2px;\" class=\"login-row\">\r\n            <ion-col size=\"12\">\r\n              <form (ngSubmit)=\"login()\" [formGroup]=\"credenciales\" id=\"loginform\">\r\n                <ion-col class=\"ion-padding\" size=\"12\" size-md=\"10\" push-md=\"1\">\r\n\r\n                  <ion-label style=\"padding-left: 0; margin-left: -15px; color: #0058CB;\">Correo electrónico</ion-label>\r\n                  <ion-input class=\"sesion-dato\" required type=\"email\" formControlName=\"user\" (ionChange)=\"walkEmail($event)\" (ionBlur)=\"validateEmail()\" [(ngModel)]=\"item.user\" \r\n                      (click)=\"hideRegister()\" onfocusin=\"readInput($event)\" name=\"usernamevalue\" placeholder=\"Introduzca su dirección email\" label=\"Correo electrónico\"> \r\n                      </ion-input>\r\n\r\n                      <br>\r\n                      <ion-label style=\"padding-left: 0; margin-left: 0px; color: #0058CB;\">Contraseña</ion-label>\r\n                      <ion-input class=\"sesion-dato\" required [type]=\"isVisible ? 'text' : 'password'\" formControlName=\"password\" (ionChange)=\"validatePassword()\" [(ngModel)]=\"item.password\"\r\n                      (click)=\"hideRegister()\" placeholder=\"Introduzca su clave de acceso\"></ion-input>\r\n\r\n                      <ion-icon id=\"eyeButton\" [name]=\"isVisible ? 'eye-off' : 'eye'\" aria-hidden=\"true\" color=\"primary\" style=\"    float: right;\r\n                        font-size: 1.5rem;\r\n                        z-index: 1090;\r\n                        position: absolute;\r\n                        right: -500px;\r\n                        bottom: 23%;\"\r\n                        (click)=\"toggleVisual()\">\r\n                      </ion-icon>\r\n                    \r\n                </ion-col>\r\n                <ion-col class=\"ion-padding\" size=\"12\" size-md=\"10\" push-md=\"1\">\r\n                  <ion-row class=\"ion-padding-top ion-margin-top\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding ion-align-self-center\">\r\n                      <ion-button class=\"button-round ion-text-capitalize\" expand=\"full\" shape=\"round\" type=\"submit\" [disabled]=\"!credenciales.valid\"\r\n                      color=\"primary\" style=\"height: 50px;\">\r\n                        Iniciar Sesion\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row class=\"ion-padding-top ion-margin-top login-row\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding ion-align-self-center\">\r\n                      <ion-button class=\"button-round ion-text-capitalize warning-button ion-align-self-right\" shape=\"round\"\r\n                      style=\"color: #F04F23;float: right;\"\r\n                      fill=\"outline\" (click)=\"recoveryPassword()\" >\r\n                        Recuperar Contraseña\r\n                      </ion-button>\r\n  \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col> \r\n              </form>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-footer>\r\n      \r\n    </ion-content>\r\n\r\n    <ion-grid id=\"connectIndicatorLogin\" style=\"background: transparent; height: 0px;padding: 0; display: none; position: absolute;left: 0; top: 0; z-index: 1000;\r\n        width: 100%;\" (click)=\"permitirGPS(conectividadStat)\">\r\n        <ion-row style=\"width: 100%;\">\r\n          <ion-col size=\"12\">\r\n            <ion-chip class=\"chip-connect\">\r\n              <ion-icon name=\"locate\" style=\"position: absolute;\r\n              left: 220px;\r\n              color: white;\r\n              font-size: 2rem;\"\r\n              ></ion-icon>\r\n\r\n              <ion-label style=\"margin-left: 250px; font-size: 1.3rem;\">\r\n                {{estadoConexionGPS}} <!--span>{{estadoConexionGPS}}</span -->\r\n              </ion-label>\r\n              <!--ion-icon name=\"close-circle\" style=\"position: absolute;\r\n              right: 15px;\r\n              color: white;\r\n              font-size: 1.6rem;\"\r\n              ></ion-icon -->\r\n            </ion-chip>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>";

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_login_login_module_ts.js.map