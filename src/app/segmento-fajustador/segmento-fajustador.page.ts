import { Component, OnInit } from '@angular/core';
import { readStoredAttentionCurrency } from '../utils/currency-display.util';

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
    this.miMoneda = readStoredAttentionCurrency();
    
  }

  ngOnInit() {
  }

}
