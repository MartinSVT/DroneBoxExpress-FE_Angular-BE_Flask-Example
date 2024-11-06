import { Component, OnInit } from '@angular/core';
import { AuthStateComponent } from 'src/app/auth-state/auth-state.component';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { OperationsMainService } from '../operations-main.service';
import { Airport, Route } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  routes: Route[] = [];
  airports: Airport[] = [];

  constructor(private userService: UserMainService, private opsService: OperationsMainService) {}

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.opsService.listRoutes().subscribe(routes => {
        this.routes = routes
      })
      this.opsService.listAirports().subscribe(airports => {
        this.airports = airports
      })

    }
  }

}
