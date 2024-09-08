import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})

export class MiniCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartUpdated.subscribe(items => {
      this.cartItems = items;
    });
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(cartItem: CartItem, change: number): void {
    this.cartService.updateQuantity(cartItem, change);
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items list
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
