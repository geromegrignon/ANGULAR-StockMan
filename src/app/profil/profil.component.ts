import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { TryFetchCurrentUser } from '../shared/store/actions/auth.actions';
import { currentUserSelector } from '../shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public currentUser$: Observable<User>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
    this.store.dispatch(new TryFetchCurrentUser());
  }

}
