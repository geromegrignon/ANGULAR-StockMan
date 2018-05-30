import * as AuthReducer from './auth.reducers';
import * as AuthActions from '../actions/auth.actions';

describe('AuthReducer', () => {

    it('should return initialAuthState', () => {
        const { initialAuthState } = AuthReducer;
        const action = {} as any;
        expect(AuthReducer.authReducer(undefined, action)).toEqual(initialAuthState);
    });
    it('should return an error when SignupError action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SignupError('error');
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when SigninError action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SigninError('error');
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.error).toEqual('error');
    });
    it('should return a token when SigninSuccess action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SigninSuccess('jwtToken');
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.token).toEqual('jwtToken');
    });
    it('should return isLoggedIn === true when SigninSuccess action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SigninSuccess('jwtToken');
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.isLoggedIn).toEqual(true);
    });
    it('should return error === null when SigninSuccess action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.SigninSuccess('jwtToken');
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.error).toEqual(null);
    });
    it('should reset state when Logout action', () => {
        const { initialAuthState } = AuthReducer;
        const action = new AuthActions.Logout();
        const state = AuthReducer.authReducer(initialAuthState, action);
        expect(state.user).toEqual(null);
        expect(state.error).toEqual(null);
        expect(state.token).toEqual(null);
        expect(state.isLoggedIn).toEqual(false);
    });
});
