import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Expedientes } from '../interfaces/expedientes';

@Component({
  selector: 'app-expediente-info-modal',
  templateUrl: './expediente-info-modal.component.html',
  styleUrls: ['./expediente-info-modal.component.scss'],
})
export class ExpedienteInfoModalComponent implements OnInit {
  @Input() expediente: Expedientes[] = [];
  @Input() idAtencion: string;
  @Input() miMoneda: any;
  @Input() openThirdAccordion = true;
  @Input() traceRoute: () => void;

  accordionValue: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.accordionValue = this.openThirdAccordion ? 'third' : 'first';
  }

  close() {
    this.modalCtrl.dismiss(undefined, 'close');
  }

  onTraceRoute() {
    if (this.traceRoute) {
      this.traceRoute();
    }

    this.close();
  }
}
