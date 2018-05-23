import { Provider } from '../../../shared/model/provider.model';
import { ProviderActions, FETCH_PROVIDERS_ERROR, FETCH_PROVIDERS_SUCCESS } from '../actions/provider.actions';

export interface ProviderState {
    providers: Provider[];
    provider: Provider;
    error: string;
}

export const initialProviderState: ProviderState = {
    providers: null,
    provider: null,
    error: null
};

export function providerReducer(state: ProviderState = initialProviderState, action: ProviderActions) {
    switch (action.type) {
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
    }
    return state;
}
