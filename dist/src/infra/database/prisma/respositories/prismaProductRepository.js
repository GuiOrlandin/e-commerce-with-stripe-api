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
exports.PrismaProductRepository = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const prisma_service_1 = require("../prisma.service");
const prismaProductMapper_1 = require("../mappers/prismaProductMapper");
let PrismaProductRepository = class PrismaProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async deleteFile(filePath) {
        const fullPath = path.join(__dirname, '..', '..', '..', '..', '..', 'uploads', 'userAvatar', filePath);
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
        }
    }
    async create(product) {
        const productRaw = prismaProductMapper_1.PrismaProductMapper.toPrisma(product);
        await this.prisma.product.create({
            data: productRaw,
        });
    }
    async findById(id) {
        const product = await this.prisma.product.findFirst({
            where: {
                id,
            },
        });
        if (!product) {
            return null;
        }
        return product;
    }
    async delete(product_id) {
        const product = await this.prisma.product.findFirst({
            where: {
                id: product_id,
            },
        });
        if (!product) {
            throw new Error('O produto não existe!');
        }
        await this.deleteFile(product.image_url);
        await this.prisma.product.delete({
            where: {
                id: product_id,
            },
        });
    }
    async findAllProducts() {
        const rawProducts = await this.prisma.product.findMany({
            where: {
                stock: {
                    gte: 1,
                },
            },
        });
        const products = rawProducts.map((record) => prismaProductMapper_1.PrismaProductMapper.toDomain(record));
        return products;
    }
    async save(product) { }
};
exports.PrismaProductRepository = PrismaProductRepository;
exports.PrismaProductRepository = PrismaProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaProductRepository);
//# sourceMappingURL=prismaProductRepository.js.map