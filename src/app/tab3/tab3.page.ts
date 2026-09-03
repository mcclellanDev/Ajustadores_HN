import { AlertController, Platform } from '@ionic/angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Atenciones } from './../interfaces/atenciones';
import { Camera, CameraResultType } from '@capacitor/camera';
import { foto } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastService } from '../services/toast.service';
import { imagePrefix, emptySignature, emptySignatureWhite, banderaPais } from '../environments/default-images';
import SignaturePad from 'signature_pad';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user:any=null;
    //Firma
    @ViewChild("canvas3", { static: true }) canvas: ElementRef;
    sig: SignaturePad;

  miPais:any; elUsuario:any=[];   foto:string='';  openFoto = false;  codigoPais :any;  banderaPais:string=banderaPais;
  deviceWidth:any;  deviceHeight:any;  laLocalidad:any;  atenciones:Atenciones[];  firmasAsegurados:any=[];
  fotos: foto[]=[];  img: foto={};  dataFoto:any=[];  firma:any=[];  firmaObtenida:any=[];
  fotoData:any=[];  isSignature:boolean = false;  isLoading:boolean = false;  isSign:boolean = false;
  firmaPrecargadaAjustador:any;  firmaDemo:any;  atIndex:any;  atIndexId:any=0;  atIndexInit:any;
  lasAtenciones:any=[];  atencionId:any;  nombreFirmante:any;  fechaFirma:any;  esTablet:boolean=true;
  isLogout:boolean=false;  daPrompt:any;  imagePrefix:any=imagePrefix;  firmaPrecargadaInspector: string;
  idAjustador: any;  ajustadorNombre: any; cardWidth: any;canvasInterval: any; canvasAseguradoWidth: any = 0;
  emptySignatureWhite = emptySignatureWhite;
  emptySignature = emptySignature;

  constructor(private api: ApiService,
    private alert: AlertController,
    private platform:Platform,
    private so: ScreenOrientation,
    private tostador: ToastService,
    private router: Router) {
      this.getCountry();
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width()-90;
    }else{
      this.deviceWidth = this.platform.width()-100;
    }
    
    this.tostador.dismissToast();
    this.user = this.api.currentUser;
    this.atencionId = localStorage.getItem('idAtencion');
        
  }

  ngOnInit(){
    localStorage.setItem('origin', window.location.pathname);
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    //this.sig.minWidth = 1;
    //this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;

    this.sig.fromDataURL(emptySignatureWhite);

    setTimeout(() => {
      this.sig.clear();
    }, 1000);

  }

  ionViewDidEnter() {
    this.getCanvasWidth();
    this.firmarInspector();
  }

  getCanvasWidth() {

    this.cardWidth = (document.getElementById('cardFirmaAjustador').clientWidth);
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.cardWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.cardWidth - 50;
    }
  }

  async cerrarSesion(){
    const alert = await this.alert.create({
          cssClass: 'profile-menu-alert',
          header:'HELP Ajustadores',
          message:'Selecciona una accion para continuar.',
          buttons:[{
            text:'Cerrar sesión',
            cssClass: 'profile-menu-danger',
              handler: ()=> {
                this.isLogout = true; 
                localStorage.setItem('isLogout', this.isLogout.toString());
                this.api.logout();
            }
          },
          {
            text:'Continuar',
            role:'cancel',
            cssClass: 'profile-menu-cancel'
          },
          {
            text:'Cambiar Contraseña',
            role:'confirm',
            cssClass: 'profile-menu-password',
            handler: ()=> {this.goPasswordChange()}
          }
        ]
    });
    alert.present();
  }

  openImg(foto:string){
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }

  async getCountry(){
    console.log('getCountry')
    if (this.platform.is('android')) {
      this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
      this.miPais = this.laLocalidad[0].countryCode;
      localStorage.setItem('codigoPais', this.miPais);
      localStorage.setItem('latitud', this.laLocalidad[0].latitude);
      localStorage.setItem('longitud', this.laLocalidad[0].longitude);
      this.isLoading = false;
      if(this.miPais == "HN"){
        this.banderaPais='../../assets/img/flag-round-hn.png';
      }else if(this.miPais == "GT"){
        this.banderaPais = '../../assets/img/flag-round-gt.png';
      }
      this.isLoading = false;
    }else{
      this.banderaPais='../../assets/img/flag-round-hn.png';
      console.log('Tengo esta bandera : '+this.banderaPais)
      this.miPais = 'HN';
      localStorage.setItem('codigoPais', this.miPais);
      this.isLoading = false;
    }
    
  }

  identificarPais(){
    this.miPais = localStorage.getItem('codigoPais');
    if (this.miPais == "HN"){
      this.codigoPais = 'hn';
      this.banderaPais = '../../assets/img/flag-round-hn.png';
    }else if(this.miPais == "GT"){
      this.banderaPais = '../../assets/img/flag-round-gt.png';
      this.codigoPais = 'gt';
    }
  }

  clear() {
    this.sig.clear();
    this.isSignature = false;
  }

  limpiarCache() {
    for (let index = 0; index < this.atenciones.length; index++) {
      const element = this.atenciones[index];
      this.firmasAsegurados.push({ 'atencionId': element.IdAtencion, 'firma': emptySignature });
    }
    localStorage.removeItem('dSignatureAsegurado');
    localStorage.removeItem('firmasAsegurados');
    localStorage.removeItem('miLocalidad');
    localStorage.removeItem('coordinates');
    localStorage.removeItem('codigoPais');
    localStorage.removeItem('nombrePais');
    window.location.reload();
  }

  saveSignatureAjustadorBackup(){
    this.isLoading = true;
    const firmaPayload = [{
      IdAtencion: this.atencionId,
      RefTipoFotoId:3,
      Foto: this.firmaPrecargadaAjustador.split(',')[1]
    }];

    this.api.GuardarFirmaAsegurado(firmaPayload).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
      (res) =>{
        console.log(res,'token respuesta');
        alert($('#reloadSignatureButton').length);
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        $('#reloadSignatureButton').click();
      },
      async (res) => {
        this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
      }
    )
}

saveSignature(){
  this.isLoading = true;
this.sig.backgroundColor = "rgb(255, 255, 255)";
this.sig.minWidth = 1;
this.sig.maxWidth = 1.5;
this.sig.dotSize = 3;
const mySignature =this.sig.toDataURL("image/png");

if(mySignature != emptySignature){
    this.firmaPrecargadaAjustador = this.sig.toDataURL("image/jpeg");
    this.firmaPrecargadaInspector = this.sig.toDataURL("image/jpeg");
    localStorage.setItem("dSignature", this.firmaPrecargadaAjustador.toString());
    this.firmaObtenida = {
      IdAgente: this.api.currentUser.ProveedorAgenteId,
      Firma: this.firmaPrecargadaAjustador.split(',')[1]
    }

    this.api.GuardarFirmaAjustador(this.firmaObtenida).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
      (res) =>{
        console.log(res,'token respuesta');
        this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        this.sig.clear();
      },
      async (res) => {
        this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
      }
    )
}else{
  this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
}
}

recargarFirma(){
  this.firmaPrecargadaAjustador = localStorage.getItem("dSignature");
  alert(this.firmaPrecargadaAjustador)
}

firmarInspectorNO(){
  this.firmaPrecargadaInspector = imagePrefix+this.elUsuario.Firma;
}

async abrirCamara(){
  this.isLoading = true;
  try {
    const img = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64
    });

    if (!img?.base64String) {
      this.isLoading = false;
      return;
    }

    this.img.IdTipo=2;
    this.img.Tipo='Otro';
    this.img.Foto= img.base64String//.split(',')[1];
    this.fotos.push(this.img);
    this.dataFoto.push(
        {Fotografia:this.imagePrefix+this.img.Foto, IdAgente:this.user.ProveedorAgenteId}
      )
    this.img={};

    for (let index = 0; index < this.fotos.length; index++) {
      const element = this.fotos[index];

      if (index == (this.fotos.length-1)) {
        console.log("La foto del ajustador ");
        console.dir(this.dataFoto)

        this.api.GuardarFotoAjustador(this.dataFoto).pipe(
          finalize(async ()=>{
            this.isLoading = false;
          })
        ).subscribe(
           async (res) =>{
              let codigo = res.status;
              this.tostador.presentToastNoButtons('Fotografía actualizada con éxito! Si tienes sesión abierta en otro dispositivo, deberás reiniciar la sesión para ver el cambio', 'top', 'foto');
              this.user.Foto = this.imagePrefix+img.base64String;
              document.getElementById('avatarPerfil')?.setAttribute('style', 'filter:none');
              //alert(codigo)
          },
          async (res) => {
            let codigo = res.status;
            this.tostador.presentToastDataMissing('No fue posible actualizar la fotografía del ajustador.', 'top', 'foto');
          }
        )
      }

    }
  } catch (error) {
    console.log('Selección de fotografía cancelada o no completada', error);
    this.isLoading = false;
  }
}

goPasswordChange(){
  const email = this.api.currentUser?.Correo
    || localStorage.getItem('correoActual')
    || '';

  this.router.navigate(['./recovery'], {
    state: {
      email,
      fromApp: true
    }
  });
}

async firmarInspector(){
  let usuarioActual:any = localStorage.getItem('correoActual');
  let passwordActual:any = localStorage.getItem('passwordActual');

  //alert(usuarioActual + ', ' + passwordActual + ' usuario y password actual');
  let sendData = {
    User: usuarioActual,
    Password: passwordActual
  }

  this.api.login(sendData).subscribe(
    async (res) => {
      console.log(res, 'login response');
      if (res.status == 200) {
        //this.firmaPrecargadaInspector = imagePrefix + res.Firma;
        
      }
    },
    async (res) => {
      console.log(res, 'error login');
    }
  );

  setTimeout(() => {
    let usuarioActual:any = localStorage.getItem('ajustadorActual');
    let miUsuario = JSON.parse(usuarioActual);
    let firmaAlmacenada = miUsuario.Firma;
    console.log(firmaAlmacenada, 'firma almacenada');

    if (firmaAlmacenada) {
      this.firmaPrecargadaInspector = imagePrefix + firmaAlmacenada;
      console.log(this.firmaPrecargadaInspector, 'firma precargada inspector');
    }
  }, 600);

  this.elUsuario = this.api.currentUser;
  
  this.idAjustador = this.elUsuario.ProveedorAgenteId;

  // aqui
  this.ajustadorNombre = this.elUsuario.NombreAgente;
  localStorage.setItem('ajustadorNombre', this.ajustadorNombre);
  
  let nombreAjustador = localStorage.getItem('ajustadorNombre');
  $('#ajustadorNombre').val(nombreAjustador);
    setTimeout(() => {}, 2000);

  
}


}
