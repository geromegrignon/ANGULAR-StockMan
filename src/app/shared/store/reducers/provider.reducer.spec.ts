import * as ProviderReducer from './provider.reducer';
import * as ProviderActions from '../actions/provider.actions';
import { AddressInfo } from '../../model/addressInfo.model';

describe('ProviderReducer', () => {

    it('should return initial state', () => {
        const { initialProviderState } = ProviderReducer;
        const action = {} as any;
        expect(ProviderReducer.providerReducer(undefined, action)).toEqual(initialProviderState);
    });
    it('should return error when FetchProviderListNotEmptyError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProviderListNotEmptyError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when CreateProviderError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.CreateProviderError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when FetchProviderByIdError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProviderByIdError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return error when FetchProviderListError action', () => {
        const { initialProviderState } = ProviderReducer;
        const action = new ProviderActions.FetchProviderListError('error');
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.error).toEqual('error');
    });
    it('should return providers when FetchProviderListSuccess action', () => {
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
        const action = new ProviderActions.FetchProviderListSuccess(mockList);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.providerList).toEqual(payload);
    });
    it('should return providers when FetchProvidersNotEmpty action', () => {
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
        const action = new ProviderActions.FetchProviderListNotEmptySuccess(mockList);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.providerListNotEmpty).toEqual(payload);
    });
    it('should return providers when FetchProvidersSuccess action', () => {
        const { initialProviderState } = ProviderReducer;
        const mock = {
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
        const action = new ProviderActions.FetchProviderByIdSuccess(mock);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.provider).toEqual(payload);
    });
    it('should return new provider when CreateProviderSuccess action', () => {
        const { initialProviderState } = ProviderReducer;
        const mock = {
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
        const action = new ProviderActions.CreateProviderSuccess(mock);
        const state = ProviderReducer.providerReducer(initialProviderState, action);
        expect(state.provider).toEqual(payload);
    });
});
