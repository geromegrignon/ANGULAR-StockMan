import { Request } from '../../model/request.model';
import {
    RequestActions,
    FETCH_REQUESTS_ERROR,
    FETCH_REQUESTS_SUCCESS,
    CREATE_REQUEST_ERROR,
    CREATE_REQUEST_SUCCESS,
    UPDATE_REQUEST_ERROR,
    UPDATE_REQUEST_SUCCESS,
    FETCH_REQUEST_BY_ID_ERROR,
    FETCH_REQUEST_BY_ID_SUCCESS
} from '../actions/request.actions';

export interface RequestState {
    requestList: Request[];
    request: Request;
    newRequest: Request;
    error: string;
}

export const initialRequestState: RequestState = {
    requestList: null,
    request: null,
    newRequest: null,
    error: null
};

export function requestReducer(state: RequestState = initialRequestState, action: RequestActions) {
    switch (action.type) {
        case CREATE_REQUEST_ERROR :
        case UPDATE_REQUEST_ERROR :
        case FETCH_REQUEST_BY_ID_ERROR :
        case FETCH_REQUESTS_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case FETCH_REQUESTS_SUCCESS: {
            return {
                ...state,
                requestList: action.payload
            };
        }
        case CREATE_REQUEST_SUCCESS: {
            return {
                ...state,
                newRequest: action.payload
            };
        }
        case FETCH_REQUEST_BY_ID_SUCCESS :
        case UPDATE_REQUEST_SUCCESS : {
            return {
                ...state,
                request: action.payload
            };
        }
    }
    return state;
}
