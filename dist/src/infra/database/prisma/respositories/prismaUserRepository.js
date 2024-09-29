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
exports.PrismaUserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prismaUserMapper_1 = require("../mappers/prismaUserMapper");
const fs = require("fs");
const path = require("path");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
let PrismaUserRepository = class PrismaUserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async deleteFile(filePath) {
        const fullPath = path.join(process.cwd(), 'uploads', 'userAvatar', filePath);
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
        }
    }
    async create(user) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                email: user.email,
            },
        });
        if (existingUser) {
            throw new Error('Usuário em uso!');
        }
        console.log(user);
        const userRaw = prismaUserMapper_1.PrismaUserMapper.toPrisma(user);
        console.log(userRaw);
        await this.prisma.user.create({
            data: {
                ...userRaw,
                phone_number: null,
                number: null,
                adress: null,
            },
        });
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (!user) {
            return null;
        }
        const userRaw = prismaUserMapper_1.PrismaUserMapper.toDomain(user);
        return userRaw;
    }
    async findById(id, editUser) {
        const user = await this.prisma.user.findFirst({
            where: {
                id,
            },
        });
        if (!user) {
            return null;
        }
        const userRaw = prismaUserMapper_1.PrismaUserMapper.toDomain(user);
        if (editUser) {
            return userRaw;
        }
        console.log(userRaw);
        return userRaw.toResponseObject();
    }
    async SaveCheckoutInUser(items, user, AdressItems) {
        const userUnmodified = await this.prisma.user.findFirst({
            where: {
                id: user.id,
            },
            select: {
                purchasedProducts: true,
            },
        });
        const userAdmin = await this.prisma.user.findFirst({
            where: {
                role: 'ADMIN',
            },
            select: {
                soldProducts: true,
                id: true,
            },
        });
        const existingProducts = Array.isArray(userUnmodified?.purchasedProducts)
            ? userUnmodified.purchasedProducts
            : [];
        const existingSoldProductsOfUserAdmin = Array.isArray(userAdmin?.soldProducts)
            ? userAdmin.soldProducts
            : [];
        const newProducts = items.data.map((item) => {
            return {
                amount_total: item.amount_total,
                id: item.product_id,
                purchase_id: item.purchase_id,
                description: item.description,
                name: item.name,
                image_url: item.image_url,
                unit_amount: item.unit_amount,
                quantity: item.quantity,
                created_at: new Date().toISOString(),
                status: item.status,
                adress: {
                    city: AdressItems.city,
                    country: AdressItems.country,
                    adress: AdressItems.line1,
                    numberAndNeighborhood: AdressItems.line2,
                    postalCode: AdressItems.postal_code,
                },
            };
        });
        const productsId = newProducts.map((product) => product.id);
        const productsInDatabase = await this.prisma.product.findMany({
            where: {
                id: { in: productsId },
            },
            select: {
                id: true,
                stock: true,
            },
        });
        const updates = newProducts.map((product) => {
            const currentProductInDb = productsInDatabase.find((productInDb) => productInDb.id === product.id);
            const newStockOfProduct = Math.max(currentProductInDb.stock - product.quantity, 0);
            return {
                where: { id: product.id },
                data: { stock: newStockOfProduct },
            };
        });
        await Promise.all(updates.map((update) => this.prisma.product.update(update)));
        const updatedPurchasedProducts = [...existingProducts, ...newProducts];
        const updatedSoldProducts = [
            ...existingSoldProductsOfUserAdmin,
            ...newProducts,
        ];
        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                purchasedProducts: updatedPurchasedProducts,
            },
        });
        await this.prisma.user.update({
            where: {
                id: userAdmin.id,
            },
            data: {
                soldProducts: updatedSoldProducts,
            },
        });
    }
    async save(user, data) {
        const userRaw = prismaUserMapper_1.PrismaUserMapper.toPrisma(user);
        const userUnmodified = await this.prisma.user.findFirst({
            where: {
                id: userRaw.id,
            },
        });
        if (userUnmodified.profile_picture === null) {
            await this.prisma.user.update({
                where: {
                    id: userRaw.id,
                },
                data: {
                    adress: data.adress,
                    email: data.email,
                    name: data.name,
                    number: data.number,
                    profile_picture: data.profile_picture,
                    phone_number: data.phone_number,
                },
            });
        }
        if (!user.profile_picture) {
            await this.prisma.user.update({
                where: {
                    id: userRaw.id,
                },
                data: {
                    adress: data.adress,
                    email: data.email,
                    name: data.name,
                    number: data.number,
                    profile_picture: userUnmodified.profile_picture,
                    phone_number: data.phone_number,
                },
            });
        }
        if (userUnmodified.profile_picture && user.profile_picture) {
            this.deleteFile(userUnmodified.profile_picture);
            await this.prisma.user.update({
                where: {
                    id: userRaw.id,
                },
                data: {
                    adress: data.adress,
                    email: data.email,
                    name: data.name,
                    number: data.number,
                    profile_picture: data.profile_picture,
                    phone_number: data.phone_number,
                },
            });
        }
    }
    async dashboardInfo() {
        const admin = await this.prisma.user.findFirst({
            where: {
                role: 'ADMIN',
            },
        });
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const monthDate = (0, date_fns_1.subMonths)(new Date(), i);
            const monthName = (0, date_fns_1.format)(monthDate, 'MMMM', { locale: locale_1.ptBR });
            months.push(monthName);
        }
        const sixMonthsAgo = (0, date_fns_1.subMonths)(new Date(), 6);
        const adminToDomain = prismaUserMapper_1.PrismaUserMapper.toDomain(admin);
        if (!adminToDomain.soldProducts) {
            throw new Error('Nao foi encontrado os produtos');
        }
        const soldItems = adminToDomain.soldProducts.filter((soldItem) => {
            new Date(soldItem.created_at) >= sixMonthsAgo;
            return soldItem;
        });
        const dashboardData = months
            .map((month) => {
            const productsInMonth = soldItems.filter((soldItemData) => {
                const soldItemDate = (0, date_fns_1.format)(new Date(soldItemData.created_at), 'MMMM', {
                    locale: locale_1.ptBR,
                });
                return soldItemDate.toLowerCase() === month.toLowerCase();
            });
            const totalIncome = productsInMonth.reduce((sum, soldItem) => {
                return sum + soldItem.amount_total;
            }, 0);
            return {
                month,
                soldProducts: productsInMonth,
                totalIncome,
            };
        })
            .reverse();
        return dashboardData;
    }
    async getLastSixMonths() {
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const monthDate = (0, date_fns_1.subMonths)(new Date(), i);
            const monthName = (0, date_fns_1.format)(monthDate, 'MMMM', { locale: locale_1.ptBR });
            months.push(monthName.charAt(0).toUpperCase() + monthName.slice(1));
        }
        return months;
    }
};
exports.PrismaUserRepository = PrismaUserRepository;
exports.PrismaUserRepository = PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
//# sourceMappingURL=prismaUserRepository.js.map