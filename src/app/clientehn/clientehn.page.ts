import { culpable, personaHn, propiedaPrivadaHn, tipoLicencia } from './../interfaces/formulario';
import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, ToastController, Platform, IonModal, ModalController } from '@ionic/angular';
import { ajustadorHn } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { Location } from "@angular/common";
import { Network, ConnectionStatus } from '@capacitor/network';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ToastService } from '../services/toast.service';
import { marcasVehiculos } from '../environments/vehicles';
import { segments } from '../environments/segments';
import { imagePrefix } from '../environments/default-images';
import { emptySignature, emptySignatureWhite } from '../environments/signatures';
import { beneficiariosTipos } from '../environments/beneficiarios';
import { responsableTipos } from '../environments/responsable';
import { Predeterminados, ItemsExpediente, requiredData, requiredDataLabels, requiredData_Less } from '../environments/predeterminados';
import { FormatosService } from '../services/formatos.service';
import { CountrydataService } from '../services/countrydata.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-clientehn',
  templateUrl: './clientehn.page.html',
  styleUrls: ['./clientehn.page.scss'],
})
export class ClientehnPage implements OnInit {
  // DECLARACION
  @ViewChild('imagen') imagen: ElementRef;
  @ViewChild('requerido') requerido: ElementRef;
  @ViewChild('modalNulos') modal: IonModal;
  @ViewChild('daModal') daModal: IonModal;
  @ViewChild('propModal') propModal: IonModal;
  @ViewChild('modalLesion') modalLesion: IonModal;
  
  

  readonly predicateCliente: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
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
  elTipoParentesco: any;  edadConductor: any;  daSegment: any = "location"; firstInterval: any; imageHeight: any; atencionId: number; licenciaTipos: any = [];
  elTipoLicenciaId: any; elTipoGenero: any;  inicialGenero: any;  fechaNacimiento:any;  mydate: any;  laLatitud: any;  laLongitud: any;  licenciaTipo: any;
  formateada: any;  formateadaVigencia:any;  conexion: ConnectionStatus;  esMarca: boolean = false;  openModal: boolean = false;  conectividad: boolean;
  isEditSig: boolean = false;  idAtencion: any;  isLoading: boolean;  isTablet: boolean;  isComplete: boolean = false;  isCompleteAcuerdo: boolean = false;
  isSignature: boolean = false;  plataforma: any;  dispositivo: any;  firmaPrecargada: any;  nombreCliente: any;  elTipoSolicitante: any;  idTablaAjustador: any;
  laFechaSiniestro: any;  formateadaSiniestro: any;  formateadaNacimiento: any;  taller: any;  tallerId: any;  tallerOtro: any = '';  tallerOtroDireccion: any = '';

  // Variables de control de interfaz
  showPersona = false; showPersonaLesion = false;  menu = [false, false, false, false, false, false, false, false, false, false];
  guardar = true;  editar = false;  indexPersona: number;  showPropiedad = false;  indexPropiedad: number; ancho = window.innerWidth;  laLocalidad: any;  miLocalidad: any;
  miPais: any;  miPaisNombre: any;  miPaisLocalidad: any;  miPaisLocalidadSub: any;  miPaisBandera: any;  paisId: number;  datoIndex: number = 0;  paisIdentidad: any;
  nombreDelConductor: any;  generoConductor: any;  audienciaId: any;  tipoVehiculo: any;  tipoDeVehiculo: any;  vigencia: boolean; identidadAsegurado:any;clientCompleteArray:any=[]
  moneda: any;  expediente: any;  miMoneda: string; isFormSaved:boolean=false; indexUpdate:number; isVence:boolean=false; uPoli:any; datosAtencion:any=[];
  edad: number; esCacheCliente:boolean=false;  nombreAtribuye: string; esMenor:boolean=false; elTipoDeConductor:any; elTipoDeParentesco:any;
  elTipoDeLicencia: any;  daType: any;  conductorEsAfiliado: boolean;
  nombreConductor: any;  daTipoConductor: any;  daNombreConductor: any;  daIdentidadConductor: any;  identidad: string; daTelefonoFijoConductor:number;
  tel: any;  daCelularConductor: any;  cel: any;  horaSiniestro: any;  TelefonoFijoConductor: string;  CelularConductor: string;
  elResponsableTipo: number;

  // INICIALIZACION
  constructor(private router: Router,    private route: ActivatedRoute,    private loading: LoadingController,    private alert: AlertController,
    private api: ApiService,    private toast: ToastController,    private location: Location,    private platform: Platform,    private so: ScreenOrientation,
    private geo: NativeGeocoder,    private toaster: ToastService,    private formateador:FormatosService, private countryService:CountrydataService) {
    this.elExpediente = JSON.parse(localStorage.getItem('elExpediente'));
    this.identidadAsegurado = localStorage.getItem('identidadAsegurado');
    this.cliente = JSON.parse(localStorage.getItem('elExpediente'));
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    if (this.firmaPrecargada) {
      console.log('Traigo una firma '+this.firmaPrecargada); 
    }
    
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
    
    let tipoConductor  = localStorage.getItem('dataProcess-RefTipoConductorId');
    
    this.daTipoConductor = parseInt(localStorage.getItem('dataProcess-RefTipoConductorId')) 
    this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
    this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
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
    this.elResponsableTipo = parseInt(localStorage.getItem('dataProcess-TerceroResponsable'));
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

    
    
    

    for (let index = 0; index < localStorage.length; index++) {
      const element = localStorage[index];
      if (localStorage.key(index).indexOf('testigos-') == 0) {
        this.testigos.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }
      if (localStorage.key(index).indexOf('acompaniante-') == 0) {
        this.acompaniante.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }
      if (localStorage.key(index).indexOf('lesionados-') == 0) {
        this.lesionados.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }


      if (localStorage.key(index).indexOf('propiedadesprivadas-') == 0) {
        this.propiedadesprivadas.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }

      

      
    }

    this.firstInterval = setInterval(() => {
      this.setFirstSegment();
    }, 2000);

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let navParams = this.router.getCurrentNavigation().extras.state;
        this.laLatitud = navParams.data[1].latitud;
        this.laLongitud = navParams.data[2].longitud;
        this.cliente.Latitud = this.elExpediente.LatitudCliente;
        this.cliente.Longitud = this.elExpediente.LongitudCliente;

        if (this.elExpediente) {
          localStorage.setItem('dataProcess-Latitud', this.cliente.Latitud);
          localStorage.setItem('dataProcess-Longitud', this.cliente.Longitud);
          localStorage.setItem('dataProcess-Nombre', this.elExpediente.Cliente);

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

            if (tipoConductor) {
              this.seTipoConductor(tipoConductor);
            }else{
              this.conductorEsAfiliado = true;
              this.elExpediente.ConducidoPor = 1;
            }
  
            if (parentesco) {
              this.setElTipoParentesco(parentesco);
            }
  
            if(licenciaTipo){
              this.seTipoLicencia(licenciaTipo);
            }

            if (fechaVigencia) {
              console.log('Hay una fecha: '+fechaVigencia)
              this.setVencimiento(fechaVigencia);
              this.isVence = true;
            }else{
              this.isVence = false;
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
              this.nombreAtribuye = nombreAtribuyeAccidente;
              console.log('Ajui juiiiiii....'+this.elExpediente.NombreAtribuyeAccidente)
              this.setNombreAtribuye(nombreAtribuyeAccidente);
            }

          }, 3000);

          console.log('Este es el conductor que enconré : '+this.nombreConductor)
          if (this.nombreConductor) {
            localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
            this.elExpediente.NombreConductor = this.nombreConductor;

            setTimeout(() => {
              console.log('Ahora seteo el nombre del conductor')
              this.setNombreConductor(this.nombreConductor);  
            }, 3000);
            
          }else{
            localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
            this.elExpediente.NombreConductor = this.elExpediente.Cliente;
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
          }
          
          if (fechaN) {
            this.formateadaNacimiento = fechaN;
            this.setFechaNacimiento(fechaN)
          }else{
            if (this.elExpediente.FechaNacimientoConductor != null) {
              //this.dataProcess.Edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
              //this.edad = this.calcularEdad(this.elExpediente.FechaNacimientoConductor);
              this.formateadaNacimiento = (this.elExpediente.FechaNacimientoConductor).toString().split('T')[0]; 
            }else{
              this.formateadaNacimiento = new Date().toISOString().split('T')[0];
            }
          }

