import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

 restaurants: RestaurantModel[];

 constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
   this.restaurantService.obterRestaurants()
  .subscribe(restaurants => this.restaurants = restaurants);
  }


}
