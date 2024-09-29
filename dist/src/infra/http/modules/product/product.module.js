"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const database_module_1 = require("../../../database/database.module");
const createProductUseCase_1 = require("../../../../modules/products/useCase/createProductUseCase");
const deleteProductUseCase_1 = require("../../../../modules/products/useCase/deleteProductUseCase");
const findAllProductsUseCase_1 = require("../../../../modules/products/useCase/findAllProductsUseCase");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [product_controller_1.ProductController],
        providers: [
            createProductUseCase_1.CreateProductUseCase,
            deleteProductUseCase_1.DeleteProductUserUseCase,
            findAllProductsUseCase_1.FindAllProductUseCase,
        ],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map