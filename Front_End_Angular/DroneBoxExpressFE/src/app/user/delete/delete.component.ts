import { Component } from '@angular/core';
import { UserMainService } from '../user-main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor (private userService: UserMainService, private router: Router) {}

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }

  deleteUser(e: Event) {
    e.preventDefault();
    this.userService.delete().subscribe(() => {
      this.router.navigate(['/login']);
    });

  }
}
