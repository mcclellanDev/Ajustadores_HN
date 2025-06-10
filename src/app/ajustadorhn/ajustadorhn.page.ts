import { Marca } from 'src/app/interfaces/marca';
import { emptySignature } from './../environments/default-images';
import { segments_aju } from '../environments/segments';
import { marcasVehiculos } from '../environments/vehicles';
import { ToastService } from './../services/toast.service';
import { SignatureService } from '../services/signature.service';
import { tipoSolicitante, tipoLicencia, tipoFirma, tipoCombustible, Formulario, ajustadorHn } from './../interfaces/formulario';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, ToastController, PopoverController, Platform, InfiniteScrollCustomEvent, 
  CheckboxCustomEvent, IonModal, AnimationController, IonAccordionGroup, ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { tiposTransmision } from '../environments/vehicles';
import { finalize } from 'rxjs/operators';
import SignaturePad from 'signature_pad';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { PopoverPage } from '../popover/popover.page';
import { DomSanitizer} from '@angular/platform-browser';
import { Preferences } from '@capacitor/preferences';
import { imagePrefix, emptySignatureWhite } from '../environments/default-images';
import { meses } from '../environments/calendario';
import { Talleres, rangoAnios } from '../environments/talleres';
import domtoimage from 'dom-to-image';
import { FormatosService } from '../services/formatos.service';
import { Predeterminados, ItemsData, requiredData, requiredDataLabels, valoresPredeterminados } from '../environments/predeterminados';

import * as $ from 'jquery';
import { parse } from 'path';
import { Entidades } from '../interfaces/extras';

const USER_DATA = 'MY_USER_DATA';
@Component({
  selector: 'app-ajustadorhn',
  templateUrl: './ajustadorhn.page.html',
  styleUrls: ['./ajustadorhn.page.scss'],
})
export class AjustadorhnPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  @ViewChild('modalNulosAju') modal: IonModal;
    //DECLARACION
    //@ViewChild('imagen') imagen: ElementRef;
  
  readonly predicate: MaskitoElementPredicateAsync = async (el) =>(el as HTMLIonInputElement).getInputElement();
  readonly idMask: MaskitoOptions = {
    mask: [/\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/,/\d/,],
  }
  readonly idMaskFechaVencimiento: MaskitoOptions = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,],
  }
  readonly phoneMask: MaskitoOptions = {
    mask: ['+','(','5','0','4',')',' ', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/,],
  }
  readonly phoneMaskGuate: MaskitoOptions = {
    mask: ['+','(','5','0','2',')',' ', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,/\d/, /\d/,],
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


// /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  public results = [];  ajustador: ajustadorHn={};  tipoSolicitante: tipoSolicitante[]=[];  tipoLicencia: tipoLicencia[]=[];  tipoFirma: tipoFirma[]=[];
  tipoCombustible:tipoCombustible[]=[];  navigateExtra: NavigationExtras[]=[];  preloadedSignature:SignatureService;  dataAppend:any;  arrai:any=[];  dataBPM:any=[];
  talleres:any=[];  dataBPMupdate:any=[];  danios:any=[];  daniosSelectAju:any=[];  danioResults:any=[];  daniosOtros:any=[];  nulosAtencion:any=[];  danioOtro:any;
  bpmArray:any;  siniestro:any=[    {miPais:"HN", url:"GuardarSiniestroHN"},    {miPais:"GT", url:"GuardarSiniestro"}  ];  guardarURL:any;  segments_aju:any=segments_aju
  daSegment:any="person";  marcas:any=[];  modelos:any=[];  elUsuario:any=[];  tipoGeneros:any=[];  tipoParentescos:any=[];  tipoSiniestros:any=[];
  formulario: Formulario= {};  valoresPredeterminados:any=[];  imageHeight:any;  miLogRespuesta:any=[];  codigoReclamo:any;  codigoBPM:any;  marcasVehiculos:any=marcasVehiculos
  modelosMarca:any=[]; tiposTransmision= tiposTransmision; isDate:boolean=false;  tiposdeCobertura:any;  isEditSig:boolean=false;  isEeexittoooo:boolean=false;  isUpdateBPM:boolean=false;
  isSearch:boolean=false;  esTipoSolicitante:boolean=false;  esFirma:boolean=false;  isSignature:any;  valorReserva:any;  idTablaAjustador:any;  codigoBPMFicohsa:any;
  codigoReclamoFicohsa:any;  idAtencion:any;  idReclamo:any;  firstInterval:any;  geoInterval:any;  editInterval:any;  elTipoSolicitante:any;  elTipoLicenciaId:any;
  elTipoLicencia:any;  elTipoGenero:any;  inicialGenero:any;  elTipoParentesco:any;  elTipoSiniestro:any;  licenciaTipo:any;  formateada:any;  latitud:any;  longitud:any;
  laLocalidad:any=[];  miLocalidad:any=[];  coordinates:any;  miPais:any;  miPaisNombre:any;  paisId:number;  codigoPais:any;  myIndex:any;  formateadaAjustador:any;
  formateadaSiniestro:any;  formateadaInspeccion:any;  ajustadorNombre:any;  aseguradoNombre:any;  elExpediente:any;  elExpedienteIdAjustadorAudiencia:any;
  elExpedienteAjustador:any;  elExpedienteAjustadorAudienciaId:any;  elExpedienteCliente:any;  elExpedienteClienteIdentidad:any;  elExpedienteClienteIdentidadNF:any;
  elExpedienteClienteTelefono:any;  elExpedienteClienteCorreo:any;  elExpedienteClienteFechaSiniestro:any;  elExpedienteClienteFechaInspeccion:any;  elExpedienteMarca:any;
  elExpedienteModelo:any;  elExpedienteAnio:any;  elExpedientePlaca:any;  elExpedienteMotor:any;  elExpedienteKilometraje:any;  elExpedienteSerie:any;  laFechaSiniestroInspeccion:any;
  laFechaInspeccion:any;  esMarca:boolean=false;  estaCompleto:boolean=false;  isKeyboard: boolean;  isLoading: boolean;  mydate:any;  mydateAjustador:any;  isTablet:boolean;
  esSiniestro:boolean;  esInspeccion:boolean;  canDismiss = false;  presentingElement = null;  enGrua:boolean;  plataforma:any;  dispositivo:any;  firmaPrecargada:any;
  tallerOtro:any = '';  tallerOtroDireccion:any=''; firmaPrecargadaInspector:any;  nombreDelConductor:any;  dataSiniestro:any=[];  danioSearchable:any=[];  elFiniquito:any=[];
  datos:any=[];  mascaraTelefono:any;  myCanvasImage:any;  contador:number=0;  daniosIndex:number;  dOtroDescripcion:string;  canvasAseguradoWidth: any = 0;  panelWidth:any;
  fechaParrafo:any;  fechaPie:any;  now:any;  diaPie :any;  mesPie :any;  anioPie:any;  dia :any;  mes :any;  anio:any;  talleresFiltrados:any=[];  tipoDeCobertura:any;
  
  //sig: SignaturePad;
  menu=[false,false,false,false,false,false,false,false,false,false];  inputInicialGenero: any;  esPesado: any = '2';  idAjustador: any;  validaNulosAju: any[];
  AjustadorFiltro: any[]; requiredD = requiredData;  requiredDLabels = requiredDataLabels;  cantidadNulos: number;  fechaValida: boolean=true; // Debug : fechaValida
  atencionId: number; expediente: any; moneda: any;  miMoneda: string; isBPMcomplete:boolean=false;
  daDate: Date;  identidadCliente: any;  nombreCliente: any;  elTelefonoOrigen: any; elCorreoElectronico:any; laMarcaAsegurado:any;  elModeloAsegurado: any;
  elAnioAsegurado:any; elChasisAsegurado:any; elNumeroPlacaAsegurado:any; elMotorAsegurado:any; isFirstTime:boolean=true; clickCount:number=0;
  laPolizaExternaAsegurado: any;contadorSegmentos:number=0; segmentoTitulo:any;  storageKeys: any=[]; countTrue:number=0; fechaInspeccion:any;
  danioMessage:string; danioPosition:string; danioClass:string; storageArrayFilter:any=[];  idSelect: any;  storageArrayIndexs: any[];  storageArrayStrings: any[];
  sucessIcon:any; ssucessIconRecycle:any; losParentescos:any=[];  idTabla: any;  audienciaId: any;  cacheCliente: any[]; OtrosTalleres:any;
  elParentesco: any; refreshIcon:any; isRefreshing:boolean = false; isPressed:boolean=false; deudaSent:boolean;
  acompaniantes: any = [];  testigos: any = [];  lesionados: any = [];  propiedades: any = [];
  fechaInspeccionLocal: string;

  // INICIALIZACION
  constructor(private router: Router, private loading: LoadingController, private alert: AlertController,
    private api: ApiService, private toast: ToastController, private platform:Platform, private so: ScreenOrientation,
    private geo:NativeGeocoder, public toaster:ToastService, private popControl:PopoverController, private sanitizer: DomSanitizer,
    private formateador:FormatosService, private animationCtrl: AnimationController, private thisModal:ModalController) { 

      this.OtrosTalleres = localStorage.getItem('OtrosTalleres');

      for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).indexOf('acompaniante') == 0) {
          console.log('Un acompañante');
          let elAcompa = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.acompaniantes.push(elAcompa);
        }
        if (localStorage.key(i).indexOf('testigos') == 0) {
          console.log('Un testigo');
          let elTest = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.testigos.push(elTest);
        }
        if (localStorage.key(i).indexOf('lesionados') == 0) {
          console.log('Un testigo');
          let elLesionado = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.lesionados.push(elLesionado);
        }
        if (localStorage.key(i).indexOf('propiedadesprivadas') == 0) {
          console.log('Un lesionado');
          let lapropiedad = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.propiedades.push(lapropiedad);
        }


        
      }

      this.deudaSent = localStorage.getItem('deudaSent') === 'true';
      if (this.deudaSent == true) {
        console.log(this.deudaSent)
      }else{
        this.deudaSent = false;
      }

      this.ssucessIconRecycle = '../../assets/img/papel.gif';
      this.refreshIcon =  '../../assets/img/recargar-1.svg';
      this.sucessIcon = '../../assets/img/guardado.gif';
      this.imageHeight = 300;
      this.isLoading = true;
      this.now = new Date();
      
      this.diaPie = this.now.getDate();
      this.mesPie = this.now.getMonth();
      this.anioPie = this.now.getFullYear();
      this.daDate = new Date(); // Temporalmente la fecha actual del sistema
      this.dia = this.daDate.getDate();
      this.mes = this.daDate.getMonth();
      this.anio = this.daDate.getFullYear();
      console.log('Id del mes '+ meses[this.mes].mes)
      console.log( meses[this.mes].mes)
      this.fechaParrafo = this.dia+' de '+ meses[this.mes].mes+' de '+this.anio;
      this.fechaPie = (this.diaPie)+ ' días'+' del mes de '+ meses[this.mesPie].mes+' de '+this.anioPie;

      this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
      //this.ajustadorNombre = localStorage.getItem('nombreAjustador');

      

      setTimeout(() => {
        this.setFirstSegment()
      }, 1000);


      this.idAtencion = localStorage.getItem('idAtencion');
      console.log('La atencion es '+this.idAtencion)
      this.atencionId = parseInt(this.idAtencion);
      let dIdAtencion = parseInt(this.idAtencion);
      this.api.DatosDeAtencion(dIdAtencion).pipe( 
        finalize(async ()=>{
          this.isLoading = false;
        })
      ).subscribe(
         async (res) =>{
          this.dataSiniestro = res;
          console.log("Mis datos de atencion");
          console.dir(this.dataSiniestro);
          for (let index = 0; index < ItemsData.length; index++) {
            const element = ItemsData[index].nombre;
            let elElemento = this.dataSiniestro[0][element];
            this.identidadCliente = this.dataSiniestro[0].IdentidadCliente;
            this.elTipoLicencia = this.dataSiniestro[0].RefTipoLicenciaId;
            //console.log(this.dataSiniestro[0][element]);
            if(elElemento == null || elElemento == undefined){
              this.nulosAtencion.push(element);
            }
            if (index == (ItemsData.length-1)) {
              console.log('los elementos vacios');
              console.dir(this.nulosAtencion)
            }
          }
        },
        async (res) => {
          this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        }
  
      )

      this.api.Expediente(dIdAtencion).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
        //this.isLoading = false;
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          console.log('Mi querido expediente es :');
          console.dir(this.elExpediente)
          console.log(this.elExpediente[0].Cliente);

          // Setups date from register, if there is not a date set it up as today
          
          
          let hoy = localStorage.getItem('FechaHora');//this.elExpediente[0].FechaRegistro;
          let ahora = new Date().toLocaleString();
          //let inspeccionFecha = ahora.getFullYear()+'-'+ahora.getMonth()+'-'+ahora.getDate()+''
          console.log('Esto es ahora : '+ahora+' ///////////////////////////////////////////////////////////');

          this.fechaInspeccion = new Date().toISOString();
