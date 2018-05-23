import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducers';
import { SupplyState, supplyReducer } from '../../supply/shared/store/supply.reducer';
import { ProviderState, providerReducer } from './reducers/provider.reducer';

export interface State {
    auth: AuthState;
    supply: SupplyState;
    provider: ProviderState;
}

export const reducersMap: ActionReducerMap<State> = {
    auth: authReducer,
    supply: supplyReducer,
    provider: providerReducer
};

