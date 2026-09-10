import { ToastService } from 'src/app/services/toast.service';
import { tipoSolicitante, tipoLicencia, tipoFirma, tipoCombustible, Formulario, ajustadorHn } from './../interfaces/formulario';
import { Talleres, rangoAnios, TalleresNoFiltrados, TalleresCategorias } from '../environments/talleres';
import { tiposTransmision } from '../environments/vehicles';
import { ApiService } from '../services/api.service';
import { readStoredAttentionCurrency, resolveAttentionCurrency } from '../utils/currency-display.util';
import { returnToAjustadorhnParent } from '../utils/ajustador-segment-navigation.util';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-segmento-caracteristicas',
  templateUrl: './segmento-caracteristicas.page.html',
  styleUrls: ['./segmento-caracteristicas.page.scss'],
})
export class SegmentoCaracteristicasPage implements OnInit {

  idAtencion:any; miMoneda: string; moneda: any; segmentoTitulo:any; esTraslado:any; tipoGrua:any; datos:any=[]; talleresFiltrados:any=[];
  tallerOtro: any = '';  tallerOtroDireccion: any = ''; esPesado:any; anioAsegurado:any; isLoading:boolean=false; tiposTransmision= tiposTransmision;
  tallerNombreDisplay: any; tipoCombustible:tipoCombustible[]=[]; ajustador: ajustadorHn={};  tipoDeCombustible: string; tipotransmision:any;
  rinesId: number; contadorTallerOtro:number = 0; esTallerOtro:boolean=false; tallerCategoria:any=[]; tallerCategoriaA:any=[];tallerCategoriaB:any=[];
  tallerCategoriaC:any=[]; talleresCategorias:any=[];  elExpediente: any = [];  ciudad: any;
  talleresTGU: any = [];  talleresSPS: any = [];

  workshopSelectOptions = { cssClass: 'form-choice-alert', header: 'Taller mecánico', subHeader: 'Selecciona una opción' };
  fuelTypeSelectOptions = { cssClass: 'form-choice-alert', header: 'Tipo de combustible', subHeader: 'Selecciona una opción' };
  transmissionTypeSelectOptions = { cssClass: 'form-choice-alert', header: 'Tipo de transmisión', subHeader: 'Selecciona una opción' };

