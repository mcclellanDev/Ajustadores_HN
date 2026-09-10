
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { OneSignalPlugin } from 'onesignal-cordova-plugin';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import {Maskito} from '@maskito/core';
import { MaskitoModule } from '@maskito/angular';
import { CommonModule } from '@angular/common';
import { IonLabel } from '@ionic/angular';
import { ModalBpmPreflightModule } from './Modales/modal-bpm-preflight/modal-bpm-preflight.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            IonicModule.forRoot({backButtonText: '' }), 
            AppRoutingModule, 
            HttpClientModule,
            MaskitoModule,
            ModalBpmPreflightModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    OneSignal,
    OneSignalPlugin,
    CallNumber,
    ScreenOrientation,
    NativeGeocoder,
    IonLabel
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
