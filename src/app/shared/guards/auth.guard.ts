import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtToken } from '../model/jwtToken.model';
import { take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { isLoggedIn } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<State>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
   if (!this.store.pipe(take(1), select(isLoggedIn))) {
    this.router.navigate(['/signin']);
   }
   return this.store.pipe(take(1), select(isLoggedIn));
  }
}
