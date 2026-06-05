import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-guardar',
  templateUrl: './modal-guardar.page.html',
  styleUrls: ['./modal-guardar.page.scss'],
})
export class ModalGuardarPage implements OnInit {
@ViewChild(IonModal, { static: true }) modal!: IonModal;
  constructor(private miModal:ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    //this.modal.canDismiss = true; // Permite que el modal se cierre
    this.modal.dismiss();
  }

  confirm() {
    //this.modal.canDismiss = true; // Permite que el modal se cierre
    this.modal.dismiss({ 'confirmed': true });
  }

}
