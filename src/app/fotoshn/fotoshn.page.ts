import { tipofotos } from './../interfaces/formulario';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, ToastController, Platform, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { foto } from '../interfaces/formulario';
import * as $ from 'jquery';  

@Component({
  selector: 'app-fotoshn',
  templateUrl: './fotoshn.page.html',
  styleUrls: ['./fotoshn.page.scss'],
})
export class FotoshnPage implements OnInit {
 // @ViewChild("modalPrompt", { static: true }) modalPrompt: ElementRef;

  foto:string='';  hoy: any = new Date().toISOString();  openFoto = false;  img: foto={};  fotos: foto[]=[];  tipoFotos: tipofotos[]=[];  reclamoData:any=[];
  fotoData:any=[];  videos:any=[];  atencionId:number;  nombreFirmante:any;  fDescripcion:any;  descripcionesVacias:any=[];  dedscripcionContainer:any;
  imagenesSeleccionadas:number=0;  videosSeleccionados:number=0;  fechaFirma:any;  isLoading:boolean=false;  esTablet:boolean=true;  isVideo:boolean=false;
  daPrompt:any;  conteo:number = 0;  contador:any=[];  fotosFromCamera:foto[]=[];  fotosFromGallery:foto[]=[];  fotosBorrar:any=[];  daImagen:any;  miFoto:any;
  process:number=1;  indexCamera: number;  videoFile: File;  archivo: FormData;  mensaje: any;  videoArray: any;  expediente: any; dVideoSize:any; videoDivisions:number=0;
  constructor(private router: Router,    private route:ActivatedRoute,    private loading: LoadingController,    private alert: AlertController,    private api: ApiService, 
    private toast: ToastController,    private toaster:ToastService,     private platform:Platform,    private modalPrompt:ModalController,
    private http: HttpClient) { 
      this.atencionId = parseInt(localStorage.getItem('idAtencion'));
      this.nombreFirmante = localStorage.getItem('nombreConductor');
      //this.fechaFirma = localStorage.getItem('fechaFirma'); this.fechaFirma = new Date().toISOString();
      this.fechaFirma = this.hoy;
    }

