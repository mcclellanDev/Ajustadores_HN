import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  InterAutoChassisValidationState,
  requiresInterAutoRegistrationCertificate
} from '../../validation/inter-auto-chassis.validation';
import {
  InterAutoRegistrationCertificateService,
  InterAutoRegistrationCertificateState
} from '../../services/inter-auto-registration-certificate.service';

@Component({
  selector: 'app-inter-auto-registration-certificate',
  templateUrl: './inter-auto-registration-certificate.component.html',
  styleUrls: ['./inter-auto-registration-certificate.component.scss']
})
export class InterAutoRegistrationCertificateComponent implements OnChanges {
  @Input() idAtencion: number | string | null = null;
  @Input() chassisValidation: InterAutoChassisValidationState | null = null;
  @Input() chasis: unknown = '';
  @Input() manualEntryActive = false;

  @Output() certificateStateChange = new EventEmitter<InterAutoRegistrationCertificateState>();

  @ViewChild('galleryInput') galleryInput?: ElementRef<HTMLInputElement>;

  visible = false;
  isCapturing = false;
  private refreshRequestId = 0;
  state: InterAutoRegistrationCertificateState = {
    manualEntry: false,
    registrationCertificateUploaded: false,
    previewDataUrl: null,
    fileName: null
  };

  constructor(
    private registrationCertificate: InterAutoRegistrationCertificateService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const wasVisible = this.visible;
    this.visible = requiresInterAutoRegistrationCertificate(
      this.chassisValidation,
      this.chasis,
      this.manualEntryActive
    );

    if (this.visible && this.resolvedIdAtencion) {
      void this.registrationCertificate.markManualEntry(this.resolvedIdAtencion, true);
    }

    const shouldRefresh =
      !!changes['idAtencion'] ||
      !!changes['chassisValidation'] ||
      !!changes['chasis'] ||
      (!wasVisible && this.visible);

    if (shouldRefresh) {
      void this.refreshState();
    }
  }

  get resolvedIdAtencion(): number | null {
    const parsed = parseInt(String(this.idAtencion ?? ''), 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  async openCamera(): Promise<void> {
    if (!this.resolvedIdAtencion || this.isCapturing) {
      return;
    }

    this.isCapturing = true;
    this.cdr.markForCheck();
    try {
      const nextState = await this.registrationCertificate.captureFromCamera(this.resolvedIdAtencion);
      if (nextState?.registrationCertificateUploaded) {
        this.applyState(nextState, true);
      }
    } finally {
      this.isCapturing = false;
      this.cdr.markForCheck();
    }
  }

  openGalleryPicker(): void {
    if (this.isCapturing) {
      return;
    }

    const input = this.galleryInput?.nativeElement;
    if (!input) {
      return;
    }

    input.value = '';
    input.click();
  }

  async onGallerySelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !this.resolvedIdAtencion) {
      return;
    }

    this.isCapturing = true;
    this.cdr.markForCheck();
    try {
      const nextState = await this.registrationCertificate.captureFromGalleryFile(
        this.resolvedIdAtencion,
        file
      );
      if (nextState?.registrationCertificateUploaded) {
        this.applyState(nextState, true);
      }
    } finally {
      this.isCapturing = false;
      input.value = '';
      this.cdr.markForCheck();
    }
  }

  private async refreshState(): Promise<void> {
    const requestId = ++this.refreshRequestId;

    if (!this.resolvedIdAtencion) {
      if (requestId !== this.refreshRequestId) {
        return;
      }

      this.applyState({
        manualEntry: false,
        registrationCertificateUploaded: false,
        previewDataUrl: null,
        fileName: null
      });
      return;
    }

    const nextState = await this.registrationCertificate.loadState(this.resolvedIdAtencion);
    if (requestId !== this.refreshRequestId) {
      return;
    }

    this.applyState(nextState);
  }

  private applyState(
    nextState: InterAutoRegistrationCertificateState,
    invalidatePendingRefresh = false
  ): void {
    if (invalidatePendingRefresh) {
      this.refreshRequestId++;
    }

    this.ngZone.run(() => {
      this.state = { ...nextState };
      this.certificateStateChange.emit(this.state);
      this.cdr.detectChanges();
    });
  }
}
