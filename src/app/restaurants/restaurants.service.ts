import { Injectable } from '@angular/core';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import {ErrorHandle} from '../app.errohandle';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  //restaurants(): Observable<RestaurantModel[]> {
    //return this.http.get(`${MEAT_API}/restaurants`)
      //.map(response => response.json())
      //.catch(ErrorHandle.handleError);
  //}

    restaurants(): Observable<RestaurantModel[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
    }
}
