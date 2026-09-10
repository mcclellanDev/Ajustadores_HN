import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalBpmPreflightPage } from './modal-bpm-preflight.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ModalBpmPreflightPage],
  exports: [ModalBpmPreflightPage]
})
export class ModalBpmPreflightModule {}
