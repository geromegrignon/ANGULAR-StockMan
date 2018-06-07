import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Provider } from '../model/provider.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { TryFetchProviderListNotEmpty } from '../store/actions/provider.actions';

@Injectable()
export class ProviderListNotEmptyResolver implements Resolve<void> {
    constructor(private store: Store<State>) {}

    resolve(): void {
        this.store.dispatch(new TryFetchProviderListNotEmpty());
    }
}
