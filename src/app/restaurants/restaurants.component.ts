import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

    restaurants: RestaurantModel[];
    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(private restaurantService: RestaurantsService,
             private fb: FormBuilder) { }
      ngOnInit() {
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
          searchControl: this.searchControl
        });
        //Método Pesquisa
        this.searchControl.valueChanges.distinctUntilChanged()
          .debounceTime(500)
          .distinctUntilChanged()
          .switchMap(searchTerm => this.restaurantService.obterRestaurants(searchTerm))
          .catch(error => Observable.from([]))
          .subscribe(restaurant => this.restaurants = restaurant);
      }
 }
