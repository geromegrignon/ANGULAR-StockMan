import * as AuthActions from './auth.actions';

describe('AuthActions', () => {

    describe('TrySignup action', () => {

        it('should create a TrySignup action', () => {
            const payload = {
                email: 'a@a.fr',
                name: 'a',
                username: 'aa',
                password: 'a'
            };
            const action = new AuthActions.TrySignup(payload);

            expect({...action}).toEqual({
                type: AuthActions.TRY_SIGNUP,
                payload
            });
        });
    });

    describe('SignupSuccess action', () => {

        it('should create a SignupSuccess action', () => {
            const payload = {
                email: 'a@a.fr',
                name: 'a',
                username: 'aa',
                password: 'a'
            };
            const action = new AuthActions.SignupSuccess(payload);

            expect({...action}).toEqual({
                type: AuthActions.SIGNUP_SUCCESS,
                payload
            });
        });
    });

    describe('TrySignup error', () => {

        it('should create a TrySignupError action', () => {
            const payload = {
                message: 'error'
            };

            const action = new AuthActions.SignupError(payload);

            expect({...action}).toEqual({
                type: AuthActions.SIGNUP_ERROR,
                payload
            });
        });
    });

    describe('TrySignin action', () => {

        it('should create a TrySignin action', () => {
            const payload = {
                usernameOrEmail: 'aa',
                password: 'a'
            };
            const action = new AuthActions.TrySignin(payload);

            expect({...action}).toEqual({
                type: AuthActions.TRY_SIGNIN,
                payload
            });
        });
    });

    describe('SigninSuccess action', () => {

        it('should create a SigninSuccess action', () => {
            const payload =  'jwtToken';
            const action = new AuthActions.SigninSuccess(payload);

            expect({...action}).toEqual({
                type: AuthActions.SIGNIN_SUCCESS,
                payload
            });
        });
    });

    describe('TrySignin error', () => {

        it('should create a TrySigninError action', () => {
            const payload = {
                message: 'error'
            };

            const action = new AuthActions.SigninError(payload);

            expect({...action}).toEqual({
                type: AuthActions.SIGNIN_ERROR,
                payload
            });
        });
    });
});
