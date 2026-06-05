import { ajustadorHn, tipoSolicitante } from '../interfaces/formulario';
import { AlertController, ToastController } from '@ionic/angular';
import { FormatosService } from '../services/formatos.service';
import { ItemsData } from '../environments/predeterminados';
import { ToastService } from '../services/toast.service';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as $ from 'jquery';
import { iconWorlds } from '../environments/mapas';


@Component({
  selector: 'app-segmento-solicitante',
  templateUrl: './segmento-solicitante.page.html',
  styleUrls: ['./segmento-solicitante.page.scss'],
})
export class SegmentoSolicitantePage implements OnInit {
  idAtencion:any; miMoneda: string; moneda: any;
  tipoSolicitante: tipoSolicitante[]=[]; esTipoSolicitante:boolean=false; elTipoSolicitante:any;  isLoading: boolean;  dataSiniestro: any;  identidadCliente: any;
  elTipoLicencia: any;  nulosAtencion: any; ajustador: ajustadorHn={}; datos:any=[]; elExpediente:any = [];  tipoDeCobertura: any;  tiposdeCobertura: any; 
  solicitanteDisplayName:any; coberturaDisplayName:any; nombreCliente: any;  tipoLicencia: any;  elTipoLicenciaId: any;  licenciaTipo: any;  elTipoDeLicencia: any;
  tipoGeneros: any;  elTipoGenero: any;  inicialGenero: string;  elGenero: any; tipoParentescos:any=[]; elTelefonoOrigen: any;  elTipoParentesco: any;  elParentesco: any;
  elCorreoElectronico:any; isNombreCliente:boolean=false; isStorageClienteNombre:boolean=false; isIdCliente:boolean=false; isTelCliente:boolean=false; isMailCliente:boolean=false;
  segmentoTitulo:any;  isFirst: boolean; fechaValida: boolean;  miPais: string;  banderaPais: string;
  codigoPais: string;  iconIndex: any; disExpediente:any= [];  cacheDeCliente: any = []; solicitanteId:any;
  coberturas: any = [];

  constructor(private api: ApiService, public toaster:ToastService, private toast:ToastController, private alert: AlertController, private formateador:FormatosService) { 
    this.ajustador.TipoSolicitante = parseInt(localStorage.getItem('TipoSolicitante'));
    this.solicitanteId = parseInt(localStorage.getItem('tipoSolicitante'));
    let coberId:any = localStorage.getItem('coberturaId');
    //this.coberturaId = parseInt(coberId);
    

    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    if (this.segmentoTitulo) {
    }


    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);

    let idAtencionActual = localStorage.getItem('atencionEnProceso');
    if (idAtencionActual) {
      console.log('Esta es la atención actual : '+idAtencionActual);
      if (this.idAtencion != idAtencionActual) {
        this.clearSegmentsStorage();
      }
    }

    // Datos del LocalStorage para Guardado automático de datos
    this.isLoading = true;

