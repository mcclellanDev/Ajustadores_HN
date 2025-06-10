import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoReportePageRoutingModule } from './foto-reporte-routing.module';

import { FotoReportePage } from './foto-reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoReportePageRoutingModule
  ],
  declarations: [FotoReportePage]
})
export class FotoReportePageModule {}
