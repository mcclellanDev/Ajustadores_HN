import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FotoReportePage } from './foto-reporte.page';

const routes: Routes = [
  {
    path: '',
    component: FotoReportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FotoReportePageRoutingModule {}
