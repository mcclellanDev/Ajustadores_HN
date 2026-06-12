import { ToastService } from 'src/app/services/toast.service';
import { ItemsData, requiredData_Less, requiredData_NOP } from './../environments/predeterminados';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import * as $ from 'jquery';
import { emptySignatureWhite, imagePrefix, errorImage, editarFirmaIcono } from '../environments/default-images';
import { AnimationController, IonAccordionGroup, Platform, ToastController } from '@ionic/angular';
import { valoresPredeterminados } from '../environments/predeterminados';
import { abogadosAudiencias } from '../interfaces/arrays';

@Component({
  selector: 'app-prepare-send',
  templateUrl: './prepare-send.page.html',
  styleUrls: ['./prepare-send.page.scss'],
})
export class PrepareSendPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  
  idAtencion: any; tipoDeCobertura: any; coberturaDisplayName:any; isLoading:boolean=false;
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
    private routeActive: ActivatedRoute, private router: Router, private toaster: ToastService, private animationCtrl: AnimationController) { 
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.sucessIcon = '../../assets/img/guardado.gif';
    if (this.firmaPrecargada) {
      console.log('Traigo una firma '+this.firmaPrecargada); 
    }


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
      if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }

      this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
  }

  ngOnInit() {
    localStorage.setItem('origin', window.location.pathname);
    this.getTiposDeCobertura();
    this.loadGeneros();
  }

  ionViewWillEnter() {
    this.firmaPrecargada = localStorage.getItem('dSignatureAsegurado');
    this.isSignature = !!this.firmaPrecargada &&
      this.firmaPrecargada !== this.emptySignatureWhite &&
      this.firmaPrecargada !== this.emptySignature;
    this.invalidSignature = this.validationAttempted && !this.isSignature;
  }

  updateValidationState() {
    const firmaActual = this.firmaPrecargada || localStorage.getItem('dSignatureAsegurado');
    this.isSignature = !!firmaActual &&
      firmaActual !== this.errorImage &&
      firmaActual !== this.emptySignatureWhite &&
      firmaActual !== this.emptySignature;
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
              Chasis: this.cliente[0].Chasis,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: this.cliente[0].PolizaExterna, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSplit,//fechaSplit,//this.cliente[0].FechaRegistro, OJO
              Causa: valoresPredeterminados[0].Causa, // Pendiente
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: this.cliente[0].LatitudCliente,//this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
              Longitud: this.cliente[0].LongitudCliente,//this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: this.elParentesco, // Formulario
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
    const laFirma = this.firmaPrecargada || localStorage.getItem('dSignatureAsegurado');
    const testFirmaError = !laFirma || laFirma === errorImage;
    const testFirmaWhite = laFirma === this.emptySignatureWhite || laFirma === this.emptySignature;
    this.invalidSignature = testFirmaError || testFirmaWhite;

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

  guardarFormulario(){
    if (!this.canSubmit()) {
      return;
    }

    //console.log('Predeterminados');
    this.isLoading = true;

    this.elParentesco = "AU01";
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
        
        this.datos = {
          RefAtencionId: this.idAtencion,
          RefProveedorAgenteId: 0,
          RefProveedorAgenteAbogadoId: 0,
          AgendarAudiencia: 0,
          AseguradoUsoPoliza: 0,
          TerceroResponsable: 0,
          LesionadosSinAudiencia: 0,
          DescripcionAudiencia: "NULL",
          Poliza: this.cliente[0].PolizaExterna,
          Identificacion: this.identidadAsegurado,
          Nombre: this.cliente[0].Cliente,
          ConductorAfiliado: 1,
          ConductorDetenido: 0,
          Descripcion: "NULL",
          MarcaVehiculo: this.cliente[0].Marca,
          ModeloVehiculo: this.cliente[0].Modelo,
          AnioVehiculo: this.cliente[0].Year,
          PlacaVehiculo: this.cliente[0].NumeroPlaca,
          ChasisVehiculo: this.cliente[0].Chasis,
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
          FechaHora: this.cliente[0].FechaRegistro,
          Lugar: this.cliente[0].Direccion,
          RefUsuarioId: this.idAjustador,
          TallerMecanicoId: 0,
          Blindado: "NULL",
          ObservacionTaller: "NULL",
          ReclamoAsegurado: "NULL",
          Observaciones: "NULL",
          Latitud: this.cliente[0].LatitudCliente,
          Longitud: this.cliente[0].LongitudCliente,
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
          Parentesco: this.elParentesco,
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
            let fechaToString = this.cliente[0].FechaRegistro;//localStorage.getItem('datos-FechaHora');//this.laFechaSiniestroInspeccion.toString();
            let fechaSplit = fechaToString.split('.')[0];
  
            this.dataBPM =  {
              Chasis: this.cliente[0].Chasis,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: this.cliente[0].PolizaExterna, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSplit,//fechaSplit,//this.cliente[0].FechaRegistro, OJO
              Causa: valoresPredeterminados[0].Causa, // Pendiente
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: this.cliente[0].LatitudCliente,//this.latitud,//"14.0985125",//localStorage.getItem('latitud'), // Formulario
              Longitud: this.cliente[0].LongitudCliente,//this.longitud,//"-87.1849219",//localStorage.getItem('longitud'), // Formulario
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: this.elParentesco, // Formulario
              Observacion: this.idTablaAjustador // Guardar Siniestro
            }
  
            let dataBPMlocal =  {
              Chasis: this.cliente[0].Chasis,
              puntoServicio: valoresPredeterminados[0].puntoServicio, // Predeterminado : 504
              Poliza: this.cliente[0].PolizaExterna, // 
              Certificado: this.cliente[0].Certificado.toString(),//parseInt(this.cliente[0].Certificado), // Pendiente
              NombreAsegurado: this.cliente[0].Cliente,
              Sucursal: valoresPredeterminados[0].Sucursal, // Predeterminado : 0001
              Producto: valoresPredeterminados[0].Producto, // Predeterminado : AU01
              Ramo: valoresPredeterminados[0].Ramo, // Predeterminado : 0002
              FechaOcurrencia: fechaSplit,//this.elExpediente[0].FechaRegistro,
              Causa: valoresPredeterminados[0].Causa, // Pendiente
              ValorReserva: '00.00', // Formulario
              UsuarioBPM: this.elUsuario.UsuarioBPM, // Login
              Latitud: "14.0985125",
              Longitud: "-87.1849219",
              NombreConductor: this.nombreConductor, // Formulario
              Genero: this.inicialGenero, // Formulario
              Parentesco: this.elParentesco, // Formulario
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
                                  this.miLogRespuesta = res;
                                  console.dir(res);
                                  
                                },
                                async (res) => {
                                  this.isLoading = false;
                                  let errorKey = 'acsel';
                                  let elError = res.error.Message;
  
                                  //alert('El resdultado del intento con el bpm es '+elError.toString().toLowerCase().includes(errorKey));
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
                   /* */
            }, 6000);
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

  }

}
