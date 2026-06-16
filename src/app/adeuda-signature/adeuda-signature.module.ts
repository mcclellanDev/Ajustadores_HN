import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdeudaSignaturePageRoutingModule } from './adeuda-signature-routing.module';
import { AdeudaSignaturePage } from './adeuda-signature.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AdeudaSignaturePageRoutingModule],
  declarations: [AdeudaSignaturePage]
})
export class AdeudaSignaturePageModule {}
