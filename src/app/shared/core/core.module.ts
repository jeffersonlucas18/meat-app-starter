import {NgModule} from '@angular/core';
import {ShoppingCartService} from '../../restaurants-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {OrderService} from '../../order/order.service';
import {NgModel} from '@angular/forms';



@NgModule({
  providers: [ShoppingCartService, RestaurantsService, OrderService, NgModel]
})

export class CoreModule {


}
