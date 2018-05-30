import * as SupplyReducer from './supply.reducer';
import * as SupplyActions from '../actions/supply.actions';
import { Provider } from '../../model/provider.model';

describe('SupplyReducer', () => {

    it('should return initial state', () => {
        const { initialSupplyState } = SupplyReducer;
        const action = {} as any;
        expect(SupplyReducer.supplyReducer(undefined, action)).toEqual(initialSupplyState);
    });
    it('should return an error when FetchSelectedSupplyError', () => {
        const { initialSupplyState } = SupplyReducer;
        const action = new SupplyActions.FetchSelectedSupplyError('error');
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when UpdateSupplyError', () => {
        const { initialSupplyState } = SupplyReducer;
        const action = new SupplyActions.UpdateSupplyError('error');
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when FetchAlertSuppliesError', () => {
        const { initialSupplyState } = SupplyReducer;
        const action = new SupplyActions.FetchAlertSuppliesError('error');
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.error).toEqual('error');
    });
    it('should return an error when FetchSuppliesError', () => {
        const { initialSupplyState } = SupplyReducer;
        const action = new SupplyActions.FetchSuppliesError('error');
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.error).toEqual('error');
    });
    it('should return supplyList when FetchSuppliesSuccess', () => {
        const { initialSupplyState } = SupplyReducer;
        const mockList = [
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
        const action = new SupplyActions.FetchSuppliesSuccess(mockList);
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.supplies).toEqual(payload);
        expect(state.error).toEqual(null);
    });
    it('should return supplyList when FetchAlertSuppliesSuccess', () => {
        const { initialSupplyState } = SupplyReducer;
        const mockList = [
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
        const action = new SupplyActions.FetchAlertSuppliesSuccess(mockList);
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.alertSupplies).toEqual(payload);
        expect(state.error).toEqual(null);
    });
    it('should return supplyList when FetchSelectedSupplySuccess', () => {
        const { initialSupplyState } = SupplyReducer;
        const mockList = {
                id: 1,
                idReference: '34HER',
                name: 'papier',
                description: 'pour photocopies',
                unitsInStock: 32,
                alertStock: 2,
                provider: {} as Provider,
                orderRequestList: []
            };
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
        const action = new SupplyActions.FetchSelectedSupplySuccess(mockList);
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.supply).toEqual(payload);
        expect(state.error).toEqual(null);
    });
    it('should return supplyList when UpdateSupplySuccess', () => {
        const { initialSupplyState } = SupplyReducer;
        const mockList = {
                id: 1,
                idReference: '34HER',
                name: 'papier',
                description: 'pour photocopies',
                unitsInStock: 32,
                alertStock: 2,
                provider: {} as Provider,
                orderRequestList: []
            };
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
        const action = new SupplyActions.UpdateSupplySuccess(mockList);
        const state = SupplyReducer.supplyReducer(initialSupplyState, action);
        expect(state.supply).toEqual(payload);
        expect(state.error).toEqual(null);
    });
});
