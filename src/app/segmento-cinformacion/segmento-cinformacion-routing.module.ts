import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoCinformacionPage } from './segmento-cinformacion.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoCinformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoCinformacionPageRoutingModule {}
