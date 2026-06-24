(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cargar-archivos_cargar-archivos_module_ts"],{

/***/ 25703:
/*!*******************************************************************!*\
  !*** ./src/app/cargar-archivos/cargar-archivos-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargarArchivosPageRoutingModule": () => (/* binding */ CargarArchivosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cargar_archivos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargar-archivos.page */ 94862);




const routes = [{
  path: '',
  component: _cargar_archivos_page__WEBPACK_IMPORTED_MODULE_0__.CargarArchivosPage
}];
let CargarArchivosPageRoutingModule = class CargarArchivosPageRoutingModule {};
CargarArchivosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CargarArchivosPageRoutingModule);


/***/ }),

/***/ 28244:
/*!***********************************************************!*\
  !*** ./src/app/cargar-archivos/cargar-archivos.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargarArchivosPageModule": () => (/* binding */ CargarArchivosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cargar_archivos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargar-archivos-routing.module */ 25703);
/* harmony import */ var _cargar_archivos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cargar-archivos.page */ 94862);







let CargarArchivosPageModule = class CargarArchivosPageModule {};
CargarArchivosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cargar_archivos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargarArchivosPageRoutingModule],
  declarations: [_cargar_archivos_page__WEBPACK_IMPORTED_MODULE_1__.CargarArchivosPage]
})], CargarArchivosPageModule);


/***/ }),

/***/ 94862:
/*!*********************************************************!*\
  !*** ./src/app/cargar-archivos/cargar-archivos.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargarArchivosPage": () => (/* binding */ CargarArchivosPage)
/* harmony export */ });
/* harmony import */ var _Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cargar_archivos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cargar-archivos.page.html?ngResource */ 30848);
/* harmony import */ var _cargar_archivos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cargar-archivos.page.scss?ngResource */ 4808);
/* harmony import */ var _cargar_archivos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cargar_archivos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/environments/arrays */ 41924);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _Modales_modal_imagen_modal_imagen_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modales/modal-imagen/modal-imagen.page */ 45259);













//import { ModalImagenPage } from 'src/app/Modales/modal-imagen/modal-imagen.page';


