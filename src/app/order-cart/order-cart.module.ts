import { NgModule } from '@angular/core';
import { OrderCartComponent } from './order-cart.component';
import { OrderCartListComponent } from './components/order-cart-list/order-cart-list.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { SUPPLY_ROUTES } from '../supply/supply.routing';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(SUPPLY_ROUTES),
    // StoreModule.forFeature('supply', supplyReducer),
    // EffectsModule.forFeature([SupplyEffects])
  ],
  declarations: [
    OrderCartComponent,
    OrderCartListComponent
  ]
})
export class OrderCartModule { }
