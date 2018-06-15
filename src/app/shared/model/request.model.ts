import { Supply } from './supply.model';
import { Provider } from './provider.model';
import { Audit } from './audit.model';
import { Status } from './status.model';
import { User } from './user.model';

export interface Request {
    id?: number;
    quantity: number;
    deliveryDate: Date;
    activeStatus: string;
    statusList?: Status[];
    user?: User;
    supply?: Supply;

}
