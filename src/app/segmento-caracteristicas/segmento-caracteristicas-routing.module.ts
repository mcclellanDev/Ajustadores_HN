import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoCaracteristicasPage } from './segmento-caracteristicas.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoCaracteristicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoCaracteristicasPageRoutingModule {}
