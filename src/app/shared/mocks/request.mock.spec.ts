import { User } from '../model/user.model';
import { Supply } from '../model/supply.model';

export const SINGLE_REQUEST_ENTRY = {
    id: 1,
    quantity: 23,
    deliveryDate: {} as Date,
    activeStatus: 'validé',
    statusList: [],
    user: {} as User,
    supply: {} as Supply
};

export const SINGLE_REQUEST_EXIT = {
    id: 1,
    quantity: 23,
    deliveryDate: {} as Date,
    activeStatus: 'validé',
    statusList: [],
    user: {} as User,
    supply: {} as Supply
};

export const REQUEST_LIST_ENTRY = [
    {
        id: 1,
        quantity: 23,
        deliveryDate: {} as Date,
        activeStatus: 'validé',
        statusList: [],
        user: {} as User,
        supply: {} as Supply
    },
    {
        id: 1,
        quantity: 23,
        deliveryDate: {} as Date,
        activeStatus: 'validé',
        statusList: [],
        user: {} as User,
        supply: {} as Supply
    },
];

export const REQUEST_LIST_EXIT = [
    {
        id: 1,
        quantity: 23,
        deliveryDate: {} as Date,
        activeStatus: 'validé',
        statusList: [],
        user: {} as User,
        supply: {} as Supply
    },
    {
        id: 1,
        quantity: 23,
        deliveryDate: {} as Date,
        activeStatus: 'validé',
        statusList: [],
        user: {} as User,
        supply: {} as Supply
    },
];

export const REQUEST_STATE = {
    request: {
        requestList:  [
            {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                activeStatus: 'validé',
                statusList: [],
                user: {} as User,
                supply: {} as Supply
            },
            {
                id: 1,
                quantity: 23,
                deliveryDate: {} as Date,
                activeStatus: 'validé',
                statusList: [],
                user: {} as User,
                supply: {} as Supply
            },
        ],
        request: {
            id: 1,
            quantity: 23,
            deliveryDate: {} as Date,
            activeStatus: 'validé',
            statusList: [],
            user: {} as User,
            supply: {} as Supply
        },
        newRequest:  {
            id: 1,
            quantity: 23,
            deliveryDate: {} as Date,
            activeStatus: 'validé',
            statusList: [],
            user: {} as User,
            supply: {} as Supply
        },
        error: 'error'
    }
};
