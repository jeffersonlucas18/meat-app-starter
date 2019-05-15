import { Component, OnInit } from '@angular/core';
import {RadioModel} from '../shared/radio/radio.model';
import {OrderService} from './order.service';
import {CartItemModel} from '../restaurants-detail/shopping-cart/cart-item.model';
import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  pagamento: RadioModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de debito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];
    delivery: number = 8;
  constructor(private orderService: OrderService,
              private cartService: ShoppingCartService)  { }

  ngOnInit() {
  }
    itensValue(): number {
      return this.cartService.total();
    }
    cartItems(): CartItemModel[] {
    return this.orderService.cartItem();
    }
    increaseQty(item: any){
    this.orderService.increaseQty(item);
    }
    desincreaseQty(item: CartItemModel) {
    this.orderService.desincreaseQty(item);
    }
    remove(item: CartItemModel){
     this.orderService.remove(item);
    }
}


