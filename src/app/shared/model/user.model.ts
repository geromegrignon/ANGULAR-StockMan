import { Audit } from './audit.model';
import { Contact } from './contact.model';
import { Request } from './request.model';
import { Role } from './role.model';

export interface User extends Audit {
    id?: number;
    username: string;
    password?: string;
    email: string;
    role?: Role;
    RequestList?: Request[];
}
