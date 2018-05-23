import { Action } from '@ngrx/store';
import { Provider } from '../../../shared/model/provider.model';

export const TRY_FETCH_PROVIDERS = '[ provider ] try fetch providers';
export const FETCH_PROVIDERS_SUCCESS = '[ provider ] fetch providers success';
export const FETCH_PROVIDERS_ERROR = '[ provider ] fetch providers error';

export class TryFetchProviders implements Action {
    readonly type = TRY_FETCH_PROVIDERS;
}

export class FetchProvidersSuccess implements Action {
    readonly type = FETCH_PROVIDERS_SUCCESS;
    constructor(public payload: Provider[]) {}
}

export class FetchProvidersError implements Action {
    readonly type = FETCH_PROVIDERS_ERROR;
    constructor(public payload: any) {}
}

export type ProviderActions =
    TryFetchProviders |
    FetchProvidersSuccess |
    FetchProvidersError;
