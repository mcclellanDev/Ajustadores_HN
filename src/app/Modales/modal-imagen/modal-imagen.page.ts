import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Keyboard } from '@capacitor/keyboard';
import { IonModal, NavParams } from '@ionic/angular';
import { foto, imagePrefix } from 'src/app/environments/arrays';
import { fotoTipos } from '../../interfaces/user';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.page.html',
  styleUrls: ['./modal-imagen.page.scss'],
})
export class ModalImagenPage implements OnInit {

  @ViewChild(IonModal, { static: true }) modal!: IonModal;
  user:any=null;  fotoTipo: any;  foto?: string;  openFoto?: boolean; elEstado:any; elEstadoUnidad:any;
  razonesAsignacion:any=[]; agentStatus?:boolean; isAgentLoaded:boolean=false; isLoading:boolean=false;
razonesAsignacionUnidad: any = []; isStart:boolean = true; agentStatusColor:any; unitStatusColor:any; canDismiss:boolean=false;  tipo?: number;  agentEstado: any;
  miUnidad: any = [];  unitStatus?: boolean; img: foto={}; fotos: foto[]=[]; dataFoto:any=[]; imagePrefix:any=imagePrefix;

  descripcion: any; imageHeight:any='60%'; descripcionX:any; descriptionIndex: any;  delete: boolean;
  
  constructor(public navParams : NavParams) {
    this.foto = 'data:image/jpeg;base64,'+navParams.get('foto');
    this.descripcion = navParams.get('descripcion');
    this.descriptionIndex = navParams.get('index');
    let tipo:any = navParams.get('tipo');
    this.delete = navParams.get('delete');
    
   }

  ngOnInit() {
    Keyboard.addListener('keyboardDidShow', info => {
      void 0;
      this.imageHeight = '35%';
    });
    Keyboard.addListener('keyboardDidHide', () => {
      void 0;
      this.imageHeight = '60%';
    });
  }

  dismissModal(){
    this.modal.canDismiss = true;
    void 0
    if (this.modal) {
      this.modal.dismiss();
    }
  }

  async abrirGaleria(){
    
    this.canDismiss = false;
    const img = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Photos,
      resultType: CameraResultType.Base64
    });
    this.foto= img.base64String;
    void 0
  
    setTimeout(() => {
      if (this.foto) {
        this.canDismiss = true;
      }  
    }, 1000);
    
  }

  async abrirCamara(){
    
    const img = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });
    this.img.IdTipo=2;
    this.img.Tipo='Otro';
    this.img.Foto= img.base64String
    this.foto = img.base64String;
    this.fotos.push(this.img);
    this.dataFoto.push(
        {Fotografia:this.imagePrefix+this.img.Foto, IdAgente:this.user.ProveedorAgenteId}
      )
    this.img={};
    setTimeout(() => {
      if (this.foto) {
        this.canDismiss = true;
      }  
    }, 1000);
    
  }

  setNewDescription(){
    void 0;
  }

  saveNewDescription(){
    void 0;
    void 0;
    
    localStorage.setItem('newDescription', this.descripcionX);
    localStorage.setItem('descriptionIndex', this.descriptionIndex);

    this.dismissModal();
  }

}
