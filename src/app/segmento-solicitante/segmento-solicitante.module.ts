import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SegmentoSolicitantePageRoutingModule } from './segmento-solicitante-routing.module';

import { SegmentoSolicitantePage } from './segmento-solicitante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoSolicitantePageRoutingModule,
    SharedPipesModule
  ],
  declarations: [SegmentoSolicitantePage]
})
export class SegmentoSolicitantePageModule {}
