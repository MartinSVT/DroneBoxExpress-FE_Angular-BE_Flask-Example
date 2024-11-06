import { Component, OnInit } from '@angular/core';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { OrdersMainService } from '../orders-main.service';
import { Airport, Order, Route } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders: Order[] = [];
  routes: Route[] = [];
  airports: Airport[] = [];

  constructor(private userService: UserMainService, private ordersService: OrdersMainService) {
  }

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
        console.log(this.orders)
      })
      this.ordersService.listRoutesOrders().subscribe(routes => {
        this.routes = routes
        console.log(this.routes)
      })
      this.ordersService.listAirportsOrders().subscribe(airports => {
        this.airports = airports
        console.log(this.airports)
      })

    }
  }

}
