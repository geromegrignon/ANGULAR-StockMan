import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProviderState } from '../reducers/provider.reducer';

export const providerSelector = createFeatureSelector('provider');

export const providerListSelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.providerList);

export const providerListNotEmptySelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.providerListNotEmpty);

export const providerByIdSelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.provider);

export const errorProviderSelector = createSelector(providerSelector,
    (providerState: ProviderState) => providerState.error);
