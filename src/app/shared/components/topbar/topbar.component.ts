import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtToken } from '../../model/jwtToken.model';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { isLoggedIn } from '../../store/selectors/auth.selectors';
import { Logout } from '../../store/actions/auth.actions';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(
    private store: Store<State>,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }
}
