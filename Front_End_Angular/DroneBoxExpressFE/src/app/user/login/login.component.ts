import { Component } from '@angular/core';
import { UserMainService } from '../user-main-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserMainService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.login(form.value.username, form.value.password).subscribe(() => {
      this.router.navigate(['/home'])
      })
  }
}
