import { Supply } from './supply.model';
import { Audit } from './audit.model';
import { Contact } from './contact.model';
import { AddressInfo } from './addressInfo.model';


export interface Provider extends Audit {
    id?: number;
    siret: number;
    name: string;
    addressInfo: AddressInfo;
    supplyList: Supply[];
    // contactList: Contact[];
}
