import { element } from 'protractor';
import { emptySignature, emptySignatureWhite } from './../environments/signatures';
import { imagePrefix, banderaPais, fondos } from '../environments/default-images';
import { LocateService } from './../services/locate.service';
import { ApiService } from './../services/api.service';
import { ActionSheetController, AlertController, LoadingController, ToastController, ModalController, Platform} from '@ionic/angular';
import { Atenciones } from './../interfaces/atenciones';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { StorageService } from '../services/storage.service';
import { iconWorlds } from '../environments/mapas';
import { BehaviorSubject, Subscription} from 'rxjs';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { finalize } from 'rxjs/operators';
import { Network, ConnectionStatus } from '@capacitor/network';
import { ScreenlockService } from '../services/screenlock.service';
import { ToastService } from '../services/toast.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import SignaturePad from 'signature_pad';
import { FormBuilder, Validators } from '@angular/forms';
import { ClearWatchOptions, Geolocation, GeolocationPluginPermissions } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { tipofotos } from './../interfaces/formulario';
import { CountrydataService } from '../services/countrydata.service';
import { versionAndroid } from '../interfaces/variables';
import { DeviceService } from '../services/device.service';
import {
  AttentionBulkAttempt,
  AttentionBulkAttemptService
} from '../services/attention-bulk-attempt.service';

import * as $ from 'jquery';
import { datosAtencionKeys } from '../environments/predeterminados';
import { parse } from 'path';
import { NetworkInfo } from '../environments/network';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [FilterPipe],
})

export class Tab1Page implements OnInit, OnDestroy {
  readonly visibleAppointmentsCount = 3;
  private readonly activeAttentionsRefreshMs = 30000;
  private activeAttentionsRefreshTimer: ReturnType<typeof setInterval> | null = null;
  private activeAttentionsRequestInFlight = false;
  private platformPauseSub?: Subscription;
  private platformResumeSub?: Subscription;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  atenciones?: Atenciones[];public results = [];
  tipoFotos: tipofotos[]=[];canvasAseguradoWidth: any = 0;openFoto = false;foto:string='';cardWidth: any;canvasInterval: any;firma: any = []; idAtencion:any;
  hoy: any;firmaObtenida: any = [];tipoLicencia: any = [];lasFirmas: any = [];search: string = "";  elCliente: string = "";elServicio: string = "";
  elColorEstado: string = "";textoEmergente1: string = "";textoEmergente2: string = ""; androidVersion:any; canDismiss:boolean=false; updateIcon:any;
  firmaPrecargada: any;firmaPrecargadaAjustador: any;firmaDemo: any;firmaDemoAjustador: any = "";isSign: boolean = false;esAjustador: boolean = true;
  esClienteCompleto: boolean = false; esAjustadorCompleto: boolean = false;isLogout: boolean = false;address: any;laFecha: any;laImg: any;imagen:any;laImg2: any;laImg3: any;user: any = null;
  atIndex: any;atIndexId: any = 0;atIndexInit: any;laAtencion: any;firstInterval: any;geoInterval: any;email: any;isSignature: boolean = false;conexion?: ConnectionStatus;
  screenlock?: ScreenlockService;formBuilder?: FormBuilder;emptySignature:any = emptySignature;stripeForm: any;conectividad?: boolean;isLoading: boolean;laLocalidad: any;
  latitud: any;longitud: any;miLocalidad: any;miPais: any;miPaisNombre: any;paisId?: number;paisIdentidad: any;codigoPais: any = 'hn';banderaPais: string | undefined;
  imagePrefix: any = 'data:image/jpeg;base64,'; currentAccessToken: any; currentUser: any;notifications: any = [];presentingElement = null;notificationBadgeRight: any;
  notificationBadgeTop: any;geopermissions?:GeolocationPluginPermissions;filtroAtenciones:any=[];isSearch:boolean=false; iconWorld:any; iconIndex:any; isLoad:boolean=true;
  atencionLatitud:any;atencionLongitud:any;fHora:any;fFecha:any; openModal: boolean = false; clientCompleteArray:any=[]; bpmFicohsa:any; lasAtenciones:any=[];
  atencionesActivas:any=[]; readStatus:number; readStatusArray:any=[]; FechaSiniestro:any;

  //Firma
  @ViewChild("canvas2", { static: true }) canvas?: ElementRef;
  @ViewChild(RouterOutlet) outlet?: RouterOutlet;
  sig?: SignaturePad;
  wait: any;  dataSiniestro: any;  elExpediente: any;  datosDeAtencion: any;  firstSegmentId: any;
  dbVersion: any;  store: string | undefined;  atencionEnProcesoId: string | undefined;  idTabla: any;  ateIndex: string | undefined;
  indexAtencion?: number; isKeyboard: boolean = false; isCacheClear: boolean = false;
  private sessionRecoveryAlertOpen = false;

  emptySignatureWhite = emptySignatureWhite;
  conectividadStat: string | undefined;  estadoConexion: string | undefined;  estadoConexionGPS: string | undefined; 
  gpsOn: boolean = false;  isTablet: boolean = false; showLocationPrompt: boolean = false;
  bulkAttemptsById: Record<number, AttentionBulkAttempt> = {};

  get hasActiveAttentionSelected(): boolean {
    const selectedId = this.atIndex || this.idAtencion;
    return Array.isArray(this.filtroAtenciones)
      && this.filtroAtenciones.length > 0
      && !!selectedId
      && this.filtroAtenciones.some(item => item.IdAtencion?.toString() === selectedId.toString());
  }


  constructor(private router: Router, private loading: LoadingController,private alert: AlertController,private api: ApiService,private toast: ToastController,
    private tostador: ToastService,private actionSheetCtrl: ActionSheetController,private platform: Platform,private toaster: ToastController,private so: ScreenOrientation,
    private geo: NativeGeocoder,private locateIt: LocateService,private alertController: AlertController,private call: CallNumber, private myModal: ModalController, 
    private countryService:CountrydataService, private storageService:StorageService, private deviceService: DeviceService,
    public bulkAttemptService: AttentionBulkAttemptService) {
      
      // console.log(window.location.pathname);
      

      this.readStatus = 1;
      
      
      let previousPage = localStorage.getItem('previous');
      if (previousPage) {
        console.log('En tab1 la pagina anterior ha sido '+previousPage);
        if (previousPage == '/expediente') {
          window.location.reload();
        }
        localStorage.setItem('previous', window.location.pathname);
      }else{
        localStorage.setItem('previous', window.location.pathname);
      }
    this.presentingElement = document.querySelector('.ion-page');
    this.updateIcon = '../../assets/img/descargar.gif';

    this.api.ListTipoFoto().pipe(finalize(async ()=>{})).subscribe(async (res) =>{this.tipoFotos= res;}, async (res) => {
      //console.log(res)
    })

    this.notifications.push(
      { title: 'Coordinacion de ajustador por accidente de transito', atencionId: 44630 },
      { title: 'Coordinacion de ajustador por accidente de transito', atencionId: 44631 },
      { title: 'Coordinacion de ajustador por accidente de transito', atencionId: 44632 }
    )

    if (this.platform.is('android') == true) {
      this.notificationBadgeRight = '6vw';
      this.notificationBadgeTop = '1.4vh';
    } else {
      this.notificationBadgeRight = '4.97vw';
      this.notificationBadgeTop = '1vh';
    }

    this.tostador.dismissToast();this.isLoading = false;this.user = this.api.currentUser;this.atIndexId = 0;
    if (this.user) {
      this.inicializarFirma();
    }
    if (this.user?.NombreAgente) {
      localStorage.setItem('nombreAjustador', this.user.NombreAgente);
    }
    this.firstInterval = setInterval(() => { this.handleFirstSegment() }, 1000);

    if (JSON.parse(window.localStorage.getItem('Push'))) {
      var $data: any = JSON.parse(window.localStorage.getItem('Push'));
      if ($data.Type == "EmbebedUrl") {}
      if ($data.Type == "InternalView") {this.router.navigate([$data.Direction], { queryParams: { Id: $data.DirectionData } });}
    }
  }

  resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth * ratio;
    this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight * ratio;
    this.canvas.nativeElement.getContext("2d").scale(ratio, ratio);
    this.sig.clear();
  }

  inicializarFirma() {
    if (!this.user?.Firma) {
      return;
    }

    this.firmaPrecargadaAjustador = this.user.Firma;
    localStorage.setItem('firmaPrecargadaAjustador', this.firmaPrecargadaAjustador);
  }

  private signatureStorageKey(idAtencion?: any): string {
    const attentionId = idAtencion || this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');
    return attentionId ? 'dSignatureAsegurado-' + attentionId : 'dSignatureAsegurado';
  }

  private isValidClientSignature(signature: any): boolean {
    const value = (signature || '').toString();
    return !!value &&
      value !== emptySignature &&
      value !== emptySignatureWhite &&
      value !== 'null' &&
      value !== 'undefined';
  }

  private refreshClientSignatureFromStorage(idAtencion?: any): void {
    const attentionId = idAtencion || this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');
    const signatureByAttention = localStorage.getItem(this.signatureStorageKey(attentionId));
    const genericSignature = localStorage.getItem('dSignatureAsegurado');
    const genericAttentionId = localStorage.getItem('dSignatureAseguradoAtencion');
    const canUseGenericSignature = !attentionId || genericAttentionId === attentionId.toString();
    const signature = this.isValidClientSignature(signatureByAttention)
      ? signatureByAttention
      : (canUseGenericSignature ? genericSignature : null);

    if (this.isValidClientSignature(signature)) {
      this.firmaPrecargada = signature;
      this.isSignature = true;
      return;
    }

    this.firmaPrecargada = emptySignatureWhite;
    this.isSignature = false;
  }

  private clearClientSignature(idAtencion?: any): void {
    const attentionId = idAtencion || this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');

    if (attentionId) {
      localStorage.removeItem(this.signatureStorageKey(attentionId));
    }

    if (!attentionId || localStorage.getItem('dSignatureAseguradoAtencion') === attentionId.toString()) {
      localStorage.removeItem('dSignatureAsegurado');
      localStorage.removeItem('dSignatureAseguradoAtencion');
    }

    this.firmaPrecargada = emptySignatureWhite;
    this.isSignature = false;
  }

  private refreshClientSignatureFromServer(idAtencion?: any): void {
    const attentionId = idAtencion || this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');

    if (!attentionId) {
      this.refreshClientSignatureFromStorage();
      return;
    }

    let latestSignatureRecord = null;

    this.api.obtenerFotoPorAtencion(attentionId, 3).subscribe({
      next: async (res) => {
        const firmas = this.normalizeClientSignatureResponse(res);
        for (let index = 0; index < firmas.length; index++) {
          const element = firmas[index];
          if (this.isClientSignatureRecord(element) && this.isValidClientSignature(element?.FotoFirma)) {
            latestSignatureRecord = element;
          }
        }
      },
      error: async () => {
        this.refreshClientSignatureFromStorage(attentionId);
      },
      complete: () => {
        if (!latestSignatureRecord?.FotoFirma) {
          this.clearClientSignature(attentionId);
          return;
        }

        const firma = latestSignatureRecord.FotoFirma.toString().startsWith('data:image')
          ? latestSignatureRecord.FotoFirma
          : imagePrefix + latestSignatureRecord.FotoFirma;
        this.persistClientSignature(firma, attentionId);
      }
    });
  }

  private normalizeClientSignatureResponse(res: any): any[] {
    if (Array.isArray(res)) {
      return res;
    }

    if (Array.isArray(res?.data)) {
      return res.data;
    }

    if (Array.isArray(res?.result)) {
      return res.result;
    }

    if (Array.isArray(res?.Result)) {
      return res.Result;
    }

    return res ? [res] : [];
  }

  private isClientSignatureRecord(record: any): boolean {
    const tipoFirma = record?.RefTipoFotoId ??
      record?.RefTipoFotografiaId ??
      record?.TipoFotoFirma ??
      record?.RefTipoFotoFirmaId;

    return tipoFirma === undefined || tipoFirma === null || tipoFirma.toString() === '3';
  }

  private persistClientSignature(signature: string, idAtencion?: any): void {
    if (!this.isValidClientSignature(signature)) {
      return;
    }

    this.firmaPrecargada = signature;
    localStorage.setItem('dSignatureAsegurado', signature);
    localStorage.setItem(this.signatureStorageKey(idAtencion), signature);
    if (idAtencion) {
      localStorage.setItem('dSignatureAseguradoAtencion', idAtencion.toString());
    }
    this.isSignature = true;
  }

  next() {
    if (this.blockWhenNoActiveAttention()) {
      return;
    }
    if (this.elColorEstado == "green") {this.router.navigate(['./cargar-archivos']);} else {
      this.tostador.presentToastSiniestroCerrado("Este informe ya ha sido cerrado y no se puede editar. Para mayor información, contacta a tu administrador de sistema", 'middle', 'firma');
    }
  }

  goFotos(){
    if (this.blockWhenNoActiveAttention()) {
      return;
    }
    this.router.navigate(['./cargar-archivos']);
  }

  goFotoReporte(){
    this.router.navigate(['./foto-reporte']);
  }

  openNotification(i) {$('.notification-item').eq(i).toggleClass('read');}

  checkAtencionEnProceso(idAtencionSeleccionada, idAtencionEnProceso, onConfirm?: () => void){
    const seleccionada = idAtencionSeleccionada ? idAtencionSeleccionada.toString() : '';
    const enProceso = idAtencionEnProceso ? idAtencionEnProceso.toString() : '';
    const iguales = seleccionada === enProceso;

    if (iguales == false) {
      setTimeout(() => {
        this.presentAlertClearCache(idAtencionSeleccionada, 'HELP', 'Ajustadores', 'Existen datos en caché para la atención '+idAtencionEnProceso+'. Deseas cambiar a la atención '+idAtencionSeleccionada+'? Si aceptas, se borrarán los datos de la atención '+idAtencionEnProceso+' y se cargarán los de la atención '+idAtencionSeleccionada+'.', onConfirm);  
      }, 300);

      return true;
    }

    return false;
  }

  
  

  ngOnInit() {
    $('ion-tab-button').eq(0).click();

    setTimeout(() => {
      
      console.log('clienteContent');
      let evaluator = window.location.pathname=='/login';
      if (evaluator == false) {
        let myContent = document.getElementById('clienteContent');
        if (myContent) {
        }else{
          window.location.reload();
        }
      }
    }, 3000);

    localStorage.setItem('origin', window.location.pathname);
    void this.bootstrapTabData();

    this.androidVersion = versionAndroid.versionCodigo;
    this.updateIntent();
  }

  private async ensureSessionReady(): Promise<boolean> {
    if (this.api.currentUser?.ProveedorAgenteId) {
      this.user = this.api.currentUser;
      if (this.user?.NombreAgente) {
        localStorage.setItem('nombreAjustador', this.user.NombreAgente);
      }
      return true;
    }

    const hasSession = await this.api.loadToken();
    if (hasSession && this.api.currentUser?.ProveedorAgenteId) {
      this.user = this.api.currentUser;
      if (this.user?.NombreAgente) {
        localStorage.setItem('nombreAjustador', this.user.NombreAgente);
      }
      return true;
    }

    return false;
  }

  private async bootstrapTabData() {
    const ready = await this.ensureSessionReady();
    if (!ready) {
      return;
    }

    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe(
      finalize(async () => {
        this.isLoading = false;
        
      })
    ).subscribe(
      (res) => {
        console.log('Las atenciones en ngOnInit');
        console.dir(res)

        for (let indexA = 0; indexA < res.length; indexA++) {
          const elementA = res[indexA];
          if (elementA.ColorEstado == 'green') {
            this.atencionesActivas.push(elementA);
          }

          if (indexA == (res.length-1)) {
            console.dir(this.atencionesActivas.sort((a,b) => b.IdAtencion - a.IdAtencion));
            console.dir(this.atencionesActivas);
            this.isLoad = true;
            if (this.atencionesActivas.length > 0) {
              this.idAtencion = this.atencionesActivas[0].IdAtencion;
            }
            let idAtencionEnProceso = localStorage.getItem('atencionEnProceso');
            if (idAtencionEnProceso) {}else{}
          }
        }
        
      }
    )
  }

  

  outletDeactivate(){
    if (!this.outlet) {
      return;
    }

    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1") {
        this.outlet?.deactivate();
      }
    });
  }

  updateIntent(){
    this.api.GetAppVersion('android').pipe(finalize(async ()=>{})).subscribe(async (res) =>{
      this.dbVersion = this.normalizeVersionValue(res);
      if (versionAndroid.versionCodigo) {
        this.store = 'https://portal.porsalud.net/Outer/AppRepositorio/HELP/NuevaVersion/HELP.apk';
        this.androidVersion = versionAndroid.versionCodigo;

        if (this.isRemoteVersionNewer(this.dbVersion, versionAndroid.versionCodigo)) {
          setTimeout(() => {
            $('#open-modal-update').click();  
          }, 3000);
        }
      }

    }, async (res) => {})
  }

  private normalizeVersionValue(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (Array.isArray(value)) {
      return value.map(item => this.normalizeVersionValue(item)).join('').replace(/,+/g, '');
    }

    if (typeof value === 'object') {
      const possibleValue = value.versionCodigo || value.version || value.Version || value.data || value.result || value.value;
      return this.normalizeVersionValue(possibleValue ?? JSON.stringify(value));
    }

    return value.toString().replace(/,/g, '').trim();
  }

  private isRemoteVersionNewer(remoteVersion: any, localVersion: any): boolean {
    const remoteParts = this.parseVersionParts(remoteVersion);
    const localParts = this.parseVersionParts(localVersion);
    const length = Math.max(remoteParts.length, localParts.length);

    for (let index = 0; index < length; index++) {
      const remoteValue = remoteParts[index] || 0;
      const localValue = localParts[index] || 0;

      if (remoteValue > localValue) {
        return true;
      }

      if (remoteValue < localValue) {
        return false;
      }
    }

    return false;
  }

  private parseVersionParts(value: any): number[] {
    const normalized = this.normalizeVersionValue(value);
    const matches = normalized.match(/\d+/g);

    if (!matches || matches.length === 0) {
      return [0];
    }

    return matches.map(part => Number(part));
  }

  openStore(store){
    this.outletDeactivate();
    
    window.open(store, '_system', 'location=yes');
  }

  async openReleaseInfo() {
    const alert = await this.alertController.create({
      cssClass: 'update-info-alert',
      header: 'Qué mejora esta versión?',
      message: 'Estos son los cambios más importantes preparados para tu trabajo diario:\n\n- Ajustamos el inicio para que el listado de atenciones sea más claro.\n- Mejoramos la vista principal para trabajar mejor en tablet.\n- Pulimos el registro de firma, expediente, fotos y solicitud de grúa.\n- Mejoramos la validación del aviso de actualización.',
      buttons: ['Entendido']
    });

    await alert.present();
  }

  async ionViewWillEnter(){
    const gpsOn = localStorage.getItem('conectividad');

    if (gpsOn !== null) {
      this.gpsOn = gpsOn === 'true';
    } else {
      this.gpsOn = true;
    }

    await this.ensureSessionReady();

    for(let i = 0; i < 100; i++){}
}

  ionViewDidEnter() {
    const permissionResult = Geolocation.checkPermissions();
    const gpsOn = localStorage.getItem('conectividad');

    if (gpsOn !== null) {
      this.gpsOn = gpsOn === 'true';
    } else {
      this.gpsOn = true;
    }
    

    console.log('ionViewDidEnter checando los permisos de gelocacion ');
    console.dir(permissionResult);
    permissionResult.then((result) => { 
      console.log('ionViewDidEnter checando los permisos de gelocacion con then result '); console.dir(result);
      console.log(result.location);

      if (result.location == 'granted') {
        this.conectividad = true;
        this.gpsOn = true;
        this.showLocationPrompt = false;
        this.estadoConexion = 'Conectado a Internet';
        this.estadoConexionGPS = 'Permisos GPS activados';
        //$('#gpsCard').css('display', 'none');
        $('#saludoInicial').css('display', 'none');
        $('#chipGPS').removeClass('gps-in');
        $('#chipGPS').addClass('gps-out');
        
      }

      if(result.location == 'denied'){
        const isInstalledApp = this.platform.is('hybrid') || this.platform.is('capacitor');
        this.conectividad = !isInstalledApp;
        this.gpsOn = !isInstalledApp;
        this.showLocationPrompt = isInstalledApp;
        this.estadoConexion = isInstalledApp ? 'Sin conexión' : 'Vista web de desarrollo';
        this.estadoConexionGPS = isInstalledApp ? 'Permisos GPS denegados' : 'Permisos GPS no disponibles en navegador';
        //$('#gpsCard').css('display', 'inherit');
        if (isInstalledApp) {
          $('#chipGPS').removeClass('gps-out');
          $('#chipGPS').addClass('gps-in');
        }
        
      }

      setTimeout(() => {
        console.log('conectividad en ionViewDidEnter es '+this.conectividad);
        if (this.conectividad) {
          localStorage.setItem('conectividad', this.gpsOn.toString());
        }

        //alert('Vamos a checar los permisos de ubicación y la conectividad a internet para mostrar el indicador de conexión. Permisos de ubicación: '+result.location+'\nConectividad: '+this.conectividad+'\nEstado conexión: '+this.estadoConexion+'\nEstado conexión GPS: '+this.estadoConexionGPS);

        if (this.conectividad == false) {
          //Geolocation.requestPermissions();
          
          //alert('Tengo permisos GPS y conexión a internet');
        }else{
          //alert('No tengo conexión a internet, pero tengo permisos GPS');
        }
        //alert('Permisos de ubicación: '+result.location+'\nConectividad: '+this.conectividad+'\nEstado conexión: '+this.estadoConexion+'\nEstado conexión GPS: '+this.estadoConexionGPS);
        //alert('Permisos de ubicación: '+result.location+'\nEstado conexión GPS: '+this.estadoConexionGPS);
      }, 3000);
    });

    localStorage.setItem('coberturas', JSON.stringify([]));
    this.ateIndex =  localStorage.getItem('indexAtencion-0');

    if (this.ateIndex == null || this.ateIndex === undefined || this.ateIndex === '') {
      this.setFirstSegment();
    }

    void this.enterView();
    this.startActiveAttentionsRefresh();
  }

  ionViewWillLeave() {
    this.stopActiveAttentionsRefresh();
  }

  ngOnDestroy() {
    this.stopActiveAttentionsRefresh();
  }

  async enterView(){
    if (this.firmaPrecargadaAjustador != null && this.firmaPrecargadaAjustador != undefined) {this.isSign = true;} else {this.isSign = false;}
    this.refreshClientSignatureFromServer();
    
    this.isTablet = this.deviceService.isTablet;

    if (this.platform.is('android') == true) {
      this.geoCodeReverse();
    } else {
      this.miPais = 'HN';
    }

    const ready = await this.ensureSessionReady();
    if (!ready) {
      if (await this.api.canRecoverSessionSilently()) {
        await this.promptSessionRecovery('missing');
      }
    } else if (await this.shouldPromptSessionRecovery()) {
      const recovered = await this.api.refreshSessionSilently();
      if (recovered) {
        this.user = this.api.currentUser;
        this.inicializarFirma();
        this.getAtencionesActivas();
      } else {
        await this.promptSessionRecovery('update');
      }
    } else {
      this.getAtencionesActivas();
    }
    
    if (this.canvas?.nativeElement) {
      this.sig = new SignaturePad(this.canvas.nativeElement);this.sig.backgroundColor = "rgb(255, 255, 255)";this.sig.minWidth = 1;this.sig.maxWidth = 1.5;
      this.sig.dotSize = 3;
      this.sig.fromDataURL(emptySignatureWhite);

      setTimeout(() => {
        this.sig.clear();
      }, 1000);
    }

    this.platform.ready().then(() => {this.tostador.presentToastReload('Tira hacia abajo para actualizar', 'top', 'tab');this.sendTokenPush();
      if (Network) {this.checkConnection();}
    });

    if (document.getElementById('cardAsegurado')) {
      this.getCanvasWidth();
    }
  }

  private async shouldPromptSessionRecovery(): Promise<boolean> {
    if (this.api.isPendingSessionRecovery()) {
      return true;
    }

    return this.api.hasAppVersionChanged();
  }

  private async promptSessionRecovery(reason: 'update' | 'missing'): Promise<void> {
    if (this.sessionRecoveryAlertOpen) {
      return;
    }

    const canRecover = await this.api.canRecoverSessionSilently();
    if (!canRecover) {
      return;
    }

    this.sessionRecoveryAlertOpen = true;

    const message = reason === 'update'
      ? 'Detectamos una actualización o reinstalación de la app.\n\nPulsa Reconectar para continuar con tu sesión guardada, sin volver a escribir tu correo ni contraseña.'
      : 'Tu sesión quedó pendiente de reconexión.\n\nPulsa Reconectar para continuar con tus credenciales guardadas, sin volver a iniciar sesión manualmente.';

    const alert = await this.alertController.create({
      cssClass: 'session-recovery-alert',
      header: 'Reconectar sesión',
      subHeader: reason === 'update' ? 'Actualización detectada' : 'Sesión pendiente',
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cerrar sesión',
          cssClass: 'session-recovery-logout',
          handler: () => {
            this.sessionRecoveryAlertOpen = false;
            this.api.logout();
          }
        },
        {
          text: 'Reconectar',
          cssClass: 'session-recovery-primary',
          handler: () => {
            void alert.dismiss().then(() => this.reconnectStoredSession());
          }
        }
      ]
    });

    await alert.present();
  }

  private async reconnectStoredSession(): Promise<void> {
    const loading = await this.loading.create({
      message: 'Reconectando sesión...',
      cssClass: 'session-recovery-loading',
      backdropDismiss: false
    });
    await loading.present();

    const recovered = await this.api.refreshSessionSilently();
    await loading.dismiss();

    if (!recovered) {
      this.sessionRecoveryAlertOpen = false;
      const failAlert = await this.alertController.create({
        cssClass: 'session-recovery-alert session-recovery-alert--failure',
        header: 'No se pudo reconectar',
        subHeader: 'Intento fallido',
        message: 'No fue posible restaurar la sesión automáticamente.\n\nSi cambiaste tu contraseña recientemente, cierra sesión e inicia con la nueva clave.\n\nTambién puedes reintentar o cerrar sesión para volver al login.',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Cerrar sesión',
            cssClass: 'session-recovery-logout',
            handler: () => this.api.logout()
          },
          {
            text: 'Reintentar',
            cssClass: 'session-recovery-retry',
            handler: () => {
              void this.promptSessionRecovery('missing');
            }
          }
        ]
      });
      await failAlert.present();
      return;
    }

    this.sessionRecoveryAlertOpen = false;
    this.user = this.api.currentUser;
    this.inicializarFirma();
    await this.getAtencionesActivas();
    this.tostador.presentToastNoButtons('Sesión reconectada correctamente.', 'top', 'tab');
  }

  getCanvasWidth() {
    const cardAsegurado = document.getElementById('cardAsegurado');
    if (!cardAsegurado) {
      return;
    }

    this.cardWidth = cardAsegurado.clientWidth;
    if (this.platform.is('android') == true) {
      this.canvasAseguradoWidth = this.cardWidth - 40;
    } else {
      this.canvasAseguradoWidth = this.cardWidth - 50;
    }
  }

  clear() {
    this.sig.clear();
    this.isSignature = false;
  }

  saveSignatureAsegurado(idAtencion) {
    if (this.blockWhenNoActiveAttention()) {
      return;
    }

    idAtencion = this.atIndex;
    this.hoy= new Date().toISOString();
    
    if (this.elColorEstado == "green") {this.isLoading = true;this.sig.backgroundColor = "rgb(255, 255, 255)";this.sig.minWidth = 1;this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3; const mySignature = this.sig.toDataURL("image/jpeg");
      if (mySignature != emptySignature && mySignature != emptySignatureWhite) {
        this.firmaPrecargada = this.sig.toDataURL("image/jpeg");
        const firmaPayload = [{
          IdAtencion: idAtencion,
          RefTipoFotoId: 3,
          Foto: this.firmaPrecargada.split(',')[1],
          NombreFirmante: this.elCliente,
          FechaFirma: this.hoy
        }];

        this.api.GuardarFirmaAsegurado(firmaPayload).pipe(
          finalize(async () => {this.isLoading = false;})
        ).subscribe(
          (res) => {
            this.persistClientSignature(this.firmaPrecargada, idAtencion);
            this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
            const element = document.getElementById('cardAsegurado');
            const elementInput = document.getElementById('nombreInput');
            element.setAttribute('style', 'border: none');
            elementInput.setAttribute('style', 'border: none');
            this.isSignature = true;
            this.sig.clear();
          },
          async (res) => {
            this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
            this.isSignature = false;
            this.isLoading = false;
          }
        )

        setTimeout(() => {
          this.sig.clear();
        }, 300);
      } else {
        this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
        this.isLoading = false;
      }
    } else {
      this.tostador.presentToastSiniestroCerrado("Este informe ya ha sido cerrado y no se puede editar. Para mayor información, contacta a tu administrador de sistema", 'middle', 'firma');
      this.isLoading = false;
    }
  }

  saveSignature(agenteId) {
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
    const mySignature = this.sig.toDataURL("image/jpeg");

    if (mySignature != emptySignature) {
      this.firmaPrecargadaAjustador = this.sig.toDataURL("image/jpeg");
      localStorage.setItem("dSignature", this.firmaPrecargadaAjustador.toString());
      this.firmaObtenida = {
        IdAgente: agenteId,
        Firma: this.firmaPrecargadaAjustador.split(',')[1]
      }

      this.api.GuardarFirmaAjustador(this.firmaObtenida).pipe(
        finalize(async () => {
          this.isLoading = false;
        })
      ).subscribe(
        (res) => {
          this.tostador.presentToastNoButtons("Firma guardada exitosamente! Ya puedes reutilizarla cuando sea necesario.", "top", "firma");
        },
        async (res) => {
          this.tostador.presentToastDataMissing(res.error.Message, 'top', 'firma');
        }
      )
    } else {
      this.tostador.presentToastNoButtons("Necesitas escribir una firma para guardarla.", "top", "firma");
    }
  }

  onItemClickFunc(): void {
    if (event) {
      event.stopPropagation();
    }
  }
  async sendTokenPush() {
    if (JSON.parse(window.localStorage.getItem('token'))) {
      const data = {
        IdProveedorAgente: this.api.currentUser.ProveedorAgenteId,
        TokenPush: JSON.parse(window.localStorage.getItem('token'))
      }
      this.api.SendToken(data).pipe(
        finalize(async () => {
        })
      ).subscribe(
        (res) => {},
        async (res) => {
          const alert = await this.alert.create({
            header: 'HELP',
            message: res.error.Message,
            buttons: ['Ok']});
          await alert.present();
        }
      )
    }

  }
  getfondo(atencionId) {
    this.api.obtenerFotoPorAtencion(atencionId, 1).pipe( 
      finalize(async ()=>{
      })
    ).subscribe(
       async (res) =>{
        this.laImg = imagePrefix+res[0].FotoFirma;
      },
      async (res) => {
        this.laImg = fondos[Math.floor(Math.random() * fondos.length)];
      }
    )
    
  }

  formatearFecha(mydate){
    var dateFormat = mydate.split('T')[0]; 
    var timeFormat = mydate.split('T')[1];

    this.fHora = timeFormat.toString().substring(0,5);
    let anio = dateFormat.toString().substring(0,4);
    let mes = dateFormat.toString().substring(5, 7);
    let dia = dateFormat.toString().substring(8);

    let laFormateada = dia+'-'+mes+'-'+anio;
     let fechaArray = {
      fechaF: laFormateada,
      horaF: this.fHora
     }
     return fechaArray;
  }

  async getAtencionesActivas(options: { silent?: boolean } = {}) {
    const silent = options.silent === true;

    if (this.activeAttentionsRequestInFlight) {
      return;
    }

    const ready = await this.ensureSessionReady();
    if (!ready) {
      if (!silent) {
        this.isLoading = false;
      }
      return;
    }

    this.activeAttentionsRequestInFlight = true;

    if (!silent) {
      localStorage.setItem('atencionesCount', '0');
      this.isLoading = true;
    }

    this.api.MisAtencionesActivas(this.api.currentUser.ProveedorAgenteId).pipe(
      finalize(async () => {
        this.activeAttentionsRequestInFlight = false;
        if (!silent && this.isCacheClear == false) {
          this.isLoading = false;
        }
        
      })
    ).subscribe(
      (res) => {
        this.processActiveAttentionsResponse(res, { preserveSelection: silent });
      },
      async (error) => {
        if (!silent) {
          this.isLoading = false;
        }

        if (error?.status === 400) {
          this.applyEmptyActiveAttentionsState();
          return;
        }

        if (error?.status === 401 && await this.api.canRecoverSessionSilently()) {
          await this.promptSessionRecovery('missing');
        }
      }
    )
  }

  private processActiveAttentionsResponse(
    res: any[],
    options: { preserveSelection?: boolean } = {}
  ) {
    this.filtroAtenciones = Array.isArray(res) ? res : [];
    if (!this.filtroAtenciones.length) {
      this.applyEmptyActiveAttentionsState();
      return;
    }

    this.filtroAtenciones.sort((a,b)=> b.IdAtencion-a.IdAtencion);

    for (let indexFilter = 0; indexFilter < this.filtroAtenciones.length; indexFilter++) {
      const element = this.filtroAtenciones[indexFilter];
      let fechaFormateada = this.formatearFecha(element.Fecha);
      this.filtroAtenciones[indexFilter].Fecha = fechaFormateada.fechaF;
      this.filtroAtenciones[indexFilter].Hora = fechaFormateada.horaF;
      if (indexFilter == 0) {
        this.firstSegmentId = element.IdAtencion;
      }

      if (indexFilter==(this.filtroAtenciones.length-1)) {
        console.log('Las posiciones de los estados son ');
        console.dir(this.readStatusArray)
      }
    }

    setTimeout(() => {
      $('#segmentId').text(this.firstSegmentId);
    }, 1000);

    localStorage.setItem('atencionesCount', this.filtroAtenciones.length.toString());
    void this.refreshBulkAttemptMarkers();

    if (options.preserveSelection) {
      this.syncSelectedAttentionFromList();
      return;
    }

    this.restoreLastActiveAttention();
  }

  private async refreshBulkAttemptMarkers(): Promise<void> {
    const records = await this.bulkAttemptService.getAllAttempts();
    const nextMap: Record<number, AttentionBulkAttempt> = {};

    for (const item of this.filtroAtenciones) {
      const record = records[item.IdAtencion?.toString()];
      if (record) {
        nextMap[item.IdAtencion] = record;
      }
    }

    this.bulkAttemptsById = nextMap;
  }

  getBulkAttemptFor(idAtencion: number): AttentionBulkAttempt | null {
    return this.bulkAttemptsById[idAtencion] ?? null;
  }

  private syncSelectedAttentionFromList() {
    if (!this.idAtencion || !this.filtroAtenciones.length) {
      this.restoreLastActiveAttention();
      return;
    }

    const currentIndex = this.filtroAtenciones.findIndex(
      (item) => item.IdAtencion?.toString() === this.idAtencion?.toString()
    );

    if (currentIndex < 0) {
      this.restoreLastActiveAttention();
      return;
    }

    const selected = this.filtroAtenciones[currentIndex];
    this.atIndex = selected.IdAtencion;
    this.atIndexId = currentIndex;
    this.elCliente = selected.Cliente;
    this.elServicio = selected.Servicio;
    this.elColorEstado = selected.ColorEstado;
    this.laFecha = selected.Fecha;
  }

  private applyEmptyActiveAttentionsState(): void {
    this.filtroAtenciones = [];
    this.bulkAttemptsById = {};
    this.atIndex = null;
    this.idAtencion = null;
    this.firstSegmentId = null;
    this.atIndexId = 0;
    this.elCliente = '';
    this.elServicio = '';
    this.elColorEstado = '';
    this.laFecha = null;
    this.firmaPrecargada = emptySignatureWhite;
    this.isSignature = false;
    localStorage.setItem('atencionesCount', '0');
    localStorage.removeItem('idAtencion');
    localStorage.removeItem('ultimaAtencionSeleccionada');
    localStorage.removeItem('indexAtencion');
    localStorage.removeItem('indexAtencion-0');
    localStorage.removeItem('indexAtencion-2');
    localStorage.removeItem('elColorEstado');
    localStorage.removeItem('elCliente');
    void this.api.markCurrentAppVersion();
  }

  private blockWhenNoActiveAttention(): boolean {
    if (this.hasActiveAttentionSelected) {
      return false;
    }

    if (Array.isArray(this.filtroAtenciones) && this.filtroAtenciones.length > 0) {
      this.restoreLastActiveAttention();
      if (this.hasActiveAttentionSelected) {
        return false;
      }
    } else {
      this.applyEmptyActiveAttentionsState();
    }

    this.tostador.presentToastNoButtons(
      'No hay atenciones activas disponibles para procesar en este momento.',
      'top',
      'tab'
    );
    return true;
  }

  private restoreLastActiveAttention() {
    if (!this.filtroAtenciones.length) {
      this.atIndex = null;
      this.idAtencion = null;
      return;
    }

    const storedAttentionIds = [
      localStorage.getItem('ultimaAtencionSeleccionada'),
      localStorage.getItem('atencionEnProceso'),
      localStorage.getItem('idAtencion')
    ].filter(Boolean);

    let selectedIndex = -1;

    for (const storedId of storedAttentionIds) {
      selectedIndex = this.filtroAtenciones.findIndex(
        attention => attention.IdAtencion.toString() === storedId
      );

      if (selectedIndex >= 0) {
        break;
      }
    }

    if (selectedIndex < 0) {
      selectedIndex = this.getActiveAttentionIndex();
    }

    if (selectedIndex < 0 || selectedIndex >= this.filtroAtenciones.length) {
      selectedIndex = 0;
    }

    const selectedAttention = this.filtroAtenciones[selectedIndex];
    clearInterval(this.firstInterval);
    this.seleccionarAtencion(selectedAttention.IdAtencion, selectedIndex, true);
  }

  getActiveAttentionIndex() {
    const storedIndex = localStorage.getItem('indexAtencion-0');
    const selectedIndex = parseInt(storedIndex || '0', 10);

    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= this.filtroAtenciones.length) {
      localStorage.setItem('indexAtencion', '0');
      localStorage.setItem('indexAtencion-0', '0');
      return 0;
    }

    return selectedIndex;
  }

  async getAtenciones() {
    
    this.isLoading = true;
    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      (res) => {
        let indexAtenciones: any = 0;
        this.atenciones = res; 
        this.lasAtenciones = res;
        this.results = res;


        let products = this.atenciones.sort((a,b)=> b.IdAtencion-a.IdAtencion);

        if (products.length > 0) {
          for (let index = 0; index < products.length; index++) {
            const element = products[index];
            let fechaFormateada = this.formatearFecha(element.Fecha);
            this.results[index].Fecha = fechaFormateada.fechaF;
            this.results[index].Hora = fechaFormateada.horaF;
  
            if (index == (products.length-1)) {}
          }
  
          setTimeout(() => {
            const atencionesIds = document.getElementsByClassName('atencion-id');
            for (let index = 0; index < this.atenciones.length; index++) {
              const element = this.atenciones[index];
              atencionesIds[index].setAttribute('style', 'color:'+element.ColorEstado);
            }
          }, 1000);
  
          this.atenciones.forEach(item => {
            this.atIndex = item.IdAtencion;
            this.elCliente = item.Cliente;
            this.elServicio = item.Servicio;
            this.elColorEstado = item.ColorEstado;
          });
        }else{

        }
        
      },
      async (res) => {}
    )
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter((d) => 
      d.Cliente.toLowerCase().indexOf(query) > -1 ||
      d.Fecha.toString().toLowerCase().indexOf(query) > -1 ||
      d.IdAtencion.toString().toLowerCase().indexOf(query) > -1
    );

    setTimeout(() => {
      const atencionesIds = document.getElementsByClassName('atencion-id');
      if (this.results.length == this.atenciones.length) {
        for (let index = 0; index < this.atenciones.length; index++) {
          const element = this.atenciones[index];
          atencionesIds[index].setAttribute('style', 'color:'+element.ColorEstado);
        }  
      }
      
    }, 400);
  }

  randomize(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);//.toFixed(2);
  }

  logout() {this.api.logout();}

  async cerrarSesion() {
    const alert = await this.alert.create({
      cssClass: 'logout-menu-alert',
      header: 'HELP Ajustadores',
      subHeader: 'Asistencia de Seguros',
      message: 'Selecciona una accion para continuar.',
      buttons: [{
        text: 'Cerrar sesión',
        cssClass: 'logout-menu-button logout-menu-danger',
        handler: () => {
          this.isLogout = true;
          localStorage.setItem('isLogout', this.isLogout.toString());
          localStorage.setItem('previous', this.router.url);
          this.api.logout();
        }
      },
      {
        text: 'Continuar',
        role: 'cancel',
        cssClass: 'logout-menu-button logout-menu-cancel'
      } ,
      {
        text: 'Limpiar Caché',
        role: 'confirm',
        cssClass: 'logout-menu-button logout-menu-cache',
        handler: () => { this.limpiarCache() }
      }
      ]
    });
    alert.present();
  }

  limpiarCache() {
    this.isLoading = true;
    this.isCacheClear = true;
    this.clearSegmentsStorage();
    this.getAtencionesActivas();
    this.outletDeactivate();

    setTimeout(() => {
      this.isLoading = false;
      this.isCacheClear = false;
    }, this.randomIntFromInterval(2000, 4000));
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  async stopTrack() {
    const opt: ClearWatchOptions = {id: await this.wait};
    Geolocation.clearWatch(opt).then(result=>{});
  }

  handleRefresh(event) {
    setTimeout(() => {
      void this.getAtencionesActivas();
      event.target.complete();
    }, 500);
  };

  private startActiveAttentionsRefresh() {
    this.stopActiveAttentionsRefresh(false);

    this.activeAttentionsRefreshTimer = setInterval(() => {
      void this.getAtencionesActivas({ silent: true });
    }, this.activeAttentionsRefreshMs);

    if (!this.platformPauseSub) {
      this.platformPauseSub = this.platform.pause.subscribe(() => {
        this.stopActiveAttentionsRefresh(false);
      });
      this.platformResumeSub = this.platform.resume.subscribe(() => {
        void this.getAtencionesActivas({ silent: true });
        this.startActiveAttentionsRefresh();
      });
    }
  }

  private stopActiveAttentionsRefresh(clearPlatformListeners = true) {
    if (this.activeAttentionsRefreshTimer) {
      clearInterval(this.activeAttentionsRefreshTimer);
      this.activeAttentionsRefreshTimer = null;
    }

    if (clearPlatformListeners) {
      this.platformPauseSub?.unsubscribe();
      this.platformResumeSub?.unsubscribe();
      this.platformPauseSub = undefined;
      this.platformResumeSub = undefined;
    }
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'HELP',
      subHeader: 'Opciones de usuario',
      buttons: [
        {
          text: 'Cerrar Sesión',
          handler: () => {
            this.cerrarSesion();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ],
    });

    actionSheet.present();
  }

  verExpediente(idAtencion: number) {
    if (!idAtencion || this.blockWhenNoActiveAttention()) {
      return;
    }
    this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source:1 } });
  }

  async goBulkRetryFromHome(idAtencion: number) {
    if (!idAtencion || this.blockWhenNoActiveAttention()) {
      return;
    }

    this.isLoading = true;
    localStorage.setItem('idAtencion', idAtencion.toString());
    localStorage.setItem('atencionEnProceso', idAtencion.toString());

    this.api.ObtenercacheCliente(idAtencion).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (cacheRes) => {
        const cacheRecord = Array.isArray(cacheRes) ? cacheRes[0] : cacheRes;
        const usoPoliza = cacheRecord?.AseguradoUsoPoliza ?? cacheRecord?.aseguradoUsoPoliza ?? cacheRecord?.UtilizoSerivicioAsistencia;

        if (String(usoPoliza || '').trim() === '2') {
          this.api.DatosDeAtencion(idAtencion).pipe(
            finalize(async () => {})
          ).subscribe(
            async (expedienteRes) => {
              localStorage.setItem('elExpediente', JSON.stringify(expedienteRes));
              localStorage.setItem('dataProcess-AseguradoUsoPoliza', '2');
              this.router.navigate(['./prepare-send'], {
                state: {
                  data: [
                    { forma: expedienteRes },
                    { idAtencion }
                  ]
                }
              });
            },
            async () => {
              this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source: 1 } });
            }
          );
          return;
        }

        this.router.navigate(['./ajustadorhn']);
      },
      async () => {
        this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source: 1 } });
      }
    );
  }

  abrirMenu(idAtencion: number, indexInput){
    this.openModal = true;
  }

  verExpedienteBusqueda(idAtencion: number, indexInput) {
    if (!this.results?.length || !idAtencion) {
      this.blockWhenNoActiveAttention();
      return;
    }
    
    this.elColorEstado = this.results[indexInput].ColorEstado;
    
    localStorage.setItem('elColorEstado', this.elColorEstado);
    localStorage.setItem('idAtencion', idAtencion.toString());
    localStorage.setItem('indexAtencion', indexInput.toString());
    localStorage.setItem('indexAtencion-2', indexInput.toString());
    this.obtenerCacheCliente(idAtencion);

    this.api.DatosDeAtencion(idAtencion).pipe(
      finalize(async () => {
      })
    ).subscribe(
      async (res) => {
        this.datosDeAtencion  = res;
        let identidadAsegurado = res[0].IdentidadCliente;
        localStorage.setItem('datosDeAtencion', this.datosDeAtencion);
        localStorage.setItem('identidadAsegurado', identidadAsegurado);
      },
      async (res) => {}
    )
    this.results = [];
    this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion, Source:2 } });
  }

  goProfile() {this.router.navigate(['./tabs/tab3'], { queryParams: { Id: 'idAtencion' } });}

  goESignature() {
    if (this.blockWhenNoActiveAttention()) {
      return;
    }
    const idAtencion = this.atIndex || this.idAtencion || localStorage.getItem('idAtencion');
    if (idAtencion) {
      localStorage.setItem('idAtencion', idAtencion.toString());
    }
    localStorage.setItem('elCliente', this.elCliente || localStorage.getItem('elCliente') || '');
    localStorage.setItem('signatureReturnTo', '/tabs/tab1');
    this.router.navigate(['./esignature']);
  }

  abrirExpediente(){
    if (this.isSignature == true) {
      this.router.navigate(['./expediente'], { queryParams: { Id: this.atIndex } });
      localStorage.setItem('isSignature', this.isSignature.toString());
    }else{
      this.presentAlertNoSig('HELP Importante!', 'Firma Pendiente', 'Aun no se ha guardado una firma para esta atención. Guarda una para poder continuar');
    }
//    
  }

  async presentToastEditSig(message, position, clase, idAtencion) {
    const toast = await this.toast.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'EDITAR FIRMA',
          role: 'cancel',
          handler() {},
        },
        {
          text: 'IR AL EXPEDIENTE',
          role: 'confirm',
          handler() {
            this.router.navigate(['./expediente'], { queryParams: { Id: idAtencion } });
          },
        },
      ],
    });

    await toast.present();
  }

  async presentAlertClearCache(idAtencion, header, subheader, message, onConfirm?: () => void) {
    const alert = await this.alertController.create({
      cssClass: 'cache-switch-alert',
      header: header,
      subHeader: subheader,
      message: message,
      buttons: [
        {
          text: 'NO CAMBIAR',
          role: 'cancel',
          cssClass: 'cache-switch-button cache-switch-cancel',
          handler: () => {
          },
        },
        {
          text: 'CAMBIAR',
          role: 'confirm',
          cssClass: 'cache-switch-button cache-switch-confirm',
          handler: () => {
            this.isLoading = true;
            setTimeout(() => {
              this.storageService.clearSiniestroArrays();
            }, 600);

            setTimeout(() => {
              this.limpiarCache();
            }, 1200);
            
            setTimeout(() => {
              localStorage.removeItem('dataProcess-DescripcionTercerosMuertos');
              localStorage.removeItem('dataProcess-DescripcionTercerosHeridos');
              localStorage.removeItem('dataProcess-DescripcionAudiencia');
              localStorage.setItem('atencionEnProceso', idAtencion);
              localStorage.setItem('estaEvaluado', 'false');
              if (onConfirm) {
                onConfirm();
              }
              this.isLoading = false;
            }, 1800);
            
          },
        }
      ],
    });

    await alert.present();
  }

  async presentAlertNoSig(header, subheader, message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: [
        {
          text: 'EDITAR FIRMA',
          role: 'cancel',
          handler: () => {
          },
        }
      ],
    });

    await alert.present();
  }

  async presentToastClearStorage(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if (currentToast.length > 0) {
      this.toast.dismiss();
    }
    const toast = await this.toast.create({
      message: message,
      color: 'primary',
      duration: 60000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [],
    });
    await toast.present();
  }

  

  async presentToastReloadCache(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if (currentToast.length > 0) {
      this.toast.dismiss();
    }
    const toast = await this.toast.create({
      message: message,
      color: 'primary',
      duration: 60000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO CAMBIAR ATENCION',
          role: 'cancel',
        },
        {
          text: 'CAMBIAR ATENCION',
          role: 'confirm',
          handler: () => {
            localStorage.setItem('atencionEnProceso', this.idAtencion);
            this.storageService.clearSiniestroArrays();
          }
        },
      ],
    });
    await toast.present();
  }

  async presentToast(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if (currentToast.length > 0) {
      this.toast.dismiss();
    }
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
            window.location.reload()
          }
        },
      ],
    });


    await toast.present();
  }

  async presentToastErrorConexion(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
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


  checkConnection(){
  //alert('Voy')
  if(Network){
    Network.getStatus().then((status)=>{
    this.conexion=status;
    console.log('status.connected');
    console.log(status.connected);
    this.conectividad = status.connected;
    console.log('Mi estado de conectividad es '+this.conectividad)

    for (let index = 0; index < NetworkInfo.status.length; index++) {
      const element = NetworkInfo.status[index];
      if (element.bool==this.conectividad) {
        this.conectividadStat = element.stat;
      }
    }

    if(this.conectividad == false){
      //this.toaster.toastMessage = 'No hay conexión a internet';
      //this.toaster.toastClass = 'conectividad';
      //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
    }
    })
  }else{
    this.conectividad = false;
  }

  Network.addListener("networkStatusChange", status=>{
    this.conexion=status;
    this.conectividad = status.connected;

    for (let index = 0; index < NetworkInfo.status.length; index++) {
      const element = NetworkInfo.status[index];
      if (element.bool==this.conectividad) {
        this.conectividadStat = element.stat;
        localStorage.setItem('conectividad', this.conectividad.toString());
      }
    }

    localStorage.setItem('conectividad', this.conectividad.toString());
    if(this.conectividad == false){
      //$('#connectIndicator').fadeIn();
      //this.toaster.toastMessage = 'No hay conexión a internet';
      //this.toaster.toastClass = 'conectividad';
      //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
    }else{
      //$('#connectIndicator').fadeOut();
    }
  })
}


permitirGPS(){
  Geolocation.requestPermissions().then((result) => {
    console.log('Permisos de ubicación solicitados:', result); 
    if (result.location == 'granted') {
      //this.conectividadStat = true;
      this.estadoConexionGPS = 'Permisos de ubicación precisa';
      $('#connectIndicatorLogin').fadeIn('xslow');
      $('#chipGPS').removeClass('gps-in');
      $('#chipGPS').addClass('gps-out');
      //$('#gpsCard').css('display', 'none');
      $('#saludoInicial').css('display', 'none');
      this.showLocationPrompt = false;
      
        setTimeout(() => {
          window.location.reload();
        }, 600);
    }else if (!this.platform.is('hybrid') && !this.platform.is('capacitor')) {
      this.showLocationPrompt = false;
      this.estadoConexionGPS = 'Permisos GPS no disponibles en navegador';
    }
  });
}
  

  /*
  checkConnection() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.conexion = status;
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
  */

  handleFirstSegment() {
    // Handle the click event for the first segment
    
    this.ateIndex =  localStorage.getItem('indexAtencion');

    if (this.ateIndex == null || this.ateIndex == undefined || this.ateIndex == '' || this.ateIndex == '0') {
      this.setFirstSegment();
    }else{
      let indexa = this.getActiveAttentionIndex();
      $('.segment-item-atenciones').eq(indexa).click();
      clearInterval(this.firstInterval);
    }
    
  }

  setFirstSegment() {
    let daFirstSegmentsButton = document.getElementsByClassName('segment-item-atenciones');
    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      daFirstSegmentsButton[0].setAttribute('style', 'color:#0090d0;border:1px solid #0090d0');
      let laIndexS = this.filtroAtenciones[0].IdAtencion;
      let laIndex; //= this.atenciones[0].IdAtencion;
      laIndex = parseInt(localStorage.getItem('atencionEnProceso'));
      if (!laIndex) {
        laIndex = this.filtroAtenciones[0].IdAtencion;
      }

      localStorage.setItem('idAtencionInicial', laIndex.toString());
      localStorage.setItem('idAtencion', laIndex.toString());

////////////////////////////////////////////////////
      this.ateIndex =  localStorage.getItem('indexAtencion-0');

      if (this.ateIndex != '0') {
        //alert('El index de atención no es 0, es: '+this.ateIndex);
        let indexa = this.getActiveAttentionIndex();
        $('.segment-item-atenciones').eq(indexa).click();
      }else{
        localStorage.setItem('indexAtencion', '0');
        localStorage.setItem('indexAtencion-0', '0');
        $('.segment-item-atenciones').eq(0).click();
      }
      
////////////////////////////////////////////////////

      



      
      clearInterval(this.firstInterval);
    }
  }

  verNotificacion(event) {}

  openImg(foto: string) {
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }

  obtenerCacheCliente(AtencionId){
    this.api.ObtenercacheCliente(AtencionId).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        

        console.log("Detalles de cache en ver expediente: " + res.length);
        console.dir(res);
        if (res) {
          let indexFlag = 'no tiene';
        let respuesta = '';
        let verificacion:any;
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          respuesta = respuesta+element;
          
          if (index== (res.length-1)) {
            verificacion = respuesta.indexOf(indexFlag);
            if (verificacion != -1) {
              this.esClienteCompleto = false;
            }else{
              this.esClienteCompleto == true;
            }
          }
        }
        }else{
         this.esClienteCompleto = false;
        }
        
      },
      async (error) => {
        this.esClienteCompleto = false;
      }
    )
  }

  seleccionarAtencion(idAtencion, indexInput, restoring: boolean = false) {
    
    let idAtencionEnProceso = localStorage.getItem('atencionEnProceso');
    if (idAtencionEnProceso && !restoring) {
      const requiereConfirmacion = this.checkAtencionEnProceso(idAtencion, idAtencionEnProceso, () => {
        this.seleccionarAtencion(idAtencion, indexInput);
      });

      if (requiereConfirmacion) {
        return;
      }
    }

    this.obtenerCacheCliente(idAtencion);

    this.isLoad = false;
    this.elColorEstado = this.filtroAtenciones[indexInput].ColorEstado;
    localStorage.setItem('elColorEstado', this.elColorEstado);
    this.atIndex = idAtencion; this.idAtencion = this.atIndex;
    this.atIndexId = indexInput;
    localStorage.setItem('idAtencion', idAtencion);
    localStorage.setItem('ultimaAtencionSeleccionada', idAtencion.toString());
    localStorage.setItem('indexAtencion', indexInput.toString());
    localStorage.setItem('indexAtencion-0', indexInput.toString());
    localStorage.setItem('elCliente', this.filtroAtenciones[indexInput].Cliente);
    this.getfondo(idAtencion);

    this.getCountry();

    if (this.elColorEstado == "green") {
      this.isLoading = true;
      this.api.DatosDeAtencion(idAtencion).pipe(
        finalize(async () => {
          this.isLoading = false;
        })
      ).subscribe(
        async (res) => {
          let identidadAsegurado = res[0].IdentidadCliente;
          this.datosDeAtencion = [];

          console.log("Los datos de atención")
          for (let indexa = 0; indexa < datosAtencionKeys.length; indexa++) {
            const elementa = datosAtencionKeys[indexa];
             let daKey = elementa.nombre;
             this.datosDeAtencion.push(
              {key:elementa.nombre, value:res[0][daKey]}
             );
             if (indexa==(datosAtencionKeys.length-1)) {
              console.log('Atención '+idAtencion);
              let laFecha = res[0].FechaInicio.toString().split('T')[0];
              let laHora = res[0].HoraDeAccidente;
              console.log('FechaHora '+(laFecha+'T'+laHora))
              localStorage.setItem('FechaHora', laFecha+'T'+laHora);
              console.dir(this.datosDeAtencion)
             }
          }
         
          localStorage.setItem('datosDeAtencion', JSON.stringify(this.datosDeAtencion));
          localStorage.setItem('identidadAsegurado', identidadAsegurado);

        },
        async (res) => {}
      )

      this.refreshClientSignatureFromServer(idAtencion);
    } else {
      this.firmaPrecargada = emptySignatureWhite;
      this.isSignature = false;
      this.textoEmergente1 = "Esta atención ya no puede editarse.\n\r"
      this.textoEmergente2 = 'Para mayor detalle, consulta a tu administrador de sistema.';
    }

    let daSegmentsContainer = document.getElementsByClassName('appointment-item');
    
    let daIndex = indexInput;
    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      if (daIndex == index) {
        element.setAttribute('style', 'color:#0058CB;border:2px solid #0058CB;');
      } else {
        element.setAttribute('style', 'color:gray;border:none');
      }
    }

    for (let index = 0; index < this.filtroAtenciones.length; index++) {
      const element = this.filtroAtenciones[index];
      if (idAtencion == element.IdAtencion) {
        this.atIndex = element.IdAtencion;
        this.elCliente = element.Cliente;
        this.elServicio = element.Servicio;
        this.elColorEstado = element.ColorEstado;
        this.laFecha = element.Fecha;
      }
    }
    this.sig?.clear();
  }

  validarCorreo() {
    this.stripeForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
    });
  }

  cambiarFirma() {
    this.isSign = false;
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.backgroundColor = "rgb(255, 255, 255)";
    this.sig.minWidth = 1;
    this.sig.maxWidth = 1.5;
    this.sig.dotSize = 3;
  }

  recargarFirma() {
    this.firmaPrecargadaAjustador = this.user.Firma;
    localStorage.setItem('firmaPrecargadaAjustador', this.firmaPrecargadaAjustador);
  }

  async getCountry() {

    this.api.Expediente(this.atIndex).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.elExpediente = res;

        let laLatitud = localStorage.getItem('laLatitud');
        let estaLatitud = parseFloat(laLatitud);
        this.latitud = this.elExpediente[0].LatitudCliente;
        this.longitud = this.elExpediente[0].LongitudCliente;
        this.FechaSiniestro = this.elExpediente[0].FechaRegistro;
        localStorage.setItem('FechaRegistro', this.FechaSiniestro);
        if (this.platform.is('android')) {
          this.geo.reverseGeocode(this.latitud, this.longitud).then((result: NativeGeocoderResult[]) => {
            this.laLocalidad = result;
            this.miLocalidad = JSON.stringify(this.laLocalidad);
            this.miPais = this.laLocalidad[0].countryCode;

            const paisId = this.countryService.convertCountryCode(this.miPais);
       
            this.miPaisNombre = this.laLocalidad[0].countryName;
            localStorage.setItem('codigoPais', this.miPais);
            localStorage.setItem('nombrePais', this.miPaisNombre);
            localStorage.setItem('miLocalidad', this.miLocalidad);
            this.identificarPais();
          })
        }
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

  geoCodeReverse(){
    let laLatitud = localStorage.getItem('laLatitud');
     let laLongitud = localStorage.getItem('laLongitud');
        if (this.platform.is('android')) {
          this.geo.reverseGeocode(parseFloat(laLatitud), parseFloat(laLongitud)).then((result: NativeGeocoderResult[]) => {
            this.laLocalidad = result;
            this.miLocalidad = JSON.stringify(this.laLocalidad);
            this.miPais = this.laLocalidad[0].countryCode;
            this.miPaisNombre = this.laLocalidad[0].countryName;
            localStorage.setItem('codigoPais', this.miPais);
            localStorage.setItem('nombrePais', this.miPaisNombre);
            localStorage.setItem('miLocalidad', this.miLocalidad);
            this.identificarPais();
          })
        }
     /*   */
  }

  tryIt(){
    this.router.navigate(['./clientehn']);
  }

  clearSegmentsStorage() {

    // Segmento Solicitante
    localStorage.removeItem('dataProcess-CorreoElectronico');
    localStorage.removeItem('dataProcess-FechaNacimientoConductor');
    localStorage.removeItem('dataProcess-Edad');
    localStorage.removeItem('dataProcess-TerceroResponsable');
    
    localStorage.removeItem('elTipoLicencia');
    localStorage.removeItem('elTipoLicenciaId');
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
    localStorage.removeItem('bpmArray-ValorReserva');
    localStorage.removeItem('elTipoSiniestro');
    localStorage.removeItem('laDescripcion');
    localStorage.removeItem('lasObservaciones');

    localStorage.removeItem('coords-latitud');
    localStorage.removeItem('coords-longitud');

      localStorage.removeItem('datos-Sexo');
      localStorage.removeItem('elGenero');
      localStorage.removeItem('elGeneroId');
      localStorage.removeItem('nombreConductor');
      localStorage.removeItem('tipoCobertura');
      localStorage.removeItem('laCobertura');
      localStorage.removeItem('dataProcess-PorqueNoUsoServicioAsistencia');
      localStorage.removeItem('dataProcess-DireccionEnvioCorrespondencia');
      localStorage.removeItem('dataProcess-DescripcionTercerosMuertos');
      localStorage.removeItem('dataProcess-DescripcionTercerosHeridos');
      localStorage.removeItem('dataProcess-UbicacionVehiculoDetenido');
      localStorage.removeItem('dataProcess-DondeSeEncuentraVehiculo');
      localStorage.removeItem('dataProcess-NombreAtribuyeAccidente');
      localStorage.removeItem('dataProcess-AutoridadInvolucrada');
      localStorage.removeItem('dataProcess-DescripcionAudiencia');
      localStorage.removeItem('dataProcess-DireccionConductor');
      localStorage.removeItem('dataProcess-TelefonoConductor');
      localStorage.removeItem('dataProcess-TelefonoAsegurado');
      localStorage.removeItem('dataProcess-DescripcionDanio');
      localStorage.removeItem('dataProcess-CelularConductor');
      localStorage.removeItem('dataProcess-CelularAsegurado');
      localStorage.removeItem('dataProcess-NombreConductor');
      localStorage.removeItem('dataProcess-NumeroUnidad');
      localStorage.removeItem('dataProcess-Descripcion');
      localStorage.removeItem('dataProcess-Licencia');
      localStorage.removeItem('dataProcess-Vigencia');
      localStorage.removeItem('datos-Kilometraje');
      localStorage.setItem('dataProcess-AseguradoUsoPoliza', '1');
      localStorage.setItem('dataProcess-RefTipoConductorId', '1');
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      localStorage.setItem('dataProcess-AgendarAudiencia', '2');
      localStorage.setItem('dataProcess-Parentesco', '37');
      localStorage.setItem('nombreConductor', '');
      localStorage.setItem('dataProcess-NombreConductor', '');
      localStorage.setItem('estaEvaluado', 'false');
  }

  

  identificarPais() {
    if (this.miPais == "HN") {
      this.banderaPais = '../../assets/img/flag-round-hn.png';
      this.codigoPais = 'hn';
      this.getTipoLicencia(3);
    } else if (this.miPais == "GT") {
      this.banderaPais = '../../assets/img/flag-round-gt.png';
      this.codigoPais = 'gt';
      this.getTipoLicencia(4);
    }else{
      this.iconIndex = this.randomize(0, 2);
      let elIcono = iconWorlds[this.iconIndex];
      this.banderaPais = elIcono.url;
    }
  }

  async getTipoLicencia(paisIdentidad) {
    this.isLoading = true;
    this.api.TipoDeLicencia(paisIdentidad).pipe(
      finalize(async () => {
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

  validarFirmaGuardar() {
    this.presentToastFirma("Firma para?", 'middle', 'firma');
  }

  async presentToastFirma(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    if (currentToast.length > 0) {
      this.toast.dismiss();
    }
    const toast = await this.toaster.create({
      message: message,
      color: 'primary',
      duration: 90000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: ' | ',
          role: 'divider'
        },
        {
          text: 'Firma Asegurado',
          role: 'confirm',
          handler: () => {
            this.esAjustador = false;
            this.saveSignatureAsegurado(this.atIndex);
          }
        },
        {
          text: ' | ',
          role: 'divider'
        },
        {
          text: 'Firma Ajustador',
          role: 'confirm',
          handler: () => {
            this.esAjustador = true;
            this.saveSignature(this.api.currentUser.ProveedorAgenteId);
          }
        },
      ],
    });
    await toast.present();
  }
  goSearch() {
    this.getAtenciones();
    $('#greenStat').fadeOut('xslow');
    $('#gruaBoton').fadeOut('xslow');
    $('#anyStat').fadeIn('xslow');
    $('#iconsGrid').fadeIn('xslow');
    this.isSearch = true;

    let tabsContainer = document.getElementsByTagName('ion-tab-button');
    let tabbarContainer = document.getElementsByTagName('ion-tab-bar');
    tabbarContainer[0].setAttribute('style', 'background: white; height:90px');

    for (let index = 0; index < tabsContainer.length; index++) {
      const element = tabsContainer[index];
      element.setAttribute('style', 'display: none');
    }

  }

  closeSearch(){
    this.results = [];
    $('#greenStat').fadeIn('xslow');
    $('#gruaBoton').fadeIn('xslow');
    
    $('#anyStat').fadeOut('xslow');
    $('#iconsGrid').fadeOut('xslow');
    this.isSearch = false;

    let tabsContainer = document.getElementsByTagName('ion-tab-button');
    let tabbarContainer = document.getElementsByTagName('ion-tab-bar');
    tabbarContainer[0].setAttribute('style', 'background: #0090d0;height:50px');
    for (let index = 0; index < tabsContainer.length; index++) {
      const element = tabsContainer[index];
      element.setAttribute('style', 'display: inherit');
    }
  }

  grua(){
    if (this.blockWhenNoActiveAttention()) {
      return;
    }

    this.call.callNumber('22802886',true)
    .then(res => 
      console.log('')
      )
    .catch(err => 
      console.log('')
      );
  }

  goAdeuda(){
    this.router.navigate(['./adeuda'])
  }

  goCulpable(){
    this.router.navigate(['./culpable'])
  }

  goFiniquito(){
    let elFiniquito = {
      NumeroReclamo: "", // despues de crear el reclamo
      FechaDesde: "2023-11-14T19:55:55.849Z", // Input directo
      FechaHasta: "2023-11-14T19:55:55.849Z", // Input directo
      NombreCliente: this.elCliente, // de la info del asegurado
      TipoCoberturaFicohsa: "", // Input directo
      FechaFirma: "2023-11-14T19:55:55.849Z", // Input directo
      FirmaCliente: "", // Desde el canvas
      NombreQuienRecibe: "", // Input directo
      IdentidadQuienRecibe: "", // Input directo
      NumeroCheque: "", // Input directo
      FechaDelCheque: "2023-11-14T19:55:55.849Z", // Input directo
      ValorDelCheque: 0, // Input directo
      NombreAFavor: "", // Input directo
      Poliza: "", // de la info del asegurado
      RefAtencionId: 0, // de la info del asegurado
      Marca: "", // de la info del asegurado
      Modelo: "", // de la info del asegurado
      Anio: 0, // de la info del asegurado
      Placa: "", // de la info del asegurado
      Chasis: "", // de la info del asegurado
      Motor: "", // de la info del asegurado

      beneficiarioTipo: '', // falta
      fechaSiniestro: ''
    }

    localStorage.setItem('finiquito', JSON.stringify(elFiniquito));

    this.router.navigate(['./finiquito']);
  }

}
