import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SupplyState } from './supply.reducer';

export const supplySelector = createFeatureSelector('supply');

export const suppliesSelector = createSelector(supplySelector,
    (supplyState: SupplyState) => supplyState.supplies);

export const errorSuppliesSelector = createSelector(supplySelector,
    (supplyState: SupplyState) => supplyState.error);

export const selectedSupply = createSelector(supplySelector,
    (supplystate: SupplyState) => supplystate.supply);

export const errorSelectedSupply = createSelector(supplySelector,
    (supplyState: SupplyState) => supplyState.error);
