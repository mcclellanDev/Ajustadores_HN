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
  CheckboxCustomEvent, IonModal, AnimationController, IonAccordionGroup, ModalController, IonContent, NavController } from '@ionic/angular';
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
import { Predeterminados, ItemsData, requiredData, requiredDataLabels, valoresPredeterminados, requiredDataAjustador, tiposDeReparacion } from '../environments/predeterminados';
import { validateClaimStage } from '../validation/claim-validation';
import {
  ajustadorScreenValidationRules,
  ficohsaBpmConfirmationRules,
  ficohsaBpmValidationRules
} from '../validation/claim-validation.rules';

import * as $ from 'jquery';
import { parse } from 'path';
import { Entidades } from '../interfaces/extras';
import { error } from 'console';

const USER_DATA = 'MY_USER_DATA';
@Component({
  selector: 'app-ajustadorhn',
  templateUrl: './ajustadorhn.page.html',
  styleUrls: ['./ajustadorhn.page.scss'],
})
export class AjustadorhnPage implements OnInit {
  @ViewChild('ajustadorContent', { static: false }) ajustadorContent: IonContent;
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  @ViewChild('accordionGroup2', { static: true }) accordionGroup2: IonAccordionGroup;
  @ViewChild('modalNulosAju') modal: IonModal;
    //DECLARACION
    //@ViewChild('imagen') imagen: ElementRef;

  public alertButtons = [
    {
      text: 'Continuar',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Sí, Salir',
      cssClass: 'alert-button-confirm',
      handler: () => {
        window.location.reload();
      }
    },
  ];
  
  readonly predicate: MaskitoElementPredicateAsync = async (el) =>(el as unknown as HTMLIonInputElement).getInputElement();
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
  menu=[false,false,false,false,false,false,false,false,false,false];  inputInicialGenero: any;  esPesado: any = '2';  idAjustador: any;  validaNulosAju: any = [];
  AjustadorFiltro: any[]; requiredD = requiredDataAjustador;  requiredDLabels = requiredDataLabels;  cantidadNulos: number;  fechaValida: boolean=true; // Debug : fechaValida
  validacionCompleta: boolean = false; // true sólo cuando la última validación dejó 0 datos incompletos
  atencionId: number; expediente: any; moneda: any;  miMoneda: string; isBPMcomplete:boolean=false;
  daDate: Date;  identidadCliente: any;  nombreCliente: any;  elTelefonoOrigen: any; elCorreoElectronico:any; laMarcaAsegurado:any;  elModeloAsegurado: any;
  elAnioAsegurado:any; elChasisAsegurado:any; elNumeroPlacaAsegurado:any; elMotorAsegurado:any; isFirstTime:boolean=true; clickCount:number=0;
  laPolizaExternaAsegurado: any;contadorSegmentos:number=0; segmentoTitulo:any;  storageKeys: any=[]; countTrue:number=0; fechaInspeccion:any; minFechaInspeccion:string;
  danioMessage:string; danioPosition:string; danioClass:string; storageArrayFilter:any=[];  idSelect: any;  storageArrayIndexs: any[];  storageArrayStrings: any[];
  sucessIcon:any; ssucessIconRecycle:any; losParentescos:any=[];  idTabla: any;  audienciaId: any;  cacheCliente: any[]; OtrosTalleres:any;
  elParentesco: any; refreshIcon:any; isRefreshing:boolean = false; isPressed:boolean=false; deudaSent:boolean;
  acompaniantes: any = [];  testigos: any = [];  lesionados: any = [];  propiedades: any = []; formularioCompleto:boolean=false;
  fechaInspeccionLocal: string;  clienteFiltroAju: any = [];  nullsIndexAju: any = [];
  mostrarPanelValidacion:boolean=false; validationPanelIsActive:boolean=false;
  textoInfo = 'Validando ... Cuando todos los datos estén completos, se habilitará el botón de guardar.';
  textoInfoIncompleto = 'Faltan datos por completar. Por favor, revisa el formulario.';
  textoInfoDanios = 'Aún no se han seleccionado daños. Puedes guardar la atención, sin embargo no se reflejarán daños en los informes.';
  textoNoFotos = 'No hay fotografías o las fotografías se eliminaron.'; textoFotosNoEnviadas = 'No se enviaron fotografías';  textoFotos:any;
  textoFotosInfo = 'Puedes continuar, pero no se reflejarán tus fotos en los informes.';
  textoInfoDaniosCulpa = 'Falta completar el acuerdo de deuda. Puedes guardar la atención, sin embargo no se reflejarán datos del culpable en los informes.';
  cacheClienteFix: any = []; datosCompletados:any = []; datosIncompletos:any = [];  datosComunes: any = []; datosAdvertencias: any = [];
  estaEvaluado: boolean = false; daniosSelectCulpa:any=[];  datosDeEnvio: any = [];
  datosDeEnvioFix: any = [];  fotos: any = [];  fotosEnviadas: boolean; AcuerdoDeDeuda: boolean;
  seleccionDeDanios: any = []; seleccionDeDaniosCulpable: any = [];  arregloDeEnvio: any = [] ;  isRefreshingCulpa: boolean;
  // Daños manuales ("Otros") del tercero/culpable cargados desde el servidor
  // (ObtenerDaniosExtras, misma fuente que usa culpable). Se guarda aparte para
  // que la reconstrucción síncrona del catálogo no borre lo cargado async.
  daniosManualesCulpa: any = [];
  // Daños manuales ("Otros") del afiliado cargados desde el servidor.
  daniosManualesAju: any = [];
  coberturas:any = [];  producto: string;  esConduceSeguro: boolean = false;

  // INICIALIZACION
  constructor(private router: Router, private loading: LoadingController, private alert: AlertController,
    private api: ApiService, private toast: ToastController, private platform:Platform, private so: ScreenOrientation,
    private geo:NativeGeocoder, public toaster:ToastService, private popControl:PopoverController, private sanitizer: DomSanitizer,
    private formateador:FormatosService, private animationCtrl: AnimationController, private thisModal:ModalController,
    private navCtrl: NavController) { 

      

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

      setTimeout(() => {
        
        let evaluado:any = localStorage.getItem('estaEvaluado');
        this.estaEvaluado = (evaluado === 'true');
        console.log('El estado de evaluación es : '+this.estaEvaluado);

        this.validarDatos(1);
        if (this.estaEvaluado == true) {
          //$('#validateButtona').fadeOut();
            //$('#saveDataButtona').fadeIn();
            //$('#validateAgainButtona').fadeIn();
            //$('#cancelaButtona').fadeIn();
          
        }
        //this.validarDatos();
        //this.setFirstSegment()
      }, 1000);


      this.idAtencion = localStorage.getItem('idAtencion');
      console.log('La atencion es '+this.idAtencion)
      this.atencionId = parseInt(this.idAtencion);
      let dIdAtencion = parseInt(this.idAtencion);

      /*
      let fotosLocal = JSON.parse(localStorage.getItem('fotos-'+this.atencionId));
        if (fotosLocal) {
          this.fotos = fotosLocal;
        }
        */

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
          
          
          const fechaSiniestro = this.elExpediente[0].FechaRegistro;
          const fechaInspeccionInicial = this.getFechaInspeccionInicial();

          console.log('Fecha de inspeccion inicial : '+fechaInspeccionInicial+' ///////////////////////////////////////////////////////////');

          this.fechaInspeccion = fechaInspeccionInicial;
          localStorage.setItem('datos-FechaHora', fechaInspeccionInicial);

          this.marcarFecha(fechaSiniestro);
          this.marcarFechaAjustador(fechaInspeccionInicial);
          this.marcarFechaInspeccion(fechaInspeccionInicial);

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
            NumeroReclamo: '', // despues de crear el reclamo
            FechaDesde: "2023-11-14T19:55:55.849Z", // Input directo
            FechaHasta: "2023-11-14T19:55:55.849Z", // Input directo
            TipoCoberturaFicohsa: "", // Input directo
            NombreQuienRecibe: "", // Input directo
            IdentidadQuienRecibe: "", // Input directo
            NumeroCheque: "", // Input directo
            FechaDelCheque: "2023-11-14T19:55:55.849Z", // Input directo
            ValorDelCheque: 0, // Input directo
            NombreAFavor: "", // Input directo
            FechaFirma: this.fechaPie, // Input directo
            FirmaCliente: "", // Desde el canvas

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
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
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

    /*
    toogleAccordion2 = (position) => {
      const nativeEl = this.accordionGroup2;
      nativeEl.value = position;
    }
    */

    private focusValidationPanel(){
      const panel = document.getElementById('dataNullAju');
      if (!panel) {
        return;
      }

      //this.toogleAccordion2(this.cantidadNulos > 0 ? 'tres' : 'dos');
      this.validationPanelIsActive = true;

      setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.ajustadorContent?.scrollToPoint(0, Math.max(panel.offsetTop - 10, 0), 450);
      }, 80);

