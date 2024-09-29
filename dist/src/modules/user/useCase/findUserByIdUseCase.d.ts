import { UserRepository } from '../repositories/userRepository';
interface FindUserByIdRequest {
    id: string;
}
export declare class FindUserByIdUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ id }: FindUserByIdRequest): Promise<Partial<import("../entities/User").User>>;
}
export {};
