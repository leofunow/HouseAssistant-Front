import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  selectedMenu: 'profile' | 'addCard' | 'cards' = 'profile';

  constructor(private route: ActivatedRoute, private router: Router) {
    
    route.params.subscribe(params => {
      if( params['menu'])
      this.selectedMenu = params['menu'];
    })
  }

  selectMenu(menu: 'profile' | 'addCard' | 'cards') {
    this.selectedMenu = menu
    this.router.navigate(
      ['.'],
      {relativeTo: this.route, queryParams: {menu: menu}}
    )
  }

}
