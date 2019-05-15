import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from '../../restaurants-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-tens',
  templateUrl: './order-tens.component.html'
})
export class OrderTensComponent implements OnInit {

  @Input() itens: CartItemModel[];

  @Output() increaseqTY = new EventEmitter<CartItemModel>();
  @Output() desincreaseqTY = new EventEmitter<CartItemModel>();
  @Output() remove = new EventEmitter<CartItemModel>();

  constructor() { }


  ngOnInit() {
  }

  emitIncreaseQty(item: CartItemModel) {
    this.increaseqTY.emit(item);
  }
  emitDescreaseQty(item: CartItemModel) {
    this.desincreaseqTY.emit(item);
  }
  emitRemove(item: CartItemModel) {
    this.remove.emit(item);
  }
}
