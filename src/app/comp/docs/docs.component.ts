import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss', '../../../../node_modules/remixicon/fonts/remixicon.css'],
})
export class DocsComponent {
  card_id: string | null;
  constructor(private route: ActivatedRoute) {
    this.card_id = this.route.snapshot.paramMap.get('card_id');
  }
}
