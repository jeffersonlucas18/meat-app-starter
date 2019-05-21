import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import  {ROUTES} from './app.router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';


import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';



import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SnackbarComponent } from './shared/messagem/snackbar/snackbar.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './shared/core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    SnackbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules} ),
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