//          localStorage.setItem('datos-FechaHora', this.fechaInspeccion);
          localStorage.setItem('datos-FechaHora', this.elExpediente[0].FechaRegistro);
          

          this.marcarFecha(hoy);
          this.marcarFechaAjustador(ahora);
          this.marcarFechaInspeccion(hoy);

          /*
          console.log('Esto es hoy'+ hoy);
          if (hoy != null){
            
          }else{
            hoy = new Date().toISOString();
            this.marcarFecha(hoy);
            this.marcarFechaAjustador(ahora);
            this.marcarFechaInspeccion(hoy);
          }
          */

          this.elFiniquito = {
            NombreCliente: this.elExpediente[0].Cliente, // de la info del asegurado
            Poliza: this.elExpediente[0].PolizaExterna, // de la info del asegurado
            RefAtencionId: this.idAtencion, // de la info del asegurado
            Marca: this.elExpediente[0].Marca, // de la info del asegurado
            Modelo: this.elExpediente[0].Modelo, // de la info del asegurado
            Anio: this.elExpediente[0].Year, // de la info del asegurado
            Placa: this.elExpediente[0].NumeroPlaca, // de la info del asegurado
            Chasis: this.elExpediente[0].Chasis, // de la info del asegurado
            Motor: this.elExpediente[0].Motor, // de la info del asegurado
      
            // variables desde inputs
            NumeroReclamo: 'string', // despues de crear el reclamo
            FechaDesde: "2023-11-14T19:55:55.849Z", // Input directo
            FechaHasta: "2023-11-14T19:55:55.849Z", // Input directo
            TipoCoberturaFicohsa: "string", // Input directo
            NombreQuienRecibe: "string", // Input directo
            IdentidadQuienRecibe: "string", // Input directo
            NumeroCheque: "string", // Input directo
            FechaDelCheque: "2023-11-14T19:55:55.849Z", // Input directo
            ValorDelCheque: 0, // Input directo
            NombreAFavor: "string", // Input directo
            FechaFirma: this.fechaPie, // Input directo
            FirmaCliente: "string", // Desde el canvas

          }

          let thisThing = {
            "NumeroReclamo": "string",
            "FechaDesde": "2024-07-12T01:05:45.677Z",
            "FechaHasta": "2024-07-12T01:05:45.677Z",
            "NombreCliente": "string",
            "TipoCoberturaFicohsa": "string",
            "FechaFirma": "2024-07-12T01:05:45.677Z",
            "FirmaCliente": "string",
            "NombreQuienRecibe": "string",
            "IdentidadQuienRecibe": "string",
            "NumeroCheque": "string",
            "FechaDelCheque": "2024-07-12T01:05:45.677Z",
            "ValorDelCheque": 0,
            "NombreAFavor": "string",
            
            
            "Poliza": "string",
            "RefAtencionId": 0,
            "Marca": "string",
            "Modelo": "string",
            "Anio": 0,
            "Placa": "string",
            "Chasis": "string",
            "Motor": "string"
          }

          localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));

          this.nombreCliente = this.elExpediente[0].Cliente;
          this.elTelefonoOrigen = this.elExpediente[0].TelefonoOrigen;
          this.elCorreoElectronico = this.elExpediente[0].CorreoElectronico;
          this.laMarcaAsegurado = this.elExpediente[0].Marca;
          this.elModeloAsegurado = this.elExpediente[0].Modelo;
          this.elAnioAsegurado = this.elExpediente[0].Year;
          this.elChasisAsegurado = this.elExpediente[0].Chasis;
          this.elNumeroPlacaAsegurado = this.elExpediente[0].NumeroPlaca;
          this.elMotorAsegurado = this.elExpediente[0].Motor;
          this.laPolizaExternaAsegurado = this.elExpediente[0].PolizaExterna;

          this.moneda = this.elExpediente[0].Moneda;
          if (this.moneda == null) {
            this.miMoneda = "Lempiras";
            localStorage.setItem('miMoneda', this.miMoneda);
          }else{
            this.miMoneda = this.moneda.Moneda;
            localStorage.setItem('miMoneda', this.miMoneda);
          }



          
          // OJO
          if (this.elExpediente[0].IdentidaConductor) {
            console.log('La identidad de este man es :'+this.elExpediente[0].IdentidaConductor);
            this.datos['IdentidaConductor'] = this.elExpediente[0].IdentidaConductor;
          }else{}

          
          this.laFechaSiniestroInspeccion = new Date();
          //toaster.presentToast(this.laFechaSiniestroInspeccion, 'top', 'algo');

          //this.ajustadorNombre = localStorage.getItem('nombreAgente');
          this.aseguradoNombre = this.elExpediente[0].Cliente;
          this.getTiposDeCobertura();
          this.loadParentescos();
          this.loadSiniestros();
          this.loadGeneros();
          this.getTalleres();
          //this.filtrarTalleres();
          //this.getDanios();
      
          this.valoresPredeterminados = [
            {
              puntoServicio: "307",
              Sucursal: "0001",
              Producto: "AU01",
              Ramo: "0002",
              Causa: "A001"
            }
          ]

          //console.log('La data del tipo de conductor es : '+ this.dataSiniestro[0].RefTipoConductorId);

          this.elExpedienteAjustador = this.elExpediente[0].Nombre;
          this.elExpedienteAjustadorAudienciaId = this.elExpediente[0].IdAjustador;
          this.elExpedienteCliente = this.elExpediente[0].Cliente;
          this.elExpedienteClienteIdentidad = this.elExpediente[0].IdentidaConductor;
          this.elExpedienteClienteTelefono = this.elExpediente[0].TelefonoOrigen;
          this.elExpedienteClienteCorreo = this.elExpediente[0].CorreoElectronico;
          this.elExpedienteClienteFechaSiniestro = this.elExpediente[0].FechaRegistro;
          
          let fechaRegistro = this.elExpediente[0].FechaRegistro;
          this.formateadaSiniestro = 'Fecha : '+fechaRegistro.split('T')[0].toString()+', Hora : '+(fechaRegistro.split('T')[1].toString()).split('.')[0];
          this.elExpedienteClienteFechaInspeccion = this.elExpediente[0].FechaRegistroAjuste;
          this.elExpedienteMarca = this.elExpediente[0].Marca;
          this.elExpedienteModelo = this.elExpediente[0].Modelo;
          this.elExpedienteAnio = this.elExpediente[0].Year;
          this.elExpedientePlaca = this.elExpediente[0].NumeroPlaca;
          this.elExpedienteMotor = this.elExpediente[0].Motor;
          this.formateadaInspeccion = this.elExpediente[0].FechaRegistroAjuste;

          if (parseInt(this.dataSiniestro.RefTipoConductorId)==1){
            this.ajustador.TipoSolicitante = this.dataSiniestro.RefTipoConductorId;
            localStorage.setItem('TipoSolicitante', this.ajustador.TipoSolicitante.toString());
            this.datos['RefTipoSolicitanteInformeAjusteId'] = this.dataSiniestro.RefTipoConductorId;
            this.nombreDelConductor = this.elExpediente[0].Cliente;
            this.elTipoLicencia = this.dataSiniestro.RefTipoLicenciaId;
            this.elExpedienteSerie = this.elExpediente[0].Chasis;

            if (this.esTipoSolicitante == false) {
              setTimeout(() => {
                $("#tipoSolicitante").click();
                setTimeout(() => {
                  alert.dismiss();
                }, 1000);
              }, 1000);
            }else{}
          }else{
            this.ajustador.TipoSolicitante = this.dataSiniestro.RefTipoConductorId;
            localStorage.setItem('TipoSolicitante', this.ajustador.TipoSolicitante.toString());
            this.nombreDelConductor = '';
          }


          console.log('El año del carro '+ this.elExpediente[0].Year + ', el rango');
          console.dir(rangoAnios);

          
          
            }
        )
    }


    toggleAccordion = (position) => {
      const nativeEl = this.accordionGroup;
      nativeEl.value = position;
    };

    closeAccordions(){
      const nativeEl = this.accordionGroup;
      nativeEl.value = undefined;
    }

    ngOnInit() {
      const nativeEl = this.accordionGroup;
      nativeEl.value = 'second';

      setTimeout(() => {
        //this.setFirstSegment();
        this.getDanios();
        this.listarDanios();
      }, 1000);

      
      this.getTipoSolicitante();
      this.getTipoCombustible();
      
      this.loadUser();
      this.firmarInspector();
      
      this.loadCacheCliente();
      
      
      
      // se debe cambiar el id de la obtencion de la licencia por una variable. Temporalmente se tiene en duro el id de pais de honduras con fines de testeo
      let codigoPais = localStorage.getItem('codigoPais');
      const paisId = parseInt(codigoPais);
      //this.getTipoLicencia(paisId);
      this.getTipoLicencia(3);
      
      //this.getCountry();
      //this.getTipoLicencia(this.paisId);
      //this.sig = new SignaturePad(this.canvas.nativeElement);
      
  
      this.codigoPais = localStorage.getItem('codigoPais');

      this.platform.ready().then(() => {
        this.isTablet = this.platform.is('android');
        //alert(this.isTablet)
        //this.screenlock.lockToLandscape();
        if (this.isTablet) {
          this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
        }
        
        
  
      });
  /**/

      //this.setFirstSegment();
      
    }

    // PROCESO
    handleCanvas(){
      this.isEditSig = true;
      
    }

    loadCacheCliente(){
      this.api.ObtenercacheCliente(this.idAtencion).pipe( 
        finalize(async ()=>{
          //alert('Finalice')
          this.isLoading = false;
          //this.isComplete = true;
        })
      ).subscribe(
        async (res) =>{
          let parentescoId:number; 
          this.cacheCliente = res[0];
          //console.log('Cache de cliente');
          //console.dir(this.cacheCliente);
          //console.dir(this.tipoParentescos);
          parentescoId = parseInt(this.cacheCliente['Parentesco']);

          this.loadParentescos();
          for (let index = 0; index < this.tipoParentescos.length; index++) {
            const element = this.tipoParentescos[index];
            //console.dir
            //alert(parentescoId)  
          }
          
        }
      )
    }

    evaluateKm(event){
      this.ajustador.Kilometraje = event.target.value;
      this.datos['Kilometraje'] = event.target.value;
      if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '' || this.ajustador.Kilometraje == 0) {
        this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
        this.ajustador.Kilometraje = 0;
      }else{
        this.toaster.dismissToast();
        //console.log(this.ajustador.Kilometraje);
      }
      
    }

    async presentToastEditSig(message, position, clase) {
      
      const toast = await this.toast.create({
        message: message,
        color: 'danger',
        duration: 30000,
        position: position,
        cssClass: ['custom-toast', clase],
        buttons: [
          {
            text: 'CANCELAR',
            role: 'cancel',
            handler() {
              this.isEditSig = false;
            },
          },
          {
            text: 'EDITAR FIRMA',
            role: 'confirm',
            handler() {
              this.isEditSig = true;
            },
          },
        ],
      });
    
      await toast.present();
    }

    inicializarCanvas(){
      var node = document.getElementById('my-node');
  
        domtoimage.toPng(node)
      .then(function (dataUrl) {
        this.myCanvasImage =dataUrl;
        //console.log('mi imagen + '+this.myCanvasImage)
      })
    }

    hasNonDigit(str) {
      return /\D/g.test(str.toString());
    }
    
  

  ionViewDidEnter(){
    //this.getCountry();
  }

  damagePosition(valor:number){
    switch(valor){
      case 1:
        if (this.formulario.DanioLataralIzquierdo===1){
          this.formulario.DanioLataralIzquierdo=0;
          this.datos.DanioLataralIzquierdo = 0;
        }else{
          this.formulario.DanioLataralIzquierdo=1;
          this.datos.DanioLataralIzquierdo = 1;
        }
        break;
      case 2: 
          if (this.formulario.DanioLateralDerecho===1){
            this.formulario.DanioLateralDerecho=0;
            this.datos.DanioLateralDerecho = 0;
          }else{
            this.formulario.DanioLateralDerecho=1;
            this.datos.DanioLateralDerecho = 1;
          }
          break;
      case 3: 
          if (this.formulario.VehiculoVolcado===1){
            this.formulario.VehiculoVolcado=0;
            this.datos.VehiculoVolcado = 0;
          }else{
            this.formulario.VehiculoVolcado=1;
            this.datos.VehiculoVolcado = 1;
          }
          
          break;
      case 4: 
          if (this.formulario.DanioFrontal===1){
            this.formulario.DanioFrontal=0;
            this.datos.DanioFrontal = 0;
          }else{
            this.formulario.DanioFrontal=1;
            this.datos.DanioFrontal = 1;
          }
          break;
      case 5: 
          if (this.formulario.DanioTrasero===1){
            this.formulario.DanioTrasero=0;
            this.datos.DanioTrasero = 0;
          }else{
            this.formulario.DanioTrasero=1;
            this.datos.DanioTrasero = 1;
          }
          break;
      default:
        break;
    } 
  }

  async loadUser(){
    this.elUsuario = this.api.currentUser;
    this.firmaPrecargadaInspector = imagePrefix+this.elUsuario.Firma;
    this.idAjustador = this.elUsuario.ProveedorAgenteId;
    this.ajustadorNombre = this.elUsuario.NombreAgente;
    const user = await Preferences.get({key: USER_DATA});
    let userParse = JSON.parse(user.value);
  }

  loadGeneros(){
    this.api.ListTipoGenero().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.tipoGeneros = res;
        //console.log("Mis generos");
        //console.dir(this.tipoGeneros);
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        
      }

    )
  }

  loadParentescos(){
    let cacheParentesco:any;
    cacheParentesco = this.cacheCliente['Parentesco'];
    this.api.ListTipoParentesco(3).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.tipoParentescos = res;
        console.log("Mis parentescos");
        console.dir(this.tipoParentescos);
        console.log('Cache de cliente');
          console.dir(this.cacheCliente);
          console.dir(this.tipoParentescos);

          

          for (let index = 0; index < this.tipoParentescos.length; index++) {
            const element = this.tipoParentescos[index];
            //console.log(element.CODIGO)
            if (cacheParentesco == element.CODIGO) {
              console.log(element.DESCRIPCION)
              this.elParentesco = element.CODIGO;
              this.elTipoParentesco = element.CODIGO;
            }
          }
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        
      }

    )
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

  async getTalleres(){
    this.api.ListTalleres().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        console.log('Los talleres');
        console.dir(res);
        this.talleres = res;
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
        this.daniosIndex = this.danios.length;
        this.listarDanios();
        //console.log("Los danios");
        //console.dir(this.danios);
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'danios');
      }

    )
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.danioSearchable.filter((d) => d.Descripcion.toLowerCase().indexOf(query) > -1);
  }

  verificarDeuda(){
    this.deudaSent = localStorage.getItem('deudaSent') === 'true';
      if (this.deudaSent == true) {
        console.log(this.deudaSent)
      }else{
        this.deudaSent = false;
      }
  }

  handleSave(){
    //alert(this.platform.is('android'))
    //this.router.navigate(['./end-process'], { queryParams: { Id: this.atencionId } });
    
    if (this.platform.is('android')) {
      this.getCountry();      
    }else{
      this.validarFormulario();
    }
    /**/
  }

  goESignature(){
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    this.router.navigate(['./esignature']);
  }

  goBeneficiario(){
    this.router.navigate(['./beneficiario']);
  }
  
  fixThis(){
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    //this.router.navigate(['./esignature']);
  }

  async getCountry(){
    this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
    //console.log("Mi localidad es ");
    //console.dir(this.laLocalidad)
    this.miLocalidad = JSON.stringify(this.laLocalidad);
    this.miPais = this.laLocalidad[0].countryCode;
    //alert('Codigo de país '+this.miPais)
    this.miPaisNombre = this.laLocalidad[0].countryName;
    localStorage.setItem('codigoPais', this.miPais);
    localStorage.setItem('nombrePais', this.miPaisNombre);
    this.latitud = this.laLocalidad[0].latitude;
    this.longitud = this.laLocalidad[0].longitude;
    this.validarFormulario();

    
  }

  scrollToElement() {
    alert('I am gonna scroll')

    
    $('#elemAju').animate({scrollTop:200}, 1000);
  }

  getCanvasWith() {

    this.panelWidth = (document.getElementById('cardAseguradoFinal').clientWidth);
    //alert(this.panelWidth)
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.panelWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.panelWidth - 50;
    }
  }

  identificarPais(){
    this.miPais = localStorage.getItem('codigoPais');
    //alert(this.miPais);
    if (this.miPais == "HN"){
      this.codigoPais = 'hn';
    }else if(this.miPais == "GT"){
      this.codigoPais = 'gt';
    }
  }

  async getTipoSolicitante(){
//    const load = await this.loading.create();
//    await  load.present();
//alert('VOY POR EL SOLICITANTE')
    this.isLoading = true;
    this.api.ListTipoDeSolicitanteInformeAjuste().pipe( 
      finalize(async ()=>{
//        await load.dismiss();
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
          this.tipoSolicitante= res;
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        
      }

    )
  }

  getTipoAcuerdos(){
    this.api.ListarTiposAcuerdo().pipe()
  }

  async getTipoFirma(){
    //alert('Firma')
//    const load = await this.loading.create();
//    await  load.present();
    this.isLoading = true;
    this.api.ListTiposDeFotografia().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
//        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          this.tipoFirma= res;
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
  async getTipoCombustible(){
//    const load = await this.loading.create();
//    await  load.present();
    this.isLoading = true;
    this.api.ListTipoCombustible().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
//        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          this.tipoCombustible= res;
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

  getElTipoLicencia(event){
    this.elTipoLicenciaId = event.target.value;

    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      const laLicenciaTipo = element.TipoLicencia;
      //alert(laLicenciaTipo)
      if (element.Id == this.elTipoLicenciaId) {
        $('#tipoLicenciaDisplay').text(laLicenciaTipo)
      }
      
      if(this.elTipoLicenciaId.toString() == element.Id.toString()){
        this.licenciaTipo = element.TipoLicencia;
        //console.log(this.licenciaTipo);
      }
      
    }
  }

  getElTipoGenero(event){
    this.elTipoGenero = event.target.value;
    //console.log(gender)

    console.dir(this.tipoGeneros)
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == this.elTipoGenero) {
        $('#tipoDeGeneroDisplay').text(element.Genero);
      }
    }
    
    this.datos['Sexo'] = event.target.value;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
      
      //console.log(this.inicialGenero);
    }else if (this.elTipoGenero == 2){
      this.inicialGenero = "F";
      //console.log(this.inicialGenero);
    }
    
  }

  async getTipoLicencia(paisIdentidad){
//    const load = await this.loading.create();
//    await  load.present();
    this.isLoading = true;
    this.api.TipoDeLicencia(paisIdentidad).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
//        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
        this.tipoLicencia = res;
        //console.log("El tipo de licencia es : ");
        //console.dir(res);
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

  getElTipoParentesco(event){
    this.elTipoParentesco = event.target.value;
    this.datos['Parentesco'] = event.target.value;

    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      if (this.elTipoParentesco == element.CODIGO) {
        $('#parentescoDisplay').text(element.DESCRIPCION);
      }
      //alert(this.elTipoParentesco+', '+element.CODIGO+', '+element.DESCRIPCION)
      //alert(element.)
    }
    
  }

  getElTipoSiniestro(event){
    this.elTipoSiniestro = event.target.value;
    for (let index = 0; index < this.tipoSiniestros.length; index++) {
      const element = this.tipoSiniestros[index];

      if (element.CODIGO == this.elTipoSiniestro) {
        $('#tipoSiniestrosDisplay').text(element.DESCRIPCION);
      }
    }
    
  }

  hiddenMenu(i:number){
    if(!this.menu[i]){
      this.menu = this.menu.reduce((x)=>{return [...x, false]},[]);
    }
      this.menu[i]= !this.menu[i];
  }

  
  validarFormulario(){
    //this.dataSiniestro.push(this.dataAppend);
console.log('Predeterminados');
console.dir(valoresPredeterminados[0].puntoServicio)
   
    this.isLoading = true;

    this.api.ObtenercacheCliente(this.idAtencion).pipe( 
      finalize(async ()=>{
        //alert('Finalice')
//        this.isLoading = false;
        //this.isComplete = true;
      })
    ).subscribe(
      async (res) =>{
        this.cacheCliente = res[0];
        console.log('Cache de cliente');
        console.dir(this.cacheCliente);
        this.elParentesco = this.cacheCliente['Parentesco'];
      }
    )
    
    setTimeout(() => {
      
    
    this.validaNulosAju = [];
    this.AjustadorFiltro = [];
    this.storageArrayFilter = [];
    this.storageArrayIndexs = [];
    this.storageArrayStrings = [];
    
    for (let index = 0; index < this.requiredD.length; index++) {
      const element = this.requiredD[index];
      let elnombre = element.nombre;
      let laEtiqueta = element.etiqueta;
      let laCategoria = element.categoria;
      let elValorDP; let elValorC; let laStorageKey; let evaluacion;
      
      if (laCategoria == 'ajustador') {
        //console.log(laEtiqueta)
        this.AjustadorFiltro.push(element);

        
      }

      if (index == (this.requiredD.length-1)) {
        //console.dir(this.AjustadorFiltro)
        for (let indexDP = 0; indexDP < this.AjustadorFiltro.length; indexDP++) {
          const elementCLiente = this.AjustadorFiltro[indexDP];
          elnombre = elementCLiente.nombre;
          laEtiqueta = elementCLiente.etiqueta;
          laStorageKey = elementCLiente.storageKey;
          elValorDP = this.datos[elnombre];
          if (!elValorDP || elValorDP == '') {
            elValorC = this.elExpediente[elnombre];
            if (!elValorC || elValorC === ''){
              this.validaNulosAju.push(
                {etiqueta:laEtiqueta, index:indexDP}
                );
              this.storageKeys.push(
                {etiqueta:laEtiqueta, key:laStorageKey, index: indexDP}
              )
            }
            //console.log(elnombre+', '+laEtiqueta+', '+elValorC)
          }

          if (indexDP==(this.AjustadorFiltro.length-1)) {
            
            //console.log('Hey, listen!')
           // console.dir(this.validaNulosAju)
            this.cantidadNulos = this.validaNulosAju.length;

            console.log('La cantidad de nulos es '+this.cantidadNulos);
            //alert(('La cantidad de nulos es '+this.cantidadNulos))
            if (this.cantidadNulos > 0) {
              
            this.isLoading = false;
            //alert('Voy a cerrar el acordion')
            //this.toggleAccordion('second');
            this.accordionGroup.value = [];


            setTimeout(() => {
              $('#accordionGroup').fadeOut();
              //this.scrollToElement();
            }, 2000);
            

              //alert("Cantidad de Nulos es "+this.cantidadNulos+', Cantida en Localstorage es '+localStorage.length)
              for (let indexS = 0; indexS < localStorage.length; indexS++) {
                const elementS = localStorage.key(indexS);
                let elementV = localStorage.getItem(localStorage.key(indexS));
                
                for (let indexK = 0; indexK < this.storageKeys.length; indexK++) {
                  const element = this.storageKeys[indexK];
                  
                  if (elementS.indexOf(element.key) == 0) {
                    console.log('Evaluación de '+element.etiqueta)
                    //console.log(element.etiqueta+', index '+element.index);
                    for (let indexD = 0; indexD < this.validaNulosAju.length; indexD++) {
                      const elementNulo = this.validaNulosAju[indexD];
                      if (element.index == elementNulo.index) {
                        this.validaNulosAju.splice(indexD, 1);
                      }
                      
                      //alert('A evaluar')
                      this.cantidadNulos = this.validaNulosAju.length;
                      //alert('Hola 4, y cantidad de nulos es '+this.cantidadNulos);
                      if (this.cantidadNulos == 0) {

                        // Envio de Datos Siniestro
                        evaluacion = true;                        
                        // iniciar el proceso de envío de datos
                        
                        //console.log('La data del siniestro');
                        //console.dir(this.datos)    
                        localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));
                      
                        this.miPais = "HN";

                        if (this.miPais == "HN") {
                          console.dir(this.datos)
                        }
                      }
                      if (indexD==(this.validaNulosAju.length)) {
                        this.cantidadNulos = this.validaNulosAju.length;
                        if (this.cantidadNulos == 0) {
                          console.log('Asi está el arreglo de datos ');
                          console.dir(this.datos)

                          // Inicio Envio de Datos
                          evaluacion = true;
                          localStorage.setItem('elFiniquito', JSON.stringify(this.elFiniquito));
                          
                          if (localStorage.length > 0) {

                            let siniestro = localStorage.getItem('elTipoSiniestro');
                            this.elTipoSiniestro = siniestro.split('-')[1];

                            this.elTipoParentesco = localStorage.getItem('dataProcess-Parentesco');
                            if (this.elTipoParentesco) {
                            }else{
                              this.elTipoParentesco = localStorage.getItem('datos-Parentesco');
                            }

                            this.inicialGenero = localStorage.getItem('inicialGenero');

                            for (var i = 0; i < localStorage.length; i++){
                              if (localStorage.key(i).indexOf('bpmArray-') == 0) {
                                this.valorReserva = localStorage.getItem(localStorage.key(i));
                              }

                              if (localStorage.key(i).indexOf('dataProcess-') == 0) {
                                console.log('Para dataProcess')
                                let storageKey = localStorage.key(i).split('-')[1];
                                let storageVal = localStorage.getItem(localStorage.key(i));
                                let tryValue = parseInt(storageVal);

                                if (typeof tryValue == 'number' && !isNaN(tryValue) && (storageVal.length < 7)) {
                                  this.datos.push(
                                    {nombre: storageKey, valor: tryValue}
                                    )

                                  this.storageArrayFilter.push(
                                    {key: storageKey, val: tryValue, index: i}
                                  )
                                }else{
                                  this.datos.push(
                                    {nombre: storageKey, valor: storageVal}
                                    )

                                  this.storageArrayStrings.push(
                                    {key: storageKey, val: storageVal, index: i}
                                  )
                                }
                              }

                              if (localStorage.key(i).indexOf('datos-') == 0) {
                                console.log('Para datos')
                                  let storageKey = localStorage.key(i).split('-')[1];
                                  let storageVal = localStorage.getItem(localStorage.key(i));
                                  let tryValue = parseInt(storageVal);

                                  if (typeof tryValue == 'number' && !isNaN(tryValue) && (storageVal.length < 7)) {
                                    this.datos.push(
                                      {nombre: storageKey, valor: tryValue}
                                      )

                                    this.storageArrayFilter.push(
                                      {key: storageKey, val: tryValue, index: i}
                                    )
                                  }else{
                                    this.datos.push(
                                      {nombre: storageKey, valor: storageVal}
                                      )

                                    this.storageArrayStrings.push(
                                      {key: storageKey, val: storageVal, index: i}
                                    )
                                  }

                              }

                              if (i == (localStorage.length-1)) {
                                console.dir(this.storageArrayFilter);
                                console.dir(this.storageArrayStrings);
                                

                                this.OtrosTalleres = localStorage.getItem('OtrosTalleres');

                                this.datos.push(
                                  {nombre: 'RefAtencionId', valor: this.atencionId},
                                  {nombre: 'RefProveedorAgenteId', valor: this.idAjustador},
                                  {nombre: 'Parentesco', valor: this.elParentesco},
                                  {nombre: 'OtrosTalleres', valor: this.OtrosTalleres}
                                  )

                                console.log('El arreglo listo para envios es ');
                                console.dir(this.datos);
                                console.log('Y la firma es ');
                                console.log(this.firmaPrecargada);
                                console.log('Y la firma inspeccion es ');
                                console.log(this.firmaPrecargadaInspector);

                                this.miPais = "HN";

                                if (this.miPais == "HN") {

                                  console.log('Ta daaaaaaa')
                                  console.dir(this.datos)
                                  if (this.fechaValida == false) {
                                    this.toaster.presentToastNoButtonsRed('La fecha de inspección debe ser las misma fecha del siniestro o posterior.', 'top', 'validacion');
                                  }else{
                                    //alert(this.firmaPrecargada)
                                    if((this.firmaPrecargada == emptySignature) || (this.firmaPrecargada==emptySignatureWhite)){
                                      this.toaster.presentToastNoButtonsRed('Se debe firmar para guardar los datos.', 'top', 'firma-siniestro');
                                    }else{
                                      
                                      console.log('Los terceros');
                                      console.dir(this.acompaniantes);
                                      console.dir(this.testigos);
                                      console.dir(this.lesionados);
                                      console.dir(this.propiedades);
                                      console.log('El taller : ' +this.datos[0].TallerMecanicoId);


                                      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                      //setTimeout(() => {
                                        
                                        this.api.GuardarSiniestroHN(this.datos).pipe( 
                                          finalize(async ()=>{})
                                        ).subscribe(
                                          async (res) =>{
                                          //console.log(res);
                                          this.audienciaId = res;
                                          this.idTablaAjustador = res.toString();

                                          //////////////////////////////////////

                                          if (this.propiedades.length >0) {
                                            for (let index = 0; index < this.propiedades.length; index++) {
                                              const element = this.propiedades[index];
                                              
                                              const dataPropiedad = [
                                                {
                                                  "RefAjustadorAudienciaId": res, // Id de la audiencia del res clienteHn
                                                  "Nombre": element.NombrePropietario, // Nombre del 
                                                  "Direccion": element.DireccionDelBien,
                                                  "DaniosPrivado": element.DescripcionDelDanio,
                                                  "RefAjustadorId": this.api.currentUser.ProveedorAgenteId,
                                                  "Telefono": element.Telefono,
                                                  "DescripcionDelBien": element.DescripcioDelBien,
                                                  "DireccionDelBien": element.DireccionDelBien,
                                                  "DescripcionDelDanio": element.DescripcionDelDanio,
                                                  "NombreDelBienAfectado": element.BienAfectado
                                                }
                                              ]
    
                                              this.api.GuardarPropiedadTercero(dataPropiedad).pipe( 
                                                finalize(async ()=>{})
                                              ).subscribe(
                                                async (res) =>{
                                                },
                                                async (res) => {
                                                  this.toaster.presentToast(res.error.Message, 'top', 'propiedad');
                                                }
                                          
                                              )
                                            }
                                            
                                          }
                                          
                                  
                                  
                                          if (this.acompaniantes.length > 0) {
                                            for (let index = 0; index < this.acompaniantes.length; index++) {
                                                const element = this.acompaniantes[index];
                                    

                                                const dataTercero = {
                                                  Nombre: element.Nombre,
                                                  Telefono: element.Telefono,
                                                  Direccion: element.Direccion,
                                                  DescripcionLesion: null,
                                                  DireccionHospitalizacion: null,
                                                  TipoPersonaSiniestro: 1,
                                                  RefAjustadorAudienciaId: this.audienciaId
                                                }

                                                
                                                console.dir(dataTercero);
                                        
                                                this.api.GuardarPersonaSiniestro(dataTercero).pipe( 
                                                  finalize(async ()=>{
                                                  })
                                                ).subscribe(
                                                  async (res) =>{
                                                  },
                                                  async (res) => {
                                                    this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                                  }
                                            
                                                )
                                            }
                                          }
                          
                                          if (this.testigos.length > 0) {
                                            for (let index = 0; index < this.testigos.length; index++) {
                                              const element = this.testigos[index];
                                    
                                              const dataTercero = {
                                                Nombre: element.Nombre,
                                                Telefono: element.Telefono,
                                                Direccion: element.Direccion,
                                                DescripcionLesion: null,
                                                DireccionHospitalizacion: null,
                                                TipoPersonaSiniestro: 2,
                                                RefAjustadorAudienciaId: this.audienciaId
                                              }

                                              
                                              console.dir(dataTercero);
                                      
                                              this.api.GuardarPersonaSiniestro(dataTercero).pipe( 
                                                finalize(async ()=>{
                                                  //await load.dismiss();
                                                })
                                              ).subscribe(
                                                async (res) =>{
                                                },
                                                async (res) => {
                                                  this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                                }
                                          
                                              )
                                            
                                            }
                                            
                                          }
                                  
                                          if (this.lesionados.length > 0) {
                                            for (let index = 0; index < this.lesionados.length; index++) {
                                              const element = this.lesionados[index];
                                      
                                              const dataTercero = {
                                                Nombre: element.Nombre,
                                                Telefono: element.Telefono,
                                                Direccion: element.Direccion,
                                                DescripcionLesion: element.TipoLesion,
                                                DireccionHospitalizacion: element.DireccionHospitalizacion,
                                                TipoPersonaSiniestro: 3,
                                                RefAjustadorAudienciaId: this.audienciaId
                                              }

                                              
                                              console.dir(dataTercero);
                                      
                                              this.api.GuardarPersonaSiniestro(dataTercero).pipe( 
                                                finalize(async ()=>{
                                                  //await load.dismiss();
                                                })
                                              ).subscribe(
                                                async (res) =>{
                                                },
                                                async (res) => {
                                                  this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                                }
                                          
                                              )
                                            
                                            }
                                          }

                                          this.insertarConvenioReparacion();

                                          //////////////////////////////////////////////////
  
                                          this.api.GuardarIdTablaAjustador(this.idAtencion, this.idTablaAjustador).pipe( 
                                            finalize(async ()=>{
                                              console.log('Fin de guardar Id de Tabla');
                                            })
                                          ).subscribe(
                                            async (resTabla) =>{
                                              console.log(resTabla);
                                            }
                                          )
  
                                            if (!this.elExpediente[0].NombreConductor) {
                                              this.elExpediente.NombreConductor = this.nombreDelConductor;
                                            }
  
                                            this.nombreDelConductor = localStorage.getItem('datos-NombreConductor');
  
                                            // DEBUG Fecha
                                            let fechaToString = localStorage.getItem('datos-FechaHora');//this.laFechaSiniestroInspeccion.toString();
                                            let fechaSplit = fechaToString.split('.')[0];
  
                                            
                                  
                                            this.dataBPM =  {
                                              Chasis: this.elExpediente[0].Chasis,
                                              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
                                              Poliza: this.elExpediente[0].PolizaExterna, // 
                                              Certificado: this.elExpediente[0].Certificado.toString(),//parseInt(this.elExpediente[0].Certificado), // Pendiente
                                              NombreAsegurado: this.elExpediente[0].Cliente,
                                              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
                                              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
                                              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
                                              FechaOcurrencia: fechaSplit,//fechaSplit,//this.elExpediente[0].FechaRegistro, OJO
                                              Causa: valoresPredeterminados[0].Causa, // Pendiente
                                              ValorReserva: this.valorReserva.toString(), // Formulario
                                              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
                                              Latitud: this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
                                              Longitud: this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
                                              NombreConductor: this.nombreDelConductor, // Formulario
                                              Genero: this.inicialGenero, // Formulario
                                              Parentesco: this.elTipoParentesco, // Formulario
                                              Observacion: this.idTablaAjustador // Guardar Siniestro
                                            }
  
                                            let dataBPMlocal =  {
                                              Chasis: this.elExpediente[0].Chasis,
                                              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
                                              Poliza: this.elExpediente[0].PolizaExterna, // 
                                              Certificado: this.elExpediente[0].Certificado.toString(),//parseInt(this.elExpediente[0].Certificado), // Pendiente
                                              NombreAsegurado: this.elExpediente[0].Cliente,
                                              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
                                              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
                                              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
                                              FechaOcurrencia: fechaSplit,//this.elExpediente[0].FechaRegistro,
                                              Causa: this.elTipoSiniestro, // Pendiente
                                              ValorReserva: this.valorReserva.toString(), // Formulario
                                              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
                                              Latitud: "14.0985125",
                                              Longitud: "-87.1849219",
                                              NombreConductor: this.nombreDelConductor, // Formulario
                                              Genero: this.inicialGenero, // Formulario
                                              Parentesco: this.elTipoParentesco, // Formulario
                                              Observacion: this.idTablaAjustador // Guardar Siniestro
                                            }
  
                                            if (this.platform.is('android')) {
                                              this.bpmArray = this.dataBPM;
                                            }else{
                                              this.bpmArray = dataBPMlocal;
                                            }
  
                                            setTimeout(() => {
                                              console.log('He aqui la data BPM');
                                                      console.dir(this.bpmArray);
                                                      this.isLoading = true;
                                                      this.estaCompleto = true;
                                                      
                                                      this.api.GuardarBPM(this.bpmArray).pipe(finalize(async ()=>{
                                                        this.isBPMcomplete = true;
                                                        })
                                                      ).subscribe(
                                                        async (resAtencion) =>{
                                                          console.log("Estoy guardando la data ");
                                                          if(resAtencion){
                                                            console.dir(resAtencion);
                                                            if (resAtencion[0].codigo == 0 || resAtencion[0].codigo == "0") {
                                                              this.toaster.presentToastNoButtons(resAtencion[0].descripcion, 'top', 'bpm');
                                                              this.codigoBPMFicohsa = resAtencion[0].solicitud_bpm;
                                                              this.codigoReclamoFicohsa = resAtencion[0].numero_reclamo;
                                                              this.elFiniquito.NumeroReclamo = resAtencion[0].numero_reclamo;
                                                              
                                                              localStorage.setItem('IdTablaAjustador', this.idTablaAjustador);
                                                              localStorage.setItem('codigoBPMF', this.codigoBPMFicohsa);
                                                              localStorage.setItem('codigoReclamo', resAtencion[0].numero_reclamo);
                                                              
                                    
                                                              let dataBPMupdate = 
                                                              {
                                                                IdTablaAjustador: parseInt(this.idTablaAjustador),
                                                                CodigoReclamoFicohsa: this.codigoReclamoFicohsa.toString(),
                                                                CodigoBPMFicohsa: this.codigoBPMFicohsa.toString()
                                                              }
                                                              
                                                              
                                                              let updateFiniquito = {
                                                                RefAtencionId: this.atencionId,
                                                                NumeroReclamo: this.codigoReclamoFicohsa.toString(),
                                                                TipoCoberturaFicohsa: this.tipoDeCobertura
                                                              }
                                                              this.api.ActualizarFiniquito(updateFiniquito).pipe( 
                                                                finalize(async ()=>{
                                                                  console.log('This is the end finiquito');
                                                                })
                                                              ).subscribe(
                                                                async (res) =>{}
                                                              )
                                                              
                                                              //Llama a actualizar los datos de enlace BPM de Fiochsa
                                                              this.api.ActualizarBPM(dataBPMupdate).pipe( 
                                                                finalize(async ()=>{
                                                                  console.log('This is the end')
                                                                  this.isLoading = false;
                                                                  
                                                                  

                                                                  $('#open-modal-success').click();
                                                                  this.clearSegmentsStorage();
                                                                    setTimeout(() => {
                                                                      $('#closeSuccessButton').click();
                                                                      $('#submitClaim').fadeOut('slow');
                                                                      this.router.navigate(['./end-process'], { queryParams: { Id: this.atencionId, CodigoReclamoFicohsa: this.codigoReclamoFicohsa.toString(),
                                                                        CodigoBPMFicohsa: this.codigoBPMFicohsa.toString() } });
                                                                    }, 6000);
                                                                })
                                                              ).subscribe(
                                                                async (res) =>{
                                                                  console.log('Eeeeeeexitooooo! ');
                                                                  this.isEeexittoooo = true;
                                                                  this.miLogRespuesta = res;
                                                                  console.dir(res);
                                                                  //this.guardarConvenioReparacion();
                                                                  
                                                                },
                                                                async (res) => {
                                                                  this.isLoading = false;
                                                                  let errorKey = 'acsel';
                                                                  let elError = res.error.Message;

                                                                  console.log('El resdultado del intento con el bpm es '+elError.toString().toLowerCase().includes(errorKey));
                                                                  console.log('El resdultado indexOf del intento con el bpm es '+elError.toString().toLowerCase().indexOf(errorKey));
                                                                  console.dir(res);
                                                                  if (elError.toString().toLowerCase().includes(errorKey)) {
                                                                    this.toaster.presentToast('Este chasis no está registrado en un programa de Seguros Ficohsa. Esta atención deberá ser procesada de diferente forma. Consulta a tu administrador de operaciones para una mejor resolución.', 'top', 'solicitante');  
                                                                  }else{
                                                                    this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                                                    this.miLogRespuesta = res;
                                                                  }
                                                                  
                                                                }
                                                              )
                                            
                                                            }else{
                                                              this.isLoading = false;
                                                              this.toaster.presentToastDataMissing("Código :  "+resAtencion[0].codigo+', error :'+resAtencion[0].descripcion, 'top', 'bpm');  
                                                            }
                                                            
                                                          }else{
                                                            this.isLoading = false;
                                                            this.toaster.presentToast(resAtencion.error.Message, 'top', 'solicitante');
                                                          }
                                                      },
                                                      async (res) => {
                                                        this.isLoading = false;
                                                        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                                      }
                                                
                                                    )
                                            }, 6000);//this.randomize(3, 6));
  
                                          } /// res
                                        ) 
                                        /**/
                                      // subscribe
                                      //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

                                    }
                                  } 
                                }else{

                                  // Guatemala
                                  
                                  this.api.GuardarSiniestroHN(this.dataSiniestro).pipe( 
                                    finalize(async ()=>{
                                      this.isLoading = false;
                                    })
                                  ).subscribe(
                                    async (res) =>{
                                    },
                                    async (res) => {
                                      this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                                    }
                              
                                  )
                                }
                                
                              }
                              
                            }
                          }
                        }else{
                        }
                      }
                    }
                    
                  }

                }
              }

              
              evaluacion = false;
            }else{
              
            }
            console.log(evaluacion)
            return evaluacion;
          }
          
        }
      }

    }
    }, 4000);// Timeout
  }

  randomize(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);//.toFixed(2);
  }

  

  onIonInfinite(ev) {
    //this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  next(extra){
                
    this.router.navigate(['./fotoshn'], extra)
  }
  
  saveFirma(){
    //console.log(this.sig.toDataURL("image/jpeg"));
  }

  goBack(){
    this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  entraNombre(event){
    this.elExpediente.Cliente = event.target.value;
  }

  entraNombreConductor(event){
    console.log("Conductor "+event.target.value)
    this.nombreDelConductor = event.target.value;
  }

  entraNombreAjustador(event){
    console.log("Conductor "+event.target.value);
  }

  entraDanioDescripcion(event){
    this.datos.DescripcionDanio = event.target.value;
    this.datos['Descripcion'] = event.target.value;
  }

  entraTipoCombustible(event){
    this.datos.RefTipoCombustibleId = event.target.value;

    for (let index = 0; index < this.tipoCombustible.length; index++) {
      const element = this.tipoCombustible[index];
      if (element.Id == event.target.value) {
        $('#tipoCombustibleDisplay').text(element.TipoCombustible);
      }
    }
    
  }

  entraCompromisoPago(event){
    console.log('Compromiso Pago ');
    console.dir(event)
    console.log(event.target.value);
    this.datos['CulpableCompromisoPago'] = event;
  }

  entraObservacionCompromisoPago(event){
    this.datos['ObservacionCompromisoPago'] = event.target.value;
  }

  entraAC(event){
    this.datos.AC = event.target.value;
  }

  entraRines(event){
    this.datos.Rines = event.target.value;
  }

  entraBolsaAire(event){
    this.datos.BolsaAire = event.target.value;
  }
  entraCierreCentralizado(event){
    this.datos.CierreCentralizado = event.target.value;
  }
  entraMecanico(event){
    this.datos.Mecanico = event.target.value;
    for (let index = 0; index < this.tiposTransmision.length; index++) {
      const element = this.tiposTransmision[index];
      if (element.id == event.target.value) {
        $('#tiposTransmisionDisplay').text(element.nombre);
      }
      
    }
    
  }
  entraRetrovisorElectronico(event){
    //this.dataAppend.RetrovisorElectronico = event.target.value;
    this.datos.RetrovisorElectronico = event.target.value;
  }
  entraOverfenders(event){
    //this.dataAppend.Overfenders = event.target.value;
    this.datos.Overfenders = event.target.value;
  }
  entraColaPato(event){
    //this.dataAppend.ColaPato = event.target.value;
    this.datos.ColaPato = event.target.value;
  }
  entraCintaDecorativa(event){
    //this.dataAppend.CintaDecorativa = event.target.value;
    this.datos.CintaDecorativa = event.target.value;
  }
  entraLicenciaEstado(event){
    console.log('licencia estado '+event.target.value)
    //this.dataAppend.LicenciaEstado = event.target.value;
    this.datos['LicenciaEstado'] = event.target.value;
  }

  entraTel(event){
    this.elExpediente.TelefonoOrigen = event.target.value;
    this.datos['TelefonoOrigen'] = event.target.value;
  }

  entraCorreo(event){
    this.elExpediente.CorreoElectronico = event.target.value;
    this.datos['CorreoElectronico'] = event.target.value;
  }

  entraTaller(event){
    this.datos.TallerMecanicoId = event.target.value;
    console.log(this.tallerOtro)
    //alert(event.target.value)
    console.log(event.target.value);
    console.dir(this.talleresFiltrados)
    for (let index = 0; index < this.talleresFiltrados.length; index++) {
      const element = this.talleresFiltrados[index];
      if (element.Id == event.target.value) {
        $('#tallerDisplay').text(element.NombreTaller);
      }
    }
    // talleresFiltrados
  }

  entraTallerOtro(event){
    this.tallerOtro = event.target.value;
    console.log(this.tallerOtro)
  }

  entraTallerOtroDireccion(event){
    this.tallerOtroDireccion = event.target.value;
    console.log(this.tallerOtroDireccion)
  }

  entraPesado(event){
    this.talleresFiltrados = [];
    this.esPesado = event.target.value;
    //alert(this.esPesado+1)
    console.log(this.esPesado);

    //this.filtrarTalleres();
    

  }

  entraObservaciones(event){
    this.datos['Observaciones'] = event.target.value;
  }

  entraObservacionesFinales(event){
    this.datos['ObservacionesFinales'] = event.target.value;
  }

  entraObservacionesTaller(event){
    this.datos['ObservacionesTaller'] = event.target.value;
  }

  filtrarTalleres(){
    if (this.esPesado == '2') {
      if (this.between(this.elExpediente[0].Year, rangoAnios[0].min10, rangoAnios[0].max) == true) {
        console.log(this.between(this.elExpediente[0].Year, 2019, rangoAnios[0].max));
        if(this.between(this.elExpediente[0].Year, 2019, rangoAnios[0].max)==true){
          // agregar al filtro talleres categoria A
          this.talleresFiltrados.push(Talleres[0]);
          this.talleresFiltrados.push(Talleres[1]);
        }else if(this.between(this.elExpediente[0].Year, 2015, 2018)==true){
          // agregar al filtro talleres categoria B
          this.talleresFiltrados.push(Talleres[2]);
          this.talleresFiltrados.push(Talleres[3]);
        }else{
          // agregar al filtro talleres categoria C
          this.talleresFiltrados.push(Talleres[4]);
          this.talleresFiltrados.push(Talleres[5]);
          this.talleresFiltrados.push(Talleres[6]);
          this.talleresFiltrados.push(Talleres[7]);
        }
      }
    }else{
      this.talleresFiltrados.push(Talleres[8]);
      this.talleresFiltrados.push(Talleres[9]);
      console.dir(this.talleresFiltrados)
    }
  }

  

  

  elminaDanio(i:number ){
    this.daniosSelectAju.splice(i,1);
  }

  openDanioSearch(){
    this.isSearch = true;
    //this.toaster.presentToastNoButtons('Widget en desarrollo. Proximamente en función.', 'top', 'hey'); 
  }

  closeDanioSearch(){
    this.isSearch = false;

    let losSegmentos = $('.segment-item-aju');
    let howManyAju = losSegmentos.length;
    //alert(losSegmentos.eq(3).text());

    setTimeout(() => {
      losSegmentos.eq(3).click();
    }, 600);

//    
  }

  async presentToast(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);

    
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
          text: 'NO',
          role: 'cancel',
        },
        {
          text: 'SI',
          role: 'confirm',
          handler: () => {
//            this.location.back()
            window.location.reload()
          }
        },
      ],
    });
  
  
    await toast.present();
  }

  seleccionarTipoCobertura(event){
    this.tipoDeCobertura = event.target.value;
    localStorage.setItem('tipoCobertura', event.target.value);
    $("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
  }

  seleccionarMarca(idMarca){
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
        
        for (let index = 0; index < this.marcasVehiculos.length; index++) {
          const element = this.marcasVehiculos[index];
          if(element.id == elIndex){
            this.elExpediente.Marca = element.nombre;
            this.modelosMarca = element.modelos;
          }
        }
  }

  seleccionarModelo(idModelo){
    this.elExpediente.Modelo = idModelo.target.value;
    console.log(this.elExpediente.Modelo)
  }

  entrarAnio(event){
    this.elExpediente.Year = event.target.value;
    console.log(event.target.value);

    for (let index = 0; index < Talleres.length; index++) {
      const element = Talleres[index];
      
    }
    
  }

  between(x, min, max) {
    return x >= min && x <= max;
  }

  esFechaSiniestro(){
    this.esSiniestro = true;
    this.esInspeccion = false;
  }

  esFechaInspeccion(){
    this.esSiniestro = false;
    this.esInspeccion = true;
  }

  firmar(){
    //let laImagen = this.imagen.nativeElement;
    //this.imageHeight = this.imagen.nativeElement.offsetHeight;
    this.imageHeight = 200;
    //this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.api.obtenerFotoPorAtencion(this.idAtencion, 3).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        console.log("Firmas para este usuario : " + res.length);
        console.dir(res);
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          if (index == (res.length - 1)) {
            this.firmaPrecargada = imagePrefix + element.FotoFirma;
            localStorage.setItem("dSignatureAsegurado", this.firmaPrecargada);
            //alert(this.firmaPrecargada)
            this.isSignature = true;
          }

        }
      },
      async (res) => {
        this.firmaPrecargada = emptySignatureWhite;
        //alert(this.firmaPrecargada)
        localStorage.setItem("dSignatureAsegurado", this.firmaPrecargada);
        this.isSignature = false;
      }
    );

  }

  //Debug:Firmax
  firmarInspector(){
    this.firmaPrecargadaInspector = imagePrefix+this.elUsuario.Firma;
  }

  marcarFecha(mydate){
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = mydate.split('T')[0]; 
    var timeFormat = mydate.split('T')[1];

    this.formateada = dateFormat +' - '+timeFormat; 
    this.formateadaSiniestro = 'Fecha : '+mydate.split('T')[0].toString()+', Hora : '+(mydate.split('T')[1].toString()).split('.')[0];
     //console.log(dateFormat+' ... '+timeFormat);
  }

  marcarFechaSiniestro(laFechaSiniestrox){
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = laFechaSiniestrox.split('T')[0]; 
    var timeFormat = laFechaSiniestrox.split('T')[1];

    this.formateadaSiniestro = 'Fecha : '+laFechaSiniestrox.split('T')[0].toString()+', Hora : '+(laFechaSiniestrox.split('T')[1].toString()).split('.')[0];
     //console.log(dateFormat+' ... '+timeFormat);
  }

  marcarFechaInspeccion(laFechaInspeccion){
    //console.log("Esta es mi fecha :");
    //console.log(mydate);
    var dateFormat = laFechaInspeccion.split('T')[0]; 
    var timeFormat = laFechaInspeccion.split('T')[1];

    this.formateadaInspeccion = dateFormat +' - '+timeFormat; 
    
     //console.log(dateFormat+' ... '+timeFormat);
  }

  marcarFechaAjustador(mydateAjustador){
    let brakePoint;
    if (mydateAjustador.toString().indexOf('T') == -1) {
      brakePoint = ', ';
    }else{
      brakePoint = 'T';
    }

    this.fechaInspeccionLocal = new Date(mydateAjustador).toLocaleString(); 
    //alert(this.fechaInspeccionLocal)

    this.mydateAjustador = mydateAjustador.split(brakePoint)[0];
    this.laFechaInspeccion = 'Fecha : '+mydateAjustador.split(brakePoint)[0].toString()+', Hora : '+(mydateAjustador.split(brakePoint)[1].toString()).split('-')[0];

    
    /*
    //    this.fechaValida =  this.formateador.compararFechas(this.elExpediente[0].FechaRegistro, mydateAjustador);
    //alert(this.fechaValida)
    if (this.fechaValida) {}else{}
    */
  }

  formatearFecha(mydateAjustador){
    //alert(mydateAjustador)
  }

  entraIdentidad(event){
    if(event.target.value.length == event.target.maxlength){
      this.elExpediente.IdentidaConductor = event.target.value;
      this.datos['IdentidaConductor'] = event.target.value;
      this.datos['Identificacion'] = event.target.value;
      this.datos['DPI_Pasaporte'] = event.target.value;
    }
  }


  async popThis(ev:any){
    //console.log(ev);
    const daPop = await this.popControl.create({
      event: ev,
      component: PopoverPage
    });

    await daPop.present()
  }
  

