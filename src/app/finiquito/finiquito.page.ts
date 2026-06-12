import { beneficiariosTipos } from './../environments/beneficiarios';
import { emptySignature, emptySignatureWhite, firmaDemoAjustador, anySignature } from '../environments/signatures';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tipoBeneficiario } from '../environments/predeterminados';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { logoFicohsa } from '../environments/default-images';
import { meses } from '../environments/calendario';
import * as $ from 'jquery';

@Component({
  selector: 'app-finiquito',
  templateUrl: './finiquito.page.html',
  styleUrls: ['./finiquito.page.scss'],
})
export class FiniquitoPage implements OnInit, AfterViewInit {
  @ViewChild("canvas6", { static: false }) canvas6: ElementRef<HTMLCanvasElement>;
  sig6: SignaturePad;

  fsLogo:any;  acuerdoFiniquito:any=[];  idAtencion:any;  finiquitoCompleto:boolean=false;  isLoading: boolean;
  fechaParrafo:any;  fechaPie:any;  deviceWidth:any;  isInit:boolean=false;  now:any;  diaPie :any;
  mesPie :any;  anioPie:any;  dia :any;  mes :any;  anio:any;  atencionId: number;  expediente: any;
  moneda: any;  miMoneda: string;  datosAtencion: any = [];  CodigoReclamo: any; 
  tipoDeBeneficiario:any; idBeneficiarioTipo:any;  fechaSiniestro: any;  atencion: any;  TipoCoberturaFicohsa: any;
  isEmptySignature: any;  ya: boolean=false; fechaDesde:any; fechaHasta:any; fecaCheque:any;

  constructor(private platform:Platform, private toaster:ToastService, private api:ApiService,
    private alertController: AlertController, private router: Router) { 
    setTimeout(() => {
      $('#scrollIcon').fadeIn('xslow');
    }, 2000);
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();

//  let daDate = this.acuerdoFiniquito.FechaRegistro;
//  this.dia = daDate.split('T')[0].substring(8,10);
//  this.mes = daDate.split('T')[0].substring(5,7);
//  this.anio = daDate.split('T')[0].substring(0,4);
    
    this.fechaPie = (this.diaPie)+ ' días'+' del mes de '+ meses[this.mesPie].mes+' de '+this.anioPie;
    //console.log((this.diaPie)+ ' días'+' del mes de '+ meses[this.mesPie].mes+' de '+this.anioPie,'fecha siniestro');

    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width()-90;
    }else{
      this.deviceWidth = this.platform.width()-100;
    }

