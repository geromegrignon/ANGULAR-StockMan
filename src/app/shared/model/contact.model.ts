import { Provider } from './provider.model';

export interface Contact {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber?: string;
    employer?: Provider;
}
