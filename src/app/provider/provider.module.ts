import { NgModule } from '@angular/core';
import { ProviderComponent } from './provider.component';
import { LayoutModule } from '../shared/modules/layout.module';
import { RouterModule } from '@angular/router';
import { PROVIDER_ROUTES } from './provider.routing';

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forChild(PROVIDER_ROUTES),
    // StoreModule.forFeature('provider', providerReducer),
    // EffectsModule.forFeature([ProviderEffects])
  ],
  declarations: [
    ProviderComponent
  ]
})
export class ProviderModule { }
