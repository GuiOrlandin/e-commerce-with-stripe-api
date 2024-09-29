import { UserRepository } from '../../user/repositories/userRepository';
interface CheckOutRequest {
    userId?: string;
    sessionId: string;
}
export declare class SuccessCheckOutUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ sessionId }: CheckOutRequest): Promise<string>;
}
export {};
