import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducers';
import { SupplyState, supplyReducer } from '../../supply/shared/store/supply.reducer';

export interface State {
    auth: AuthState;
    supply: SupplyState;
}

export const reducersMap: ActionReducerMap<State> = {
    auth: authReducer,
    supply: supplyReducer
};

