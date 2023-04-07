import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './comp/card/card.component';
import { IndexComponent } from './comp/index/index.component';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "card/:id", component: CardComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
