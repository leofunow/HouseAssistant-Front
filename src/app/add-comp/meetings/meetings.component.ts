import { Component } from '@angular/core';
import { ObjectShortInfo } from 'src/app/interfaces/object-short-info';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {

  expandSet = new Set<string>();

  meetingInfo = [{
    _id: '12',
    Date: new Date(),
    objects:[
      {
        _id: "1212",
        pictures: [],
        field: "string",
        address: "string",
        type: "string",
        status: "string",
        area: 20,
      } as ObjectShortInfo,
      {
        _id: "56455",
        pictures: [],
        field: "string",
        address: "string",
        type: "string",
        status: "string",
        area: 20,
      } as ObjectShortInfo,
    ],
    users:[
      {
        _id: "asdasd",
          name: "Ванек",
          desc: "string",
          email: "string",
          contacts: ["string"],
          picture: "https://eanews.ru/uploads/images/2020/september/16/okkupay-pedofilyay-e1381757936342-300x225.jpg",
      },
      {
        _id: "asdasd",
          name: "string",
          desc: "string",
          email: "string",
          contacts: ["string"],
          picture: "string",
      },
    ],
    name: 'Название',
    result: 'Результат',
    status: 'Завершено',
    docs: [
      
    ]
  },{
    _id: '12',
    Date: new Date(),
    objects:[
      {
        _id: "1212",
        pictures: [],
        field: "string",
        address: "string",
        type: "string",
        status: "string",
        area: 20,
      } as ObjectShortInfo,
      {
        _id: "56455",
        pictures: [],
        field: "string",
        address: "string",
        type: "string",
        status: "string",
        area: 20,
      } as ObjectShortInfo,
    ],
    users:[
      {
        _id: "asdasd",
          name: "Ванек",
          desc: "string",
          email: "string",
          contacts: ["string"],
          picture: "https://eanews.ru/uploads/images/2020/september/16/okkupay-pedofilyay-e1381757936342-300x225.jpg",
      },
      {
        _id: "asdasd",
          name: "string",
          desc: "string",
          email: "string",
          contacts: ["string"],
          picture: "string",
      },
    ],
    name: 'Название',
    result: 'Результат',
    status: 'Завершено',
    docs: [
      
    ]
  },
]

  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
