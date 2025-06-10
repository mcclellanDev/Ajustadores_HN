import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerceroPage } from './tercero.page';

const routes: Routes = [
  {
    path: '',
    component: TerceroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerceroPageRoutingModule {}
