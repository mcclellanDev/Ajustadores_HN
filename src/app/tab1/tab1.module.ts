import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ParallaxHeader } from './parallax-header';
import { FilterPipe } from '../filter.pipe';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ModalBpmPreflightModule } from '../Modales/modal-bpm-preflight/modal-bpm-preflight.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ModalBpmPreflightModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab1Page, ParallaxHeader, FilterPipe],
  exports:[ParallaxHeader, FilterPipe]
})
export class Tab1PageModule {}
