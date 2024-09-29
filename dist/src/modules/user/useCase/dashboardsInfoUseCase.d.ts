import { UserRepository } from '../repositories/userRepository';
export declare class DashboardInfoUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute(user_id: string): Promise<import("../repositories/userRepository").DashboardItems[]>;
}
