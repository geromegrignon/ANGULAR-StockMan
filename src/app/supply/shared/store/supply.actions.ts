import { Action } from '@ngrx/store';
import { Supply } from '../../../shared/model/supply.model';

export const TRY_FETCH_SUPPLIES = '[ supply ] try fetch supplies';
export const FETCH_SUPPLIES_SUCCESS = '[ supply ] fetch supplies success';
export const FETCH_SUPPLIES_ERROR = '[ supply ] fetch supply error';

export const TRY_FETCH_SELECTED_SUPPLY = '[ supply ] try fetch selected supply';
export const FETCH_SELECTED_SUPPLY_SUCCESS = '[ supply ] fetch selected supply success';
export const FETCH_SELECTED_SUPPLY_ERROR = '[ supply ] fetch selected supply error';


export class TryFetchSupplies implements Action {
    readonly type = TRY_FETCH_SUPPLIES;
}

export class FetchSuppliesSuccess implements Action {
    readonly type = FETCH_SUPPLIES_SUCCESS;
    constructor(public payload: Supply[]) {}
}

export class FetchSuppliesError implements Action {
    readonly type = FETCH_SUPPLIES_ERROR;
    constructor(public payload: any) {}
}

export class TryFetchSelectedSupply implements Action {
    readonly type = TRY_FETCH_SELECTED_SUPPLY;
    constructor(public payload: number) {}
}

export class FetchSelectedSupplySuccess implements Action {
    readonly type = FETCH_SELECTED_SUPPLY_SUCCESS;
    constructor(public payload: Supply) {}
}

export class FetchSelectedSupplyError implements Action {
    readonly type = FETCH_SELECTED_SUPPLY_ERROR;
    constructor(public payload: any) {}
}

export type SupplyActions =
    TryFetchSupplies |
    FetchSuppliesSuccess |
    FetchSuppliesError |
    TryFetchSelectedSupply |
    FetchSelectedSupplySuccess |
    FetchSelectedSupplyError;
