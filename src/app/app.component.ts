import { Capacitor } from '@capacitor/core';
import { ToastService } from 'src/app/services/toast.service';

import { ApiService } from './services/api.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import OneSignal from 'onesignal-cordova-plugin';
import { ScreenlockService } from './services/screenlock.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Router, NavigationEnd, RouterOutlet, ActivationStart } from '@angular/router';
import { Cordova } from '@awesome-cordova-plugins/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  screenlock:ScreenlockService;
  

  constructor(private plt: Platform, 
    private api: ApiService,
    private platform: Platform,
    private so: ScreenOrientation,
    private tostador:ToastService,
    private router:Router
  ) 
  {
    this.initializeApp();
  }

  initializeApp(){
    this.plt.ready().then(async ()=>{
      console.log('Initialize here');
      this.api.loadToken();
      //Debug:temporal
      this.geolocation();
      this.OneSignalInit();

      // does not work on web, devices only. It's a brake on web
      let currentOrietation = this.so.type.toString();
      this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);

    })

  }
  OneSignalInit() {
    //alert('inicialicemos el onesignal')
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;
    
    // Cambios para android 33 
    // da94f896-3936-4550-87d3-6021e755623c
    // "current_key": "AIzaSyBwZp_AO2LEX7chxG8oDUDrVIsyiPj0bys"
    // AIzaSyB0nQUjBhOYwvWecxejWXysTtYGTr8LmgQ
    // da94f896-3936-4550-87d3-6021e755623c
    // da94f896-3936-4550-87d3-6021e755623c
    OneSignal.setAppId("da94f896-3936-4550-87d3-6021e755623c");

    OneSignal.setNotificationOpenedHandler((jsonData) => {
      //alert('tengo un Json')
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      var $data:any = jsonData.notification.additionalData;
      if($data.Type=="EmbebedUrl"){
        //this.openmodal($data.Direction);
      }else{
        if($data.Type=="InternalView"){
          if(JSON.parse(window.localStorage.getItem('remenber'))){
            window.localStorage.setItem('InternalView',JSON.stringify($data)); //datos.additionalData.DirectionData));
            //this.openData($data.Direction, $data.DirectionData);
          }
        }
      }
    });

    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });

    OneSignal.getDeviceState( d => {
      console.log('data o', d);
       window.localStorage.setItem('token',JSON.stringify(d.userId));
      this.api.setPushToken(d.userId);
      console.log('mi Token')
      console.log(d.pushToken);  
      //alert(d.pushToken)
    });

    
    /*
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      var $data:any = jsonData.notification.additionalData
      window.localStorage.setItem('Push',JSON.stringify($data));
      
    });

    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
    OneSignal.getDeviceState( d => {
      console.log('data o', d);
        window.localStorage.setItem('token',JSON.stringify(d.userId));
      console.log(d.pushToken,'token pushhh');  
    });
    */
  }  

  ngOnInit(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "root")
        this.outlet.deactivate();
    });

    this.outletDeactivate();
    
    setTimeout(() => {
      
      console.log('clienteContent');
      let evaluator = window.location.pathname=='/login';
      //alert(window.location.pathname+', '+evaluator);
      if (evaluator == false) {
        let myContent = document.getElementById('clienteContent');
        if (myContent) {
          //alert(myContent.tagName)
          
        }else{
          //alert('Time');
          
//          window.location.reload();
        }
      }
      
    }, 3000);
    this.platform.ready().then(() => {
      //document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
     });
  }

  outletDeactivate(){
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "tab1")
        this.outlet.deactivate();
    });
  }

  ionViewDidEnter(){
    this.platform.ready().then(() => {
      //document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
     });
  }
  async geolocation(){
    
    const permissionResult = await Geolocation.checkPermissions();
    if (permissionResult.location === 'granted') {
      //alert('Hey Geo')
      // El usuario ha dado permisos de geolocalización
      const coordenadas=  await Geolocation.getCurrentPosition();
      localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
      console.log('Coordenadas en app')
      console.dir(coordenadas);
      //alert(coordenadas.coords.latitude)
      localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
      localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
      localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
    } else if (permissionResult.location === 'denied') {
      //alert('Hey Geo Denied')
      // El usuario ha denegado los permisos de geolocalización
    } else {
      //alert('Hey Geo Else')
      const permissionResult = await Geolocation.requestPermissions();
      if (permissionResult.location === 'granted') {
        // El usuario ha otorgado los permisos de geolocalización
        const coordenadas=  await Geolocation.getCurrentPosition();
        localStorage.setItem('lasCoordenadas', JSON.stringify(coordenadas));
        console.log('Coordenadas en app')
        console.dir(coordenadas);
        //alert(coordenadas.coords.latitude)
        localStorage.setItem('laLatitud', coordenadas.coords.latitude.toString());
        localStorage.setItem('laLongitud', coordenadas.coords.longitude.toString());
        localStorage.setItem('laPrecision', coordenadas.coords.accuracy.toString());
      } else if (permissionResult.location === 'denied') {
        // El usuario ha denegado los permisos de geolocalización
      } else if (permissionResult.location === 'prompt') {
        // El usuario aún no ha tomado una decisión sobre los permisos de geolocalización
      }
    }
    
}
}

