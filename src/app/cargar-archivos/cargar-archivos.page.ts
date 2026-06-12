import { ApiService } from '../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { archivosTipo } from 'src/app/environments/arrays';
import { foto, video, pdf } from 'src/app/environments/arrays';
import { imagePrefix, pdfIconUrl } from 'src/app/environments/arrays';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as $ from 'jquery';
//import { ModalImagenPage } from 'src/app/Modales/modal-imagen/modal-imagen.page';
import { finalize, forkJoin } from 'rxjs';
import { ModalImagenPage } from '../Modales/modal-imagen/modal-imagen.page';
import { tipofotos } from '../interfaces/formulario';



@Component({
  selector: 'app-cargar-archivos',
  templateUrl: './cargar-archivos.page.html',
  styleUrls: ['./cargar-archivos.page.scss'],
})
export class CargarArchivosPage implements OnInit {
  
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  customActionSheetOptions = {cssClass: 'custom-action-sheet'}; customModalOptions = {cssClass: 'custom-select-modal'};
  isVideo: boolean | undefined;  fotos: foto[]=[]; tipoFotos: tipofotos[]=[];
  videos: video[]=[]; pdfs: pdf[]=[];
  loadValue:number = 0;  loadInterval: any; isLoadingItem:boolean=false; isLoading:boolean=false;
  archivoTipo: any; losArchivos:any = []; archivosTipo = archivosTipo
  cantidad: number | undefined;  daImagen: any;  img: foto={}; vid: video={}; pdf: pdf={};
  sizes: any = [];  gratestSize: number | undefined; sizesVids: any = [];
  sizesPdfs: any = [];  archivoTipoId: number | undefined;  items: any;
  canDismiss: boolean=false; idAtencion: any | undefined; esSolicitud:boolean=false;

  fotoData:any=[];  Expediente: any = []; fotoIdTipo:any;  tipo: number = 0; videoFile: File;
  videosData: any = [];

  constructor(private navCtrl: NavController, private route:ActivatedRoute, private router: Router,
    private toaster:ToastService, private myModal:ModalController, private api:ApiService, private loading: LoadingController,    
    private alert: AlertController
    ) { 
      
      this.esSolicitud = localStorage.getItem('esSolicitud') == 'true';
      this.idAtencion = localStorage.getItem('idAtencion');
      
    }

  ngOnInit() {

    setTimeout(() => {
      const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
      if (fileInputs) {
        for (let index = 0; index < fileInputs.length; index++) {
          const element = fileInputs[index];
          $('progress').eq(index).remove();
        }
      }

    }, 900);

    this.getTipoFotos();
  }

  ngAfterViewInit() {
    const el:any = document.getElementById('sortable-list');
    

  }

  goBack() {
    localStorage.setItem('homeOrigen', 'false');
    this.navCtrl.back();
  }

  handleFileModal(tipo:any, file: any, index:number){
    void 0;
    void 0;
    let daFile = file.Foto;
    
    //self.alert('Tipo : '+tipo+', index : '+index)

    if (tipo==2) {
      //this.openModalSetVideo(file, index);
    }else{
      this.openModalImagen(daFile.split(',')[1], 2, index, file.Descripcion);
    }
  }

