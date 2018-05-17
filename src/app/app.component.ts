import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import { State } from './shared/store';
import { TryRefreshToken } from './shared/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<State>) {
    this.store.dispatch(new TryRefreshToken());
  }
}
