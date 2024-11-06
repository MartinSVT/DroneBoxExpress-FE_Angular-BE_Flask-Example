import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { StaffListOrdersComponent } from './staff-list-orders/staff-list-orders.component';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { CompleteOrderComponent } from './complete-order/complete-order.component';

const routes: Routes = [
    { path: 'orders', component: ListOrdersComponent},
    { path: 'addOrder', component: CreateNewOrderComponent},
    { path: 'staffOrders', component: StaffListOrdersComponent},
    { path: 'editOrder', children: [
       {path: ':orderId', component: EditOrderComponent}]},
    { path: 'viewOrder', children: [
      {path: ':orderId', component: ViewOrderComponent}]},
    { path: 'deleteOrder', children: [
      {path: ':orderId', component: DeleteOrderComponent}]},
    { path: 'completeOrder', children: [
      {path: ':orderId', component: CompleteOrderComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}