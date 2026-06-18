import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AttentionCurrencyBadgeComponent } from '../components/attention-currency-badge/attention-currency-badge.component';
import { InterAutoRegistrationCertificateComponent } from '../components/inter-auto-registration-certificate/inter-auto-registration-certificate.component';
import { AttentionCurrencyPipe } from './attention-currency.pipe';

@NgModule({
  declarations: [
    AttentionCurrencyPipe,
    AttentionCurrencyBadgeComponent,
    InterAutoRegistrationCertificateComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    AttentionCurrencyPipe,
    AttentionCurrencyBadgeComponent,
    InterAutoRegistrationCertificateComponent
  ]
})
export class SharedPipesModule {}
