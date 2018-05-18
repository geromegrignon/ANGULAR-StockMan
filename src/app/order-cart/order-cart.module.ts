import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCartComponent } from './order-cart.component';
import { OrderCartListComponent } from './components/order-cart-list/order-cart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderCartComponent,
    OrderCartListComponent
  ]
})
export class OrderCartModule { }