          if (licencia) {
            this.elExpediente.LicenciaNo = licencia;
          }

          
          
          
          if (autoridad) {
            this.elExpediente.AutoridadInvolucrada = autoridad;
          }

          if (ubicacion) {
            this.elExpediente.UbicacionVehiculoAsegurado = ubicacion;
          }

          if (ubicacionVehiculoDet) {
            this.elExpediente.UbicacionVehiculoDetenido = ubicacionVehiculoDet;
          }

          if (descripcionTercerosHeridos) {
            this.elExpediente.DescripcionTercerosHeridos = descripcionTercerosHeridos;
          } 
          if (descripcionTercerosMuertos) {
            this.elExpediente.DescripcionTercerosMuertos = descripcionTercerosMuertos;
          } 
          if (descripcionDanio) {
            this.elExpediente.DescripcionDanioVehiculo = descripcionDanio;
          } 
          if (descripcion) {
            this.elExpediente.DescripcionAccidente = descripcion;
          } 
          if (descripcionAudiencia) {
            this.elExpediente.DescripcionAudiencia = descripcionAudiencia;
          } 

          if (direccionC) {
            this.elExpediente.DireccionConductor = direccionC;
          }
          
        }
        

        let fechaExpediente = this.elExpediente.FechaRegistro;
        
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

        this.dataProcess['RefAtencionId'] = this.elExpediente.Id;
        this.dataProcess['RefProveedorAgenteId'] = this.elExpediente.RefGestorId;
        this.dataProcess['RefProveedorAgenteAbogadoId'] = this.elExpediente.RefProveedorAgenteAbogadoId;
        this.dataProcess['Poliza'] = this.elExpediente.PolizaExterna;
        this.dataProcess['IdentidaConductor'] = this.elExpediente.IdentidaConductor;
        this.dataProcess['Nombre'] = this.elExpediente.Cliente;
        this.dataProcess['MarcaVehiculo'] = this.elExpediente.Marca;
        this.dataProcess['ModeloVehiculo'] = this.elExpediente.Modelo;
        this.dataProcess['AnioVehiculo'] = this.elExpediente.Year;
        this.dataProcess['PlacaVehiculo'] = this.elExpediente.NumeroPlaca;
        this.dataProcess['ChasisVehiculo'] = this.elExpediente.Chasis;
        this.dataProcess['ColorVehiculo'] = this.elExpediente.Color;
        this.dataProcess['DescripcionVehiculo'] = "Vehículo marca " + this.elExpediente.Marca + ", modelo " + this.elExpediente.Modelo + ", año " + this.elExpediente.Year + ", color " + this.elExpediente.Color + ", placa " + this.elExpediente.NumeroPlaca;
        this.dataProcess['FechaHora'] = this.elExpediente.FechaRegistro;
        this.dataProcess['Lugar'] = this.elExpediente.Direccion;
        this.dataProcess['RefUsuarioId'] = this.elExpediente.RefGestorId;
        this.dataProcess['RefPaisId'] = this.elExpediente.IdPais;
        this.dataProcess['RefCiudadId'] = this.elExpediente.IdCiudad;
        this.dataProcess['RefDeptoId'] = this.elExpediente.RefDepartamentoId;
        this.dataProcess['Motor'] = this.elExpediente.Motor;

        localStorage.setItem('dataProcess-MarcaVehiculo', this.elExpediente.Marca);
        localStorage.setItem('dataProcess-ModeloVehiculo', this.elExpediente.Modelo);
        localStorage.setItem('dataProcess-AnioVehiculo', this.elExpediente.Year);
        localStorage.setItem('dataProcess-PlacaVehiculo', this.elExpediente.NumeroPlaca);
        localStorage.setItem('dataProcess-ChasisVehiculo', this.elExpediente.Chasis);
        localStorage.setItem('dataProcess-ColorVehiculo', this.elExpediente.Color);
        localStorage.setItem('dataProcess-Motor', this.elExpediente.Motor);
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
      this.menu = this.menu.reduce((x) => { return [...x, false] }, []);
    }
    this.menu[i] = !this.menu[i];
  }

  hasNonDigit(str) {
    return /\D/g.test(str.toString());
  }

  ngOnInit() {
    
    
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

          //alert(this.moneda)
          if (this.moneda == null) {
            this.miMoneda = "Lempiras";
          }else{
            this.miMoneda = this.moneda.Moneda;
          }
          
         }
      )

      console.log('asi estan los acompas')
      console.dir(this.acompaniante)
    }



    this.platform.ready().then(() => {
      let elementWidth = document.getElementById('segmentsContent').clientWidth;
      if (this.platform.is('android')) {
        this.deviceWidth = this.platform.width() - 400;
        //this.screenlock.lockToLandscape();
        this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
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
  }


  


  // PROCESO
  goBack(){
    this.toaster.presentToastHome('Salir del forumulario? Los datos aun quedan en caché', 'middle', 'cliente');
  }

  goMap(){
    //alert('Jir Ai Gooooo!')
    
    this.router.navigate(['./mapa']);
  }

  limpiarCache() {
    //localStorage.removeItem('dSignatureAsegurado');
    //localStorage.removeItem('firmasAsegurados');
    //localStorage.removeItem('miLocalidad');
    //localStorage.removeItem('coordinates');
    //localStorage.removeItem('codigoPais');
    //localStorage.removeItem('nombrePais');
    //localStorage.removeItem('esCompleto');
    window.location.reload();
  }

  saveFirma() {
    //console.log(this.sig.toDataURL("image/jpeg"));
  }
  print(item) {
    //console.log(item);
  }
  addPersona() {
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
      this.modalLesion.onDidDismiss().then((data) => {
        this.showPersonaLesion = false;
        console.log(data+', Hey');
      });
    }else{
      this.showPersona = true;
      this.daModal.onDidDismiss().then((data) => {
        this.showPersona = false;
      });
    }
    //this.showPersonaLesion = true;
  }
  updatePersona() {
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
      this.modalLesion.onDidDismiss().then((data) => {
        this.showPersonaLesion = false;
        console.log(data+', Hey');
      });
    }else{
      this.showPersona = false;
      //alert('Ya estoy acá')
      //this.showPersona = true;
      this.daModal.onDidDismiss().then((data) => {
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

  insertarLesion(event){
    console.log(event.detail.value)
    localStorage.setItem('lesion-'+this.idAtencion, event.detail.value);
  }

  getElTipoParentesco(event) {
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

  setElTipoParentesco(parent) {
    this.elTipoParentesco = parent;
    localStorage.setItem('dataProcess-Parentesco', parent);
    localStorage.setItem('datos-Parentesco', parent);
  }

  tercerosHeridos(event) {
    this.esTercerosHeridos = event.target.value;
    this.dataProcess['TercerosHeridos'] = event.target.value;
    localStorage.setItem('dataProcess-TercerosHeridos', event.target.value);
  }

  seTercerosHeridos(terceros) {
    this.esTercerosHeridos = terceros;
    this.dataProcess['TercerosHeridos'] = terceros;
    localStorage.setItem('dataProcess-TercerosHeridos', terceros);
  }

  tercerosMuertos(event) {
    this.esTercerosMuertos = parseInt(event.target.value);
    this.dataProcess['TercerosMuertos'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-TercerosMuertos', event.target.value);
  }

  

  seTercerosMuertos(terceros) {
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

        this.modalLesion.onDidDismiss().then((data) => {
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

        this.daModal.onDidDismiss().then((data) => {
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
    this.propModal.onDidDismiss().then((data) => {
      this.showPropiedad = false;
      console.log(data+', Hey')
    });
    
  }

  addPropiedad() {
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
    this.indexPersona = i;
    this.editar = true;
    this.guardar = false;
    this.showPropiedad = true;
  }
  updatePropiedad() {
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
    this.router.navigate(['./fotoshn'])
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
    this.router.navigate(['./fotoshn']);
  }

  async presentToast(message, position, clase) {
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

  async presentToastErrorConexion(message, position, clase) {
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

  seleccionarMarca(idMarca) {
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

  seleccionarModelo(idModelo) {
    this.elExpediente.Modelo = idModelo.target.value;
    //console.log(this.elExpediente.Modelo)
  }

  seleccionarMarcaCulpable(idMarca) {
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

  seleccionarModeloCulpable(idModelo) {
    this.culpable.ModeloCulpable = idModelo.target.value;
    //console.log(this.culpable.ModeloCulpable)
  }

  //OJO DEBUG
  testThis() {
    //alert('testing')
  }

  seleccionarTipoConductor(tipoCId) {
    this.daType = tipoCId.target.value;

    //this.entraResponsable()
    //alert(this.daType+1)
    this.elExpediente.ConducidoPor = parseInt(tipoCId.target.value);
    this.dataProcess.RefTipoConductorId = parseInt(tipoCId.target.value);
    this.dataProcess['RefTipoConductorId'] = parseInt(tipoCId.target.value);
    localStorage.setItem('dataProcess-RefTipoConductorId', tipoCId.target.value);

    for (let index = 0; index < this.tipoConductor.length; index++) {
      const element = this.tipoConductor[index];
      console.log('Tipo de conductor '+tipoCId.target.value+', tipo '+element.TipoConductor);
      console.dir(element)

      if (this.daType == element.Id) {
        this.elTipoDeConductor = element.TipoConductor;
      }

    }

    if (tipoCId.target.value == 1) {
      this.conductorEsAfiliado = true;
      //alert(this.elExpediente.Cliente)
      this.elExpediente.NombreConductor = this.elExpediente.Cliente;
      localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.NombreConductor);
      localStorage.setItem('datos-NombreConductor', this.elExpediente.NombreConductor);
      localStorage.setItem('NombreConductor', this.elExpediente.NombreConductor);
      localStorage.setItem('nombreConductor', this.elExpediente.NombreConductor);

      this.nombreCliente = this.elExpediente.Cliente;
      this.cliente.IdentidadConductor = this.identidadAsegurado;
      //this.elExpediente.DireccionConductor = this.elExpediente.Direccion;
      this.elExpediente.TelefonoFijoConductor = this.cliente.TelefonFijo;
      this.elExpediente.CelularConductor = this.cliente.Celular;
      this.nombreCliente = this.elExpediente.Cliente;
      this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
      this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
      this.dataProcess.ConductorAfiliado = 1;
      this.dataProcess['ConductorAfiliado'] = 1;
      //alert('EL conductor es el asegurado '+this.elExpediente.Cliente)
    } else {
      this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      if (this.nombreConductor) {
        if (this.nombreConductor == this.elExpediente.Cliente) {
          this.conductorEsAfiliado = false;
          this.daNombreConductor = '';
          this.daIdentidadConductor = '';
          this.daTelefonoFijoConductor = null;
          this.daCelularConductor = null;
          localStorage.setItem('dataProcess-NombreConductor', '');
          localStorage.setItem('datos-NombreConductor', '');
          localStorage.setItem('NombreConductor', '');
          localStorage.setItem('nombreConductor', '');
        }
        //alert('Tengo este conductor en caché '+this.nombreConductor+', y '+this.elExpediente.Cliente);
      }else{
        //alert('Aun no se ha ingresado un conductor');
      }
      /*
      
      //this.elExpediente.Cliente = this.cliente.Cliente;
      //this.elExpediente.NombreConductor = '';
      this.daNombreConductor = '';
      this.daIdentidadConductor = '';
      this.nombreConductor = '';
      this.cliente.IdentidadConductor = '';
      //this.elExpediente.DireccionConductor = '';
      this.elExpediente.TelefonoFijoConductor = '';
      this.elExpediente.CelularConductor = '';
      this.nombreCliente = '';
      this.dataProcess.ConductorAfiliado = 1;
      this.dataProcess['ConductorAfiliado'] = 1;
      */
    }
  }

  seTipoConductor(tipoC) {
    //alert('Proceso de Caché')
    //alert(parseInt(tipoC)+1);
    //alert(parseInt(tipoC)+1+', '+parseInt(tipoC));

    this.elExpediente.ConducidoPor = parseInt(tipoC);
    this.dataProcess.RefTipoConductorId = parseInt(tipoC);
    this.dataProcess['RefTipoConductorId'] = parseInt(tipoC);
    localStorage.setItem('dataProcess-RefTipoConductorId', tipoC);
    //$("input[type='select'][value="+this.elExpediente.ConducidoPor+"]").attr("selected",'true').trigger("change");

    if (parseInt(tipoC) == 1) {
      //alert('Si soy')
      //alert(this.elExpediente.Cliente)
      this.conductorEsAfiliado = true;
      this.elExpediente.NombreConductor = this.elExpediente.Cliente;
      this.nombreCliente = this.elExpediente.Cliente;
      this.nombreConductor = this.elExpediente.Cliente;
      this.cliente.IdentidadConductor = this.identidadAsegurado;
      //this.elExpediente.DireccionConductor = this.elExpediente.Direccion;
      //alert(this.cliente.TelefonFijo)
      this.elExpediente.TelefonoFijoConductor = this.cliente.TelefonFijo;
      this.elExpediente.CelularConductor = this.cliente.Celular;
      this.nombreCliente = this.elExpediente.Cliente;
      this.dataProcess.CelularConductor = this.cliente.TelefonoOrigen;
      this.dataProcess['CelularConductor'] = this.cliente.TelefonoOrigen;
      this.dataProcess.ConductorAfiliado = 1;
      this.dataProcess['ConductorAfiliado'] = 1;
      //alert('EL conductor es el asegurado '+this.elExpediente.Cliente)
    } else {
      this.conductorEsAfiliado = false;
      //alert('Si no soy')
      //this.elExpediente.Cliente = this.cliente.Cliente;
      this.elExpediente.NombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      this.daNombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      this.cliente.IdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
      this.daIdentidadConductor = localStorage.getItem('dataProcess-IdentidaConductor');
      //this.elExpediente.DireccionConductor = localStorage.getItem('dataProcess-DireccionConductor');
      this.elExpediente.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
      this.elExpediente.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
      this.nombreCliente = localStorage.getItem('dataProcess-NombreConductor');
      this.dataProcess.ConductorAfiliado = 1;
      this.dataProcess['ConductorAfiliado'] = 1;

      /*
      this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
      console.log('Este es el conductor que enconré : '+this.nombreConductor)
          if (this.nombreConductor) {
            localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
            localStorage.setItem('nombreConductor', this.nombreConductor);
            this.elExpediente.NombreConductor = this.nombreConductor;

            setTimeout(() => {
              console.log('Ahora seteo el nombre del conductor')
              this.setNombreConductor(this.nombreConductor);  
            }, 3000);
            
          }else{
            localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
            localStorage.setItem('nombreConductor', this.elExpediente.Cliente);
            this.elExpediente.NombreConductor = this.elExpediente.Cliente;
          }
          */
    }
  }

  setNombreConductor(nombre) {
    //alert('setNombreConductor')
    this.elExpediente.NombreConductor = nombre;
    this.dataProcess.NombreConductor = nombre;
    this.dataProcess['NombreConductor'] = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('nombreConductor', this.elExpediente.NombreConductor);
    localStorage.setItem('dataProcess-NombreConductor', nombre);
  }
  
  entraNombreConductor(event) {
    //alert('entraNombreConductor')
    //alert(this.daType)
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
    //this.elExpediente.NombreConductor = event.target.value;
    //this.dataProcess.NombreConductor = event.target.value;
    
    /*
    this.dataProcess['NombreConductor'] = event.target.value;
    this.nombreCliente = event.target.value;
    localStorage.setItem('nombreConductor', this.elExpediente.NombreConductor);
    localStorage.setItem('dataProcess-NombreConductor', event.target.value);
    */
  }

  

  descripcionDanio(event) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = event.target.value;
    this.dataProcess['DescripcionDanio'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionDanio', event.target.value);
  }

  setDescripcionDanio(descripcion) {
    //console.log(event.target.value)
    this.dataProcess.DescripcionDanio = descripcion;
    this.dataProcess['DescripcionDanio'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionDanio', descripcion);
  }

  

  descripcionAccidente(event) {
    //console.log(event.target.value)
    localStorage.setItem('dataProcess-Descripcion', event.target.value);
  }

  setDescripcionAccidente(descripcion) {
    //console.log(event.target.value)
    localStorage.setItem('dataProcess-Descripcion', descripcion);
  }

  dTercerosHeridos(event) {
    this.dataProcess.DescripcionTercerosHeridos = event.target.value;
    this.dataProcess['DescripcionTercerosHeridos'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionTercerosHeridos', event.target.value);
  }

  dTercerosMuertos(event) {
    this.dataProcess.DescripcionTercerosMuertos = event.target.value;
    this.dataProcess['DescripcionTercerosMuertos'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionTercerosMuertos', event.target.value);
  }


  setTercerosHeridos(option) {
    this.dataProcess.TercerosHeridos = option;
    this.dataProcess['TercerosHeridos'] = option;
    localStorage.setItem('dataProcess-TercerosHeridos', option);
  }

  setTercerosMuertos(option) {
    this.dataProcess.TercerosMuertos = option;
    this.dataProcess['TercerosMuertos'] = option;
    localStorage.setItem('dataProcess-TercerosMuertos', option);
  }


  entrarAnio(event) {
    this.elExpediente.Year = event.target.value;
  }

  entrarMotor(event) {
    this.elExpediente.Motor = event.target.value;
  }

  entrarChasis(event) {
    this.elExpediente.Chasis = event.target.value;
  }

  entrarPlaca(event) {
    this.elExpediente.NumeroPlaca = event.target.value;
  }

  entrarUnidad(event) {
    this.elExpediente.NoUnidad = event.target.value;
    this.dataProcess.NumeroUnidad = event.target.value;
    this.dataProcess['NumeroUnidad'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-NumeroUnidad', event.target.value);
  }

  setUnidad(unidad) {
    this.elExpediente.NoUnidad = unidad;
    this.dataProcess.NumeroUnidad = unidad;
    this.dataProcess['NumeroUnidad'] = parseInt(unidad);
    localStorage.setItem('dataProcess-NumeroUnidad', unidad);
  }

  entraTipoLicencia(event) {
    let tipoLicencia = event.detail.value[0];
    console.log(tipoLicencia)
    this.elTipoDeLicencia = tipoLicencia;
    let tipo; let tipoId;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia==tipoLicencia) {
        tipoId = element.Id;
        tipo = tipoLicencia;
        console.log(tipo+', '+tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);

        //console.log(tipoLicencia)
        /*
        
        
        
       
        */
      }
      
    }
  }

  seTipoLicencia(tipoL) {
    let tipo; let tipoId;
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (element.TipoLicencia==tipoL) {
        tipo = tipoL;
        tipoId = element.Id;
        console.log(tipo+', '+tipoId);
        this.dataProcess.RefTipoLicenciaId = tipoId;
        this.dataProcess.TipoLicencia = tipo;
        this.elExpediente.TipoLicencia = tipo;
        localStorage.setItem('dataProcess-TipoLicencia', tipo);
        localStorage.setItem('dataProcess-RefTipoLicenciaId', tipoId);
      }
      
  }
}

  entraVencimiento(event) {
    let vigenciaLength = event.target.value.length;
    if (vigenciaLength < 10) {}else{
      var dateFormat = event.target.value.split('T')[0]; 
      //console.log('dateFormat '+ dateFormat)
      let dia = dateFormat.toString().substring(0,2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);

      let laFormateada = anio+'-'+mes+'-'+dia;
      localStorage.setItem('dataProcess-Vigencia', laFormateada);
      this.formateadaVigencia = laFormateada;
      this.isVence = true;
      
      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      let vigente:boolean;
      console.log(new Date(nowDate)+', '+new Date(laFormateada));
      if(new Date(nowDate) > new Date(laFormateada)){
        vigente = false;
      }else{
        vigente = true;
      }

      console.log('Licencia está vigente? ');
      console.log(this.vigencia);
      if (vigente == false) {
        this.entraLicenciaEstadoCalculado(2);
      }else{
        this.entraLicenciaEstadoCalculado(1);
      }
      console.log(this.formateadaVigencia)
      let fechaVigencia = new Date(this.formateadaVigencia).toISOString();
      console.log(fechaVigencia)
      this.dataProcess.Vigencia = fechaVigencia;
      this.dataProcess['Vigencia'] = fechaVigencia;
      console.log('Finalmente la vigencia es '+fechaVigencia)
    }
  }

  setVencimiento(fecha) {
    let vigenciaLength = fecha.length;
    if (vigenciaLength < 10) {}else{
      var dateFormat = fecha.split('T')[0]; 
      
      let dia = dateFormat.toString().substring(0,2);
      let mes = dateFormat.toString().substring(3, 5);
      let anio = dateFormat.toString().substring(6);

      let laFormateada = anio+'-'+mes+'-'+dia;
      this.formateadaVigencia = dateFormat;
      this.isVence = true;
      console.log('la Fecha : '+fecha+', dateFormat '+ dateFormat)

      let now = new Date().toISOString();
      let nowDate = now.split('T')[0];
      let vigente:boolean;
      console.log(new Date(nowDate)+', '+new Date(laFormateada));
      if(new Date(nowDate) > new Date(laFormateada)){
        vigente = false;
      }else{
        vigente = true;
      }
      if (vigente == false) {
        this.entraLicenciaEstadoCalculado(2);
      }else{
        this.entraLicenciaEstadoCalculado(1);
      }
      localStorage.setItem('dataProcess-Vigencia', fecha);
    }
    
    
  }

  entraLicenciaEstado(event){
    console.log(event.target.value)
    this.dataProcess.LicenciaEstado = event.target.value;
    this.dataProcess['LicenciaEstado'] = event.target.value;
    localStorage.setItem('dataProcess-LicenciaEstado', event.target.value);
  }

  entraLicenciaEstadoCalculado(estado){
    $('#licenciaEstado').val(estado).change();
    this.dataProcess.LicenciaEstado = estado;
    this.dataProcess['LicenciaEstado'] = estado;
    localStorage.setItem('dataProcess-LicenciaEstado', estado);
  }

  entraDescripcionAudiencia(event){
    this.dataProcess.DescripcionAudiencia = event.target.value;
    this.dataProcess['DescripcionAudiencia'] = event.target.value;
    localStorage.setItem('dataProcess-DescripcionAudiencia', event.target.value);
  }

  setDescripcionAudiencia(descripcion){
    this.dataProcess.DescripcionAudiencia = descripcion;
    this.dataProcess['DescripcionAudiencia'] = descripcion;
    localStorage.setItem('dataProcess-DescripcionAudiencia', descripcion);
  }

  entraObservacionTaller(event) {
    this.dataProcess.ObservacionTaller = event.target.value;
    this.dataProcess['ObservacionTaller'] = parseInt(event.target.value);
  }

  entraUbicacionVehiculoDetenido(event) {
    this.dataProcess.UbicacionVehiculoDetenido = event.target.value;
    this.dataProcess['UbicacionVehiculoDetenido'] = event.target.value;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', event.target.value);
  }

  setUbicacionVehiculoDetenido(ubicacion) {
    this.dataProcess.UbicacionVehiculoDetenido = ubicacion;
    this.dataProcess['UbicacionVehiculoDetenido'] = ubicacion;
    localStorage.setItem('dataProcess-UbicacionVehiculoDetenido', ubicacion);
  }

  entraResponsable(event){
    let seleccion = event.detail.value;
    //alert('Tipo responsable : '+seleccion+', Tipo conductor : '+this.daType+', Nombre conductor no afiliado : '+this.daNombreConductor)



    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = '';
      //this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    }else{
      //alert(this.daNombreConductor)
      this.dataProcess.TerceroResponsable = 2;
      this.dataProcess['TerceroResponsable'] = parseInt(event.target.value);
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        //alert(this.daType)
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.elExpediente.Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.elExpediente.Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.Cliente);

        }else{
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);            
        }
        
        
      }else{
        this.dataProcess.NombreAtribuyeAccidente = this.elExpediente.Cliente;
        this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.elExpediente.Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.Cliente);
      }
    }
  }

  setResponsable(selecId){
    let seleccion = selecId;

    if (seleccion == '3') {
      this.dataProcess.TerceroResponsable = 3;
      localStorage.setItem('dataProcess-TerceroResponsable', '3');
      this.elExpediente.NombreAtribuyeAccidente = localStorage.getItem('dataProcess-NombreAtribuyeAccidente');
    }else{
      this.dataProcess.TerceroResponsable = 2;
      localStorage.setItem('dataProcess-TerceroResponsable', '2');
      if (seleccion == '2') {
        
        if (this.daType == 1) {
          this.dataProcess.NombreAtribuyeAccidente = this.elExpediente.Cliente;
          this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.Cliente;
          this.dataProcess['NombreAtribuyeAccidente'] = this.elExpediente.Cliente;
          localStorage.setItem('dataProcess-TerceroResponsable', '1');
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.Cliente);

        }else{
          this.elExpediente.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess.NombreAtribuyeAccidente = this.daNombreConductor;
          this.dataProcess['NombreAtribuyeAccidente'] = this.daNombreConductor;
          localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.daNombreConductor);            
        }

        //this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.NombreConductor;
        //localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.NombreAtribuyeAccidente);
        
      }else{
        this.dataProcess.NombreAtribuyeAccidente = this.elExpediente.Cliente;
        this.dataProcess['NombreAtribuyeAccidente'] = this.elExpediente.Cliente;
        localStorage.setItem('dataProcess-TerceroResponsable', '1');
        localStorage.setItem('dataProcess-NombreAtribuyeAccidente', this.elExpediente.Cliente);
        this.elExpediente.NombreAtribuyeAccidente = this.elExpediente.Cliente;
      }
    }
  }

  entraNombreCulpable(event) {
    this.culpable.NombreCulpable = event.target.value;
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
  }

  entraNombrePropietarioCulpable(event) {
    this.culpable.NombreDireccionPropietarioCulpable = event.target.value;
  }

  entraCorreoCulpable(event) {
    this.culpableCorreo = event.target.value;
  }

  entraTrabajoCulpable(event) {
    this.culpableTrabajo = event.target.value;
  }

  entraContactoCulpable(event) {
    this.culpableContacto = event.target.value;
  }

  entraContactoMNumeroCulpable(event) {
    this.culpableContactoNumero = event.target.value;
  }

  entraIdentidadCulpable(event) {
    this.culpableIdentidad = event.target.value;
  }

  entraNombreTaller(event) {
    console.log(event)
    this.taller = event.detail.value[0];
    this.tallerId = event.detail.value[1];
    this.dataProcess.DondeSeEncuentraVehiculo = event.detail.value[1];
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value[1];
  }

  entrarFechaInicio() {}

  entraTallerOtro(event) {
    this.tallerOtroArray = [];
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    this.tallerOtro = event.target.value;
    this.tallerOtroArray.push({ nombre: event.target.value });
    //console.log(this.tallerOtro)
  }

  entraTallerOtroDireccion(event) {
    console.dir(this.tallerOtroArray)
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
    this.tallerOtroDireccion = event.target.value;
    //console.log(this.tallerOtroDireccion)
  }

  seTallerOtroDireccion(taller) {
    console.dir(this.tallerOtroArray)
    this.dataProcess.DondeSeEncuentraVehiculo = this.tallerOtroArray[0].nombre + ', ' + taller;
    this.dataProcess['DondeSeEncuentraVehiculo'] = taller;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', taller);
    this.tallerOtroDireccion = taller;
    //console.log(this.tallerOtroDireccion)
  }

  entraUbicacionVehiculoAsegurado(event) {
    this.dataProcess.DondeSeEncuentraVehiculo = event.target.value;
    this.dataProcess['DondeSeEncuentraVehiculo'] = event.target.value;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', event.target.value);
  }

  setUbicacionVehiculoAsegurado(ubicacion) {
    this.dataProcess.DondeSeEncuentraVehiculo = ubicacion;
    this.dataProcess['DondeSeEncuentraVehiculo'] = ubicacion;
    localStorage.setItem('dataProcess-DondeSeEncuentraVehiculo', ubicacion);
  }


  evaluateKm(event) {
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


  marcarFecha(mydate) {
    var dateFormat = mydate.split('T')[0];
    var timeFormat = mydate.split('T')[1];
    this.mydate = mydate;
    this.formateada = dateFormat + ' - ' + timeFormat;
    localStorage.setItem('fechaFirma', this.mydate);
  }

  async getCountry() {
    this.laLocalidad = JSON.parse(localStorage.getItem('miLocalidad'));
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
    localStorage.setItem('longitud', this.laLocalidad[0].longitud);
    this.isLoading = false;
    if (this.miPais == "HN") {
      this.miPaisBandera = '../../assets/img/flag-hn.png';
    } else if (this.miPais == "GT") {
      this.miPaisBandera = '../../assets/img/flag-gt.png';
    }
    this.isLoading = false;
  }

  getElTipoLicencia(event) {
    this.elTipoLicenciaId = event.target.value;
    console.log(this.elTipoLicenciaId)
    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id.toString()) {
        this.licenciaTipo = element.TipoLicencia;
        this.elExpediente.TipoLicencia = element.TipoLicencia;
      }

    }
  }

  getElTipoLicenciaCulpable(event) {
    this.elTipoLicenciaId = event.target.value;

    for (let index = 0; index < this.tipoLicencia.length; index++) {
      const element = this.tipoLicencia[index];
      if (this.elTipoLicenciaId.toString() == element.Id.toString()) {
        this.licenciaTipo = element.TipoLicencia;
      }

    }
  }

  getElTipoGenero(event) {
    this.elTipoGenero = event.target.value;
    if (this.elTipoGenero == 1) {
      this.inicialGenero = "M";
    } else if (this.elTipoGenero == 2) {
      this.inicialGenero = "F";
    }
  }

  definirGenero(event) {
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

  async getTipoLicencia(paisIdentidad) {
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

  async getTipoVehiculo(paisIdentidad) {
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
    this.api.ListTipoConductor().pipe(

      finalize(async () => {
        console.log('Aqui se termina la carga de tipos de conductor')
      })
    ).subscribe(
      async (res) => {
        this.tipoConductor = res;
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

    this.setSegment('segmentCoordinates', 0);

    let howManySegments = daFirstSegmentsButton.length;
    if (howManySegments > 0) {
      clearInterval(this.firstInterval);
      daFirstSegmentsButton[0].setAttribute('style', 'border:1px solid #10069f');
      daFirstSegmentsContainer[0].setAttribute('style', 'color:#10069f');
      daFirstTitleContainer[0].setAttribute('style', 'color:#10069f;margin-left: 9px');
    }
  }

  setSegment(segmentInput, indexInput) {
    //alert(segmentInput)

    //alert(this.elResponsableTipo);

    //this.entraResponsable(this.elResponsableTipo);

    if (segmentInput == 'help-circle') {
      //alert('Tipo de conductor '+this.daType+', tpo de responsable '+this.elResponsableTipo);


      if (this.daType == 1) {
        if (this.elResponsableTipo == 1 || this.elResponsableTipo == 2) {
          this.setNombreAtribuye(this.elExpediente.Cliente);
        }else{
          this.setNombreAtribuye(this.elExpediente.NombreAtribuyeAccidente);
        }
      }else{
        if (this.elResponsableTipo == 1) {
          this.setNombreAtribuye(this.elExpediente.Cliente);
        }
    
        if (this.elResponsableTipo == 2) {
          this.setNombreAtribuye(this.daNombreConductor);
        }
    
        if (this.elResponsableTipo == 3) {
          this.setNombreAtribuye(this.elExpediente.NombreAtribuyeAccidente);
        }  
      }
      
    }
    
    
    this.nombreConductor = localStorage.getItem('dataProcess-NombreConductor');
    console.log('Este es el conductor que encontré : '+this.nombreConductor);
    this.identidad = localStorage.getItem('dataProcess-IdentidaConductor');
    this.TelefonoFijoConductor = localStorage.getItem('dataProcess-TelefonoConductor');
    this.CelularConductor = localStorage.getItem('dataProcess-CelularConductor');
    //localStorage.setItem('dataProcess-IdentidaConductor', this.identidad);

    /*
    if (segmentInput == 'speedometer') {
      if (this.daTipoConductor != 1) {
        this.daNombreConductor = this.nombreConductor;
        console.log('Soy el otro conductor no el asegurado')
        this.daIdentidadConductor = this.identidad;
        this.daTelefonoFijoConductor = parseInt(this.tel);
        this.daCelularConductor = parseInt(this.cel);
      }else{
          if (this.nombreConductor) {
            localStorage.setItem('dataProcess-NombreConductor', this.nombreConductor);
            this.elExpediente.NombreConductor = this.nombreConductor;

            setTimeout(() => {
              console.log('Ahora seteo el nombre del conductor setSegment')
              this.setNombreConductor(this.nombreConductor);  
            }, 3000);
            
          }else{
            localStorage.setItem('dataProcess-NombreConductor', this.elExpediente.Cliente);
            this.elExpediente.NombreConductor = this.elExpediente.Cliente;

            setTimeout(() => {
              console.log('Ahora seteo el nombre del conductor setSegment')
              this.setNombreConductor(this.elExpediente.Cliente);  
            }, 3000);
            
          }
      }
      
    }
    */
    

    

    let daSegmentsContainer = document.getElementsByClassName('segment-icon');
    let daTitleContainer = document.getElementsByClassName('segment-title');
    let daSegmentsButton = document.getElementsByClassName('segment-item');
    this.daSegment = segmentInput;
    let daIndex = indexInput;

    
    

    for (let index = 0; index < daSegmentsContainer.length; index++) {
      const element = daSegmentsContainer[index];
      const title = daTitleContainer[index];
      const segmentId = segments[index].idSegmento;
      
      if (daIndex == index) {
        $("#"+segmentId).fadeIn('xslow');
        daSegmentsButton[index].setAttribute('style', 'border:1px solid #10069f');
        element.setAttribute('style', 'color:#10069f');
        title.setAttribute('style', 'color:#10069f;margin-left: 9px');
        
        if (this.cantidadNulos == undefined) {
          //alert('Hey vooo!??')
        }else{
          //alert(this.cantidadNulos);
          if (segmentId != 'segmentSignature') {
            $('#dataNull').fadeOut();
          }else{
            $('#dataNull').fadeIn('xslow');
            $('#segmentSignature').fadeOut();
          }
        }

      } else {
        $("#"+segmentId).fadeOut();
        daSegmentsButton[index].setAttribute('style', 'border:none');
        element.setAttribute('style', 'color:#7da1c4');
        title.setAttribute('style', 'color:#7da1c4;margin-left: 9px');
      }
    }
  }

  entraDireccionConductor(event){
    this.dataProcess['DireccionConductor'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionConductor', event.target.value);
  }


  setDireccionConductor(direccion){
    this.dataProcess['DireccionConductor'] = direccion;
    localStorage.setItem('dataProcess-DireccionConductor', direccion);
  }

  entraDireccionConductorCorrespondencia(event){
    this.dataProcess['DireccionEnvioCorrespondencia'] = event.target.value;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', event.target.value);
  }

  setDireccionConductorCorrespondencia(direccion){
    this.dataProcess['DireccionEnvioCorrespondencia'] = direccion;
    localStorage.setItem('dataProcess-DireccionEnvioCorrespondencia', direccion);
  }

  validar(){
    
  }


  randomize(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);//.toFixed(2);
  }

  // ENVIO
  GuardarDatos() {
    let comparar = this.elExpediente.NombreConductor == null;
    console.log(this.elExpediente.NombreConductor+', '+comparar);
    
    console.log('comparativo de la firma antes del envío');
              console.log((this.firmaPrecargada == emptySignature)+', '+(this.firmaPrecargada==emptySignatureWhite))
              console.log('y la firma es ')
              console.log(this.firmaPrecargada)


    this.isLoading = true;

    
    this.validaNulos = [];
    this.clienteFiltro = [];
    //console.log(this.requiredD.length)
    for (let index = 0; index < this.requiredD.length; index++) {
      const element = this.requiredD[index];
      let elnombre = element.nombre;
      let laEtiqueta = element.etiqueta;
      let laCategoria = element.categoria;
      let elValorDP;
      let elValorC;
      let evaluacion;

      //alert(this.dataProcess['IdentidaConductor'])

      //console.log(laCategoria=='cliente', laEtiqueta);
      if (laCategoria == 'cliente') {
        console.log(laEtiqueta)
        this.clienteFiltro.push(element);

        
      }

      if (index == (this.requiredD.length-1)) {
        console.dir(this.clienteFiltro)
        for (let indexDP = 0; indexDP < this.clienteFiltro.length; indexDP++) {
          const elementCLiente = this.clienteFiltro[indexDP];
          elnombre = elementCLiente.nombre;
          laEtiqueta = elementCLiente.etiqueta;
          elValorDP = this.dataProcess[elnombre];
          if (!elValorDP || elValorDP == '') {
            //this.validaNulos.push(laEtiqueta);
            elValorC = this.cliente[elnombre];
            if (!elValorC || elValorC === ''){
              //alert(elValorC)
              this.validaNulos.push(laEtiqueta);
            }
            //console.log(elnombre+', '+laEtiqueta+', '+elValorC)
          }

          if (indexDP==(this.clienteFiltro.length-1)) {
            console.dir(this.validaNulos)
            this.cantidadNulos = this.validaNulos.length;

          if (this.cantidadNulos > 0) {
            evaluacion = false;
            this.isLoading = false;
            $('#dataNull').fadeIn('xslow');
            $('#segmentSignature').fadeOut();
          }else{
            evaluacion = true;
            // iniciar el proceso de envío de datos

            localStorage.setItem('poliza', this.cliente.Poliza);
            localStorage.setItem('telFijo', this.culpable.TelefonoFijoCulpable);
            localStorage.setItem('fechaFirma', this.mydate);

            if (!this.elExpediente.FechaRegistro) {
              this.elExpediente.FechaRegistro = new Date().toISOString();
              localStorage.setItem('FechaRegistro', this.elExpediente.FechaRegistro);
            }
        
        
              if (this.dataProcess['RefProveedorAgenteAbogadoId'] == null || this.dataProcess['RefProveedorAgenteAbogadoId'] == undefined) {
                this.dataProcess['RefProveedorAgenteAbogadoId'] = Predeterminados[3].valor;
              }
              this.dataProcess['Latitud'] = this.laLatitud;
              this.dataProcess['Longitud'] = this.laLongitud;
              this.dataProcess['ReclamoAsegurado'] = this.elExpediente.DescripcionDanioVehiculo;
              this.dataProcess['RefMunicipioId'] = 0;
              this.dataProcess['NumeroUnidad'] = this.elExpediente.NoUnidad
              this.dataProcess['FechaNacimientoConductor'] = localStorage.getItem('dataProcess-FechaNacimientoConductor');
              this.dataProcess['NombreConductor'] = localStorage.getItem('dataProcess-NombreConductor');
            
        
            //    const data = JSON.parse(localStorage.getItem('dataSiniestro'));
        
            const dataAppend = {
              // Para Guatemala
              RefEntidadComunicativaId: 0,
              RefTipoAudienciaId: 0,
            }
        
            if (this.elExpediente.NombreConductor == null) {
              this.elExpediente.NombreConductor = this.elExpediente.Cliente;
            }
            localStorage.setItem('NombreFirmante', this.elExpediente.NombreConductor);
        
            // maximo 2 bienes
        
            // Pais País Código
            this.miPais = "HN";

            if (this.miPais == "HN") {
        
              if (this.elExpediente.UtilizoSerivicioAsistencia == 1) {
                this.dataProcess.PorqueNoUsoServicioAsistencia = 'N/A';
                this.dataProcess['PorqueNoUsoServicioAsistencia'] = 'N/A';
              }
        
              if (this.tallerId || this.tallerOtro) {
                if (this.tallerId) {
                  this.dataProcess.TallerMecanicoId = this.tallerId;
                  this.dataProcess['TallerMecanicoId'] = this.tallerId;
                } else if (this.tallerOtro) {
                  this.dataProcess.TallerMecanicoId = this.talleres.length + 1;
                  this.dataProcess['TallerMecanicoId'] = this.talleres.length + 1;
                } else {
                  this.dataProcess.TallerMecanicoId = 0;
                  this.dataProcess['TallerMecanicoId'] = 0;
                }
        
              }
        
              if (this.elExpediente.VehiculoDetenido == 2) {
                this.dataProcess.UbicacionVehiculoDetenido = 'N/A';
                this.dataProcess['UbicacionVehiculoDetenido'] = 'N/A';
              }
        
        
              console.log('Esta es toda la data que voy a mandar');
              console.dir(this.dataProcess)
              console.log('comparativo de la firma antes del envío');
              console.log((this.firmaPrecargada == emptySignature)+', '+(this.firmaPrecargada==emptySignatureWhite))
              

              if((this.firmaPrecargada != emptySignature) && (this.firmaPrecargada!=emptySignatureWhite)){
                this.isLoading = false;

                this.toaster.presentToastNoButtons('Registro Creado Con Exito!', 'middle', 'siniestro');

                $('#signButton').fadeOut('slow');
                $('#goSignButton').fadeOut('slow');
                $('#saveButton').fadeOut('slow');
                $('#camButton').fadeOut('slow');

                $("#successLabel").fadeIn('slow');
                $("#buttonGoAjuste").fadeIn('slow');

                if (this.daType != 1) {
                  this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
                  this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
                }

                 console.log('dataProcess is');
                 console.dir(this.dataProcess);
                //this.api.GuardarCacheCliente
                
              this.api.GuardarCacheCliente(this.dataProcess).pipe( 
                finalize(async ()=>{
                  //alert('Finalice')
                  this.isLoading = false;
                  this.isComplete = true;
                })
              ).subscribe(
                async (res) =>{
                console.log(res);
                //this.audienciaId = res;
                //this.idTablaAjustador = res.toString();


   

                $('#signButton').fadeOut('slow');
                $('#goSignButton').fadeOut('slow');
                $('#saveButton').fadeOut('slow');
                $('#camButton').fadeOut('slow');
                
                //$('#signButton').fadeOut('slow');

                $("#successLabel").fadeIn('slow');
                $("#buttonGoAjuste").fadeIn('slow');


              
                
                this.copmleteByCase.push({
                  idAtencion: this.idAtencion, esCompleto: true
                })
                localStorage.setItem('esCompleto', JSON.stringify(this.copmleteByCase));


               
                this.clientCompleteArray = JSON.parse(localStorage.getItem('clientCompleteArray'));
                if (this.clientCompleteArray) {
                  
                  if (this.clientCompleteArray.includes(this.atencionId)) {
                    //alert(this.clientCompleteArray.includes(this.atencionId))  
                  }
                }else{
                  this.clientCompleteArray = [];
                  this.clientCompleteArray.push(this.atencionId);
                localStorage.setItem('clientCompleteArray', this.clientCompleteArray);
                }



                

                }),
                async (res) => {
                  this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
                }
                /**/
              }else{
                this.toaster.presentToastNoButtonsRed('Se debe firmar para guardar los datos.', 'top', 'firma-siniestro');
              }
            }
          }
          console.log(evaluacion)
          return evaluacion;
          }
          
        }
      }

    }

  
  }

  setTipoSolicitante(event) {
    this.elTipoSolicitante = event.target.value;
    localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  }

  entraNombreAsegurado(event) {
    this.elExpediente.Cliente = event.target.value;
    this.nombreCliente = event.target.value;
    localStorage.setItem('dataProcess-Nombre', event.target.value);
  }

  setNombreAsegurado(nombre) {
    this.elExpediente.Cliente = nombre;
    this.nombreCliente = nombre;
    localStorage.setItem('dataProcess-Nombre', nombre);
  }

  entraEntidadInvolucrada(event) {
    this.dataProcess.AutoridadInvolucrada = event.target.value;
    this.dataProcess['AutoridadInvolucrada'] = event.target.value;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', event.target.value);
    
  }

  setEntidadInvolucrada(autoridad) {
    this.dataProcess.AutoridadInvolucrada = autoridad;
    this.dataProcess['AutoridadInvolucrada'] = autoridad;
    localStorage.setItem('dataProcess-AutoridadInvolucrada', autoridad);
    
  }

  

  entraTipoVehiculo(event){
    this.tipoDeVehiculo = event.target.value;
  }

  entraNombre(event) {
    this.elExpediente.Cliente = event.target.value;
  }

  entraIdentidadConductor(event) {
    if (this.daType == 1) {
      console.log('soy el asegurado');
    }else{
      console.log(this.daIdentidadConductor);
      console.log('soy el conductor');
      localStorage.setItem('dataProcess-IdentidaConductor', this.daIdentidadConductor);
      this.elExpediente.IdentidadConductor = this.daIdentidadConductor;
      this.dataProcess.IdentidaConductor = this.daIdentidadConductor;
      this.dataProcess['IdentidaConductor'] = this.daIdentidadConductor;
    }
    
    /*
    console.log('la identidad '+ event.target.value)
    this.elExpediente.IdentidadConductor = event.target.value;
    this.dataProcess['IdentidaConductor'] = event.target.value;
    */
    
  }

  setIdentidadConductor(identidad) {
    console.log('la identidad '+ identidad)
    this.elExpediente.IdentidadConductor = identidad;
    this.dataProcess.IdentidaConductor = identidad;
    this.dataProcess['IdentidaConductor'] = identidad;
    localStorage.setItem('dataProcess-IdentidaConductor', identidad);
  }

  entraPolizaConductor(event) {
    this.cliente.Poliza = event.target.value;
    localStorage.setItem('dataProcess-Poliza', event.target.value);
  }

  setPolizaConductor(poliza) {
    this.cliente.Poliza = poliza;
    localStorage.setItem('dataProcess-Poliza', poliza);
  }

  entraCorreoCorrespondencia(event) {
    this.cliente.CorreoCorrespondencia = event.target.value;
  }

  entraDireccionCliente(event) {
    this.cliente.Direccion = event.target.value;
    this.dataProcess.Lugar = event.target.value;
    this.dataProcess['Lugar'] = event.target.value;
  }

  entraNombreAtribuye(event) {
    this.dataProcess.NombreAtribuyeAccidente = event.target.value;
    this.dataProcess['NombreAtribuyeAccidente'] = event.target.value;
    this.elExpediente.NombreAtribuyeAccidente = event.target.value;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', event.target.value);
  }

  setNombreAtribuye(nombre) {
    this.dataProcess.NombreAtribuyeAccidente = nombre;
    this.dataProcess['NombreAtribuyeAccidente'] = nombre;
    this.elExpediente.NombreAtribuyeAccidente = nombre;
    localStorage.setItem('dataProcess-NombreAtribuyeAccidente', nombre);
  }

  entraTelefonoAsegurado(event) {
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

  entraTelefonoConductor(event) {
    console.log('Teléfono del conductor '+event.target.value);
    localStorage.setItem('dataProcess-TelefonoConductor', event.target.value);
    this.dataProcess.TelefonoConductor  = event.target.value;
    this.dataProcess['TelefonoConductor'] = event.target.value;
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

  seTelefonoConductor(tel) {
    this.cliente.TelefonFijo = tel;
    this.dataProcess.TelefonoConductor  = tel;
    this.dataProcess['TelefonoConductor'] = tel;
    localStorage.setItem('dataProcess-TelefonoConductor', tel);
  }

  entraCelularAsegurado(event) {
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

  entraCelularConductor(event) {
    localStorage.setItem('dataProcess-CelularConductor', event.target.value);
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

  setCelularConductor(cel) {
    this.cliente.Celular = cel;
    this.dataProcess.CelularConductor = cel;
    this.dataProcess['CelularConductor'] = cel;
    localStorage.setItem('dataProcess-CelularConductor', cel);
  }

  entraCorreoConductor(event) {
    console.log(event.target.value)
    this.cliente.CorreoElectronico = event.target.value;
    this.dataProcess.CorreoElectronico = event.target.value;
    this.dataProcess['CorreoElectronico'] = event.target.value;
    localStorage.setItem('dataProcess-CorreoElectronico', event.target.value);
  }

  setCorreoConductor(correo) {
    console.log(correo)
    this.cliente.CorreoElectronico = correo;
    this.dataProcess.CorreoElectronico = correo;
    this.dataProcess['CorreoElectronico'] = correo;
    localStorage.setItem('dataProcess-CorreoElectronico', correo);
  }

  entraDireccion(event) {
    this.cliente.DireccionSiniestro = event.target.value;
    //localStorage.setItem('dataProcess-DireccionSiniestro', event.target.value);
  }

  setDireccion(direccion) {
    this.cliente.DireccionSiniestro = direccion;
    //localStorage.setItem('dataProcess-DireccionSiniestro', direccion);
  }

  entraLicencia(event) {
    this.elExpediente.LicenciaNo = event.target.value;
    this.dataProcess.Licencia = event.target.value;
    this.dataProcess['Licencia'] = event.target.value;
    localStorage.setItem('dataProcess-Licencia', event.target.value);
  }

  setLicencia(licenciaNum) {
    this.elExpediente.LicenciaNo = licenciaNum;
    this.dataProcess.Licencia = licenciaNum;
    this.dataProcess['Licencia'] = licenciaNum;
    localStorage.setItem('dataProcess-Licencia', licenciaNum);
  }

  esBlindado(event) {
    console.dir(event)
    this.dataProcess.Blindado = parseInt(event);
    this.dataProcess['Blindado'] = parseInt(event);
    //$("input[type='radio'][value="+this.dataProcess.Blindado+"]").attr("checked",'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', event);
  }

  setBlindado(blinda) {
    this.dataProcess.Blindado = parseInt(blinda);
    this.dataProcess['Blindado'] = parseInt(blinda);
    $("input[type='radio'][value="+this.dataProcess.Blindado+"]").attr("checked",'true').trigger("change");
    localStorage.setItem('dataProcess-Blindado', blinda);
  }

  marcarFechaSiniestro(laFechaSiniestrox) {
    this.elExpediente.FechaHoraAccidente = laFechaSiniestrox;//.target.value;
    this.formateadaSiniestro = this.formateador.formatearFechaSiniestro(laFechaSiniestrox);//.target.value);
    this.formateada = this.formateador.formatearFechaSiniestro(laFechaSiniestrox);//.target.value);
    this.mydate = laFechaSiniestrox;//.target.value;
  }

  marcarFechaNacimiento(laFechaNacimiento) {
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

  setFechaNacimiento(laFecha) {
    console.log('La fecha de nacimiento '+laFecha);
    this.dataProcess['FechaNacimientoConductor'] = laFecha;
    this.elExpediente.FechaNacimientoConductor = laFecha.toString();
    localStorage.setItem('dataProcess-FechaNacimientoConductor', laFecha);
    this.fechaNacimiento = laFecha;
    this.formateadaNacimiento = this.elExpediente.FechaNacimientoConductor.split('T')[0];//his.formateador.formatearFechaNacimiento(laFecha);

    this.edad = this.calcularEdad(laFecha);
  }

  calcularEdad(fecha){
    console.log(fecha)
    let dAnio = fecha.toString().substring(0, 4);
    console.log(dAnio)
    let thisYear = new Date().getFullYear();
    let dYear = parseInt(dAnio);
    let laEdad = thisYear - dYear;
    localStorage.setItem('dataProcess-Edad', laEdad.toString());
    console.log(laEdad)
    return laEdad;
  }

  goESignature() {
    this.isEditSig = true;
    localStorage.setItem('isEditSig', this.isEditSig.toString());
    this.router.navigate(['./esignature']);
  }

  goPrepare(idAtencion){
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

  goPrepareAudience(idAtencion){
    const navigateExtras: NavigationExtras = 
    {
      state:{
        data: [
          {'forma': this.expediente},
          {'idAtencion': idAtencion}
        ]
      }
    }
    this.router.navigate(['./prepare-audience'], navigateExtras);
  }

  utilizacionAsistencia(event) {
    console.log(event.detail.value+', '+event.target.value)
    let choiceValue = event.detail.value;

    if (choiceValue == 2) {
      this.alertPrepare();
    }

    this.elExpediente.UtilizoSerivicioAsistencia = event.detail.value;
    this.cliente.UtilizoSerivicioAsistencia = event.target.value;

    this.dataProcess.AseguradoUsoPoliza = parseInt(event.target.value);
    this.dataProcess['AseguradoUsoPoliza'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AseguradoUsoPoliza', event.target.value);
  }

  setUtilizacionAsistencia(uso) {
    
    if (uso == 2) {
      this.goPrepare(this.idAtencion);
    }else{
      this.cliente.UtilizoSerivicioAsistencia = uso;
      this.elExpediente.UtilizoSerivicioAsistencia = uso;
      $('#usoRadioGroup').val(uso).change();
      //$("input[type='radio'][value="+this.cliente.UtilizoSerivicioAsistencia+"]").attr("checked",'true').trigger("change");
      
      localStorage.setItem('dataProcess-AseguradoUsoPoliza', uso);
    }
    
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

  

  pruebaAlcohol(event) {
    console.log('Alcohol '+parseInt(event.detail.value))

    this.elExpediente.PruebaAlcoholemia = parseInt(event.detail.value);
    this.dataProcess['PruebaAlcoholemia'] = parseInt(event.detail.value);
    localStorage.setItem('dataProcess-PruebaAlcoholemia', event.detail.value);
    
  }

  setPruebaAlcohol(prueba) {
    console.log('Alcohol '+parseInt(prueba))

    this.elExpediente.PruebaAlcoholemia = parseInt(prueba);
    $('#pruebaRadioGroup').val(prueba).change();
    localStorage.setItem('dataProcess-PruebaAlcoholemia', prueba);
    
  }

  

  agendoAudiencia(event){
    this.dataProcess.AgendarAudiencia = parseInt(event.detail.value);
    this.dataProcess['AgendarAudiencia'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-AgendarAudiencia', event.target.value);
  }

  audiciona(event) {
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

  setAudiencia(audiencia){
    let auId = parseInt(audiencia);
    //alert(audiencia+1)
    this.dataProcess.AgendarAudiencia = auId;
    this.dataProcess['AgendarAudiencia'] = auId;
    localStorage.setItem('dataProcess-AgendarAudiencia', audiencia);
  }

  fueDetenido(event) {
    this.elExpediente.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess.VehiculoDetenido = parseInt(event.detail.value);
    this.dataProcess['VehiculoDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoDetenido', event.target.value);
  }

  

  

  fueDetenidoElConductor(event) {
    this.dataProcess.ConductorDetenido = parseInt(event.detail.value);
    this.dataProcess['ConductorDetenido'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-ConductorDetenido', event.target.value);
  }

  setDetenido(detenido) {
    this.elExpediente.VehiculoDetenido = detenido;
    this.dataProcess.VehiculoDetenido = detenido;
    localStorage.setItem('dataProcess-VehiculoDetenido', detenido);
  }

  setDetenidoElConductor(detenido) {
    this.dataProcess.ConductorDetenido = detenido;
    localStorage.setItem('dataProcess-ConductorDetenido', detenido);
  }

  fueVolcado(event){
    this.dataProcess.VehiculoVolcado = event.detail.value;
    this.dataProcess['VehiculoVolcado'] = parseInt(event.target.value);
    localStorage.setItem('dataProcess-VehiculoVolcado', event.target.value);
  }

  setVolcado(volcado){
    this.dataProcess.VehiculoVolcado = volcado;
    this.dataProcess['VehiculoVolcado'] = volcado;
    localStorage.setItem('dataProcess-VehiculoVolcado', volcado);
  }

  cambiarPropietario(event) {
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
      header: 'HELP',
      message: 'Vamos a preparar el envío sin póliza para la atención '+this.idAtencion+'. Continuar?',
      buttons: [
      {
        text: 'CANCELAR',
        role: 'cancel',
        handler: () => { this.setUtilizacionAsistencia(1) }
      } ,
      {
        text: 'CONTINUAR',
        role: 'confirm',
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

}
