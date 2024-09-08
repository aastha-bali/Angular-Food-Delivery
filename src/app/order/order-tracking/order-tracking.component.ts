import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service'; 
import { Order } from '..//../models/order.model'; 

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders(); // Get orders from the service
  }

  
}
