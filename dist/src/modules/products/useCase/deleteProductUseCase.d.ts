import { ProductRepository } from '../repositories/productRepository';
interface DeleteProductRequest {
    product_id: string;
    user_id: string;
}
export declare class DeleteProductUserUseCase {
    private productRepository;
    constructor(productRepository: ProductRepository);
    execute({ product_id, user_id }: DeleteProductRequest): Promise<void>;
}
export {};
