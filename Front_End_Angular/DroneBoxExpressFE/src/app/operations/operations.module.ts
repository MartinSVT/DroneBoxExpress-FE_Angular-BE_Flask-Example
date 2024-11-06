import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { AirportAddComponent } from './airport-add/airport-add.component';
import { AirportEditComponent } from './airport-edit/airport-edit.component';
import { AirportDeleteComponent } from './airport-delete/airport-delete.component';
import { RouteAddComponent } from './route-add/route-add.component';
import { RouteEditComponent } from './route-edit/route-edit.component';
import { RouteDeleteComponent } from './route-delete/route-delete.component';
import { RouterModule } from '@angular/router';
import { OperationsRoutingModule } from './opertations.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainViewComponent,
    AirportAddComponent,
    AirportEditComponent,
    AirportDeleteComponent,
    RouteAddComponent,
    RouteEditComponent,
    RouteDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OperationsRoutingModule,
    RouterModule,
  ],
  exports: [
    MainViewComponent,
    AirportAddComponent,
    AirportEditComponent,
    AirportDeleteComponent,
    RouteAddComponent,
    RouteEditComponent,
    RouteDeleteComponent
  ]
})
export class OperationsModule { }
