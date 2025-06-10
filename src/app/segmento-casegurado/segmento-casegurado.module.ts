import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoCaseguradoPageRoutingModule } from './segmento-casegurado-routing.module';

import { SegmentoCaseguradoPage } from './segmento-casegurado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoCaseguradoPageRoutingModule
  ],
  declarations: [SegmentoCaseguradoPage]
})
export class SegmentoCaseguradoPageModule {}
