import { culpable, personaHn, propiedaPrivadaHn, tipoLicencia } from './../interfaces/formulario';
import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, ToastController, Platform, IonModal, ModalController, NavParams, IonContent, InfiniteScrollCustomEvent, MenuController } from '@ionic/angular';
import { ajustadorHn } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { Location } from "@angular/common";
import { Network, ConnectionStatus } from '@capacitor/network';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ToastService } from '../services/toast.service';
import { InterAutoVehicleCacheService } from '../services/inter-auto-vehicle-cache.service';
import { marcasVehiculos } from '../environments/vehicles';
import { segments } from '../environments/segments';
import { editarFirmaIcono, imagePrefix } from '../environments/default-images';
import { emptySignature, emptySignatureWhite } from '../environments/signatures';
import { beneficiariosTipos } from '../environments/beneficiarios';
import { responsableTipos } from '../environments/responsable';
import { Predeterminados, ItemsExpediente, requiredData, requiredDataLabels, requiredData_Less, requiredDataAjustador, requiredDataCliente } from '../environments/predeterminados';
import { FormatosService } from '../services/formatos.service';
import { CountrydataService } from '../services/countrydata.service';
import { validateClaimStage, normalizeLicenseExpirationDate } from '../validation/claim-validation';
import { clienteScreenValidationRules } from '../validation/claim-validation.rules';
import { normalizeCoordinate, resolveClaimCoordinates } from '../utils/claim-payload-normalizer';
import {
  buildInterAutoValidationInput,
  evaluateInterAutoChassisValidation,
  InterAutoChassisValidationState,
  normalizeVehicleIdentifier
} from '../validation/inter-auto-chassis.validation';
import { Keyboard } from '@capacitor/keyboard';
import { resolveAttentionCurrency } from '../utils/currency-display.util';
import * as $ from 'jquery';
import { WebElement } from 'protractor';

@Component({
  selector: 'app-clientehn',
  templateUrl: './clientehn.page.html',
  styleUrls: ['./clientehn.page.scss'],
})
export class ClientehnPage implements OnInit {
  // DECLARACION
  @ViewChild('imagen') imagen: ElementRef | undefined;
  @ViewChild('requerido') requerido: ElementRef | undefined;
  @ViewChild('modalNulos') modal: IonModal | undefined;
  @ViewChild('daModal') daModal: IonModal | undefined;
  @ViewChild('propModal') propModal: IonModal | undefined;
  @ViewChild('modalLesion') modalLesion: IonModal | undefined;
  @ViewChild(IonContent) content!: IonContent;
  @ViewChild('imagenFirma') imagenFirma:ElementRef | undefined;
  
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

