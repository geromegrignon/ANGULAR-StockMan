import { OrderRequest } from '../../model/orderRequest.model';
import {
    RequestActions,
    FETCH_REQUESTS_ERROR,
    FETCH_REQUESTS_SUCCESS,
    CREATE_REQUEST_ERROR,
    CREATE_REQUEST_SUCCESS
} from '../actions/request.actions';

export interface RequestState {
    requestList: OrderRequest[];
    request: OrderRequest;
    newRequest: OrderRequest;
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
    }
    return state;
}
