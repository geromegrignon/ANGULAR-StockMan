import * as RequestActions from './request.actions';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';
import * as Mock from '../../mocks/request.mock.spec';

describe('RequestActions', () => {

    describe('FetchRequestsSuccess', () => {
        it('should create a FetchRequestsSuccess action', () => {
            const payload = Mock.REQUEST_LIST_EXIT;
            const action = new RequestActions.FetchRequestsSuccess(Mock.REQUEST_LIST_ENTRY);
            expect({...action}).toEqual({
                type: RequestActions.FETCH_REQUESTS_SUCCESS,
                payload
            });
        });
    });
    describe('FetchRequestsError', () => {
        it('should create a FetchRequestsError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new RequestActions.FetchRequestsError(payload);
            expect({...action}).toEqual({
                type: RequestActions.FETCH_REQUESTS_ERROR,
                payload
            });
        });
    });
    describe('TryCreateReQuest', () => {
        it('should create a TryCreateRequest action', () => {
            const payload = Mock.SINGLE_REQUEST_EXIT;
            const action = new RequestActions.TryCreateRequest(Mock.SINGLE_REQUEST_ENTRY);
            expect({...action}).toEqual({
                type: RequestActions.TRY_CREATE_REQUEST,
                payload
            });
        });
    });
    describe('CreateRequestSuccess', () => {
        it('should create a CreateRequestSuccess action', () => {
            const payload = Mock.SINGLE_REQUEST_EXIT;
            const action = new RequestActions.CreateRequestSuccess(Mock.SINGLE_REQUEST_ENTRY);
            expect({...action}).toEqual({
                type: RequestActions.CREATE_REQUEST_SUCCESS,
                payload
            });
        });
    });
    describe('CreateRequestError', () => {
        it('should create a CreateRequestError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new RequestActions.CreateRequestError(payload);
            expect({...action}).toEqual({
                type: RequestActions.CREATE_REQUEST_ERROR,
                payload
            });
        });
    });
    describe('UpdateRequestSuccess', () => {
        it('should create an UpdateRequestSuccess action', () => {
            const payload = Mock.SINGLE_REQUEST_EXIT;
            const action = new RequestActions.UpdateRequestSuccess(Mock.SINGLE_REQUEST_ENTRY);
            expect({...action}).toEqual({
                type: RequestActions.UPDATE_REQUEST_SUCCESS,
                payload
            });
        });
    });
    describe('UpdateRequestError', () => {
        it('should create an UpdateRequestError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new RequestActions.UpdateRequestError(payload);
            expect({...action}).toEqual({
                type: RequestActions.UPDATE_REQUEST_ERROR,
                payload
            });
        });
    });
    describe('TryFetchRequestById', () => {
        it('should create a TryFetchRequestById action', () => {
            const payload = 1;
            const action = new RequestActions.TryFetchRequestById(payload);
            expect({...action}).toEqual({
                type: RequestActions.TRY_FETCH_REQUEST_BY_ID,
                payload
            });
        });
    });
    describe('FetchRequestByIdSuccess', () => {
        it('should create a FetchRequestByIdSuccess action', () => {
            const payload = Mock.SINGLE_REQUEST_EXIT;
            const action = new RequestActions.FetchRequestByIdSuccess(Mock.SINGLE_REQUEST_ENTRY);
            expect({...action}).toEqual({
                type: RequestActions.FETCH_REQUEST_BY_ID_SUCCESS,
                payload
            });
        });
    });
    describe('FetchRequestByIdError', () => {
        it('should create a FetchRequestByIdError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new RequestActions.FetchRequestByIdError(payload);
            expect({...action}).toEqual({
                type: RequestActions.FETCH_REQUEST_BY_ID_ERROR,
                payload
            });
        });
    });
});
