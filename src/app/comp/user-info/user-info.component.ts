import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  id: string | null;
  card_id: string | null;

  constructor(private route: ActivatedRoute) {
    // get id from router
    this.id = this.route.snapshot.paramMap.get('user_id');
    this.card_id = this.route.snapshot.paramMap.get('card_id');
   }

}
