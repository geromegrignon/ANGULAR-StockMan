import * as ProviderActions from '../actions/provider.actions';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ProviderEffects } from './provider.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ProviderService } from '../../services/provider.service';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { AddressInfo } from '../../model/addressInfo.model';

describe('ProviderEffects', () => {
    let actions$: Observable<any>;
    let effects: ProviderEffects;
    let providerService;

    const mock = {
        id: 1,
        siret: 793773103827162,
        name: 'Lyreco',
        addressInfo: {} as AddressInfo,
        supplyList: [],
        contactList: []
    };
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
const payload = {
    id: 1,
    siret: 793773103827162,
    name: 'Lyreco',
    addressInfo: {} as AddressInfo,
    supplyList: [],
    contactList: []
};
const payloadList = [{
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

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                StoreModule.forRoot({})
            ],
            providers: [
                ProviderEffects,
                provideMockActions(() => actions$),
                ProviderService
            ]
        });

        effects = TestBed.get(ProviderEffects);
        providerService = TestBed.get(ProviderService);

    });

    describe('fetchProviders$ effect', () => {
        it('-> should return FetchProvidersSuccess action', () => {
            spyOn(providerService, 'getAllProviders').and.returnValue(of(mockList));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProviders()});
            const expected = cold('---b', {b: new ProviderActions.FetchProvidersSuccess(payloadList)});
            expect(effects.fetchProviders$).toBeObservable(expected);
        });
        it('-> should return FetchProvidersError action', () => {
            spyOn(providerService, 'getAllProviders').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProviders()});
            const expected = cold('----b', {b: new ProviderActions.FetchProvidersError('error')});
            expect(effects.fetchProviders$).toBeObservable(expected);
        });
    });
    describe('fetchProviderById', () => {
        it('should return FetchProviderByIdSuccess action', () => {
            spyOn(providerService, 'getProviderById').and.returnValue(of(mock));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProviderById(1)});
            const expected = cold('---b', {b: new ProviderActions.FetchProviderByIdSuccess(payload)});
            expect(effects.fetchProviderById$).toBeObservable(expected);
        });
        it('should return FetchProviderByIdError action', () => {
            spyOn(providerService, 'getProviderById').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProviderById(1)});
            const expected = cold('----b', {b: new ProviderActions.FetchProviderByIdError('error')});
            expect(effects.fetchProviderById$).toBeObservable(expected);
        });
    });
    describe('fetchProvidersNotEmpty$ effect', () => {
        it('-> should return FetchProvidersNotEmpySuccess action', () => {
            spyOn(providerService, 'getAllProvidersNotEmpty').and.returnValue(of(mockList));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProvidersNotEmpty()});
            const expected = cold('---b', {b: new ProviderActions.FetchProvidersNotEmptySuccess(payloadList)});
            expect(effects.fetchProvidersNotEmpty$).toBeObservable(expected);
        });
        it('-> should return FetchProvidersNotEmpyError action', () => {
            spyOn(providerService, 'getAllProvidersNotEmpty').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new ProviderActions.TryFetchProvidersNotEmpty()});
            const expected = cold('----b', {b: new ProviderActions.FetchProvidersNotEmptyError('error')});
            expect(effects.fetchProvidersNotEmpty$).toBeObservable(expected);
        });
    });
    describe('updateProvider$ effect', () => {
        it('-> should return UpdateProviderSuccess action', () => {
            spyOn(providerService, 'updateProvider').and.returnValue(of(mock));
            actions$ = hot('---a-', {a: new ProviderActions.TryUpdateProvider(payload)});
            const expected = cold('---b', {b: new ProviderActions.UpdateProviderSuccess(mock)});
            expect(effects.updateProvider$).toBeObservable(expected);
        });
        it('-> should return UpdateProviderError action', () => {
            spyOn(providerService, 'updateProvider').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new ProviderActions.TryUpdateProvider(payload)});
            const expected = cold('----b', {b: new ProviderActions.UpdateProviderError('error')});
            expect(effects.updateProvider$).toBeObservable(expected);
        });
    });

});
