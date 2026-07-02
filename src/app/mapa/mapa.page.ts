import { Location } from '@angular/common';
import { AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Expedientes } from './../interfaces/expedientes';
import { Formulario} from '../interfaces/formulario';
import { Geolocation } from '@capacitor/geolocation';
import { ApiService } from '../services/api.service';
import { iconColors } from '../environments/mapas';
import { GoogleMap } from '@capacitor/google-maps';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map')
 mapRef: ElementRef<HTMLElement>;
  @ViewChild('placeSearchInput') placeSearchInput: ElementRef<HTMLInputElement>;  newMaP: GoogleMap;  laPrecision:any;  formulario: Formulario= {};  expediente: Expedientes;  isLoading:boolean=false;
  isMap:boolean=false;  markerId:string;  miLatitud:any;  miLongitud:any;  coordinates:any; laLocalidad:any;  miLocalidad:any;  latitud:any;  longitud:any;
  miPais:any;  isLoadingData: boolean = false;  isTrack: any=false;  latitudAju: string;  longitudAju: string; mapa: google.maps.Map; firstInterval: NodeJS.Timeout;
  directionsService: google.maps.DirectionsService; directionsDisplay: google.maps.DirectionsRenderer;trackInterval: NodeJS.Timeout; ajuMarker: google.maps.Marker;
  rutaInicial: any;  pointsArray: any; crashMarker: google.maps.Marker; mapInfoText: any; geoloc: Geolocation; moveLatitud: any; moveLongitud:any;
  watcher: any;
  moveCoords: any;
  moverCoordenadas: string;
  diferencia: string;
  distanciaFinal: string;
  distanciaInicialMetros: number;
  distancia: number;
  distanciaMetros: number;
  isArrived: boolean;
  distanciaConvert: string;
  distanciaString: string;
  diferenciaMetros: number;
  mediaLatitud: string;
  mediaLongitud: string;
  bounds: google.maps.LatLngBounds;
  marcadorAju: any;
  counter: number;
  idAtencion: any;
  api: ApiService;
  alert: any;
  coordinateCorrectionMode = false;
  coordinateCorrectionSource = './clientehn';
  coordinateState: 'ok' | 'warning' | 'danger' = 'warning';
  hasSelectedCrashPoint = false;
  instructionCollapsed = false;
  previousLatitud: any;
  previousLongitud: any;
  crashOverlay: google.maps.OverlayView;
  crashOverlayElement: HTMLElement;
  placeAutocomplete: google.maps.places.Autocomplete;

  get mapTitle(): string {
    return this.coordinateState === 'danger' ? 'Capturar ubicación' : 'Verificar ubicación';
  }

  get mapInstructionTitle(): string {
    return this.hasSelectedCrashPoint ? 'Punto seleccionado' : 'Toca el lugar del siniestro';
  }

  get mapInstructionText(): string {
    return this.hasSelectedCrashPoint
      ? 'Confirma para reemplazar las coordenadas de cabina por esta ubicación.'
      : 'Ubica el punto real del siniestro en el mapa y toca una vez sobre el lugar correcto.';
  }

  toggleInstructionCard(): void {
    this.instructionCollapsed = !this.instructionCollapsed;
  }

  constructor(private router: Router,  private toaster: ToastController, private platform:Platform, private so: ScreenOrientation, private location:Location,
    private apiService: ApiService, private alertController: AlertController, private zone: NgZone) { 
     /* const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    */
    //this.expediente= state.data[0];
    //this.expediente = JSON.parse(localStorage.getItem('elExpediente'));

    this.idAtencion = parseInt(localStorage.getItem('idAtencion'));
    //alert(this.idAtencion+1)

/*
    this.api.Expediente(this.idAtencion).pipe(
      finalize(async () => {
        console.log('ya finalicé')
        this.isLoading = false;
      })
    ).subscribe(
      async (res) => {
        this.expediente = res;
      }
    )

    

    this.latitud = this.expediente.LatitudCliente;
    alert(this.latitud)
    this.longitud = this.expediente.LongitudCliente;
    console.log('Expediente en cliente es ');
   //console.dir(this.latitud)

    if(this.expediente){
      this.formulario.RefAtencionId = this.expediente.Id;
      this.formulario.Blindado= "No";
      this.formulario.RefProveedorAgenteId = this.expediente.RefProveedorAgenteId;
      this.formulario.AgendarAudiencia = this.expediente.AgendarAudiencia;
      this.formulario.AseguradoUsoPoliza  = this.expediente.AseguradoUsoPoliza; // Agregar al codigo despues un si o no
      this.formulario.TerceroResponsable = this.expediente.TerceroResponsable; //add luego
      this.formulario.LesionadosSinAudiencia = this.expediente.LesionadosSinAudiencia;
      this.formulario.DescripcionAudiencia = this.expediente.DescripcionAudiencia;
      this.formulario.RefTipoAudienciaId = this.expediente.IdAjusteAudiencia// validar
      this.formulario.Poliza = this.expediente.PolizaExterna;
      this.formulario.Nombre = this.expediente.Cliente;
      this.formulario.Descripcion = this.expediente.DescripcionAudiencia;
      this.formulario.MarcaVehiculo = this.expediente.Marca;
      this.formulario.ModeloVehiculo = this.expediente.Modelo;
      this.formulario.AnioVehiculo = this.expediente.Year;
      this.formulario.PlacaVehiculo = this.expediente.NumeroPlaca;
      this.formulario.ChasisVehiculo = this.expediente.Chasis;
      this.formulario.ColorVehiculo = this.expediente.Color;
      this.formulario.Lugar = this.expediente.LugarAudiencia;
      this.formulario.RefUsuarioId = this.expediente.RefGestorId;
      this.formulario.TallerMecanicoId = 0
      this.formulario.Blindado = this.expediente.Blindado;
      this.formulario.ObservacionTaller = this.expediente.ObservacionTaller;
      this.formulario.Observaciones = this.expediente.Observaciones;
      this.formulario.NombreConductor = this.expediente.NombreConductor;
      this.formulario.IdentidaConductor = this.expediente.IdentidaConductor;
      this.formulario.TelefonoConductor = this.expediente.TelefonoOrigen;
      this.formulario.CelularConductor = this.expediente.TelefonoAdicional;
      this.formulario.RefCiudadId = +this.expediente.Ciudad;
      this.formulario.RefDeptoId = this.expediente.RefDepartamentoId;
      console.log(+this.expediente.IdPais)
      this.formulario.RefPaisId = +this.expediente.IdPais;
      this.formulario.DireccionConductor = this.expediente.DireccionDestino;
    }
    */
    }

  ngOnInit() {
    this.platform.backButton.subscribe(()=>{
      //once you press the back button it will execute what you write of code here
	    this.Torval();
    });

    this.platform.ready().then(() => {
    });
  }
  ionViewDidEnter(){
    this.configureCorrectionMode();
    this.isLoading = true;
    this.isMap = false;
    this.createMap();
   }

  private configureCorrectionMode(): void {
    const navState: any = this.router.getCurrentNavigation()?.extras?.state || history.state || {};
    this.coordinateCorrectionMode = navState.mode === 'claim-coordinate-correction';
    this.coordinateCorrectionSource = navState.source || './clientehn';
    this.coordinateState = navState.coordinateState || 'warning';
    this.idAtencion = navState.attentionId || this.idAtencion || parseInt(localStorage.getItem('idAtencion'));
    this.previousLatitud = navState.latitud || localStorage.getItem('clienteLatitud') || localStorage.getItem('dataProcess-Latitud');
    this.previousLongitud = navState.longitud || localStorage.getItem('clienteLongitud') || localStorage.getItem('dataProcess-Longitud');
    this.latitud = this.previousLatitud || localStorage.getItem('laLatitud') || 14.0818;
    this.longitud = this.previousLongitud || localStorage.getItem('laLongitud') || -87.2068;
  }
  async createMap() {
    this.isLoadingData = true;
    this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
    //let laLatitud = localStorage.getItem('laLatitud');
    //let laLongitud = localStorage.getItem('laLongitud');
    this.latitudAju = localStorage.getItem('laLatitud');
    this.longitudAju = localStorage.getItem('laLongitud');
     this.laPrecision = localStorage.getItem('laPrecision');

     let mapOptions = {
      zoom:18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    this.mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
    this.mapa.addListener('click', (event: google.maps.MapMouseEvent) => {
      if (!event.latLng) {
        return;
      }

      this.zone.run(() => this.handleMapSelection(event.latLng.lat(), event.latLng.lng()));
    });
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.mapa);

    //alert('Hey vooo : '+this.latitud+', '+this.longitud+', '+this.latitudAju+', '+this.longitudAju)
    setTimeout(() => {
      if (this.coordinateCorrectionMode) {
        this.centerCorrectionMap();
        this.initPlaceSearch();
      } else {
        this.displayDirectionInit(this.directionsService,this.directionsDisplay, this.latitud, this.longitud, this.latitudAju, this.longitudAju);
      }
    }, 1000);

    if (this.platform.is('android')) {
      this.miPais = localStorage.getItem('codigoPais');
    }else{
      this.miPais = 'HN';
    }
      let coodernadas;
      coodernadas = {lat: this.latitud, lng: this.longitud}

      this.isLoading = false;
      this.isMap = true;

      this.geoloc = navigator.geolocation;
    
    if (!this.coordinateCorrectionMode) {
      this.watcher = this.geoloc.watchPosition(this.savePosition, this.positionError, {enableHighAccuracy:true});
    }

    if (this.coordinateCorrectionMode) {
      return;
    }

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

      this.moveMarker(this.moveCoords, this.moveLatitud, this.moveLongitud, this.counter);
      this.counter = 1;

      if (this.moveCoords) {

        console.log("Eeeeeeeexitoooooo"+', '+this.moveLatitud+', '+this.moveLongitud+', '+this.counter)
        
        const jsonPosition = {
          Latitud: parseFloat(this.moveLatitud),
          Longitud: parseFloat(this.moveLongitud),
          RefAtencionId: this.idAtencion,
          RefUsuarioId: this.apiService.currentUser.ProveedorAgenteId,
          Tipo: 'AJU_MOV'
        }

        this.apiService.setPositionNRoute(jsonPosition).pipe( 
          finalize(async ()=>{
            console.log('fin');
          })
        ).subscribe(
           (res) =>{
          },
          async (res) => {
            const alert = await this.alertController.create({
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

  moveMarker(location, mLat, mLng, counter) {
    this.bounds = new google.maps.LatLngBounds();
    if (this.ajuMarker) {
      this.ajuMarker.setMap(null);
    }

    if (this.marcadorAju) {
        this.marcadorAju.setPosition( new google.maps.LatLng(  this.moveLatitud,  this.moveLongitud ) );
        //this.mapa.setZoom(16);
        if (counter == 0) {
          this.mapa.panTo( new google.maps.LatLng( this.moveLatitud, this.moveLongitud ) );
          this.bounds.extend(this.marcadorAju.getPosition());
          this.mapa.fitBounds(this.bounds);
        }else{}
        
    }else{
      const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
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

  positionError(err){
    //alert(`ERROR ${err.code}: ${err.message}`);
  }

  savePosition(pos){
    //alert('savePosition'+ pos.coords.longitude)
      var R = 6371;
      console.log('GPS posicion actual');
      console.dir(pos);
      const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
  
      const ajuIcon = {
        url: ajuIconUrl,
        color: 'orange',
        scaledSize: new google.maps.Size(45,45),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }
  
      let latitud:any = localStorage.getItem('clienteLatitud');
      let longitud:any = localStorage.getItem('clienteLongitud');
  
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

        
        console.log('Aqui')
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

  displayDirectionInit(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    //alert(latI+', '+lngI+', '+latF+', '+lngF)
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
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

    //this.calculateDistance(latF,  lngF);

    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });

    //alert('So far so good')
    this.ajuMarker.setMap(this.mapa);

    this.setCrashIcon();

    directionsService.route({
     origin: coordenadasAju,
     destination: coordenadas,
     travelMode: 'DRIVING',
   }, (response, status) => {
     if (status === 'OK') {
       directionsDisplay.setDirections(response);
       this.rutaInicial = response.routes[0];
       this.pointsArray = response.routes[0].legs[0];
       let dist = response.routes[0].legs[0].distance.text;
       let distM = response.routes[0].legs[0].distance.value; //(response.routes[0].legs[0].distance)*1000;
       localStorage.setItem('dist', dist);
       localStorage.setItem('distM', distM.toString());
       this.isLoadingData = false;
       //this.routeString = JSON.stringify(response)
//alert(dist)
       for (let index = 0; index < this.rutaInicial.length; index++) {
        const element = this.rutaInicial[index];
        //alert(element)
       }
     }
   });
  }

  displayDirection(directionsService, directionsDisplay, latI, lngI, latF, lngF) {
    const ajuIconUrl = '../../assets/img/ajucar-violet.svg';
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

    this.ajuMarker = new google.maps.Marker({
      map: this.mapa,
      position: coordenadasAju,
      icon: ajuIcon
    });

    
    this.ajuMarker.setMap(this.mapa);

    this.setCrashIcon();

    directionsService.route({
     origin: coordenadasAju,
     destination: coordenadas,
     travelMode: 'DRIVING',
   }, (response, status) => {
     if (status === 'OK') {
       //directionsDisplay.setDirections(response);
       this.rutaInicial = response.routes[0];
       this.pointsArray = response.routes[0].legs[0];
       //this.routeString = JSON.stringify(response)

       
//alert(this.pointsArray.length)
       localStorage.setItem('rutaInicial', JSON.stringify(this.rutaInicial));
       //localStorage.setItem('routeString', JSON.stringify(this.routeString));
       //this.puntos = JSON.stringify(this.rutaInicial);
       //this.mapa.setZoom(10);
     }
   });
  }

  setCrashIcon(){
    let coordenadas;
    coordenadas = {lat: this.latitud, lng: this.longitud}

    let ii:number = 0;

    let tiempo:any;
      tiempo = this.randomTimer(0,1);
      
      this.firstInterval = setInterval(()=>{
        tiempo = this.randomTimer(0,1);
        const crashIconUrl = iconColors[ii].url;
        const crashIcon = {
          url: crashIconUrl,
          color: 'green',
          scaledSize: new google.maps.Size(50,50),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 0)
        }

        this.crashMarker = new google.maps.Marker({
          map: this.mapa,
          position: coordenadas,
          icon: crashIcon
        });
        this.crashMarker.setMap(this.mapa);

        if (ii == 3){
          ii=0;
        }else{
          ii++;
        }
        
      } ,  200);
  }

  randomTimer(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min).toFixed(2);
  }
  
  private centerCorrectionMap(): void {
    const lat = Number(this.latitud);
    const lng = Number(this.longitud);
    const agentLat = Number(localStorage.getItem('laLatitud'));
    const agentLng = Number(localStorage.getItem('laLongitud'));
    const hasInitialCrashPoint = Number.isFinite(lat) && Number.isFinite(lng) && this.coordinateState !== 'danger';
    const hasAgentPoint = Number.isFinite(agentLat) && Number.isFinite(agentLng);
    const center = hasInitialCrashPoint
      ? { lat, lng }
      : hasAgentPoint
        ? this.getOffsetAgentReference(agentLat, agentLng)
        : { lat: 14.0818, lng: -87.2068 };

    this.latitud = center.lat;
    this.longitud = center.lng;
    this.mapa.setCenter(center);
    this.mapa.setZoom(hasInitialCrashPoint ? 16 : 15);
    this.setSingleCrashMarker(center);
    this.isLoadingData = false;
  }

  private getOffsetAgentReference(lat: number, lng: number): google.maps.LatLngLiteral {
    return {
      lat: lat + 0.00018,
      lng: lng + 0.00018
    };
  }

  private initPlaceSearch(): void {
    if (!this.placeSearchInput?.nativeElement || !google.maps.places?.Autocomplete) {
      return;
    }

    this.placeAutocomplete = new google.maps.places.Autocomplete(this.placeSearchInput.nativeElement, {
      componentRestrictions: { country: 'hn' },
      fields: ['geometry', 'name', 'formatted_address']
    });

    this.placeAutocomplete.addListener('place_changed', () => {
      this.zone.run(() => {
        const place = this.placeAutocomplete.getPlace();
        const location = place.geometry?.location;

        if (!location) {
          return;
        }

        const position = { lat: location.lat(), lng: location.lng() };
        this.mapa.panTo(position);
        this.mapa.setZoom(17);
        this.handleMapSelection(position.lat, position.lng);
      });
    });
  }

  private handleMapSelection(lat: number, lng: number): void {
    this.latitud = lat;
    this.longitud = lng;
    this.hasSelectedCrashPoint = true;
    this.setSingleCrashMarker({ lat, lng });
  }

  private setSingleCrashMarker(position: google.maps.LatLngLiteral): void {
    if (this.firstInterval) {
      clearInterval(this.firstInterval);
    }

    if (this.crashMarker) {
      this.crashMarker.setMap(null);
      this.crashMarker = null;
    }

    if (!this.crashOverlay) {
      this.crashOverlay = this.createCrashHaloOverlay();
      this.crashOverlay.setMap(this.mapa);
    }

    (this.crashOverlay as any).setPosition(position);
  }

  private createCrashHaloOverlay(): google.maps.OverlayView {
    let markerElement: HTMLElement;
    const overlay = new google.maps.OverlayView();

    (overlay as any).position = null;
    (overlay as any).setPosition = (position: google.maps.LatLngLiteral) => {
      (overlay as any).position = new google.maps.LatLng(position.lat, position.lng);
      overlay.draw();
    };

    overlay.onAdd = () => {
      markerElement = document.createElement('div');
      markerElement.className = 'help-map-crash-marker';
      markerElement.innerHTML = `
        <span class="help-map-crash-halo help-map-crash-halo-one"></span>
        <span class="help-map-crash-halo help-map-crash-halo-two"></span>
        <span class="help-map-crash-pin">
          <span class="help-map-crash-icon">
            <img src="assets/img/crash-white.svg" alt="" aria-hidden="true" />
          </span>
        </span>
      `;
      this.crashOverlayElement = markerElement;
      overlay.getPanes().overlayMouseTarget.appendChild(markerElement);
    };

    overlay.draw = () => {
      const position = (overlay as any).position;

      if (!position || !markerElement) {
        return;
      }

      const projection = overlay.getProjection();
      const point = projection.fromLatLngToDivPixel(position);
      markerElement.style.left = point.x + 'px';
      markerElement.style.top = point.y + 'px';
    };

    overlay.onRemove = () => {
      if (markerElement?.parentNode) {
        markerElement.parentNode.removeChild(markerElement);
      }
    };

    return overlay;
  }

  async confirmarCambioUbicacion(){
    if (!this.hasSelectedCrashPoint) {
      const alert = await this.alertController.create({
        cssClass: 'form-choice-alert entry-validation-alert coordinate-change-alert coordinate-change-alert--danger',
        header: 'Selecciona una ubicación',
        message: 'Toca el mapa sobre el lugar real del siniestro antes de confirmar.',
        buttons: [
          {
            text: 'Entendido',
            cssClass: 'form-choice-confirm'
          }
        ]
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      cssClass: 'form-choice-alert entry-validation-alert coordinate-change-alert',
      header: 'Confirmar ubicación del siniestro',
      message: 'Se reemplazarán las coordenadas recibidas desde cabina por el punto seleccionado en el mapa. Esta corrección quedará marcada como realizada por el ajustador.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Confirmar',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.persistirCoordenadasCorregidas();
            this.continuar();
          }
        }
      ]
    });
    await alert.present();
  }

  private persistirCoordenadasCorregidas(): void {
    const latitud = String(this.latitud);
    const longitud = String(this.longitud);
    localStorage.setItem('dataProcess-Latitud', latitud);
    localStorage.setItem('dataProcess-Longitud', longitud);
    localStorage.setItem('clienteLatitud', latitud);
    localStorage.setItem('clienteLongitud', longitud);

    if (this.idAtencion) {
      localStorage.setItem('coords-latitud-' + this.idAtencion, latitud);
      localStorage.setItem('coords-longitud-' + this.idAtencion, longitud);
      localStorage.setItem('coords-corregidas-' + this.idAtencion, 'true');
      localStorage.setItem('coords-correccion-confirmada-' + this.idAtencion, 'true');
      localStorage.setItem('coords-observacion-' + this.idAtencion, 'Ubicacion del siniestro corregida manualmente por el ajustador');
    }
  }

  async addMapMarker(coordenates: any){
    console.log(coordenates.lat+', '+coordenates.lng)
    const markerId = await this.newMaP.addMarker({
      coordinate: {
      lat: coordenates.lat,
      lng: coordenates.lng
      },
      
      title:"Lugar del siniestros",
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
    this.clearIntervals();
    if (this.watcher && this.geoloc?.clearWatch) {
      this.geoloc.clearWatch(this.watcher);
    }

    if (this.crashOverlay) {
      this.crashOverlay.setMap(null);
      this.crashOverlay = null;
    }

    if(this.newMaP !== undefined){
      const putin = this.newMaP.destroy();
      console.log(putin)
    }
    
  }
  continuar(){
    const navigateExtras: NavigationExtras = 
    {
      state:{
        data: [
          {'forma': this.formulario},
          {'latitud': this.latitud},
          {'longitud' : this.longitud}
        ],
        coordinateCorrectionConfirmed: this.coordinateCorrectionMode,
        attentionId: this.idAtencion
      }
    }
    this.Torval();
    this.router.navigate(['./clientehn'],navigateExtras);
    
  }

  cerrarMapa(){
    this.Torval();
    this.location.back();
  }

  async mensajeContinuar(){
    this.presentToast('El marcador rojo define el lugar del siniestro. ¿Está seguro de que este se encuentra en el lugar del siniestro?', 'bottom', 'mapa');
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
            this.continuar()
          }
        },
      ],
    });
    await toast.present();
  }
  limpiarCache() {
    this.Torval();
    //localStorage.removeItem('dSignatureAsegurado');
    //localStorage.removeItem('firmasAsegurados');
    //localStorage.removeItem('miLocalidad');
    //localStorage.removeItem('coordinates');
    //localStorage.removeItem('codigoPais');
    //localStorage.removeItem('nombrePais');
    //localStorage.removeItem('esCompleto');
    window.location.reload();
  }

  clearIntervals(){
    if (this.firstInterval) {
      clearInterval(this.firstInterval);
    }

    if (this.trackInterval) {
      clearInterval(this.trackInterval);
    }
    
  }

}

// Código comentado

// Mapa
/*
      this.newMaP = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: "AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ",
        config: {
          center: { lat: this.latitud,
                    lng: this.longitud
          },
          zoom: 16,
        },
      });
      */
      // Add a marker to the map
      //this.addMapMarker(coodernadas);
      //click on map
      //this.clickInMap();
