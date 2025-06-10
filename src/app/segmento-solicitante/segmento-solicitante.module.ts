import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentoSolicitantePageRoutingModule } from './segmento-solicitante-routing.module';

import { SegmentoSolicitantePage } from './segmento-solicitante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoSolicitantePageRoutingModule
  ],
  declarations: [SegmentoSolicitantePage]
})
export class SegmentoSolicitantePageModule {}
