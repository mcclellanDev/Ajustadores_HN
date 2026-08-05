(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_prepare-audience_prepare-audience_module_ts"],{

/***/ 80960:
/*!*********************************************************************!*\
  !*** ./src/app/prepare-audience/prepare-audience-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareAudiencePageRoutingModule": () => (/* binding */ PrepareAudiencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _prepare_audience_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepare-audience.page */ 43440);




const routes = [{
  path: '',
  component: _prepare_audience_page__WEBPACK_IMPORTED_MODULE_0__.PrepareAudiencePage
}];
let PrepareAudiencePageRoutingModule = class PrepareAudiencePageRoutingModule {};
PrepareAudiencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PrepareAudiencePageRoutingModule);


/***/ }),

/***/ 32619:
/*!*************************************************************!*\
  !*** ./src/app/prepare-audience/prepare-audience.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareAudiencePageModule": () => (/* binding */ PrepareAudiencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _prepare_audience_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepare-audience-routing.module */ 80960);
/* harmony import */ var _prepare_audience_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prepare-audience.page */ 43440);







let PrepareAudiencePageModule = class PrepareAudiencePageModule {};
PrepareAudiencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prepare_audience_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrepareAudiencePageRoutingModule],
  declarations: [_prepare_audience_page__WEBPACK_IMPORTED_MODULE_1__.PrepareAudiencePage]
})], PrepareAudiencePageModule);


/***/ }),

/***/ 43440:
/*!***********************************************************!*\
  !*** ./src/app/prepare-audience/prepare-audience.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrepareAudiencePage": () => (/* binding */ PrepareAudiencePage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _prepare_audience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prepare-audience.page.html?ngResource */ 50877);
/* harmony import */ var _prepare_audience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prepare-audience.page.scss?ngResource */ 97680);
/* harmony import */ var _prepare_audience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prepare_audience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ 84465);











