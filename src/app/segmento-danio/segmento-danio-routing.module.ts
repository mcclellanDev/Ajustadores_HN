import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoDanioPage } from './segmento-danio.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoDanioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoDanioPageRoutingModule {}
