import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';
import {CartItemModel} from '../restaurants-detail/shopping-cart/cart-item.model';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/map';
import {MEAT_API} from '../app.api';

@Injectable()

  export class OrderService {

  constructor(private cartService: ShoppingCartService,
             private http: HttpClient) {
  }
  itensValue(): number {
    return this.cartService.total();
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
  clear(){
    this.cartService.clear();
  }

  checkCompra(compra: OrderModel): Observable<string> {
    return this.http.post<OrderModel>(`${MEAT_API}/orders`, compra).map(compra=> compra.id);
  }
}



