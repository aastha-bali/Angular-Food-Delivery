import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private currentRestaurantId: number | null = null;
  cartUpdated = new EventEmitter<CartItem[]>(); // EventEmitter to emit changes


  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(menuItem: MenuItem, quantity: number): void {
    // If the cart is not empty and the new item is from a different restaurant
    if (this.cartItems.length > 0 && this.currentRestaurantId !== null && this.currentRestaurantId !== menuItem.restaurantId) {
      const confirmClear = confirm('You already have items from another restaurant. Would you like to clear the cart and add items from this restaurant?');
      
      if (confirmClear) {
        this.clearCart(); // Clear the cart if user confirms
      } else {
        return; // Exit the function if user cancels
      }
    }
  
    // Add the item or update its quantity
    const existingItem = this.cartItems.find(cartItem => cartItem.menuItem.id === menuItem.id);
  
    if (existingItem) {
      this.updateQuantity(existingItem, quantity);
    } else {
      const cartItem: CartItem = {
        menuItem,
        quantity,
        totalPrice: menuItem.price * quantity
      };
      this.cartItems.push(cartItem);
      this.currentRestaurantId = menuItem.restaurantId; // Set the current restaurantId
    }

    this.cartUpdated.emit(this.cartItems);
  }
  
  updateQuantity(cartItem: CartItem, change: number): void {
    const newQuantity = cartItem.quantity + change;
    if (newQuantity > 0) {
      cartItem.quantity = newQuantity;
      cartItem.totalPrice = cartItem.menuItem.price * newQuantity;
    } else {
      this.removeFromCart(cartItem);
    }
    this.cartUpdated.emit(this.cartItems);
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item.menuItem.id !== cartItem.menuItem.id);

    // If the cart is now empty, reset the current restaurant
    if (this.cartItems.length === 0) {
      this.currentRestaurantId = null;
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.currentRestaurantId = null;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }
}
