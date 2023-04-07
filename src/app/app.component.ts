import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HouseAssistant-Front';
  showheader = true;

  showHeader () {
    if (window.location.href.indexOf('/login')!=-1 || window.location.href.indexOf('/register')!=-1) {
      return false;
  } else return true;
 }
}
