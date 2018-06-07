import { Routes } from '@angular/router';
import { SupplyComponent } from './supply.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { ProviderListNotEmptyResolver } from '../shared/resolvers/providerListNotEmpty.resolver';

export const SUPPLY_ROUTES: Routes = [
    {path: '', component: SupplyComponent, resolve: {data: ProviderListNotEmptyResolver}},
    {path: ':id', component: SupplyDetailsComponent}
];
