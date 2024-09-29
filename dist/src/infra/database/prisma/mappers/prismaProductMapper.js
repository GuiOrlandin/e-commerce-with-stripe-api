"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProductMapper = void 0;
const product_1 = require("../../../../modules/products/entities/product");
class PrismaProductMapper {
    static toPrisma({ _id, category, created_at, description, image_url, name, stock, unit_value, user_id, }) {
        return {
            id: _id,
            category,
            created_at,
            description,
            image_url,
            name,
            stock,
            unit_value,
            user_id,
        };
    }
    static toDomain({ id: _id, category, created_at, description, image_url, name, stock, unit_value, user_id, }) {
        return new product_1.Product({
            _id,
            category,
            created_at,
            description,
            image_url,
            name,
            stock,
            unit_value,
            user_id,
        });
    }
}
exports.PrismaProductMapper = PrismaProductMapper;
//# sourceMappingURL=prismaProductMapper.js.map