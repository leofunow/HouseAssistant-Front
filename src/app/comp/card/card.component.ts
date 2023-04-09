import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ObjectInfo } from 'src/app/interfaces/object-info';
import { Stage } from 'src/app/interfaces/stage';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss',
    '../../../../node_modules/remixicon/fonts/remixicon.css',
  ],
})
export class CardComponent implements OnInit {
  id: string | null;

  coords: number[] = [];

  curStep = 0;

  object: ObjectInfo | undefined;

  onIndexChange(event: number) {
    this.curStep = event;
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userHttp: UserHttpService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id)
      userHttp.getObject(this.id).then((data: any) => {
        console.log(data);
        
        this.object = {
          ...data.object,
          pictures: data.object.pictures.map((x: any) => {
            if(x.search('http') == -1)
              return "http://localhost:3000/api/public/" + x;
            else
              return x
          }),
          stages: data.object.stages.map((x: any) => {
            return {
              ...x,
              photos: x.photos.map((y: any) => {
                if(y.search('http') == -1)
                  return "http://localhost:3000/api/public/" + y;
                else
                  return y
              }),
              current_date: new Date(x.current_date),
              limit_date: new Date(x.limit_date),
            };
          }),
          owner: data.owner,
          fact_us: data.fact_us,
        } as ObjectInfo;

        console.log(this.object);
        
      
        var sub = http
          .get(
            'https://geocode-maps.yandex.ru/1.x?geocode=' +
            this.object.address + ", " +
            this.object.district + " район, " +
            this.object.field +' округ' +
              '&apikey=81dcd694-7601-4387-bd05-996e3e78db3d&format=json'
          )
          .subscribe((data: any) => {
            this.coords =
              data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
                ' '
              ) as number[];
            this.coords = this.coords.reverse();
            sub.unsubscribe();
          });
      });
  }
  ngOnInit(): void {}
}
