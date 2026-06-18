import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SegmentoVehiculoPageRoutingModule } from './segmento-vehiculo-routing.module';

import { SegmentoVehiculoPage } from './segmento-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoVehiculoPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [SegmentoVehiculoPage]
})
export class SegmentoVehiculoPageModule {}
