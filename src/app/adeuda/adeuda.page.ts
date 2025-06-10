import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { firmaDemoAjustador, emptySignature, emptySignatureWhite, anySignature } from '../environments/signatures';
import { logoFicohsa } from '../environments/default-images';
import { ApiService } from '../services/api.service';
import { ToastService } from '../services/toast.service';
import { Platform, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import SignaturePad from 'signature_pad';
import { meses } from '../environments/calendario';
import { adeudaEtiquetas } from '../environments/predeterminados';
import { Entidades } from '../interfaces/extras';

@Component({
  selector: 'app-adeuda',
  templateUrl: './adeuda.page.html',
  styleUrls: ['./adeuda.page.scss'],
})
export class AdeudaPage implements OnInit {
//Firma
@ViewChild("canvas5", { static: true }) canvas5: ElementRef;
sig5: SignaturePad;meses:any=meses;firmaDemoAjustador:any = firmaDemoAjustador;emptySignature:any= emptySignature
emptySignatureWhite:any = emptySignatureWhite;anySignature:any=anySignature

isLoading: boolean=false;openModal: boolean = false;fechaParrafo:any;fechaPie:any;acuerdoDeuda:any;
adeudaCompleta:boolean=false;deviceWidth:any;deviceHeight:any;idAtencion:any;telFijo:any;laPoliza:any;
fsLogo:any;now:any;diaPie :any;mesPie :any;anioPie:any;dia :any;mes :any;anio:any;isSigned:any;
  ya: boolean=false;  atencionId: number;  expediente: any;  moneda: any;  miMoneda: string; isEmptySignature:boolean=true;
  deudaSent: any;  daniosSelectCulpable: any = []; daniosSelectC :any = [];
  isDeudaSent: boolean;  danios: any = [];
// datos a arreglar
// poliza, agregar del cliente
// fecha formato
// 

  constructor(private platform:Platform, private api:ApiService, private toaster: ToastService, private toast:ToastController) {
    this.deudaSent = localStorage.getItem('deudaSent'); //=== 'true';
    this.getDanios();

      if (this.deudaSent) {
        this.isDeudaSent = this.deudaSent.toString().split('-')[0] === 'true';
      let deudaSentId = this.deudaSent.toString().split('-')[1];
      if (this.isDeudaSent == true && (this.idAtencion=== deudaSentId)) {
        console.log('Deuda enviada')
        console.log(this.isDeudaSent)
      }else{
        this.isDeudaSent = false;
      }
      }
      
    this.isLoading = true; 
    this.idAtencion = localStorage.getItem('idAtencion');
    this.laPoliza = localStorage.getItem('datos-Poliza');
    this.telFijo = localStorage.getItem('telFijo');
    this.acuerdoDeuda = JSON.parse(localStorage.getItem('deuda'));
    this.daniosSelectCulpable = JSON.parse(localStorage.getItem('daniosSelectCulpa'));
    console.log('Los danios seleccionados');
    console.dir(this.daniosSelectCulpable);
    this.isSigned = localStorage.getItem('adeudaCompleta');

    

    /*
    if (this.isSigned) {
      this.ya = this.isSigned;
    }
    */

    
    console.table(this.acuerdoDeuda);

    //alert(this.acuerdoDeuda['NombreDeudor']);
/*
    for (let index = 0; index < this.acuerdoDeuda.length; index++) {
      const element = this.acuerdoDeuda[index];
      alert(element)
    }
    */
    
    this.now = new Date();
    this.diaPie = this.now.getDate();
    this.mesPie = this.now.getMonth();
    this.anioPie = this.now.getFullYear();

    let daDate = localStorage.getItem('FechaRegistro');
    this.dia = daDate.split('T')[0].substring(8,10);
    this.mes = daDate.split('T')[0].substring(5,7);
    this.anio = daDate.split('T')[0].substring(0,4);
    this.fechaParrafo = this.dia+' de '+ this.meses[this.mes-1].mes+' de '+this.anio;
    this.fechaPie = (this.diaPie)+ ' días'+' del mes de '+ this.meses[this.mesPie].mes+' de '+this.anioPie;
    console.log((this.diaPie)+ ' días'+' del mes de '+ this.meses[this.mesPie].mes+' de '+this.anioPie,'fecha siniestro');

    this.fsLogo = logoFicohsa
    if (this.platform.is('android')) {
      this.deviceWidth = this.platform.width()-90;
    }else{
      this.deviceWidth = this.platform.width()-100;
    }
  }

  async getDanios(){
    this.isLoading = true;
    this.api.listDanios().pipe( 
      finalize(async ()=>{
        this.isLoading = false;
      })
    ).subscribe(
       async (res) =>{
        this.danios = res;

        console.log('Todos los daños');
        console.dir(this.danios);
        for (let index = 0; index < localStorage.length; index++) {
          const element = localStorage.getItem(localStorage.key(index));
          if (localStorage.key(index).indexOf('daniosSelectCulpa') == 0) {
            console.log('Este daño : '+element)
          }
        }

      },
      async (res) => {
        this.toaster.presentToast(res.error.Message, 'top', 'danios');
      }

    )
  }

  ngOnInit() {
    this.sig5 = new SignaturePad(this.canvas5.nativeElement);
    this.sig5.fromDataURL(emptySignatureWhite);

    setTimeout(() => {
      this.sig5.clear();
      this.guardarConvenioReparacionTest();
    }, 1000);

    this.sig5.backgroundColor = "rgb(255, 255, 255)";this.sig5.minWidth = 1;this.sig5.maxWidth = 1.5;
    this.sig5.dotSize = 3;

    
    //this.sig5.penColor = "rgb(66, 133, 244)";

    this.idAtencion = localStorage.getItem('idAtencion');
    if (this.hasNonDigit(this.idAtencion) == false) {
      
      this.atencionId = parseInt(this.idAtencion);
      //alert(parseInt(this.idAtencion)+1)

      this.api.Expediente(this.atencionId).pipe( 
        finalize(async ()=>{
          console.log('fin')
        })
      ).subscribe(
         (res) =>{
          console.log(res, 'respuesta');
          this.expediente= res;
          this.moneda = this.expediente[0].Moneda;


          setTimeout(() => {
            console.log('Asi está armado el acuerdo');
            console.dir(this.expediente[0])
            this.acuerdoDeuda.Anio = this.expediente[0].Year;
            this.acuerdoDeuda.Ciudad = this.expediente[0].Ciudad;
            this.acuerdoDeuda.FechaRegistro = this.expediente[0].FechaRegistro;
            this.acuerdoDeuda.Marca = this.expediente[0].Marca;
            this.acuerdoDeuda.Modelo = this.expediente[0].Modelo;
            this.acuerdoDeuda.NombreAsegurado = this.expediente[0].Cliente;
            this.acuerdoDeuda.Placa = this.expediente[0].NumeroPlaca;
            this.acuerdoDeuda.FechaRegistroDocumento = new Date().toISOString();
            this.acuerdoDeuda.DanioCausadoObservacion = this.acuerdoDeuda.Observaciones;
            //this.acuerdoDeuda.MotorImplicado = this.expediente[0].Motor;
            //this.acuerdoDeuda.ChasisImplicado = this.expediente[0].Chasis;

            console.dir(this.acuerdoDeuda);
            this.isLoading = false;
          }, 1000);

          //alert(this.moneda)
          if (this.moneda == null) {
            this.miMoneda = "Lempiras";
          }else{
            this.miMoneda = this.moneda.Moneda;
          }
          
         }
      )
    }
  }

  hasNonDigit(str){
    return /\D/g.test(str.toString());
  }

  clear() {
    this.sig5.clear();
  }
  
  testSave(){
    this.isLoading = true;
    this.isEmptySignature = this.sig5.isEmpty();
    console.log(this.sig5.isEmpty())
    if (this.sig5.isEmpty()) {
      this.toaster.presentToastNoButtonsRed("Necesitas escribir una firma para guardar el acuerdo.", "top", "firma");
      this.isLoading = false;
    }else{
      this.sig5.backgroundColor = "rgb(255, 255, 255)";this.sig5.minWidth = 1;this.sig5.maxWidth = 1.5;
    this.sig5.dotSize = 3; const mySignature = this.sig5.toDataURL("image/jpeg"); console.log(mySignature);

      //const mySignature =this.sig5.toDataURL("image/jpeg");
      this.acuerdoDeuda.FirmaDeudor = mySignature.split(',')[1];
      
      console.dir(this.acuerdoDeuda);

      setTimeout(() => {
        this.guardarDeuda();  
      }, 1800);

    }

  }

  

  guardarDeuda(){
    this.isLoading = true;
      console.dir(this.acuerdoDeuda);


          
          this.api.insertarReconocimientoDeuda(this.acuerdoDeuda).pipe( 
            finalize(async ()=>{
             
              console.log('fin adeuda')
              //await load.dismiss();
            })
            
          ).subscribe(
             async (res) =>{
              console.log('Esto viene de la deuda');
              console.dir(res);
              this.isLoading = false;
              if (this.daniosSelectCulpable.length > 0) {
                for (let index = 0; index < this.daniosSelectCulpable.length; index++) {
                  const element = this.daniosSelectCulpable[index];

                  let elTipoReparacion = localStorage.getItem('TipoReparacionCulpa-'+element.Codigo);
                  let reparaArray = {
                    codigoDanio : element.Codigo,
                    descripcionDanio : element.Descripcion,
                    fotografia : emptySignature.split(',')[1],
                    idAtencion : this.idAtencion,
                    refTipofotoId : element.Id,
                    TipoEntidad : Entidades[1].tipoEntidad,
                    TipoReparacion: elTipoReparacion
                  };
    
                    console.log('Esta es la data desde ajustador')
                    console.dir(reparaArray)
    
                    
                    this.api.insertarConvenioReparacion(reparaArray).pipe( 
                      
                      finalize(async ()=>{
                        this.isLoading = false;
                      })
                    ).subscribe(
                      async (res) =>{
                        console.log(res);
                        console.log("Convenio guardado");
                        if (index == (this.daniosSelectCulpable.length-1)) {
                          this.api.EnviarNotificacionEmail(this.idAtencion);
                        }
                        
                      },
                      async (res) => {
                        this.toaster.presentToast(res.error.Message, 'top', 'taller');
                      }
                
                    )

                    if (index == (this.daniosSelectCulpable.length-1)) {
                      this.ya = true;
                      this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
                      this.adeudaCompleta = true;
                      localStorage.setItem('adeudaCompleta', this.adeudaCompleta.toString());
                    }
                    
                  }
              }else{
              
              this.ya = true;
              this.toaster.presentToastNoButtons('Acuerdo Guardado con Exito. Puedes descargar una copia y enviarla a tu correo.', 'middle', 'deuda');
              this.adeudaCompleta = true;
              localStorage.setItem('adeudaCompleta', this.adeudaCompleta.toString());
            }

              localStorage.setItem('deudaSent', 'true-'+this.atencionId);
             })
             /**/
  }

  guardarConvenioReparacionTest(){
    if (this.daniosSelectCulpable.length > 0) {
      for (let index = 0; index < this.daniosSelectCulpable.length; index++) {
        const element = this.daniosSelectCulpable[index];

        let elTipoReparacion = localStorage.getItem('TipoReparacionCulpa-'+element.Codigo);
        
        let reparaArray = {
          codigoDanio : element.Codigo,
          descripcionDanio : element.Descripcion,
          fotografia : emptySignature.split(',')[1],
          idAtencion : this.idAtencion,
          refTipofotoId : element.Id,
          TipoEntidad : Entidades[1].tipoEntidad,
          TipoReparacion: elTipoReparacion
        };

        let DanioOtro = JSON.parse(localStorage.getItem('danioOtroCulpa-'+element.Codigo));
        if (DanioOtro) {
          let TipoReparacionCulpa = localStorage.getItem('TipoReparacionCulpa-'+element.Codigo);

          let reparaArrayOtro = {
            RefAtencionId: this.idAtencion,
            DescripcionDeDanio: element.Descripcion,
            FechaRegistro: new Date().toISOString(),
            UsuarioId: this.api.currentUser.ProveedorAgenteId,
            TipoEntidad: Entidades[1].tipoEntidad,
            TipoReparacion: TipoReparacionCulpa,
            CodigoDanioVehiculo: DanioOtro.Id
          }

          console.log('Esta es la data desde ajustador danio otro')
          console.dir(reparaArrayOtro);
        }
        

          console.log('Esta es la data desde ajustador')
          console.dir(reparaArray)
      }
    }
  }

  printPdf(){
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/DownloadReconocimientoDeDeuda/';

    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl+parseInt(this.idAtencion) , '_self');
    }else{
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de imprimirlo.', 'middle', 'deuda');
    }
  }

  previewPdf(){
    let pdfUrl;
    pdfUrl = 'https://testportal.porsalud.net/Applications/HELP/help_FicohsaSeguros/ReconocimientoDeDeuda/';
    
    if (this.adeudaCompleta == true) {
      this.openModal = true;
      console.log(parseInt(this.idAtencion));
      window.open(pdfUrl+parseInt(this.idAtencion) , '_self');
    }else{
      this.openModal = false;
      this.toaster.presentToastNoButtons('Debes guardar el acuerdo firmado antes de previsualizarlo.', 'middle', 'deuda');
    }
  }
}
