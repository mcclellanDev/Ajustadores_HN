import { culpable, personaHn, propiedaPrivadaHn} from './../interfaces/formulario';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { Router, ActivatedRoute, ActivationStart, RouterOutlet } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { marcasVehiculos } from '../environments/vehicles';
import { tipoLicencia} from './../interfaces/formulario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { adeudaEtiquetas, requiredData } from '../environments/predeterminados';
import { culpableData } from '../interfaces/arrays';
import * as $ from 'jquery';
import { Entidades } from '../interfaces/extras';

@Component({
  selector: 'app-culpable',
  templateUrl: './culpable.page.html',
  styleUrls: ['./culpable.page.scss'],
})
export class CulpablePage implements OnInit {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  
  readonly predicateCliente: MaskitoElementPredicateAsync = async (el) =>(el as HTMLIonInputElement).getInputElement();
  readonly idMask: MaskitoOptions = {
    mask: [/\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/,/\d/,],
  }

  readonly idMaskFechaVencimiento: MaskitoOptions = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,],
  }

  readonly phoneMask: MaskitoOptions = {
    mask: ['(', '5', '0', '4', ')', ' ', /\d/, /\d/,/\d/, /\d/, ' ', /\d/, /\d/,/\d/, /\d/,],
  }
  readonly yearMask: MaskitoOptions = {
    mask: [/\d/, /\d/,/\d/, /\d/,],
  }
  readonly kmMask: MaskitoOptions = {
    mask: [/\d/, /\d/,/\d/, /\d/, /\d/, /\d/, /\d/,],
  }
  readonly emailMask: MaskitoOptions = {
    mask: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,],
  }

  culpable: culpable={};  modelosMarca:any=[];  elExpediente:any=[];  reconocimientoDeuda:any=[];  tipoLicencia: tipoLicencia[]=[];
  dataSiniestro:any=[];  deuda:any=[];  poliza:any;  telFijo:any;  fechaFirma:any;  idAtencion:any;  atencionId:number;
  isLoading:boolean=false;  marcasVehiculos:any=marcasVehiculos;  culpableCorreo:any;  culpableTrabajo:any;  culpableContacto:any;
  culpableContactoNumero:any;  culpableIdentidad:any;  culpableEsPropietario:boolean;  expediente: any;  moneda: any;
  miMoneda: string;  DireccionPropietarioCulpable: any;  EdadCulpable: any;  formateadaVigencia: string;  vigenciaIcon: string;
  isVisible: boolean=false; marcasVehiculosFicohsa:any=[];  vigente: any; nulos:any=[]; DireccionCulpable:any; NombreCulpable:any;
  CulpableNombre: any;  CulpableDireccion: any; isDataMissing:boolean=true; colorVigente:boolean = true; esCompromiso:boolean=false;
  pageSource: any;  TipoDeLicencia: string;  NombrePropietario: any;  DireccionPropietario: any;  deudaSent: any;
  danios: any = [];  danioSearchable: any;  resultsCulpable: any = [];  daniosIndex: any;  daniosOtros: any = [];  daniosSelectCulpa: any = [];  selectedIndex: any = [];
  contador: any;  isSearchCulpable: boolean;   danioResults: any = [];  danioMessage: any;  danioPosition: string;
  danioClass: string;  elModelo: any;  isDeudaSent: boolean; isXXOpen:boolean = false; daniosSelectOtroCulpa:any=[];
  daniosExtrasCulpa: any = [];
  constructor(private loading: LoadingController,private api: ApiService, private router: Router, private route:ActivatedRoute,
    private toaster:ToastService, private toast:ToastController, private navegador: NavController) { 
      
     
    this.telFijo = localStorage.getItem('telFijo');
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    this.deudaSent = localStorage.getItem('deudaSent'); //=== 'true';
    console.log('Aqui el dato de la deuda');

    if (this.deudaSent) {
      this.isDeudaSent = this.deudaSent.toString().split('-')[0] === 'true';
    let deudaSentId = this.deudaSent.toString().split('-')[1];
    if (this.isDeudaSent == true && (this.idAtencion=== deudaSentId)) {
      console.log('Deuda enviada')
      console.log(this.isDeudaSent)
    }else{
      this.isDeudaSent = false;
    }
    }

    this.api.DatosDeAtencion(this.idAtencion).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        if (res.length > 0) {
          this.dataSiniestro = res;
          console.log("Mis datos de atencion");
          console.dir(this.dataSiniestro);
          
        }else{
          //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
        }
        
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      }

    )

    this.poliza = localStorage.getItem('poliza');
    this.fechaFirma = localStorage.getItem('fechaFirma');
    this.api.DatosDeAtencion(this.idAtencion).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        if (res.length > 0) {
          this.elExpediente = res;
          console.log("Mis datos de atencion");
          console.dir(this.dataSiniestro);
        }else{
          //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
        }
        
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      }

    )

    this.getDanios();

    //this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
