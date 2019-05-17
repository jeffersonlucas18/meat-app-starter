import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantsDetailComponent} from './restaurants-detail/restaurants-detail.component';
import {MenuComponent} from './restaurants-detail/menu/menu.component';
import {ReviewsComponent} from './restaurants-detail/reviews/reviews.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurantes', component: RestaurantsComponent},
  {path: 'restaurantes/:id', component: RestaurantsDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'finalizar', component: OrderSummaryComponent},
  {path: 'order', component: OrderComponent}
];

