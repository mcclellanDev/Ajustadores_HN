import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecoveryPageRoutingModule } from './recovery-routing.module';

import { RecoveryPage } from './recovery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    RecoveryPageRoutingModule
  ],
  declarations: [RecoveryPage]
})
export class RecoveryPageModule {}
