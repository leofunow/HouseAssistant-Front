import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HouseAssistant-Front';
  showheader = true;

  constructor(private router: Router) {
    if(!localStorage.getItem('token')) {
      router.navigate(['/login']);
    }
  }

  showHeader () {
    if (window.location.href.indexOf('/login')!=-1 || window.location.href.indexOf('/register')!=-1) {
      return false;
  } else return true;
 }
}
