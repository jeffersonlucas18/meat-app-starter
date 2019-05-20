
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import {ErrorHandle} from '../app.errohandle';
import {MenuItemModel} from '../restaurants-detail/menu-item/menu-item.model';
import {Injectable} from '@angular/core';

@Injectable()

export class RestaurantsService {

  constructor(private http: Http) { }

  obterRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
  }

  obterRestaurantById(id: string): Observable<RestaurantModel> {
  return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandle.handleError);
  }
  // obterReviewsOfRestaurant(id: string): Observable<any> {
  // return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  //   .map(response => response.json())
  //   .catch(ErrorHandle.handleError);
  // }
    obterReviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
    }
    menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
       return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
    }
}
