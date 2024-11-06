import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Order } from 'src/app/shared/interfaces';
import { OrdersMainService } from '../orders-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.css']
})
export class CompleteOrderComponent implements OnInit {
  order = {} as Order;

  constructor(
    private myFormBuilder: FormBuilder, 
    private orderService: OrdersMainService, 
    private activeRoute: ActivatedRoute, 
    private userServica: UserMainService, 
    private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['orderId'];

    this.orderService.getOrder(id).subscribe((order) => {
      this.order = order;  
    });
    });
  }

  completeOrder(id: Number) {
    let routeId = `${this.order.order_route}`
    let orderWeight = `${this.order.weight}`
    let orderCost = `${this.order.cost}`

    this.orderService.updateOrder(
      this.order.id, 
      this.order.order_user, 
      routeId, 
      orderWeight, 
      orderCost, 
      "Completed").subscribe(() => {
        this.router.navigate([`/viewOrder/${this.order.id}`]);
      });
  }

}