  async openModalImagen(foto:string, tipo:number, index:any, descripcion:any) {
    void 0;
    
  
    void 0;
    const modal = await this.myModal.create({
      component: ModalImagenPage,
      componentProps: { foto:foto, tipo:tipo, index:index, descripcion:descripcion, delete:false },
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 1,
      cssClass: 'modal-imagen',
      canDismiss: this.canDismiss
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');
      $('ion-modal').attr('style', '--height:100%; transition: height 0.25s ease-in;');
      
    }, 900);

    modal.onDidDismiss().then(() => {
      void 0;
      let newDescription:any = localStorage.getItem('newDescription');
      let descriptionIndex:any = localStorage.getItem('descriptionIndex');
      let daIndex = parseInt(descriptionIndex);

      
      this.fotos[daIndex].Descripcion = newDescription;
      $('.chip-descripcion').eq(daIndex).text(newDescription);

      localStorage.setItem('fotos', JSON.stringify(this.fotos));
    });

    setTimeout(() => {}, 6000);
    await modal.present();
    
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
    console.log('El video '); console.dir(this.videoFile);

    if (this.videoFile && this.idAtencion) {
  
      let thisThing = "https://testportal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive";
      let thisLocal = "http://localhost:18951/help_CargaDeArchivos/UploadArchive";
      
      this.api.GuardarVideo(this.videoFile, this.idAtencion).subscribe(
        (e) => {
          let estado = e.estado;
          if (estado == true) {
            this.toaster.presentToastAlert("Video cargado exitosamente!", 'middle', 'primary', 3000);
            this.isLoading = false;
          }else{
            this.toaster.presentToastNoButtonsRed("No es posible enviar el video, intenta nuevamente!", "top", "video-upload");
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

  uploadVideosNo(){
    void 0;
    void 0
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

  randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  loadingFiles(){
    this.isLoadingItem = true;
    let sizesArray:any=[];

    
    
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
            $('progress').eq(index).val(this.loadValue);
            void 0;
            $('progress').eq(index).attr('max', sizesArray[index]);

            void 0
            void 0

            if (this.gratestSize && (this.loadValue > this.gratestSize)) {
              clearInterval(this.loadInterval)
              this.isLoadingItem = false;
              //this.toaster.presentToaster('Archivos subidos con éxito!', 'top', 'primary', 3000, false);
            }
          }, 300);

          if (index == (lasProgres.length-1)) {}
        }
        
      }
    }, 3000);

    setTimeout(() => {}, 10000);
  }

  
  findLargestSize(array:any){
    void 0;
    void 0

    var largest = array[0];

    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest ) {
        largest = array[i];
      }

