import { Component, OnInit } from '@angular/core';
import { logoFicohsa } from '../environments/default-images';

@Component({
  selector: 'app-foto-reporte',
  templateUrl: './foto-reporte.page.html',
  styleUrls: ['./foto-reporte.page.scss'],
})
export class FotoReportePage implements OnInit {
  fsLogo:any;
  constructor() {
    this.fsLogo = logoFicohsa
   }

  ngOnInit() {
  }

}
