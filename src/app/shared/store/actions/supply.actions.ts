import { Action } from '@ngrx/store';
import { Supply } from '../../../shared/model/supply.model';

export const TRY_FETCH_SUPPLIES = '[ supply ] try fetch supplies';
export const FETCH_SUPPLIES_SUCCESS = '[ supply ] fetch supplies success';
export const FETCH_SUPPLIES_ERROR = '!! [ supply ] fetch supply error';

export const TRY_FETCH_SELECTED_SUPPLY = '[ supply ] try fetch selected supply';
export const FETCH_SELECTED_SUPPLY_SUCCESS = '[ supply ] fetch selected supply success';
export const FETCH_SELECTED_SUPPLY_ERROR = '!! [ supply ] fetch selected supply error';

export const TRY_UPDATE_SUPPLY = '[ supply ] try update supply';
export const UPDATE_SUPPLY_SUCCESS = '[ supply ] update supply success';
export const UPDATE_SUPPLY_ERROR = '!! [ supply ] update supply error';

export const TRY_FETCH_ALERT_SUPPLIES = '[ supply ] try fetch alert supplies';
export const FETCH_ALERT_SUPPLIES_SUCCESS = '[ supply ] fetch alert supplies success';
export const FETCH_ALERT_SUPPLIES_ERROR = '!! [ supply ] fetch alert supplies error';

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

export class TryUpdateSupply implements Action {
    readonly type = TRY_UPDATE_SUPPLY;
    constructor(public payload: Supply) {}
}

export class UpdateSupplySuccess implements Action {
    readonly type = UPDATE_SUPPLY_SUCCESS;
    constructor(public payload: Supply) {}
}

export class UpdateSupplyError implements Action {
    readonly type = UPDATE_SUPPLY_ERROR;
    constructor(public payload: any) {}
}

export class TryFetchAlertSupplies implements Action {
    readonly type = TRY_FETCH_ALERT_SUPPLIES;
}

export class FetchAlertSuppliesSuccess implements Action {
    readonly type = FETCH_ALERT_SUPPLIES_SUCCESS;
    constructor(public payload: Supply[]) {}
}

export class FetchAlertSuppliesError implements Action {
    readonly type = FETCH_ALERT_SUPPLIES_ERROR;
    constructor(public payload: any) {}
}

export type SupplyActions =
    TryFetchSupplies |
    FetchSuppliesSuccess |
    FetchSuppliesError |
    TryFetchSelectedSupply |
    FetchSelectedSupplySuccess |
    FetchSelectedSupplyError |
    TryUpdateSupply |
    UpdateSupplySuccess |
    UpdateSupplyError |
    TryFetchAlertSupplies |
    FetchAlertSuppliesSuccess |
    FetchAlertSuppliesError;
