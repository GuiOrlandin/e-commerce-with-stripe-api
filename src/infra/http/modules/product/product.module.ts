import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DatabaseModule } from '../../../database/database.module';
import { CreateProductUseCase } from '../../../../modules/products/useCase/createProductUseCase';
import { DeleteProductUserUseCase } from '../../../../modules/products/useCase/deleteProductUseCase';
import { FindAllProductUseCase } from '../../../../modules/products/useCase/findAllProductsUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    DeleteProductUserUseCase,
    FindAllProductUseCase,
  ],
})
export class ProductModule {}
