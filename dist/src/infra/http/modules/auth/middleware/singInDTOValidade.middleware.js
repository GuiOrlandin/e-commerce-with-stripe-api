"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInDTOValidateMiddleware = void 0;
const common_1 = require("@nestjs/common");
const SignInBody_1 = require("../dtos/SignInBody");
const class_validator_1 = require("class-validator");
let SignInDTOValidateMiddleware = class SignInDTOValidateMiddleware {
    async use(req, res, next) {
        const body = req.body;
        const signInBody = new SignInBody_1.SignInBody();
        signInBody.email = body.email;
        signInBody.password_hash = body.password_hash;
        const validations = await (0, class_validator_1.validate)(signInBody);
        if (validations.length) {
            throw new common_1.BadRequestException(validations);
        }
        next();
    }
};
exports.SignInDTOValidateMiddleware = SignInDTOValidateMiddleware;
exports.SignInDTOValidateMiddleware = SignInDTOValidateMiddleware = __decorate([
    (0, common_1.Injectable)()
], SignInDTOValidateMiddleware);
//# sourceMappingURL=singInDTOValidade.middleware.js.map