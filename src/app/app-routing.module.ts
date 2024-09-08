import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { HomeComponent } from './layout/home/home.component'; 
import { LoginComponent } from './auth/login/login.component'; 
import { RegisterComponent } from './auth/register/register.component'; 
import { CartComponent } from './cart/cart/cart.component';
import { ManageAddressComponent } from './address/manage-address/manage-address.component';
import { OrderTrackingComponent } from './order/order-tracking/order-tracking.component'; 
import { AuthGuard } from './auth/auth.guard';  


const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'restaurants', component: RestaurantListComponent }, // Restaurants route
  { path: 'restaurant/:id', component: RestaurantDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'manage-address', component: ManageAddressComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderTrackingComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' // This enables scrolling to the top
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
