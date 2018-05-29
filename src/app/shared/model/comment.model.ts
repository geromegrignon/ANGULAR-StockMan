import { Audit } from './audit.model';

export interface Comment extends Audit {
    id?: number;
    description: string;
}
