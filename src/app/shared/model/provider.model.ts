import { Supply } from './supply.model';
import { Audit } from './audit.model';
import { Contact } from './contact.model';

export interface Provider extends Audit {
    id?: number;
    siret: number;
    name: string;

    // extends address
    streetNumber: string;
    street: string;
    postalCode: number;
    city: string;

    supplyList: Supply[];
    contactList: Contact[];
}
