import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;
  isUserLoggedIn = false;
  isCollapsed = true;
  searchText = '';

  constructor(private searchService: SearchService, private router: Router) {
    
  }

  collapseMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  async submitSearch() {
    await this.router.navigate(['/']);
    setTimeout(() => {
      this.searchService.search.next(this.searchText);
    });
  }
  btnClick() {
    this.isCollapsed = true;
  }

}