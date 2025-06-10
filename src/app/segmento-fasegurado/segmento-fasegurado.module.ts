import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoFaseguradoPageRoutingModule } from './segmento-fasegurado-routing.module';

import { SegmentoFaseguradoPage } from './segmento-fasegurado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoFaseguradoPageRoutingModule
  ],
  declarations: [SegmentoFaseguradoPage]
})
export class SegmentoFaseguradoPageModule {}
