import { Provider } from '../../../shared/model/provider.model';
import {
    ProviderActions,
    FETCH_PROVIDER_LIST_ERROR,
    FETCH_PROVIDER_LIST_SUCCESS,
    FETCH_PROVIDER_LIST_NOT_EMPTY_ERROR,
    FETCH_PROVIDER_LIST_NOT_EMPTY_SUCCESS,
    FETCH_PROVIDER_BY_ID_ERROR,
    FETCH_PROVIDER_BY_ID_SUCCESS,
    CREATE_PROVIDER_ERROR,
    CREATE_PROVIDER_SUCCESS
} from '../actions/provider.actions';

export interface ProviderState {
    providerList: Provider[];
    providerListNotEmpty: Provider[];
    provider: Provider;
    error: string;
}

export const initialProviderState: ProviderState = {
    providerList: null,
    providerListNotEmpty: null,
    provider: null,
    error: null
};

export function providerReducer(state: ProviderState = initialProviderState, action: ProviderActions) {
    switch (action.type) {
        case FETCH_PROVIDER_LIST_NOT_EMPTY_ERROR :
        case FETCH_PROVIDER_BY_ID_ERROR :
        case CREATE_PROVIDER_ERROR :
        case FETCH_PROVIDER_LIST_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case FETCH_PROVIDER_LIST_SUCCESS : {
            return {
                ...state,
                providerList: action.payload
            };
        }
        case CREATE_PROVIDER_SUCCESS :
        case FETCH_PROVIDER_BY_ID_SUCCESS : {
            return {
                ...state,
                provider: action.payload
            };
        }
        case FETCH_PROVIDER_LIST_NOT_EMPTY_SUCCESS : {
            return {
                ...state,
                providerListNotEmpty: action.payload
            };
        }
    }
    return state;
}
