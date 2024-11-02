import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LogoutComponent } from './logout/logout.component';
import { UserRoutingModule } from './user.routing.module';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EditComponent,
    DeleteComponent,
    LogoutComponent,
    ViewComponent
  ],
// Add Custom Modules if necessary to use their components
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    EditComponent,
    DeleteComponent,
    LogoutComponent,
    ViewComponent
  ]
})
export class UserModule { }
