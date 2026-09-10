import { culpable, personaHn, propiedaPrivadaHn} from './../interfaces/formulario';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { resolveAttentionCurrency } from '../utils/currency-display.util';
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
  
  readonly predicateCliente: MaskitoElementPredicateAsync = async (el) =>(el as unknown as HTMLIonInputElement).getInputElement();
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
  invalidAdeudaFields = new Set<string>();
  pageSource: any;  TipoDeLicencia: string;  NombrePropietario: any;  DireccionPropietario: any;  deudaSent: any;
  danios: any = [];  danioSearchable: any;  resultsCulpable: any = [];  daniosIndex: any;  daniosOtros: any = [];  daniosSelectCulpa: any = [];  selectedIndex: any = [];
  contador: any;  isSearchCulpable: boolean;   danioResults: any = [];  danioMessage: any;  danioPosition: string;
  danioClass: string;  elModelo: any;  isDeudaSent: boolean; isXXOpen:boolean = false; daniosSelectOtroCulpa:any=[];
  daniosExtrasCulpa: any = [];
  licenseSelectOptions = { cssClass: 'form-choice-alert', header: 'Tipo de licencia', subHeader: 'Selecciona una opción' };
  brandSelectOptions = { cssClass: 'form-choice-alert', header: 'Marca del vehículo', subHeader: 'Selecciona una opción' };
  modelSelectOptions = { cssClass: 'form-choice-alert', header: 'Modelo del vehículo', subHeader: 'Selecciona una opción' };
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
    this.listarDanios();
    this.resultsCulpable = this.danioSearchable || this.danios;
    this.isSearchCulpable = true;
  }

  isDanioSelected(danioId: any): boolean {
    return this.daniosSelectCulpa.some((danio) => Number(danio.Id) === Number(danioId));
  }

  private currentAttentionStorageId(): string {
    return (this.idAtencion || this.atencionId || localStorage.getItem('idAtencion') || '').toString();
  }

  private scopedKey(prefix: string, suffix?: any): string {
    const attentionId = this.currentAttentionStorageId();
    return suffix !== undefined && suffix !== null
      ? `${prefix}-${attentionId}-${suffix}`
      : `${prefix}-${attentionId}`;
  }

  private getScopedValue(key: string): string | null {
    return localStorage.getItem(this.scopedKey(key));
  }

  private setScopedValue(key: string, value: any): void {
    localStorage.setItem(this.scopedKey(key), value);
  }

  private isCurrentScopedKey(key: string | null, prefix: string): boolean {
    const attentionId = this.currentAttentionStorageId();
    return !!key && !!attentionId && key.indexOf(`${prefix}-${attentionId}`) === 0;
  }

  private removeCurrentScopedKeys(prefix: string): void {
    const attentionId = this.currentAttentionStorageId();
    const keysToRemove: string[] = [];

    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key && attentionId && key.indexOf(`${prefix}-${attentionId}`) === 0) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
  }

  private persistSelectedDamages() {
    const keysToRemove: string[] = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (this.isCurrentScopedKey(key, 'daniosSelectCulpa')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));

    this.daniosSelectCulpa.forEach((danio) => {
      localStorage.setItem(this.scopedKey('daniosSelectCulpa', danio.Id), danio.Id.toString());
    });
    localStorage.setItem(this.scopedKey('daniosSelectCulpa'), JSON.stringify(this.daniosSelectCulpa));
    this.contador = this.daniosSelectCulpa.length;
  }

  setReparacion(dannioId, tipo, i, origen){
    localStorage.setItem(this.scopedKey('TipoReparacionCulpa', dannioId), tipo);
    localStorage.setItem(this.scopedKey('TipoReparacionCulpaIndex', dannioId), i);

    if (origen === 1) {
      if (tipo === 1) {
        $('.action-repair-culpable').eq(i).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
        $('.action-change-culpable').eq(i).attr("style","background:transparent;color:#7da1c4; width: 100%");  
      }else{
        $('.action-repair-culpable').eq(i).attr("style","background:transparent; color:#0058CB; width: 100%"); 
        $('.action-change-culpable').eq(i).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
      }
    }
    
  }

  clearStorageDanios(){
    for (var i = 0; i < localStorage.length; i++){
      if (this.isCurrentScopedKey(localStorage.key(i), 'daniosSelectCulpa')) {
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
          this.miMoneda = resolveAttentionCurrency(this.expediente[0]);
          this.moneda = this.miMoneda;
          
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
        this.listarDanios();
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
    const damage = this.danios.find((item) => Number(item.Id) === Number(danioId));
    if (!damage) {
      return;
    }

    if (this.isDanioSelected(danioId)) {
      this.eliminaDanio(danioId, posicion, damage.Descripcion);
      return;
    }

    this.daniosSelectCulpa = [...this.daniosSelectCulpa, damage];
    this.persistSelectedDamages();
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
                  localStorage.removeItem(this.scopedKey('danioOtroCulpa', codigo));
                  localStorage.removeItem(this.scopedKey('TipoReparacionX', danioInputId));
                  localStorage.removeItem(this.scopedKey('TipoReparacionIndexX', danioInputId));
    
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
     
     localStorage.setItem(this.scopedKey('TipoReparacionX', dannioId), tipo);
     localStorage.setItem(this.scopedKey('TipoReparacionIndexX', dannioId), i);
 
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


  eliminaDanio(danioInputId, index, descripcion){
    this.daniosSelectCulpa = this.daniosSelectCulpa.filter(
      (danio) => Number(danio.Id) !== Number(danioInputId)
    );
    localStorage.removeItem(this.scopedKey('TipoReparacionCulpa', danioInputId));
    localStorage.removeItem(this.scopedKey('TipoReparacionCulpaIndex', danioInputId));
    this.daniosSelectCulpa.forEach((danio, selectedIndex) => {
      localStorage.setItem(this.scopedKey('TipoReparacionCulpaIndex', danio.Id), selectedIndex.toString());
    });
    this.persistSelectedDamages();
    
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
        const countPayload = Array.isArray(res) ? res[0] : res;
        const othersCount = parseInt(countPayload?.Mensaje ?? countPayload?.mensaje ?? countPayload, 10);
        this.daniosIndex = (Number.isFinite(othersCount) ? othersCount : 0) + 1;

        if (danio) {
          let elementOtro = {
            "RefAtencionId": this.idAtencion,
            "DescripcionDeDanio": danio.toUpperCase(),
            "FechaRegistro": new Date().toISOString(),
            "UsuarioId": this.api.currentUser.ProveedorAgenteId,
            "TipoEntidad": Entidades[1].tipoEntidad,
            "TipoReparacion": 1,
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
              localStorage.setItem(this.scopedKey('daniosSelectOtroCulpa', this.daniosIndex-1), this.daniosIndex);
              localStorage.setItem(this.scopedKey('danioOtroCulpa', this.daniosIndex), JSON.stringify(elementOtro));

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
    const selectedIds = new Set<number>();
    const storedSelection = JSON.parse(localStorage.getItem(this.scopedKey('daniosSelectCulpa')) || '[]') || [];
    storedSelection.forEach((danio) => selectedIds.add(Number(danio.Id)));
    let contenedor = document.getElementsByClassName('input-index');
    let contenedorDescripcion = document.getElementsByClassName('danio-descripcion-input');
    
    let kikiriki = $('.danio-descripcion-input').eq(0).val();
    
    for (var i = 0; i < localStorage.length; i++){
      if (this.isCurrentScopedKey(localStorage.key(i), 'daniosSelectCulpa')) {
        let elCodigo = localStorage.getItem(localStorage.key(i));
        
        let daCode = parseInt(elCodigo);//.split('-')[1];
        selectedIds.add(daCode);
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
        let elTipo = localStorage.getItem(this.scopedKey('TipoReparacionCulpa', daCode));
        let daType = parseInt(elTipo);
        let elIndex = localStorage.getItem(this.scopedKey('TipoReparacionCulpaIndex', daCode));
        let daIndex = parseInt(elIndex);

        setTimeout(() => {
          if (daType === 1) {
            $('.action-repair-culpable').eq(daIndex).attr("style","background:#7da1c4;border-radius:10px; width: 100%"); 
            $('.action-change-culpable').eq(daIndex).attr("style","background:transparent;color:#7da1c4; width: 100%");  
          }else{
            $('.action-repair-culpable').eq(daIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
            $('.action-change-culpable').eq(daIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
          }  
        }, 2000);
        
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              selectedIds.add(Number(elementD.Id));
            }
        }
      }

      if (this.isCurrentScopedKey(localStorage.key(i), 'danioOtroCulpa')) {
        let otroVal = localStorage.getItem(localStorage.key(i));
        console.log('En listar ')
        console.dir(JSON.parse(otroVal));

        //this.daniosSelectCulpa.push(JSON.parse(otroVal));
      }
      
    }

    this.daniosSelectCulpa = this.danios.filter((danio) => selectedIds.has(Number(danio.Id)));
    this.contador = this.daniosSelectCulpa.length;
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
          $('.action-repair-xx').eq(elIndex).attr("style","background:transparent; color:#0058CB; width: 100%"); 
          $('.action-change-xx').eq(elIndex).attr("style","background:#0058CB;border-radius:10px; width: 100%"); 
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
      } else if (this.pageSource === './ajustadorhn') {
        void this.navegador.navigateBack('/ajustadorhn').then((didNav) => {
          if (!didNav) {
            this.router.navigate(['/ajustadorhn'], { replaceUrl: true });
          }
        });
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
      this.setScopedValue('deuda-NombreCulpable', this.culpable.NombreCulpable);
    }
    if (position == 1) {
      this.setScopedValue('deuda-culpableIdentidad', this.culpableIdentidad);
    }
    if (position == 2) {
      this.setScopedValue('deuda-DireccionCulpable', this.culpable.DireccionCulpable);
    }
    if (position == 3) {
      this.setScopedValue('deuda-TelefonoFijoCulpable', this.culpable.TelefonoFijoCulpable);
    }
    if (position == 4) {
      this.setScopedValue('deuda-CelularCulpable', this.culpable.CelularCulpable);
    }
    if (position == 5) {
      this.setScopedValue('deuda-EdadCulpable', this.EdadCulpable);
    }
    if (position == 6) {
      this.setScopedValue('deuda-culpableCorreo', this.culpableCorreo);
    }
    if (position == 7) {
      this.setScopedValue('deuda-culpableTrabajo', this.culpableTrabajo);
    }
    if (position == 8) {
      let daType:number = this.culpable.LicenciaTipoCulpable;
      
      this.TipoDeLicencia = this.tipoLicencia[daType-1].TipoLicencia;
      this.setScopedValue('deuda-LicenciaTipoCulpable', this.culpable.LicenciaTipoCulpable.toString());
    }
    if (position == 9) {
      this.setScopedValue('deuda-NumeroLicenciaCulpable', this.culpable.NumeroLicenciaCulpable);
    }
    if (position == 10) {
      this.setScopedValue('deuda-FechaVencimientoLicenciaCulpable', this.culpable.FechaVencimientoLicenciaCulpable.toString());
    }
    if (position == 11) {
      this.setScopedValue('deuda-MarcaCulpable', this.culpable.MarcaCulpable);
    }
    if (position == 12) {
      this.setScopedValue('deuda-ModeloCulpable', this.culpable.ModeloCulpable);
    }
    if (position == 13) {
      this.setScopedValue('deuda-AnioCulpable', this.culpable.AnioCulpable.toString());
    }
    if (position == 14) {
      this.setScopedValue('deuda-MotorNoCulpable', this.culpable.MotorNoCulpable);
    }
    if (position == 15) {
      this.setScopedValue('deuda-Chasis', this.culpable.Chasis);
    }
    if (position == 16) {
      this.setScopedValue('deuda-NoPlacaCulpable', this.culpable.NoPlacaCulpable);
    }
    if (position == 17) {
      if (this.culpableEsPropietario == true) {
        this.setScopedValue('deuda-NombrePropietarioCulpable', this.culpable.NombreCulpable);  
      }else{
        this.setScopedValue('deuda-NombrePropietarioCulpable', this.NombrePropietario);
      }
    }
    if (position == 18) {
      if (this.culpableEsPropietario == true) {
        this.setScopedValue('deuda-DireccionPropietarioCulpable', this.DireccionCulpable);
      }else{
        this.setScopedValue('deuda-DireccionPropietarioCulpable', this.DireccionPropietario);
      }
      
    }
    if (position == 19) {
      this.setScopedValue('deuda-CompromisoPago', this.culpable.CompromisoPago);
    }
    if (position == 20) {
      this.setScopedValue('deuda-culpableContacto', this.culpableContacto);
    }
    if (position == 21) {
      this.setScopedValue('deuda-culpableContactoNumero', this.culpableContactoNumero);
    }
    if (position == 22) {
      this.setScopedValue('deuda-ObservacionesCulpable', this.culpable.ObservacionesCulpable);
    }
  }

  obtenerCache(){
    let storageKey:any; let storageKeyFix:any; let storageKeyIndex:any; let storageValue:any;
    const deudaPrefix = this.scopedKey('deuda') + '-';
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf(deudaPrefix) == 0) {
        storageKey = localStorage.key(i).replace(deudaPrefix, '');
        storageValue = localStorage.getItem(localStorage.key(i));

        this.culpable[storageKey] = storageValue;
      }

      if (i==(localStorage.length-1)) {
        this.culpableIdentidad = this.getScopedValue('deuda-culpableIdentidad');
        if (this.culpableIdentidad == undefined || this.culpableIdentidad == null || this.culpableIdentidad == '' || this.culpableIdentidad == 'undefined') {
          console.log('culpableIdentidad no existe')
          this.culpableIdentidad = '';
        }

        this.EdadCulpable = parseInt(this.getScopedValue('deuda-EdadCulpable'));
        if (this.EdadCulpable == undefined || this.EdadCulpable == null || this.EdadCulpable == '' || this.EdadCulpable == 'undefined' || isNaN(this.EdadCulpable)) {
          console.log('EdadCulpable no existe')
          this.EdadCulpable = 0;
          //this.EdadCulpable = '';
        }

        this.culpableCorreo = this.getScopedValue('deuda-culpableCorreo');
        if (this.culpableCorreo == undefined || this.culpableCorreo == null || this.culpableCorreo == '' || this.culpableCorreo == 'undefined') {
          console.log('culpableCorreo no existe')
          this.culpableCorreo = '';
        }

        this.culpableTrabajo = this.getScopedValue('deuda-culpableTrabajo');
        if (this.culpableTrabajo == undefined || this.culpableTrabajo == null || this.culpableTrabajo == '' || this.culpableTrabajo == 'undefined') {
          console.log('culpableTrabajo no existe')
          this.culpableTrabajo = '';
        }

        this.culpable.LicenciaTipoCulpable = parseInt(this.getScopedValue('deuda-LicenciaTipoCulpable'));
        if (this.culpable.LicenciaTipoCulpable == undefined || this.culpable.LicenciaTipoCulpable == null) {
          console.log('culpable.LicenciaTipoCulpable no existe')
          //this.culpable.LicenciaTipoCulpable = '';
        }else{
          //alert(this.culpable.LicenciaTipoCulpable+1)
        }

        this.culpableContacto = this.getScopedValue('deuda-culpableContacto');
        if (this.culpableContacto == undefined || this.culpableContacto == null || this.culpableContacto == '' || this.culpableContacto == 'undefined') {
          console.log('culpableContacto no existe')
          this.culpableContacto = '';
        }

        this.culpableContactoNumero = this.getScopedValue('deuda-culpableContactoNumero');
        if (this.culpableContactoNumero == undefined || this.culpableContactoNumero == null || this.culpableContactoNumero == '' || this.culpableContactoNumero == 'undefined') {
          console.log('culpableContactoNumero no existe')
          this.culpableContactoNumero = '';
        }

        this.culpable.MarcaCulpable = this.getScopedValue('deuda-MarcaCulpable');
        if (this.culpable.MarcaCulpable == undefined || this.culpable.MarcaCulpable == null || this.culpable.MarcaCulpable == '' || this.culpable.MarcaCulpable == 'undefined') {
          console.log('culpable.MarcaCulpable no existe')
          //this.culpable.MarcaCulpable = '';
        }
        
        let idLicenciaTipo:number = parseInt(this.getScopedValue('deuda-LicenciaTipoCulpable'));
        if (idLicenciaTipo == undefined || idLicenciaTipo == null) {
          console.log('idLicenciaTipo no existe')
          //idLicenciaTipo = '';
        }

        let culpaEsPro = this.getScopedValue('deuda-culpableEsPropietario') === 'true';
        if (culpaEsPro == undefined || culpaEsPro == null) {
          console.log('culpaEsPro no existe');
          
        }else{
          this.culpableEsPropietario = culpaEsPro;
          if (culpaEsPro == true) {
            this.CulpableNombre = this.culpable.NombreCulpable;
            this.CulpableDireccion = this.culpable.DireccionCulpable;
          }else{
            this.NombrePropietario = this.getScopedValue('deuda-NombrePropietarioCulpable');
            this.DireccionPropietario = this.getScopedValue('deuda-DireccionPropietarioCulpable');
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
    this.setScopedValue('deuda-culpableEsPropietario', this.culpableEsPropietario.toString());
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


      ahora.setHours(0, 0, 0, 0);
      fechaVigencia.setHours(0, 0, 0, 0);
      this.vigente = fechaVigencia >= ahora;

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
    this.invalidAdeudaFields = new Set<string>();
    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      this.atencionId = parseInt(this.idAtencion, 10);
    }

    this.syncPropietarioFields();

    const vigenteDate = this.parseFechaVencimientoLicencia();
    if (!vigenteDate) {
      this.isLoading = false;
      return;
    }

    const missingLabels = this.collectMissingAdeudaFields();
    if (missingLabels.length > 0) {
      this.isDataMissing = true;
      this.esCompromiso = !this.invalidAdeudaFields.has('compromisoPago');
      this.presentToastNoButtonsYellow('Faltan datos, por favor revise!', 'top', 'warning');
      this.isLoading = false;
      return;
    }

    this.isDataMissing = false;
    this.esCompromiso = true;
    this.toaster.dismissToast();

    const expedienteActual = this.expediente?.[0] || {};
    const tipoLicenciaSeleccionada = this.tipoLicencia.find(
      (licencia) => Number(licencia.Id) === Number(this.culpable.LicenciaTipoCulpable)
    );

    this.reconocimientoDeuda = {
      Id: 0,
      NombreDeudor: this.culpable.NombreCulpable,
      IdentidadDeudor: this.culpableIdentidad,
      Edad: parseInt(String(this.EdadCulpable), 10),
      Celular: this.culpable.CelularCulpable.toString(),
      Domicilio: this.culpable.DireccionCulpable,
      CorreoElectronico: this.culpableCorreo,
      LugarDeTrabajo: this.culpableTrabajo,
      NombreContacto: this.culpableContacto,
      CelularContacto: this.culpableContactoNumero.toString(),
      FechaRegistroDocumento: this.fechaFirma,
      Marca: expedienteActual.Marca,
      Modelo: expedienteActual.Modelo,
      Anio: expedienteActual.Year,
      Placa: expedienteActual.NumeroPlaca,
      NombreAsegurado: expedienteActual.Cliente,
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
      FirmaDeudor: 'string',
      Ciudad: expedienteActual.Ciudad,
      TelefonoCulpable: this.culpable.TelefonoFijoCulpable.toString(),
      LicenciaCulpable: this.culpable.NumeroLicenciaCulpable,
      TipoLicencia: this.culpable.LicenciaTipoCulpable.toString(),
      FechaVencimientoLicencia: vigenteDate,
      NombreDireccionPropietarioVehiculoImplicado: this.CulpableDireccion,
      RefTipoFotografiaIdAdeudado: 0,
      RefTipoFotografiaIdBeneficiario: 0,
      CompromisoDePago: parseInt(String(this.culpable.CompromisoPago), 10),
      Observaciones: this.culpable.ObservacionesCulpable,
      PolizaExterna: expedienteActual.PolizaExterna,
      TipoLicenciaDescripcion: tipoLicenciaSeleccionada?.TipoLicencia || this.TipoDeLicencia,
      DaniosComunes: this.mapCommonDamagesForDeuda(this.daniosSelectCulpa),
      DaniosManuales: this.mapManualDamagesForDeuda(this.daniosSelectOtroCulpa)
    };

    try {
      localStorage.setItem(this.scopedKey('deuda'), JSON.stringify(this.reconocimientoDeuda));
      localStorage.setItem(this.scopedKey('daniosSelectCulpa'), JSON.stringify(this.mapCommonDamagesForDeuda(this.daniosSelectCulpa)));
      localStorage.setItem(this.scopedKey('daniosSelectOtroCulpaDetalle'), JSON.stringify(this.mapManualDamagesForDeuda(this.daniosSelectOtroCulpa)));
      localStorage.setItem('poliza', expedienteActual.PolizaExterna || this.poliza || '');
      localStorage.setItem('datos-Poliza', expedienteActual.PolizaExterna || this.poliza || '');
      localStorage.setItem('telFijo', this.telFijo);
      localStorage.setItem('fechaFirma', this.fechaFirma);
    } catch {
      this.presentToastNoButtonsYellow('No se pudo guardar el borrador del acuerdo. Revise los daños seleccionados.', 'top', 'warning');
      this.isLoading = false;
      return;
    }

    this.isLoading = false;
    this.navegador.navigateForward('/adeuda');
  }

  private mapCommonDamagesForDeuda(damages: any[] = []): Array<{ Id: unknown; Codigo: unknown; Descripcion: string }> {
    return (damages || []).map((damage) => ({
      Id: damage?.Id,
      Codigo: damage?.Codigo ?? damage?.Id,
      Descripcion: damage?.Descripcion || damage?.DescripcionDeDanio || ''
    }));
  }

  private mapManualDamagesForDeuda(damages: any[] = []): Array<{ Id: unknown; DescripcionDeDanio: string; Descripcion: string }> {
    return (damages || []).map((damage) => ({
      Id: damage?.Id,
      DescripcionDeDanio: damage?.DescripcionDeDanio || damage?.Descripcion || '',
      Descripcion: damage?.Descripcion || damage?.DescripcionDeDanio || ''
    }));
  }

  private syncPropietarioFields(): void {
    if (this.culpableEsPropietario) {
      this.CulpableNombre = this.culpable.NombreCulpable;
      this.CulpableDireccion = this.culpable.DireccionCulpable;
      return;
    }

    this.CulpableNombre = this.NombrePropietario;
    this.CulpableDireccion = this.DireccionPropietario;
  }

  private parseFechaVencimientoLicencia(): string | null {
    const vDate = this.culpable.FechaVencimientoLicenciaCulpable;
    if (vDate == undefined || vDate == null || String(vDate).trim() === '') {
      this.presentToastNoButtonsYellow('Fecha vacía!', 'top', 'warning');
      this.invalidAdeudaFields = new Set(['vigenciaLicencia']);
      this.colorVigente = false;
      return null;
    }

    this.colorVigente = true;
    const dater = new Date();
    const time = 'T' +
      String(dater.getHours()).padStart(2, '0') + ':' +
      String(dater.getMinutes()).padStart(2, '0') + ':' +
      String(dater.getSeconds()).padStart(2, '0');
    const dias = vDate.toString().substring(0, 2);
    const mes = vDate.toString().substring(3, 5);
    const anio = vDate.toString().substring(6, vDate.toString().length);

    if (parseInt(mes, 10) > 12) {
      this.presentToastNoButtonsYellow('Fecha no válida!', 'top', 'warning');
      this.invalidAdeudaFields = new Set(['vigenciaLicencia']);
      this.colorVigente = false;
      return null;
    }

    return anio + '-' + mes + '-' + dias + time;
  }

  private collectMissingAdeudaFields(): string[] {
    const missing: string[] = [];
    const invalid = new Set<string>();

    this.flagIfMissing(invalid, 'nombreCulpable', this.culpable?.NombreCulpable, 'Nombre del conductor', missing);
    this.flagIfMissing(invalid, 'identidadCulpable', this.culpableIdentidad, 'Número de identidad', missing);
    this.flagIfMissing(invalid, 'edadCulpable', this.EdadCulpable, 'Edad', missing);
    this.flagIfMissing(invalid, 'direccionCulpable', this.culpable?.DireccionCulpable, 'Dirección', missing);
    this.flagIfMissing(invalid, 'telefonoCulpable', this.culpable?.TelefonoFijoCulpable, 'Teléfono', missing);
    this.flagIfMissing(invalid, 'celularCulpable', this.culpable?.CelularCulpable, 'Celular', missing);
    this.flagIfMissing(invalid, 'correoCulpable', this.culpableCorreo, 'Correo electrónico', missing);
    this.flagIfMissing(invalid, 'trabajoCulpable', this.culpableTrabajo, 'Lugar de trabajo', missing);
    this.flagIfMissing(invalid, 'licenciaTipo', this.culpable?.LicenciaTipoCulpable, 'Tipo de licencia', missing);
    this.flagIfMissing(invalid, 'numeroLicencia', this.culpable?.NumeroLicenciaCulpable, 'Número de licencia', missing);
    this.flagIfMissing(invalid, 'marcaCulpable', this.culpable?.MarcaCulpable, 'Marca', missing);
    this.flagIfMissing(invalid, 'modeloCulpable', this.culpable?.ModeloCulpable, 'Modelo', missing);
    this.flagIfMissing(invalid, 'anioCulpable', this.culpable?.AnioCulpable, 'Año', missing);
    this.flagIfMissing(invalid, 'motorCulpable', this.culpable?.MotorNoCulpable, 'Motor', missing);
    this.flagIfMissing(invalid, 'chasisCulpable', this.culpable?.Chasis, 'Chasis', missing);
    this.flagIfMissing(invalid, 'placaCulpable', this.culpable?.NoPlacaCulpable, 'Número de placa', missing);
    this.flagIfMissing(invalid, 'propietarioNombre', this.CulpableNombre, 'Nombre del propietario', missing);
    this.flagIfMissing(invalid, 'propietarioDireccion', this.CulpableDireccion, 'Dirección del propietario', missing);
    this.flagIfMissing(invalid, 'compromisoPago', this.culpable?.CompromisoPago, 'Compromiso de pago', missing);
    this.flagIfMissing(invalid, 'contactoNombre', this.culpableContacto, 'Nombre del contacto', missing);
    this.flagIfMissing(invalid, 'contactoNumero', this.culpableContactoNumero, 'Número de contacto', missing);
    this.flagIfMissing(invalid, 'observacionesCulpable', this.culpable?.ObservacionesCulpable, 'Descripción de los daños', missing);

    this.invalidAdeudaFields = invalid;
    return missing;
  }

  private flagIfMissing(
    invalid: Set<string>,
    fieldKey: string,
    value: unknown,
    label: string,
    missing: string[]
  ): void {
    if (this.isBlankAdeudaValue(value)) {
      invalid.add(fieldKey);
      missing.push(label);
    }
  }

  private isBlankAdeudaValue(value: unknown): boolean {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'number') {
      return Number.isNaN(value);
    }

    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      return normalized === '' || normalized === 'undefined' || normalized === 'null';
    }

    return false;
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
