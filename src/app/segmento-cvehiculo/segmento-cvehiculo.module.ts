import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoCvehiculoPageRoutingModule } from './segmento-cvehiculo-routing.module';

import { SegmentoCvehiculoPage } from './segmento-cvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoCvehiculoPageRoutingModule
  ],
  declarations: [SegmentoCvehiculoPage]
})
export class SegmentoCvehiculoPageModule {}
