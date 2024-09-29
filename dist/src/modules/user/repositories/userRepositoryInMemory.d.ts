import { User } from '../entities/User';
import { CheckoutItems, DashboardItems, UserRepository } from './userRepository';
export declare class UserRepositoryInMemory implements UserRepository {
    users: User[];
    dashboardInfo(): Promise<DashboardItems[]>;
    create(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User>;
    SaveCheckoutInUser(items: CheckoutItems, user: User): Promise<void>;
    save(user: User): Promise<void>;
    getLastSixMonths(): Promise<string[]>;
}
