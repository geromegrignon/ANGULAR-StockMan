import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SupplyState } from '../reducers/supply.reducer';

export const supplySelector = createFeatureSelector('supply');

export const suppliesSelector = createSelector(supplySelector,
    (supplyState: SupplyState) => supplyState.supplies);

export const errorSupplySelector = createSelector(supplySelector,
    (supplyState: SupplyState) => supplyState.error);

export const selectedSupply = createSelector(supplySelector,
    (supplystate: SupplyState) => supplystate.supply);

    export const alertSuppliesSelector = createSelector(supplySelector,
        (supplyState: SupplyState) => supplyState.alertSupplies);
