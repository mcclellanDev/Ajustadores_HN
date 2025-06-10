import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientehnPage } from './clientehn.page';

const routes: Routes = [
  {
    path: '',
    component: ClientehnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientehnPageRoutingModule {}
