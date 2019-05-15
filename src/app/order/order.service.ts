import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';
import {CartItemModel} from '../restaurants-detail/shopping-cart/cart-item.model';
@Injectable()

  export class OrderService {

  constructor(private cartService: ShoppingCartService) {
  }
  itensValue(): number {
    return ShoppingCartService.total();
  }
  cartItem(): CartItemModel[] {
    return this.cartService.itens;
  }
  increaseQty(item: CartItemModel) {
    return this.cartService.increaseQty(item);
  }
  desincreaseQty(item: CartItemModel) {
    return this.cartService.desincreaseQty(item);
  }
  remove(item: CartItemModel) {
    return this.cartService.removeItem(item);
  }
}


