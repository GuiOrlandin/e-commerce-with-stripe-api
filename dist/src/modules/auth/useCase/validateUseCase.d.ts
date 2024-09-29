import { UserRepository } from '../../user/repositories/userRepository';
interface ValidateUserRequest {
    email: string;
    password_hash: string;
}
export declare class ValidateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ email, password_hash }: ValidateUserRequest): Promise<Partial<import("../../user/entities/User").User>>;
}
export {};
