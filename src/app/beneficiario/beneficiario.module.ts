import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { BeneficiarioPageRoutingModule } from './beneficiario-routing.module';

import { BeneficiarioPage } from './beneficiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiarioPageRoutingModule,
    SharedPipesModule
  ],
  declarations: [BeneficiarioPage]
})
export class BeneficiarioPageModule {}
