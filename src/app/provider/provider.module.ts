import { NgModule } from '@angular/core';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { PROVIDER_ROUTES } from './provider.routing';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { ProviderSupplyListComponent } from './components/provider-details/provider-supply-list/provider-supply-list.component';
import { ProviderListResolver } from '../shared/resolvers/providerList.resolver';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { ProviderNewComponent } from './components/provider-new/provider-new.component';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(PROVIDER_ROUTES)
  ],
  declarations: [
    ProviderComponent,
    ProviderListComponent,
    ProviderDetailsComponent,
    ProviderSupplyListComponent,
    ProviderFormComponent,
    ProviderNewComponent
  ],
  providers: [
    ProviderListResolver
  ]
})
export class ProviderModule { }
