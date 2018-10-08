import { Provider } from './provider.model';

export interface Contact {
    id?: number;
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    employer?: Provider;
}
