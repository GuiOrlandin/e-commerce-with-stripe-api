"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
const User_1 = require("../../../../modules/user/entities/User");
class PrismaUserMapper {
    static toPrisma({ id, profile_picture, created_at, email, name, password_hash, adress, phone_number, role, purchasedProducts, soldProducts, number, }) {
        return {
            email,
            name,
            password_hash,
            created_at,
            id,
            profile_picture,
            phone_number,
            role,
            number,
            purchasedProducts: purchasedProducts
                ? JSON.parse(JSON.stringify(purchasedProducts))
                : null,
            soldProducts: soldProducts
                ? JSON.parse(JSON.stringify(soldProducts))
                : null,
            adress,
        };
    }
    static toDomain({ email, name, password_hash, created_at, id, adress, phone_number, profile_picture, role, purchasedProducts, number, soldProducts, }) {
        return new User_1.User({
            email,
            name,
            password_hash,
            created_at,
            id,
            adress,
            phone_number,
            role,
            number,
            profile_picture,
            purchasedProducts: purchasedProducts
                ? JSON.parse(JSON.stringify(purchasedProducts))
                : null,
            soldProducts: soldProducts
                ? JSON.parse(JSON.stringify(soldProducts))
                : null,
        });
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=prismaUserMapper.js.map