  constructor(private api: ApiService, private alert: AlertController, private toaster:ToastService, private navCtrl: NavController, private router: Router) {
    this.talleresCategorias = TalleresCategorias
    this.idAtencion = localStorage.getItem('idAtencion');
    this.miMoneda = readStoredAttentionCurrency();
    let dIdAtencion = parseInt(this.idAtencion);
    this.anioAsegurado = parseInt(localStorage.getItem('anioAsegurado'));
    this.esPesado = localStorage.getItem('elTipoPesado');
    let tallerId = localStorage.getItem('elTallerId');
    let tipoGrua = localStorage.getItem('elTipoGrua');
    let tallerOtro = localStorage.getItem('elTallerOtro');
    let tallerOtroDireccion = localStorage.getItem('elTallerOtroDireccion');
    let observacionesTaller = localStorage.getItem('laObservacionTaller');
    let tipoCombustibleId = localStorage.getItem('elTipoCombustibleId');
    let aireAcondicionado = localStorage.getItem('elAC');
    let bolsaAire = localStorage.getItem('elBA');
    let centralizado = localStorage.getItem('elCentra');
    let transmision = localStorage.getItem('laTransmisionId');
    let retro = localStorage.getItem('elRetrovisor');
    let over = localStorage.getItem('elOverfender');
    let cola = localStorage.getItem('laColaPato');
    let cinta = localStorage.getItem('laCinta');
    let rines = localStorage.getItem('losRines');
    let tipoPesadoId = localStorage.getItem('elTipoPesado');
    
    

    if (retro) {
      let Retrovisor = retro.split('-')[1];
        this.ajustador.Retrovisor = parseInt(Retrovisor);
        $("input[type='radio'][value="+this.ajustador.Retrovisor+"]").attr("checked",'true').trigger("change");
        this.setRetrovisorElectronico(this.ajustador.Retrovisor);
    }
    
    if (over) {
      let Overfender = over.split('-')[1];
        this.ajustador.Overfenders = parseInt(Overfender);
        $("input[type='radio'][value="+this.ajustador.Overfenders+"]").attr("checked",'true').trigger("change");
        this.setOverfenders(this.ajustador.Overfenders);
    }

    if (cola) {
      let colaPato = cola.split('-')[1];
        this.ajustador.ColaPato = parseInt(colaPato);
        $("input[type='radio'][value="+this.ajustador.ColaPato+"]").attr("checked",'true').trigger("change");
        this.setColaPato(this.ajustador.ColaPato);
    }

    if (rines) {
      let rinesDecorativos = rines.split('-')[1];
        this.ajustador.Rines = rinesDecorativos;
        this.rinesId = parseInt(rinesDecorativos);
        $("input[type='radio'][value="+this.rinesId+"]").attr("checked",'true').trigger("change");
        this.setRines(this.ajustador.Rines);
    }

    if (cinta) {
      let cintaDecorativa = cinta.split('-')[1];
        this.ajustador.CintaDecorativa = parseInt(cintaDecorativa);
        $("input[type='radio'][value="+this.ajustador.CintaDecorativa+"]").attr("checked",'true').trigger("change");
        this.setCintaDecorativa(this.ajustador.CintaDecorativa);
    }

    if (transmision) {
      let transId = transmision.split('-')[1];
      this.setMecanico(transId);
    }
    
    if (centralizado) {
      this.ajustador.CierreCentralizado = parseInt(centralizado.split('-')[1]);
      this.setCentralizado(this.ajustador.CierreCentralizado);
    }

  
    if (tipoCombustibleId) {
      this.ajustador.TipoCombustible = parseInt(tipoCombustibleId.split('-')[1]);

      setTimeout(() => {
        this.setTipoCombustible(parseInt(tipoCombustibleId.split('-')[1]));  
      }, 3000);
      
    }

    if (tallerId) {

      
      let elTallerId = tallerId.split('-')[1];
      console.log('Este Id de taller '+tallerId+', '+elTallerId)+', '+(parseInt(elTallerId)+1);
      this.datos.TallerMecanicoId = parseInt(elTallerId);
      localStorage.setItem('datos-TallerMecanicoId', elTallerId);
      setTimeout(() => {
        this.setTaller(parseInt(elTallerId));
    }, 3000);
    /**/
    }

    if (aireAcondicionado) {
      this.datos.AC = aireAcondicionado.split('-')[1];
      this.ajustador.AC = parseInt(this.datos.AC);
      $("input[type='radio'][value="+this.ajustador.AC+"]").attr("checked",'true').trigger("change");
      this.setAC(aireAcondicionado.split('-')[1]);
    }

    if (bolsaAire) {
      this.datos.BolsasAire = bolsaAire.split('-')[1];
      this.ajustador.BolsasAire = parseInt(this.datos.BolsasAire);
      $("input[type='radio'][value="+this.ajustador.BolsasAire+"]").attr("checked",'true').trigger("change");
      this.setBolsaAire(bolsaAire.split('-')[1]);
    }
      
    if (observacionesTaller) {
      this.datos.ObservacionesTaller = observacionesTaller.split('-')[1];
      this.setObservacionesTaller(observacionesTaller.split('-')[1]);
    }
    
    if (tallerOtro) {
      this.tallerOtro = this.sanitizarValor(tallerOtro.split('-')[1]);
      this.setTallerOtro(this.tallerOtro);
    }

    if (tallerOtroDireccion) {
      this.tallerOtroDireccion = this.sanitizarValor(tallerOtroDireccion.split('-')[1]);
      this.setDireccionTallerOtro(this.tallerOtroDireccion);
    }

    if (this.anioAsegurado && this.esPesado) {
      //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    }

    if (tipoGrua) {
      let tipoId = tipoGrua.split('-')[1];
      this.tipoGrua = parseInt(tipoId);
      $("input[type='radio'][value="+this.tipoGrua+"]").attr("checked",'true').trigger("change");
      this.setTipoGrua(parseInt(tipoId));
    }

    

    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : '+idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }

    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {}

    let trasladoGrua = localStorage.getItem('elTraslado');
    if (trasladoGrua) {
      this.esTraslado = parseInt(trasladoGrua.split('-')[1]);
      $("input[type='radio'][value="+this.esTraslado+"]").attr("checked",'true').trigger("change");
    }

    if (tipoPesadoId) {
      this.esPesado = parseInt(tipoPesadoId.split('-')[1]);
      console.log('Aja pesado '+tipoPesadoId)
      console.log('Pesado el vehiculo '+this.esPesado);
      
      $("input[type='radio'][value="+this.esPesado+"]").attr("checked",'true').trigger("change");
      //this.setPesado(this.esPesado);
    }
    
  }

  handleSegmentBack() {
    void returnToAjustadorhnParent(this.navCtrl, this.router);
  }

  ngOnInit() {
    setTimeout(() => {
      this.getTipoCombustible();
      
    }, 2000);
    
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.api.Expediente(parseInt(this.idAtencion)).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));

