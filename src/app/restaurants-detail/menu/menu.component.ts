import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {Observable} from 'rxjs';
import {MenuItemModel} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItemModel[]>;

  constructor(private route: ActivatedRoute,
              private RestautantsService: RestaurantsService) { }

  ngOnInit() {
   this.menu = this.RestautantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }
  addMenuItem(item: MenuItemModel) {
  console.log(item);
  }
}