let CargarArchivosPage = class CargarArchivosPage {
  constructor(navCtrl, route, router, toaster, myModal, api, loading, alert) {
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.toaster = toaster;
    this.myModal = myModal;
    this.api = api;
    this.loading = loading;
    this.alert = alert;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.customActionSheetOptions = {
      cssClass: 'custom-action-sheet'
    };
    this.customModalOptions = {
      cssClass: 'custom-select-modal'
    };
    this.fotos = [];
    this.tipoFotos = [];
    this.videos = [];
    this.pdfs = [];
    this.loadValue = 0;
    this.isLoadingItem = false;
    this.isLoading = false;
    this.losArchivos = [];
    this.archivosTipo = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.archivosTipo;
    this.img = {};
    this.vid = {};
    this.pdf = {};
    this.sizes = [];
    this.sizesVids = [];
    this.sizesPdfs = [];
    this.canDismiss = false;
    this.esSolicitud = false;
    this.fotoData = [];
    this.Expediente = [];
    this.tipo = 0;
    this.videosData = [];
    this.esSolicitud = localStorage.getItem('esSolicitud') == 'true';
    this.idAtencion = localStorage.getItem('idAtencion');
  }
  ngOnInit() {
    setTimeout(() => {
      const fileInputs = document.getElementById("fileInput").files;
      if (fileInputs) {
        for (let index = 0; index < fileInputs.length; index++) {
          const element = fileInputs[index];
          jquery__WEBPACK_IMPORTED_MODULE_7__('progress').eq(index).remove();
        }
      }
    }, 900);
    this.getTipoFotos();
  }
  ngAfterViewInit() {
    const el = document.getElementById('sortable-list');
  }
  goBack() {
    localStorage.setItem('homeOrigen', 'false');
    this.navCtrl.back();
  }
  handleFileModal(tipo, file, index) {
    void 0;
    void 0;
    let daFile = file.Foto;
    //self.alert('Tipo : '+tipo+', index : '+index)
    if (tipo == 2) {
      //this.openModalSetVideo(file, index);
    } else {
      this.openModalImagen(daFile.split(',')[1], 2, index, file.Descripcion);
    }
  }
  openModalImagen(foto, tipo, index, descripcion) {
    var _this = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      void 0;
      void 0;
      const modal = yield _this.myModal.create({
        component: _Modales_modal_imagen_modal_imagen_page__WEBPACK_IMPORTED_MODULE_8__.ModalImagenPage,
        componentProps: {
          foto: foto,
          tipo: tipo,
          index: index,
          descripcion: descripcion,
          delete: false
        },
        breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
        initialBreakpoint: 1,
        cssClass: 'modal-imagen',
        canDismiss: _this.canDismiss
      });
      setTimeout(() => {
        jquery__WEBPACK_IMPORTED_MODULE_7__('ion-modal').fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_7__('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
      }, 900);
      modal.onDidDismiss().then(() => {
        void 0;
        let newDescription = localStorage.getItem('newDescription');
        let descriptionIndex = localStorage.getItem('descriptionIndex');
        let daIndex = parseInt(descriptionIndex);
        _this.fotos[daIndex].Descripcion = newDescription;
        jquery__WEBPACK_IMPORTED_MODULE_7__('.chip-descripcion').eq(daIndex).text(newDescription);
        localStorage.setItem('fotos', JSON.stringify(_this.fotos));
      });
      setTimeout(() => {}, 6000);
      yield modal.present();
    })();
  }
  /*
  async openModalSetVideo(video: any, index:number) {
    
    void 0;
    void 0;
       const modal = await this.myModal.create({
      component: SubirVideosPage,
      componentProps: { video: video, index: index },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-video'
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
    }, 900);
    
       return await modal.present();
       
  }
  
     
   
  
  async openModalSetFile(type:any, file: any, index:number) {
    
    void 0;
    void 0;
       const modal = await this.myModal.create({
      component: SubirVideosPage,
      componentProps: {type:type, file: file, index: index },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-video'
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
    }, 900);
    
       return await modal.present();
       
  }
  */
  uploadVideos() {
    this.videosData = [];
    console.log('El video ');
    console.dir(this.videoFile);
    if (this.videoFile && this.idAtencion) {
      let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
      let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
      this.api.GuardarVideo(this.videoFile, this.idAtencion).subscribe(e => {
        let estado = e.estado;
        if (estado == true) {
          this.toaster.presentToastAlert("Video cargado exitosamente!", 'middle', 'primary', 3000);
          this.isLoading = false;
        } else {
          this.toaster.presentToastNoButtonsRed("No es posible enviar el video, intenta nuevamente!", "top", "video-upload");
        }
        console.log(e.estado);
        console.log(e.mensaje);
        return e;
      }, e => {
        console.log("Error", e);
        return e;
      });
    } else {
      console.warn('Seleccione un archivo de video y proporcione un ID de atención válido.');
    }
  }
  uploadVideosNo() {
    void 0;
    void 0;
  }
  getTipoFotos() {
    var _this2 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this2.loading.create();
      yield load.present();
      _this2.api.ListTipoFoto().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.tipoFotos = res;
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref3 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this2.alert.create({
            header: 'HELP',
            message: res.error.Message,
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
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  loadingFiles() {
    this.isLoadingItem = true;
    let sizesArray = [];
    if (this.archivoTipo == 0) {
      sizesArray = this.sizes;
    }
    if (this.archivoTipo == 1) {
      sizesArray = this.sizesVids;
    }
    if (this.archivoTipo == 2) {
      sizesArray = this.sizesPdfs;
    }
    setTimeout(() => {
      let lasProgres = document.getElementsByTagName('progress');
      if (lasProgres.length > 0) {
        for (let index = 0; index < lasProgres.length; index++) {
          this.loadInterval = setInterval(() => {
            this.loadValue += 2533;
            jquery__WEBPACK_IMPORTED_MODULE_7__('progress').eq(index).val(this.loadValue);
            void 0;
            jquery__WEBPACK_IMPORTED_MODULE_7__('progress').eq(index).attr('max', sizesArray[index]);
            void 0;
            void 0;
            if (this.gratestSize && this.loadValue > this.gratestSize) {
              clearInterval(this.loadInterval);
              this.isLoadingItem = false;
              //this.toaster.presentToaster('Archivos subidos con éxito!', 'top', 'primary', 3000, false);
            }
          }, 300);
          if (index == lasProgres.length - 1) {}
        }
      }
    }, 3000);
    setTimeout(() => {}, 10000);
  }
  findLargestSize(array) {
    void 0;
    void 0;
    var largest = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
      if (i < array.length - 1) {
        return largest;
      }
    }
  }
  openModalSetVideoNo(video, index) {
    void 0;
    void 0;
    jquery__WEBPACK_IMPORTED_MODULE_7__('#open-modal').click();
  }
  goTo(index, array) {
    void 0;
    void 0;
    if (index == 1) {
      localStorage.setItem('dArray', JSON.stringify(array[0].Video));
    }
    if (index != 1) {
      localStorage.setItem('dArray', JSON.stringify(array));
    }
    let screen = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.archivosTipo[index].actionUrl;
    this.router.navigateByUrl(screen);
  }
  abrirCamara() {
    var _this3 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isVideo = false;
      _this3.fotos = [];
      _this3.sizes = [];
      _this3.cantidad = 0;
      _this3.archivoTipo = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.archivosTipo[0].tipo;
      _this3.archivoTipoId = 0;
      try {
        const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
          quality: 90,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Camera,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Base64
        });
        if (!img.base64String) {
          return;
        }
        const size = img.base64String.length * (3 / 4);
        const sizeInMB = (size / (1024 * 1024)).toFixed(2);
        _this3.fotos.push({
          IdTipo: 1,
          Tipo: _this3.archivoTipo,
          Foto: src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.imagePrefix + img.base64String,
          Fecha: new Date().toISOString(),
          Nombre: 'Ficohsa_' + new Date().getTime() + '.jpeg',
          Descripcion: 'Imagen para evidencia. Aquí puedes agregar una descripción.',
          Size: size,
          SizeMb: sizeInMB
        });
        _this3.sizes.push(size);
        _this3.cantidad = _this3.fotos.length;
        jquery__WEBPACK_IMPORTED_MODULE_7__('#loadingHeader').fadeIn();
        jquery__WEBPACK_IMPORTED_MODULE_7__('#title-list').fadeIn();
        localStorage.setItem('fotos', JSON.stringify(_this3.fotos));
      } catch (error) {
        _this3.toaster.presentToastNoButtons('No se pudo abrir la cámara.', 'top', 'fotos');
      }
    })();
  }
  handleSave(tipo, idAtencion) {
    this.isLoading = true;
    if (tipo == 0) {
      this.savePhotos(idAtencion);
    } else {
      this.uploadVideos();
    }
  }
  savePhotos(idAtencion) {
    var _this4 = this;
    this.isLoading = true;
    const atencionId = idAtencion || this.idAtencion || localStorage.getItem('idAtencion');
    if (!atencionId) {
      this.toaster.presentToastNoButtons('No se encontró el número de atención.', 'top', 'fotos');
      return;
    }
    if (!this.fotos.length) {
      this.toaster.presentToastNoButtons('Necesitas cargar una imagen o más para guardarlas.', 'top', 'fotos');
      return;
    }
    console.log('Mis fotos son ');
    console.dir(this.fotos);
    const requests = this.fotos.map(element => {
      const fotoData = [{
        Foto: element.Foto?.split(',')[1],
        IdAtencion: atencionId,
        RefTipoFotoId: element.IdTipo,
        NombreFirmante: element.NombreFirmante,
        Descripcion: element.Descripcion,
        FechaFirma: element.Fecha
      }];
      return this.api.GuardarFotos(fotoData);
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(requests).subscribe( /*#__PURE__*/(0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = false;
      _this4.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
    }), /*#__PURE__*/function () {
      var _ref5 = (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        const codigo = error?.status || 'No se pudieron subir las fotos.';
        _this4.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
      });
      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());
    /**/
  }

  confirmDeleteFoto(index, event) {
    var _this5 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event?.preventDefault();
      event?.stopPropagation();
      if (!_this5.fotos[index]) {
        return;
      }
      const alert = yield _this5.alert.create({
        cssClass: 'delete-menu-alert',
        header: 'Conservar/Eliminar imagen',
        message: 'Esta imagen se quitará de la lista seleccionada. ¿Deseas eliminarla?',
        buttons: [{
          text: 'Limpiar Caché',
          cssClass: 'logout-menu-button logout-menu-cache'
        }, {
          text: 'Conservar',
          role: 'cancel',
          cssClass: 'logout-menu-button logout-menu-cancel'
        }, {
          text: 'Eliminar',
          role: 'confirm',
          cssClass: 'logout-menu-button logout-menu-danger',
          handler: () => {
            _this5.deleteFoto(index);
          }
        }]
      });
      yield alert.present();
    })();
  }
  deleteFoto(index) {
    if (!this.fotos[index]) {
      return;
    }
    this.fotos.splice(index, 1);
    this.sizes.splice(index, 1);
    this.refreshSelectedFilesState();
  }
  refreshSelectedFilesState() {
    this.cantidad = this.fotos.length + this.videos.length + this.pdfs.length;
    this.gratestSize = this.sizes.length ? Math.max(...this.sizes.map(size => Number(size))) : undefined;
    if (this.fotos.length == 0) {
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.value = '';
      }
    }
    /*
    if (this.cantidad == 0) {
      $('#title-list').fadeOut();
      $('#loadingHeader').fadeOut();
      $('#botonGuardarFotos').prop('disabled', true);
    }
    */
  }

  openFilesInput(type) {
    var _this6 = this;
    return (0,_Users_desarrolloporsalud_HELP_Ecosistema_HELP_Ajustadores_AjustadoresHN_Dev_210_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.cantidad = 0;
      _this6.tipo = type;
      let lasProgres = document.getElementsByTagName('progress');
      const fileInputs = document.getElementById("fileInput").files;
      if (fileInputs) {
        for (let index = 0; index < fileInputs.length; index++) {
          const element = fileInputs[index];
          jquery__WEBPACK_IMPORTED_MODULE_7__('progress').eq(index).remove();
        }
      }
      _this6.archivoTipo = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.archivosTipo[type].tipo;
      _this6.archivoTipoId = type;
      if (type == 0) {
        _this6.isVideo = false;
        _this6.fotos = [];
        _this6.sizes = [];
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInput").click();
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInput").on("change", evt => {
          evt.preventDefault();
          evt.stopPropagation();
          evt.stopImmediatePropagation();
          const fileInputs = document.getElementById("fileInput").files;
          _this6.cantidad = fileInputs?.length;
          _this6.losArchivos = fileInputs;
          void 0;
          void 0;
          setTimeout(() => {
            if (_this6.cantidad && _this6.cantidad > 0) {
              for (let index = 0; index < _this6.cantidad; index++) {
                if (fileInputs) {
                  const file = fileInputs[index];
                  let sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
                  var reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = e => {
                    if (e.target) {
                      const b64 = e.target.result;
                      _this6.daImagen = b64;
                      const nuevaImagen = {
                        IdTipo: type,
                        Tipo: _this6.archivoTipo,
                        Foto: _this6.daImagen,
                        Fecha: new Date().toISOString(),
                        Nombre: file.name,
                        Descripcion: 'Imagen para evidencia. Aquí puedes agregar una descripción.',
                        Size: file.size,
                        SizeMb: sizeInMB
                      };
                      _this6.fotos.push(nuevaImagen);
                      _this6.sizes.push(file.size);
                    }
                    if (index == fileInputs.length - 1) {
                      jquery__WEBPACK_IMPORTED_MODULE_7__('#loadingHeader').fadeIn();
                      jquery__WEBPACK_IMPORTED_MODULE_7__('#title-list').fadeIn();
                      localStorage.setItem('fotos', JSON.stringify(_this6.fotos));
                      _this6.gratestSize = _this6.findLargestSize(_this6.sizes);
                    }
                  };
                }
              }
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeOut('slow');
              jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeOut('slow');
            }
          }, _this6.randomIntFromInterval(1, 5));
          setTimeout(() => {}, 900);
        });
      }
      if (type == 1) {
        _this6.isVideo = true;
        _this6.fotos = [];
        _this6.videos = [];
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputV").click();
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputV").on("change", evt => {
          evt.preventDefault();
          evt.stopPropagation();
          evt.stopImmediatePropagation();
          const fileInputVs = document.getElementById("fileInputV").files;
          _this6.cantidad = fileInputVs?.length;
          _this6.losArchivos = fileInputVs;
          void 0;
          void 0;
          setTimeout(() => {
            if (fileInputVs && fileInputVs.length > 0) {
              for (let index = 0; index < fileInputVs.length; index++) {
                const file = fileInputVs[index];
                _this6.videoFile = file;
                let sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = e => {
                  if (e.target?.result) {
                    const elVideo = e.target.result;
                    _this6.vid.IdTipo = type;
                    _this6.vid.Tipo = _this6.archivoTipo;
                    _this6.vid.Video = elVideo.toString();
                    _this6.vid.Fecha = new Date().toISOString();
                    _this6.vid.Descripcion = file.name;
                    _this6.vid.Size = file.size;
                    _this6.vid.SizeMb = sizeInMB;
                    _this6.vid.SerieId = 0;
                    _this6.videos.push(_this6.vid);
                    _this6.sizesVids.push(file.size);
                    _this6.vid = {};
                  }
                };
                if (index == fileInputVs.length - 1) {
                  jquery__WEBPACK_IMPORTED_MODULE_7__('#loadingHeader').fadeIn();
                  jquery__WEBPACK_IMPORTED_MODULE_7__('#title-list').fadeIn();
                  void 0;
                  void 0;
                  _this6.gratestSize = _this6.findLargestSize(_this6.sizesVids);
                }
              }
            } else {}
          }, _this6.randomIntFromInterval(1, 5));
          setTimeout(() => {}, 900);
        });
      }
      if (type == 2) {
        _this6.isVideo = false;
        _this6.pdfs = [];
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputP").click();
        jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputP").on("change", evt => {
          evt.preventDefault();
          evt.stopPropagation();
          evt.stopImmediatePropagation();
          const fileInputsP = document.getElementById("fileInputP").files;
          _this6.cantidad = fileInputsP?.length;
          _this6.losArchivos = fileInputsP;
          void 0;
          void 0;
          setTimeout(() => {
            if (_this6.cantidad && _this6.cantidad > 0) {
              for (let index = 0; index < _this6.cantidad; index++) {
                if (fileInputsP) {
                  const file = fileInputsP[index];
                  let sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
                  var reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = e => {
                    if (e.target) {
                      const b64 = e.target.result;
                      _this6.daImagen = b64?.toString().split(',')[1];
                      _this6.pdf.IdTipo = type;
                      _this6.pdf.Tipo = _this6.archivoTipo;
                      _this6.pdf.Pdf = src_app_environments_arrays__WEBPACK_IMPORTED_MODULE_5__.pdfIconUrl;
                      _this6.pdf.Fecha = new Date().toISOString();
                      _this6.pdf.Descripcion = file.name;
                      _this6.pdf.Size = file.size;
                      _this6.pdf.SizeMb = sizeInMB;
                      _this6.pdfs.push(_this6.pdf);
                      _this6.sizesPdfs.push(file.size);
                      _this6.pdf = {};
                    }
                    if (index == fileInputsP.length - 1) {
                      jquery__WEBPACK_IMPORTED_MODULE_7__('#loadingHeader').fadeIn();
                      jquery__WEBPACK_IMPORTED_MODULE_7__('#title-list').fadeIn();
                      _this6.gratestSize = _this6.findLargestSize(_this6.sizesPdfs);
                    }
                  };
                }
              }
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeOut('slow');
              jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeOut('slow');
            }
          }, _this6.randomIntFromInterval(1, 5));
          setTimeout(() => {
            _this6.router.navigateByUrl("comments");
          }, 900);
        });
      }
    })();
  }
  seleccionarTipoDeFoto() {
    alert(this.fotoIdTipo);
  }
  guardarArchivos() {
    setTimeout(() => {
      this.goBack();
    }, 900);
    if (this.fotos.length > 0) {
      for (let index = 0; index < this.fotos.length; index++) {}
    } else {
      this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }, {
      type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
    }];
  }
};
CargarArchivosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-cargar-archivos',
  template: _cargar_archivos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_cargar_archivos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CargarArchivosPage);


