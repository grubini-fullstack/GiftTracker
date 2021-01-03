import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent, Event } from '@angular/router';
import { AuthService } from 'src/shared/service/auth.service';
import { filter } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'GiftTracker';
  isAuthenticated = false;
  appear = false;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      if (e.url === "/login") {
        this.appear = false;
      } else {
        this.appear = true;
      }
    });

    this.authService.autoLogin();

    this.authService.user.subscribe(user => {
      if (user.session.id !== '') {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }
}
