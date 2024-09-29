import { UserRepository } from '../repositories/userRepository';
import { User } from '../entities/User';
interface CreatedUserRequest {
    email: string;
    name: string;
    profile_picture?: string;
    password_hash?: string | null;
    phone_number?: string | null;
    adress?: string | null;
    role?: string | null;
}
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ email, name, password_hash, }: CreatedUserRequest): Promise<User>;
}
export {};
