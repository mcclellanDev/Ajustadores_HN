
import { Marca } from 'src/app/interfaces/marca';
import { HttpService } from './../../services/http.service';
import { ResponseUser, User } from './../../interfaces/user';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';
import { ScreenlockService } from 'src/app/services/screenlock.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
import { emailDomains } from 'src/app/environments/domains';

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
  screenlock:ScreenlockService;
  credenciales: FormGroup;
  marcasArray:Marca;
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

  ngOnInit() {
    this.platform.ready().then(() => {
      //this.screenlock.lockToLandscape();
      this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
    });

    this.credenciales = new FormGroup({
      user: new FormControl([''],[ Validators.required, Validators.email]),
      password: new FormControl([], Validators.required)
    });
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
    let sendData = {
      User: data.user,
      Password: data.password
    }
    console.log(sendData);
  
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
      this.toaster.presentToastNoButtonsRed('El correo no es válido', 'bottom', 'login');
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
