import { imagePrefix, fondos } from '../environments/default-images';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Atenciones } from '../interfaces/atenciones';
import { ApiService } from '../services/api.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastService } from '../services/toast.service';
import { finalize } from 'rxjs/operators';
import { printerIcons } from '../environments/printer-center';
import { TabsPage } from '../tabs/tabs.page';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  atenciones:Atenciones[];  imagenes:any=[];  public results = [];  public iconos = printerIcons;  dateAt:number= Date.now();
  idAtencion:any;  elColorEstado:any;  isKeyboard: boolean;  esClienteCompleto:boolean;  isLoading: boolean;  searchInterval:any;
  timer:number=0;  busca:string="";  laImg: any;  printUrl:any; isPrint:boolean=true;

  @ViewChild("searchCase", { static: true }) inputS;

  constructor(private router: Router,    private alert: AlertController,    private api: ApiService,    private platform:Platform,
    private so: ScreenOrientation,    private tostador: ToastService, private tabsator:TabsPage) {
      this.tostador.dismissToast();
      //this.searchInterval = setInterval(()=>{this.searchSequence()} ,  1000);
      this.idAtencion = localStorage.getItem('idAtencion');
      for (let index = 0; index < printerIcons.length; index++) {
        const element = printerIcons[index];
        
        console.log('opcion de impresion '+ element.descripcion)
      }
    }
  ngOnInit() {
    let origin = localStorage.getItem('origin');
    
    //alert(window.location.pathname+', '+origin)
    //alert(parseInt(localStorage.getItem('atencionesCount'))+1)
    this.isLoading  = true;
    let atencionesCounter = parseInt(localStorage.getItem('atencionesCount'));
    //alert(atencionesCounter)
    if (atencionesCounter == 0) {
//      this.router.navigate(['./tab1']);
      //window.location.reload();
      /*
      setTimeout(() => {
        this.tabsator.navigateTab1();  
      }, 3000);
      */
      
    }else{
      /*
      this.platform.ready().then(() => {
        this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
        
        setTimeout(() => {
          this.isLoading = false;

          if (origin == 'tab2') {
            this.isPrint = true;
            this.router.navigate(['./printer'])
          }else{
            this.isPrint = false;
            this.router.navigate(['./tabs/tab1'])
          }
          
        }, 500);
      });
      */
    }
    
    
  }

  searchSequence(){
    this.timer = this.getRandomInt(4);
    if(this.timer > 0){
      clearInterval(this.searchInterval);
      this.getAtenciones();
    }else{
      this.searchSequence();
    }
  }

  async getAtenciones(){
    this.isLoading = true;
    this.api.MisAtenciones(this.api.currentUser.ProveedorAgenteId).pipe( 
      finalize(async ()=>{console.log('fin')})
    ).subscribe(
      async (res) =>{
        console.log(res);
        this.results = res;
        this.atenciones= res;
        this.isLoading = false;
/*
        for (let index = 0; index < this.atenciones.length; index++) {
          const element = this.atenciones[index];
          

          
          this.api.obtenerFotoPorAtencion(element.IdAtencion, 1).pipe( 
            finalize(async ()=>{console.log('fin')})
          ).subscribe(
             async (res) =>{
              this.imagenes.push({
                id : element.IdAtencion,
                url : imagePrefix+res[0].FotoFirma
              })
              //console.log(element.IdAtencion, imagePrefix+res[0].FotoFirma)
            },
            async (res) => {
              //console.log(element.IdAtencion, fondos[Math.floor(Math.random() * fondos.length)])

              this.imagenes.push({
                id : element.IdAtencion,
                url : fondos[Math.floor(Math.random() * fondos.length)]
              })
            }
          )
            //console.log(index == (this.atenciones.length-1));
          if (index == (this.atenciones.length-1)) {
            let imagesContainer = document.getElementsByClassName('crop_img');
            
            setTimeout(() => {
              this.inputS.setFocus();
              $('#search-case').click();
              console.dir(this.imagenes);
              console.log(imagesContainer.length)
              for (let i = 0; i < imagesContainer.length ; i++){
                const elementImg = imagesContainer[i];
                let laImagen = this.imagenes[i].url;

                //this.results[i].Img = laImagen;
                //elementImg.setAttribute('src', laImagen);

                if (i == (this.imagenes.length-1)) {
                  this.isLoading = false;
                }
                
              }

              
            },this.timer);
          }
        }
        */
        
      },
      async (res) => {
        this.isLoading = false;
        console.log(res);
        const alert = await this.alert.create({
          header:'Help',
          message:res.Mensaje,
          buttons:['Ok']
          
        });
        await alert.present();
      }
    )
  }

  abreAtencion(atencionId, atencionEstadoColor){

    console.log(atencionId+', '+atencionEstadoColor);
    localStorage.setItem('elColorEstado', atencionEstadoColor);
    //localStorage.setItem('idAtencion', atencionId);
    console.log(atencionEstadoColor == "green")
    if (atencionEstadoColor == "green") {
      this.isLoading = true;
      this.api.DatosDeAtencion(atencionId).pipe(
        finalize(async () => {
          this.isLoading = false;
        })
      ).subscribe(
        async (res) => {
          console.log("Detalles de audiencia : " + res.length);
          console.dir(res);
          if (res.length > 0) {
            this.esClienteCompleto = true;
            localStorage.setItem('esCompleto', this.esClienteCompleto.toString());
          }

        },
        async (res) => {
          this.esClienteCompleto = false;
          localStorage.setItem('esCompleto', this.esClienteCompleto.toString());
        }
      );

      this.router.navigate(['./expediente'], { queryParams: { Id: atencionId } });
    } else {
      this.tostador.presentToastNoButtonsRed('Esta atención ya no puede editarse. Para mayor detalle, consulta a tu administrador de sistema.', 'top', 'search-case');
    }

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  handleInput(event){
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter((d) => d.Cliente.toLowerCase().indexOf(query) > -1);
  }

  imprimirPDF(tipo, indexPrinter){
    if (tipo == 1) {
      this.printUrl = printerIcons[indexPrinter].urlPreview+this.idAtencion;
    }else{
      this.printUrl = printerIcons[indexPrinter].urlPrint+this.idAtencion;
    }

    window.open(this.printUrl, '_blank');
  }

  goPrinters(){
    this.router.navigate(['./printer'])
  }

  /*
  getfondo(atencionId) {
    this.api.obtenerFotoPorAtencion(atencionId, 1).pipe( 
      finalize(async ()=>{console.log('fin')})
    ).subscribe(
       async (res) =>{
        console.log('Jue')
        console.dir(res[0].FotoFirma)
        this.laImg = imagePrefix+res[0].FotoFirma;
      },
      async (res) => {
        console.log(res.status)
        this.laImg = fondos[Math.floor(Math.random() * fondos.length)];
      }
    )

    return this.laImg;
    
  }
  */

}