      setTimeout(() => {
        this.validationPanelIsActive = false;
      }, 1800);
    }

    closeAccordions(){
      const nativeEl = this.accordionGroup;
      nativeEl.value = undefined;
    }

    

    ngOnInit() {
      const nativeEl = this.accordionGroup;
      this.daniosSelectAju = [];
      //nativeEl.value = 'second';

      setTimeout(() => {
        let cobert:any = localStorage.getItem('coberturas');
        this.coberturas = JSON.parse(cobert);

        console.log('Las coberturas en ajustador hn'); console.dir(this.coberturas);

      }, 6000);
      
      setTimeout(() => {
        //this.setFirstSegment();
        this.getDanios();
        this.listarDanios();
        //this.insertarConvenioReparacion();
      }, 1000);

      setTimeout(() => {
        
        // La reconstrucción de "Daños vehículo afiliado" (seleccionDeDanios) se
        // hace en reconstruirSeleccionDanios(), invocada desde getDanios() y
        // ionViewWillEnter() para que siempre refleje lo seleccionado al volver
        // de segmento-danio sin duplicar la lista.
        this.reconstruirSeleccionDanios();

        for (var i = 0; i < localStorage.length; i++){

          if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {
            let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));
            for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
              const elementD = this.danios[indexDanio];
              if (indexSelect == elementD.Id) {
                let tipo:any;
                this.daniosSelectAju.push(elementD);
                let tipoIndex = parseInt(localStorage.getItem('TipoReparacionCulpaIndex-'+indexSelect));
                let tipoId = parseInt(localStorage.getItem('TipoReparacionCulpa-'+indexSelect));

                if (tipoId == 1) {tipo = 'Reparación';}else{tipo = 'Cambio';}

                this.seleccionDeDaniosCulpable.push({Codigo: elementD.Codigo, Descripcion: elementD.Descripcion, Id: elementD.Id, tipo:tipo, tipoId:tipoId});
                //console.dir(elementD);
              } 
            }
          }

          if (i == (localStorage.length-1)) {}
        }
      }, 1500);

      setTimeout(() => {
        const nativeEl = this.accordionGroup;
        nativeEl.value = undefined;
        //$('.segment-item-aju').eq(0).click();
      }, 1500);

      setTimeout(() => {
        this.eliminarDuplicadosDanios(this.daniosSelectAju, 3);

/*
        if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
          let elCodigo = localStorage.getItem(localStorage.key(i));
          let daCode = parseInt(elCodigo);

          let elTipo = localStorage.getItem('TipoReparacion-'+daCode);
          let daType = parseInt(elTipo);
          let elIndex = localStorage.getItem('TipoReparacionIndex-'+daCode);
          let daIndex = parseInt(elIndex);
        }
*/

      }, 5000);

      
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
      });
  /**/

    }

    handleCanvas(){
      this.isEditSig = true;
      
    }

    loadCacheCliente(){
      this.api.ObtenercacheCliente(this.idAtencion).pipe( 
        finalize(async ()=>{
          this.isLoading = false;
          //this.isComplete = true;
        })
      ).subscribe(
        async (res) =>{
          let parentescoId:number; 
          this.cacheCliente = res[0];
          localStorage.setItem('cacheCliente', JSON.stringify(this.cacheCliente));
          //console.log('Cache de cliente');
          //console.dir(this.cacheCliente);
          //console.dir(this.tipoParentescos);
          parentescoId = parseInt(this.cacheCliente['Parentesco']);

          this.loadParentescos();
          for (let index = 0; index < this.tipoParentescos.length; index++) {
            const element = this.tipoParentescos[index];
          }
          
        }
      )
    }

    analizaNulo(pagSegmento, segmentIndex){
      this.setSegment(pagSegmento, segmentIndex);
      /*
      let segmentKey = requiredDataAjustador[indexFront].segmentKey;
      let segmentId = requiredDataAjustador[indexFront].segmentoId; 
      let segmentIndex = requiredDataAjustador[indexFront].segmentIndex;
      this.indexFront = $('.index-input').eq(indexFront).val(); //segmentIndex;
      */
    }

    GuardarDatos(){
      $('#camButtonAju').fadeOut();
      this.switchButtonsAll(1);

      this.isLoading = true;
      this.datosDeEnvio = [];
      console.log('Datos en cacheCliente');
      console.dir(this.cacheClienteFix);

      this.producto = localStorage.getItem('coberturaId');
      
      if (this.producto) {}else{console.log('Mi producto es '+this.producto);}
      let afiliado:any = localStorage.getItem('dataProcess-ConductorAfiliado');

      

      this.datosCompletados.push({nombre: 'ConductorAfiliado', valor: parseInt(afiliado?afiliado:1)});

      let danioIzq:any; let danioDer:any; let danioFrontal:any; let danioTrasero:any;
      danioIzq = localStorage.getItem('datos-DanioLataralIzquierdo');
      danioDer = localStorage.getItem('datos-DanioLateralDerecho');
      danioFrontal = localStorage.getItem('datos-DanioFrontal');
      danioTrasero = localStorage.getItem('datos-DanioTrasero');

      if (!danioIzq) {
        this.datosCompletados.push({nombre: 'DanioLataralIzquierdo', valor: 0});
      }else{
        this.datosCompletados.push({nombre: 'DanioLataralIzquierdo', valor: parseInt(danioIzq)});
      }

      if (!danioDer) {
        this.datosCompletados.push({nombre: 'DanioLateralDerecho', valor: 0});
      }else{
        this.datosCompletados.push({nombre: 'DanioLateralDerecho', valor: parseInt(danioDer)});
      }

      if (!danioFrontal) {
        this.datosCompletados.push({nombre: 'DanioFrontal', valor: 0});
      }else{
        this.datosCompletados.push({nombre: 'DanioFrontal', valor: parseInt(danioFrontal)});
      }

      if (!danioTrasero) {
        this.datosCompletados.push({nombre: 'DanioTrasero', valor: 0});
      }else{
        this.datosCompletados.push({nombre: 'DanioTrasero', valor: parseInt(danioTrasero)});
      }

      

      let descripcionV:any = localStorage.getItem('dataProcess-DescripcionVehiculo');
      

      this.datosCompletados.push({nombre: 'DescripcionVehiculo', valor: descripcionV?descripcionV:'Vehículo no identificado adecuadamente'});

      let identidad:any = localStorage.getItem('datos-IdentidaConductor');
      

      let dpi:any = localStorage.getItem('datos-DPI_Pasaporte');

      if (!dpi) {
        this.datosCompletados.push({nombre: 'DPI_Pasaporte', valor: identidad?identidad:''});
      }else{
        this.datosCompletados.push({nombre: 'DPI_Pasaporte', valor: dpi?dpi:''});
      }

      

      this.datosCompletados.push({nombre: 'LesionadosSinAudiencia', valor: 0});

      let lugar:any = localStorage.getItem('dataProcess-Lugar');
      

      this.datosCompletados.push({nombre: 'Lugar', valor: lugar?lugar:'Lugar no identificado adecuadamente'});

      let tallerOtroString:any = localStorage.getItem('elTallerOtro');
      let tallerOtroDireccion:any = localStorage.getItem('elTallerOtroDireccion');
      let tallerOtro:any;
      let tallerIdString:any = localStorage.getItem('datos-TallerMecanicoId');
      let tallerId:any = parseInt(tallerIdString);

      this.datosCompletados.push({nombre: 'TallerMecanicoId', valor: parseInt(tallerId)});
      
      //let tallerOtro:any = localStorage.getItem('datos-OtrosTalleres');

   
      if (tallerId == 1) {
        tallerOtro = tallerOtroString.split('-')[1]+', '+tallerOtroDireccion.split('-')[1];
        this.datosCompletados.push({nombre: 'OtrosTalleres', valor: tallerOtro});
      }else{
        this.datosCompletados.push({nombre: 'OtrosTalleres', valor: 'N/A'});
      }


      let reclamo:any = localStorage.getItem('dataProcess-ReclamoAsegurado');
      this.datosCompletados.push({nombre: 'ReclamoAsegurado', valor: reclamo?reclamo:'No especificado'});
      let ciudadId:any = localStorage.getItem('dataProcess-RefCiudadId');
      this.datosCompletados.push({nombre: 'RefCiudadId', valor: parseInt(ciudadId?ciudadId:0)});

      let deptoId:any = localStorage.getItem('dataProcess-RefDepartamentoId');
      this.datosCompletados.push({nombre: 'RefDeptoId', valor: parseInt(deptoId?deptoId:0)});

      this.datosCompletados.push({nombre: 'RefMunicipioId', valor: ''});

      let paisId:any = localStorage.getItem('dataProcess-RefPaisId');
      this.datosCompletados.push({nombre: 'RefPaisId', valor: parseInt(paisId?paisId:0)});

      this.datosCompletados.push({nombre: 'RefProveedorAgenteAbogadoId', valor: 0});

      let agenteId:any = localStorage.getItem('dataProcess-RefProveedorAgenteId');
      this.datosCompletados.push({nombre: 'RefProveedorAgenteId', valor: parseInt(agenteId?agenteId:0)});
      this.datosCompletados.push({nombre: 'RefUsuarioId', valor: parseInt(agenteId?agenteId:0)});

      for (let indexf = 0; indexf < this.cacheClienteFix.length; indexf++) {
        const element = this.cacheClienteFix[indexf];
        console.log('Buscando '+element.nombre+' en datos Cache' );
        if (element.nombre == 'IdAtencion') {
          element.nombre = 'RefAtencionId';
        }
      }

      console.log('Datos en datosCompletados');
      console.dir(this.datosCompletados);
      console.log('Datos en datosIncompletos');
      console.dir(this.datosIncompletos);
      console.log('Datos en daniosSelectAju');
      console.dir(this.daniosSelectAju);
      console.log('Datos en daniosSelectCulpa');
      console.dir(this.daniosSelectCulpa);

      setTimeout(() => {
        this.datosDeEnvio = this.cacheClienteFix.concat(this.datosCompletados);
        console.log('Datos para envio');
        console.dir(this.datosDeEnvio);
        localStorage.setItem('datosDeEnvio', JSON.stringify(this.datosDeEnvio));
        localStorage.setItem('daniosSelectAju', JSON.stringify(this.daniosSelectAju));
        localStorage.setItem('daniosSelectCulpa', JSON.stringify(this.daniosSelectCulpa));


      }, 900);

      setTimeout(() => {
        this.eliminarDuplicadosEnvio(this.datosDeEnvio);
        const arregloParaEnviar = {}; let polizaTrunk:any;
        
        this.latitud = this.elExpediente[0].LatitudCliente;
        this.longitud = this.elExpediente[0].LongitudCliente;
        for (let indexE = 0; indexE < this.datosDeEnvio.length; indexE++) {
          let element = this.datosDeEnvio[indexE];

          if (element.nombre == "CelularConductor") {
            console.log('Celular Conductor encontrado en datosDeEnvio');
            arregloParaEnviar[element.nombre] = localStorage.getItem('dataProcess-CelularConductor')?localStorage.getItem('dataProcess-CelularAsegurado'):'';
          }

          if (element.nombre == "Parentesco") {
            if (element.valor == 37 || element.valor == '37') {
              arregloParaEnviar[element.nombre] = '0001';
            }else{
              arregloParaEnviar[element.nombre] = element.valor;
            }
          }else{
            arregloParaEnviar[element.nombre] = element.valor;
          }

          if (element.nombre == "Licencia") {
            console.log('Buscando licencia en cacheClienteFix '+this.cacheClienteFix.find(e => e.nombre == 'Licencia'));
            console.log('Valor de licencia en cacheClienteFix '+this.cacheClienteFix[10].nombre +', valor : '+this.cacheClienteFix[10].valor);
            console.dir(this.cacheClienteFix);
            arregloParaEnviar[element.nombre] = this.cacheClienteFix[10].valor;
          }else{}
            

          if (indexE == this.datosDeEnvio.length - 1) {
            console.log('Arreglo final para envio');
            console.dir(arregloParaEnviar);


            this.latitud = this.elExpediente[0].LatitudCliente;
            this.longitud = this.elExpediente[0].LongitudCliente;
            let reserva:any = localStorage.getItem('bpmArray-ValorReserva');
                      this.valorReserva = reserva;
                      this.datos['valorReserva'] = reserva;
            
            let fechaToString = localStorage.getItem('datos-FechaHora');
                      let fechaSplit = fechaToString.split('T')[0];

            

                      this.nombreDelConductor = localStorage.getItem('datos-NombreConductor');
                      
                      if (!this.nombreDelConductor) {
                        this.nombreDelConductor = localStorage.getItem('NombreConductor');
                      }

                      this.inicialGenero = localStorage.getItem('inicialGenero');

                      if (this.valorReserva == null || this.valorReserva == undefined) {
                        this.valorReserva = '0';
                      }
                      

                        if (this.elExpediente[0].PolizaExterna.indexOf('-') != -1) {
                        polizaTrunk = this.elExpediente[0].PolizaExterna.split('-')[1];
                      }else{
                        polizaTrunk = this.elExpediente[0].PolizaExterna;
                      }

                      if (this.valorReserva == null || this.valorReserva == undefined) {
                        this.valorReserva = '0';
                      }

                      let elParentesco = arregloParaEnviar['Parentesco'];


                               console.log('He aqui la data siniestro');
                                console.dir(arregloParaEnviar);

                              
            this.api.GuardarSiniestroHN(arregloParaEnviar).pipe( 
                finalize(async ()=>{
                  })
                ).subscribe(
                  async (res) =>{
                    let polizaTrunk:any;
                    console.log('Siniestro guardado');
                    console.dir(res);

                    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    this.audienciaId = res;
                    this.idTablaAjustador = res.toString();

                    
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

                    this.api.GuardarIdTablaAjustador(this.idAtencion, this.idTablaAjustador).pipe( 
                      finalize(async ()=>{
                        console.log('Fin de guardar Id de Tabla');
                      })
                    ).subscribe(
                      async (resTabla) =>{
                        console.log(resTabla);
                      }
                    )

                    
                      setTimeout(() => {
                        $('#camButtonAju').fadeIn();
                        if (!this.elExpediente[0].NombreConductor) {
                        this.elExpediente.NombreConductor = this.nombreDelConductor;
                      }


                      this.nombreDelConductor = localStorage.getItem('datos-NombreConductor');
                      
                      if (!this.nombreDelConductor) {
                        this.nombreDelConductor = localStorage.getItem('NombreConductor');
                      }
                      let fechaToString = localStorage.getItem('datos-FechaHora');
                      let fechaSplit = fechaToString.split('T')[0];

                      let reserva:any = localStorage.getItem('bpmArray-ValorReserva');
                      this.valorReserva = reserva;
                      
                      this.inicialGenero = localStorage.getItem('inicialGenero');

                      let elParentesco = arregloParaEnviar['Parentesco'];

                      if (this.elExpediente[0].PolizaExterna.indexOf('-') != -1) {
                        polizaTrunk = this.elExpediente[0].PolizaExterna.split('-')[1];
                      }else{
                        polizaTrunk = this.elExpediente[0].PolizaExterna;
                      }

                      if (this.valorReserva == null || this.valorReserva == undefined) {
                        this.valorReserva = '0';
                      }


                      this.dataBPM =  {
                        Chasis: this.elExpediente[0].Chasis,
                        puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
                        Poliza: polizaTrunk, // 
                        Certificado: this.elExpediente[0].Certificado.toString(),//parseInt(this.elExpediente[0].Certificado), // Pendiente
                        NombreAsegurado: this.elExpediente[0].Cliente,
                        Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
                        Producto: this.producto, //valoresPredeterminados[0].Producto, // Predeterminado : AU01
                        Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
                        FechaOcurrencia: fechaSplit,//fechaSplit,//this.elExpediente[0].FechaRegistro, OJO
                        Causa: valoresPredeterminados[0].Causa, // Pendiente
                        ValorReserva: this.coerceValorReservaParaEnvio(this.valorReserva).toString(), // Formulario (siempre numérico >= 0, nunca null)
                        UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
                        Latitud: this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
                        Longitud: this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
                        NombreConductor: this.nombreDelConductor, // Formulario
                        Genero: this.inicialGenero, // Formulario
                        Parentesco: elParentesco, // Formulario
                        Observacion: this.idTablaAjustador // Guardar Siniestro
                      }

                                console.log('He aqui la data BPM');
                                console.dir(this.dataBPM);
                                this.isLoading = true;
                                this.estaCompleto = true;

                                const bpmValidation = validateClaimStage(this.dataBPM, ficohsaBpmValidationRules);
                                if (!bpmValidation.complete) {
                                  this.isLoading = false;
                                  this.estaCompleto = false;
                                  const missingBpm = bpmValidation.missing.map((item) => item.label).join(', ');
                                  this.toaster.presentToastDataMissing('Faltan datos para enviar BPM Ficohsa: '+missingBpm, 'top', 'bpm');
                                  return;
                                }
                                
                                this.api.GuardarBPM(this.dataBPM).pipe(finalize(async ()=>{
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

                                        const bpmConfirmation = validateClaimStage(dataBPMupdate, ficohsaBpmConfirmationRules);
                                        if (!bpmConfirmation.complete) {
                                          this.isLoading = false;
                                          const missingConfirmation = bpmConfirmation.missing.map((item) => item.label).join(', ');
                                          this.toaster.presentToastDataMissing('Faltan datos de confirmación BPM Ficohsa: '+missingConfirmation, 'top', 'bpm');
                                          return;
                                        }

                                        if (this.atencionId && this.codigoReclamoFicohsa && this.tipoDeCobertura) {
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
                                        }
                                        
                                        
                                        this.api.ActualizarBPM(dataBPMupdate).pipe( 
                                          finalize(async ()=>{
                                            console.log('This is the end')
                                            this.isLoading = false;
                                            this.clearSegmentsStorage();
                                              
                                          })
                                        ).subscribe(
                                          async (res) =>{
                                            console.log('Eeeeeeexitooooo! ');
                                            this.isEeexittoooo = true;
                                            this.miLogRespuesta = res;
                                            console.dir(res);
                                            setTimeout(() => {
                                                this.switchButtons(1);
                                              }, 6000);
                                          },
                                          async (error) => {
                                            this.isLoading = false;
                                            let errorKey = 'acsel';
                                            let elError = error.error.Message;

                                            setTimeout(() => {
                                                this.switchButtons(2);
                                              }, 6000);

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
                                        setTimeout(() => {
                                                this.switchButtons(2);
                                              }, 6000);
                                        this.isLoading = false;
                                        this.toaster.presentToastDataMissing("Código :  "+resAtencion[0].codigo+', error :'+resAtencion[0].descripcion, 'top', 'bpm');  
                                      }
                                      
                                    }else{
                                      setTimeout(() => {
                                                this.switchButtons(2);
                                              }, 6000);
                                      this.isLoading = false;
                                      this.toaster.presentToast(resAtencion.error.Message, 'top', 'solicitante');
                                    }
                                },
                                async (error) => {
                                  this.isLoading = false;
                                  this.toaster.presentToast(error.error.Message, 'top', 'solicitante');
                                }
                          
                              )
                      }, 6000);//this.randomize(3, 6));
                    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                  },
                  async (error) => {
                    
                  }
                )
                  /**/
          }
        }
      }, 1500);

      setTimeout(() => {
        console.log('Datos para envio corregido?');
        console.dir(this.datosDeEnvio);
      }, 1800);
    }

    validarDatos(origen:any){

      this.isLoading = true;
      this.mostrarPanelValidacion = true;
      this.datosComunes = [];
      this.cacheCliente = [];
      this.validaNulosAju = [];
      this.cacheClienteFix = [];
      this.datosIncompletos = [];
      this.datosCompletados = [];
      this.datosAdvertencias = [];
      
      this.evaluarFotos();
      this.evaluarDeuda();
      this.cantidadNulos = 1;
      this.validacionCompleta = false;
      $('#camButtonAju').fadeOut();
      
      //this.accordionGroup.value = [];
      //this.toogleAccordion2('second');
      
      let fotosLocal = JSON.parse(localStorage.getItem('fotos-'+this.atencionId));
      if (fotosLocal) {
          this.fotos = fotosLocal;
        }

      this.api.ObtenercacheCliente(this.idAtencion).pipe( 
      finalize(async ()=>{
        })
      ).subscribe(
        async (res) =>{
          this.cacheCliente = res && res.length > 0 ? res[0] : {};
          this.cacheClienteFix = this.normalizeRecordForReview(this.cacheCliente);
          this.datosCompletados = this.collectAjustadorLocalData();
          this.completeAjustadorValidationReview();
        },
        async (error) => {
          console.log('No se pudo obtener el cache del cliente para validacion');
          console.dir(error);
          this.cacheCliente = [];
          this.cacheClienteFix = [];
          this.datosCompletados = this.collectAjustadorLocalData();
          this.completeAjustadorValidationReview();
        }
      )

    }
  evaluarDeuda() {
    let adeuda:any = localStorage.getItem('AcuerdoDeDeuda-'+this.idAtencion);
    this.AcuerdoDeDeuda = ( adeuda === 'true');
    if (this.AcuerdoDeDeuda == true) {
    }else{
    }
  }

    evaluarFotos(){
      let fotosLocal = JSON.parse(localStorage.getItem('fotos-'+this.atencionId)); let enviadas:any;
      if (fotosLocal) {
        this.fotos = fotosLocal;

        enviadas = localStorage.getItem('fotosEnviadas-'+this.atencionId);
        this.fotosEnviadas = (enviadas == 'true');

        if (this.fotos.length == 0) {
          if (this.fotosEnviadas == false) {
            this.textoFotos = this.textoNoFotos +'. '+ this.textoFotosNoEnviadas +'. '+ this.textoFotosInfo;
          }else{
            this.textoFotos = this.textoNoFotos +'. '+ this.textoFotosInfo;
          }
        }else{
          if (this.fotosEnviadas == false) {
            this.textoFotos = this.textoFotosNoEnviadas +'. '+ this.textoFotosInfo;
          }else{
            this.textoFotos ='';
          }
        }
      }
      
      
      
    }

    evaluarDanios(){
      console.log('Los daños seleccionados son ');
      console.dir(this.daniosSelectAju);
      if (this.daniosSelectAju.length == 0) {
        this.danioMessage = 'No se han seleccionado daños';
        this.danioPosition = 'top';
        this.danioClass = 'danioToast';
        this.textoInfo = 'Faltan daños por seleccionar. Puedes guardar la atención, sin embargo no se reflejarán daños en los informes.';
        $('#infoTexto').fadeIn();
      }else{

        for (let index = 0; index < this.daniosSelectAju.length; index++) {
          const element = this.daniosSelectAju[index];
          let codigoDanio = element.Id;
          let elTipo = localStorage.getItem('TipoReparacion-'+codigoDanio);
          if (index == (this.daniosSelectAju.lenght-1)) {
            localStorage.setItem('daniosSeleccionados', JSON.stringify(this.daniosSelectAju));
          }
        }
        //this.eliminarDuplicadosDanios(this.daniosSelectAju, 2);
      }

      if (this.datosIncompletos.length > 0) {
              //$('#validateButtona').fadeIn();
              //$('#infoIncompleto').fadeIn();
              //$('#dataNullAju').fadeOut(); $('#dataNullAju').attr('style', 'display:none !important;');
            }else{
              //$('#validateButtona').fadeOut();
              //$('#infoIncompleto').fadeOut();
              
            }

      if (this.daniosSelectCulpa.length == 0) {
        this.textoInfoDaniosCulpa = 'Falta completar el acuerdo de deuda. Puedes guardar la atención, sin embargo no se reflejarán datos del culpable en los informes.';
        
      }else{
        //this.eliminarDuplicadosDanios(this.daniosSelectCulpa, 2);
      }
    }

    switchButtons(type:any){
      if (type == 1) {
        //$('#validateButtona').fadeOut();
        //$('#infoIncompleto').fadeIn();
        //$('#saveDataButtona').fadeOut();
        //$('#validateAgainButtona').fadeOut();
        //$('#cancelaButtona').fadeOut();

        $('#resultsButtona').fadeIn();
        $('#goHomeButtona').fadeIn();
      }else{
        //$('#validateButtona').fadeIn();
        //$('#infoIncompleto').fadeIn();
        //$('#saveDataButtona').fadeIn();
        //$('#validateAgainButtona').fadeIn();
        //$('#cancelaButtona').fadeIn();

        $('#resultsButtona').fadeOut();
        $('#goHomeButtona').fadeOut();
      }

    }

    switchButtonsAll(type:any){
      if (type == 1) {
        //$('#validateButtona').fadeOut();
        //$('#infoIncompleto').fadeIn();
        //$('#saveDataButtona').fadeOut();
        //$('#validateAgainButtona').fadeOut();
        //$('#cancelaButtona').fadeOut();

        $('#resultsButtona').fadeOut();
        $('#goHomeButtona').fadeOut();
      }else{
        //$('#validateButtona').fadeOut();
        //$('#infoIncompleto').fadeIn();
        //$('#saveDataButtona').fadeIn();
        //$('#validateAgainButtona').fadeIn();
        //$('#cancelaButtona').fadeIn();

        $('#resultsButtona').fadeOut();
        $('#goHomeButtona').fadeOut();
      }

    }

    goResults(){
      this.router.navigate(['./end-process'], { queryParams: { Id: this.atencionId, CodigoReclamoFicohsa: this.codigoReclamoFicohsa.toString(),
        CodigoBPMFicohsa: this.codigoBPMFicohsa.toString() } });
    }

    goHome() {
      window.location.reload();
    }

    toValidationRecord(items: any[]){
      return (items || []).reduce((record, item) => {
        if (item && item.nombre) {
          record[item.nombre] = item.valor;
        }
        return record;
      }, {});
    }

    normalizeRecordForReview(record: any){
      if (!record) {
        return [];
      }

      const source = Array.isArray(record) ? record[0] : record;

      if (!source || typeof source !== 'object') {
        return [];
      }

      return Object.keys(source)
        .filter((key) => key && key !== '$id')
        .map((key) => ({
          nombre: key === 'IdAtencion' ? 'RefAtencionId' : key,
          valor: source[key]
        }));
    }

    private valueBelongsToCurrentAttention(value: any){
      if (value === null || value === undefined) {
        return false;
      }

      const stringValue = value.toString();
      const currentAttention = this.idAtencion?.toString();

      if (!currentAttention || !stringValue.includes('-')) {
        return true;
      }

      const [possibleAttention] = stringValue.split('-');
      if (possibleAttention === currentAttention) {
        return true;
      }

      return /^\d{5,}$/.test(possibleAttention) ? false : true;
    }

    // Coerces a "Valor de Reserva" raw value into a non-negative number that is
    // always safe to send. The server rejects null, so empty/null/undefined/NaN/''
    // (and the stringified variants) become 0, and negative numbers are clamped to 0.
    private coerceValorReservaParaEnvio(rawValue: any): number {
      if (rawValue === null || rawValue === undefined) {
        return 0;
      }

      const normalized = typeof rawValue === 'string' ? rawValue.trim().toLowerCase() : rawValue;
      if (normalized === '' || normalized === 'null' || normalized === 'undefined' || normalized === 'nan') {
        return 0;
      }

      const parsed = Number(normalized);
      if (!Number.isFinite(parsed) || parsed < 0) {
        return 0;
      }

      return parsed;
    }

    private cleanStoredValue(value: any){
      if (value === null || value === undefined) {
        return value;
      }

      const stringValue = value.toString();
      const currentAttention = this.idAtencion?.toString();

      if (currentAttention && stringValue.startsWith(currentAttention+'-')) {
        return stringValue.split('-').slice(1).join('-');
      }

      return value;
    }

    collectAjustadorLocalData(){
      const completed = [];

      for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);

        if (!key || key.indexOf('datos-') !== 0) {
          continue;
        }

        const storageKey = key.split('-').slice(1).join('-');
        const storageVal = localStorage.getItem(key);

        // 'datos-*' values are stored raw (never prefixed with the attention id),
        // so we must NOT run the attention-prefix heuristic on them. Doing so would
        // wrongly drop/truncate legit values that contain dashes (e.g. polizas or
        // license numbers like '12345-678').
        completed.push({
          nombre: storageKey,
          valor: storageVal
        });
      }

      return completed;
    }

    completeAjustadorValidationReview(){
      console.log('Cache cliente para revision');
      console.dir(this.cacheClienteFix);
      console.log('Datos completados para revision');
      console.dir(this.datosCompletados);

      const datosAjustador = this.buildAjustadorValidationRecord();
      const validationResult = validateClaimStage(datosAjustador, ajustadorScreenValidationRules);

      this.datosIncompletos = validationResult.missing.map((issue) => {
        const item = requiredDataAjustador.find((requiredItem) => requiredItem.nombre === issue.field);
        return {
          nombre: issue.label,
          valor: 'null',
          elementSegmento: item?.pagSegmento,
          indexSegmento: item?.segmentIndex
        };
      });

      this.datosComunes = ajustadorScreenValidationRules
        .filter((rule) => !validationResult.missing.some((issue) => issue.field === rule.field))
        .map((rule) => ({ nombre: rule.field, valor: datosAjustador[rule.field] }));

      this.datosAdvertencias = validationResult.advisories.map((advisory) => ({
        nombre: advisory.label,
        valor: advisory.value,
        mensaje: advisory.message
      }));

      $('#camButtonAju').fadeIn();
      this.cantidadNulos = this.datosIncompletos.length;
      this.isLoading = false;
      this.focusValidationPanel();

      if (this.cantidadNulos == 0) {
        this.estaEvaluado = true;
        this.validacionCompleta = true;
        localStorage.setItem('estaEvaluado', 'true');
        this.evaluarDanios();

        this.textoInfo = 'Datos completados con éxito! Ahora puedes proceder a enviarlos haciendo click en GUARDAR DATOS';
        if (this.datosAdvertencias.length > 0) {
          this.textoInfo += ' Aviso: ' + this.datosAdvertencias.length + ' campo(s) están en 0 y se guardarán así salvo que los modifiques.';
        }
        $('#spanProgressAju').removeClass('progress');
        $('#spanProgressAju').addClass('progress-end');
      } else {
        this.estaEvaluado = false;
        this.validacionCompleta = false;
        localStorage.setItem('estaEvaluado', 'true');
        this.textoInfo = 'Validación completada. Revisa los datos incompletos para continuar.';
        if (this.datosAdvertencias.length > 0) {
          this.textoInfo += ' Además, ' + this.datosAdvertencias.length + ' campo(s) están en 0 y se guardarán así salvo que los modifiques.';
        }
        $('#spanProgressAju').removeClass('progress-end');
        $('#spanProgressAju').addClass('progress');
      }
    }

    buildAjustadorValidationRecord(){
      const datosAjustador = this.toValidationRecord(this.datosCompletados);

      return requiredDataAjustador.reduce((record, item) => {
        // Prefer the raw 'datos-*' value when it was captured for this session.
        const rawDatosValue = datosAjustador[item.nombre];
        if (rawDatosValue !== undefined) {
          record[item.nombre] = rawDatosValue;
          return record;
        }

        // Otherwise fall back to the attention-prefixed storage key, applying the
        // prefix heuristic only here (these values genuinely use the id-prefix scheme).
        const storageValue = localStorage.getItem(item.storageKey);
        if (this.valueBelongsToCurrentAttention(storageValue)) {
          record[item.nombre] = this.cleanStoredValue(storageValue);
        }

        return record;
      }, {});
    }

    evaluarDatosComunes(completados, incompletos){
      const nombresArr2 = new Set(incompletos.map(e => e.nombre));
      const comunes = completados.filter(e => nombresArr2.has(e.nombre));
      this.datosComunes = comunes;
      console.log('comunes ');
      console.dir(comunes);
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

    async presentToastEditSig(message:any, position:any, clase:any) {
      
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

    

    hasNonDigit(str) {
      return /\D/g.test(str.toString());
    }
    
  checarCoberturas(){
    setTimeout(() => {
      let cobert:any = localStorage.getItem('coberturas');
      this.coberturas = JSON.parse(cobert);

      console.log('Las coberturas en segmento solicitante'); console.dir(this.coberturas);

      if (this.coberturas.length == 0) {
        this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios.', 'top', 'danger', 10000);
        this.esConduceSeguro = true;
      }else{
        this.esConduceSeguro = false;
      }

      
    }, 300);
  }

  ionViewWillEnter(){
    // Al regresar de segmento-danio (u otro segmento) reconstruimos la lista de
    // "Daños vehículo afiliado". Si el catálogo aún no está cargado, getDanios()
    // disparará la reconstrucción al terminar.
    if (this.danios && this.danios.length > 0) {
      this.reconstruirSeleccionDanios();
      this.reconstruirSeleccionDaniosCulpa();
    } else {
      this.getDanios();
    }
    // Refresca los daños manuales (afiliado y tercero) desde el servidor cada vez
    // que se vuelve a la pantalla, para reflejar lo agregado/quitado en culpable o
    // segmento-danio. El merge ocurre en el callback del API (no hay carrera con
    // la reconstrucción síncrona del catálogo).
    this.cargarDaniosManualesAju();
    this.cargarDaniosManualesCulpa();
  }

  // Navega a segmento-danio para agregar/quitar daños. Usa NavController (no
  // router.navigate) para evitar el error "Cannot activate an already activated
  // outlet". Al volver, ionViewWillEnter() reconstruye la lista automáticamente.
  editarDanios(){
    this.navCtrl.navigateForward('/segmento-danio');
  }

  // Navega a la página "Acuerdo de Deuda" (culpable) para agregar/quitar daños
  // del tercero/contraparte. Usa NavController y pasa el mismo query param que
  // setSegment() ('pageSource: ./ajustadorhn') para que culpable se comporte
  // igual que cuando se entra desde el segmento. Al volver, ionViewWillEnter()
  // reconstruye la lista vía reconstruirSeleccionDaniosCulpa().
  editarDaniosCulpa(){
    this.navCtrl.navigateForward('/culpable', { queryParams: { pageSource: './ajustadorhn' } });
  }

  reconstruirSeleccionDanios(){
    if (!this.danios || this.danios.length === 0) {
      return;
    }

    const reconstruido: any[] = [];

    for (var i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      // Prefijo exacto 'daniosSelect-' para no colisionar con
      // 'daniosSelectAju', 'daniosSelectOtro-' ni 'daniosSelectCulpa-'.
      if (key && key.indexOf('daniosSelect-') == 0) {
        let indexSelect = parseInt(localStorage.getItem(key));
        const elementD = this.danios.find((item) => Number(item.Id) === Number(indexSelect));
        if (elementD) {
          let tipo: any;
          let tipoId = parseInt(localStorage.getItem('TipoReparacion-'+indexSelect));
          if (tipoId == 1) {tipo = 'Reparación';}else{tipo = 'Cambio';}
          reconstruido.push({Codigo: elementD.Codigo, Descripcion: elementD.Descripcion, Id: elementD.Id, tipo:tipo, tipoId:tipoId});
        }
      }

      // Daños manuales ("Otros") capturados en segmento-danio. Se guardan en
      // localStorage como 'danioOtro-{codigo}' con el objeto registrado
      // ({ DescripcionDeDanio, TipoReparacion, CodigoDanioVehiculo, ... }).
      // Los incluimos para que el ajustador los vea junto a los del catálogo y
      // no piense que falta un daño.
      if (key && key.indexOf('danioOtro-') == 0) {
        const manual = this.mapearDanioManual(localStorage.getItem(key));
        if (manual) {
          reconstruido.push(manual);
        }
      }
    }

    // FUENTE DE VERDAD de los daños manuales del afiliado: el servidor
    // (ObtenerDaniosExtras con TipoEntidad 'Asegurado'), cargado async en
    // cargarDaniosManualesAju(). Igual que en el tercero, se mezcla lo ya cargado
    // y el callback del API vuelve a reconstruir para evitar carreras.
    if (this.daniosManualesAju && this.daniosManualesAju.length) {
      for (const manual of this.daniosManualesAju) {
        reconstruido.push(manual);
      }
    }

    this.seleccionDeDanios = this.dedupDaniosVisibles(reconstruido);
  }

  // Reconstruye "Daños tercero/contraparte" (seleccionDeDaniosCulpable) desde
  // cero usando las llaves PROPIAS del culpable (no las del afiliado):
  //   - Catálogo: 'daniosSelectCulpa-{Id}'  (valor = Id del daño)
  //   - Tipo:     'TipoReparacionCulpa-{Id}' / 'TipoReparacionCulpaIndex-{Id}'
  //   - Manuales: 'danioOtroCulpa-{codigo}'  (objeto con DescripcionDeDanio/TipoReparacion)
  // Se llama desde ionViewWillEnter() y desde getDanios() para evitar la carrera
  // de tiempos (catálogo aún no cargado). Reasigna el arreglo (nunca hace push)
  // para que no se dupliquen las entradas al volver del culpable.
  reconstruirSeleccionDaniosCulpa(){
    if (!this.danios || this.danios.length === 0) {
      return;
    }

    const reconstruido: any[] = [];

    for (var i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      // Prefijo exacto 'daniosSelectCulpa-' para no colisionar con el arreglo
      // 'daniosSelectCulpa', con 'daniosSelectOtroCulpa-' ni con el afiliado
      // 'daniosSelect-'.
      if (key && key.indexOf('daniosSelectCulpa-') == 0) {
        let indexSelect = parseInt(localStorage.getItem(key));
        const elementD = this.danios.find((item) => Number(item.Id) === Number(indexSelect));
        if (elementD) {
          let tipo: any;
          let tipoId = parseInt(localStorage.getItem('TipoReparacionCulpa-'+indexSelect));
          if (tipoId == 1) {tipo = 'Reparación';}else{tipo = 'Cambio';}
          reconstruido.push({Codigo: elementD.Codigo, Descripcion: elementD.Descripcion, Id: elementD.Id, tipo:tipo, tipoId:tipoId});
        }
      }

      // Daños manuales ("Otros") del tercero/culpable agregados EN ESTA SESIÓN.
      // Se guardan en localStorage como 'danioOtroCulpa-{codigo}' con el objeto
      // registrado en culpable.page.ts ({ DescripcionDeDanio, TipoReparacion, ... }).
      // Sirven para mostrarlos al instante antes de que responda el servidor.
      // El prefijo 'danioOtroCulpa-' NO colisiona con el afiliado 'danioOtro-'.
      if (key && key.indexOf('danioOtroCulpa-') == 0) {
        const manual = this.mapearDanioManual(localStorage.getItem(key));
        if (manual) {
          reconstruido.push(manual);
        }
      }
    }

    // FUENTE DE VERDAD: los daños manuales del tercero se obtienen del servidor
    // (api.ObtenerDaniosExtras(idAtencion, 'Tercero')) — exactamente la misma
    // llamada que usa culpable para llenar 'daniosSelectOtroCulpa' (donde aparece
    // "COCOL"). 'daniosManualesCulpa' se llena async en cargarDaniosManualesCulpa()
    // y aquí solo se mezcla lo ya cargado; al terminar el API se vuelve a llamar
    // esta reconstrucción para que el merge persista sin carreras de tiempo.
    if (this.daniosManualesCulpa && this.daniosManualesCulpa.length) {
      for (const manual of this.daniosManualesCulpa) {
        reconstruido.push(manual);
      }
    }

    this.seleccionDeDaniosCulpable = this.dedupDaniosVisibles(reconstruido);
  }

  // Carga los daños manuales ("Otros") del tercero/culpable desde el servidor,
  // misma fuente que culpable.page.ts (ObtenerDaniosExtras con TipoEntidad
  // 'Tercero'). Mapea cada uno al shape de la lista y vuelve a reconstruir para
  // que el merge sea estable aunque el catálogo se reconstruya luego.
  cargarDaniosManualesCulpa(){
    const idAtencion = this.idAtencion || localStorage.getItem('idAtencion');
    if (!idAtencion) { return; }
    this.api.ObtenerDaniosExtras(idAtencion, Entidades[1].tipoEntidad).pipe(
      finalize(async () => {})
    ).subscribe(
      async (res) => {
        const lista = Array.isArray(res) ? res : [];
        console.log('[ajustadorhn] Daños manuales TERCERO desde ObtenerDaniosExtras:');
        console.dir(lista);
        this.daniosManualesCulpa = lista
          .map((item) => this.mapearDanioManualObjeto(item))
          .filter((item) => !!item);
        this.reconstruirSeleccionDaniosCulpa();
      },
      async (err) => {
        console.log('[ajustadorhn] Error ObtenerDaniosExtras TERCERO:', err);
      }
    );
  }

  // Carga los daños manuales ("Otros") del afiliado desde el servidor, misma
  // fuente que segmento-danio (ObtenerDaniosExtras con TipoEntidad 'Asegurado').
  cargarDaniosManualesAju(){
    const idAtencion = this.idAtencion || localStorage.getItem('idAtencion');
    if (!idAtencion) { return; }
    this.api.ObtenerDaniosExtras(idAtencion, Entidades[0].tipoEntidad).pipe(
      finalize(async () => {})
    ).subscribe(
      async (res) => {
        const lista = Array.isArray(res) ? res : [];
        console.log('[ajustadorhn] Daños manuales AFILIADO desde ObtenerDaniosExtras:');
        console.dir(lista);
        this.daniosManualesAju = lista
          .map((item) => this.mapearDanioManualObjeto(item))
          .filter((item) => !!item);
        this.reconstruirSeleccionDanios();
      },
      async (err) => {
        console.log('[ajustadorhn] Error ObtenerDaniosExtras AFILIADO:', err);
      }
    );
  }

  // Convierte un daño manual ("Otros") almacenado por segmento-danio en el mismo
  // shape que usa la lista "Daños vehículo afiliado". Se deja Id/Codigo vacíos
  // para que eliminarDuplicadosDanios deduplique por descripción y no choque con
  // los daños de catálogo (que siempre traen Id y Codigo reales).
  private mapearDanioManual(valor: string){
    try {
      return this.mapearDanioManualObjeto(JSON.parse(valor));
    } catch (e) {
      return null;
    }
  }

  // Mapea un objeto de daño manual ya parseado (afiliado u "Otros" del tercero) al
  // shape de la lista. Id/Codigo vacíos para que eliminarDuplicadosDanios deduplique
  // por descripción y no choque con los daños de catálogo.
  private mapearDanioManualObjeto(otro: any){
    if (!otro) { return null; }
    const descripcion = otro.DescripcionDeDanio || otro.Descripcion;
    if (!descripcion) { return null; }
    let tipo = '';
    const tipoId = Number(otro.TipoReparacion);
    if (tipoId == 1) { tipo = 'Reparación'; } else if (tipoId == 2) { tipo = 'Cambio'; }
    return {
      Codigo: '',
      Descripcion: descripcion,
      DescripcionDeDanio: otro.DescripcionDeDanio,
      Id: '',
      tipo: tipo,
      tipoId: tipoId,
      esManual: true
    };
  }

  ionViewDidEnter(){

    let polNum:any;
    let cerNum:any;

    setTimeout(() => {
      polNum = this.elExpediente[0].PolizaExterna.split('-')[1];
      cerNum = this.elExpediente[0].Certificado;

      const cobertura = {
      pNumPoliza: parseInt(polNum),
      pNumSiniestro: '',
      pNumCertificado: parseInt(cerNum),
      pNumEndoso: '',
      pNumAsegurado: ''
    }
    
        this.api.Valida_Lista_Coberturas(cobertura).pipe( 
          finalize(async ()=>{
            this.isLoading = false;
          })
        ).subscribe(
          (res) =>{
            console.log('Cobertura de póliza ')
            console.dir(res)

            //localStorage.setItem('coberturas', JSON.stringify(res));
       
          }
        )
          
        }, 3000);

    setTimeout(() => {

      
        let evaluado:any = localStorage.getItem('estaEvaluado');
        this.estaEvaluado = true;//(evaluado === 'true');
        console.log('El estado de evaluación es : '+this.estaEvaluado);

        if (this.estaEvaluado == true) {
          //$('#validateButtona').fadeOut();
            //$('#saveDataButtona').fadeIn();
            //$('#validateAgainButtona').fadeIn();
            //$('#cancelaButtona').fadeIn();
          this.validarDatos(2);
          this.listarDanios();
        }
        //this.validarDatos();
        //this.setFirstSegment()
      }, 1000);

      
      
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
          cssClass: 'ajustador-form-alert',
          header:'HELP',
          message:res.error.Message,
          buttons:[{
            text: 'OK',
            role: 'cancel',
            cssClass: 'alert-button-ok'
          }]
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
        this.reconstruirSeleccionDanios();
        this.reconstruirSeleccionDaniosCulpa();
        this.cargarDaniosManualesAju();
        this.cargarDaniosManualesCulpa();
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
    // se elimina getcountry
    this.validarDatos(3);
  }

  goFotos() {
    this.router.navigate(['./cargar-archivos']);
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
    this.miPaisNombre = this.laLocalidad[0].countryName;
    localStorage.setItem('codigoPais', this.miPais);
    localStorage.setItem('nombrePais', this.miPaisNombre);
    this.latitud = this.laLocalidad[0].latitude;
    this.longitud = this.laLocalidad[0].longitude;
    this.validarDatos(4);

    
  }

  scrollToElement() {
    $('#elemAju').animate({scrollTop:200}, 1000);
  }

  getCanvasWith() {

    this.panelWidth = (document.getElementById('cardAseguradoFinal').clientWidth);
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.panelWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.panelWidth - 50;
    }
  }

  identificarPais(){
    this.miPais = localStorage.getItem('codigoPais');
    if (this.miPais == "HN"){
      this.codigoPais = 'hn';
    }else if(this.miPais == "GT"){
      this.codigoPais = 'gt';
    }
  }

  async getTipoSolicitante(){
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
          cssClass: 'ajustador-form-alert',
          header:'HELP',
          message:res.error.Message,
          buttons:[{
            text: 'OK',
            role: 'cancel',
            cssClass: 'alert-button-ok'
          }]
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
          cssClass: 'ajustador-form-alert',
          header:'HELP',
          message:res.error.Message,
          buttons:[{
            text: 'OK',
            role: 'cancel',
            cssClass: 'alert-button-ok'
          }]
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
          cssClass: 'ajustador-form-alert',
          header:'HELP',
          message:res.error.Message,
          buttons:[{
            text: 'OK',
            role: 'cancel',
            cssClass: 'alert-button-ok'
          }]
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


  randomize(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);//.toFixed(2);
  }

  

  onIonInfinite(ev) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  next(extra){
                
    this.router.navigate(['./cargar-archivos'], extra)
  }
  
  saveFirma(){
    //console.log(this.sig.toDataURL("image/jpeg"));
  }

  goBack(){
    this.alertaSalir();
    //this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  async alertaSalir() {
    const alert = await this.alert.create({
      cssClass: 'ajustador-form-alert',
      header:'Salir del formulario?',
      message:'Los datos se perderan sin haber enviado. Salir?',
      buttons:this.alertButtons
    });
    await alert.present();
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
    localStorage.setItem('datos-OtrosTalleres', this.tallerOtro);
  }

  entraTallerOtroDireccion(event){
    this.tallerOtroDireccion = event.target.value;
    console.log(this.tallerOtroDireccion)
  }

  entraPesado(event){
    this.talleresFiltrados = [];
    this.esPesado = event.target.value;
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
            this.isSignature = true;
          }

        }
      },
      async (res) => {
        this.firmaPrecargada = emptySignatureWhite;
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

  getFechaInspeccionInicial(): string {
    const ahora = new Date();
    this.minFechaInspeccion = this.getStartOfToday().toISOString();

    const fechaGuardada = localStorage.getItem('datos-FechaHora');
    if (fechaGuardada) {
      const fecha = new Date(fechaGuardada);
      if (!Number.isNaN(fecha.getTime()) && fecha >= this.getStartOfToday()) {
        return fecha.toISOString();
      }
    }

    return ahora.toISOString();
  }

  getStartOfToday(): Date {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return hoy;
  }

  marcarFechaAjustador(mydateAjustador){
    let fechaSeleccionada = new Date(mydateAjustador);
    if (Number.isNaN(fechaSeleccionada.getTime()) || fechaSeleccionada < this.getStartOfToday()) {
      fechaSeleccionada = new Date();
    }

    const fechaIso = fechaSeleccionada.toISOString();
    this.fechaInspeccion = fechaIso;
    this.minFechaInspeccion = this.getStartOfToday().toISOString();
    localStorage.setItem('datos-FechaHora', fechaIso);

    let brakePoint;
    if (fechaIso.toString().indexOf('T') == -1) {
      brakePoint = ', ';
    }else{
      brakePoint = 'T';
    }

    this.fechaInspeccionLocal = fechaSeleccionada.toLocaleString(); 

    this.mydateAjustador = fechaIso.split(brakePoint)[0];
    this.laFechaInspeccion = 'Fecha : '+fechaIso.split(brakePoint)[0].toString()+', Hora : '+(fechaIso.split(brakePoint)[1].toString()).split('.')[0];


  }

  formatearFecha(mydateAjustador){
  }

  entraIdentidad(event){
    if(event.target.value.length == event.target.maxlength){
      this.elExpediente.IdentidaConductor = event.target.value;
      this.datos['IdentidaConductor'] = event.target.value;
      this.datos['Identificacion'] = event.target.value;
      this.datos['DPI_Pasaporte'] = event.target.value;
      localStorage.setItem('datos-DPI_Pasaporte', event.target.value);
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

  this.segmentoTitulo = segments_aju[daIndex].titulo;
  localStorage.setItem('segmentoTitulo', this.segmentoTitulo);


  // Use Ionic's NavController so the ion-router-outlet stack is managed correctly.
  // Plain router.navigate() to a page already in the stack throws
  // "Cannot activate an already activated outlet" on the first tap (and only works on the second).
  if (segmentInput == 'culpable') {
    this.navCtrl.navigateForward(['/'+segmentInput], { queryParams: { pageSource: './ajustadorhn' } });
  }else{
    this.navCtrl.navigateForward(['/'+segmentInput]);
  }
  
  
 }

 setTipoSolicitante(event){
  console.log(event)
  this.elTipoSolicitante = event.target.value;
  this.datos['RefTipoSolicitanteInformeAjusteId'] = event.target.value;
  

  for (let index = 0; index < this.tipoSolicitante.length; index++) {
    const element = this.tipoSolicitante[index];
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

  validarDaniosCulpa(){
    this.isRefreshingCulpa = true;
    this.isLoading = true;
    $('#loaderContainer').fadeIn();
    for (var i = 0; i < localStorage.length; i++){
        
        if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {

          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {

            const elementD = this.danios[indexDanio];

            if (indexSelect == elementD.Id) {
                let tipo:any;
                let tipoIndex = parseInt(localStorage.getItem('TipoReparacionCulpaIndex-'+indexSelect));
                let tipoId = parseInt(localStorage.getItem('TipoReparacionCulpa-'+indexSelect));

                if (tipoId == 1) {tipo = 'Reparación';}else{tipo = 'Cambio';}
                this.daniosSelectCulpa.push(elementD);
                this.seleccionDeDaniosCulpable.push({Codigo: elementD.Codigo, Descripcion: elementD.Descripcion, Id: elementD.Id, tipo:tipo, tipoId:tipoId});
                //console.dir(elementD);
              } 
          }


          
        }

        if (i == (localStorage.length-1)) {
          this.isRefreshingCulpa = false;
          this.isLoading = false;
          $('#loaderContainer').fadeOut();
        }
      }
  }

  listarDanios(){
    this.daniosSelectAju = [];
    this.isRefreshing = true;
    console.log('Tengo esto en storage');
    console.dir(localStorage);
    setTimeout(() => {
      
      for (var i = 0; i < localStorage.length; i++){
        
        if (localStorage.key(i).indexOf('daniosSelectCulpa-') == 0) {

          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {

            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {
              const duplicados = this.daniosSelectCulpa.filter(item => item.Id === elementD.Id);
              if (duplicados.length === 0) {
                this.daniosSelectCulpa.push(elementD);
                console.log('Elemento culpa');
              }
            }
          }


          
        }

        if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
          console.log(localStorage.getItem(localStorage.key(i)));
          let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));//+1;
          for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
            const elementD = this.danios[indexDanio];
            if (indexSelect == elementD.Id) {

              const duplicados = this.daniosSelectAju.filter(item => item.Id === elementD.Id);
              if (duplicados.length === 0) {
                this.daniosSelectAju.push(elementD);
              }

              //this.daniosSelectAju.push(elementD);
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


          this.eliminarDuplicadosDanios(this.daniosSelectAju, 1);
          localStorage.setItem('daniosSelectAju', JSON.stringify(this.daniosSelectAju));
        }
      }
    }, 3000);
  }

  insertarConvenioReparacion(){
    this.daniosSelectAju = [];

    
    for (var i = 0; i < localStorage.length; i++){
      if (localStorage.key(i).indexOf('daniosSelect-') == 0) {
        let indexSelect = parseInt(localStorage.getItem(localStorage.key(i)));
        for (let indexDanio = 0; indexDanio < this.danios.length; indexDanio++) {
          const elementD = this.danios[indexDanio];
          if (indexSelect == elementD.Id) {
            this.daniosSelectAju.push(elementD);
            console.dir(elementD);
          } 
        }
      }
    }

    setTimeout(() => {
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
          FechaRegistro: new Date().toISOString(),
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
          async (error) => {
            //this.toaster.presentToast(error.error.Message, 'top', 'taller');
          }
    
        )
        /**/
        if (index == (this.daniosSelectAju.length-1)) {
          this.eliminarDuplicadosDanios(this.daniosSelectAju, 4);
        }
      }
    }, 900);
    
      
      /**/
      
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
                  if((idE) == danioInputId){
                    localStorage.removeItem(localStorage.key(i));
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

    eliminarDuplicadosEnvio(arreglo: any[]) {
    const claves = ['nombre'];
    const vistos = new Set<string>();

    return arreglo.filter(envio => {
        const claveCompuesta = claves.map(campo =>
            (envio[campo] || '').toString().trim().toUpperCase()
        ).join('|');

        if (vistos.has(claveCompuesta)) {
            return false; // Ya lo vimos
        }

        vistos.add(claveCompuesta);
        return true; // Primer vez que se ve este conjunto de campos
    });
  }

    eliminarDuplicados(arreglo: any[]) {
    const claves = ['nombre', 'etiqueta', 'index'];
    const vistos = new Set<string>();

    return arreglo.filter(vehiculo => {
        const claveCompuesta = claves.map(campo =>
            (vehiculo[campo] || '').toString().trim().toUpperCase()
        ).join('|');

        if (vistos.has(claveCompuesta)) {
            return false; // Ya lo vimos
        }

        vistos.add(claveCompuesta);
        return true; // Primer vez que se ve este conjunto de campos
    });
  }

  // Dedup robusto para las listas visibles de daños (afiliado y tercero).
  // Colapsa por DESCRIPCIÓN normalizada (trim + espacios colapsados + mayúsculas)
  // para que un daño de catálogo (con Id/Codigo reales y chip de reparación) y una
  // copia manual/API con el MISMO texto pero Id/Codigo vacíos se muestren UNA sola
  // vez. La causa de la duplicación era que eliminarDuplicadosDanios usa la clave
  // compuesta Id|Descripcion|Codigo, por lo que el de catálogo (Id real) y el de
  // ObtenerDaniosExtras (Id vacío) no coincidían. Prefiere SIEMPRE la entrada con
  // Id real (catálogo) sobre la manual.
  private dedupDaniosVisibles(arreglo: any[]) {
    const porDescripcion = new Map<string, any>();
    for (const danio of arreglo || []) {
      const desc = (danio?.DescripcionDeDanio || danio?.Descripcion || '')
        .toString().trim().replace(/\s+/g, ' ').toUpperCase();
      if (!desc) { continue; }
      const existente = porDescripcion.get(desc);
      if (!existente) {
        porDescripcion.set(desc, danio);
        continue;
      }
      const existenteTieneId = existente.Id !== '' && existente.Id != null;
      const actualTieneId = danio.Id !== '' && danio.Id != null;
      if (!existenteTieneId && actualTieneId) {
        porDescripcion.set(desc, danio);
      }
    }
    return Array.from(porDescripcion.values());
  }

  eliminarDuplicadosDanios(arreglo: any[], origen:any) {
    const claves = ['Id', 'Descripcion', 'Codigo'];
    const vistos = new Set<string>();

    return arreglo.filter(danio => {
        const claveCompuesta = claves.map(campo =>
            (danio[campo] || '').toString().trim().toUpperCase()
        ).join('|');

        if (vistos.has(claveCompuesta)) {
            return false; // Ya lo vimos
        }

        vistos.add(claveCompuesta);
        return true; // Primer vez que se ve este conjunto de campos
    });
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
