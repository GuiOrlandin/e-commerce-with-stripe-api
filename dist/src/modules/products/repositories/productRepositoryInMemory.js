"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryInMemory = void 0;
class ProductRepositoryInMemory {
    constructor() {
        this.products = [];
    }
    async create(product) {
        this.products.push(product);
    }
    async findById(id) {
        const product = this.products.find((product) => product._id === id);
        if (!product) {
            return null;
        }
        return product;
    }
    async delete(product_id) {
        this.products.filter((productInStock) => productInStock._id !== product_id);
    }
    async save(product) {
        const productIndex = this.products.findIndex((currentUser) => currentUser._id === product._id);
        if (productIndex >= 0) {
            this.products[productIndex] = product;
        }
    }
    async findAllProducts() {
        const products = this.products;
        return products;
    }
}
exports.ProductRepositoryInMemory = ProductRepositoryInMemory;
//# sourceMappingURL=productRepositoryInMemory.js.map