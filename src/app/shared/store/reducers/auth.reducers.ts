import { User } from '../../model/user.model';
import { Action } from '@ngrx/store';
import { AuthActions, SIGNUP_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS, LOGOUT, SET_CURRENT_USER } from '../actions/auth.actions';


export interface AuthState {
    user: User;
    token: string;
    error: string;
    isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
    user: null,
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    error: null
};

export function authReducer(state: AuthState = initialAuthState, action: AuthActions) {
    switch (action.type) {
        case SIGNIN_ERROR :
        case SIGNUP_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case SIGNIN_SUCCESS : {
            return {
                ...state,
                token: action.payload,
                isLoggedIn: true,
                error: null
            };
        }
        case LOGOUT : {
            return {
                ...state,
                user: null,
                error: null,
                token: null,
                isLoggedIn: false

            };
        }
        case SET_CURRENT_USER : {
            return {
                ...state,
                user: action.payload
            };
        }
    }
    return state;
}
