import * as ProviderActions from './provider.actions';
import { AddressInfo } from '../../model/addressInfo.model';

describe('ProviderActions', () => {

    describe('FetchProviderListSuccess', () => {
        it('should create a FetchProviderListSuccess actions', () => {
            const payload = [{
                id: 1,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            },
            {
                id: 2,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            }
        ];
            const action = new ProviderActions.FetchProviderListSuccess(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDER_LIST_SUCCESS,
                payload
            });
        });
    });
    describe('FetchProviderListError', () => {
        it('should create a FetchProviderListError', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.FetchProviderListError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDER_LIST_ERROR,
                payload
            });
        });
    });
    describe('TryFetchProviderById', () => {
        it('should create a tryFetchProviderById action', () => {
            const payload = 1;
            const action = new ProviderActions.TryFetchProviderById(payload);
            expect({...action}).toEqual({
                type: ProviderActions.TRY_FETCH_PROVIDER_BY_ID,
                payload
            });
        });
    });
    describe('FetchProviderbyIdSuccess', () => {
        it('should create a FetchProviderByIdSuccess action', () => {
            const payload = {
                id: 1,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            };
            const action = new ProviderActions.FetchProviderByIdSuccess(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDER_BY_ID_SUCCESS,
                payload
            });
        });
    });
    describe('FetchProviderByIdError', () => {
        it('should create a FetchProviderByIdError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.FetchProviderByIdError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDER_BY_ID_ERROR,
                payload
            });
        });
    });
    describe('FetchProviderListNotEmptySuccess', () => {
        it('should create a FetchProviderListNotEmpty action', () => {
            const payload = [{
                id: 1,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            },
            {
                id: 2,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            }
        ];
        const action = new ProviderActions.FetchProviderListNotEmptySuccess(payload);
        expect({...action}).toEqual({
            type: ProviderActions.FETCH_PROVIDER_LIST_NOT_EMPTY_SUCCESS,
            payload
        });
        });
    });
    describe('FetchProviderListNotEmptyError', () => {
        it('should create a FetchProviderListNotEmpty action', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.FetchProviderListNotEmptyError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDER_LIST_NOT_EMPTY_ERROR,
                payload
            });
        });
    });
    describe('TryUpdateProvider', () => {
        it('should create a TryUpdateProvider action', () => {
            const payload = {
                id: 1,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            };
            const action = new ProviderActions.TryUpdateProvider(payload);
            expect({...action}).toEqual({
                type: ProviderActions.TRY_UPDATE_PROVIDER,
                payload
            });
        });
    });
    describe('UpdateProviderSuccess', () => {
        it('should create an UpdateProviderSuccess action', () => {
            const payload = {
                id: 1,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            };
            const action = new ProviderActions.UpdateProviderSuccess(payload);
            expect({...action}).toEqual({
                type: ProviderActions.UPDATE_PROVIDER_SUCCESS,
                payload
            });
        });
    });
    describe('UpdateProviderError', () => {
        it('should create an UpdateProviderError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.UpdateProviderError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.UPDATE_PROVIDER_ERROR,
                payload
            });
        });
    });
    describe('TryCreateProvider', () => {
        it('should create a TryCreateProvider action', () => {
            const payload = {
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            };
            const action = new ProviderActions.TryCreateProvider(payload);
            expect({...action}).toEqual({
                type: ProviderActions.TRY_CREATE_PROVIDER,
                payload
            });
        });
    });

});
