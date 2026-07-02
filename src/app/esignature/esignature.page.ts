import { ToastService } from 'src/app/services/toast.service';
import { ViewChild, ElementRef } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { finalize } from 'rxjs/operators';
import { AjustadorhnPage } from '../ajustadorhn/ajustadorhn.page';
import { emptySignature, emptySignatureWhite, firmaDemoAjustador } from '../environments/signatures';
import { ApiService } from '../services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { logoFicohsa } from '../environments/default-images';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-esignature',
  templateUrl: './esignature.page.html',
  styleUrls: ['./esignature.page.scss'],
})
export class EsignaturePage implements OnInit {
  @ViewChild("canvas6", { static: true }) canvas: ElementRef;
  hoy: any = new Date().toISOString();
  isLoading:boolean=false;
  firmaPrecargada:any;
  elCliente:string="";
  atIndex:any;
  deviceWidth:any;
  canvasHeight = 150;
  idAtencion:any;
  sig: SignaturePad;
  component=AjustadorhnPage;
  wait: any;
  fsLogo: string;
  constructor(private platform:Platform, private navController:NavController, private api:ApiService, private tostador:ToastService,
    private router: Router, private deviceService: DeviceService) { 
      this.fsLogo = logoFicohsa
    this.idAtencion = localStorage.getItem('idAtencion');
    this.elCliente = localStorage.getItem('elCliente');
    const platformWidth = this.platform.width();
    const platformHeight = this.platform.height();
    const isPhonePortrait = this.deviceService.isPhone && platformHeight > platformWidth;
    if (isPhonePortrait) {
      this.deviceWidth = Math.max(platformWidth - 28, 280);
      this.canvasHeight = 178;
    } else if (this.platform.is('ios')) {
      this.deviceWidth = Math.max(platformWidth - 32, 280);
      this.canvasHeight = 165;
    } else if (this.platform.is('android')) {
      this.deviceWidth = platformWidth - 90;
    } else {
      this.deviceWidth = platformWidth - 100;
    }
  }

  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.fromDataURL(emptySignatureWhite);

    setTimeout(() => {
      this.sig.clear();
    }, 1000);

    this.sig.backgroundColor = "rgb(255, 255, 255)";this.sig.minWidth = 1;this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
  }

  scrollToElement() {
    $('#ele').animate({scrollTop:600}, 5000);
  }

  saveSignatureAsegurado(idAtencion) {
    idAtencion = parseInt(this.idAtencion);
    this.isLoading = true;this.sig.backgroundColor = "rgb(255, 255, 255)";this.sig.minWidth = 1;this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3; const mySignature = this.sig.toDataURL("image/jpeg"); console.log(mySignature);
      
    if (mySignature != emptySignature && mySignature != emptySignatureWhite) {
        this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
        //console.dir(this.firmasAsegurados);

        const firmaPayload = [{
          IdAtencion: idAtencion,
          RefTipoFotoId: 3,
          Foto: this.firmaPrecargada.split(',')[1],
          NombreFirmante: this.elCliente,
          FechaFirma: this.hoy
        }];

        this.api.GuardarFirmaAsegurado(firmaPayload).pipe(
          finalize(async () => {this.isLoading = false;})
        ).subscribe(
          (res) => {
            console.log(res, 'token respuesta');
            localStorage.setItem('dSignatureAsegurado', this.firmaPrecargada);
            localStorage.setItem('dSignatureAsegurado-' + idAtencion, this.firmaPrecargada);
            localStorage.setItem('dSignatureAseguradoAtencion', idAtencion.toString());
            localStorage.setItem('signatureSavedAt', new Date().toISOString());
            this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
            const element = document.getElementById('cardAsegurado');
            const elementInput = document.getElementById('nombreInput');
            element?.setAttribute('style', 'border: none');
            elementInput?.setAttribute('style', 'border: none');
            this.goBack();
          },
          async (res) => {
            this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
            //this.isSignature = false;
            this.isLoading = false;

          }
        )

      } else {
        this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
        this.isLoading = false;
      }
      /**/
  }

  clear() {
    this.sig.clear();
  }

  goBack(){
    //$('#trackButton').attr('style', 'border: none');
    const returnTo = localStorage.getItem('signatureReturnTo');
    localStorage.removeItem('signatureReturnTo');
    this.router.navigate([returnTo || './clientehn']);
              
    //this.navController.back();
  }

}
