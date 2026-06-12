import { ajustadorHn, clienteHn } from './../interfaces/formulario';
import { Ajustador } from './../interfaces/ajustador';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras, RouterOutlet, ActivationStart } from '@angular/router';
import {  ActionSheetController, AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Expedientes } from '../interfaces/expedientes';
import { ApiService } from '../services/api.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ModalController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { ConnectionStatus } from '@capacitor/network';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { GoogleMap } from '@capacitor/google-maps';
//import { GoogleMaps } from '@ionic-native/google-maps';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { meses } from '../environments/calendario';
import { DeviceService } from '../services/device.service';
import * as L from 'leaflet';
import { ExpedienteInfoModalComponent } from './expediente-info-modal.component';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.page.html',
  styleUrls: ['./expediente.page.scss'],
})
export class ExpedientePage implements OnInit {
  @ViewChild('mapExpediente') mapRef: ElementRef<HTMLElement>;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  newMaP: GoogleMap;

  expediente: Expedientes[];miExpediente: Expedientes[];laLocalidad:any=[];miLocalidad:any=[];latitud:any;longitud:any;openModal: boolean = false;esClienteCompleto:boolean=false;
  clienteCompleto:any= 'false';copmleteByCase:any=[];isLoading: boolean=false;isLoadingData:boolean=false; leido:boolean=false;conexion: ConnectionStatus;conectividad: boolean;coordinates:any;
  geoInterval:any;miPais:any;miPaisNombre:any;miPaisBandera:any;miPaisLocalidad:any;miPaisLocalidadSub:any;idAtencion:string;elColorEstado:any;user:any=null;
  formulario=false;asignacion=false;nombreAjustador:string;message:string;position:string;class:string;idAgente:number;ajustadores:Ajustador[];agentes:any=[];
  clienteHn: clienteHn={};ajustadorHN: ajustadorHn={};ajustadoresList: ajustadorHn[]=[]; moveLatitud: any;  moveLongitud: any;miMoneda:any;moneda:any;
  markerId: string; esAjustadorCompleto: boolean=false; isTrack: boolean=false;latitudAju: string;longitudAju: string;distancia: any; mapa: google.maps.Map;
  directionsService: google.maps.DirectionsService; directionsDisplay: google.maps.DirectionsRenderer;trackInterval: NodeJS.Timeout; moveCoords: any; moverCoordenadas: string;
  diferencia: string;  distanciaFinal: string;  distanciaInicialMetros: number;  distanciaMetros: any;  diferenciaMetros: number;  rutaInicial: any;  mediaLatitud: string;
  mediaLongitud: string;  counter: any;  ajuMarker: google.maps.Marker;  pointsArray: any;  puntos: string;  firstInterval: NodeJS.Timeout;  crashMarker: google.maps.Marker;
  crashOverlay: google.maps.OverlayView;
  leafletMap: L.Map;
  leafletCrashMarker: L.Marker;
  leafletAjuMarker: L.Marker;
  leafletRouteLine: L.Polyline;
  leafletTravelLine: L.Polyline;
  leafletTravelPoints: L.LatLng[] = [];
  leafletAutoFollow = true;
  leafletIdleTimer: ReturnType<typeof setTimeout>;
  readonly leafletFollowZoom = 17;
  bounds: google.maps.LatLngBounds;  marcadorAju: any; routeString:any; ajustadorId:any; watcher:any;  geoloc: Geolocation;  distanciaConvert: string;  distanciaString: string;
  mapInfoText: any; anyInterval:any; isArrived:boolean = false; isTracking:boolean=false;  arrayString: string;  elCliente: any;  atenciones: any;  bpmFicohsa: any;breakpoint:number = 1;
  newMarkers:any=[]; coordsLat:any; coordsLon:any; cacheCount:number=0; cacheCliente:any=[]; forwardUrl:any; lugar:any;
  source: any;  proveedorLatitud: number;  proveedorLongitud: number; coordenadasDeCorreccion:any=[]; coordenadasAju:any;
  nuevaLatitud: number;
  nuevaLongitud: number;
  elFiniquito: {
    NombreCliente: any; // de la info del asegurado
    Poliza: any; // de la info del asegurado
    RefAtencionId: string; // de la info del asegurado
    Marca: any; // de la info del asegurado
    Modelo: any; // de la info del asegurado
    Anio: any; // de la info del asegurado
    Placa: any; // de la info del asegurado
    Chasis: any; // de la info del asegurado
    Motor: any; // de la info del asegurado
    // variables desde inputs
    NumeroReclamo: string; // despues de crear el reclamo
    FechaDesde: string; // Input directo
    FechaHasta: string; // Input directo
    TipoCoberturaFicohsa: string; // Input directo
    NombreQuienRecibe: string; // Input directo
    IdentidadQuienRecibe: string; // Input directo
    NumeroCheque: string; // Input directo
    FechaDelCheque: string; // Input directo
    ValorDelCheque: number; // Input directo
    NombreAFavor: string; // Input directo
    FechaFirma: any; // Input directo
    FirmaCliente: string;
  };
  now: Date;  diaPie: number;  mesPie: number;  anioPie: number;  daDate: Date;  dia: any;  mes: any;  anio: any;  fechaParrafo: string;  fechaPie: string;
  formateadaSiniestro: string;  identidadAsegurado: any;  laExpediente: any = [];
  isTablet: boolean = false;  isItTablet: boolean = false;
  customActionSheetOptions = {cssClass: 'custom-action-sheet'}; initialBrakeInfo:any='0.9';
  

  constructor(private router: Router,private loading: LoadingController,private alert: AlertController,private toaster: ToastController,private toastr: ToastService,
    private api: ApiService,private routeActive: ActivatedRoute,private call: CallNumber,private myModal: ModalController,private platform:Platform,
    private so: ScreenOrientation,private geo:NativeGeocoder, private location:Location, private actionSheetCtrl: ActionSheetController,
    private deviceService: DeviceService) {
      this.user= this.api.currentUser; this.routeActive.queryParams.subscribe(params => {
        this.idAtencion= params.Id;
      })

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

      localStorage.setItem('previous', window.location.pathname);

      this.getCountry();
        localStorage.setItem('clienteCompleto', 'false');
      
    }

    ionViewWillEnter(){
      console.log("ionViewWillEnter")
      
  }

  ionViewDidEnter(){
    this.isItTablet = this.platform.is('tablet');

    if (this.isItTablet == true) {
      this.initialBrakeInfo = '1';
    }

  let polNum:any;
  let cerNum:any;
   this.getExpediente();
   this.getAtenciones();
   //alert(this.idAtencion);

   

      setTimeout(() => {
      let exped:any = localStorage.getItem('elExpediente'); let numPol:any;
      this.laExpediente = JSON.parse(exped);
      polNum = this.laExpediente[0].PolizaExterna.split('-')[1];
      cerNum = this.laExpediente[0].Certificado;

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
          
        }, 2000);
        
   this.api.ObtenerFiniquito(parseInt(this.idAtencion)).pipe(
    finalize(async () => {
      this.isLoading = false;
    })
  ).subscribe(
    async (res) => {
      console.log('El finiquito');
      console.log(res);
    },
    async (error) => {
      console.log('no hay finiquito '+error);
    }
  );
  }

  ngOnInit() {
    // Manejo de botón de regreso
    this.isTablet = this.deviceService.isTablet;
    
    localStorage.setItem('origin', window.location.pathname);
    this.platform.backButton.subscribe(()=>{
      this.clearIntervals();
	    this.Torval();
      //this.router.navigate(['./tab1']);
      this.toastr.dismissToast();
      this.myModal.dismiss().then();
      window.location.reload();
    });

    // Manejo de orientación del app
    this.platform.ready().then(() => {
      this.elColorEstado = localStorage.getItem('elColorEstado');
      //alert(this.elColorEstado)
    });

    // Maneo de carga de atenciones y características de logística
    this.user= this.api.currentUser; this.routeActive.queryParams.subscribe(params => {
      this.idAtencion= params.Id;
      this.source = params.Source;

      
      setTimeout(() => {
        this.obtenerCacheCliente(this.idAtencion);
        
        this.api.ActualizaLogAtencion(this.idAtencion).pipe(
          finalize(async () => {
            this.isLoading = false;
          })
        ).subscribe(
          async (res) => {
            console.log(res)
          }
        );

        this.api.DatosDeAtencion(this.idAtencion).pipe(
          finalize(async () => {
            this.isLoading = false;
          })
        ).subscribe(
          async (res) => {
            console.log("Detalles de audiencia en ver expediente: " + res.length);
            console.dir(res);
            if (res) {
              this.identidadAsegurado = res[0].IdentidadCliente;
              this.bpmFicohsa = res[0].CodigoBPMFicohsa;
              localStorage.setItem('identidadAsegurado', this.identidadAsegurado);  
            }
            
          }
        )
  
      }, 3000);
    }
    );
    //this.getExpediente();
    this.api.Ajustadores(3).pipe( 
      finalize(async ()=>{
        console.log('fin');
      })
    ).subscribe(
       (res) =>{
        if (res) {
          this.agentes = JSON.parse(res);
          console.log(this.agentes[0].IdAjustador, 'mi respuesta');
          this.ajustadorId = this.agentes[0].IdAjustador;
        }
        
      },
      async (res) => {
        
        this.router.navigate(['./tabs'])
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
          
        });
        await alert.present();
      }
    )

    this.outletDeactivate();

  }

  outletDeactivate(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1")
        this.outlet.deactivate();
    });
  }

  handleForward(){
    this.isLoading = true;
    this.obtenerCacheCliente(this.idAtencion);

    //alert('El cliente completo es '+ this.esClienteCompleto);
    setTimeout(() => {
      if (this.esClienteCompleto==true) {
        //alert('Voy a ajustar el HN');
        this.ajustadorHn();      
      }else{
        //alert('Voy a ir al cliente');
        this.goCliente();
      }  
      this.isLoading = false;
    }, 3000);
    
  }

  triggerModalInfo(){
    this.openInfoModal(true);
  }

  async openInfoModal(openThirdAccordion: boolean = true) {
    const topActionSheet = await this.actionSheetCtrl.getTop();
    if (topActionSheet) {
      await topActionSheet.dismiss();
      await topActionSheet.onDidDismiss();
    }

    const modal = await this.myModal.create({
      component: ExpedienteInfoModalComponent,
      componentProps: {
        expediente: this.expediente,
        idAtencion: this.idAtencion,
        miMoneda: this.miMoneda,
        openThirdAccordion,
        traceRoute: () => this.retraceRoute()
      },
      presentingElement: document.querySelector('ion-router-outlet') as HTMLElement,
      backdropDismiss: true,
      initialBreakpoint: this.initialBrakeInfo,
      breakpoints: [0, 0.25, 0.5, 0.8, 0.9, 1],
      cssClass: 'expediente-info-modal',
      mode: 'ios'
    });

    await modal.present();
  }

  moveTo(breakpoint: number) {
    const modal = document.querySelector('ion-modal.expediente-info-modal') as HTMLIonModalElement;
    modal?.setCurrentBreakpoint(breakpoint);
  }

  goAdeuda(){
    this.Torval();
    this.router.navigate(['./adeuda'])
  }

  goCulpable(){
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    //this.router.navigate(['./culpable']);
    this.router.navigate(['./culpable'], { queryParams: { pageSource: './expediente' } });
  }

  goBeneficiario(){
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    this.router.navigate(['./beneficiario']);
  }

  goFiniquito(){
    this.Torval();
    
    localStorage.setItem('finiquito', JSON.stringify(this.elFiniquito));

    this.router.navigate(['./finiquito']);
  }

  async getAtenciones() {
    let atencionesCount = 0;
    localStorage.setItem('atencionesCount', atencionesCount.toString());
    this.isLoading = true;
    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe(
      finalize(async () => {
        this.isLoading = false;
      })
    ).subscribe(
      (res) => {
        let indexAtenciones: any = 0;
        this.atenciones = res; 
        let products = this.atenciones.sort((a,b)=> b.IdAtencion-a.IdAtencion);
        console.log('las atenciones son ')
        console.dir(products);

        this.atenciones.forEach(item => {
          this.elCliente = item.Cliente;
          this.elColorEstado = item.ColorEstado;
        });
        
      },
      async (res) => {
        //alert(res.length)
        /*
        const alert = await this.alert.create({
          header: 'HELP',
          message: res.error.Message + 'Por cambio a producción',
          buttons: ['Ok']

        });
        await alert.present();
        */
      }
    )
  }
  

  goBack(){
    localStorage.setItem('coberturas', JSON.stringify([]));
    this.clearIntervals();
    this.toastr.dismissToast();
    this.Torval();
    if (this.source == 2) {
      this.router.navigate(['./tabs/tab2']);
      return;
    }
    window.location.reload();
    //this.location.back();
    //this.router.navigate(['./tab1']);
  }

  centroDeImpresion(){
    localStorage.setItem('idAtencion', this.idAtencion);
    this.router.navigate(['./printer']);
  }

  async presentExpedienteActions(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();

    const topModal = await this.myModal.getTop();
    await topModal?.dismiss().catch(() => {});

    let shouldOpenInfo = false;
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'expediente-actions-sheet',
      header: 'Expediente',
      subHeader: 'Atención #' + this.idAtencion,
      buttons: [
        {
          text: 'Audiencia',
          icon: 'chatbubbles-outline',
          handler: () => {
            this.goAudience();
          }
        },
        {
          text: 'Imprimir',
          icon: 'print-outline',
          handler: () => {
            this.goPrinter();
          }
        },
        
        {
          text: 'Finiquito',
          icon: 'cash-outline',
          handler: () => {
            this.goBeneficiario();
          }
        },
        {
          text: 'Fotos',
          icon: 'camera-outline',
          handler: () => {
            this.goFotos();
          }
        },
        {
          text: 'Solicitar grúa',
          icon: 'car-sport-outline',
          cssClass: 'expediente-action-warning',
          handler: () => {
            this.grua();
          }
        },
        {
          text: 'Información',
          icon: 'information-circle-outline',
          cssClass: 'expediente-action-bluegray',
          handler: () => {
            shouldOpenInfo = true;
          }
        },
        {
          text: 'Trazar ruta',
          icon: 'navigate-outline',
          cssClass: 'expediente-action-primary',
          handler: () => {
            this.retraceRoute();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel',
          cssClass: 'expediente-action-cancel'
        }
      ]
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss();

    if (shouldOpenInfo) {
      await this.openInfoModal(true);
    }
  }



  async getExpediente(){
    this.isLoading = true;
    this.api.Expediente(this.idAtencion).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       (res) =>{
        console.log(res, 'respuesta');
        this.expediente= res;
        console.log('El expediente es ');
        console.dir(this.expediente);
        console.log('la zona es : '+ this.expediente[0].Zona);

        this.moneda = this.expediente[0].Moneda;

//alert(this.moneda)
        if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
        
        this.latitud = this.expediente[0].LatitudCliente;
        this.longitud = this.expediente[0].LongitudCliente;

        let direccionCabina = this.expediente[0].Direccion;
        localStorage.setItem('direccionCabina', direccionCabina);

        let fechaRegistro = this.expediente[0].FechaRegistro;
          this.formateadaSiniestro = 'Fecha : '+fechaRegistro.toString().split('T')[0].toString()+', Hora : '+(fechaRegistro.toString().split('T')[1].toString()).split('.')[0];

        this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
      if (this.mapa) {
        this.directionsDisplay.setMap(this.mapa);
      }

        this.createMap(this.directionsService, this.directionsDisplay);

        this.elFiniquito = {
          NombreCliente: this.expediente[0].Cliente, // de la info del asegurado
          Poliza: this.expediente[0].PolizaExterna, // de la info del asegurado
          RefAtencionId: this.idAtencion, // de la info del asegurado
          Marca: this.expediente[0].Marca, // de la info del asegurado
          Modelo: this.expediente[0].Modelo, // de la info del asegurado
          Anio: this.expediente[0].Year, // de la info del asegurado
          Placa: this.expediente[0].NumeroPlaca, // de la info del asegurado
          Chasis: this.expediente[0].Chasis, // de la info del asegurado
          Motor: this.expediente[0].Motor, // de la info del asegurado
    
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
        

        if (this.platform.is('android')) {
          if (this.expediente[0].Ciudad == null || this.expediente[0].Ciudad == '') {
            this.expediente[0].Ciudad = this.laLocalidad[0].locality;
          }
          if (this.expediente[0].Zona == null || this.expediente[0].Zona == '') {
            this.expediente[0].Zona = this.laLocalidad[0].subAdministrativeArea;
          }
          if (this.expediente[0].Direccion == null || this.expediente[0].Direccion == '') {
            this.expediente[0].Direccion = this.laLocalidad[0].subLocality;
          }
          if (this.expediente[0].DireccionDestino == null || this.expediente[0].DireccionDestino == '') {
            this.expediente[0].DireccionDestino = this.laLocalidad[0].administrativeArea;
          }
        }
        this.miExpediente = res[0];
        

        console.log("Este expediente es ");
        console.dir(this.miExpediente);
        //localStorage.setItem('elExpediente', JSON.stringify(this.miExpediente));
      },
      async (res) => {
        
        this.router.navigate(['./tabs'])
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
          
        });
        await alert.present();
      }
    )
  }
  async listarAjustadores(){
    this.isLoading = true;
    this.api.Ajustadores(3).pipe(
      finalize(async () =>  {
        this.isLoading = false;
      })
    ).subscribe(
      (res) =>{
        console.log(res);
        this.ajustadores = res;
      }
    )
  }
  async reasignarAjustador(){
    this.isLoading = true;
    const data ={
      IdAtencion : this.idAtencion,
      IdAgenteProveedor: this.idAgente

    }
    console.log(data);
    this.api.Reasignar(data).pipe(
      finalize( async () => {
        this.isLoading = false;
      })
    ).subscribe(async (res) => {
      console.log(res);
      this.asignacion= false;
      const alert = await this.alert.create({
        header:'HELP',
        message:'La atención '+ this.idAtencion+ ' fue reasignada con éxito.',
        buttons:[{
          text:'Ok',
          role:'cancel'
        }]
      });
      await alert.present();
      this.router.navigate(['./tabs']);
    } )
  }
  async alertReasignar(){
    const alert = await this.alert.create({
      header:'HELP',
      message:'¿Está seguro de que desea reasignar? Una vez se reasignar al hacerlo esta no estara en tu lista.',
      buttons:[
        {
          text:'No',
          role:'cancel'
        },
        {
          text:'Si',
          handler: ()=>{
            this.asignacion=!this.asignacion;
          }
        }
    ]
    });
    await alert.present();

  }
  async confirmar(){
    this.message = "¿Está seguro de que desea aceptar la asignación?";
    this.position="middle";
    this.class = "alertador";
    
    if (this.elColorEstado == 'green') {
      this.presentToast(this.message, this.position, this.class);
    }else{
      if (this.elColorEstado == 'red'){
        this.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
      }else{
        this.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
      }
    }
  }


  limpiarCache() {
    this.Torval();
    window.location.reload();
  }

  obtenerCacheCliente(AtencionId:any){
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
          let answer:any = '';

          /*
          for (let index = 0; index < res.length; index++) {
            const element = res[index];
            
            answer = answer + element;
            verificacion = answer.indexOf(indexFlag);

            alert('El elemento es '+element+ ' y la palabra es '+answer+ ' y la verificacion es '+verificacion);
            console.log('El elemento es '+element+ ' y la palabra es '+answer+ ' y la verificacion es '+verificacion);
            console.dir(element)

            respuesta = respuesta+element;
            
            if (index== (res.length-1)) {
              verificacion = answer.indexOf(indexFlag);
              console.log('verificacion '+ verificacion)
              if (verificacion != -1) {
                this.esClienteCompleto = false;
              }

              if (verificacion == -1 || verificacion == '-1') {
                this.esClienteCompleto = true;
              }

              setTimeout(() => {
                //alert('El cliente completo es '+ this.esClienteCompleto);
              }, 600);
            }
          }
          */

          this.cacheCount = res.length;
          //alert('La cache tiene '+ this.cacheCount+ ' elementos, mas '+(this.cacheCount+1)+ ' evaluacion '+(this.cacheCount>0));
          if (this.cacheCount>1) {
            this.esClienteCompleto = false;
          }else{
            this.esClienteCompleto = true;
          }
          
        }else{
         //this.esClienteCompleto = false;
        }
        
      },
      async (error) => {
        console.log('Nou')
        //this.esClienteCompleto = false;
        //this.cacheCount = 0;
      }
    )

    setTimeout(() => {
      //alert(this.esClienteCompleto)
    }, 1000);
  }

  handleBack(){
    localStorage.setItem('coberturas', JSON.stringify([]));
    this.Torval();
    if (this.source == 2) {
      this.router.navigate(['./tabs/tab2']);
      return;
    }
    this.router.navigate(['./tabs/tab1'], { queryParams: { Id: this.idAtencion, Source:1 } });
  }

  goCliente(){
    //this.Torval();
    this.elColorEstado = localStorage.getItem('elColorEstado');
    //alert(this.elColorEstado)
    if (this.elColorEstado == 'green') {
      //this.presentToast(this.message, this.position, this.class);
      //alert(this.idAtencion)
      this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe( 
        finalize(async ()=>{
          console.log('fin');
          //alert('Ya')
        })
      ).subscribe(
          (res) =>{
            console.dir(res.length)
            //alert(res.length)
            if (res.length > 0) {
              //this.Torval();
              this.clearIntervals();
              this.openModal = false;
              this.toastr.dismissToast();
              //this.myModal.dismiss();
              const navigateExtras: NavigationExtras = 
              {
                state:{
                  data: [
                    {'forma': this.expediente},
                    {'latitud': this.latitud},
                    {'longitud' : this.longitud}
                  ]
                }
              }
              //$('#clickButton').fadeOut('slow');
              //$('#trackButton').attr('style', 'border: none');

              //alert(navigateExtras.state.data[0].forma[0].Cliente);
              this.router.navigate(['./clientehn'],navigateExtras);
            
            }else{
              $('#clickButton').fadeIn('slow');
              //$('#trackButton').attr('style', 'border: 1px solid red');
              this.toastr.presentToastNoButtonsRed('Aun no has activado la geolocalización en vivo. Presiona el botón de ruta e intenta nuevamente tomar la atención.', 'top', 'ruta');
            }
            /**/
          }
      )
    }else{
      
    }

    if (this.elColorEstado == 'red'){
      this.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
    if (this.elColorEstado == 'orange'){
      this.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }

    

    
    
  }

  comenzarFormulario(){
    const navigateExtra: NavigationExtras={
      state:{
        data: this.expediente
      }
    };
    this.router.navigate(['./mapa'],navigateExtra );
  }
  clientehond(){
    this.openModal = false;
    this.myModal.dismiss();
    const navigateExtra: NavigationExtras={
      state:{
        data: this.expediente
      }
    };
    this.router.navigate(['./mapa'],navigateExtra );
  }

  modalDismissListener(){
    //alert('Aheyyyy')
  }

  ajustadorHn(){
    this.elColorEstado = localStorage.getItem('elColorEstado');
    //alert(this.elColorEstado)
    this.Torval();
    if (this.elColorEstado == 'green') {
      
      this.openModal = false;
      this.myModal.dismiss();
      this.router.navigate(['./ajustadorhn'])
    }else{
      
    }

    if (this.elColorEstado == 'red'){
      this.toastr.presentToastSiniestroCerrado("Este registro ya fue finalizado con éxito. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
    if (this.elColorEstado == 'orange'){
      this.toastr.presentToastSiniestroCancelado("Este registro ya fue anulado o cancelado. Para mayor información, contacte a su administrador de sistema", 'middle', 'expediente');
    }
    
  }
  async getCambiarEstado(estado:number){
    this.openModal = true;
    this.isLoading = true;
    const data={
      id: this.expediente[0].Id,
      estado:estado
    }
    this.api.cambiarEstadoOrden(data).pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       (res) =>{
        console.log(res, 'respuesta');
        if(estado === 8){
        this.formulario=true;
        }
        if (estado === 9){
          this.router.navigate(['./tabs'])
        }
      },
      async (res) => {
        this.router.navigate(['./tabs'])
        const alert = await this.alert.create({
          header:'HELP',
          message:res.error.Message,
          buttons:['Ok']
        });
        await alert.present();
      }
    )
  }
  grua(){
    this.Torval();
    this.openModal = false;
    this.myModal.dismiss();
    this.call.callNumber('22802886',true)
    .then(res => console.log('Llamada realizada', res))
    .catch(err => console.log('Error Realizando la llamada', err));
  }
  async rechazar(){
    const alert = await this.alert.create({
      header:'HELP',
      cssClass: 'ion-alerta',
      message:'¿Está seguro de que desea rechazar esta orden?',
      buttons:[{
                  text:'No',
                  role: 'cancel',
              },
              {
                text:'Si',
                handler: () => {
                  this.getCambiarEstado(9)
                }
              }
            ]
    });
    await alert.present();
  }

  cerrarModal(){
    this.myModal.dismiss();
  }

  async presentToast(message, position, clase) {
    const currentToast = document.getElementsByTagName('ion-toast');
    console.log('Tengo estos toasters : ' + currentToast.length);
    if(currentToast.length > 0){
      this.toaster.dismiss();
    }
    const toast = await this.toaster.create({
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
            if (!this.leido) {
              this.toaster
            }else{}
            this.getCambiarEstado(6)
          }
        },
      ],
    });
    await toast.present();
  }

  async getCountry(){
    if (this.platform.is('android')) {
      this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
      this.miLocalidad = JSON.stringify(this.laLocalidad);
      //this.latitud = this.laLocalidad[0].latitude;
      //this.longitud = this.laLocalidad[0].longitude;
      localStorage.setItem('expedienteLatitud', this.latitud);
      localStorage.setItem('expedienteLongitud', this.longitud);

     // alert(this.latitud+', '+this.longitud)

      this.miPais = this.laLocalidad[0].countryCode;
      localStorage.setItem('codigoPais', this.miPais);
      this.miPaisLocalidad = this.laLocalidad[0].locality;
      this.miPaisNombre = this.laLocalidad[0].countryName;
      localStorage.setItem('nombrePais', this.miPaisNombre);
      this.miPaisLocalidadSub = this.laLocalidad[0].subLocality;
      localStorage.setItem('latitud', this.laLocalidad[0].latitude);
      localStorage.setItem('longitud', this.laLocalidad[0].longitude);
      this.isLoading = false;
      if(this.miPais == "HN"){
        this.miPaisBandera = '../../assets/img/flag-hn.png';
      }else if(this.miPais == "GT"){
        this.miPaisBandera = '../../assets/img/flag-gt.png';
      }
      this.isLoading = false;
    }else{
      this.coordinates = localStorage.getItem('coordinates');
      this.miPaisBandera = '../../assets/img/flag-hn.png';
      this.latitud = this.laLocalidad[0].latitude;
      this.longitud = this.laLocalidad[0].longitude;

      //alert(this.latitud)

      this.miPais = 'HN';
      localStorage.setItem('codigoPais', this.miPais);
      this.miPaisLocalidad = 'Tegucigalpa';
      this.miPaisNombre = 'Honduras';
      localStorage.setItem('nombrePais', this.miPaisNombre);
      this.miPaisLocalidadSub = 'Colonia Hato de Enmedio';
      localStorage.setItem('latitud', this.latitud);
      localStorage.setItem('longitud', this.longitud);
      this.isLoading = false;
    }
    
  }

  private initLeafletMap(coordenadas: {lat: any, lng: any}, zoom: number = 11) {
    const center = L.latLng(Number(coordenadas.lat), Number(coordenadas.lng));

    if (!this.leafletMap) {
      this.leafletMap = L.map('mapExpediente', {
        attributionControl: false,
        zoomControl: false
      }).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(this.leafletMap);

      L.control.zoom({
        position: 'topright'
      }).addTo(this.leafletMap);

      this.bindLeafletCameraControls();
    } else {
      this.leafletMap.setView(center, zoom);
    }

    setTimeout(() => {
      this.leafletMap.invalidateSize();
    }, 250);
  }

  private bindLeafletCameraControls() {
    if (!this.leafletMap) {
      return;
    }

    const container = this.leafletMap.getContainer();
    const handleUserInteraction = () => this.activateLeafletManualMode();

    L.DomEvent.on(container, 'mousedown', handleUserInteraction);
    L.DomEvent.on(container, 'touchstart', handleUserInteraction);
    L.DomEvent.on(container, 'wheel', handleUserInteraction);

    this.leafletMap.on('drag zoom', () => {
      if (!this.leafletAutoFollow) {
        this.scheduleLeafletAutoFollow();
      }
    });
  }

  private activateLeafletManualMode() {
    const wasAutoFollowing = this.leafletAutoFollow;
    this.leafletAutoFollow = false;

    if (wasAutoFollowing && this.leafletRouteLine) {
      setTimeout(() => {
        if (!this.leafletAutoFollow && this.leafletMap && this.leafletRouteLine) {
          this.leafletMap.fitBounds(this.leafletRouteLine.getBounds(), {
            padding: [36, 36]
          });
        }
      }, 80);
    }

    this.scheduleLeafletAutoFollow();
  }

  private scheduleLeafletAutoFollow() {
    if (this.leafletIdleTimer) {
      clearTimeout(this.leafletIdleTimer);
    }

    this.leafletIdleTimer = setTimeout(() => {
      this.resumeLeafletAutoFollow();
    }, 12000);
  }

  private resumeLeafletAutoFollow() {
    this.leafletAutoFollow = true;

    if (this.leafletMap && this.leafletAjuMarker) {
      this.leafletMap.flyTo(this.leafletAjuMarker.getLatLng(), this.leafletFollowZoom, {
        animate: true,
        duration: 0.8
      });
    }
  }

  private appendLeafletTravelPoint(position: L.LatLng) {
    const previousPoint = this.leafletTravelPoints[this.leafletTravelPoints.length - 1];

    if (previousPoint && previousPoint.distanceTo(position) < 3) {
      return;
    }

    this.leafletTravelPoints.push(position);

    if (!this.leafletTravelLine) {
      this.leafletTravelLine = L.polyline(this.leafletTravelPoints, {
        color: '#14365f',
        dashArray: '8 12',
        lineCap: 'round',
        opacity: 0.9,
        weight: 5
      }).addTo(this.leafletMap);
      return;
    }

    this.leafletTravelLine.setLatLngs(this.leafletTravelPoints);
  }

  private bindLeafletCorrectionClick(directionsService, directionsDisplay, fallbackCoordinates: {lat: any, lng: any}) {
    if (!this.leafletMap) {
      return;
    }

    this.leafletMap.off('click');
    this.leafletMap.on('click', (event: L.LeafletMouseEvent) => {
      const nuevaLatitud = event.latlng.lat;
      const nuevaLongitud = event.latlng.lng;

      this.nuevaLatitud = nuevaLatitud;
      this.nuevaLongitud = nuevaLongitud;

      localStorage.setItem('coords-latitud', nuevaLatitud.toString());
      localStorage.setItem('coords-longitud', nuevaLongitud.toString());
      localStorage.setItem('coords-latitud-' + this.idAtencion, nuevaLatitud.toString());
      localStorage.setItem('coords-longitud-' + this.idAtencion, nuevaLongitud.toString());
      this.setCrashIconNew(nuevaLatitud, nuevaLongitud);

      this.geoloc = navigator.geolocation;
      this.geoloc.getCurrentPosition(pos => {
        this.proveedorLatitud = pos.coords.latitude;
        this.proveedorLongitud = pos.coords.longitude;

        if (this.proveedorLatitud !== undefined && this.proveedorLatitud !== null) {
          this.coordenadasAju = {lat: this.proveedorLatitud, lng: this.proveedorLongitud};
        } else {
          this.coordenadasAju = fallbackCoordinates;
        }

        setTimeout(() => {
          const coordenadas = {lat: nuevaLatitud, lng: nuevaLongitud};
          directionsService.route({
            origin: this.coordenadasAju,
            destination: coordenadas,
            travelMode: 'DRIVING',
          }, (response, status) => {
            if (status === 'OK') {
              this.renderRoute(response, directionsDisplay);
              this.rutaInicial = response.routes[0];
              this.pointsArray = response.routes[0].legs[0];
              this.routeString = JSON.stringify(response);
            }
          });
        }, 1000);
      });

      const jsonPositionCorreccion = {
        Latitud: nuevaLatitud,
        Longitud: nuevaLongitud,
        RefAtencionId: this.idAtencion,
        RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
        Tipo: 'AJU_CORRECCION',
        Contador: 0
      };

      this.api.setPositionNRoute(jsonPositionCorreccion).pipe( 
        finalize(async ()=>{
          console.log('fin');
        })
      ).subscribe(
         (res) =>{
        },
        async (res) => {
          const alert = await this.alert.create({
            header:'HELP',
            message:res.error.Message,
            buttons:['Ok']
          });
          await alert.present();
        }
      );
    });
  }

  private getClientCrashIcon() {
    return L.divIcon({
      className: '',
      html: `
        <div class="help-client-crash-marker leaflet-client-crash-marker">
          <span class="help-client-crash-halo help-client-crash-halo-one"></span>
          <span class="help-client-crash-halo help-client-crash-halo-two"></span>
          <span class="help-client-crash-pin">
            <span class="help-client-crash-icon">
              <img src="assets/iconos/localizacion.svg" alt="" aria-hidden="true" />
            </span>
          </span>
        </div>
      `,
      iconSize: [115, 115],
      iconAnchor: [57.5, 67],
      popupAnchor: [0, -64]
    });
  }

  private getAdjusterIcon() {
    return L.icon({
      iconUrl: 'assets/iconos/ajustador-legal-halo-preview.svg',
      iconSize: [100, 100],
      iconAnchor: [50, 78],
      popupAnchor: [0, -72]
    });
  }

  private renderRoute(response, directionsDisplay?) {
    if (this.leafletMap) {
      this.drawLeafletRoute(response);
      return;
    }

    if (directionsDisplay) {
      directionsDisplay.setDirections(response);
    }
  }

  private drawLeafletRoute(response) {
    const overviewPath = response?.routes?.[0]?.overview_path || [];
    const latLngs = overviewPath.map(point => L.latLng(point.lat(), point.lng()));

    if (!latLngs.length || !this.leafletMap) {
      return;
    }

    if (this.leafletRouteLine) {
      this.leafletMap.removeLayer(this.leafletRouteLine);
    }

    this.leafletRouteLine = L.polyline(latLngs, {
      color: '#0058cb',
      opacity: 0.88,
      weight: 6
    }).addTo(this.leafletMap);

    if (this.leafletAutoFollow && this.leafletAjuMarker) {
      this.leafletMap.setView(this.leafletAjuMarker.getLatLng(), this.leafletFollowZoom);
    } else {
      this.leafletMap.fitBounds(this.leafletRouteLine.getBounds(), {
        padding: [36, 36]
      });
    }
  }

  createMap(directionsService, directionsDisplay) {
    this.coordsLat = localStorage.getItem('coords-latitud');
    //let latitud = localStorage.getItem('expedienteLatitud');
    $('#mapFooter').fadeIn('slow');

    setTimeout(async () => {
      let coodernadas;
      //alert(this.latitud)
      coodernadas = {lat: this.latitud, lng: this.longitud}

      localStorage.setItem('clienteLatitud', this.latitud);
      localStorage.setItem('clienteLongitud', this.longitud);

      console.log("Las coordenadas");
      console.dir(coodernadas);
      
      this.initLeafletMap(coodernadas, 11);
      this.bindLeafletCorrectionClick(directionsService, directionsDisplay, coodernadas);
      

      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
      if (this.mapa) {
        this.directionsDisplay.setMap(this.mapa);
      }

      this.isTracking = true;
      this.isLoadingData = true;
      this.isTrack = true;
      setTimeout(() => {
        this.traceRouteFromCurrentPosition(this.directionsService, this.directionsDisplay, true);
      }, 1000);
    }, 2000);
    
  }

  private getCrashRouteDestination(): Promise<{lat: number, lng: number}> {
    if (Number.isFinite(this.nuevaLatitud) && Number.isFinite(this.nuevaLongitud)) {
      return Promise.resolve({
        lat: this.nuevaLatitud,
        lng: this.nuevaLongitud
      });
    }

    const cachedLatitudValue = localStorage.getItem('coords-latitud-' + this.idAtencion);
    const cachedLongitudValue = localStorage.getItem('coords-longitud-' + this.idAtencion);
    const cachedLatitud = Number(cachedLatitudValue);
    const cachedLongitud = Number(cachedLongitudValue);

    if (cachedLatitudValue !== null && cachedLongitudValue !== null &&
        Number.isFinite(cachedLatitud) && Number.isFinite(cachedLongitud)) {
      this.nuevaLatitud = cachedLatitud;
      this.nuevaLongitud = cachedLongitud;
      return Promise.resolve({
        lat: cachedLatitud,
        lng: cachedLongitud
      });
    }

    return new Promise(resolve => {
      this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_CORRECCION').pipe(
        finalize(async () => {
          console.log('getting corrected route');
        })
      ).subscribe(
        (res) => {
          if (res.length > 0) {
            this.coordenadasDeCorreccion = res.sort((a,b) => {
              return new Date(b.FechaRegistro).getTime() - new Date(a.FechaRegistro).getTime();
            });
            const fixedCoords = this.coordenadasDeCorreccion[0];
            this.nuevaLatitud = parseFloat(fixedCoords.Latitud);
            this.nuevaLongitud = parseFloat(fixedCoords.Longitud);
            resolve({
              lat: this.nuevaLatitud,
              lng: this.nuevaLongitud
            });
          } else {
            resolve({
              lat: Number(this.latitud),
              lng: Number(this.longitud)
            });
          }
        },
        () => {
          resolve({
            lat: Number(this.latitud),
            lng: Number(this.longitud)
          });
        }
      );
    });
  }

  private setAdjusterRouteMarker(coordenadasAju: {lat: number, lng: number}) {
    if (this.leafletMap) {
      const position = L.latLng(coordenadasAju.lat, coordenadasAju.lng);

      if (this.leafletAjuMarker) {
        this.leafletAjuMarker.setLatLng(position);
      } else {
        this.leafletAjuMarker = L.marker(position, {
          icon: this.getAdjusterIcon()
        }).addTo(this.leafletMap);
      }

      this.appendLeafletTravelPoint(position);

      if (this.leafletAutoFollow) {
        this.leafletMap.setView(position, this.leafletFollowZoom);
      }

      return;
    }

    const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45,45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    }

    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }

    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });
    this.ajuMarker.setMap(this.mapa);
  }

  private saveInitialAdjusterPosition(coordenadasAju: {lat: number, lng: number}) {
    const jsonAjuPosition = {
      Latitud: coordenadasAju.lat,
      Longitud: coordenadasAju.lng,
      RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
    };

    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe(
      finalize(async () => {
        console.log('fin');
      })
    ).subscribe(
      (res) => {
        if (res.length > 0) {
          return;
        }

        this.api.setAjuPosition(jsonAjuPosition).pipe(
          finalize(async () => {
            console.log('fin');
          })
        ).subscribe(() => {
          const jsonPosition = {
            Latitud: coordenadasAju.lat,
            Longitud: coordenadasAju.lng,
            RefAtencionId: this.idAtencion,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_INI',
            Contador: 0
          };

          this.api.setPositionNRoute(jsonPosition).pipe(
            finalize(async () => {
              console.log('fin');
            })
          ).subscribe();
        });
      }
    );
  }

  private traceRouteFromCurrentPosition(directionsService, directionsDisplay, isAutomatic: boolean = false) {
    this.isLoading = true;

    if (!isAutomatic) {
      $('#botonCerrarModal').click();
    }

    this.geoloc = navigator.geolocation;
    this.geoloc.getCurrentPosition(async pos => {
      this.proveedorLatitud = pos.coords.latitude;
      this.proveedorLongitud = pos.coords.longitude;

      const coordenadasAju = {
        lat: this.proveedorLatitud,
        lng: this.proveedorLongitud
      };
      const coordenadas = await this.getCrashRouteDestination();

      this.setAdjusterRouteMarker(coordenadasAju);
      this.setClientCrashOverlay(coordenadas);

      directionsService.route({
        origin: coordenadasAju,
        destination: coordenadas,
        travelMode: 'DRIVING',
      }, (response, status) => {
        this.isLoading = false;
        this.isLoadingData = false;

        if (status !== 'OK') {
          return;
        }

        this.renderRoute(response, directionsDisplay);
        this.rutaInicial = response.routes[0];
        this.pointsArray = response.routes[0].legs[0];
        this.routeString = JSON.stringify(response);

        const dist = response.routes[0].legs[0].distance.text;
        const distM = response.routes[0].legs[0].distance.value;
        localStorage.setItem('dist', dist);
        localStorage.setItem('distM', distM.toString());
        localStorage.setItem('rutaInicial', JSON.stringify(this.rutaInicial));
        localStorage.setItem('routeString', JSON.stringify(this.routeString));
        this.puntos = JSON.stringify(this.rutaInicial);

        this.saveInitialAdjusterPosition(coordenadasAju);
      });
    }, () => {
      this.isLoading = false;
      this.isLoadingData = false;
      this.setClientCrashOverlay({lat: this.latitud, lng: this.longitud});
    }, {
      enableHighAccuracy: true
    });
  }

  retraceRoute() {
    this.traceRouteFromCurrentPosition(this.directionsService, this.directionsDisplay, false);
  }

  trazaRuta(directionsService, directionsDisplay){
    
    this.isLoading = true;
    $('#botonCerrarModal').click();
    this.bounds = new google.maps.LatLngBounds();
    

    this.geoloc = navigator.geolocation;
    
    console.dir(this.geoloc)
    
    this.geoloc.getCurrentPosition(pos=>{
      this.proveedorLatitud = pos.coords.latitude;
      this.proveedorLongitud = pos.coords.longitude;

      console.log('proveedorLatitud ' + this.proveedorLatitud);
      //alert('Aca 1 proveedorLatitud ' + this.proveedorLatitud);

      const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45,45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }

      let coordenadas;// = {lat: this.latitud, lng: this.longitud}
      this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_CORRECCION').pipe( 
        finalize(async ()=>{
          console.log('getting corrected route');
          //alert('Ya')
        })
      ).subscribe(
          (res) =>{
            console.dir(res.length)
            if (res.length > 0) {
              console.log('La ruta corregida debería ser ');
              console.dir(res)
              this.coordenadasDeCorreccion = res.sort((a,b) => b.FechaRegistro - a.FechaRegistro);
              let fixedCoords = this.coordenadasDeCorreccion[res.length-1];
              //console.dir(this.coordenadasDeCorreccion[res.length-1])
              coordenadas = {lat: parseFloat(fixedCoords.Latitud), lng: parseFloat(fixedCoords.Longitud)}
              //alert('Ya existen coordenadas corregidas de este proveedor')
            }else{
              coordenadas = {lat: this.latitud, lng: this.longitud}
            }
          }
      )


      let coordenadasAju = {lat: this.proveedorLatitud, lng: this.proveedorLongitud}

      if (this.leafletMap) {
        if (this.leafletAjuMarker) {
          this.leafletAjuMarker.setLatLng(L.latLng(coordenadasAju.lat, coordenadasAju.lng));
        } else {
          this.leafletAjuMarker = L.marker([coordenadasAju.lat, coordenadasAju.lng], {
            icon: this.getAdjusterIcon()
          }).addTo(this.leafletMap);
        }
      } else {
        this.ajuMarker = new google.maps.Marker({
          map: this.mapa,
          position: coordenadasAju,
          icon: ajuIcon
        });
        this.ajuMarker.setMap(this.mapa);
      }

      setTimeout(() => {
        console.log('Ok pues ');
        console.dir(coordenadas)  
      
      
      directionsService.route({
        origin: coordenadasAju,
        destination: coordenadas,
        travelMode: 'DRIVING',
      }, (response, status) => {
        if (status === 'OK') {
          this.renderRoute(response, directionsDisplay);

          if (this.leafletMap) {
            this.leafletMap.fitBounds(L.latLngBounds([
              L.latLng(coordenadasAju.lat, coordenadasAju.lng),
              L.latLng(coordenadas.lat, coordenadas.lng)
            ]), {
              padding: [36, 36]
            });
          } else {
            this.bounds.extend(this.ajuMarker.getPosition());
            this.mapa.fitBounds(this.bounds);
          }

          this.isLoading = false;
          

          const jsonProviderPosition = {
            Latitud: this.proveedorLatitud,
            Longitud: this.proveedorLongitud,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          }


          this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe( 
            finalize(async ()=>{
              console.log('fin');
              this.isLoading = false;
              //alert('Ya')
            })
          ).subscribe(
              (res) =>{
                console.dir(res.length)
                if (res.length > 0) {
                  //alert('Ya existen coordenadas iniciales de este proveedor')
                }else{
                  this.api.setAjuPosition(jsonProviderPosition).pipe( 
                    finalize(async ()=>{
                      console.log('fin');
                      //alert('Ya')
                    })
                  ).subscribe(
                      (res) =>{
                      //alert('setPositionNRoute')
                      const jsonPosition = {
                        Latitud: this.proveedorLatitud,
                        Longitud: this.proveedorLongitud,
                        RefAtencionId: this.idAtencion,
                        RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
                        Tipo: 'AJU_INI',
                        Contador: 0
                      }
      
                      this.api.setPositionNRoute(jsonPosition).pipe( 
                        finalize(async ()=>{
                          console.log('fin');
                        })
                      ).subscribe(
                        (res) =>{
                          //alert('setPositionNRoute hecho')
                          
                          
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
              }
          )


        }
      });
      
    }, 1000);

      setTimeout(() => {
        this.trackRoute();  
      }, 3000);
    })
    
    //this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});


    
  }

  trackRoute(){
    this.geoloc = navigator.geolocation;
    
    this.watcher = this.geoloc.watchPosition(this.savePositionNow, this.positionError, {enableHighAccuracy:true});

    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }
    this.trackInterval = setInterval(()=>{
      let latMovi = localStorage.getItem('moveLatitide');
      let lonMovi = localStorage.getItem('moveLongitude');
      if (latMovi) {
        console.log(latMovi)
        let coordsAju = {lat: parseFloat(latMovi), lng: parseFloat(lonMovi)};
        localStorage.setItem('moveCoords', JSON.stringify(coordsAju));


        const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
        const ajuIcon = {
          url: ajuIconUrl,
          color: 'orange',
          scaledSize: new google.maps.Size(45,45),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        }

        if (this.marcadorAju) {
          this.marcadorAju.setMap(null);
        }
        this.marcadorAju = new google.maps.Marker({
            position: coordsAju,
            map: this.mapa,
            icon: ajuIcon,
        });
        this.marcadorAju.setPosition(coordsAju);

        if (coordsAju) {
        
          const jsonPosition = {
            Latitud: latMovi,
            Longitud: lonMovi,
            RefAtencionId: this.idAtencion,
            RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
            Tipo: 'AJU_MOV',
            Contador: 0
          }
  
          this.api.setPositionNRoute(jsonPosition).pipe( 
            finalize(async ()=>{
              console.log('fin');
            })
          ).subscribe(
             (res) =>{
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
      }
    } , 60000);
  }

  savePositionNow(pos){
    console.log('Las nuevas coordenadas en tracking');
    console.dir(pos)
    localStorage.setItem('moveLatitide', pos.coords.latitude);
    localStorage.setItem('moveLongitude', pos.coords.longitude);
  }
  


  trackONCache(){
    //alert('Voy a crear el otro tipo de mapa')
    
    this.toastr.dismissToast();
    //$('#clickButton').fadeOut('slow');
    this.isTracking = true;
    this.isLoadingData = true;
    this.Torval();
    this.isTrack = true;
    

    this.latitudAju = localStorage.getItem('laLatitud');
    this.longitudAju = localStorage.getItem('laLongitud');

    //alert(this.latitudAju)

    const jsonAjuPosition = {
      Latitud: parseFloat(this.latitudAju),
      Longitud: parseFloat(this.longitudAju),
      RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
    }

    // Confirmar si existen coordenadas por esta atención
    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe( 
      finalize(async ()=>{
        console.log('fin');
        this.isLoading = false;
        //alert('Ya')
      })
    ).subscribe(
        (res) =>{
          console.dir(res.length)
          if (res.length > 0) {
            //alert('Ya existen coordenadas iniciales de ajustador')
          }else{

            this.api.setAjuPosition(jsonAjuPosition).pipe( 
              finalize(async ()=>{
                console.log('fin');
                //alert('Ya')
              })
            ).subscribe(
                (res) =>{
                //alert('setPositionNRoute')
                const jsonPosition = {
                  Latitud: parseFloat(this.latitudAju),
                  Longitud: parseFloat(this.longitudAju),
                  RefAtencionId: this.idAtencion,
                  RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
                  Tipo: 'AJU_INI',
                  Contador: 0
                }

                this.api.setPositionNRoute(jsonPosition).pipe( 
                  finalize(async ()=>{
                    console.log('fin');
                  })
                ).subscribe(
                  (res) =>{
                    //alert('setPositionNRoute hecho')
                    
                    
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
        }
    )

    //this.distancia = this.getDistanceFromLatLonInKm(this.latitud, this.longitud, this.latitudAju, this.longitudAju);
    //localStorage.setItem('distanciaInicial', this.distancia);

    let mapOptions = {
      zoom:18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    if (this.leafletMap) {
      this.initLeafletMap({lat: this.latitud, lng: this.longitud}, 18);
    } else {
      this.mapa = new google.maps.Map(document.getElementById("mapExpediente"), mapOptions);
    }
    //this.initAutocomplete();

  

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    if (this.mapa) {
      this.directionsDisplay.setMap(this.mapa);
    }

    if (this.leafletMap) {
      this.bindLeafletCorrectionClick(this.directionsService, this.directionsDisplay, {lat: this.latitud, lng: this.longitud});
    } else if (this.mapa) {
      this.mapa.addListener("click", (event) => {
        let nuevaLatitud = event.latLng.lat();
        let nuevaLongitud = event.latLng.lng();
        localStorage.setItem('coords-latitud', nuevaLatitud);
        localStorage.setItem('coords-longitud', nuevaLongitud);
        this.setCrashIconNew(nuevaLatitud, nuevaLongitud);
  
        const jsonPosition = {
          Latitud: nuevaLatitud,
          Longitud: nuevaLongitud,
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_CORRECCION',
          Contador: 0
        }
  
        this.api.setPositionNRoute(jsonPosition).pipe( 
          finalize(async ()=>{
            console.log('fin');
          })
        ).subscribe(
           (res) =>{
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
  
  
        setTimeout(() => {
          this.displayDirectionInit(this.directionsService,this.directionsDisplay, parseFloat(nuevaLatitud), parseFloat(nuevaLongitud), this.latitudAju, this.longitudAju);  
        }, 1000);
        //alert('Hey map '+event.latLng.lat())
      })
    }
    

    setTimeout(() => {
      this.displayDirectionInit(this.directionsService,this.directionsDisplay, parseFloat(this.coordsLat), parseFloat(this.coordsLon), this.latitudAju, this.longitudAju);  
    }, 1000);

   

    
    this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
    if (this.rutaInicial) {
      for (let index = 0; index < this.rutaInicial.length; index++) {
        const element = this.rutaInicial[index];
        console.log('Punto de ruta ' + element)
       }
    }else{}
    
    

    this.geoloc = navigator.geolocation;
    
    this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
    //this.mapa.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});


    
    this.anyInterval = this.trackInterval;
    this.trackInterval = setInterval(()=>{
      this.moveCoords = JSON.parse(localStorage.getItem('moveCoords'));
      this.moverCoordenadas = localStorage.getItem('moveCoords');
      this.moveLatitud = localStorage.getItem('moveLatitide');
      this.moveLongitud = localStorage.getItem('moveLongitude');
      this.diferencia = localStorage.getItem('diferencia');
      //this.distanciaFinal = localStorage.getItem('distancia');
      this.distanciaFinal = localStorage.getItem('dist');
      this.distanciaInicialMetros = this.distancia * 1000;
      this.distanciaMetros = parseFloat(localStorage.getItem('distM'));//parseFloat(this.distanciaFinal) * 1000;

      let calculo = this.distanciaMetros+5;
      //alert('distancia en metros es '+calculo)

      if (this.distanciaMetros < 6) {
        
        this.mapInfoText = 'Has llegado al lugar del siniestro.';
        this.isArrived = true;
        // Coordenadas: {{moverCoordenadas}} <br> Distancia: {{distanciaFinal}}
        // Has llegado al lugar del siniestro
        //this.toastr.presentToastArrival('Has llegado a tu destino', 'top', 'tracking');
      }else{
        this.isArrived = false;
        this.mapInfoText = 'Coordenadas: '+this.moverCoordenadas+' | '+ 'Distancia: '+this.distanciaFinal;
      }

      this.distanciaConvert = parseFloat(this.distanciaFinal).toFixed(2);
      this.distanciaString = this.distanciaConvert.toString();
       
      this.diferenciaMetros = Math.round(this.distanciaInicialMetros - this.distanciaMetros);
      this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
      this.mediaLatitud = localStorage.getItem('mediaLatitud');
      this.mediaLongitud = localStorage.getItem('mediaLongitud');

      this.moveMarker(this.moveCoords, this.moveLatitud, this.moveLongitud);
      
      this.counter = 1;

      if (this.moveCoords) {

        console.log("Eeeeeeeexitoooooo"+', '+this.moveLatitud+', '+this.moveLongitud+', '+this.counter)
        
        const jsonPosition = {
          Latitud: parseFloat(this.moveLatitud),
          Longitud: parseFloat(this.moveLongitud),
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_MOV',
          Contador: 0
        }

        this.api.setPositionNRoute(jsonPosition).pipe( 
          finalize(async ()=>{
            console.log('fin');
          })
        ).subscribe(
           (res) =>{
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
    } , 10000);

  
    
    /**/

  }



  trackON(){
    this.toastr.dismissToast();
    //$('#clickButton').fadeOut('slow');
    this.isTracking = true;
    this.isLoadingData = true;
    //this.Torval();
    this.isTrack = true;
    

    this.latitudAju = localStorage.getItem('laLatitud');
    this.longitudAju = localStorage.getItem('laLongitud');

    const jsonAjuPosition = {
      Latitud: parseFloat(this.latitudAju),
      Longitud: parseFloat(this.longitudAju),
      RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
    }

    // Confirmar si existen coordenadas por esta atención
    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_INI').pipe( 
      finalize(async ()=>{
        console.log('fin');
        this.isLoading = false;
        //alert('Ya')
      })
    ).subscribe(
        (res) =>{
          console.dir(res.length)
          if (res.length > 0) {
            //alert('Ya existen coordenadas iniciales de ajustador')
          }else{

            this.api.setAjuPosition(jsonAjuPosition).pipe( 
              finalize(async ()=>{
                console.log('fin');
                //alert('Ya')
              })
            ).subscribe(
                (res) =>{
                //alert('setPositionNRoute')
                const jsonPosition = {
                  Latitud: parseFloat(this.latitudAju),
                  Longitud: parseFloat(this.longitudAju),
                  RefAtencionId: this.idAtencion,
                  RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
                  Tipo: 'AJU_INI',
                  Contador: 0
                }

                this.api.setPositionNRoute(jsonPosition).pipe( 
                  finalize(async ()=>{
                    console.log('fin');
                  })
                ).subscribe(
                  (res) =>{
                    //alert('setPositionNRoute hecho')
                    
                    
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
/**/
          }
        }
    )

    //this.distancia = this.getDistanceFromLatLonInKm(this.latitud, this.longitud, this.latitudAju, this.longitudAju);
    //localStorage.setItem('distanciaInicial', this.distancia);

    let mapOptions = {
      zoom:18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    if (this.leafletMap) {
      this.initLeafletMap({lat: this.latitud, lng: this.longitud}, 18);
    } else {
      this.mapa = new google.maps.Map(document.getElementById("mapExpediente"), mapOptions);
    }

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    if (this.mapa) {
      this.directionsDisplay.setMap(this.mapa);
    }

    if (this.leafletMap) {
      this.bindLeafletCorrectionClick(this.directionsService, this.directionsDisplay, {lat: this.latitud, lng: this.longitud});
    } else if (this.mapa) {
      
    
    this.mapa.addListener("click", (event) => {
      let nuevaLatitud = event.latLng.lat();
      let nuevaLongitud = event.latLng.lng();
      localStorage.setItem('coords-latitud', nuevaLatitud);
      localStorage.setItem('coords-longitud', nuevaLongitud);

      this.setCrashIconNew(nuevaLatitud, nuevaLongitud);
    })

  }

    this.geoloc = navigator.geolocation;
    
    this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
    //this.mapa.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});



    this.anyInterval = this.trackInterval;
    this.trackInterval = setInterval(()=>{
      this.moveCoords = JSON.parse(localStorage.getItem('moveCoords'));
      this.moverCoordenadas = localStorage.getItem('moveCoords');
      this.moveLatitud = localStorage.getItem('moveLatitide');
      this.moveLongitud = localStorage.getItem('moveLongitude');
      this.diferencia = localStorage.getItem('diferencia');
      //this.distanciaFinal = localStorage.getItem('distancia');
      this.distanciaFinal = localStorage.getItem('dist');
      this.distanciaInicialMetros = this.distancia * 1000;
      this.distanciaMetros = parseFloat(localStorage.getItem('distM'));//parseFloat(this.distanciaFinal) * 1000;

      let calculo = this.distanciaMetros+5;
      //alert('distancia en metros es '+calculo)

      if (this.distanciaMetros < 6) {
        
        this.mapInfoText = 'Has llegado al lugar del siniestro.';
        this.isArrived = true;
        // Coordenadas: {{moverCoordenadas}} <br> Distancia: {{distanciaFinal}}
        // Has llegado al lugar del siniestro
        //this.toastr.presentToastArrival('Has llegado a tu destino', 'top', 'tracking');
      }else{
        this.isArrived = false;
        this.mapInfoText = 'Coordenadas: '+this.moverCoordenadas+' | '+ 'Distancia: '+this.distanciaFinal;
      }

      this.distanciaConvert = parseFloat(this.distanciaFinal).toFixed(2);
      this.distanciaString = this.distanciaConvert.toString();
       
      this.diferenciaMetros = Math.round(this.distanciaInicialMetros - this.distanciaMetros);
      this.rutaInicial = JSON.parse(localStorage.getItem('rutaInicial'));
      this.mediaLatitud = localStorage.getItem('mediaLatitud');
      this.mediaLongitud = localStorage.getItem('mediaLongitud');

      this.moveMarker(this.moveCoords, this.moveLatitud, this.moveLongitud);
      this.counter = 1;

      if (this.moveCoords) {

        console.log("Eeeeeeeexitoooooo"+', '+this.moveLatitud+', '+this.moveLongitud+', '+this.counter)
        
        const jsonPosition = {
          Latitud: parseFloat(this.moveLatitud),
          Longitud: parseFloat(this.moveLongitud),
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.api.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_MOV',
          Contador: 0
        }

        this.api.setPositionNRoute(jsonPosition).pipe( 
          finalize(async ()=>{
            console.log('fin');
          })
        ).subscribe(
           (res) =>{
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
    } , 10000);


  }

  goFotos(){
    this.Torval();
    this.router.navigate(['./fotoshn']);
  }

  displayDirectionInit(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    let coordenadas;


    this.api.obtenerCoordenadasPorAtencion(this.idAtencion, 'AJU_CORRECCION').pipe( 
      finalize(async ()=>{
        console.log('getting corrected route');
        this.isLoading = false;
        //alert('Ya')
      })
    ).subscribe(
        (res) =>{
          console.dir(res.length)
          if (res.length > 0) {
            console.log('La ruta corregida debería ser ');
            console.dir(res)
            this.coordenadasDeCorreccion = res.sort((a,b) => b.FechaRegistro - a.FechaRegistro);
            let fixedCoords = this.coordenadasDeCorreccion[res.length-1];
            //console.dir(this.coordenadasDeCorreccion[res.length-1])
            coordenadas = {lat: parseFloat(fixedCoords.Latitud), lng: parseFloat(fixedCoords.Longitud)}
            //alert('Ya existen coordenadas corregidas de este proveedor')
          }else{
            coordenadas = {lat: latI, lng: lngI}
          }
        }
    )
      //coordenadas = {lat: latI, lng: lngI}
    

    //this.setCrashIconInit();

    setTimeout(() => {
      console.dir(coordenadas)      
    

    directionsService.route({
     origin: coordenadas,
     destination: coordenadas,
     travelMode: 'DRIVING',
   }, (response, status) => {
   // let distancia = response.trips[0].routes[0].distance.value;
       
       //alert('directionsDisplay.setDirections(response)'+ response.legs.length)
       console.log('la ruta inicial es ');
      // console.log('La distancia es '+ distancia)

     if (status === 'OK') {
       this.renderRoute(response, directionsDisplay);
       this.setClientCrashOverlay(coordenadas);

      let title = 'LUGAR DEL SINIESTRO : ';
      let subtitle =  this.expediente[0].Ciudad +', '+ this.expediente[0].Direccion;

       const contentString =
        '<div id="dInfoWindow">' +
        //'<button id="acceptButton" style="padding:9px;background:blue;color:white;float:right;"> Aceptar' +
        //"</button>" +
        '<h5 id="firstHeading" class="firstHeading">'+title+'</h5>' +
        '<div id="bodyContent">' +
        "<p><b>"+subtitle+"</b>.</p>" +
        "</div>" +
        "</div>";

        let leafletPopup: L.Popup;
        let infowindow2: google.maps.InfoWindow;

        if (this.leafletMap) {
          leafletPopup = L.popup()
            .setLatLng(L.latLng(Number(coordenadas.lat), Number(coordenadas.lng)))
            .setContent(contentString)
            .openOn(this.leafletMap);
        } else {
          infowindow2 = new google.maps.InfoWindow();
          infowindow2.setContent(contentString);
          infowindow2.setPosition(coordenadas);
          infowindow2.open(this.mapa);
        }
        
        setTimeout(() => {
          let miElemento = document.getElementById('dInfoWindow');//document.querySelectorAll('[role="dialog"]');
          console.dir(miElemento)  
          $('#dInfoWindow').click(() => {
            this.openInfoModal(true);
            setTimeout(() => {
              if (leafletPopup) {
                leafletPopup.close();
              } else if (infowindow2) {
                infowindow2.close();
              }
              //$('.ion-accordion-toggle-icon').eq(2).click();
             }, 300);
          })
        }, 3000);
        

        /*
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: "Lugar del siniesstro",
          position: coordenadas
        });

        infowindow.open({
          anchor: coordenadas
        });
        */


       //this.pointsArray =  //response.routes[0].legs[0];
       let dist = response.routes[0].legs[0].distance.text;
       let distM = response.routes[0].legs[0].distance.value; //(response.routes[0].legs[0].distance)*1000;
       localStorage.setItem('dist', dist);
       localStorage.setItem('distM', distM.toString());
       this.isLoadingData = false;
     }
   });
  }, 1000);
  }

  displayDirection(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIcon = {
      url: ajuIconUrl,
      color: 'orange',
      scaledSize: new google.maps.Size(45,45),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    }

    let coordenadas;
      coordenadas = {lat: latI, lng: lngI}

    let coordenadasAju = {lat: parseFloat(latF), lng: parseFloat(lngF)}

    if (this.leafletMap) {
      const adjusterPosition = L.latLng(coordenadasAju.lat, coordenadasAju.lng);

      if (this.leafletAjuMarker) {
        this.leafletAjuMarker.setLatLng(adjusterPosition);
      } else {
        this.leafletAjuMarker = L.marker(adjusterPosition, {
          icon: this.getAdjusterIcon()
        }).addTo(this.leafletMap);
      }

      this.appendLeafletTravelPoint(adjusterPosition);
    } else {
      this.ajuMarker = new google.maps.Marker({
        map: this.mapa,
        position: coordenadasAju,
        icon: ajuIcon
      });

      this.ajuMarker.setMap(this.mapa);
    }

    this.setCrashIcon();

    directionsService.route({
     origin: coordenadasAju,
     destination: coordenadas,
     travelMode: 'DRIVING',
   }, (response, status) => {
     if (status === 'OK') {
       this.renderRoute(response, directionsDisplay);
       this.rutaInicial = response.routes[0];
       this.pointsArray = response.routes[0].legs[0];
       this.routeString = JSON.stringify(response)

       
//alert(this.pointsArray.length)
       localStorage.setItem('rutaInicial', JSON.stringify(this.rutaInicial));
       localStorage.setItem('routeString', JSON.stringify(this.routeString));
       this.puntos = JSON.stringify(this.rutaInicial);
       //this.mapa.setZoom(10);
     }
   });
  }

  

  setCrashIcon(){
    const coordenadas = {lat: this.latitud, lng: this.longitud};
    this.setClientCrashOverlay(coordenadas);
  }

  setCrashIconNew(lat, lon){
    const coordenadas = {lat: lat, lng: lon};
    this.setClientCrashOverlay(coordenadas);

        if (!this.leafletMap && this.mapa) {
          this.mapa.panTo(coordenadas);
          this.mapa.setCenter(coordenadas);
          this.mapa.setZoom(23);
        }

        setTimeout(() => {
          if (!this.leafletMap && this.mapa) {
            this.mapa.setCenter(coordenadas);
            this.mapa.setZoom(18);
          }
        }, 3000);
        

  }

  setClientCrashOverlay(coordenadas: {lat: any, lng: any}) {
    if (this.leafletMap) {
      const position = L.latLng(Number(coordenadas.lat), Number(coordenadas.lng));

      if (this.leafletCrashMarker) {
        this.leafletCrashMarker.setLatLng(position);
      } else {
        this.leafletCrashMarker = L.marker(position, {
          icon: this.getClientCrashIcon(),
          keyboard: false
        }).addTo(this.leafletMap);
      }

      return;
    }

    const position = new google.maps.LatLng(Number(coordenadas.lat), Number(coordenadas.lng));

    if (this.crashMarker) {
      this.crashMarker.setMap(null);
    }

    if (this.crashOverlay) {
      this.crashOverlay.setMap(null);
    }

    let markerElement: HTMLElement;
    const overlay = new google.maps.OverlayView();

    overlay.onAdd = () => {
      markerElement = document.createElement('div');
      markerElement.className = 'help-client-crash-marker';
      markerElement.innerHTML = `
        <span class="help-client-crash-halo help-client-crash-halo-one"></span>
        <span class="help-client-crash-halo help-client-crash-halo-two"></span>
        <span class="help-client-crash-pin">
          <span class="help-client-crash-icon">
            <img src="assets/iconos/localizacion.svg" alt="" aria-hidden="true" />
          </span>
        </span>
      `;

      const panes = overlay.getPanes();
      panes.overlayMouseTarget.appendChild(markerElement);
    };

    overlay.draw = () => {
      const projection = overlay.getProjection();
      const point = projection.fromLatLngToDivPixel(position);

      if (point && markerElement) {
        markerElement.style.left = point.x + 'px';
        markerElement.style.top = point.y + 'px';
      }
    };

    overlay.onRemove = () => {
      if (markerElement && markerElement.parentNode) {
        markerElement.parentNode.removeChild(markerElement);
      }
    };

    overlay.setMap(this.mapa);
    this.crashOverlay = overlay;
  }

  randomTimer(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // this.deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    testItOut(){
      
    }

    goAudience(){
      this.Torval();
      this.clearIntervals();
      if (this.myModal) {
        this.myModal.dismiss();
        this.openModal = false;
      }
      
      if (this.toastr) {
        this.toastr.dismissToast();
      }

      const navigateExtras: NavigationExtras = 
      {
        state:{
          data: [
            {'forma': this.expediente},
            {'idAtencion': this.idAtencion}
          ]
        }
      }
      this.router.navigate(['./prepare-audience'], navigateExtras);
    }
    
    goAudienceNo(){
      this.Torval();
      this.clearIntervals();
      if (this.myModal) {
        this.myModal.dismiss();
        this.openModal = false;
      }
      
      if (this.toastr) {
        this.toastr.dismissToast();
      }
      
      this.router.navigate(['./prepare-audience'])
    }

    goPrinter(){
      
      this.Torval();
      this.clearIntervals();
      if (this.myModal) {
        this.myModal.dismiss();
        this.openModal = false;
      }
      
      if (this.toastr) {
        this.toastr.dismissToast();
      }
      
      this.router.navigate(['./printer'])
    }

    savePosition(pos){
    //alert('savePosition'+ pos.coords.longitude)
      var R = 6371;
      console.log('GPS posicion actual');
      console.dir(pos);
      const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
  
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45,45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }
  
      
      let latitud:any = localStorage.getItem('clienteLatitud');
      let longitud:any = localStorage.getItem('clienteLongitud');
      //alert('La latitud '+latitud)

      if(pos){
        //$("#positionBadge").text('latitud: '+pos.coords.latitude+', longitud: '+pos.coords.longitude);
        let coordsAju = {lat: pos.coords.latitude, lng: pos.coords.longitude};
  
        //this.directionsService = new google.maps.DirectionsService;
        //this.directionsDisplay = new google.maps.DirectionsRenderer;
        //this.directionsDisplay.setMap(this.mapa);
        
        
  
        localStorage.setItem('moveCoords', JSON.stringify(coordsAju));
        localStorage.setItem('moveLatitide', pos.coords.latitude);
        localStorage.setItem('moveLongitude', pos.coords.longitude);
  
        
  
        var dLat = (latitud-pos.coords.latitude)*(Math.PI/180);  // this.deg2rad below
        var dLon = (longitud-pos.coords.longitude)*(Math.PI/180); 

        //alert(dLat);
  
        var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos((pos.coords.latitude)*(Math.PI/180)) * Math.cos((latitud)*(Math.PI/180)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var distancia = R * c;
  
          var xDist = latitud - pos.coords.latitude;
        var yDist = longitud - pos.coords.longitude
        var dist = Math.sqrt(xDist * xDist + yDist * yDist);
        let len = distancia/2;
        var fractionOfTotal = len / dist;
  
        let mediaLatitud:any = (latitud+pos.coords.latitude)/2;
        let mediaLongitud:any = (longitud+pos.coords.longitude)/2;
  
        let mediaLatitude:any = pos.coords.latitude + xDist * fractionOfTotal;
        let mediaLongitude:any = pos.coords.longitude + yDist * fractionOfTotal;
  //      alert((mediaLatitude+3) +', '+mediaLongitude)
        localStorage.setItem('mediaLatitud', mediaLatitude+3);
        localStorage.setItem('mediaLongitud', mediaLongitude);
  
          let distanciaInicial:any = localStorage.getItem('distanciaInicial');
  
        let diferencia:any = distanciaInicial-distancia;
        localStorage.setItem('diferencia', diferencia);
        localStorage.setItem('distancia', distancia.toString());
        const elementStatus = document.getElementById("statusFlag");
        const elementArrow = document.getElementById("statusArrow");


        ///alert(this.coordsLat+', '+this.coordsLon)
        this.displayDirection(this.directionsService,this.directionsDisplay, latitud, longitud, pos.coords.latitude, pos.coords.longitude);
        
        
        if (diferencia == 0) {
          elementStatus.setAttribute('style', 'background:#FDCF49;border-radius:10px');
          elementArrow.setAttribute('name', 'chevron-expand');
          elementArrow.setAttribute('style', 'color:#FDCF49;font-weight: bolder');
  
        }else if (diferencia > 0){
          if (distanciaInicial > distancia) {
            elementStatus.setAttribute('style', 'background:#90EE90;border-radius:10px');
            elementArrow.setAttribute('name', 'chevron-back');
            elementArrow.setAttribute('style', 'color:#90EE90;font-weight: bolder');
          }else{
            elementStatus.setAttribute('style', 'background:#F32837;border-radius:10px');
            elementArrow.setAttribute('name', 'chevron-forward');
            elementArrow.setAttribute('style', 'color:#F32837;font-weight: bolder');
          }
        }
      }
      
    }

    positionError(err){
      //alert(`ERROR ${err.code}: ${err.message}`);
    }

    moveMarker(location, mLat, mLng) {
      if (this.leafletMap) {
        const position = L.latLng(Number(mLat), Number(mLng));

        if (this.leafletAjuMarker) {
          this.leafletAjuMarker.setLatLng(position);
        } else {
          this.leafletAjuMarker = L.marker(position, {
            icon: this.getAdjusterIcon()
          }).addTo(this.leafletMap);
        }

        this.appendLeafletTravelPoint(position);

        if (this.leafletAutoFollow) {
          this.leafletMap.setView(position, this.leafletFollowZoom, {
            animate: true
          });
        }
        return;
      }

      this.bounds = new google.maps.LatLngBounds();
      if (this.ajuMarker) {
        this.ajuMarker.setMap(null);
      }
  
      if (this.marcadorAju) {
          this.marcadorAju.setPosition( new google.maps.LatLng(  mLat,  mLng ) );
          //this.mapa.setZoom(16);
            this.mapa.panTo( new google.maps.LatLng( mLat, mLng ) );
            this.bounds.extend(this.marcadorAju.getPosition());
            this.mapa.fitBounds(this.bounds);
          
      }else{
        const ajuIconUrl = '../../assets/iconos/ajustador-legal-halo-preview.svg';
        const ajuIcon = {
          url: ajuIconUrl,
          color: 'orange',
          scaledSize: new google.maps.Size(45,45),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        }

        this.marcadorAju = new google.maps.Marker({
            position: location,
            map: this.mapa,
            icon: ajuIcon,
        });
        this.marcadorAju.setPosition(location);
      }
      
    }

  cerrarMapa(){
    this.Torval();
    
    $('#expedienteContent').fadeIn('slow');
    $('#mapaContent').fadeOut('slow');
    $('#mapFooter').fadeOut('slow');
  }

  async addMapMarker(coordenates: any){
    console.log(coordenates.lat+', '+coordenates.lng)
    const markerId = await this.newMaP.addMarker({
      coordinate: {
      lat: coordenates.lat,
      lng: coordenates.lng
      },
      title: 'LUGAR DEL SINIESTRO : ' +this.expediente[0].Ciudad +', '+ this.expediente[0].Direccion
  });
  
    this.markerId = markerId;
  }
  async clickInMap(){
    
    const click = await this.newMaP.setOnMapClickListener(click => {
      this.newMaP.removeMarker(this.markerId);
      let coodernadas;
      coodernadas = {lat: click.latitude, lng: click.longitude}
      this.latitud = click.latitude;
      this.longitud = click.longitude;
      this.addMapMarker(coodernadas);
      })
  }
  async Torval(){
    if(this.newMaP !== undefined){
      const putin = this.newMaP.destroy();
    }

    if (this.watcher) {
      this.geoloc.clearWatch(this.watcher);
    }

    this.clearIntervals();

    if(this.mapa !== undefined){
      google.maps.event.clearInstanceListeners(window);
      google.maps.event.clearInstanceListeners(document);

      if (this.mapa) {
        google.maps.event.clearInstanceListeners(this.mapa[0]);
      this.mapa = null;
      }
      
    }
    
  }

  clearIntervals(){
    if (this.firstInterval) {
      clearInterval(this.firstInterval);
    }

    if (this.trackInterval) {
      clearInterval(this.trackInterval);
    }

    if (this.leafletIdleTimer) {
      clearTimeout(this.leafletIdleTimer);
    }
    
  }

  cambiarBotonera(){
    this.esClienteCompleto = !this.esClienteCompleto;
  }

}
