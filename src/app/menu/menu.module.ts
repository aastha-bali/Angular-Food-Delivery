import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MenuListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuListComponent

  ]
})
export class MenuModule { }
