import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantsDetailComponent} from './restaurants-detail/restaurants-detail.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurantes', component: RestaurantsComponent},
  {path: 'restaurantes/:id', component: RestaurantsDetailComponent}

];

