import * as RequestSelectors from './request.selectors';
import { Request } from '../../model/request.model';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';
import * as Mock from '../../mocks/request.mock.spec';

describe('RequestSelectors', () => {

    describe('RequestListSelector', () => {
        it('should return RequestListSelector', () => {
            expect(RequestSelectors.RequestListSelector(Mock.REQUEST_STATE)).toEqual(Mock.REQUEST_LIST_EXIT);
        });
    });
    describe('errorRequestSelector', () => {
        it('should return errorRequestSelector', () => {
            expect(RequestSelectors.errorRequestSelector(Mock.REQUEST_STATE)).toEqual('error');
        });
    });
    describe('newRequestSelector', () => {
        it('should return newRequestSelector', () => {
            expect(RequestSelectors.newRequestSelector(Mock.REQUEST_STATE)).toEqual(Mock.SINGLE_REQUEST_EXIT);
        });
    });
    describe('singleRequestSelector', () => {
        it('should return singleRequestSelector', () => {
            expect(RequestSelectors.singleRequestSelector(Mock.REQUEST_STATE)).toEqual(Mock.SINGLE_REQUEST_EXIT);
        });
    });
});
