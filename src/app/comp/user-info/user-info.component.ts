import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  card_id: string | null;
  userInfo: UserInfo | undefined;

  constructor(private route: ActivatedRoute, private userHttp: UserHttpService) {
    // get id from router
    this.id = this.route.snapshot.paramMap.get('user_id');
    this.card_id = this.route.snapshot.paramMap.get('card_id');

    if (this.id)
      userHttp.getUser(this.id).then((data: any) => {
        this.userInfo = {
          ...data.user,
          objects: data.objects
        } as UserInfo;
        console.log(this.userInfo);
      });

      
      

   }

}
