import { Observable, throwError } from 'rxjs';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component,  Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnChanges {

  @Input() data: any;

  @Output() onSend = new EventEmitter();
  oTP: any =  {
    first: '',
    second: '',
    third: '',
    forth: ''
  };
  isOtp= false;

  isEmailValid = true;
  load = false;
  private regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  item = {
    email: "",
    userid:""
  };

  constructor(private router: Router,
    private api: ApiService,
    private alert: AlertController,
    private loading: LoadingController) {}

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes["data"].currentValue;
  }

  onSendFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.load= true;
      this.onSend.emit(this.item);
      this.api.recuperarContrasena(this.item.email).subscribe(async res=>{
        if(res){
          this.isOtp=true;
          this.load=false;
        }else{
          const alert = await this.alert.create({
            header:'HELP',
            message:'re',
            buttons:['Ok']
            
          });
          await alert.present();
        }
      });
      
    }
  }
  async otpController(event,next,prev, index){


    if(index == 4) {
     
      const otp = this.oTP.first + this.oTP.second +  this.oTP.third + this.oTP.forth;
      console.log(otp);
      if (otp.length === 4 && this.oTP.forth != (null && '') ){
        const loading = await  this.loading.create({
        })
        loading.present();
        let data ={
          clave: otp,
          user: this.item.email
        }
        this.api.validarOtp(data).pipe(
          finalize(()=>{
            loading.dismiss();
          })
        ).subscribe((res)=>{
          const nav:  NavigationExtras={
            state: this.item
          }
          this.router.navigate(['./new-password'],nav);
        }, async (err)=> {
          console.log(err)
          const load = await  this.alert.create({
            header:"HELP",
            message:err.error.Message,
            buttons:['OK']
          }) 
          load.present();

        })
        
        
        //
      }
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
 }
  validate(): boolean {
    this.isEmailValid = this.regex.test(this.item.email);
    return this.isEmailValid;
   //return true;
  }

}
