import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarArchivosPage } from './cargar-archivos.page';

const routes: Routes = [
  {
    path: '',
    component: CargarArchivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarArchivosPageRoutingModule {}
