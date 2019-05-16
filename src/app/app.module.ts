import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import  {ROUTES} from './app.router';
import {FormsModule, NgModel} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import {RestaurantsService} from './restaurants/restaurants.service';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import {ShoppingCartService} from './restaurants-detail/shopping-cart/shopping-cart.service';

import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderTensComponent } from './order/order-tens/order-tens.component';
import {OrderService} from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderTensComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantsService, ShoppingCartService, NgModel, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
