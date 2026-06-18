import { Component, Input } from '@angular/core';
import { isDollarAttentionCurrency } from '../../utils/currency-display.util';

export type AttentionCurrencyBadgeVariant = 'toolbar' | 'segment' | 'detail';

@Component({
  selector: 'app-attention-currency-badge',
  templateUrl: './attention-currency-badge.component.html',
  styleUrls: ['./attention-currency-badge.component.scss']
})
export class AttentionCurrencyBadgeComponent {
  @Input() currency: unknown;
  @Input() variant: AttentionCurrencyBadgeVariant = 'toolbar';
  @Input() showLabel = false;

  get isDollar(): boolean {
    return isDollarAttentionCurrency(this.currency);
  }

  get iconName(): string {
    return this.isDollar ? 'logo-usd' : 'cash-outline';
  }
}
