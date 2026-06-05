
import { Marca } from 'src/app/interfaces/marca';
import { HttpService } from './../../services/http.service';
import { ResponseUser, User } from './../../interfaces/user';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';
import { ScreenlockService } from 'src/app/services/screenlock.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
import { emailDomains } from 'src/app/environments/domains';
import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { ClearWatchOptions, Geolocation, GeolocationPluginPermissions } from '@capacitor/geolocation';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  item={
    user:'',
    password:''
  }

  dominios:any=[]; isVisible:boolean=false;
  screenlock?:ScreenlockService;
  credenciales?: FormGroup;
  marcasArray?:Marca;
  env:any;
  isUsernameValid=true;
  isPasswordValid = true;
  isLoading: boolean=false;
  isLoginLogo:boolean=false;
  isLogout:boolean=false;
  loginInterval:any;
  previousUrl:any;
  currentUrl:any;
  valorMarca:any=[];
  onLogin=false;
  dataDeEnvio: any = [];
  usuarioCache: string | undefined;
  passwordCache: string | undefined;

   conectividadStat?: boolean;  estadoConexionGPS: string | undefined; 

  constructor( 
        private router: Router,
        private alert: AlertController,
        private api: ApiService,
        private fb: FormBuilder,
        private loading: LoadingController,
        private httpService: HttpService,
        private platform:Platform,
        private so: ScreenOrientation,
        private toaster:ToastService
  ) 
  { 
    this.valorMarca = this.marcasArray;
    this.env = environment.api_url;
    this.dominios = emailDomains;
    //this.readInput();
    //this.loginInterval = setInterval(()=>{this.setLogo()} ,  1000); 

  }

  obtenerCacheUsuario() {
    SecureStoragePlugin.get({ key: 'User' }).then((result) => {
      this.item.user = result.value;
      this.usuarioCache = this.item.user;
      console.log('User retrieved from secure storage:', this.item.user);
    });
    SecureStoragePlugin.get({ key: 'Password' }).then((result) => {
      this.item.password = result.value;
      this.passwordCache = this.item.password;
      console.log('Password retrieved from secure storage:', this.item.password);
    });
  }

  ionViewDidEnter(){
    const permissionResult = Geolocation.checkPermissions();

    console.log('ionViewDidEnter checando los permisos de gelocacion ');
    console.dir(permissionResult);
    permissionResult.then((result) => { 
      console.log('ionViewDidEnter checando los permisos de gelocacion con then result '); console.dir(result);
      console.log(result.location);
      
      if (result.location == 'granted') {
        this.conectividadStat = true;
        this.estadoConexionGPS = 'Permisos de ubicación precisa';
        //$('#connectIndicatorLogin').fadeIn('xslow');
      }

      if(result.location == 'denied'){
        this.conectividadStat = false;
        this.estadoConexionGPS = 'Permisos de ubicación precisa';
        //$('#connectIndicatorLogin').fadeOut();
      }

      
    });

  }

  ionViewWillLeave(){
    
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.obtenerCacheUsuario();

      setTimeout(() => {
        //alert('Estas credenciales ... usuario'+this.usuarioCache+' ... contraseña'+this.passwordCache)
        
      }, 900);
      Keyboard.addListener('keyboardDidHide', () => {
        this.showRegister();
      });

    });

    this.credenciales = new FormGroup({
      user: new FormControl([''],[ Validators.required, Validators.email]),
      password: new FormControl([], Validators.required)
    });
  }

  permitirGPS(conectividadStat:any){
    Geolocation.requestPermissions();

    /*
    if (conectividadStat == true) {
      Geolocation.requestPermissions().then((result) => {
        console.log('Permisos de ubicación solicitados:', result); 
        if (result.location == 'granted') {
          this.conectividadStat = true;
          this.estadoConexionGPS = 'Permisos de ubicación precisa';
          $('#connectIndicatorLogin').fadeIn('xslow');
        }
      });
    }else{

    }
    */
  }
   
  setLogo(){
    let checkLogout = localStorage.getItem('isLogout');

    console.log('Logout es '+checkLogout)
    this.currentUrl = this.router.url;
    this.previousUrl = localStorage.getItem('previous');
    let logoContainer = document.getElementsByTagName('ion-img');
    let logoCounter = logoContainer.length;
    if (logoCounter > 0){
      this.isLoginLogo = true;
      console.log("Tengo un logo")
      clearInterval(this.loginInterval)
    }else{console.log('nada aun')}
  }
  async login(){
    this.isLoading =true;
    console.log(this.credenciales.value)
    let data = this.credenciales.value;
    this.dataDeEnvio.push({ key: 'User', value: data.user });
    this.dataDeEnvio.push({ key: 'Password', value: data.password });
    let sendData = {
      User: data.user,
      Password: data.password
    }
    console.log(sendData);

    console.log('Success');
    for (let indexD = 0; indexD < this.dataDeEnvio.length; indexD++) {
      const element = this.dataDeEnvio[indexD];
      SecureStoragePlugin.set({ key: element.key, value: element.value }).then((success) => 
        console.dir(success)
      );
    }
  
    this.api.login(sendData).subscribe(
      async (res) =>{
       // alert('lo logré')
        this.isLoading = false;
        console.log("la respuesta del login");
        console.dir(res)
        this.router.navigate(['./tabs/tab1']);
      },
      async (res) => {
        this.isLoading = false;
        console.log(res);
        const alert = await this.alert.create({
          header:'Fallo inicio de sesión',
          message:res.error.Message,
          buttons:['Ok']
          
        });
        await alert.present();
      }
    )
    /**/
  }
  onLoginFunc(){
    this.validatePassword();
    if (this.validateEmail() && this.validatePassword()) {

      this.api.login(this.item).subscribe(async res=>{
        if(res){
          this.router.navigate(['./tabs/tab1']);
        }else{
          const alert = await this.alert.create({
            header:'HELP',
            message:'Error al iniciar sesión valide sus credenciales',
            buttons:['Ok']
            
          });
          await alert.present();
        }
      });
    }
  }
  validateEmail(): boolean {
    this.isUsernameValid = true;
//    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // 
    if (!emailRegex.test(this.item.user)) {
      this.isUsernameValid = false;
      this.toaster.presentToastNoButtonsRed('El correo no es válido', 'top', 'login');
    }else{
      this.toaster.dismissToast();
    }
    return this.isUsernameValid;
  }

  walkEmail(event){
    let daEmail = event.target.value;
    for (let index = 0; index < this.dominios.length; index++) {
      const element = this.dominios[index];
      console.log(daEmail+', '+element+', '+daEmail.includes(element.toString()));
      if (daEmail.includes(element.toString())) {
        this.toaster.dismissToast();
        break;
      }
    }
  }

  readInput(){
    console.log("El correo es "+this.item.user)
  }

  hideRegister(){
    $('#logoHelp').fadeOut();
    $('#olaAbajo').fadeOut();
  }

  showRegister(){
    $('#logoHelp').fadeIn();
    $('#olaAbajo').fadeIn();
  }

  validatePassword(): boolean {
    this.isPasswordValid = true;
    console.log(this.item.password+', '+this.item.password.length)
    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
      this.toaster.presentToastNoButtonsRed('La contraseña no es válida. Escribe tu contraseña para iniciar sesión.', 'bottom', 'login');
    }else{
      this.toaster.dismissToast();
    }

    console.log(this.item.password)
    return this.isPasswordValid;
  }

  toggleVisual(){
    this.isVisible = !this.isVisible;
  }

  recoveryPassword(){
    this.router.navigate(['./recovery']);
  }

  isPassword = true;
  show() {
    if( this.item.password.length>0){
      this.isPassword=false;
    }
    else{
      this.isPassword=true;
    }
  }

}
