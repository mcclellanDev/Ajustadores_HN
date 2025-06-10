import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { danioVehiculo, datosTercero, Formulario, terceroSQL, vehiculoTercero } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.page.html',
  styleUrls: ['./tercero.page.scss'],
})
export class TerceroPage implements OnInit {
  datoTercero=false;
  datosVehiculo= false;
  danosVehiculoTercero=false;
  terceroDatos:datosTercero;
  terceroVehiculo:vehiculoTercero;
  terceroDanosVehiculo:danioVehiculo={};
  formulario: Formulario= {};
  terceroSql: terceroSQL={};
  terceroSqlList:terceroSQL[]=[];
  guardar = true;
  editar = false;
  index:number;
  showPersona= false;
  AtencionIds: any;
  constructor(private router: Router,
    private loading: LoadingController,
    private alert: AlertController,
    private api: ApiService, 
    private toast: ToastController) { 
      const state = this.router.getCurrentNavigation().extras.state;
      console.log(state.data);
      if(state.data){
        this.AtencionIds = state.data;
      }
    }

  ngOnInit() {
  }
  addPersona(){
    this.terceroSqlList.push(this.terceroSql);
    this.terceroSql={};
    this.showPersona=false;
  }
  editPersona(i:number){
    this.terceroSql= this.terceroSqlList[i];
    this.index= i;
    this.editar = true;
    this.guardar = false;
    this.showPersona=true;
  } 
  updatePersona(){
    this.terceroSqlList[this.index]= this.terceroSql;
    this.terceroSql={};
    this.editar = false;
    this.guardar = true;
    this.showPersona=false;
  }
  deletePersona(i:number){
    this.terceroSqlList.splice(i,1)
    
  }
  personaModal() {
        this.showPersona = !this.showPersona;
  }
  damagePosition(valor:number){
    switch(valor){
      case 1:
        this.terceroDanosVehiculo.DanioLataralIzquierdo = ! this.terceroDanosVehiculo.DanioLataralIzquierdo;
        this.toastAlert("Daño Latateral Izquierdo: "+this.terceroDanosVehiculo.DanioLataralIzquierdo);
        break;
      case 2: 
          this.terceroDanosVehiculo.DanioLateralDerecho= ! this.terceroDanosVehiculo.DanioLateralDerecho;
          this.toastAlert("Daño Latateral Derecho: "+this.terceroDanosVehiculo.DanioLateralDerecho);
          break;
      case 3: 
          this.terceroDanosVehiculo.VehiculoVolcado= ! this.terceroDanosVehiculo.VehiculoVolcado;
          this.toastAlert("Vehículo Volcado: "+this.terceroDanosVehiculo.VehiculoVolcado);
          break;
      case 4: 
          this.terceroDanosVehiculo.DanioFrontal= ! this.terceroDanosVehiculo.DanioFrontal;
          this.toastAlert("Daño Frontal: "+this.terceroDanosVehiculo.DanioFrontal);
          break;
      case 5: 
          this.terceroDanosVehiculo.DanioTrasero= ! this.terceroDanosVehiculo.DanioTrasero;
          this.toastAlert("Daño Trasero: "+this.terceroDanosVehiculo.DanioTrasero);
          break;
      default:
        break;
    } 
  }
  async toastAlert(mensaje: string){
    const toa = await this.toast.create({
      message:mensaje,
      duration:2000,
      position:"bottom"
    });
    await toa.present();
  }
  async next(){
    if(this.terceroSqlList.length > 0){
      const load = await this.loading.create();
      await  load.present();
      console.log(this.terceroSqlList);
      this.api.GuardarTerceros(this.terceroSqlList).pipe( 
      finalize(async ()=>{
        await load.dismiss();
        })
        ).subscribe(
        (res) =>{
            const navigateExtras: NavigationExtras = 
            {
              state:{
                data:this.AtencionIds
              }
            }
            this.router.navigate(['./propiedad'], navigateExtras)
          },
        async (res) => {
          const alert = await this.alert.create({
            header:'HELP',
            message:res.error.Message,
            buttons:['Ok']
            
          });
          await alert.present();
          }
        );
    }else{
      const alert = await this.alert.create({
        header:'HELP',
        message:'No agrego terceros ¿Desea continuar?',
        buttons:[{
                  text:'No',
                  role: 'cancel',
                  },
               {
                  text:'Si',
                  handler: () => {
                    const navigateExtras: NavigationExtras = 
                    {
                      state:{
                        data: this.AtencionIds
                      }
                    }
                    this.router.navigate(['./propiedad'], navigateExtras)
                }
               }
        ]
      });
      await alert.present();

    }
  }
}
