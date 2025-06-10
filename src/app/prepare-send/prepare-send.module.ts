import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepareSendPageRoutingModule } from './prepare-send-routing.module';

import { PrepareSendPage } from './prepare-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepareSendPageRoutingModule
  ],
  declarations: [PrepareSendPage]
})
export class PrepareSendPageModule {}