    /*
    setTimeout(() => {
      let exped:any; let cache:any; 
      exped = localStorage.getItem('disExpediente');
      cache = localStorage.getItem('cacheCliente');
      this.disExpediente = JSON.parse(exped);
      this.cacheDeCliente = JSON.parse(cache);

      console.log('Dis Expediente '); console.dir(this.disExpediente);
      console.dir(this.cacheDeCliente);

      this.elCorreoElectronico = this.cacheDeCliente[0].CorreoElectronico;
      this.setCorreo(this.elCorreoElectronico)

      let elSolicitante = localStorage.getItem('elSolicitante');
      let tipoSolicitante = localStorage.getItem('tipoSolicitante');
      let laCobertura = localStorage.getItem('laCobertura');
      let nombreCliente = localStorage.getItem('elNombreCliente');
      let identidadCliente = localStorage.getItem('laIdentidadCliente');
      let tipoLicencia = localStorage.getItem('elTipoLicencia');
      let tipoLicenciaId = localStorage.getItem('elTipoLicenciaId');
      let elGeneroTipo = localStorage.getItem('elGenero');
      let tipoGeneroId =  localStorage.getItem('elGeneroId');
      let elParentesco = localStorage.getItem('elParentesco');
      let elTelefonoCliente = localStorage.getItem('elTelefonoOrigen');
      let elCorreo = localStorage.getItem('dataProcess-CorreoElectronico');


      if (tipoSolicitante) {
        let solicitanteT = tipoSolicitante;
        //self.alert(tipoSolicitante)
        this.setSolicitante(tipoSolicitante)
        console.log('Este es el tipo de solicitante evaluado desde el inicio '+solicitanteT)
      }

      if (elSolicitante) {
        this.solicitanteDisplayName = elSolicitante.split('-')[1];
        console.log('Soclicit '+(parseInt(tipoSolicitante)+1))
        this.elTipoSolicitante = parseInt(tipoSolicitante);
        //this.setSolicitante(this.elTipoSolicitante);
        
        //$("#TipoSolicitanteDisplay").text(elSolicitante);
      }
      
      self.alert(laCobertura)
      if (laCobertura) {
        
        this.coberturaDisplayName = laCobertura.split('-')[1];
        localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
        this.seTipoCobertura(this.coberturaDisplayName);
      }

      if (nombreCliente) {
        this.nombreCliente = nombreCliente.split('-')[1];
        this.setNombre();
      }

      if (identidadCliente) {
        this.identidadCliente = identidadCliente.split('-')[1];
        this.setIdentidad();
      }

      if (tipoLicencia) {
        this.elTipoDeLicencia = tipoLicencia.split('-')[1];
        this.elTipoLicenciaId = parseInt(tipoLicenciaId.split('-')[1]);
        this.setElTipoLicencia(this.elTipoLicenciaId);
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

      if (elParentesco) {
        this.elParentesco = elParentesco.split('-')[1];
        this.setElTipoParentesco(this.elParentesco);
      }

      console.log(elTelefonoCliente)
      if (elTelefonoCliente) {
        this.elTelefonoOrigen = elTelefonoCliente.split('-')[1];
        this.setTelefono();
      }



      this.isLoading = false;
    }, 1500);
    */
    

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
          localStorage.setItem('datos-Identificacion', this.identidadCliente);
          localStorage.setItem('datos-IdentidaConductor', this.identidadCliente);
          if (this.identidadCliente) {
            this.isIdCliente = true;
          }else{
            this.isIdCliente = false;
          }
          this.elTipoLicencia = this.dataSiniestro[0].RefTipoLicenciaId;
          if(elElemento == null || elElemento == undefined){
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

    this.api.Expediente(dIdAtencion).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          localStorage.setItem('disExpediente', JSON.stringify(res));

          this.nombreCliente = this.elExpediente[0].Cliente;
          this.moneda = this.elExpediente[0].Moneda;
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }

          localStorage.setItem('datos-Nombre', this.nombreCliente);
          localStorage.setItem('datos-NombreConductor', this.nombreCliente);
          if (this.nombreCliente) {
            this.isNombreCliente = true;
          }else{
            this.isNombreCliente = false;
          }
          this.elTelefonoOrigen = this.elExpediente[0].TelefonoOrigen;
          if (this.elTelefonoOrigen) {
            this.isTelCliente = true;
          }else{
            this.isTelCliente = false;
          }

          this.elCorreoElectronico = this.elExpediente[0].CorreoElectronico;
          
          
          if (this.elCorreoElectronico) {
            this.isMailCliente = true;
          }else{
            this.isMailCliente = false;
          }

          this.testMail(this.elCorreoElectronico);

