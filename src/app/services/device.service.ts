import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  isTablet = false;
  isPhone = true;
  isIOS = false;

  configure(platform: Platform) {
    this.isTablet = platform.is('tablet');
    this.isPhone = !this.isTablet;
    this.isIOS = platform.is('ios');
  }
}
