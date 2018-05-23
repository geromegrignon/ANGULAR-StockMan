import { Supply } from './supply.model';
import { Provider } from './provider.model';
import { Audit } from './audit.model';
import { Status } from './status.model';

export interface OrderRequest extends Audit {
    id?: number;
    quantity: number;
    deliveryDate: Date;
    status: Status[];

}
