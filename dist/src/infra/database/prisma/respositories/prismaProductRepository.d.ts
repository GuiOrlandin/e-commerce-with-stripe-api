import { ProductRepository } from 'src/modules/products/repositories/productRepository';
import { Product } from 'src/modules/products/entities/product';
import { PrismaService } from '../prisma.service';
export declare class PrismaProductRepository implements ProductRepository {
    private prisma;
    constructor(prisma: PrismaService);
    private deleteFile;
    create(product: Product): Promise<void>;
    findById(id: string): Promise<Partial<Product> | null>;
    delete(product_id: string): Promise<void>;
    findAllProducts(): Promise<Product[]>;
    save(product: Product): Promise<void>;
}
