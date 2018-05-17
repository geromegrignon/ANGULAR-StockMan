import { Supply } from '../../../shared/model/supply.model';
import {
    SupplyActions,
    FETCH_SUPPLIES_SUCCESS,
    FETCH_SUPPLIES_ERROR,
    FETCH_SELECTED_SUPPLY_ERROR,
    FETCH_SELECTED_SUPPLY_SUCCESS,
    UPDATE_SUPPLY_ERROR,
    UPDATE_SUPPLY_SUCCESS
} from './supply.actions';

export interface SupplyState {
    supplies: Supply[];
    supply: Supply;
    error: string;
}

export const initialSupplyState: SupplyState = {
    supplies: null,
    supply: null,
    error: null
};

export function supplyReducer(state: SupplyState = initialSupplyState, action: SupplyActions) {
    switch (action.type) {
        case FETCH_SELECTED_SUPPLY_ERROR :
        case UPDATE_SUPPLY_ERROR :
        case FETCH_SUPPLIES_ERROR : {
            return {
                ...state,
                error: action.payload
            };
        }
        case FETCH_SUPPLIES_SUCCESS : {
            return {
                ...state,
                supplies: action.payload,
                error: null
            };
        }
        case FETCH_SELECTED_SUPPLY_SUCCESS : {
            return {
                ...state,
                supply: action.payload,
                error: null
            };
        }
        case UPDATE_SUPPLY_SUCCESS : {
            return {
                ...state,
                supply: action.payload,
                error: null
            };
        }
    }
    return state;
}
