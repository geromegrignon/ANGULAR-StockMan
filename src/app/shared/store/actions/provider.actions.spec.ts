import * as ProviderActions from './provider.actions';
import { AddressInfo } from '../../model/addressInfo.model';

describe('ProviderActions', () => {

    describe('FetchProvidersSuccess', () => {
        it('should create a FetchProvidersSuccess actions', () => {
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
            const action = new ProviderActions.FetchProvidersSuccess(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDERS_SUCCESS,
                payload
            });
        });
    });
    describe('FetchProvidersError', () => {
        it('should create a FetchProvidersError', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.FetchProvidersError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDERS_ERROR,
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
    describe('FetchProvidersNotEmptySuccess', () => {
        it('should create a FetchProvidersNotEmpty action', () => {
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
        const action = new ProviderActions.FetchProvidersNotEmptySuccess(payload);
        expect({...action}).toEqual({
            type: ProviderActions.FETCH_PROVIDERS_NOT_EMPTY_SUCCESS,
            payload
        });
        });
    });
    describe('FetchProvidersNotEmptyError', () => {
        it('should create a FetchProvidersNotEmpty action', () => {
            const payload = {
                error: 'error'
            };
            const action = new ProviderActions.FetchProvidersNotEmptyError(payload);
            expect({...action}).toEqual({
                type: ProviderActions.FETCH_PROVIDERS_NOT_EMPTY_ERROR,
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

});
