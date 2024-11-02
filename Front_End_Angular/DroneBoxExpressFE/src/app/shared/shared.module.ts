import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { LoingFailureComponent } from './loing-failure/loing-failure.component';
import { UsernameErrorComponent } from './username-error/username-error.component';
import { EmailErrorComponent } from './email-error/email-error.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ErrorComponent,
    LoingFailureComponent,
    UsernameErrorComponent,
    EmailErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    LoingFailureComponent,
    UsernameErrorComponent,
    EmailErrorComponent
  ]
})
export class SharedModule { }
