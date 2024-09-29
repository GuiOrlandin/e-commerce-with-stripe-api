import { Product } from '../entities/product';
import { ProductRepository } from '../repositories/productRepository';
interface CreatedProductRequest {
    _id?: string;
    created_at: Date;
    name: string;
    description?: string;
    image_url: string;
    user_id: string;
    category: string;
    unit_value: number;
    stock: number;
}
export declare class CreateProductUseCase {
    private productRepository;
    constructor(productRepository: ProductRepository);
    execute({ created_at, image_url, name, description, unit_value, stock, user_id, category, }: CreatedProductRequest): Promise<Product>;
}
export {};
