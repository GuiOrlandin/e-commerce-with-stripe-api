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
exports.ValidateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const authValueIncorrectException_1 = require("../execptions/authValueIncorrectException");
const userRepository_1 = require("../../user/repositories/userRepository");
let ValidateUserUseCase = class ValidateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ email, password_hash }) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new authValueIncorrectException_1.AuthValueIncorrectException();
        }
        const isPasswordMatched = await (0, bcrypt_1.compare)(password_hash, user.password_hash);
        if (!isPasswordMatched) {
            throw new authValueIncorrectException_1.AuthValueIncorrectException();
        }
        return user;
    }
};
exports.ValidateUserUseCase = ValidateUserUseCase;
exports.ValidateUserUseCase = ValidateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], ValidateUserUseCase);
//# sourceMappingURL=validateUseCase.js.map