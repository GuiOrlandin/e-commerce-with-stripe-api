import { UserRepository } from 'src/modules/user/repositories/userRepository';
interface CheckOutItems {
    name: string;
    description: string;
    quantity: number;
    unitValue: number;
    image_url: string;
    _id: string;
}
interface CheckOutRequest {
    items: CheckOutItems[];
    userId?: string;
}
export declare class CheckOutUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    execute({ items, userId }: CheckOutRequest): Promise<string>;
}
export {};
