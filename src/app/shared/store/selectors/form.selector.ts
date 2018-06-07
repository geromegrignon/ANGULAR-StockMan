import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from '../reducers/form.reducer';

export const formSelector = createFeatureSelector('form');

export const readonlySelector = createSelector(formSelector,
     (formState: FormState) => formState.readonly);

