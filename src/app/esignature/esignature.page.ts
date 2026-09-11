import { ToastService } from 'src/app/services/toast.service';
import { ViewChild, ElementRef } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import SignaturePad from 'signature_pad';
import { finalize } from 'rxjs/operators';
import { AjustadorhnPage } from '../ajustadorhn/ajustadorhn.page';
import { emptySignature, emptySignatureWhite, firmaDemoAjustador } from '../environments/signatures';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { logoFicohsa } from '../environments/default-images';
import { DeviceService } from '../services/device.service';
import { persistAttentionId, resolveAttentionIdFromSources } from '../utils/attention-id.util';
import { describeHttpFailure } from '../utils/http-network.util';

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
    private router: Router, private route: ActivatedRoute, private deviceService: DeviceService) { 
      this.fsLogo = logoFicohsa
    this.idAtencion = this.resolveAttentionIdForSignature();
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

  ionViewWillEnter() {
    const resolved = this.resolveAttentionIdForSignature(this.idAtencion);
    if (resolved) {
      this.idAtencion = resolved;
    }
    this.elCliente = localStorage.getItem('elCliente') || this.elCliente || '';
  }

  private resolveAttentionIdForSignature(...preferred: unknown[]): number | null {
    const navigationState: any = this.router.getCurrentNavigation()?.extras?.state || {};
    const historyState: any = typeof history !== 'undefined' ? history.state : {};
    const queryId = this.route.snapshot.queryParamMap.get('Id')
      || this.route.snapshot.queryParamMap.get('idAtencion');

    return persistAttentionId(resolveAttentionIdFromSources([
      ...preferred,
      this.idAtencion,
      localStorage.getItem('idAtencion'),
      localStorage.getItem('atencionEnProceso'),
      queryId,
      navigationState,
      historyState,
      localStorage.getItem('currentAtencion'),
      localStorage.getItem('RefAtencionId')
    ]));
  }

  scrollToElement() {
    $('#ele').animate({scrollTop:600}, 5000);
  }

  saveSignatureAsegurado(idAtencion) {
    const attentionId = this.resolveAttentionIdForSignature(idAtencion);
    this.isLoading = true;this.sig.backgroundColor = "rgb(255, 255, 255)";this.sig.minWidth = 1;this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3; const mySignature = this.sig.toDataURL("image/jpeg"); console.log(mySignature);

    if (!attentionId) {
      this.tostador.presentToastDataMissing("No se pudo identificar el número de atención para guardar la firma. Regresa al expediente e intenta nuevamente.", 'top', 'firma');
      this.isLoading = false;
      return;
    }

    this.idAtencion = attentionId;
      
    if (!this.sig.isEmpty() && mySignature != emptySignature && mySignature != emptySignatureWhite) {
        this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
        const firmaBase64 = this.firmaPrecargada.split(',')[1] || '';

        if (!firmaBase64.trim()) {
          this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
          this.isLoading = false;
          return;
        }

        const firmaPayload = [{
          IdAtencion: attentionId,
          RefTipoFotoId: 3,
          Foto: firmaBase64,
          NombreFirmante: this.elCliente,
          FechaFirma: this.hoy
        }];

        this.api.GuardarFirmaAsegurado(firmaPayload).pipe(
          finalize(async () => {this.isLoading = false;})
        ).subscribe(
          (res) => {
            console.log(res, 'token respuesta');
            localStorage.setItem('dSignatureAsegurado', this.firmaPrecargada);
            localStorage.setItem('dSignatureAsegurado-' + attentionId, this.firmaPrecargada);
            localStorage.setItem('dSignatureAseguradoAtencion', attentionId.toString());
            localStorage.setItem('signatureSavedAt', new Date().toISOString());
            this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
            const element = document.getElementById('cardAsegurado');
            const elementInput = document.getElementById('nombreInput');
            element?.setAttribute('style', 'border: none');
            elementInput?.setAttribute('style', 'border: none');
            this.goBack();
          },
          async (res) => {
            this.tostador.presentToastDataMissing(
              describeHttpFailure(res, 'No se pudo guardar la firma. Intenta nuevamente.'),
              'top',
              'firma'
            );
            this.isLoading = false;

          }
        )

      } else {
        this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
        this.isLoading = false;
      }
  }

  clear() {
    this.sig.clear();
  }

  goBack(){
    const returnTo = localStorage.getItem('signatureReturnTo');
    localStorage.removeItem('signatureReturnTo');
    this.router.navigate([returnTo || './clientehn']);
  }

}
