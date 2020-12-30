import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/shared/model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<User>(
      'http://127.0.0.1:3000/user/login',
      { username, password }
    );
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
      { username, password }
    );
  }
}