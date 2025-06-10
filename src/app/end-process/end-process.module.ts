import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndProcessPageRoutingModule } from './end-process-routing.module';

import { EndProcessPage } from './end-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndProcessPageRoutingModule
  ],
  declarations: [EndProcessPage]
})
export class EndProcessPageModule {}
