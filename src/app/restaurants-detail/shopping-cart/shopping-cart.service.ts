import { CartItemModel } from './cart-item.model';
import { MenuItemModel } from '../menu-item/menu-item.model';
import {NotificacaoService} from '../../shared/notificacao.service';
import {Injectable} from '@angular/core';

@Injectable()

export class ShoppingCartService {

  constructor(private notificacaoService: NotificacaoService){}

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
    this.notificacaoService.notifica(`Você adcionou o  item ${item.name}`);
  }

  removeItem(item: CartItemModel) {
    this.itens.splice(this.itens.indexOf(item), 1);
    this.notificacaoService.notifica(`Você Removeu o  item ${item.menuItem.name}`);
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
