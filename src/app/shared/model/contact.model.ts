import { Provider } from './provider.model';
import { Audit } from './audit.model';

export interface Contact {
    id?: number;
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    employer?: Provider;
}
