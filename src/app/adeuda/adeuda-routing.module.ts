import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdeudaPage } from './adeuda.page';

const routes: Routes = [
  {
    path: '',
    component: AdeudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdeudaPageRoutingModule {}
