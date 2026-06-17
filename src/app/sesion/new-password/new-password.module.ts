import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewPasswordPageRoutingModule } from './new-password-routing.module';

import { NewPasswordPage } from './new-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    NewPasswordPageRoutingModule
  ],
  declarations: [NewPasswordPage]
})
export class NewPasswordPageModule {}
