import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from '../currency-format.pipe';



@NgModule({
  declarations: [
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyFormatPipe
  ]
})
export class SharedModule { }
