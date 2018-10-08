import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryFetchProviderList } from '../store/actions/provider.actions';

@Injectable()
export class ProviderListResolver implements Resolve<void> {
    constructor(private store: Store<State>) {}

    resolve(): void {
        this.store.dispatch(new TryFetchProviderList());
    }
}
