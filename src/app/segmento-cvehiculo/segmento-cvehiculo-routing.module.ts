import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentoCvehiculoPage } from './segmento-cvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentoCvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentoCvehiculoPageRoutingModule {}
