import { Routes } from '@angular/router';
import { SupplyComponent } from './supply.component';
import { SupplyDetailsComponent } from './components/supply-details/supply-details.component';
import { ProviderResolver } from '../shared/resolvers/provider.resolver';

export const SUPPLY_ROUTES: Routes = [
    {path: '', component: SupplyComponent},
    {path: ':id', component: SupplyDetailsComponent}
];
