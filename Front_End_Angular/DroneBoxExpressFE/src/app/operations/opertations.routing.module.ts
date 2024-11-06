import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportAddComponent } from './airport-add/airport-add.component';
import { RouteAddComponent } from './route-add/route-add.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AirportEditComponent } from './airport-edit/airport-edit.component';
import { AirportDeleteComponent } from './airport-delete/airport-delete.component';
import { RouteEditComponent } from './route-edit/route-edit.component';
import { RouteDeleteComponent } from './route-delete/route-delete.component';

const routes: Routes = [
    { path: 'operations', component: MainViewComponent},
    { path: 'addAirport', component: AirportAddComponent },
    { path: 'editAirport', children: [
      {path: ':airportId', component: AirportEditComponent}]},
    { path: 'deleteAirport', children: [
      {path: ':airportId', component: AirportDeleteComponent}]},
    { path: 'addRoute', component: RouteAddComponent },
    { path: 'editRoute', children: [
      {path: ':routetId', component: RouteEditComponent}]},
    { path: 'deleteRoute', children: [
      {path: ':routeId', component: RouteDeleteComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsRoutingModule {}