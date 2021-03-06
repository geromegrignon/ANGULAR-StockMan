import { Request } from './request.model';
import { Provider } from './provider.model';

export interface Supply {
    id?: number;
    idReference: string;
    name: string;
    description: string;
    unitsInStock: number;
    alertStock: number;
    provider: Provider;
    requestList: Request[];
}
