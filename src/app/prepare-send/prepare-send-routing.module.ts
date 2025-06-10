import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepareSendPage } from './prepare-send.page';

const routes: Routes = [
  {
    path: '',
    component: PrepareSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepareSendPageRoutingModule {}
