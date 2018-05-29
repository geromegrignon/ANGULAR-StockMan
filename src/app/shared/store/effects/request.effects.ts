import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '..';
import { RequestService } from '../../services/request.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
    TryFetchRequests,
    TRY_FETCH_REQUESTS,
    FetchRequestsSuccess,
    FetchRequestsError,
    TryCreateRequest,
    TRY_CREATE_REQUEST,
    CreateRequestSuccess,
    CreateRequestError
} from '../actions/request.actions';
import { switchMap, catchError, map, exhaust, exhaustMap } from 'rxjs/operators';
import { OrderRequest } from '../../model/orderRequest.model';
import { of } from 'rxjs';

@Injectable()
export class RequestEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private requestService: RequestService
    ) {}

    @Effect()
    fetchRequests$ = this.actions$.pipe(
        ofType<TryFetchRequests>(TRY_FETCH_REQUESTS),
        switchMap( () => this.requestService.getAllRequests().pipe(
            map( (requestList: OrderRequest[]) => new FetchRequestsSuccess(requestList)),
            catchError(error => of(new FetchRequestsError(error)))
        ))
    );

    @Effect()
    createRequest$ = this.actions$.pipe(
        ofType<TryCreateRequest>(TRY_CREATE_REQUEST),
        map((action: TryCreateRequest) => action.payload),
        exhaustMap((request: OrderRequest) =>
        this.requestService.createRequest(request).pipe(
            map(newRequest => new CreateRequestSuccess(newRequest)),
            catchError(error => of(new CreateRequestError(error)))
        ))
    );
}
