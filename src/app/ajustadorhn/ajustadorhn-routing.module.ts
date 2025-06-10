import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustadorhnPage } from './ajustadorhn.page';

const routes: Routes = [
  {
    path: '',
    component: AjustadorhnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustadorhnPageRoutingModule {}
