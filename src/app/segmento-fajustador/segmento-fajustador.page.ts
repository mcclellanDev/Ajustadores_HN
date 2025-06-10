import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmento-fajustador',
  templateUrl: './segmento-fajustador.page.html',
  styleUrls: ['./segmento-fajustador.page.scss'],
})
export class SegmentoFajustadorPage implements OnInit {

  idAtencion:any; miMoneda: string; moneda: any;
  constructor() { 
    this.idAtencion = localStorage.getItem('idAtencion');
    let dIdAtencion = parseInt(this.idAtencion);
    this.miMoneda = localStorage.getItem('miMoneda');
    
  }

  ngOnInit() {
  }

}
