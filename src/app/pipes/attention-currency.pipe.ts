import { Pipe, PipeTransform } from '@angular/core';
import {
  AttentionCurrencyFormat,
  formatAttentionCurrency
} from '../utils/currency-display.util';

@Pipe({
  name: 'attentionCurrency'
})
export class AttentionCurrencyPipe implements PipeTransform {
  transform(value: unknown, format: AttentionCurrencyFormat = 'label'): string {
    return formatAttentionCurrency(value, format);
  }
}
