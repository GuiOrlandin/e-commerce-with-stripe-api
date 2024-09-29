import { Product as ProductRaw } from '@prisma/client';
import { Product } from '../../../../modules/products/entities/product';
export declare class PrismaProductMapper {
    static toPrisma({ _id, category, created_at, description, image_url, name, stock, unit_value, user_id, }: Product): ProductRaw;
    static toDomain({ id: _id, category, created_at, description, image_url, name, stock, unit_value, user_id, }: ProductRaw): Product;
}
