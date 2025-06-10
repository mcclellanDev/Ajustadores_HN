import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndProcessPage } from './end-process.page';

const routes: Routes = [
  {
    path: '',
    component: EndProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndProcessPageRoutingModule {}
