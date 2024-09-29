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
exports.CheckOutUseCase = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../../user/repositories/userRepository");
const stripe_1 = require("stripe");
let CheckOutUseCase = class CheckOutUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ items, userId }) {
        const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2024-06-20',
        });
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }
        const session = await stripe.checkout.sessions.create({
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'BRL',
                    product_data: {
                        name: item.name,
                        description: item.description,
                        metadata: {
                            image_url: item.image_url,
                            product_id: item._id,
                        },
                    },
                    unit_amount: item.unitValue * 100,
                },
                quantity: item.quantity,
            })),
            shipping_address_collection: {
                allowed_countries: ['BR'],
            },
            metadata: {
                userId: user.id,
            },
            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: 'http://localhost:5173/',
        });
        return session.url;
    }
};
exports.CheckOutUseCase = CheckOutUseCase;
exports.CheckOutUseCase = CheckOutUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], CheckOutUseCase);
//# sourceMappingURL=checkOutUseCase.js.map