import { User } from './user.model';
import { StatusEnum } from '../enums/status.enum';


export interface Status {
    id?: number;
    name: string;
    updatedAt?: Date;
    comment: string;
    user: User;
}
