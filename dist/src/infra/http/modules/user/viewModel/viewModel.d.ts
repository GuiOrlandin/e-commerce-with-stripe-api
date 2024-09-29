import { User } from '../../../../../modules/user/entities/User';
export declare class UserViewModel {
    static toHttp({ created_at, email, id, name }: User): {
        created_at: Date;
        email: string;
        id: string;
        name: string;
    };
}
