import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoCaseguradoPage } from './segmento-casegurado.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoCaseguradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoCaseguradoPageRoutingModule {}
