import { NgModule } from '@angular/core';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { PROVIDER_ROUTES } from './provider.routing';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { ProviderSupplyListComponent } from './components/provider-details/provider-supply-list/provider-supply-list.component';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(PROVIDER_ROUTES)
  ],
  declarations: [
    ProviderComponent,
    ProviderListComponent,
    ProviderDetailsComponent,
    ProviderSupplyListComponent
  ]
})
export class ProviderModule { }