let PrepareAudiencePage = class PrepareAudiencePage {
  constructor(router, alert, api, toaster) {
    this.router = router;
    this.alert = alert;
    this.api = api;
    this.toaster = toaster;
    this.isLoading = false;
    this.results = [];
    this.abogadosAudiencias = [];
    this.canScheduleAudience = false;
    this.missingClientDataMessage = 'No es posible agendar esta audiencia todavía. Primero se deben enviar los datos del formulario de cliente para generar la información base de la atención.';
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    console.log(state.data[1]);
    this.idAtencion = state.data[1].idAtencion;
    console.log('La atencion es ' + this.idAtencion);
  }
  ngOnInit() {
    var _this = this;
    console.log('La atencion es ' + this.idAtencion);
    console.log('EL agente actual es ');
    console.dir(this.api.currentUser);
    this.idAgente = this.api.currentUser.ProveedorAgenteId;
    setTimeout(() => {
      this.api.Abogados(3).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('fin');
      }))).subscribe(res => {
        if (res) {
          this.abogadosAudiencias = res;
          this.results = res;
          console.log('LOs abogados son ');
          console.dir(this.abogadosAudiencias);
        }
      }, /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.api.ObtenerIdTablaAjustador(this.idAtencion).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.log('fin');
      }))).subscribe(res => {
        //alert('Este es el id de tabla de ajustador '+res.length);
        if (Array.isArray(res) && res.length > 0 && res[0]?.IdAudiencia) {
          //alert('Este es el id de tabla de ajustador '+res);
          console.log('Este es el id de tabla de ajustador ');
          console.dir(res);
          //alert('Este es el id de tabla de ajustador '+res[0].IdAudiencia);
          this.canScheduleAudience = true;
          jquery__WEBPACK_IMPORTED_MODULE_3__('#submitAudience').prop('disabled', false);
          let disId = res[0].IdAudiencia.toString();
          this.idTablaDeAjustador = res[0].IdAudiencia.toString(); //disId.replace(/,/g, '');
          console.dir('Este es el id de tabla de ajustador ' + this.idTablaDeAjustador);
          console.dir(this.idTablaDeAjustador);
          /**/
        } else {
          this.blockAudienceScheduling();
        }
      }, error => {
        console.log('Este es el error ' + error);
        console.dir(error.error.Message);
        this.blockAudienceScheduling();
      });
    }, 1000);
    this.abogadoNombre = 'Seleccionar Abogado';
  }
  closeAbogadosSearch() {
    jquery__WEBPACK_IMPORTED_MODULE_3__('#abogadosDatos').fadeIn('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_3__('#abogadosLista').fadeOut('xslow');
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.abogadosAudiencias.filter(d => d.AgenteNombre.toLowerCase().indexOf(query) > -1);
  }
  goSearch() {
    this.results = this.abogadosAudiencias;
    console.dir(this.results);
    jquery__WEBPACK_IMPORTED_MODULE_3__('#abogadosDatos').fadeOut('xslow');
    jquery__WEBPACK_IMPORTED_MODULE_3__('#abogadosLista').fadeIn('xslow');
  }
  selectAbogado(index, abogadoId) {
    this.idAbogado = abogadoId;
    for (let index = 0; index < this.abogadosAudiencias.length; index++) {
      const element = this.abogadosAudiencias[index];
      if (abogadoId == element.IdAjustador) {
        console.log('El abogado seleccionado es ' + element.AgenteNombre);
        this.abogadoNombre = element.AgenteNombre;
        setTimeout(() => {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#closeAbogadosSearchButton').click();
        }, 300);
      }
    }
  }
  setLugarAudiencia(event) {
    console.log('target : ' + event.target.value);
    console.log('detail : ' + event.detail.value);
    console.log('lugarAudiencia : ' + this.lugarAudiencia);
  }
  marcarFechaAudiencia(fechaAudiencia) {
    this.laFecha = new Date(fechaAudiencia).toISOString();
    this.formateadaAudiencia = new Date(fechaAudiencia).toLocaleString();
    this.dateFormat = fechaAudiencia.split('T')[0];
    let timeString = this.formateadaAudiencia.split(', ')[1];
    console.log('Hora completa : ' + fechaAudiencia.split('T')[1]);
    this.timeFormat = timeString.split(' ')[0];
    setTimeout(() => {
      this.formattedDate = this.formatDateForSQL();
    }, 300);
  }
  formatDateForSQL() {
    let date = new Date(this.fechaAudiencia);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (1-12)
    const day = String(date.getDate()).padStart(2, '0'); // Día del mes
    const hours = String(date.getHours()).padStart(2, '0'); // Horas (0-23)
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos (0-59)
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Segundos (0-59)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  audienceSave() {
    if (!this.canScheduleAudience || !this.idTablaDeAjustador) {
      this.blockAudienceScheduling();
      return;
    }
    let agente = localStorage.getItem('ajustadorActual');
    let agenteActual = JSON.parse(agente);
    //let idAgente = agenteActual.ProveedorAgenteId;
    this.isLoading = true;
    let jsonAudiencia = {
      IdAjustadorAudiencia: this.idTablaDeAjustador,
      RefProveedorAgenteAbogadoId: this.idAbogado,
      AgendarAudiencia: 1,
      FechaHora: this.formattedDate,
      Fecha: this.dateFormat,
      Hora: this.timeFormat,
      Lugar: this.lugarAudiencia,
      idAgente: this.idAgente
    };
    this.api.ActualizarAudicion(jsonAudiencia).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fin');
    }))).subscribe(res => {
      if (res) {
        this.toaster.presentToastAlert('Audiencia Actualizada exitosamente!', 'top', 'primary', 10000);
        this.isLoading = false;
      }
    }, error => {
      console.log('Este es el error ' + error);
      console.dir(error.error.Message);
      this.toaster.presentToastAlert(error.error.Message, 'top', 'danger', 10000);
      this.isLoading = false;
    });
  }
  blockAudienceScheduling() {
    this.canScheduleAudience = false;
    this.idTablaDeAjustador = null;
    this.isLoading = false;
    jquery__WEBPACK_IMPORTED_MODULE_3__('#submitAudience').prop('disabled', true);
    this.toaster.presentToastDangerOk(this.missingClientDataMessage, 'middle', 'audiencia-pendiente');
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
    }];
  }
};
PrepareAudiencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-prepare-audience',
  template: _prepare_audience_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_prepare_audience_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PrepareAudiencePage);


