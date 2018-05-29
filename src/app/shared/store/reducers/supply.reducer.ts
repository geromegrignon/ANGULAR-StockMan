import { Supply } from '../../../shared/model/supply.model';
import {
    SupplyActions,
    FETCH_SUPPLIES_SUCCESS,
    FETCH_SUPPLIES_ERROR,
    FETCH_SELECTED_SUPPLY_ERROR,
    FETCH_SELECTED_SUPPLY_SUCCESS,
    UPDATE_SUPPLY_ERROR,
    UPDATE_SUPPLY_SUCCESS,
    FETCH_ALERT_SUPPLIES_ERROR,
    FETCH_ALERT_SUPPLIES_SUCCESS
} from '../actions/supply.actions';

export interface SupplyState {
    supplies: Supply[];
    alertSupplies: Supply[];
    supply: Supply;
    error: string;
}

export const initialSupplyState: SupplyState = {
    supplies: null,
    alertSupplies: null,
    supply: null,
    error: null
};

export function supplyReducer(state: SupplyState = initialSupplyState, action: SupplyActions) {
    switch (action.type) {
        case FETCH_SELECTED_SUPPLY_ERROR :
        case UPDATE_SUPPLY_ERROR :
        case FETCH_ALERT_SUPPLIES_ERROR :
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
        case FETCH_ALERT_SUPPLIES_SUCCESS : {
            return {
                ...state,
                alertSupplies: action.payload,
                error: null
            };
        }
    }
    return state;
}