    /*
    {
  "NumeroReclamo": "string", // despues de crear el reclamo
  "FechaDesde": "2023-11-14T19:55:55.849Z", // Input directo
  "FechaHasta": "2023-11-14T19:55:55.849Z", // Input directo
  "NombreCliente": "string", // de la info del asegurado
  "TipoCoberturaFicohsa": "string", // Input directo
  "FechaFirma": "2023-11-14T19:55:55.849Z", // Input directo
  "FirmaCliente": "string", // Desde el canvas
  "NombreQuienRecibe": "string", // Input directo
  "IdentidadQuienRecibe": "string", // Input directo
  "NumeroCheque": "string", // Input directo
  "FechaDelCheque": "2023-11-14T19:55:55.849Z", // Input directo
  "ValorDelCheque": 0, // Input directo
  "NombreAFavor": "string", // Input directo
  "Poliza": "string", // de la info del asegurado
  "RefAtencionId": 0, // de la info del asegurado
  "Marca": "string", // de la info del asegurado
  "Modelo": "string", // de la info del asegurado
  "Anio": 0, // de la info del asegurado
  "Placa": "string", // de la info del asegurado
  "Chasis": "string", // de la info del asegurado
  "Motor": "string" // de la info del asegurado
}
    */
    this.acuerdoFiniquito = JSON.parse(localStorage.getItem('elFiniquito') || '{}') || {};
    this.fechaDesde = this.acuerdoFiniquito.FechaDesde?.split('T')[0] || '';
    this.fechaHasta = this.acuerdoFiniquito.FechaHasta?.split('T')[0] || '';
    this.idAtencion = localStorage.getItem('idAtencion');
    this.finiquitoCompleto = localStorage.getItem(`finiquitoEnviado-${this.idAtencion}`) === 'true';
    this.fsLogo = logoFicohsa
  }

  ngOnInit() {
    this.idBeneficiarioTipo = Number(this.acuerdoFiniquito.beneficiarioTipo);
    this.tipoDeBeneficiario = tipoBeneficiario[this.idBeneficiarioTipo - 1]?.etiqueta || 'beneficiario';

    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      //alert(parseInt(this.idAtencion)+1)
      this.atencionId = parseInt(this.idAtencion);

      
      this.api.Expediente(this.atencionId).pipe( 
        finalize(async ()=>{
          this.isLoading = false;
        })
      ).subscribe(
         (res) =>{
          console.log(res, 'respuesta');
          this.expediente= res;
          this.moneda = this.expediente[0].Moneda;
          this.fechaSiniestro = this.expediente[0].FechaRegistro;

          console.log('Obtengamos la fecha pues ');



          let daDate = new Date(this.fechaSiniestro); // Temporalmente la fecha actual del sistema
          console.log(daDate)    

          this.dia = daDate.getDate();
          this.mes = daDate.getMonth();
          this.anio = daDate.getFullYear();
          console.log( meses[this.mes].mes)
          this.fechaParrafo = this.dia+' de '+ meses[this.mes].mes+' de '+this.anio;

          //alert(this.moneda)
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
          
         }
      )

      this.api.DatosDeAtencion(this.atencionId).pipe( 
        finalize(async ()=>{
          this.isLoading = false;
        })
      ).subscribe(
         (res) =>{
          console.log(res, 'respuesta');
          this.datosAtencion= res;
          this.CodigoReclamo = this.datosAtencion[0].CodigoReclamoFicohsa;
          this.TipoCoberturaFicohsa = this.datosAtencion[0].TipoAcuerdoFicohsa;

          //alert(this.moneda)
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
          
         }
      )
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.initializeSignaturePad());
  }

  ionViewDidEnter() {
    if (!this.finiquitoCompleto && !this.sig6) {
      setTimeout(() => this.initializeSignaturePad());
    }
  }

  private initializeSignaturePad() {
    const canvas = this.canvas6?.nativeElement;
    if (!canvas || this.finiquitoCompleto || this.sig6) {
      return;
    }

    const containerWidth = canvas.parentElement?.clientWidth || this.deviceWidth || this.platform.width();
    const displayHeight = this.platform.width() <= 699 ? 155 : 180;
    const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = Math.floor(containerWidth * pixelRatio);
    canvas.height = Math.floor(displayHeight * pixelRatio);
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${displayHeight}px`;
    canvas.getContext('2d')?.scale(pixelRatio, pixelRatio);

    this.sig6 = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
      minWidth: 1,
      maxWidth: 1.5,
      dotSize: 3
    });
    this.sig6.clear();
  }

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }
  
  clear() {
    this.sig6?.clear();
  }

  async confirmarEnvio() {
    if (!this.sig6) {
      this.initializeSignaturePad();
    }

    if (!this.sig6) {
      this.toaster.presentToastNoButtonsRed("No fue posible activar el área de firma. Intenta abrir nuevamente la pantalla.", "top", "firma");
      return;
    }

    this.isEmptySignature = this.sig6.isEmpty();
    if (this.isEmptySignature) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar el acuerdo.", "top", "firma");
      return;
    }

    const alert = await this.alertController.create({
      cssClass: 'form-choice-alert',
      header: 'Confirmar envío',
      subHeader: `Atención #${this.idAtencion}`,
      message: 'Verifica que los datos del finiquito sean correctos. Después de enviarlo, el documento quedará registrado con esta firma.',
      buttons: [
        {
          text: 'Revisar nuevamente',
          role: 'cancel'
        },
        {
          text: 'Sí, enviar',
          role: 'confirm',
          handler: () => this.testSave()
        }
      ]
    });

    await alert.present();
  }

  testSave(){
    this.isLoading = true;
    this.sig6.backgroundColor = "rgb(255, 255, 255)";
    this.sig6.minWidth = 1;
    this.sig6.maxWidth = 1.5;
    this.sig6.dotSize = 3;
    const mySignature = this.sig6.toDataURL("image/jpeg");
    this.acuerdoFiniquito.FirmaCliente = mySignature.split(',')[1];
    this.guardarFiniquito();
  }

  guardarFiniquito(){

          this.acuerdoFiniquito.TipoCoberturaFicohsa = localStorage.getItem('tipoCobertura');
          this.acuerdoFiniquito.NombreAFavor = localStorage.getItem('NombreAFavor');
          this.acuerdoFiniquito.IdentidadQuienRecibe = localStorage.getItem('IdentidadQuienRecibe');
          this.acuerdoFiniquito.NombreQuienRecibe = localStorage.getItem('NombreQuienRecibe');
          this.acuerdoFiniquito.ValorDelCheque = localStorage.getItem('ValorDelCheque');
          this.acuerdoFiniquito.NumeroCheque = localStorage.getItem('NumeroCheque');
          this.acuerdoFiniquito.NumeroReclamo = this.CodigoReclamo;
          this.acuerdoFiniquito.TipoCoberturaFicohsa = this.TipoCoberturaFicohsa;
            
          console.dir(this.acuerdoFiniquito);
          
          //alert(this.CodigoReclamo)

          if (!this.CodigoReclamo?.toString().trim()) {
            this.toaster.presentToastNoButtonsRed("Esta atención aún no ha sido completada y no cumple los requisitos para generar un finiquito.", "top", "finiquito");
            this.isLoading = false;
          }else{
            
          this.api.insertarFiniquitoManual(this.acuerdoFiniquito).pipe( 
            finalize(() => this.isLoading = false)
            
          ).subscribe(
             async (res) =>{
              this.ya = true;
              this.finiquitoCompleto = true;
              localStorage.setItem(`finiquitoEnviado-${this.idAtencion}`, 'true');
              this.sig6.off();
              this.toaster.presentToastNoButtons('Finiquito guardado exitosamente.', 'middle', 'finiquito');
              console.log('Esto viene del finiquito');
              console.dir(res);
             },
             (error) => {
              this.toaster.presentToastNoButtonsRed(
                error?.error?.Message || 'No fue posible enviar el finiquito. Intenta nuevamente.',
                'top',
                'finiquito'
              );
             })
            /**/
          }

           
  }

  goExpediente() {
    this.router.navigate(['./expediente'], {
      queryParams: { Id: this.atencionId || Number(this.idAtencion), Source: 1 }
    });
  }

  printPdf(){
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/Finiquitomanualporliquidacion/';
    if (this.finiquitoCompleto == true) {
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl+parseInt(this.idAtencion) , '_blank');
    }else{
      this.toaster.presentToastNoButtons('Debes guardar el finiquito firmado antes de imprimirlo.', 'middle', 'deuda');
    }

  }

  scrollToElement() {
    $('#ele').animate({scrollTop:600}, 5000);
  }

  onScroll(event) {
    //alert('hey vo')
    setTimeout(() => {
      $('#scrollIcon').fadeOut('xslow');
    }, 3000);
}

}
