import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectShortInfo } from 'src/app/interfaces/object-short-info';
import { UserInfo } from 'src/app/interfaces/user-info';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  @Input()
  id: string | null;
  @Input()
  isLk: boolean = false;
  card_id: string | null | undefined;
  userInfo: UserInfo | undefined;

  constructor(private route: ActivatedRoute, private userHttp: UserHttpService) {
    // get id from router
    this.id = this.route.snapshot.paramMap.get('user_id');
    this.card_id = this.route.snapshot.paramMap.get('card_id');
    console.log(this.id == null);
    
    if (this.id !== undefined)
      userHttp.getUser(this.id ? this.id : '0').then((data: any) => {
        this.userInfo = {
          ...data.user,
          objects: (data.objects as ObjectShortInfo[]).map((el) => {
            el.pictures = el.pictures.map((x) => {
              if (x.search('http') == -1)
                return 'http://localhost:3000/api/public/' + x;
              else return x;
            });
            return el;
          })
        } as UserInfo;
        console.log(this.userInfo);
      });

      
      

   }

}
