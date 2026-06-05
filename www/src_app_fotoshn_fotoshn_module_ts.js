(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_fotoshn_fotoshn_module_ts"],{

/***/ 86167:
/*!***************************************************!*\
  !*** ./src/app/fotoshn/fotoshn-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoshnPageRoutingModule": () => (/* binding */ FotoshnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fotoshn_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotoshn.page */ 18283);




const routes = [{
  path: '',
  component: _fotoshn_page__WEBPACK_IMPORTED_MODULE_0__.FotoshnPage
}];
let FotoshnPageRoutingModule = class FotoshnPageRoutingModule {};
FotoshnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FotoshnPageRoutingModule);


/***/ }),

/***/ 57561:
/*!*******************************************!*\
  !*** ./src/app/fotoshn/fotoshn.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoshnPageModule": () => (/* binding */ FotoshnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fotoshn_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotoshn-routing.module */ 86167);
/* harmony import */ var _fotoshn_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotoshn.page */ 18283);







let FotoshnPageModule = class FotoshnPageModule {};
FotoshnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _fotoshn_routing_module__WEBPACK_IMPORTED_MODULE_0__.FotoshnPageRoutingModule],
  declarations: [_fotoshn_page__WEBPACK_IMPORTED_MODULE_1__.FotoshnPage]
})], FotoshnPageModule);


/***/ }),

/***/ 18283:
/*!*****************************************!*\
  !*** ./src/app/fotoshn/fotoshn.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoshnPage": () => (/* binding */ FotoshnPage)
/* harmony export */ });
/* harmony import */ var C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _fotoshn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotoshn.page.html?ngResource */ 89077);
/* harmony import */ var _fotoshn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fotoshn.page.scss?ngResource */ 61717);
/* harmony import */ var _fotoshn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fotoshn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toast.service */ 84465);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ 85139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);