      if (i < (array.length-1)) {
        return largest;
      }
    }
  }

  openModalSetVideoNo(video: any, index:number){
    void 0;
    void 0;
    $('#open-modal').click();
  }

  goTo(index: any, array:any) {
    void 0;
    void 0;

    if (index == 1) {
      localStorage.setItem('dArray', JSON.stringify(array[0].Video));
    }
    if (index != 1) {
      localStorage.setItem('dArray', JSON.stringify(array));
    }
    
    let screen = archivosTipo[index].actionUrl;
    this.router.navigateByUrl(screen);
  }

  async abrirCamara() {
    this.isVideo = false;
    this.fotos = [];
    this.sizes = [];
    this.cantidad = 0;
    this.archivoTipo = archivosTipo[0].tipo;
    this.archivoTipoId = 0;

    try {
      const img = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Base64
      });

      if (!img.base64String) {
        return;
      }

      const size = img.base64String.length * (3 / 4);
      const sizeInMB = (size / (1024 * 1024)).toFixed(2);

      this.fotos.push({
        IdTipo: 1,
        Tipo: this.archivoTipo,
        Foto: imagePrefix + img.base64String,
        Fecha: new Date().toISOString(),
        Nombre: 'Ficohsa_' + new Date().getTime() + '.jpeg',
        Descripcion: 'Imagen para evidencia. Aquí puedes agregar una descripción.',
        Size: size,
        SizeMb: sizeInMB
      });

      this.sizes.push(size);
      this.cantidad = this.fotos.length;
      $('#loadingHeader').fadeIn();
      $('#title-list').fadeIn();
      
      localStorage.setItem('fotos', JSON.stringify(this.fotos));
    } catch (error) {
      this.toaster.presentToastNoButtons('No se pudo abrir la cámara.', 'top', 'fotos');
    }
  }

  handleSave(tipo:any, idAtencion:any){
    this.isLoading = true;
    if (tipo == 0) {
      this.savePhotos(idAtencion);
    }else{
      this.uploadVideos();
    }
  }

  savePhotos(idAtencion: any) {
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

    console.log('Mis fotos son '); console.dir(this.fotos);

    
    const requests = this.fotos.map((element) => {
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

    forkJoin(requests).subscribe(
      async () => {
        this.isLoading = false;
        this.toaster.presentToastNoButtons('Fotos subidas con éxito!', 'top', 'fotos');
      },
      async (error) => {
        const codigo = error?.status || 'No se pudieron subir las fotos.';
        this.toaster.presentToastNoButtons(codigo, 'top', 'fotos');
      }
    );
    /**/
  }

  async confirmDeleteFoto(index: number, event?: Event){
    event?.preventDefault();
    event?.stopPropagation();

    if (!this.fotos[index]) {
      return;
    }

    const alert = await this.alert.create({
      cssClass: 'delete-menu-alert',
      header: 'Conservar/Eliminar imagen',
      message: 'Esta imagen se quitará de la lista seleccionada. ¿Deseas eliminarla?',
      
      buttons: [{
        text: 'Limpiar Caché',
        cssClass: 'logout-menu-button logout-menu-cache'
      },
      {
        text: 'Conservar',
        role: 'cancel',
        cssClass: 'logout-menu-button logout-menu-cancel'
      } ,
      {
        text: 'Eliminar',
        role: 'confirm',
        cssClass: 'logout-menu-button logout-menu-danger',
        handler: () => { this.deleteFoto(index) }
      }
      ]
    });

    await alert.present();
  }

  deleteFoto(index: number){
    if (!this.fotos[index]) {
      return;
    }

    this.fotos.splice(index, 1);
    this.sizes.splice(index, 1);
    this.refreshSelectedFilesState();
  }

  refreshSelectedFilesState(){
    this.cantidad = this.fotos.length + this.videos.length + this.pdfs.length;
    this.gratestSize = this.sizes.length ? Math.max(...this.sizes.map((size:any) => Number(size))) : undefined;

    if (this.fotos.length == 0) {
      const fileInput = document.getElementById("fileInput") as HTMLInputElement;
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

  async openFilesInput(type: any){
    

    this.cantidad = 0;
    this.tipo = type;
    let lasProgres = document.getElementsByTagName('progress');
    const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
    if (fileInputs) {
      for (let index = 0; index < fileInputs.length; index++) {
        const element = fileInputs[index];
        $('progress').eq(index).remove();
      }
    }

    this.archivoTipo = archivosTipo[type].tipo;
    this.archivoTipoId = type;

    if (type == 0) {
      this.isVideo = false;
      this.fotos = [];
      this.sizes = [];
      $("#fileInput").click();
      $("#fileInput").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputs = (document.getElementById("fileInput") as HTMLInputElement).files;
        this.cantidad = fileInputs?.length;
        this.losArchivos = fileInputs;
        void 0;
        void 0;
        setTimeout(() => {
          if (this.cantidad && this.cantidad > 0) {
            for (let index = 0; index < this.cantidad; index++) {

              if(fileInputs){
                const file = fileInputs[index];
                let sizeInMB = (file.size / (1024*1024)).toFixed(2); 
                var reader = new FileReader();
                reader.readAsDataURL(file);
      
                reader.onload = e => {
                  if (e.target) {
                    const b64 = e.target.result;
                    this.daImagen = b64; 
                    
                    const nuevaImagen = {
                      IdTipo: type,
                      Tipo: this.archivoTipo,
                      Foto: this.daImagen,
                      Fecha: new Date().toISOString(),
                      Nombre: file.name,
                      Descripcion: 'Imagen para evidencia. Aquí puedes agregar una descripción.',
                      Size: file.size,
                      SizeMb: sizeInMB
                    };
                    


                    this.fotos.push(nuevaImagen);
                    this.sizes.push(file.size);
                    
                  }
                  
                  if (index == (fileInputs.length-1)) {
                    $('#loadingHeader').fadeIn();
                    $('#title-list').fadeIn();
                    
                    localStorage.setItem('fotos', JSON.stringify(this.fotos));
                    this.gratestSize = this.findLargestSize(this.sizes);
                  }
                }; 
              }
            }
            
          }else{
            $("#imagenesConteo").fadeOut('slow');
            $("#buttonSubmit").fadeOut('slow');
          }
        }, this.randomIntFromInterval(1, 5));
        
        
        setTimeout(() => {
          
        }, 900);
        
      });
    }

    if (type == 1) {
      this.isVideo = true;
      this.fotos = [];
      this.videos = [];
      $("#fileInputV").click();
      $("#fileInputV").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputVs = (document.getElementById("fileInputV") as HTMLInputElement).files;
        this.cantidad = fileInputVs?.length;
        this.losArchivos = fileInputVs;
        void 0;
        void 0;
        setTimeout(() => {
          if (fileInputVs && fileInputVs.length > 0) {
            
            for (let index = 0; index < fileInputVs.length; index++) {
              const file = fileInputVs[index];
              this.videoFile = file;
              let sizeInMB = (file.size / (1024*1024)).toFixed(2); 

              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = e => {
                if (e.target?.result) {
                  const elVideo = e.target.result;
                  
                  this.vid.IdTipo = type;
                  this.vid.Tipo = this.archivoTipo;
                  this.vid.Video = elVideo.toString();
                  this.vid.Fecha = new Date().toISOString();
                  this.vid.Descripcion = file.name;
                  this.vid.Size = file.size;
                  this.vid.SizeMb = sizeInMB;
                  this.vid.SerieId = 0;
                  this.videos.push(this.vid);
                  this.sizesVids.push(file.size);
                  this.vid={};
                }
              };

              if (index == (fileInputVs.length-1)) {
                $('#loadingHeader').fadeIn();
                $('#title-list').fadeIn();
                
                void 0;
                void 0;

                this.gratestSize = this.findLargestSize(this.sizesVids);
              }
              
            }
            
          }else{}
        }, this.randomIntFromInterval(1, 5));
        
        setTimeout(() => {
          
        }, 900);
        
      });
    }

    if (type == 2) {
      this.isVideo = false;
      this.pdfs = [];
      $("#fileInputP").click();
      $("#fileInputP").on("change", evt => {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        const fileInputsP = (document.getElementById("fileInputP") as HTMLInputElement).files;
        this.cantidad = fileInputsP?.length;
        this.losArchivos = fileInputsP;
        void 0;
        void 0;

        setTimeout(() => {
          if (this.cantidad && this.cantidad > 0) {
            for (let index = 0; index < this.cantidad; index++) {
              if(fileInputsP){
                const file = fileInputsP[index];
                let sizeInMB = (file.size / (1024*1024)).toFixed(2); 
                var reader = new FileReader();
                reader.readAsDataURL(file);
      
                reader.onload = e => {
                  if (e.target) {
                    const b64 = e.target.result;
                    this.daImagen = b64?.toString().split(',')[1]; 
                    this.pdf.IdTipo=type;
                    this.pdf.Tipo=this.archivoTipo;
                    this.pdf.Pdf= pdfIconUrl;
                    this.pdf.Fecha = new Date().toISOString();
                    this.pdf.Descripcion = file.name;
                    this.pdf.Size = file.size;
                    this.pdf.SizeMb = sizeInMB;
                    this.pdfs.push(this.pdf);
                    this.sizesPdfs.push(file.size);
                    this.pdf={};   
                  }
                  
                  if (index == (fileInputsP.length-1)) {
                    $('#loadingHeader').fadeIn();
                    $('#title-list').fadeIn();
                    
                    this.gratestSize = this.findLargestSize(this.sizesPdfs);
                  }
                }; 
              }
            }
            
          }else{
            $("#imagenesConteo").fadeOut('slow');
            $("#buttonSubmit").fadeOut('slow');
          }
        }, this.randomIntFromInterval(1, 5));

        
        
        setTimeout(() => {
          this.router.navigateByUrl("comments");
        }, 900);
        
      });
    }

    
  }

  seleccionarTipoDeFoto(){
    alert(this.fotoIdTipo)
  }

  guardarArchivos(){
    
    

    setTimeout(() => {
      
      
      
      this.goBack();
    }, 900);
    

    if (this.fotos.length > 0) {
      
      
      

      for (let index = 0; index < this.fotos.length; index++) {
        
      }
      
      
      
      

      
    }else{
      this.toaster.presentToastNoButtons("Necesitas cargar una imagen o más para guardarlas.", "top", "fotos");
    }
    
  }
  
}
