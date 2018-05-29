import * as AuthReducer from './auth.reducers';
import * as AuthActions from '../actions/auth.actions';

fdescribe('AuthReducer', () => {

    it('should return initialAuthState', () => {
        const { initialAuthState } = AuthReducer;
        const action = {} as any;

        expect(AuthReducer.authReducer(undefined, action)).toEqual(initialAuthState);
    });

    it('should return an error', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SignupError({
            message: 'error'
        });
        const state = AuthReducer.authReducer(initialAuthState, action);

        expect(state.error).toEqual({
            message: 'error'
        });


    });
});
