import * as RequestActions from './request.actions';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';

describe('RequestActions', () => {

    describe('FetchRequestsSuccess', () => {
        it('should create a FetchRequestsSuccess action', () => {
            const payload = [
                {
                    id: 1,
                    quantity: 23,
                    deliveryDate: {} as Date,
                    status: [],
                    user: {} as User,
                    supply: {} as Supply
                },
                {
                    id: 1,
                    quantity: 23,
                    deliveryDate: {} as Date,
                    status: [],
                    user: {} as User,
                    supply: {} as Supply
                },
            ];
            const action = new RequestActions.FetchRequestsSuccess(payload);
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
            const payload = {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                status: [],
                user: {} as User,
                supply: {} as Supply
            };
            const action = new RequestActions.TryCreateRequest(payload);
            expect({...action}).toEqual({
                type: RequestActions.TRY_CREATE_REQUEST,
                payload
            });
        });
    });
    describe('CreateRequestSuccess', () => {
        it('should create a CreateRequestSuccess', () => {
            const payload = {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                status: [],
                user: {} as User,
                supply: {} as Supply
            };
            const action = new RequestActions.CreateRequestSuccess(payload);
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
});
