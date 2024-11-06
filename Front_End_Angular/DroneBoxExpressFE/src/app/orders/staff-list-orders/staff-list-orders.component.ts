import { Component } from '@angular/core';
import { Airport, Order, Route } from 'src/app/shared/interfaces';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { OrdersMainService } from '../orders-main.service';

@Component({
  selector: 'app-staff-list-orders',
  templateUrl: './staff-list-orders.component.html',
  styleUrls: ['./staff-list-orders.component.css']
})
export class StaffListOrdersComponent {
  orders: Order[] = [];
  routes: Route[] = [];
  airports: Airport[] = [];

  constructor(private userService: UserMainService, private ordersService: OrdersMainService) {}

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.ordersService.listUserOrders().subscribe(order => {
        this.orders = order
      })
      this.ordersService.listRoutesOrders().subscribe(routes => {
        this.routes = routes
      })
      this.ordersService.listAirportsOrders().subscribe(airports => {
        this.airports = airports
      })
    }
  }

}
