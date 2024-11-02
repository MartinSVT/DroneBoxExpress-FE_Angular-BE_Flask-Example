import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPassVal } from 'src/app/shared/passMatchValidator';
import { UserMainService } from '../user-main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private myFormBuilder: FormBuilder, private userService: UserMainService, private router: Router) {}

  regForm = this.myFormBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    passGroup: this.myFormBuilder.group(
      {
        password1: ['', [Validators.required]],
        password2: ['', [Validators.required]],
      },
      {
        validators: [matchPassVal('password1', 'password2')],
      }
    ),
  });
  
  get passGroup() {
    return this.regForm.get('passGroup');
  }

  register(): void {
    if (this.regForm.invalid) {
      return;
    }
    let username = this.regForm.value.username as string
    let email = this.regForm.value.email as string
    let firstName = this.regForm.value.firstName as string
    let lastName = this.regForm.value.lastName as string
    let pass1 = this.regForm.value.passGroup?.password1 as string
    let pass2 = this.regForm.value.passGroup?.password2 as string
    this.userService.register(username, email,firstName,lastName,pass1,pass2,).subscribe(() => {
      this.router.navigate(['/home']);
    });
    // Add error handling for server down
  }
}
