import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport, Order, Route } from 'src/app/shared/interfaces';
import { OrdersMainService } from '../orders-main.service';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  order = {} as Order;
  route = {} as Route;
  originAirport = {} as Airport;
  destinationAirport = {} as Airport;
  routes: Route[] = [];
  airports: Airport[] = [];
  is_touched: boolean = false

  constructor(private myFormBuilder: FormBuilder, private orderService: OrdersMainService, private activeRoute: ActivatedRoute, private userServica: UserMainService, private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  orderUpdateForm = this.myFormBuilder.group({
    route: [`${this.route}`, [Validators.required, ]],
    weight: [`${this.order.weight}`, [Validators.required, Validators.min(0.01)]],
    cost: [`${this.order.cost}`, [Validators.required, Validators.min(0.01)]]
  });

  calculateCost(event: Event, weightVal: any): void {
    event.preventDefault();
    const cost: number = Number(weightVal) * 23
    if (cost <= 0) {
      return
    } 
    this.orderUpdateForm.get("cost")?.setValue(String(cost))
    const weightField = this.orderUpdateForm.get("weight")
    weightField?.markAsUntouched()
    const routeField = this.orderUpdateForm.get("route")
    routeField?.markAsUntouched()
  }

  updateOrder() {
    if (this.orderUpdateForm.invalid) {
      return;
    }
    let routeId = this.orderUpdateForm.value.route as String
    let orderWeight = this.orderUpdateForm.value.weight as String
    let orderCost: String = this.orderUpdateForm.value.cost as String

    this.orderService.updateOrder(
      this.order.id, 
      this.CurrentUserData.id, 
      routeId, 
      orderWeight, 
      orderCost, 
      this.order.order_status).subscribe(() => {
        this.router.navigate([`/viewOrder/${this.order.id}`]);
      });

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['orderId'];

    this.orderService.listRoutesOrders().subscribe(routes => {
      this.routes = routes
      console.log(this.routes)
    })

    this.orderService.listAirportsOrders().subscribe(airports => {
      this.airports = airports
      console.log(this.airports)
    })

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
        this.orderUpdateForm.get("cost")?.setValue(String(this.order.cost))
        this.orderUpdateForm.get("weight")?.setValue(String(this.order.weight))
        this.orderUpdateForm.get("route")?.setValue(String(this.route.id))
      })
    });
    });
  }

}
