import { Router } from '@angular/router';
import { LinkcheckService } from '../services/linkcheck.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Atenciones } from '../interfaces/atenciones';
import { NavController } from '@ionic/angular';
import { printerIcons, printerIcons_test, printPrefix } from '../environments/printer-center';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.page.html',
  styleUrls: ['./printer.page.scss'],
})

export class PrinterPage implements OnInit {
  isLoading: boolean;  results:any=[];  idAtencion:any;  atenciones:Atenciones[];  imagenes:any=[];
  public iconos = printerIcons;  dateAt:number= Date.now();  elColorEstado:any;  isKeyboard: boolean;
  esClienteCompleto:boolean;  searchInterval:any;  timer:number=0;  busca:string="";  laImg: any;  printUrl:any;
  urlApi:any;
  constructor(private router: Router, private navController:NavController, private linkCheck:LinkcheckService) { 
    this.idAtencion = localStorage.getItem('idAtencion');
    this.urlApi = localStorage.getItem('apiUrl');
    
   console.log('Hola printer')
   console.dir(this.iconos)

/*
      for (let index = 0; index < printerIcons.length; index++) {
        const element = printerIcons[index];
        
        console.log('opcion de impresion '+ element.descripcion)

        if (index == (printerIcons.length-1)) {
          console.log('Si llegamos')
        }
      }
      */
  }

  ngOnInit() {
  }

  handleInput(event){
    const query = event.target.value.toLowerCase();
    this.results = this.atenciones.filter((d) => d.Cliente.toLowerCase().indexOf(query) > -1);
  }

  imprimirPDF(tipo, indexPrinter){
    let environmentValidate = this.urlApi.indexOf('testportal');
    if (environmentValidate != -1) {
      this.printUrl = printerIcons_test[indexPrinter].urlPreview+printPrefix+this.idAtencion;
    }else{
      this.printUrl = printerIcons[indexPrinter].urlPreview+printPrefix+this.idAtencion;
    }
    
    setTimeout(() => {
      window.open(this.printUrl, '_blank');  
    }, 1000);
    
    
  }

  goPrinters(){
    this.router.navigate(['./printer'])
  }

  goBack(){
    window.location.reload();
//    this.navController.back();
  }

}
