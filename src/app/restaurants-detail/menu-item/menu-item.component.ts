import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MenuItemModel} from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

 @Input() menuItemModel: MenuItemModel;
 @Output () add = new EventEmitter();

 constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
   this.add.emit(this.menuItemModel);
  }

}
