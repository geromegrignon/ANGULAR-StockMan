import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProviderState } from '../reducers/provider.reducer';

export const providerSelector = createFeatureSelector('provider');

export const providerListSelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.providers);

export const errorProviderSelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.error);
