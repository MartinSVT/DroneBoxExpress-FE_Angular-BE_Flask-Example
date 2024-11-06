import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { StaffListOrdersComponent } from './staff-list-orders/staff-list-orders.component';
import { OrderRoutingModule } from './orders.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompleteOrderComponent } from './complete-order/complete-order.component';



@NgModule({
  declarations: [
    CreateNewOrderComponent,
    EditOrderComponent,
    DeleteOrderComponent,
    ViewOrderComponent,
    ListOrdersComponent,
    StaffListOrdersComponent,
    CompleteOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    RouterModule,
  ],
  exports: [
    CreateNewOrderComponent,
    EditOrderComponent,
    DeleteOrderComponent,
    ViewOrderComponent,
    ListOrdersComponent,
    StaffListOrdersComponent,
    CompleteOrderComponent
  ]
})
export class OrdersModule { }
