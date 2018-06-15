import { Audit } from './audit.model';
import { Provider } from './provider.model';

export interface AddressInfo {
    id?: number;
    streetNumber: string;
    streetName: string;
    postalCode: number;
    city: string;
    country: string;
}
