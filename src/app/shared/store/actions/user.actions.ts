import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';

export const TRY_FETCH_USER_LIST = '[ user ] try fetch user list';
export const FETCH_USER_LIST_SUCCESS = '[ user ] fetch user list success';
export const FETCH_USER_LIST_ERROR = '!! [ user ] fetch user list error';

export class TryFetchUserList implements Action {
    readonly type = TRY_FETCH_USER_LIST;
}

export class FetchUserListSuccess implements Action {
    readonly type = FETCH_USER_LIST_SUCCESS;
    constructor(public payload: User[]) {}
}

export class FetchUserListError implements Action {
    readonly type = FETCH_USER_LIST_ERROR;
    constructor(public payload: any) {
    }
}

export type userActions =
    TryFetchUserList |
    FetchUserListSuccess |
    FetchUserListError;
