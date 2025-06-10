import { ApiService } from './../../services/api.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnChanges {
  @Input() data: any;

  @Output() onDone = new EventEmitter();

  isConfrimValid = true;
  isPasswordValid = true;

  item = {
    password: "",
    confrim: "",
    user:""
  };

  constructor(private router: Router,
    private loading: LoadingController,
    private api: ApiService,
    private alert: AlertController
    ) {
    const state = this.router.getCurrentNavigation().extras.state;
    if(state){
      console.log(state);
      this.item.user= state.email;
      console.log(this.item);
    }
    
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes["data"].currentValue;
  }

  async onDoneFunc(): Promise<void> {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      const loading = await  this.loading.create({
      })
      loading.present();
      let data={
        password: this.item.password,
        user: this.item.user
      }
      this.api.cambiarPassword(data).pipe(
        finalize(()=>{
          loading.dismiss();
        })
      ).subscribe((res)=>{
        console.log(res,'respuestica')
        this.onDone.emit(this.item);
        this.router.navigate(['./']);
      }, async (err)=> {
        console.log(err)
        const load = await  this.alert.create({
          header:"HELP",
          message:err.error.Message,
          buttons:['OK']
        }) 
        load.present();
     
      });
  
    }
  }

  validate(): boolean {
    this.isConfrimValid = true;
    this.isPasswordValid = true;

    if (!this.item.password) {
      this.isPasswordValid = false;
    }

    if (!this.item.confrim) {
      this.isConfrimValid = false;
    }

    if (this.item.confrim !== this.item.password) {
      this.isConfrimValid = false;
    }

    return this.isPasswordValid && this.isConfrimValid;
  }
}
