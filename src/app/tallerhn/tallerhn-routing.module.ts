import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerhnPage } from './tallerhn.page';

const routes: Routes = [
  {
    path: '',
    component: TallerhnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerhnPageRoutingModule {}
