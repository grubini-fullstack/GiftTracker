import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/shared/model/user.model';
import { map, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject, Subject, throwError } from 'rxjs';
import { Session } from '../model/session.model';

export interface AuthResponseData {
  data: {
    firstname: string;
    lastname: string;
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
  public user: Subject<User> = new BehaviorSubject<User>(new User('', '', new Session('', '', '', '')));

  constructor(private http: HttpClient) { }

  exists() { return this.http.get<boolean>('http://127.0.0.1:3000/user/login'); }

  login(username: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:3000/user/login',
      { username, password }
    )
      .pipe(
        map(result => result.data),
        catchError(this._handleError),
        tap(data => this._handleAuthentication(data.firstname, data.lastname, data.session._id, data.session.token, data.session.creation_date, data.session.duration_hrs))
      );
  }
  logout() {
    this.user.next(new User('', '', new Session('', '', '', '')));
  }

  signup(user: User) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:3000/user/create',
      user
    ).pipe(
      map(result => result.data),
      tap(data => this._handleAuthentication(data.firstname, data.lastname, data.session._id, data.session.token, data.session.creation_date, data.session.duration_hrs))
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
  private _handleAuthentication(firstname: string, lastname: string, sessionId: string, sessionToken: string, sessionDate: string, sessionDuration: string) {
    this.user.next(new User(firstname, lastname, new Session(sessionId, sessionToken, sessionDate, sessionDuration)));
  }
}