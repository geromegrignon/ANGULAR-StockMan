import { Provider } from '@angular/compiler/src/core';
import { Audit } from './audit.model';
import { OrderRequest } from './orderRequest.model';

export interface Supply extends Audit {
    id?: number;
    name: string;
    description: string;
    unitsInStock: number;
    alertStock: number;
    provider: Provider;
    orderRequestList: OrderRequest[];
}
