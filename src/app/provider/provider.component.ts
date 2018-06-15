import { Component, OnInit, OnChanges } from '@angular/core';
import { Provider } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { providerListSelector } from '../shared/store/selectors/provider.selectors';
import { TryFetchProviderList } from '../shared/store/actions/provider.actions';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  public providerList$: Observable<Provider[]> = this.store.pipe(select(providerListSelector));

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }


}
