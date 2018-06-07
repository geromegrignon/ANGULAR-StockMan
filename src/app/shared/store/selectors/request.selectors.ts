import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from '../reducers/request.reducer';

export const requestSelector = createFeatureSelector('request');

export const RequestListSelector = createSelector(requestSelector,
    (requestState: RequestState) => requestState.requestList);

export const errorRequestSelector = createSelector(requestSelector,
    (requestState: RequestState) => requestState.error);

export const newRequestSelector = createSelector(requestSelector,
    (requestState: RequestState) => requestState.newRequest);

export const singleRequestSelector = createSelector(requestSelector,
    (requestState: RequestState) => requestState.request);
