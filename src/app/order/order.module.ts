import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';



@NgModule({
  declarations: [
    OrderTrackingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderTrackingComponent
  ]
})
export class OrderModule { }
