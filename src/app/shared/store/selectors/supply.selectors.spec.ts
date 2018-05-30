import * as SupplySelectors from './supply.selectors';
import { Supply } from '../../model/supply.model';
import { Provider } from '../../model/provider.model';

describe('SupplySelectors', () => {

    describe('suppliesSelector', () => {
        it('should return suppliesSelector', () => {
            const mockState = {
                supply: {
                    supplies: [
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
                    ],
                    alertSupplies: [],
                    supply: {} as Supply,
                    error: null
                }
            };
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
            expect(SupplySelectors.suppliesSelector(mockState)).toEqual(payload);
        });
    });
    describe('alertSuppliesSelector', () => {
        it('should return alertSuppliesSelector', () => {
            const mockState = {
                supply: {
                    supplies: [],
                    alertSupplies: [
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
                    ],
                    supply: {} as Supply,
                    error: null
                }
            };
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
            expect(SupplySelectors.alertSuppliesSelector(mockState)).toEqual(payload);
        });
    });
    describe('errorSupplySelector', () => {
        it('should return errorSupplySelector', () => {
            const mockState = {
                supply: {
                    supplies: [],
                    alertSupplies: [],
                    supply: {} as Supply,
                    error: 'error'
                }
            };
            expect(SupplySelectors.errorSupplySelector(mockState)).toEqual('error');
        });
    });
    describe('selectedSupply', () => {
        it('should return selectedSupply', () => {
            const mockState = {
                supply: {
                    supplies: [],
                    alertSupplies: [],
                    supply: {
                        id: 1,
                        idReference: '34HER',
                        name: 'papier',
                        description: 'pour photocopies',
                        unitsInStock: 32,
                        alertStock: 2,
                        provider: {} as Provider,
                        orderRequestList: []
                    },
                    error: null
                }
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
            expect(SupplySelectors.selectedSupply(mockState)).toEqual(payload);
        });
    });
});
