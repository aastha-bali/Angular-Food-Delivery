import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-restaurants',
  templateUrl: './featured-restaurants.component.html',
  styleUrls: ['./featured-restaurants.component.css']
})
export class FeaturedRestaurantsComponent implements OnInit {
  featuredRestaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getFeaturedRestaurants().subscribe((restaurants: any[]) => { 
      this.featuredRestaurants = restaurants;
    });
  }

  viewRestaurants() {
    this.router.navigate(['/restaurants']); 
  }

  calculateAverageRating(reviews: { rating: number; comment: string; customer: string }[]): number {
    return this.restaurantService.calculateAverageRating(reviews);
  }
}
