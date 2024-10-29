import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OperationsModule } from './operations/operations.module';
import { OrdersModule } from './orders/orders.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthStateComponent } from './auth-state/auth-state.component';
import { appInterProvider } from './app-inter';
import { AppMainInterProvider } from './app-main-inter';

@NgModule({
  declarations: [
    AppComponent,
    AuthStateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    OperationsModule,
    OrdersModule,
    SharedModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [appInterProvider, AppMainInterProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
