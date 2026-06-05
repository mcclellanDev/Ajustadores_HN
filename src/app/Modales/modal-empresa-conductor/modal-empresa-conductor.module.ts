import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEmpresaConductorPageRoutingModule } from './modal-empresa-conductor-routing.module';

import { ModalEmpresaConductorPage } from './modal-empresa-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEmpresaConductorPageRoutingModule
  ],
  declarations: [ModalEmpresaConductorPage]
})
export class ModalEmpresaConductorPageModule {}
