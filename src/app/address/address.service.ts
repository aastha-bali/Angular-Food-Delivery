import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class AddressService {
  private addresses: string[] = [
    '123 Main St, Springfield',
    '456 Elm St, Villagetown',
    '789 Maple Ave, Townsville'
  ];

  private selectedAddress: string = '';

  constructor() { }

  getAddresses(): string[] {
    return this.addresses; // Return the list of addresses
  }

  addAddress(address: string): void {
    this.addresses.push(address); // Add new address
  }

  removeAddress(address: string): void {
    this.addresses = this.addresses.filter(a => a !== address); // Remove address
  }

  getSelectedAddress(): string {
    return this.selectedAddress;
  }

  setSelectedAddress(address: string): void {
    this.selectedAddress = address;
  }
  
}