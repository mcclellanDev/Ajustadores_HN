import { Expedientes } from './../interfaces/expedientes';
import { datosTercero, ImgFormularion, TipoSiniestros, vehiculoTercero, danioVehiculo, Tercero } from './../interfaces/formulario';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Formulario, PropiedadDaniadaSiniestro, TercerosSiniestro } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';

declare var google;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
 @ViewChild('map')
 mapRef: ElementRef<HTMLElement>;
  newMaP: GoogleMap;
  formulario: Formulario= {};
  danosTerceros: TercerosSiniestro;
  prodiedadTercero: PropiedadDaniadaSiniestro; 
  expediente: Expedientes;
  selectedItem = "Page1";
  viewEntered = false;
  poliza=false;
  asegurado=false;
  conductor=false;
  vehiculo=false;
  hecho=false;
  danosVehiculo=false;
  mapa=true;
  otros=false;
  lesiones=false;
  markerId:string;
  openFoto=false;
  tipoSiniestro = false;
  datoTercero=false;
  datosVehiculo= false;
  danosVehiculoTercero=false;
  terceroLecionados= false;
  DanioMaterialesTerceros = false;
  observaciones = false;
  terceroDatos: datosTercero = null;
  terceroVehiculo: vehiculoTercero;
  tercerosDatos: datosTercero[]=[];
  tercerosVehiculo: vehiculoTercero[]=[];
  terceroDanosVehiculo: danioVehiculo;
  terceros: Tercero[];
  $tercero:Tercero;
  tercerosLecionados:TercerosSiniestro[];
  tercerosPropiedades: PropiedadDaniadaSiniestro[];
  terLeNombre:string;
  terLeDpi:string;
  terLeTel:string;
  proTerNombre: string;
  proTerDpi:string;
  proTerTel:string;
  ProTerPro:string;
  addTercero = false;

  foto:string;
  fotos: ImgFormularion[]=[];
  tiposSiniestros: TipoSiniestros[]=[];
  buscar:string="";
  
  constructor(private router: Router,
    private loading: LoadingController,
    private alert: AlertController,
    private api: ApiService, 
    private toast: ToastController) { 
    const state = this.router.getCurrentNavigation().extras.state;
    console.log(state.data);
    this.expediente= state.data[0]
    if(this.expediente){
      // this.formulario.RefAtencionId = this.expediente.Id;
      // this.formulario.RefProveedorAgenteId = this.expediente.RefProveedorAgenteId;
      // this.formulario.AgendarAudiencia = this.expediente.AgendarAudiencia;
      // this.formulario.AseguradoUsoPoliza  = this.expediente.AseguradoUsoPoliza; // Agregar al codigo despues un si o no
      // this.formulario.TerceroResponsable = this.expediente.TerceroResponsable; //add luego
      // this.formulario.LesionadosSinAudiencia = this.expediente.LesionadosSinAudiencia;
      // this.formulario.DescripcionAudiencia = this.expediente.DescripcionAudiencia;
      // // this.formulario.RefEntidadComunicativaId = // se debe definir
      // this.formulario.RefTipoAudienciaId = this.expediente.IdAjusteAudiencia// validar
      // this.formulario.Poliza = this.expediente.PolizaExterna;
      // // this.formulario.Identificacion = aun pedinted
      // this.formulario.Nombre = this.expediente.Cliente;
      // // this.formulario.ConductorAfiliado //no se 
      // // this.formulario.ConductorDetenido // no se
      // this.formulario.Descripcion = this.expediente.DescripcionAudiencia;
      // this.formulario.MarcaVehiculo = this.expediente.Marca;
      // this.formulario.ModeloVehiculo = this.expediente.Modelo;
      // this.formulario.AnioVehiculo = this.expediente.Year.toString();
      // this.formulario.PlacaVehiculo = this.expediente.NumeroPlaca;
      // this.formulario.ChasisVehiculo = this.expediente.Chasis;
      // this.formulario.ColorVehiculo = this.expediente.Color;
      // this.formulario.VehiculoDetenido = this.expediente.VehiculoDetenido;
      // this.formulario.MotorVehiculo = this.expediente.Motor.toString();
      // // this.formulario.DescripcionVehiculo = nada 
      // this.formulario.TercerosHeridos = this.expediente.DescripcionTercerosHeridos;
      // this.formulario.TercerosMuertos = this.expediente.DescripcionTercerosMuertos;
      // this.formulario.RefPaisId = this.expediente.Pais;
      // this.formulario.RefCiudadId = this.expediente.Ciudad;
      // // this.formulario.RefDeptoId = 
      // // this.formulario.FechaHora = =
      // this.formulario.Lugar = this.expediente.LugarAudiencia;
      // this.formulario.RefUsuarioId = this.expediente.RefGestorId;
      // this.formulario.TallerMecanicoId = this.expediente.Taller;
      // this.formulario.Blindado = this.expediente.Blindado;
      // this.formulario.ObservacionTaller = this.expediente.ObservacionTaller;
      // // this.formulario.ReclamoAsegurado = this.expediente.
      // this.formulario.Observaciones = this.expediente.Observaciones;
      // // this.formulario.ReclamoAsegurado = this.expediente.re
      // // this.formulario.Latitud = this.exp
      // this.formulario.NombreConductor = this.expediente.NombreConductor;
      // this.formulario.IdentidaConductor = this.expediente.IdentidaConductor;
      // // this.formulario.DPI_Pasaporte = this.expediente.d
      // this.formulario.TelefonoConductor = this.expediente.TelefonoOrigen;
      // this.formulario.CelularConductor = this.expediente.TelefonoAdicional;
      // // this.formulario.Licencia 
      // this.formulario.DireccionConductor = this.expediente.DireccionDestino;


    }
    
  }
  ngOnInit() {
   // google.maps.event.addDomListener(window, "load", this.loadMap());
  }

  ionViewDidEnter(){
   this.createMap();
   this.getTiposSiniestros();
  }
  openImg(foto:string){
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  async showMeaPic(){
    const img = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64
    });
    this.fotos.push({IdAtencion: this.expediente.ServicioAtencionId, Foto: img.base64String})
    console.log(this.fotos)
  }
  deleteFoto(i:number ){

    this.fotos.splice(i,i+1);
    
  }
  // damagePosition(valor:number){
  //   switch(valor){
  //     case 1:
  //       this.formulario.DanioLataralIzquierdo = ! this.formulario.DanioLataralIzquierdo;
  //       this.toastAlert("Daño Latateral Izquierdo: "+this.formulario.DanioLataralIzquierdo);
  //       break;
  //     case 2: 
  //         this.formulario.DanioLateralDerecho= ! this.formulario.DanioLateralDerecho;
  //         this.toastAlert("Daño Latateral Derecho: "+this.formulario.DanioLateralDerecho);
  //         break;
  //     case 3: 
  //         this.formulario.VehiculoVolcado= ! this.formulario.VehiculoVolcado;
  //         this.toastAlert("Vehículo Volcado: "+this.formulario.VehiculoVolcado);
  //         break;
  //     case 4: 
  //         this.formulario.DanioFrontal= ! this.formulario.DanioFrontal;
  //         this.toastAlert("Daño Frontal: "+this.formulario.DanioFrontal);
  //         break;
  //     case 5: 
  //         this.formulario.DanioTrasero= ! this.formulario.DanioTrasero;
  //         this.toastAlert("Daño Trasero: "+this.formulario.DanioTrasero);
  //         break;
  //     default:
  //       break;
  //   } 
  // }
  async toastAlert(mensaje: string){
    const toa = await this.toast.create({
      message:mensaje,
      duration:2000,
      position:"bottom"
    });
    await toa.present();
  }
  isEnabled(value: string): boolean {
    if(value === "Page1" && this.selectedItem !== "Page1"){
      console.log(value)
    }
    return this.selectedItem === value;
  }

  
//js mapas
  // async loadMap(){
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log(coordinates);
  //   let coodernadas;
  //   if (this.formulario.Longitud  && this.formulario.Latitud){
  //     coodernadas ={ latitude: this.formulario.Latitud, longitude:this.formulario.Longitud }
  //   }else{
  //     const permisosGeo = await Geolocation.checkPermissions();
  //     console.log(permisosGeo);
  //     if(permisosGeo.location === "denied"){
  //       const getPermisos = await Geolocation.requestPermissions();
  //     }
  //     const coordinates = await Geolocation.getCurrentPosition();
  //     console.log(coordinates);
  //     coodernadas = coordinates.coords;
  //   }
  //   var latlng = new google.maps.LatLng(coodernadas.latitude,coodernadas.longitude);
  //   var myOptions = {
  //       zoom: 20,
  //       center: latlng,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("mapa"),
  //           myOptions);
  //  // var click = new google.map.setOnMapClickListener(click => console.log(click));
    
  //   var icon = {
  //     url: "../../assets/img/icon.svg",
  //     scaledSize: new google.maps.Size(70, 70)
  //   };
  //   const marker = new google.maps.Marker({
  //     position: latlng,
  //     title: 'HELP',
  //     icon: icon,
  //     snippet:'Lugar de insidente',
  //     animation: 'DROP'
  //   });
  //   marker.setMap(map);
    
  //   google.maps.event.addListener(marker,'click',function() {
  //     var pos = map.getZoom();
  //     map.setZoom(9);
  //     map.setCenter(marker.getPosition());
  //     window.setTimeout(function() {map.setZoom(pos);},3000);
  //   });
  //   //this.marker(latlng, map);

  // }
  // // Lugar del accidente
  // marker(coordenadas:any, map){
  //   //Market 
  //   var icon = {
  //     url: "../../asset/img/icon.png",
  //     scaledSize: new google.maps.Size(70, 70)
  //   };
  //   const marker = new google.maps.Marker({
  //     position: coordenadas,
  //     title: 'HELP',
  //     icon: icon,
  //     snippet:'Lugar de insidente',
  //     animation: 'DROP'
  //   });
  //   marker.setMap(map);
  // }
  // MapHidden(){
  //   var x = document.getElementById("mapa");
  //   if (this.selectedItem=="Page2" || this.selectedItem=="Page3" ) {
  //       x.style.display = "block";
  //   } else {
  //       x.style.display = "none";
  //   }
  // }

  // Mapa capacitor
  async createMap() {

      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000
      });
      console.log(coordinates);
       let coodernadas;
      if (this.formulario.Longitud  && this.formulario.Latitud){
        coodernadas ={ latitude: this.formulario.Latitud, longitude:this.formulario.Longitud }
      }else{
        const permisosGeo = await Geolocation.checkPermissions();
        console.log(permisosGeo);
        if(permisosGeo.location === "denied"){
          const getPermisos = await Geolocation.requestPermissions();
        }
        const coordinates = await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000
        });
        console.log(coordinates);
        coodernadas = coordinates.coords;
      }
      
      this.newMaP = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: "AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ",
        config: {
          center: { lat: coodernadas.latitude,
                    lng: coodernadas.longitude
          },
          // center: {
          //   lat: 33.6,
          //   lng: -117.9,
          // },
          zoom: 20,
        },
      });
      // Add a marker to the map
      this.addMapMarker(coodernadas);
      //click on map
      this.clickInMap();
    
    
  }
  async addMapMarker(coordenates: any){
      const markerId = await this.newMaP.addMarker({
        coordinate: {
        lat: coordenates.latitude,
        lng: coordenates.longitude
        },
        
        title:"Lugar del siniestros",
    });
    this.markerId = markerId;
  }
  async clickInMap(){
    const click = await this.newMaP.setOnMapClickListener(click => {
      this.newMaP.removeMarker("");
      this.addMapMarker(click);
      // this.formulario.Longitud = click.longitude;
      // this.formulario.Latitud = click.latitude;
      })
  }
  async Torval(){
    if(this.newMaP !== undefined){
      const putin = this.newMaP.destroy();
      console.log(putin)
    }
    
  }
  async getTiposSiniestros(){
    const load = await this.loading.create();
    await  load.present();
    this.api.tipoDeSiniestros().pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       (res) =>{
        console.log(res, 'respuesta');
        this.tiposSiniestros= res;
        
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
  async litleMesengeForU(){

  }
}