  ngOnInit() {
    this.fotos=[];
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.reclamoData = this.router.getCurrentNavigation().extras.state.data;
        console.table(this.reclamoData);
      }
    })

    this.getTipoFotos();
  }

  ionViewDidEnter(){
    let fotosLocal = JSON.parse(localStorage.getItem('fotos-'+this.atencionId));
    if (fotosLocal) {
      this.fotos = fotosLocal;

      if (this.fotos.length > 0) {
        this.imagenesSeleccionadas = this.fotos.length;
        this.isVideo = false;
        $('#imagenesConteo').fadeIn();
        $('#buttonSubmit').fadeIn();
      }else{
        this.isVideo = true; 
      }
    }
  }

  openImg(foto:string){
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }

  async openCamera(){
    this.conteo = this.fotosFromCamera.length; // 0

    if (this.fotosFromGallery.length > 0) {
      this.contador = this.fotosFromGallery.length;  

      if (this.conteo > 0) {
        this.indexCamera = this.contador + this.conteo;
        // for imagenes de la camara (conteo)
      }else{
        this.indexCamera = this.contador;
      }
      
    }else{
      this.contador = 0;
      if (this.conteo > 0) {
        this.indexCamera = this.conteo+1;
        // for imagenes de la camara (conteo)
      }else{
        this.indexCamera = this.conteo;
      }
    }
    
    this.esTablet = this.platform.is('android');
    this.modalPrompt.dismiss();
    const img = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });

    this.img.IdTipo=1;
    this.img.Tipo='Daño';
    this.img.Foto= img.base64String//.split(',')[1];
    this.img.Fecha = new Date().toISOString();
    this.img.Descripcion = '';
    this.img.NombreFirmante = this.nombreFirmante;
    this.img.Source = 1;
    this.fotosFromCamera.push(this.img);
    localStorage.setItem('Foto '+this.indexCamera, JSON.stringify(img));
    this.img={};

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

  onFileSelected(event){
    
    this.isVideo = true;
    this.videos = [];
    this.modalPrompt.dismiss();
    

    const fileInputVs = (document.getElementById("uploadVideoInput") as HTMLInputElement).files;
    this.videosSeleccionados = fileInputVs.length;

    setTimeout(() => {
      if (fileInputVs.length > 0) {
        
        this.videosSeleccionados = fileInputVs.length;
        
        $("#videosConteo").fadeIn('xslow');
        $("#buttonSubmitVideo").fadeIn('xslow');

        for (let index = 0; index < fileInputVs.length; index++) {
          this.fechaFirma = new Date().toISOString();
          const file = fileInputVs[index];
          let dSize = file.size;
          let videoType = file.type;
          //alert(videoType)
          this.dVideoSize = (Math.round(+dSize/1024)/1000).toFixed(2);


          if (this.dVideoSize > 16) {
            this.videoDivisions = parseInt(Math.ceil(this.dVideoSize/16).toFixed(0));
            this.toaster.presentToastNoButtonsRed('El tamaño del archivo excede los 16Mb, deberás dividirlo en '+this.videoDivisions+' partes.', 'top', 'video-upload');
          }else{
            this.toaster.dismissToast();
            this.isLoading = true;
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = e => {
              this.videos.push(e.target.result)
            };
            
    
            if (index == (fileInputVs.length-1)) {
              this.isLoading = false;
            }
          }
        }
        
      }else{}
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
      const formData: FormData = new FormData();
      formData.append('File', this.videoFile, this.videoFile.name);
      formData.append('IdAtencion', this.atencionId.toString());
      formData.append('IdProveedor', '3912');

      
  
      let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
      let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
      
      this.api.GuardarVideo(this.videoFile, this.atencionId).subscribe(
        (e) => {
//          alert(e.estado);
          let estado = e.estado;
          if (estado == true) {
            //alert("Ji vo")
            this.toaster.presentToastNoButtons("Video subido con éxito!", "top", "video-upload");
            $("#videosConteo").fadeOut();
            $("#buttonSubmitVideo").fadeOut();
            $("#videosSubidos").fadeIn();
          }else{
            this.toaster.presentToastNoButtonsRed("No es posible enviar el video, intenta nuevamente!", "top", "video-upload");
            //alert("No vo")
          }
          console.log(e.estado);
          console.log(e.mensaje);
          return e
        },
        (e) => {
          console.log("Error", e);
          return e;
        }
      )

      
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


  async openFilesInput(){
    this.isVideo = false;
    this.fotos = [];
    $("#fileInput").click();
    this.modalPrompt.dismiss();
    this.process = 2;

    document.getElementById('fileInput').addEventListener("click", function(evento) {
      evento.stopPropagation();
    }, false);

    $("#fileInput").on("change", evt => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();
      const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
      console.dir(fileInputs)
      $("#displayPhotos").click();
    });
  }

  heyOmar(event){
    let Evento = event;
    console.log(Evento)
    /*
    document.getElementById("filesvid").onchange = function(e: Event) {
      let file = (<HTMLInputElement>e.target).files[0];
      console.log(file)
      // rest of your code...
    }
    */
  }

  openFilesInputVideo(){
    this.isVideo = true;
    this.videos = [];
    $("#fileInputV").click();
    this.modalPrompt.dismiss();
    this.process = 2;

    $("#fileInputV").on("change", evt => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();

      console.dir(evt)

      const fileInputVs = (document.getElementById("fileInputV") as HTMLInputElement).files;
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
              this.videos.push(e.target.result)
            };
            
    
            if (index == (fileInputVs.length-1)) {
              this.isLoading = false
            }
            
          }
          
        }else{
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
    const fileInput = (document.getElementById("fileInput") as HTMLInputElement).files;
    
    
    //console.dir(fileInput)
    this.isLoading = true;

    setTimeout(() => {
      //console.log('mi fileinput')
      if (fileInput.length > 0) {
        //alert('mi fileinput')
        this.imagenesSeleccionadas = fileInput.length;
        $("#imagenesConteo").fadeIn('xslow');
        $("#buttonSubmit").fadeIn('xslow');
        
        for (let index = 0; index < fileInput.length; index++) {
          this.fechaFirma = new Date().toISOString();
          const file = fileInput[index];
  
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = e => {
            const b64 = e.target.result   
            this.daImagen = b64; 
            this.img.IdTipo=1;
            this.img.Tipo='Daño';
            this.img.Foto= this.daImagen.split(',')[1];
            this.img.Fecha = new Date().toISOString();
            this.img.Descripcion = '';
            this.img.NombreFirmante = 'Hola Firmante'//this.nombreFirmante;
            this.img.Source = 2;
            this.fotos.push(this.img);
            this.img={};
          };
  
          if (index == (fileInput.length-1)) {
            this.isLoading = false

            setTimeout(() => {
              localStorage.setItem('fotos-'+this.atencionId, JSON.stringify(this.fotos));
            }, 900);
            
          }
          
        }
        
      }else{
        $("#imagenesConteo").fadeOut('slow');
        $("#buttonSubmit").fadeOut('slow');
      }
    }, this.randomIntFromInterval(1, 5));
    

  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  guardarFotos(){
    this.toaster.dismissToast();
          let dedscripcionsContainer = document.getElementsByClassName('descripcion-entrada');
          for (let indexVacia = 0; indexVacia < dedscripcionsContainer.length; indexVacia++) {
            const elementResdtablecido = dedscripcionsContainer[indexVacia];
            elementResdtablecido
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
              }]

              this.api.GuardarFotos(this.fotoData).pipe( 
                finalize(async ()=>{
                  if (index == (this.fotos.length-1)) {
                    this.isLoading = false;
                  }
                })
              ).subscribe(
                async (res) =>{
                    let codigo = res.status;
                    if (index == (this.fotos.length-1)) {
                      this.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
                      $("#imagenesConteo").fadeOut("slow");
                      $("#buttonCancelImage").fadeOut("slow");
                      $("#buttonSubmit").fadeOut("slow");
                      $("#imagenesSubidas").fadeIn("xslow");
                      $("#buttonMore").fadeIn("xslow");
                      localStorage.setItem('fotosEnviadas-'+this.atencionId, 'true');
                    }
                },
                async (res) => {
                  let codigo = res.status;
                  this.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
                  localStorage.setItem('fotosEnviadas-'+this.atencionId, 'false');
                }
              )
            
              if (index == (this.fotos.length-1)) {
                console.log("Data de fotografia ");
                console.dir(this.fotoData);
              }
            }
          }else{
            this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
            localStorage.setItem('fotosEnviadas-'+this.atencionId, 'false');
          }
  }
  guardarFotosX(){
    this.descripcionesVacias = [];
    this.dedscripcionContainer = document.getElementsByClassName('descripcion-entrada');
    for (let indexDescripcion = 0; indexDescripcion < this.dedscripcionContainer.length; indexDescripcion++) {
      const element = this.dedscripcionContainer[indexDescripcion];
      let laDescripcion = $('.descripcion-entrada').eq(indexDescripcion).val();
      if (laDescripcion == '' || laDescripcion == null || laDescripcion == undefined) {
        element.setAttribute('style', 'color:red;border:2px solid red');
        this.descripcionesVacias.push(indexDescripcion);
      }else{
        element.setAttribute('style', 'color:inherit;border:2px solid inherit');
      }

      if (indexDescripcion == (this.dedscripcionContainer.length-1)) {
        if (this.descripcionesVacias.length > 0) {
          this.toaster.presentToastNoButtonsRed('Los siguientes campos no tienen descripción. Porfavor ingresa una descripción para continuar. Igualmente valida el tipo de fotografía.', 'top', 'descripcion');
        }else{
          this.toaster.dismissToast();
          let dedscripcionsContainer = document.getElementsByClassName('descripcion-entrada');
          for (let indexVacia = 0; indexVacia < dedscripcionsContainer.length; indexVacia++) {
            const elementResdtablecido = dedscripcionsContainer[indexVacia];
            elementResdtablecido
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
              }]

              this.api.GuardarFotos(this.fotoData).pipe( 
                finalize(async ()=>{
                  if (index == (this.fotos.length-1)) {
                    this.isLoading = false;
                  }
                })
              ).subscribe(
                async (res) =>{
                    let codigo = res.status;
                    if (index == (this.fotos.length-1)) {
                      this.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
                      $("#imagenesConteo").fadeOut("slow");
                      $("#buttonCancelImage").fadeOut("slow");
                      $("#buttonSubmit").fadeOut("slow");
                      $("#imagenesSubidas").fadeIn("xslow");
                      $("#buttonMore").fadeIn("xslow");
                    }
                },
                async (res) => {
                  let codigo = res.status;
                  this.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
                }
              )
            
              if (index == (this.fotos.length-1)) {
                console.log("Data de fotografia ");
                console.dir(this.fotoData);
              }
            }
          }else{
            this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
          }
     /**/

        }
      }
    }
    
  }
  

  getBase64(file, index) {
    console.dir(file)
    var reader = new FileReader();
    let img = [];
    reader.readAsDataURL(file);
    reader.onload = function () {
      img.push( {IdTipo:1, Tipo:'Daño', Foto: reader.result.toString(), Fecha : new Date().toISOString(), Descripcion : ''});
      if (index < 10) {
        localStorage.setItem('Foto '+index, JSON.stringify(img));  
      }
      
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  entraDescripcionFoto(descripcion, fIndex){
    console.log(descripcion+', '+fIndex);
    this.fotos[fIndex].Descripcion = descripcion;

    console.log(this.fotos[fIndex].IdAtencion);
  }

  checkPlatformForWeb() {
    if(Capacitor.getPlatform() == 'web') return true;
    return false;
  }

  deleteFoto(i:number ){
    this.fotos.splice(i,1);
    localStorage.removeItem('Foto '+i);
    this.imagenesSeleccionadas = this.imagenesSeleccionadas - 1;
    localStorage.setItem('fotos-'+this.atencionId, JSON.stringify(this.fotos));
  }

  clearPhotos(){
    const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
      console.dir(fileInputs)

      
      
  
          

    this.isLoading = true;
    this.toaster.dismissToast();
    $('#fileInput').empty();
    
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

  async getTipoFotos(){
    const load = await this.loading.create();
    await  load.present();
    
    this.api.ListTipoFoto().pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          this.tipoFotos= res;
      },
      async (res) => {
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
        });
        await alert.present();
      }
    )
  }
  
}
