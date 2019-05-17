import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
import {RadioModel} from '../shared/radio/radio.model';
import {OrderService} from './order.service';
import {CartItemModel} from '../restaurants-detail/shopping-cart/cart-item.model';

import {ShoppingCartService} from '../restaurants-detail/shopping-cart/shopping-cart.service';
import {OrderModel, OrderItem} from './order.model';
import {Router} from '@angular/router';




@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  compraForm: FormGroup;

  pagamento: RadioModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de debito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];
   delivery: number= 8;
   emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    number = /^[0-9]*$/;
  constructor(private orderService: OrderService,
              private cartService: ShoppingCartService,
              private route: Router,
              private fB: FormBuilder)  { }

  ngOnInit() {
    this.FormConfiguracao();
  }
    FormConfiguracao() {
      this.compraForm = this.fB.group({
      nome: new FormControl ('',[Validators.maxLength(60), Validators.required, Validators.minLength(5)]),
      email: new FormControl ('', [Validators.pattern(this.emailPattern), Validators.required]),
        confirmacao: new FormControl ('',[Validators.pattern(this.emailPattern), Validators.required]),
      opcoesDePagamentos: new FormControl ('', ),
        endereco: new FormControl ('',[Validators.maxLength(60), Validators.required, Validators.minLength(5)]),
        numero: new FormControl ('', [Validators.required, Validators.pattern(this.number)]),
       complemento: new FormControl('')
      }, {validator: OrderComponent.igual});

    }
   static igual(group: AbstractControl):{[key: string]: boolean}{
      const email = group.get('email');
      const confirmacaoEmail = group.get('confirmacao');
      if (!email || !confirmacaoEmail) {
        return undefined ;
      }if ( email.value !== confirmacaoEmail.value){
        return {Emailnaoencontrado: true};
     }
  }

    itensValue(): number {
      return this.orderService.itensValue();
    }
    cartItems(): CartItemModel[] {
    return this.orderService.cartItem();
    }
    increaseQty(item: any) {
    this.orderService.increaseQty(item);
    }
    desincreaseQty(item: CartItemModel) {
    this.orderService.desincreaseQty(item);
    }
    remove(item: CartItemModel) {
     this.orderService.remove(item);
    }
      checkCompra(compra: OrderModel) {
      compra.orderItems =  this.cartItems()
        .map((item: CartItemModel) => new OrderItem(item.quantity, item.menuItem.id));
        this.orderService.checkCompra(compra).subscribe((compraid: string) => {
          this.route.navigate(['/finalizar']);
        this.orderService.clear();
        });
        console.log(compra);
      }
}


