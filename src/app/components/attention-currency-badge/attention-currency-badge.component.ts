import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  isDollarAttentionCurrency,
  readStoredAttentionCurrency,
  watchAttentionCurrency
} from '../../utils/currency-display.util';

export type AttentionCurrencyBadgeVariant = 'toolbar' | 'segment' | 'detail';

@Component({
  selector: 'app-attention-currency-badge',
  templateUrl: './attention-currency-badge.component.html',
  styleUrls: ['./attention-currency-badge.component.scss']
})
export class AttentionCurrencyBadgeComponent implements OnInit, OnDestroy {
  @Input() currency: unknown;
  @Input() variant: AttentionCurrencyBadgeVariant = 'toolbar';
  @Input() showLabel = false;

  private liveCurrency: unknown = null;
  private currencySub: Subscription | null = null;
  private destroyed = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.liveCurrency = readStoredAttentionCurrency();
    this.currencySub = watchAttentionCurrency().subscribe((code) => {
      this.liveCurrency = code;
      if (!this.destroyed) {
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.currencySub?.unsubscribe();
  }

  get displayedCurrency(): unknown {
    return this.liveCurrency ?? this.currency;
  }

  get isDollar(): boolean {
    return isDollarAttentionCurrency(this.displayedCurrency);
  }

  get iconName(): string {
    return this.isDollar ? 'logo-usd' : 'cash-outline';
  }
}
