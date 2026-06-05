import { ToastService } from '../services/toast.service';
import { ajustadorHn, Formulario } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { Entidades } from '../interfaces/extras';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, AnimationController, IonAccordionGroup, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import * as $ from 'jquery';
import { emptySignature } from '../environments/signatures';

@Component({
  selector: 'app-segmento-danio',
  templateUrl: './segmento-danio.page.html',
  styleUrls: ['./segmento-danio.page.scss'],
})

export class SegmentoDanioPage implements OnInit {
  @ViewChild('accordionGroupX', { static: true }) accordionGroup: IonAccordionGroup;
  ajustador: ajustadorHn={}; 
  idAtencion:any; miMoneda: string; moneda: any;  segmentoTitulo: string;  isSearch: boolean=false; public results = [];
  danios:any=[]; daniosExtras: any = []; daniosSelect:any=[];  danioResults:any=[];  daniosOtros:any=[]; danioSearchable:any=[]; isLoading:boolean=false;
  daniosIndex: any;  contador: number = 0; datos:any=[];  selectedIndex: any=[]; selectedExtra: any=[];  valorReserva:any;
  elTipoSiniestro:any; tipoSiniestros:any=[];  elTipoDeSiniestro: any; formulario: Formulario= {}; danioMessage:string; 
  danioPosition:string; danioClass:string; ssucessIconRecycle:any; danioOtro:any=[]; TipoReparacion:any; daniosSeleccionados: any[];
  daniosSelectOtro: any = []; isXOpen:boolean=false;

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
  expediente: any = [];  noReservadoAlerta: string = 'El valor de reserva está vacío. Se asignará un valor de 0 (cero) por defecto.';
  
  
  
  
  constructor(private api: ApiService, private alert: AlertController, public toaster:ToastService, 
    private toast: ToastController, private animationCtrl: AnimationController) { 
      this.ssucessIconRecycle = '../../assets/img/papel.gif';
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    let elCompromiso = localStorage.getItem('elCompromisoPago');
    let oPago = localStorage.getItem('elCompromisoPagoObservacion');
    //let reserva = localStorage.getItem('laReserva');
    let siniestro = localStorage.getItem('elTipoSiniestro');
    let descripcionDanios = localStorage.getItem('laDescripcion');
    let observaciones = localStorage.getItem('lasObservaciones');

    if(observaciones){
      let obs = observaciones.split('-')[1];
      this.setObservaciones(obs);
    }

    if (descripcionDanios) {
      let daniosD = descripcionDanios.split('-')[1];
      this.setDanioDescripcion(daniosD);
    }

    if (siniestro) {
      this.elTipoSiniestro = siniestro.split('-')[1];
      console.log('elTipoSiniestro', this.elTipoSiniestro);
      this.loadSiniestros();
      setTimeout(() => {
        this.setElTipoSiniestro(this.elTipoSiniestro);  
      }, 2000);
      
    }

    if (elCompromiso) {
      let compromisoId = parseInt(elCompromiso.split('-')[1]);
      this.datos.CompromisoPago = compromisoId;
      $("input[type='radio'][value="+this.datos.CompromisoPago+"]").attr("checked",'true').trigger("change");
      this.setCompromisoPago(compromisoId);
    }

    if (this.segmentoTitulo) {}
    if (oPago) {
      this.datos.ObservacionCompromisoPago = oPago.split('-')[1];
      this.setObservacionCompromisoPago(this.datos.ObservacionCompromisoPago);
    }

    this.getDanios();
    this.loadSiniestros();
    
  }

  ionViewDidEnter(){

    setTimeout(() => {
      let reserva:any = localStorage.getItem('bpmArray-ValorReserva');

      if (reserva === undefined || reserva === null || reserva === '') {
        this.setReserva('0');
        $('#noReservaTexto').fadeIn();
      }else{
        this.valorReserva = parseInt(reserva);
        $('#noReservaTexto').fadeOut();
      }
      
    }, 1300);
    
    
    this.api.Expediente(parseInt(this.idAtencion)).pipe( 
        finalize(async ()=>{
          this.isLoading = false;
        })
      ).subscribe(
         (res) =>{
          console.log(res, 'respuesta');
          this.expediente= res;
          this.moneda = this.expediente[0].Moneda;
         }
        )

        setTimeout(() => {
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
        }, 900);
  }

