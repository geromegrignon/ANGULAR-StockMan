import { User } from './user.model';
import { StatusEnum } from '../enums/status.enum';


export interface Status {
    id?: number;
    message: StatusEnum;
    user: User;
    updatedAt: Date;
}
