import { Audit } from './audit.model';
import { Contact } from './contact.model';
import { OrderRequest } from './orderRequest.model';

export interface User extends Audit, Contact {
    id?: number;
    username: string;
    password?: string;
    // droits utilisateur
    requestList: OrderRequest[];
}
