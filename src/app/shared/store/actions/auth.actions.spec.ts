import * as AuthActions from './auth.actions';

fdescribe('AuthActions', () => {

    describe('TrySignup action', () => {

        it('should create a try signup action', () => {
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

    describe('TrySignup error', () => {

        it('should create a try signupError action', () => {
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
});
