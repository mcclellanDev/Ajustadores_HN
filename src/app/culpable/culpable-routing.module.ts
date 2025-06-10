import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulpablePage } from './culpable.page';

const routes: Routes = [
  {
    path: '',
    component: CulpablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulpablePageRoutingModule {}
