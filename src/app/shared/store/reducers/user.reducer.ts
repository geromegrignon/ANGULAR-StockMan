import { User } from '../../model/user.model';
import { userActions, FETCH_USER_LIST_ERROR, FETCH_USER_LIST_SUCCESS } from '../actions/user.actions';

export interface UserState {
    userList: User[];
    user: User;
    error: string;
}

export const initialUserState: UserState = {
    userList: null,
    user: null,
    error: null
};

export function userReducer(state: UserState, action: userActions) {
    switch (action.type) {
        case FETCH_USER_LIST_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case FETCH_USER_LIST_SUCCESS : {
            return {
                ...state,
                userList: action.payload
            };
        }
    }
    return state;
}
