import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoCinformacionPageRoutingModule } from './segmento-cinformacion-routing.module';

import { SegmentoCinformacionPage } from './segmento-cinformacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoCinformacionPageRoutingModule
  ],
  declarations: [SegmentoCinformacionPage]
})
export class SegmentoCinformacionPageModule {}
