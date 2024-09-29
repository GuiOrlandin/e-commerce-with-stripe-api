"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const productRepository_1 = require("../repositories/productRepository");
let DeleteProductUserUseCase = class DeleteProductUserUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute({ product_id, user_id }) {
        const product = await this.productRepository.findById(product_id);
        if (!product) {
            throw new Error('Produto não encontrado!');
        }
        if (product.user_id !== user_id) {
            throw new Error('Usuário não é o responsável pelo produto!');
        }
        await this.productRepository.delete(product_id);
    }
};
exports.DeleteProductUserUseCase = DeleteProductUserUseCase;
exports.DeleteProductUserUseCase = DeleteProductUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [productRepository_1.ProductRepository])
], DeleteProductUserUseCase);
//# sourceMappingURL=deleteProductUseCase.js.map