  readonly predicateCliente: MaskitoElementPredicateAsync = async (el) => (el as unknown as HTMLIonInputElement).getInputElement();
  readonly idMask: MaskitoOptions = {mask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,],}
  readonly idMaskFechaVencimiento: MaskitoOptions = {mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,],}
  readonly phoneMask: MaskitoOptions = {mask: ['(', '5', '0', '4', ')', ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,],}
  readonly yearMask: MaskitoOptions = {mask: [/\d/, /\d/, /\d/, /\d/,],}
  readonly kmMask: MaskitoOptions = {mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,],}
  readonly emailMask: MaskitoOptions = {mask: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,],}
  beneficiarioTipos = beneficiariosTipos
  responsableTipos = responsableTipos
  requiredD = requiredData
  requiredMin = requiredData_Less
  requiredDLabels = requiredDataLabels
  dataProcess: any = [];  copmleteByCase: any = []; marcasVehiculos: any = marcasVehiculos; dataFormulario: any = [];  marcas: any = []; modelos: any = []; 
  modelosMarca: any = []; cliente: any = [];  talleres: any = []; culpable: culpable = {};  persona: personaHn = {};  acompaniante: personaHn[] = []; // idpersona 1
  testigos: personaHn[] = []; //idpersona 2
  lesionados: personaHn[] = []; // idpersona 3
  ajustador: ajustadorHn = {};  propiedadPrivada: propiedaPrivadaHn = {};  propiedadesprivadas: propiedaPrivadaHn[] = [];  tipoLicencia: tipoLicencia[] = [];
  tallerOtroArray: any = [];  elTipoLicencia: any;  tipoConductor: any = [];  validaNulos:any=[];  clienteFiltro:any=[];  ajustadorFiltro:any=[];
  deviceWidth: any;  segments: any = segments;  cantidadNulos:any;
  // Arrays de volcado de datos
  tipoParentescos: any = [];  esTercerosHeridos: any;  esTercerosMuertos: any;  elExpediente: any = [];  nulosExpediente:any = [];  culpableCorreo: any;
  culpableTrabajo: any;  culpableContacto: any;  culpableContactoNumero: any;  culpableIdentidad: any;  culpableEsPropiertario: boolean = true;
  elTipoParentesco: any;  edadConductor: any;  daSegment: any = "location"; firstInterval: any; imageHeight: any; atencionId: number | undefined; licenciaTipos: any = [];
  elTipoLicenciaId: any; elTipoGenero: any;  inicialGenero: any;  fechaNacimiento:any;  mydate: any;  laLatitud: any;  laLongitud: any;  licenciaTipo: any;
  formateada: any;  formateadaVigencia:any;  formateadaVigenciaPicker: string | null = null;  conexion: ConnectionStatus | undefined;  esMarca: boolean = false;  openModal: boolean = false;  conectividad: boolean | undefined;
  isEditSig: boolean = false;  idAtencion: any;  isLoading: boolean = false;  isTablet: boolean = false;  isComplete: boolean = false;  isCompleteAcuerdo: boolean = false;
  isSignature: boolean = false;  plataforma: any;  dispositivo: any;  firmaPrecargada: any;  nombreCliente: any;  elTipoSolicitante: any;  idTablaAjustador: any;
  laFechaSiniestro: any;  formateadaSiniestro: any;  formateadaNacimiento: any;  taller: any;  tallerId: any;  tallerOtro: any = '';  tallerOtroDireccion: any = '';

  // Variables de control de interfaz
  showPersona = false; showPersonaLesion = false;  menu:any = [false, false, false, false, false, false, false, false, false, false];
  guardar = true;  editar = false;  indexPersona: any;  showPropiedad = false;  indexPropiedad: any; ancho = window.innerWidth;  laLocalidad: any;  miLocalidad: any;
  miPais: any;  miPaisNombre: any;  miPaisLocalidad: any;  miPaisLocalidadSub: any;  miPaisBandera: any;  paisId: number | undefined;  datoIndex: number = 0;  paisIdentidad: any;
  nombreDelConductor: any;  generoConductor: any;  audienciaId: any;  tipoVehiculo: any;  tipoDeVehiculo: any;  vigencia: boolean = false; identidadAsegurado:any;clientCompleteArray:any=[]
  moneda: any;  expediente: any;  miMoneda: string | undefined; isFormSaved:boolean=false; indexUpdate:number | undefined; isVence:boolean=false;
  vigenciaErrorMessage = 'La fecha de vencimiento es obligatoria. Selecciona una fecha válida desde el calendario (hoy o posterior).'; uPoli:any; datosAtencion:any=[];
  edad: number | undefined; esCacheCliente:boolean=false;  nombreAtribuye: string | undefined; esMenor:boolean=false; elTipoDeConductor:any; elTipoDeParentesco:any;
  elTipoDeLicencia: any;  daType: any;  conductorEsAfiliado: boolean = false;
  nombreConductor: any;  daTipoConductor: any;  daNombreConductor: any;  daIdentidadConductor: any;  identidad: any; daTelefonoFijoConductor:any;
  tel: any;  daCelularConductor: any;  cel: any;  horaSiniestro: any;  TelefonoFijoConductor: any;  CelularConductor: string | null;
  elResponsableTipo: number;  laExpediente: any = [];  clienteLatitud: any;  clienteLongitud: any; DatosDeAtencion:any = [];
  segmentoTitulo: string = 'Formulario del cliente'; clientFormOpen: boolean = false;
  readonly birthDateMin = '1900-01-01';
  readonly birthDateMax = new Date().toISOString().split('T')[0];
  readonly licenseExpirationMin = new Date().toISOString().split('T')[0];
  readonly licenseExpirationMax = `${new Date().getFullYear() + 20}-12-31`;
  driverTypeSelectOptions = {
    cssClass: 'form-choice-alert',
    header: 'Tipo de conductor',
    subHeader: 'Selecciona una opción'
  };
  relationshipSelectOptions = {
    cssClass: 'form-choice-alert',
    header: 'Tipo de parentesco',
    subHeader: 'Selecciona una opción'
  };
  licenceTypeSelectOptions = {
    cssClass: 'form-choice-alert',
    header: 'Tipo de licencia',
    subHeader: 'Selecciona una opción'
  };
  get coordinateAlertState(): 'ok' | 'warning' | 'danger' {
    const corrected = this.getCorrectedCoordinatesForAttention();

    if (corrected) {
      return 'ok';
    }

    const rawLatitud = this.getCabinCoordinateValue('LatitudCliente');
    const rawLongitud = this.getCabinCoordinateValue('LongitudCliente');
    const hasLatitud = this.hasCoordinateText(rawLatitud);
    const hasLongitud = this.hasCoordinateText(rawLongitud);

    if (!hasLatitud && !hasLongitud) {
      return 'danger';
    }

    const latitud = normalizeCoordinate(rawLatitud);
    const longitud = normalizeCoordinate(rawLongitud);

    if (!latitud || !longitud || !this.isLikelyHondurasCoordinate(latitud, longitud)) {
      return 'warning';
    }

    return 'ok';
  }

  get coordinateAlertTitle(): string {
    if (this.getCorrectedCoordinatesForAttention()) {
      return 'Ubicación corregida por ajustador';
    }

    return this.coordinateAlertState === 'danger'
      ? 'Coordenadas no disponibles'
      : 'Coordenadas por revisar';
  }

  get coordinateAlertMessage(): string {
    if (this.getCorrectedCoordinatesForAttention()) {
      return 'Se usará la ubicación capturada manualmente en el mapa para esta atención.';
    }

    return this.coordinateAlertState === 'danger'
      ? 'Cabina no envió latitud ni longitud para esta atención. Captura el punto del siniestro en el mapa antes de enviar.'
      : 'Cabina envió coordenadas incompletas, inválidas o fuera del rango esperado para Honduras. Revisa la ubicación antes de continuar.';
  }

  get coordinateChipStyles(): { background: string; border: string; color: string } {
    if (this.getCorrectedCoordinatesForAttention()) {
      return { background: '#effaf4', border: '#9bd7b2', color: '#137343' };
    }

    if (this.coordinateAlertState === 'danger') {
      return { background: '#fff0f0', border: '#f1a5a5', color: '#aa1f1f' };
    }

    if (this.coordinateAlertState === 'warning') {
      return { background: '#fff7df', border: '#f2c96d', color: '#87600e' };
    }

    return { background: '#effaf4', border: '#9bd7b2', color: '#137343' };
  }

  get coordinateActionLabel(): string {
    return this.coordinateAlertState === 'danger' ? 'Capturar ubicación' : 'Ajustar ubicación';
  }

  get coordinateActionIcon(): string {
    return this.coordinateAlertState === 'danger' ? 'pin-outline' : 'map-outline';
  }

  get coordinateCorrectionNoteText(): string {
    return this.hasManualCoordinateCorrection
      ? 'Ubicación corregida manualmente por el ajustador.'
      : 'Si considera que debe mejorar la precisión de la ubicación del lugar del siniestro, puede corregirla manualmente.';
  }

  get displayedLatitud(): string {
    return this.getDisplayCoordinates().Latitud || 'Pendiente';
  }

  get displayedLongitud(): string {
    return this.getDisplayCoordinates().Longitud || 'Pendiente';
  }

  get hasManualCoordinateCorrection(): boolean {
    return !!this.getCorrectedCoordinatesForAttention();
  }

  private getDisplayCoordinates(): { Latitud: string; Longitud: string } {
    const corrected = this.getCorrectedCoordinatesForAttention();

    if (corrected) {
      return corrected;
    }

    return {
      Latitud: normalizeCoordinate(this.getCabinCoordinateValue('LatitudCliente')),
      Longitud: normalizeCoordinate(this.getCabinCoordinateValue('LongitudCliente'))
    };
  }

  private getCorrectedCoordinatesForAttention(): { Latitud: string; Longitud: string } | null {
    const attentionId = this.idAtencion || localStorage.getItem('idAtencion');

    if (!attentionId) {
      return null;
    }

    if (localStorage.getItem('coords-correccion-confirmada-' + attentionId) !== 'true') {
      return null;
    }

    const latitud = normalizeCoordinate(localStorage.getItem('coords-latitud-' + attentionId));
    const longitud = normalizeCoordinate(localStorage.getItem('coords-longitud-' + attentionId));

    return latitud && longitud ? { Latitud: latitud, Longitud: longitud } : null;
  }

  private applyCorrectedCoordinatesFromNavigation(latitud: any, longitud: any): void {
    const normalizedLatitud = normalizeCoordinate(latitud);
    const normalizedLongitud = normalizeCoordinate(longitud);

    if (!normalizedLatitud || !normalizedLongitud) {
      return;
    }

    const attentionId = this.idAtencion || localStorage.getItem('idAtencion');
    this.laLatitud = normalizedLatitud;
    this.laLongitud = normalizedLongitud;
    this.clienteLatitud = normalizedLatitud;
    this.clienteLongitud = normalizedLongitud;
    this.cliente.Latitud = normalizedLatitud;
    this.cliente.Longitud = normalizedLongitud;
    this.dataProcess['Latitud'] = normalizedLatitud;
    this.dataProcess['Longitud'] = normalizedLongitud;
    localStorage.setItem('dataProcess-Latitud', normalizedLatitud);
    localStorage.setItem('dataProcess-Longitud', normalizedLongitud);
    localStorage.setItem('clienteLatitud', normalizedLatitud);
    localStorage.setItem('clienteLongitud', normalizedLongitud);

    if (attentionId) {
      localStorage.setItem('coords-latitud-' + attentionId, normalizedLatitud);
      localStorage.setItem('coords-longitud-' + attentionId, normalizedLongitud);
      localStorage.setItem('coords-corregidas-' + attentionId, 'true');
      localStorage.setItem('coords-correccion-confirmada-' + attentionId, 'true');
      localStorage.setItem('coords-observacion-' + attentionId, 'Ubicacion del siniestro corregida manualmente por el ajustador');
    }
  }

  private getCabinCoordinateValue(field: 'LatitudCliente' | 'LongitudCliente'): any {
    if (field === 'LatitudCliente') {
      return this.clienteLatitud ?? this.laExpediente?.[0]?.LatitudCliente ?? this.elExpediente?.LatitudCliente;
    }

    return this.clienteLongitud ?? this.laExpediente?.[0]?.LongitudCliente ?? this.elExpediente?.LongitudCliente;
  }

  private hasCoordinateText(value: any): boolean {
    const text = (value ?? '').toString().trim().toLowerCase();
    return !!text && !['null', 'undefined', 'string', 'n/a', 'na', 'nd', 'n.d.', 's/d', 'sin dato'].includes(text);
  }

  private isLikelyHondurasCoordinate(latitud: string, longitud: string): boolean {
    const latitudNumerica = Number(latitud);
    const longitudNumerica = Number(longitud);

    return latitudNumerica >= 12
      && latitudNumerica <= 18
      && longitudNumerica >= -90.5
      && longitudNumerica <= -83;
  }

  public progress = 0;  nullsIndex: any = []; textoInfo = 'Validando ... Cuando todos los datos estén completos, se habilitará el botón de guardar.';
  validacionCompleta: boolean = false;
  identidadDelCliente: any;  progInterval: any;  indexFront: any; firmaIcono:any = editarFirmaIcono;
  esAudiencia: boolean | undefined;
  chassisValidation: InterAutoChassisValidationState | null = null;
  interAutoManualChasisEntryActive = false;
  // INICIALIZACION
  constructor(private router: Router,    private route: ActivatedRoute,    private loading: LoadingController,    private alert: AlertController,
    private api: ApiService,    private toast: ToastController,    private location: Location,    private platform: Platform,    private so: ScreenOrientation,
    private geo: NativeGeocoder,    private toaster: ToastService,    private formateador:FormatosService, private countryService:CountrydataService,
    private menuController: MenuController, private interAutoVehicleCache: InterAutoVehicleCacheService) {

    let datAtencion:any = localStorage.getItem('datosDeAtencion');
    this.DatosDeAtencion = JSON.parse(datAtencion);
    console.log('datAtencion'); console.dir(this.DatosDeAtencion);
    this.identidadDelCliente = this.DatosDeAtencion[6].value;
    //self.alert(this.identidadDelCliente)
  
    let exped:any = localStorage.getItem('elExpediente'); let numPol:any;
    console.log('Expediente en cliente : '+exped);
    this.laExpediente = JSON.parse(exped);
    console.log('El nombre del cliente : '+this.laExpediente[0].Cliente);
    numPol = this.laExpediente[0].PolizaExterna.split('-')[1];
    localStorage.setItem('nNumpol', numPol);
    localStorage.setItem('nNumCer', this.laExpediente[0].Certificado);

    

    this.clienteLatitud = this.laExpediente[0].LatitudCliente;
    this.clienteLongitud = this.laExpediente[0].LongitudCliente;

    //self.alert(this.clienteLongitud);

            let nombreC = localStorage.getItem('dataProcess-NombreConductor');
            let tipoCondEarly:any = localStorage.getItem('dataProcess-RefTipoConductorId');
            let esPropietario = !tipoCondEarly || tipoCondEarly === 'undefined' || parseInt(tipoCondEarly) === 1;

        //self.alert(nombreC == '')
        if (nombreC == 'undefined' || nombreC == '') {
          if (!esPropietario) {
          //self.alert('Puej ji')

          setTimeout(() => {
            this.nombreConductor = ''; this.daNombreConductor = '';
            this.daIdentidadConductor = '';
            localStorage.setItem('dataProcess-NombreConductor', '');
            this.setNombreConductor('');
          }, 900);
          }
          
        }else{
          this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
          this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        }
        
        this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
        if (this.identidad == 'undefined' || this.identidad == '') {
          this.daIdentidadConductor = '';
        } else {
          this.restoreConductorIdentityFromCache();
        }
        let responsableId:any;
        responsableId = localStorage.getItem('dataProcess-TerceroResponsable');
        this.tel = localStorage.getItem('dataProcess-TelefonoAsegurado');
        this.cel = localStorage.getItem('dataProcess-CelularAsegurado');
        this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
        this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');

        let fechaN = localStorage.getItem('dataProcess-FechaNacimientoConductor');
        let parentesco = localStorage.getItem('dataProcess-Parentesco');
        let licenciaTipo = localStorage.getItem('dataProcess-TipoLicencia');
        let licencia = localStorage.getItem('dataProcess-Licencia');
        let alcoholemia = localStorage.getItem('dataProcess-PruebaAlcoholemia');
        let direccionC = localStorage.getItem('dataProcess-DireccionConductor');
        let esTerceroResponsable = localStorage.getItem('dataProcess-TerceroResponsable');
        this.elResponsableTipo = parseInt(responsableId);
        let nombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
        let autoridad = localStorage.getItem('dataProcess-AutoridadInvolucrada');
        let ubicacion = localStorage.getItem('dataProcess-DondeSeEncuentraVehiculo');
        let audiencia = localStorage.getItem('dataProcess-AgendarAudiencia');
        let vehiculodet = localStorage.getItem('dataProcess-VehiculoDetenido');
        let conductorDet = localStorage.getItem('dataProcess-ConductorDetenido');
        let vehiculoVolcado = localStorage.getItem('dataProcess-VehiculoVolcado');
        let ubicacionVehiculoDet = localStorage.getItem('dataProcess-UbicacionVehiculoDetenido');
        let tercerosHeridos = localStorage.getItem('dataProcess-TercerosHeridos');
        let tercerosMuertos = localStorage.getItem('dataProcess-TercerosMuertos');
        let descripcionTercerosHeridos = localStorage.getItem('dataProcess-DescripcionTercerosHeridos');
        let descripcionTercerosMuertos = localStorage.getItem('dataProcess-DescripcionTercerosMuertos');
        let descripcionDanio = localStorage.getItem('dataProcess-DescripcionDanio');
        let descripcion = localStorage.getItem('dataProcess-Descripcion');
        let descripcionAudiencia = localStorage.getItem('dataProcess-DescripcionAudiencia');
        let fechaVigencia = localStorage.getItem('dataProcess-Vigencia');

        this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let navParams = this.router.getCurrentNavigation()?.extras.state;
        if (navParams?.coordinateCorrectionConfirmed === true) {
          this.applyCorrectedCoordinatesFromNavigation(navParams?.data?.[1]?.latitud, navParams?.data?.[2]?.longitud);
        }

        if (!this.getCorrectedCoordinatesForAttention()) {
          this.cliente.Latitud = this.laExpediente[0].LatitudCliente;
          this.cliente.Longitud = this.laExpediente[0].LongitudCliente;
          this.clienteLatitud = this.laExpediente[0].LatitudCliente;
          this.clienteLongitud = this.laExpediente[0].LongitudCliente;
          localStorage.setItem('dataProcess-Latitud', this.cliente.Latitud);
          localStorage.setItem('dataProcess-Longitud', this.cliente.Longitud);
        }

        if (this.laExpediente) {
          //self.alert('Hay expediente '+this.cliente.Latitud)
          localStorage.setItem('dataProcess-Nombre', this.laExpediente[0].Cliente);

          setTimeout(() => {
            console.log('Es el afiliado? '+ this.conductorEsAfiliado);
            console.log('El teléfono : '+this.tel)
            if (this.tel) {
              this.cliente.TelefonFijo = this.tel;
              //this.elExpediente.TelefonoFijoConductor = this.tel;
            }


            if (tipoConductor) {
              this.seTipoConductor(tipoConductor, 2);
            }else{
              this.conductorEsAfiliado = true;
              this.elExpediente.ConducidoPor = 1;
              this.syncConductorFromPropietario();
            }

            
           // self.alert( 'tipoConductor '+tipoConductor+(this.TelefonoFijoConductor))

            if (this.TelefonoFijoConductor) {
              this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
              //this.seTelefonoConductor(this.daTelefonoFijoConductor);
              this.laExpediente[0].TelefonoConductor = this.TelefonoFijoConductor;
            }
  
            if (this.cel) {
              this.cliente.Celular = this.cel;
              this.setCelularConductor(this.cel);
              this.laExpediente[0].CelularConductor = this.TelefonoFijoConductor;
              
            }
            
            if (this.CelularConductor) {
              this.daCelularConductor = parseInt(this.CelularConductor);
            }

            
  
            if (parentesco) {
              this.setElTipoParentesco(parentesco);
            }
  
            if(licenciaTipo){
              this.seTipoLicencia(licenciaTipo);
            }

            if (fechaVigencia) {
              console.log('Hay una fecha: '+fechaVigencia)
              if (this.applyVigenciaFromRaw(fechaVigencia)) {
                this.isVence = true;
              } else {
                this.clearVigenciaValue();
              }
            } else {
              this.clearVigenciaValue();
            }

            if (usoPoliza) {
              this.elExpediente.UtilizoSerivicioAsistencia = usoPoliza;
              console.log('usoPoliza', usoPoliza)
              this.uPoli = usoPoliza;
              this.setUtilizacionAsistencia(usoPoliza);
            }else{
              this.elExpediente.UtilizoSerivicioAsistencia = 1;
              this.setUtilizacionAsistencia(1);
            }

            if (porqueNo) {
              this.setPorqueNoUso(porqueNo);
            }

            if (alcoholemia) {
              this.setPruebaAlcohol(alcoholemia);
            }else{
              this.elExpediente.PruebaAlcoholemia = 1;
              this.setPruebaAlcohol(1);
            }

            console.log('Aca voy a setear el nombre del conductor');
            //self.alert('Aca voy a setear el nombre del  '+this.nombreConductor);

            if (this.nombreConductor) {
              this.setNombreConductor(this.nombreConductor);
            }

            
            if (esTerceroResponsable) {
              $('#responsableRadioGroup').val(esTerceroResponsable).change();
            }else{
              $('#responsableRadioGroup').val('3').change();
              this.setResponsable(3);
            }

            if (audiencia) {
              $('#audiRadioGroup').val(audiencia).change();
              this.setAudiencia(audiencia);
            }

            if (vehiculodet) {
              $('#detenidoVRadioGroup').val(vehiculodet).change();
            }else{
              $('#detenidoVRadioGroup').val('2').change();
              this.setDetenido(2);
            }

            if (conductorDet) {
              $('#detenidoCRadioGroup').val(conductorDet).change();
            }else{
              $('#detenidoCRadioGroup').val('2').change();
              this.setDetenidoElConductor(2);
            }

            if (vehiculoVolcado) {
              $('#volcoRadioGroup').val(vehiculoVolcado).change();
            }else{
              $('#volcoRadioGroup').val('2').change();
              this.setVolcado(2);
            }

            if (tercerosHeridos) {
              $('#tHeridosRadioGroup').val(tercerosHeridos).change();
            }else{
              $('#tHeridosRadioGroup').val('2').change();
              this.setTercerosHeridos(2);
            }

            if (tercerosMuertos) {
              $('#tMuertosRadioGroup').val(tercerosMuertos).change();
            }else{
              $('#tMuertosRadioGroup').val('2').change();
              this.setTercerosMuertos(2);
            }

            if (nombreAtribuyeAccidente) {
              this.elExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.laExpediente[0].NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.nombreAtribuye = nombreAtribuyeAccidente;
              console.log('Ajui juiiiiii....'+this.elExpediente.NombreAtribuyeAccidente)
              this.setNombreAtribuye(nombreAtribuyeAccidente);
            }

            if (unidad) {
              this.setUnidad(unidad);
            }

          }, 3000);

              console.log('Este es el conductor que enconré : '+this.nombreConductor);

              let use:any = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
              let uso = parseInt(use);
              //self.alert(uso)

              if (this.nombreConductor) {

                if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
                  this.elExpediente.NombreConductor = this.nombreConductor;
                }
                
                

                setTimeout(() => {
                  console.log('Ahora seteo el nombre del conductor')
                  this.setNombreConductor(this.nombreConductor);  
                }, 3000);
                
              }else{
                if (this.conductorEsAfiliado || !tipoConductor || parseInt(tipoConductor) === 1) {
                  this.syncConductorFromPropietario();
                } else if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
                  this.elExpediente.NombreConductor = this.elExpediente.Cliente;
                }
              }

              if (this.identidad) {
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidad);
              }else{
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidadAsegurado);
              }

              if (poliza) {
                localStorage.setItem('dataProcess-Poliza', poliza);
              }else{
                localStorage.setItem('dataProcess-Poliza', this.elExpediente.PolizaExterna);
              }

              if (dCorrespondencia) {
                this.cliente.DireccionEnvioCorrespondencia = dCorrespondencia;
              }

              if (email) {
                this.cliente.CorreoElectronico = email;
                this.setCorreoConductor(email);
              }

              if (blindado) {
                this.setBlindado(blindado);
              }else{
                this.setBlindado(2);
              }

              if (unidad) {
                this.elExpediente.NoUnidad = unidad;
                this.laExpediente[0].NoUnidad = unidad;
              }
              
              if (fechaN) {
                this.formateadaNacimiento = fechaN;
                this.setFechaNacimiento(fechaN)
              }else{
                if (this.laExpediente[0].FechaNacimientoConductor != null) {
                  //this.dataProcess.Edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  //this.edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  this.formateadaNacimiento = (this.laExpediente[0].FechaNacimientoConductor).toString().split('T')[0]; 
                }else{
                  this.formateadaNacimiento = new Date().toISOString().split('T')[0];
                }
              }

              if (licencia) {
                this.elExpediente.LicenciaNo = licencia;
                this.laExpediente[0].LicenciaNo = licencia;
                this.setLicencia(licencia);
              }

              
              
              
              if (autoridad) {
                this.elExpediente.AutoridadInvolucrada = autoridad;
                this.laExpediente[0].AutoridadInvolucrada = autoridad;
                this.setEntidadInvolucrada(autoridad);
              }

              if (ubicacion) {
                this.elExpediente.UbicacionVehiculoAsegurado = ubicacion;
                this.laExpediente[0].UbicacionVehiculoAsegurado = ubicacion;
                this.setUbicacionVehiculoDetenido(ubicacion);
              }

              if (ubicacionVehiculoDet) {
                this.elExpediente.UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.laExpediente[0].UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.setUbicacionVehiculoDetenido(ubicacionVehiculoDet);
              }

              if (descripcionTercerosHeridos) {
                this.elExpediente.DescripcionTercerosHeridos = descripcionTercerosHeridos;
                if (this.laExpediente?.[0]) {
                  this.laExpediente[0].DescripcionTercerosHeridos = descripcionTercerosHeridos;
                }
                this.dataProcess['DescripcionTercerosHeridos'] = descripcionTercerosHeridos;
              } 
              if (descripcionTercerosMuertos) {
                this.elExpediente.DescripcionTercerosMuertos = descripcionTercerosMuertos;
                if (this.laExpediente?.[0]) {
                  this.laExpediente[0].DescripcionTercerosMuertos = descripcionTercerosMuertos;
                }
                this.dataProcess['DescripcionTercerosMuertos'] = descripcionTercerosMuertos;
              } 
              if (descripcionDanio) {
                this.elExpediente.DescripcionDanioVehiculo = descripcionDanio;
                this.laExpediente[0].DescripcionDanioVehiculo = descripcionDanio;
                this.setDescripcionDanio(descripcionDanio);
              } 
              if (descripcion) {
                this.elExpediente.DescripcionAccidente = descripcion;
                this.laExpediente[0].DescripcionAccidente = descripcion;
                this.setDescripcionAccidente(descripcion);
              } 
              if (descripcionAudiencia) {
                this.elExpediente.DescripcionAudiencia = descripcionAudiencia;
                this.laExpediente[0].DescripcionAudiencia = descripcionAudiencia;
                this.setDescripcionAudiencia(descripcionAudiencia);
              } 

              if (direccionC) {
                this.elExpediente.DireccionConductor = direccionC;
                this.laExpediente[0].DireccionConductor = direccionC;
                this.setDireccionConductor(direccionC);
              }
              
            }
            

            let fechaExpediente = this.laExpediente[0].FechaRegistro;
            
            console.log('fechaExpediente :'+fechaExpediente)
            this.formateadaSiniestro = fechaExpediente.split('T')[0];//formateador.formatearFechaSiniestro(fechaExpediente);
            let laHora = fechaExpediente.split('T')[1];
            this.horaSiniestro = laHora.split('.')[0];
            localStorage.setItem('FechaRegistro', this.elExpediente.FechaRegistro);

            //Inicializacion del arreglo de datos de envio
            console.log('Ya estamos aqui')

            //console.log('El expediente lenght '+ItemsExpediente.length)
            for (let index = 0; index < ItemsExpediente.length; index++) {
              const element = ItemsExpediente[index];
              const itemNombre = element.nombre;
              const valorExpediente = this.elExpediente[itemNombre];
              if (valorExpediente == null || valorExpediente == undefined) {
                this.nulosExpediente.push({nombre: itemNombre, valor: valorExpediente})
              }
              if (index == (ItemsExpediente.length-1)) {
                //console.dir(this.nulosExpediente)
              }
            }

            //self.alert('llenado de datos '+this.laExpediente[0].PolizaExterna)
            this.dataProcess['RefAtencionId'] = this.laExpediente[0].Id;
            this.dataProcess['RefProveedorAgenteId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefProveedorAgenteId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefProveedorAgenteAbogadoId'] = this.laExpediente[0].RefProveedorAgenteAbogadoId;
            this.dataProcess['Poliza'] = this.laExpediente[0].PolizaExterna;
            this.dataProcess['Cliente'] = this.laExpediente[0].Cliente;
            this.dataProcess['IdentidaConductor'] = this.laExpediente[0].IdentidaConductor;
            this.dataProcess['Nombre'] = this.laExpediente[0].Cliente;
            this.dataProcess['MarcaVehiculo'] = this.laExpediente[0].Marca;
            this.dataProcess['ModeloVehiculo'] = this.laExpediente[0].Modelo;
            this.dataProcess['AnioVehiculo'] = this.laExpediente[0].Year;
            this.dataProcess['PlacaVehiculo'] = this.laExpediente[0].NumeroPlaca;
            this.dataProcess['ChasisVehiculo'] = this.laExpediente[0].Chasis;
            this.dataProcess['ColorVehiculo'] = this.laExpediente[0].Color;
            this.dataProcess['DescripcionVehiculo'] = "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca;
            localStorage.setItem('dataProcess-DescripcionVehiculo', "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca)
            this.dataProcess['FechaHora'] = this.laExpediente[0].FechaRegistro;
            this.dataProcess['Lugar'] = this.laExpediente[0].Direccion;
            localStorage.setItem('dataProcess-Lugar', this.laExpediente[0].Direccion);
            this.dataProcess['RefUsuarioId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefUsuarioId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefPaisId'] = this.laExpediente[0].IdPais;
            localStorage.setItem('dataProcess-RefPaisId', this.laExpediente[0].IdPais);
            this.dataProcess['RefCiudadId'] = this.laExpediente[0].IdCiudad;
            localStorage.setItem('dataProcess-RefCiudadId', this.laExpediente[0].IdCiudad);
            this.dataProcess['RefDeptoId'] = this.laExpediente[0].RefDepartamentoId;
            this.dataProcess['Motor'] = this.laExpediente[0].Motor;
            this.dataProcess['ReclamoAsegurado'] = this.laExpediente[0].DescripcionDanioVehiculo;
            localStorage.setItem('dataProcess-ReclamoAsegurado', this.laExpediente[0].DescripcionDanioVehiculo);
            localStorage.setItem('dataProcess-MarcaVehiculo', this.laExpediente[0].Marca);
            localStorage.setItem('dataProcess-ModeloVehiculo', this.laExpediente[0].Modelo);
            localStorage.setItem('dataProcess-AnioVehiculo', this.laExpediente[0].Year);
            localStorage.setItem('dataProcess-PlacaVehiculo', this.laExpediente[0].NumeroPlaca);
            localStorage.setItem('dataProcess-ChasisVehiculo', this.laExpediente[0].Chasis);
            localStorage.setItem('dataProcess-ColorVehiculo', this.laExpediente[0].Color);
            //localStorage.setItem('dataProcess-Motor', this.laExpediente[0].Motor);
            //this.dataProcess['DireccionEnvioCorrespondencia'] = this.elExpediente.Direccion;

            for (let index = 0; index < this.nulosExpediente.length; index++) {
              const element = this.nulosExpediente[index];
              console.log('viene nulo '+element.nombre);
              for (let index = 0; index < Predeterminados.length; index++) {
                const elementPredet = Predeterminados[index].nombre;
                const elementPredetV = Predeterminados[index].valor;
                if(element.nombre.indexOf(elementPredet) > -1){
                  this.dataProcess[element.nombre] = elementPredetV;
                }
              }
            }
          }
        });

    console.dir(exped);
    console.dir(JSON.parse(exped));

    this.obtenerTipoConductor();
    //this.loadParentescos();
    //this.getTalleres();
    
    this.elExpediente = JSON.parse(exped);

    //self.alert('Bienvenido a la página de cliente del expediente '+this.elExpediente.length);
    console.log('Bienvenido a la página de cliente del expediente '+this.elExpediente.length);

    let client:any = localStorage.getItem('elExpediente');
    this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
    this.cliente = JSON.parse(client);
    this.restoreConductorIdentityFromCache();
    this.restoreRelatedInfoDescriptionsFromCache();
    this.firmaPrecargada = emptySignatureWhite;
    
    console.log('El arreglo de segmentos');
    console.dir(segments)
    
    let poliza = localStorage.getItem('dataProcess-Poliza');
    let usoPoliza = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
    let dCorrespondencia = localStorage.getItem('dataProcess-DireccionEnvioCorrespondencia');
    

    let porqueNo = localStorage.getItem('dataProcess-PorqueNoUsoServicioAsistencia');
    
    let email = localStorage.getItem('dataProcess-CorreoElectronico');
    let fechaH = localStorage.getItem('dataProcess-FechaHora');
    let blindado = localStorage.getItem('dataProcess-Blindado');
    let unidad  = localStorage.getItem('dataProcess-NumeroUnidad');

    let tipoConductor:any  = localStorage.getItem('dataProcess-RefTipoConductorId');
    this.daTipoConductor = parseInt(tipoConductor);

    
   

    
    if (this.daTipoConductor) {
      
      let tipos:any = localStorage.getItem('tiposDeConductor');
      this.tipoConductor = JSON.parse(tipos);
      
      //localStorage.setItem('tiposDeConductor', JSON.stringify(res));

      this.seTipoConductor(this.daTipoConductor, 3);
      if (this.daTipoConductor == 1) {
        this.syncConductorFromPropietario();
      }else{
        let nombreC = localStorage.getItem('dataProcess-NombreConductor');

        //self.alert(nombreC == '')
        if (nombreC == 'undefined' || nombreC == '') {
          //self.alert('Puej ji')

          setTimeout(() => {
            this.nombreConductor = ''; this.daNombreConductor = '';
            this.daIdentidadConductor = '';
            localStorage.setItem('dataProcess-NombreConductor', '');
            this.setNombreConductor('');
          }, 900);
          
        }else{
          this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
          this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        }
        
        this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
        if (this.identidad == 'undefined' || this.identidad == '') {
          this.daIdentidadConductor = '';
        } else {
          this.restoreConductorIdentityFromCache();
        }
        
        this.tel = localStorage.getItem('dataProcess-TelefonoAsegurado');
        this.cel = localStorage.getItem('dataProcess-CelularAsegurado');
        this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
        this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');

        let fechaN = localStorage.getItem('dataProcess-FechaNacimientoConductor');
        let parentesco = localStorage.getItem('dataProcess-Parentesco');
        let licenciaTipo = localStorage.getItem('dataProcess-TipoLicencia');
        let licencia = localStorage.getItem('dataProcess-Licencia');
        let alcoholemia = localStorage.getItem('dataProcess-PruebaAlcoholemia');
        let direccionC = localStorage.getItem('dataProcess-DireccionConductor');
        let esTerceroResponsable = localStorage.getItem('dataProcess-TerceroResponsable');

        let tipoResp:any = localStorage.getItem('dataProcess-TerceroResponsable');
        this.elResponsableTipo = parseInt(tipoResp);
        let nombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
        let autoridad = localStorage.getItem('dataProcess-AutoridadInvolucrada');
        let ubicacion = localStorage.getItem('dataProcess-DondeSeEncuentraVehiculo');
        let audiencia = localStorage.getItem('dataProcess-AgendarAudiencia');
        let vehiculodet = localStorage.getItem('dataProcess-VehiculoDetenido');
        let conductorDet = localStorage.getItem('dataProcess-ConductorDetenido');
        let vehiculoVolcado = localStorage.getItem('dataProcess-VehiculoVolcado');
        let ubicacionVehiculoDet = localStorage.getItem('dataProcess-UbicacionVehiculoDetenido');
        let tercerosHeridos = localStorage.getItem('dataProcess-TercerosHeridos');
        let tercerosMuertos = localStorage.getItem('dataProcess-TercerosMuertos');
        let descripcionTercerosHeridos = localStorage.getItem('dataProcess-DescripcionTercerosHeridos');
        let descripcionTercerosMuertos = localStorage.getItem('dataProcess-DescripcionTercerosMuertos');
        let descripcionDanio = localStorage.getItem('dataProcess-DescripcionDanio');
        let descripcion = localStorage.getItem('dataProcess-Descripcion');
        let descripcionAudiencia = localStorage.getItem('dataProcess-DescripcionAudiencia');
        let fechaVigencia = localStorage.getItem('dataProcess-Vigencia');

        this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let navParams = this.router.getCurrentNavigation()?.extras.state;
        if (navParams?.coordinateCorrectionConfirmed === true) {
          this.applyCorrectedCoordinatesFromNavigation(navParams?.data?.[1]?.latitud, navParams?.data?.[2]?.longitud);
        }

        if (!this.getCorrectedCoordinatesForAttention()) {
          this.cliente.Latitud = this.elExpediente.LatitudCliente;
          this.cliente.Longitud = this.elExpediente.LongitudCliente;
          this.clienteLatitud = this.laExpediente[0].LatitudCliente;
          this.clienteLongitud = this.laExpediente[0].LongitudCliente;
          localStorage.setItem('dataProcess-Latitud', this.cliente.Latitud);
          localStorage.setItem('dataProcess-Longitud', this.cliente.Longitud);
        }

        if (this.elExpediente) {
          localStorage.setItem('dataProcess-Nombre', this.elExpediente.Cliente);

          setTimeout(() => {
            console.log('Es el afiliado? '+ this.conductorEsAfiliado);
            console.log('El teléfono : '+this.tel)
            if (this.tel) {
              this.cliente.TelefonFijo = this.tel;
              //this.elExpediente.TelefonoFijoConductor = this.tel;
            }

            //self.alert((this.TelefonoFijoConductor))
            if (this.TelefonoFijoConductor) {
              this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
              //this.seTelefonoConductor(this.daTelefonoFijoConductor);
              this.laExpediente[0].TelefonoConductor = this.TelefonoFijoConductor;
            }
  
            if (this.cel) {
              this.cliente.Celular = this.cel;
              this.setCelularConductor(this.cel);
              this.laExpediente[0].CelularConductor = this.TelefonoFijoConductor;
              
            }
            
            if (this.CelularConductor) {
              this.daCelularConductor = parseInt(this.CelularConductor);
            }

            if (tipoConductor) {
              this.seTipoConductor(tipoConductor, 4);
            }else{
              this.conductorEsAfiliado = true;
              this.elExpediente.ConducidoPor = 1;
              this.syncConductorFromPropietario();
            }
  
            if (parentesco) {
              this.setElTipoParentesco(parentesco);
            }
  
            if(licenciaTipo){
              this.seTipoLicencia(licenciaTipo);
            }

            if (fechaVigencia) {
              console.log('Hay una fecha: '+fechaVigencia)
              if (this.applyVigenciaFromRaw(fechaVigencia)) {
                this.isVence = true;
              } else {
                this.clearVigenciaValue();
              }
            } else {
              this.clearVigenciaValue();
            }

            if (usoPoliza) {
              this.elExpediente.UtilizoSerivicioAsistencia = usoPoliza;
              console.log('usoPoliza', usoPoliza)
              this.uPoli = usoPoliza;
              this.setUtilizacionAsistencia(usoPoliza);
            }else{
              this.elExpediente.UtilizoSerivicioAsistencia = 1;
              this.setUtilizacionAsistencia(1);
            }

            if (porqueNo) {
              this.setPorqueNoUso(porqueNo);
            }

            if (alcoholemia) {
              this.setPruebaAlcohol(alcoholemia);
            }else{
              this.elExpediente.PruebaAlcoholemia = 1;
              this.setPruebaAlcohol(1);
            }

            console.log('Aca voy a setear el nombre del conductor');
            //self.alert('Aca voy a setear el nombre del  '+this.nombreConductor);

            if (this.nombreConductor) {
              this.setNombreConductor(this.nombreConductor);
            }

            
            if (esTerceroResponsable) {
              $('#responsableRadioGroup').val(esTerceroResponsable).change();
            }else{
              $('#responsableRadioGroup').val('3').change();
              this.setResponsable(3);
            }

            if (audiencia) {
              $('#audiRadioGroup').val(audiencia).change();
              this.setAudiencia(audiencia);
            }

            if (vehiculodet) {
              $('#detenidoVRadioGroup').val(vehiculodet).change();
            }else{
              $('#detenidoVRadioGroup').val('2').change();
              this.setDetenido(2);
            }

            if (conductorDet) {
              $('#detenidoCRadioGroup').val(conductorDet).change();
            }else{
              $('#detenidoCRadioGroup').val('2').change();
              this.setDetenidoElConductor(2);
            }

            if (vehiculoVolcado) {
              $('#volcoRadioGroup').val(vehiculoVolcado).change();
            }else{
              $('#volcoRadioGroup').val('2').change();
              this.setVolcado(2);
            }

            if (tercerosHeridos) {
              $('#tHeridosRadioGroup').val(tercerosHeridos).change();
            }else{
              $('#tHeridosRadioGroup').val('2').change();
              this.setTercerosHeridos(2);
            }

            if (tercerosMuertos) {
              $('#tMuertosRadioGroup').val(tercerosMuertos).change();
            }else{
              $('#tMuertosRadioGroup').val('2').change();
              this.setTercerosMuertos(2);
            }

            if (nombreAtribuyeAccidente) {
              this.elExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.laExpediente.NombreAtribuyeAccidente = nombreAtribuyeAccidente;
              this.nombreAtribuye = nombreAtribuyeAccidente;
              console.log('Ajui juiiiiii....'+this.elExpediente.NombreAtribuyeAccidente)
              this.setNombreAtribuye(nombreAtribuyeAccidente);
            }

            if (unidad) {
              this.setUnidad(unidad);
            }

          }, 3000);

          let use:any = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
              let uso = parseInt(use);

              console.log('Este es el conductor que enconré : '+this.nombreConductor)
              if (this.nombreConductor) {
                
                if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
                  this.elExpediente.NombreConductor = this.nombreConductor;
                }

                

                setTimeout(() => {
                  console.log('Ahora seteo el nombre del conductor')
                  this.setNombreConductor(this.nombreConductor);  
                }, 3000);
                
              }else{
                if (this.conductorEsAfiliado || !tipoConductor || parseInt(tipoConductor) === 1) {
                  this.syncConductorFromPropietario();
                } else if (uso == 1) {
                  localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
                this.elExpediente.NombreConductor = this.elExpediente.Cliente;
                }

                
              }

              if (this.identidad) {
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidad);
              }else{
                localStorage.setItem('dataProcess-IdentidaConductor', this.identidadAsegurado);
              }

              if (poliza) {
                localStorage.setItem('dataProcess-Poliza', poliza);
              }else{
                localStorage.setItem('dataProcess-Poliza', this.elExpediente.PolizaExterna);
              }

              if (dCorrespondencia) {
                this.cliente.DireccionEnvioCorrespondencia = dCorrespondencia;
              }

              /*
              setTimeout(() => {
                console.log('Es el afiliado? '+ this.conductorEsAfiliado);
                console.log('El teléfono : '+this.tel)
                if (this.tel) {
                  this.cliente.TelefonFijo = this.tel;
                  //this.elExpediente.TelefonoFijoConductor = this.tel;
                }

                if (this.TelefonoFijoConductor) {
                  this.daTelefonoFijoConductor = parseInt(this.TelefonoFijoConductor);
                }
      
                if (this.cel) {
                  this.cliente.Celular = this.cel;
                }
                
                if (this.CelularConductor) {
                  this.daCelularConductor = parseInt(this.CelularConductor);
                }

              }, 5000);
              */

              if (email) {
                this.cliente.CorreoElectronico = email;
              }

              if (blindado) {
                this.setBlindado(blindado);
              }else{
                this.setBlindado(2);
              }

              if (unidad) {
                this.elExpediente.NoUnidad = unidad;
                this.laExpediente[0].NoUnidad = unidad;
              }
              
              if (fechaN) {
                this.formateadaNacimiento = fechaN;
                this.setFechaNacimiento(fechaN)
              }else{
                if (this.laExpediente[0].FechaNacimientoConductor != null) {
                  //this.dataProcess.Edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  //this.edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
                  this.formateadaNacimiento = (this.laExpediente[0].FechaNacimientoConductor).toString().split('T')[0]; 
                }else{
                  this.formateadaNacimiento = new Date().toISOString().split('T')[0];
                }
              }

              if (licencia) {
                this.elExpediente.LicenciaNo = licencia;
                this.laExpediente[0].LicenciaNo = licencia;
                this.setLicencia(licencia);
              }

              
              
              
              if (autoridad) {
                this.elExpediente.AutoridadInvolucrada = autoridad;
                this.laExpediente[0].AutoridadInvolucrada = autoridad;
                this.setEntidadInvolucrada(autoridad);
              }

              if (ubicacion) {
                this.elExpediente.UbicacionVehiculoAsegurado = ubicacion;
                this.laExpediente[0].UbicacionVehiculoAsegurado = ubicacion;
                this.setUbicacionVehiculoDetenido(ubicacion);
              }

              if (ubicacionVehiculoDet) {
                this.elExpediente.UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.laExpediente[0].UbicacionVehiculoDetenido = ubicacionVehiculoDet;
                this.setUbicacionVehiculoDetenido(ubicacionVehiculoDet);
              }

              if (descripcionTercerosHeridos) {
                this.elExpediente.DescripcionTercerosHeridos = descripcionTercerosHeridos;
                if (this.laExpediente?.[0]) {
                  this.laExpediente[0].DescripcionTercerosHeridos = descripcionTercerosHeridos;
                }
                this.dataProcess['DescripcionTercerosHeridos'] = descripcionTercerosHeridos;
              } 
              if (descripcionTercerosMuertos) {
                this.elExpediente.DescripcionTercerosMuertos = descripcionTercerosMuertos;
                if (this.laExpediente?.[0]) {
                  this.laExpediente[0].DescripcionTercerosMuertos = descripcionTercerosMuertos;
                }
                this.dataProcess['DescripcionTercerosMuertos'] = descripcionTercerosMuertos;
              } 
              if (descripcionDanio) {
                this.elExpediente.DescripcionDanioVehiculo = descripcionDanio;
                this.laExpediente[0].DescripcionDanioVehiculo = descripcionDanio;
                this.setDescripcionDanio(descripcionDanio);
              } 
              if (descripcion) {
                this.elExpediente.DescripcionAccidente = descripcion;
                this.laExpediente[0].DescripcionAccidente = descripcion;
                this.setDescripcionAccidente(descripcion);
              } 
              if (descripcionAudiencia) {
                this.elExpediente.DescripcionAudiencia = descripcionAudiencia;
                this.laExpediente[0].DescripcionAudiencia = descripcionAudiencia;
                this.setDescripcionAudiencia(descripcionAudiencia);
              } 

              if (direccionC) {
                this.elExpediente.DireccionConductor = direccionC;
                this.laExpediente[0].DireccionConductor = direccionC;
                this.setDireccionConductor(direccionC);
              }
              
            }
            

            let fechaExpediente = this.laExpediente[0].FechaRegistro;
            
            console.log('fechaExpediente :'+fechaExpediente)
            this.formateadaSiniestro = fechaExpediente.split('T')[0];//formateador.formatearFechaSiniestro(fechaExpediente);
            let laHora = fechaExpediente.split('T')[1];
            this.horaSiniestro = laHora.split('.')[0];
            localStorage.setItem('FechaRegistro', this.elExpediente.FechaRegistro);

            //Inicializacion del arreglo de datos de envio
            console.log('Ya estamos aqui')

            //console.log('El expediente lenght '+ItemsExpediente.length)
            for (let index = 0; index < ItemsExpediente.length; index++) {
              const element = ItemsExpediente[index];
              const itemNombre = element.nombre;
              const valorExpediente = this.elExpediente[itemNombre];
              if (valorExpediente == null || valorExpediente == undefined) {
                this.nulosExpediente.push({nombre: itemNombre, valor: valorExpediente})
              }
              if (index == (ItemsExpediente.length-1)) {
                //console.dir(this.nulosExpediente)
              }
            }

            //self.alert('llenado de datos '+this.laExpediente[0].PolizaExterna)
            this.dataProcess['RefAtencionId'] = this.laExpediente[0].Id;
            this.dataProcess['RefProveedorAgenteId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefProveedorAgenteId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefProveedorAgenteAbogadoId'] = this.laExpediente[0].RefProveedorAgenteAbogadoId;
            this.dataProcess['Poliza'] = this.laExpediente[0].PolizaExterna;
            this.dataProcess['Cliente'] = this.laExpediente[0].Cliente;
            this.dataProcess['IdentidaConductor'] = this.laExpediente[0].IdentidaConductor;
            this.dataProcess['Nombre'] = this.laExpediente[0].Cliente;
            this.dataProcess['MarcaVehiculo'] = this.laExpediente[0].Marca;
            this.dataProcess['ModeloVehiculo'] = this.laExpediente[0].Modelo;
            this.dataProcess['AnioVehiculo'] = this.laExpediente[0].Year;
            this.dataProcess['PlacaVehiculo'] = this.laExpediente[0].NumeroPlaca;
            this.dataProcess['ChasisVehiculo'] = this.laExpediente[0].Chasis;
            this.dataProcess['ColorVehiculo'] = this.laExpediente[0].Color;
            this.dataProcess['DescripcionVehiculo'] = "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca;
            localStorage.setItem('dataProcess-DescripcionVehiculo', "Vehículo marca " + this.laExpediente[0].Marca + ", modelo " + this.laExpediente[0].Modelo + ", año " + this.laExpediente[0].Year + ", color " + this.laExpediente[0].Color + ", placa " + this.laExpediente[0].NumeroPlaca)
            this.dataProcess['FechaHora'] = this.laExpediente[0].FechaRegistro;
            this.dataProcess['Lugar'] = this.laExpediente[0].Direccion;
            this.dataProcess['RefUsuarioId'] = this.laExpediente[0].RefGestorId;
            localStorage.setItem('dataProcess-RefUsuarioId', this.laExpediente[0].RefGestorId);
            this.dataProcess['RefPaisId'] = this.laExpediente[0].IdPais;
            localStorage.setItem('dataProcess-RefPaisId', this.laExpediente[0].IdPais);
            this.dataProcess['RefCiudadId'] = this.laExpediente[0].IdCiudad;
            localStorage.setItem('dataProcess-RefCiudadId', this.laExpediente[0].IdCiudad);
            this.dataProcess['RefDeptoId'] = this.laExpediente[0].RefDepartamentoId;
            localStorage.setItem('dataProcess-RefDeptoId', this.laExpediente[0].RefDepartamentoId);
            this.dataProcess['Motor'] = this.laExpediente[0].Motor;

            localStorage.setItem('dataProcess-MarcaVehiculo', this.laExpediente[0].Marca);
            localStorage.setItem('dataProcess-ModeloVehiculo', this.laExpediente[0].Modelo);
            localStorage.setItem('dataProcess-AnioVehiculo', this.laExpediente[0].Year);
            localStorage.setItem('dataProcess-PlacaVehiculo', this.laExpediente[0].NumeroPlaca);
            localStorage.setItem('dataProcess-ChasisVehiculo', this.laExpediente[0].Chasis);
            localStorage.setItem('dataProcess-ColorVehiculo', this.laExpediente[0].Color);
            //localStorage.setItem('dataProcess-Motor', this.laExpediente[0].Motor);
            //this.dataProcess['DireccionEnvioCorrespondencia'] = this.elExpediente.Direccion;

            for (let index = 0; index < this.nulosExpediente.length; index++) {
              const element = this.nulosExpediente[index];
              console.log('viene nulo '+element.nombre);
              for (let index = 0; index < Predeterminados.length; index++) {
                const elementPredet = Predeterminados[index].nombre;
                const elementPredetV = Predeterminados[index].valor;
                if(element.nombre.indexOf(elementPredet) > -1){
                  this.dataProcess[element.nombre] = elementPredetV;
                }
              }
            }
          }
        });
      }
    }else{
      this.daTipoConductor = 1;
      this.seTipoConductor(this.daTipoConductor, 5);
      this.syncConductorFromPropietario();
      
    }

    

    
    
    

    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage[index];
      let cadena:any = localStorage.key(index);
        let objeto:any = localStorage.getItem(cadena);
      if (localStorage.key(index)?.indexOf('testigos-') == 0) {
        
        this.testigos.push(JSON.parse(objeto));
      }
      if (localStorage.key(index)?.indexOf('acompaniante-') == 0) {
        this.acompaniante.push(JSON.parse(objeto));
      }
      if (localStorage.key(index)?.indexOf('lesionados-') == 0) {
        this.lesionados.push(JSON.parse(objeto));
      }


      if (localStorage.key(index)?.indexOf('propiedadesprivadas-') == 0) {
        this.propiedadesprivadas.push(JSON.parse(objeto));
      }
      
    }

    this.firstInterval = setInterval(() => {
      this.setFirstSegment();
    }, 2000);

    
    this.api.ListTipoConductor();
    this.loadParentescos();
    this.getTalleres();

    if (this.platform.is('android')) {
      this.getCountry();
    }
    
    $('#botonFirmar').click();
  }

  hiddenMenu(i: number) {
    if (!this.menu[i]) {
      this.menu = this.menu.reduce((x: any[]) => { return [...x, false] }, []);
    }
    this.menu[i] = !this.menu[i];
  }

  

  analizaNulo(indexFront:any, valor:any, inputIndex:any){
    let segmentKey = requiredDataCliente[indexFront].segmentKey;
    let segmentId = requiredDataCliente[indexFront].segmentoId; 
    let segmentIndex = requiredDataCliente[indexFront].segmentIndex;
    this.indexFront = $('.index-input').eq(indexFront).val(); //segmentIndex;
    //alert('valor '+valor+' en el index '+ inputIndex +', el segmento '+requiredDataCliente[indexFront].segmentKey)
    //$('.required-index').eq(inputIndex).addClass('required-missing');


    if (valor == 'undefined' || valor == undefined) {

      setTimeout(() => {
        //this.setSegment(segmentKey, indexSeg);
        $("#"+segmentId).fadeIn('xslow');
        $("#"+segmentId).click();

        let daSegmentsContainer = document.getElementsByClassName('segment-icon');
        let daTitleContainer = document.getElementsByClassName('segment-title');
        let daSegmentsButton = document.getElementsByClassName('segment-item');
        let daIndex = segmentIndex;

        for (let index = 0; index < daSegmentsContainer.length; index++) {
          const element = daSegmentsContainer[index];
          const title = daTitleContainer[index];
          const segmentId = segments[index].idSegmento;
          
          if (daIndex == index) {
            $("#"+segmentId).fadeIn('xslow');
            daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
            element.setAttribute('style', 'color:#0058CB');
            title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
          } else {
            $("#"+segmentId).fadeOut();
            daSegmentsButton[index].setAttribute('style', 'border:none');
            element.setAttribute('style', 'color:#7da1c4');
            title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
          }
        }

        //this.scrollToElement();
      }, 900);
      
    }
  }

  hasNonDigit(str:any) {
    return /\D/g.test(str.toString());
  }

  ionViewDidEnter(){
    let origin = localStorage.getItem('origin');

    this.isTablet = this.platform.is('tablet');
    
    this.esAudiencia = (origin === '/prepare-send');
    this.restoreConductorIdentityFromCache();
    this.restoreRelatedInfoDescriptionsFromCache();

    this.platform.ready().then(() => {

      
      Keyboard.addListener('keyboardDidShow', () => {
        $('.cliente-action-footer').fadeOut();
      });


      Keyboard.addListener('keyboardDidHide', () => {
              $('.cliente-action-footer').fadeIn();
            });
      

      setTimeout(() => {
        const imgElement = document.getElementById("imagenFirma") as HTMLImageElement;

        if (imgElement) {
          console.log('Esta imagen '+ imgElement.src); // Obtiene el valor completo (resuelto a URL absoluta)
          console.log(imgElement.getAttribute("src")); // Obtiene exactamente lo que está en el atributo
        }

        this.firmar();
      }, 900);
     
     });
  }

  ngOnInit() {
    //alert('Bienvenido a la página de cliente del expediente ');

    
    
    for (let indexA = 0; indexA < this.datosAtencion.length; indexA++) {
      const elementA = this.datosAtencion[indexA];
      console.log('Los datos de atencion son ');
      console.dir(elementA)
    }
    setTimeout(() => {
      let segmentsContainer = document.getElementsByClassName('segment-item');
      //alert($('.segment-item').eq(9).text())
      $('.segment-item').eq(9).click(function(){
        setTimeout(() => {
          $('#signButton').click();
          
        }, 1000);
        
      })


      //$('#signButton').click();
    }, 1000);
    this.idAtencion = localStorage.getItem('idAtencion');
    localStorage.setItem('atencionEnProceso', this.idAtencion);
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

          void this.initializeInterAutoVehicleFields(this.expediente[0]);

          //alert(this.moneda)
          this.miMoneda = resolveAttentionCurrency(this.expediente[0]);
          
         }
      )

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

      console.log('asi estan los acompas')
      console.dir(this.acompaniante)
    }



    this.platform.ready().then(() => {
      let elementWidth:any = document.getElementById('segmentsContent')?.clientWidth;
      if (this.platform.is('android')) {
        this.deviceWidth = this.platform.width() - 400;
      } else {
        this.deviceWidth = this.platform.width() - 370;
      }

      // se debe cambiar el id de la obtencion de la licencia por una variable. Temporalmente se tiene en duro el id de pais de honduras con fines de testeo
      let codigoPais = localStorage.getItem('codigoPais');
      const paisId = this.countryService.convertCountryCode(codigoPais); //this.convertCountryCode(codigoPais);
      //alert('Código de país : '+ paisId)
      //this.getTipoLicencia(paisId);
      this.getTipoLicencia(3);
      this.identificarPais();

    });


    if (Network) { this.checkConnection(); }

    void this.initializeInterAutoVehicleFields();
  }


  


  // PROCESO
  goBack(){
    this.alertaSalir();
    //this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  async alertaSalir() {
    const alert = await this.alert.create({
      header:'Salir del formulario?',
      message:'Los datos se perderan sin haber enviado. Salir?',
      buttons:this.alertButtons
    });
    await alert.present();
  }

  goMap(){
    const displayCoordinates = this.getDisplayCoordinates();
    const navigateExtras: NavigationExtras = {
      state: {
        mode: 'claim-coordinate-correction',
        source: './clientehn',
        attentionId: this.idAtencion || localStorage.getItem('idAtencion'),
        latitud: displayCoordinates.Latitud,
        longitud: displayCoordinates.Longitud,
        coordinateState: this.coordinateAlertState
      }
    };

    this.router.navigate(['./mapa'], navigateExtras);
  }

  scrollToElement() {
    this.content.scrollToPoint(0, 0, 1000);
  }

  limpiarCache() {
    window.location.reload();
  }

  saveFirma() {
    //console.log(this.sig.toDataURL("image/jpeg"));
  }

  private isBlank(value: any): boolean {
    return value === null || value === undefined || String(value).trim() === '';
  }

  private hasHondurasPhoneLength(value: any): boolean {
    if (this.isBlank(value)) {
      return false;
    }

    const digits = String(value).replace(/\D/g, '');
    return digits.length >= 8;
  }

  private hasPersonaMinimumData(): boolean {
    return !this.isBlank(this.persona?.Nombre) && this.hasHondurasPhoneLength(this.persona?.Telefono);
  }

  private hasPropiedadMinimumData(): boolean {
    return !this.isBlank(this.propiedadPrivada?.NombrePropietario) && this.hasHondurasPhoneLength(this.propiedadPrivada?.Telefono);
  }

  private async showEntryValidationMessage(message: string) {
    const alert = await this.alert.create({
      cssClass: 'form-choice-alert entry-validation-alert',
      header: 'Datos incompletos',
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Entendido',
          role: 'cancel',
          cssClass: 'form-choice-confirm'
        }
      ]
    });

    await alert.present();
  }

  closePersonaModal() {
    this.showPersona = false;
    this.showPersonaLesion = false;
    this.persona = {};
    this.editar = false;
    this.guardar = true;
  }

  closePropiedadModal() {
    this.showPropiedad = false;
    this.propiedadPrivada = {};
    this.editar = false;
    this.guardar = true;
  }

  addPersona() {
    if (!this.hasPersonaMinimumData()) {
      this.showEntryValidationMessage('Ingrese nombre y un teléfono válido de al menos 8 dígitos antes de agregar el registro.');
      return;
    }

    switch (this.persona.TipoPersona) {
      case 1:
        this.acompaniante.push(this.persona);
        console.dir(this.acompaniante)
        for (let index = 0; index < this.acompaniante.length; index++) {
          const element = this.acompaniante[index];
          localStorage.setItem('acompaniante-'+index, JSON.stringify(element));
        }
        break;
      case 2:
        this.testigos.push(this.persona);
        console.dir(this.testigos)
        for (let index = 0; index < this.testigos.length; index++) {
          const element = this.testigos[index];
          localStorage.setItem('testigos-'+index, JSON.stringify(element));
        }
        break;
      case 3:
        this.lesionados.push(this.persona);
        console.log('Lesionados')
        console.dir(this.lesionados)
        for (let index = 0; index < this.lesionados.length; index++) {
          const element = this.lesionados[index];
          localStorage.setItem('lesionados-'+index, JSON.stringify(element));
        }
      break;
      default:
        break;
  }
    this.persona = {};
  this.showPersona = false;
    this.showPersonaLesion = false;
  }
  editPersona(i: number, tipo: number) {
    switch (tipo) {
      case 1:
        this.persona = this.acompaniante[i];
        break;
      case 2:
        this.persona = this.testigos[i];
        break;
      case 3:
        this.persona = this.lesionados[i];
        break;
      default:
        break;
    }
    this.indexPersona = i;
    this.editar = true;
    this.guardar = false;

    if (tipo == 3) {
      this.showPersonaLesion = true;
      this.modalLesion?.onDidDismiss().then((data) => {
        this.showPersonaLesion = false;
        console.log(data+', Hey');
      });
    }else{
      this.showPersona = true;
      this.daModal?.onDidDismiss().then((data) => {
        this.showPersona = false;
      });
    }
    //this.showPersonaLesion = true;
  }
  updatePersona() {
    if (!this.hasPersonaMinimumData()) {
      this.showEntryValidationMessage('Ingrese nombre y un teléfono válido de al menos 8 dígitos antes de actualizar el registro.');
      return;
    }

    //alert(this.persona.TipoPersona)
    let miTipo = this.persona.TipoPersona;
    switch (this.persona.TipoPersona) {
      case 1:
        this.acompaniante[this.indexPersona] = this.persona;
        localStorage.setItem('acompaniante-'+this.indexPersona, JSON.stringify(this.persona));
        break;
      case 2:
        this.testigos[this.indexPersona] = this.persona;
        localStorage.setItem('testigos-'+this.indexPersona, JSON.stringify(this.persona));
        break;
      case 3:
        this.lesionados[this.indexPersona] = this.persona;
        localStorage.setItem('lesionados-'+this.indexPersona, JSON.stringify(this.persona));
        break;
      default:
        break;
    }
    this.persona = {};
    this.editar = false;
    this.guardar = true;

    console.log('El tipo de persona a editar es '+miTipo);
    //let tipoString = this.persona.TipoPersona.toString();
    //let tipo = parseInt(tipoString)
    
    ///alert(tipo+1)
    //alert(this.persona.TipoPersona == 3)
    if (miTipo == 3) {
      this.showPersonaLesion = false;
      //this.showPersonaLesion = true;
      this.modalLesion?.onDidDismiss().then((data) => {
        this.showPersonaLesion = false;
        console.log(data+', Hey');
      });
    }else{
      this.showPersona = false;
      //alert('Ya estoy acá')
      //this.showPersona = true;
      this.daModal?.onDidDismiss().then((data) => {
        this.showPersona = false;
      });
    }
  }
  deletePersona(i: number, tipo: number) {
    //console.log(i)
    switch (tipo) {
      case 1:
        this.acompaniante.splice(i, 1);
        localStorage.removeItem('acompaniante-'+i);
        break;
      case 2:
        this.testigos.splice(i, 1);
        localStorage.removeItem('testigos-'+i);
        break;
      case 3:
        this.lesionados.splice(i, 1);
        localStorage.removeItem('lesionados-'+i);
        break;
      default:
        break;
    }
  }

  insertarLesion(event:any){
    console.log(event.detail.value)
    localStorage.setItem('lesion-'+this.idAtencion, event.detail.value);
  }

  getElTipoParentesco(event: any) {
    console.log(event)
    let tipoP = event.detail.value;
    this.elTipoParentesco = event.target.value;
    this.dataProcess['Parentesco'] = event.detail.value;
    localStorage.setItem('dataProcess-Parentesco', event.target.value);
    localStorage.setItem('datos-Parentesco', event.target.value);

    console.log('Este tipo '+ tipoP)
    
    for (let index = 0; index < this.tipoParentescos.length; index++) {
      const element = this.tipoParentescos[index];
      //console.dir(element)
      if (tipoP == element.CODIGO) {
        this.elTipoDeParentesco = element.DESCRIPCION;
      }
    }
    //this.elTipoDeParentesco = this.tipoParentescos
  }

  setElTipoParentesco(parent:any) {
    this.elTipoParentesco = parent;
    localStorage.setItem('dataProcess-Parentesco', parent);
    localStorage.setItem('datos-Parentesco', parent);
  }

  tercerosHeridos(event:any) {
    this.esTercerosHeridos = event.target.value;
    this.dataProcess['TercerosHeridos'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-TercerosHeridos', event.target.value);
  }

  seTercerosHeridos(terceros:any) {
    this.esTercerosHeridos = terceros;
    this.dataProcess['TercerosHeridos'] = parseInt(terceros);
    localStorage.setItem('dataProcess-TercerosHeridos', terceros);
  }

  tercerosMuertos(event:any) {
    this.esTercerosMuertos = parseInt(event.target.value);
    this.dataProcess['TercerosMuertos'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-TercerosMuertos', event.target.value);
  }

  

  seTercerosMuertos(terceros:any) {
    this.esTercerosMuertos = terceros;
    this.dataProcess['TercerosMuertos'] = terceros;
    localStorage.setItem('dataProcess-TercerosMuertos', terceros);
  }

  loadParentescos() {
    this.api.ListTipoParentesco(3).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.tipoParentescos = res;
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      }

    )
  }

  personaModal(tipo: number) {
    //alert(tipo)
    this.persona.TipoPersona = tipo;
    if (tipo == 3) {
      this.showPersonaLesion = !this.showPersonaLesion;

        this.modalLesion?.onDidDismiss().then((data) => {
          this.showPersonaLesion = false;
          console.log(data+', Hey');
          this.persona.Nombre = '';
          this.persona.Telefono = '';
          this.persona.Direccion = '';
          this.persona.TipoLesion = '';
          this.persona.DireccionHospitalizacion = '';
        });
      
    }else{
      this.showPersona = !this.showPersona;

        this.daModal?.onDidDismiss().then((data) => {
          this.showPersona = false;
          console.log(data+', Hey')
          this.persona.Nombre = '';
          this.persona.Telefono = '';
          this.persona.Direccion = '';
        });
    }
    
  }

  openModaLesion(tipo: number) {
    this.persona.TipoPersona = tipo;
    this.showPersonaLesion = !this.showPersonaLesion;
  }

  openModalPropiedad() {
    this.propiedadPrivada = {};
    this.showPropiedad = !this.showPropiedad;
    this.propModal?.onDidDismiss().then((data) => {
      this.showPropiedad = false;
      console.log(data+', Hey')
    });
    
  }

  addPropiedad() {
    if (!this.hasPropiedadMinimumData()) {
      this.showEntryValidationMessage('Ingrese nombre del propietario y un teléfono válido de al menos 8 dígitos antes de agregar la propiedad.');
      return;
    }

    this.showPropiedad = !this.showPropiedad;
    this.propiedadesprivadas.push(this.propiedadPrivada);
    for (let index = 0; index < this.propiedadesprivadas.length; index++) {

      console.dir(this.propiedadesprivadas);
      const element = this.propiedadesprivadas[index];
      localStorage.setItem('propiedadesprivadas-'+index, JSON.stringify(element));

    }
  }
  editPropiedad(i: number) {
    this.propiedadPrivada = this.propiedadesprivadas[i];
    this.indexPropiedad = i;
    this.editar = true;
    this.guardar = false;
    this.showPropiedad = true;
  }
  updatePropiedad() {
    if (!this.hasPropiedadMinimumData()) {
      this.showEntryValidationMessage('Ingrese nombre del propietario y un teléfono válido de al menos 8 dígitos antes de actualizar la propiedad.');
      return;
    }

    this.propiedadesprivadas[this.indexPropiedad] = this.propiedadPrivada;
    localStorage.setItem('propiedadesprivadas-'+this.indexPropiedad, JSON.stringify(this.propiedadPrivada));
    this.propiedadPrivada = {};
    this.editar = false;
    this.guardar = true;
    this.showPropiedad = false;
  }
  deletePropiedad(i: number) {
    this.propiedadesprivadas.splice(i, 1);
    localStorage.removeItem('propiedadesprivadas-'+i);
  }
  PropiedadModal(tipo: number) {
    this.showPropiedad = !this.showPersona;
  }
  next() {
    this.router.navigate(['./cargar-archivos'])
  }
  goAdeuda() {
    this.router.navigate(['./adeuda'])
  }

  goAjuste() {
    this.router.navigate(['./ajustadorhn'])
  }

  goCulpable() {
    this.router.navigate(['./culpable'])
  }

  goFotos() {
    this.router.navigate(['./cargar-archivos']);
  }

  async presentToast(message:any, position:any, clase:any) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);


    if (currentToast.length > 0) {
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

  checkConnection() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.conexion = status;
        //console.log(status.connected)
        this.conectividad = status.connected;
        if (this.conectividad == false) {
          this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
        }
      })
    } else {
      this.conectividad = false;
    }

    Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      if (this.conectividad == false) {
        this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
      }
    })
  }

  async presentToastErrorConexion(message:any, position:any, clase:any) {
    const currentToast = document.getElementsByTagName('ion-toast');
    //console.log('Tengo estos toasters : ' + currentToast.length);
    if (currentToast.length > 0) {
      this.toast.dismiss();
    }
    const toast = await this.toast.create({
      message: message,
      color: 'dark',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }

  seleccionarMarca(idMarca:any) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    this.elExpediente.Marca = marcasVehiculos[elIndex].nombre;

    for (let index = 0; index < marcasVehiculos.length; index++) {
      const element = marcasVehiculos[index];
      if (element.id == elIndex) {
        //console.log("Estos son los modelos de esta marca ");
        this.modelosMarca = element.modelos;
        //console.dir(this.modelosMarca)
      }
    }
  }

  seleccionarModelo(idModelo:any) {
    this.elExpediente.Modelo = idModelo.target.value;
    //console.log(this.elExpediente.Modelo)
  }

  seleccionarMarcaCulpable(idMarca:any) {
    this.modelosMarca = [];
    let elIndex = idMarca.target.value;
    //alert(elIndex)
    this.culpable.MarcaCulpable = marcasVehiculos[elIndex - 1].nombre;

    for (let index = 0; index < marcasVehiculos.length; index++) {
      const element = marcasVehiculos[index];
      if (element.id == elIndex) {
        //console.log("Estos son los modelos de esta marca ");
        this.modelosMarca = element.modelos;
        //console.dir(this.modelosMarca)
      }
    }
  }

  seleccionarModeloCulpable(idModelo:any) {
    this.culpable.ModeloCulpable = idModelo.target.value;
    //console.log(this.culpable.ModeloCulpable)
  }

  //OJO DEBUG
  testThis() {
    //alert('testing')
  }

  seleccionarTipoConductor(tipoCId:any) {
    const selectedTipoConductor = parseInt(tipoCId.target.value);
    this.daType = selectedTipoConductor;
    this.daTipoConductor = selectedTipoConductor;

    for (let indexT = 0; indexT < this.tipoConductor.length; indexT++) {
      const element = this.tipoConductor[indexT];
      let idTipo = element.Id;
      if (idTipo == this.daType) {
        //alert(this.daType+', '+element.TipoConductor)
        this.elTipoDeConductor = element.TipoConductor;  
        console.log('Tipo de conductor seleccionado : '+this.elTipoDeConductor);
      }
      
    }
    
    //this.entraResponsable()
    //alert(this.daType+1)
    this.elExpediente.ConducidoPor = selectedTipoConductor;
    this.laExpediente[0].ConducidoPor = selectedTipoConductor;
    this.dataProcess.RefTipoConductorId = selectedTipoConductor;
    this.dataProcess['RefTipoConductorId'] = selectedTipoConductor;
    localStorage.setItem('dataProcess-RefTipoConductorId', selectedTipoConductor.toString());

    this.formateadaNacimiento = null;
    this.elTipoDeParentesco = null;
    this.elTipoDeLicencia = null;
    this.laExpediente[0].TelefonoFijoConductor = null;
    this.laExpediente[0].DireccionConductor = null;
    this.laExpediente[0].CelularConductor = null;
    this.laExpediente[0].LicenciaNo = null;
    this.formateadaVigencia = null;
    this.daTelefonoFijoConductor = undefined;
    this.daCelularConductor = null;
    this.edad = undefined;
    
    for (let index = 0; index < this.tipoConductor.length; index++) {
      const element = this.tipoConductor[index];
      //console.log('Tipo de conductor '+tipoCId.target.value+', tipo '+element.TipoConductor);
      //console.dir(element)

      if (this.daType == element.Id) {
        this.elTipoDeConductor = element.TipoConductor;
      }

    }


    // limpiar variables de licencia
    this.dataProcess.RefTipoLicenciaId = null;
    this.dataProcess.TipoLicencia = null;
    this.elExpediente.TipoLicencia = null;
    this.laExpediente[0].TipoLicencia = null;
    this.elTipoParentesco = null;
    this.dataProcess['Parentesco'] = null;
    localStorage.removeItem('dataProcess-Parentesco');
    localStorage.removeItem('datos-Parentesco');
    localStorage.removeItem('dataProcess-TipoLicencia');
    localStorage.removeItem('dataProcess-RefTipoLicenciaId');
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elTipoLicenciaId');
    localStorage.removeItem('elParentesco');


    if (selectedTipoConductor == 1) {
      this.syncConductorFromPropietario();
    } else {
      this.conductorEsAfiliado = false;
      this.daNombreConductor = '';
      this.daIdentidadConductor = '';
      this.daTelefonoFijoConductor = null;
      this.daCelularConductor = null;

      this.dataProcess['NombreConductor'] = '';
      localStorage.setItem('dataProcess-NombreConductor', '');

      this.dataProcess.ConductorAfiliado = selectedTipoConductor;
      this.dataProcess['ConductorAfiliado'] = selectedTipoConductor;
      localStorage.setItem('dataProcess-ConductorAfiliado', selectedTipoConductor.toString());

      //this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      if (this.nombreConductor) {
        if (this.nombreConductor == this.elExpediente.Cliente) {
          /*
          this.daNombreConductor = '';
          this.daIdentidadConductor = '';
          this.daTelefonoFijoConductor = null;
          this.daCelularConductor = null;
          localStorage.setItem('dataProcess-NombreConductor', '');
          localStorage.setItem('datos-NombreConductor', '');
          localStorage.setItem('NombreConductor', '');
          localStorage.setItem('nombreConductor', '');
          */
        }
        //alert('Tengo este conductor en caché '+this.nombreConductor+', y '+this.elExpediente.Cliente);
      }else{
        //alert('Aun no se ha ingresado un conductor');
      }
    }
  }

  seTipoConductor(tipoC:any, origen:any) {
    //alert('Yes '+tipoC)
    const selectedTipoConductor = parseInt(tipoC);
    this.daType = selectedTipoConductor;
    this.daTipoConductor = selectedTipoConductor;
    this.elExpediente.ConducidoPor = selectedTipoConductor;
    this.laExpediente[0].ConducidoPor = selectedTipoConductor;
    this.dataProcess.RefTipoConductorId = selectedTipoConductor;
    this.dataProcess['RefTipoConductorId'] = selectedTipoConductor;
    localStorage.setItem('dataProcess-RefTipoConductorId', selectedTipoConductor.toString());

    //alert(this.tipoConductor.length)
    for (let indexT = 0; indexT < this.tipoConductor.length; indexT++) {
      const element = this.tipoConductor[indexT];
      let idTipo = element.Id;

      //alert(idTipo+' == '+this.daTipoConductor+', '+(idTipo == this.daTipoConductor));

      if (idTipo == selectedTipoConductor) {
        this.elTipoDeConductor = element.TipoConductor;  
      }
      
    }

    setTimeout(() => {
      let use:any = localStorage.getItem('dataProcess-AseguradoUsoPoliza');
              let uso = parseInt(use);

      if (selectedTipoConductor == 1) {
        this.syncConductorFromPropietario();
      } else {
        this.conductorEsAfiliado = false;
        this.elExpediente.NombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.laExpediente[0].NombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
        this.cliente.IdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
        this.daIdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
        this.laExpediente[0].TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
        this.laExpediente[0].CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
        this.nombreCliente = localStorage.getItem('dataProcess-NombreConductor');
        this.dataProcess.ConductorAfiliado = localStorage.getItem('dataProcess-ConductorAfiliado');
        this.dataProcess['ConductorAfiliado'] = localStorage.getItem('dataProcess-ConductorAfiliado');

        this.dataProcess.ConductorAfiliado = localStorage.getItem('dataProcess-ConductorAfiliado');
        this.dataProcess['ConductorAfiliado'] = localStorage.getItem('dataProcess-ConductorAfiliado');
        let cambiazo:any = localStorage.getItem('dataProcess-ConductorAfiliado');
        localStorage.setItem('dataProcess-ConductorAfiliado', cambiazo);

      }
    }, 1000);
    
    
  }

  syncConductorFromPropietario() {
    const nombrePropietario = this.laExpediente?.[0]?.Cliente || this.elExpediente?.Cliente || '';
    if (!nombrePropietario) {
      return;
    }

    this.conductorEsAfiliado = true;
    this.daType = 1;
    this.daTipoConductor = 1;
    this.elExpediente.ConducidoPor = 1;
    this.laExpediente[0].ConducidoPor = 1;
    this.dataProcess.RefTipoConductorId = 1;
    this.dataProcess['RefTipoConductorId'] = 1;
    localStorage.setItem('dataProcess-RefTipoConductorId', '1');
    this.elExpediente.NombreConductor = nombrePropietario;
    this.laExpediente[0].NombreConductor = nombrePropietario;
    this.nombreConductor = nombrePropietario;

    const identidad = this.identidadAsegurado || this.identidadDelCliente || '';
    this.laExpediente[0].IdentidaConductor = identidad;
    this.cliente.IdentidadConductor = identidad;
    if (identidad) {
      this.dataProcess['IdentidaConductor'] = identidad;
      localStorage.setItem('dataProcess-IdentidaConductor', identidad);
    }

    if (this.cliente?.TelefonFijo) {
      this.laExpediente[0].TelefonoFijoConductor = this.cliente.TelefonFijo;
      this.elExpediente.TelefonoFijoConductor = this.cliente.TelefonFijo;
    }
    if (this.cliente?.Celular) {
      this.laExpediente[0].CelularConductor = this.cliente.Celular;
    }
    if (this.cliente?.TelefonoOrigen) {
      this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
      this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
    }
    this.daIdentidadConductor = identidad || this.daIdentidadConductor;
    this.daTelefonoFijoConductor = this.cliente?.TelefonFijo ?? this.daTelefonoFijoConductor;
    this.daCelularConductor = this.cliente?.Celular ?? this.daCelularConductor;
    this.dataProcess.ConductorAfiliado = 1;
    this.dataProcess['ConductorAfiliado'] = 1;
    localStorage.setItem('dataProcess-ConductorAfiliado', '1');

    this.setNombreConductor(nombrePropietario);
  }

  setNombreConductor(nombre:any) {
    this.elExpediente.NombreConductor = nombre;
    this.laExpediente[0].NombreConductor = nombre;
    this.dataProcess.NombreConductor = nombre;
    this.dataProcess['NombreConductor'] = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('nombreConductor', nombre);
    localStorage.setItem('dataProcess-NombreConductor', nombre);
    localStorage.setItem('datos-NombreConductor', nombre);
    localStorage.setItem('NombreConductor', nombre);
  }
  
  entraNombreConductor(event:any) {
    console.log(this.daType)
    if (this.daType == 1) {
      console.log('soy el asegurado');
    }else{
      console.log(this.daNombreConductor);
      console.log('soy el conductor');
      localStorage.setItem('nombreConductor', this.daNombreConductor);
      localStorage.setItem('dataProcess-NombreConductor', this.daNombreConductor);
      localStorage.setItem('datos-NombreConductor', this.daNombreConductor);
      this.dataProcess.NombreConductor = this.daNombreConductor;
      this.dataProcess['NombreConductor'] = this.daNombreConductor;
    }
  }

  

  descripcionDanio(event:any) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = event.target.value;
    this.dataProcess['DescripcionDanio'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionDanio', event.target.value);
  }

  setDescripcionDanio(descripcion:any) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = descripcion;
    this.dataProcess['DescripcionDanio'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionDanio', descripcion);
  }

  

  descripcionAccidente(event:any) {
    //console.log(event.target.value)
    this.dataProcess['Descripcion'] = event.target.value;
    localStorage.setItem('dataProcess-Descripcion', event.target.value);
  }

  setDescripcionAccidente(descripcion:any) {
    //console.log(event.target.value)
    this.dataProcess['Descripcion'] = descripcion;
    localStorage.setItem('dataProcess-Descripcion', descripcion);
  }

  dTercerosHeridos(event:any) {
    const value = event.target.value;
    this.dataProcess.DescripcionTercerosHeridos = value;
    this.dataProcess['DescripcionTercerosHeridos'] = value;
    localStorage.setItem('dataProcess-DescripcionTercerosHeridos', value);
    if (this.laExpediente?.[0]) {
      this.laExpediente[0].DescripcionTercerosHeridos = value;
    }
    if (this.elExpediente) {
      this.elExpediente.DescripcionTercerosHeridos = value;
    }
  }

  dTercerosMuertos(event:any) {
    const value = event.target.value;
    this.dataProcess.DescripcionTercerosMuertos = value;
    this.dataProcess['DescripcionTercerosMuertos'] = value;
    localStorage.setItem('dataProcess-DescripcionTercerosMuertos', value);
    if (this.laExpediente?.[0]) {
      this.laExpediente[0].DescripcionTercerosMuertos = value;
    }
    if (this.elExpediente) {
      this.elExpediente.DescripcionTercerosMuertos = value;
    }
  }


  setTercerosHeridos(option:any) {
    this.dataProcess.TercerosHeridos = option;
    this.dataProcess['TercerosHeridos'] = parseInt(option);
    localStorage.setItem('dataProcess-TercerosHeridos', option);
  }

  setTercerosMuertos(option:any) {
    this.dataProcess.TercerosMuertos = option;
    this.dataProcess['TercerosMuertos'] = option;
    localStorage.setItem('dataProcess-TercerosMuertos', option);
  }


  entrarAnio(event:any) {
    this.elExpediente.Year = event.target.value;
    this.laExpediente[0].Year = event.target.value;
  }

  entrarMotor(_event:any) {
    this.onVehicleIdentifierChange();
  }

  entrarChasis(_event:any) {
    this.onVehicleIdentifierChange();
  }

  entrarPlaca(event:any) {
    this.elExpediente.NumeroPlaca = event.target.value;
    this.laExpediente[0].NumeroPlaca = event.target.value;
  }

  entrarUnidad(event:any) {
    this.elExpediente.NoUnidad = event.target.value;
    this.laExpediente[0].NoUnidad = event.target.value;
    this.dataProcess.NumeroUnidad = event.target.value;
    this.dataProcess['NumeroUnidad'] = event.target.value;
    localStorage.setItem('dataProcess-NumeroUnidad', event.target.value);
  }

  setUnidad(unidad:any) {
    this.elExpediente.NoUnidad = unidad;
    this.laExpediente[0].NoUnidad = unidad;
    this.dataProcess.NumeroUnidad = unidad;
    this.dataProcess['NumeroUnidad'] = unidad;
    localStorage.setItem('dataProcess-NumeroUnidad', unidad);
  }

  entraTipoLicencia(event:any) {
    let tipoLicencia = event.detail.value[0];
    console.log(tipoLicencia)
    this.elTipoDeLicencia = tipoLicencia;
    let tipo; let tipoId:any;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia==tipoLicencia) {
        tipoId = element.Id;
        tipo = tipoLicencia;
        console.log(tipo+', '+tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);

        //console.log(tipoLicencia)
        /*
        
        
        
       
        */
      }
      
    }
  }

  seTipoLicencia(tipoL:any) {
    let tipo; let tipoId:any;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia==tipoL) {
        tipo = tipoL;
        tipoId = element.Id;
        console.log(tipo+', '+tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        this.laExpediente[0].TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);
      }
      
  }
}

  private clearVigenciaValue(): void {
    this.formateadaVigencia = null;
    this.formateadaVigenciaPicker = null;
    this.isVence = false;
    this.vigenciaErrorMessage = 'La fecha de vencimiento es obligatoria. Selecciona una fecha válida desde el calendario (hoy o posterior).';
    delete this.dataProcess?.Vigencia;
    if (this.dataProcess) {
      delete this.dataProcess['Vigencia'];
    }
    if (this.laExpediente?.[0]) {
      this.laExpediente[0].Vigencia = null;
    }
    localStorage.removeItem('dataProcess-Vigencia');
  }

  private applyVigenciaFromRaw(rawValue: any): boolean {
    const normalized = normalizeLicenseExpirationDate(rawValue);
    if (!normalized) {
      this.vigenciaErrorMessage = 'La fecha de vencimiento es obligatoria. Selecciona una fecha válida desde el calendario (hoy o posterior).';
      return false;
    }

    if (normalized.storageValue < this.licenseExpirationMin) {
      this.vigenciaErrorMessage = 'La fecha de vencimiento no puede ser anterior a hoy.';
      return false;
    }

    this.formateadaVigencia = normalized.displayValue;
    this.formateadaVigenciaPicker = normalized.storageValue;
    this.dataProcess.Vigencia = normalized.isoValue;
    this.dataProcess['Vigencia'] = normalized.isoValue;
    this.laExpediente[0].Vigencia = normalized.isoValue;
    localStorage.setItem('dataProcess-Vigencia', normalized.storageValue);
    this.isVence = true;
    this.entraLicenciaEstadoCalculado(1);
    return true;
  }

  marcarFechaVencimiento(event: any) {
    const rawValue = event?.detail?.value ?? event?.target?.value ?? event;
    if (!this.applyVigenciaFromRaw(rawValue)) {
      this.isVence = false;
      this.formateadaVigencia = null;
      this.formateadaVigenciaPicker = null;
      delete this.dataProcess?.Vigencia;
      if (this.dataProcess) {
        delete this.dataProcess['Vigencia'];
      }
      if (this.laExpediente?.[0]) {
        this.laExpediente[0].Vigencia = null;
      }
      localStorage.removeItem('dataProcess-Vigencia');
      this.toaster.presentToastNoButtonsRed(this.vigenciaErrorMessage, 'top', 'danger');
    }
  }

  entraVencimiento(event:any) {
    this.marcarFechaVencimiento(event);
  }

  setVencimiento(fecha:any) {
    if (!this.applyVigenciaFromRaw(fecha)) {
      this.clearVigenciaValue();
    }
  }

  entraLicenciaEstado(event:any){
    console.log(event.target.value)
    this.dataProcess.LicenciaEstado = event.target.value;
    this.dataProcess['LicenciaEstado'] = event.target.value;
    localStorage.setItem('dataProcess-LicenciaEstado', event.target.value);
  }

  entraLicenciaEstadoCalculado(estado:any){
    $('#licenciaEstado').val(estado).change();
    this.dataProcess.LicenciaEstado = estado;
    this.dataProcess['LicenciaEstado'] = estado;
    localStorage.setItem('dataProcess-LicenciaEstado', estado);
  }

  entraDescripcionAudiencia(event:any){
    this.dataProcess.DescripcionAudiencia = event.target.value;
    this.dataProcess['DescripcionAudiencia'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionAudiencia', event.target.value);
  }

  setDescripcionAudiencia(descripcion:any){
    this.dataProcess.DescripcionAudiencia = descripcion;
    this.dataProcess['DescripcionAudiencia'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionAudiencia', descripcion);
  }

  entraObservacionTaller(event:any) {
    this.dataProcess.ObservacionTaller = event.target.value;
    this.dataProcess['ObservacionTaller'] = parseInt(event.target.value);
  }

  entraUbicacionVehiculoDetenido(event:any) {
    this.dataProcess.UbicacionVehiculoDetenido = event.target.value;
    this.dataProcess['UbicacionVehiculoDetenido'] = event.target.value;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', event.target.value);
  }

  setUbicacionVehiculoDetenido(ubicacion:any) {
    this.dataProcess.UbicacionVehiculoDetenido = ubicacion;
    this.dataProcess['UbicacionVehiculoDetenido'] = ubicacion;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', ubicacion);
  }

  entraResponsable(event:any){
    let seleccion = event.detail.value;
    //alert('Tipo responsable : '+seleccion+', Tipo conductor : '+this.daType+', Nombre conductor no afiliado : '+this.daNombreConductor)



    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = '';
      this.laExpediente[0].NombreAtribuyeAccidente = '';
      //this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    }else{
      //alert(this.daNombreConductor)
      this.dataProcess.TerceroResponsable = 2;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        //alert(this.daType)
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);

        }else{
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.laExpediente[0].NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);            
        }
        
        
      }else{
        this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
      }
    }
  }

  setResponsable(selecId:any){
    let seleccion = selecId;

    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
      this.laExpediente[0].NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    }else{
      this.dataProcess.TerceroResponsable = 2;
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);

        }else{
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);            
        }

        //this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.NombreConductor;
        //localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.NombreAtribuyeAccidente);
        
      }else{
        this.dataProcess.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.laExpediente[0].Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.laExpediente[0].Cliente);
        this.elExpediente.NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
        this.laExpediente[0].NombreAtribuyeAccidente = this.laExpediente[0].Cliente;
      }
    }
  }

  entraNombreCulpable(event:any) {
    this.culpable.NombreCulpable = event.target.value;
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
  }

  entraNombrePropietarioCulpable(event:any) {
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
  }

  entraCorreoCulpable(event:any) {
    this.culpableCorreo = event.target.value;
  }

  entraTrabajoCulpable(event:any) {
    this.culpableTrabajo = event.target.value;
  }

  entraContactoCulpable(event:any) {
    this.culpableContacto = event.target.value;
  }

  entraContactoMNumeroCulpable(event:any) {
    this.culpableContactoNumero = event.target.value;
  }

  entraIdentidadCulpable(event:any) {
    this.culpableIdentidad = event.target.value;
  }

  entraNombreTaller(event:any) {
    console.log(event)
    this.taller = event.detail.value[0];
    this.tallerId = event.detail.value[1];
    this.dataProcess.DondeSeEncuentraVehiculo = event.detail.value[1];
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value[1];
  }

  entrarFechaInicio() {}

  entraTallerOtro(event:any) {
    this.tallerOtroArray = [];
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    this.tallerOtro = event.target.value;
    this.tallerOtroArray.push({ nombre: event.target.value });
    //console.log(this.tallerOtro)
  }

  entraTallerOtroDireccion(event:any) {
    console.dir(this.tallerOtroArray)
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
    this.tallerOtroDireccion = event.target.value;
    //console.log(this.tallerOtroDireccion)
  }

  seTallerOtroDireccion(taller:any) {
    console.dir(this.tallerOtroArray)
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + taller;
    this.dataProcess['DondeSeEncuentraVehiculo'] = taller;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', taller);
    this.tallerOtroDireccion = taller;
    //console.log(this.tallerOtroDireccion)
  }

  entraUbicacionVehiculoAsegurado(event:any) {
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
  }

  setUbicacionVehiculoAsegurado(ubicacion:any) {
    this.dataProcess.DondeSeEncuentraVehiculo = ubicacion;
    this.dataProcess['DondeSeEncuentraVehiculo'] = ubicacion;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', ubicacion);
  }


  evaluateKm(event:any) {
    this.ajustador.Kilometraje = event.target.value;
    this.dataProcess.Kilometraje = event.target.value;
    this.dataProcess['Kilometraje'] = parseInt(event.target.value);
    if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '') {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      this.ajustador.Kilometraje = 0;
    } else {
      console.log(this.ajustador.Kilometraje);
    }

  }

  firmar() {
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
        const firmas = Array.isArray(res) ? res : (res ? [res] : []);
        console.log("Firmas para este usuario : " + firmas.length);
        console.dir(firmas);
        let latestSignature = null;
        for (let index = 0; index < firmas.length; index++) {
          const element = firmas[index];
          if (element?.FotoFirma) {
            latestSignature = element.FotoFirma;
          }

        }
        if (latestSignature) {
          this.firmaPrecargada = latestSignature.toString().startsWith('data:image') ? latestSignature : imagePrefix + latestSignature;
          localStorage.setItem("dSignatureAsegurado", this.firmaPrecargada);
          localStorage.setItem("dSignatureAsegurado-" + this.idAtencion, this.firmaPrecargada);
          localStorage.setItem("dSignatureAseguradoAtencion", this.idAtencion.toString());
          this.isSignature = true;
        } else {
          localStorage.removeItem("dSignatureAsegurado-" + this.idAtencion);
          if (localStorage.getItem("dSignatureAseguradoAtencion") === this.idAtencion.toString()) {
            localStorage.removeItem("dSignatureAsegurado");
            localStorage.removeItem("dSignatureAseguradoAtencion");
          }
          this.firmaPrecargada = emptySignatureWhite;
          this.isSignature = false;
        }
      },
      async (res) => {
        const storedSignature = localStorage.getItem("dSignatureAsegurado-" + this.idAtencion);
        if (storedSignature && storedSignature !== emptySignatureWhite && storedSignature !== emptySignature) {
          this.firmaPrecargada = storedSignature;
          this.isSignature = true;
        } else {
          this.firmaPrecargada = emptySignatureWhite;
          this.isSignature = false;
        }
      }
    );

  }


  marcarFecha(mydate:any) {
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.mydate = mydate;
    this.formateada = dateFormat + ' - ' + timeFormat;
    localStorage.setItem('fechaFirma', this.mydate);
  }

  async getCountry() {
    let local:any = localStorage.getItem('miLocalidad');
    this.laLocalidad = JSON.parse(local);
    this.miLocalidad = JSON.stringify(this.laLocalidad);
    this.miPais = this.laLocalidad[0].countryCode;
    localStorage.setItem('codigoPais', this.miPais);
    this.miPaisLocalidad = this.laLocalidad[0].locality;
    this.miPaisNombre = this.laLocalidad[0].countryName;
    localStorage.setItem('nombrePais', this.miPaisNombre);
    let localidadCabina = localStorage.getItem('direccionCabina');
    this.miPaisLocalidadSub = this.laLocalidad[0].subLocality+' '+localidadCabina;
    //alert(this.miPaisLocalidad+', '+this.miPaisNombre+', '+this.miPaisLocalidadSub)

    localStorage.setItem('latitud', this.laLocalidad[0].latitude);
    localStorage.setItem('longitud', this.laLocalidad[0].longitude);
    this.isLoading = false;
    if (this.miPais == "HN") {
      this.miPaisBandera = '../../assets/img/flag-hn.png';
    } else if (this.miPais == "GT") {
      this.miPaisBandera = '../../assets/img/flag-gt.png';
    }
    this.isLoading = false;
  }

  getElTipoLicencia(event:any) {
    this.elTipoLicenciaId = event.target.value;
    console.log(this.elTipoLicenciaId)
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id?.toString()) {
        this.licenciaTipo = element.TipoLicencia;
        this.elExpediente.TipoLicencia = element.TipoLicencia;
      }

    }
  }

  getElTipoLicenciaCulpable(event:any) {
    this.elTipoLicenciaId = event.target.value;

    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id?.toString()) {
        this.licenciaTipo = element.TipoLicencia;
      }

    }
  }

  getElTipoGenero(event:any) {
    this.elTipoGenero = event.target.value;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
    } else if (this.elTipoGenero == 2) {
      this.inicialGenero = "F";
    }
  }

  definirGenero(event:any) {
    this.generoConductor = event.target.value;
    this.dataProcess.Sexo = event.target.value;
    this.dataProcess['Sexo'] = parseInt(event.target.value);
  }

  identificarPais() {
    this.obtenerTipoConductor();
    this.getTipoLicencia(3);
    let codigoPais = localStorage.getItem('codigoPais');
    /* Debug:Temporal
    if (codigoPais == "HN") {
      this.getTipoLicencia(3);  
    }else{
      this.getTipoLicencia(4);
    }
    */
  }

  async getTipoLicencia(paisIdentidad:any) {
    //const load = await this.loading.create();
    //await  load.present();
    this.isLoading = true;
    this.api.TipoDeLicencia(paisIdentidad).pipe(
      finalize(async () => {
        //        await load.dismiss();
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.tipoLicencia = res;
      },
      async (res) => {
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        await alert.present();
      }
    )
  }

  async getTipoVehiculo(paisIdentidad:any) {
    //const load = await this.loading.create();
    //await  load.present();
    this.isLoading = true;
    this.api.TipoDeVehiculo(paisIdentidad).pipe(
      finalize(async () => {
        //        await load.dismiss();
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.tipoVehiculo = res;
      },
      async (res) => {
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        await alert.present();
      }
    )
  }

  async getTalleres() {
    this.api.ListTalleres().pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.talleres = res;
      },
      async (res) => {
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        await alert.present();
      }
    )
  }

  obtenerTipoConductor() {
    //alert('Okay')
    this.api.ListTipoConductor().pipe(

      finalize(async () => {
        console.log('Aqui se termina la carga de tipos de conductor')
      })
    ).subscribe(
      async (res) => {
        
        this.tipoConductor = res;
        this.seTipoConductor(this.daTipoConductor, 1);

        console.log('Aqui obtengo los tipos de conductor');
        console.dir(res);
      },
      async (res) => {
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error.Message,
          buttons: ['Ok']
        });
        await alert.present();
      }
    )
  }

  setFirstSegment() {
    // copiamos el tipo de conductor desde el cache
    this.daType = this.daTipoConductor;

    let daFirstSegmentsContainer = document.getElementsByClassName('segment-icon');
    let daFirstTitleContainer = document.getElementsByClassName('segment-title');
    let daFirstSegmentsButton = document.getElementsByClassName('segment-item');

    this.setSegment('segmentCoordinates', 0, false);

    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      clearInterval(this.firstInterval);
      daFirstSegmentsButton[0].setAttribute('style', 'border:1px solid #0058CB');
      daFirstSegmentsContainer[0].setAttribute('style', 'color:#0058CB');
      daFirstTitleContainer[0].setAttribute('style', 'color:#0058CB;margin-left: 9px');
    }
  }

  closeClientForm() {
    this.clientFormOpen = false;
    this.menuController.close('cliente-form-menu');
  }

  setSegment(segmentInput:any, indexInput:any, openForm: boolean = true) {

    setTimeout(() => {
      let losIconos = document.getElementsByTagName('ion-select');
      //let elIcono = $('ion-select').eq(0).attr('style', 'color:red');
      //console.dir(elIcono)
      //alert(losIconos.length)
    }, 1300);
    
    //alert(segmentInput)

    //alert(this.elResponsableTipo);

    //this.entraResponsable(this.elResponsableTipo);

    if (segmentInput == 'help-circle') {
      //alert('Tipo de conductor '+this.daType+', tpo de responsable '+this.elResponsableTipo);

//alert('Ji vooo')
/*
      if (this.daType == 1) {
        if (this.elResponsableTipo == 1 || this.elResponsableTipo == 2) {
          this.setNombreAtribuye(this.laExpediente[0].Cliente);
        }else{
          this.setNombreAtribuye(this.laExpediente[0].NombreAtribuyeAccidente);
        }
      }else{
        if (this.elResponsableTipo == 1) {
          this.setNombreAtribuye(this.laExpediente[0].Cliente);
        }
    
        if (this.elResponsableTipo == 2) {
          this.setNombreAtribuye(this.daNombreConductor);
        }
    
        if (this.elResponsableTipo == 3) {
          this.setNombreAtribuye(this.laExpediente[0].NombreAtribuyeAccidente);
        }  
      }
      */
      
    }
    
    
    this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');

    this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
    this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
    this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
    this.restoreConductorIdentityFromCache();
    this.restoreRelatedInfoDescriptionsFromCache();
    
    

    

    let daSegmentsContainer = document.getElementsByClassName('segment-icon');
    let daTitleContainer = document.getElementsByClassName('segment-title');
    let daSegmentsButton = document.getElementsByClassName('segment-item');
    this.daSegment = segmentInput;
    let daIndex = indexInput;
    this.segmentoTitulo = segments[daIndex]?.titulo || 'Formulario del cliente';

    
    if (this.daSegment == 'ribbon') {
      $('#validateButton').fadeIn();
    }else{
      $('#validateButton').fadeOut();
    }

    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      const title = daTitleContainer[index];
      const segmentId = segments[index].idSegmento;
      
      if (daIndex == index) {
        $("#"+segmentId).fadeIn('xslow');
        daSegmentsButton[index].setAttribute('style', 'border:1px solid #0058CB');
        element.setAttribute('style', 'color:#0058CB');
        title.setAttribute('style', 'color:#0058CB;margin-left: 9px');
        
        if (this.cantidadNulos == undefined) {
          //alert('Hey vooo!??')
        }else{
          //alert(this.cantidadNulos);
          if (segmentId != 'segmentSignature') {
            $('#dataNull').fadeOut();
          }else{
            $('#dataNull').fadeIn('xslow');
            //$('#segmentSignature').fadeOut();
          }
        }

      } else {
        $("#"+segmentId).fadeOut();
        daSegmentsButton[index].setAttribute('style', 'border:none');
        element.setAttribute('style', 'color:#7da1c4');
        title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
      }
    }

    if (openForm) {
      this.clientFormOpen = true;
    }
  }

  entraDireccionConductor(event:any){
    this.dataProcess['DireccionConductor'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionConductor', event.target.value);
  }


  setDireccionConductor(direccion:any){
    this.dataProcess['DireccionConductor'] = direccion;
    localStorage.setItem('dataProcess-DireccionConductor', direccion);
  }

  entraDireccionConductorCorrespondencia(event:any){
    this.dataProcess['DireccionEnvioCorrespondencia'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', event.target.value);
  }

  setDireccionConductorCorrespondencia(direccion:any){
    this.dataProcess['DireccionEnvioCorrespondencia'] = direccion;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', direccion);
  }

  validar(){
    
  }


  randomize(min:any, max:any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);//.toFixed(2);
  }

  signatureDisplay() {
    $('#segmentSignature').fadeIn();
  }

  // ENVIO
  validarDatos(){
    this.validacionCompleta = false;
    $('#dataNull').fadeIn('xslow');
    //$('#segmentSignature').fadeOut();

    const tipoConductorActual = parseInt(
      this.dataProcess?.RefTipoConductorId
      || this.dataProcess?.['RefTipoConductorId']
      || this.daType
      || this.daTipoConductor
      || this.laExpediente?.[0]?.ConducidoPor
    );

    this.daType = tipoConductorActual;
    this.daTipoConductor = tipoConductorActual;
    this.conductorEsAfiliado = tipoConductorActual === 1;

    if (tipoConductorActual === 1) {
      this.syncConductorFromPropietario();
    }

    if (this.daCelularConductor == null || this.daCelularConductor == undefined || this.daCelularConductor == 0 || isNaN(this.daCelularConductor) || this.daCelularConductor == ''  ){
      this.daCelularConductor = this.laExpediente[0].TelefonoOrigen;
    }

    if(this.conductorEsAfiliado == true){
      this.daTelefonoFijoConductor = this.laExpediente[0].TelefonoOrigen;
    }else{
      let telefonoFijo:any = localStorage.getItem('dataProcess-TelefonoConductor');
      this.daTelefonoFijoConductor = parseInt(telefonoFijo);
    }
    //this.daTelefonoFijoConductor = localStorage
    //alert(this.daTelefonoFijoConductor)

    this.validaNulos = [];
    this.clienteFiltro = [];
    this.nullsIndex = [];
    //console.log(this.requiredD.length)
    let elnombre:any; let laEtiqueta:any; let elValorDP:any; let indexSeg:any; let inputIndex:any;

      if (this.daSegment == 'ribbon') {
      $('#validateButton').fadeIn();
    }else{
      $('#validateButton').fadeOut();
    }
          
    console.log('Filtro de cliente:'); console.dir(requiredDataCliente);
    console.log('DataProcess : '); console.dir(this.dataProcess);

    const clienteValidationData = {
      ...this.dataProcess,
      CelularConductor: this.dataProcess['CelularConductor'] || this.daCelularConductor,
      TelefonoConductor: this.daTelefonoFijoConductor
    };

    const vigenciaNormalizada = normalizeLicenseExpirationDate(
      clienteValidationData.Vigencia || localStorage.getItem('dataProcess-Vigencia')
    );
    if (vigenciaNormalizada && vigenciaNormalizada.storageValue >= this.licenseExpirationMin) {
      clienteValidationData.Vigencia = vigenciaNormalizada.isoValue;
      this.applyVigenciaFromRaw(vigenciaNormalizada.storageValue);
    } else {
      delete clienteValidationData.Vigencia;
      this.isVence = false;
      this.vigenciaErrorMessage = vigenciaNormalizada
        ? 'La fecha de vencimiento no puede ser anterior a hoy.'
        : 'La fecha de vencimiento es obligatoria. Selecciona una fecha válida desde el calendario (hoy o posterior).';
    }

    const validationResult = validateClaimStage(clienteValidationData, clienteScreenValidationRules);
    const missingFields = new Set(validationResult.missing.map((item) => item.field));

    

    for (let indexDP = 0; indexDP < requiredDataCliente.length; indexDP++) {
      const elementCLiente = requiredDataCliente[indexDP];
      elnombre = elementCLiente.nombre;
      laEtiqueta = elementCLiente.etiqueta;
      indexSeg = elementCLiente.segmentIndex;
      elValorDP = missingFields.has(elnombre) ? undefined : validationResult.data[elnombre];
      inputIndex = elementCLiente.inputIndex;

      
      if (indexDP == 12) {
        let conductorIdentidad:any = this.validaIdentidadConductor(this.daType, this.identidadDelCliente, this.daIdentidadConductor);

      }
      

      if (elnombre == 'CelularConductor') {
        console.log('Validando datos... celular conductor : '+this.daCelularConductor+', telefono fijo conductor : '+this.daTelefonoFijoConductor+', celular en variable : '+this.dataProcess['CelularConductor']);
        console.log('Validando : '+elnombre+', valor : '+elValorDP+', etiqueta : '+laEtiqueta+', segmento : '+indexSeg+', inputIndex : '+inputIndex);

        if (elValorDP == '' || elValorDP == null || elValorDP == undefined) {
          //this.dataProcess['CelularConductor'] = this.daCelularConductor;
          this.validaNulos.push({etiqueta: laEtiqueta, valor:this.daCelularConductor, indexSegmento: indexSeg, inputIndex:inputIndex});
        }
      }else{
        this.validaNulos.push({etiqueta: laEtiqueta, valor:elValorDP, indexSegmento: indexSeg, inputIndex:inputIndex});
      }

      
    }

    setTimeout(() => {
      const contenedor = document.getElementsByClassName('nulo-item');
      for (let index = 0; index < contenedor.length; index++) {
        const elemento = contenedor[index].textContent;
        let evalor = missingFields.has(requiredDataCliente[index]?.nombre);
        if (evalor == true) {
          this.nullsIndex.push(index);
          $('.nulo-item').eq(index).attr('style', 'color:red; font-weight: bold;');
        }else{
          $('.nulo-item').eq(index).attr('style', 'color:gray; font-weight: bold;');
        }
        /**/

        if (index == (contenedor.length-1)) {
          //alert(this.nullsIndex.length)
          if (this.nullsIndex.length == 0) {
            $('#validateButton').fadeOut();
            $('#saveDataButton').fadeIn();
            $('#validateAgainButton').fadeIn();
            $('#cancelaButton').fadeIn();
            this.progress = 1;
            clearInterval(this.progInterval);
            this.validacionCompleta = true;
            this.textoInfo = 'Datos completados con éxito! Ahora puedes proceder a enviarlos haciendo click en GUARDAR DATOS';
            $('#spanProgress').removeClass('progress');
            $('#spanProgress').addClass('progress-end');
          } else {
            this.validacionCompleta = false;
            this.textoInfo = 'Validación completada. Revisa los datos incompletos para continuar.';
          }
        }
      }
    }, 900);

    this.progInterval = setInterval(() => {
      if (this.nullsIndex.length == 0) {
        this.progress = 1;
        clearInterval(this.progInterval);
      }else{
        this.progress += 0.01;
        if (this.progress > 1) {
          setTimeout(() => {}, 1000);
        }
      }
      
    }, 50);
  }

  GuardarDatos() {
    //alert('Tipo de conductor al guardar datos : '+this.daType+', Tipo de responsable : '+this.elResponsableTipo+', Nombre conductor : '+this.daNombreConductor+', celular conductor : '+this.daCelularConductor+', telefono fijo conductor : '+this.daTelefonoFijoConductor+', celular en variable : '+this.dataProcess['CelularConductor']+', validacion : '+this.conductorEsAfiliado)+', identidad conductor : '+this.daIdentidadConductor;
    //alert('Guardando datos... celular conductor : '+this.daCelularConductor+', telefono fijo conductor : '+this.daTelefonoFijoConductor+', celular en variable : '+this.dataProcess['CelularConductor']);

    if (this.dataProcess['CelularConductor'] == '' || this.dataProcess['CelularConductor'] == null || this.dataProcess['CelularConductor'] == undefined) {
      this.dataProcess['CelularConductor'] = this.daCelularConductor;
    }

    const expedienteActual = this.laExpediente?.[0] || this.elExpediente || {};
    const latitudExpediente = normalizeCoordinate(this.clienteLatitud) || normalizeCoordinate(expedienteActual?.LatitudCliente);
    const longitudExpediente = normalizeCoordinate(this.clienteLongitud) || normalizeCoordinate(expedienteActual?.LongitudCliente);
    const coordenadasSiniestro = resolveClaimCoordinates({
      ...expedienteActual,
      LatitudCliente: latitudExpediente,
      LongitudCliente: longitudExpediente
    }, this.idAtencion);
    const latitudCliente = coordenadasSiniestro.Latitud;
    const longitudCliente = coordenadasSiniestro.Longitud;
    if (latitudCliente) {
      this.dataProcess['Latitud'] = latitudCliente;
      localStorage.setItem('dataProcess-Latitud', latitudCliente);
    } else {
      this.dataProcess['Latitud'] = '';
      localStorage.removeItem('dataProcess-Latitud');
    }
    if (longitudCliente) {
      this.dataProcess['Longitud'] = longitudCliente;
      localStorage.setItem('dataProcess-Longitud', longitudCliente);
    } else {
      this.dataProcess['Longitud'] = '';
      localStorage.removeItem('dataProcess-Longitud');
    }

    //alert('Latitud : '+this.laLatitud+', Longitud : '+this.laLongitud)

    if (this.elExpediente.UtilizoSerivicioAsistencia == 1) {
      this.dataProcess.PorqueNoUsoServicioAsistencia = 'N/A';
      this.dataProcess['PorqueNoUsoServicioAsistencia'] = 'N/A';
    }

    if (this.esTercerosHeridos == 2 || this.esTercerosHeridos == '2') {
      this.dataProcess['DescripcionTercerosHeridos'] = 'No hubieron heridos';
    }

        if (this.esTercerosMuertos == 2 || this.esTercerosMuertos == '2') {
      this.dataProcess['DescripcionTercerosMuertos'] = 'No hubieron fallecidos';
    }
    
    setTimeout(() => {
      if((this.firmaPrecargada != emptySignature) && (this.firmaPrecargada!=emptySignatureWhite)){
                this.isLoading = false;

                this.toaster.presentToastNoButtons('Registro Creado Con Exito!', 'middle', 'siniestro');

                $('#signButton').fadeOut('slow');
                $('#goSignButton').fadeOut('slow');
                $('#saveButton').fadeOut('slow');
                $('#camButton').fadeOut('slow');
                $('#footerSignButton').fadeOut('slow');

                $("#successLabel").fadeIn('slow');
                $("#buttonGoAjuste").fadeIn('slow');

                if (this.daType != 1) {
                  //alert('No soy el asegurado');
                  //this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
                  //this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
                }

                
                if (this.daType == 1) {
                  //alert('Soy el asegurado y mi identidad es : '+this.identidadDelCliente+', o es '+this.daIdentidadConductor+', valor que se asignara : '+conductorIdentidad);
                  //this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
                  //this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
                }

                 console.log('dataProcess is');
                 console.dir(this.dataProcess);
                
              
              this.api.GuardarCacheCliente(this.dataProcess).pipe( 
                finalize(async ()=>{
                  //alert('Finalice')
                  this.isLoading = false;
                  this.isComplete = true;
                })
              ).subscribe(
                async (res) =>{
                console.log(res);
                $('#signButton').fadeOut('slow');
                $('#goSignButton').fadeOut('slow');
                $('#saveButton').fadeOut('slow');
                $('#camButton').fadeOut('slow');
                $('#footerSignButton').fadeOut('slow');
                $('#saveDataButton').fadeOut();
                $('#validateAgainButton').fadeOut();
                $('#cancelaButton').fadeOut();
                $("#successLabel").fadeIn('slow');
                $("#buttonGoAjuste").fadeIn('slow');

                this.copmleteByCase.push({
                  idAtencion: this.idAtencion, esCompleto: true
                })
                localStorage.setItem('esCompleto', JSON.stringify(this.copmleteByCase));


               let completeArray:any = localStorage.getItem('esCompleto');
                this.clientCompleteArray = JSON.parse(completeArray);
                if (this.clientCompleteArray) {
                  
                  if (this.clientCompleteArray.includes(this.atencionId)) {
                  }
                }else{
                  this.clientCompleteArray = [];
                  this.clientCompleteArray.push(this.atencionId);
                localStorage.setItem('clientCompleteArray', this.clientCompleteArray);
                }

                },
                async (error) => {
                  this.toaster.presentToast(error.error.Message, 'top', 'solicitante');
                }
              )
              
                /**/
              }else{
                this.toaster.presentToastNoButtonsRed('Se debe firmar para guardar los datos.', 'top', 'firma-siniestro');
              }
            }, 300);
    
  }

  validaIdentidadConductor(daType: any, identidadDelCliente: any, daIdentidadConductor: any): any {
    const tipoConductor = parseInt(daType);
    const identidadCliente = this.cleanStorageLikeValue(identidadDelCliente);
    const identidadConductor = this.cleanStorageLikeValue(daIdentidadConductor);
    const identidadFinal = tipoConductor === 1 ? (identidadCliente || identidadConductor) : identidadConductor;

    if (!identidadFinal) {
      this.toaster.presentToastNoButtonsRed('La identidad del conductor no puede ser nula o vacía. Por favor, ingresa una identidad válida.', 'top', 'identidad-conductor');
      this.validaNulos.push({etiqueta: 'Identidad del conductor', valor: identidadFinal, indexSegmento: 3, inputIndex: 12});
      return identidadFinal;
    }

    this.setIdentidadConductor(identidadFinal);
    return identidadFinal;
  }

  private cleanStorageLikeValue(value: any): string {
    const normalizedValue = (value ?? '').toString().trim();
    return normalizedValue && normalizedValue !== 'undefined' && normalizedValue !== 'null' ? normalizedValue : '';
  }

  setTipoSolicitante(event:any) {
    this.elTipoSolicitante = event.target.value;
    //('Tipo solicitante '+this.elTipoSolicitante);

    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  }

  entraNombreAsegurado(event:any) {
    this.elExpediente.Cliente = event.target.value;
    this.laExpediente[0].Cliente = event.target.value;
    this.nombreCliente = event.target.value;
    localStorage.setItem('dataProcess-Nombre', event.target.value);
    this.dataProcess['Cliente'] = event.target.value;
    if (this.conductorEsAfiliado || this.daType == 1 || this.daTipoConductor == 1) {
      this.syncConductorFromPropietario();
    }
  }

  setNombreAsegurado(nombre:any) {
    this.elExpediente.Cliente = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('dataProcess-Nombre', nombre);
  }

  entraEntidadInvolucrada(event:any) {
    this.dataProcess.AutoridadInvolucrada = event.target.value;
    this.dataProcess['AutoridadInvolucrada'] = event.target.value;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', event.target.value);
    
  }

  setEntidadInvolucrada(autoridad:any) {
    this.dataProcess.AutoridadInvolucrada = autoridad;
    this.dataProcess['AutoridadInvolucrada'] = autoridad;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', autoridad);
    
  }

  

  entraTipoVehiculo(event:any){
    this.tipoDeVehiculo = event.target.value;
  }

  entraNombre(event:any) {
    this.elExpediente.Cliente = event.target.value;
  }

  entraIdentidadConductor(event:any) {
    const identidad = event?.target?.value ?? this.daIdentidadConductor ?? '';
    this.setIdentidadConductor(identidad);
  }

  entraIdentidadAsegurado(event:any) {
    const identidad = event?.target?.value ?? this.identidadAsegurado ?? '';
    this.identidadAsegurado = identidad;
    localStorage.setItem('identidadAsegurado', identidad);

    if (this.conductorEsAfiliado || this.daType == 1) {
      this.setIdentidadConductor(identidad);
    }
  }

  setIdentidadConductor(identidad:any) {
    if (identidad === null || identidad === undefined) {
      return;
    }

    const normalizedIdentidad = String(identidad).trim();
    if (!normalizedIdentidad || normalizedIdentidad === 'undefined' || normalizedIdentidad === 'null') {
      return;
    }

    console.log('la identidad '+ normalizedIdentidad)
    this.identidad = normalizedIdentidad;
    this.daIdentidadConductor = normalizedIdentidad;
    this.elExpediente.IdentidadConductor = normalizedIdentidad;
    if (this.laExpediente?.[0]) {
      this.laExpediente[0].IdentidaConductor = normalizedIdentidad;
    }
    this.dataProcess.IdentidaConductor = normalizedIdentidad;
    this.dataProcess['IdentidaConductor'] = normalizedIdentidad;
    localStorage.setItem('dataProcess-IdentidaConductor', normalizedIdentidad);
  }

  private readCachedStorageValue(key: string): string {
    const value = localStorage.getItem(key);
    if (!value || value === 'undefined' || value === 'null') {
      return '';
    }
    return value;
  }

  restoreConductorIdentityFromCache(): void {
    const cachedIdentidad = this.readCachedStorageValue('dataProcess-IdentidaConductor')
      || this.readCachedStorageValue('identidadAsegurado')
      || (this.identidadDelCliente ? String(this.identidadDelCliente).trim() : '');

    if (!cachedIdentidad) {
      return;
    }

    this.setIdentidadConductor(cachedIdentidad);
  }

  restoreRelatedInfoDescriptionsFromCache(): void {
    const descripcionHeridos = this.readCachedStorageValue('dataProcess-DescripcionTercerosHeridos');
    const descripcionMuertos = this.readCachedStorageValue('dataProcess-DescripcionTercerosMuertos');

    if (descripcionHeridos) {
      this.dataProcess['DescripcionTercerosHeridos'] = descripcionHeridos;
      if (this.laExpediente?.[0]) {
        this.laExpediente[0].DescripcionTercerosHeridos = descripcionHeridos;
      }
      if (this.elExpediente) {
        this.elExpediente.DescripcionTercerosHeridos = descripcionHeridos;
      }
    }

    if (descripcionMuertos) {
      this.dataProcess['DescripcionTercerosMuertos'] = descripcionMuertos;
      if (this.laExpediente?.[0]) {
        this.laExpediente[0].DescripcionTercerosMuertos = descripcionMuertos;
      }
      if (this.elExpediente) {
        this.elExpediente.DescripcionTercerosMuertos = descripcionMuertos;
      }
    }
  }

  entraPolizaConductor(event:any) {
    this.cliente.Poliza = event.target.value;
    localStorage.setItem('dataProcess-Poliza', event.target.value);
  }

  setPolizaConductor(poliza:any) {
    this.cliente.Poliza = poliza;
    localStorage.setItem('dataProcess-Poliza', poliza);
  }

  entraCorreoCorrespondencia(event:any) {
    this.cliente.CorreoCorrespondencia = event.target.value;
  }

  entraDireccionCliente(event:any) {
    this.cliente.Direccion = event.target.value;
    this.dataProcess.Lugar = event.target.value;
    this.dataProcess['Lugar'] = event.target.value;
  }

  entraNombreAtribuye(event:any) {
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
    this.elExpediente.NombreAtribuyeAccidente = event.target.value;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', event.target.value);
  }

  setNombreAtribuye(nombre:any) {
    this.dataProcess.NombreAtribuyeAccidente = nombre;
    this.dataProcess['NombreAtribuyeAccidente'] = nombre;
    this.elExpediente.NombreAtribuyeAccidente = nombre;
    this.laExpediente[0].NombreAtribuyeAccidente = nombre;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', nombre);
  }

  entraTelefonoAsegurado(event:any) {
    console.log('Teléfono del asegurado '+event.target.value);
    this.cliente.TelefonFijo = event.target.value;
    localStorage.setItem('dataProcess-TelefonoAsegurado', event.target.value);
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.TelefonFijo = event.target.value;
      this.dataProcess.TelefonoConductor  = event.target.value;
      this.dataProcess['TelefonoConductor'] = event.target.value;
      localStorage.setItem('dataProcess-TelefonoConductor', event.target.value);
    }else{
      if (this.daTelefonoFijoConductor) {
        console.log(this.daTelefonoFijoConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-TelefonoConductor', this.daTelefonoFijoConductor.toString());
      this.elExpediente.IdentidadConductor = this.daTelefonoFijoConductor;
      this.dataProcess['IdentidaConductor'] = this.daTelefonoFijoConductor;
      }
    }
    */
  }

  entraTelefonoConductor(event:any) {
    //alert('Mjm')
    console.log('Celular del conductor '+event.target.value);
    console.log('Teléfono del conductor '+this.cliente.TelefonFijo);

    localStorage.setItem('dataProcess-TelefonoConductor', event.target.value);
    this.dataProcess.TelefonoConductor  = event.target.value;
    this.dataProcess['TelefonoConductor'] = event.target.value;
    this.laExpediente[0].TelefonoConductor = event.target.value;
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.TelefonFijo = event.target.value;
      this.dataProcess.TelefonoConductor  = event.target.value;
      this.dataProcess['TelefonoConductor'] = event.target.value;
      localStorage.setItem('dataProcess-TelefonoAsegurado', event.target.value);
    }else{
      if (this.daTelefonoFijoConductor) {
        console.log(this.daTelefonoFijoConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-TelefonoConductor', this.daTelefonoFijoConductor.toString());
      this.elExpediente.IdentidadConductor = this.daTelefonoFijoConductor;
      this.dataProcess['IdentidaConductor'] = this.daTelefonoFijoConductor;
      }
      
    }
*/
    
  }

  seTelefonoConductor(tel:any) {
    //alert('telefono afiliado es conductor '+tel)

    this.cliente.TelefonFijo = tel;
    this.dataProcess.TelefonoConductor  = tel;
    this.dataProcess['TelefonoConductor'] = tel;
    localStorage.setItem('dataProcess-TelefonoConductor', tel);
    this.laExpediente[0].TelefonoConductor = tel;
  }

  entraCelularAsegurado(event:any) {
    this.cliente.Celular = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.Celular = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
    this.dataProcess['CelularConductor'] = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    }else{
      if (this.daCelularConductor) {
        console.log(this.daCelularConductor);
        console.log('soy el conductor');
        localStorage.setItem('dataProcess-CelularConductor', this.daCelularConductor.toString());
        this.elExpediente.IdentidadConductor = this.daCelularConductor;
        this.dataProcess['IdentidaConductor'] = this.daCelularConductor;  
      }
      
    }

    */
    
  }

  entraCelularConductor(event:any) {
    localStorage.setItem('dataProcess-CelularConductor', event.target.value);
    this.dataProcess['CelularConductor'] = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
//    this.laExpediente[0].CelularConductor = event.target.value;
    /*
    if (this.daType == 1) {
      console.log('soy el asegurado');
      this.cliente.Celular = event.target.value;
    this.dataProcess.CelularConductor = event.target.value;
    this.dataProcess['CelularConductor'] = event.target.value;
    localStorage.setItem('dataProcess-CelularAsegurado', event.target.value);
    }else{
      if (this.daCelularConductor) {
        console.log(this.daCelularConductor);
        console.log('soy el conductor');
        localStorage.setItem('dataProcess-CelularConductor', this.daCelularConductor.toString());
        this.elExpediente.IdentidadConductor = this.daCelularConductor;
        this.dataProcess['IdentidaConductor'] = this.daCelularConductor;  
      }
      
    }
    */
  }

  setCelularConductor(cel:any) {
    this.cliente.Celular = cel;
    this.cliente[0].Celular = cel;
    this.dataProcess.CelularConductor = cel;
    this.dataProcess['CelularConductor'] = cel;
    localStorage.setItem('dataProcess-CelularConductor', cel);
  }

  entraCorreoConductor(event:any) {
    console.log(event.target.value)
    this.cliente.CorreoElectronico = event.target.value;
    this.dataProcess.CorreoElectronico = event.target.value;
    this.dataProcess['CorreoElectronico'] = event.target.value;
    localStorage.setItem('dataProcess-CorreoElectronico', event.target.value);
  }

  setCorreoConductor(correo:any) {
    console.log(correo)
    this.cliente.CorreoElectronico = correo;
    this.dataProcess.CorreoElectronico = correo;
    this.dataProcess['CorreoElectronico'] = correo;
    localStorage.setItem('dataProcess-CorreoElectronico', correo);
  }

  entraDireccion(event:any) {
    this.cliente.DireccionSiniestro = event.target.value;
    //localStorage.setItem('dataProcess-DireccionSiniestro', event.target.value);
  }

  setDireccion(direccion:any) {
    this.cliente.DireccionSiniestro = direccion;
    //localStorage.setItem('dataProcess-DireccionSiniestro', direccion);
  }

  entraLicencia(event:any) {
    this.elExpediente.LicenciaNo = event.target.value;
    this.dataProcess.Licencia = event.target.value;
    this.dataProcess['Licencia'] = event.target.value;
    localStorage.setItem('dataProcess-Licencia', event.target.value);
  }

  setLicencia(licenciaNum:any) {
    this.elExpediente.LicenciaNo = licenciaNum;
    this.dataProcess.Licencia = licenciaNum;
    this.dataProcess['Licencia'] = licenciaNum;
    localStorage.setItem('dataProcess-Licencia', licenciaNum);
  }

  esBlindado(event:any) {
    console.dir(event)
    this.dataProcess.Blindado = parseInt(event);
    this.dataProcess['Blindado'] = parseInt(event);
    //$("input[type='radio'][value="+this.dataProcess.Blindado+"]").attr("checked",'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', event);
  }

  setBlindado(blinda:any) {
    this.dataProcess.Blindado = parseInt(blinda);
    this.dataProcess['Blindado'] = parseInt(blinda);
    $("input[type='radio'][value="+this.dataProcess.Blindado+"]").attr("checked",'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', blinda);
  }

  marcarFechaSiniestro(laFechaSiniestrox:any) {
    this.elExpediente.FechaHoraAccidente = laFechaSiniestrox;//.target.value;
    this.formateadaSiniestro = this.formateador.formatearFechaSiniestro(laFechaSiniestrox);//.target.value);
    this.formateada = this.formateador.formatearFechaSiniestro(laFechaSiniestrox);//.target.value);
    this.mydate = laFechaSiniestrox;//.target.value;
  }

  marcarFechaNacimiento(laFechaNacimiento:any) {
    console.log('La fecha de nacimiento '+laFechaNacimiento.detail.value);
    this.dataProcess['FechaNacimientoConductor'] = laFechaNacimiento.detail.value;
    this.elExpediente.FechaNacimientoConductor = laFechaNacimiento.detail.value.toString();
    localStorage.setItem('dataProcess-FechaNacimientoConductor', laFechaNacimiento.detail.value);
    this.fechaNacimiento = laFechaNacimiento.detail.value;
    let dAnio = this.elExpediente.FechaNacimientoConductor.toString().substring(0, 4);
    this.formateadaNacimiento = this.elExpediente.FechaNacimientoConductor.split('T')[0];//this.formateador.formatearFechaNacimiento(laFechaNacimiento.detail.value);
    console.log(laFechaNacimiento)
    console.log(dAnio)
    this.edad = this.calcularEdad(laFechaNacimiento.detail.value);
    //alert(this.edad)
    if (this.edad < 18) {
      this.esMenor = true;
      this.toaster.presentToastNoButtonsRed('Edad seleccionada : '+this.edad+'. El conductor es un menor de edad.', 'top', 'danger')
    }else{
      this.esMenor = false;
    }
  }

  onIonInfinite(ev:any) {
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    }

  setFechaNacimiento(laFecha:any) {
    console.log('La fecha de nacimiento '+laFecha);
    this.dataProcess['FechaNacimientoConductor'] = laFecha;
    this.elExpediente.FechaNacimientoConductor = laFecha.toString();
    localStorage.setItem('dataProcess-FechaNacimientoConductor', laFecha);
    this.fechaNacimiento = laFecha;
    this.formateadaNacimiento = this.elExpediente.FechaNacimientoConductor.split('T')[0];//his.formateador.formatearFechaNacimiento(laFecha);

    this.edad = this.calcularEdad(laFecha);
    this.esMenor = this.edad < 18;
  }

  calcularEdad(fecha:any){
    const fechaTexto = fecha?.toString().split('T')[0];
    const partes = fechaTexto?.split('-').map(Number);

    if (!partes || partes.length !== 3 || partes.some((parte) => Number.isNaN(parte))) {
      return 0;
    }

    const [anio, mes, dia] = partes;
    const hoy = new Date();
    let laEdad = hoy.getFullYear() - anio;
    const aunNoCumple = hoy.getMonth() + 1 < mes ||
      (hoy.getMonth() + 1 === mes && hoy.getDate() < dia);

    if (aunNoCumple) {
      laEdad--;
    }

    localStorage.setItem('dataProcess-Edad', laEdad.toString());
    this.dataProcess['Edad'] = laEdad;
    return laEdad;
  }

  goESignature() {
    this.isEditSig = true;
    const attentionId = this.idAtencion || localStorage.getItem('idAtencion') || localStorage.getItem('atencionEnProceso');
    if (attentionId) {
      localStorage.setItem('idAtencion', attentionId.toString());
    }
    localStorage.setItem('elCliente', this.cliente?.NombreCliente || this.cliente?.NombreConductor || localStorage.getItem('elCliente') || '');
    localStorage.setItem('signatureReturnTo', '/clientehn');
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    this.router.navigate(['./esignature'], { state: { idAtencion: attentionId } });
  }

  goPrepare(idAtencion:any){
    const navigateExtras: NavigationExtras = 
    {
      state:{
        data: [
          {'forma': this.expediente},
          {'idAtencion': idAtencion}
        ]
      }
    }
    this.router.navigate(['./prepare-send'], navigateExtras);
  }

  goPrepareAudience(idAtencion:any){
    const navigateExtras: NavigationExtras = 
    {
      state:{
        data: [
          {'forma': this.expediente},
          {
            idAtencion,
            idAjusteAudiencia: this.expediente?.[0]?.IdAjusteAudiencia
          }
        ]
      }
    }
    this.router.navigate(['./prepare-audience'], navigateExtras);
  }

  utilizacionAsistencia(event:any) {
    console.log(event.detail.value+', '+event.target.value)
    let choiceValue = event.detail.value;

    if (choiceValue == 2) {
      //localStorage.setItem('dataProcess-NombreConductor', '');
      this.alertPrepare();
    }

    if (choiceValue == 1) {
      this.esAudiencia = false;
    }

    this.elExpediente.UtilizoSerivicioAsistencia = event.detail.value;
    this.cliente.UtilizoSerivicioAsistencia = event.target.value;

    this.dataProcess.AseguradoUsoPoliza = parseInt(event.target.value);
    this.dataProcess['AseguradoUsoPoliza'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AseguradoUsoPoliza', event.target.value);
  }

  setUtilizacionAsistencia(uso:any) {
    
    if (uso == 2) {
      //localStorage.setItem('dataProcess-NombreConductor', '');
      this.goPrepare(this.idAtencion);
    }else{
      this.cliente.UtilizoSerivicioAsistencia = uso;
      this.elExpediente.UtilizoSerivicioAsistencia = uso;
      $('#usoRadioGroup').val(uso).change();
      //$("input[type='radio'][value="+this.cliente.UtilizoSerivicioAsistencia+"]").attr("checked",'true').trigger("change");
      
      localStorage.setItem('dataProcess-AseguradoUsoPoliza', uso);
    }
    
  }

  entraPorqueNoUso(event:any) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = event.target.value;
    this.dataProcess['PorqueNoUsoServicioAsistencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', event.target.value);
  }

  setPorqueNoUso(porque:any) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = porque;
    this.cliente.PorqueNoUsoServicioAsistencia = porque;
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', porque);
  }

  

  pruebaAlcohol(event:any) {
    console.log('Alcohol '+parseInt(event.detail.value))

    this.elExpediente.PruebaAlcoholemia = parseInt(event.detail.value);
    this.dataProcess['PruebaAlcoholemia'] = parseInt(event.detail.value);
    localStorage.setItem('dataProcess-PruebaAlcoholemia', event.detail.value);
    
  }

  setPruebaAlcohol(prueba:any) {
    console.log('Alcohol '+parseInt(prueba))

    this.elExpediente.PruebaAlcoholemia = parseInt(prueba);
    $('#pruebaRadioGroup').val(prueba).change();
    localStorage.setItem('dataProcess-PruebaAlcoholemia', prueba);
    
  }

  

  agendoAudiencia(event:any){
    this.dataProcess.AgendarAudiencia = parseInt(event.detail.value);
    this.dataProcess['AgendarAudiencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AgendarAudiencia', event.target.value);
  }

  audiciona(event:any) {
    console.log(event.detail.value)
    let auId = parseInt(event.detail.value);

    if (auId == 1) {
      //this.alertPrepareAudience();
    }
    //alert(audiencia+1)
    this.dataProcess.AgendarAudiencia = auId;
    this.dataProcess['AgendarAudiencia'] = auId;
    localStorage.setItem('dataProcess-AgendarAudiencia', event.detail.value);
  }

  setAudiencia(audiencia:any){
    let auId = parseInt(audiencia);
    //alert(audiencia+1)
    this.dataProcess.AgendarAudiencia = auId;
    this.dataProcess['AgendarAudiencia'] = auId;
    localStorage.setItem('dataProcess-AgendarAudiencia', audiencia);
  }

  fueDetenido(event:any) {
    this.elExpediente.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess['VehiculoDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoDetenido', event.target.value);
  }

  

  

  fueDetenidoElConductor(event:any) {
    this.dataProcess.ConductorDetenido = parseInt(event.detail.value);
    this.dataProcess['ConductorDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-ConductorDetenido', event.target.value);
  }

  setDetenido(detenido:any) {
    this.elExpediente.VehiculoDetenido = detenido;
    this.dataProcess.VehiculoDetenido = detenido;
    localStorage.setItem('dataProcess-VehiculoDetenido', detenido);
  }

  setDetenidoElConductor(detenido:any) {
    this.dataProcess.ConductorDetenido = detenido;
    localStorage.setItem('dataProcess-ConductorDetenido', detenido);
  }

  fueVolcado(event:any){
    this.dataProcess.VehiculoVolcado = event.detail.value;
    this.dataProcess['VehiculoVolcado'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoVolcado', event.target.value);
  }

  setVolcado(volcado:any){
    this.dataProcess.VehiculoVolcado = volcado;
    this.dataProcess['VehiculoVolcado'] = volcado;
    localStorage.setItem('dataProcess-VehiculoVolcado', volcado);
  }

  cambiarPropietario(event:any) {
    if (event.target.value == 'on') {
      event.target.value = 'off';
      this.culpable.NombreDireccionPropietarioCulpable = '';
      this.elExpediente.DireccionPropietarioCulpable = '';
      this.culpableEsPropiertario = false;
    } else {
      event.target.value = 'on';
      this.culpableEsPropiertario = true;
      this.culpable.NombreDireccionPropietarioCulpable = this.culpable.NombreCulpable;
      this.elExpediente.DireccionPropietarioCulpable = this.culpable.DireccionCulpable;
    }
  }

  async alertPrepare() {
    const alert = await this.alert.create({
      cssClass: 'form-choice-alert no-policy-alert',
      header: 'Continuar sin póliza',
      subHeader: 'Atención #'+this.idAtencion,
      message: 'Se preparará el envío de esta atención sin utilizar la póliza. ¿Deseas continuar?',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'form-choice-cancel',
        handler: () => { this.setUtilizacionAsistencia(1) }
      } ,
      {
        text: 'Continuar',
        role: 'confirm',
        cssClass: 'form-choice-confirm',
        handler: () => { this.goPrepare(this.idAtencion) }
      }
      ]
    });
    alert.present();
  }

  async alertPrepareAudience() {
    const alert = await this.alert.create({
      header: 'HELP',
      message: 'Vamos a preparar los detalles de la audiencia para la atención '+this.idAtencion+'. Continuar?',
      buttons: [
      {
        text: 'CANCELAR',
        role: 'cancel',
        handler: () => { this.setAudiencia(1) }
      } ,
      {
        text: 'CONTINUAR',
        role: 'confirm',
        handler: () => { this.goPrepareAudience(this.idAtencion) }
      }
      ]
    });
    alert.present();
  }

  allowManualChasisInput(): boolean {
    if (this.interAutoManualChasisEntryActive) {
      return true;
    }

    if (this.chassisValidation?.applies) {
      return this.chassisValidation.enableManualChasis;
    }

    const chasis = normalizeVehicleIdentifier(this.laExpediente?.[0]?.Chasis);
    return !chasis;
  }

  allowManualMotorInput(): boolean {
    if (this.chassisValidation?.applies) {
      return this.chassisValidation.enableManualMotor;
    }

    return !normalizeVehicleIdentifier(this.laExpediente?.[0]?.Motor);
  }

  onVehicleIdentifierChange() {
    this.syncVehicleIdentifiersToExpediente();
    this.applyInterAutoChassisValidation(true);
    void this.persistInterAutoDraftIfNeeded();
  }

  private async initializeInterAutoVehicleFields(serverSource?: { Chasis?: unknown; Motor?: unknown; PolizaExterna?: unknown }) {
    const idAtencion = parseInt(this.idAtencion, 10);
    const expediente = this.laExpediente?.[0];
    if (!idAtencion || !expediente) {
      this.applyInterAutoChassisValidation();
      return;
    }

    if (serverSource) {
      await this.interAutoVehicleCache.captureServerSnapshot(idAtencion, serverSource);
    }

    const snapshot = await this.interAutoVehicleCache.loadServerSnapshot(idAtencion);
    const serverChasis = serverSource?.Chasis ?? snapshot?.chasis;
    this.interAutoManualChasisEntryActive = this.interAutoVehicleCache.shouldRecoverDraft(serverChasis);

    if (this.interAutoManualChasisEntryActive) {
      const draft = await this.interAutoVehicleCache.loadDraft(idAtencion);
      if (draft) {
        this.interAutoVehicleCache.applyDraftToExpediente(expediente, draft);
        if (this.elExpediente?.[0]) {
          this.interAutoVehicleCache.applyDraftToExpediente(this.elExpediente[0], draft);
        }
      }
    }

    this.applyInterAutoChassisValidation();
    void this.persistInterAutoDraftIfNeeded();
  }

  private async persistInterAutoDraftIfNeeded() {
    const idAtencion = parseInt(this.idAtencion, 10);
    const expediente = this.laExpediente?.[0];
    if (!idAtencion || !expediente || !this.chassisValidation?.applies) {
      return;
    }

    const snapshot = await this.interAutoVehicleCache.loadServerSnapshot(idAtencion);
    if (!this.interAutoVehicleCache.shouldRecoverDraft(snapshot?.chasis)) {
      return;
    }

    await this.interAutoVehicleCache.saveDraft(idAtencion, {
      chasis: expediente.Chasis,
      motor: expediente.Motor,
      poliza: expediente.PolizaExterna
    });
  }

  private applyInterAutoChassisValidation(preserveManualEntry = false) {
    const expediente = this.laExpediente?.[0];
    if (!expediente) {
      return;
    }

    const previousManualChasis = preserveManualEntry && this.chassisValidation?.enableManualChasis;
    const previousManualMotor = preserveManualEntry && this.chassisValidation?.enableManualMotor;

    const validation = evaluateInterAutoChassisValidation(
      buildInterAutoValidationInput(expediente)
    );

    if (validation.swappedValues || !preserveManualEntry) {
      expediente.Chasis = validation.chasis;
      expediente.Motor = validation.motor;
      if (this.elExpediente?.[0]) {
        this.elExpediente[0].Chasis = validation.chasis;
        this.elExpediente[0].Motor = validation.motor;
      }
    }

    if (validation.enableManualChasis) {
      this.interAutoManualChasisEntryActive = true;
    }

    if (preserveManualEntry || this.interAutoManualChasisEntryActive) {
      validation.enableManualChasis =
        this.interAutoManualChasisEntryActive ||
        previousManualChasis ||
        validation.enableManualChasis;
      validation.enableManualMotor = previousManualMotor || validation.enableManualMotor;
    }

    if (!validation.applies && this.interAutoManualChasisEntryActive) {
      this.chassisValidation = {
        applies: true,
        mode: 'valid',
        message: '',
        chasis: normalizeVehicleIdentifier(expediente.Chasis),
        motor: normalizeVehicleIdentifier(expediente.Motor),
        poliza: normalizeVehicleIdentifier(expediente.PolizaExterna),
        enableManualChasis: true,
        enableManualMotor: validation.enableManualMotor,
        enableManualPoliza: validation.enableManualPoliza,
        swappedValues: false
      };
      this.syncVehicleIdentifiersToExpediente();
      void this.persistInterAutoDraftIfNeeded();
      return;
    }

    if (!validation.applies) {
      this.chassisValidation = null;
      return;
    }

    this.chassisValidation = validation;
    this.syncVehicleIdentifiersToExpediente();
    void this.persistInterAutoDraftIfNeeded();
  }

  private syncVehicleIdentifiersToExpediente() {
    const expediente = this.laExpediente?.[0];
    if (!expediente) {
      return;
    }

    if (this.elExpediente?.[0]) {
      this.elExpediente[0].Chasis = expediente.Chasis;
      this.elExpediente[0].Motor = expediente.Motor;
    }

    this.dataProcess['ChasisVehiculo'] = expediente.Chasis;
    this.dataProcess['Motor'] = expediente.Motor;
    localStorage.setItem('datos-ChasisVehiculo', expediente.Chasis || '');
    localStorage.setItem('datos-Poliza', expediente.PolizaExterna || '');
    localStorage.setItem('dataProcess-ChasisVehiculo', expediente.Chasis || '');
    localStorage.setItem('dataProcess-Motor', expediente.Motor || '');
    localStorage.setItem('elExpediente', JSON.stringify(this.laExpediente));
  }

}
