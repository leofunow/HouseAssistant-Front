import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  isUserLoggedIn = false;
  isCollapsed = true;

  collapseMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  btnClick() {
    this.isCollapsed = true;
  }

}