import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AddressModule } from './address/address.module';

import { OrderModule } from './order/order.module';

const firebaseConfig = {
  apiKey: 'AIzaSyC_TSSVsCEJGyi75dKpXI93l4KIIDjOY40',
  authDomain: 'food-delivery-7f47e.firebaseapp.com',
  projectId: 'food-delivery-7f47e',
  storageBucket: 'food-delivery-7f47e.appspot.com',
  messagingSenderId: '82661553266',
  appId: '1:82661553266:web:5f8b615d94ee5c2d283eeb',
  measurementId: 'G-N9V3HGTVZC',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RestaurantModule,
    AuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CartModule,
    AddressModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
