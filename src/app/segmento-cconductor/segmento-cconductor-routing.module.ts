import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoCconductorPage } from './segmento-cconductor.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoCconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoCconductorPageRoutingModule {}
