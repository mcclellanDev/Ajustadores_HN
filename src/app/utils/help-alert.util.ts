import { AlertController } from '@ionic/angular';
import { describeHttpFailure } from './http-network.util';

export function isTechnicalClientError(error: any): boolean {
  if (!error) {
    return false;
  }
  if (error.name === 'TypeError') {
    return true;
  }
  const message = `${error?.message || error?.error?.message || error?.error?.Message || ''}`.toLowerCase();
  return message.includes('is not iterable')
    || message.includes('is not a function')
    || message.includes('promise.all');
}

export function resolveVisibleAlertMessage(error: any, fallback = ''): string {
  if (isTechnicalClientError(error)) {
    return '';
  }
  const message = describeHttpFailure(error, fallback || '');
  return typeof message === 'string' ? message.trim() : '';
}

export async function presentHelpAlert(
  alertCtrl: AlertController,
  error: any,
  fallback = ''
): Promise<void> {
  const message = resolveVisibleAlertMessage(error, fallback);
  if (!message) {
    console.error('HELP alert suppressed', error);
    return;
  }
  const alert = await alertCtrl.create({
    header: 'HELP',
    message,
    buttons: ['Ok']
  });
  await alert.present();
}
