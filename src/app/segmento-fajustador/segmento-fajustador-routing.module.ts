import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoFajustadorPage } from './segmento-fajustador.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoFajustadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoFajustadorPageRoutingModule {}
