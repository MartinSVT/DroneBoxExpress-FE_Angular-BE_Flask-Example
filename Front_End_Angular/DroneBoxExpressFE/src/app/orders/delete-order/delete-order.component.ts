import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces';
import { OrdersMainService } from '../orders-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent  implements OnInit {
  order = {} as Order;
  
  constructor( private orderService: OrdersMainService, private activeRoute: ActivatedRoute, private userServica: UserMainService, private router: Router) {}

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

  deleteCurrentOrder(id: Number) {
    this.orderService.deleteOrder(id).subscribe(() => {
      if (this.CurrentUserData.is_staff) {
        this.router.navigate([`/staffOrders`]);
      } else {
        this.router.navigate([`/orders`]);
      }
    });
  }
}
