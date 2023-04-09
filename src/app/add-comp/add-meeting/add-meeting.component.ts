import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisabledTimeFn } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent {

  listOfUser: string[] = []

  addMeeting = new FormGroup({
    name: new FormControl(''),
    users: new FormControl([]),
    objects: new FormControl([]),
    date: new FormControl(''),
  })

  disabledDateTime: DisabledTimeFn = () => ({
    nzDisabledHours: () => [],
    nzDisabledMinutes: () => [],
    nzDisabledSeconds: () => [...Array(59).keys()].splice(1,59),
  });

  submitForm(){
    console.log(this.addMeeting.value);
  }

}