          /*
          console.log('Asi viene el correo 2 : '+this.elCorreoElectronico)
          if (this.elCorreoElectronico == null) {
            this.elCorreoElectronico = localStorage.getItem('dataProcess-CorreoElectronico');
            console.log('Asi viene el correo 3 : '+this.elCorreoElectronico)
          }

          */
          
        }
    )
    
  }

  testMail(elCorreoElectronico) {
    //alert(elCorreoElectronico)
    if (elCorreoElectronico==null) {
      setTimeout(() => {
        this.elCorreoElectronico = localStorage.getItem('dataProcess-CorreoElectronico');
        //alert(this.elCorreoElectronico)  
        if (this.elCorreoElectronico == null) {
          this.elCorreoElectronico = localStorage.getItem('datos-CorreoElectronico');
          //alert(this.elCorreoElectronico)
          if (this.elCorreoElectronico == null) {
            //this.elCorreoElectronico = localStorage.getItem('elCorreoElectronico').split('-')[1];
            //alert(this.elCorreoElectronico)
          }
        }
      }, 3000);
      
    }
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

          this.nombreCliente = this.elExpediente[0].Cliente;
          this.moneda = this.elExpediente[0].Moneda;
          if (this.moneda == null) {
            this.miMoneda = "LEMPIRAS";
          }else{ 
            this.miMoneda = this.moneda;
          }
        }
      )

      let elSolicitante = localStorage.getItem('elSolicitante');
      let tipoSolicitante = localStorage.getItem('tipoSolicitante');
      let laCobertura = localStorage.getItem('laCobertura');
      
      let nombreCliente = localStorage.getItem('elNombreCliente');
      let identidadCliente = localStorage.getItem('laIdentidadCliente');
      let tipoLicencia = localStorage.getItem('elTipoLicencia');
      let tipoLicenciaId = localStorage.getItem('elTipoLicenciaId');
      let elGeneroTipo = localStorage.getItem('elGenero');
      let tipoGeneroId =  localStorage.getItem('elGeneroId');
      let elParentesco = localStorage.getItem('elParentesco');
      let elTelefonoCliente = localStorage.getItem('elTelefonoOrigen');
      let elCorreo = localStorage.getItem('dataProcess-CorreoElectronico');


      if (tipoSolicitante) {
        let solicitanteT = tipoSolicitante;
        //self.alert(tipoSolicitante)
        this.setSolicitante(tipoSolicitante)
        console.log('Este es el tipo de solicitante evaluado desde el inicio '+solicitanteT)
      }

      if (elSolicitante) {
        this.solicitanteDisplayName = elSolicitante.split('-')[1];
        console.log('Soclicit '+(parseInt(tipoSolicitante)+1))
        this.elTipoSolicitante = parseInt(tipoSolicitante);
        //this.setSolicitante(this.elTipoSolicitante);
        
        //$("#TipoSolicitanteDisplay").text(elSolicitante);
      }
      
      
      if (laCobertura) {
        
        this.coberturaDisplayName = laCobertura.split('-')[1];
        localStorage.setItem('datos-TipoAcuerdoFicohsa', this.coberturaDisplayName);
        this.seTipoCobertura(this.coberturaDisplayName);
      }

      if (nombreCliente) {
        this.nombreCliente = nombreCliente.split('-')[1];
        this.setNombre();
      }

      if (identidadCliente) {
        this.identidadCliente = identidadCliente.split('-')[1];
        this.setIdentidad();
      }

      if (tipoLicencia) {
        this.elTipoDeLicencia = tipoLicencia.split('-')[1];
        this.elTipoLicenciaId = parseInt(tipoLicenciaId.split('-')[1]);
        this.setElTipoLicencia(this.elTipoLicenciaId);
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

      if (elParentesco) {
        this.elParentesco = elParentesco.split('-')[1];
        this.setElTipoParentesco(this.elParentesco);
      }

      console.log(elTelefonoCliente)
      if (elTelefonoCliente) {
        this.elTelefonoOrigen = elTelefonoCliente.split('-')[1];
        this.setTelefono();
      }

      /*
      console.log('Correo en dataProcess + '+localStorage.getItem('dataProcess-CorreoElectronico'))
      if (elCorreo) {
        this.elCorreoElectronico = elCorreo;
        console.log('Asi viene el correo 1 : '+this.elCorreoElectronico)
        this.setCorreo();
      }

      */

      this.isLoading = false;
    }, 1500);
  }

  ngOnInit() {
    
    this.getTiposDeCobertura();
    this.getTipoSolicitante();
    this.getTipoLicencia(3);
    this.loadParentescos();
    this.loadGeneros();

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

    setTimeout(() => {
      let cobert:any = localStorage.getItem('coberturas');
      this.coberturas = JSON.parse(cobert);

      console.log('Las coberturas en segmento solicitante'); console.dir(this.coberturas);

      if (this.coberturas.length == 0) {
        this.toaster.presentToastAlert('Esta póliza no cuenta con cobertura para servicios legales. Consulte con su proveedor de servicios.', 'top', 'danger', 10000);
      }else{
        if (this.solicitanteId) {
          for (let index = 0; index < this.tipoSolicitante.length; index++) {
            const element = this.tipoSolicitante[index];
            if (element.Id == this.solicitanteId) {
              this.solicitanteDisplayName = element.TipoSolicitante
            }
          }
        }else{
          this.solicitanteId = 1;
          this.solicitanteDisplayName = this.tipoSolicitante[0].TipoSolicitante;
        }
      }

      
    }, 3500);
  }

  identificarPais() {
    //alert('Identificando...')
    //alert(this.miPais)
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
    //alert(this.iconIndex)
      let elIcono = iconWorlds[this.iconIndex];
      //alert(elIcono.url)
      this.banderaPais = elIcono.url;
    }
  }
  randomize(arg0: number, arg1: number): any {
    throw new Error('Method not implemented.');
  }

  async getTipoSolicitante(){
  this.isLoading = true;
  this.api.ListTipoDeSolicitanteInformeAjuste().pipe( 
    finalize(async ()=>{
      this.isLoading = false;
    })
  ).subscribe(
      async (res) =>{
        this.tipoSolicitante = res;
        console.log('TipoSolicitante');
        console.dir(this.tipoSolicitante)
    },
    async (res) => {
      this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      
    }

  )
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
    localStorage.setItem('tiposDeCobertura', JSON.stringify(this.tiposdeCobertura));
  })
}

