import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducers';
import { ProviderState, providerReducer } from './reducers/provider.reducer';
import { SupplyState, supplyReducer } from './reducers/supply.reducer';
import { RequestState, requestReducer } from './reducers/request.reducer';
import { FormState, formReducer } from './reducers/form.reducer';
import { UserState, userReducer } from './reducers/user.reducer';

export interface State {
    auth: AuthState;
    supply: SupplyState;
    provider: ProviderState;
    request: RequestState;
    form: FormState;
    user: UserState;
}

export const reducersMap: ActionReducerMap<State> = {
    auth: authReducer,
    supply: supplyReducer,
    provider: providerReducer,
    request: requestReducer,
    form: formReducer,
    user: userReducer
};

