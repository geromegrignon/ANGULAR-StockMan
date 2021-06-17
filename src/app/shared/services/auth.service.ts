import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer, of, Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from '../model/jwtToken.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryRefreshToken } from '../store/actions/auth.actions';

const HOST = 'http://localhost:8080/api';
 const ENDPOINT = 'auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
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

   public initTimer() {
     return timer(2000, 5000).pipe(
       tap(() => {
                this.store.dispatch(new TryRefreshToken());
       })
     );
   }

   public tryRefreshToken(): Observable<string> {
     return this.http.get<string>(`${HOST}/${ENDPOINT}/refreshToken`);
   }

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
    return this.http.post<User>(`${HOST}/${ENDPOINT}/signup`, user);
  }

  public signin(credentials: {usernameOrEmail: string, password: string}): Observable<string> {
    return this.http.post<string>(`${HOST}/${ENDPOINT}/signin`, credentials);
  }

  public logout(): void {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null
    });
    localStorage.removeItem('jwt');
    this.router.navigate(['/signin']);
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/user/me');
}
}
