import { Audit } from './audit.model';

export interface PersonalInfo extends Audit {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber?: string;
}