async getTipoLicencia(paisIdentidad){
  this.isLoading = true; this.api.TipoDeLicencia(paisIdentidad).pipe( 
    finalize(async ()=>{this.isLoading = false;})
  ).subscribe(async (res) =>{this.tipoLicencia = res;},
    async (res) => {const alert = await this.alert.create({
        header:'HELP', message:res.error.Message, buttons:['Ok']});
      await alert.present();
    }
  )
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

loadParentescos(){
  this.api.ListTipoParentesco(3).pipe( 
    finalize(async ()=>{
      this.isLoading = false;
    })
  ).subscribe(
     async (res) =>{
      this.tipoParentescos = res;
      console.log("Mis parentescos");
      console.dir(this.tipoParentescos);
    },
    async (res) => {
      this.toaster.presentToast(res.error.Message, 'top', 'solicitante');
      
    }

  )
}

getElTipoLicencia(event){
  this.elTipoLicenciaId = event.target.value;

  for (let index = 0; index < this.tipoLicencia.length; index++) {
    const element = this.tipoLicencia[index];
    const laLicenciaTipo = element.TipoLicencia;
    if (element.Id == this.elTipoLicenciaId) {
      localStorage.setItem('elTipoLicencia', this.idAtencion.toString()+'-'+laLicenciaTipo);
      localStorage.setItem('elTipoLicenciaId', this.idAtencion.toString()+'-'+element.Id);
      localStorage.setItem('datos-Licencia', laLicenciaTipo);
      localStorage.setItem('datos-TipoLicencia', laLicenciaTipo);
      localStorage.setItem('datos-RefTipoLicenciaId', element.Id);
      
      this.elTipoDeLicencia = laLicenciaTipo;
      this.setAtencionActual();
    }
    
    if(this.elTipoLicenciaId.toString() == element.Id.toString()){
      this.licenciaTipo = element.TipoLicencia;
    }
    
  }
}

setElTipoLicencia(tipo){
  console.dir(this.tipoLicencia.length)
  this.elTipoLicenciaId = tipo;
  for (let index = 0; index < this.tipoLicencia.length; index++) {
    const element = this.tipoLicencia[index];
    const laLicenciaTipo = element.TipoLicencia;
    if (element.Id == this.elTipoLicenciaId) {
      localStorage.setItem('elTipoLicencia', this.idAtencion.toString()+'-'+laLicenciaTipo);
      localStorage.setItem('datos-Licencia', laLicenciaTipo);
      localStorage.setItem('datos-TipoLicencia', laLicenciaTipo);
      localStorage.setItem('datos-RefTipoLicenciaId', element.Id);
      
      this.elTipoDeLicencia = laLicenciaTipo;
      this.setAtencionActual();
    }
    
    if(this.elTipoLicenciaId.toString() == element.Id.toString()){
      this.licenciaTipo = element.TipoLicencia;
    }
    
  }
}

getElTipoGenero(event){
  console.dir(this.tipoGeneros)
  for (let index = 0; index < this.tipoGeneros.length; index++) {
    const element = this.tipoGeneros[index];
    if (element.Id == event.target.value) {
      this.elGenero = element.Genero;
      this.elTipoGenero = element.Id;
      localStorage.setItem('datos-Sexo', element.Id);
      localStorage.setItem('elGenero', this.idAtencion.toString()+'-'+this.elGenero);
      localStorage.setItem('elGeneroId', this.idAtencion.toString()+'-'+element.Id);
      this.setAtencionActual();
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

getElTipoParentesco(event){
  this.elTipoParentesco = event.target.value;
  this.datos['Parentesco'] = event.target.value;
  localStorage.setItem('datos-Parentesco', this.elTipoParentesco);
  console.log(this.elTipoParentesco)

  for (let index = 0; index < this.tipoParentescos.length; index++) {
    const element = this.tipoParentescos[index];
    if (this.elTipoParentesco == element.CODIGO) {
      this.elParentesco = element.DESCRIPCION;
      localStorage.setItem('elParentesco', this.idAtencion.toString()+'-'+this.elParentesco);
      this.setAtencionActual();
    }
  }
  
}

setElTipoParentesco(tipo){
  this.elTipoParentesco = tipo;
  this.datos['Parentesco'] = tipo;
  localStorage.setItem('datos-Parentesco', this.elTipoParentesco);
  console.log(this.elTipoParentesco)

  for (let index = 0; index < this.tipoParentescos.length; index++) {
    const element = this.tipoParentescos[index];
    if (this.elTipoParentesco == element.CODIGO) {
      this.elParentesco = element.DESCRIPCION;
      localStorage.setItem('elParentesco', this.idAtencion.toString()+'-'+this.elParentesco);
      this.setAtencionActual();
    }
  }
  
}

setTipoSolicitante(event){
  console.log(event)
  this.elTipoSolicitante = event.target.value;
  localStorage.setItem('datos-RefTipoSolicitanteInformeAjusteId', this.elTipoSolicitante);
  this.datos['RefTipoSolicitanteInformeAjusteId'] = event.target.value;
  localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  
  for (let index = 0; index < this.tipoSolicitante.length; index++) {
    const element = this.tipoSolicitante[index];
    if (element.Id == this.elTipoSolicitante) {
      localStorage.setItem('elSolicitante', this.idAtencion.toString()+'-'+element.TipoSolicitante);
      this.solicitanteDisplayName = element.TipoSolicitante;
      this.setAtencionActual();
    }
  }
  
  if (this.elTipoSolicitante == 1) {
    console.dir(this.elExpediente[0])
    this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
    localStorage.setItem('datos-Nombre', this.elExpediente[0].Cliente);
    localStorage.setItem('datos-NombreConductor', this.elExpediente[0].Cliente);
    setTimeout(() => {
      this.nombreCliente = this.elExpediente[0].Cliente;  
    }, 1000);
    this.isNombreCliente = true;
  }else{
    setTimeout(() => {
      let nombreSolicitante = localStorage.getItem('elNombreCliente').split('-')[1];
      if (nombreSolicitante) {
        this.nombreCliente = nombreSolicitante;
        localStorage.setItem('datos-Nombre', nombreSolicitante);
        localStorage.setItem('datos-NombreConductor', nombreSolicitante);
      }
      
    }, 1000);
    this.isNombreCliente = false;
  }
}

setSolicitante(solicitante){
  //alert(solicitante)
  this.elTipoSolicitante = solicitante;
  this.ajustador.TipoSolicitante = parseInt(solicitante);
  localStorage.setItem('datos-RefTipoSolicitanteInformeAjusteId', this.elTipoSolicitante);
  this.datos['RefTipoSolicitanteInformeAjusteId'] = solicitante;
  localStorage.setItem('tipoSolicitante', this.elTipoSolicitante);
  let elExp:any; let expediente:any;
  
  for (let index = 0; index < this.tipoSolicitante.length; index++) {
    const element = this.tipoSolicitante[index];
    if (element.Id == this.elTipoSolicitante) {
      localStorage.setItem('elSolicitante', this.idAtencion.toString()+'-'+element.TipoSolicitante);
      this.solicitanteDisplayName = element.TipoSolicitante;
      this.setAtencionActual();

      if (this.elTipoSolicitante == 1) {
        //alert('Esto');

        elExp = localStorage.getItem('elExpediente');
        this.elExpediente = JSON.parse(elExp);
        console.log('este Expediente');
        console.dir(this.elExpediente);
        
        this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;
        

        setTimeout(() => {
          this.nombreCliente = this.elExpediente[0].Cliente;  
          localStorage.setItem('datos-Nombre', this.elExpediente[0].Cliente);
          localStorage.setItem('datos-NombreConductor', this.elExpediente[0].Cliente);
        }, 1000);
        
        this.isNombreCliente = true;
      }else{
        let nombreSolicitante = localStorage.getItem('elNombreCliente').split('-')[1];
      if (nombreSolicitante) {
        this.nombreCliente = nombreSolicitante;
        localStorage.setItem('datos-Nombre', nombreSolicitante);
        localStorage.setItem('datos-NombreConductor', nombreSolicitante);
      }
        setTimeout(() => {
          this.isNombreCliente = false;
        }, 1000);
        
      }

    }

    
  }
  
}

entraNombre(event){
  this.elExpediente.Cliente = event.target.value;
  console.log(event.target.value)
  localStorage.setItem('elNombreCliente', this.idAtencion.toString()+'-'+event.target.value);
  localStorage.setItem('datos-Nombre', event.target.value);
  localStorage.setItem('datos-NombreConductor', event.target.value);
  this.setAtencionActual();
  
}

setNombre(){
  localStorage.setItem('elNombreCliente', this.idAtencion.toString()+'-'+this.nombreCliente);
  localStorage.setItem('datos-Nombre', this.nombreCliente);
  localStorage.setItem('datos-NombreConductor', this.nombreCliente);
  this.setAtencionActual();
  this.elExpediente.Cliente = this.nombreCliente;
  
  if (this.elTipoSolicitante == 1) {
    this.elExpediente.NombreConductor = this.elExpediente[0].Cliente;

    setTimeout(() => {
      this.nombreCliente = this.elExpediente[0].Cliente;  
    }, 1000);
    
    this.isNombreCliente = true;
  }else{
    let nombreSolicitante = localStorage.getItem('datos-Nombre');
      if (nombreSolicitante) {
        this.nombreCliente = nombreSolicitante;
      }
    setTimeout(() => {
      this.isNombreCliente = false;
    }, 1000);
    
  }
  
}

editarNombre(){
  this.toastEditWarning('Estás a punto de editar el nombre del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 1);
}

entraIdentidad(event){
  if(event.target.value.length == event.target.maxlength){
    this.elExpediente.IdentidaConductor = event.target.value;
    this.datos['IdentidaConductor'] = event.target.value;
    this.datos['Identificacion'] = event.target.value;
    this.datos['DPI_Pasaporte'] = event.target.value;
    localStorage.setItem('datos-Identificacion', this.elExpediente.IdentidaConductor);
    localStorage.setItem('datos-IdentidaConductor', this.elExpediente.IdentidaConductor);
  }
}

setIdentidad(){
  localStorage.setItem('laIdentidadCliente', this.idAtencion.toString()+'-'+this.identidadCliente);
  localStorage.setItem('datos-Identificacion', this.identidadCliente);
  localStorage.setItem('datos-IdentidaConductor', this.identidadCliente);
  this.setAtencionActual();
  this.dataSiniestro[0].IdentidadCliente = this.identidadCliente;
  
  this.isIdCliente = true;
}

editarIdentidad(){
  this.toastEditWarning('Estás a punto de editar la identidad del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 2);
}

seleccionarTipoCobertura(event){
  this.tipoDeCobertura = event.target.value;
  localStorage.setItem('tipoCobertura', event.target.value);

  //localStorage.setItem('coberturaId', )
  for (let index = 0; index < this.coberturas.length; index++) {
    const element = this.coberturas[index];

    console.log(element.cOBERTURAField+' == '+this.tipoDeCobertura+', '+(element.cOBERTURAField == this.tipoDeCobertura));

    let validacion:any = (element.cOBERTURAField == this.tipoDeCobertura);
    //alert('coberturaFIeld '+element.cOBERTURAField+' == tipoDeCobertura del front '+this.tipoDeCobertura+', validacion '+validacion)
    if (validacion == true) {
      this.coberturaDisplayName = element.dESCRIPCIONField;
      //alert('coberturaFIeld '+element.cOBERTURAField+' == tipoDeCobertura del front '+this.tipoDeCobertura+', validacion '+validacion+'coberturaDisplayName '+element.dESCRIPCIONField);
      localStorage.setItem('coberturaId', element.cOBERTURAField);
      this.seTipoCobertura(element.dESCRIPCIONField);
    }
  }

  //$("#TipoAcuerdoDisplay").text(this.tipoDeCobertura);
  //this.coberturaDisplayName = this.tipoDeCobertura;
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





  

  entraTel(event){
    this.elExpediente.TelefonoOrigen = event.target.value;
    this.datos['TelefonoOrigen'] = event.target.value;
    this.elTelefonoOrigen = event.target.value;
    localStorage.setItem('elTelefonoOrigen', this.idAtencion.toString()+'-'+this.elTelefonoOrigen);
    localStorage.setItem('datos-TelefonoConductor', this.elTelefonoOrigen);
    localStorage.setItem('datos-CelularConductor', this.elTelefonoOrigen);
    this.setAtencionActual();
  }

  setTelefono(){
    localStorage.setItem('elTelefonoOrigen', this.idAtencion.toString()+'-'+this.elTelefonoOrigen);
    localStorage.setItem('datos-TelefonoConductor', this.elTelefonoOrigen);
    localStorage.setItem('datos-CelularConductor', this.elTelefonoOrigen);
    this.setAtencionActual();
    this.elExpediente[0].elTelefonoOrigen = this.elTelefonoOrigen;
    
    this.isTelCliente = true;
  }
  
  editarTelefono(){
    this.toastEditWarning('Estás a punto de editar el teléfono del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 3);
  }

  entraCorreo(event){
    this.elExpediente.CorreoElectronico = event.target.value;
    this.datos['CorreoElectronico'] = event.target.value;
    this.elCorreoElectronico = event.target.value;
    localStorage.setItem('elCorreoElectronico', this.idAtencion.toString()+'-'+event.target.value);
    localStorage.setItem('datos-CorreoElectronico', this.elCorreoElectronico);
    
    this.setAtencionActual();
  }

  setCorreo(correo:any){
    //alert('El correo '+correo);
    
    localStorage.setItem('elCorreoElectronico', this.idAtencion.toString()+'-'+this.elCorreoElectronico);
    localStorage.setItem('datos-CorreoElectronico', this.elCorreoElectronico);
    this.setAtencionActual();
    this.elExpediente[0].elTelefonoOrigen = this.elTelefonoOrigen;
    
    this.isMailCliente = true;
  }
  
  editarCorreo(){
    this.toastEditWarning('Estás a punto de editar el correo del afiliado. Esto es información muy importante. CONTINUAR?', 'middle', 'editar', 4);
  }

  validateEmail(status, event){
    console.log(status);
    if(status == "INVALID"){
      this.toaster.presentToastEmailInvalid('El correo no es válido', 'top', 'correo');
    }
    if(status == "VALID"){
      this.setCorreo(this.elCorreoElectronico);
      this.toaster.dismissToast();
    }
  
  }

  async toastEditWarning(message, position, clase, tipo){
    const tost = await this.toast.create({
      message: message,
      color: 'danger',
      duration: 30000,
      position: position,
      cssClass: ['custom-toast', clase],
      buttons: [
        {
          text: 'NO CONTINUAR',
          role: 'cancel',
          handler: () => {
            if (tipo == 1) {
              this.isNombreCliente = false;
            }
            if (tipo == 2) {
              this.isIdCliente = true;
            }
            if (tipo == 3) {
              this.isTelCliente = true;
            }
            if (tipo == 4) {
              this.isMailCliente = true;
            }
            tost.dismiss();
          }
        },
        {
          text: 'SI CONTINUAR',
          role: 'reload',
          handler: () => {
            if (tipo == 1) {
              this.isNombreCliente = false;
            }
            if (tipo == 2) {
              this.isIdCliente = false;
            }
            if (tipo == 3) {
              this.isTelCliente = false;
            }
            if (tipo == 4) {
              this.isMailCliente = false;
            }
            tost.dismiss();
          }
        },
      ],
    });
    await tost.present();
  }

  clearSegmentsStorage() {
    console.log('limpiando las variables de segmentos');
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
  }

  formatearFecha(mydateAjustador){
    console.log("Esta es mi fecha :");
    console.log(mydateAjustador);
    var dateFormat = mydateAjustador.split('T')[0];
    var timeFormat = mydateAjustador.split('T')[1];
    //this.fechaValida =  this.formateador.compararFechas(this.elExpediente[0].FechaRegistro, mydateAjustador);
    //alert('Fecha válida? '+this.fechaValida)
    /*
    
    
    console.log(this.fechaValida)
    if (this.fechaValida) {
      this.formateadaAjustador = dateFormat +' - '+timeFormat; 
      if (document.getElementById('fechaInspeccion')) {
        document.getElementById('fechaInspeccion').setAttribute('style', '--background:#0090d0;');
      }
      //
      this.toaster.dismissToast();
    }else{
      this.toaster.presentToastNoButtonsRed('La fecha de inspección debe ser las misma fecha del siniestro o posterior.', 'top', 'validacion');
      document.getElementById('fechaInspeccion').setAttribute('style', '--background:red;');
    }
    */
    
     //console.log(dateFormat+' ... '+timeFormat);
  }

}
