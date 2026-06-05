import { Injectable } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Injectable({
  providedIn: 'root'
})
export class ScreenlockService {
  currentScreenOrientation: string;
  constructor(private so: ScreenOrientation) { 
    this.currentScreenOrientation = this.so.type; 
  }

  lockToLandscape(){
  }
  
}
