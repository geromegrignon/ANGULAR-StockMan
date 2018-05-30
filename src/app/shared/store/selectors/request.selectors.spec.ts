import * as RequestSelectors from './request.selectors';
import { OrderRequest } from '../../model/orderRequest.model';
import { User } from '../../model/user.model';
import { Supply } from '../../model/supply.model';

describe('RequestSelectors', () => {

    describe('RequestListSelector', () => {
        it('should return RequestListSelector', () => {
            const mockState = {
                request: {
                    requestList:  [
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
                    ],
                    request: {} as OrderRequest,
                    newRequest:  {} as OrderRequest,
                    error: null
                }
            };
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
            expect(RequestSelectors.RequestListSelector(mockState)).toEqual(payload);
        });
    });
    describe('errorRequestSelector', () => {
        it('should return errorRequestSelector', () => {
            const mockState = {
                request: {
                    requestList: null,
                    request: {} as OrderRequest,
                    newRequest:  {} as OrderRequest,
                    error: 'error'
                }
            };
            expect(RequestSelectors.errorRequestSelector(mockState)).toEqual('error');
        });
    });
    describe('newRequestSelector', () => {
        it('should return newRequestSelector', () => {
            const mockState = {
                request: {
                    requestList: [],
                    request: {} as OrderRequest,
                    newRequest:  {
                        id: 1,
                        quantity: 23,
                        deliveryDate: {} as Date,
                        status: [],
                        user: {} as User,
                        supply: {} as Supply
                    },
                    error: null
                }
            };
            const payload = {
                    id: 1,
                    quantity: 23,
                    deliveryDate: {} as Date,
                    status: [],
                    user: {} as User,
                    supply: {} as Supply
            };
            expect(RequestSelectors.newRequestSelector(mockState)).toEqual(payload);
        });
    });
});
