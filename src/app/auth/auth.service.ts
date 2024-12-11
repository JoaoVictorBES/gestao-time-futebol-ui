import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../auth/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "http://localhost:8080/api";
  private user: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(loginData: Login): Observable<any> {
    return this.http.post<any>(`${this.API}/login`, loginData);
  }

  setUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    return this.user;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
