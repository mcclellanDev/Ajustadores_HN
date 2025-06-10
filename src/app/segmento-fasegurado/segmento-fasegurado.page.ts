import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { emptySignatureWhite, imagePrefix } from '../environments/default-images';
import { ApiService } from '../services/api.service';
import { ToastService } from '../services/toast.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-segmento-fasegurado',
  templateUrl: './segmento-fasegurado.page.html',
  styleUrls: ['./segmento-fasegurado.page.scss'],
})
export class SegmentoFaseguradoPage implements OnInit {

  idAtencion:any; miMoneda: string; moneda: any; segmentoTitulo: string;  imageHeight: number;  isLoading: boolean;
  firmaPrecargada:any;  isSignature: boolean; aseguradoNombre:any; elExpediente:any; firmaCliente:any;
  constructor(private api: ApiService, private alert: AlertController, public toaster:ToastService) { 
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
    this.segmentoTitulo = localStorage.getItem('segmentoTitulo');
    this.firmaPrecargada = localStorage.getItem("dSignatureAsegurado");
    this.imageHeight = 200;

    this.api.Expediente(dIdAtencion).pipe( 
      finalize(async ()=>{
        console.log('So far so good as you should know my friend what we can do....')
        //this.isLoading = false;
      })
    ).subscribe(
        async (res) => {
          this.elExpediente = res;
          this.aseguradoNombre = this.elExpediente[0].Cliente;
        }
    )
  }

  ngOnInit() {
    setTimeout(() => {
      
    }, 3000);
  }

  firmar(){
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
            //alert(this.firmaPrecargada)
            this.isSignature = true;
          }

        }
      },
      async (res) => {
        this.firmaPrecargada = emptySignatureWhite;
        //alert(this.firmaPrecargada)
        localStorage.setItem("dSignatureAsegurado", this.firmaPrecargada);
        this.isSignature = false;
      }
    );

  }

}
