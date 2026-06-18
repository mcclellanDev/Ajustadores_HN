import { DirectivesModule } from './../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedPipesModule } from '../pipes/shared-pipes.module';

import { SegmentoDanioPageRoutingModule } from './segmento-danio-routing.module';

import { SegmentoDanioPage } from './segmento-danio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentoDanioPageRoutingModule,
    DirectivesModule,
    SharedPipesModule
  ],
  declarations: [SegmentoDanioPage]
})
export class SegmentoDanioPageModule {}
