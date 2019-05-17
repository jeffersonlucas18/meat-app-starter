import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';
import {OrderTensComponent} from './order-tens/order-tens.component';
import {RouterModule, Routes} from '@angular/router';

const ROUTES: Routes =  [
  {path: '', component: OrderComponent}
];

@NgModule({
  declarations: [OrderComponent, DeliveryCostsComponent, OrderTensComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  exports: [OrderComponent, DeliveryCostsComponent, OrderTensComponent, SharedModule]
})

export class OrderModule {}
