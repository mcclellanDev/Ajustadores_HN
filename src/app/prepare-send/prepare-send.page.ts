import { ToastService } from 'src/app/services/toast.service';
import { ItemsData, requiredData_Less, requiredData_NOP } from './../environments/predeterminados';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { resolveAttentionCurrency } from '../utils/currency-display.util';
import { normalizeChassis, normalizePolicyNumber, resolveClaimCoordinates, resolveClaimDate } from '../utils/claim-payload-normalizer';
import * as $ from 'jquery';
import { emptySignatureWhite, imagePrefix, errorImage, editarFirmaIcono } from '../environments/default-images';
import {
  clearAllClientSignatureCache,
  isValidStoredClientSignature,
  persistClientSignatureToCache,
  resolveClientSignatureFromCache
} from '../utils/client-signature-cache.util';
import { AlertController, AnimationController, IonAccordionGroup, Platform, ToastController } from '@ionic/angular';
import { valoresPredeterminados } from '../environments/predeterminados';
import { abogadosAudiencias } from '../interfaces/arrays';
import {
  AttentionBulkAttempt,
  AttentionBulkAttemptService
} from '../services/attention-bulk-attempt.service';

@Component({
  selector: 'app-prepare-send',
  templateUrl: './prepare-send.page.html',
  styleUrls: ['./prepare-send.page.scss'],
})
export class PrepareSendPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  
  idAtencion: any; tipoDeCobertura: any; coberturaDisplayName:any; causasPorCobertura:any=[]; causaBpmCodigo:any; causaBpmDescripcion:any; isLoading:boolean=false;
  cliente: any = []; dataProcess: any = []; datos:any=[]; tiposdeCobertura:any=[];
  moneda: any;  miMoneda: string; identidad:any; identidadAsegurado:any;  nombreConductor: any;
  formateadaSiniestro: any;   firmaPrecargada: string;  imageHeight: number;  isSignature: boolean;
  laLocalidad: any = [];  miPais: any;  miPaisNombre: any;  latitud: any;  longitud: any;  elParentesco: string;
  validaNulos: any[];  AjustadorFiltro: any[];  storageArrayFilter: any[];  storageArrayIndexs: any[];
  storageArrayStrings: any[];  tipoGeneros: any[];  elGenero: any;  elTipoGenero: any;  inicialGenero: string;
  defaultArray:any = [];  elUsuario: any= [];  firmaPrecargadaInspector: string;  idAjustador: any;  ajustadorNombre: any;
  audienciaId: any;  idTablaAjustador: any;  dataBPM: any= [];  bpmArray: any = [];  estaCompleto: boolean = false;
  isBPMcomplete: boolean = false;  codigoBPMFicohsa: any;  codigoReclamoFicohsa: any; atencionId: number;
  dataSiniestro: any;  identidadCliente: any;  elTipoLicencia: any;  nulosAtencion: any = [];  isEeexittoooo: boolean;
  miLogRespuesta: any; sucessIcon:any; disData: any = []; AutoridadInvolucrada:any; firmaIcono:any = editarFirmaIcono;
  bulkAttemptInfo: AttentionBulkAttempt | null = null;
  emptySignatureWhite = emptySignatureWhite; emptySignature = emptySignatureWhite; errorImage = errorImage;
  validationAttempted = false;
  invalidCoverage = false;
  invalidDriverName = false;
  invalidGender = false;
  invalidSignature = false;
  invalidAuthority = false;
  coverageSelectOptions = {
    cssClass: 'form-choice-alert',
    header: 'Tipo de cobertura',
    subHeader: 'Selecciona una opción'
  };
  genderSelectOptions = {
    cssClass: 'form-choice-alert',
    header: 'Tipo de género',
    subHeader: 'Selecciona una opción'
  };

  abogadosAudiencias = abogadosAudiencias
  laExpediente: any = [];
  

  constructor(private platform:Platform, private api: ApiService,
    private routeActive: ActivatedRoute, private router: Router, private toaster: ToastService,
    private animationCtrl: AnimationController, private alert: AlertController, public bulkAttemptService: AttentionBulkAttemptService) {
    this.firmaPrecargada = emptySignatureWhite;
    this.sucessIcon = '../../assets/img/guardado.gif';


    let porqueNo = localStorage.getItem('dataProcess-PorqueNoUsoServicioAsistencia');
    let autoridad = localStorage.getItem('dataProcess-AutoridadInvolucrada');
    
    let tipoGeneroId =  localStorage.getItem('elGeneroId');
    let laCobertura = localStorage.getItem('laCobertura');
    let elGeneroTipo = localStorage.getItem('elGenero');

    let exped:any = localStorage.getItem('elExpediente');
    console.log('Expediente en cliente : '+exped);
    this.laExpediente = JSON.parse(exped);
    console.log('El nombre del cliente : '+this.laExpediente[0].Cliente);
    console.dir(exped);
    console.dir(JSON.parse(exped));

    let elNombreConductor = localStorage.getItem('dataProcess-NombreConductor');//this.laExpediente[0].Cliente;//localStorage.getItem('nombreConductor');

    /*
    self.alert('Acá estoy')
    this.disData = this.navParams.get('forma');
    console.log('Dis data');
    console.dir(this.disData);
    */

    setTimeout(() => {
      if (porqueNo) {
        this.setPorqueNoUso(porqueNo);
      }

      if (autoridad) {
        this.setAutoridadInvolucrada(autoridad);
      }

      if (laCobertura) {
        this.coberturaDisplayName = laCobertura.split('-')[1];
        localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
        this.seTipoCobertura(this.coberturaDisplayName);
      }

      if (elNombreConductor) {
        this.setNombreConductor(elNombreConductor);
      }

      if (elGeneroTipo) {
        this.elGenero = elGeneroTipo.split('-')[1];
        this.elTipoGenero = parseInt(tipoGeneroId.split('-')[1]);
        console.log('El genero '+this.elGenero+', el Id de género : '+this.elTipoGenero);

        setTimeout(() => {
          this.isLoading = true;
          this.setElTipoGenero(this.elTipoGenero);  
        }, 2000);
        
      }
    }, 1000);
    
    
    const state = this.router.getCurrentNavigation()?.extras?.state as any;
      this.idAtencion = state?.data?.[1]?.idAtencion || localStorage.getItem('atencionEnProceso');

      console.log('La atencion es '+this.idAtencion)
      this.atencionId = parseInt(this.idAtencion);
      this.refreshBulkAttemptInfo();
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
      
      this.cliente = state?.data?.[0]?.forma || this.laExpediente;
      console.log('Mi cliente');
      console.dir(this.cliente)

      this.moneda = this.cliente[0].Moneda;

      let fechaExpediente = this.cliente[0].FechaRegistro;
      console.log(fechaExpediente)
      this.formateadaSiniestro = fechaExpediente.split('T')[0];
      console.log(this.formateadaSiniestro)

      //alert(this.moneda)
      this.miMoneda = resolveAttentionCurrency(this.cliente[0]);

      this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
  }

  ngOnInit() {
    localStorage.setItem('origin', window.location.pathname);
    this.getTiposDeCobertura();
    this.loadGeneros();
  }

  ionViewWillEnter() {
    this.refreshClientSignature();
    this.refreshBulkAttemptInfo();
  }

  private isValidClientSignature(signature: any): boolean {
    return isValidStoredClientSignature(signature);
  }

  private refreshClientSignature(): string {
    const signature = resolveClientSignatureFromCache(this.idAtencion);

    this.firmaPrecargada = signature ?? this.emptySignatureWhite;
    this.isSignature = !!signature;
    this.invalidSignature = this.validationAttempted && !this.isSignature;

    return this.firmaPrecargada;
  }

  private persistClientSignature(signature: string): void {
    if (!persistClientSignatureToCache(signature, this.idAtencion)) {
      return;
    }

    this.firmaPrecargada = signature;
    this.isSignature = true;
    this.invalidSignature = false;
  }

  private refreshBulkAttemptInfo(): void {
    if (!this.atencionId) {
      this.bulkAttemptInfo = null;
      return;
    }

    void this.bulkAttemptService.getAttempt(this.atencionId).then((record) => {
      this.bulkAttemptInfo = record;
    });
  }

  private markBulkAttemptStarted(): void {
    if (!this.atencionId) {
      return;
    }

    void this.bulkAttemptService.recordAttemptStart(this.atencionId).then((record) => {
      this.bulkAttemptInfo = record;
    });
  }

  private markBulkAttemptFailed(message?: string): void {
    if (!this.atencionId) {
      return;
    }

    void this.bulkAttemptService.recordFailure(this.atencionId, message).then((record) => {
      this.bulkAttemptInfo = record;
    });
  }

  private markBulkAttemptSucceeded(): void {
    if (!this.atencionId) {
      return;
    }

    void this.bulkAttemptService.recordSuccess(this.atencionId).then((record) => {
      this.bulkAttemptInfo = record;
    });
  }

  private normalizeClaimServerMessage(message: any): string {
    return String(message || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  private translateClaimServerMessage(message: any, fallback = 'No es posible procesar esta solicitud en este momento. Recomendamos revisar los datos ingresados, intentar nuevamente o finalizar el proceso manualmente.'): string {
    const rawMessage = message || fallback;
    const normalized = this.normalizeClaimServerMessage(rawMessage);

    if (
      normalized.includes('ocurrio un error') ||
      normalized.includes('ha ocurrido un error') ||
      normalized.includes('occurred an error') ||
      normalized.includes('an error has occurred') ||
      normalized.includes('error has occurred') ||
      normalized.includes('error occurred')
    ) {
      return 'No es posible procesar esta solicitud en este momento. Se recomienda revisar si la póliza está siendo renovada, o bien finalizar el proceso manualmente.';
    }

    if (
      normalized.includes('certificado no valido') ||
      normalized.includes('invalid certificate') ||
      normalized.includes('certificate invalid')
    ) {
      return 'No es posible procesar esta solicitud en este momento. Recomendamos revisar número de chasis para saber si tiene cobertura, o bien finalizar el proceso manualmente.';
    }

    if (
      normalized.includes('causa no corresponde') ||
      normalized.includes('producto especificado') ||
      normalized.includes('causa incorrecta') ||
      normalized.includes('cause does not correspond') ||
      normalized.includes('specified product') ||
      normalized.includes('incorrect cause')
    ) {
      return 'No es posible procesar esta solicitud en este momento. Recomendamos revisar el tipo de cobertura seleccionada, o bien finalizar el proceso manualmente.';
    }

    return fallback;
  }

  private extractBulkErrorMessage(error: any, fallback = 'No es posible procesar esta solicitud en este momento. Recomendamos revisar los datos ingresados, intentar nuevamente o finalizar el proceso manualmente.'): string {
    const rawMessage = error?.error?.Message || error?.message || error?.descripcion || fallback;
    return this.translateClaimServerMessage(rawMessage, fallback);
  }

  private async presentClaimSendFailureAlert(message: string) {
    const alert = await this.alert.create({
      cssClass: 'form-choice-alert entry-validation-alert claim-send-failure-alert',
      header: 'No se pudo enviar la solicitud',
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

  updateValidationState() {
    const firmaActual = this.refreshClientSignature();
    this.isSignature = this.isValidClientSignature(firmaActual);
    this.invalidCoverage = !this.coberturaDisplayName?.toString().trim();
    this.invalidDriverName = !this.nombreConductor?.toString().trim();
    this.invalidGender = !this.elGenero?.toString().trim();
    this.invalidSignature = !this.isSignature;
    this.invalidAuthority = !this.AutoridadInvolucrada?.toString().trim();
  }

  canSubmit(): boolean {
    this.validationAttempted = true;
    this.updateValidationState();

    const hasMissingData = this.invalidCoverage ||
      this.invalidDriverName ||
      this.invalidGender ||
      this.invalidAuthority ||
      this.invalidSignature;

    if (hasMissingData) {
      this.isLoading = false;
      this.openAccordionData();
      return false;
    }

    return true;
  }

  entraPorqueNoUso(event) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = event.target.value;
    this.dataProcess['PorqueNoUsoServicioAsistencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', event.target.value);
  }

  setPorqueNoUso(porque) {
    this.dataProcess.PorqueNoUsoServicioAsistencia = porque;
    this.cliente.PorqueNoUsoServicioAsistencia = porque;
    localStorage.setItem('dataProcess-PorqueNoUsoServicioAsistencia', porque);
  }

  seleccionarTipoCobertura(event){
    this.tipoDeCobertura = event.target.value;
    localStorage.setItem('tipoCobertura', event.target.value);
    $("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
    this.coberturaDisplayName = this.tipoDeCobertura;
    this.invalidCoverage = false;
    localStorage.setItem('laCobertura', this.idAtencion.toString()+'-'+this.coberturaDisplayName);
    localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
    this.setAtencionActual();
    this.clearSelectedCause();
    this.solicitarCausaPorCobertura(this.resolveCoverageCode(this.tipoDeCobertura));
  }

  private resolveCoverageCode(value: any): string {
    const selected = (value || '').toString();
    let storedCoverages: any[] = [];
    try {
      storedCoverages = JSON.parse(localStorage.getItem('coberturas') || '[]');
    } catch (_) {
      storedCoverages = [];
    }
    const localCoverage = storedCoverages?.find((item) =>
      item?.cOBERTURAField?.toString() === selected ||
      item?.COD_COBERTURA?.toString() === selected ||
      item?.dESCRIPCIONField?.toString() === selected ||
      item?.DESCRIPCION_COBE?.toString() === selected
    );
    return (localCoverage?.cOBERTURAField || localCoverage?.COD_COBERTURA || localStorage.getItem('coberturaId') || selected || '').toString();
  }

  private getCodigoCausaBpm(): string {
    return (this.causaBpmCodigo || localStorage.getItem('codigoCausaBpm') || valoresPredeterminados[0].Causa || '').toString();
  }

  private getCodigoCoberturaBpmSinPoliza(): string {
    return 'AU01';
  }

  private getCausaBpmSinPoliza(): string {
    return 'A001';
  }

  private async solicitarCausaPorCobertura(codigoCobertura: any): Promise<void> {
    const codigo = (codigoCobertura || '').toString().trim();
    if (!codigo) {
      return;
    }
    this.isLoading = true;
    this.api.ObtenerCausasPorCobertura(codigo).pipe(finalize(() => this.isLoading = false)).subscribe(
      async (res: any) => {
        this.causasPorCobertura = Array.isArray(res) ? res : [];
        if (!this.causasPorCobertura.length) {
          this.toaster.presentToastAlert('No se encontraron causas para la cobertura seleccionada.', 'top', 'warning', 5000);
          return;
        }
        await this.presentarSelectorCausa();
      },
      async () => {
        this.toaster.presentToastAlert('No fue posible obtener las causas para esta cobertura.', 'top', 'danger', 6000);
      }
    );
  }

  private async presentarSelectorCausa(): Promise<void> {
    const alert = await this.alert.create({
      cssClass: 'form-choice-alert',
      header: this.getCauseSelectorHeader(),
      subHeader: 'Selecciona una opción',
      inputs: this.causasPorCobertura.map((causa) => ({
        type: 'radio',
        label: causa.DESCRIPCION_CAUS,
        value: causa.COD_CAUSA,
        checked: causa.COD_CAUSA === this.causaBpmCodigo || causa.COD_CAUSA === localStorage.getItem('codigoCausaBpm')
      })),
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Seleccionar',
          handler: (codigoCausa) => {
            if (!codigoCausa) {
              return false;
            }
            const seleccionada = this.causasPorCobertura.find((causa) => causa.COD_CAUSA === codigoCausa);
            this.causaBpmCodigo = codigoCausa;
            this.causaBpmDescripcion = seleccionada?.DESCRIPCION_CAUS || '';
            localStorage.setItem('codigoCausaBpm', this.causaBpmCodigo || '');
            localStorage.setItem('descripcionCausaBpm', this.causaBpmDescripcion || '');
          }
        }
      ]
    });
    await alert.present();
  }

  private clearSelectedCause(): void {
    this.causaBpmCodigo = '';
    this.causaBpmDescripcion = '';
    localStorage.removeItem('codigoCausaBpm');
    localStorage.removeItem('descripcionCausaBpm');
  }

  private getCauseSelectorHeader(): string {
    const description = (this.coberturaDisplayName || this.tipoDeCobertura || localStorage.getItem('datos-TipoAcuerdoFicohsa') || '').toString().trim();
    const coverageHint = description.split(/\s+/).filter(Boolean).slice(0, 2).join(' ');
    return coverageHint ? 'Causa del reclamo - ' + coverageHint : 'Causa del reclamo';
  }
  
  seTipoCobertura(tipo){
    this.tipoDeCobertura = tipo;
    localStorage.setItem('tipoCobertura', tipo);
    $("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
    this.coberturaDisplayName = this.tipoDeCobertura;
    localStorage.setItem('laCobertura', this.idAtencion.toString()+'-'+this.coberturaDisplayName);
    localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
    this.setAtencionActual();
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

  getTiposDeCobertura(){
    this.isLoading = true;
    this.api.ListarTiposAcuerdo().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
    async (res) =>{
      console.log('Esto viene de la cobertura');
      console.dir(res);
      this.tiposdeCobertura = res;
    })
  }

  entraNombreConductor(event) {
    //this.cliente.NombreConductor = event.target.value;
    this.dataProcess.NombreConductor = event.target.value;
    this.dataProcess['NombreConductor'] = event.target.value;
    this.nombreConductor = event.target.value;
    this.invalidDriverName = !this.nombreConductor?.trim();
    localStorage.setItem('nombreConductor', this.cliente.NombreConductor);
    localStorage.setItem('dataProcess-NombreConductor', event.target.value);
  }

  setNombreConductor(nombre) {
    //this.cliente.NombreConductor = nombre;
    this.dataProcess.NombreConductor = nombre;
    this.dataProcess['NombreConductor'] = nombre;
    this.nombreConductor = nombre;
    localStorage.setItem('nombreConductor', this.cliente.NombreConductor);
    localStorage.setItem('dataProcess-NombreConductor', nombre);
  }

  goESignature() {
    localStorage.setItem('signatureReturnTo', '/prepare-send');
    localStorage.setItem('origin', '/prepare-send');
    this.router.navigate(['./esignature']);
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
        for (let index = 0; index < firmas.length; index++) {
          const element = firmas[index];
          if (element?.FotoFirma) {
            this.persistClientSignature(imagePrefix + element.FotoFirma);
          }
        }
      },
      async (res) => {
        this.refreshClientSignature();
      }
    );

  }


  async getCountry(){
    this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
    //console.log("Mi localidad es ");
    //console.dir(this.laLocalidad)
    this.laLocalidad = JSON.stringify(this.laLocalidad);
    this.miPais = this.laLocalidad[0].countryCode;
    //alert('Codigo de país '+this.miPais)
    this.miPaisNombre = this.laLocalidad[0].countryName;
    localStorage.setItem('codigoPais', this.miPais);
    localStorage.setItem('nombrePais', this.miPaisNombre);
    this.latitud = this.laLocalidad[0].latitude;
    this.longitud = this.laLocalidad[0].longitude;
    this.guardarFormulario();
  }

  guardarCacheCliente(){
    if (!this.canSubmit()) {
      return;
    }
    
    /*
    
    this.dataBPM =  {
              Chasis: chasisSiniestro,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: polizaSiniestro, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSiniestroBpm,//fechaSplit,//this.cliente[0].FechaRegistro, OJO
              Causa: this.getCodigoCausaBpm(), // Causa Ficohsa por cobertura
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: coordenadasSiniestro.Latitud,//this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
              Longitud: coordenadasSiniestro.Longitud,//this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: ownerRelationshipCode, // Formulario
              Observacion: this.idTablaAjustador // Guardar Siniestro
            }
    
    */
/*
    alert('Atencion : '+atencionId+', para el cliente '+this.cliente[0].Cliente+', con la autoridad '+this.AutoridadInvolucrada
      +', y el conductor : '+this.nombreConductor+', porque '+this.dataProcess.PorqueNoUsoServicioAsistencia
    );
    */

    

    

              setTimeout(() => {
                this.testSave();
              }, 600);
/*
    const dataSiniestro = {
      RefAtencionId: atencionId,
      RefProveedorAgenteId: 0,
      RefProveedorAgenteAbogadoId: 0,
      AgendarAudiencia: 0,
      AseguradoUsoPoliza: 0,
      TerceroResponsable: 0,
      LesionadosSinAudiencia: 0,
      DescripcionAudiencia: "string",
      Poliza: "string",
      Identificacion: "string",
      Nombre: "string",
      ConductorAfiliado: 0,
      ConductorDetenido: 0,
      Descripcion: "string",
      MarcaVehiculo: "string",
      ModeloVehiculo: "string",
      AnioVehiculo: 0,
      PlacaVehiculo: "string",
      ChasisVehiculo: "string",
      ColorVehiculo: "string",
      VehiculoDetenido: 0,
      DescripcionVehiculo: "string",
      TercerosHeridos: 0,
      TercerosMuertos: 0,
      DescripcionTercerosHeridos: "string",
      DescripcionTercerosMuertos: "string",
      DanioFrontal: 0,
      DanioTrasero: 0,
      DanioLateralDerecho: 0,
      DanioLataralIzquierdo: 0,
      VehiculoVolcado: 0,
      DescripcionDanio: "string",
      RefPaisId: 0,
      RefCiudadId: 0,
      RefDeptoId: 0,
      RefMunicipioId: 0,
      FechaHora: "2026-04-23T17:41:51.655Z",
      Lugar: "string",
      RefUsuarioId: 0,
      TallerMecanicoId: 0,
      Blindado: "string",
      ObservacionTaller: "string",
      ReclamoAsegurado: "string",
      Observaciones: "string",
      Latitud: "string",
      Longitud: "string",
      NombreConductor: "string",
      IdentidaConductor: "string",
      DPI_Pasaporte: "string",
      TelefonoConductor: "string",
      CelularConductor: "string",
      Edad: 0,
      Licencia: "string",
      TipoLicencia: "string",
      Vigencia: "string",
      DireccionConductor: "string",
      Sexo: 0,
      RefTipoConductorId: 0,
      DireccionEnvioCorrespondencia: "string",
      CorreoElectronico: "string",
      RefTipoLicenciaId: 0,
      NombreAtribuyeAccidente: "string",
      AutoridadInvolucrada: "string",
      UbicacionVehiculoDetenido: "string",
      PruebaAlcoholemia: 0,
      RefTipoCombustibleId: 0,
      AC: 0,
      Rines: "string",
      BolsaAire: 0,
      CierreCentralizado: 0,
      Mecanico: 0,
      RetrovisorElectronico: 0,
      Overfenders: 0,
      ColaPato: 0,
      CintaDecorativa: 0,
      LicenciaEstado: 0,
      ObservacionesFinales: "string",
      RefTipoSolicitanteInformeAjusteId: 0,
      TipoAcuerdoFicohsa: "string",
      DondeSeEncuentraVehiculo: "string",
      NumeroUnidad: "string",
      Parentesco: "string",
      FechaNacimientoConductor: "2026-04-23T17:41:51.655Z",
      CulpableCompromisoPago: 0,
      ObservacionCompromisoPago: "string",
      PorqueNoUsoServicioAsistencia: "string",
      Kilometraje: 0,
      OtrosTalleres: "string"
    }
    */

  }




  testSave(){
    if (!this.canSubmit()) {
      return;
    }

    this.isLoading = true;
    const laFirma = this.refreshClientSignature();
    this.invalidSignature = !this.isValidClientSignature(laFirma);

    if (this.invalidSignature) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar los datos.", "top", "firma");
      this.isLoading = false;
    }else{
      //alert('Hey yey yeyyy es el rey!')

      let atencionId = parseInt(this.idAtencion);
      let porqueNo = localStorage.getItem('dataProcess-PorqueNoUsoServicioAsistencia');

      const cacheData = {
      "IdAtencion": atencionId,
      "Nombre": this.cliente[0].Cliente,
      "AutoridadInvolucrada": this.AutoridadInvolucrada,
      "NombreConductor": this.nombreConductor,
      "IdentidaConductor": null,
      "Poliza": this.cliente[0].PolizaExterna,
      "NombreAtribuyeAccidente": null,
      "TelefonoConductor": null,
      "CelularConductor": null,
      "CorreoElectronico": null,
      "Licencia": null,
      "Blindado": 0,
      "FechaNacimientoConductor": null,
      "Edad": 0,
      "AseguradoUsoPoliza": 2,
      "PorqueNoUsoServicioAsistencia": porqueNo,
      "PruebaAlcoholemia": 0,
      "AgendarAudiencia": 0,
      "VehiculoDetenido": 0,
      "ConductorDetenido": 0,
      "VehiculoVolcado": 0,
      "DireccionEnvioCorrespondencia": null,
      "DireccionConductor": null,
      "DondeSeEncuentraVehiculo": null,
      "TerceroResponsable": 0,
      "UbicacionVehiculoDetenido": null,
      "DescripcionAudiencia": null,
      "LicenciaEstado": 0,
      "Vigencia": null,
      "RefTipoLicenciaId": 0,
      "TipoLicencia": null,
      "NumeroUnidad": null,
      "DescripcionTercerosMuertos": null,
      "DescripcionTercerosHeridos": null,
      "Descripcion": null,
      "DescripcionDanio": null,
      "RefTipoConductorId": 0,
      "TercerosMuertos": 0,
      "TercerosHeridos": 0,
      "Parentesco": null,
      "Latitud": this.cliente[0].LatitudCliente,
      "Longitud": this.cliente[0].LongitudCliente,
      "AnioVehiculo": this.cliente[0].Year,
      "ModeloVehiculo": this.cliente[0].Modelo,
      "PlacaVehiculo": this.cliente[0].Placa,
      "ColorVehiculo": this.cliente[0].Color,
      "MarcaVehiculo": this.cliente[0].Marca,
      "ChasisVehiculo": this.cliente[0].Chasis,
      "Motor": null
    }
      
      setTimeout(() => {

        this.api.GuardarCacheCliente(cacheData).pipe( 
          finalize(async ()=>{
            //alert('Finalice')
            //this.isLoading = false;
            //this.isComplete = true;
          })
        ).subscribe(
          async (res) =>{
          }
        )
        }, 1500);

      setTimeout(() => {
        this.guardarFormulario();
      }, 1800);
    }
  }

  entraAutoridadInvolucrada(event) {
    this.AutoridadInvolucrada = event.target.value;
    this.invalidAuthority = !this.AutoridadInvolucrada?.toString().trim();
    this.dataProcess.AutoridadInvolucrada = event.target.value;
    this.dataProcess['AutoridadInvolucrada'] = event.target.value;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', event.target.value);
    
  }

  setAutoridadInvolucrada(autoridad) {
    this.dataProcess.AutoridadInvolucrada = autoridad;
    this.dataProcess['AutoridadInvolucrada'] = autoridad;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', autoridad);
    this.AutoridadInvolucrada = autoridad;
    
  }

  private getOwnerRelationshipCode(): string {
    const gender = (this.inicialGenero || this.elGenero || localStorage.getItem('inicialGenero') || localStorage.getItem('elGenero') || '').toString().toUpperCase();
    return gender === 'F' || gender.includes('FEMENINO') ? 'A002' : 'A001';
  }

  guardarFormulario(){
    if (!this.canSubmit()) {
      return;
    }

    //console.log('Predeterminados');
    this.isLoading = true;

    this.elParentesco = this.getOwnerRelationshipCode();
    this.validaNulos = [];
    this.AjustadorFiltro = [];
    this.storageArrayFilter = [];
    this.storageArrayIndexs = [];
    this.storageArrayStrings = [];

    this.elUsuario = this.api.currentUser;
    this.firmaPrecargadaInspector = imagePrefix+this.elUsuario.Firma;
    this.idAjustador = this.elUsuario.ProveedorAgenteId;
    this.ajustadorNombre = this.elUsuario.NombreAgente;

    //let reqData = document.getElementsByClassName('required-data');

    //alert('Esta cobertura '+this.elGenero)

      this.updateValidationState();

      if (this.invalidCoverage) {
        this.validaNulos.push(0);
      }else{
        this.validaNulos.splice(0, 1);
      }

      if (this.invalidDriverName) {
        this.validaNulos.push(1);
      }else{
        this.validaNulos.splice(1, 1);
      }

      if (this.invalidGender) {
        this.validaNulos.push(2);
      }else{
        this.validaNulos.splice(2, 1);
      }

      if (this.invalidAuthority) {
        this.validaNulos.push(3);
      }

      if (this.cliente.PorqueNoUsoServicioAsistencia == undefined || this.cliente.PorqueNoUsoServicioAsistencia == '') {
        this.cliente.PorqueNoUsoServicioAsistencia = 'PREFERENCIA DEL AFILIADO';
      }

      const expedienteActual = this.cliente && this.cliente.length > 0 ? this.cliente[0] : {};
      const fechaSiniestro = resolveClaimDate(expedienteActual);
      const fechaSiniestroBpm = (fechaSiniestro || '').split('T')[0];
      const coordenadasSiniestro = resolveClaimCoordinates(expedienteActual, this.idAtencion);
      const polizaSiniestro = normalizePolicyNumber(expedienteActual?.PolizaExterna);
      const chasisSiniestro = normalizeChassis(expedienteActual?.Chasis);
      const ownerRelationshipCode = this.getOwnerRelationshipCode();

    setTimeout(() => {
      let losNulos = this.validaNulos.length;
      //alert(this.validaNulos.length)
      console.dir(this.datos)
      console.log(this.nombreConductor)

      if (losNulos > 0) {
        this.isLoading = false;
        this.openAccordionData();
      }else{
        this.toaster.dismissToast();
        this.markBulkAttemptStarted();

        this.datos = {
          RefAtencionId: this.idAtencion,
          RefProveedorAgenteId: 0,
          RefProveedorAgenteAbogadoId: 0,
          AgendarAudiencia: 0,
          AseguradoUsoPoliza: 0,
          TerceroResponsable: 0,
          LesionadosSinAudiencia: 0,
          DescripcionAudiencia: "NULL",
          Poliza: polizaSiniestro,
          Identificacion: this.identidadAsegurado,
          Nombre: this.cliente[0].Cliente,
          ConductorAfiliado: 1,
          ConductorDetenido: 0,
          Descripcion: "NULL",
          MarcaVehiculo: this.cliente[0].Marca,
          ModeloVehiculo: this.cliente[0].Modelo,
          AnioVehiculo: this.cliente[0].Year,
          PlacaVehiculo: this.cliente[0].NumeroPlaca,
          ChasisVehiculo: chasisSiniestro,
          ColorVehiculo: this.cliente[0].Color,
          VehiculoDetenido: 0,
          DescripcionVehiculo: "NULL",
          TercerosHeridos: 0,
          TercerosMuertos: 0,
          DescripcionTercerosHeridos: "NULL",
          DescripcionTercerosMuertos: "NULL",
          DanioFrontal: 0,
          DanioTrasero: 0,
          DanioLateralDerecho: 0,
          DanioLataralIzquierdo: 0,
          VehiculoVolcado: 0,
          DescripcionDanio: "NULL",
          RefPaisId: 3,
          RefCiudadId: 7,
          RefDeptoId: 1,
          RefMunicipioId: 1,
          FechaHora: fechaSiniestro,
          Lugar: this.cliente[0].Direccion,
          RefUsuarioId: this.idAjustador,
          TallerMecanicoId: 0,
          Blindado: "NULL",
          ObservacionTaller: "NULL",
          ReclamoAsegurado: "NULL",
          Observaciones: "NULL",
          Latitud: coordenadasSiniestro.Latitud,
          Longitud: coordenadasSiniestro.Longitud,
          NombreConductor: this.nombreConductor,
          IdentidaConductor: this.identidadAsegurado,
          DPI_Pasaporte:this.identidadAsegurado,
          TelefonoConductor: this.cliente[0].TelefonoOrigen,
          CelularConductor: this.cliente[0].TelefonoOrigen,
          Edad: 0,
          Licencia: "NULL",
          TipoLicencia: "NULL",
          Vigencia: "NULL",
          DireccionConductor: "NULL",
          Sexo: this.elGenero,
          RefTipoConductorId: 1,
          DireccionEnvioCorrespondencia: "NULL",
          CorreoElectronico: "NULL",
          RefTipoLicenciaId: 0,
          NombreAtribuyeAccidente: "NULL",
          AutoridadInvolucrada: this.AutoridadInvolucrada,
          UbicacionVehiculoDetenido: "NULL",
          PruebaAlcoholemia: 0,
          RefTipoCombustibleId: 0,
          AC: 0,
          Rines: "NULL",
          BolsaAire: 0,
          CierreCentralizado: 0,
          Mecanico: 0,
          RetrovisorElectronico: 0,
          Overfenders: 0,
          ColaPato: 0,
          CintaDecorativa: 0,
          LicenciaEstado: 0,
          ObservacionesFinales: "NULL",
          RefTipoSolicitanteInformeAjusteId: 0,
          TipoAcuerdoFicohsa: this.datos.TipoAcuerdoFicohsa,
          DondeSeEncuentraVehiculo: "NULL",
          NumeroUnidad: "NULL",
          Parentesco: ownerRelationshipCode,
          FechaNacimientoConductor: "NULL",
          CulpableCompromisoPago: 0,
          ObservacionCompromisoPago: "NULL",
          PorqueNoUsoServicioAsistencia: this.cliente.PorqueNoUsoServicioAsistencia,
          Kilometraje: 0,
          OtrosTalleres: "NULL"
        }

        console.log('Los datos de envío sin póliza')
        console.dir(this.datos)

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        
        this.api.GuardarSiniestroHN_Sin_Poliza(this.datos).pipe(
          finalize(async ()=>{
            console.log('El fin');
          })
         ).subscribe(
          async (res) =>{
            //console.log(res);
          this.audienciaId = res;
          this.idTablaAjustador = res.toString();
  
            // DEBUG Fecha
            let fechaSplit = fechaSiniestroBpm;
  
            this.dataBPM =  {
              Chasis: chasisSiniestro,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: polizaSiniestro, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Siempre AU01
              Cobertura: this.getCodigoCoberturaBpmSinPoliza(), // Vuelco común sin póliza
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSiniestroBpm,//fechaSplit,//this.cliente[0].FechaRegistro, OJO
              Causa: this.getCausaBpmSinPoliza(), // Vuelco común sin póliza
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: coordenadasSiniestro.Latitud,//this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
              Longitud: coordenadasSiniestro.Longitud,//this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: ownerRelationshipCode, // Formulario
              Observacion: this.idTablaAjustador // Guardar Siniestro
            }
  
            let dataBPMlocal =  {
              Chasis: chasisSiniestro,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: polizaSiniestro, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Siempre AU01
              Cobertura: this.getCodigoCoberturaBpmSinPoliza(), // Vuelco común sin póliza
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSiniestroBpm,//this.elExpediente[0].FechaRegistro,
              Causa: this.getCausaBpmSinPoliza(), // Vuelco común sin póliza
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: coordenadasSiniestro.Latitud,
              Longitud: coordenadasSiniestro.Longitud,
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: ownerRelationshipCode, // Formulario
              Observacion: this.idTablaAjustador // Guardar Siniestro
            }
  
            if (this.platform.is('android')) {
              this.bpmArray = this.dataBPM;
            }else{
              this.bpmArray = dataBPMlocal;
            }
  
            setTimeout(() => {
              console.log('He aqui la data BPM sin poliza');
                      console.dir(this.bpmArray);
                      //alert(JSON.stringify(this.dataBPM))
                      this.isLoading = true;
                      this.estaCompleto = true;
                      
                      
                      this.api.GuardarBPM(this.bpmArray).pipe(finalize(async ()=>{
                        //this.isLoading = false;
                        //this.isUpdateBPM = true;
                        
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
                              //alert(this.codigoReclamoFicohsa);
                              
                              localStorage.setItem('IdTablaAjustador', this.idTablaAjustador);
                              localStorage.setItem('codigoBPMF', this.codigoBPMFicohsa);
                              localStorage.setItem('codigoReclamo', resAtencion[0].numero_reclamo);
                              
    
                              let dataBPMupdate = 
                              {
                                IdTablaAjustador: parseInt(this.idTablaAjustador),
                                CodigoReclamoFicohsa: this.codigoReclamoFicohsa.toString(),
                                CodigoBPMFicohsa: this.codigoBPMFicohsa.toString()
                              }
                              
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
                                  this.markBulkAttemptSucceeded();
                                  this.miLogRespuesta = res;
                                  console.dir(res);
                                  
                                },
                                async (res) => {
                                  this.isLoading = false;
                                  this.markBulkAttemptFailed(this.extractBulkErrorMessage(res));
                                  let errorKey = 'acsel';
                                  let elError = res?.error?.Message || res?.message || '';
  
                                  //alert('El resdultado del intento con el bpm es '+elError.toString().toLowerCase().includes(errorKey));
                                  console.log('El resdultado del intento con el bpm es '+elError.toString().toLowerCase().includes(errorKey));
                                  console.log('El resdultado indexOf del intento con el bpm es '+elError.toString().toLowerCase().indexOf(errorKey));
                                  console.dir(res);
                                  if (elError.toString().toLowerCase().includes(errorKey)) {
                                    await this.presentClaimSendFailureAlert('Este chasis no está registrado en un programa de Seguros Ficohsa. Esta atención deberá ser procesada de diferente forma. Consulta a tu administrador de operaciones para una mejor resolución.');  
                                  }else{
                                    await this.presentClaimSendFailureAlert(this.extractBulkErrorMessage(res));
                                    this.miLogRespuesta = res;
                                  }
                                }
                              )
                            }else{
                              this.isLoading = false;
                              const bpmErrorMessage = this.translateClaimServerMessage(resAtencion[0].descripcion);
                              this.markBulkAttemptFailed(bpmErrorMessage);
                              await this.presentClaimSendFailureAlert(bpmErrorMessage);  
                            }
                            
                          }else{
                            this.isLoading = false;
                            this.markBulkAttemptFailed(this.extractBulkErrorMessage(resAtencion));
                            await this.presentClaimSendFailureAlert(this.extractBulkErrorMessage(resAtencion));
                          }
                      },
                      async (res) => {
                        this.isLoading = false;
                        this.markBulkAttemptFailed(this.extractBulkErrorMessage(res));
                        await this.presentClaimSendFailureAlert(this.extractBulkErrorMessage(res));
                      }
                
                    )
                   /* */
            }, 6000);
          },
          async (error) => {
            this.isLoading = false;
            this.markBulkAttemptFailed(this.extractBulkErrorMessage(error));
            await this.presentClaimSendFailureAlert(this.extractBulkErrorMessage(error));
          }
        )
 
        this.isLoading = false;
      }

      
      // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    }, 3000);
  }

  loadGeneros(){
    this.api.ListTipoGenero().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.tipoGeneros = res;
      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
        
      }
  
    )
  }

  getElTipoGenero(event){
    console.dir(this.tipoGeneros)
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == event.target.value) {
        this.elGenero = element.Genero;
        this.invalidGender = false;
        this.elTipoGenero = element.Id;
        localStorage.setItem('datos-Sexo', element.Id);
        localStorage.setItem('elGenero', this.idAtencion.toString()+'-'+this.elGenero);
        localStorage.setItem('elGeneroId', this.idAtencion.toString()+'-'+element.Id);
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
    localStorage.setItem('inicialGenero', this.inicialGenero);
  }

  setElTipoGenero(tipo){
    this.elTipoGenero = tipo;
    //alert(this.elTipoGenero)
    localStorage.setItem('datos-Sexo', this.elTipoGenero);
    //console.log(gender)
  
    console.dir(this.tipoGeneros)
    for (let index = 0; index < this.tipoGeneros.length; index++) {
      const element = this.tipoGeneros[index];
      if (element.Id == this.elTipoGenero) {
        this.elGenero = element.Genero;
        localStorage.setItem('elGenero', this.idAtencion.toString()+'-'+this.elGenero);
        this.setAtencionActual();
      }
  
      if (index == (this.tipoGeneros.length-1)) {
        this.isLoading = false;
      }
    }
    
    this.datos['Sexo'] = tipo;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
      
      //console.log(this.inicialGenero);
    }else if (this.elTipoGenero == 2){
      this.inicialGenero = "F";
      //console.log(this.inicialGenero);
    }
    localStorage.setItem('inicialGenero', this.inicialGenero);
    
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

  openAccordionData = () => {
    this.toaster.presentToastNoButtonsRed('Falta información para el envío. Los siguientes valores son requeridos.', 'top', 'danger');
    const nativeEl = this.accordionGroup;
    nativeEl.value = this.invalidAuthority ? ['first', 'second'] : 'second';
   /*
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
    */
  };

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

    clearAllClientSignatureCache();
    this.firmaPrecargada = this.emptySignatureWhite;
    this.isSignature = false;
    this.invalidSignature = false;

  }

}
