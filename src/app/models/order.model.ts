import { CartItem } from './cart-item.model'; // Adjust the import path as needed

export interface Order {
  id: number;
  items: CartItem[]; // Use CartItem for items
  totalPrice: number;
  status: string;
  deliveryAddress: string;
  paymentMode : string;
}
