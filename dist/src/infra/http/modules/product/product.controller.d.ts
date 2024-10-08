import { CreateProductBody } from './dtos/createProductBody';
import { CreateProductUseCase } from 'src/modules/products/useCase/createProductUseCase';
import { AuthRequestModel } from '../auth/models/AuthRequestModel';
import { DeleteProductUserUseCase } from 'src/modules/products/useCase/deleteProductUseCase';
import { FindAllProductUseCase } from 'src/modules/products/useCase/findAllProductsUseCase';
export declare class ProductController {
    private createProductUseCase;
    private deleteProductUseCase;
    private findAllProductsUseCase;
    constructor(createProductUseCase: CreateProductUseCase, deleteProductUseCase: DeleteProductUserUseCase, findAllProductsUseCase: FindAllProductUseCase);
    createProduct(body: CreateProductBody, request: AuthRequestModel, file: Express.Multer.File): Promise<import("../../../../modules/products/entities/product").Product>;
    findAllProducts(): Promise<import("../../../../modules/products/entities/product").Product[]>;
    deletePost(request: AuthRequestModel, product_id: string): Promise<void>;
}
