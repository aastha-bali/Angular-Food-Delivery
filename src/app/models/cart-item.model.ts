import { MenuItem } from "./menu-item.model";

export interface CartItem {
  menuItem: MenuItem; // Reference to the MenuItem
  quantity: number; // Quantity of the item
  totalPrice: number; // Total price for this quantity
}