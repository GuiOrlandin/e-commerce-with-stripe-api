"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const userRepository_1 = require("../../modules/user/repositories/userRepository");
const prismaUserRepository_1 = require("./prisma/respositories/prismaUserRepository");
const productRepository_1 = require("../../modules/products/repositories/productRepository");
const prismaProductRepository_1 = require("./prisma/respositories/prismaProductRepository");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: userRepository_1.UserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepository,
            },
            {
                provide: productRepository_1.ProductRepository,
                useClass: prismaProductRepository_1.PrismaProductRepository,
            },
        ],
        exports: [userRepository_1.UserRepository, productRepository_1.ProductRepository],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map