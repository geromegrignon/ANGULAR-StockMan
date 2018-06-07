import { Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { ProviderListResolver } from '../shared/resolvers/providerList.resolver';
import { ProviderNewComponent } from './components/provider-new/provider-new.component';

export const PROVIDER_ROUTES: Routes = [
    {path: '', component: ProviderComponent, resolve: {data: ProviderListResolver}, children : [
        {path: 'new', component: ProviderNewComponent},
        {path: ':id', component: ProviderDetailsComponent}
    ]},
];
