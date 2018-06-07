import { Action } from '@ngrx/store';
import { Request } from '../../model/request.model';

export const TRY_FETCH_REQUESTS = '[ request ] try fetch requests';
export const FETCH_REQUESTS_SUCCESS = '[ request ] fetch requests success';
export const FETCH_REQUESTS_ERROR = '!! [ request ] fetch requests error';

export const TRY_CREATE_REQUEST = '[ request ] try create request';
export const CREATE_REQUEST_SUCCESS = '[ request ] create request success';
export const CREATE_REQUEST_ERROR = '!! [ request ] create request error';

export const TRY_UPDATE_REQUEST = '[ request ] try update request';
export const UPDATE_REQUEST_SUCCESS = '[ request ] update request success';
export const UPDATE_REQUEST_ERROR = '[ request ] update request error';

export const TRY_FETCH_REQUEST_BY_ID = '[ request ] = try fech request by id';
export const FETCH_REQUEST_BY_ID_SUCCESS = '[ request ] fetch request by id success';
export const FETCH_REQUEST_BY_ID_ERROR = '[ request ] = fetch request by id error';

export class TryFetchRequests implements Action {
    readonly type = TRY_FETCH_REQUESTS;
}

export class FetchRequestsSuccess implements Action {
    readonly type = FETCH_REQUESTS_SUCCESS;
    constructor(public payload: Request[]) {}
}

export class FetchRequestsError implements Action {
    readonly type = FETCH_REQUESTS_ERROR;
    constructor(public payload: any) {}
}

export class TryCreateRequest implements Action {
    readonly type = TRY_CREATE_REQUEST;
    constructor(public payload: Request) {}
}

export class CreateRequestSuccess implements Action {
    readonly type = CREATE_REQUEST_SUCCESS;
    constructor(public payload: Request) {}
}

export class CreateRequestError implements Action {
    readonly type = CREATE_REQUEST_ERROR;
    constructor(public payload: any) {}
}

export class TryUpdateRequest implements Action {
    readonly type = TRY_UPDATE_REQUEST;
    constructor(public payload: Request) {}
}

export class UpdateRequestSuccess implements Action {
    readonly type = UPDATE_REQUEST_SUCCESS;
    constructor(public payload: Request) {}
}

export class UpdateRequestError implements Action {
    readonly type = UPDATE_REQUEST_ERROR;
    constructor(public payload: any) {}
}

export class TryFetchRequestById implements Action {
    readonly type = TRY_FETCH_REQUEST_BY_ID;
    constructor(public payload: number) {}
}

export class FetchRequestByIdSuccess implements Action {
    readonly type = FETCH_REQUEST_BY_ID_SUCCESS;
    constructor(public payload: Request) {}
}

export class FetchRequestByIdError implements Action {
    readonly type = FETCH_REQUEST_BY_ID_ERROR;
    constructor(public payload: any) {}
}

export type RequestActions =
    TryFetchRequests |
    FetchRequestsSuccess |
    FetchRequestsError |
    TryCreateRequest |
    CreateRequestSuccess |
    CreateRequestError |
    TryUpdateRequest |
    UpdateRequestSuccess |
    UpdateRequestError |
    TryFetchRequestById |
    FetchRequestByIdSuccess |
    FetchRequestByIdError;
