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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const createProductBody_1 = require("./dtos/createProductBody");
const createProductUseCase_1 = require("../../../../modules/products/useCase/createProductUseCase");
const AuthRequestModel_1 = require("../auth/models/AuthRequestModel");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const deleteProductUseCase_1 = require("../../../../modules/products/useCase/deleteProductUseCase");
const isPublic_1 = require("../auth/decorators/isPublic");
const findAllProductsUseCase_1 = require("../../../../modules/products/useCase/findAllProductsUseCase");
let ProductController = class ProductController {
    constructor(createProductUseCase, deleteProductUseCase, findAllProductsUseCase) {
        this.createProductUseCase = createProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
        this.findAllProductsUseCase = findAllProductsUseCase;
    }
    async createProduct(body, request, file) {
        const { name, stock, unit_value, created_at, description, category } = body;
        const unitValue = parseFloat(unit_value);
        const stockValue = parseFloat(stock);
        const product = await this.createProductUseCase.execute({
            name,
            stock: stockValue,
            unit_value: unitValue,
            created_at,
            description,
            image_url: file.filename,
            user_id: request.user.id,
            category,
        });
        return product;
    }
    async findAllProducts() {
        const products = await this.findAllProductsUseCase.execute();
        return products;
    }
    async deletePost(request, product_id) {
        await this.deleteProductUseCase.execute({
            product_id,
            user_id: request.user.id,
        });
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProductBody_1.CreateProductBody,
        AuthRequestModel_1.AuthRequestModel, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    (0, isPublic_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAllProducts", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthRequestModel_1.AuthRequestModel, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deletePost", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [createProductUseCase_1.CreateProductUseCase,
        deleteProductUseCase_1.DeleteProductUserUseCase,
        findAllProductsUseCase_1.FindAllProductUseCase])
], ProductController);
//# sourceMappingURL=product.controller.js.map