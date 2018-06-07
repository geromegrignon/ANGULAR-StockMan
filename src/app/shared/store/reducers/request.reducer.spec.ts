import * as RequestReducer from './request.reducer';
import * as RequestActions from '../actions/request.actions';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';
import * as Mock from '../../mocks/request.mock.spec';

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
    it('should return an error when UpdateRequestError action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.UpdateRequestError('error');
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when FetchRequestByIdError action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.FetchRequestByIdError('error');
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.error).toEqual('error');
    });
    it('should return a requestList when FetchRequestsSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.FetchRequestsSuccess(Mock.REQUEST_LIST_ENTRY);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.requestList).toEqual(Mock.REQUEST_LIST_EXIT);
    });
    it('should return a request when CreateRequestSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.CreateRequestSuccess(Mock.SINGLE_REQUEST_ENTRY);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.newRequest).toEqual(Mock.SINGLE_REQUEST_EXIT);
    });
    it('should return a request when UpdateRequestSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.UpdateRequestSuccess(Mock.SINGLE_REQUEST_ENTRY);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.request).toEqual(Mock.SINGLE_REQUEST_EXIT);
    });
    it('should return a request when FetchRequestByIdSuccess action', () => {
        const { initialRequestState } = RequestReducer;
        const action = new RequestActions.FetchRequestByIdSuccess(Mock.SINGLE_REQUEST_ENTRY);
        const state = RequestReducer.requestReducer(initialRequestState, action);
        expect(state.request).toEqual(Mock.SINGLE_REQUEST_EXIT);
    });
});
