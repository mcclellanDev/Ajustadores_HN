import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { marcasVehiculos } from '../environments/vehicles';
import { ajustadorHn, tipoSolicitante } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { Talleres, rangoAnios } from '../environments/talleres';
import * as $ from 'jquery';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-segmento-vehiculo',
  templateUrl: './segmento-vehiculo.page.html',
  styleUrls: ['./segmento-vehiculo.page.scss'],
})
export class SegmentoVehiculoPage implements OnInit {
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

  idAtencion:any; miMoneda: string; moneda: any; laMarcaAsegurado:any;  elModeloAsegurado: any;
  elAnioAsegurado:any; elChasisAsegurado:any; elNumeroPlacaAsegurado:any; elMotorAsegurado:any; isFirstTime:boolean=true; clickCount:number=0;
  laPolizaExternaAsegurado: any;contadorSegmentos:number=0; marcasVehiculos:any=marcasVehiculos; modelosMarca:any=[]; elExpediente:any;
  isMarca:boolean=false; isModelo:boolean=false; talleresFiltrados:any=[];  esPesado: any; elExpedienteKilometraje:any; ajustador: ajustadorHn={};
  datos:any=[]; esKilometraje:boolean=false;  elExpedienteSerie: any; segmentoTitulo:any; isLoading:boolean = false;
  constructor(private api: ApiService, public toaster:ToastService) { 
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {
      
    }

    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : '+idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }

    let tipoPesadoId = localStorage.getItem('elTipoPesado');
    if (tipoPesadoId) {
      this.esPesado = parseInt(tipoPesadoId.split('-')[1]);
      $("input[type='radio'][value="+this.esPesado+"]").attr("checked",'true').trigger("change");
      console.log('Aca se tendría que setear el tipo pesado '+this.esPesado);
      
      
    }

    let kilometraje = localStorage.getItem('elKilometraje');
    if (kilometraje) {
      let kilometers = kilometraje.split('-')[1];
      this.elExpedienteKilometraje = parseInt(kilometers);
      this.setKilo(parseInt(kilometers));
    }
    
    this.api.Expediente(dIdAtencion).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
        //this.isLoading = false;
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          this.laMarcaAsegurado = this.elExpediente[0].Marca;
          localStorage.setItem('datos-MarcaVehiculo', this.laMarcaAsegurado);

          this.elModeloAsegurado = this.elExpediente[0].Modelo;
          localStorage.setItem('datos-ModeloVehiculo', this.elModeloAsegurado);

          this.elAnioAsegurado = this.elExpediente[0].Year;
          localStorage.setItem('datos-AnioVehiculo', this.elAnioAsegurado);
          
          this.elChasisAsegurado = this.elExpediente[0].Chasis;
          this.elExpedienteSerie = this.elExpediente[0].Chasis;
          localStorage.setItem('datos-ChasisVehiculo', this.elChasisAsegurado);
          
          this.elNumeroPlacaAsegurado = this.elExpediente[0].NumeroPlaca;
          localStorage.setItem('datos-PlacaVehiculo', this.elNumeroPlacaAsegurado);
          

          this.laPolizaExternaAsegurado = this.elExpediente[0].PolizaExterna;
          localStorage.setItem('datos-Poliza', this.laPolizaExternaAsegurado);

          this.elMotorAsegurado = this.elExpediente[0].Motor;

          if (this.laMarcaAsegurado) {

            for (let index = 0; index < marcasVehiculos.length; index++) {
              const element = marcasVehiculos[index];
              console.log(element.nombre+', '+this.laMarcaAsegurado+', '+(element.nombre==this.laMarcaAsegurado))
              if (element.nombre==this.laMarcaAsegurado) {
                let elIdMarca = element.id;
                this.modelosMarca = element.modelos;
              }
            }

            

            this.isMarca = true;
            console.log('El arreglo de las marcas es ');
            console.dir(this.marcasVehiculos)
          }

          if (this.elAnioAsegurado) {
            localStorage.setItem('anioAsegurado', this.elAnioAsegurado);
          }
          if (this.elModeloAsegurado) {
            this.isModelo = true;
          }
        }
    )
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.api.Expediente(parseInt(this.idAtencion)).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));

          this.moneda = this.elExpediente[0].Moneda;
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
        }
      )
    }, 1500);
  }

  ngOnInit() {
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

    console.log('Los modelos de esta marca son ');
    console.dir(this.modelosMarca)
    this.isModelo = true;
   // this.elModeloAsegurado = this.modelosMarca
   this.setAtencionActual();
  }

  editarModelo(){
    this.isModelo = false;
  }

  entrarAnio(event){
    this.elExpediente.Year = event.target.value;
    console.log(event.target.value);

    for (let index = 0; index < Talleres.length; index++) {
      const element = Talleres[index];
      
    }
    
    this.setAtencionActual();
  }

  entraPesado(event){
    this.talleresFiltrados = [];
    this.esPesado = event.target.value;
    //alert(this.esPesado+1)
    console.log(this.esPesado);
    localStorage.setItem('elTipoPesado', this.idAtencion.toString()+'-'+this.esPesado);

    //this.talleresFiltrados = Talleres;
    //this.filtrarTalleres();
    this.setAtencionActual();
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

  between(x, min, max) {
    return x >= min && x <= max;
  }

  evaluateKm(event){
    this.ajustador.Kilometraje = event.target.value;
    this.datos['Kilometraje'] = event.target.value;
    localStorage.setItem('elKilometraje', this.idAtencion.toString()+'-'+event.target.value.toString());
    localStorage.setItem('datos-Kilometraje', (this.ajustador.Kilometraje).toString());
    if (this.ajustador.Kilometraje == null || this.ajustador.Kilometraje.toString() == '' || this.ajustador.Kilometraje == 0) {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      this.ajustador.Kilometraje = 0;
      
    }else{
      this.toaster.dismissToast();
      //console.log(this.ajustador.Kilometraje);
    }
    this.esKilometraje = true;
    this.setAtencionActual();
  }

  setKilo(kilo){
    this.ajustador.Kilometraje = kilo;
    this.datos['Kilometraje'] = kilo;
    this.esKilometraje = true;
    localStorage.setItem('elKilometraje', this.idAtencion.toString()+'-'+kilo.toString());
    localStorage.setItem('datos-Kilometraje', kilo.toString());
  }

  editarKilo(){
    this.esKilometraje = false;
  }

  clearSegmentsStorage() {
    localStorage.removeItem('elTipoPesado');
    localStorage.removeItem('elKilometraje');
  }

  setAtencionActual(){
    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      if (this.idAtencion != idAtencionActual) {
        localStorage.setItem('atencionEnProceso', this.idAtencion);  
      }
    }else{
      localStorage.setItem('atencionEnProceso', this.idAtencion);
    }
  }
}
