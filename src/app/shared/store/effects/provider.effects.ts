import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { Injectable } from '@angular/core';
import {
    TryFetchProviders,
    TRY_FETCH_PROVIDERS,
    FetchProvidersSuccess,
    FetchProvidersError
} from '../actions/provider.actions';
import { switchMap, catchError, map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { Provider } from '../../../shared/model/provider.model';
import { ProviderService } from '../../services/provider.service';

@Injectable()
export class ProviderEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private providerService: ProviderService
    ) {}

    @Effect()
    fetchProviders$ = this.actions$.pipe(
        ofType<TryFetchProviders>(TRY_FETCH_PROVIDERS),
        switchMap( () => this.providerService.getAllProviders().pipe(
            map((providers: Provider[]) => new FetchProvidersSuccess(providers)),
            catchError(error => of(new FetchProvidersError(error)))
        ))
    );
}
