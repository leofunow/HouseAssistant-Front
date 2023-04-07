import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './comp/card/card.component';
import { IndexComponent } from './comp/index/index.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "card/:id", component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
