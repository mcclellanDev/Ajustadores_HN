import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { ExpedientePageRoutingModule } from './expediente-routing.module';

import { ExpedientePage } from './expediente.page';
import { ExpedienteInfoModalComponent } from './expediente-info-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpedientePageRoutingModule,
    SharedPipesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ExpedientePage, ExpedienteInfoModalComponent]
})
export class ExpedientePageModule {}
