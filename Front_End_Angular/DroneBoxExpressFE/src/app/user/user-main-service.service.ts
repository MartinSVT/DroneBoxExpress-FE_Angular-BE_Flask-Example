import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { loginURL, registerURL, userDeleteURL, userDetailsURL, userUpdateURL } from '../Environment';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserMainService {
  public guest: boolean = true;
  public user: any;

  constructor(private myHttp: HttpClient, private router: Router) {}

  get isLogged(): boolean {
    return !this.guest;
  }

  get userData(): any {
    return this.user
  }

  login(username: string, password: string) {
    return this.myHttp
      .post<any>(loginURL, { username, password}).pipe(
        tap((token) => {
          localStorage.setItem("token", JSON.stringify(token));
          this.userDetaills().subscribe()
          }))
  }

  userDetaills() {
    const curToken = localStorage.getItem("token") || "";
    const tokenValue = JSON.parse(curToken)
    return this.myHttp.get<any>(userDetailsURL, {
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `TOKEN ${tokenValue.token}`
        }
    }).pipe(tap(
      (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
        this.guest = false;
      }))
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.user = null;
    this.guest = true
  }

  register(username: string, email: string, first_name: string, last_name: string, password: string, password2: string) {
    return this.myHttp
      .post<any>(registerURL, { username, email, first_name, last_name, password, password2}).pipe(tap(
        (user) => {
          this.login(user.username, password).subscribe()
        }
        ));
  }

  update(username: string, email: string, first_name: string, last_name: string) {
    return this.myHttp
    .put<any>(`APIInter`, { username, email, first_name, last_name}).pipe(tap(
      (user) => {
        this.userDetaills().subscribe()
      }
      ));
  }

  delete() {
    const curToken = localStorage.getItem("token") || "";
    const tokenValue = JSON.parse(curToken)
    return this.myHttp.delete<any>(
      `${userDeleteURL}${this.user.id}/`,
      {
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `TOKEN ${tokenValue.token}`
        }
      }
    ).pipe(tap(
      () => {
        this.logout();
      }))
  }

}
