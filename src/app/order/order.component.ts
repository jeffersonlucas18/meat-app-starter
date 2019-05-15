import { Component, OnInit } from '@angular/core';
import {RadioModel} from '../shared/radio/radio.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  pagamento: RadioModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de debito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