  ngOnInit() {
    console.log('Los seleccionados en caché');
    setTimeout(() => {
      this.listarDanios();
      this.listarDaniosExtras();
      this.recargaDaniosPosicion();
    }, 1000);
  }

  setReparacion(dannioId, tipo, i, origen){
    localStorage.setItem('TipoReparacion-'+dannioId, tipo);
    localStorage.setItem('TipoReparacionIndex-'+dannioId, i);
    
    if (origen === 1) {
      if (tipo === 1) {
        $('.action-repair').eq(i).attr("style","background:#7da1c4;border-radius:10px;width:100%"); 
        $('.action-change').eq(i).attr("style","background:transparent;color:#7da1c4;width:100%");  
      }else{
        $('.action-repair').eq(i).attr("style","background:transparent; color:#0058CB;width:100%"); 
        $('.action-change').eq(i).attr("style","background:#0058CB;border-radius:10px;width:100%"); 
      }
    }
  }

  

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    console.log(nativeEl.value)
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };

  setReparacionX(dannioId, tipo, i, origen){
   // alert(dannioId+', '+tipo+', '+i+', '+origen);
    
    localStorage.setItem('TipoReparacionX-'+dannioId, tipo);
    localStorage.setItem('TipoReparacionIndexX-'+dannioId, i);

    this.api.ActualizarTipoReparacion(dannioId, tipo, i).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        console.log('Actualizado '+res);
        this.recargarDaniosExtras();
       }
    )


    /*
    if (origen === 1) {
      if (tipo === 1) {
        $('.action-repair-x').eq(i).attr("style","background:#7da1c4;border-radius:10px;width:100%"); 
        $('.action-change-x').eq(i).attr("style","background:transparent;color:#7da1c4;width:100%");  
      }else{
        $('.action-repair-x').eq(i).attr("style","background:transparent; color:#0058CB;width:100%"); 
        $('.action-change-x').eq(i).attr("style","background:#0058CB;border-radius:10px;width:100%"); 
      }
    }
    */
  }

  clearSegmentsStorage() {
    localStorage.removeItem('elCompromisoPago');
    localStorage.removeItem('elCompromisoPagoObservacion');
    localStorage.removeItem('laReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');

    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('danioPic') == 0 || localStorage.key(i).indexOf('daniosSelect') == 0) {
          localStorage.removeItem(localStorage.key(i));
      }
    }

  }

  recargaDanios() {
    /*
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++){
        //alert(localStorage.key(i).indexOf('daniosSelect'));
        if (localStorage.key(i).indexOf('daniosSelect') == 0) {
            //alert(localStorage.key(i).split('-')[1]+', '+localStorage.getItem(localStorage.key(i)).split('-')[1]);
            let indexDanio = localStorage.getItem(localStorage.key(i)).split('-')[1];
            let index = localStorage.key(i).split('-')[1];
            this.entraDanio(parseInt(indexDanio), parseInt(index));
        }

        if (localStorage.key(i).indexOf('danioOtro') == 0) {
          //const element = this.selectedIndex[i];
          let otroKey = parseInt(localStorage.key(i).split('-')[1]);
          let otroVal = localStorage.getItem(localStorage.key(i));
          for (let indexS = 0; indexS < this.selectedIndex.length; indexS++) {
            const element = this.selectedIndex[indexS];
            if (element==otroKey) {
              this.entraDanioOtro(otroVal);
            }
          }
        }
        
      }

      
    }
    */
  }


  recargaDaniosPosicion() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).indexOf('danioPic') == 0) {
            let index = localStorage.key(i).split('-')[1];
            this.damagePosition(parseInt(index));
        }
      }
    }
  }

  async getDanios(){
    this.isLoading = true;
    this.api.listDanios().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.danios = res;
        this.danioSearchable = res;
        this.results = res;
        
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'danios');
      }

    )

    this.api.ObtenerDaniosExtras(this.idAtencion, Entidades[0].tipoEntidad).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.daniosExtras = res;
        this.daniosExtras.sort((a,b)=> b.CodigoDanioFicohsa-a.CodigoDanioFicohsa);
       }
    )
    
  }

  

  entraDanio(danioId, posicion){
    for (let index = 0; index < this.danios.length; index++) {
      const element = this.danios[index];
      console.dir(element)
      console.log(element.Id+', '+danioId)
      console.log(element.Id===danioId);
      if (element.Id===danioId) {
        let elItem = $('.danio-item').eq(index);
        if (elItem.hasClass("selected")) {
          this.eliminaDanio(danioId, posicion, element.Descripcion);
          elItem.removeClass('selected');
        }else{
          this.daniosSelect.push(element);
          this.contador = this.daniosSelect.length;
          localStorage.setItem('daniosSelect-'+posicion, danioId);  
          elItem.addClass('selected');
        }
      }
    }
  }

  entraDanioOtro(danio){
    //alert(danio)

    let indexFront = this.daniosSelectOtro.length;
    
    this.api.ContarOtrosDanios().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        console.log('Conteo de Otros : '+res[0].Mensaje);
        let othersCount = parseInt(res[0].Mensaje);
        this.daniosIndex = othersCount+1;
        //alert(this.daniosIndex)
        if (danio) {
          let elementOtro = {
            "RefAtencionId": this.idAtencion,
            "DescripcionDeDanio": danio.toUpperCase(),
            "FechaRegistro": new Date().toISOString(),
            "UsuarioId": this.api.currentUser.ProveedorAgenteId,
            "TipoEntidad": Entidades[0].tipoEntidad,
            "TipoReparacion": 0,
            "CodigoDanioVehiculo": this.daniosIndex,
            "indexFront": indexFront
          }
          console.dir(elementOtro)

          this.api.InsertarConvenioReparacionTallerExtra(elementOtro).pipe( 
            finalize(async ()=>{
              this.isLoading = false;
            })
          ).subscribe(
             async (res) =>{
              this.daniosSelectOtro.push(elementOtro);
              localStorage.setItem('selectedIndex-x' ,JSON.stringify(this.daniosIndex));
              localStorage.setItem('daniosSelectOtro-'+(this.daniosIndex-1), this.daniosIndex);
              localStorage.setItem('danioOtro-'+this.daniosIndex, JSON.stringify(elementOtro));

              setTimeout(() => {
                this.recargarDaniosExtras();
              }, 300);

              setTimeout(() => {
                this.openOtrosDanios();
              }, 600);
             }
          )
        }else{}
       }
    )
    /**/
    
  }

  recargarDaniosExtras(){
    this.api.ObtenerDaniosExtras(this.idAtencion, Entidades[0].tipoEntidad).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.daniosExtras = res;
        this.listarDaniosExtras();
       }
    )
  }

  insertarConvernioReparacion(Codigo, Descripcion, Id, elTipoReparacion){
    let reparaArray = {
      codigoDanio : Codigo,
      descripcionDanio : Descripcion,
      fotografia : emptySignature.split(',')[1],
      idAtencion : this.idAtencion,
      refTipofotoId : Id,
      TipoEntidad : Entidades[0].tipoEntidad,
      TipoReparacion: elTipoReparacion
    };

    this.api.insertarConvenioReparacion(reparaArray).pipe( 
          
          finalize(async ()=>{
            this.isLoading = false;
          })
        ).subscribe(
           async (res) =>{
            console.log(res);
            console.log("Danio guardado");
            
          },
          async (res) => {
            this.toaster.presentToast(res.error.Message, 'top', 'taller');
          }
    
        )
  }

  entraDanioDescripcion(event){
    this.datos.DescripcionDanio = event.target.value;
    this.datos.Descripcion = event.target.value;
    this.datos['DescripcionDanio'] = event.target.value;
    this.datos['Descripcion'] = event.target.value;
    localStorage.setItem('laDescripcion', this.idAtencion.toString()+'-'+this.datos.Descripcion);
    localStorage.setItem('datos-DescripcionDanio', event.target.value);
  }

  setDanioDescripcion(danioD){
    this.datos.DescripcionDanio = danioD;
    this.datos.Descripcion = danioD;
    this.datos['DescripcionDanio'] = danioD;
    this.datos['Descripcion'] = danioD;
    localStorage.setItem('laDescripcion', this.idAtencion.toString()+'-'+danioD);
    localStorage.setItem('datos-DescripcionDanio', danioD);
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    //console.dir(query)
    this.results = this.danioSearchable.filter((d) => d.Descripcion.toLowerCase().indexOf(query) > -1);
    console.dir(this.results)
  }

  openDanioSearch(){
    this.isSearch = true;
    this.clearStorageDanios();
    let danioContainer = document.getElementsByClassName('danio-entrada');
    if (this.daniosSelect.length > 0) {
      console.dir(danioContainer);
      
      setTimeout(() => {
        for (let index = 0; index < this.selectedIndex.length; index++) {
          const element = this.selectedIndex[index];
          $('.danio-item').eq(element).addClass('selected');
        }
      }, 1000);
    }
  }

  closeDanioSearch(){
    this.listarDanios();
    //this.listarDaniosExtras();
    this.isSearch = false;
  }

  onLongPress(event){

  }

  eliminaDanio(danioInputId, index, descripcion){
    //alert(danioInputId+', '+index+', '+descripcion);
    console.log('El daño en tabla ajustador :');
    console.dir(this.danios[danioInputId-1]);

    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == danioInputId){
          localStorage.removeItem(localStorage.key(i));
        }
      }
    }

    setTimeout(() => {
      for (let indexDan = 0; indexDan < this.daniosSelect.length; indexDan++) {
        const element = this.daniosSelect[indexDan];
  

        if (indexDan == (this.daniosSelect.length-1)) {
          for (let indexDan = 0; indexDan < this.daniosSelect.length; indexDan++) {
            const elementEnd = this.daniosSelect[indexDan];
            if (elementEnd.Id === danioInputId) {
              this.daniosSelect.splice(index,1);
              localStorage.removeItem('TipoReparacion-'+danioInputId);
              localStorage.removeItem('TipoReparacionIndex-'+danioInputId);
            }
          }

          setTimeout(() => {
            this.listarDanios();
          }, 500);
        }
        
        if (indexDan > index) {
          console.log('En tabla : '+indexDan+', '+element.Id+', '+element.Descripcion+'... Seleccionado : '+danioInputId+', '+index+', '+descripcion); 
          let resta = indexDan-1;
          let elTipo = localStorage.getItem('TipoReparacion-'+element.Id);

          localStorage.setItem('TipoReparacionIndex-'+element.Id, resta.toString()); 
          this.setReparacion(element.Id, elTipo, resta, 2);
          //
        }
        
      }
    }, 300);
  }

  eliminaDanioX(danioInputId, index, tipo, codigo){
    //alert(danioInputId+', '+index+', '+tipo+', '+codigo)
    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectOtro-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == codigo){
          localStorage.removeItem(localStorage.key(i));
          for (let indexDan = 0; indexDan < this.daniosSelectOtro.length; indexDan++) {
            const elementOtr = this.daniosSelectOtro[indexDan];
            if (indexDan > index) {
              let indexNew = indexDan-1;
              console.log('indexDan '+indexDan+', indexNew'+indexNew);
              this.api.ActualizarIndexFront(elementOtr.Id, indexNew).pipe( 
                finalize(async ()=>{
                  this.isLoading = false;
                })
              ).subscribe(
                 async (res) =>{
                  console.dir(res);
                 }
              )
            }

            if (indexDan == (this.daniosSelectOtro.length-1)) {
              this.api.EliminaDanioExtra(danioInputId).pipe( 
                finalize(async ()=>{
                  this.isLoading = false;
                })
              ).subscribe(
                 async (res) =>{
                  console.dir(res);
                  localStorage.removeItem('danioOtro-'+codigo);
                  localStorage.removeItem('TipoReparacionX-'+danioInputId);
                  localStorage.removeItem('TipoReparacionIndexX-'+danioInputId);
    
                  setTimeout(() => {
                    this.recargarDaniosExtras();
                  }, 1200);   
                 }
              ) 
            }
          }
        }
      }
    }
   /* */
  }

  elminaDanioMarcado(i:number){}

  clearStorageDanios(){
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
          localStorage.removeItem(localStorage.key(i));
      }
    }
  }

  entraCompromisoPago(event){
    console.log('Compromiso Pago ');
    console.dir(event)
    this.datos['CompromisoPago'] = event;
    this.datos.CompromisoPago = event;
    localStorage.setItem('elCompromisoPago', this.idAtencion.toString()+'-'+event);
    localStorage.setItem('datos-CulpableCompromisoPago', event);
  }

  setCompromisoPago(Compromiso){
    console.log('Compromiso Pago ');
    console.log(Compromiso)
    
    this.datos['CompromisoPago'] = Compromiso;
    this.datos.CompromisoPago = Compromiso;
    localStorage.setItem('elCompromisoPago', this.idAtencion.toString()+'-'+Compromiso);
    localStorage.setItem('datos-CulpableCompromisoPago', Compromiso);
  }

  entraObservacionCompromisoPago(event){
    this.datos['ObservacionCompromisoPago'] = event.target.value;
    this.datos.ObservacionCompromisoPago = event.target.value;
    localStorage.setItem('elCompromisoPagoObservacion', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-ObservacionCompromisoPago', event.target.value);
  }

  setObservacionCompromisoPago(observacion){
    this.datos['ObservacionCompromisoPago'] = observacion;
    this.datos.ObservacionCompromisoPago = observacion;
    localStorage.setItem('elCompromisoPagoObservacion', this.idAtencion.toString()+'-'+observacion);
    localStorage.setItem('datos-ObservacionCompromisoPago', observacion);
  }

  entraObservaciones(event){
    this.datos['Observaciones'] = event.target.value;
    this.datos['ObservacionesFinales'] = event.target.value;
    localStorage.setItem('lasObservaciones', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-Observaciones', event.target.value);
    localStorage.setItem('datos-ObservacionesFinales', event.target.value);
    
  }

  setObservaciones(observacion){
    this.datos['Observaciones'] = observacion;
    this.datos['ObservacionesFinales'] = observacion;
    localStorage.setItem('lasObservaciones', this.idAtencion.toString()+'-'+observacion);
    localStorage.setItem('datos-Observaciones', observacion);
    localStorage.setItem('datos-ObservacionesFinales', observacion);
  }

  setReserva(valor){

      if (valor === undefined || valor === null || valor === '' || valor === '0' || valor === 0) {
        $('#noReservaTexto').fadeIn();
      }else{
        $('#noReservaTexto').fadeOut();
      }

    console.log('Soy el valor de reserva '+this.valorReserva)
    this.valorReserva = valor;
    localStorage.setItem('laReserva', this.idAtencion.toString()+'-'+this.valorReserva);
    localStorage.setItem('bpmArray-ValorReserva', valor);

  }

  loadSiniestros(){
    this.api.ListTipoSiniestro(3).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.tipoSiniestros = res;
        console.log("Mis siniestros");
        console.dir(this.tipoSiniestros);
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        
      }

    )
  }

  getElTipoSiniestro(event){
    this.elTipoSiniestro = event.target.value;
    localStorage.setItem('elTipoSiniestro', this.idAtencion.toString()+'-'+this.elTipoSiniestro);
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];

      if (element.CODIGO == this.elTipoSiniestro) {
        this.elTipoDeSiniestro = element.DESCRIPCION;
        //$('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
    
  }

  setElTipoSiniestro(tipo){
    //alert(tipo)
    this.elTipoSiniestro = tipo;
    //alert(this.tipoSiniestros.length)
    localStorage.setItem('elTipoSiniestro', this.idAtencion.toString()+'-'+this.elTipoSiniestro);
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];

      //alert(element.CODIGO+', '+this.elTipoSiniestro)
      if (element.CODIGO == this.elTipoSiniestro) {
        this.elTipoDeSiniestro = element.DESCRIPCION;
        //alert(this.elTipoDeSiniestro)
        //$('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
    
  }

  damagePosition(valor:number){
    let posicion;
    switch(valor){
      case 1: posicion = 1;
          localStorage.removeItem('danioPic-'+posicion);
        if (this.formulario.DanioLataralIzquierdo===1){
          localStorage.setItem('datos-DanioLataralIzquierdo', '0');
          this.formulario.DanioLataralIzquierdo=0;
          this.datos.DanioLataralIzquierdo = 0;
        }else{
          localStorage.setItem('danioPic-'+posicion, this.idAtencion.toString()+'-'+posicion);
          localStorage.setItem('datos-DanioLataralIzquierdo', '1');
          this.formulario.DanioLataralIzquierdo=1;
          this.datos.DanioLataralIzquierdo = 1;
        }
        break;
      case 2: posicion = 2;
          localStorage.removeItem('danioPic-'+posicion);
          if (this.formulario.DanioLateralDerecho===1){
            localStorage.setItem('datos-DanioLateralDerecho', '0');
            this.formulario.DanioLateralDerecho=0;
            this.datos.DanioLateralDerecho = 0;
          }else{
            localStorage.setItem('danioPic-'+posicion, this.idAtencion.toString()+'-'+posicion);
            localStorage.setItem('datos-DanioLateralDerecho', '1');
            this.formulario.DanioLateralDerecho=1;
            this.datos.DanioLateralDerecho = 1;
          }
          break;
      case 3: posicion = 3;
            localStorage.removeItem('danioPic-'+posicion);
          if (this.formulario.VehiculoVolcado===1){
            localStorage.setItem('datos-VehiculoVolcado', '0');
            this.formulario.VehiculoVolcado=0;
            this.datos.VehiculoVolcado = 0;
          }else{
            localStorage.setItem('danioPic-'+posicion, this.idAtencion.toString()+'-'+posicion);
            localStorage.setItem('datos-VehiculoVolcado', '1');
            this.formulario.VehiculoVolcado=1;
            this.datos.VehiculoVolcado = 1;
          }
          
          break;
      case 4: posicion = 4;
            localStorage.removeItem('danioPic-'+posicion);
          if (this.formulario.DanioFrontal===1){
            localStorage.setItem('datos-DanioFrontal', '0');
            this.formulario.DanioFrontal=0;
            this.datos.DanioFrontal = 0;
          }else{
            localStorage.setItem('danioPic-'+posicion, this.idAtencion.toString()+'-'+posicion);
            localStorage.setItem('datos-DanioFrontal', '1');
            this.formulario.DanioFrontal=1;
            this.datos.DanioFrontal = 1;
          }
          break;
      case 5: posicion = 5;
            localStorage.removeItem('danioPic-'+posicion);
          if (this.formulario.DanioTrasero===1){
            localStorage.setItem('datos-DanioTrasero', '0');
            this.formulario.DanioTrasero=0;
            this.datos.DanioTrasero = 0;
          }else{
            localStorage.setItem('danioPic-'+posicion, this.idAtencion.toString()+'-'+posicion);
            localStorage.setItem('datos-DanioTrasero', '1');
            this.formulario.DanioTrasero=1;
            this.datos.DanioTrasero = 1;
          }
          break;
      default:
        break;
    } 
  }

  listarDanios(){
    
    this.daniosSelect = [];
    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        let daCode = parseInt(elCodigo);

        let elTipo = localStorage.getItem('TipoReparacion-'+daCode);
        let daType = parseInt(elTipo);
        let elIndex = localStorage.getItem('TipoReparacionIndex-'+daCode);
        let daIndex = parseInt(elIndex);

        setTimeout(() => {
          if (daType === 1) {
            $('.action-repair').eq(daIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
            $('.action-change').eq(daIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
          }else{
            $('.action-repair').eq(daIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
            $('.action-change').eq(daIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
          }  
        }, 2000);

          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          console.log('los select')
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            
            console.log('un daño en danios Select');
            console.dir(elementD)
            console.log(indexSelect+', '+elementD.Id)
            console.log(indexSelect == elementD.Id);

            if (indexSelect == elementD.Id) {
              this.daniosSelect.push(elementD);
            }
            
          }
          
      }
    }
  }

  listarDaniosExtras(){
    console.log('Los daños extras');
    console.dir(this.daniosExtras);

    this.daniosSelectOtro = this.daniosExtras;

    for (let indexExtras = 0; indexExtras < this.daniosExtras.length; indexExtras++) {
      const elementExtras = this.daniosExtras[indexExtras];
      let daType = elementExtras.TipoReparacion;
      let elIndex = elementExtras.indexFront;
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
      //alert((daType != 0)+', '+(daType === 1))
      if (daType != 0) {
        if (daType === 1) {
          $('.action-repair-x').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
          $('.action-change-x').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
        }else{
          $('.action-repair-x').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
          $('.action-change-x').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
        }  
      }else{}

      if (indexExtras == (this.daniosExtras.length-1)) {
        //this.openOtrosDanios();
      }

    }

    /*
    for (let indexExtras = 0; indexExtras < this.daniosExtras.length; indexExtras++) {
      const elementExtras = this.daniosExtras[indexExtras];
      
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
    }

    this.daniosSelectOtro = [];
    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectOtro-') == 0) {
        let elCodigo = localStorage.key(i).split('-')[1];//localStorage.getItem(localStorage.key(i));
        let daIndex = parseInt(elCodigo);

        let elOtro = JSON.parse(localStorage.getItem('danioOtro-'+(daIndex+1)));
        let daOther = this.daniosExtras[daIndex];

        console.log('elOtro'); console.dir(elOtro); console.log(elOtro['Id']); 
        console.dir(this.daniosExtras[daIndex]); console.log(daOther.TipoReparacion)


        let elTipo = elOtro.TipoReparacion;
        let elId = daOther.Id;
        let daType = parseInt(elTipo);
        let elIndexx = localStorage.getItem('TipoReparacionIndexX-'+elId);
        let elIndex = parseInt(elIndexx);

        //let daIndex = parseInt(elIndex);

        if (daOther.TipoReparacion === 0) {
          daType = 1;
          //alert('El tipo de reparación para el index : '+daIndex+', es '+daOther.TipoReparacion)  
          setTimeout(() => {
            if (daType === 1) {
              $('.action-repair-x').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
              $('.action-change-x').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
            }else{
              $('.action-repair-x').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
              $('.action-change-x').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
            }  
          }, 2000);
        }else{
          daType = daOther.TipoReparacion;
          setTimeout(() => {
            if (daType === 1) {
              $('.action-repair-x').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
              $('.action-change-x').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
            }else{
              $('.action-repair-x').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
              $('.action-change-x').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
            }  
          }, 2000);
        }
        

          let indexSelectX = parseInt(localStorage.getItem(localStorage.key(i)));//+1;

          console.log('indexSelectX : ');
          console.dir(indexSelectX);

          console.log('los select')
          for (let indexDanio = 0; indexDanio < this.daniosExtras.length; indexDanio++) {
            const elementD = this.daniosExtras[indexDanio];
            
            console.log('un daño en danios Select');
            console.dir(elementD)
            console.log(indexSelectX+', '+elementD.CodigoDanioFicohsa)
            console.log(indexSelectX == elementD.Id);

            if (indexSelectX == elementD.CodigoDanioFicohsa) {
              this.daniosSelectOtro.push(elementD);
            }
            
          }
          
      }

      

    }
    */
  }

  toastDanio(selectedDanio, selectedId){
    this.danioMessage = selectedDanio; this.danioPosition = 'middle', this.danioClass = 'danio-select';
    this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, selectedId);
  }

  async presentToastDanio(message, position, clase, selectId){
    //this.idSelect = selectId;
    const toast = await this.toast.create({
      message: message,
      color: 'primary',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'ELIMINAR',
          role: 'confirm',
          handler() {

            for (var i = 0; i < localStorage.length; i++){
              if (localStorage.key(i).indexOf('daniosSelect') == 0) {
                let idEliminate = localStorage.getItem(localStorage.key(i));
                let idE = parseInt(idEliminate);
                

                if((idE+1) == selectId){
                  //alert((idE+1)+', Id : '+selectId)
                  localStorage.removeItem(localStorage.key(i));
                  $('#open-modal-recycle').click();
                }
              }

              if (i == (localStorage.length-1)) {
                setTimeout(() => {
                  $('#reloadDaniosButton').click();
                }, 4000);
              }
            }

            setTimeout(() => {
              $('#closeRecycleButton').click();
            }, 6000);
          },
        },
        {
          text: '|'
        },{
          text: 'NO ELIMINAR',
          role: 'cancel'
        },
      ],
    });

    
  
    await toast.present();

    
  }

closeOtrosDanios(){
  this.isXOpen = false;
}

openOtrosDanios(){
  setTimeout(() => {
    if (this.isXOpen === true) {}else{
      $('.ion-accordion-toggle-icon').eq(1).click();
      this.isXOpen = true;
    }
  }, 600);
}

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
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

  eaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
