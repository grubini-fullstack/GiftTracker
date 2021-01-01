import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    const { username, password } = form.value;
    this.authService.login(username, password)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error => console.log(error)
      );
  }
  onSignUp() {
    console.log('i want to sign in');
  }

}
