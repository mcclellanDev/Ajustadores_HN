import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiniquitoPageRoutingModule } from './finiquito-routing.module';

import { FiniquitoPage } from './finiquito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiniquitoPageRoutingModule
  ],
  declarations: [FiniquitoPage]
})
export class FiniquitoPageModule {}
