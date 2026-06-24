(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_formulario_formulario_module_ts"],{

/***/ 85455:
/*!*********************************************************!*\
  !*** ./src/app/formulario/formulario-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularioPageRoutingModule": () => (/* binding */ FormularioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _formulario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulario.page */ 90925);




const routes = [{
  path: '',
  component: _formulario_page__WEBPACK_IMPORTED_MODULE_0__.FormularioPage
}];
let FormularioPageRoutingModule = class FormularioPageRoutingModule {};
FormularioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FormularioPageRoutingModule);


/***/ }),

/***/ 38312:
/*!*************************************************!*\
  !*** ./src/app/formulario/formulario.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularioPageModule": () => (/* binding */ FormularioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _formulario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formulario-routing.module */ 85455);
/* harmony import */ var _formulario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulario.page */ 90925);







let FormularioPageModule = class FormularioPageModule {};
FormularioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _formulario_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormularioPageRoutingModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_formulario_page__WEBPACK_IMPORTED_MODULE_1__.FormularioPage]
})], FormularioPageModule);


/***/ }),

/***/ 90925:
/*!***********************************************!*\
  !*** ./src/app/formulario/formulario.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularioPage": () => (/* binding */ FormularioPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _formulario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulario.page.html?ngResource */ 58280);
/* harmony import */ var _formulario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.page.scss?ngResource */ 57867);
/* harmony import */ var _formulario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formulario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/google-maps */ 94822);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32313);












let FormularioPage = class FormularioPage {
  constructor(router, loading, alert, api, toast) {
    this.router = router;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.formulario = {};
    this.selectedItem = "Page1";
    this.viewEntered = false;
    this.poliza = false;
    this.asegurado = false;
    this.conductor = false;
    this.vehiculo = false;
    this.hecho = false;
    this.danosVehiculo = false;
    this.mapa = true;
    this.otros = false;
    this.lesiones = false;
    this.openFoto = false;
    this.tipoSiniestro = false;
    this.datoTercero = false;
    this.datosVehiculo = false;
    this.danosVehiculoTercero = false;
    this.terceroLecionados = false;
    this.DanioMaterialesTerceros = false;
    this.observaciones = false;
    this.terceroDatos = null;
    this.tercerosDatos = [];
    this.tercerosVehiculo = [];
    this.addTercero = false;
    this.fotos = [];
    this.tiposSiniestros = [];
    this.buscar = "";
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    this.expediente = state.data[0];
    if (this.expediente) {
      // this.formulario.RefAtencionId = this.expediente.Id;
      // this.formulario.RefProveedorAgenteId = this.expediente.RefProveedorAgenteId;
      // this.formulario.AgendarAudiencia = this.expediente.AgendarAudiencia;
      // this.formulario.AseguradoUsoPoliza  = this.expediente.AseguradoUsoPoliza; // Agregar al codigo despues un si o no
      // this.formulario.TerceroResponsable = this.expediente.TerceroResponsable; //add luego
      // this.formulario.LesionadosSinAudiencia = this.expediente.LesionadosSinAudiencia;
      // this.formulario.DescripcionAudiencia = this.expediente.DescripcionAudiencia;
      // // this.formulario.RefEntidadComunicativaId = // se debe definir
      // this.formulario.RefTipoAudienciaId = this.expediente.IdAjusteAudiencia// validar
      // this.formulario.Poliza = this.expediente.PolizaExterna;
      // // this.formulario.Identificacion = aun pedinted
      // this.formulario.Nombre = this.expediente.Cliente;
      // // this.formulario.ConductorAfiliado //no se 
      // // this.formulario.ConductorDetenido // no se
      // this.formulario.Descripcion = this.expediente.DescripcionAudiencia;
      // this.formulario.MarcaVehiculo = this.expediente.Marca;
      // this.formulario.ModeloVehiculo = this.expediente.Modelo;
      // this.formulario.AnioVehiculo = this.expediente.Year.toString();
      // this.formulario.PlacaVehiculo = this.expediente.NumeroPlaca;
      // this.formulario.ChasisVehiculo = this.expediente.Chasis;
      // this.formulario.ColorVehiculo = this.expediente.Color;
      // this.formulario.VehiculoDetenido = this.expediente.VehiculoDetenido;
      // this.formulario.MotorVehiculo = this.expediente.Motor.toString();
      // // this.formulario.DescripcionVehiculo = nada 
      // this.formulario.TercerosHeridos = this.expediente.DescripcionTercerosHeridos;
      // this.formulario.TercerosMuertos = this.expediente.DescripcionTercerosMuertos;
      // this.formulario.RefPaisId = this.expediente.Pais;
      // this.formulario.RefCiudadId = this.expediente.Ciudad;
      // // this.formulario.RefDeptoId = 
      // // this.formulario.FechaHora = =
      // this.formulario.Lugar = this.expediente.LugarAudiencia;
      // this.formulario.RefUsuarioId = this.expediente.RefGestorId;
      // this.formulario.TallerMecanicoId = this.expediente.Taller;
      // this.formulario.Blindado = this.expediente.Blindado;
      // this.formulario.ObservacionTaller = this.expediente.ObservacionTaller;
      // // this.formulario.ReclamoAsegurado = this.expediente.
      // this.formulario.Observaciones = this.expediente.Observaciones;
      // // this.formulario.ReclamoAsegurado = this.expediente.re
      // // this.formulario.Latitud = this.exp
      // this.formulario.NombreConductor = this.expediente.NombreConductor;
      // this.formulario.IdentidaConductor = this.expediente.IdentidaConductor;
      // // this.formulario.DPI_Pasaporte = this.expediente.d
      // this.formulario.TelefonoConductor = this.expediente.TelefonoOrigen;
      // this.formulario.CelularConductor = this.expediente.TelefonoAdicional;
      // // this.formulario.Licencia 
      // this.formulario.DireccionConductor = this.expediente.DireccionDestino;
    }
  }
  ngOnInit() {
    // google.maps.event.addDomListener(window, "load", this.loadMap());
  }
  ionViewDidEnter() {
    this.createMap();
    this.getTiposSiniestros();
  }
  openImg(foto) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  showMeaPic() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Base64
      });
      _this.fotos.push({
        IdAtencion: _this.expediente.ServicioAtencionId,
        Foto: img.base64String
      });
      console.log(_this.fotos);
    })();
  }
  deleteFoto(i) {
    this.fotos.splice(i, i + 1);
  }
  // damagePosition(valor:number){
  //   switch(valor){
  //     case 1:
  //       this.formulario.DanioLataralIzquierdo = ! this.formulario.DanioLataralIzquierdo;
  //       this.toastAlert("Daño Latateral Izquierdo: "+this.formulario.DanioLataralIzquierdo);
  //       break;
  //     case 2: 
  //         this.formulario.DanioLateralDerecho= ! this.formulario.DanioLateralDerecho;
  //         this.toastAlert("Daño Latateral Derecho: "+this.formulario.DanioLateralDerecho);
  //         break;
  //     case 3: 
  //         this.formulario.VehiculoVolcado= ! this.formulario.VehiculoVolcado;
  //         this.toastAlert("Vehículo Volcado: "+this.formulario.VehiculoVolcado);
  //         break;
  //     case 4: 
  //         this.formulario.DanioFrontal= ! this.formulario.DanioFrontal;
  //         this.toastAlert("Daño Frontal: "+this.formulario.DanioFrontal);
  //         break;
  //     case 5: 
  //         this.formulario.DanioTrasero= ! this.formulario.DanioTrasero;
  //         this.toastAlert("Daño Trasero: "+this.formulario.DanioTrasero);
  //         break;
  //     default:
  //       break;
  //   } 
  // }
  toastAlert(mensaje) {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toa = yield _this2.toast.create({
        message: mensaje,
        duration: 2000,
        position: "bottom"
      });
      yield toa.present();
    })();
  }
  isEnabled(value) {
    if (value === "Page1" && this.selectedItem !== "Page1") {
      console.log(value);
    }
    return this.selectedItem === value;
  }
  //js mapas
  // async loadMap(){
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log(coordinates);
  //   let coodernadas;
  //   if (this.formulario.Longitud  && this.formulario.Latitud){
  //     coodernadas ={ latitude: this.formulario.Latitud, longitude:this.formulario.Longitud }
  //   }else{
  //     const permisosGeo = await Geolocation.checkPermissions();
  //     console.log(permisosGeo);
  //     if(permisosGeo.location === "denied"){
  //       const getPermisos = await Geolocation.requestPermissions();
  //     }
  //     const coordinates = await Geolocation.getCurrentPosition();
  //     console.log(coordinates);
  //     coodernadas = coordinates.coords;
  //   }
  //   var latlng = new google.maps.LatLng(coodernadas.latitude,coodernadas.longitude);
  //   var myOptions = {
  //       zoom: 20,
  //       center: latlng,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("mapa"),
  //           myOptions);
  //  // var click = new google.map.setOnMapClickListener(click => console.log(click));
  //   var icon = {
  //     url: "../../assets/img/icon.svg",
  //     scaledSize: new google.maps.Size(70, 70)
  //   };
  //   const marker = new google.maps.Marker({
  //     position: latlng,
  //     title: 'HELP',
  //     icon: icon,
  //     snippet:'Lugar de insidente',
  //     animation: 'DROP'
  //   });
  //   marker.setMap(map);
  //   google.maps.event.addListener(marker,'click',function() {
  //     var pos = map.getZoom();
  //     map.setZoom(9);
  //     map.setCenter(marker.getPosition());
  //     window.setTimeout(function() {map.setZoom(pos);},3000);
  //   });
  //   //this.marker(latlng, map);
  // }
  // // Lugar del accidente
  // marker(coordenadas:any, map){
  //   //Market 
  //   var icon = {
  //     url: "../../asset/img/icon.png",
  //     scaledSize: new google.maps.Size(70, 70)
  //   };
  //   const marker = new google.maps.Marker({
  //     position: coordenadas,
  //     title: 'HELP',
  //     icon: icon,
  //     snippet:'Lugar de insidente',
  //     animation: 'DROP'
  //   });
  //   marker.setMap(map);
  // }
  // MapHidden(){
  //   var x = document.getElementById("mapa");
  //   if (this.selectedItem=="Page2" || this.selectedItem=="Page3" ) {
  //       x.style.display = "block";
  //   } else {
  //       x.style.display = "none";
  //   }
  // }
  // Mapa capacitor
  createMap() {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.getCurrentPosition();
      console.log(coordinates);
      let coodernadas;
      if (_this3.formulario.Longitud && _this3.formulario.Latitud) {
        coodernadas = {
          latitude: _this3.formulario.Latitud,
          longitude: _this3.formulario.Longitud
        };
      } else {
        const permisosGeo = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.checkPermissions();
        console.log(permisosGeo);
        if (permisosGeo.location === "denied") {
          const getPermisos = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.requestPermissions();
        }
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_5__.Geolocation.getCurrentPosition();
        console.log(coordinates);
        coodernadas = coordinates.coords;
      }
      _this3.newMaP = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMap.create({
        id: 'my-cool-map',
        element: _this3.mapRef.nativeElement,
        apiKey: "AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ",
        config: {
          center: {
            lat: coodernadas.latitude,
            lng: coodernadas.longitude
          },
          // center: {
          //   lat: 33.6,
          //   lng: -117.9,
          // },
          zoom: 20
        }
      });
      // Add a marker to the map
      _this3.addMapMarker(coodernadas);
      //click on map
      _this3.clickInMap();
    })();
  }
  addMapMarker(coordenates) {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerId = yield _this4.newMaP.addMarker({
        coordinate: {
          lat: coordenates.latitude,
          lng: coordenates.longitude
        },
        title: "Lugar del siniestros"
      });
      _this4.markerId = markerId;
    })();
  }
  clickInMap() {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const click = yield _this5.newMaP.setOnMapClickListener(click => {
        _this5.newMaP.removeMarker("");
        _this5.addMapMarker(click);
        // this.formulario.Longitud = click.longitude;
        // this.formulario.Latitud = click.latitude;
      });
    })();
  }

  Torval() {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.newMaP !== undefined) {
        const putin = _this6.newMaP.destroy();
        console.log(putin);
      }
    })();
  }
  getTiposSiniestros() {
    var _this7 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this7.loading.create();
      yield load.present();
      _this7.api.tipoDeSiniestros().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe(res => {
        console.log(res, 'respuesta');
        _this7.tiposSiniestros = res;
      }, /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this7.alert.create({
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
    })();
  }
  litleMesengeForU() {
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
    }];
  }
  static {
    this.propDecorators = {
      mapRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ['map']
      }]
    };
  }
};
FormularioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-formulario',
  template: _formulario_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_formulario_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FormularioPage);


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

