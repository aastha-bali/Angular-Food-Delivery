import { Component } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent {
  addresses: string[] = [];
  newAddress: string = '';

  constructor(private addressService: AddressService) {
    this.addresses = this.addressService.getAddresses();
  }

  addAddress(): void {
    if (this.newAddress) {
      this.addressService.addAddress(this.newAddress);
      this.newAddress = ''; // Clear input after adding
      this.addresses = this.addressService.getAddresses(); // Refresh addresses
    }
  }

  removeAddress(address: string): void {
    this.addressService.removeAddress(address);
    this.addresses = this.addressService.getAddresses(); // Refresh addresses
  }

}
