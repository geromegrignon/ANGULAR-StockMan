import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { Injectable } from '@angular/core';
import {
    TryFetchProviders,
    TRY_FETCH_PROVIDERS,
    FetchProvidersSuccess,
    FetchProvidersError,
    TryFetchProvidersNotEmpty,
    TRY_FETCH_PROVIDERS_NOT_EMPTY,
    FetchProvidersNotEmptySuccess,
    TryFetchProviderById,
    TRY_FETCH_PROVIDER_BY_ID,
    FetchProviderByIdSuccess,
    TryUpdateProvider,
    TRY_UPDATE_PROVIDER,
    UpdateProviderSuccess,
    UpdateProviderError
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

    @Effect()
    fetchProviderById$ = this.actions$.pipe(
        ofType<TryFetchProviderById>(TRY_FETCH_PROVIDER_BY_ID),
        map((action: TryFetchProviderById) => action.payload),
        switchMap((id: number) => this.providerService.getProviderById(id)),
        map((provider: Provider) => new FetchProviderByIdSuccess(provider))
    );

    @Effect()
    fetchProvidersNotEmpty$ = this.actions$.pipe(
        ofType<TryFetchProvidersNotEmpty>(TRY_FETCH_PROVIDERS_NOT_EMPTY),
        switchMap( () => this.providerService.getAllProvidersNotEmpty().pipe(
            map((providers: Provider[]) => new FetchProvidersNotEmptySuccess(providers)),
            catchError(error => of(new FetchProvidersError(error)))
        ))
    );

    @Effect()
    updateProvider$ = this.actions$.pipe(
        ofType<TryUpdateProvider>(TRY_UPDATE_PROVIDER),
        map((action: TryUpdateProvider) => action.payload),
        switchMap((provider: Provider) => this.providerService.updateProvider(provider)),
        map((updatedProvider: Provider) => new UpdateProviderSuccess(updatedProvider)),
        catchError(error => of(new UpdateProviderError(error)))
    );
}
