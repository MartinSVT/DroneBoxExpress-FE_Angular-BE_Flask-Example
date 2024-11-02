import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserMainService } from '../user-main-service.service';
import { Router } from '@angular/router';
import { matchPassVal } from 'src/app/shared/passMatchValidator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private myFormBuilder: FormBuilder, private userService: UserMainService, private router: Router) {}

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }

  edithForm = this.myFormBuilder.group({
    username: [`${this.CurrentUserData.username}`, [Validators.required, Validators.minLength(2)]],
    email: [`${this.CurrentUserData.email}`, [Validators.required, Validators.email]],
    firstName: [`${this.CurrentUserData.first_name}`, [Validators.required, Validators.minLength(2)]],
    lastName: [`${this.CurrentUserData.last_name}`, [Validators.required, Validators.minLength(2)]],
    // Form Fields for ChangePassword functionality
    // passGroup: this.myFormBuilder.group(
    //   {
    //     password1: ['', [Validators.required]],
    //     password2: ['', [Validators.required]],
    //   },
    //   {
    //     validators: [matchPassVal('password1', 'password2')],
    //   }
    // ),
  });
  
  get passGroup() {
    return this.edithForm.get('passGroup');
  }

  updateUser() {
    if (this.edithForm.invalid) {
      return;
    }
    let username = this.edithForm.value.username as string
    let email = this.edithForm.value.email as string
    let firstName = this.edithForm.value.firstName as string
    let lastName = this.edithForm.value.lastName as string
    // let pass1 = this.edithForm.value.passGroup?.password1 as string
    // let pass2 = this.edithForm.value.passGroup?.password2 as string
    this.userService.update(username, email,firstName,lastName).subscribe(() => {
      this.router.navigate(['/viewProfile']);
    });
  }

}
