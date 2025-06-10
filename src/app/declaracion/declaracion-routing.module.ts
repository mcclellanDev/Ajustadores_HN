import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclaracionPage } from './declaracion.page';

const routes: Routes = [
  {
    path: '',
    component: DeclaracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeclaracionPageRoutingModule {}
