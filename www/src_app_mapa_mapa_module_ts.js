(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mapa_mapa_module_ts"],{

/***/ 85558:
/*!*********************************************!*\
  !*** ./src/app/mapa/mapa-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 37419);




const routes = [{
  path: '',
  component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage
}];
let MapaPageRoutingModule = class MapaPageRoutingModule {};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], MapaPageRoutingModule);


/***/ }),

/***/ 30964:
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-routing.module */ 85558);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page */ 37419);







let MapaPageModule = class MapaPageModule {};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapaPageRoutingModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
  declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_1__.MapaPage]
})], MapaPageModule);


/***/ }),

/***/ 37419:
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.html?ngResource */ 15119);
/* harmony import */ var _mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa.page.scss?ngResource */ 53305);
/* harmony import */ var _mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 6222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _environments_mapas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/mapas */ 31624);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32313);











let MapaPage = class MapaPage {
  constructor(router, toaster, platform, so, location) {
    var _this = this;
    /* const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    */
    //this.expediente= state.data[0];
    //this.expediente = JSON.parse(localStorage.getItem('elExpediente'));
    this.router = router;
    this.toaster = toaster;
    this.platform = platform;
    this.so = so;
    this.location = location;
    this.formulario = {};
    this.isLoading = false;
    this.isMap = false;
    this.isLoadingData = false;
    this.isTrack = false;
    this.idAtencion = parseInt(localStorage.getItem('idAtencion'));
    //alert(this.idAtencion+1)
    this.api.DatosDeAtencion(this.idAtencion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alert('Ahora si');
      console.log('ya finalicé');
      _this.isLoading = false;
    }))).subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        //        this.expediente = res;
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    /*
        this.api.Expediente(this.idAtencion).pipe(
          finalize(async () => {
            console.log('ya finalicé')
            this.isLoading = false;
          })
        ).subscribe(
          async (res) => {
            this.expediente = res;
          }
        )
    
        
    
        this.latitud = this.expediente.LatitudCliente;
        alert(this.latitud)
        this.longitud = this.expediente.LongitudCliente;
        console.log('Expediente en cliente es ');
       //console.dir(this.latitud)
    
        if(this.expediente){
          this.formulario.RefAtencionId = this.expediente.Id;
          this.formulario.Blindado= "No";
          this.formulario.RefProveedorAgenteId = this.expediente.RefProveedorAgenteId;
          this.formulario.AgendarAudiencia = this.expediente.AgendarAudiencia;
          this.formulario.AseguradoUsoPoliza  = this.expediente.AseguradoUsoPoliza; // Agregar al codigo despues un si o no
          this.formulario.TerceroResponsable = this.expediente.TerceroResponsable; //add luego
          this.formulario.LesionadosSinAudiencia = this.expediente.LesionadosSinAudiencia;
          this.formulario.DescripcionAudiencia = this.expediente.DescripcionAudiencia;
          this.formulario.RefTipoAudienciaId = this.expediente.IdAjusteAudiencia// validar
          this.formulario.Poliza = this.expediente.PolizaExterna;
          this.formulario.Nombre = this.expediente.Cliente;
          this.formulario.Descripcion = this.expediente.DescripcionAudiencia;
          this.formulario.MarcaVehiculo = this.expediente.Marca;
          this.formulario.ModeloVehiculo = this.expediente.Modelo;
          this.formulario.AnioVehiculo = this.expediente.Year;
          this.formulario.PlacaVehiculo = this.expediente.NumeroPlaca;
          this.formulario.ChasisVehiculo = this.expediente.Chasis;
          this.formulario.ColorVehiculo = this.expediente.Color;
          this.formulario.Lugar = this.expediente.LugarAudiencia;
          this.formulario.RefUsuarioId = this.expediente.RefGestorId;
          this.formulario.TallerMecanicoId = 0
          this.formulario.Blindado = this.expediente.Blindado;
          this.formulario.ObservacionTaller = this.expediente.ObservacionTaller;
          this.formulario.Observaciones = this.expediente.Observaciones;
          this.formulario.NombreConductor = this.expediente.NombreConductor;
          this.formulario.IdentidaConductor = this.expediente.IdentidaConductor;
          this.formulario.TelefonoConductor = this.expediente.TelefonoOrigen;
          this.formulario.CelularConductor = this.expediente.TelefonoAdicional;
          this.formulario.RefCiudadId = +this.expediente.Ciudad;
          this.formulario.RefDeptoId = this.expediente.RefDepartamentoId;
          console.log(+this.expediente.IdPais)
          this.formulario.RefPaisId = +this.expediente.IdPais;
          this.formulario.DireccionConductor = this.expediente.DireccionDestino;
        }
        */
  }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
      //once you press the back button it will execute what you write of code here
      this.Torval();
    });
    this.platform.ready().then(() => {});
  }
  ionViewDidEnter() {
    this.isLoading = true;
    this.isMap = false;
    this.createMap();
  }
  createMap() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoadingData = true;
      _this2.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
      //let laLatitud = localStorage.getItem('laLatitud');
      //let laLongitud = localStorage.getItem('laLongitud');
      _this2.latitudAju = localStorage.getItem('laLatitud');
      _this2.longitudAju = localStorage.getItem('laLongitud');
      _this2.laPrecision = localStorage.getItem('laPrecision');
      let mapOptions = {
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };
      _this2.mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
      _this2.directionsService = new google.maps.DirectionsService();
      _this2.directionsDisplay = new google.maps.DirectionsRenderer();
      _this2.directionsDisplay.setMap(_this2.mapa);
      //alert('Hey vooo : '+this.latitud+', '+this.longitud+', '+this.latitudAju+', '+this.longitudAju)
      setTimeout(() => {
        _this2.displayDirectionInit(_this2.directionsService, _this2.directionsDisplay, _this2.latitud, _this2.longitud, _this2.latitudAju, _this2.longitudAju);
      }, 1000);
      if (_this2.platform.is('android')) {
        _this2.miPais = localStorage.getItem('codigoPais');
      } else {
        _this2.miPais = 'HN';
      }
      let coodernadas;
      coodernadas = {
        lat: _this2.latitud,
        lng: _this2.longitud
      };
      _this2.isLoading = false;
      _this2.isMap = true;
      _this2.geoloc = navigator.geolocation;
      _this2.watcher = _this2.geoloc.watchPosition(_this2.savePosition, _this2.positionError, {
        enableHighAccuracy: true
      });
      _this2.trackInterval = setInterval(() => {
        _this2.moveCoords = JSON.parse(localStorage.getItem('moveCoords'));
        _this2.moverCoordenadas = localStorage.getItem('moveCoords');
        _this2.moveLatitud = localStorage.getItem('moveLatitide');
        _this2.moveLongitud = localStorage.getItem('moveLongitude');
        _this2.diferencia = localStorage.getItem('diferencia');
        //this.distanciaFinal = localStorage.getItem('distancia');
        _this2.distanciaFinal = localStorage.getItem('dist');
        _this2.distanciaInicialMetros = _this2.distancia * 1000;
        _this2.distanciaMetros = parseFloat(localStorage.getItem('distM')); //parseFloat(this.distanciaFinal) * 1000;
        let calculo = _this2.distanciaMetros + 5;
        //alert('distancia en metros es '+calculo)
        if (_this2.distanciaMetros < 6) {
          _this2.mapInfoText = 'Has llegado al lugar del siniestro.';
          _this2.isArrived = true;
          // Coordenadas: {{moverCoordenadas}} <br> Distancia: {{distanciaFinal}}
          // Has llegado al lugar del siniestro
          //this.toastr.presentToastArrival('Has llegado a tu destino', 'top', 'tracking');
        } else {
          _this2.isArrived = false;
          _this2.mapInfoText = 'Coordenadas: ' + _this2.moverCoordenadas + ' | ' + 'Distancia: ' + _this2.distanciaFinal;
        }
        _this2.distanciaConvert = parseFloat(_this2.distanciaFinal).toFixed(2);
        _this2.distanciaString = _this2.distanciaConvert.toString();
        _this2.diferenciaMetros = Math.round(_this2.distanciaInicialMetros - _this2.distanciaMetros);
        _this2.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
        _this2.mediaLatitud = localStorage.getItem('mediaLatitud');
        _this2.mediaLongitud = localStorage.getItem('mediaLongitud');
        _this2.moveMarker(_this2.moveCoords, _this2.moveLatitud, _this2.moveLongitud, _this2.counter);
        _this2.counter = 1;
        if (_this2.moveCoords) {
          console.log("Eeeeeeeexitoooooo" + ', ' + _this2.moveLatitud + ', ' + _this2.moveLongitud + ', ' + _this2.counter);
          const jsonPosition = {
            Latitud: parseFloat(_this2.moveLatitud),
            Longitud: parseFloat(_this2.moveLongitud),
            RefAtencionId: _this2.idAtencion,
            RefUsuarioId: _this2.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_MOV'
          };
          _this2.api.setPositionNRoute(jsonPosition).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            console.log('fin');
          }))).subscribe(res => {}, /*#__PURE__*/function () {
            var _ref4 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const alert = yield _this2.alert.create({
                header: 'HELP',
                message: res.error.Message,
                buttons: ['Ok']
              });
              yield alert.present();
            });
            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
      }, 10000);
    })();
  }
  moveMarker(location, mLat, mLng, counter) {
    this.bounds = new google.maps.LatLngBounds();
    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }
    if (this.marcadorAju) {
      this.marcadorAju.setPosition(new google.maps.LatLng(this.moveLatitud, this.moveLongitud));
      //this.mapa.setZoom(16);
      if (counter == 0) {
        this.mapa.panTo(new google.maps.LatLng(this.moveLatitud, this.moveLongitud));
        this.bounds.extend(this.marcadorAju.getPosition());
        this.mapa.fitBounds(this.bounds);
      } else {}
    } else {
      const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45, 45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      this.marcadorAju = new google.maps.Marker({
        position: location,
        map: this.mapa,
        icon: ajuIcon
      });
      this.marcadorAju.setPosition(location);
    }
  }
  positionError(err) {
    //alert(`ERROR ${err.code}: ${err.message}`);
  }
  savePosition(pos) {
    //alert('savePosition'+ pos.coords.longitude)
    var R = 6371;
    console.log('GPS posicion actual');
    console.dir(pos);
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };
    let latitud = localStorage.getItem('clienteLatitud');
    let longitud = localStorage.getItem('clienteLongitud');
    if (pos) {
      //$("#positionBadge").text('latitud: '+pos.coords.latitude+', longitud: '+pos.coords.longitude);
      let coordsAju = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      //this.directionsService = new google.maps.DirectionsService;
      //this.directionsDisplay = new google.maps.DirectionsRenderer;
      //this.directionsDisplay.setMap(this.mapa);
      localStorage.setItem('moveCoords', JSON.stringify(coordsAju));
      localStorage.setItem('moveLatitide', pos.coords.latitude);
      localStorage.setItem('moveLongitude', pos.coords.longitude);
      var dLat = (latitud - pos.coords.latitude) * (Math.PI / 180); // this.deg2rad below
      var dLon = (longitud - pos.coords.longitude) * (Math.PI / 180);
      //alert(dLat);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(pos.coords.latitude * (Math.PI / 180)) * Math.cos(latitud * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distancia = R * c;
      var xDist = latitud - pos.coords.latitude;
      var yDist = longitud - pos.coords.longitude;
      var dist = Math.sqrt(xDist * xDist + yDist * yDist);
      let len = distancia / 2;
      var fractionOfTotal = len / dist;
      let mediaLatitud = (latitud + pos.coords.latitude) / 2;
      let mediaLongitud = (longitud + pos.coords.longitude) / 2;
      let mediaLatitude = pos.coords.latitude + xDist * fractionOfTotal;
      let mediaLongitude = pos.coords.longitude + yDist * fractionOfTotal;
      //      alert((mediaLatitude+3) +', '+mediaLongitude)
      localStorage.setItem('mediaLatitud', mediaLatitude + 3);
      localStorage.setItem('mediaLongitud', mediaLongitude);
      let distanciaInicial = localStorage.getItem('distanciaInicial');
      let diferencia = distanciaInicial - distancia;
      localStorage.setItem('diferencia', diferencia);
      localStorage.setItem('distancia', distancia.toString());
      const elementStatus = document.getElementById("statusFlag");
      const elementArrow = document.getElementById("statusArrow");
      console.log('Aqui');
      this.displayDirection(this.directionsService, this.directionsDisplay, latitud, longitud, pos.coords.latitude, pos.coords.longitude);
      if (diferencia == 0) {
        elementStatus.setAttribute('style', 'background:#FDCF49;border-radius:10px');
        elementArrow.setAttribute('name', 'chevron-expand');
        elementArrow.setAttribute('style', 'color:#FDCF49;font-weight: bolder');
      } else if (diferencia > 0) {
        if (distanciaInicial > distancia) {
          elementStatus.setAttribute('style', 'background:#90EE90;border-radius:10px');
          elementArrow.setAttribute('name', 'chevron-back');
          elementArrow.setAttribute('style', 'color:#90EE90;font-weight: bolder');
        } else {
          elementStatus.setAttribute('style', 'background:#F32837;border-radius:10px');
          elementArrow.setAttribute('name', 'chevron-forward');
          elementArrow.setAttribute('style', 'color:#F32837;font-weight: bolder');
        }
      }
    }
  }
  displayDirectionInit(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };
    let coordenadas;
    coordenadas = {
      lat: latI,
      lng: lngI
    };
    let coordenadasAju = {
      lat: parseFloat(latF),
      lng: parseFloat(lngF)
    };
    //this.calculateDistance(latF,  lngF);
    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });
    //alert('So far so good')
    this.ajuMarker.setMap(this.mapa);
    this.setCrashIcon();
    directionsService.route({
      origin: coordenadasAju,
      destination: coordenadas,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        this.rutaInicial = response.routes[0];
        this.pointsArray = response.routes[0].legs[0];
        let dist = response.routes[0].legs[0].distance.text;
        let distM = response.routes[0].legs[0].distance.value; //(response.routes[0].legs[0].distance)*1000;
        localStorage.setItem('dist', dist);
        localStorage.setItem('distM', distM.toString());
        this.isLoadingData = false;
        //this.routeString = JSON.stringify(response)
        //alert(dist)
        for (let index = 0; index < this.rutaInicial.length; index++) {
          const element = this.rutaInicial[index];
          //alert(element)
        }
      }
    });
  }

  displayDirection(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };
    let coordenadas;
    coordenadas = {
      lat: latI,
      lng: lngI
    };
    let coordenadasAju = {
      lat: parseFloat(latF),
      lng: parseFloat(lngF)
    };
    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });
    this.ajuMarker.setMap(this.mapa);
    this.setCrashIcon();
    directionsService.route({
      origin: coordenadasAju,
      destination: coordenadas,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        //directionsDisplay.setDirections(response);
        this.rutaInicial = response.routes[0];
        this.pointsArray = response.routes[0].legs[0];
        //this.routeString = JSON.stringify(response)
        //alert(this.pointsArray.length)
        localStorage.setItem('rutaInicial', JSON.stringify(this.rutaInicial));
        //localStorage.setItem('routeString', JSON.stringify(this.routeString));
        //this.puntos = JSON.stringify(this.rutaInicial);
        //this.mapa.setZoom(10);
      }
    });
  }

  setCrashIcon() {
    let coordenadas;
    coordenadas = {
      lat: this.latitud,
      lng: this.longitud
    };
    let ii = 0;
    let tiempo;
    tiempo = this.randomTimer(0, 1);
    this.firstInterval = setInterval(() => {
      tiempo = this.randomTimer(0, 1);
      const crashIconUrl = _environments_mapas__WEBPACK_IMPORTED_MODULE_4__.iconColors[ii].url;
      const crashIcon = {
        url: crashIconUrl,
        color: 'green',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      this.crashMarker = new google.maps.Marker({
        map: this.mapa,
        position: coordenadas,
        icon: crashIcon
      });
      this.crashMarker.setMap(this.mapa);
      if (ii == 3) {
        ii = 0;
      } else {
        ii++;
      }
    }, 200);
  }
  randomTimer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
  }
  addMapMarker(coordenates) {
    var _this3 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(coordenates.lat + ', ' + coordenates.lng);
      const markerId = yield _this3.newMaP.addMarker({
        coordinate: {
          lat: coordenates.lat,
          lng: coordenates.lng
        },
        title: "Lugar del siniestros"
      });
      _this3.markerId = markerId;
    })();
  }
  clickInMap() {
    var _this4 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const click = yield _this4.newMaP.setOnMapClickListener(click => {
        _this4.newMaP.removeMarker(_this4.markerId);
        let coodernadas;
        coodernadas = {
          lat: click.latitude,
          lng: click.longitude
        };
        _this4.latitud = click.latitude;
        _this4.longitud = click.longitude;
        _this4.addMapMarker(coodernadas);
      });
    })();
  }
  Torval() {
    var _this5 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.newMaP !== undefined) {
        const putin = _this5.newMaP.destroy();
        console.log(putin);
      }
    })();
  }
  continuar() {
    const navigateExtras = {
      state: {
        data: [{
          'forma': this.formulario
        }, {
          'latitud': this.latitud
        }, {
          'longitud': this.longitud
        }]
      }
    };
    this.Torval();
    this.router.navigate(['./clientehn'], navigateExtras);
  }
  cerrarMapa() {
    this.Torval();
    this.location.back();
  }
  mensajeContinuar() {
    var _this6 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.presentToast('El marcador rojo define el lugar del siniestro. ¿Está seguro de que este se encuentra en el lugar del siniestro?', 'bottom', 'mapa');
    })();
  }
  presentToast(message, position, clase) {
    var _this7 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentToast = document.getElementsByTagName('ion-toast');
      console.log('Tengo estos toasters : ' + currentToast.length);
      if (currentToast.length > 0) {
        _this7.toaster.dismiss();
      }
      const toast = yield _this7.toaster.create({
        message: message,
        color: 'primary',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [{
          text: 'NO',
          role: 'cancel'
        }, {
          text: 'SI',
          role: 'confirm',
          handler: () => {
            _this7.continuar();
          }
        }]
      });
      yield toast.present();
    })();
  }
  limpiarCache() {
    this.Torval();
    //localStorage.removeItem('dSignatureAsegurado');
    //localStorage.removeItem('firmasAsegurados');
    //localStorage.removeItem('miLocalidad');
    //localStorage.removeItem('coordinates');
    //localStorage.removeItem('codigoPais');
    //localStorage.removeItem('nombrePais');
    //localStorage.removeItem('esCompleto');
    window.location.reload();
  }
  clearIntervals() {
    if (this.firstInterval) {
      clearInterval(this.firstInterval);
    }
    if (this.trackInterval) {
      clearInterval(this.trackInterval);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
    }, {
      type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
    }];
  }
  static {
    this.propDecorators = {
      mapRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
        args: ['map']
      }]
    };
  }
};
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-mapa',
  template: _mapa_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_mapa_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MapaPage);

