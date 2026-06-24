import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FiniquitoSignaturePageRoutingModule } from './finiquito-signature-routing.module';
import { FiniquitoSignaturePage } from './finiquito-signature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiniquitoSignaturePageRoutingModule
  ],
  declarations: [FiniquitoSignaturePage]
})
export class FiniquitoSignaturePageModule {}
