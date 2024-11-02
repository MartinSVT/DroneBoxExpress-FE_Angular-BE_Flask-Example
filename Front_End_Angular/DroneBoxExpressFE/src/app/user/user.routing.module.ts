import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'viewProfile', component: ViewComponent},
    { path: 'edithProfile', component: EditComponent},
    { path: 'deleteProfile', component: DeleteComponent},
    { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}