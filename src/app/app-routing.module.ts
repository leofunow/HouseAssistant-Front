import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './comp/card/card.component';
import { IndexComponent } from './comp/index/index.component';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { UserInfoComponent } from './comp/user-info/user-info.component';
import { AddCardComponent } from './comp/add-card/add-card.component';
import { DocsComponent } from './comp/docs/docs.component';
import { ProfileComponent } from './comp/profile/profile.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "card/:card_id/user/:user_id", component: UserInfoComponent
  },
  {
    path: "card/:card_id/docs", component: DocsComponent
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
    path: "addCard", component: AddCardComponent
  },
  {
    path: "user/:id", component: UserInfoComponent
  },
  {
    path: "profile", component: ProfileComponent
  },
  {
    path: "**", component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
