import { Injectable } from '@angular/core';
import { RestaurantModel } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from '../app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import {ErrorHandle} from '../app.errohandle';
import {MenuItemModel} from '../restaurants-detail/menu-item/menu-item.model';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  obterRestaurants(search?: string): Observable<RestaurantModel[]> {
    let params: HttpParams = undefined
    if(search) {
      params = new HttpParams().append('q', search)
      params.set('q', search)
    }
    return this.http.get<RestaurantModel[]>(`${MEAT_API}/restaurants`, {params: params})
  }
  obterRestaurantById(id: string): Observable<RestaurantModel> {
  return this.http.get<RestaurantModel>(`${MEAT_API}/restaurants/${id}`)
  }
  // obterReviewsOfRestaurant(id: string): Observable<any> {
  // return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  //   .map(response => response.json())
  //   .catch(ErrorHandle.handleError);
  // }
    obterReviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`)
     }
    menuOfRestaurant(id: string): Observable<MenuItemModel[]> {
       return this.http.get<MenuItemModel[]>(`${MEAT_API}/restaurants/${id}/menu`)

    }
}
