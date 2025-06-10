import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerceroPageRoutingModule } from './tercero-routing.module';

import { TerceroPage } from './tercero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerceroPageRoutingModule
  ],
  declarations: [TerceroPage]
})
export class TerceroPageModule {}
