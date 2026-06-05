import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGuardarPage } from './modal-guardar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGuardarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGuardarPageRoutingModule {}
