import { Injectable } from '@angular/core';
import { ToastController,LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})



export class ToastService {
  
  lasAtenciones:any=[];
  siniestroTercero:any=[];
  toastMessage:any; toastPosition:any; toastClass:any
  constructor(private toaster:ToastController, private miApi:ApiService, private loading: LoadingController, private router: Router) { 
    this.toastMessage = 'PORSALUD 360';
    this.toastPosition = 'top';
    this.toastClass ='por-salud';
  }
  async dismissToast(){
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
  }
  
  async presentToastReload(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 2000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
  
  
    await toast.present();
  }

  async presentToastNoButtons(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 10000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
  
  
    await toast.present();
  }

  async presentToastAlert(message, position, clase, duration) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: clase,
      duration: duration,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
  
  
    await toast.present();
  }

  async presentToastNoButtonsRed(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
        this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 60000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
        }
      ],
    });
  
  
    await toast.present();
  }

  /*
  
  */

  async presentToastArrival(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
        this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'success',
      duration: 360000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
//            this.location.back()
          }
        },
      ],
    });
  
  
    await toast.present();
  }

  async presentToast(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 45000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
        },
        {
          text: 'SI',
          role: 'confirm',
          handler: () => {
//            this.location.back()
            window.location.reload()
          }
        },
      ],
    });
    
  
  
    await toast.present();
  }


  async presentToastAdeuda(message, position, clase, atencionId) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'SALIR',
          role: 'cancel',
          handler: () => {
            window.location.reload()
          }
        },
        {
          text: 'IR A PDF',
          role: 'confirm',
          handler: () => {
            window.open('https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/DownloadReconocimientoDeDeuda/'+atencionId , '_blank');
          }
        },
      ],
    });
    
  
  
    await toast.present();
  }

  //presentToastSaveCliente
  async presentToastSaveCliente(message, position, clase, idAtencion) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    //let laPlaca = data.NumeroPlaca;
    //let laAtencion = data.Id;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO SALIR',
          role: 'cancel'
        },
        {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion } });
            //window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }

  async presentToastSiniestroGuardado(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    //let idAtencion = data;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,// + idAtencion,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'LISTO',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ],
    });
    await toast.present();
  }

  async presentToastSave(message, position, clase, data) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    let laPlaca = data.NumeroPlaca;
    let laAtencion = data.Id;
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO SALIR',
          role: 'cancel'
        },
        {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }

  async presentToastHome(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO SALIR',
          role: 'cancel'
        },
        {
          text: 'SALIR',
          role: 'reload',
          handler: () => {
            window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }

  async presentToastSavedDebt(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'LISTO, GRACIAS!',
          role: 'cancel'
        },
        {
          text: 'DESCARGAR COPIA',
          role: 'reload',
          handler: () => {
            
            window.location.reload()
          }
        },
      ],
    });
    await toast.present();
  }
  

  async presentToastErrorConexion(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'dark',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastSiniestroCerrado(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastSiniestroCancelado(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'warning',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastEditSig(message, position, clase) {
    let editResponse:boolean;
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler() {
            this.editResponse = false;
            localStorage.setItem('editResponse', this.editResponse);
          },
        },
        {
          text: 'EDITAR FIRMA',
          role: 'confirm',
          handler() {
            this.editResponse = true;
            localStorage.setItem('editResponse', this.editResponse);
          },
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastEmailInvalid(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastDataMissing(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'SALIR',
          role: 'cancel',
        },
        {
          text: 'AGREGAR DATOS',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }

  async presentToastDataMissingExpediente(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
      ],
    });
  
    await toast.present();
  }
}
