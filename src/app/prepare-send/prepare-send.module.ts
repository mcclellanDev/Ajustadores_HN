import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { PrepareSendPageRoutingModule } from './prepare-send-routing.module';

import { PrepareSendPage } from './prepare-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepareSendPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [PrepareSendPage]
})
export class PrepareSendPageModule {}
