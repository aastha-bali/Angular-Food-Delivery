import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManageAddressComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ManageAddressComponent
  ]

})
export class AddressModule { }
