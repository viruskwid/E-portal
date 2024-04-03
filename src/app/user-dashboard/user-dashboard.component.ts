import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
constructor(private router:Router){}

getStart(){
  if (sessionStorage.getItem("token")) {
    this.router.navigateByUrl("/user-home")
  }else{
    this.router.navigateByUrl("/login")
  }
}
}
