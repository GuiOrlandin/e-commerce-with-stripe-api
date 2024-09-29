"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryInMemory = void 0;
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
class UserRepositoryInMemory {
    constructor() {
        this.users = [];
    }
    dashboardInfo() {
        throw new Error('Method not implemented.');
    }
    async create(user) {
        this.users.push(user);
    }
    async findByEmail(email) {
        const user = this.users.find((user) => user.email === email);
        if (!user) {
            return null;
        }
        return user;
    }
    async findById(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return null;
        }
        return user;
    }
    async SaveCheckoutInUser(items, user) {
        user.purchasedProducts.push(items);
    }
    async save(user) {
        const userIndex = this.users.findIndex((currentUser) => currentUser.id === user.id);
        if (userIndex >= 0) {
            this.users[userIndex] = user;
        }
    }
    async getLastSixMonths() {
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const monthDate = (0, date_fns_1.subMonths)(new Date(), i);
            const monthName = (0, date_fns_1.format)(monthDate, 'MMMM', { locale: locale_1.ptBR });
            months.push(monthName.charAt(0).toUpperCase() + monthName.slice(1));
            return months;
        }
    }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;
//# sourceMappingURL=userRepositoryInMemory.js.map