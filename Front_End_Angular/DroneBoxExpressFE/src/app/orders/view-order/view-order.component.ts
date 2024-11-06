import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airport, Order, Route } from 'src/app/shared/interfaces';
import { OrdersMainService } from '../orders-main.service';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  order = {} as Order;
  route = {} as Route;
  originAirport = {} as Airport;
  destinationAirport = {} as Airport;

  constructor( private orderService: OrdersMainService, private activeRoute: ActivatedRoute, private userServica: UserMainService) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['orderId'];

    this.orderService.getOrder(id).subscribe((order) => {
      this.order = order;
      console.log(this.order)
      this.orderService.getRoute(this.order.order_route).subscribe((data) => {
        this.route = data as Route;
        console.log(this.route)
        this.orderService.getAirport(this.route.origin_airport).subscribe((data) => {
          this.originAirport = data
          console.log(data)
        })
        this.orderService.getAirport(this.route.destination_airport).subscribe((data) => {
          this.destinationAirport = data
          console.log(data)
        })
      })
    });
    });
  }


}
