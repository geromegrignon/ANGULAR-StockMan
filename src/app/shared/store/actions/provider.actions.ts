import { Action } from '@ngrx/store';
import { Provider } from '../../../shared/model/provider.model';

export const TRY_FETCH_PROVIDERS = '[ provider ] try fetch providers';
export const FETCH_PROVIDERS_SUCCESS = '[ provider ] fetch providers success';
export const FETCH_PROVIDERS_ERROR = '!! [ provider ] fetch providers error';

export const TRY_FETCH_PROVIDER_BY_ID = '[ provider ] try fetch provider by id';
export const FETCH_PROVIDER_BY_ID_SUCCESS = '[ provider ] fetch provider by id success';
export const FETCH_PROVIDER_BY_ID_ERROR = '!! [ provider ] fetch provider by id error';

export const TRY_FETCH_PROVIDERS_NOT_EMPTY = '[ provider ] try fetch providers not empty';
export const FETCH_PROVIDERS_NOT_EMPTY_SUCCESS = '[ provider ] fetch providers not empty success';
export const FETCH_PROVIDERS_NOT_EMPTY_ERROR = '!! [ provider ] fetch providers not empty error';

export const TRY_UPDATE_PROVIDER = '[ provider ] try update provider';
export const UPDATE_PROVIDER_SUCCESS = '[ provider ] update provider success';
export const UPDATE_PROVIDER_ERROR = '[ provider ] update provider error';

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

export class TryFetchProviderById implements Action {
    readonly type = TRY_FETCH_PROVIDER_BY_ID;
    constructor(public payload: number) {}
}

export class FetchProviderByIdSuccess implements Action {
    readonly type = FETCH_PROVIDER_BY_ID_SUCCESS;
    constructor(public payload: Provider) {}
}

export class FetchProviderByIdError implements Action {
    readonly type = FETCH_PROVIDER_BY_ID_ERROR;
    constructor(public payload: any) {}
}

export class TryFetchProvidersNotEmpty implements Action {
    readonly type = TRY_FETCH_PROVIDERS_NOT_EMPTY;
}

export class FetchProvidersNotEmptySuccess implements Action {
    readonly type = FETCH_PROVIDERS_NOT_EMPTY_SUCCESS;
    constructor(public payload: Provider[]) {}
}

export class FetchProvidersNotEmptyError implements Action {
    readonly type = FETCH_PROVIDERS_NOT_EMPTY_ERROR;
    constructor(public payload: any) {}
}

export class TryUpdateProvider implements Action {
    readonly type = TRY_UPDATE_PROVIDER;
    constructor(public payload: Provider) {}
}

export class UpdateProviderSuccess implements Action {
    readonly type = UPDATE_PROVIDER_SUCCESS;
    constructor(public payload: Provider) {}
}

export class UpdateProviderError implements Action {
    readonly type = UPDATE_PROVIDER_ERROR;
    constructor(public payload: any) {}
}

export type ProviderActions =
    TryFetchProviders |
    FetchProvidersSuccess |
    FetchProvidersError |
    TryFetchProvidersNotEmpty |
    FetchProvidersNotEmptySuccess |
    FetchProvidersNotEmptyError |
    TryFetchProviderById |
    FetchProviderByIdSuccess |
    FetchProviderByIdError |
    TryUpdateProvider |
    UpdateProviderSuccess |
    UpdateProviderError;
