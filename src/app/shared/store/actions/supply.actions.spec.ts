import * as SupplyActions from './supply.actions';
import { Provider } from '../../model/provider.model';

describe('SupplyActions', () => {

    describe('FetchSuppliesSuccess', () => {
        it('should create a FetchSuppliesSuccess action', () => {
            const payload = [
                {
                    id: 1,
                    idReference: '34HER',
                    name: 'papier',
                    description: 'pour photocopies',
                    unitsInStock: 32,
                    alertStock: 2,
                    provider: {} as Provider,
                    orderRequestList: []
                },
                {
                    id: 1,
                    idReference: '34HER',
                    name: 'papier',
                    description: 'pour photocopies',
                    unitsInStock: 32,
                    alertStock: 2,
                    provider: {} as Provider,
                    orderRequestList: []
                },
            ];
            const action = new SupplyActions.FetchSuppliesSuccess(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_SUPPLIES_SUCCESS,
                payload
            });
        });
    });
    describe('FetchSuppliesError', () => {
        it('should create FetchSuppliesError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new SupplyActions.FetchSuppliesError(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_SUPPLIES_ERROR,
                payload
            });
        });
    });
    describe('TryFetchSelectedSupply', () => {
        it('should create a TryFetchSelectedSupply action', () => {
            const payload = 1;
            const action = new SupplyActions.TryFetchSelectedSupply(payload);
            expect({...action}).toEqual({
                type: SupplyActions.TRY_FETCH_SELECTED_SUPPLY,
                payload
            });
        });
    });
    describe('FetchSelectedSupplySuccess', () => {
        it('should create a FetchSelectedSupplySuccess action', () => {
            const payload = {
                id: 1,
                idReference: '34HER',
                name: 'papier',
                description: 'pour photocopies',
                unitsInStock: 32,
                alertStock: 2,
                provider: {} as Provider,
                orderRequestList: []
            };
            const action = new SupplyActions.FetchSelectedSupplySuccess(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_SELECTED_SUPPLY_SUCCESS,
                payload
            });
        });
    });
    describe('FetchSelectedSupplyError', () => {
        it('should create a FetchSelectedSupplyError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new SupplyActions.FetchSelectedSupplyError(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_SELECTED_SUPPLY_ERROR,
                payload
            });
        });
    });
    describe('TryUpdateSupply', () => {
        it('should create a TryUpdateSupply action', () => {
            const payload = {
                id: 1,
                idReference: '34HER',
                name: 'papier',
                description: 'pour photocopies',
                unitsInStock: 32,
                alertStock: 2,
                provider: {} as Provider,
                orderRequestList: []
            };
            const action = new SupplyActions.TryUpdateSupply(payload);
            expect({...action}).toEqual({
                type: SupplyActions.TRY_UPDATE_SUPPLY,
                payload
            });
        });
    });
    describe('UpdateSupplySuccess', () => {
        it('should create an UpdateSupplySucces action', () => {
            const payload = {
                id: 1,
                idReference: '34HER',
                name: 'papier',
                description: 'pour photocopies',
                unitsInStock: 32,
                alertStock: 2,
                provider: {} as Provider,
                orderRequestList: []
            };
            const action = new SupplyActions.UpdateSupplySuccess(payload);
            expect({...action}).toEqual({
                type: SupplyActions.UPDATE_SUPPLY_SUCCESS,
                payload
            });
        });
    });
    describe('UpdateSupplyError', () => {
        it('should create an updateSupplyError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new SupplyActions.UpdateSupplyError(payload);
            expect({...action}).toEqual({
                type: SupplyActions.UPDATE_SUPPLY_ERROR,
                payload
            });
        });
    });
    describe('FetchAlertSuppliesSuccess', () => {
        it('should create a FetchAlertSuppliesSuccess action', () => {
            const payload = [
                {
                    id: 1,
                    idReference: '34HER',
                    name: 'papier',
                    description: 'pour photocopies',
                    unitsInStock: 32,
                    alertStock: 2,
                    provider: {} as Provider,
                    orderRequestList: []
                },
                {
                    id: 1,
                    idReference: '34HER',
                    name: 'papier',
                    description: 'pour photocopies',
                    unitsInStock: 32,
                    alertStock: 2,
                    provider: {} as Provider,
                    orderRequestList: []
                },
            ];
            const action = new SupplyActions.FetchAlertSuppliesSuccess(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_ALERT_SUPPLIES_SUCCESS,
                payload
            });
        });
    });
    describe('FetchAlertSuppliesError', () => {
        it('should create a FetchAlertSuppliesError action', () => {
            const payload = {
                error: 'error'
            };
            const action = new SupplyActions.FetchAlertSuppliesError(payload);
            expect({...action}).toEqual({
                type: SupplyActions.FETCH_ALERT_SUPPLIES_ERROR,
                payload
            });
        });
    });
});
