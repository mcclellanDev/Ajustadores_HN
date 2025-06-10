import { Expedientes } from './../interfaces/expedientes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, IonDatetime, LoadingController, ToastController } from '@ionic/angular';
import { Formulario, ImgFormularion, terceroSQL, TipoSiniestros} from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { format, parseISO, subYears } from 'date-fns';
import SignaturePad from 'signature_pad';


@Component({
  selector: 'app-declaracion',
  templateUrl: './declaracion.page.html',
  styleUrls: ['./declaracion.page.scss'],
})
export class DeclaracionPage implements OnInit {

  formulario: Formulario= {};
  expediente: Expedientes;
  menu=[false,false,false,false,false,false,false,false,false,false,false,false];
  tiposSiniestros: TipoSiniestros[]=[];
  buscar:string="";
  guardar = true;
  editar = false;
  index:number;
  showPersona= false;
  //Fecha vigencia 
  showpicker = false;
  showTercero=false;
  firma:ImgFormularion={};
  @ViewChild(IonDatetime) datetime: IonDatetime;
  dateValue = format(new Date(),'yyyy-MM-dd');
  dateMax:string= format(parseISO(format(subYears(new Date(),18),'yyyy-MM-dd')),'yyyy-MM-dd');
  vigencia = '';
  showFecha = false;
  fechahora:string;
  fechaMin:string=format(new Date(Date.now()),'yyyy-MM-dd')+"T00:00:00";
  fechaMax:string= format(new Date(new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear()+5)),'yyyy-MM-dd')+"T00:00:00";
  //Fecha y hora de insidente
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  sig: SignaturePad;
  constructor(private router: Router,
    private loading: LoadingController,
    private alert: AlertController,
    private api: ApiService, 
    private toast: ToastController,
    ) { 
      const state = this.router.getCurrentNavigation().extras.state;
      console.log(state.data);
      if(state.data){
        this.formulario = state.data;
      }
      console.log(this.fechaMax,this.fechaMin, this.dateMax);
    }

  ngOnInit() {
    this.sig = new SignaturePad(this.canvas.nativeElement,{
      backgroundColor:"rgb(255,255,255)"
    });
  }
  ionViewDidEnter(){
    this.getTiposSiniestros();
   }
   hiddenMenu(i:number){
    if(!this.menu[i]){
      this.menu = this.menu.reduce((x)=>{return [...x, false]},[]);
    }
      this.menu[i]= !this.menu[i];
  }

  async getTiposSiniestros(){
    const load = await this.loading.create();
    await  load.present();
    this.api.ListTipoSiniestroFicohsa().pipe( 
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
  clear() {
    this.sig.clear();
    if(this.sig){
      this.sig.on()
    }
  }
  saveFirma(){
    console.log(this.sig.toDataURL("image/jpeg"));
    this.firma.IdAtencion= this.formulario.RefAtencionId;
    this.firma.RefTipoFotoId=3;
    let dataimg= this.sig.toDataURL("img/jpeg")
    this.firma.Foto= dataimg.split(',')[1];
    this.sig.off();

  }
  damagePosition(valor:number){
    switch(valor){
      case 1:
        if (this.formulario.DanioLataralIzquierdo===1){
          this.formulario.DanioLataralIzquierdo=0;
          this.toastAlert("Vehículo Sin Daño Latereal Izquierdo");
        }else{
          this.formulario.DanioLataralIzquierdo=1;
          this.toastAlert("Vehículo Daño Latereal Izquierdo");
        }
        //this.toastAlert("Daño Latateral Izquierdo: "+this.formulario.DanioLataralIzquierdo);
        break;
      case 2: 
          if (this.formulario.DanioLateralDerecho===1){
            this.formulario.DanioLateralDerecho=0;
            this.toastAlert("Vehículo Sin Daño Latereal Derecho");
          }else{
            this.formulario.DanioLateralDerecho=1;
            this.toastAlert("Vehículo Daño Latereal Derecho");
          }
          break;
      case 3: 
          if (this.formulario.VehiculoVolcado===1){
            this.formulario.VehiculoVolcado=0;
            this.toastAlert("Vehículo No Volcado")
          }else{
            this.formulario.VehiculoVolcado=1;
            this.toastAlert("Vehículo Volcado");
          }
          
          break;
      case 4: 
          if (this.formulario.DanioFrontal===1){
            this.formulario.DanioFrontal=0;
            this.toastAlert("Daño Sin Frontal")
          }else{
            this.formulario.DanioFrontal=1;
            this.toastAlert("Daño Frontal");
          }
          break;
      case 5: 
          if (this.formulario.DanioTrasero===1){
            this.formulario.DanioTrasero=0;
            this.toastAlert("Daño Sin Trasero");
          }else{
            this.formulario.DanioTrasero=1;
            this.toastAlert("Daño Trasero");
          }
          break;
      default:
        break;
    } 
  }
  async toastAlert(mensaje: string){
    const toa = await this.toast.create({
      message:mensaje,
      duration:2000,
      position:"middle"
    });
    await toa.present();
  }
  
  dateChange(value){
    this.vigencia = format(parseISO(value),'yyyy-MM-dd');
    this.formulario.Vigencia=value;
    this.showpicker=false;
  }
  fechaChange(value){
    this.fechahora = format(parseISO(value),'yyyy-MM-dd');
    this.formulario.FechaHora=value;
    this.showFecha=false;
  }
  close(){
    this.showpicker=false;
    this.showFecha=false;
    this.datetime.cancel(true);
  }
  select(){
    this.showFecha=false;
    this.showpicker= false;
    this.datetime.confirm(true)
  }
  async next(){
    this.formulario.Blindado= "No";
    this.formulario.JSON_TercerosSiniestro = "";//JSON.stringify(this.terceroSqlList);
    this.formulario.RefTipoAudienciaId=1;
    this.formulario.JSON_PropiedadDaniadaSiniestro= "";
    console.log(this.formulario);
    const load = await this.loading.create();
    await  load.present();
    if(this.setFirma()){
      this.api.GuardarSiniestro(this.formulario).pipe( 
        finalize(async ()=>{
          await load.dismiss();
        })
      ).subscribe(
         (res) =>{
            console.log(res,'esta es la respuesta');
            const navigateExtras: NavigationExtras = 
            {
              state:{
                data: {RefAtencionId: this.formulario.RefAtencionId,
                      RefAjustadorAudienciaId: res
                      }
              }
            }
            this.router.navigate(['./tercero'], navigateExtras)
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
    }else async () =>{
      const alert = await this.alert.create({
        header:'HELP',
        message:'Error al guardar los datos, intentelo de nuevo',
        buttons:['Ok']
        
      });
      await alert.present();
    }
    
  }
  async setFirma(){
    const load = await this.loading.create();
    await  load.present();
    const firmaarr: ImgFormularion[]=[];
    firmaarr.push(this.firma)
    this.api.GuardarFotos(firmaarr).pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          return true;
      },
      async (res) => {
        return false;
      }
    )
  }
}
