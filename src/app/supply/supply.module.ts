// Modules natifs
import { NgModule } from '@angular/core';

// Routing
import { RouterModule } from '@angular/router';
import { SUPPLY_ROUTES } from './supply.routing';

// Components
import { SupplyComponent } from './supply.component';
import { SupplyListComponent } from './components/supply-list/supply-list.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { OrderRequestsComponent } from './components/supply-details/order-requests/order-requests.component';
import { AlertDialogComponent } from './components/supply-details/alert-dialog/alert-dialog.component';

// Modules
import { LayoutModule } from '../shared/modules/layout.module';
import { MatSnackBar } from '@angular/material';

// Resolver

import { ProviderListNotEmptyResolver } from '../shared/resolvers/providerListNotEmpty.resolver';


@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(SUPPLY_ROUTES)
  ],
  declarations: [
    SupplyComponent,
    SupplyListComponent,
    SupplyDetailsComponent,
    OrderRequestsComponent,
    AlertDialogComponent
  ],
  entryComponents: [
    AlertDialogComponent
  ],
  providers: [
    MatSnackBar,
    ProviderListNotEmptyResolver
  ]
})
export class SupplyModule { }
