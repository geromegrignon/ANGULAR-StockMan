import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { TryFetchRequests } from '../store/actions/request.actions';
import { TryFetchAlertSupplies } from '../store/actions/supply.actions';

@Injectable()
export class DashboardResolver implements Resolve<void> {
    constructor(private store: Store<State>) {}

    resolve(): void {
        this.store.dispatch(new TryFetchRequests());
        this.store.dispatch(new TryFetchAlertSupplies());
    }
}
