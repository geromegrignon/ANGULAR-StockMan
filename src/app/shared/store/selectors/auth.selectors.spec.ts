import * as AuthSelectors from './auth.selectors';
import { Role } from '../../model/role.model';
import { PersonalInfo } from '../../model/personalInfo.model';


describe('AuthSelectors', () => {

    describe('errorAuthSelector', () => {

        it('should return null', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: null
                }
            };

            expect(AuthSelectors.errorAuthSelector(mockState)).toEqual(null);
        });

        it('should return error', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: 'error',
                    isLoggedIn: null
                }
            };

            expect(AuthSelectors.errorAuthSelector(mockState)).toEqual('error');
        });
    });
    describe('tokenSelector', () => {

        it('should return null', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: null
                }
            };

            expect(AuthSelectors.tokenSelector(mockState)).toEqual(null);
        });

        it('should return token', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: 'jwtToken',
                    error: null,
                    isLoggedIn: null
                }
            };

            expect(AuthSelectors.tokenSelector(mockState)).toEqual('jwtToken');
        });

    });
    describe('isLoggedIn', () => {

        it('should return true', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: true
                }
            };

            expect(AuthSelectors.isLoggedIn(mockState)).toEqual(true);
        });

        it('should return false ', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: false
                }
            };

            expect(AuthSelectors.isLoggedIn(mockState)).toEqual(false);
        });

    });
    describe('isLoggedInSelector', () => {

        it('should return false', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: false
                }
            };

            expect(AuthSelectors.isLoggedInSelector(mockState)).toEqual(false);
        });

        it('should return true', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: true
                }
            };

            expect(AuthSelectors.isLoggedInSelector(mockState)).toEqual(true);
        });

    });
    describe('currentUserSelector', () => {

        it('should return null', () => {
            const mockState = {
                auth: {
                    user: null,
                    token: null,
                    error: null,
                    isLoggedIn: null
                }
            };

            expect(AuthSelectors.currentUserSelector(mockState)).toEqual(null);
        });

        it('should return user', () => {
            const mockState = {
                auth: {
                    user: {
                        id: 1,
                        username: 'toto',
                        password: '123',
                        personalInfo: {} as PersonalInfo,
                        role: {} as Role,
                        orderRequestList: []
                    },
                    token: null,
                    error: null,
                    isLoggedIn: null
                }
            };
            const user = {
                id: 1,
                username: 'toto',
                password: '123',
                personalInfo: {} as PersonalInfo,
                role: {} as Role,
                orderRequestList: []
            };

            expect(AuthSelectors.currentUserSelector(mockState)).toEqual(user);
        });

    });
});
