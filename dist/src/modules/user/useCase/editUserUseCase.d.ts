import { UserRepository } from '../repositories/userRepository';
interface EditUserRequest {
    name?: string;
    adress: string;
    profile_picture?: string;
    user_id: string;
    email: string;
    number: string;
    phone_number: string;
}
export declare class EditUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ profile_picture, name, user_id, adress, email, number, phone_number, }: EditUserRequest): Promise<Partial<import("../entities/User").User>>;
}
export {};
