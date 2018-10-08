import { User } from './user.model';


export interface Status {
    id?: number;
    name: string;
    updatedAt?: Date;
    comment: string;
    user: User;
}
