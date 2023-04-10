import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DisabledTimeFn } from 'ng-zorro-antd/date-picker';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent {

  listOfUser: string[] = []
  listOfObject: string[] = []

  addMeeting = new FormGroup({
    name: new FormControl(''),
    users: new FormControl([]),
    objects: new FormControl([]),
    date: new FormControl(''),
  })

  constructor(private userHttp: UserHttpService, private msg: NzMessageService, private router: Router) {
    
  }

  searchUser(event:any){
    this.userHttp.getUserByName(event).then((data: any) => {
      this.listOfUser = data;
    });
  }
  
  searchObject(event:any){
    this.userHttp.getObjectsByName(event).then((data: any) => {
      this.listOfObject = data;
    })
  }

  disabledDateTime: DisabledTimeFn = () => ({
    nzDisabledHours: () => [],
    nzDisabledMinutes: () => [],
    nzDisabledSeconds: () => [...Array(59).keys()].splice(1,59),
  });

  submitForm(){
    console.log(this.addMeeting.value);
    this.userHttp.addMeeting(this.addMeeting.value).then((data: any) => {
      this.router.navigate(['/']);
      this.msg.success('Совещание успешно добавлено');
    }).catch((err) => {
      this.msg.error('Ошибка при добавлении');
    })
  }

}
