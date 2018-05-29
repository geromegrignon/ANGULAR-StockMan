import { Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';

export const PROVIDER_ROUTES: Routes = [
    {path: '', component: ProviderComponent, children : [
        {path: ':id', component: ProviderDetailsComponent}
    ]},
];
