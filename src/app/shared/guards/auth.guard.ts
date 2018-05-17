import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtToken } from '../model/jwtToken.model';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { isLoggedIn } from '../store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private store: Store<State>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      take(1),
      select(isLoggedIn)
    );
  }
}
