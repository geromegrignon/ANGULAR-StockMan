import { NgModule } from '@angular/core';
import { SupplyComponent } from './supply.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { SUPPLY_ROUTES } from './supply.routing';
import { SupplyListComponent } from './components/supply-list/supply-list.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { StoreModule } from '@ngrx/store';
import { supplyReducer } from './shared/store/supply.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SupplyEffects } from './shared/store/supply.effects';
import { ConnectformDirective } from '../shared/directives/connectform.directive';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(SUPPLY_ROUTES),
    StoreModule.forFeature('supply', supplyReducer),
    EffectsModule.forFeature([SupplyEffects])
  ],
  declarations: [
    SupplyComponent,
    SupplyListComponent,
    SupplyDetailsComponent,
    ConnectformDirective
  ]
})
export class SupplyModule { }
