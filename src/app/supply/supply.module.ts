// Modules natifs
import { NgModule } from '@angular/core';

// Routing
import { RouterModule } from '@angular/router';
import { SUPPLY_ROUTES } from './supply.routing';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { supplyReducer } from '../shared/store/reducers/supply.reducer';
import { SupplyEffects } from '../shared/store/effects/supply.effects';

// Directives
import { ConnectformDirective } from '../shared/directives/connectform.directive';

// Components
import { SupplyComponent } from './supply.component';
import { SupplyListComponent } from './components/supply-list/supply-list.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { OrderRequestsComponent } from './components/supply-details/order-requests/order-requests.component';
import { AlertDialogComponent } from './components/supply-details/alert-dialog/alert-dialog.component';

// Modules
import { LayoutModule } from '../shared/modules/layout.module';
import { ProviderResolver } from '../shared/resolvers/provider.resolver';


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
    ConnectformDirective,
    OrderRequestsComponent,
    AlertDialogComponent
  ],
  entryComponents: [AlertDialogComponent],
  providers: [ProviderResolver]
})
export class SupplyModule { }
