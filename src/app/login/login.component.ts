import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    const { username, password } = form.value;
    this.authService.login(username, password).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
  onSignUp() {
    console.log('i want to sign in');
  }

}
