import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SegmentoFajustadorPageRoutingModule } from './segmento-fajustador-routing.module';

import { SegmentoFajustadorPage } from './segmento-fajustador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoFajustadorPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [SegmentoFajustadorPage]
})
export class SegmentoFajustadorPageModule {}
