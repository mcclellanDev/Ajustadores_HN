import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitalCorePageRoutingModule } from './vital-core-routing.module';

import { VitalCorePage } from './vital-core.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitalCorePageRoutingModule
  ],
  declarations: [VitalCorePage]
})
export class VitalCorePageModule {}
