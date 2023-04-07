import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isLoggedIn = false;
  isLoading = false;
  isError = false;
  token: string | undefined;
}
