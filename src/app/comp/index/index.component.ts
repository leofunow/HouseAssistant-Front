  import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss', '../../../../node_modules/remixicon/fonts/remixicon.css']
})
export class IndexComponent {

  isFiltersOpened = false
  isSortingOpened = false


  selectCard(id: string) {
    window.location.href = `/card/${id}`
  }

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
