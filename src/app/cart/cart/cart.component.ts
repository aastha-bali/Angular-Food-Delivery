import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { AddressService } from 'src/app/address/address.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/order/order.service';
import { Order } from 'src/app/models/order.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  addresses: string[] = [];
  selectedAddress: string = '';
  selectedPaymentMethod: string = 'Credit Card';

  constructor(private cartService: CartService, private addressService: AddressService, 
    private router: Router, private orderService : OrderService, private location: Location) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.addresses = this.addressService.getAddresses();  
    this.selectedAddress = this.addressService.getSelectedAddress() || this.addresses[0];
  }


  onAddressChange(newAddress: string): void {
    this.selectedAddress = newAddress;
    this.addressService.setSelectedAddress(newAddress); // Save the selected address in the service
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

  clearCart(): void {
    this.cartItems = [];
  }

  navigateToManageAddress(): void {
    this.router.navigate(['/manage-address']); // Navigate to manage address page
  }

  navigateBack() {
    this.location.back(); 
  }


  checkout() {
    const order: Order = {
      id: this.orderService.getOrders().length + 1,
      items: this.cartService.getCartItems(),
      totalPrice: this.cartService.getTotalPrice(),
      status: 'Pending',
      deliveryAddress: this.selectedAddress,
      paymentMode: this.selectedPaymentMethod
    };

    this.orderService.createOrder(order); // Save the order
    this.cartService.clearCart(); // Clear the cart after order is placed
    this.router.navigate(['/orders']); // Navigate to orders
  }
}
