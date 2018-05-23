import { Audit } from './audit.model';

export interface Status extends Audit {
    id?: number;
    message: string;
}
