import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserRepository } from './prisma/respositories/prismaUserRepository';
import { PrismaProductRepository } from './prisma/respositories/prismaProductRepository';
import { ProductRepository } from '../../modules/products/repositories/productRepository';
import { UserRepository } from '../../modules/user/repositories/userRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
  exports: [UserRepository, ProductRepository],
})
export class DatabaseModule {}
