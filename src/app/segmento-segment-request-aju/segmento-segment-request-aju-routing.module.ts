import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoSegmentRequestAjuPage } from './segmento-segment-request-aju.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoSegmentRequestAjuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoSegmentRequestAjuPageRoutingModule {}
