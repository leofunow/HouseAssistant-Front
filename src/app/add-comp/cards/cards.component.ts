import { Component } from '@angular/core';
import { ObjectShortInfo } from 'src/app/interfaces/object-short-info';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  objects: ObjectShortInfo[] = [];

  constructor(private userHttp: UserHttpService) {
    userHttp.getMyObjects().then((data: any) => {
      this.objects = data as ObjectShortInfo[];
      this.objects = this.objects.map((el) => {
        el.pictures = el.pictures.map((x) => {
          if (x.search('http') == -1)
            return 'http://localhost:3000/api/public/' + x;
          else return x;
        });
        return el;
      });
    });
  }
}