let FotoshnPage = class FotoshnPage {
  constructor(router, route, loading, alert, api, toast, toaster, platform, modalPrompt, http) {
    this.router = router;
    this.route = route;
    this.loading = loading;
    this.alert = alert;
    this.api = api;
    this.toast = toast;
    this.toaster = toaster;
    this.platform = platform;
    this.modalPrompt = modalPrompt;
    this.http = http;
    // @ViewChild("modalPrompt", { static: true }) modalPrompt: ElementRef;
    this.foto = '';
    this.hoy = new Date().toISOString();
    this.openFoto = false;
    this.img = {};
    this.fotos = [];
    this.tipoFotos = [];
    this.reclamoData = [];
    this.fotoData = [];
    this.videos = [];
    this.descripcionesVacias = [];
    this.imagenesSeleccionadas = 0;
    this.videosSeleccionados = 0;
    this.isLoading = false;
    this.esTablet = true;
    this.isVideo = false;
    this.conteo = 0;
    this.contador = [];
    this.fotosFromCamera = [];
    this.fotosFromGallery = [];
    this.fotosBorrar = [];
    this.process = 1;
    this.videoDivisions = 0;
    this.atencionId = parseInt(localStorage.getItem('idAtencion'));
    this.nombreFirmante = localStorage.getItem('nombreConductor');
    //this.fechaFirma = localStorage.getItem('fechaFirma'); this.fechaFirma = new Date().toISOString();
    this.fechaFirma = this.hoy;
  }
  ngOnInit() {
    this.fotos = [];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reclamoData = this.router.getCurrentNavigation().extras.state.data;
        console.table(this.reclamoData);
      }
    });
    this.getTipoFotos();
  }
  ionViewDidEnter() {
    let fotosLocal = JSON.parse(localStorage.getItem('fotos-' + this.atencionId));
    if (fotosLocal) {
      this.fotos = fotosLocal;
      if (this.fotos.length > 0) {
        this.imagenesSeleccionadas = this.fotos.length;
        this.isVideo = false;
        jquery__WEBPACK_IMPORTED_MODULE_7__('#imagenesConteo').fadeIn();
        jquery__WEBPACK_IMPORTED_MODULE_7__('#buttonSubmit').fadeIn();
      } else {
        this.isVideo = true;
      }
    }
  }
  openImg(foto) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  openCamera() {
    var _this = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.conteo = _this.fotosFromCamera.length; // 0
      if (_this.fotosFromGallery.length > 0) {
        _this.contador = _this.fotosFromGallery.length;
        if (_this.conteo > 0) {
          _this.indexCamera = _this.contador + _this.conteo;
          // for imagenes de la camara (conteo)
        } else {
          _this.indexCamera = _this.contador;
        }
      } else {
        _this.contador = 0;
        if (_this.conteo > 0) {
          _this.indexCamera = _this.conteo + 1;
          // for imagenes de la camara (conteo)
        } else {
          _this.indexCamera = _this.conteo;
        }
      }
      _this.esTablet = _this.platform.is('android');
      _this.modalPrompt.dismiss();
      const img = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Camera,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64
      });
      _this.img.IdTipo = 1;
      _this.img.Tipo = 'Daño';
      _this.img.Foto = img.base64String; //.split(',')[1];
      _this.img.Fecha = new Date().toISOString();
      _this.img.Descripcion = '';
      _this.img.NombreFirmante = _this.nombreFirmante;
      _this.img.Source = 1;
      _this.fotosFromCamera.push(_this.img);
      localStorage.setItem('Foto ' + _this.indexCamera, JSON.stringify(img));
      _this.img = {};
    })();
  }
  /*
    put( archivo: FormData|null){
      if(archivo == undefined){
        archivo = null;
      }
      this.api.SubirVideo(this.atencionId,archivo).subscribe({
        next: (resp) => {
          this.mensaje = resp.message;
          this.toaster.presentToastSave(this.mensaje, "top", "video", "");
        }
      })
    }
  
    fileEvent(fileInput: any){
      if(fileInput.target.files[0] != undefined || fileInput.type != undefined){
        this.archivo = new FormData;
        this.archivo.append('Archivo', fileInput.target.files[0], fileInput.target.files[0].name);
        this.put(this.archivo);
      }
    }
    */
  onFileSelected(event) {
    this.isVideo = true;
    this.videos = [];
    this.modalPrompt.dismiss();
    const fileInputVs = document.getElementById("uploadVideoInput").files;
    this.videosSeleccionados = fileInputVs.length;
    setTimeout(() => {
      if (fileInputVs.length > 0) {
        this.videosSeleccionados = fileInputVs.length;
        jquery__WEBPACK_IMPORTED_MODULE_7__("#videosConteo").fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmitVideo").fadeIn('xslow');
        for (let index = 0; index < fileInputVs.length; index++) {
          this.fechaFirma = new Date().toISOString();
          const file = fileInputVs[index];
          let dSize = file.size;
          let videoType = file.type;
          //alert(videoType)
          this.dVideoSize = (Math.round(+dSize / 1024) / 1000).toFixed(2);
          if (this.dVideoSize > 16) {
            this.videoDivisions = parseInt(Math.ceil(this.dVideoSize / 16).toFixed(0));
            this.toaster.presentToastNoButtonsRed('El tamaño del archivo excede los 16Mb, deberás dividirlo en ' + this.videoDivisions + ' partes.', 'top', 'video-upload');
          } else {
            this.toaster.dismissToast();
            this.isLoading = true;
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
              this.videos.push(e.target.result);
            };
            if (index == fileInputVs.length - 1) {
              this.isLoading = false;
            }
          }
        }
      } else {}
    }, this.randomIntFromInterval(1, 5));
    console.log(event.target.value);
    this.videoFile = event.target.files[0];
    this.videoArray = event.target.files;
  }
  /*
    onFileSelected(event){
      
      this.isVideo = true;
      this.videos = [];
      this.modalPrompt.dismiss();
  
      const fileInputVs = (document.getElementById("uploadVideoInput") as HTMLInputElement).files;
      this.videosSeleccionados = fileInputVs.length;
  
      setTimeout(() => {
        if (fileInputVs.length > 0) {
          this.videosSeleccionados = fileInputVs.length;
          
          for (let index = 0; index < fileInputVs.length; index++) {
            this.fechaFirma = new Date().toISOString();
            const file = fileInputVs[index];
    
            var reader = new FileReader();
            reader.readAsDataURL(file);
  
            reader.onload = e => {
              this.videos.push(e.target.result)
            };
            
    
            if (index == (fileInputVs.length-1)) {
              
            }
            
          }
          
        }else{}
      }, this.randomIntFromInterval(1, 5));
      
      $("#videosConteo").fadeIn('xslow');
      $("#buttonSubmitVideo").fadeIn('xslow');
      
      console.log(event.target.value);
      this.videoFile = event.target.files[0];
      this.videoArray = event.target.files;
    }
  
    */
  onUpload() {
    if (this.videoFile && this.atencionId) {
      //this.currentAccessToken = null;
      const formData = new FormData();
      formData.append('File', this.videoFile, this.videoFile.name);
      formData.append('IdAtencion', this.atencionId.toString());
      formData.append('IdProveedor', '3912');
      let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
      let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
      this.api.GuardarVideo(this.videoFile, this.atencionId).subscribe(e => {
        //          alert(e.estado);
        let estado = e.estado;
        if (estado == true) {
          //alert("Ji vo")
          this.toaster.presentToastNoButtons("Video subido con éxito!", "top", "video-upload");
          jquery__WEBPACK_IMPORTED_MODULE_7__("#videosConteo").fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmitVideo").fadeOut();
          jquery__WEBPACK_IMPORTED_MODULE_7__("#videosSubidos").fadeIn();
        } else {
          this.toaster.presentToastNoButtonsRed("No es posible enviar el video, intenta nuevamente!", "top", "video-upload");
          //alert("No vo")
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
  /*
  onUpload() {
      if (this.videoFile && this.atencionId) {
        
        //this.currentAccessToken = null;
        const formData: FormData = new FormData();
        formData.append('File', this.videoFile, this.videoFile.name);
        formData.append('IdAtencion', this.atencionId.toString());
        formData.append('IdProveedor', '3912');
    
        let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
        let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
    
        try {
          alert("try")
          this.http.post(thisLocal, formData)
        .pipe(
            switchMap(( res: any  ) => {
              try {
                alert("YA")
                console.dir('Video enviado', res.code);
                return from(Promise.all(res));
              } catch (error) {
                console.log("Aca estoy "+error)
              }
              
            }),
            tap(_ => {
            })
          )
        } catch (error) {
          console.log(error);
        }
        
      } else {
        console.warn('Seleccione un archivo de video y proporcione un ID de atención válido.');
      }
    }
    
    onFileSelected(event){
      console.log(event.target.value);
      this.videoFile = event.target.files[0];
    }
  
    onUpload() {
      if (this.videoFile && this.atencionId) {
        this.api.GuardarVideo(this.videoFile, this.atencionId).pipe(
          finalize(async ()=>{
            console.log('He finalizado')
          }),
          
        ).subscribe(
          (response) => {
            console.log('Video uploaded successfully. Response:');
            // Maneja la respuesta de la API según tus necesidades
          },
          (error) => {
            console.log('Error uploading video:');
            // Maneja el error según tus necesidades
          }
        );
      } else {
        console.warn('Seleccione un archivo de video y proporcione un ID de atención válido.');
      }
    }
  */
  /*
  
  SubirVideo(atencionId:any, Archivo:FormData|null) : Observable<any> {
      let idProveedor = this.currentUser.ProveedorAgenteId;
      this.currentAccessToken = null;
      //const url: string = `${environment_local.api_url}/Proveedor/SubirVideo?IdProveedor=${idProveedor}&IdAtencion=${atencionId}`
      // ?IdAtencion=${atencionId}&TipoFotoFirma=${TipoFotoFirma}
      // return this.http.post<Respuesta>(url, Archivo).pipe(
      //   tap(_ => {
      //     this.isAuthenticated.next(true);
      //   }),
      //   catchError(err => throwError(() => (err.error.message)))
      // )
      //      return this.http.post(`${this.apiUrl}/Proveedor/InsertarReconocimientoDeDeuda?IdTablaAjustador=${credentials.IdTablaAjustador}&CodigoBPMFicohsa=${credentials.CodigoBPMFicohsa}&CodigoReclamoFicohsa=${credentials.CodigoReclamoFicohsa}`, {}).pipe(
      return this.http.post(`${environment_local.api_url}/Proveedor/SubirVideo?IdProveedor=${idProveedor}&IdAtencion=${atencionId}`, Archivo)
      .pipe(
          switchMap(( res: any  ) => {
            //map(res)
            console.dir('Video enviado', res.code);
          return from(Promise.all(res));
        }),
        tap(_ => {
          this.isAuthenticated.next(true);
        })
      )
      
    }
  
  */
  openFilesInput() {
    var _this2 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isVideo = false;
      _this2.fotos = [];
      jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInput").click();
      _this2.modalPrompt.dismiss();
      _this2.process = 2;
      document.getElementById('fileInput').addEventListener("click", function (evento) {
        evento.stopPropagation();
      }, false);
      jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInput").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputs = document.getElementById("fileInput").files;
        console.dir(fileInputs);
        jquery__WEBPACK_IMPORTED_MODULE_7__("#displayPhotos").click();
      });
    })();
  }
  heyOmar(event) {
    let Evento = event;
    console.log(Evento);
    /*
    document.getElementById("filesvid").onchange = function(e: Event) {
      let file = (<HTMLInputElement>e.target).files[0];
      console.log(file)
      // rest of your code...
    }
    */
  }

  openFilesInputVideo() {
    this.isVideo = true;
    this.videos = [];
    jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputV").click();
    this.modalPrompt.dismiss();
    this.process = 2;
    jquery__WEBPACK_IMPORTED_MODULE_7__("#fileInputV").on("change", evt => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();
      console.dir(evt);
      const fileInputVs = document.getElementById("fileInputV").files;
      console.dir(fileInputVs);
      setTimeout(() => {
        //console.log('mi fileinput')
        if (fileInputVs.length > 0) {
          //alert('mi fileinput')
          this.videosSeleccionados = fileInputVs.length;
          //$("#imagenesConteo").fadeIn('xslow');
          //$("#buttonSubmit").fadeIn('xslow');
          for (let index = 0; index < fileInputVs.length; index++) {
            this.fechaFirma = new Date().toISOString();
            const file = fileInputVs[index];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
              this.videos.push(e.target.result);
            };
            if (index == fileInputVs.length - 1) {
              this.isLoading = false;
            }
          }
        } else {
          //$("#imagenesConteo").fadeOut('slow');
          //$("#buttonSubmit").fadeOut('slow');
        }
      }, this.randomIntFromInterval(1, 5));
    });
  }
  displayPhotos(event) {
    this.fotos = [];
    event.preventDefault();
    event.stopPropagation();
    const fileInput = document.getElementById("fileInput").files;
    //console.dir(fileInput)
    this.isLoading = true;
    setTimeout(() => {
      //console.log('mi fileinput')
      if (fileInput.length > 0) {
        //alert('mi fileinput')
        this.imagenesSeleccionadas = fileInput.length;
        jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeIn('xslow');
        jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeIn('xslow');
        for (let index = 0; index < fileInput.length; index++) {
          this.fechaFirma = new Date().toISOString();
          const file = fileInput[index];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = e => {
            const b64 = e.target.result;
            this.daImagen = b64;
            this.img.IdTipo = 1;
            this.img.Tipo = 'Daño';
            this.img.Foto = this.daImagen.split(',')[1];
            this.img.Fecha = new Date().toISOString();
            this.img.Descripcion = '';
            this.img.NombreFirmante = 'Hola Firmante'; //this.nombreFirmante;
            this.img.Source = 2;
            this.fotos.push(this.img);
            this.img = {};
          };
          if (index == fileInput.length - 1) {
            this.isLoading = false;
            setTimeout(() => {
              localStorage.setItem('fotos-' + this.atencionId, JSON.stringify(this.fotos));
            }, 900);
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeOut('slow');
        jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeOut('slow');
      }
    }, this.randomIntFromInterval(1, 5));
  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  guardarFotos() {
    var _this3 = this;
    this.toaster.dismissToast();
    let dedscripcionsContainer = document.getElementsByClassName('descripcion-entrada');
    for (let indexVacia = 0; indexVacia < dedscripcionsContainer.length; indexVacia++) {
      const elementResdtablecido = dedscripcionsContainer[indexVacia];
      elementResdtablecido;
    }
    this.isLoading = true;
    this.fotoData = [];
    if (this.fotos.length > 0) {
      for (let index = 0; index < this.fotos.length; index++) {
        const element = this.fotos[index];
        this.fotoData = [{
          Foto: element.Foto,
          IdAtencion: parseInt(localStorage.getItem('idAtencion')),
          RefTipoFotoId: element.IdTipo,
          NombreFirmante: element.NombreFirmante,
          Descripcion: element.Descripcion,
          FechaFirma: element.Fecha
        }];
        this.api.GuardarFotos(this.fotoData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (index == _this3.fotos.length - 1) {
            _this3.isLoading = false;
          }
        }))).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let codigo = res.status;
            if (index == _this3.fotos.length - 1) {
              _this3.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
              jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeOut("slow");
              jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonCancelImage").fadeOut("slow");
              jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeOut("slow");
              jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesSubidas").fadeIn("xslow");
              jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonMore").fadeIn("xslow");
              localStorage.setItem('fotosEnviadas-' + _this3.atencionId, 'true');
            }
          });
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }(), /*#__PURE__*/function () {
          var _ref3 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let codigo = res.status;
            _this3.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
            localStorage.setItem('fotosEnviadas-' + _this3.atencionId, 'false');
          });
          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }());
        if (index == this.fotos.length - 1) {
          console.log("Data de fotografia ");
          console.dir(this.fotoData);
        }
      }
    } else {
      this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
      localStorage.setItem('fotosEnviadas-' + this.atencionId, 'false');
    }
  }
  guardarFotosX() {
    var _this4 = this;
    this.descripcionesVacias = [];
    this.dedscripcionContainer = document.getElementsByClassName('descripcion-entrada');
    for (let indexDescripcion = 0; indexDescripcion < this.dedscripcionContainer.length; indexDescripcion++) {
      const element = this.dedscripcionContainer[indexDescripcion];
      let laDescripcion = jquery__WEBPACK_IMPORTED_MODULE_7__('.descripcion-entrada').eq(indexDescripcion).val();
      if (laDescripcion == '' || laDescripcion == null || laDescripcion == undefined) {
        element.setAttribute('style', 'color:red;border:2px solid red');
        this.descripcionesVacias.push(indexDescripcion);
      } else {
        element.setAttribute('style', 'color:inherit;border:2px solid inherit');
      }
      if (indexDescripcion == this.dedscripcionContainer.length - 1) {
        if (this.descripcionesVacias.length > 0) {
          this.toaster.presentToastNoButtonsRed('Los siguientes campos no tienen descripción. Porfavor ingresa una descripción para continuar. Igualmente valida el tipo de fotografía.', 'top', 'descripcion');
        } else {
          this.toaster.dismissToast();
          let dedscripcionsContainer = document.getElementsByClassName('descripcion-entrada');
          for (let indexVacia = 0; indexVacia < dedscripcionsContainer.length; indexVacia++) {
            const elementResdtablecido = dedscripcionsContainer[indexVacia];
            elementResdtablecido;
          }
          this.isLoading = true;
          this.fotoData = [];
          if (this.fotos.length > 0) {
            for (let index = 0; index < this.fotos.length; index++) {
              const element = this.fotos[index];
              this.fotoData = [{
                Foto: element.Foto,
                IdAtencion: parseInt(localStorage.getItem('idAtencion')),
                RefTipoFotoId: element.IdTipo,
                NombreFirmante: element.NombreFirmante,
                Descripcion: element.Descripcion,
                FechaFirma: element.Fecha
              }];
              this.api.GuardarFotos(this.fotoData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                if (index == _this4.fotos.length - 1) {
                  _this4.isLoading = false;
                }
              }))).subscribe( /*#__PURE__*/function () {
                var _ref5 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  let codigo = res.status;
                  if (index == _this4.fotos.length - 1) {
                    _this4.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesConteo").fadeOut("slow");
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonCancelImage").fadeOut("slow");
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonSubmit").fadeOut("slow");
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#imagenesSubidas").fadeIn("xslow");
                    jquery__WEBPACK_IMPORTED_MODULE_7__("#buttonMore").fadeIn("xslow");
                  }
                });
                return function (_x3) {
                  return _ref5.apply(this, arguments);
                };
              }(), /*#__PURE__*/function () {
                var _ref6 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
                  let codigo = res.status;
                  _this4.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
                });
                return function (_x4) {
                  return _ref6.apply(this, arguments);
                };
              }());
              if (index == this.fotos.length - 1) {
                console.log("Data de fotografia ");
                console.dir(this.fotoData);
              }
            }
          } else {
            this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
          }
          /**/
        }
      }
    }
  }

  getBase64(file, index) {
    console.dir(file);
    var reader = new FileReader();
    let img = [];
    reader.readAsDataURL(file);
    reader.onload = function () {
      img.push({
        IdTipo: 1,
        Tipo: 'Daño',
        Foto: reader.result.toString(),
        Fecha: new Date().toISOString(),
        Descripcion: ''
      });
      if (index < 10) {
        localStorage.setItem('Foto ' + index, JSON.stringify(img));
      }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  entraDescripcionFoto(descripcion, fIndex) {
    console.log(descripcion + ', ' + fIndex);
    this.fotos[fIndex].Descripcion = descripcion;
    console.log(this.fotos[fIndex].IdAtencion);
  }
  checkPlatformForWeb() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_6__.Capacitor.getPlatform() == 'web') return true;
    return false;
  }
  deleteFoto(i) {
    this.fotos.splice(i, 1);
    localStorage.removeItem('Foto ' + i);
    this.imagenesSeleccionadas = this.imagenesSeleccionadas - 1;
    localStorage.setItem('fotos-' + this.atencionId, JSON.stringify(this.fotos));
  }
  clearPhotos() {
    const fileInputs = document.getElementById("fileInput").files;
    console.dir(fileInputs);
    this.isLoading = true;
    this.toaster.dismissToast();
    jquery__WEBPACK_IMPORTED_MODULE_7__('#fileInput').empty();
    //fileInputs.empty()
    setTimeout(() => {
      //alert('Soy un feliz intervalo')
      for (let index = 0; index < fileInputs.length; index++) {
        const element = fileInputs[index];
        const file = fileInputs[index];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.EMPTY;
      }
      this.imagenesSeleccionadas = 0;
      this.fotos = [];
      this.isLoading = false;
    }, this.randomIntFromInterval(1, 5));
  }
  getTipoFotos() {
    var _this5 = this;
    return (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const load = yield _this5.loading.create();
      yield load.present();
      _this5.api.ListTipoFoto().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)( /*#__PURE__*/(0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield load.dismiss();
      }))).subscribe( /*#__PURE__*/function () {
        var _ref8 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this5.tipoFotos = res;
        });
        return function (_x5) {
          return _ref8.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref9 = (0,C_Users_edwyn_mcclellan_Documents_GitHub_AppAjustadoresHelp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const alert = yield _this5.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']
          });
          yield alert.present();
        });
        return function (_x6) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
    }, {
      type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
    }, {
      type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
    }];
  }
};
FotoshnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-fotoshn',
  template: _fotoshn_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_fotoshn_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FotoshnPage);


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

