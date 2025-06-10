import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoVehiculoPageRoutingModule } from './segmento-vehiculo-routing.module';

import { SegmentoVehiculoPage } from './segmento-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoVehiculoPageRoutingModule
  ],
  declarations: [SegmentoVehiculoPage]
})
export class SegmentoVehiculoPageModule {}
