import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { Injectable } from '@angular/core';
import {
    TryFetchProviderList,
    TRY_FETCH_PROVIDER_LIST,
    FetchProviderListSuccess,
    FetchProviderListError,
    TryFetchProviderListNotEmpty,
    TRY_FETCH_PROVIDER_LIST_NOT_EMPTY,
    FetchProviderListNotEmptySuccess,
    TryFetchProviderById,
    TRY_FETCH_PROVIDER_BY_ID,
    FetchProviderByIdSuccess,
    TryUpdateProvider,
    TRY_UPDATE_PROVIDER,
    UpdateProviderSuccess,
    UpdateProviderError,
    FetchProviderByIdError,
    FetchProviderListNotEmptyError,
    TryCreateProvider,
    TRY_CREATE_PROVIDER,
    CreateProviderSuccess,
    CreateProviderError
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
    fetchProviderList$ = this.actions$.pipe(
        ofType<TryFetchProviderList>(TRY_FETCH_PROVIDER_LIST),
        switchMap( () => this.providerService.getAllProviders().pipe(
            map((providers: Provider[]) => new FetchProviderListSuccess(providers)),
            catchError(error => of(new FetchProviderListError(error)))
        ))
    );

    @Effect()
    fetchProviderListNotEmpty$ = this.actions$.pipe(
        ofType<TryFetchProviderListNotEmpty>(TRY_FETCH_PROVIDER_LIST_NOT_EMPTY),
        switchMap( () => this.providerService.getAllProvidersNotEmpty().pipe(
            map((providers: Provider[]) => new FetchProviderListNotEmptySuccess(providers)),
            catchError(error => of(new FetchProviderListNotEmptyError(error)))
        ))
    );

    @Effect()
    fetchProviderById$ = this.actions$.pipe(
        ofType<TryFetchProviderById>(TRY_FETCH_PROVIDER_BY_ID),
        map((action: TryFetchProviderById) => action.payload),
        switchMap((id: number) => this.providerService.getProviderById(id).pipe(
           map((provider: Provider) => new FetchProviderByIdSuccess(provider)),
            catchError(error => of(new FetchProviderByIdError(error)))
        )),
    );

    @Effect()
    updateProvider$ = this.actions$.pipe(
        ofType<TryUpdateProvider>(TRY_UPDATE_PROVIDER),
        map((action: TryUpdateProvider) => action.payload),
        switchMap((provider: Provider) => this.providerService.updateProvider(provider).pipe(
            map((updatedProvider: Provider) => new UpdateProviderSuccess(updatedProvider)),
        catchError(error => of(new UpdateProviderError(error)))
        )),
    );

    @Effect()
    createProvider$ = this.actions$.pipe(
        ofType<TryCreateProvider>(TRY_CREATE_PROVIDER),
        map((action: TryCreateProvider) => action.payload),
        switchMap((provider: Provider) => this.providerService.createProvider(provider).pipe(
            map((newProvider: Provider) => new CreateProviderSuccess(newProvider)),
            catchError(error => of(new CreateProviderError(error)))
        ))
    );
}
