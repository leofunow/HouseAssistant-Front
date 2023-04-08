import { Component } from '@angular/core';
import { ObjectShortInfo } from 'src/app/interfaces/object-short-info';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.scss',
    '../../../../node_modules/remixicon/fonts/remixicon.css',
  ],
})
export class IndexComponent {
  isFiltersOpened = false;
  isSortingOpened = false;
  pageNum = 1;
  selectedPage = 1;
  filters: Filter | undefined;

  YAfilters: Filter = 
  {
    type: [],
    status: [],
    district: [],
    field: [],
    maxArea: 0,
    minArea: 0,
  }

  selectedFilters = {
    type: [false],
    status: [false],
    district: [false],
    field: [false],
    maxArea: 0,
    minArea: 0,
  };
  area = [0, 10000];

  submitFilters() {
    console.log(this.selectedFilters);
    if (this.filters) {
      var filtersToPush = this.filters;
      var type: string[] = [];
      var status: string[] = [];
      var district: string[] = [];
      var field: string[] = [];

      this.selectedFilters.district.forEach((x, i) => {
        if (x) {
          district.push(filtersToPush.district[i]);
        }
      });
      this.selectedFilters.field.forEach((x, i) => {
        if (x) {
          field.push(filtersToPush.field[i]);
        }
      });
      this.selectedFilters.type.forEach((x, i) => {
        if (x) {
          type.push(filtersToPush.type[i]);
        }
      });
      this.selectedFilters.status.forEach((x, i) => {
        if (x) {
          status.push(filtersToPush.status[i]);
        }
      });

      this.reloadPage(
        type.length > 0 ? type : undefined,
        status.length > 0 ? status : undefined,
        district.length > 0 ? district : undefined,
        field.length > 0 ? field : undefined,
        this.area[1],
        this.area[0]
      );
      this.closeFilters();
    }
  }

  objects: ObjectShortInfo[] = [];

  changePage(event: any) {
    this.selectedPage = event;
    this.submitFilters();
  }

  constructor(private userHttp: UserHttpService) {
    this.reloadPage();
    userHttp.getFilters().then((data: any) => {
      console.log(data);
      this.filters = data as Filter;
      this.selectedFilters.maxArea = this.filters.maxArea;
      this.area[1] = this.filters.maxArea;
    });
  }

  reloadPage(
    type?: string[],
    status?: string[],
    district?: string[],
    field?: string[],
    maxArea?: number,
    minArea?: number
  ) {
    this.userHttp
      .getPage(
        this.selectedPage - 1,
        undefined,
        undefined,
        status,
        field,
        district,
        type,
        maxArea,
        minArea
      )
      .then((data: any) => {
        console.log(data);
        this.objects = data.objects as ObjectShortInfo[];
        this.pageNum = data.pages;
      });
  }

  openFilters() {
    this.isFiltersOpened = true;
  }
  closeFilters() {
    this.isFiltersOpened = false;
  }
  openSorting() {
    this.isSortingOpened = true;
  }
  closeSorting() {
    this.isSortingOpened = false;
  }
}

interface Filter {
  type: [];
  status: [];
  district: [];
  field: [];
  maxArea: number;
  minArea: number;
}
