import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoFaseguradoPage } from './segmento-fasegurado.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoFaseguradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoFaseguradoPageRoutingModule {}
