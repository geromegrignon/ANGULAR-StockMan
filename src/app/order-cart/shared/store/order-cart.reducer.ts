import { Order } from '../../../shared/model/order.model';
import { OrderCartActions } from './order-cart.actions';

export interface OrderCartState {
    order: Order[];
    error: string;
}

export const initialOrderState: OrderCartState = {
    order: null,
    error: null
};

export function orderReducer (state: OrderCartState = initialOrderState, action: OrderCartActions) {
    return state;
}