/***/ }),

/***/ 4808:
/*!**********************************************************************!*\
  !*** ./src/app/cargar-archivos/cargar-archivos.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-chip:not(.chip-descripcion, .button-chip, .chip-imagenes, .chip-imagenes-camara, .chip-imagenes-video, .chip-tipo-foto) {\n  width: 94%;\n  margin-left: 1%;\n  margin-top: 5%;\n  height: 60px;\n  border-radius: 30px;\n}\n\n.chip-tipo-foto {\n  width: 99%;\n  height: 50px;\n}\n\n.foto-list {\n  border: 1px solid lightgray;\n  border-radius: 20px;\n  box-shadow: 2px 2px 6px lightgray;\n  margin-bottom: 25px;\n  padding-left: 10px;\n}\n\n.delete-image-column {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.select-tipo-foto {\n  width: 90%;\n}\n\n.chip-imagenes {\n  width: 29%;\n  height: 45px;\n  border-radius: 30px;\n}\n\n.chip-imagenes-camara {\n  width: 29%;\n  height: 45px;\n  border-radius: 30px;\n  border: 1px solid var(--blueGrayColor);\n  color: var(--blueGrayColor);\n}\n\n.chip-imagenes-video {\n  width: 29%;\n  height: 45px;\n  border-radius: 30px;\n  border: 1px solid var(--blueColor);\n  color: var(--blueColor);\n}\n\n.icono-camara {\n  color: var(--blueGrayColor);\n}\n\n.icono-video {\n  color: var(--blueColor);\n}\n\n.chip-descripcion {\n  width: 100%;\n  padding-left: 15px;\n  height: auto;\n}\n\n.chip-icon {\n  position: absolute;\n  right: 15px;\n}\n\n.chip-label {\n  margin-top: 3px;\n  font-size: 1rem;\n  text-transform: capitalize;\n}\n\nion-card {\n  margin: 0;\n  height: 84%;\n}\nion-card ion-card-content {\n  height: 85%;\n  overflow-y: scroll;\n}\n\nstrong {\n  color: #15305f;\n}\n\n.modal-video {\n  transition: height 0.25s ease-in;\n  --height:100%;\n}\n\nion-modal {\n  display: none;\n  --height:100%;\n}\n\n#sortable-list, #title-list {\n  padding-left: 0;\n  margin-left: 0;\n}\n\n.sortable-item {\n  border-bottom: 1px solid lightgray;\n  padding: 20px;\n  padding-left: 0;\n  margin-left: 0;\n  width: 100%;\n}\n\n.button-chip {\n  width: 98%;\n  height: 50px;\n  float: right;\n  text-align: center;\n  padding-left: 40%;\n  color: white;\n  background: var(--blueGrayColor);\n}\n\n.descripcion-entrada {\n  --placeholder-color: #ddd;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#loaderFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 500px;\n  --max-width: 500px;\n  --width: 500px;\n}\n::ng-deep .delete-menu-alert {\n  --backdrop-opacity: 0.42;\n}\n::ng-deep .delete-menu-alert .alert-wrapper {\n  --width: 430px;\n  --min-width: 430px;\n  --max-width: 430px;\n  border-radius: 18px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n  overflow: hidden;\n}\n::ng-deep .delete-menu-alert .alert-head {\n  background: #0058cb;\n  padding: 18px 22px 16px;\n}\n::ng-deep .delete-menu-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n::ng-deep .delete-menu-alert .alert-sub-title {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  margin-top: 4px;\n  text-transform: uppercase;\n}\n::ng-deep .delete-menu-alert .alert-message {\n  color: #15305f;\n  font-size: 0.96rem;\n  font-weight: 700;\n  line-height: 1.35;\n  padding: 18px 22px 4px;\n}\n::ng-deep .delete-menu-alert .alert-button-group {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  padding: 14px 22px 22px;\n}\n::ng-deep .delete-menu-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 800;\n  height: 46px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 6px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .delete-menu-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .delete-menu-alert .logout-menu-danger {\n  border-color: #ef5a22;\n  color: #ef5a22;\n}\n::ng-deep .delete-menu-alert .logout-menu-cache {\n  border-color: white;\n  color: white;\n}\n::ng-deep .delete-menu-alert .logout-menu-cancel {\n  border-color: #b9c8d8;\n  color: #15305f;\n}\n::ng-deep .cache-switch-alert {\n  --backdrop-opacity: 0.46;\n}\n::ng-deep .cache-switch-alert .alert-wrapper {\n  --width: 500px;\n  --min-width: 500px;\n  --max-width: 500px;\n  border-radius: 18px;\n  box-shadow: 0 22px 55px rgba(21, 48, 95, 0.3);\n  overflow: hidden;\n}\n::ng-deep .cache-switch-alert .alert-head {\n  background: #15305f;\n  padding: 18px 22px 16px;\n}\n::ng-deep .cache-switch-alert .alert-title {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 800;\n  letter-spacing: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n::ng-deep .cache-switch-alert .alert-sub-title {\n  color: rgba(255, 255, 255, 0.82);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  margin-top: 4px;\n  text-transform: uppercase;\n}\n::ng-deep .cache-switch-alert .alert-message {\n  color: #15305f;\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1.45;\n  padding: 18px 22px 6px;\n}\n::ng-deep .cache-switch-alert .alert-button-group {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: 14px 22px 22px;\n}\n::ng-deep .cache-switch-alert .alert-button {\n  background: #ffffff;\n  border: 1.5px solid #d8e4f0;\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 800;\n  height: 46px;\n  justify-content: center;\n  letter-spacing: 0;\n  margin: 0;\n  min-width: 0;\n  padding-inline: 6px;\n  text-transform: none;\n  width: 100%;\n}\n::ng-deep .cache-switch-alert .alert-button-inner {\n  justify-content: center;\n}\n::ng-deep .cache-switch-alert .cache-switch-cancel {\n  border-color: #b9c8d8;\n  color: #15305f;\n}\n::ng-deep .cache-switch-alert .cache-switch-confirm {\n  border-color: #ef5a22;\n  color: #ef5a22;\n}\n\n@media (max-width: 699px) {\n  ::ng-deep .delete-menu-alert,\n  ::ng-deep .cache-switch-alert {\n    align-items: center;\n    padding-bottom: 0;\n    padding-top: 0;\n  }\n  ::ng-deep .delete-menu-alert .alert-wrapper,\n  ::ng-deep .cache-switch-alert .alert-wrapper {\n    --width: calc(100vw - 32px);\n    --min-width: 0;\n    --max-width: 360px;\n    border-radius: 14px;\n  }\n  ::ng-deep .delete-menu-alert .alert-head,\n  ::ng-deep .cache-switch-alert .alert-head {\n    padding: 15px 18px 13px;\n  }\n  ::ng-deep .delete-menu-alert .alert-title,\n  ::ng-deep .cache-switch-alert .alert-title {\n    font-size: 1rem;\n  }\n  ::ng-deep .delete-menu-alert .alert-sub-title,\n  ::ng-deep .cache-switch-alert .alert-sub-title {\n    font-size: 0.72rem;\n  }\n  ::ng-deep .delete-menu-alert .alert-message,\n  ::ng-deep .cache-switch-alert .alert-message {\n    font-size: 0.88rem;\n    padding: 15px 18px 2px;\n  }\n  ::ng-deep .delete-menu-alert .alert-button-group,\n  ::ng-deep .cache-switch-alert .alert-button-group {\n    gap: 6px;\n    padding: 12px 14px 16px;\n  }\n  ::ng-deep .delete-menu-alert .alert-button,\n  ::ng-deep .cache-switch-alert .alert-button {\n    border-radius: 9px;\n    font-size: 0.69rem;\n    height: 42px;\n    padding-inline: 2px;\n  }\n  ::ng-deep .cache-switch-alert .alert-wrapper {\n    --width: calc(100vw - 32px);\n    --min-width: 0;\n    --max-width: 370px;\n  }\n  ::ng-deep .cache-switch-alert .alert-message {\n    font-size: 0.82rem;\n    line-height: 1.35;\n    padding: 14px 16px 2px;\n  }\n  ::ng-deep .cache-switch-alert .alert-button-group {\n    gap: 8px;\n    padding: 12px 14px 16px;\n  }\n  ::ng-deep .cache-switch-alert .alert-button {\n    font-size: 0.72rem;\n    height: 42px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/cargar-archivos/cargar-archivos.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-chip:not(.chip-descripcion, .button-chip, .chip-imagenes, .chip-imagenes-camara, .chip-imagenes-video, .chip-tipo-foto){\n    width: 94%;\n    margin-left: 1%;\n    margin-top: 5%;\n    height: 60px;\n    border-radius: 30px;\n}\n\n.chip-tipo-foto{\n    width: 99%;\n    height: 50px;\n}\n\n.foto-list{\n    border: 1px solid lightgray;\n    border-radius: 20px;\n    box-shadow: 2px 2px 6px lightgray;\n    margin-bottom: 25px;\n    padding-left: 10px;\n}\n\n.delete-image-column{\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.select-tipo-foto{\n    width: 90%;\n}\n\n.chip-imagenes{\n    width: 29%;\n    height: 45px;\n    border-radius: 30px;\n}\n\n.chip-imagenes-camara{\n    width: 29%;\n    height: 45px;\n    border-radius: 30px;\n    border: 1px solid var(--blueGrayColor);\n    color: var(--blueGrayColor);\n}\n\n.chip-imagenes-video{\n    width: 29%;\n    height: 45px;\n    border-radius: 30px;\n    border: 1px solid var(--blueColor);\n    color: var(--blueColor);\n}\n\n.icono-camara{\n    color: var(--blueGrayColor);\n}\n\n.icono-video{\n    color: var(--blueColor);\n}\n\n.chip-descripcion{\n    width: 100%;\n    padding-left: 15px;\n    height: auto;\n}\n\n.chip-icon{\n    \n    position: absolute;\n    right: 15px;\n}\n\n.chip-label{\n    margin-top: 3px;\n    font-size: 1rem;\n    text-transform: capitalize;\n}\n\nion-card{\n    margin: 0;\n    height: 84%;\n\n    ion-card-content{\n        height: 85%;\n        overflow-y: scroll;\n    }\n}\n\nstrong{\n    color: #15305f;\n}\n\n.modal-video{\n    transition: height 0.25s ease-in;\n    --height:100%;\n}\n\nion-modal{\n    display: none;\n    --height:100%;\n}\n\n#sortable-list, #title-list{\n    padding-left: 0;\n    margin-left: 0;\n}\n\n.sortable-item{\n    border-bottom: 1px solid lightgray;\n    padding: 20px;\n    padding-left: 0;\n    margin-left: 0;\n    width: 100%;\n}\n\n.button-chip{\n    width: 98%;\n    height: 50px;\n    float: right;\n    text-align: center;\n    padding-left: 40%;\n    color: white;\n    background: var(--blueGrayColor);\n  }\n\n  .descripcion-entrada{\n    --placeholder-color: #ddd;\n  }\n\n  ion-spinner{\n    position: fixed;\n      top: 28%;\n      left: 40%;\n      z-index: 999;\n      width: 20%;\n      height: 20%;\n    //background-color: #00213f;\n  }\n  \n  #loaderFooter{\n    position: fixed;\n      background: black;\n      opacity: 0.6;\n      height: 100vh;\n      width: 100vw;\n      z-index: 900;\n      bottom: 0;\n  }\n\n\n  ::ng-deep {\n    .alert-wrapper {\n    --min-width: 500px;\n    --max-width: 500px;\n    --width: 500px;\n    }\n  \n    .delete-menu-alert {\n      --backdrop-opacity: 0.42;\n  \n      .alert-wrapper {\n        --width: 430px;\n        --min-width: 430px;\n        --max-width: 430px;\n        border-radius: 18px;\n        box-shadow: 0 22px 55px rgba(21, 48, 95, 0.28);\n        overflow: hidden;\n      }\n  \n      .alert-head {\n        background: #0058cb;\n        padding: 18px 22px 16px;\n      }\n  \n      .alert-title {\n        color: #ffffff;\n        font-size: 1.1rem;\n        font-weight: 800;\n        letter-spacing: 0;\n        margin: 0;\n        text-transform: uppercase;\n      }\n  \n      .alert-sub-title {\n        color: rgba(255, 255, 255, 0.82);\n        font-size: 0.78rem;\n        font-weight: 700;\n        letter-spacing: 0;\n        margin-top: 4px;\n        text-transform: uppercase;\n      }\n  \n      .alert-message {\n        color: #15305f;\n        font-size: 0.96rem;\n        font-weight: 700;\n        line-height: 1.35;\n        padding: 18px 22px 4px;\n      }\n  \n      .alert-button-group {\n        display: grid;\n        gap: 10px;\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n        padding: 14px 22px 22px;\n      }\n  \n      .alert-button {\n        background: #ffffff;\n        border: 1.5px solid #d8e4f0;\n        border-radius: 12px;\n        font-size: 0.82rem;\n        font-weight: 800;\n        height: 46px;\n        justify-content: center;\n        letter-spacing: 0;\n        margin: 0;\n        min-width: 0;\n        padding-inline: 6px;\n        text-transform: none;\n        width: 100%;\n      }\n  \n      .alert-button-inner {\n        justify-content: center;\n      }\n  \n      .logout-menu-danger {\n        border-color: #ef5a22;\n        color: #ef5a22;\n      }\n  \n      .logout-menu-cache {\n        border-color: white;\n        color: white;\n      }\n  \n      .logout-menu-cancel {\n        border-color: #b9c8d8;\n        color: #15305f;\n      }\n    }\n  \n  \n    \n    \n  \n    .cache-switch-alert {\n      --backdrop-opacity: 0.46;\n  \n      .alert-wrapper {\n        --width: 500px;\n        --min-width: 500px;\n        --max-width: 500px;\n        border-radius: 18px;\n        box-shadow: 0 22px 55px rgba(21, 48, 95, 0.30);\n        overflow: hidden;\n      }\n  \n      .alert-head {\n        background: #15305f;\n        padding: 18px 22px 16px;\n      }\n  \n      .alert-title {\n        color: #ffffff;\n        font-size: 1.1rem;\n        font-weight: 800;\n        letter-spacing: 0;\n        margin: 0;\n        text-transform: uppercase;\n      }\n  \n      .alert-sub-title {\n        color: rgba(255, 255, 255, 0.82);\n        font-size: 0.78rem;\n        font-weight: 700;\n        letter-spacing: 0;\n        margin-top: 4px;\n        text-transform: uppercase;\n      }\n  \n      .alert-message {\n        color: #15305f;\n        font-size: 0.94rem;\n        font-weight: 700;\n        line-height: 1.45;\n        padding: 18px 22px 6px;\n      }\n  \n      .alert-button-group {\n        display: grid;\n        gap: 10px;\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        padding: 14px 22px 22px;\n      }\n  \n      .alert-button {\n        background: #ffffff;\n        border: 1.5px solid #d8e4f0;\n        border-radius: 12px;\n        font-size: 0.84rem;\n        font-weight: 800;\n        height: 46px;\n        justify-content: center;\n        letter-spacing: 0;\n        margin: 0;\n        min-width: 0;\n        padding-inline: 6px;\n        text-transform: none;\n        width: 100%;\n      }\n  \n      .alert-button-inner {\n        justify-content: center;\n      }\n  \n      .cache-switch-cancel {\n        border-color: #b9c8d8;\n        color: #15305f;\n      }\n  \n      .cache-switch-confirm {\n        border-color: #ef5a22;\n        color: #ef5a22;\n      }\n    }\n  }\n\n  @media (max-width: 699px) {\n    ::ng-deep {\n      .delete-menu-alert,\n      .cache-switch-alert {\n        align-items: center;\n        padding-bottom: 0;\n        padding-top: 0;\n  \n        .alert-wrapper {\n          --width: calc(100vw - 32px);\n          --min-width: 0;\n          --max-width: 360px;\n          border-radius: 14px;\n        }\n  \n        .alert-head {\n          padding: 15px 18px 13px;\n        }\n  \n        .alert-title {\n          font-size: 1rem;\n        }\n  \n        .alert-sub-title {\n          font-size: 0.72rem;\n        }\n  \n        .alert-message {\n          font-size: 0.88rem;\n          padding: 15px 18px 2px;\n        }\n  \n        .alert-button-group {\n          gap: 6px;\n          padding: 12px 14px 16px;\n        }\n  \n        .alert-button {\n          border-radius: 9px;\n          font-size: 0.69rem;\n          height: 42px;\n          padding-inline: 2px;\n        }\n      }\n  \n      .cache-switch-alert {\n        .alert-wrapper {\n          --width: calc(100vw - 32px);\n          --min-width: 0;\n          --max-width: 370px;\n        }\n  \n        .alert-message {\n          font-size: 0.82rem;\n          line-height: 1.35;\n          padding: 14px 16px 2px;\n        }\n  \n        .alert-button-group {\n          gap: 8px;\n          padding: 12px 14px 16px;\n        }\n  \n        .alert-button {\n          font-size: 0.72rem;\n          height: 42px;\n        }\n      }\n    }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30848:
/*!**********************************************************************!*\
  !*** ./src/app/cargar-archivos/cargar-archivos.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\n  <ion-footer id=\"loaderFooter\" *ngIf=\"isLoading == true\"></ion-footer>\n\n  <ion-toolbar>\n    <div style=\"display: flex; justify-content: flex-end; padding: 40px 13px\">\n      <ion-icon\n        id=\"botonAtras\"\n        (click)=\"goBack()\"\n        name=\"arrow-back\"\n        color=\"whiteColor\"\n        style=\"font-size: 24px; position: absolute; left: 5px; margin-top: -7px;\"\n      ></ion-icon>\n      <div *ngIf=\"esSolicitud == true\" color=\"whiteColor\" style=\"color: white;position:absolute;left:10%;font-size:1.1rem;top:40%;\">Subir Imágenes</div>\n       <div *ngIf=\"esSolicitud == false\" color=\"whiteColor\" style=\"color: white;position:absolute;left:10%;font-size:1.1rem;top:40%;\">Atención # {{idAtencion}}</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <br>\n  \n  <br>\n  <ion-chip (click)=\"openFilesInput(0)\" style=\"margin-left: 2%;\" class=\"chip-imagenes\" size=\"small\" color=\"primary\" [outline]=\"true\">\n    <ion-icon name=\"image\"  size=\"small\" color=\"primary\"></ion-icon>\n    <ion-label class=\"chip-label\">Galería</ion-label>\n    <!--ion-icon name=\"chevron-up\" class=\"chip-icon\"></!--ion-icon -->\n  </ion-chip>\n\n  <ion-chip (click)=\"abrirCamara()\" style=\"margin-left: 2%;\" class=\"chip-imagenes-camara\" size=\"small\" [outline]=\"true\">\n    <ion-icon name=\"camera\" size=\"small\"  class=\"icono-camara\"></ion-icon>\n    <ion-label class=\"chip-label\">Cámara</ion-label>\n    <!--ion-icon name=\"chevron-up\" class=\"chip-icon\"></!--ion-icon -->\n  </ion-chip>\n\n  <ion-chip (click)=\"openFilesInput(1)\" style=\"margin-left: 2%;\" class=\"chip-imagenes-video\" size=\"small\" [outline]=\"true\">\n    <ion-icon name=\"videocam\" size=\"small\"  class=\"icono-video\"></ion-icon>\n    <ion-label class=\"chip-label\">Video</ion-label>\n    <!--ion-icon name=\"chevron-up\" class=\"chip-icon\"></!--ion-icon -->\n  </ion-chip>\n  \n\n  \n\n  <input #fotoInput type=\"file\" id=\"fileInput\" name=\"files[]\" hidden multiple accept=\"image/*\"/>\n  <input #videoInput type=\"file\" id=\"fileInputV\" name=\"filesv[]\" hidden multiple accept=\"video/*\"/>\n  <input #pdfInput type=\"file\" id=\"fileInputP\" name=\"filesv[]\" hidden multiple accept=\"application/pdf\"/>\n\n  <br><br><br>\n  <ion-card>\n    <ion-card-header id=\"loadingHeader\" style=\"display: none;\">\n      <ion-card-title>Carga de {{archivoTipo}}</ion-card-title>\n      <ion-card-subtitle>{{cantidad}} archivos seleccionados ... </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n\n      \n\n      <ul id=\"title-list\" style=\"list-style-type: none; display: none;max-height: 300px; overflow-y:scroll;\">\n        <li>\n          <ion-grid style=\"width: 100%;\">\n            <ion-row>\n              <ion-col size=\"9\"><strong>Editar Lista de {{archivoTipo}}</strong></ion-col>\n              <ion-col size=\"3\" (click)=\"'goTo(1, videos)'\"><ion-icon name=\"cog\" style=\"position: absolute; right:0; font-size:1.8rem; color:#f44336\"></ion-icon></ion-col>\n            </ion-row>\n          </ion-grid>\n        </li>\n      </ul>\n\n      <ul id=\"sortable-list\" style=\"list-style-type: none;\" class=\"foto-lista\">\n        \n        <li *ngFor=\"let foto of fotos; let i = index\"  class=\"sortable-item foto-list\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"3\" (click)=\"handleFileModal(1, foto, i)\">\n                <ion-thumbnail>\n                  <img [src]=foto.Foto />\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col size=\"7\">\n                {{ foto.Nombre }}\n              </ion-col>\n              <ion-col size=\"2\" class=\"delete-image-column\">\n                <ion-button fill=\"clear\" color=\"danger\" class=\"delete-image-button\" (click)=\"confirmDeleteFoto(i, $event)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-input style=\"display: none;\" #descripcionFoto class=\"descripcion-foto descripcion-entrada\" [value]=\"foto.Descripcion\"></ion-input>\n          <ion-input style=\"display: none;\" #indexFoto [value]=\"i\"></ion-input>\n          \n          <ion-chip [outline]=\"true\" color=\"primary\" class=\"chip-tipo-foto\">\n            <ion-label class=\"\" position=\"fixed\">\n              Tipo de Fotografía</ion-label>\n            <ion-select class=\"select-tipo-foto\" [(ngModel)]=\"foto.IdTipo\" multiple=\"false\"\n            interface=\"action-sheet\" \n                      okText=\"Seleccionar\" cancelText=\"No seleccionar\" [interfaceOptions]=\"customActionSheetOptions\" mode=\"ios\">\n              <ion-select-option *ngFor=\"let tipo of tipoFotos;\" [value]=\"tipo.Id\"\n              (ionChange)=\"seleccionarTipoDeFoto()\">{{tipo.TipoFotografia}}\n                \n              </ion-select-option>\n              <br>\n              <br>\n              <ion-select-option style=\"color: white;\">Ajustadores App</ion-select-option>\n              <br>\n            </ion-select>\n            <ion-input [hidden]=\"true\" #descripcionFoto [value]=\"foto.Descripcion\"></ion-input>\n            <ion-input [hidden]=\"true\" #indexFoto [value]=\"i\"></ion-input>\n            <!--ion-input placeholder=\"Entra Una Descripción\"  [(ngModel)]=\"foto.Descripcion\" class=\"form-control descripcion-entrada\" (ionBlur)=\"'entraDescripcionFoto(descripcionFoto.value, indexFoto.value)'\"></!--ion-input -->\n          </ion-chip>\n\n          <ion-chip color=\"primary\" [(ngModel)]=\"foto.Descripcion\" class=\"chip-descripcion\"\n          (click)=\"handleFileModal(1, foto, i)\">\n            <ion-label class=\"chip-descripcion-texto\">{{foto.Descripcion}}</ion-label>\n            <ion-icon name=\"cog\" style=\"font-size: 1.6rem;\"></ion-icon>\n          </ion-chip>          \n          \n          <br> <small style=\"float: right; color: #f44336;\"> {{foto.SizeMb}} Mb </small>\n          <progress *ngIf=\"isLoadingItem\" #loadValue id=\"loadValue\" value=\"0\" max=\"100\" style=\"width: 100%;\" class=\"progress-value\"></progress>\n        </li>\n        <li *ngFor=\"let video of videos let i = index\" (click)=\"handleFileModal(2, video, i)\" class=\"sortable-item\">\n          {{ video.Descripcion }}\n          <br> <small style=\"float: right; color: #f44336;\"> {{video.SizeMb}} Mb </small>\n          <progress *ngIf=\"isLoadingItem\" #loadValue id=\"loadValue\" value=\"0\" max=\"100\" style=\"width: 100%;\" class=\"progress-value\"></progress>\n        </li>\n        <br><br>\n      </ul>\n\n      \n\n      \n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-footer style=\"position: fixed;bottom:0;left:0;width:100%;height: auto;background: white;\">\n    <ion-chip (click)=\"handleSave(tipo, idAtencion)\" color=\"primary\" class=\"button-chip\">\n      <ion-label>Guardar</ion-label>\n    </ion-chip>\n  </ion-footer>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cargar-archivos_cargar-archivos_module_ts.js.map