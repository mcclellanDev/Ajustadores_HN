import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';
import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { CulpablePageRoutingModule } from './culpable-routing.module';

import { CulpablePage } from './culpable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulpablePageRoutingModule,
    MaskitoModule,
    SharedPipesModule
  ],
  declarations: [CulpablePage]
})
export class CulpablePageModule {}
