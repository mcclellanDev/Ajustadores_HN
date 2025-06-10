import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerhnPageRoutingModule } from './tallerhn-routing.module';

import { TallerhnPage } from './tallerhn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerhnPageRoutingModule
  ],
  declarations: [TallerhnPage]
})
export class TallerhnPageModule {}
