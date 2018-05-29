import { Provider } from '../../../shared/model/provider.model';
import {
    ProviderActions,
    FETCH_PROVIDERS_ERROR,
    FETCH_PROVIDERS_SUCCESS,
    FETCH_PROVIDERS_NOT_EMPTY_ERROR,
    FETCH_PROVIDERS_NOT_EMPTY_SUCCESS,
    FETCH_PROVIDER_BY_ID_ERROR,
    FETCH_PROVIDER_BY_ID_SUCCESS
} from '../actions/provider.actions';

export interface ProviderState {
    providers: Provider[];
    providersNotEmpty: Provider[];
    provider: Provider;
    error: string;
}

export const initialProviderState: ProviderState = {
    providers: null,
    providersNotEmpty: null,
    provider: null,
    error: null
};

export function providerReducer(state: ProviderState = initialProviderState, action: ProviderActions) {
    switch (action.type) {
        case FETCH_PROVIDERS_NOT_EMPTY_ERROR :
        case FETCH_PROVIDER_BY_ID_ERROR :
        case FETCH_PROVIDERS_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case FETCH_PROVIDERS_SUCCESS : {
            return {
                ...state,
                providers: action.payload
            };
        }
        case FETCH_PROVIDER_BY_ID_SUCCESS : {
            return {
                ...state,
                provider: action.payload
            };
        }
        case FETCH_PROVIDERS_NOT_EMPTY_SUCCESS : {
            return {
                ...state,
                providersNotEmpty: action.payload
            };
        }
    }
    return state;
}
