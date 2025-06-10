import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoCconductorPageRoutingModule } from './segmento-cconductor-routing.module';

import { SegmentoCconductorPage } from './segmento-cconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoCconductorPageRoutingModule
  ],
  declarations: [SegmentoCconductorPage]
})
export class SegmentoCconductorPageModule {}
