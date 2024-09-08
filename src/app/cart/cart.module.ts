import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AddressModule } from '../address/address.module';
import { SharedModule } from '../shared/shared.module'; 

@NgModule({
  declarations: [
    MiniCartComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddressModule,
    SharedModule
  ],
  exports: [
    MiniCartComponent,
    CartComponent
  ]
})
export class CartModule { }
