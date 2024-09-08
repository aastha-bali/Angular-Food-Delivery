import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from 'src/app/models/restaurant.model';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = []; 
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
  }

  calculateAverageRating(reviews: { rating: number; comment: string; customer: string }[]): number {
    return this.restaurantService.calculateAverageRating(reviews);
  }

}
