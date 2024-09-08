import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      items: [
        { menuItem: { id: 1, name: 'Burger', restaurantId: 1, price: 5.99 }, quantity: 2, totalPrice: 11.98 },
        { menuItem: { id: 2, name: 'Fries', restaurantId: 1, price: 2.99 }, quantity: 1, totalPrice: 2.99 },
      ],
      totalPrice: 15.97,
      status: 'Delivered',
      deliveryAddress: '123 Food St.',
      paymentMode: 'Cash on Delivery'
    },
    {
      id: 2,
      items: [
        { menuItem: { id: 3, name: 'Pizza', restaurantId: 2, price: 14.99 }, quantity: 1, totalPrice: 14.99 },
        { menuItem: { id: 4, name: 'Coke', restaurantId: 2, price: 1.99 }, quantity: 2, totalPrice: 3.98 },
      ],
      totalPrice: 18.97,
      status: 'Out for Delivery',
      deliveryAddress: '456 Burger Ave.',
      paymentMode: 'PayPal'
    },
    {
      id: 3,
      items: [
        { menuItem: { id: 5, name: 'Sushi', restaurantId: 3, price: 8.99 }, quantity: 3, totalPrice: 26.97 },
        { menuItem: { id: 6, name: 'Miso Soup', restaurantId: 3, price: 3.50 }, quantity: 2, totalPrice: 7.00 },
      ],
      totalPrice: 33.97,
      status: 'Preparing',
      deliveryAddress: '789 Sushi Blvd.',
      paymentMode: 'Credit Card'
    },
  ];

  constructor() {}

  getOrders(): Order[] {
    return this.orders; // Return the list of orders
  }

  createOrder(order: Order): void {
    this.orders.push(order);
  }
  
}
