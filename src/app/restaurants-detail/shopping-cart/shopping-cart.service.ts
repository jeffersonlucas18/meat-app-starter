import { CartItemModel } from './cart-item.model';
import { MenuItemModel } from '../menu-item/menu-item.model';

export class ShoppingCartService {

  itens: CartItemModel[] = [];


  clear() {
    this.itens = [];
  }

  botalAddItem(item: MenuItemModel) {
    let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.itens.push(new CartItemModel(item));
    }
  }

  removeItem(item: CartItemModel) {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

    total(): number {
    return this.itens.map(itens => itens.value()).reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItemModel) {
    item.quantity = item.quantity + 1 ;
  }

  desincreaseQty(item: CartItemModel) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

}
