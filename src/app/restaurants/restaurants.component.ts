import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[]=[
    {
      id: "bread-bakery",
      nome: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"

    },
    {
      id:"burger-house",
      nome: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"

    }]

  constructor() { }

  ngOnInit() {
  }

}
