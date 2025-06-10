import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotoshnPageRoutingModule } from './fotoshn-routing.module';

import { FotoshnPage } from './fotoshn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotoshnPageRoutingModule
  ],
  declarations: [FotoshnPage]
})
export class FotoshnPageModule {}