validateEmail(status){
  //console.log(status);
  if(status == "INVALID"){
    this.toaster.presentToastEmailInvalid('El correo no es válido', 'top', 'correo');
  }
  if(status == "VALID"){
    this.toaster.dismissToast();
  }

}

 setFirstSegment(){
  $('.segment-item-aju').eq(0).click();
}

 setSegment(segmentInput, indexInput){
  let daIndex = indexInput;
  if (segmentInput == 'beneficiario') {
    console.log('Datos para finiquito');
    console.dir(this.elFiniquito)
  }

  //alert(segmentInput)
  this.segmentoTitulo = segments_aju[daIndex].titulo;
  localStorage.setItem('segmentoTitulo', this.segmentoTitulo);


  if (segmentInput == 'culpable') {
    //alert(segmentInput+', '+window.location.pathname)
    this.router.navigate(['./'+segmentInput], { queryParams: { pageSource: './ajustadorhn' } });
  }else{
    this.router.navigate(['./'+segmentInput]);
  }
  
  
 }

 setTipoSolicitante(event){
  console.log(event)
  this.elTipoSolicitante = event.target.value;
  this.datos['RefTipoSolicitanteInformeAjusteId'] = event.target.value;
  

  for (let index = 0; index < this.tipoSolicitante.length; index++) {
    const element = this.tipoSolicitante[index];
    //alert(element.Id+', '+element.TipoSolicitante+', '+this.elTipoSolicitante)
    if (element.Id == this.elTipoSolicitante) {
      $("#TipoSolicitanteDisplay").text(element.TipoSolicitante);
    }
  }
  
  localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  if (this.elTipoSolicitante == 1) {
    this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
  }else{

  }
 }

 onTermsChanged(event: Event) {
  const ev = event as CheckboxCustomEvent;
  this.canDismiss = ev.detail.checked;
  }

  clearStorageDanios(){
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect') == 0) {
          localStorage.removeItem(localStorage.key(i));
      }
    }
  }

  listarDanios(){
    this.daniosSelectAju = [];
    this.isRefreshing = true;
    console.log('Tengo esto en storage');
    console.dir(localStorage);
    //this.refreshIcon =  '../../assets/img/recargar-2.gif';
    //alert('Hey vo')
    setTimeout(() => {
      
      for (var i = 0; i < localStorage.length; i++){
        
        
        if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
          console.log(localStorage.getItem(localStorage.key(i)));
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              this.daniosSelectAju.push(elementD);
              console.log('Elemento daño')
              console.dir(elementD);
            }
          }
        }

        if (localStorage.key(i).indexOf('danioOtro-') == 0) {
          let otroKey = parseInt(localStorage.key(i).split('-')[1]);
          let otroVal = localStorage.getItem(localStorage.key(i));
          console.log('En listar ')
          console.dir(JSON.parse(otroVal));
  
        }

        if (i == (localStorage.length-1)) {
          this.isRefreshing = false;
          //this.insertarConvenioReparacion();
        }
      }
    }, 3000);
  }

  insertarConvenioReparacion(){
    this.daniosSelectAju = [];

    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        //localStorage.removeItem(localStorage.key(i));
        //alert(localStorage.getItem(localStorage.key(i)))
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
        //alert(indexSelect)
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          if (indexSelect == elementD.Id) {
            this.daniosSelectAju.push(elementD);
            console.dir(elementD);
          } 
        }
      }
    }

    
    //this.isLoading = true;
    for (let index = 0; index < this.daniosSelectAju.length; index++) {
      const element = this.daniosSelectAju[index];

      let elTipoReparacion = localStorage.getItem('TipoReparacion-'+element.Codigo);
        let reparaArray = {
          codigoDanio : element.Codigo,
          descripcionDanio : element.Descripcion,
          fotografia : emptySignature.split(',')[1],
          idAtencion : this.idAtencion,
          refTipofotoId : element.Id,
          TipoEntidad : Entidades[0].tipoEntidad,
          TipoReparacion: elTipoReparacion
        };

        console.log('Esta es la data desde ajustador');
        console.dir(reparaArray);

        
        this.api.insertarConvenioReparacion(reparaArray).pipe( 
          
          finalize(async ()=>{
            this.isLoading = false;
          })
        ).subscribe(
           async (res) =>{
            console.log(res);
            console.log("Convenio guardado");
            if (index == (this.daniosSelectAju.length-1)) {
              this.api.EnviarNotificacionEmail(this.idAtencion);
            }
            
          },
          async (res) => {
            this.toaster.presentToast(res.error.Message, 'top', 'taller');
          }
    
        )
        /**/
        
      }
      
      /**/
    }

    goHome() {
      window.location.reload();
    }

    toastDanio(danioInputDescripcion, danioInputId){
      this.danioMessage = danioInputDescripcion; this.danioPosition = 'middle', this.danioClass = 'danio-select';
      this.presentToastDanio(this.danioMessage, this.danioPosition, this.danioClass, danioInputId);
    }

    async presentToastDanio(message, position, clase, danioInputId){
      //this.idSelect = danioInputId;
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
                  //alert(danioInputId)
                  if((idE) == danioInputId){
                    localStorage.removeItem(localStorage.key(i));
                    //localStorage.removeItem('danioOtro-'+danioInputId);
                    
                    
                  }
                }

                if (localStorage.key(i).indexOf('danioOtro-') == 0) {
                  let storageObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                  if (storageObject.Id == danioInputId) {
                    console.log('tengo algo de extra, '+localStorage.key(i)+', '+localStorage.getItem(localStorage.key(i)));  
                    localStorage.removeItem('danioOtro-'+danioInputId);
                  }
                  
                }

                


                if (i == (localStorage.length-1)) {
                  $('#open-modal-recycle').click();
                  setTimeout(() => {
                    $('#reloadDaniosButton').click();
                    
                    setTimeout(() => {
                      $('#closeRecycleButton').click();
                    }, 4000);

                  }, 2000);
                }
              }
