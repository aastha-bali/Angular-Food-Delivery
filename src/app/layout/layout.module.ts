import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantModule } from '../restaurant/restaurant.module'; // Import RestaurantModule


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroBannerComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    RestaurantModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroBannerComponent
  ]
})
export class LayoutModule { }
