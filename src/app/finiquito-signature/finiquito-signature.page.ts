import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { logoFicohsa } from '../environments/default-images';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-finiquito-signature',
  templateUrl: './finiquito-signature.page.html',
  styleUrls: ['./finiquito-signature.page.scss']
})
export class FiniquitoSignaturePage implements AfterViewInit {
  @ViewChild('signatureCanvas', { static: false }) signatureCanvas: ElementRef<HTMLCanvasElement>;

  signaturePad: SignaturePad;
  idAtencion = localStorage.getItem('idAtencion');
  receiverName = this.getFiniquitoDraftValue('NombreQuienRecibe') || 'Beneficiario';
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
    return `finiquitoSignature-${this.idAtencion}`;
  }

  private finiquitoScopedKey(key: string): string {
    const currentAttentionId = String(this.idAtencion || localStorage.getItem('idAtencion') || '').trim();
    return currentAttentionId ? `finiquito-${currentAttentionId}-${key}` : `finiquito-${key}`;
  }

  private getFiniquitoDraftValue(key: string): string {
    const value = localStorage.getItem(this.finiquitoScopedKey(key));
    return value && value !== 'undefined' && value !== 'null' ? value : '';
  }

  clear() {
    this.signaturePad?.clear();
  }

  save() {
    if (!this.signaturePad || this.signaturePad.isEmpty()) {
      this.toaster.presentToastNoButtonsRed('El beneficiario debe firmar antes de continuar.', 'top', 'firma');
      return;
    }

    localStorage.setItem(this.signatureStorageKey, this.signaturePad.toDataURL('image/jpeg'));
    this.toaster.presentToastNoButtons('Firma del beneficiario registrada.', 'top', 'firma');
    this.router.navigate(['./finiquito']);
  }

  goBack() {
    this.router.navigate(['./finiquito']);
  }
}
