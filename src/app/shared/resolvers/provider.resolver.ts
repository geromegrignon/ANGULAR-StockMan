import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Provider } from '../model/provider.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { TryFetchProvidersNotEmpty } from '../store/actions/provider.actions';
import { providerListNotEmptySelector } from '../store/selectors/provider.selectors';

@Injectable()
export class ProviderResolver implements Resolve<Provider[]> {
    constructor(private store: Store<State>) {}

    resolve(): Observable<Provider[]> {
        this.store.dispatch(new TryFetchProvidersNotEmpty());
        return this.store.pipe(select(providerListNotEmptySelector));
    }
}
