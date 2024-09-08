import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant | undefined;
  restaurantId: number | undefined;
  newReview = { customer: '', rating: 5, comment: '' };

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurantService.getRestaurantById(id).subscribe(restaurant => {
      this.restaurant = restaurant;
      this.restaurantId = restaurant?.id;
    });
  }

  placeOrder(): void {
    // Navigate to the CartComponent
    this.router.navigate(['/cart']);
  }

  submitReview() {
    if (this.restaurant && this.newReview.customer && this.newReview.comment && this.newReview.rating) {
      this.restaurant.reviews.push({
        customer: this.newReview.customer,
        rating: this.newReview.rating,
        comment: this.newReview.comment
      });
      this.newReview = { customer: '', rating: 5, comment: '' }; // Reset form after submission
    }
  }
}
