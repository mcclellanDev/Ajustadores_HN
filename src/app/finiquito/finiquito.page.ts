import { beneficiariosTipos } from './../environments/beneficiarios';
import { emptySignature, emptySignatureWhite, firmaDemoAjustador, anySignature } from '../environments/signatures';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { tipoBeneficiario } from '../environments/predeterminados';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { logoFicohsa } from '../environments/default-images';
import { meses } from '../environments/calendario';
import * as $ from 'jquery';

@Component({
  selector: 'app-finiquito',
  templateUrl: './finiquito.page.html',
  styleUrls: ['./finiquito.page.scss'],
})
export class FiniquitoPage implements OnInit {
  @ViewChild("canvas6", { static: true }) canvas6: ElementRef;
  sig6: SignaturePad;

  fsLogo:any;  acuerdoFiniquito:any=[];  idAtencion:any;  finiquitoCompleto:boolean=false;  isLoading: boolean;
  fechaParrafo:any;  fechaPie:any;  deviceWidth:any;  isInit:boolean=false;  now:any;  diaPie :any;
  mesPie :any;  anioPie:any;  dia :any;  mes :any;  anio:any;  atencionId: number;  expediente: any;
  moneda: any;  miMoneda: string;  datosAtencion: any = [];  CodigoReclamo: any; 
  tipoDeBeneficiario:any; idBeneficiarioTipo:any;  fechaSiniestro: any;  atencion: any;  TipoCoberturaFicohsa: any;
  isEmptySignature: any;  ya: boolean=false; fechaDesde:any; fechaHasta:any; fecaCheque:any;

  constructor(private platform:Platform, private toaster:ToastService, private api:ApiService) { 
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
    this.acuerdoFiniquito = JSON.parse(localStorage.getItem('elFiniquito'));
    this.fechaDesde = this.acuerdoFiniquito.FechaDesde.split('T')[0];
    this.fechaHasta = this.acuerdoFiniquito.FechaHasta.split('T')[0];
    this.idAtencion = localStorage.getItem('idAtencion');
    this.fsLogo = logoFicohsa
  }

  ngOnInit() {
    this.sig6 = new SignaturePad(this.canvas6.nativeElement);
    this.sig6.fromDataURL(emptySignatureWhite);

    setTimeout(() => {
      this.sig6.clear();
    }, 1000);

    this.sig6.backgroundColor = "rgb(255, 255, 255)";this.sig6.minWidth = 1;this.sig6.maxWidth = 1.5;
    this.sig6.dotSize = 3;

    this.idBeneficiarioTipo = this.acuerdoFiniquito.beneficiarioTipo;
    this.tipoDeBeneficiario = tipoBeneficiario[this.idBeneficiarioTipo-1].etiqueta;

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

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }
  
  clear() {
    this.sig6.clear();
  }

  testSave(){
    this.isLoading = true;
    this.isEmptySignature = this.sig6.isEmpty();
    console.log(this.sig6.isEmpty())
    if (this.sig6.isEmpty()) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar el acuerdo.", "top", "firma");
      //this.isLoading = false;
    }else{
      this.sig6.backgroundColor = "rgb(255, 255, 255)";this.sig6.minWidth = 1;this.sig6.maxWidth = 1.5;
    this.sig6.dotSize = 3; const mySignature = this.sig6.toDataURL("image/jpeg"); console.log(mySignature);

      //const mySignature =this.sig5.toDataURL("image/jpeg");
      //this.acuerdoDeuda.FirmaDeudor = mySignature.split(',')[1];
      this.acuerdoFiniquito.FirmaCliente = mySignature.split(',')[1];
      
      console.dir(this.acuerdoFiniquito);

      setTimeout(() => {
        this.guardarFiniquito();  
      }, 1800);

    }

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

          if (this.CodigoReclamo == null) {
            this.toaster.presentToastNoButtonsRed("Esta atención aún no ha sido completada y no cumple los requisitos para generar un finiquito.", "top", "finiquito");
            this.isLoading = false;
          }else{
            
          this.api.insertarFiniquitoManual(this.acuerdoFiniquito).pipe( 
            finalize(async ()=>{
              
              this.ya = true;
              this.toaster.presentToastNoButtons('Finiquito Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
              this.finiquitoCompleto = true;
              //await load.dismiss();
            })
            
          ).subscribe(
             async (res) =>{
              this.isLoading = false;
              console.log('Esto viene del finiquito');
              console.dir(res);
              //this.idTablaAjustador = res.toString();
             })
            /**/
          }

           
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
