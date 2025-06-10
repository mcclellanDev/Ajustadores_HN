import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsignaturePageRoutingModule } from './esignature-routing.module';

import { EsignaturePage } from './esignature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsignaturePageRoutingModule
  ],
  declarations: [EsignaturePage]
})
export class EsignaturePageModule {}
