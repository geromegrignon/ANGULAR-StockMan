import * as RequestReducer from './request.reducer';
import * as RequestActions from '../actions/request.actions';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';

describe('RequestReducer', () => {

    it('should return initial state', () => {
        const { initialRequestState } = RequestReducer;
        const action = {} as any;
        expect(RequestReducer.requestReducer(undefined, action)).toEqual(initialRequestState);
    });
    it('should return an error when CreateRequestError action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.CreateRequestError('error');
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when FetchRequestsError action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.FetchRequestsError('error');
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.error).toEqual('error');
    });
    it('should return a requestList when FetchRequestsSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const mockList = [
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
        const action = new RequestActions.FetchRequestsSuccess(mockList);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.requestList).toEqual(payload);
    });
    it('should return a request when CreateRequestSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const mockList = {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                status: [],
                user: {} as User,
                supply: {} as Supply
            };
        const payload =  {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                status: [],
                user: {} as User,
                supply: {} as Supply
            };
        const action = new RequestActions.CreateRequestSuccess(mockList);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.newRequest).toEqual(payload);
    });
});