          this.miMoneda = resolveAttentionCurrency(this.elExpediente[0]);
          this.moneda = this.miMoneda;
          this.ciudad = this.elExpediente[0].Ciudad;
          localStorage.setItem('ciudadAtencion', this.ciudad ? this.ciudad.toString() : '');

          this.getTalleres();
        }
      )
    }, 1500);
  }

  normalizarCiudad(ciudad:any){
    return (ciudad ? ciudad.toString() : '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toUpperCase();
  }

  esCiudadTegucigalpa(ciudad:any){
    const ciudadNormalizada = this.normalizarCiudad(ciudad);
    return ciudadNormalizada.indexOf('TEGUCIGALPA') >= 0 || ciudadNormalizada.indexOf('DISTRITO CENTRAL') >= 0;
  }

  talleresPorCiudad(){
    return this.esCiudadTegucigalpa(this.ciudad) ? this.talleresTGU : this.talleresSPS;
  }

  entraTraslado(event){
    this.esTraslado = event.target.value;
    localStorage.setItem('elTraslado', this.idAtencion.toString()+'-'+this.esTraslado);
    this.setAtencionActual();
  }

  entraGrua(event){
    this.tipoGrua = event.target.value;
    localStorage.setItem('elTipoGrua', this.idAtencion.toString()+'-'+this.tipoGrua);
    this.setAtencionActual();
  }

  setTipoGrua(tipo){
    this.tipoGrua = tipo;
    localStorage.setItem('elTipoGrua', this.idAtencion.toString()+'-'+this.tipoGrua);
    this.setAtencionActual();
  }

  clearSegmentsStorage() {
    localStorage.removeItem('elTraslado');
    localStorage.removeItem('elTipoGrua');
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elTallerId');
    localStorage.removeItem('elTallernombre');
    localStorage.removeItem('elTallerOtro');
    localStorage.removeItem('elTallerOtroDireccion');
    localStorage.removeItem('laObservacionTaller');
    localStorage.removeItem('elTipoCombustibleId');
    localStorage.removeItem('elTipoCombustible');
    localStorage.removeItem('elAC');
    localStorage.removeItem('elBA');
    localStorage.removeItem('elCentra');
    localStorage.removeItem('laTransmisionId');
    localStorage.removeItem('elRetrovisor');
    localStorage.removeItem('elOverfender');
    localStorage.removeItem('laColaPato');
    localStorage.removeItem('laCinta');
    localStorage.removeItem('losRines');
  }

  setAtencionActual(){
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      if (this.idAtencion != idAtencionActual) {
        localStorage.setItem('atencionEnProceso', this.idAtencion);  
      }
    }else{
      localStorage.setItem('atencionEnProceso', this.idAtencion);
    }
  }

  entraTaller(event){
    this.talleresFiltrados = this.talleresPorCiudad();

    //alert('Taller seleccionado : '+event.target.value);
    this.datos.TallerMecanicoId = event.target.value;
    this.datos['TallerMecanicoId'] = event.target.value;
    localStorage.setItem('datos-TallerMecanicoId', event.target.value);
    if (event.target.value == 1) {
      this.esTallerOtro = true;
    }else{
      this.esTallerOtro = false;
    }
    console.log(this.tallerOtro);
    console.log(event.target.value);
    console.dir(this.talleresFiltrados)
    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];


      if (element.Id == event.target.value) {
        this.tallerNombreDisplay = element.NombreTaller;
        //alert('Taller seleccionado : '+this.tallerNombreDisplay);
        localStorage.setItem('elTallerId', this.idAtencion.toString()+'-'+event.target.value);
        localStorage.setItem('elTallernombre', this.idAtencion.toString()+'-'+this.tallerNombreDisplay);
        
      }
    }
  }

  setTaller(tallerId){
    this.talleresFiltrados = this.talleresPorCiudad();
    
    this.datos.TallerMecanicoId = tallerId;
    if (tallerId == 1) {
      this.esTallerOtro = true;
    }else{
      this.esTallerOtro = false;
    }

    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];
      if (element.Id == tallerId) {
        this.tallerNombreDisplay = element.NombreTaller;
        localStorage.setItem('elTallerId', this.idAtencion.toString()+'-'+tallerId);
        localStorage.setItem('elTallernombre', this.idAtencion.toString()+'-'+this.tallerNombreDisplay);
      }
    }
   /* */
  }

  sanitizarValor(valor){
    if (valor === undefined || valor === null || valor === 'undefined' || valor === 'null') {
      return '';
    }
    return valor;
  }

  entraTallerOtro(OtrosTalleres){
    this.tallerOtro = this.sanitizarValor(OtrosTalleres);
    localStorage.setItem('OtrosTalleres', this.tallerOtro);
    localStorage.setItem('elTallerOtro', this.idAtencion.toString()+'-'+this.tallerOtro);
  }

  setTallerOtro(taller){
    this.tallerOtro = this.sanitizarValor(taller);
  }

  entraTallerOtroDireccion(event){
    this.tallerOtroDireccion = event.target.value;
    console.log(this.tallerOtroDireccion);
    localStorage.setItem('elTallerOtroDireccion', this.idAtencion.toString()+'-'+this.tallerOtroDireccion);
  }

  setDireccionTallerOtro(direccion){
    this.tallerOtroDireccion = direccion;
    localStorage.setItem('elTallerOtroDireccion', this.idAtencion.toString()+'-'+this.tallerOtroDireccion);
  }

  entraObservacionesTaller(event){
    this.datos['ObservacionesTaller'] = event.target.value;
    localStorage.setItem('laObservacionTaller', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-ObservacionTaller', event.target.value);
    
  }

  setObservacionesTaller(observaciones){
    this.datos['ObservacionesTaller'] = observaciones;
    localStorage.setItem('laObservacionTaller', this.idAtencion.toString()+'-'+observaciones);
    localStorage.setItem('datos-ObservacionTaller', observaciones);
  }

  async getTipoCombustible(){
    this.isLoading = true;
    this.api.ListTipoCombustible().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
          this.tipoCombustible= res;
          console.log("Tipos de combustible : ");
          console.dir(this.tipoCombustible)
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

  entraTipoCombustible(event){
    this.datos.RefTipoCombustibleId = event.target.value;

    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == event.target.value) {
        this.tipoDeCombustible = element.TipoCombustible;
        localStorage.setItem('elTipoCombustibleId', this.idAtencion.toString()+'-'+event.target.value);
        localStorage.setItem('elTipoCombustible', this.idAtencion.toString()+'-'+this.tipoDeCombustible);
        localStorage.setItem('datos-RefTipoCombustibleId', event.target.value);
        
      }
    }
    
  }

  setTipoCombustible(tipo){
    
    this.datos.RefTipoCombustibleId = tipo;
    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == tipo) {
        this.tipoDeCombustible = element.TipoCombustible;
        localStorage.setItem('elTipoCombustibleId', this.idAtencion.toString()+'-'+tipo);
        localStorage.setItem('elTipoCombustible', this.idAtencion.toString()+'-'+this.tipoDeCombustible);
        localStorage.setItem('datos-RefTipoCombustibleId', tipo);
      }
    }
  }

  entraAC(event){
    this.datos.AC = event.target.value;
    localStorage.setItem('elAC', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-AC', event.target.value);
    
  }

  setAC(ac){
    this.datos.AC = ac;
    localStorage.setItem('elAC', this.idAtencion.toString()+'-'+ac);
    localStorage.setItem('datos-AC', ac);
  }

  entraBolsaAire(event){
    this.datos.BolsaAire = event.target.value;
    localStorage.setItem('elBA', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-BolsaAire', event.target.value);
    
  }

  setBolsaAire(ba){
    this.datos.BolsaAire = ba;
    localStorage.setItem('elBA', this.idAtencion.toString()+'-'+ba);
    localStorage.setItem('datos-BolsaAire', ba);
  }

  entraCierreCentralizado(event){
    this.datos.CierreCentralizado = event.target.value;
    this.ajustador.CierreCentralizado = event.target.value;
    localStorage.setItem('elCentra', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-CierreCentralizado', event.target.value);
    
  }

  setCentralizado(centra){
    this.datos.CierreCentralizado = centra;
    this.ajustador.CierreCentralizado = centra;
    localStorage.setItem('elCentra', this.idAtencion.toString()+'-'+centra);
    localStorage.setItem('datos-CierreCentralizado', centra);
  }

  entraMecanico(event){
    //this.dataAppend.Mecanico = event.target.value;
    this.datos.Mecanico = event.target.value;
    this.ajustador.Transmicion = event.target.value;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == event.target.value) {
        this.tipotransmision = element.nombre;
        localStorage.setItem('laTransmisionId', this.idAtencion.toString()+'-'+event.target.value);
        localStorage.setItem('laTransmision', this.idAtencion.toString()+'-'+element.nombre);

        if (element.id == 'tr01') {
          localStorage.setItem('datos-Mecanico', '1');  
        }else{
          localStorage.setItem('datos-Mecanico', '0');
        }
        
        
      }
      
    }
    
  }

  setMecanico(mecanico){
    this.datos.Mecanico = mecanico;
    this.ajustador.Transmicion = mecanico;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == mecanico) {
        this.tipotransmision = element.nombre;
        localStorage.setItem('laTransmisionId', this.idAtencion.toString()+'-'+mecanico);
        localStorage.setItem('laTransmision', this.idAtencion.toString()+'-'+element.nombre);
        if (element.id == 'tr01') {
          localStorage.setItem('datos-Mecanico', '1');  
        }else{
          localStorage.setItem('datos-Mecanico', '0');
        }
      }
      
    }
    
  }

  entraRetrovisorElectronico(event){
    this.datos.RetrovisorElectronico = event.target.value;
    this.ajustador.Retrovisor = event.target.value;
    localStorage.setItem('elRetrovisor', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-RetrovisorElectronico', event.target.value);
    
  }

  setRetrovisorElectronico(retro){
    this.datos.RetrovisorElectronico = retro;
    this.ajustador.Retrovisor = retro;
    localStorage.setItem('elRetrovisor', this.idAtencion.toString()+'-'+retro);
    localStorage.setItem('datos-RetrovisorElectronico', retro);
  }

  entraOverfenders(event){
    this.datos.Overfenders = event.target.value;
    this.ajustador.Overfenders = event.target.value;
    localStorage.setItem('elOverfender', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-Overfenders', event.target.value);
    
  }

  setOverfenders(over){
    this.datos.Overfenders = over;
    this.ajustador.Overfenders = over;
    localStorage.setItem('elOverfender', this.idAtencion.toString()+'-'+over);
    localStorage.setItem('datos-Overfenders', over);
  }

  entraColaPato(event){
    this.datos.ColaPato = event.target.value;
    this.ajustador.ColaPato = event.target.value;
    localStorage.setItem('laColaPato', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-ColaPato', event.target.value);
    
  }

  setColaPato(cola){
    this.datos.ColaPato = cola;
    this.ajustador.ColaPato = cola;
    localStorage.setItem('laColaPato', this.idAtencion.toString()+'-'+cola);
    localStorage.setItem('datos-ColaPato', cola);
  }

  entraCintaDecorativa(event){
    this.datos.CintaDecorativa = event.target.value;
    this.ajustador.CintaDecorativa = event.target.value;
    localStorage.setItem('laCinta', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-CintaDecorativa', event.target.value);
  }

  setCintaDecorativa(cinta){
    this.datos.CintaDecorativa = cinta;
    this.ajustador.CintaDecorativa = cinta;
    localStorage.setItem('laCinta', this.idAtencion.toString()+'-'+cinta);
    localStorage.setItem('datos-CintaDecorativa', cinta);
  }

  entraRines(event){
    let rinesTipo;
     this.datos.Rines = event.target.value;
     this.ajustador.Rines = event.target.value;
     this.rinesId = parseInt(event.target.value);
     localStorage.setItem('losRines', this.idAtencion.toString()+'-'+event.target.value);
     if (this.rinesId == 1) {
      rinesTipo = 'De Lujo';
     }else{
      rinesTipo = 'Convencionales';
     }
     localStorage.setItem('datos-Rines', rinesTipo);
   }

   setRines(rines){
    let rinesTipo;
    let rinesId = parseInt(rines);
    this.datos.Rines = rinesId;
    this.ajustador.Rines = rines;
    this.rinesId = rinesId;
    localStorage.setItem('losRines', this.idAtencion.toString()+'-'+rines);
    if (rinesId == 1) {
      rinesTipo = 'De Lujo';
     }else{
      rinesTipo = 'Convencionales';
     }
     localStorage.setItem('datos-Rines', rinesTipo);
  }

  entraPesado(event){
    this.esPesado = event.target.value;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString()+'-'+this.esPesado);

    //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    this.setAtencionActual();
  }

  setPesado(pesado){
    this.esPesado = pesado;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString()+'-'+this.esPesado);

    //this.filtrarTalleres(this.anioAsegurado, this.esPesado);
    this.setAtencionActual();
  }

  filtrarTalleres(anio, pesado){
    this.talleresFiltrados.push(Talleres[0]);
    if (pesado == '2') {
      if (this.between(anio, rangoAnios[0].min10, rangoAnios[0].max) == true) {
        console.log(this.between(anio, 2019, rangoAnios[0].max));
        if(this.between(anio, 2019, rangoAnios[0].max)==true){
          // agregar al filtro talleres categoria A
          this.talleresFiltrados.push(Talleres[1]);
          this.talleresFiltrados.push(Talleres[2]);
        }else if(this.between(anio, 2015, 2018)==true){
          // agregar al filtro talleres categoria B
          this.talleresFiltrados.push(Talleres[3]);
          this.talleresFiltrados.push(Talleres[4]);
        }else{
          // agregar al filtro talleres categoria C
          this.talleresFiltrados.push(Talleres[5]);
          this.talleresFiltrados.push(Talleres[6]);
          this.talleresFiltrados.push(Talleres[7]);
          this.talleresFiltrados.push(Talleres[8]);
        }
      }
    }else{
      this.talleresFiltrados.push(Talleres[9]);
      this.talleresFiltrados.push(Talleres[10]);
      console.dir(this.talleresFiltrados)
    }
  }

  between(x, min, max) {
    return x >= min && x <= max;
  }


  async getTalleres(){
    //alert('obteniendo los talleres');
    this.talleresTGU = [];
    this.talleresSPS = [];
    this.talleresFiltrados = [];

    this.api.ListTalleres().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        console.log('Los talleres');
        console.dir(res);

        //alert('Mi ciudad es '+this.ciudad);

        for (let index = 0; index < res.length; index++) {
          const element = res[index]; 
          const esTallerSinCiudad = !element.Ciudad || element.Id == 1;

          if (esTallerSinCiudad) {
            this.talleresTGU.push(element);
            this.talleresSPS.push(element);
            continue;
          }
          
          if (this.esCiudadTegucigalpa(element.Ciudad)) {
            this.talleresTGU.push(element);
          }else{
            this.talleresSPS.push(element);
          }

          /*
          if (mismaCiudad == true && element.Ciudad == 'TEGUCIGALPA') {
            this.talleresFiltrados.push(element);
          }else{
            console.log('Comparando ciudad '+element.Ciudad+' con TEGUCIGALPA');
            console.log('Es la misma ciudad ? '+mismaCiudad+', Resultado de la comparación : '+(element.Ciudad == 'TEGUCIGALPA'));
            
            if (mismaCiudad == false && element.Ciudad != 'TEGUCIGALPA') {
              this.talleresFiltrados.push(element);
            }
          }
          */
        }
        this.talleresFiltrados = this.talleresPorCiudad();
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
    
    /*
    setTimeout(() => {
      this.talleresFiltrados = Talleres;  
    }, 1000);
    


    for (let indexT = 0; indexT < this.talleresFiltrados.length; indexT++) {
      const elementT = this.talleresFiltrados[indexT];
      if (elementT.Categoria == 'A') {
        this.tallerCategoriaA.push(elementT);
      }
      if (elementT.Categoria == 'B') {
        this.tallerCategoriaB.push(elementT);
      }
      if (elementT.Categoria == 'C') {
        this.tallerCategoriaC.push(elementT);
      }
      if (elementT.Categoria == '') {
        this.tallerCategoria.push(elementT);
      }
      //alert(elementT.NombreTaller)
    }

    
    
    */
  }

  

}
