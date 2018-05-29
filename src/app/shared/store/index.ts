import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducers';
import { ProviderState, providerReducer } from './reducers/provider.reducer';
import { SupplyState, supplyReducer } from './reducers/supply.reducer';
import { RequestState, requestReducer } from './reducers/request.reducer';

export interface State {
    auth: AuthState;
    supply: SupplyState;
    provider: ProviderState;
    request: RequestState;
}

export const reducersMap: ActionReducerMap<State> = {
    auth: authReducer,
    supply: supplyReducer,
    provider: providerReducer,
    request: requestReducer
};

