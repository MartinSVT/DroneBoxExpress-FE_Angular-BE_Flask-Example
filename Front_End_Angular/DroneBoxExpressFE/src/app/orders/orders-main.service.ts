import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirportsURL, OrdersURL, RoutesURL } from '../Environment';
import { tap } from 'rxjs';
import { Airport, Order } from '../shared/interfaces';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersMainService {
  
  constructor(private myHttp: HttpClient) {}

  listUserOrders() {
    return this.myHttp
      .get<any>(OrdersURL, {});
  }

  listRoutesOrders() {
    return this.myHttp
      .get<any>(RoutesURL, {});
  }

  listAirportsOrders() {
    return this.myHttp
      .get<any>(AirportsURL, {});
  }

  getOrder(id: string) {
    return this.myHttp.get<Order>(`${OrdersURL}/${id}`);
  }

  getRoute(id: Number) {
    return this.myHttp.get<Route>(`${RoutesURL}/${id}`);
  }

  getAirport(id: Number) {
    return this.myHttp.get<Airport>(`${AirportsURL}/${id}`);
  }

  updateOrder(id: Number, user_id: Number, route_id: String, weight: String, cost: String, orderStatus: String) {
    return this.myHttp.put<Order>(
      `${OrdersURL}/${id}/`, {
        "id": id,
        "weight": weight,
        "cost": cost,
        "order_status": orderStatus,
        "order_route": route_id,
        "order_user": user_id
    }
    )
  }

  CreateOrder(user_id: Number, route_id: String, weight: String, cost: String, orderStatus: String) {
    return this.myHttp.post<Order>(
      `${OrdersURL}/`, {
        "weight": weight,
        "cost": cost,
        "order_status": orderStatus,
        "order_route": route_id,
        "order_user": user_id
    }
    )
  }

  deleteOrder(order_id: Number) {
    return this.myHttp.delete(
      `${OrdersURL}/${order_id}/`, {}
    )
  }
}
