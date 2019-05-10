import { Injectable } from '@angular/core';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';


@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
  }

}
