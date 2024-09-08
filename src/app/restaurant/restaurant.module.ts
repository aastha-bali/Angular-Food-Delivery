import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedRestaurantsComponent } from './featured-restaurants/featured-restaurants.component';
import { RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'; // Import RouterModule
import { MenuModule } from '../menu/menu.module';
import { CartModule } from '../cart/cart.module';
import { AddressModule } from '../address/address.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeaturedRestaurantsComponent,
    RestaurantListComponent,
    RestaurantDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    CartModule,
    AddressModule,
    FormsModule
  ],
  exports: [
    FeaturedRestaurantsComponent,
    RestaurantListComponent,
    RestaurantDetailComponent
  ]
})
export class RestaurantModule { }
