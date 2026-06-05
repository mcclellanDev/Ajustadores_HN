import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGuardarPageRoutingModule } from './modal-guardar-routing.module';

import { ModalGuardarPage } from './modal-guardar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGuardarPageRoutingModule
  ],
  declarations: [ModalGuardarPage]
})
export class ModalGuardarPageModule {}
