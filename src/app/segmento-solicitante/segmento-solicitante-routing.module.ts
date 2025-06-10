import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoSolicitantePage } from './segmento-solicitante.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoSolicitantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoSolicitantePageRoutingModule {}
