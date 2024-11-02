import { Component } from '@angular/core';
import { UserMainService } from '../user-main-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private userService: UserMainService) {
  }
  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }
}
