import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SegmentoCaracteristicasPageRoutingModule } from './segmento-caracteristicas-routing.module';

import { SegmentoCaracteristicasPage } from './segmento-caracteristicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoCaracteristicasPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [SegmentoCaracteristicasPage]
})
export class SegmentoCaracteristicasPageModule {}
