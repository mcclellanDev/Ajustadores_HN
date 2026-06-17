import { ApiService } from './../../services/api.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  isConfrimValid = true;
  isPasswordValid = true;
  isLoading = false;
  isPasswordVisible = false;
  isConfirmVisible = false;
  fromApp = false;
  passwordMatchState: 'idle' | 'mismatch' | 'match' = 'idle';

  item = {
    password: '',
    confrim: '',
    user: ''
  };

  constructor(
    private router: Router,
    private loading: LoadingController,
    private api: ApiService,
    private alert: AlertController,
    private toaster: ToastService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { email?: string; fromApp?: boolean } | undefined;

    if (state?.email) {
      this.item.user = state.email;
    }

    if (state?.fromApp) {
      this.fromApp = true;
    } else if (history.state?.email) {
      this.item.user = history.state.email;
      this.fromApp = !!history.state.fromApp;
    }

    if (!this.item.user) {
      void this.promptMissingSession();
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmVisibility() {
    this.isConfirmVisible = !this.isConfirmVisible;
  }

  onPasswordFieldsChange() {
    this.updatePasswordMatchState();
  }

  get canSavePassword(): boolean {
    return !!this.item.password
      && !!this.item.confrim
      && this.passwordMatchState === 'match';
  }

  private updatePasswordMatchState() {
    if (!this.item.confrim) {
      this.passwordMatchState = 'idle';
      return;
    }

    this.passwordMatchState = this.item.password === this.item.confrim
      ? 'match'
      : 'mismatch';
  }

  async onDoneFunc(): Promise<void> {
    if (!this.validate()) {
      return;
    }

    this.isLoading = true;
    const loading = await this.loading.create({
      message: 'Actualizando contraseña...',
      backdropDismiss: false
    });
    await loading.present();

    const data = {
      password: this.item.password,
      user: this.item.user
    };

    this.api.cambiarPassword(data).pipe(
      finalize(async () => {
        this.isLoading = false;
        await loading.dismiss();
      })
    ).subscribe(
      async () => {
        await this.api.persistPasswordChange(this.item.user, this.item.password, {
          fromActiveSession: this.fromApp
        });

        this.toaster.presentToastNoButtons('Contraseña actualizada correctamente.', 'top', 'login');

        if (this.fromApp) {
          this.router.navigate(['/tabs/tab3']);
          return;
        }

        this.router.navigate(['/login']);
      },
      async (error) => {
        const alert = await this.alert.create({
          cssClass: 'login-menu-alert',
          header: 'No se pudo actualizar',
          message: error?.error?.Message || 'Intenta nuevamente en unos minutos.',
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
    this.isConfrimValid = true;
    this.isPasswordValid = true;
    this.updatePasswordMatchState();

    if (!this.item.password) {
      this.isPasswordValid = false;
    }

    if (!this.item.confrim) {
      this.isConfrimValid = false;
    }

    if (this.passwordMatchState !== 'match') {
      this.isConfrimValid = false;
    }

    return this.isPasswordValid && this.isConfrimValid;
  }

  private async promptMissingSession() {
    const alert = await this.alert.create({
      cssClass: 'login-menu-alert',
      header: 'Sesión de recuperación',
      message: 'No encontramos el correo validado. Vuelve a iniciar el proceso de recuperación.',
      buttons: [{
        text: 'Entendido',
        cssClass: 'logout-menu-button logout-menu-accept',
        handler: () => {
          this.router.navigate(['/recovery']);
        }
      }]
    });
    await alert.present();
  }
}
