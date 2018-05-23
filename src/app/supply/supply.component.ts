import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { Provider } from '../shared/model/provider.model';
import { Observable, Subscription, from } from 'rxjs';
import { providerListSelector } from '../shared/store/selectors/provider.selectors';
import { TryFetchProviders } from '../shared/store/actions/provider.actions';
import { SupplyService } from './shared/services/supply.service';
import { filter, map } from 'rxjs/operators';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  public providerList$: Observable<Provider[]> = this.store.pipe(select(providerListSelector));
  public subscription: Subscription;

  constructor(private store: Store<State>, private providerService: ProviderService) { }

  ngOnInit() {
    this.store.dispatch(new TryFetchProviders());

    // Sébastien
    // modus operandi : je récupère une liste de providers qui ont une liste de supply(supplyList)
    // objectif : n'afficher que les providers qui ont une liste de supply (affichage en localhost:8080/supply)
    /*
    this.providerService.getAllProviders().pipe(
      filter((provider: Provider) => provider.supplyList != null)
    ).subscribe();
    */

  }
}
