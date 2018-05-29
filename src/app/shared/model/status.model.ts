import { User } from './user.model';


export interface Status {
    id?: number;
    message: string;
    user: User;
    updatedAt: Date;
}
