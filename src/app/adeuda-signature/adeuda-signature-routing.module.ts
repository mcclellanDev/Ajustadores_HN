import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdeudaSignaturePage } from './adeuda-signature.page';

const routes: Routes = [{ path: '', component: AdeudaSignaturePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdeudaSignaturePageRoutingModule {}
