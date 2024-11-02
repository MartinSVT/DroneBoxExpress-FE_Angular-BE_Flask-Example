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
import { userUpdateURL } from './Environment';


  @Injectable()
  class AppInter implements HttpInterceptor {
    API = 'APIInter';
  
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
      if (req.url.startsWith(this.API)) {
        let tokenValue = {"token":""}
        const curToken = localStorage.getItem("token") || "";
        if (curToken !== "") {
          tokenValue = JSON.parse(curToken)
        }
        req = req.clone({
          url: req.url.replace(this.API, `${userUpdateURL}${this.CurrentUserData.id}/`),
          setHeaders: {Authorization: `TOKEN ${tokenValue.token}`}
        });
      }
      return next.handle(req)
    }
    
  }


export const appInterProvider: Provider = {
  useClass: AppInter,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
