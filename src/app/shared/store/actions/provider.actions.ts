import { Action } from '@ngrx/store';
import { Provider } from '../../../shared/model/provider.model';

export const TRY_FETCH_PROVIDER_LIST = '[ provider ] try fetch providerList';
export const FETCH_PROVIDER_LIST_SUCCESS = '[ provider ] fetch providerList success';
export const FETCH_PROVIDER_LIST_ERROR = '!! [ provider ] fetch providerList error';

export const TRY_FETCH_PROVIDER_BY_ID = '[ provider ] try fetch provider by id';
export const FETCH_PROVIDER_BY_ID_SUCCESS = '[ provider ] fetch provider by id success';
export const FETCH_PROVIDER_BY_ID_ERROR = '!! [ provider ] fetch provider by id error';

export const TRY_FETCH_PROVIDER_LIST_NOT_EMPTY = '[ provider ] try fetch providerList not empty';
export const FETCH_PROVIDER_LIST_NOT_EMPTY_SUCCESS = '[ provider ] fetch providerList not empty success';
export const FETCH_PROVIDER_LIST_NOT_EMPTY_ERROR = '!! [ provider ] fetch providerList not empty error';

export const TRY_UPDATE_PROVIDER = '[ provider ] try update provider';
export const UPDATE_PROVIDER_SUCCESS = '[ provider ] update provider success';
export const UPDATE_PROVIDER_ERROR = '[ provider ] update provider error';

export const TRY_CREATE_PROVIDER = '[ provider ] try create provider';
export const CREATE_PROVIDER_SUCCESS = '[ provider ] create provider success';
export const CREATE_PROVIDER_ERROR = '[ provider ] create provider error';

export class TryFetchProviderList implements Action {
    readonly type = TRY_FETCH_PROVIDER_LIST;
}

export class FetchProviderListSuccess implements Action {
    readonly type = FETCH_PROVIDER_LIST_SUCCESS;
    constructor(public payload: Provider[]) {}
}

export class FetchProviderListError implements Action {
    readonly type = FETCH_PROVIDER_LIST_ERROR;
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

export class TryFetchProviderListNotEmpty implements Action {
    readonly type = TRY_FETCH_PROVIDER_LIST_NOT_EMPTY;
}

export class FetchProviderListNotEmptySuccess implements Action {
    readonly type = FETCH_PROVIDER_LIST_NOT_EMPTY_SUCCESS;
    constructor(public payload: Provider[]) {}
}

export class FetchProviderListNotEmptyError implements Action {
    readonly type = FETCH_PROVIDER_LIST_NOT_EMPTY_ERROR;
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

export class TryCreateProvider implements Action {
    readonly type = TRY_CREATE_PROVIDER;
    constructor(public payload: Provider) {}
}

export class CreateProviderSuccess implements Action {
    readonly type = CREATE_PROVIDER_SUCCESS;
    constructor(public payload: Provider) {}
}

export class CreateProviderError implements Action {
    readonly type = CREATE_PROVIDER_ERROR;
    constructor(public payload: any) {}
}

export type ProviderActions =
    TryFetchProviderList |
    FetchProviderListSuccess |
    FetchProviderListError |
    TryFetchProviderListNotEmpty |
    FetchProviderListNotEmptySuccess |
    FetchProviderListNotEmptyError |
    TryFetchProviderById |
    FetchProviderByIdSuccess |
    FetchProviderByIdError |
    TryUpdateProvider |
    UpdateProviderSuccess |
    UpdateProviderError |
    TryCreateProvider |
    CreateProviderSuccess |
    CreateProviderError;
