import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './comp/card/card.component';
import { IndexComponent } from './comp/index/index.component';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { UserInfoComponent } from './comp/user-info/user-info.component';


const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "card/:card_id/user/:user_id", component: UserInfoComponent
  },
  {
    path: "card/:id", component: CardComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "user/:id", component: UserInfoComponent
  },
  {
    path: "**", component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
