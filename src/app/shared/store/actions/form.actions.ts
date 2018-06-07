import { Action } from '@ngrx/store';

export const GET_READONLY = '[ form ] get readonly';
export const SET_READONLY_MODE = '[ form ] set readonly mode';
export const SET_FORM_MODE = '[ form ] set form mode';

export class GetReadonly implements Action {
    readonly type = GET_READONLY;
}

export class SetReadonlyMode implements Action {
    readonly type = SET_READONLY_MODE;
}

export class SetFormMode implements Action {
    readonly type = SET_FORM_MODE;
}

export type FormActions =
    GetReadonly |
    SetReadonlyMode |
    SetFormMode;
