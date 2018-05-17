import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducers';



export const authSelector = createFeatureSelector('auth');

export const errorAuthSelector = createSelector(authSelector,
    (authState: AuthState) => {
    if (authState) {
        return authState.error;
    } else {
        return null;
    }
}
);

export const tokenSelector = createSelector(authSelector,
    (authState: AuthState) => {
        if (authState) {
            return authState.token;
        } else {
            return null;
        }
    }
);

export const isLoggedIn = createSelector(authSelector,
    (authstate: AuthState) => {
        if (authstate) {
            return authstate.isLoggedIn;
        } else {
            return null;
        }
    });

export const isLoggedInSelector = createSelector(authSelector,
    (authstate: AuthState) => {
        if (authstate) {
            return authstate.isLoggedIn;
        } else {
            return false;
        }
    });

export const currentUserSelector = createSelector(authSelector,
     (authstate: AuthState) => {
          if (authstate) {
               return authstate.user;
          } else {
              return null;
         }
     });

