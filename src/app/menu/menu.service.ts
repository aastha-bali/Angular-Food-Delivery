import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';


@Injectable({
  providedIn: 'root'
})

export class MenuService {
  private menuItems: MenuItem[] = [
    // Gourmet Haven
  { id: 1, name: 'Truffle Pasta', restaurantId: 1, price: 15.99 },
  { id: 2, name: 'Gourmet Burger', restaurantId: 1, price: 12.99 },
  { id: 3, name: 'Caviar Platter', restaurantId: 1, price: 20.99 },
  { id: 4, name: 'Lobster Bisque', restaurantId: 1, price: 18.99 },
  { id: 5, name: 'Foie Gras', restaurantId: 1, price: 22.99 },
  { id: 6, name: 'Chocolate Fondant', restaurantId: 1, price: 8.99 },

  // Italian Delights
  { id: 7, name: 'Margherita Pizza', restaurantId: 2, price: 10.99 },
  { id: 8, name: 'Spaghetti Carbonara', restaurantId: 2, price: 13.99 },
  { id: 9, name: 'Lasagna', restaurantId: 2, price: 14.99 },
  { id: 10, name: 'Tiramisu', restaurantId: 2, price: 6.99 },
  { id: 11, name: 'Risotto', restaurantId: 2, price: 16.99 },
  { id: 12, name: 'Fettuccine Alfredo', restaurantId: 2, price: 12.99 },

  // Zen Bowl
  { id: 13, name: 'Sushi Platter', restaurantId: 3, price: 19.99 },
  { id: 14, name: 'Ramen', restaurantId: 3, price: 11.99 },
  { id: 15, name: 'Pad Thai', restaurantId: 3, price: 13.99 },
  { id: 16, name: 'Dim Sum', restaurantId: 3, price: 12.99 },
  { id: 17, name: 'Spring Rolls', restaurantId: 3, price: 6.99 },
  { id: 18, name: 'Mochi Ice Cream', restaurantId: 3, price: 5.99 },

  // Fiesta Cantina
  { id: 19, name: 'Tacos', restaurantId: 4, price: 8.99 },
  { id: 20, name: 'Quesadillas', restaurantId: 4, price: 9.99 },
  { id: 21, name: 'Burritos', restaurantId: 4, price: 10.99 },
  { id: 22, name: 'Guacamole & Chips', restaurantId: 4, price: 7.99 },
  { id: 23, name: 'Churros', restaurantId: 4, price: 5.99 },
  { id: 24, name: 'Enchiladas', restaurantId: 4, price: 12.99 },

  // Neptune’s Bounty
  { id: 25, name: 'Grilled Salmon', restaurantId: 5, price: 18.99 },
  { id: 26, name: 'Fish Tacos', restaurantId: 5, price: 13.99 },
  { id: 27, name: 'Lobster Roll', restaurantId: 5, price: 20.99 },
  { id: 28, name: 'Shrimp Scampi', restaurantId: 5, price: 17.99 },
  { id: 29, name: 'Oysters', restaurantId: 5, price: 21.99 },
  { id: 30, name: 'Crab Cakes', restaurantId: 5, price: 16.99 },

  // Patty Shack
  { id: 31, name: 'Classic Burger', restaurantId: 6, price: 9.99 },
  { id: 32, name: 'Cheeseburger', restaurantId: 6, price: 10.99 },
  { id: 33, name: 'Bacon Burger', restaurantId: 6, price: 11.99 },
  { id: 34, name: 'Veggie Burger', restaurantId: 6, price: 8.99 },
  { id: 35, name: 'Fries', restaurantId: 6, price: 3.99 },
  { id: 36, name: 'Milkshake', restaurantId: 6, price: 4.99 },

  // Oasis Eats
  { id: 37, name: 'Falafel Wrap', restaurantId: 7, price: 7.99 },
  { id: 38, name: 'Hummus & Pita', restaurantId: 7, price: 6.99 },
  { id: 39, name: 'Shawarma', restaurantId: 7, price: 9.99 },
  { id: 40, name: 'Kebabs', restaurantId: 7, price: 12.99 },
  { id: 41, name: 'Baklava', restaurantId: 7, price: 5.99 },
  { id: 42, name: 'Tabbouleh', restaurantId: 7, price: 7.99 },

  // Le Petit Croissant
  { id: 43, name: 'Croissant', restaurantId: 8, price: 3.99 },
  { id: 44, name: 'Pain au Chocolat', restaurantId: 8, price: 4.99 },
  { id: 45, name: 'Baguette', restaurantId: 8, price: 2.99 },
  { id: 46, name: 'Macarons', restaurantId: 8, price: 5.99 },
  { id: 47, name: 'Quiche Lorraine', restaurantId: 8, price: 7.99 },
  { id: 48, name: 'Éclair', restaurantId: 8, price: 6.99 },

  // Spice Symphony
  { id: 49, name: 'Butter Chicken', restaurantId: 9, price: 14.99 },
  { id: 50, name: 'Paneer Tikka', restaurantId: 9, price: 12.99 },
  { id: 51, name: 'Butter Naan', restaurantId: 9, price: 3.99 },
  { id: 52, name: 'Samosa', restaurantId: 9, price: 5.99 },
  { id: 53, name: 'Biryani', restaurantId: 9, price: 13.99 },
  { id: 54, name: 'Gulab Jamun', restaurantId: 9, price: 4.99 },

  // Jazz & Dine
  { id: 55, name: 'Steak', restaurantId: 10, price: 24.99 },
  { id: 56, name: 'BBQ Ribs', restaurantId: 10, price: 22.99 },
  { id: 57, name: 'Caesar Salad', restaurantId: 10, price: 8.99 },
  { id: 58, name: 'Grilled Chicken', restaurantId: 10, price: 18.99 },
  { id: 59, name: 'Lamb Chops', restaurantId: 10, price: 23.99 },
  { id: 60, name: 'Cheesecake', restaurantId: 10, price: 7.99 },

  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

}