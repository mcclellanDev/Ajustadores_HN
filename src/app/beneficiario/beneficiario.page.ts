import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { finalize } from 'rxjs/operators';
import { meses, calendarTitles } from '../environments/calendario';
import { beneficiariosTipos } from '../environments/beneficiarios';
import * as $ from 'jquery';
import { AlertController, AnimationController, ModalController } from '@ionic/angular';
import { ModalGuardarPage } from '../Modales/modal-guardar/modal-guardar.page';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.page.html',
  styleUrls: ['./beneficiario.page.scss'],
})
export class BeneficiarioPage implements OnInit {

  public alertButtons = [
  {
    text: 'Continuar',
    cssClass: 'alert-button-cancel',
  },
  {
    text: 'Sí, Salir',
    cssClass: 'alert-button-confirm',
    handler: () => {
      this.salir();
    }
  },
];

elFiniquito:any=[];beneficiarioTipos:any=[]; codigoReclamo:any;fechaDeFirma:any;tiposdeCobertura:any=[];isLoading:boolean=false;
numeroDeReclamo:any;tipoFecha:number=0;formateada:any;laFecha:any;fechaInicio: any;fechaFinal: string;fechaCheque: string;
fechaParrafo:any;fechaFirma:any;fechaPie:any;deviceWidth:any;isInit:boolean=false;now:any;diaPie :any;mesPie :any;
anioPie:any;dia :any;mes :any;anio:any;numeroCheque:any;montoCheque:any;receptorNombre:any;receptorIdentidad:any;
aFavorDe:any;  idAtencion: string;  atencionId: number;  expediente: any;  moneda: any;  miMoneda: string;
  calendarTitle: string; calendarTitles:any=[]=calendarTitles; chequeFecha:string; hastaFecha:string; desdeFecha:string;
  canDismiss: boolean = false;
  constructor(private router:Router, private api:ApiService, private toaster:ToastService, private myModal:ModalController,
    private animationCtrl: AnimationController, private alert: AlertController
  ) { 
    this.idAtencion = localStorage.getItem('idAtencion');
    
    
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();

//  let daDate = this.acuerdoFiniquito.FechaRegistro;
//  this.dia = daDate.split('T')[0].substring(8,10);
//  this.mes = daDate.split('T')[0].substring(5,7);
//  this.anio = daDate.split('T')[0].substring(0,4);
    let daDate = new Date(); // Temporalmente la fecha actual del sistema
    
    this.fechaFirma = daDate.toISOString();
    this.dia = daDate.getDate();
    this.mes = daDate.getMonth();
    this.anio = daDate.getFullYear();
    console.log( meses[this.mes].mes)
    this.fechaParrafo = this.dia+' de '+ meses[this.mes].mes+' de '+this.anio;
    this.fechaPie = (this.diaPie)+ ' días'+' del mes de '+ meses[this.mesPie].mes+' de '+this.anioPie;

    this.elFiniquito =  JSON.parse(localStorage.getItem('elFiniquito'));
    console.log('El Finiquito');
    console.dir(this.elFiniquito);
    this.numeroDeReclamo = localStorage.getItem('codigoReclamo');
    this.fechaDeFirma = this.fechaFirma;
    this.getTiposDeCobertura();
  }


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };


  ngOnInit() {
    this.isLoading = true;
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

          //alert(this.moneda)
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
          
         }
      )
    }

   
    setTimeout(() => {
      console.log('Caches en storage :');
      this.obtenerCache();
    }, 2000);
  }

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }

  getBeneficiariosTipos(){
    for (let index = 0; index < beneficiariosTipos.length; index++) {
      const element = beneficiariosTipos[index];
      this.beneficiarioTipos.push(element);
      //alert(element)
    }
  }

  seleccionarTipoBeneficiario(event){
    //alert(event.target.value)
    this.elFiniquito.beneficiarioTipo = event.target.value;
  }

  goBack(){
    this.alertaSalir();
    //this.toaster.presentToastSave('Salir del formulario? Los datos se perderan sin haber guardado. Salir?', 'middle', 'primary', 'this.elExpediente');
    //this.openModalGuardar();
    //this.location.back();
  }

  salir(){
    window.location.reload();
  }

  async alertaSalir() {
    const alert = await this.alert.create({
      header:'Salir del formulario?',
      message:'Los datos se perderan sin haber guardado. Salir?',
      buttons:this.alertButtons
    });
    await alert.present();
  }


  async openModalGuardar() {
    console.log('openModalOTP');
    alert('openModalGuardar');
    const modal = await this.myModal.create({
      component: ModalGuardarPage,
      componentProps: {},
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9, 1],
      initialBreakpoint: 0.3,
      cssClass: 'modal-guardar custom-modal-size',
      //enterAnimation: this.enterAnimation,
      //canDismiss:this.canDismiss
    });
    
    setTimeout(() => {
      $('ion-modal').fadeIn('xslow');

      let wrappers = $('ion-modal');
      for (let index = 0; index < wrappers.length; index++) {
        const element = wrappers[index];
        $(element).find('.modal-wrapper').attr('style', ' transition: height 0.25s ease-in; height: 50vh; min-width: 60vw; max-width: 90vw; border-radius: 12px; align-self: center;');
      }
      //alert(wrappers.length);
    }, 3000);
    
    setTimeout(() => {}, 6000);

    modal.onDidDismiss().then(() => {
      console.log('Modal cerrado');
    });

    return await modal.present();

  }

  entraAFavorDe(event) {
    this.elFiniquito.NombreAFavor = event.target.value;
    localStorage.setItem('NombreAFavor', this.elFiniquito.NombreAFavor);
    }
    entraentraReceptorIdentidad(event) {
    this.elFiniquito.IdentidadQuienRecibe = event.target.value;
    localStorage.setItem('IdentidadQuienRecibe', this.elFiniquito.IdentidadQuienRecibe);
    }
    entraReceptorNombre(event) {
    this.elFiniquito.NombreQuienRecibe = event.target.value;
    localStorage.setItem('NombreQuienRecibe', this.elFiniquito.NombreQuienRecibe);
    }
    entraChequeMonto(event) {
    this.elFiniquito.ValorDelCheque = event.target.value;
    localStorage.setItem('ValorDelCheque', this.elFiniquito.ValorDelCheque);
    }
    entraChequeNumero(event) {
    this.elFiniquito.NumeroCheque = event.target.value;
    localStorage.setItem('NumeroCheque', this.elFiniquito.NumeroCheque);
    }

  goFiniquito(){
    console.log('antes de ir al finiquito');
    this.elFiniquito.NumeroReclamo = localStorage.getItem('codigoReclamo');
    this.elFiniquito.FechaFirma = new Date().toISOString();
    console.dir(this.elFiniquito);
    
    localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));

    this.router.navigate(['./finiquito']);
    
  }

  getTiposDeCobertura(){
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
        //this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
        //this.finiquitoCompleto = true;
        //await load.dismiss();
      })
      
    ).subscribe(
       async (res) =>{
        console.log('Esto viene de la cobertura');
        console.dir(res);
        this.tiposdeCobertura = res;
        //this.idTablaAjustador = res.toString();
       })
  }

  clickConfirm(){
    //alert($('#confirm-button').text())
    $('#confirm-button').click();
  }

  guardaCache(position){
    if (position == 0) {
      localStorage.setItem('finiquito-beneficiarioTipo', this.elFiniquito.beneficiarioTipo);
    }
    if (position == 1) {
      localStorage.setItem('finiquito-FechaDesde', this.elFiniquito.FechaDesde);
      //alert(this.elFiniquito.FechaDesde)
    }
    if (position == 2) {
      localStorage.setItem('finiquito-FechaHasta', this.elFiniquito.FechaHasta);
    }
    if (position == 3) {
      localStorage.setItem('finiquito-FechaDelCheque', this.elFiniquito.FechaDelCheque);
    }
    if (position == 4) {
      localStorage.setItem('finiquito-numeroCheque', this.elFiniquito.NumeroCheque);
    }
    if (position == 5) {
      localStorage.setItem('finiquito-ValorDelCheque', this.elFiniquito.ValorDelCheque);
    }
    if (position == 6) {
      localStorage.setItem('finiquito-NombreQuienRecibe', this.elFiniquito.NombreQuienRecibe);
    }
    if (position == 7) {
      localStorage.setItem('finiquito-IdentidadQuienRecibe', this.elFiniquito.IdentidadQuienRecibe);
    }
    if (position == 8) {
      localStorage.setItem('finiquito-NombreAFavor', this.elFiniquito.NombreAFavor);
    }
  }

  obtenerCache(){
      this.elFiniquito.beneficiarioTipo = parseInt(localStorage.getItem('finiquito-beneficiarioTipo'));
      this.desdeFecha = localStorage.getItem('finiquito-FechaDesde');
      this.hastaFecha = localStorage.getItem('finiquito-FechaHasta');
      this.chequeFecha = localStorage.getItem('finiquito-FechaDelCheque');
      this.numeroCheque = localStorage.getItem('finiquito-numeroCheque');
      this.montoCheque = localStorage.getItem('finiquito-ValorDelCheque');
      this.receptorNombre = localStorage.getItem('finiquito-NombreQuienRecibe');
      this.receptorIdentidad = localStorage.getItem('finiquito-IdentidadQuienRecibe');
      this.aFavorDe = localStorage.getItem('finiquito-NombreAFavor');
      this.isLoading = false;
  }

  marcarFecha(laFecha, tipoFecha){
    let titleIndex = tipoFecha-1;
    this.calendarTitle = calendarTitles[titleIndex].title;
    if(tipoFecha == 1){
      this.elFiniquito.FechaDesde = new Date(laFecha).toISOString().split("T")[0];
      this.fechaInicio = new Date(laFecha).toISOString().split("T")[0];
      this.desdeFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaInicio+', '+tipoFecha);
    }
    if(tipoFecha == 2){
      this.elFiniquito.FechaHasta = new Date(laFecha).toISOString().split("T")[0];
      this.fechaFinal = new Date(laFecha).toISOString().split("T")[0];
      this.hastaFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaFinal+', '+tipoFecha);
    }

    if(tipoFecha == 3){
      this.elFiniquito.FechaDelCheque = new Date(laFecha).toISOString().split("T")[0];
      this.fechaCheque = new Date(laFecha).toISOString().split("T")[0];
      this.chequeFecha = new Date(laFecha).toISOString().split("T")[0];
      this.formateada = new Date(laFecha).toISOString();
      console.log(this.fechaCheque+', '+tipoFecha);
    }

    setTimeout(() => {
      this.guardaCache(tipoFecha);  
    }, 600);
    
  }

}
