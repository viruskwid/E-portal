import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  openExternalUrl(): void {
    window.location.href = 'https://angular-e-cart-front.vercel.app/';
  }

}
