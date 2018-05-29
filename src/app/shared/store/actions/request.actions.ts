import { Action } from '@ngrx/store';
import { OrderRequest } from '../../model/orderRequest.model';

export const TRY_FETCH_REQUESTS = '[ request ] try fetch requests';
export const FETCH_REQUESTS_SUCCESS = '[ request ] fetch requests success';
export const FETCH_REQUESTS_ERROR = '!! [ request ] fetch requests error';

export const TRY_CREATE_REQUEST = '[ request ] try create request';
export const CREATE_REQUEST_SUCCESS = '[ request ] create request success';
export const CREATE_REQUEST_ERROR = '!! [ request ] create request error';

export class TryFetchRequests implements Action {
    readonly type = TRY_FETCH_REQUESTS;
}

export class FetchRequestsSuccess implements Action {
    readonly type = FETCH_REQUESTS_SUCCESS;
    constructor(public payload: OrderRequest[]) {}
}

export class FetchRequestsError implements Action {
    readonly type = FETCH_REQUESTS_ERROR;
    constructor(public payload: any) {}
}

export class TryCreateRequest implements Action {
    readonly type = TRY_CREATE_REQUEST;
    constructor(public payload: OrderRequest) {}
}

export class CreateRequestSuccess implements Action {
    readonly type = CREATE_REQUEST_SUCCESS;
    constructor(public payload: OrderRequest) {}
}

export class CreateRequestError implements Action {
    readonly type = CREATE_REQUEST_ERROR;
    constructor(public payload: any) {}
}

export type RequestActions =
    TryFetchRequests |
    FetchRequestsSuccess |
    FetchRequestsError |
    TryCreateRequest |
    CreateRequestSuccess |
    CreateRequestError;
