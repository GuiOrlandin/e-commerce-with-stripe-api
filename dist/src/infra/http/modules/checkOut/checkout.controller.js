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
exports.CheckoutController = void 0;
const common_1 = require("@nestjs/common");
const createCheckout_1 = require("./dtos/createCheckout");
const AuthRequestModel_1 = require("../auth/models/AuthRequestModel");
const checkOutUseCase_1 = require("../../../../modules/checkOut/UseCases/checkOutUseCase");
let CheckoutController = class CheckoutController {
    constructor(checkoutUseCase) {
        this.checkoutUseCase = checkoutUseCase;
    }
    async checkout(body, res, request) {
        const items = body.items;
        const userId = request.user.id;
        const checkoutUrl = await this.checkoutUseCase.execute({ items, userId });
        res.json({ url: checkoutUrl });
    }
};
exports.CheckoutController = CheckoutController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCheckout_1.CreateCheckoutBody, Object, AuthRequestModel_1.AuthRequestModel]),
    __metadata("design:returntype", Promise)
], CheckoutController.prototype, "checkout", null);
exports.CheckoutController = CheckoutController = __decorate([
    (0, common_1.Controller)('checkout'),
    __metadata("design:paramtypes", [checkOutUseCase_1.CheckOutUseCase])
], CheckoutController);
//# sourceMappingURL=checkout.controller.js.map