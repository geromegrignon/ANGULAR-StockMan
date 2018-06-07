import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RequestEffects } from './request.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { RequestService } from '../../services/request.service';
import * as Mock from '../../mocks/request.mock.spec';
import { hot, cold } from 'jasmine-marbles';
import * as RequestActions from '../actions/request.actions';

describe('Request Effects', () => {
    let actions$: Observable<any>;
    let effects: RequestEffects;
    let requestService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                StoreModule.forRoot({})
            ],
            providers: [
                RequestEffects,
                provideMockActions(() => actions$),
                RequestService
            ]
        });
        effects = TestBed.get(RequestEffects);
        requestService = TestBed.get(RequestService);
    });

    describe('fetchRequestList$ effect', () => {
        it('-> should return FetchRequestsSuccess action', () => {
            spyOn(requestService, 'getAllRequests').and.returnValue(of(Mock.REQUEST_LIST_ENTRY));
            actions$ = hot('---a-', {a: new RequestActions.TryFetchRequests()});
            const expected = cold('---b', {b: new RequestActions.FetchRequestsSuccess(Mock.REQUEST_LIST_EXIT)});
            expect(effects.fetchRequestList$).toBeObservable(expected);
        });
        it('-> should return FetchRequestsError action', () => {
            spyOn(requestService, 'getAllRequests').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new RequestActions.TryFetchRequests()});
            const expected = cold('----b', {b: new RequestActions.FetchRequestsError('error')});
            expect(effects.fetchRequestList$).toBeObservable(expected);
        });
    });

    describe('createRequest$ effect', () => {
        it('-> should return CreateRequestSuccess action', () => {
            spyOn(requestService, 'createRequest').and.returnValue(of(Mock.SINGLE_REQUEST_ENTRY));
            actions$ = hot('---a-', {a: new RequestActions.TryCreateRequest(Mock.SINGLE_REQUEST_EXIT)});
            const expected = cold('---b', {b: new RequestActions.CreateRequestSuccess(Mock.SINGLE_REQUEST_EXIT)});
            expect(effects.createRequest$).toBeObservable(expected);
        });
        it('-> should return CreateRequestError action', () => {
            spyOn(requestService, 'createRequest').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new RequestActions.TryCreateRequest(Mock.SINGLE_REQUEST_EXIT)});
            const expected = cold('----b', {b: new RequestActions.CreateRequestError('error')});
            expect(effects.createRequest$).toBeObservable(expected);
        });
    });

    describe('updateRequest$ effect', () => {
        it('-> should return UpdateRequestSuccess action', () => {
            spyOn(requestService, 'updateRequest').and.returnValue(of(Mock.SINGLE_REQUEST_ENTRY));
            actions$ = hot('---a-', {a: new RequestActions.TryUpdateRequest(Mock.SINGLE_REQUEST_EXIT)});
            const expected = cold('---b', {b: new RequestActions.UpdateRequestSuccess(Mock.SINGLE_REQUEST_EXIT)});
            expect(effects.updateRequest$).toBeObservable(expected);
        });
        it('-> should return UpdateRequestError action', () => {
            spyOn(requestService, 'updateRequest').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new RequestActions.TryUpdateRequest(Mock.SINGLE_REQUEST_EXIT)});
            const expected = cold('----b', {b: new RequestActions.UpdateRequestError('error')});
            expect(effects.updateRequest$).toBeObservable(expected);
        });
    });

    describe('fetchRequestById$ effect', () => {
        it('-> should return FetchRequestByIdSuccess action', () => {
            spyOn(requestService, 'getRequestById').and.returnValue(of(Mock.SINGLE_REQUEST_ENTRY));
            actions$ = hot('---a-', {a: new RequestActions.TryFetchRequestById(1)});
            const expected = cold('---b', {b: new RequestActions.FetchRequestByIdSuccess(Mock.SINGLE_REQUEST_EXIT)});
            expect(effects.fetchRequestById$).toBeObservable(expected);
        });
        it('-> should return FetchRequestByIdError action', () => {
            spyOn(requestService, 'getRequestById').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new RequestActions.TryFetchRequestById(1)});
            const expected = cold('----b', {b: new RequestActions.FetchRequestByIdError('error')});
            expect(effects.fetchRequestById$).toBeObservable(expected);
        });
    });


});
