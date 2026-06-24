import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Atenciones } from '../interfaces/atenciones';
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
  openingIndex: number | null = null;
  constructor(private router: Router) { 
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

  imprimirPDF(indexPrinter: number){
    const isTestEnvironment = (this.urlApi || '').includes('testportal');
    const documents = isTestEnvironment ? printerIcons_test : printerIcons;
    const selectedDocument = documents[indexPrinter];

    if (!selectedDocument) {
      return;
    }

    this.openingIndex = indexPrinter;
    this.printUrl = selectedDocument.urlPreview + printPrefix + this.idAtencion;
    window.open(this.printUrl, '_blank');

    setTimeout(() => {
      this.openingIndex = null;
    }, 900);
  }

  getDocumentDescription(description: string): string {
    const normalized = description.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    if (normalized.includes('fotograf')) {
      return 'Evidencia visual registrada durante la atención.';
    }
    if (normalized.includes('cotizacion')) {
      return 'Detalle de valoración y costos del taller seleccionado.';
    }
    if (normalized.includes('finiquito')) {
      return 'Constancia de entrega y aceptación del pago.';
    }
    if (normalized.includes('reclamo')) {
      return 'Información consolidada del reclamo del asegurado.';
    }
    if (normalized.includes('inspeccion')) {
      return 'Resultado documentado de la inspección del ajustador.';
    }
    if (normalized.includes('cobertura')) {
      return 'Resumen del análisis y cierre de las coberturas.';
    }
    if (normalized.includes('deuda') || normalized.includes('responsabilidad')) {
      return 'Acuerdo formal generado durante la gestión del caso.';
    }else{
      return 'Documento generado para el expediente de la atención.';
    }
  }

  goPrinters(){
    this.router.navigate(['./printer'])
  }

  goBack(){
    this.router.navigate(['./expediente'], {
      queryParams: { Id: Number(this.idAtencion), Source: 1 }
    });
  }

}
