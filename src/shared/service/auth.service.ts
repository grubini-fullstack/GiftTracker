import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/shared/model/user.model';
import { map, tap, catchError, take } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { Session } from '../model/session.model';
import { Item } from '../model/item.model';

export interface AuthResponseData {
  data: {
    user: any,
    session: {
      _id: string;
      token: string;
      creation_date: string;
      duration_hrs: string;
    };
  }
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user: Subject<User> = new BehaviorSubject<User>(new User('', '', new Session('', '', '', ''), '', '', false, new Date(), [], [], [], []));

  constructor(private http: HttpClient) { }

  exists() { return this.http.get<boolean>('http://127.0.0.1:3000/user/login'); }

  autoLogin() {
    const loggedInUser: any = JSON.parse(localStorage.getItem('loggedInUser') || '');
    if (loggedInUser === '') {
      return;
    }
    const { _firstname, _lastname, _email, _phone, _birthday, _watchlist, _wishlist, _socialwishlist, _friends } = loggedInUser;
    const { _id, _token, _creation_date, _duration_hrs } = loggedInUser._session;
    const autoUser = new User(_firstname, _lastname, new Session(_id, _token, _creation_date, _duration_hrs), _email, _phone, false, _birthday, _watchlist, _wishlist, _socialwishlist, _friends);
    this.user.next(autoUser);
  }
  login(username: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:3000/user/login',
      { username, password }
    )
      .pipe(
        map(result => result.data),
        catchError(this._handleError),
        tap(data => this._handleAuthentication(data.user, data.session))
      );
  }
  logout() {
    this.user.next(new User('', '', new Session('', '', '', ''), '', '', false, new Date(), [], [], [], []));
    localStorage.removeItem('loggedInUser');
  }
  autoLogOut() {
    // LATER
  }

  signup(user: User) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:3000/user/create',
      user
    ).pipe(
      map(result => result.data),
      tap(data => this._handleAuthentication(data.user, data.session))
    );
  }

  update(user: User) {
    return this.http.put<User>(
      'http://127.0.0.1:3000/user/create',
      user
    );
  }

  errase(username: string, password: string) {
    return this.http.delete<boolean>(
      'http://127.0.0.1:3000/user/login',
      {
        params: { username, password }
      }
    );
  }

  private _handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error has ocurred';
    return throwError(errorMessage);
  }
  private _handleAuthentication(user: any, session: any) {
    const { firstname, lastname, email, phone, notification, birthday, watchlist, wishlist, socialwishlist, friends } = user;
    const { _id, token, creation_date, duration_hrs } = session;

    const loggedInUser = new User(firstname, lastname, new Session(_id, token, creation_date, duration_hrs), email, phone, notification, birthday, watchlist, wishlist, socialwishlist, friends);
    this.user.next(loggedInUser);
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }
}