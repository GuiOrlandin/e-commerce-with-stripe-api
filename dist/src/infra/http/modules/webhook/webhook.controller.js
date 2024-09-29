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
exports.WebhookController = void 0;
const common_1 = require("@nestjs/common");
const SuccessCheckoutUseCase_1 = require("../../../../modules/checkOut/UseCases/SuccessCheckoutUseCase");
const stripe_1 = require("stripe");
const isPublic_1 = require("../auth/decorators/isPublic");
let WebhookController = class WebhookController {
    constructor(successCheckoutUseCase) {
        this.successCheckoutUseCase = successCheckoutUseCase;
        this.endpointSecret = process.env.STRIPE_WEBHOOK_SECRET_KEY;
        this.stripe = new stripe_1.Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2024-06-20',
        });
    }
    async handleWebhook(sig, req) {
        let event;
        const body = req.rawBody;
        try {
            event = this.stripe.webhooks.constructEvent(body, sig, this.endpointSecret);
        }
        catch (err) {
            console.error(`Webhook Error: ${err.message}`);
            throw new Error(`Webhook Error: ${err.message}`);
        }
        switch (event.type) {
            case "checkout.session.completed":
                const session = event.data.object;
                await this.successCheckoutUseCase.execute({
                    sessionId: session.id,
                });
                console.log('Checkout Session was completed!', session);
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
    }
};
exports.WebhookController = WebhookController;
__decorate([
    (0, common_1.Post)(),
    (0, isPublic_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('stripe-signature')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WebhookController.prototype, "handleWebhook", null);
exports.WebhookController = WebhookController = __decorate([
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [SuccessCheckoutUseCase_1.SuccessCheckOutUseCase])
], WebhookController);
//# sourceMappingURL=webhook.controller.js.map