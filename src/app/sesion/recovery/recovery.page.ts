import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  @ViewChild('otp1') otp1?: ElementRef<HTMLInputElement>;
  @ViewChild('otp2') otp2?: ElementRef<HTMLInputElement>;
  @ViewChild('otp3') otp3?: ElementRef<HTMLInputElement>;
  @ViewChild('otp4') otp4?: ElementRef<HTMLInputElement>;

  oTP = {
    first: '',
    second: '',
    third: '',
    forth: ''
  };

  isOtp = false;
  isEmailValid = true;
  load = false;
  fromApp = false;

  private readonly regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  item = {
    email: '',
    userid: ''
  };

  constructor(
    private router: Router,
    private api: ApiService,
    private alert: AlertController,
    private loading: LoadingController,
    private toaster: ToastService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { email?: string; fromApp?: boolean } | undefined;

    if (state?.email) {
      this.item.email = state.email;
    }

    if (state?.fromApp) {
      this.fromApp = true;
    } else if (history.state?.email) {
      this.item.email = history.state.email;
      this.fromApp = !!history.state.fromApp;
    }

    if (this.fromApp && !this.item.email) {
      this.item.email = localStorage.getItem('correoActual') || this.api.currentUser?.Correo || '';
    }
  }

  onSendFunc(): void {
    if (!this.validate()) {
      this.toaster.presentToastNoButtonsRed('Ingresa un correo válido.', 'top', 'login');
      return;
    }

    this.requestOtp(false);
  }

  resendOtp(): void {
    if (!this.item.email) {
      return;
    }

    this.requestOtp(true);
  }

  private requestOtp(isResend: boolean) {
    this.load = true;

    this.api.recuperarContrasena(this.item.email).pipe(
      finalize(() => {
        this.load = false;
      })
    ).subscribe(
      async () => {
        this.isOtp = true;
        this.clearOtp();
        this.toaster.presentToastNoButtons(
          isResend ? 'Código OTP reenviado a tu correo.' : 'Código OTP enviado a tu correo.',
          'top',
          'login'
        );

        setTimeout(() => {
          this.focusOtpIndex(0);
        }, 250);
      },
      async (error) => {
        const alert = await this.alert.create({
          cssClass: 'login-menu-alert',
          header: 'No se pudo enviar el código',
          message: error?.error?.Message || 'Verifica tu correo e inténtalo de nuevo.',
          buttons: [{
            text: 'Entendido',
            cssClass: 'logout-menu-button logout-menu-accept'
          }]
        });
        await alert.present();
      }
    );
  }

  onOtpInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const digitsOnly = input.value.replace(/\D/g, '');

    if (digitsOnly.length > 1) {
      this.fillOtpFromString(digitsOnly);
      return;
    }

    const digit = digitsOnly.slice(-1);
    input.value = digit;
    this.setOtpDigit(index, digit);

    if (digit && index < 3) {
      this.focusOtpIndex(index + 1);
    }

    if (this.isOtpComplete()) {
      void this.validateOtp();
    }
  }

  onOtpKeydown(event: KeyboardEvent, index: number) {
    if (event.key !== 'Backspace') {
      return;
    }

    const input = event.target as HTMLInputElement;
    if (!input.value && index > 0) {
      event.preventDefault();
      this.setOtpDigit(index - 1, '');
      const previous = this.getOtpElements()[index - 1];
      if (previous) {
        previous.value = '';
        previous.focus();
      }
    }
  }

  onOtpPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text') || '';
    this.fillOtpFromString(pasted);
  }

  private getOtpElements(): HTMLInputElement[] {
    return [this.otp1, this.otp2, this.otp3, this.otp4]
      .map((ref) => ref?.nativeElement)
      .filter((element): element is HTMLInputElement => !!element);
  }

  private focusOtpIndex(index: number) {
    const target = this.getOtpElements()[index];
    if (!target) {
      return;
    }

    target.focus();
    target.select();
  }

  private fillOtpFromString(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 4).split('');
    const keys: Array<keyof typeof this.oTP> = ['first', 'second', 'third', 'forth'];
    const elements = this.getOtpElements();

    keys.forEach((key, index) => {
      const digit = digits[index] || '';
      this.oTP[key] = digit;
      if (elements[index]) {
        elements[index].value = digit;
      }
    });

    const nextIndex = Math.min(digits.length, 3);
    this.focusOtpIndex(nextIndex);

    if (this.isOtpComplete()) {
      void this.validateOtp();
    }
  }

  private setOtpDigit(index: number, value: string) {
    const keys: Array<keyof typeof this.oTP> = ['first', 'second', 'third', 'forth'];
    const key = keys[index];
    if (key) {
      this.oTP[key] = value;
    }
  }

  isOtpComplete(): boolean {
    return !!(this.oTP.first && this.oTP.second && this.oTP.third && this.oTP.forth);
  }

  private getOtpValue(): string {
    return `${this.oTP.first}${this.oTP.second}${this.oTP.third}${this.oTP.forth}`;
  }

  private clearOtp() {
    this.oTP = { first: '', second: '', third: '', forth: '' };
    this.getOtpElements().forEach((element) => {
      element.value = '';
    });
  }

  async validateOtp() {
    if (!this.isOtpComplete()) {
      return;
    }

    const loading = await this.loading.create({
      message: 'Validando código...',
      backdropDismiss: false
    });
    await loading.present();

    const data = {
      clave: this.getOtpValue(),
      user: this.item.email
    };

    this.api.validarOtp(data).pipe(
      finalize(() => {
        void loading.dismiss();
      })
    ).subscribe(
      () => {
        const nav: NavigationExtras = {
          state: {
            email: this.item.email,
            fromApp: this.fromApp
          }
        };
        this.router.navigate(['./new-password'], nav);
      },
      async (error) => {
        this.clearOtp();
        this.focusOtpIndex(0);

        const alert = await this.alert.create({
          cssClass: 'login-menu-alert',
          header: 'Código OTP inválido',
          message: error?.error?.Message || 'El código ingresado no es válido. Intenta de nuevo.',
          buttons: [{
            text: 'Entendido',
            cssClass: 'logout-menu-button logout-menu-accept'
          }]
        });
        await alert.present();
      }
    );
  }

  validate(): boolean {
    this.isEmailValid = this.regex.test(this.item.email);
    return this.isEmailValid;
  }
}
