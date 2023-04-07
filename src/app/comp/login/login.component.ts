import {Component, OnInit} from '@angular/core';

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
  

  ngOnInit(): void {
  }

}
  
