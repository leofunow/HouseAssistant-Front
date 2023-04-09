import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLoggedIn = true;
  isLoading = false;
  isError = false;
  token: string | undefined;
  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router,private userHttp: UserHttpService, private message: NzMessageService) {
    
  }

  login(){
    this.isLoading = true;
    let email = this.loginFormGroup.value['email']
    let password = this.loginFormGroup.value['password']
    if(email && password)
    this.userHttp.login(email , password).then(
       (data: any) => {
        localStorage.setItem('token', data.key);
        this.isLoading = false;
        this.message.success("Добро пожаловать!");
        this.isLoggedIn = true;
        this.router.navigate(['.']);
      }).catch(
        (error: any) => {
          this.message.error("Ошибка входа, попробуйте снова!");
          this.isLoading = false;
          this.isError = true;
        }
      )
      else {
        this.message.warning("Введите данные для входа!");
        this.isLoading = false;
        this.isError = true;
      }
  }

  ngOnInit(): void {

  }

}
  
