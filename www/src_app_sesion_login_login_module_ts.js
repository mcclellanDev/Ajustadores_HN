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
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
      var _ref = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, urlRequest) {
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
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
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
    }).catch(() => {});
    capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_10__.SecureStoragePlugin.get({
      key: 'Password'
    }).then(result => {
      this.item.password = result.value;
      this.passwordCache = this.item.password;
      console.log('Password retrieved from secure storage:', this.item.password);
    }).catch(() => {});
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
      if (this.platform.is('hybrid')) {
        _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_5__.Keyboard.addListener('keyboardDidHide', () => {
          this.showRegister();
        });
      }
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
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        var _ref = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.isLoading = false;
          console.log(res);
          const alert = yield _this.alert.create({
            cssClass: 'login-menu-alert',
            header: 'Fallo inicio de sesión',
            message: res.error.Message,
            buttons: [{
              text: '',
              role: 'cancel',
              cssClass: 'logout-menu-button logout-menu-danger'
            }, {
              text: '',
              role: 'cancel',
              cssClass: 'logout-menu-button logout-menu-danger'
            }, {
              text: 'OK',
              role: 'cancel',
              cssClass: 'logout-menu-button logout-menu-accept'
            }]
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
        var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
___CSS_LOADER_EXPORT___.push([module.id, ":host {\n  display: block;\n  height: 100%;\n}\n\n.login-page {\n  --background: #f6f9fc;\n  overflow: hidden;\n}\n\n.login-page::part(scroll) {\n  overflow: hidden;\n}\n\n.login-shell {\n  box-sizing: border-box;\n  display: grid;\n  gap: clamp(18px, 4vw, 48px);\n  grid-template-columns: minmax(260px, 0.9fr) minmax(340px, 460px);\n  min-height: 100%;\n  padding: clamp(24px, 4vw, 54px);\n  place-items: center;\n  position: relative;\n  z-index: 2;\n}\n\n.login-wave {\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  position: fixed;\n  transform: rotate(0deg);\n  z-index: 0;\n}\n\n.login-wave-top {\n  background-color: transparent;\n  height: auto;\n  image-rendering: crisp-edges;\n  outline: none;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.login-wave-bottom {\n  bottom: -182px;\n  height: 1000px;\n  left: 0;\n  max-width: none;\n  object-fit: contain;\n  object-position: left;\n  width: 100%;\n}\n\n.login-brand {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n  justify-self: stretch;\n  max-width: 520px;\n  padding-left: clamp(4px, 2vw, 28px);\n}\n\n.login-logo {\n  height: auto;\n  width: clamp(170px, 18vw, 250px);\n}\n\n.login-brand-copy {\n  color: #0f315f;\n}\n\n.login-brand-copy p,\n.login-form-header p {\n  color: #0058cb;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0 0 8px;\n  text-transform: uppercase;\n}\n\n.login-brand-copy h1 {\n  color: #123662;\n  font-size: clamp(2rem, 5vw, 4.8rem);\n  font-weight: 850;\n  line-height: 0.98;\n  margin: 0;\n  max-width: 520px;\n}\n\n.login-panel {\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(0, 88, 203, 0.1);\n  border-radius: 8px;\n  box-shadow: 0 24px 60px rgba(18, 54, 98, 0.16);\n  box-sizing: border-box;\n  justify-self: stretch;\n  max-width: 460px;\n  padding: clamp(22px, 4vw, 34px);\n  width: 100%;\n}\n\n.login-form {\n  display: grid;\n  gap: 12px;\n  width: 100%;\n}\n\n.login-form-header {\n  margin-bottom: 6px;\n}\n\n.login-form-header h2 {\n  color: #123662;\n  font-size: clamp(1.65rem, 3vw, 2.35rem);\n  font-weight: 850;\n  line-height: 1;\n  margin: 0;\n}\n\n.login-field-label {\n  color: #315b80;\n  display: block;\n  font-size: 0.86rem;\n  font-weight: 800;\n  margin: 8px 0 -2px;\n}\n\nion-input.sesion-dato {\n  --background: #ffffff;\n  --color: #101828;\n  --highlight-color-focused: transparent;\n  --padding-bottom: 0;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 0;\n  --placeholder-color: #667085;\n  --placeholder-opacity: 0.72;\n  border: 1px solid #cbd7e6;\n  border-radius: 8px;\n  font-size: 1rem;\n  height: 52px;\n}\n\nion-input.sesion-dato.ion-focused {\n  border-color: #0058cb;\n  box-shadow: 0 0 0 3px rgba(0, 88, 203, 0.12);\n}\n\n.password-field {\n  position: relative;\n}\n\n.password-input {\n  --padding-end: 54px;\n}\n\n.password-toggle {\n  --background-hover: rgba(0, 88, 203, 0.08);\n  --border-radius: 8px;\n  --color: #0058cb;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  height: 44px;\n  margin: 0;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 44px;\n  z-index: 3;\n}\n\n.password-toggle ion-icon {\n  font-size: 1.35rem;\n}\n\n.login-submit {\n  --background: #0058cb;\n  --background-activated: #004aa8;\n  --background-hover: #0b66de;\n  --border-radius: 8px;\n  --box-shadow: 0 14px 24px rgba(0, 88, 203, 0.22);\n  --color: #ffffff;\n  height: 52px;\n  margin-top: 16px;\n}\n\n.login-submit::part(native) {\n  color: #ffffff;\n}\n\n.login-submit.button-disabled::part(native) {\n  color: #ffffff;\n}\n\n.recovery-button {\n  --background-hover: rgba(240, 79, 35, 0.08);\n  --border-radius: 8px;\n  --color: #f04f23;\n  font-weight: 700;\n  height: 44px;\n  margin-top: 2px;\n}\n\nion-spinner {\n  height: 20%;\n  left: 40%;\n  position: fixed;\n  top: 28%;\n  width: 20%;\n  z-index: 999;\n}\n\n#spinFooter {\n  background: black;\n  bottom: 0;\n  height: 100vh;\n  opacity: 0.6;\n  position: fixed;\n  width: 100vw;\n  z-index: 900;\n}\n\n.connect-indicator {\n  background: transparent;\n  display: none;\n  height: 0;\n  left: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.connect-indicator ion-row {\n  width: 100%;\n}\n\n.chip-connect {\n  --background: #7da1c4;\n  --color: white;\n  border-radius: 90px;\n  height: 74px;\n  margin-left: 20%;\n  width: 60%;\n}\n\n.chip-connect ion-icon {\n  color: white;\n  font-size: 1.5rem;\n  margin-left: 14px;\n}\n\n.chip-connect ion-label {\n  font-size: 1rem;\n}\n\n.custom-toast-multi {\n  transform: translateY(56px) !important;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 500px;\n  --max-width: 500px;\n  --width: 500px;\n}\n::ng-deep .login-menu-alert {\n  --backdrop-opacity: 0.42;\n}\n::ng-deep .login-menu-alert .alert-wrapper {\n  --width: 430px;\n  --min-width: 430px;\n  --max-width: 430px;\n  border-radius: 18px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n  overflow: hidden;\n}\n::ng-deep .login-menu-alert .alert-head {\n  background: #0058cb;\n  padding: 18px 22px 16px;\n}\n::ng-deep .login-menu-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n::ng-deep .login-menu-alert .alert-sub-title {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  margin-top: 4px;\n  text-transform: uppercase;\n}\n::ng-deep .login-menu-alert .alert-message {\n  color: #15305f;\n  font-size: 0.96rem;\n  font-weight: 700;\n  line-height: 1.35;\n  padding: 18px 22px 4px;\n}\n::ng-deep .login-menu-alert .alert-button-group {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  padding: 14px 22px 22px;\n}\n::ng-deep .login-menu-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 46px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 6px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .login-menu-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .login-menu-alert .logout-menu-danger {\n  border-color: white;\n  color: white;\n}\n::ng-deep .login-menu-alert .logout-menu-cache {\n  border-color: white;\n  color: white;\n}\n::ng-deep .login-menu-alert .logout-menu-cancel {\n  border-color: white;\n  color: white;\n}\n::ng-deep .login-menu-alert .logout-menu-accept {\n  border-color: var(--blueGrayColor);\n  color: var(--blueGrayColor);\n}\n::ng-deep .cache-switch-alert {\n  --backdrop-opacity: 0.46;\n}\n::ng-deep .cache-switch-alert .alert-wrapper {\n  --width: 500px;\n  --min-width: 500px;\n  --max-width: 500px;\n  border-radius: 18px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.3);\n  overflow: hidden;\n}\n::ng-deep .cache-switch-alert .alert-head {\n  background: #15305f;\n  padding: 18px 22px 16px;\n}\n::ng-deep .cache-switch-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n::ng-deep .cache-switch-alert .alert-sub-title {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  margin-top: 4px;\n  text-transform: uppercase;\n}\n::ng-deep .cache-switch-alert .alert-message {\n  color: #15305f;\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1.45;\n  padding: 18px 22px 6px;\n}\n::ng-deep .cache-switch-alert .alert-button-group {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 14px 22px 22px;\n}\n::ng-deep .cache-switch-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 800;\n  height: 46px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 6px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .cache-switch-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .cache-switch-alert .cache-switch-cancel {\n  border-color: #b9c8d8;\n  color: #15305f;\n}\n::ng-deep .cache-switch-alert .cache-switch-confirm {\n  border-color: #ef5a22;\n  color: #ef5a22;\n}\n\n@media (max-width: 699px) {\n  ::ng-deep .login-menu-alert,\n  ::ng-deep .cache-switch-alert {\n    align-items: center;\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n  ::ng-deep .login-menu-alert .alert-wrapper,\n  ::ng-deep .cache-switch-alert .alert-wrapper {\n    --width: calc(100vw - 32px);\n    --min-width: 0;\n    --max-width: 360px;\n    border-radius: 14px;\n  }\n  ::ng-deep .login-menu-alert .alert-head,\n  ::ng-deep .cache-switch-alert .alert-head {\n    padding: 15px 18px 13px;\n  }\n  ::ng-deep .login-menu-alert .alert-title,\n  ::ng-deep .cache-switch-alert .alert-title {\n    font-size: 1rem;\n  }\n  ::ng-deep .login-menu-alert .alert-sub-title,\n  ::ng-deep .cache-switch-alert .alert-sub-title {\n    font-size: 0.72rem;\n  }\n  ::ng-deep .login-menu-alert .alert-message,\n  ::ng-deep .cache-switch-alert .alert-message {\n    font-size: 0.88rem;\n    padding: 15px 18px 2px;\n  }\n  ::ng-deep .login-menu-alert .alert-button-group,\n  ::ng-deep .cache-switch-alert .alert-button-group {\n    gap: 6px;\n    padding: 12px 14px 16px;\n  }\n  ::ng-deep .login-menu-alert .alert-button,\n  ::ng-deep .cache-switch-alert .alert-button {\n    border-radius: 9px;\n    font-size: 0.69rem;\n    height: 42px;\n    padding-inline: 2px;\n  }\n  ::ng-deep .cache-switch-alert .alert-wrapper {\n    --width: calc(100vw - 32px);\n    --min-width: 0;\n    --max-width: 370px;\n  }\n  ::ng-deep .cache-switch-alert .alert-message {\n    font-size: 0.82rem;\n    line-height: 1.35;\n    padding: 14px 16px 2px;\n  }\n  ::ng-deep .cache-switch-alert .alert-button-group {\n    gap: 8px;\n    padding: 12px 14px 16px;\n  }\n  ::ng-deep .cache-switch-alert .alert-button {\n    font-size: 0.72rem;\n    height: 42px;\n  }\n}\n@media (orientation: portrait), (max-width: 720px) {\n  .login-page::part(scroll) {\n    overflow-y: auto;\n  }\n  .login-shell {\n    align-content: start;\n    gap: 22px;\n    grid-template-columns: 1fr;\n    min-height: 100%;\n    padding: max(22px, env(safe-area-inset-top)) 18px max(20px, env(safe-area-inset-bottom));\n  }\n  .login-wave-top {\n    max-width: 560px;\n    opacity: 0.9;\n    width: 76vw;\n  }\n  .login-wave-bottom {\n    bottom: -18vh;\n    height: 68vh;\n    left: -36vw;\n    width: 172vw;\n  }\n  .login-brand {\n    align-items: center;\n    gap: 12px;\n    max-width: none;\n    padding: 8px 0 0;\n    text-align: center;\n  }\n  .login-logo {\n    width: clamp(150px, 42vw, 210px);\n  }\n  .login-brand-copy h1 {\n    font-size: clamp(1.85rem, 8vw, 3rem);\n    max-width: 360px;\n  }\n  .login-panel {\n    margin: 0 auto;\n    max-width: 420px;\n    padding: 22px;\n  }\n}\n@media (orientation: landscape) and (max-height: 520px) {\n  .login-shell {\n    gap: 18px;\n    grid-template-columns: minmax(220px, 0.8fr) minmax(330px, 420px);\n    padding: 14px 34px;\n  }\n  .login-brand {\n    gap: 12px;\n  }\n  .login-logo {\n    width: 150px;\n  }\n  .login-brand-copy h1 {\n    font-size: clamp(1.8rem, 5vh, 2.8rem);\n  }\n  .login-panel {\n    padding: 14px 20px;\n  }\n  .login-form {\n    gap: 6px;\n  }\n  .login-form-header {\n    margin-bottom: 0;\n  }\n  .login-form-header h2 {\n    font-size: 1.65rem;\n  }\n  .login-field-label {\n    margin-top: 5px;\n  }\n  ion-input.sesion-dato,\n  .login-submit {\n    height: 42px;\n  }\n  .password-toggle {\n    height: 34px;\n    width: 38px;\n  }\n  .login-submit {\n    margin-top: 10px;\n  }\n  .recovery-button {\n    height: 36px;\n    margin-top: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/sesion/login/login.page.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,YAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,sBAAA;EACA,aAAA;EACA,2BAAA;EACA,gEAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AACF;;AAEA;EACE,YAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;EACA,uBAAA;EACA,UAAA;AACF;;AAEA;EACE,6BAAA;EACA,YAAA;EACA,4BAAA;EACA,aAAA;EACA,QAAA;EACA,MAAA;EACA,WAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,OAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,qBAAA;EACA,gBAAA;EACA,mCAAA;AACF;;AAEA;EACE,YAAA;EACA,gCAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;;EAEE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,mCAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,gBAAA;AACF;;AAEA;EACE,qCAAA;EACA,uCAAA;EACA,kBAAA;EACA,8CAAA;EACA,sBAAA;EACA,qBAAA;EACA,gBAAA;EACA,+BAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,WAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,uCAAA;EACA,gBAAA;EACA,cAAA;EACA,SAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;EACA,sCAAA;EACA,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;EACA,4BAAA;EACA,2BAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;AACF;;AAEA;EACE,qBAAA;EACA,4CAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,0CAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,oBAAA;EACA,gDAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,2CAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,WAAA;EACA,SAAA;EACA,eAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;AACF;;AAEA;EACE,iBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,aAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;AACF;;AAEA;EACE,YAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,sCAAA;AACF;;AAGE;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AAAF;AAGE;EACE,wBAAA;AADJ;AAGI;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,8CAAA;EACA,gBAAA;AADN;AAII;EACE,mBAAA;EACA,uBAAA;AAFN;AAKI;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AAHN;AAMI;EACE,gCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,yBAAA;AAJN;AAOI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AALN;AAQI;EACE,aAAA;EACA,SAAA;EACA,gDAAA;EACA,uBAAA;AANN;AASI;EACE,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;AAPN;AAUI;EACE,uBAAA;AARN;AAWI;EACE,mBAAA;EACA,YAAA;AATN;AAYI;EACE,mBAAA;EACA,YAAA;AAVN;AAaI;EACE,mBAAA;EACA,YAAA;AAXN;AAaI;EACE,kCAAA;EACA,2BAAA;AAXN;AAmBE;EACE,wBAAA;AAjBJ;AAmBI;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,6CAAA;EACA,gBAAA;AAjBN;AAoBI;EACE,mBAAA;EACA,uBAAA;AAlBN;AAqBI;EACE,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,SAAA;EACA,yBAAA;AAnBN;AAsBI;EACE,gCAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,yBAAA;AApBN;AAuBI;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AArBN;AAwBI;EACE,aAAA;EACA,SAAA;EACA,gDAAA;EACA,uBAAA;AAtBN;AAyBI;EACE,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;AAvBN;AA0BI;EACE,uBAAA;AAxBN;AA2BI;EACE,qBAAA;EACA,cAAA;AAzBN;AA4BI;EACE,qBAAA;EACA,cAAA;AA1BN;;AA+BA;EAEI;;IAEE,mBAAA;IACA,iBAAA;IACA,cAAA;EA7BJ;EA+BI;;IACE,2BAAA;IACA,cAAA;IACA,kBAAA;IACA,mBAAA;EA5BN;EA+BI;;IACE,uBAAA;EA5BN;EA+BI;;IACE,eAAA;EA5BN;EA+BI;;IACE,kBAAA;EA5BN;EA+BI;;IACE,kBAAA;IACA,sBAAA;EA5BN;EA+BI;;IACE,QAAA;IACA,uBAAA;EA5BN;EA+BI;;IACE,kBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;EA5BN;EAiCI;IACE,2BAAA;IACA,cAAA;IACA,kBAAA;EA/BN;EAkCI;IACE,kBAAA;IACA,iBAAA;IACA,sBAAA;EAhCN;EAmCI;IACE,QAAA;IACA,uBAAA;EAjCN;EAoCI;IACE,kBAAA;IACA,YAAA;EAlCN;AACF;AAuCA;EACE;IACE,gBAAA;EArCF;EAwCA;IACE,oBAAA;IACA,SAAA;IACA,0BAAA;IACA,gBAAA;IACA,wFAAA;EAtCF;EAyCA;IACE,gBAAA;IACA,YAAA;IACA,WAAA;EAvCF;EA0CA;IACE,aAAA;IACA,YAAA;IACA,WAAA;IACA,YAAA;EAxCF;EA2CA;IACE,mBAAA;IACA,SAAA;IACA,eAAA;IACA,gBAAA;IACA,kBAAA;EAzCF;EA4CA;IACE,gCAAA;EA1CF;EA6CA;IACE,oCAAA;IACA,gBAAA;EA3CF;EA8CA;IACE,cAAA;IACA,gBAAA;IACA,aAAA;EA5CF;AACF;AA+CA;EACE;IACE,SAAA;IACA,gEAAA;IACA,kBAAA;EA7CF;EAgDA;IACE,SAAA;EA9CF;EAiDA;IACE,YAAA;EA/CF;EAkDA;IACE,qCAAA;EAhDF;EAmDA;IACE,kBAAA;EAjDF;EAoDA;IACE,QAAA;EAlDF;EAqDA;IACE,gBAAA;EAnDF;EAsDA;IACE,kBAAA;EApDF;EAuDA;IACE,eAAA;EArDF;EAwDA;;IAEE,YAAA;EAtDF;EAyDA;IACE,YAAA;IACA,WAAA;EAvDF;EA0DA;IACE,gBAAA;EAxDF;EA2DA;IACE,YAAA;IACA,aAAA;EAzDF;AACF","sourcesContent":[":host {\n  display: block;\n  height: 100%;\n}\n\n.login-page {\n  --background: #f6f9fc;\n  overflow: hidden;\n}\n\n.login-page::part(scroll) {\n  overflow: hidden;\n}\n\n.login-shell {\n  box-sizing: border-box;\n  display: grid;\n  gap: clamp(18px, 4vw, 48px);\n  grid-template-columns: minmax(260px, 0.9fr) minmax(340px, 460px);\n  min-height: 100%;\n  padding: clamp(24px, 4vw, 54px);\n  place-items: center;\n  position: relative;\n  z-index: 2;\n}\n\n.login-wave {\n  border: none;\n  box-shadow: none;\n  pointer-events: none;\n  position: fixed;\n  transform: rotate(0deg);\n  z-index: 0;\n}\n\n.login-wave-top {\n  background-color: transparent;\n  height: auto;\n  image-rendering: crisp-edges;\n  outline: none;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.login-wave-bottom {\n  bottom: -182px;\n  height: 1000px;\n  left: 0;\n  max-width: none;\n  object-fit: contain;\n  object-position: left;\n  width: 100%;\n}\n\n.login-brand {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  gap: 26px;\n  justify-self: stretch;\n  max-width: 520px;\n  padding-left: clamp(4px, 2vw, 28px);\n}\n\n.login-logo {\n  height: auto;\n  width: clamp(170px, 18vw, 250px);\n}\n\n.login-brand-copy {\n  color: #0f315f;\n}\n\n.login-brand-copy p,\n.login-form-header p {\n  color: #0058cb;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0 0 8px;\n  text-transform: uppercase;\n}\n\n.login-brand-copy h1 {\n  color: #123662;\n  font-size: clamp(2rem, 5vw, 4.8rem);\n  font-weight: 850;\n  line-height: 0.98;\n  margin: 0;\n  max-width: 520px;\n}\n\n.login-panel {\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(0, 88, 203, 0.10);\n  border-radius: 8px;\n  box-shadow: 0 24px 60px rgba(18, 54, 98, 0.16);\n  box-sizing: border-box;\n  justify-self: stretch;\n  max-width: 460px;\n  padding: clamp(22px, 4vw, 34px);\n  width: 100%;\n}\n\n.login-form {\n  display: grid;\n  gap: 12px;\n  width: 100%;\n}\n\n.login-form-header {\n  margin-bottom: 6px;\n}\n\n.login-form-header h2 {\n  color: #123662;\n  font-size: clamp(1.65rem, 3vw, 2.35rem);\n  font-weight: 850;\n  line-height: 1;\n  margin: 0;\n}\n\n.login-field-label {\n  color: #315b80;\n  display: block;\n  font-size: 0.86rem;\n  font-weight: 800;\n  margin: 8px 0 -2px;\n}\n\nion-input.sesion-dato {\n  --background: #ffffff;\n  --color: #101828;\n  --highlight-color-focused: transparent;\n  --padding-bottom: 0;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 0;\n  --placeholder-color: #667085;\n  --placeholder-opacity: 0.72;\n  border: 1px solid #cbd7e6;\n  border-radius: 8px;\n  font-size: 1rem;\n  height: 52px;\n}\n\nion-input.sesion-dato.ion-focused {\n  border-color: #0058cb;\n  box-shadow: 0 0 0 3px rgba(0, 88, 203, 0.12);\n}\n\n.password-field {\n  position: relative;\n}\n\n.password-input {\n  --padding-end: 54px;\n}\n\n.password-toggle {\n  --background-hover: rgba(0, 88, 203, 0.08);\n  --border-radius: 8px;\n  --color: #0058cb;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  height: 44px;\n  margin: 0;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  width: 44px;\n  z-index: 3;\n}\n\n.password-toggle ion-icon {\n  font-size: 1.35rem;\n}\n\n.login-submit {\n  --background: #0058cb;\n  --background-activated: #004aa8;\n  --background-hover: #0b66de;\n  --border-radius: 8px;\n  --box-shadow: 0 14px 24px rgba(0, 88, 203, 0.22);\n  --color: #ffffff;\n  height: 52px;\n  margin-top: 16px;\n}\n\n.login-submit::part(native) {\n  color: #ffffff;\n}\n\n.login-submit.button-disabled::part(native) {\n  color: #ffffff;\n}\n\n.recovery-button {\n  --background-hover: rgba(240, 79, 35, 0.08);\n  --border-radius: 8px;\n  --color: #f04f23;\n  font-weight: 700;\n  height: 44px;\n  margin-top: 2px;\n}\n\nion-spinner {\n  height: 20%;\n  left: 40%;\n  position: fixed;\n  top: 28%;\n  width: 20%;\n  z-index: 999;\n}\n\n#spinFooter {\n  background: black;\n  bottom: 0;\n  height: 100vh;\n  opacity: 0.6;\n  position: fixed;\n  width: 100vw;\n  z-index: 900;\n}\n\n.connect-indicator {\n  background: transparent;\n  display: none;\n  height: 0;\n  left: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n}\n\n.connect-indicator ion-row {\n  width: 100%;\n}\n\n.chip-connect {\n  --background: #7da1c4;\n  --color: white;\n  border-radius: 90px;\n  height: 74px;\n  margin-left: 20%;\n  width: 60%;\n}\n\n.chip-connect ion-icon {\n  color: white;\n  font-size: 1.5rem;\n  margin-left: 14px;\n}\n\n.chip-connect ion-label {\n  font-size: 1rem;\n}\n\n.custom-toast-multi {\n  transform: translateY(56px) !important;\n}\n\n::ng-deep {\n  .alert-wrapper {\n  --min-width: 500px;\n  --max-width: 500px;\n  --width: 500px;\n  }\n\n  .login-menu-alert {\n    --backdrop-opacity: 0.42;\n\n    .alert-wrapper {\n      --width: 430px;\n      --min-width: 430px;\n      --max-width: 430px;\n      border-radius: 18px;\n      box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n      overflow: hidden;\n    }\n\n    .alert-head {\n      background: #0058cb;\n      padding: 18px 22px 16px;\n    }\n\n    .alert-title {\n      color: #ffffff;\n      font-size: 1.1rem;\n      font-weight: 800;\n      letter-spacing: 0;\n      margin: 0;\n      text-transform: uppercase;\n    }\n\n    .alert-sub-title {\n      color: rgba(255, 255, 255, 0.82);\n      font-size: 0.78rem;\n      font-weight: 700;\n      letter-spacing: 0;\n      margin-top: 4px;\n      text-transform: uppercase;\n    }\n\n    .alert-message {\n      color: #15305f;\n      font-size: 0.96rem;\n      font-weight: 700;\n      line-height: 1.35;\n      padding: 18px 22px 4px;\n    }\n\n    .alert-button-group {\n      display: grid;\n      gap: 10px;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      padding: 14px 22px 22px;\n    }\n\n    .alert-button {\n      background: #ffffff;\n      border: 1.5px solid #d8e4f0;\n      border-radius: 12px;\n      font-size: 0.82rem;\n      font-weight: 800;\n      height: 46px;\n      justify-content: center;\n      letter-spacing: 0;\n      margin: 0;\n      min-width: 0;\n      padding-inline: 6px;\n      text-transform: none;\n      width: 100%;\n    }\n\n    .alert-button-inner {\n      justify-content: center;\n    }\n\n    .logout-menu-danger {\n      border-color: white;\n      color: white;\n    }\n\n    .logout-menu-cache {\n      border-color: white;\n      color: white;\n    }\n\n    .logout-menu-cancel {\n      border-color: white;\n      color: white;\n    }\n    .logout-menu-accept {\n      border-color: var(--blueGrayColor);\n      color: var(--blueGrayColor);\n    }\n  }\n\n\n  \n  \n\n  .cache-switch-alert {\n    --backdrop-opacity: 0.46;\n\n    .alert-wrapper {\n      --width: 500px;\n      --min-width: 500px;\n      --max-width: 500px;\n      border-radius: 18px;\n      box-shadow: 0 22px 55px rgba(21, 48, 95, 0.30);\n      overflow: hidden;\n    }\n\n    .alert-head {\n      background: #15305f;\n      padding: 18px 22px 16px;\n    }\n\n    .alert-title {\n      color: #ffffff;\n      font-size: 1.1rem;\n      font-weight: 800;\n      letter-spacing: 0;\n      margin: 0;\n      text-transform: uppercase;\n    }\n\n    .alert-sub-title {\n      color: rgba(255, 255, 255, 0.82);\n      font-size: 0.78rem;\n      font-weight: 700;\n      letter-spacing: 0;\n      margin-top: 4px;\n      text-transform: uppercase;\n    }\n\n    .alert-message {\n      color: #15305f;\n      font-size: 0.94rem;\n      font-weight: 700;\n      line-height: 1.45;\n      padding: 18px 22px 6px;\n    }\n\n    .alert-button-group {\n      display: grid;\n      gap: 10px;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      padding: 14px 22px 22px;\n    }\n\n    .alert-button {\n      background: #ffffff;\n      border: 1.5px solid #d8e4f0;\n      border-radius: 12px;\n      font-size: 0.84rem;\n      font-weight: 800;\n      height: 46px;\n      justify-content: center;\n      letter-spacing: 0;\n      margin: 0;\n      min-width: 0;\n      padding-inline: 6px;\n      text-transform: none;\n      width: 100%;\n    }\n\n    .alert-button-inner {\n      justify-content: center;\n    }\n\n    .cache-switch-cancel {\n      border-color: #b9c8d8;\n      color: #15305f;\n    }\n\n    .cache-switch-confirm {\n      border-color: #ef5a22;\n      color: #ef5a22;\n    }\n  }\n}\n\n@media (max-width: 699px) {\n  ::ng-deep {\n    .login-menu-alert,\n    .cache-switch-alert {\n      align-items: center;\n      padding-bottom: 0;\n      padding-top: 0;\n\n      .alert-wrapper {\n        --width: calc(100vw - 32px);\n        --min-width: 0;\n        --max-width: 360px;\n        border-radius: 14px;\n      }\n\n      .alert-head {\n        padding: 15px 18px 13px;\n      }\n\n      .alert-title {\n        font-size: 1rem;\n      }\n\n      .alert-sub-title {\n        font-size: 0.72rem;\n      }\n\n      .alert-message {\n        font-size: 0.88rem;\n        padding: 15px 18px 2px;\n      }\n\n      .alert-button-group {\n        gap: 6px;\n        padding: 12px 14px 16px;\n      }\n\n      .alert-button {\n        border-radius: 9px;\n        font-size: 0.69rem;\n        height: 42px;\n        padding-inline: 2px;\n      }\n    }\n\n    .cache-switch-alert {\n      .alert-wrapper {\n        --width: calc(100vw - 32px);\n        --min-width: 0;\n        --max-width: 370px;\n      }\n\n      .alert-message {\n        font-size: 0.82rem;\n        line-height: 1.35;\n        padding: 14px 16px 2px;\n      }\n\n      .alert-button-group {\n        gap: 8px;\n        padding: 12px 14px 16px;\n      }\n\n      .alert-button {\n        font-size: 0.72rem;\n        height: 42px;\n      }\n    }\n  }\n}\n\n@media (orientation: portrait), (max-width: 720px) {\n  .login-page::part(scroll) {\n    overflow-y: auto;\n  }\n\n  .login-shell {\n    align-content: start;\n    gap: 22px;\n    grid-template-columns: 1fr;\n    min-height: 100%;\n    padding: max(22px, env(safe-area-inset-top)) 18px max(20px, env(safe-area-inset-bottom));\n  }\n\n  .login-wave-top {\n    max-width: 560px;\n    opacity: 0.9;\n    width: 76vw;\n  }\n\n  .login-wave-bottom {\n    bottom: -18vh;\n    height: 68vh;\n    left: -36vw;\n    width: 172vw;\n  }\n\n  .login-brand {\n    align-items: center;\n    gap: 12px;\n    max-width: none;\n    padding: 8px 0 0;\n    text-align: center;\n  }\n\n  .login-logo {\n    width: clamp(150px, 42vw, 210px);\n  }\n\n  .login-brand-copy h1 {\n    font-size: clamp(1.85rem, 8vw, 3rem);\n    max-width: 360px;\n  }\n\n  .login-panel {\n    margin: 0 auto;\n    max-width: 420px;\n    padding: 22px;\n  }\n}\n\n@media (orientation: landscape) and (max-height: 520px) {\n  .login-shell {\n    gap: 18px;\n    grid-template-columns: minmax(220px, 0.8fr) minmax(330px, 420px);\n    padding: 14px 34px;\n  }\n\n  .login-brand {\n    gap: 12px;\n  }\n\n  .login-logo {\n    width: 150px;\n  }\n\n  .login-brand-copy h1 {\n    font-size: clamp(1.8rem, 5vh, 2.8rem);\n  }\n\n  .login-panel {\n    padding: 14px 20px;\n  }\n\n  .login-form {\n    gap: 6px;\n  }\n\n  .login-form-header {\n    margin-bottom: 0;\n  }\n\n  .login-form-header h2 {\n    font-size: 1.65rem;\n  }\n\n  .login-field-label {\n    margin-top: 5px;\n  }\n\n  ion-input.sesion-dato,\n  .login-submit {\n    height: 42px;\n  }\n\n  .password-toggle {\n    height: 34px;\n    width: 38px;\n  }\n\n  .login-submit {\n    margin-top: 10px;\n  }\n\n  .recovery-button {\n    height: 36px;\n    margin-top: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46035:
/*!**********************************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"alert alert-danger\">{{message}}</div>\n\n";

/***/ }),

/***/ 68418:
/*!*********************************************************!*\
  !*** ./src/app/sesion/login/login.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"login-page\" [fullscreen]=\"true\">\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\n\n  <img id=\"olaArriba\" class=\"login-wave login-wave-top\" src=\"../../../assets/materiales/ola_arriba.svg\" alt=\"\" />\n  <img id=\"olaAbajo\" class=\"login-wave login-wave-bottom\" src=\"../../../assets/materiales/ola_abajo.svg\" alt=\"\" />\n\n  <main class=\"login-shell\">\n    <section class=\"login-brand\" aria-label=\"HELP Ajustadores\">\n      <img id=\"logoHelp\" class=\"login-logo\" src=\"../../../assets/logos/help.png\" alt=\"HELP\" />\n      <div class=\"login-brand-copy\">\n        <p>HELP Ajustadores</p>\n        <h1>Acceso de ajustadores</h1>\n      </div>\n    </section>\n\n    <section class=\"login-panel\">\n      <form (ngSubmit)=\"login()\" [formGroup]=\"credenciales\" id=\"loginform\" class=\"login-form\">\n        <header class=\"login-form-header\">\n          <p>Iniciar sesión</p>\n          <h2>Bienvenido</h2>\n        </header>\n\n        <label class=\"login-field-label\" for=\"login-email\">Correo electrónico</label>\n        <ion-input\n          id=\"login-email\"\n          class=\"sesion-dato\"\n          required\n          type=\"email\"\n          formControlName=\"user\"\n          (ionChange)=\"walkEmail($event)\"\n          (ionBlur)=\"validateEmail()\"\n          [(ngModel)]=\"item.user\"\n          name=\"usernamevalue\"\n          placeholder=\"correo@dominio.com\">\n        </ion-input>\n\n        <label class=\"login-field-label\" for=\"login-password\">Contraseña</label>\n        <div class=\"password-field\">\n          <ion-input\n            id=\"login-password\"\n            class=\"sesion-dato password-input\"\n            required\n            [type]=\"isVisible ? 'text' : 'password'\"\n            formControlName=\"password\"\n            (ionChange)=\"validatePassword()\"\n            [(ngModel)]=\"item.password\"\n            placeholder=\"Clave de acceso\">\n          </ion-input>\n\n          <ion-button class=\"password-toggle\" fill=\"clear\" type=\"button\" (click)=\"toggleVisual()\" aria-label=\"Mostrar u ocultar contraseña\">\n            <ion-icon [name]=\"isVisible ? 'eye-off' : 'eye'\" aria-hidden=\"true\"></ion-icon>\n          </ion-button>\n        </div>\n\n        <ion-button class=\"login-submit ion-text-capitalize\" expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"!credenciales.valid\">\n          Iniciar sesión\n        </ion-button>\n\n        <ion-button class=\"recovery-button ion-text-capitalize\" expand=\"block\" fill=\"clear\" shape=\"round\" type=\"button\" (click)=\"recoveryPassword()\">\n          Recuperar contraseña\n        </ion-button>\n      </form>\n    </section>\n  </main>\n</ion-content>\n\n<ion-grid id=\"connectIndicatorLogin\" class=\"connect-indicator\" (click)=\"permitirGPS(conectividadStat)\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-chip class=\"chip-connect\">\n        <ion-icon name=\"locate\"></ion-icon>\n        <ion-label>{{estadoConexionGPS}}</ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_login_login_module_ts.js.map