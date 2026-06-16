import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, ActivationStart } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private navEnd: Observable<NavigationEnd>;
  @ViewChild('inicio') inicio: ElementRef<HTMLElement>;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  currentUrl:any;
  elCliente: any;
  gpsOn: boolean = false;
  constructor(private router:Router, private toaster:ToastService, private call: CallNumber) {
    //console.log(this.outlet.isActivated.valueOf()) 
    console.log('Este outlet');
    console.dir(this.outlet); 
    //this.handleNavigation(0);
  }

  ngOnInit(){
    let previousPage = localStorage.getItem('previous');
      if (previousPage) {
        //console.log('La pagina anterior ha sido '+previousPage);
      }
  }

  ionViewDidEnter(){
    let gpsOn = localStorage.getItem('conectividad');

    if (gpsOn !== null) {
      this.gpsOn = gpsOn === 'true';
    } else {
      // Tras reinstalar la app se pierde localStorage pero la sesión nativa puede persistir.
      this.gpsOn = true;
    }
  }

  handleNavigation(origin:any){
    localStorage.setItem('origin', origin);

    let contenedor = document.getElementsByTagName('ion-tab-button');
    $('ion-tab-button').removeAttr('style');
    $('ion-tab-button').eq(origin).attr('style', '    color: var(--primaryColor); background: white; border-radius: 30px;');
    //localStorage.setItem('atencionIndex', origin.toString());
  }

  navigateTab1(){
    setTimeout(() => {
      let contenedor = document.getElementsByTagName('ion-tab-button');
      $('ion-tab-button').eq(0).click();
    }, 2000);
  }



}
