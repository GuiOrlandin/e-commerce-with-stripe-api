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
exports.SuccessCheckOutUseCase = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const userRepository_1 = require("../../user/repositories/userRepository");
let SuccessCheckOutUseCase = class SuccessCheckOutUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ sessionId }) {
        const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2024-06-20',
        });
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: [
                'line_items',
                'line_items.data.price.product',
                'customer_details',
            ],
        });
        const metadataUserId = session.metadata.userId;
        const user = await this.userRepository.findById(metadataUserId);
        if (!user) {
            throw new Error('User dont found!');
        }
        const processedItems = session.line_items?.data.map((item) => {
            const product = item.price?.product;
            return {
                amount_total: item.amount_total,
                description: product.description || '',
                purchase_id: item.id,
                name: product.name,
                quantity: item.quantity,
                unit_amount: item.price?.unit_amount || 0,
                image_url: product.metadata.image_url,
                product_id: product.metadata.product_id,
                status: 'paymentWasSuccessful',
            };
        });
        await this.userRepository.SaveCheckoutInUser({
            data: processedItems,
        }, user, session.customer_details?.address);
        return 'Your payment was successful';
    }
};
exports.SuccessCheckOutUseCase = SuccessCheckOutUseCase;
exports.SuccessCheckOutUseCase = SuccessCheckOutUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], SuccessCheckOutUseCase);
//# sourceMappingURL=SuccessCheckoutUseCase.js.map