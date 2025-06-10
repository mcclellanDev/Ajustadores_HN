import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoSegmentRequestAjuPageRoutingModule } from './segmento-segment-request-aju-routing.module';

import { SegmentoSegmentRequestAjuPage } from './segmento-segment-request-aju.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoSegmentRequestAjuPageRoutingModule
  ],
  declarations: [SegmentoSegmentRequestAjuPage]
})
export class SegmentoSegmentRequestAjuPageModule {}
