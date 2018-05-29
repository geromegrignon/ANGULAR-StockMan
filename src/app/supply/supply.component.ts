import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { Provider } from '../shared/model/provider.model';
import { Observable } from 'rxjs';
import { providerListNotEmptySelector } from '../shared/store/selectors/provider.selectors';
import { TryFetchProvidersNotEmpty } from '../shared/store/actions/provider.actions';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  public providerList$: Observable<Provider[]> = this.store.pipe(select(providerListNotEmptySelector));

  constructor(
    private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new TryFetchProvidersNotEmpty());
  //  this.providerService.getAllProviders().pipe(
  //    map(x => x.filter(xt => xt.supplyList))).subscribe();

  }
}
