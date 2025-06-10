import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepareAudiencePageRoutingModule } from './prepare-audience-routing.module';

import { PrepareAudiencePage } from './prepare-audience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepareAudiencePageRoutingModule
  ],
  declarations: [PrepareAudiencePage]
})
export class PrepareAudiencePageModule {}
