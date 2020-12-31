import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/shared/model/user.model';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user = new Subject<User>();

  constructor(private http: HttpClient) { }

  exists() { return this.http.get<boolean>('http://127.0.0.1:3000/user/login'); }

  login(username: string, password: string) {
    return this.http.post<User>(
      'http://127.0.0.1:3000/user/login',
      { username, password }
    )
      .pipe(
        tap(loggedUser => this.handleAuthentication(loggedUser))
      );
  }
  handleAuthentication(userToAuthenticate: User) {
    this.user.next(userToAuthenticate);
  }

  logout() {

  }

  signup(user: User) {
    return this.http.post<User>(
      'http://127.0.0.1:3000/user/create',
      user
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

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error has ocurred';

  }
}