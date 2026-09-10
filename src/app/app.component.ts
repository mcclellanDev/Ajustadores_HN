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
import { Network, ConnectionStatus } from '@capacitor/network';
import { emptySignature } from './environments/default-images';
import { ConnectionService } from './services/connection.service';
import { NetworkInfo } from './environments/network';
import { Observable } from 'rxjs';
import { AppConnectionStatus } from './services/connection.service';
import { DeviceService } from './services/device.service';
import { PROJECT_SIGNATURE } from './environments/project-signature';
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef | undefined;
  @ViewChild(RouterOutlet) outlet: RouterOutlet | undefined;
  screenlock:ScreenlockService | undefined;
  conexion: ConnectionStatus | undefined;
  isTablet: boolean = false;
  emptySignature:any = emptySignature;stripeForm: any;
  connectionStatus$: Observable<AppConnectionStatus>;
  conectividad?: boolean;  conectividadStat: string | undefined;
  readonly projectSignature = PROJECT_SIGNATURE;

  constructor(private plt: Platform, 
    private api: ApiService,
    private platform: Platform,
    private so: ScreenOrientation,
    private tostador:ToastService,
    private router:Router,
    private connectionService: ConnectionService,
    private deviceService: DeviceService
  ) 
  {
    this.connectionStatus$ = this.connectionService.status$;
    this.initializeApp();
  }


  checkConnection(){
  //alert('Voy')
  if(Network){
    Network.getStatus().then((status)=>{
    this.conexion=status;
    console.log('status.connected');
    console.log(status.connected);
    this.conectividad = status.connected;
    console.log('Mi estado de conectividad es '+this.conectividad)

    for (let index = 0; index < NetworkInfo.status.length; index++) {
      const element = NetworkInfo.status[index];
      if (element.bool==this.conectividad) {
        this.conectividadStat = element.stat;
      }
    }

    if(this.conectividad == false){
      //this.toaster.toastMessage = 'No hay conexión a internet';
      //this.toaster.toastClass = 'conectividad';
      //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
    }
    })
  }else{
    this.conectividad = false;
  }

  Network.addListener("networkStatusChange", status=>{
    this.conexion=status;
    this.conectividad = status.connected;

    for (let index = 0; index < NetworkInfo.status.length; index++) {
      const element = NetworkInfo.status[index];
      if (element.bool==this.conectividad) {
        this.conectividadStat = element.stat;
        localStorage.setItem('conectividad', this.conectividad.toString());
      }
    }

    localStorage.setItem('conectividad', this.conectividad.toString());
    if(this.conectividad == false){
      $('#connectIndicator').fadeIn();
      //this.toaster.toastMessage = 'No hay conexión a internet';
      //this.toaster.toastClass = 'conectividad';
      //this.toaster.presentToastErrorConexion(this.toaster.toastMessage, this.toaster.toastPosition, this.toaster.toastClass);
    }else{
      $('#connectIndicator').fadeOut();
    }
  })
}
  
  /*
  checkConnection() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.conexion = status;
        this.conectividad = status.connected;
        if (this.conectividad == false) {
          //this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
        }
      })
    } else {
      this.conectividad = false;
    }

    Network.addListener("networkStatusChange", status => {
      this.conexion = status;
      this.conectividad = status.connected;
      console.log('Mi estado de conectividad es '+this.conectividad)
      if (this.conectividad == false) {
        //this.presentToastErrorConexion('No hay conexión a internet', 'top', 'conexion');
      }
    })
  }
  */

  initializeApp(){
    this.plt.ready().then(async ()=>{
      console.log('Initialize here');
      this.applyOrientationPolicy();
      await this.restoreSession();
      //Debug:temporal
      this.geolocation();
      this.OneSignalInit();

    })

  }

  async restoreSession() {
    const hasSession = await this.api.loadToken();
    const currentPath = window.location.pathname || this.router.url || '/';
    const publicRoutes = ['/login', '/recovery', '/new-password'];
    const isPublicRoute = publicRoutes.some(route => currentPath.startsWith(route));

    if (hasSession) {
      const versionChanged = await this.api.hasAppVersionChanged();
      if (versionChanged) {
        this.api.setPendingSessionRecovery();
      }
    }

    if (hasSession && (currentPath === '/' || isPublicRoute)) {
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
      return;
    }

    if (!hasSession && !isPublicRoute) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  applyOrientationPolicy() {
    this.deviceService.configure(this.platform);
    this.isTablet = this.deviceService.isTablet;
    if (!this.platform.is('hybrid')) {
      return;
    }

    if (this.isTablet) {
      this.so.unlock();
      return;
    }

    this.so.lock(this.so.ORIENTATIONS.PORTRAIT);
  }
  OneSignalInit() {
    //alert('inicialicemos el onesignal')
    var iosSettings:any = {};
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
          let localVariable = JSON.parse(localStorage.getItem('remenber') || 'false');
          if(JSON.parse(localVariable) == true){
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

    //alert('ngOnInit hay red '+Network.getStatus());
    
    this.connectionService.startMonitoring();
    
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

  ionViewDidEnter(){
    this.platform.ready().then(() => {
      //this.checkConnection();
      //document.getElementById('avatarPerfil').setAttribute('style', 'filter:none');
     });
  }
  async geolocation(){
    
    const permissionResult = await Geolocation.checkPermissions();
    if (permissionResult.location === 'granted') {
      //alert('Hey Geo')
      // El usuario ha dado permisos de geolocalización
      const coordenadas=  await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000
      });
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
        const coordenadas=  await Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000
        });
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
