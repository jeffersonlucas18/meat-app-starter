import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant/restaurant.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

 restaurants:RestaurantModel[];

 constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
   this.restaurants = this.restaurantService.restaurants();
  }

}
