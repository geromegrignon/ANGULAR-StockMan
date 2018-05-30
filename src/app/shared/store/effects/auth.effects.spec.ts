import { TestBed } from '@angular/core/testing';
import { AuthEffects } from './auth.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { UserService } from '../../../user/shared/services/user.service';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';
import { hot, cold} from 'jasmine-marbles';
import * as AuthActions from '../actions/auth.actions';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('AuthEffects', () => {
    let actions: Observable<any>;
    let effects: AuthEffects;
    let authService;
    let routerService;

    beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            StoreModule.forRoot({}),
            RouterTestingModule.withRoutes([
                {path: 'signin', component: {} as any}
            ])
        ],
        providers: [
            AuthEffects,
            provideMockActions(() => actions),
            UserService,
            AuthService
        ]
        });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    routerService = TestBed.get(Router);
    });

    it('should return empty', () => {
        spyOn(authService, 'signup').and.returnValue(of({username: 'aa'}));
        actions = hot('---a-', {a: new AuthActions.TrySignup({ username: 'aa', password: 'a' })});
        const expected = cold('-----');


        expect(effects.TrySignup$).toBeObservable(expected);
    });

    it('should return error', () => {
        spyOn(authService, 'signup').and.throwError('error');
        actions = hot('---a-', {a: new AuthActions.TrySignup({ username: 'aa', password: 'a' })});
        const expected = cold('---(b|)', { b: new AuthActions.SignupError('error')});

        expect(effects.TrySignup$).toBeObservable(expected);

    });

    describe('trySignup$ effect', () => {
        it('-> should return SignupSuccess action', () => {
          spyOn(authService, 'signup').and.returnValue(of({username: 'a'}));
          actions = hot('---a-', { a: new AuthActions.TrySignup({username: 'a', password: 'a'}) });
          const expected = cold('---b', {b: new AuthActions.SignupSuccess({username: 'a'})} );
          expect(effects.TrySignup$).toBeObservable(expected);
        });

        it('-> should return SignupError action', () => {
          spyOn(authService, 'signup').and.returnValue(cold('-#', {}, 'error'));
          actions = hot('---a-', { a: new AuthActions.TrySignup({username: 'a', password: 'a'}) });
          const expected = cold('----b', {b: new AuthActions.SignupError('error')});
          expect(effects.TrySignup$).toBeObservable(expected);
        });
      });

      describe('signupSuccess$ effect', () => {
        it('-> should nagivate to /signin', () => {
          spyOn(routerService, 'navigate').and.callThrough();
          actions = hot('---a-', { a: new AuthActions.SignupSuccess({username: 'a'})});
          const expected = cold('---b', { b: new AuthActions.SignupSuccess({username: 'a'})});
          expect(effects.SignupSuccess$).toBeObservable(expected);
          effects.SignupSuccess$.subscribe(() => {
            expect(routerService.navigate).toHaveBeenCalledWith(['/signin']);
          });
        });
});
});

