import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ObjectShortInfo } from 'src/app/interfaces/object-short-info';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent {
  expandSet = new Set<string>();

  curPage = 1;
  pages = 1;

  result: string[] = [];

  putResult(id:string, i: number){
    console.log(this.result[i], id);
    this.userHttp.setRes(id, this.result[i]).then((res: any) => {
      this.msg.success('Результат успешно обновлен');
      // navigate same direction as route
      this.expandSet.clear()
      this.reload();

    })
  }

  meetingInfo: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userHttp: UserHttpService,
    private msg: NzMessageService
  ) {
    this.reload()
  }

  reload() {
    this.userHttp.getMeetingsPage(this.curPage - 1).then((res: any) => {
      this.pages = res.pages;
      let objs = res.meetings.map((obj: any) => {
        return {
          _id: obj._doc._id,
          Date: new Date(obj._doc.date),
          name: obj._doc.name,
          result: obj._doc.result,
          status: obj._doc.status,
          users: obj.users,
          objects: obj.objects,
      }})
      this.meetingInfo = objs;
      this.result = this.meetingInfo.map((obj: any) => {
        return obj.result
      })
      console.log(res.meetings[0]._doc);
      console.log(objs[0]);
    });
  }


  onChangePage(event: any) {
    this.curPage = event;
    this.reload();
  }

  addMeeting() {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { menu: 'addMeeting' },
    });
  }

  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
