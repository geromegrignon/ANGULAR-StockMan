import * as ProviderReducer from './provider.reducer';
import * as ProviderActions from '../actions/provider.actions';
import { AddressInfo } from '../../model/addressInfo.model';

describe('ProviderReducer', () => {

    it('should return initial state', () => {
        const { initialProviderState } = ProviderReducer;
        const action = {} as any;
        expect(ProviderReducer.providerReducer(undefined, action)).toEqual(initialProviderState);
    });
    it('should return error when FetchProvidersNotEmptyError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProvidersNotEmptyError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when FetchProviderByIdError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProviderByIdError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when FetchProvidersError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProvidersError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when FetchProvidersSuccess action', () => {
        const { initialProviderState } = ProviderReducer;
        const mockList = [{
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
        const action = new ProviderActions.FetchProvidersSuccess(mockList);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.providers).toEqual(payload);
    });
    it('should return error when FetchProvidersNotEmpty action', () => {
        const { initialProviderState } = ProviderReducer;
        const mockList = [{
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
        const action = new ProviderActions.FetchProvidersNotEmptySuccess(mockList);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.providersNotEmpty).toEqual(payload);
    });
    it('should return error when FetchProvidersSuccess action', () => {
        const { initialProviderState } = ProviderReducer;
        const mockList = {
            id: 1,
            siret: 793773103827162,
            name: 'Lyreco',
            addressInfo: {} as AddressInfo,
            supplyList: [],
            contactList: []
        };
    const payload = {
        id: 1,
        siret: 793773103827162,
        name: 'Lyreco',
        addressInfo: {} as AddressInfo,
        supplyList: [],
        contactList: []
    };
        const action = new ProviderActions.FetchProviderByIdSuccess(mockList);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.provider).toEqual(payload);
    });
});