/***/ }),

/***/ 97680:
/*!************************************************************************!*\
  !*** ./src/app/prepare-audience/prepare-audience.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-accordion {\n  margin: 0 auto;\n  --width: 100% !important;\n}\n\nion-accordion-group {\n  width: 100%;\n}\n\nion-accordion.accordion-expanding,\nion-accordion.accordion-expanded {\n  width: calc(100% - 32px);\n  margin: 16px auto;\n}\n\nion-accordion.accordion-collapsing ion-item[slot=header],\nion-accordion.accordion-collapsed ion-item[slot=header] {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n}\n\nion-accordion.accordion-expanding ion-item[slot=header],\nion-accordion.accordion-expanded ion-item[slot=header] {\n  --background: #7da1c4;\n  --color: white;\n}\n\nion-input.custom {\n  text-transform: uppercase !important;\n}\n\n.select-label {\n  text-transform: uppercase;\n}\n\nion-chip:not(.button-chip) {\n  margin-top: 0%;\n  width: 100%;\n  height: 60px;\n  border-radius: 30px;\n}\n\nion-avatar {\n  width: 45px;\n  height: 45px;\n  margin-top: -3px;\n  margin-left: 5px;\n}\n\nion-icon.dis-icon {\n  font-size: 2rem;\n  position: absolute;\n  right: 15px;\n}\n\nion-icon.da-icon {\n  font-size: 2rem;\n}\n\n#closeAbogadosSearchButton {\n  --background: #ef5a22;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-input.abogado-nombre-no {\n  --background: #0090d0;\n  --color: #fff;\n  --placeholder-color: #ddd;\n  --placeholder-opacity: 0.8;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n  border-radius: 15px;\n}\n\nion-input.abogado-dato {\n  --background: #fff;\n  --color: black;\n  --placeholder-color: #ddd;\n  --placeholder-opacity: 0.8;\n  --padding-bottom: 10px;\n  --padding-end: 10px;\n  --padding-start: 10px;\n  --padding-top: 10px;\n  border: 1px solid lightgray;\n  border-radius: 15px;\n}\n\nion-datetime {\n  width: 100%;\n  max-width: 100%;\n  height: 69%;\n}", "",{"version":3,"sources":["webpack://./src/app/prepare-audience/prepare-audience.page.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAJ;;AAGA;EACI,cAAA;EACA,wBAAA;AAAJ;;AAGE;EACE,WAAA;AAAJ;;AAGE;;EAEE,wBAAA;EAEA,iBAAA;AADJ;;AAIE;;EAEE,oCAAA;EACA,wCAAA;AADJ;;AAKE;;EAEE,qBAAA;EACA,cAAA;AAFJ;;AAKE;EACE,oCAAA;AAFJ;;AAKE;EACE,yBAAA;AAFJ;;AAKE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;AAFJ;;AAKE;EACE,eAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAKE;EACE,eAAA;AAFJ;;AAKE;EACE,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAFJ;;AAKE;EACE,qBAAA;EACA,aAAA;EACA,yBAAA;EACA,0BAAA;EAEA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,mBAAA;AAHJ;;AAME;EACE,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,0BAAA;EAEA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;AAJJ;;AAOE;EACE,WAAA;EACA,eAAA;EACA,WAAA;AAJJ","sourcesContent":["ion-spinner{\n\tposition: fixed;\n    top: 28%;\n    left: 40%;\n    z-index: 999;\n    width: 20%;\n    height: 20%;\n\t//background-color: #00213f;\n}\n\n#spinFooter{\n\tposition: fixed;\n    background: black;\n    opacity: 0.6;\n    height: 100vh;\n    width: 100vw;\n    z-index: 900;\n    bottom: 0;\n}\n\nion-accordion {\n    margin: 0 auto;\n    --width: 100% !important;\n  }\n\n  ion-accordion-group {\n    width: 100%;\n  }\n  \n  ion-accordion.accordion-expanding,\n  ion-accordion.accordion-expanded {\n    width: calc(100% - 32px);\n  \n    margin: 16px auto;\n  }\n  \n  ion-accordion.accordion-collapsing ion-item[slot='header'],\n  ion-accordion.accordion-collapsed ion-item[slot='header'] {\n    --background: var(--ion-color-light);\n    --color: var(--ion-color-light-contrast);\n\n  }\n  \n  ion-accordion.accordion-expanding ion-item[slot='header'],\n  ion-accordion.accordion-expanded ion-item[slot='header'] {\n    --background: #7da1c4;//var(--ion-color-primary);\n    --color: white;//var(--ion-color-primary-contrast);\n  }\n\n  ion-input.custom {\n    text-transform: uppercase !important;\n  }\n\n  .select-label{\n    text-transform: uppercase;\n  }\n\n  ion-chip:not(.button-chip){\n    margin-top: 0%;\n    width: 100%;\n    height: 60px;\n    border-radius: 30px;\n  }\n\n  ion-avatar{\n    width: 45px;\n    height: 45px;\n    margin-top: -3px;\n    margin-left: 5px;\n  }\n\n  ion-icon.dis-icon {\n    font-size: 2rem;\n    position: absolute;\n    right: 15px;\n  }\n\n  ion-icon.da-icon {\n    font-size: 2rem;\n  }\n\n  #closeAbogadosSearchButton {\n    --background: #ef5a22;\n    --background-activated: #a8462a;\n    --background-hover: #f66e48;\n    --border-radius: 15px;\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n    --color: white;\n  }\n\n  ion-input.abogado-nombre-no {\n    --background: #0090d0;\n    --color: #fff;\n    --placeholder-color: #ddd;\n    --placeholder-opacity: 0.8;\n  \n    --padding-bottom: 10px;\n    --padding-end: 10px;\n    --padding-start: 10px;\n    --padding-top: 10px;\n    border-radius: 15px;\n  }\n\n  ion-input.abogado-dato {\n    --background: #fff;\n    --color: black;\n    --placeholder-color: #ddd;\n    --placeholder-opacity: 0.8;\n  \n    --padding-bottom: 10px;\n    --padding-end: 10px;\n    --padding-start: 10px;\n    --padding-top: 10px;\n    border: 1px solid lightgray;\n    border-radius: 15px;\n  }\n\n  ion-datetime{\n    width: 100%;\n    max-width: 100%;\n    height: 69%;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50877:
/*!************************************************************************!*\
  !*** ./src/app/prepare-audience/prepare-audience.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\"></ion-col>\n          <ion-col size=\"4\">Audiencia Atención # {{idAtencion}}</ion-col>\n          <ion-col size=\"4\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-accordion-group id=\"abogadosDatos\" [value]=\"['first']\">\n    <ion-accordion value=\"first\">\n      <ion-item slot=\"header\">\n        <ion-label>Datos de Abogado</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <!--ion-select placeholder=\"Seleccionar Abogado\">\n          <div slot=\"label\">HELP Legal</div>\n          <ion-select-option *ngFor=\"let abogado of abogadosAudiencias\" [value]=abogado.IdAjustador>{{abogado.AgenteNombre}}</ion-select-option>\n        </!--ion-select -->\n        <ion-chip (click)=\"goSearch()\">\n          <ion-avatar>\n            <img src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\n          </ion-avatar>\n          <ion-label>{{abogadoNombre}}</ion-label>\n          <ion-icon name=\"chevron-down\" class=\"dis-icon\"></ion-icon>\n        </ion-chip>\n      </div>\n    </ion-accordion>\n    <ion-accordion value=\"second\">\n      <ion-item slot=\"header\">\n        <ion-label>Lugar de la Audiencia</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <ion-grid>\n          <ion-row size=\"12\" style=\"color: #7da1c4;font-size:1rem;\">\n            Lugar y Observaciones\n          </ion-row>\n          <ion-row>\n            \n            <ion-col size=\"12\" style=\"width: 100%;\">\n              <ion-input [(ngModel)]=\"lugarAudiencia\" class=\"abogado-dato\"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-accordion>\n    <ion-accordion value=\"third\">\n      <ion-item slot=\"header\">\n        <ion-label>Fecha de la Audiencia</ion-label>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-chip style=\"margin-top: 10%;\">\n                <ion-icon name=\"calendar\" color=\"tertiary\" class=\"da-icon\"></ion-icon>\n                <ion-label>Fecha seleccionada {{formateadaAudiencia}}</ion-label>\n                <ion-icon name=\"time\" class=\"dis-icon\"></ion-icon>\n              </ion-chip>\n              \n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label class=\"text-size-lg\" style=\"padding-left: 10px;color: #7da1c4;\">\n                Seleccionar Fecha de Audiencia\n              </ion-label>\n              <ion-card style=\"height: 465px;\">\n                <ion-card-header>\n                </ion-card-header>\n                <ion-card-content>\n                  <!--ion-datetime [(ngModel)]=\"mydateAjustador\" (ionChange)=\"marcarFechaAjustador(mydateAjustador)\"></!--ion-datetime -->\n                  <ion-datetime [(ngModel)]=\"fechaAudiencia\" (ionChange)=\"marcarFechaAudiencia(fechaAudiencia)\"></ion-datetime>\n                </ion-card-content>\n              </ion-card>\n              \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-grid id=\"abogadosLista\" class=\"ion-no-padding\" style=\"padding-top: 2px;height: 100%;overflow: hidden;display: none;\">\n    <ion-row style=\"height: 100%;\">\n      <ion-col size=\"12\">\n        <ion-grid style=\"margin-top: 15px;\">\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-badge>\n                Abogados en Sistema\n              </ion-badge>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-button id=\"closeAbogadosSearchButton\" class=\"close-search\" style=\"float: right ;\" (click)=\"closeAbogadosSearch()\">\n                <ion-icon name=\"return-up-back\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <ion-searchbar animated=\"true\" placeholder=\"Buscar Abogado\" show-clear-button=\"focus\" show-cancel-button=\"never\" cancel-button-text=\"Cancelar\"\n        cancel-button-icon=\"trash-bin\" [debounce]=\"400\" (ionChange)=\"handleInput($event)\"></ion-searchbar>\n        \n        <ion-grid style=\"width:95%;\">\n          <ion-row>\n            <ion-col class=\"abogado-id-head\" size=\"6\">Nombre de abogado(a)</ion-col>\n            <ion-col class=\"abogado-id-head\" size=\"6\"></ion-col>\n          </ion-row>\n        </ion-grid>\n        \n\n        <ion-content color=\"light\">\n          <ion-list [inset]=\"true\" style=\"width: 97%;\">\n            <ion-item *ngFor=\"let abogado of results; let i = index;\" (click)=\"selectAbogado(i, abogadoId.value)\" style=\"padding-left: 10px;border-radius:9px;\">\n            <!--ion-item *ngFor=\"let atencion of results; let i = index;\" (click)=\"verExpedienteBusqueda(atencion.IdAtencion, indexInput.value)\" style=\"padding-left: 10px;border-radius:9px;\" -->\n              <ion-grid style=\"width:100%;\">\n                <ion-row>\n                  <ion-col class=\"abogado-id\" size=\"12\" >{{ abogado.AgenteNombre }}</ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-input #abogadoId [hidden]=\"true\" [value]=\"abogado.IdAjustador\" class=\"index-input\"></ion-input>\n            </ion-item>\n            <ion-item style=\"color: white;\">Ajustadores Ficohsa por Porsalud</ion-item>\n            <br><br><br><br><br>\n          </ion-list>\n        </ion-content>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-button id=\"submitAudience\" style=\"position: fixed;width: 90px;height: 60px;bottom: 1%;right: 1%; z-index: 999;--background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n--border-radius: 15px;\n--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n--color: white;\" vertical=\"bottom\" horizontal=\"end\" (click)=\"audienceSave()\">\n  Enviar\n</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_prepare-audience_prepare-audience_module_ts.js.map