// Código comentado
// Mapa
/*
      this.newMaP = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: "AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ",
        config: {
          center: { lat: this.latitud,
                    lng: this.longitud
          },
          zoom: 16,
        },
      });
      */
// Add a marker to the map
//this.addMapMarker(coodernadas);
//click on map
//this.clickInMap();

/***/ }),

/***/ 53305:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "capacitor-google-map {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n}\n\nion-item {\n  padding: 0px;\n  -webkit-padding-start: 0%;\n  height: 80%;\n  --padding-start: 20px;\n  --inner-padding-end: 10px;\n  --min-height: 80%;\n}\n\nion-fab-button {\n  --background: #f14f23;\n  --background-activated: #a8462a;\n  --background-hover: #f66e48;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.ion-alerta {\n  --background: #161e2c!important;\n  --color:#FF0000!important;\n  --border-radius:5px!important;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#spinFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/app/mapa/mapa.page.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,qBAAA;AACJ;;AAEA;EACI,YAAA;EACA,yBAAA;EACA,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AACJ;;AAEA;EACI,+BAAA;EACH,yBAAA;EACA,6BAAA;AACD;;AAEE;EACD,eAAA;EACG,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACJ;;AAGA;EACC,eAAA;EACG,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAAJ","sourcesContent":["capacitor-google-map{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-block;\r\n\r\n}\r\nion-item{\r\n    padding: 0px;\r\n    -webkit-padding-start: 0%;\r\n    height: 80%;\r\n    --padding-start: 20px;\r\n    --inner-padding-end: 10px;\r\n    --min-height: 80%;\r\n}\r\n\r\nion-fab-button {\r\n    --background: #f14f23;\r\n    --background-activated: #a8462a;\r\n    --background-hover: #f66e48;\r\n    --border-radius: 15px;\r\n    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n    --color: white;\r\n  }\r\n\r\n.ion-alerta{\r\n    --background: #161e2c!important;   \r\n --color:#FF0000!important;\r\n --border-radius:5px!important;\r\n  }\r\n\r\n  ion-spinner{\r\n\tposition: fixed;\r\n    top: 28%;\r\n    left: 40%;\r\n    z-index: 999;\r\n    width: 20%;\r\n    height: 20%;\r\n\t//background-color: #00213f;\r\n}\r\n\r\n#spinFooter{\r\n\tposition: fixed;\r\n    background: black;\r\n    opacity: 0.6;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 900;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15119:
/*!************************************************!*\
  !*** ./src/app/mapa/mapa.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"spinFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button (click)=\"Torval()\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>Lugar Del Siniestro</ion-title>\r\n  </ion-toolbar>\r\n</!--ion-header>\r\n\r\n<ion-content style=\"--background: transparent;\">\r\n<capacitor-google-map id=\"map\" #map  (mapClick)=\"addMapMarker($event)\"></capacitor-google-map>\r\n</ion-content>\r\n\r\n<ion-footer slot=\"fixed\" style=\"bottom: 0;left:0;height:80px; background: white;\">\r\n  <ion-grid *ngIf=\"isTrack == true\">\r\n    <ion-row>\r\n      <ion-col size=\"3\"></ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"isLoadingData == true\" style=\"position: fixed; bottom:1%;left:35%;\"><ion-spinner color=\"primary\" name=\"dots\"></ion-spinner></ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"isLoadingData == false\">\r\n          <br><ion-badge>{{mapInfoText}}</ion-badge>\r\n        \r\n      </ion-col>\r\n      <ion-col size=\"3\"></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-fab style=\"position: fixed;margin-right: 6%;\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button (click)=\"limpiarCache()\">\r\n      <ion-icon style=\"font-size: 3rem;\" src=\"../../assets/img/clear-cache.svg\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button (click)=\"cerrarMapa()\">\r\n      <ion-icon name=\"return-up-back\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-footer>\r\n\r\n<ion-modal #modalInfo trigger=\"open-modal-info\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.75]\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Opciones Disponibles</ion-toolbar>\r\n      \r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mapa_mapa_module_ts.js.map