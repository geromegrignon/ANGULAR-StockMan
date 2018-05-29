import { Audit } from './audit.model';

export interface AddressInfo extends Audit {
    id?: number;
    streetNumber: string;
    streetName: string;
    postalCode: number;
    city: string;
    country: string;
}
