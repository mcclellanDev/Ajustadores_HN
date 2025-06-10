import { Formulario } from './../interfaces/formulario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ImgFormularion } from '../interfaces/formulario';
import { ApiService } from '../services/api.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-fotografias',
  templateUrl: './fotografias.page.html',
  styleUrls: ['./fotografias.page.scss'],
})
export class FotografiasPage implements OnInit {
  foto:string;
  fotos: ImgFormularion[]=[];
  openFoto=false;
  formulario: Formulario= {};
  constructor(private router: Router,
    private loading: LoadingController,
    private alert: AlertController,
    private api: ApiService, 
    private toast: ToastController) { 
      const state = this.router.getCurrentNavigation().extras.state;
      console.log(state.data);
      if(state.data){
        this.formulario = state.data;
      }
    }

  ngOnInit() {
  }
  openImg(foto:string){
    this.foto = foto;
    this.openFoto = !this.openFoto;
  }
  async showMeaPic(){
    const img = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64
    });
    this.fotos.push({IdAtencion: this.formulario.RefAtencionId, Foto: img.base64String, RefTipoFotoId: 1})
    console.log(this.fotos)
  }
  deleteFoto(i:number ){
    this.fotos.splice(i,1);
  }
  async next(){
    const load = await this.loading.create();
    await  load.present();
    
    this.api.GuardarFotos(this.fotos).pipe( 
      finalize(async ()=>{
        await load.dismiss();
      })
    ).subscribe(
       async (res) =>{
          const alert = await this.alert.create({
            header:'HELP',
            message:'Se enviado el formulario con exito',
            buttons:['Ok']
          });
          await alert.present();
          this.router.navigate(['./tabs'])
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
}
