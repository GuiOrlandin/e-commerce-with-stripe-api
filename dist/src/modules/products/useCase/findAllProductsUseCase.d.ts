import { ProductRepository } from '../repositories/productRepository';
export declare class FindAllProductUseCase {
    private productRepository;
    constructor(productRepository: ProductRepository);
    execute(): Promise<import("../entities/product").Product[]>;
}
