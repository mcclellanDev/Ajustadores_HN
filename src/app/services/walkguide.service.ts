import { Injectable } from '@angular/core';
import * as introJs from 'intro.js/index';

@Injectable({
  providedIn: 'root'
})
export class WalkguideService {

  constructor() { }

  ionViewWillEnter(){

    introJs(document.querySelector('app-home')).start();
    
    }
}
