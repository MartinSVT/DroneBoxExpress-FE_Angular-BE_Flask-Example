import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { UserMainService } from './user/user-main-service.service';


  @Injectable()
  class AppMainInter implements HttpInterceptor {
    APIkey = 'ENDPOINT';
  
    constructor(private router: Router, private userService: UserMainService) {}

    get isLoggedIn():boolean {
        return this.userService.isLogged;
      }
    get CurrentUserData():any {
        return this.userService.userData;
      }

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      if (req.url.startsWith(this.APIkey)) {
        let tokenValue = {"token":""}
        const curToken = localStorage.getItem("token") || "";
        if (curToken !== "") {
          tokenValue = JSON.parse(curToken)
        }
        req = req.clone({
          url: req.url.replace(this.APIkey, ``),
          setHeaders: {Authorization: `TOKEN ${tokenValue.token}`}
        });
      }
      return next.handle(req).pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.router.navigate(['/404']);
          } else {
            if (err.error.non_field_errors) {
                this.router.navigate(['/loginError']);
            }
            if (err.error.email) {
              this.router.navigate(['/emailError']);
            }
            if (err.error.username) {
              this.router.navigate(['/usernameError']);
            }
          }
          return [err];
        })
      );
    }
  }


export const AppMainInterProvider: Provider = {
    useClass: AppMainInter,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}
