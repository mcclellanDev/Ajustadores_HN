import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { logoFicohsa } from '../environments/default-images';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-adeuda-signature',
  templateUrl: './adeuda-signature.page.html',
  styleUrls: ['./adeuda-signature.page.scss']
})
export class AdeudaSignaturePage implements AfterViewInit {
  @ViewChild('signatureCanvas', { static: false }) signatureCanvas: ElementRef<HTMLCanvasElement>;

  signaturePad: SignaturePad;
  idAtencion = localStorage.getItem('idAtencion');
  debtorName = this.getDebtorName();
  fsLogo = logoFicohsa;

  constructor(
    private platform: Platform,
    private router: Router,
    private toaster: ToastService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => this.initializeSignaturePad());
  }

  ionViewDidEnter() {
    if (!this.signaturePad) {
      setTimeout(() => this.initializeSignaturePad());
    }
  }

  private getDebtorName(): string {
    const agreement = JSON.parse(localStorage.getItem('deuda') || '{}') || {};
    return agreement.NombreDeudor || 'Persona responsable';
  }

  private initializeSignaturePad() {
    const canvas = this.signatureCanvas?.nativeElement;
    if (!canvas || this.signaturePad) {
      return;
    }

    const wrapper = canvas.parentElement;
    const width = wrapper?.clientWidth || Math.max(this.platform.width() - 24, 280);
    const height = wrapper?.clientHeight || Math.max(this.platform.height() - 250, 260);
    const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.getContext('2d')?.scale(pixelRatio, pixelRatio);

    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: '#ffffff',
      minWidth: 1,
      maxWidth: 2,
      dotSize: 3
    });

    const savedSignature = localStorage.getItem(this.signatureStorageKey);
    if (savedSignature) {
      this.signaturePad.fromDataURL(savedSignature, { ratio: pixelRatio });
    } else {
      this.signaturePad.clear();
    }
  }

  get signatureStorageKey(): string {
    return `adeudaSignature-${this.idAtencion}`;
  }

  clear() {
    this.signaturePad?.clear();
  }

  save() {
    if (!this.signaturePad || this.signaturePad.isEmpty()) {
      this.toaster.presentToastNoButtonsRed('La persona responsable debe firmar antes de continuar.', 'top', 'firma');
      return;
    }

    localStorage.setItem(this.signatureStorageKey, this.signaturePad.toDataURL('image/jpeg'));
    this.toaster.presentToastNoButtons('Firma del deudor registrada.', 'top', 'firma');
    this.router.navigate(['./adeuda']);
  }

  goBack() {
    this.router.navigate(['./adeuda']);
  }
}