/**/
              
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

    leaveAnimation = (baseEl: HTMLElement) => {
      return this.enterAnimation(baseEl).direction('reverse');
    };


    segmentAction(action){
      if (action>4) {
        if (action==5) {
          
        }

        if (action==6) {
          
        }
      }
    }

    clearSegmentsStorage() {
      console.log('limpiando las variables de segmentos');
  
      // Segmento Solicitante
      localStorage.removeItem('elTipoLicencia');
      localStorage.removeItem('elGenero');
      localStorage.removeItem('elParentesco');
      localStorage.removeItem('tipoSolicitante');
      localStorage.removeItem('elSolicitante');
      localStorage.removeItem('tipoCobertura');
      localStorage.removeItem('laCobertura');
      localStorage.removeItem('elNombreCliente');
      localStorage.removeItem('laIdentidadCliente');
      localStorage.removeItem('elTelefonoOrigen');
      localStorage.removeItem('elCorreoElectronico');
  
      // Segmento Vehiculo
      localStorage.removeItem('elTipoPesado');
      localStorage.removeItem('elKilometraje');
  
      // Segmento Caracteristicas
      localStorage.removeItem('elTraslado');
      localStorage.removeItem('elTipoGrua');
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
      localStorage.removeItem('laTransmision');
      localStorage.removeItem('elRetrovisor');
      localStorage.removeItem('elOverfender');
      localStorage.removeItem('laColaPato');
      localStorage.removeItem('laCinta');
      localStorage.removeItem('losRines');
  
      // Segmento Danios
      localStorage.removeItem('elCompromisoPago');
      localStorage.removeItem('elCompromisoPagoObservacion');
      localStorage.removeItem('laReserva');
      localStorage.removeItem('elTipoSiniestro');
      localStorage.removeItem('laDescripcion');
      localStorage.removeItem('lasObservaciones');
  
      for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).indexOf('danioPic') == 0 || localStorage.key(i).indexOf('daniosSelect') == 0 || localStorage.key(i).indexOf('datos-') == 0 || localStorage.key(i).indexOf('dataProcess-')) {
            localStorage.removeItem(localStorage.key(i));
        }
      }

      localStorage.removeItem('coords-latitud');
      localStorage.removeItem('coords-longitud');

    }
    
  }
