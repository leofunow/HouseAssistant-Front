import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss',
    '../../../../node_modules/remixicon/fonts/remixicon.css',
  ],
})
export class CardComponent {

  coords: number[] = []

  constructor(private http: HttpClient) {
    var sub = http.get('https://geocode-maps.yandex.ru/1.x?geocode='+ 'Москва улица академика анохина 13'
    +'&apikey=81dcd694-7601-4387-bd05-996e3e78db3d&format=json').subscribe(
      (data: any) => {
        this.coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ') as number[]
        this.coords = this.coords.reverse()
        sub.unsubscribe();
      }
    )
  }
}
