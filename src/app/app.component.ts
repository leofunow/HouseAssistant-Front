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
    return window.location.href.indexOf('/login') === -1;
  }
}
