import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoVehiculoPage } from './segmento-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoVehiculoPageRoutingModule {}
