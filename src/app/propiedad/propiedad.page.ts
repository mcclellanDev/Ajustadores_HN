import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { propiedadPrivada } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.page.html',
  styleUrls: ['./propiedad.page.scss'],
})
export class PropiedadPage implements OnInit {

  propiedadPrivada: propiedadPrivada={};
  propiedadPrivadaList:propiedadPrivada[]=[];
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
    this.propiedadPrivada.RefAjustadorAudienciaId= this.AtencionIds.RefAjustadorAudienciaId;
    this.propiedadPrivada.RefAjustadorId = this.api.currentUser.ProveedorAgenteId;
    this.propiedadPrivadaList.push(this.propiedadPrivada);
    console.log(this.propiedadPrivadaList)
    this.propiedadPrivada={};
  }
  editPersona(i){
    this.propiedadPrivada = this.propiedadPrivadaList[i];
    this.index= i;
    this.editar = true;
    this.guardar = false;
    this.showPersona=true;
  }
  updatePersona(){
    this.propiedadPrivadaList[this.index]= this.propiedadPrivada;
    this.propiedadPrivada={};
    this.editar = false;
    this.guardar = true;
    this.showPersona=false;
  }
  deletePersona(i:number){
    this.propiedadPrivadaList.splice(i,1);
  }
  personaModal() {
    this.showPersona = !this.showPersona;
  }
  async next(){
    if(this.propiedadPrivadaList.length > 0){
      const load = await this.loading.create();
      await  load.present();
    
      this.api.GuardarPropiedadTercero(this.propiedadPrivadaList).pipe( 
      finalize(async ()=>{
        await load.dismiss();
        })
        ).subscribe(
        (res) =>{
            const navigateExtras: NavigationExtras = 
            {
              state:{
                data: this.AtencionIds
              }
            }
            this.router.navigate(['./fotografias'], navigateExtras)
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
        message:'No agrego propiedad dañiada a terceros ¿Desea continuar?',
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
                    this.router.navigate(['./fotografias'], navigateExtras)
                }
               }
        ]
      });
      await alert.present();

    }
  }

}
