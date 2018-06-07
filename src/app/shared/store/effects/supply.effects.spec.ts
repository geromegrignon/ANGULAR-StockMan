import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SupplyEffects } from './supply.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { SupplyService } from '../../services/supply.service';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import * as SupplyActions from '../actions/supply.actions';
import { Provider } from '../../model/provider.model';

describe('SupplyEffects', () => {
    let effects: SupplyEffects;
    let actions$: Observable<any>;
    let supplyService: SupplyService;

    const mockList = [
        {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        },
        {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        },
    ];

    const payloadList = [
        {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        },
        {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        },
    ];

    const mock = {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        };
        const payload = {
            id: 1,
            idReference: '34HER',
            name: 'papier',
            description: 'pour photocopies',
            unitsInStock: 32,
            alertStock: 2,
            provider: {} as Provider,
            requestList: []
        };

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                StoreModule.forRoot({})
            ],
            providers: [
                SupplyEffects,
                provideMockActions(() => actions$),
                SupplyService
            ]
        });

        effects = TestBed.get(SupplyEffects);
        supplyService = TestBed.get(SupplyService);
    });

    describe('TryFetchSupplies$ effect', () => {
        it('should return FetchSuppliesSuccess action', () => {
            spyOn(supplyService, 'getAllSupplies').and.returnValue(of(mockList));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchSupplies});
            const expected = cold('---b', {b: new SupplyActions.FetchSuppliesSuccess(payloadList)});
            expect(effects.fetchSupplies$).toBeObservable(expected);
        });
        it('should return FetchSuppliesError action', () => {
            spyOn(supplyService, 'getAllSupplies').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchSupplies});
            const expected = cold('----b', {b: new SupplyActions.FetchSuppliesError('error')});
            expect(effects.fetchSupplies$).toBeObservable(expected);
        });
    });
    describe('fetchAlertSupplies$ effect', () => {
        it('should return FetchAlertSuppliesSuccess action', () => {
            spyOn(supplyService, 'getOnAlertSuppplies').and.returnValue(of(mockList));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchAlertSupplies});
            const expected = cold('---b', {b: new SupplyActions.FetchAlertSuppliesSuccess(payloadList)});
            expect(effects.fetchAlertSupplies$).toBeObservable(expected);
        });
        it('should return FetchAlertSuppliesError action', () => {
            spyOn(supplyService, 'getOnAlertSuppplies').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchAlertSupplies});
            const expected = cold('----b', {b: new SupplyActions.FetchAlertSuppliesError('error')});
            expect(effects.fetchAlertSupplies$).toBeObservable(expected);
        });
    });
    describe('fetchSelectedSupply$ effect', () => {
        it('should return FetchSelectedSupplySuccess action', () => {
            spyOn(supplyService, 'getSupply').and.returnValue(of(mock));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchSelectedSupply(1)});
            const expected = cold('---b', {b: new SupplyActions.FetchSelectedSupplySuccess(payload)});
            expect(effects.fetchSelectedSupply$).toBeObservable(expected);
        });
        it('should return FetchSelectedSupplyError action', () => {
            spyOn(supplyService, 'getSupply').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new SupplyActions.TryFetchSelectedSupply(1)});
            const expected = cold('----b', {b: new SupplyActions.FetchSelectedSupplyError('error')});
            expect(effects.fetchSelectedSupply$).toBeObservable(expected);
        });
    });
    describe('updateSupply$ effect', () => {
        it('should return UpdateSupplySuccess action', () => {
            spyOn(supplyService, 'updateSupply').and.returnValue(of(mock));
            actions$ = hot('---a-', {a: new SupplyActions.TryUpdateSupply(mock)});
            const expected = cold('---b', {b: new SupplyActions.UpdateSupplySuccess(payload)});
            expect(effects.updateSupply$).toBeObservable(expected);
        });
        it('should return UpdateSupplyError action', () => {
            spyOn(supplyService, 'updateSupply').and.returnValue(cold('-#', {}, 'error'));
            actions$ = hot('---a-', {a: new SupplyActions.TryUpdateSupply(mock)});
            const expected = cold('----b', {b: new SupplyActions.UpdateSupplyError('error')});
            expect(effects.updateSupply$).toBeObservable(expected);
        });
    });
});
