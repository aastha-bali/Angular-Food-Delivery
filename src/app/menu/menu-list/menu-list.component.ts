import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from 'src/app/models/menu-item.model';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
  @Input() restaurantId!: number;
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService, private cartService: CartService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems().filter(item => item.restaurantId === this.restaurantId);
  }

  addToCart(menuItem: MenuItem, quantity: number): void {
    this.cartService.addToCart(menuItem, 1); // Default quantity is 1
  }

}