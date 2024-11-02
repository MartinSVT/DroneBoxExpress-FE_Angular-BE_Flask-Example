import { Component } from '@angular/core';
import { UserMainService } from '../user-main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userService: UserMainService, private router: Router) {}
  
  logout () {
    this.userService.logout();
    this.router.navigate(["/home"]);
  }
}
