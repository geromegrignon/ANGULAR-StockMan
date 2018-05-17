import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer, of, Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../model/jwtToken.model';
import { tap, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryRefreshToken } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated: null,
    token: null
  });
  public subscription: Subscription;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<State>
  ) {
    // this.initToken();
   }

   public initTimer() {
     return timer(2000, 5000).pipe(
       tap(() => {
                this.store.dispatch(new TryRefreshToken());
       })
     );
   }

   public tryRefreshToken(): Observable<string> {
     return this.http.get<string>('/api/auth/refresh-token');
   }
       /*
      switchMap(() => {
        if (localStorage.getItem('jwt')) {
          console.log('try refresh token');
          return this.http.get<string>('/api/auth/refresh-token').pipe(
            tap((token: string) => {
              this.jwtToken.next({
                isAuthenticated: true,
                token: token
              });
              localStorage.setItem('jwt', token);
            })
          );
        } else {
          console.log('no token to refresh');
          return of(null);
        }
      })
     ).subscribe(() => {}, err => {
       this.jwtToken.next({
         isAuthenticated: false,
         token: null
       });
       localStorage.removeItem('jwt');
       this.subscription.unsubscribe();
     });
     */

   public initToken(): void {
     const token = localStorage.getItem('jwt');
     if (token) {
       this.jwtToken.next({
         isAuthenticated: true,
         token: token
       });
     } else {
       this.jwtToken.next({
         isAuthenticated: false,
         token: null
       });
     }
   }

  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup', user);
  }

  public signin(credentials: {email: string, password: string}): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials);
  }

  public logout(): void {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null
    });
    localStorage.removeItem('jwt');
    this.router.navigate(['/signin']);
  }
}
