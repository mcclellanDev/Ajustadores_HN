import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
isReload:any;
isLoading: boolean=true;
  constructor(private router:Router) { 
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl('login');
    }, 3000);
  }

  ngOnInit() {

  }

}