/***/ 95325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 81819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }
  contains(point) {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }
  extend(point) {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsExtend({
        bounds: _this2,
        point
      });
      _this2.southwest = result['bounds']['southwest'];
      _this2.center = result['bounds']['center'];
      _this2.northeast = result['bounds']['northeast'];
      return _this2;
    })();
  }
}
var MapType;
(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */
  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */
  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */
  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */
  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 81819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 20601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;
  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 94822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "LatLngBounds": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 95325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 18968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 18968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 95325);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation */ 81819);




class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = '';
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }
}
customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;
    this.handleScrollEvent = () => this.updateMapBounds();
    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */
  static create(options, callback) {
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);
      if (!options.element) {
        throw new Error('container element is required');
      }
      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }
      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};
        const getMapBounds = () => {
          var _a, _b;
          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };
        const onDisplay = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const onResize = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };
        const ionicPage = newMap.element.closest('.ion-page');
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && ionicPage) {
          ionicPage.addEventListener('ionViewWillEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener('ionViewDidEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }
        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;
            if (!isHidden) {
              if (lastState.isHidden) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }
            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      }
      // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???
      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create(options);
            resolve(undefined);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });
      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }
      return newMap;
    })();
  }
  static getElementBounds(element) {
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();
        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }
              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */
  enableTouch() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTouch({
        id: _this.id
      });
    })();
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */
  disableTouch() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableTouch({
        id: _this2.id
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */
  enableClustering(minClusterSize) {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableClustering({
        id: _this3.id,
        minClusterSize
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */
  disableClustering() {
    var _this4 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableClustering({
        id: _this4.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */
  addMarker(marker) {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
        id: _this5.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */
  addMarkers(markers) {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarkers({
        id: _this6.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */
  removeMarker(id) {
    var _this7 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarker({
        id: _this7.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */
  removeMarkers(ids) {
    var _this8 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }
  addPolygons(polygons) {
    var _this9 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }
  addPolylines(polylines) {
    var _this10 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }
  removePolygons(ids) {
    var _this11 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }
  addCircles(circles) {
    var _this12 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }
  removeCircles(ids) {
    var _this13 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }
  removePolylines(ids) {
    var _this14 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolylines({
        id: _this14.id,
        polylineIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */
  destroy() {
    var _this15 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this15.disableScrolling();
      }
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        (_a = _this15.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }
      _this15.removeAllMapListeners();
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.destroy({
        id: _this15.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */
  setCamera(config) {
    var _this16 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }
  getMapType() {
    var _this17 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        type
      } = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapType({
        id: _this17.id
      });
      return _definitions__WEBPACK_IMPORTED_MODULE_2__.MapType[type];
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */
  setMapType(mapType) {
    var _this18 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        id: _this18.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */
  enableIndoorMaps(enabled) {
    var _this19 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this19.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */
  enableTrafficLayer(enabled) {
    var _this20 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this20.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */
  enableAccessibilityElements(enabled) {
    var _this21 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this21.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */
  enableCurrentLocation(enabled) {
    var _this22 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this22.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */
  setPadding(padding) {
    var _this23 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setPadding({
        id: _this23.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */
  getMapBounds() {
    var _this24 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }
  fitBounds(bounds, padding) {
    var _this25 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }
  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content');
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }
    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }
  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);
    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }
  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */
  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraIdleListener(callback) {
    var _this26 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();
      }
      if (callback) {
        _this26.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraIdle', _this26.generateCallback(callback));
      } else {
        _this26.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */
  setOnBoundsChangedListener(callback) {
    var _this27 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onBoundsChangedListener) {
        _this27.onBoundsChangedListener.remove();
      }
      if (callback) {
        _this27.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this27.generateCallback(callback));
      } else {
        _this27.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */
  setOnCameraMoveStartedListener(callback) {
    var _this28 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onCameraMoveStartedListener) {
        _this28.onCameraMoveStartedListener.remove();
      }
      if (callback) {
        _this28.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this28.generateCallback(callback));
      } else {
        _this28.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterClickListener(callback) {
    var _this29 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();
      }
      if (callback) {
        _this29.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterClick', _this29.generateCallback(callback));
      } else {
        _this29.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnClusterInfoWindowClickListener(callback) {
    var _this30 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.onClusterInfoWindowClickListener) {
        _this30.onClusterInfoWindowClickListener.remove();
      }
      if (callback) {
        _this30.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this30.generateCallback(callback));
      } else {
        _this30.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */
  setOnInfoWindowClickListener(callback) {
    var _this31 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this31.onInfoWindowClickListener) {
        _this31.onInfoWindowClickListener.remove();
      }
      if (callback) {
        _this31.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this31.generateCallback(callback));
      } else {
        _this31.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMapClickListener(callback) {
    var _this32 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this32.onMapClickListener) {
        _this32.onMapClickListener.remove();
      }
      if (callback) {
        _this32.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapClick', _this32.generateCallback(callback));
      } else {
        _this32.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolygonClickListener(callback) {
    var _this33 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this33.onPolygonClickListener) {
        _this33.onPolygonClickListener.remove();
      }
      if (callback) {
        _this33.onPolygonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolygonClick', _this33.generateCallback(callback));
      } else {
        _this33.onPolygonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */
  setOnCircleClickListener(callback) {
    var _this34 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this34.onCircleClickListener) [_this34.onCircleClickListener.remove()];
      if (callback) {
        _this34.onCircleClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCircleClick', _this34.generateCallback(callback));
      } else {
        _this34.onCircleClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerClickListener(callback) {
    var _this35 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this35.onMarkerClickListener) {
        _this35.onMarkerClickListener.remove();
      }
      if (callback) {
        _this35.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerClick', _this35.generateCallback(callback));
      } else {
        _this35.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */
  setOnPolylineClickListener(callback) {
    var _this36 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this36.onPolylineClickListener) {
        _this36.onPolylineClickListener.remove();
      }
      if (callback) {
        _this36.onPolylineClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolylineClick', _this36.generateCallback(callback));
      } else {
        _this36.onPolylineClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragStartListener(callback) {
    var _this37 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this37.onMarkerDragStartListener) {
        _this37.onMarkerDragStartListener.remove();
      }
      if (callback) {
        _this37.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this37.generateCallback(callback));
      } else {
        _this37.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragListener(callback) {
    var _this38 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this38.onMarkerDragListener) {
        _this38.onMarkerDragListener.remove();
      }
      if (callback) {
        _this38.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this38.generateCallback(callback));
      } else {
        _this38.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */
  setOnMarkerDragEndListener(callback) {
    var _this39 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this39.onMarkerDragEndListener) {
        _this39.onMarkerDragEndListener.remove();
      }
      if (callback) {
        _this39.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this39.generateCallback(callback));
      } else {
        _this39.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationButtonClickListener(callback) {
    var _this40 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this40.onMyLocationButtonClickListener) {
        _this40.onMyLocationButtonClickListener.remove();
      }
      if (callback) {
        _this40.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this40.generateCallback(callback));
      } else {
        _this40.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */
  setOnMyLocationClickListener(callback) {
    var _this41 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this41.onMyLocationClickListener) {
        _this41.onMyLocationClickListener.remove();
      }
      if (callback) {
        _this41.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this41.generateCallback(callback));
      } else {
        _this41.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */
  removeAllMapListeners() {
    var _this42 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this42.onBoundsChangedListener) {
        _this42.onBoundsChangedListener.remove();
        _this42.onBoundsChangedListener = undefined;
      }
      if (_this42.onCameraIdleListener) {
        _this42.onCameraIdleListener.remove();
        _this42.onCameraIdleListener = undefined;
      }
      if (_this42.onCameraMoveStartedListener) {
        _this42.onCameraMoveStartedListener.remove();
        _this42.onCameraMoveStartedListener = undefined;
      }
      if (_this42.onClusterClickListener) {
        _this42.onClusterClickListener.remove();
        _this42.onClusterClickListener = undefined;
      }
      if (_this42.onClusterInfoWindowClickListener) {
        _this42.onClusterInfoWindowClickListener.remove();
        _this42.onClusterInfoWindowClickListener = undefined;
      }
      if (_this42.onInfoWindowClickListener) {
        _this42.onInfoWindowClickListener.remove();
        _this42.onInfoWindowClickListener = undefined;
      }
      if (_this42.onMapClickListener) {
        _this42.onMapClickListener.remove();
        _this42.onMapClickListener = undefined;
      }
      if (_this42.onPolylineClickListener) {
        _this42.onPolylineClickListener.remove();
        _this42.onPolylineClickListener = undefined;
      }
      if (_this42.onMarkerClickListener) {
        _this42.onMarkerClickListener.remove();
        _this42.onMarkerClickListener = undefined;
      }
      if (_this42.onPolygonClickListener) {
        _this42.onPolygonClickListener.remove();
        _this42.onPolygonClickListener = undefined;
      }
      if (_this42.onCircleClickListener) {
        _this42.onCircleClickListener.remove();
        _this42.onCircleClickListener = undefined;
      }
      if (_this42.onMarkerDragStartListener) {
        _this42.onMarkerDragStartListener.remove();
        _this42.onMarkerDragStartListener = undefined;
      }
      if (_this42.onMarkerDragListener) {
        _this42.onMarkerDragListener.remove();
        _this42.onMarkerDragListener = undefined;
      }
      if (_this42.onMarkerDragEndListener) {
        _this42.onMarkerDragEndListener.remove();
        _this42.onMarkerDragEndListener = undefined;
      }
      if (_this42.onMyLocationButtonClickListener) {
        _this42.onMyLocationButtonClickListener.remove();
        _this42.onMyLocationButtonClickListener = undefined;
      }
      if (_this42.onMyLocationClickListener) {
        _this42.onMyLocationClickListener.remove();
        _this42.onMyLocationClickListener = undefined;
      }
    })();
  }
  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }
}

/***/ }),

/***/ 57867:
/*!************************************************************!*\
  !*** ./src/app/formulario/formulario.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-header-image {\n  position: relative;\n}\n.card-header-image ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-damage);\n  z-index: 5;\n}\n.card-header-image img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\n.card-header-image-inactive {\n  position: relative;\n}\n.card-header-image-inactive ion-img {\n  height: 20vh;\n  object-fit: contain;\n}\n.card-header-image-inactive::before {\n  content: \"\";\n  display: block;\n  height: 20vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n  mix-blend-mode: var(--cs-mode-image);\n  background: var(--cs-gradient-linear);\n  z-index: 5;\n}\n.card-header-image-inactive img {\n  width: 100% !important;\n  height: 20vh;\n  object-fit: contain;\n}\n\ncapacitor-google-map {\n  height: 400px;\n  width: 100%;\n  display: inline-block;\n}\n\n.mapa {\n  height: 400px;\n  width: 100%;\n}\n\nion-card {\n  height: 150px;\n  width: 45vw;\n  border-radius: 0;\n  background-size: cover;\n}\nion-card ion-card-content {\n  position: relative;\n  background: rgba(36, 36, 36, 0.4);\n  width: 100%;\n  width: max-content;\n}\nion-card ion-card-content h2,\nion-card ion-card-content .icon-small {\n  color: var(--cs-text-primary, #ffffff);\n}\n\n.Img {\n  --background: rgba(44,39,45,0.2);\n  color: #4ba8ed;\n}\n.Img::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.Img .item.sc-ion-label-md-h, .Img .item .sc-ion-label-md-h {\n  white-space: normal;\n  padding: 10px;\n  font-size: 1.2rem;\n  white-space: normal;\n  font-weight: bold;\n}\n.Img ion-content {\n  --background: transparent;\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n.Img ion-content ion-img {\n  width: 100%;\n  height: 100%;\n}\n.Img ion-content .item.sc-ion-label-ios-h, .Img ion-content .item .sc-ion-label-ios-h {\n  --color: initial;\n  display: block;\n  font-size: 1.2rem;\n  color: var(--color);\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n\n.formulario {\n  --width:98% !important;\n  --height:98% !important;\n}\n.formulario .item.sc-ion-label-md-h, .formulario .item .sc-ion-label-md-h {\n  white-space: normal;\n  padding: 10px;\n  font-size: 1.2rem;\n  white-space: normal;\n  font-weight: bold;\n}\n.formulario ion-content {\n  --background: white;\n}\n.formulario ion-content .item.sc-ion-label-ios-h, .formulario ion-content .item .sc-ion-label-ios-h {\n  --color: initial;\n  display: block;\n  font-size: 1.2rem;\n  color: var(--color);\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: normal;\n}", "",{"version":3,"sources":["webpack://./src/app/formulario/formulario.page.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;AAAI;EACE,YAAA;EACA,mBAAA;AAEN;AAAI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAEN;AACI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AACN;;AAEE;EACE,kBAAA;AACJ;AAAI;EACE,YAAA;EACA,mBAAA;AAEN;AAAI;EACE,WAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,oBAAA;EACA,oCAAA;EACA,qCAAA;EACA,UAAA;AAEN;AACI;EACE,sBAAA;EACA,YAAA;EACA,mBAAA;AACN;;AAEE;EACE,aAAA;EACA,WAAA;EACA,qBAAA;AACJ;;AAEE;EACE,aAAA;EACA,WAAA;AACJ;;AACE;EACE,aAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AAEJ;AADI;EACE,kBAAA;EACA,iCAAA;EACA,WAAA;EAKA,kBAAA;AADN;AAHM;;EAEE,sCAAA;AAKR;;AAAE;EAEC,gCAAA;EACA,cAAA;AAEH;AADG;EACC,kCAAA;UAAA,0BAAA;AAGJ;AADG;EACC,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAGJ;AADG;EACC,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AAGJ;AAFI;EACM,WAAA;EACA,YAAA;AAIV;AADI;EACC,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AAGL;;AAKE;EAOM,sBAAA;EACA,uBAAA;AARR;AASQ;EACE,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAPV;AASQ;EACE,mBAAA;AAPV;AAWU;EACE,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AATZ","sourcesContent":[".card-header-image {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-damage);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }\n  .card-header-image-inactive {\n    position: relative;\n    ion-img{\n      height: 20vh;\n      object-fit: contain;\n    }\n    &::before {\n      content: \"\";\n      display: block;\n      height: 20vh;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      mix-blend-mode: var(--cs-mode-image);\n      background: var(--cs-gradient-linear);\n      z-index: 5;\n    }\n  \n    img {\n      width: 100% !important;\n      height: 20vh;\n      object-fit: contain;\n    }\n  }\n  capacitor-google-map{\n    height: 400px;\n    width: 100%;\n    display: inline-block;\n\n  }\n  .mapa{\n    height: 400px;\n    width: 100%;\n  }\n  ion-card {\n    height: 150px;\n    width: 45vw;\n    border-radius: 0;\n    background-size: cover;\n    ion-card-content {\n      position: relative;\n      background: rgba(36, 36, 36, 0.40);\n      width: 100%;\n      h2,\n      .icon-small {\n        color: var(--cs-text-primary, #ffffff);\n      }\n      width: max-content;\n    }\n  }\n  .Img{\n\t\t//ion-modal{\n\t\t\t--background: rgba(44,39,45,0.2);\n\t\t\tcolor:#4ba8ed;\n\t\t\t&::part(content){\n\t\t\t\tbackdrop-filter: blur(6px);\n\t\t\t}\n\t\t\t.item.sc-ion-label-md-h, .item .sc-ion-label-md-h{\n\t\t\t\twhite-space: normal;\n\t\t\t\tpadding: 10px;\n\t\t\t\tfont-size: 1.2rem;\n\t\t\t\twhite-space: normal;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\tion-content{\n\t\t\t\t--background: transparent;\n\t\t\t\t--padding-top: 20px;\n\t\t\t\t--padding-start: 20px;\n\t\t\t\t--padding-end: 20px;\n\t\t\t\tion-img{\n          width: 100%;\n          height: 100%;\n          \n        }\n\t\t\t\t.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{\n\t\t\t\t\t--color: initial;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tfont-size: 1.2rem;\n\t\t\t\t\tcolor: var(--color);\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\twhite-space: normal;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t//}\n\t\t\n\t}\n  .formulario{\n\n        // --background: rgba(255, 255, 255, 0.2);\n        // color:#4ba8ed;\n        // &::part(content){\n        //   backdrop-filter: blur(6px);\n        // }\n        --width:98% !important;\n        --height:98% !important;\n        .item.sc-ion-label-md-h, .item .sc-ion-label-md-h{\n          white-space: normal;\n          padding: 10px;\n          font-size: 1.2rem;\n          white-space: normal;\n          font-weight: bold;\n        }\n        ion-content{\n          --background: white;\n          // --padding-top: 20px;\n          // --padding-start: 20px;\n          // --padding-end: 20px;\n          .item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{\n            --color: initial;\n            display: block;\n            font-size: 1.2rem;\n            color: var(--color);\n            font-weight: bold;\n            text-overflow: ellipsis;\n            white-space: normal;\n          }\n        }\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58280:
/*!************************************************************!*\
  !*** ./src/app/formulario/formulario.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_formulario_formulario_module_ts.js.map