/*
    if (this.fechaFirma == undefined || this.fechaFirma == "undefined" || this.fechaFirma == null) {
      this.toaster.presentToastNoButtonsYellow('Aun no se ha guardado datos para esta atención.', 'top', 'culpable');
    }else{
    }
    */
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.resultsCulpable = this.danioSearchable.filter((d) => d.Descripcion.toLowerCase().indexOf(query) > -1);
  }

  openDanioSearch(){
    this.isSearchCulpable = true;
    //this.clearStorageDanios();
    let danioContainer = document.getElementsByClassName('danio-entrada');
    if (this.daniosSelectCulpa.length > 0) {
      console.dir(danioContainer);
      
      setTimeout(() => {
        for (let index = 0; index < this.selectedIndex.length; index++) {
          const element = this.selectedIndex[index];
          $('.danio-item-culpa').eq(element).addClass('selected');
        }
      }, 1000);
    }
  }

  setReparacion(dannioId, tipo, i, origen){
    localStorage.setItem('TipoReparacionCulpa-'+dannioId, tipo);
    localStorage.setItem('TipoReparacionCulpaIndex-'+dannioId, i);

    if (origen === 1) {
      if (tipo === 1) {
        $('.action-repair-culpable').eq(i).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
        $('.action-change-culpable').eq(i).attr("style","background:transparent;color:#7da1c4; width: 100%");  
      }else{
        $('.action-repair-culpable').eq(i).attr("style","background:transparent; color:#10069f; width: 100%"); 
        $('.action-change-culpable').eq(i).attr("style","background:#10069f;border-radius:10px; width: 100%"); 
      }
    }
    
  }

  clearStorageDanios(){
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectCulpa') == 0) {
          localStorage.removeItem(localStorage.key(i));
      }
    }
  }

  ngOnInit() {
    //this.isLoading = true;
    this.route.queryParams.subscribe(params => {
      this.pageSource= params.pageSource;
    })

    console.log('Caches en storage :');
    setTimeout(() => {
      this.listarDanios();
      this.listarDaniosExtras();
    }, 1000);

    setTimeout(() => {
      this.obtenerCache();
    }, 2000);

    
          

    this.getTipoLicencia(3);
    
    this.api.ListMarcasVehiculosFicohsa().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       (res) =>{
        console.log(res, 'respuesta marcas');
        this.marcasVehiculosFicohsa = res;
        let conteo = 10;

        for (let indexM = 0; indexM < this.marcasVehiculosFicohsa.length; indexM++) {
          const elementM = this.marcasVehiculosFicohsa[indexM];
          this.marcasVehiculos.push(
            {
              "id": conteo,
              "nombre": elementM.DESCRIPCION,
              "modelos": []
            }
          )
          conteo+=1;
        }
       }
    )
    /**/

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
            this.miMoneda = "Lempiras";
          }else{
            this.miMoneda = this.moneda.Moneda;
          }
          
         }
      )
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
        this.resultsCulpable = res;
        this.daniosIndex = this.danios.length;
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'danios');
      }

    )

    this.api.ObtenerDaniosExtras(this.idAtencion, Entidades[1].tipoEntidad).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        //alert('Aca bien')
        this.daniosExtrasCulpa = res;
       },
       async (error) =>{
        //alert('Aca mal')
        console.log('Acá mal : '+error[0].Message);
       }
    )
  }

  entraDanioCulpable(danioId, posicion){
    for (let index = 0; index < this.danios.length; index++) {
      const element = this.danios[index];

      console.log('Daño');
      console.dir(JSON.stringify(element))

      console.dir(element)
      console.log(element.Id+', '+danioId)
      console.log(element.Id===danioId);
      if (element.Id===danioId) {
        let elItem = $('.danio-item-culpa').eq(index);

      if (elItem.hasClass("selected")) {
        this.eliminaDanio(danioId, posicion, element.Descripcion);
        elItem.removeClass('selected');
      }else{
        this.daniosSelectCulpa.push(element);
        this.contador = this.daniosSelectCulpa.length;
        localStorage.setItem('daniosSelectCulpa-'+posicion, danioId);  
        elItem.addClass('selected');
      }
      }

      
    }
    /**/
    
  }

  eliminaDanioX(danioInputId, index, tipo, codigo){
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectOtroCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == codigo){
          localStorage.removeItem(localStorage.key(i));
          for (let indexDan = 0; indexDan < this.daniosSelectOtroCulpa.length; indexDan++) {
            const elementOtr = this.daniosSelectOtroCulpa[indexDan];
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

            if (indexDan == (this.daniosSelectOtroCulpa.length-1)) {
              this.api.EliminaDanioExtra(danioInputId).pipe( 
                finalize(async ()=>{
                  this.isLoading = false;
                })
              ).subscribe(
                 async (res) =>{
                  console.dir(res);
                  localStorage.removeItem('danioOtroCulpa-'+codigo);
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
  }

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
         $('.action-repair-x').eq(i).attr("style","background:transparent; color:#10069f;width:100%"); 
         $('.action-change-x').eq(i).attr("style","background:#10069f;border-radius:10px;width:100%"); 
       }
     }
     */
   }


  eliminaDanio(danioInputId, index, descripcion){
    //alert(danioInputId+', '+index+', '+descripcion);
    console.log('El daño en tabla :');
    console.dir(this.danios[danioInputId-1]);

    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == danioInputId){
          localStorage.removeItem(localStorage.key(i));
        }
      }
    }
    
    setTimeout(() => {
      for (let indexDan = 0; indexDan < this.daniosSelectCulpa.length; indexDan++) {
        const element = this.daniosSelectCulpa[indexDan];
  

        if (indexDan == (this.daniosSelectCulpa.length-1)) {
          for (let indexDan = 0; indexDan < this.daniosSelectCulpa.length; indexDan++) {
            const elementEnd = this.daniosSelectCulpa[indexDan];
            if (elementEnd.Id === danioInputId) {
              this.daniosSelectCulpa.splice(index,1);
              localStorage.removeItem('TipoReparacionCulpa-'+danioInputId);
              localStorage.removeItem('TipoReparacionCulpaIndex-'+danioInputId);
            }
          }
        }
        
        if (indexDan > index) {
          console.log('En tabla : '+indexDan+', '+element.Id+', '+element.Descripcion+'... Seleccionado : '+danioInputId+', '+index+', '+descripcion); 
          let resta = indexDan-1;
          let elTipo = localStorage.getItem('TipoReparacionCulpa-'+element.Id);
          
          //alert('el index '+indexDan+' va a cambiar a '+resta+', y su tipo es'+elTipo);

          localStorage.setItem('TipoReparacionCulpaIndex-'+element.Id, resta.toString()); 
          this.setReparacion(element.Id, elTipo, resta, 2);
          //
        }
        
      }
    }, 300);
    
    /*
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let idEliminate = localStorage.getItem(localStorage.key(i));
        let idE = parseInt(idEliminate);
        if((idE) == danioInputId){
          localStorage.removeItem(localStorage.key(i));
        }
      }

      if (localStorage.key(i).indexOf('danioOtroCulpa-') == 0) {
        let storageObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (storageObject.Id == danioInputId) {
          console.log('tengo algo de extra, '+localStorage.key(i)+', '+localStorage.getItem(localStorage.key(i)));  
          localStorage.removeItem('danioOtroCulpa-'+danioInputId);
        }
        
      }

      if (i == (localStorage.length-1)) {
        //this.listarDanios();
        console.log('seleccionados')
        console.dir(this.daniosSelectCulpa)
        for (let index = 0; index < this.daniosSelectCulpa.length; index++) {
          const element = this.daniosSelectCulpa[index];
          console.log(element.Id+', '+danioInputId);
          
          //alert(index === (this.daniosSelectCulpa.length-1));
          //if (index === (this.daniosSelectCulpa.length-1)) {
          for (let indexStore = 0; indexStore < localStorage.length; indexStore++) {
            if (localStorage.key(indexStore).indexOf('TipoReparacionCulpaIndex-') == 0) {
              if (indexStore == 0) {
                
              }
              //alert(localStorage.getItem(localStorage.key(indexStore)));
            }
          }
          //}

          if (element.Id === danioInputId) {
            this.daniosSelectCulpa.splice(index,1);
            localStorage.removeItem('TipoReparacionCulpa-'+danioInputId);
            localStorage.removeItem('TipoReparacionCulpaIndex-'+danioInputId);
          }

          //alert(index === (this.daniosSelectCulpa.length-1));
          

        }
      }
    }
    */
  }

  elminaDanioMarcado(i:number){
    /*
    this.daniosSelectCulpa.splice(i,1);
    this.selectedIndex.splice(i,1);
    */
  }

  toastDanio(selectedDanio, selectedId, index){
    console.dir(this.daniosSelectCulpa);
    console.log(selectedId+', '+selectedDanio+', '+index)
    this.danioMessage = selectedDanio; this.danioPosition = 'middle', this.danioClass = 'danio-select';
    this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, selectedId, index);
  }

  async presentToastDanio(message, position, clase, selectId, index){
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

            this.daniosSelectCulpa.splice(index,1);
            this.selectedIndex.splice(index,1);
                  
            for (var i = 0; i < localStorage.length; i++){
              if (localStorage.key(i).indexOf('daniosSelectCulpa') == 0) {
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

  entraDanioOtro(danio){

    let indexFront = this.daniosSelectOtroCulpa.length;

    this.api.ContarOtrosDanios().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        console.log('Conteo de Otros : '+res[0].Mensaje);
        let othersCount = parseInt(res[0].Mensaje);
        this.daniosIndex = othersCount+1;

        if (danio) {
          let elementOtro = {
            "RefAtencionId": this.idAtencion,
            "DescripcionDeDanio": danio.toUpperCase(),
            "FechaRegistro": new Date().toISOString(),
            "UsuarioId": this.api.currentUser.ProveedorAgenteId,
            "TipoEntidad": Entidades[1].tipoEntidad,
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
              this.daniosSelectOtroCulpa.push(elementOtro);
              localStorage.setItem('selectedIndex-xx' ,JSON.stringify(this.daniosIndex));
              localStorage.setItem('daniosSelectOtroCulpa-'+(this.daniosIndex-1), this.daniosIndex);
              localStorage.setItem('danioOtroCulpa-'+this.daniosIndex, JSON.stringify(elementOtro));

              setTimeout(() => {
                this.recargarDaniosExtras();
              }, 300);
             }
          )

        }
       }
    )
    
  }

  listarDanios(){
    
    this.daniosSelectCulpa = [];
    let contenedor = document.getElementsByClassName('input-index');
    let contenedorDescripcion = document.getElementsByClassName('danio-descripcion-input');
    
    let kikiriki = $('.danio-descripcion-input').eq(0).val();
    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        
        let daCode = parseInt(elCodigo);//.split('-')[1];
        console.log('elCodigo '+daCode);

        for (let indexDan = 0; indexDan < this.danios.length; indexDan++) {
          const element = this.danios[indexDan];
          console.log(element.Descripcion+', kikiriki'+kikiriki);
          for (let indexDes = 0; indexDes < contenedorDescripcion.length; indexDes++) {
            const elementDes = contenedorDescripcion[indexDes];
            let estaDescripcion = $('.danio-descripcion-input').eq(indexDes).val();
            if (element.Descripcion === estaDescripcion) {
              //alert(element.Descripcion);  
            }
            
          }
        }

        //console.dir(elCodigo.split('-')[1]);
        let elTipo = localStorage.getItem('TipoReparacionCulpa-'+daCode);
        let daType = parseInt(elTipo);
        let elIndex = localStorage.getItem('TipoReparacionCulpaIndex-'+daCode);
        let daIndex = parseInt(elIndex);

        setTimeout(() => {
          if (daType === 1) {
            $('.action-repair-culpable').eq(daIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
            $('.action-change-culpable').eq(daIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
          }else{
            $('.action-repair-culpable').eq(daIndex).attr("style","background:transparent; color:#10069f; width: 100%"); 
            $('.action-change-culpable').eq(daIndex).attr("style","background:#10069f;border-radius:10px; width: 100%"); 
          }  
        }, 2000);
        
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              this.daniosSelectCulpa.push(elementD);
              console.dir(elementD);
            }
        }
      }

      if (localStorage.key(i).indexOf('danioOtroCulpa-') == 0) {
        let otroKey = parseInt(localStorage.key(i).split('-')[1]);
        let otroVal = localStorage.getItem(localStorage.key(i));
        console.log('En listar ')
        console.dir(JSON.parse(otroVal));

        //this.daniosSelectCulpa.push(JSON.parse(otroVal));
      }
      
    }
  }

  closeOtrosDanios(){
    this.isXXOpen = false;
  }

  recargarDaniosExtras(){
    this.api.ObtenerDaniosExtras(this.idAtencion, Entidades[1].tipoEntidad).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.daniosExtrasCulpa = res;
        this.listarDaniosExtras();
       }
    )
  }

  listarDaniosExtras(){
    console.log('Los daños extras');
    console.dir(this.daniosExtrasCulpa);

    this.daniosSelectOtroCulpa = this.daniosExtrasCulpa;

    for (let indexExtras = 0; indexExtras < this.daniosExtrasCulpa.length; indexExtras++) {
      const elementExtras = this.daniosExtrasCulpa[indexExtras];
      let daType = elementExtras.TipoReparacion;
      let elIndex = elementExtras.indexFront;
      //alert('El elemento en el index '+elementExtras.indexFront+', es tipo '+elementExtras.TipoReparacion);
      //this.daniosSelectOtro.push(elementExtras);
      //alert((daType != 0)+', '+(daType === 1))
      if (daType != 0) {
        if (daType === 1) {
          $('.action-repair-xx').eq(elIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
          $('.action-change-xx').eq(elIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
        }else{
          $('.action-repair-xx').eq(elIndex).attr("style","background:transparent; color:#10069f; width: 100%"); 
          $('.action-change-xx').eq(elIndex).attr("style","background:#10069f;border-radius:10px; width: 100%"); 
        }  
      }

    }

  }

  closeDanioSearch(){
    this.listarDanios();
    this.isSearchCulpable = false;
  }

  seleccionarMarcaCulpable(idMarca){
    this.modelosMarca = [];
    let idVehiculo = idMarca.target.value;
        for (let index = 0; index < marcasVehiculos.length; index++) {
          const element = marcasVehiculos[index];
          if(element.id == idVehiculo){
            this.culpable.MarcaCulpable = element.nombre;
            this.modelosMarca = element.modelos;
            console.dir(this.modelosMarca)
          }
        }
  }

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }

  handleBack(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (this.pageSource == './expediente') {
        this.router.navigate([this.pageSource], { queryParams: { Id: this.idAtencion, Source:1 } });    
      } else {
        this.router.navigate([this.pageSource]);  
      }
      
    }, 2000);
    
  }

  outletDeactivate(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1")
        this.outlet.deactivate();
    });
  }

  async presentToastHome(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if(currentToast.length > 0){
      this.toast.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toast.create({
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

  seleccionarModeloCulpable(idModelo){
    this.elModelo = this.modelosMarca[idModelo.target.value];
    this.culpable.ModeloCulpable = idModelo.target.value;
    //console.log(this.culpable.ModeloCulpable)
  }

  entraNombreCulpable(event){
    this.culpable.NombreCulpable = event.target.value;
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
    
  }

  entraNombrePropietarioCulpable(event){
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
    this.NombrePropietario = event.target.value;
  }

  entraCorreoCulpable(event){
    this.culpableCorreo = event.target.value;
  }

  entraTrabajoCulpable(event){
    this.culpableTrabajo = event.target.value;
  }

  entraContactoCulpable(event){
    this.culpableContacto = event.target.value;
  }

  entraContactoMNumeroCulpable(event){
    this.culpableContactoNumero = event.target.value;
  }

  entraIdentidadCulpable(event){
    this.culpableIdentidad = event.target.value;
    
  }

  guardaCache(position){
    if (position == 0) {
      localStorage.setItem('deuda-NombreCulpable', this.culpable.NombreCulpable);
    }
    if (position == 1) {
      localStorage.setItem('deuda-culpableIdentidad', this.culpableIdentidad);
    }
    if (position == 2) {
      localStorage.setItem('deuda-DireccionCulpable', this.culpable.DireccionCulpable);
    }
    if (position == 3) {
      localStorage.setItem('deuda-TelefonoFijoCulpable', this.culpable.TelefonoFijoCulpable);
    }
    if (position == 4) {
      localStorage.setItem('deuda-CelularCulpable', this.culpable.CelularCulpable);
    }
    if (position == 5) {
      localStorage.setItem('deuda-EdadCulpable', this.EdadCulpable);
    }
    if (position == 6) {
      localStorage.setItem('deuda-culpableCorreo', this.culpableCorreo);
    }
    if (position == 7) {
      localStorage.setItem('deuda-culpableTrabajo', this.culpableTrabajo);
    }
    if (position == 8) {
      let daType:number = this.culpable.LicenciaTipoCulpable;
      
      this.TipoDeLicencia = this.tipoLicencia[daType-1].TipoLicencia;
      localStorage.setItem('deuda-LicenciaTipoCulpable', this.culpable.LicenciaTipoCulpable.toString());
    }
    if (position == 9) {
      localStorage.setItem('deuda-NumeroLicenciaCulpable', this.culpable.NumeroLicenciaCulpable);
    }
    if (position == 10) {
      localStorage.setItem('deuda-FechaVencimientoLicenciaCulpable', this.culpable.FechaVencimientoLicenciaCulpable.toString());
    }
    if (position == 11) {
      localStorage.setItem('deuda-MarcaCulpable', this.culpable.MarcaCulpable);
    }
    if (position == 12) {
      localStorage.setItem('deuda-ModeloCulpable', this.culpable.ModeloCulpable);
    }
    if (position == 13) {
      localStorage.setItem('deuda-AnioCulpable', this.culpable.AnioCulpable.toString());
    }
    if (position == 14) {
      localStorage.setItem('deuda-MotorNoCulpable', this.culpable.MotorNoCulpable);
    }
    if (position == 15) {
      localStorage.setItem('deuda-Chasis', this.culpable.Chasis);
    }
    if (position == 16) {
      localStorage.setItem('deuda-NoPlacaCulpable', this.culpable.NoPlacaCulpable);
    }
    if (position == 17) {
      if (this.culpableEsPropietario == true) {
        localStorage.setItem('deuda-NombrePropietarioCulpable', this.culpable.NombreCulpable);  
      }else{
        localStorage.setItem('deuda-NombrePropietarioCulpable', this.NombrePropietario);
      }
    }
    if (position == 18) {
      if (this.culpableEsPropietario == true) {
        localStorage.setItem('deuda-DireccionPropietarioCulpable', this.DireccionCulpable);
      }else{
        localStorage.setItem('deuda-DireccionPropietarioCulpable', this.DireccionPropietario);
      }
      
    }
    if (position == 19) {
      localStorage.setItem('deuda-CompromisoPago', this.culpable.CompromisoPago);
    }
    if (position == 20) {
      localStorage.setItem('deuda-culpableContacto', this.culpableContacto);
    }
    if (position == 21) {
      localStorage.setItem('deuda-culpableContactoNumero', this.culpableContactoNumero);
    }
    if (position == 22) {
      localStorage.setItem('deuda-ObservacionesCulpable', this.culpable.ObservacionesCulpable);
    }
  }

  obtenerCache(){
    let storageKey:any; let storageKeyFix:any; let storageKeyIndex:any; let storageValue:any;
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('deuda-') == 0) {
        storageKey = localStorage.key(i).split('-')[1];
        storageValue = localStorage.getItem(localStorage.key(i));

        this.culpable[storageKey] = storageValue;
      }

      if (i==(localStorage.length-1)) {
        this.culpableIdentidad = localStorage.getItem('deuda-culpableIdentidad');
        if (this.culpableIdentidad == undefined || this.culpableIdentidad == null || this.culpableIdentidad == '' || this.culpableIdentidad == 'undefined') {
          console.log('culpableIdentidad no existe')
          this.culpableIdentidad = '';
        }

        this.EdadCulpable = parseInt(localStorage.getItem('deuda-EdadCulpable'));
        if (this.EdadCulpable == undefined || this.EdadCulpable == null || this.EdadCulpable == '' || this.EdadCulpable == 'undefined' || isNaN(this.EdadCulpable)) {
          console.log('EdadCulpable no existe')
          this.EdadCulpable = 0;
          //this.EdadCulpable = '';
        }

        this.culpableCorreo = localStorage.getItem('deuda-culpableCorreo');
        if (this.culpableCorreo == undefined || this.culpableCorreo == null || this.culpableCorreo == '' || this.culpableCorreo == 'undefined') {
          console.log('culpableCorreo no existe')
          this.culpableCorreo = '';
        }

        this.culpableTrabajo = localStorage.getItem('deuda-culpableTrabajo');
        if (this.culpableTrabajo == undefined || this.culpableTrabajo == null || this.culpableTrabajo == '' || this.culpableTrabajo == 'undefined') {
          console.log('culpableTrabajo no existe')
          this.culpableTrabajo = '';
        }

        this.culpable.LicenciaTipoCulpable = parseInt(localStorage.getItem('deuda-LicenciaTipoCulpable'));
        if (this.culpable.LicenciaTipoCulpable == undefined || this.culpable.LicenciaTipoCulpable == null) {
          console.log('culpable.LicenciaTipoCulpable no existe')
          //this.culpable.LicenciaTipoCulpable = '';
        }else{
          //alert(this.culpable.LicenciaTipoCulpable+1)
        }

        this.culpableContacto = localStorage.getItem('deuda-culpableContacto');
        if (this.culpableContacto == undefined || this.culpableContacto == null || this.culpableContacto == '' || this.culpableContacto == 'undefined') {
          console.log('culpableContacto no existe')
          this.culpableContacto = '';
        }

        this.culpableContactoNumero = localStorage.getItem('deuda-culpableContactoNumero');
        if (this.culpableContactoNumero == undefined || this.culpableContactoNumero == null || this.culpableContactoNumero == '' || this.culpableContactoNumero == 'undefined') {
          console.log('culpableContactoNumero no existe')
          this.culpableContactoNumero = '';
        }

        this.culpable.MarcaCulpable = localStorage.getItem('deuda-MarcaCulpable');
        if (this.culpable.MarcaCulpable == undefined || this.culpable.MarcaCulpable == null || this.culpable.MarcaCulpable == '' || this.culpable.MarcaCulpable == 'undefined') {
          console.log('culpable.MarcaCulpable no existe')
          //this.culpable.MarcaCulpable = '';
        }
        
        let idLicenciaTipo:number = parseInt(localStorage.getItem('deuda-LicenciaTipoCulpable'));
        if (idLicenciaTipo == undefined || idLicenciaTipo == null) {
          console.log('idLicenciaTipo no existe')
          //idLicenciaTipo = '';
        }

        let culpaEsPro = localStorage.getItem('deuda-culpableEsPropietario') === 'true';
        if (culpaEsPro == undefined || culpaEsPro == null) {
          console.log('culpaEsPro no existe');
          
        }else{
          this.culpableEsPropietario = culpaEsPro;
          if (culpaEsPro == true) {
            this.CulpableNombre = this.culpable.NombreCulpable;
            this.CulpableDireccion = this.culpable.DireccionCulpable;
          }else{
            this.NombrePropietario = localStorage.getItem('deuda-NombrePropietarioCulpable');
            this.DireccionPropietario = localStorage.getItem('deuda-DireccionPropietarioCulpable');
            this.CulpableNombre = this.NombrePropietario;
            this.CulpableDireccion = this.DireccionPropietario;
          }
        }
      }
    }
    
  }

  async getTipoLicencia(paisIdentidad){
    const load = await this.loading.create();
    await  load.present();
    
    this.api.TipoDeLicencia(paisIdentidad).pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
        this.tipoLicencia = res;
      },
      async (res) => {
        /*
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
        });
        await alert.present();
      }
      */
      }
    )
  }

  cambiarPropietario(event){
    this.culpableEsPropietario = event.detail.checked;
    localStorage.setItem('deuda-culpableEsPropietario', this.culpableEsPropietario.toString());
    if (this.culpableEsPropietario == true) {
      this.CulpableNombre = this.culpable.NombreCulpable;
      this.CulpableDireccion = this.culpable.DireccionCulpable;
    }else{
      this.CulpableNombre = this.NombrePropietario;
      this.CulpableDireccion = this.DireccionPropietario;
    }
  }

  entraVencimiento(event) {
    let vigenciaLength = event.target.value.length;
    if (vigenciaLength < 10) {
      this.isVisible = false;
    }else{
      this.isVisible = true;
      var dateFormat = event.target.value.split('T')[0]; 
      console.log('dateFormat '+ dateFormat)
      let dia = dateFormat.toString().substring(0,2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);

      let laFormateada = anio+'-'+mes+'-'+dia;
      this.formateadaVigencia = laFormateada;
      
      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      this.vigente;
      let ahora = new Date(nowDate);
      let fechaVigencia = new Date(laFormateada);

      console.log(new Date(nowDate)+', '+new Date(anio, mes, dia));
      console.log(new Date(nowDate) > new Date(laFormateada));
      console.log(ahora.getFullYear()+', '+anio);
      console.log(ahora.getFullYear() > anio);
///////////////////////////////////////////////////////////////////


      if(ahora.getFullYear() > anio){
        this.vigente = false;
      }else{
        this.vigente = true;
      }

      setTimeout(() => {
        if (this.vigente == false) {
          localStorage.setItem('dataProcess-LicenciaEstadoCulpable', '2');
        }else{
          localStorage.setItem('dataProcess-LicenciaEstadoCulpable', '1');
        }  
      }, 1000);
      

      /*
      console.log(this.formateadaVigencia)
      let fechaVigencia = new Date(this.formateadaVigencia).toISOString();
      console.log(fechaVigencia)
      localStorage.setItem('dataProcess-VigenciaCulpable', fechaVigencia);
      
      console.log('Finalmente la vigencia es '+fechaVigencia)
      */
    }
    
  }

  
  print(item)
  {
    //console.log(item);
  }

  goAdeuda(){
    this.isLoading = true;
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      this.atencionId = parseInt(this.idAtencion);
    }

      let dater = new Date();
      let time = 'T'+dater.getHours()+':'+dater.getMinutes()+':'+dater.getSeconds();
      let vDate = this.culpable.FechaVencimientoLicenciaCulpable;
      if(vDate == undefined|| vDate==null){
        this.isLoading = false;
        this.presentToastNoButtonsYellow('Fecha vacía!', 'top', 'warning');
        $('#vigenciaInput').attr('style', 'border-bottom: 1px solid red');
        $('#vigenciaLabel').attr('style', 'color: red');
        this.colorVigente = false;
      }else{
        
        $('#vigenciaInput').attr('style', 'border-bottom: 1px solid lightgray');
        $('#vigenciaLabel').attr('style', 'color: lightgray');
        this.colorVigente = true;
        console.log('Arreglando lo de la fecha :'+this.culpable.FechaVencimientoLicenciaCulpable);
        let dias = vDate.toString().substring(0,2);
        let mes = vDate.toString().substring(3,5);
        let anio = vDate.toString().substring(6,vDate.toString().length);
        console.log('dias : '+dias+', mes : '+mes+', Año : '+anio);
      
        let vigenteDate:any;

        if (parseInt(mes) > 12) {
          this.presentToastNoButtonsYellow('Fecha no válida!', 'top', 'warning');
          this.isLoading = false;
          this.colorVigente = false;
        }else{
          this.colorVigente = true;
          vigenteDate = anio+'-'+mes+'-'+dias+time;
          let culpableCelular:any; let culpableContactoNumero:any; let culpableTelefono:any; let culpableLicenciaTipo:any;
          let inputValue:any; let evaluar:any; let contenedor:any;
          // data-input data-input-prop data-input-text
          let inputDataContainer = document.getElementsByClassName('data-input');
          let inputDataSelectContainer = document.getElementsByClassName('data-input-select');

         //alert(this.culpable.CompromisoPago)

         setTimeout(() => {
            if (this.culpable.CompromisoPago == undefined) {
              this.isDataMissing = true;
              this.esCompromiso = false;
            } else {
              this.isDataMissing = false;
              this.esCompromiso = true;
            }
          }, 600);


          setTimeout(() => {
            this.nulos = [];
            for (let index = 0; index < inputDataContainer.length; index++) {
              const element = inputDataContainer[index];
              inputValue = $('.data-input').eq(index).val();
              
              if(inputValue == '') {
                $('.data-input').eq(index).attr('style', 'border-bottom: 1px solid red');
                this.nulos.push({indexNull:index});
              }else{
                $('.data-input').eq(index).attr('style', 'border-bottom: 1px solid lightgray');
              }
    
              if (index==(inputDataContainer.length-1)) {
                if (this.nulos.length > 0) {
                  this.isDataMissing = true;
                }else{
                  this.isDataMissing = false;
                }
              }
            }
          }, 1000);


          setTimeout(() => {
            this.nulos = [];
            for (let index = 0; index < inputDataSelectContainer.length; index++) {
              const element = inputDataSelectContainer[index];
              inputValue = $('.data-input-select').eq(index).val();
              //alert(inputValue)
              if(inputValue == undefined || inputValue == '') {
                $('.data-input-select').eq(index).attr('style', 'border-bottom: 1px solid red');
                this.nulos.push({indexNull:index});
              }else{
                $('.data-input-select').eq(index).attr('style', 'border-bottom: 1px solid lightgray');
              }
    
              if (index==(inputDataSelectContainer.length-1)) {
                if (this.nulos.length > 0) {
                  this.isDataMissing = true;
                }else{
                  this.isDataMissing = false;
                }
              }
            }
          }, 1800);

          
          
          setTimeout(() => {
          if (this.isDataMissing == false) {
            this.toaster.dismissToast();
            this.reconocimientoDeuda = {
              Id: 0,
              NombreDeudor: this.culpable.NombreCulpable,
              IdentidadDeudor: this.culpableIdentidad,
              Edad: parseInt(this.EdadCulpable),
              Celular: this.culpable.CelularCulpable.toString(),
              Domicilio: this.culpable.DireccionCulpable,
              CorreoElectronico: this.culpableCorreo, // pendiente, agregar a formulario
              LugarDeTrabajo: this.culpableTrabajo, // pendiente, agregar a formulario
              NombreContacto: this.culpableContacto, // pendiente, agregar a formulario
              CelularContacto: this.culpableContactoNumero.toString(), // pendiente, agregar a formulario
              FechaRegistroDocumento: this.fechaFirma,
              Marca: 'this.elExpediente[0].Marca',
              Modelo: 'this.elExpediente[0].Modelo',
              Anio: 'this.elExpediente[0].Year',
              Placa: 'this.elExpediente[0].NumeroPlaca',
              NombreAsegurado: 'this.elExpediente[0].Cliente',
              MarcaImplicado: this.culpable.MarcaCulpable,
              ModeloImplicado: this.culpable.ModeloCulpable,
              AnioImplicado: this.culpable.AnioCulpable,
              PlacaImplicado: this.culpable.NoPlacaCulpable,
              MotorImplicado: this.culpable.MotorNoCulpable,
              ChasisImplicado: this.culpable.Chasis,
              NombrePersonaPropiedadImplicada: this.CulpableNombre,
              DanioCausadoObservacion: this.culpable.ObservacionesCulpable,
              RefAtencionId: this.atencionId,
              FechaRegistro: this.fechaFirma,
              FirmaDeudor: "string",
              Ciudad: 'this.elExpediente[0].Ciudad', // pendiente, agregar a formulario
              TelefonoCulpable: this.culpable.TelefonoFijoCulpable.toString(),
              LicenciaCulpable: this.culpable.NumeroLicenciaCulpable,
              TipoLicencia: this.culpable.LicenciaTipoCulpable.toString(),
              FechaVencimientoLicencia: vigenteDate,
              NombreDireccionPropietarioVehiculoImplicado: this.CulpableDireccion,
              RefTipoFotografiaIdAdeudado: 0,
              RefTipoFotografiaIdBeneficiario: 0,
              CompromisoDePago: parseInt(this.culpable.CompromisoPago),
              Observaciones: this.culpable.ObservacionesCulpable
            }



            // NombrePersonaPropiedadImplicada  // NombreDireccionPropietarioVehiculoImplicado
        
            //this.reconocimientoDeuda.NombrePersonaPropiedadImplicada = $('.data-input').eq(14).val();
            this.reconocimientoDeuda.NombreDireccionPropietarioVehiculoImplicado = $('.data-input').eq(15).val();

            setTimeout(() => {
              console.log('Los daños');
              console.dir(this.daniosSelectCulpa);

              console.dir(this.reconocimientoDeuda);
              localStorage.setItem('deuda', JSON.stringify(this.reconocimientoDeuda));
              localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));
              localStorage.setItem('poliza',this.poliza);
              localStorage.setItem('telFijo', this.telFijo);
              localStorage.setItem('fechaFirma', this.fechaFirma);
              this.isLoading = false;
              //alert(this.reconocimientoDeuda.length)
              this.router.navigate(['./adeuda']);
            }, 4000);
              
            
          }else{
            this.presentToastNoButtonsYellow('Faltan datos, porfavor revise!', 'top', 'warning');
            this.isLoading = false;
          }
        }, 3000);
        }
     
    }
  }

  isValidDate(d) {
    var timestamp = Date.parse(d);

    if (isNaN(timestamp) == false) {
      var dat = new Date(timestamp);
      return dat;
    }else{
      return 'No voo';
    }
  }

  async presentToastNoButtonsYellow(message, position, color) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
    if(currentToast.length > 0){
        this.toast.dismiss();
    }
    //await this.toast.dismiss();
    const toast = await this.toast.create({
      message: message,
      color: color,
      duration: 60000,
      position: position,
      cssClass: ['custom-toast'],
      buttons: [
        /*{
          text: 'CORREGIR',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
//            this.location.back()
            //window.location.reload()
          }
        }
        */
      ],
    });
  
  
    await toast.present();
  }

}