/***/ 61717:
/*!******************************************************!*\
  !*** ./src/app/fotoshn/fotoshn.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-col:not(.not) {\n  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2%;\n}\n\nion-card {\n  height: 150px;\n  width: 45vw;\n  border-radius: 0;\n  background-size: cover;\n}\nion-card ion-card-content {\n  position: relative;\n  background: rgba(36, 36, 36, 0.4);\n  width: 100%;\n  width: max-content;\n}\nion-card ion-card-content h2,\nion-card ion-card-content .icon-small {\n  color: var(--cs-text-primary, #ffffff);\n}\n\n.Img {\n  --background: rgba(44,39,45,0.2);\n  color: #4ba8ed;\n}\n.Img::part(content) {\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n}\n.Img .item.sc-ion-label-md-h, .Img .item .sc-ion-label-md-h {\n  white-space: normal;\n  padding: 10px;\n  font-size: 1.2rem;\n  white-space: normal;\n  font-weight: bold;\n}\n.Img ion-content {\n  --background: transparent;\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n.Img ion-content ion-img {\n  width: 100%;\n  height: 100%;\n}\n.Img ion-content .item.sc-ion-label-ios-h, .Img ion-content .item .sc-ion-label-ios-h {\n  --color: initial;\n  display: block;\n  font-size: 1.2rem;\n  color: var(--color);\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n\nimg {\n  object-fit: revert;\n}\n\n::ng-deep .alert-wrapper {\n  --min-width: 600px;\n  --max-width: 600px;\n  --width: 600px;\n}\n\n.alert-wrapper {\n  max-width: 600px !important;\n  width: 600px;\n}\n\n/*\n\t  #buttonSubmit{\n\t\t--background: #3880ff;\n\t\t--background-activated: #3968ba;\n\t\t--background-hover: #3968ba;\n\t\t--border-radius: 15px;\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n\t\t--color: white;\n\t  }\n\n\t  #buttonDisplay{\n\t\t--background: #f14f23;\n\t\t--background-activated: #a8462a;\n\t\t--background-hover: #f66e48;\n\t\t--border-radius: 15px;\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n\t\t--color: white;\n\t  }\n\n\t  #open-modal-prompt{\n\t\t--background: #d3d1d1;\n\t\t--background-activated: #7e7d7d;\n\t\t--background-hover: #9a8b87;\n\t\t--border-radius: 15px;\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n\t\t--color: white;\n\t  }\n\n\t  ion-fab-button {\n\t--background: #f14f23;\n\t--background-activated: #a8462a;\n\t--background-hover: #f66e48;\n\t--border-radius: 15px;\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n\t--color: white;\n  }\n\n*/\n.boton-estado-1 {\n  --background: #d3d1d1;\n  --background-activated: #7e7d7d;\n  --background-hover: #9a8b87;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.boton-estado-1-x {\n  --background: #d3d1d1;\n  --background-activated: #7e7d7d;\n  --background-hover: #9a8b87;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.boton-estado-2 {\n  --background: var(--blueGrayColor);\n  --background-activated: var(--blueGrayColor);\n  --background-hover: var(--blueGrayColor);\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\n.boton-estado-3 {\n  --background: #a9d4a5;\n  --background-activated: #819f7e;\n  --background-hover: #819f7e;\n  --border-radius: 15px;\n  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --color: white;\n}\n\nion-select::part(text) {\n  font-size: 1.2rem;\n}\n\nion-spinner {\n  position: fixed;\n  top: 28%;\n  left: 40%;\n  z-index: 999;\n  width: 20%;\n  height: 20%;\n}\n\n#loaderFooter {\n  position: fixed;\n  background: black;\n  opacity: 0.6;\n  height: 100vh;\n  width: 100vw;\n  z-index: 900;\n  bottom: 0;\n}\n\nion-item-divider {\n  background: #0090d0;\n  color: aliceblue;\n}\n\n.empty-col {\n  box-shadow: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/app/fotoshn/fotoshn.page.scss"],"names":[],"mappings":"AAAA;EACI,8CAAA;EACA,iBAAA;AACJ;;AACA;EACI,aAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AAEJ;AADI;EACE,kBAAA;EACA,iCAAA;EACA,WAAA;EAKA,kBAAA;AADN;AAHM;;EAEE,sCAAA;AAKR;;AAAE;EAEC,gCAAA;EACA,cAAA;AAEH;AADG;EACC,kCAAA;UAAA,0BAAA;AAGJ;AADG;EACC,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;AAGJ;AADG;EACC,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;AAGJ;AAFI;EACM,WAAA;EACA,YAAA;AAIV;AADI;EACC,gBAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;AAGL;;AAKI;EACI,kBAAA;AAFR;;AAME;EACA,kBAAA;EACA,kBAAA;EACA,cAAA;AAHF;;AAMG;EACD,2BAAA;EACA,YAAA;AAHF;;AAMG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAAA;AAyCD;EACD,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAND;;AASE;EACD,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAND;;AASE;EACD,kCAAA;EACC,4CAAA;EACA,wCAAA;EACD,qBAAA;EACA,qFAAA;EACA,cAAA;AAND;;AASE;EACD,qBAAA;EACA,+BAAA;EACA,2BAAA;EACA,qBAAA;EACA,qFAAA;EACA,cAAA;AAND;;AASG;EACD,iBAAA;AANF;;AASG;EACD,eAAA;EACE,QAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AANJ;;AAUG;EACD,eAAA;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,SAAA;AAPJ;;AAUG;EACD,mBAAA;EACA,gBAAA;AAPF;;AAUC;EACC,gBAAA;EACA,YAAA;AAPF","sourcesContent":["ion-col:not(.not){\r\n    box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 10%);\r\n    border-radius: 2%;\r\n}\r\nion-card {\r\n    height: 150px;\r\n    width: 45vw;\r\n    border-radius: 0;\r\n    background-size: cover;\r\n    ion-card-content {\r\n      position: relative;\r\n      background: rgba(36, 36, 36, 0.40);\r\n      width: 100%;\r\n      h2,\r\n      .icon-small {\r\n        color: var(--cs-text-primary, #ffffff);\r\n      }\r\n      width: max-content;\r\n    }\r\n  }\r\n  .Img{\r\n\t\t//ion-modal{\r\n\t\t\t--background: rgba(44,39,45,0.2);\r\n\t\t\tcolor:#4ba8ed;\r\n\t\t\t&::part(content){\r\n\t\t\t\tbackdrop-filter: blur(6px);\r\n\t\t\t}\r\n\t\t\t.item.sc-ion-label-md-h, .item .sc-ion-label-md-h{\r\n\t\t\t\twhite-space: normal;\r\n\t\t\t\tpadding: 10px;\r\n\t\t\t\tfont-size: 1.2rem;\r\n\t\t\t\twhite-space: normal;\r\n\t\t\t\tfont-weight: bold;\r\n\t\t\t}\r\n\t\t\tion-content{\r\n\t\t\t\t--background: transparent;\r\n\t\t\t\t--padding-top: 20px;\r\n\t\t\t\t--padding-start: 20px;\r\n\t\t\t\t--padding-end: 20px;\r\n\t\t\t\tion-img{\r\n          width: 100%;\r\n          height: 100%;\r\n          \r\n        }\r\n\t\t\t\t.item.sc-ion-label-ios-h, .item .sc-ion-label-ios-h{\r\n\t\t\t\t\t--color: initial;\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tfont-size: 1.2rem;\r\n\t\t\t\t\tcolor: var(--color);\r\n\t\t\t\t\tfont-weight: bold;\r\n\t\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\t\twhite-space: normal;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t//}\r\n\t\t\r\n\t}\r\n    img{\r\n        object-fit:revert ;\r\n    }\r\n\r\n\t::ng-deep {\r\n\t\t.alert-wrapper {\r\n\t\t--min-width: 600px;\r\n\t\t--max-width: 600px;\r\n\t\t--width: 600px;\r\n\t  }\r\n\t}\r\n\t  .alert-wrapper{\r\n\t\tmax-width: 600px !important;\r\n\t\twidth: 600px;\r\n\t  }\r\n\r\n\t  /*\r\n\t  #buttonSubmit{\r\n\t\t--background: #3880ff;\r\n\t\t--background-activated: #3968ba;\r\n\t\t--background-hover: #3968ba;\r\n\t\t--border-radius: 15px;\r\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t\t--color: white;\r\n\t  }\r\n\r\n\t  #buttonDisplay{\r\n\t\t--background: #f14f23;\r\n\t\t--background-activated: #a8462a;\r\n\t\t--background-hover: #f66e48;\r\n\t\t--border-radius: 15px;\r\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t\t--color: white;\r\n\t  }\r\n\r\n\t  #open-modal-prompt{\r\n\t\t--background: #d3d1d1;\r\n\t\t--background-activated: #7e7d7d;\r\n\t\t--background-hover: #9a8b87;\r\n\t\t--border-radius: 15px;\r\n\t\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t\t--color: white;\r\n\t  }\r\n\r\n\t  ion-fab-button {\r\n\t--background: #f14f23;\r\n\t--background-activated: #a8462a;\r\n\t--background-hover: #f66e48;\r\n\t--border-radius: 15px;\r\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t--color: white;\r\n  }\r\n\t\r\n*/\r\n\r\n\r\n\r\n  .boton-estado-1{\r\n\t--background: #d3d1d1;\r\n\t--background-activated: #7e7d7d;\r\n\t--background-hover: #9a8b87;\r\n\t--border-radius: 15px;\r\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t--color: white;\r\n  }\r\n\r\n  .boton-estado-1-x{\r\n\t--background: #d3d1d1;\r\n\t--background-activated: #7e7d7d;\r\n\t--background-hover: #9a8b87;\r\n\t--border-radius: 15px;\r\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t--color: white;\r\n  }\r\n\r\n  .boton-estado-2{\r\n\t--background: var(--blueGrayColor);\r\n  --background-activated: var(--blueGrayColor);\r\n  --background-hover: var(--blueGrayColor);\r\n\t--border-radius: 15px;\r\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t--color: white;\r\n  }\r\n\r\n  .boton-estado-3{\r\n\t--background: #a9d4a5;\r\n\t--background-activated: #819f7e;\r\n\t--background-hover: #819f7e;\r\n\t--border-radius: 15px;\r\n\t--box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\r\n\t--color: white;\r\n  }\r\n\r\n\t  ion-select::part(text) {\r\n\t\tfont-size: 1.2rem;\r\n\t  }\r\n\r\n\t  ion-spinner{\r\n\t\tposition: fixed;\r\n\t\t  top: 28%;\r\n\t\t  left: 40%;\r\n\t\t  z-index: 999;\r\n\t\t  width: 20%;\r\n\t\t  height: 20%;\r\n\t\t//background-color: #00213f;\r\n\t  }\r\n\t  \r\n\t  #loaderFooter{\r\n\t\tposition: fixed;\r\n\t\t  background: black;\r\n\t\t  opacity: 0.6;\r\n\t\t  height: 100vh;\r\n\t\t  width: 100vw;\r\n\t\t  z-index: 900;\r\n\t\t  bottom: 0;\r\n\t  }\r\n\r\n\t  ion-item-divider{\r\n\t\tbackground: #0090d0;\r\n\t\tcolor: aliceblue;\r\n\t}\r\n\r\n\t.empty-col{\r\n\t\tbox-shadow: none;\r\n\t\tborder: none;\r\n\t}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 89077:
/*!******************************************************!*\
  !*** ./src/app/fotoshn/fotoshn.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-spinner color=\"primary\" name=\"lines\" *ngIf=\"isLoading == true\"></ion-spinner>\r\n  <ion-footer id=\"loaderFooter\" *ngIf=\"isLoading == true\"></ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-grid class=\"ion-no-border\">\r\n        <ion-row>\r\n          <ion-col size=\"4\" style=\"box-shadow: none;\"></ion-col>\r\n          <ion-col size=\"4\" style=\"box-shadow: none;\">Informe Fotografico Atención # {{atencionId}}</ion-col>\r\n          <ion-col size=\"4\" style=\"box-shadow: none;\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <input #fotoInput type=\"file\" id=\"fileInput\" name=\"files[]\" hidden multiple accept=\"image/*\"/>\r\n  <input #videoInput type=\"file\" id=\"fileInputV\" name=\"filesv[]\" hidden multiple accept=\"video/*\"/>\r\n\r\n  <!--form>\r\n    <input #videoInputEntry type=\"file\" (change)=\"heyOmar($event)\" id=\"filesvid\" name=\"filesvid\" multiple accept=\"video/*\"/>\r\n    <button #subirVideoBoton type=\"submit\" class=\"btn btn-success pull-right\" id=\"SubirVideos\" (click)=\"'subirVideo($event)'\" hidden><i class=\"fa fa-save\"></i> Guardar</button>\r\n  </!--form -->\r\n\r\n  <form enctype=\"multipart/form-data\" style=\"height: 0;visibility: collapse;\">\r\n   \r\n    <ion-list>\r\n      <ion-item>\r\n        <input #uploadVideoInput id=\"uploadVideoInput\" type=\"file\" (change)=\"onFileSelected($event)\" name=\"entradaVideo\" accept=\"video/*\" hidden>\r\n        <button #subirVideoBoton ion-button (click)=\"onUpload()\" type=\"submit\" hidden>Subir Video</button>\r\n      </ion-item>\r\n      <!--ion-item>\r\n         <input name=\"Archivo\" type=\"file\" (change)=\"fileEvent($event)\" accept=\"video/*\">\r\n         <button ion-button (click)=\"onUpload()\" type=\"submit\">Subir Video Método Chele</button>\r\n      </ion-item -->\r\n    </ion-list>\r\n    \r\n    <input type=\"number\" placeholder=\"ID de Atención\" style=\"color: aliceblue;\" [(ngModel)]=\"atencionId\" name=\"entradaId\" hidden>\r\n    \r\n   \r\n  </form>\r\n\r\n  <ion-grid *ngIf=\"isVideo == true\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"12\" *ngFor=\"let item of videos;let i = index\">\r\n        <ion-card (click)=\"'openImg(item.Foto)'\" class=\"ion-no-margin background-size ion-no-padding\"\r\n            [ngStyle]=\"{'background-image': 'url('+'data:image/jpeg;base64, + item.Foto + )'}\"\r\n            style=\"width: 100%;height: 460px;\"\r\n            >\r\n\r\n            \r\n\r\n            <video id=\"videoDisplay\" controls=\"controls\" preload=\"metadata\" autoplay=\"autoplay\" webkit-playsinline=\"webkit-playsinline\" class=\"videoPlayer\"\r\n            style=\"width: 100%;height: 460px;\">\r\n              <source src=\"{{item}}\" type=\"video/mp4\" />\r\n             </video>\r\n\r\n            <!--img alt=\"Foto Siniestro\" src=\"'data:image/jpeg;base64,' + {{item.Foto}} + '\" [hidden]=\"true\" / -->\r\n            \r\n            <!-- Card Content -->\r\n            <ion-card-content class=\"transparent ion-no-padding\">\r\n              <ion-item class=\"transparent\" lines=\"none\" (click)=\"'deleteFoto(i)'\">\r\n\r\n                <ion-label class=\"ion-float-left\">\r\n                  <h2 class=\"text-size-lg\"></h2>\r\n                </ion-label>\r\n                <ion-icon class=\"icon icon-small\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card-content>\r\n            <ion-card-content>\r\n              <div class=\"audio-container\" hidden>\r\n                <audio controls=\"true\" preload=\"none\">\r\n                  <source type=\"audio/mpeg\" [src]=\"'{{item}}'\" />\r\n                  [unable to load audio]\r\n                </audio>\r\n              </div>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n          <ion-item>\r\n            <ion-label class=\"text-size-sm\" position=\"floating\">\r\n              Tipo de Fotografía</ion-label>\r\n              <ion-select class=\"text-size-xs\" [(ngModel)]=\"item.IdTipo\" multiple=\"false\" style=\"box-shadow: -3px 3px 7px lightgray;\">\r\n                <ion-select-option *ngFor=\"let tipo of tipoFotos;\" [value]=\"tipo.Id\">{{tipo.TipoFotografia}}\r\n                  \r\n                </ion-select-option>\r\n                <br>\r\n                <br>\r\n                <ion-select-option style=\"color: white;\">Ajustadores App</ion-select-option>\r\n                <br>\r\n              </ion-select>\r\n              <ion-input [hidden]=\"true\" #descripcionFoto [value]=\"item.Descripcion\"></ion-input>\r\n              <ion-input [hidden]=\"true\" #indexFoto [value]=\"i\"></ion-input>\r\n              <ion-input placeholder=\"Entra Una Descripción\"  [(ngModel)]=\"item.Descripcion\" class=\"form-control descripcion-entrada\" (ionBlur)=\"'entraDescripcionFoto(descripcionFoto.value, indexFoto.value)'\"></ion-input>\r\n            </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"isVideo == false\" fixed>\r\n    <ion-row>\r\n\r\n        <ion-col size=\"4\" size-md=\"4\" *ngFor=\"let item of fotos;let i = index\">\r\n          \r\n          <ion-card (click)=\"openImg(item.Foto)\" class=\"ion-no-margin background-size ion-no-padding\"\r\n            [ngStyle]=\"{'background-image': 'url('+'data:image/jpeg;base64,' + item.Foto + ')'}\"\r\n            style=\"width: 100%;\"\r\n            >\r\n\r\n            <img alt=\"Foto Siniestro\" src=\"'data:image/jpeg;base64,' + {{item.Foto}} + '\" [hidden]=\"true\" />\r\n            \r\n            <!-- Card Content -->\r\n            <ion-card-content class=\"transparent ion-no-padding\">\r\n              <ion-item class=\"transparent\" lines=\"none\" (click)=\"deleteFoto(i)\">\r\n\r\n                <ion-label class=\"ion-float-left\">\r\n                  <h2 class=\"text-size-lg\"></h2>\r\n                </ion-label>\r\n                <ion-icon class=\"icon icon-small\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n          <ion-item>\r\n            <ion-label class=\"text-size-sm\" position=\"floating\">\r\n              Tipo de Fotografía</ion-label>\r\n              <ion-select class=\"text-size-xs\" [(ngModel)]=\"item.IdTipo\" multiple=\"false\" style=\"box-shadow: -3px 3px 7px lightgray;\">\r\n                <ion-select-option *ngFor=\"let tipo of tipoFotos;\" [value]=\"tipo.Id\">{{tipo.TipoFotografia}}\r\n                  \r\n                </ion-select-option>\r\n                <br>\r\n                <br>\r\n                <ion-select-option style=\"color: white;\">Ajustadores App</ion-select-option>\r\n                <br>\r\n              </ion-select>\r\n              <ion-input [hidden]=\"true\" #descripcionFoto [value]=\"item.Descripcion\"></ion-input>\r\n              <ion-input [hidden]=\"true\" #indexFoto [value]=\"i\"></ion-input>\r\n              <ion-input placeholder=\"Entra Una Descripción\"  [(ngModel)]=\"item.Descripcion\" class=\"form-control descripcion-entrada\" (ionBlur)=\"entraDescripcionFoto(descripcionFoto.value, indexFoto.value)\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <br><br><br><br><br>\r\n  <ion-footer style=\"position: fixed; bottom: 0; left: 0; height: 78px; background: white;\">\r\n    \r\n    <ion-badge *ngIf=\"isVideo == false\" id=\"imagenesSubidas\" color=\"success\" style=\"position: fixed; left: 10px; bottom: 10px; width: 230px; padding: 15px; height: 46px; text-align: left;display: none;\" vertical=\"bottom\" horizontal=\"end\">\r\n      Imágenes subidas con éxito!\r\n    </ion-badge>\r\n    <ion-badge *ngIf=\"isVideo == false\" id=\"imagenesConteo\" color=\"warning\" style=\"position: fixed; left: 10px; bottom: 10px; width: 215px; padding: 15px; height: 46px; text-align: left;display: none;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <strong>{{imagenesSeleccionadas}}</strong> Imágenes seleccionadas\r\n    </ion-badge>\r\n\r\n    <ion-button *ngIf=\"isVideo == false\" color=\"warning\" id=\"buttonSubmit\" style=\"position: fixed; left: 230px; bottom: 7px;height: 46px; display: none;\" vertical=\"bottom\" horizontal=\"start\"\r\n    (click)=\"guardarFotos()\">Enviar</ion-button>\r\n\r\n    <ion-badge *ngIf=\"isVideo == true\" id=\"videosSubidos\" color=\"success\" style=\"position: fixed; left: 10px; bottom: 10px; width: 230px; padding: 15px; height: 46px; text-align: left;display: none;\" vertical=\"bottom\" horizontal=\"end\">\r\n      Videos subidas con éxito!\r\n    </ion-badge>\r\n    <ion-badge *ngIf=\"isVideo == true\" id=\"videosConteo\" color=\"warning\" style=\"position: fixed; left: 10px; bottom: 10px; width: 215px; padding: 15px; height: 46px; text-align: left;display: none;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <strong>{{videosSeleccionados}}</strong> Videos seleccionados\r\n    </ion-badge>\r\n\r\n    <ion-button *ngIf=\"isVideo == true\" color=\"warning\" id=\"buttonSubmitVideo\" style=\"position: fixed; left: 230px; bottom: 7px;height: 46px; display: none;\" vertical=\"bottom\" horizontal=\"start\"\r\n    (click)=\"subirVideoBoton.click()\">Enviar</ion-button>\r\n\r\n    <ion-fab *ngIf=\"true\" style=\"position: fixed; right: 218px;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button class=\"boton-estado-2\" (click)=\"clearPhotos()\">\r\n        <ion-icon style=\"font-size: 3rem;\" src=\"../../assets/img/clear-broom.svg\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab *ngIf=\"true\" style=\"position: fixed; right: 150px;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button id=\"displayPhotos\" class=\"boton-estado-2\" (click)=\"displayPhotos($event)\">\r\n        <ion-icon name=\"sync\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    \r\n    <ion-fab *ngIf=\"true\" style=\"position: fixed; right: 80px;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button class=\"boton-estado-1\" (click)=\"uploadVideoInput.click()\">\r\n        <ion-icon name=\"film\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab *ngIf=\"true\" style=\"position: fixed;\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button class=\"boton-estado-1\" (click)=\"openFilesInput()\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    \r\n  </ion-footer>\r\n</ion-content>\r\n<ion-modal class=\"Img\" #appointmentAlert [isOpen]=\"openFoto\">\r\n\t<ng-template>\r\n\t\t<ion-content (click)=\"openFoto=false\">\r\n\t\t\t<ion-img [src]=\"'data:image/jpeg;base64,'+foto\"></ion-img>\r\n\t\t</ion-content>\r\n\t</ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal #modalPrompt trigger=\"open-modal-prompt\" [initialBreakpoint]=\"0.75\" [breakpoints]=\"[0, 0.25, 0.5, 0.95]\"\r\n>\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-toolbar>Opciones Disponibles</ion-toolbar>\r\n      <ion-list>\r\n        <ion-item-divider>\r\n          <ion-label> Galería </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <ion-item (click)=\"openFilesInput()\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 3rem;\" name=\"images-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Abrir Galería</h2>\r\n            <p>Imágenes Precargadas</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item (click)=\"'videoInputEntry.click()'\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 3rem;\" name=\"film-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h2>Abrir Galería (Video)</h2>\r\n            <p>Videos Precargados</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <br>\r\n        <ion-item-divider>\r\n          <ion-label> Cámara </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item (click)=\"openCamera()\">\r\n          <ion-avatar slot=\"start\">\r\n            <ion-icon style=\"font-size: 3rem;\" name=\"camera-outline\"></ion-icon>\r\n          </ion-avatar>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"not\">\r\n                <ion-label>\r\n                  <h2>Abrir Cámara</h2>\r\n                  <p>Captura el Momento</p>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_fotoshn_fotoshn_module_ts.js.map