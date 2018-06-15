import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const userSelector = createFeatureSelector('user');

export const userListSelector = createSelector(userSelector,
    (userState: UserState) => userState.userList);
