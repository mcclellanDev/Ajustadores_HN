import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdeudaPageRoutingModule } from './adeuda-routing.module';

import { AdeudaPage } from './adeuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdeudaPageRoutingModule
  ],
  declarations: [AdeudaPage]
})
export class AdeudaPageModule {}
