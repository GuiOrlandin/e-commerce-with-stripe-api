import { Product } from '../entities/product';
import { ProductRepository } from './productRepository';
export declare class ProductRepositoryInMemory implements ProductRepository {
    products: Product[];
    create(product: Product): Promise<void>;
    findById(id: string): Promise<Product>;
    delete(product_id: string): Promise<void>;
    save(product: Product): Promise<void>;
    findAllProducts(): Promise<Product[]>;
}
