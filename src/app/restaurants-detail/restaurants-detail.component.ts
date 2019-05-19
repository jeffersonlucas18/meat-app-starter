import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {RestaurantModel} from '../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  restaurant: RestaurantModel;

  ngOnInit() {
    this.pegaidRestarurant();
  }
  pegaidRestarurant(){
    this.restaurantsService.obterRestaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);
  }

}
