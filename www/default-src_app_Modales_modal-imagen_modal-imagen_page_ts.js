(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_Modales_modal-imagen_modal-imagen_page_ts"],{

/***/ 45259:
/*!***********************************************************!*\
  !*** ./src/app/Modales/modal-imagen/modal-imagen.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalImagenPage": () => (/* binding */ ModalImagenPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _modal_imagen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-imagen.page.html?ngResource */ 74527);
/* harmony import */ var _modal_imagen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-imagen.page.scss?ngResource */ 6461);
/* harmony import */ var _modal_imagen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_imagen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/keyboard */ 10523);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/environments/arrays */ 41924);









let ModalImagenPage = class ModalImagenPage {
  constructor(navParams) {
    this.navParams = navParams;
    this.user = null;
    this.razonesAsignacion = [];
    this.isAgentLoaded = false;
    this.isLoading = false;
    this.razonesAsignacionUnidad = [];
    this.isStart = true;
    this.canDismiss = false;
    this.miUnidad = [];
    this.img = {};
    this.fotos = [];
    this.dataFoto = [];
    this.imagePrefix = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.imagePrefix;
    this.imageHeight = '60%';
    this.foto = 'data:image/jpeg;base64,' + navParams.get('foto');
    this.descripcion = navParams.get('descripcion');
    this.descriptionIndex = navParams.get('index');
    let tipo = navParams.get('tipo');
    this.delete = navParams.get('delete');
  }
  ngOnInit() {
    _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard.addListener('keyboardDidShow', info => {
      void 0;
      this.imageHeight = '35%';
    });
    _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_4__.Keyboard.addListener('keyboardDidHide', () => {
      void 0;
      this.imageHeight = '60%';
    });
  }
  dismissModal() {
    this.modal.canDismiss = true;
    void 0;
    if (this.modal) {
      this.modal.dismiss();
    }
  }
  abrirGaleria() {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canDismiss = false;
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Photos,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this.foto = img.base64String;
      void 0;
      setTimeout(() => {
        if (_this.foto) {
          _this.canDismiss = true;
        }
      }, 1000);
    })();
  }
  abrirCamara() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this2.img.IdTipo = 2;
      _this2.img.Tipo = 'Otro';
      _this2.img.Foto = img.base64String;
      _this2.foto = img.base64String;
      _this2.fotos.push(_this2.img);
      _this2.dataFoto.push({
        Fotografia: _this2.imagePrefix + _this2.img.Foto,
        IdAgente: _this2.user.ProveedorAgenteId
      });
      _this2.img = {};
      setTimeout(() => {
        if (_this2.foto) {
          _this2.canDismiss = true;
        }
      }, 1000);
    })();
  }
  setNewDescription() {
    void 0;
  }
  saveNewDescription() {
    void 0;
    void 0;
    localStorage.setItem('newDescription', this.descripcionX);
    localStorage.setItem('descriptionIndex', this.descriptionIndex);
    this.dismissModal();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
    }];
  }
  static {
    this.propDecorators = {
      modal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
        args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, {
          static: true
        }]
      }]
    };
  }
};
ModalImagenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-modal-imagen',
  template: _modal_imagen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_imagen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalImagenPage);


/***/ }),

/***/ 41924:
/*!****************************************!*\
  !*** ./src/app/environments/arrays.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alabanzasList": () => (/* binding */ alabanzasList),
