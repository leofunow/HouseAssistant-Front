  import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', '../../../../node_modules/remixicon/fonts/remixicon.css']
})
export class IndexComponent {

  isFiltersOpened = false
  isSortingOpened = false

  area = [0, 5000];

  openFilters() {
    this.isFiltersOpened = true
  }
  closeFilters() {
    this.isFiltersOpened = false
  }
  openSorting() {
    this.isSortingOpened = true
  }
  closeSorting() {
    this.isSortingOpened = false
  }
  
}
