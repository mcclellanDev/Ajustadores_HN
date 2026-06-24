import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiniquitoSignaturePage } from './finiquito-signature.page';

const routes: Routes = [
  {
    path: '',
    component: FiniquitoSignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiniquitoSignaturePageRoutingModule {}
