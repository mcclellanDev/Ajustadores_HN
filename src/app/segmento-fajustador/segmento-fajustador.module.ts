import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoFajustadorPageRoutingModule } from './segmento-fajustador-routing.module';

import { SegmentoFajustadorPage } from './segmento-fajustador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoFajustadorPageRoutingModule
  ],
  declarations: [SegmentoFajustadorPage]
})
export class SegmentoFajustadorPageModule {}
