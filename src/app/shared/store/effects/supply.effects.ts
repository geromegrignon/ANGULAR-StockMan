import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import {
    TryFetchSupplies,
    TRY_FETCH_SUPPLIES,
    FetchSuppliesSuccess,
    FetchSuppliesError,
    TryFetchSelectedSupply,
    TRY_FETCH_SELECTED_SUPPLY,
    FetchSelectedSupplySuccess,
    FetchSelectedSupplyError,
    TryUpdateSupply,
    TRY_UPDATE_SUPPLY,
    UpdateSupplySuccess,
    UpdateSupplyError,
    TryFetchAlertSupplies,
    TRY_FETCH_ALERT_SUPPLIES,
    FetchAlertSuppliesSuccess,
    FetchAlertSuppliesError
} from '../actions/supply.actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { Supply } from '../../../shared/model/supply.model';
import { of } from 'rxjs';
import { spread } from 'q';
import { SupplyService } from '../../services/supply.service';

@Injectable()
export class SupplyEffects {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private supplyService: SupplyService
    ) {}

    @Effect()
    fetchSupplies$ = this.actions$.pipe(
        ofType<TryFetchSupplies>(TRY_FETCH_SUPPLIES),
        switchMap( () => this.supplyService.getAllSupplies().pipe(
           map((supplies: Supply[]) =>  new FetchSuppliesSuccess(supplies)),
           catchError(error => of(new FetchSuppliesError(error)))
        ))
    );

    @Effect()
    fetchAlertSupplies$ = this.actions$.pipe(
        ofType<TryFetchAlertSupplies>(TRY_FETCH_ALERT_SUPPLIES),
        switchMap( () => this.supplyService.getOnAlertSuppplies().pipe(
           map((supplies: Supply[]) =>  new FetchAlertSuppliesSuccess(supplies)),
           catchError(error => of(new FetchAlertSuppliesError(error)))
        ))
    );

    @Effect()
    fetchSelectedSupply$ = this.actions$.pipe(
        ofType<TryFetchSelectedSupply>(TRY_FETCH_SELECTED_SUPPLY),
        map((action) => action.payload),
        mergeMap((id: number) => this.supplyService.getSupply(id).pipe(
            map((supply: Supply) => new FetchSelectedSupplySuccess(supply)),
            catchError(error => of(new FetchSelectedSupplyError(error)))
        ))
    );

    @Effect()
    updateSupply$ = this.actions$.pipe(
        ofType<TryUpdateSupply>(TRY_UPDATE_SUPPLY),
        map((action) => action.payload),
        mergeMap((supply: Supply) => this.supplyService.updateSupply(supply).pipe(
            map((updatedSupply: Supply) => new UpdateSupplySuccess(supply)),
            catchError(error => of(new UpdateSupplyError(error)))
        ))
    );

}


