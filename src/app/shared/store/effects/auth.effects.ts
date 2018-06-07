import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    TRY_SIGNUP,
    TrySignup,
    SignupError,
    SignupSuccess,
    SIGNUP_SUCCESS,
    TrySignin,
    TRY_SIGNIN,
    SigninSuccess,
    SigninError,
    SIGNIN_SUCCESS,
    TryRefreshToken,
    TRY_REFRESH_TOKEN,
    Logout,
    LOGOUT,
    TryFetchCurrentUser,
    TRY_FETCH_CURRENT_USER,
    SetCurrentUser
} from '../actions/auth.actions';
import { map, switchMap, catchError, exhaustMap, tap, withLatestFrom } from 'rxjs/operators';
import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { empty, of, Subscription, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '..';
import { tokenSelector } from '../selectors/auth.selectors';

@Injectable()
export class AuthEffects {
    private subscription: Subscription;

    constructor(
        private actions$: Actions,
        private auth: AuthService,
        private router: Router,
        private store: Store<State>
    ) {}

    @Effect()
    TrySignup$ = this.actions$.pipe(
        ofType<TrySignup>(TRY_SIGNUP),
        map((action: TrySignup) => action.payload),
        exhaustMap((user: User) =>
        this.auth
        .signup(user)
        .pipe(
            map(newUser => new SignupSuccess(newUser)),
            catchError(error => of(new SignupError(error)))
        )
    ));

    @Effect({dispatch: false})
    SignupSuccess$ = this.actions$.pipe(
        ofType(SIGNUP_SUCCESS),
        tap(() => this.router.navigate(['/signin']))
    );

    @Effect()
    TrySignin$ = this.actions$.pipe(
        ofType<TrySignin>(TRY_SIGNIN),
        map((action: TrySignin) => action.payload),
        exhaustMap((credentials: {usernameOrEmail: string, password: string}) =>
        this.auth
        .signin(credentials)
        .pipe(
            map((token: string) => {
                localStorage.setItem('token', token);
                return new SigninSuccess(token);
            }),
            catchError(error => of(new SigninError(error)))
        )
    ));

    @Effect({dispatch: false})
    signInSuccess$ = this.actions$.pipe(
        ofType<SigninSuccess>(SIGNIN_SUCCESS),
        tap(() => {
            // if (!this.subscription) {
            // this.subscription = this.auth.initTimer().subscribe();
            this.router.navigate(['/dashboard']);
        // }
        })
    );

    @Effect()
    tryRefreshToken$ = this.actions$.pipe(
        ofType<TryRefreshToken>(TRY_REFRESH_TOKEN),
        withLatestFrom(this.store.pipe(select(tokenSelector))),
        switchMap( ([action, token]) => {
            if (token) {
            return this.auth.tryRefreshToken().pipe(
                map( (newToken: string) => {
                    localStorage.setItem('token', newToken);
                    return new SigninSuccess(newToken);
                }),
                catchError((err: any) => {
                    localStorage.removeItem('token');
                    if (this.subscription) {
                    this.subscription.unsubscribe();
                    }
                    return EMPTY;
                })
            );
            } else {
                return EMPTY;
            }
        }),
    );

    @Effect({dispatch: false})
    logOut$ = this.actions$.pipe(
        ofType<Logout>(LOGOUT),
        tap(() => {
        //     if (!this.subscription) {
        //     this.subscription.unsubscribe();
        // }
        localStorage.removeItem('token');
        this.router.navigate(['/signin']);
        })
    );

    @Effect()
    TryFetchCurrentUser$ = this.actions$.pipe(
        ofType<TryFetchCurrentUser>(TRY_FETCH_CURRENT_USER),
        switchMap(() => {
         return this.auth.getCurrentUser();
        }),
        map( (user: User) => {
            return new SetCurrentUser(user);
        }),
        catchError( (err: any) => {
            console.log('error in tryFetchCurrentUser');
            return EMPTY;
        }));

}

