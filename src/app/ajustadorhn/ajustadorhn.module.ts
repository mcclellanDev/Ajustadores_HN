import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { AjustadorhnPageRoutingModule } from './ajustadorhn-routing.module';

import { AjustadorhnPage } from './ajustadorhn.page';
import { MaskitoModule } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustadorhnPageRoutingModule,
    MaskitoModule
  ],
  declarations: [AjustadorhnPage],
  providers: [
    NativeGeocoder,
  ],
})
export class AjustadorhnPageModule {}
