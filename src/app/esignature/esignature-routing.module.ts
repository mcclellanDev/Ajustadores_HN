import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsignaturePage } from './esignature.page';

const routes: Routes = [
  {
    path: '',
    component: EsignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsignaturePageRoutingModule {}
