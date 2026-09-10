import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { marcasVehiculos } from '../environments/vehicles';
import { ajustadorHn, tipoSolicitante } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { Talleres, rangoAnios } from '../environments/talleres';
import * as $ from 'jquery';
import { ToastService } from '../services/toast.service';
import { InterAutoVehicleCacheService } from '../services/inter-auto-vehicle-cache.service';
import { readStoredAttentionCurrency, resolveAttentionCurrency } from '../utils/currency-display.util';
import { returnToAjustadorhnParent } from '../utils/ajustador-segment-navigation.util';
import {
  buildInterAutoValidationInput,
  evaluateInterAutoChassisValidation,
  InterAutoChassisValidationState,
  normalizeVehicleIdentifier
} from '../validation/inter-auto-chassis.validation';
import { applyRecoveredVehicleIdentifiers, resolveRecoveredVehicleIdentifiers } from '../utils/bpm-claim-preflight.util';
import { InterAutoRegistrationCertificateState } from '../services/inter-auto-registration-certificate.service';

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
  datos:any=[]; esKilometraje:boolean=false; kilometrajeEsCero:boolean = true;  elExpedienteSerie: any; segmentoTitulo:any; isLoading:boolean = false;
  chassisValidation: InterAutoChassisValidationState | null = null;
  interAutoManualChasisEntryActive = false;
  private interAutoServerIdentifiers: { Chasis?: unknown; Motor?: unknown; PolizaExterna?: unknown } | null = null;

  brandSelectOptions = { cssClass: 'form-choice-alert', header: 'Marca del vehículo', subHeader: 'Selecciona una opción' };
  modelSelectOptions = { cssClass: 'form-choice-alert', header: 'Modelo del vehículo', subHeader: 'Selecciona una opción' };

  constructor(
    private api: ApiService,
    public toaster: ToastService,
    private interAutoVehicleCache: InterAutoVehicleCacheService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.idAtencion = localStorage.getItem('idAtencion');
    this.miMoneda = readStoredAttentionCurrency();
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

          void this.initializeInterAutoVehicleFields(this.elExpediente[0]);

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

  handleSegmentBack() {
    void returnToAjustadorhnParent(this.navCtrl, this.router);
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
          this.miMoneda = resolveAttentionCurrency(this.elExpediente[0]);
          this.moneda = this.miMoneda;
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
    const kilometraje = this.coerceKilometraje(event.target.value);
    this.ajustador.Kilometraje = kilometraje;
    this.datos['Kilometraje'] = kilometraje;
    this.kilometrajeEsCero = kilometraje === 0;
    localStorage.setItem('elKilometraje', this.idAtencion.toString()+'-'+kilometraje.toString());
    localStorage.setItem('datos-Kilometraje', kilometraje.toString());
    if (this.kilometrajeEsCero) {
      this.toaster.presentToastNoButtonsRed('Aun no se ha asignado un valor de Kilometraje. Si no asignas un Kilometraje, el valor a guardarse es cero.', 'top', 'km');
      
    }else{
      this.toaster.dismissToast();
      //console.log(this.ajustador.Kilometraje);
    }
    this.esKilometraje = true;
    this.setAtencionActual();
  }

  setKilo(kilo){
    const kilometraje = this.coerceKilometraje(kilo);
    this.ajustador.Kilometraje = kilometraje;
    this.datos['Kilometraje'] = kilometraje;
    this.kilometrajeEsCero = kilometraje === 0;
    this.esKilometraje = true;
    localStorage.setItem('elKilometraje', this.idAtencion.toString()+'-'+kilometraje.toString());
    localStorage.setItem('datos-Kilometraje', kilometraje.toString());
  }

  private coerceKilometraje(valor: any): number {
    if (valor === undefined || valor === null) {
      return 0;
    }

    const normalizado = typeof valor === 'string' ? valor.trim().toLowerCase() : valor;
    if (normalizado === '' || normalizado === 'null' || normalizado === 'undefined' || normalizado === 'nan') {
      return 0;
    }

    const kilometraje = Number(normalizado);
    if (!Number.isFinite(kilometraje) || kilometraje < 0) {
      return 0;
    }

    return kilometraje;
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

  allowManualChasisInput(): boolean {
    if (this.interAutoManualChasisEntryActive) {
      return true;
    }

    if (this.chassisValidation?.applies) {
      return this.chassisValidation.enableManualChasis;
    }

    const chasis = normalizeVehicleIdentifier(this.elChasisAsegurado);
    return !chasis;
  }

  allowManualMotorInput(): boolean {
    if (this.chassisValidation?.applies) {
      return this.chassisValidation.enableManualMotor;
    }

    return !normalizeVehicleIdentifier(this.elMotorAsegurado);
  }

  allowManualPolizaInput(): boolean {
    if (this.chassisValidation?.applies) {
      return this.chassisValidation.enableManualPoliza;
    }

    return !normalizeVehicleIdentifier(this.laPolizaExternaAsegurado);
  }

  onVehicleIdentifierChange() {
    this.syncVehicleIdentifiersToExpediente();
    this.applyInterAutoChassisValidation(true);
    void this.persistInterAutoDraftIfNeeded();
  }

  onInterAutoCertificateStateChange(state: InterAutoRegistrationCertificateState) {
    if (!state?.registrationCertificateUploaded) {
      return;
    }

    this.syncVehicleIdentifiersToExpediente();
    void this.persistInterAutoDraftIfNeeded();
  }

  private async initializeInterAutoVehicleFields(expediente: any) {
    const idAtencion = parseInt(this.idAtencion, 10);
    if (!idAtencion || !expediente) {
      this.applyInterAutoChassisValidation();
      return;
    }

    await this.interAutoVehicleCache.captureServerSnapshot(idAtencion, expediente);
    this.interAutoServerIdentifiers = {
      Chasis: expediente.Chasis,
      Motor: expediente.Motor,
      PolizaExterna: expediente.PolizaExterna
    };
    const draft = await this.interAutoVehicleCache.loadDraft(idAtencion);
    const recovered = resolveRecoveredVehicleIdentifiers(idAtencion, expediente.Chasis, draft);
    this.interAutoManualChasisEntryActive =
      recovered?.source === 'manual' || this.interAutoVehicleCache.shouldRecoverDraft(expediente.Chasis);

    if (recovered) {
      applyRecoveredVehicleIdentifiers(expediente, recovered);
      this.elChasisAsegurado = expediente.Chasis;
      this.elMotorAsegurado = expediente.Motor;
      this.elExpedienteSerie = expediente.Chasis;
      this.applyInterAutoChassisValidation(true);
      return;
    }

    if (this.interAutoManualChasisEntryActive && draft) {
      this.interAutoVehicleCache.applyDraftToExpediente(expediente, draft);
      this.elChasisAsegurado = expediente.Chasis;
      this.elMotorAsegurado = expediente.Motor;
      this.elExpedienteSerie = expediente.Chasis;
      this.laPolizaExternaAsegurado = expediente.PolizaExterna;
      this.applyInterAutoChassisValidation(true);
      return;
    }

    this.applyInterAutoChassisValidation();
  }

  private async persistInterAutoDraftIfNeeded() {
    const idAtencion = parseInt(this.idAtencion, 10);
    const expediente = this.elExpediente?.[0];
    if (!idAtencion || !expediente || !this.shouldPersistManualChassisDraft()) {
      return;
    }

    await this.interAutoVehicleCache.saveDraft(idAtencion, {
      chasis: this.elChasisAsegurado,
      motor: this.elMotorAsegurado,
      poliza: this.laPolizaExternaAsegurado
    });
  }

  private shouldPersistManualChassisDraft(): boolean {
    return this.interAutoManualChasisEntryActive || !!this.chassisValidation?.enableManualChasis;
  }

  private applyInterAutoChassisValidation(preserveManualEntry = false) {
    const expediente = this.elExpediente?.[0];
    if (!expediente) {
      return;
    }

    const previousManualChasis = preserveManualEntry && this.chassisValidation?.enableManualChasis;
    const previousManualMotor = preserveManualEntry && this.chassisValidation?.enableManualMotor;
    const previousManualPoliza = preserveManualEntry && this.chassisValidation?.enableManualPoliza;

    const validation = evaluateInterAutoChassisValidation(
      buildInterAutoValidationInput(this.getInterAutoValidationSource({
        ...expediente,
        Chasis: this.elChasisAsegurado,
        Motor: this.elMotorAsegurado,
        PolizaExterna: this.laPolizaExternaAsegurado
      }, preserveManualEntry))
    );

    if (!preserveManualEntry) {
      this.elChasisAsegurado = validation.chasis;
      this.elMotorAsegurado = validation.motor;
      this.elExpedienteSerie = validation.chasis;
    }

    if (!preserveManualEntry || validation.enableManualPoliza === false) {
      this.laPolizaExternaAsegurado = validation.poliza;
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
      validation.enableManualPoliza = previousManualPoliza || validation.enableManualPoliza;
    }

    if (!validation.applies && this.interAutoManualChasisEntryActive) {
      this.chassisValidation = {
        applies: true,
        mode: 'valid',
        message: '',
        chasis: normalizeVehicleIdentifier(this.elChasisAsegurado),
        motor: normalizeVehicleIdentifier(this.elMotorAsegurado),
        poliza: normalizeVehicleIdentifier(this.laPolizaExternaAsegurado),
        enableManualChasis: true,
        enableManualMotor: validation.enableManualMotor,
        enableManualPoliza: validation.enableManualPoliza,
        swappedValues: false
      };
      this.syncVehicleIdentifiersToExpediente();
      return;
    }

    if (!validation.applies) {
      this.chassisValidation = null;
      return;
    }

    this.chassisValidation = validation;
    this.syncVehicleIdentifiersToExpediente();
  }

  private getInterAutoValidationSource(
    expediente: { Chasis?: unknown; Motor?: unknown; PolizaExterna?: unknown },
    preserveManualEntry: boolean
  ) {
    if (preserveManualEntry || !this.interAutoServerIdentifiers) {
      return expediente;
    }

    return {
      ...expediente,
      Chasis: this.interAutoServerIdentifiers.Chasis ?? expediente.Chasis,
      Motor: this.interAutoServerIdentifiers.Motor ?? expediente.Motor,
      PolizaExterna: this.interAutoServerIdentifiers.PolizaExterna ?? expediente.PolizaExterna
    };
  }

  private syncVehicleIdentifiersToExpediente() {
    const expediente = this.elExpediente?.[0];
    if (!expediente) {
      return;
    }

    expediente.Chasis = this.elChasisAsegurado;
    expediente.Motor = this.elMotorAsegurado;
    expediente.PolizaExterna = this.laPolizaExternaAsegurado;
    localStorage.setItem('datos-ChasisVehiculo', this.elChasisAsegurado || '');
    localStorage.setItem('datos-Poliza', this.laPolizaExternaAsegurado || '');
    localStorage.setItem('disExpediente', JSON.stringify(this.elExpediente));

    const idAtencion = parseInt(this.idAtencion, 10);
    if (this.interAutoVehicleCache.isReadyToCommitManualChassis(idAtencion, this.elChasisAsegurado)) {
      localStorage.setItem('dataProcess-ChasisVehiculo', this.elChasisAsegurado || '');
      localStorage.setItem('dataProcess-Motor', this.elMotorAsegurado || '');
    }
  }
}
