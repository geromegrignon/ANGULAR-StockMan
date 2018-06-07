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
    CreateRequestError,
    TryUpdateRequest,
    TRY_UPDATE_REQUEST,
    UpdateRequestSuccess,
    UpdateRequestError,
    TRY_FETCH_REQUEST_BY_ID,
    TryFetchRequestById,
    FetchRequestByIdSuccess,
    FetchRequestByIdError
} from '../actions/request.actions';
import { switchMap, catchError, map, exhaust, exhaustMap } from 'rxjs/operators';
import { Request } from '../../model/request.model';
import { of } from 'rxjs';

@Injectable()
export class RequestEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private requestService: RequestService
    ) {}

    @Effect()
    fetchRequestList$ = this.actions$.pipe(
        ofType<TryFetchRequests>(TRY_FETCH_REQUESTS),
        switchMap( () => this.requestService.getAllRequests().pipe(
            map( (requestList: Request[]) => new FetchRequestsSuccess(requestList)),
            catchError(error => of(new FetchRequestsError(error)))
        ))
    );

    @Effect()
    createRequest$ = this.actions$.pipe(
        ofType<TryCreateRequest>(TRY_CREATE_REQUEST),
        map((action: TryCreateRequest) => action.payload),
        exhaustMap((request: Request) =>
        this.requestService.createRequest(request).pipe(
            map(newRequest => new CreateRequestSuccess(newRequest)),
            catchError(error => of(new CreateRequestError(error)))
        ))
    );

    @Effect()
    updateRequest$ = this.actions$.pipe(
        ofType<TryUpdateRequest>(TRY_UPDATE_REQUEST),
        map((action: TryUpdateRequest) => action.payload),
        switchMap((request: Request) => this.requestService.updateRequest(request).pipe(
            map((updatedRequest: Request) => new UpdateRequestSuccess(request)),
            catchError((error) => of(new UpdateRequestError(error)))
        ))
    );

    @Effect()
    fetchRequestById$ = this.actions$.pipe(
        ofType<TryFetchRequestById>(TRY_FETCH_REQUEST_BY_ID),
        map((action: TryFetchRequestById) => action.payload),
        switchMap((id: number) => this.requestService.getRequestById(id).pipe(
            map((request: Request) => new FetchRequestByIdSuccess(request)),
            catchError((error) => of(new FetchRequestByIdError(error)))
        ))
    );
}
