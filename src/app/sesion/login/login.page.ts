
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
import { SavedLoginSession, SavedLoginSessionsService } from 'src/app/services/saved-login-sessions.service';
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
  recentSessions: SavedLoginSession[] = [];
  selectedSessionEmail: string | null = null;

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
        private toaster:ToastService,
        private savedSessions: SavedLoginSessionsService
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
      this.credenciales?.patchValue({ user: result.value });
    }).catch(() => {});
    SecureStoragePlugin.get({ key: 'Password' }).then((result) => {
      this.item.password = result.value;
      this.passwordCache = this.item.password;
      this.credenciales?.patchValue({ password: result.value });
      this.credenciales?.updateValueAndValidity();
    }).catch(() => {});
  }

  ionViewDidEnter(){
    void this.loadRecentSessions();

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
      if (this.platform.is('hybrid')) {
        Keyboard.addListener('keyboardDidHide', () => {
          this.showRegister();
        });
      }

    });

    this.credenciales = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  async loadRecentSessions() {
    this.recentSessions = await this.savedSessions.loadSessions();

    if (this.recentSessions.length > 0) {
      await this.selectSavedSession(this.recentSessions[0]);
      return;
    }

    this.obtenerCacheUsuario();
  }

  async selectSavedSession(session: SavedLoginSession) {
    this.selectedSessionEmail = session.email;
    const password = await this.savedSessions.getPassword(session.email);

    this.item.user = session.email;
    this.item.password = password;
    this.usuarioCache = session.email;
    this.passwordCache = password;

    this.credenciales?.patchValue({
      user: session.email,
      password
    });
    this.credenciales?.markAllAsTouched();
    this.credenciales?.updateValueAndValidity();
  }

  async removeSavedSession(session: SavedLoginSession, event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const alert = await this.alert.create({
      cssClass: 'login-menu-alert',
      header: 'Eliminar sesión guardada',
      subHeader: 'Cuenta guardada',
      message: `¿Deseas quitar ${session.displayName || session.email} de la lista de sesiones recientes?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'logout-menu-button logout-menu-cancel'
        },
        {
          text: 'Eliminar',
          cssClass: 'logout-menu-button logout-menu-danger',
          handler: () => {
            void this.confirmRemoveSavedSession(session);
          }
        }
      ]
    });

    await alert.present();
  }

  private async confirmRemoveSavedSession(session: SavedLoginSession) {
    await this.savedSessions.removeSession(session.email);
    this.recentSessions = await this.savedSessions.loadSessions();

    if (this.selectedSessionEmail?.toLowerCase() === session.email.toLowerCase()) {
      this.selectedSessionEmail = null;
      this.item.user = '';
      this.item.password = '';
      this.credenciales?.reset({
        user: '',
        password: ''
      });
    }

    if (this.recentSessions.length > 0) {
      await this.selectSavedSession(this.recentSessions[0]);
    }

    this.toaster.presentToastNoButtons('Sesión eliminada de la lista.', 'top', 'login');
  }

  formatSessionDate(value: string): string {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return 'Reciente';
    }

    return parsed.toLocaleString('es-HN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getSessionInitials(session: SavedLoginSession): string {
    const source = session.displayName || session.email;
    const parts = source.split(/[\s@._-]+/).filter(Boolean);
    const initials = parts.slice(0, 2).map((part) => part.charAt(0).toUpperCase()).join('');
    return initials || 'H';
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
    this.isLoading = true;
    const data = this.credenciales.value;
    this.dataDeEnvio = [
      { key: 'User', value: data.user },
      { key: 'Password', value: data.password }
    ];
    const sendData = {
      User: data.user,
      Password: data.password
    };

    for (let indexD = 0; indexD < this.dataDeEnvio.length; indexD++) {
      const element = this.dataDeEnvio[indexD];
      SecureStoragePlugin.set({ key: element.key, value: element.value }).then((success) =>
        console.dir(success)
      );
    }

    await this.savedSessions.syncPrimaryCredentials(data.user, data.password);

    this.api.login(sendData).subscribe(
      async () => {
        this.isLoading = false;
        await this.savedSessions.saveSession(
          data.user,
          data.password,
          this.api.currentUser?.NombreAgente
        );
        this.router.navigate(['./tabs/tab1']);
      },
      async (res) => {
        this.isLoading = false;
        console.log(res);
        const alert = await this.alert.create({
          cssClass: 'login-menu-alert',
          header:'Fallo inicio de sesión',
          message:res.error.Message,
          buttons:[{
            text: '',
            role: 'cancel',
            cssClass: 'logout-menu-button logout-menu-danger'
          } ,{
            text: '',
            role: 'cancel',
            cssClass: 'logout-menu-button logout-menu-danger'
          } ,{
            text: 'OK',
            role: 'cancel',
            cssClass: 'logout-menu-button logout-menu-accept'
          } ,]
          
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
    this.selectedSessionEmail = null;
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
