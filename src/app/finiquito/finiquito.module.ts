import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { FiniquitoPageRoutingModule } from './finiquito-routing.module';

import { FiniquitoPage } from './finiquito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiniquitoPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [FiniquitoPage]
})
export class FiniquitoPageModule {}
