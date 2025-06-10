import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepareAudiencePage } from './prepare-audience.page';

const routes: Routes = [
  {
    path: '',
    component: PrepareAudiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepareAudiencePageRoutingModule {}
