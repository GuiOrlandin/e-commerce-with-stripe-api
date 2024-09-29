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
exports.SignInUseCase = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let SignInUseCase = class SignInUseCase {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async execute({ user }) {
        const payload = {
            created_at: user.created_at,
            email: user.email,
            name: user.name,
            sub: user.id,
        };
        const jwtToken = this.jwtService.sign(payload);
        return {
            jwtToken,
            userId: user.id,
        };
    }
};
exports.SignInUseCase = SignInUseCase;
exports.SignInUseCase = SignInUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], SignInUseCase);
//# sourceMappingURL=signInUseCase.js.map