/* harmony export */   "alertInputs": () => (/* binding */ alertInputs),
/* harmony export */   "archivosTipo": () => (/* binding */ archivosTipo),
/* harmony export */   "bannerSliderList": () => (/* binding */ bannerSliderList),
/* harmony export */   "calendarioEventos": () => (/* binding */ calendarioEventos),
/* harmony export */   "chapterssList": () => (/* binding */ chapterssList),
/* harmony export */   "citiesList": () => (/* binding */ citiesList),
/* harmony export */   "cityList": () => (/* binding */ cityList),
/* harmony export */   "coloresEstadosAceptacion": () => (/* binding */ coloresEstadosAceptacion),
/* harmony export */   "documentosMEG": () => (/* binding */ documentosMEG),
/* harmony export */   "flagIconPrefix": () => (/* binding */ flagIconPrefix),
/* harmony export */   "foodList": () => (/* binding */ foodList),
/* harmony export */   "homeButtons": () => (/* binding */ homeButtons),
/* harmony export */   "imagePrefix": () => (/* binding */ imagePrefix),
/* harmony export */   "imagePrefixPdf": () => (/* binding */ imagePrefixPdf),
/* harmony export */   "imagePrefixSvg": () => (/* binding */ imagePrefixSvg),
/* harmony export */   "listadoDeSeries": () => (/* binding */ listadoDeSeries),
/* harmony export */   "masList": () => (/* binding */ masList),
/* harmony export */   "meses": () => (/* binding */ meses),
/* harmony export */   "messagesList": () => (/* binding */ messagesList),
/* harmony export */   "moreList": () => (/* binding */ moreList),
/* harmony export */   "notificationsList": () => (/* binding */ notificationsList),
/* harmony export */   "pdfIconUrl": () => (/* binding */ pdfIconUrl),
/* harmony export */   "seriesList": () => (/* binding */ seriesList),
/* harmony export */   "seriesListNo": () => (/* binding */ seriesListNo),
/* harmony export */   "sundaySchool": () => (/* binding */ sundaySchool),
/* harmony export */   "trList": () => (/* binding */ trList),
/* harmony export */   "transportList": () => (/* binding */ transportList)
/* harmony export */ });
const bannerSliderList = [{
  hasTag: 'Serie 1',
  image: '../../../assets/images/slider/slider_4.jpg'
}, {
  hasTag: 'Serie 2',
  image: '../../../assets/images/slider/slider_5.jpg'
}, {
  hasTag: 'Serie 3',
  image: '../../../assets/images/slider/slider_6.jpg'
}];
const seriesListNo = [{
  nombre: 'Serie 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  capitulos: [{
    capituloId: 1,
    thumbnail: '../../../assets/images/cities/tegus.jpg',
    videoUrl: '../../../assets/videos/series/serie1/roadView.mp4',
    etiqueta: "Capítulo 1",
    nombre: 'Capítulo 1'
  }, {
    capituloId: 2,
    thumbnail: '../../../assets/images/cities/sps.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    etiqueta: "Capítulo 2",
    nombre: 'Capítulo 2'
  }, {
    capituloId: 3,
    thumbnail: '../../../assets/images/cities/ceiba.jpg',
    videoUrl: '../../../assets/videos/series/serie1/godplay.mp4',
    etiqueta: "Capítulo 3",
    nombre: 'Capítulo 3'
  }, {
    capituloId: 4,
    thumbnail: '../../../assets/images/cities/choluteca.jpg',
    videoUrl: '../../../assets/videos/series/serie1/gym1.mp4',
    etiqueta: "Capítulo 4",
    nombre: 'Capítulo 4'
  }, {
    capituloId: 5,
    thumbnail: '../../../assets/images/cities/comayagua.jpg',
    videoUrl: '../../../assets/videos/series/serie1/gym2.mp4',
    etiqueta: "Capítulo 5",
    nombre: 'Capítulo 5'
  }, {
    capituloId: 6,
    thumbnail: '../../../assets/images/cities/copan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/nature1.mp4',
    etiqueta: "Capítulo 6",
    nombre: 'Capítulo 6'
  }, {
    capituloId: 7,
    thumbnail: '../../../assets/images/cities/gracias.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo1.mp4',
    etiqueta: "Capítulo 7",
    nombre: 'Capítulo 7'
  }, {
    capituloId: 8,
    thumbnail: '../../../assets/images/cities/juticalpa.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo2.mp4',
    etiqueta: "Capítulo 8",
    nombre: 'Capítulo 8'
  }, {
    capituloId: 9,
    thumbnail: '../../../assets/images/cities/roatan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo3.mp4',
    etiqueta: "Capítulo 9",
    nombre: 'Capítulo 9'
  }]
}, {
  nombre: 'Serie 2',
  thumbnail: '../../../assets/images/slider/slider_5.jpg',
  capitulos: [{
    cityId: 1,
    image: '../../../assets/images/cities/tegus.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 1",
    name: 'Capítulo 1'
  }, {
    cityId: 2,
    image: '../../../assets/images/cities/sps.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 2",
    name: 'Capítulo 2'
  }, {
    cityId: 3,
    image: '../../../assets/images/cities/ceiba.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 3",
    name: 'Capítulo 3'
  }, {
    cityId: 4,
    image: '../../../assets/images/cities/choluteca.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 4",
    name: 'Capítulo 4'
  }, {
    cityId: 5,
    image: '../../../assets/images/cities/comayagua.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 5",
    name: 'Capítulo 5'
  }, {
    cityId: 6,
    image: '../../../assets/images/cities/copan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 6",
    name: 'Capítulo 6'
  }, {
    cityId: 7,
    image: '../../../assets/images/cities/gracias.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 7",
    name: 'Capítulo 7'
  }, {
    cityId: 8,
    image: '../../../assets/images/cities/juticalpa.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 8",
    name: 'Capítulo 8'
  }, {
    cityId: 9,
    image: '../../../assets/images/cities/roatan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 9",
    name: 'Capítulo 9'
  }, {
    cityId: 10,
    image: '../../../assets/images/cities/sanlorenzo.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 10",
    name: 'Capítulo 10'
  }, {
    cityId: 11,
    image: '../../../assets/images/cities/santaana.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 11",
    name: 'Capítulo 11'
  }, {
    cityId: 12,
    image: '../../../assets/images/cities/tela.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 13",
    name: 'Capítulo 13'
  }, {
    cityId: 13,
    image: '../../../assets/images/cities/trujillo.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 14",
    name: 'Capítulo 14'
  }]
}, {
  nombre: 'Serie 3',
  thumbnail: '../../../assets/images/slider/slider_6.jpg',
  capitulos: [{
    cityId: 1,
    image: '../../../assets/images/cities/tegus.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 1",
    name: 'Capítulo 1'
  }, {
    cityId: 2,
    image: '../../../assets/images/cities/sps.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 2",
    name: 'Capítulo 2'
  }, {
    cityId: 3,
    image: '../../../assets/images/cities/ceiba.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 3",
    name: 'Capítulo 3'
  }, {
    cityId: 4,
    image: '../../../assets/images/cities/choluteca.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 4",
    name: 'Capítulo 4'
  }, {
    cityId: 5,
    image: '../../../assets/images/cities/comayagua.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 5",
    name: 'Capítulo 5'
  }, {
    cityId: 6,
    image: '../../../assets/images/cities/copan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 6",
    name: 'Capítulo 6'
  }, {
    cityId: 7,
    image: '../../../assets/images/cities/gracias.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 7",
    name: 'Capítulo 7'
  }, {
    cityId: 8,
    image: '../../../assets/images/cities/juticalpa.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 8",
    name: 'Capítulo 8'
  }, {
    cityId: 9,
    image: '../../../assets/images/cities/roatan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 9",
    name: 'Capítulo 9'
  }, {
    cityId: 10,
    image: '../../../assets/images/cities/sanlorenzo.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 10",
    name: 'Capítulo 10'
  }, {
    cityId: 11,
    image: '../../../assets/images/cities/santaana.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 11",
    name: 'Capítulo 11'
  }, {
    cityId: 12,
    image: '../../../assets/images/cities/tela.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 13",
    name: 'Capítulo 13'
  }, {
    cityId: 13,
    image: '../../../assets/images/cities/trujillo.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    searchTag: "Capítulo 14",
    name: 'Capítulo 14'
  }]
}];
const citiesList = [{
  cityId: 1,
  image: '../../../assets/images/cities/tegus.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 1",
  name: 'Capítulo 1'
}, {
  cityId: 2,
  image: '../../../assets/images/cities/sps.jpg',
  videoUrl: '../../../assets/videos/seaView.mp4',
  searchTag: "Capítulo 2",
  name: 'Capítulo 2'
}, {
  cityId: 3,
  image: '../../../assets/images/cities/ceiba.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 3",
  name: 'Capítulo 3'
}, {
  cityId: 4,
  image: '../../../assets/images/cities/choluteca.jpg',
  videoUrl: '../../../assets/videos/seaView.mp4',
  searchTag: "Capítulo 4",
  name: 'Capítulo 4'
}, {
  cityId: 5,
  image: '../../../assets/images/cities/comayagua.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 5",
  name: 'Capítulo 5'
}, {
  cityId: 6,
  image: '../../../assets/images/cities/copan.jpg',
  videoUrl: '../../../assets/videos/seaView.mp4',
  searchTag: "Capítulo 6",
  name: 'Capítulo 6'
}, {
  cityId: 7,
  image: '../../../assets/images/cities/gracias.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 7",
  name: 'Capítulo 7'
}, {
  cityId: 8,
  image: '../../../assets/images/cities/juticalpa.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 8",
  name: 'Capítulo 8'
}, {
  cityId: 9,
  image: '../../../assets/images/cities/roatan.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 9",
  name: 'Capítulo 9'
}, {
  cityId: 10,
  image: '../../../assets/images/cities/sanlorenzo.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 10",
  name: 'Capítulo 10'
}, {
  cityId: 11,
  image: '../../../assets/images/cities/santaana.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 11",
  name: 'Capítulo 11'
}, {
  cityId: 12,
  image: '../../../assets/images/cities/tela.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 13",
  name: 'Capítulo 13'
}, {
  cityId: 13,
  image: '../../../assets/images/cities/trujillo.jpg',
  videoUrl: '../../../assets/videos/roadView.mp4',
  searchTag: "Capítulo 14",
  name: 'Capítulo 14'
}];
const alabanzasList = [{
  artistId: 0,
  artistName: 'Artistas Varios',
  artistPlayListName: 'Favoritos',
  artistPhoto: '../../../assets/images/user_profile/user_8.jpg',
  artistNationality: '',
  artistAge: 0,
  artistGender: 1,
  artistMaterials: [{
    alabanzaId: 0,
    artistName: 'Artistas Varios',
    artistPlayListName: 'Favoritos',
    videoFolder: 'Musica/alabanzas/',
    videoUrl: 'Alabanza0.mp4',
    isPlay: true,
    nombre: 'Alabanza 0',
    thumbnail: '../../../assets/images/slider/slider_4.jpg'
  }, {
    alabanzaId: 1,
    artistName: 'Artistas Varios',
    artistPlayListName: 'Favoritos',
    videoFolder: 'Musica/alabanzas/',
    videoUrl: 'Alabanza1.mp4',
    isPlay: true,
    nombre: 'Alabanza 1',
    thumbnail: '../../../assets/images/slider/slider_4.jpg'
  }, {
    alabanzaId: 2,
    artistName: 'Artistas Varios',
    artistPlayListName: 'Favoritos',
    videoFolder: 'Musica/alabanzas/',
    videoUrl: 'Alabanza2.mp4',
    isPlay: true,
    nombre: 'Alabanza 2',
    thumbnail: '../../../assets/images/slider/slider_4.jpg'
  }]
}];
const chapterssList = [{
  serieId: 0,
  capituloId: 1,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%2011%20-%2008%20agosto%202024%20-%2010-13-35%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 11',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 15",
  etiqueta: "TEMA APOCALIPSIS 015 - 10 agosto 2024",
  name: ''
}, {
  serieId: 0,
  capituloId: 2,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%2012%20-%2008%20agosto%202024%20-%2010-56-35%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 12',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 11",
  etiqueta: "TEMA APOCALIPSIS 11 - 08 agosto 2024",
  name: ''
}, {
  serieId: 0,
  capituloId: 3,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%2013%20-%2008%20agosto%202024%20-%2011-44-25%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 13',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 12",
  etiqueta: "TEMA APOCALIPSIS 12 - 08 agosto 2024",
  name: ''
}, {
  serieId: 0,
  capituloId: 4,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%2014%20-%2010%20agosto%202024%20-%2009-56-12%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 14',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 13",
  etiqueta: "TEMA APOCALIPSIS 13 - 08 agosto 2024",
  name: ''
}, {
  serieId: 0,
  capituloId: 5,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%2015%20-%2010%20agosto%202024%20-%2010-46-01%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 15',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 14",
  etiqueta: "TEMA APOCALIPSIS 14 - 10 agosto 2024",
  name: ''
}, {
  serieId: 1,
  capituloId: 1,
  serieUrl: 'Estudios/LaGloriaseptuple2/',
  videoUrl: 'TEMA%20APOCALIPSIS%20016%20-%2010%20agosto%202024%20-%2011-33-28%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 16',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 16",
  etiqueta: "TEMA APOCALIPSIS 16 - 10 agosto 2024",
  name: ''
}, {
  serieId: 1,
  capituloId: 2,
  serieUrl: 'Estudios/LaGloriaseptuple2/',
  videoUrl: 'TEMA%20APOCALIPSIS%20017%20-%2014%20agosto%202024%20-%2010-48-26%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 17',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 17",
  etiqueta: "TEMA APOCALIPSIS 17 - 14 agosto 2024",
  name: ''
}, {
  serieId: 1,
  capituloId: 3,
  serieUrl: 'Estudios/LaGloriaseptuple2/',
  videoUrl: 'TEMA%20APOCALIPSIS%20018-%2014%20agosto%202024%20-%2011-35-38%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 18',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 18",
  etiqueta: "TEMA APOCALIPSIS 18 - 14 agosto 2024",
  name: ''
}, {
  serieId: 1,
  capituloId: 4,
  serieUrl: 'Estudios/LaGloriaseptuple2/',
  videoUrl: 'TEMA%20APOCALIPSIS%20019%20-%2014%20agosto%202024%20-%2012-41-27%20P.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 19',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 19",
  etiqueta: "TEMA APOCALIPSIS 19 - 10 agosto 2024",
  name: ''
}, {
  serieId: 1,
  capituloId: 5,
  serieUrl: 'Estudios/LaGloriaseptuple2/',
  videoUrl: 'TEMA%20APOCALIPSIS%20020%20-%2016%20agosto%202024%20-%2008-45-33%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 20',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 20",
  etiqueta: "TEMA APOCALIPSIS 20 - 16 agosto 2024",
  name: ''
}, {
  serieId: 2,
  capituloId: 1,
  serieUrl: 'Estudios/ElEfectoDeUnaVision/',
  videoUrl: 'TEMA%20APOCALIPSIS%200022%20-%2016%20agosto%202024%20-%2009-28-53%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 22',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'El Efecto De Una Vision',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 22",
  etiqueta: "TEMA APOCALIPSIS 22 - 16 agosto 2024",
  name: ''
}, {
  serieId: 2,
  capituloId: 2,
  serieUrl: 'Estudios/ElEfectoDeUnaVision/',
  videoUrl: 'TEMA%20APOCALIPSIS%200023%20-%2016%20agosto%202024%20-%2010-09-54%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 23',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'El Efecto De Una Vision',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 23",
  etiqueta: "TEMA APOCALIPSIS 23 - 16 agosto 2024",
  name: ''
}, {
  serieId: 3,
  capituloId: 1,
  serieUrl: 'Estudios/LaTrilogiaDelLibro/',
  videoUrl: 'TEMA%20APOCALIPSIS%200024%20-%2022%20agosto%202024%20-%2004-14-03%20P.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 24',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Trilogia Del Libro',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 24",
  etiqueta: "TEMA APOCALIPSIS 24 - 22 agosto 2024",
  name: ''
}, {
  serieId: 3,
  capituloId: 2,
  serieUrl: 'Estudios/LaTrilogiaDelLibro/',
  videoUrl: 'TEMA%20APOCALIPSIS%200025%20-%2022%20agosto%202024%20-%2004-52-26%20P.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 25',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Trilogia Del Libro',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 25",
  etiqueta: "TEMA APOCALIPSIS 25 - 22 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 1,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%2000029%20-%2026%20agosto%202024%20-%2011-36-28%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 29',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 29",
  etiqueta: "TEMA APOCALIPSIS 29 - 26 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 2,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%200026%20-%2022%20agosto%202024%20-%2005-39-36%20P.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 26',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 26",
  etiqueta: "TEMA APOCALIPSIS 26 - 22 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 3,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%200027%20-%2026%20agosto%202024%20-%2010-14-22%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 27',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 27",
  etiqueta: "TEMA APOCALIPSIS 27 - 26 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 4,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%200028%20-%2026%20agosto%202024%20-%2010-55-19%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 28',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 28",
  etiqueta: "TEMA APOCALIPSIS 28 - 26 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 5,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%200302%20-%2027%20agosto%202024%20-%2011-13-28%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 302',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 30",
  etiqueta: "TEMA APOCALIPSIS 302 - 27 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 6,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%20031%20-%2027%20agosto%202024%20-%2010-21-02%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 31',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 31",
  etiqueta: "TEMA APOCALIPSIS 31 - 27 agosto 2024",
  name: ''
}, {
  serieId: 4,
  capituloId: 7,
  serieUrl: 'Estudios/CristoIdentificadoAtravez/',
  videoUrl: 'TEMA%20APOCALIPSIS%20032%20-%2027%20agosto%202024%20-%2011-13-06%20A.M..mp4',
  duration: 30,
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 32',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Cristo Identificado Atravez',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  searchTag: "apocalipsis 32",
  etiqueta: "TEMA APOCALIPSIS 32 - 27 agosto 2024",
  name: ''
}];
const listadoDeSeries = [{
  serieId: 1,
  serieNombre: 'La Gloria Séptuple (Parte 1)'
}, {
  serieId: 2,
  serieNombre: 'La Gloria Séptuple (Parte 2)'
}, {
  serieId: 3,
  serieNombre: 'El Efecto De Una Visión'
}, {
  serieId: 4,
  serieNombre: 'La Trilogía Del Libro'
}, {
  serieId: 5,
  serieNombre: 'Cristo Identificado Atravez'
}];
const seriesList = [{
  serieId: 0,
  serieUrl: 'Estudios/LaGloriaseptuple/',
  videoUrl: 'TEMA%20APOCALIPSIS%20015%20-%2010%20agosto%202024%20-%2010-46-01%20A.M..mp4',
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'TEMA APOCALIPSIS 1:20',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'La Gloria Séptuple Parte 1',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  capitulos: [{
    capituloId: 1,
    searchTag: "agosto",
    thumbnail: '../../../assets/images/cities/tegus.jpg',
    videoUrl: 'TEMA%20APOCALIPSIS%20015%20-%2010%20agosto%202024%20-%2010-46-01%20A.M..mp4',
    etiqueta: "TEMA APOCALIPSIS 015 - 10 agosto 2024",
    nombre: 'TEMA APOCALIPSIS 015 - 10 agosto 2024'
  }, {
    capituloId: 2,
    searchTag: "Capítulo 2",
    thumbnail: '../../../assets/images/cities/sps.jpg',
    videoUrl: '../../../assets/videos/series/serie1/seaView.mp4',
    etiqueta: "Capitulo 2",
    nombre: 'Capítulo 2'
  }, {
    capituloId: 3,
    searchTag: "Capítulo 3",
    thumbnail: '../../../assets/images/cities/ceiba.jpg',
    videoUrl: '../../../assets/videos/series/serie1/godplay.mp4',
    etiqueta: "Capitulo 3",
    nombre: 'Capítulo 3'
  }, {
    capituloId: 4,
    searchTag: "Capítulo 4",
    thumbnail: '../../../assets/images/cities/choluteca.jpg',
    videoUrl: '../../../assets/videos/series/serie1/gym1.mp4',
    etiqueta: "Capitulo 4",
    nombre: 'Capítulo 4'
  }, {
    capituloId: 5,
    searchTag: "Capítulo 5",
    thumbnail: '../../../assets/images/cities/comayagua.jpg',
    videoUrl: '../../../assets/videos/series/serie1/gym2.mp4',
    etiqueta: "Capitulo 5",
    nombre: 'Capítulo 5'
  }, {
    capituloId: 6,
    searchTag: "Capítulo 6",
    thumbnail: '../../../assets/images/cities/copan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/nature1.mp4',
    etiqueta: "Capitulo 6",
    nombre: 'Capítulo 6'
  }, {
    capituloId: 7,
    searchTag: "Capítulo 7",
    thumbnail: '../../../assets/images/cities/gracias.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo1.mp4',
    etiqueta: "Capitulo 7",
    nombre: 'Capítulo 7'
  }, {
    capituloId: 8,
    searchTag: "Capítulo 8",
    thumbnail: '../../../assets/images/cities/juticalpa.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo2.mp4',
    etiqueta: "Capitulo 8",
    nombre: 'Capítulo 8'
  }, {
    capituloId: 9,
    searchTag: "Capítulo 9",
    thumbnail: '../../../assets/images/cities/roatan.jpg',
    videoUrl: '../../../assets/videos/series/serie1/turismo3.mp4',
    etiqueta: "Capitulo 9",
    nombre: 'Capítulo 9'
  }],
  chaptersCount: 10,
  lapse: '8 Hrs : 30 Mins'
}, {
  serieId: 1,
  serieUrl: '',
  videoUrl: '../../../assets/videos/seaView.mp4',
  profilePicture: '../../../assets/images/user_profile/user_8.jpg',
  postShortUserName: 'Atardecer Ambar Roatán',
  postUserName: 'Lucas Cardona',
  isPlay: true,
  nombre: 'Serie 2',
  thumbnail: '../../../assets/images/slider/slider_4.jpg',
  capitulos: [{}],
  chaptersCount: 8,
  lapse: '10 Hrs : 00 Mins'
}];
const cityList = [{
  data: [{
    cityId: 1,
    image: '../../../assets/images/cities/tegus.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Tegucigalpa",
    name: 'Tegucigalpa'
  }, {
    cityId: 2,
    image: '../../../assets/images/cities/sps.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "San Pedro Sula",
    name: 'San Pedro Sula'
  }, {
    cityId: 3,
    image: '../../../assets/images/cities/ceiba.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Ceiba",
    name: 'Ceiba'
  }, {
    cityId: 4,
    image: '../../../assets/images/cities/choluteca.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Choluteca",
    name: 'Choluteca'
  }, {
    cityId: 5,
    image: '../../../assets/images/cities/comayagua.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Comayagua",
    name: 'Comayagua'
  }, {
    cityId: 6,
    image: '../../../assets/images/cities/copan.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Copan",
    name: 'Copan'
  }, {
    cityId: 7,
    image: '../../../assets/images/cities/gracias.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Gracias",
    name: 'Gracias'
  }, {
    cityId: 8,
    image: '../../../assets/images/cities/juticalpa.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Juticalpa",
    name: 'Juticalpa'
  }, {
    cityId: 9,
    image: '../../../assets/images/cities/roatan.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Roatán",
    name: 'Roatán'
  }, {
    cityId: 10,
    image: '../../../assets/images/cities/sanlorenzo.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "San Lorenzo",
    name: 'San Lorenzo'
  }, {
    cityId: 11,
    image: '../../../assets/images/cities/santaana.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Santa Ana",
    name: 'Santa Ana'
  }, {
    cityId: 12,
    image: '../../../assets/images/cities/tela.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Tela",
    name: 'Tela'
  }, {
    cityId: 13,
    image: '../../../assets/images/cities/trujillo.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Trujillo",
    name: 'Trujillo'
  }]
}, {
  Image: []
}];
const moreList = [{
  data: [{
    moreId: 1,
    image: '../../../assets/images/masHn/ferias.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Feria",
    name: 'Ferias Patronales'
  }, {
    moreId: 2,
    image: '../../../assets/images/masHn/eventos.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Evento",
    name: 'Eventos'
  }, {
    moreId: 3,
    image: '../../../assets/images/masHn/festival.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Festival",
    name: 'Festivales'
  }, {
    moreId: 4,
    image: '../../../assets/images/transportation/caminata.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Caminata",
    name: 'Caminata'
  }]
}];
const trList = [{
  data: [{
    transportId: 1,
    image: '../../../assets/images/transportation/ferry.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Ferry",
    name: 'Ferry'
  }, {
    transportId: 2,
    image: '../../../assets/images/transportation/avion.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Avión",
    name: 'Avión'
  }, {
    transportId: 3,
    image: '../../../assets/images/transportation/bus.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Bus",
    name: 'Bus'
  }, {
    transportId: 4,
    image: '../../../assets/images/masHn/taxi.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Taxi",
    name: 'Taxis'
  }, {
    transportId: 5,
    image: '../../../assets/images/transportation/carfd.jpg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
    searchTag: "Renta",
    name: 'Renta Auto'
  }]
}];
const foodList = [{
  image: '../../../assets/images/food/food_1.png',
  searchTag: "foodTag"
}, {
  image: '../../../assets/images/food/food_2.png',
  searchTag: "foodTag"
}, {
  image: '../../../assets/images/food/food_3.png',
  searchTag: "foodTag"
}, {
  image: '../../../assets/images/food/food_4.png',
  searchTag: "foodTag"
}, {
  image: '../../../assets/images/food/food_5.png',
  searchTag: "foodTag"
}, {
  image: '../../../assets/images/food/food_6.png',
  searchTag: "foodTag"
}];
const transportList = [{
  transportId: 1,
  image: '../../../assets/images/transportation/ferry.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Ferry",
  name: 'Ferry'
}, {
  transportId: 2,
  image: '../../../assets/images/transportation/avion.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Avión",
  name: 'Avión'
}, {
  transportId: 3,
  image: '../../../assets/images/transportation/bus.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Bus",
  name: 'Bus'
}, {
  transportId: 4,
  image: '../../../assets/images/masHn/taxi.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Taxi",
  name: 'Taxis'
}, {
  transportId: 5,
  image: '../../../assets/images/transportation/carfd.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Renta",
  name: 'Renta Auto'
}];
const masList = [{
  moreId: 1,
  image: '../../../assets/images/masHn/ferias.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Feria",
  name: 'Ferias Patronales'
}, {
  moreId: 2,
  image: '../../../assets/images/masHn/eventos.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Evento",
  name: 'Eventos'
}, {
  moreId: 3,
  image: '../../../assets/images/masHn/festival.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Festival",
  name: 'Festivales'
}, {
  moreId: 4,
  image: '../../../assets/images/transportation/caminata.jpg',
  resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper hendrerit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet suscipit libero. Morbi diam purus, sagittis quis mauris et, pharetra aliquet nisi. Mauris hendrerit gravida sapien eu scelerisque. Sed vel ante mauris. Aenean lorem purus, vehicula vel laoreet et, consequat vel nibh. Vivamus id velit auctor, molestie nisl varius, dignissim neque.',
  searchTag: "Caminata",
  name: 'Caminata'
}];
const homeButtons = [{
  title: 'Estudios Bíblicos',
  image: '../../../assets/images/botones/aula.svg'
}, {
  title: 'Escuela Dominical',
  image: 'gente'
}, {
  title: 'Documentos',
  image: 'pdfs'
}, {
  title: 'Alabanzas',
  image: 'musico'
}, {
  title: 'Apps Hermanas',
  image: 'biblia'
}, {
  title: 'Visitanos',
  image: 'lupa'
}];
const coloresEstadosAceptacion = [{
  colorEstado: 'success',
  estadoAceptacion: 'Aceptada por el agente'
}, {
  colorEstado: 'danger',
  estadoAceptacion: 'Rechazada por agente'
}, {
  colorEstado: 'warning',
  estadoAceptacion: 'Anulada por cabina'
}, {
  colorEstado: 'medium',
  estadoAceptacion: 'Cancelada por cliente'
}, {
  colorEstado: 'medium',
  estadoAceptacion: 'Pendiente de aceptación'
}];
const calendarioEventos = [{
  mes: 0,
  mesNombre: 'enero',
  urlFolder: 'Imagenes/Eventos/',
  eventos: [{
    imagen: 'seminario.jpg',
    subtitulo: '',
    contenido: 'Desde el decenio de 1990, el Comité Especial de Descolonización (C-24) ha venido organizando seminarios regionales, alternativamente en el Caribe y el Pacífico, para examinar los progresos alcanzados en la aplicación del Plan de Acción para el Decenio Internacional para la Eliminación del Colonialismo . En una serie de resoluciones sobre la aplicación de la Declaración sobre la concesión de la independencia a los países y pueblos coloniales, la Asamblea General pidió al C-24 que "realizara seminarios, según procediera, con el fin de recibir y difundir información sobre la labor del Comité Especial y de facilitar la participación de los pueblos de los territorios no autónomos en esos seminarios" (véase más recientemente su resolución 72/111 , párr. 8 f)). El objetivo de los seminarios regionales es permitir al C-24 recabar las opiniones de representantes de los territorios no autónomos , expertos, miembros de la sociedad civil, Estados Miembros y otras partes interesadas que puedan ayudar al C-24 a determinar enfoques de política y medios prácticos que puedan aplicarse en el proceso de descolonización de las Naciones Unidas. Se espera que los debates del seminario ayuden al Comité Especial a realizar un análisis y una evaluación realistas de la situación en los territorios no autónomos, caso por caso, así como de las formas en que el sistema de las Naciones Unidas y la comunidad internacional en general podrían mejorar los programas de asistencia a los territorios.',
    lugar: 'Auditorio central',
    encargado: 'Lucas Cardona',
    contacto: '',
    telefono: '',
    whatsapp: '',
    web: '',
    position: 0,
    evento: 'Inicio del Seminario',
    fecha: '20/1/2025',
    hora: '08:00:32 a.m.',
    horaFin: '11:00:00 am'
  }]
}, {
  mes: 1,
  mesNombre: 'febrero',
  urlFolder: 'Imagenes/Eventos/',
  eventos: [{
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '23/2/2025',
    hora: '08:00:32 a.m.',
    horaFin: '11:00:00 am'
  }]
}, {
  mes: 2,
  mesNombre: 'marzo',
  urlFolder: 'Imagenes/Eventos/',
  eventos: [{
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '02/3/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '09/3/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '16/3/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '23/3/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '30/3/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }]
}, {
  mes: 3,
  mesNombre: 'abril',
  urlFolder: 'Imagenes/Eventos/',
  eventos: [{
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '06/4/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '13/4/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '20/4/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '27/4/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }]
}, {
  mes: 4,
  mesNombre: 'mayo',
  urlFolder: 'Imagenes/Eventos/',
  eventos: [{
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '04/5/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '11/5/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '18/5/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }, {
    imagen: 'seminario.jpeg',
    subtitulo: '',
    contenido: 'Este próximo trimestre estaremos hablando de apocalipsis, eventos aclarados a través de la palabra y compartiremos profecías cumplidas en la actualidad y las que aún quedan por cumplirse. Te esperamos!',
    lugar: 'Tabernáculo Bíblico Jesús el Buen Pastor',
    encargado: 'Reverendo Lucas Cardona',
    contacto: 'Lucas Cardona',
    telefono: '32951073',
    whatsapp: '32951073',
    web: '',
    position: 0,
    evento: 'Seminario : Apocalípsis',
    fecha: '25/5/2025',
    hora: '09:00:00 a.m.',
    horaFin: '11:00:00 am'
  }]
}, {
  mes: 5,
  mesNombre: 'junio',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 6,
  mesNombre: 'julio',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 7,
  mesNombre: 'agosto',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 8,
  mesNombre: 'septiembre',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 9,
  mesNombre: 'octubre',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 10,
  mesNombre: 'noviembre',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}, {
  mes: 11,
  mesNombre: 'diciembre',
  urlFolder: 'Imagenes/Eventos/',
  eventos: []
}];
const meses = [{
  mes: 'enero'
}, {
  mes: 'febrero'
}, {
  mes: 'marzo'
}, {
  mes: 'abril'
}, {
  mes: 'mayo'
}, {
  mes: 'junio'
}, {
  mes: 'julio'
}, {
  mes: 'agosto'
}, {
  mes: 'septiembre'
}, {
  mes: 'octubre'
}, {
  mes: 'noviembre'
}, {
  mes: 'diciembre'
}];
const sundaySchool = [{
  icon: 'extension-puzzle',
  categoria: 'infantil',
  slogan: 'Dejad a los niños venir a mi.',
  descripcion: 'La escuela dominical infantil es un espacio de enseñanza religiosa para niños, donde se les enseña la Biblia y los principios del cristianismo. Se trata de una actividad que se lleva a cabo en las iglesias protestantes o evangélicas. La escuela dominical infantil tiene como objetivo:  Ayudar a los niños a aprender la Biblia y sus enseñanzas Aplicar los principios bíblicos a la vida diaria Conocer mejor a Cristo Vivir como siervos fieles en la comunidad de fe Desenvolverse en la cultura sin perder su identidad cristiana Aprender que la iglesia es un lugar seguro y divertido Aprender que Dios los ama La escuela dominical infantil suele agrupar a los niños por edades para facilitar el aprendizaje. ',
  clases: [{
    nivel: 'párvulos',
    materiales: [{
      imagenes: [{
        nombre: 'niños estudiando',
        url: '../../../assets/images/escueladominical/infantil/imagenes/niniosestudiando.avif'
      }],
      videos: [{
        nombre: '',
        url: ''
      }],
      documentos: [{
        nombre: 'edufichas',
        url: '../../../assets/images/escueladominical/infantil/documentos/infantil-edad-4-edufichas.pdf'
      }],
      temas: [{
        nombre: '',
        descripcion: ''
      }]
    }]
  }]
}, {
  icon: 'game-controller',
  categoria: 'juvenil',
  slogan: '',
  descripcion: '',
  clases: [{
    nivel: 'párvulos',
    materiales: [{
      imagenes: [{
        nombre: 'niños estudiando',
        url: '../../../assets/images/escueladominical/infantil/imagenes/niniosestudiando.avif'
      }],
      videos: [{
        nombre: '',
        url: ''
      }],
      documentos: [{
        nombre: 'edufichas',
        url: '../../../assets/images/escueladominical/infantil/documentos/infantil-edad-4-edufichas.pdf'
      }],
      temas: [{
        nombre: '',
        descripcion: ''
      }]
    }]
  }]
}, {
  icon: 'golf',
  categoria: 'adultos',
  slogan: '',
  descripcion: '',
  clases: [{
    nivel: 'párvulos',
    materiales: [{
      imagenes: [{
        nombre: 'niños estudiando',
        url: '../../../assets/images/escueladominical/infantil/imagenes/niniosestudiando.avif'
      }],
      videos: [{
        nombre: '',
        url: ''
      }],
      documentos: [{
        nombre: 'edufichas',
        url: '../../../assets/images/escueladominical/infantil/documentos/infantil-edad-4-edufichas.pdf'
      }],
      temas: [{
        nombre: '',
        descripcion: ''
      }]
    }]
  }]
}, {
  icon: 'school',
  categoria: 'nuevo creyente',
  slogan: '',
  descripcion: '',
  clases: [{
    nivel: 'párvulos',
    materiales: [{
      imagenes: [{
        nombre: 'niños estudiando',
        url: '../../../assets/images/escueladominical/infantil/imagenes/niniosestudiando.avif'
      }],
      videos: [{
        nombre: '',
        url: ''
      }],
      documentos: [{
        nombre: 'edufichas',
        url: '../../../assets/images/escueladominical/infantil/documentos/infantil-edad-4-edufichas.pdf'
      }],
      temas: [{
        nombre: '',
        descripcion: ''
      }]
    }]
  }]
}];
const notificationsList = [{
  id: '1',
  profileImageOfOther: '../../../assets/images/user_profile/user_1.jpg',
  nameOfOther: 'Robert Junior',
  isLiked: true,
  timeOfResponse: '7m ago',
  post: '../../../assets/images/dance/dance_1.jpg'
}, {
  id: '2',
  profileImageOfOther: '../../../assets/images/user_profile/user_2.jpg',
  nameOfOther: 'Don Hart',
  isLiked: true,
  timeOfResponse: '7m ago',
  post: '../../../assets/images/dance/dance_2.jpg'
}, {
  id: '3',
  profileImageOfOther: '../../../assets/images/user_profile/user_3.jpg',
  nameOfOther: 'Emili Williamson',
  isLiked: false,
  timeOfResponse: '8m ago',
  post: '../../../assets/images/dance/dance_3.jpg'
}, {
  id: '4',
  profileImageOfOther: '../../../assets/images/user_profile/user_4.jpg',
  nameOfOther: 'Ema Waston',
  isLiked: false,
  timeOfResponse: '9m ago',
  post: '../../../assets/images/dance/dance_4.jpg'
}, {
  id: '5',
  profileImageOfOther: '../../../assets/images/user_profile/user_5.jpg',
  nameOfOther: 'Rosy Gold',
  isLiked: true,
  timeOfResponse: '11m ago',
  post: '../../../assets/images/dance/dance_1.jpg'
}, {
  id: '6',
  profileImageOfOther: '../../../assets/images/user_profile/user_1.jpg',
  nameOfOther: 'Robert Junior',
  isLiked: false,
  timeOfResponse: '13m ago',
  post: '../../../assets/images/dance/dance_6.jpg'
}, {
  id: '7',
  profileImageOfOther: '../../../assets/images/user_profile/user_3.jpg',
  nameOfOther: 'Emili Williamson',
  isLiked: true,
  timeOfResponse: '15m ago',
  post: '../../../assets/images/dance/dance_3.jpg'
}, {
  id: '8',
  profileImageOfOther: '../../../assets/images/user_profile/user_4.jpg',
  nameOfOther: 'Ema Waston',
  isLiked: true,
  timeOfResponse: '16m ago',
  post: '../../../assets/images/dance/dance_4.jpg'
}];
const messagesList = [{
  id: '1',
  profileImageOfSender: '../../../assets/images/user_profile/user_3.jpg',
  nameOfSender: 'Ellison Perry',
  lastMessage: 'Hey, How are you?',
  receiveTime: '1d ago',
  isReadable: true
}, {
  id: '2',
  profileImageOfSender: '../../../assets/images/user_profile/user_1.jpg',
  nameOfSender: 'Mark Perry',
  lastMessage: 'You\'re so funny',
  receiveTime: '2d ago'
}, {
  id: '3',
  profileImageOfSender: '../../../assets/images/user_profile/user_2.jpg',
  nameOfSender: 'Robert Junior',
  lastMessage: 'Hello beautiful',
  receiveTime: '2d ago'
}, {
  id: '4',
  profileImageOfSender: '../../../assets/images/user_profile/user_4.jpg',
  nameOfSender: 'Emma Waston',
  lastMessage: 'I miss you very badly',
  receiveTime: '3d ago',
  isReadable: true
}, {
  id: '5',
  profileImageOfSender: '../../../assets/images/user_profile/user_5.jpg',
  nameOfSender: 'Emily Hemsworth',
  lastMessage: 'Can we meet today?',
  receiveTime: '6d ago'
}, {
  id: '6',
  profileImageOfSender: '../../../assets/images/user_profile/user_6.jpg',
  nameOfSender: 'Rocky Waton',
  lastMessage: 'Hi sweatheart',
  receiveTime: '1w ago'
}, {
  id: '7',
  profileImageOfSender: '../../../assets/images/user_profile/user_7.jpg',
  nameOfSender: 'Cris Maxwell',
  lastMessage: 'How are you today?',
  receiveTime: '1w ago'
}, {
  id: '8',
  profileImageOfSender: '../../../assets/images/user_profile/user_8.jpg',
  nameOfSender: 'David Lynn',
  lastMessage: 'Oh my god!',
  receiveTime: '2w ago',
  isReadable: true
}];
const documentosMEG = [{
  icon: 'library',
  categoria: 'Compendios',
  slogan: 'El que lee, entienda.',
  descripcion: '"El que lee, entienda" es una frase que aparece en la Biblia en los evangelios de Marcos y Mateo. Se trata de una nota que indica que las advertencias de Jesús son para quienes lean sus palabras en el futuro.  En el evangelio de Mateo, la frase aparece en el versículo 24:15, donde Jesús habla de la abominación desoladora que el profeta Daniel predijo. Jesús les dice a sus discípulos que cuando vean esta abominación, deben huir.  En el evangelio de Marcos, la frase aparece en el versículo 13:14, donde se dice que cuando se vea la abominación desoladora, los que estén en Judea deben huir a las montañas.  La frase "el que lee, entienda" no fue dicha por Jesús, sino que fue escrita por Marcos en su evangelio.  '
}];
const archivosTipo = [{
  tipo: 'Imágenes',
  sizeArray: 'sizes',
  actionUrl: 'subir-imagenes'
}, {
  tipo: 'Videos',
  sizeArray: 'sizesVids',
  actionUrl: 'subir-videos'
}, {
  tipo: 'Pdfs',
  sizeArray: 'sizesPdfs',
  actionUrl: 'subir-pdfs'
}];
const alertInputs = [{
  label: 'Para principiantes',
  type: 'radio',
  value: 'red'
}, {
  label: 'Niveles intermedios',
  type: 'radio',
  value: 'blue'
}, {
  label: 'Con todo',
  type: 'radio',
  value: 'green'
}];
const imagePrefixSvg = 'data:image/svg+xml;base64,';
const imagePrefixPdf = 'data:image/pdf+xml;base64,';
const imagePrefix = 'data:image/jpeg;base64,';
const pdfIconUrl = '../../../assets/images/pdf.svg';
const flagIconPrefix = '../../../assets/banderas/';

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

/***/ 6461:
/*!************************************************************************!*\
  !*** ./src/app/Modales/modal-imagen/modal-imagen.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#fotoFooter {\n  position: fixed;\n  bottom: 0;\n  height: 20%;\n  border: none;\n  box-shadow: none;\n}\n\n.textArea {\n  margin-left: 10px;\n  width: 94%;\n  border: 1px solid rgb(16, 6, 159);\n  border-radius: 30px;\n  padding: 6px !important;\n}\n\nion-chip:not(.button-chip) {\n  width: 100%;\n  height: 130px;\n  margin-left: 0px;\n  text-align: left;\n}\nion-chip:not(.button-chip) ion-thumbnail {\n  margin-left: 0;\n  margin-top: -15%;\n  border-radius: 15px;\n}\nion-chip:not(.button-chip) ion-label {\n  position: absolute;\n  left: 40%;\n}\n\n.button-chip {\n  width: 98%;\n  height: 50px;\n  float: right;\n  text-align: center;\n  padding-left: 40%;\n}", "",{"version":3,"sources":["webpack://./src/app/Modales/modal-imagen/modal-imagen.page.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,iBAAA;EACA,UAAA;EACA,iCAAA;EACA,mBAAA;EACA,uBAAA;AACF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AAAF;AACE;EACE,cAAA;EACA,gBAAA;EACA,mBAAA;AACJ;AACE;EACE,kBAAA;EACA,SAAA;AACJ;;AAGA;EACE,UAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AAAF","sourcesContent":["#fotoFooter{\n  position: fixed;\n  bottom: 0;\n  height: 20%;\n  border: none;\n  box-shadow: none;\n}\n\n.textArea {\n  margin-left: 10px;\n  width: 94%;\n  border: 1px solid rgb(16, 6, 159);\n  border-radius: 30px;\n  padding: 6px !important;\n}\n\n\nion-chip:not(.button-chip){\n  width: 100%;\n  height: 130px;\n  margin-left: 0px;\n  text-align: left;\n  ion-thumbnail{\n    margin-left: 0;\n    margin-top: -15%;\n    border-radius: 15px;\n  }\n  ion-label{\n    position: absolute;\n    left: 40%;\n  }\n}\n\n.button-chip{\n  width: 98%;\n  height: 50px;\n  float: right;\n  text-align: center;\n  padding-left: 40%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74527:
/*!************************************************************************!*\
  !*** ./src/app/Modales/modal-imagen/modal-imagen.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-grid class=\"ion-no-padding\" style=\"padding-top: 2px;height: 100%;overflow: hidden;width: 100%;\">\n  <ion-row id=\"anyStat\" style=\"height: 100%;\">\n    <ion-col size=\"12\">\n      <br><br><br><br><br>\n      <ion-img [src]=\"'data:image/jpeg;base64,'+foto\" style=\"width: 100%; max-height: 60%;\" [style.height]=imageHeight></ion-img>\n      <ion-buttons style=\"position:absolute; top:3%; width: 100%;\">\n        <ion-grid style=\"width: 100%;\">\n          <ion-row style=\"\">\n            <ion-col size=\"6\">\n              <ion-button color=\"primary\" (click)=\"dismissModal()\">\n                <ion-icon style=\"font-size: 2rem;\" name=\"chevron-back\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\" style=\"text-align: right;\">\n              <ion-button color=\"primary\" (click)=\"saveNewDescription()\">\n                <ion-icon style=\"font-size: 2rem; font-weight: bolder;\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        \n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-footer #fotoFooter id=\"fotoFooter\">\n  \n  <br>\n  \n\n  <ion-textarea\n  *ngIf=\"delete==false\"\n  mode=\"ios\"\n  [placeholder]=descripcion\n  class=\"textArea\"\n  rows=\"4\"\n  [(ngModel)]=\"descripcionX\"\n  (ionChange)=\"setNewDescription()\"\n  >\n  </ion-textarea>\n  <!--ion-chip *ngIf=\"delete==false\" class=\"button-chip\" color=\"primary\" (click)=\"saveNewDescription()\">\n    <ion-label>Guardar</ion-label>\n  </!--ion-chip -->\n  \n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_Modales_modal-imagen_modal-imagen_page_ts.js.map