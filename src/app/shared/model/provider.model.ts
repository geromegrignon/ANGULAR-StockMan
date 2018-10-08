import { Supply } from './supply.model';
import { Contact } from './contact.model';
import { AddressInfo } from './addressInfo.model';


export interface Provider {
    id?: number;
    siret: number;
    name: string;
    addressInfo: AddressInfo;
    supplyList: Supply[];
    contactList: Contact[];
}
