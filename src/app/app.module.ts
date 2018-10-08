// Modules natifs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Routing
import { ROUTES } from './app.routing';

// Modules
import { CoreModule } from './shared/modules/core.module';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducersMap } from './shared/store';
import { AuthEffects } from './shared/store/effects/auth.effects';
import { ProviderEffects } from './shared/store/effects/provider.effects';
import { SupplyEffects } from './shared/store/effects/supply.effects';
import { RequestEffects } from './shared/store/effects/request.effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducersMap),
    EffectsModule.forRoot([AuthEffects, ProviderEffects, SupplyEffects, RequestEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx Stockman'
    }),
    CoreModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// @ngrx/store
// @ngrx/effects
// @ngrx/store-devtools
// npm i --save @angular/flex-layout@6.0.0-beta.15
