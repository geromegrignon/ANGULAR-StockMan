import * as ProviderSelectors from './provider.selectors';
import { AddressInfo } from '../../model/addressInfo.model';
import { State } from '..';

describe('ProviderSelectors', () => {

    describe('providerListSelector', () => {
        it('should return providers', () => {
            const mockState = {
                provider: {
                providers: [{
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
            ],
                providersNotEmpty: null,
                provider: null,
                error: null
            }};
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
        expect(ProviderSelectors.providerListSelector(mockState)).toEqual(payload);
        });
    });
    describe('errorProviderSelector', () => {
        it('should return error', () => {
            const mockState = {
                provider: {
                    providers: null,
                    providersNotEmpty: null,
                    provider: null,
                    error: 'error'
                }
            };
            expect(ProviderSelectors.errorProviderSelector(mockState)).toEqual('error');
        });
    });
    describe('providerListNotEmptySelector', () => {
        it('should return providerListNotEmpty', () => {
            const mockState = {
                provider: {
                    providers: null,
                    providersNotEmpty: [{
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
                ],
                    provider: null,
                    error: 'error'
                }
            };
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
        expect(ProviderSelectors.providerListNotEmptySelector(mockState)).toEqual(payload);
        });
    });
    describe('providerByIdSelector', () => {
        it('should return providerByIdSelector', () => {
            const mockState = {
                provider: {
                    providers: null,
                    providersNotEmpty: null,
                    provider:
                    {
                        id: 2,
                        siret: 793773103827162,
                        name: 'Lyreco',
                        addressInfo: {} as AddressInfo,
                        supplyList: [],
                        contactList: []
                    },
                    error: null
                }
            };
            const payload = {
                id: 2,
                siret: 793773103827162,
                name: 'Lyreco',
                addressInfo: {} as AddressInfo,
                supplyList: [],
                contactList: []
            };
            expect(ProviderSelectors.providerByIdSelector(mockState)).toEqual(payload);
        });
    });
});
