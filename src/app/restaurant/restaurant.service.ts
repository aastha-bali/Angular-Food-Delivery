import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Gourmet Haven',
      imageUrl: 'assets/images/restaurant1.jpg',
      description: 'Enjoy a wide range of gourmet dishes.',
      address: '123 Gourmet St, Food City',
      phone: '(123) 456-7890',
      openingHours: 'Mon-Sun: 10:00 AM - 11:00 PM',
      deliveryTimeEstimate: '30-45 min',
      reviews: [
        { rating: 4, comment: 'Amazing food and great ambiance!', customer: 'John Doe' },
        { rating: 4, comment: 'Loved the variety of dishes.', customer: 'Jane Smith' }
      ]
    },
    {
      id: 2,
      name: 'Italian Delights',
      imageUrl: 'assets/images/restaurant2.jpg',
      description: 'Taste the best of Italian cuisine.',
      address: '456 Italian Rd, Pasta Town',
      phone: '(234) 567-8901',
      openingHours: 'Mon-Sun: 11:00 AM - 10:00 PM',
      deliveryTimeEstimate: '20-30 min',
      reviews: [
        { rating: 5, comment: 'Best pasta in town!', customer: 'Alice Brown' },
        { rating: 4, comment: 'Great service, will visit again.', customer: 'Bob Martin' }
      ]
    },
    {
      id: 3,
      name: 'Zen Bowl',
      imageUrl: 'assets/images/restaurant3.jpg',
      description: 'Savor the flavors of Asia.',
      address: '789 Asian Ave, Noodle City',
      phone: '(345) 678-9012',
      openingHours: 'Mon-Sun: 10:00 AM - 9:00 PM',
      deliveryTimeEstimate: '25-35 min',
      reviews: [
        { rating: 4, comment: 'Great Asian fusion dishes!', customer: 'Catherine Lee' },
        { rating: 5, comment: 'I loved the sushi bowls.', customer: 'David King' }
      ]
    },
    {
      id: 4,
      name: 'Fiesta Cantina',
      imageUrl: 'assets/images/restaurant4.jpg',
      description: 'Experience authentic Mexican flavors.',
      address: '321 Fiesta Blvd, Taco Town',
      phone: '(456) 789-0123',
      openingHours: 'Mon-Sun: 11:00 AM - 11:00 PM',
      deliveryTimeEstimate: '30-40 min',
      reviews: [
        { rating: 4, comment: 'The tacos were delicious.', customer: 'Emily Davis' },
        { rating: 5, comment: 'Best margaritas in the city.', customer: 'Frank Harris' }
      ]
    },
    {
      id: 5,
      name: 'Neptune’s Bounty',
      imageUrl: 'assets/images/restaurant5.jpg',
      description: 'Delight in fresh seafood dishes.',
      address: '654 Ocean Dr, Sea Town',
      phone: '(567) 890-1234',
      openingHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      deliveryTimeEstimate: '30-50 min',
      reviews: [
        { rating: 4, comment: 'The seafood platter was top-notch!', customer: 'Grace Walker' },
        { rating: 4, comment: 'A bit pricey, but worth it.', customer: 'Henry Wilson' }
      ]
    },
    {
      id: 6,
      name: 'Patty Shack',
      imageUrl: 'assets/images/restaurant6.jpg',
      description: 'Indulge in classic American burgers.',
      address: '987 Burger Ln, Grill City',
      phone: '(678) 901-2345',
      openingHours: 'Mon-Sun: 10:00 AM - 12:00 AM',
      deliveryTimeEstimate: '15-25 min',
      reviews: [
        { rating: 4, comment: 'Best burgers I\'ve ever had!', customer: 'Isabella Moore' },
        { rating: 4, comment: 'Loved the fries too.', customer: 'James Taylor' }
      ]
    },
    {
      id: 7,
      name: 'Oasis Eats',
      imageUrl: 'assets/images/restaurant7.jpg',
      description: 'Explore the tastes of Middle Eastern cuisine.',
      address: '234 Oasis Way, Spice Town',
      phone: '(789) 012-3456',
      openingHours: 'Mon-Sun: 11:00 AM - 11:00 PM',
      deliveryTimeEstimate: '20-30 min',
      reviews: [
        { rating: 4, comment: 'Great falafel and hummus.', customer: 'Kim Anderson' },
        { rating: 4, comment: 'I loved the shawarma.', customer: 'Liam White' }
      ]
    },
    {
      id: 8,
      name: 'Le Petit Croissant',
      imageUrl: 'assets/images/restaurant8.jpg',
      description: 'Enjoy traditional French pastries and desserts.',
      address: '567 Croissant Rd, Bakery City',
      phone: '(890) 123-4567',
      openingHours: 'Mon-Sun: 8:00 AM - 8:00 PM',
      deliveryTimeEstimate: '10-20 min',
      reviews: [
        { rating: 5, comment: 'The croissants were buttery perfection.', customer: 'Mia Evans' },
        { rating: 4, comment: 'Lovely little bakery.', customer: 'Noah Scott' }
      ]
    },
    {
      id: 9,
      name: 'Spice Symphony',
      imageUrl: 'assets/images/restaurant9.jpg',
      description: 'Taste exotic Indian spices and dishes.',
      address: '876 Spice St, Curry Town',
      phone: '(901) 234-5678',
      openingHours: 'Mon-Sun: 11:00 AM - 10:00 PM',
      deliveryTimeEstimate: '25-35 min',
      reviews: [
        { rating: 4, comment: 'Rich and flavorful curries.', customer: 'Olivia Young' },
        { rating: 5, comment: 'The naan bread was amazing.', customer: 'Patrick Green' }
      ]
    },
    {
      id: 10,
      name: 'Jazz & Dine',
      imageUrl: 'assets/images/restaurant10.jpg',
      description: 'Dine with live jazz music and a cozy atmosphere.',
      address: '543 Jazz Ave, Music City',
      phone: '(012) 345-6789',
      openingHours: 'Mon-Sun: 5:00 PM - 12:00 AM',
      deliveryTimeEstimate: '30-40 min',
      reviews: [
        { rating: 5, comment: 'Amazing vibe with great food.', customer: 'Quinn Adams' },
        { rating: 4, comment: 'The live music was a nice touch.', customer: 'Rachel Lee' }
      ]
    }
  ];
  
  

  constructor() { }

  

  getFeaturedRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants.slice(0, 3)); // Returning first 3 for featured
  }

  getAllRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants); // Return all restaurants
  }

  getRestaurantById(id: number): Observable<Restaurant | undefined> {
    const restaurant = this.restaurants.find(r => r.id === id);
    return of(restaurant); // Return the restaurant by ID
  }

  calculateAverageRating(reviews: { rating: number; comment: string; customer: string }[]): number {
    if (!reviews || reviews.length === 0) {
      return 0; // Return 0 if there are no reviews
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length; // Calculate average
  }
  

}
