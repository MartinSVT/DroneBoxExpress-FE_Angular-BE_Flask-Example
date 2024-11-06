import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersMainService } from '../orders-main.service';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { Router } from '@angular/router';
import { Airport, Route } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-new-order',
  templateUrl: './create-new-order.component.html',
  styleUrls: ['./create-new-order.component.css']
})
export class CreateNewOrderComponent implements OnInit {
  routes: Route[] = [];
  airports: Airport[] = [];
  
  constructor(private myFormBuilder: FormBuilder, private orderService: OrdersMainService, private userServica: UserMainService, private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  newOrderForm = this.myFormBuilder.group({
    route: ['', [Validators.required, ]],
    weight: ['', [Validators.required, Validators.min(0.01)]],
    cost: ['', [Validators.required, Validators.min(0.01)]]
  });
  

  createOrder(): void {
    if (this.newOrderForm.invalid) {
      return;
    }

    let routeId = this.newOrderForm.value.route as String
    let orderWeight = this.newOrderForm.value.weight as String
    let orderCost = this.newOrderForm.value.cost as String

    this.orderService.CreateOrder(this.CurrentUserData.id, routeId, orderWeight, orderCost, "Scheduled").subscribe(() => {
      this.router.navigate([`/orders`]);
    });

    
  }

  calculateCost(event: Event, weightVal: any): void {
    event.preventDefault();
    const cost: number = Number(weightVal) * 23
    if (cost <= 0) {
      return
    } 
    this.newOrderForm.get("cost")?.setValue(String(cost))
    const weightField = this.newOrderForm.get("weight")
    weightField?.markAsUntouched()
    const routeField = this.newOrderForm.get("route")
    routeField?.markAsUntouched()
  }

  ngOnInit(): void {

    this.orderService.listRoutesOrders().subscribe(routes => {
      this.routes = routes
      console.log(this.routes)
    })

    this.orderService.listAirportsOrders().subscribe(airports => {
      this.airports = airports
      console.log(this.airports)
    })
  }
  
}
