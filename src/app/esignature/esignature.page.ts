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
  firma: any = [];
  atIndex:any;
  deviceWidth:any;
  idAtencion:any;
  sig: SignaturePad;
  component=AjustadorhnPage;
  wait: any;
  fsLogo: string;
  constructor(private platform:Platform, private navController:NavController, private api:ApiService, private tostador:ToastService,
    private router: Router) { 
      this.fsLogo = logoFicohsa
    this.idAtencion = localStorage.getItem('idAtencion');
    this.elCliente = localStorage.getItem('elCliente');
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width()-90;
    }else{
      this.deviceWidth = this.platform.width()-100;
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

        this.firma.push({
          IdAtencion: idAtencion,
          RefTipoFotoId: 3,
          Foto: this.firmaPrecargada.split(',')[1],
          NombreFirmante: this.elCliente,
          FechaFirma: this.hoy
        });

        this.api.GuardarFirmaAsegurado(this.firma).pipe(
          finalize(async () => {this.isLoading = false;})
        ).subscribe(
          (res) => {
            console.log(res, 'token respuesta');
            this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
            const element = document.getElementById('cardAsegurado');
            const elementInput = document.getElementById('nombreInput');
            element.setAttribute('style', 'border: none');
            elementInput.setAttribute('style', 'border: none');
            //this.isSignature = true;
            
          },
          async (res) => {
            this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
            //this.isSignature = false;
            this.isLoading = false;

          }
        )

        setTimeout(() => {
          this.goBack();
        }, 900);
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
