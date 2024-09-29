import { AdressItems, CheckoutItems, DashboardItems, UserRepository, updateItems } from '../../../../../src/modules/user/repositories/userRepository';
import { PrismaService } from '../prisma.service';
import { User } from '../../../../modules/user/entities/User';
export declare class PrismaUserRepository implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    private deleteFile;
    create(user: User): Promise<void>;
    findByEmail(email: string): Promise<Partial<User> | null>;
    findById(id: string, editUser?: boolean): Promise<Partial<User> | null>;
    SaveCheckoutInUser(items: CheckoutItems, user: Partial<User>, AdressItems: AdressItems): Promise<void>;
    save(user: User, data: updateItems): Promise<void>;
    dashboardInfo(): Promise<DashboardItems[]>;
    getLastSixMonths(): Promise<string[]>;
}
