import { User as UserRaw } from '@prisma/client';
import { User } from '../../../../modules/user/entities/user';
export declare class PrismaUserMapper {
    static toPrisma({ id, profile_picture, created_at, email, name, password_hash, adress, phone_number, role, purchasedProducts, soldProducts, number, }: User): UserRaw;
    static toDomain({ email, name, password_hash, created_at, id, adress, phone_number, profile_picture, role, purchasedProducts, number, soldProducts, }: UserRaw): User;
}
