"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValueIncorrectException = void 0;
const common_1 = require("@nestjs/common");
const appException_1 = require("../../../exceptions/appException");
class AuthValueIncorrectException extends appException_1.AppException {
    constructor() {
        super({
            message: "Email ou senha incorretos",
            status: common_1.HttpStatus.UNAUTHORIZED,
        });
    }
}
exports.AuthValueIncorrectException = AuthValueIncorrectException;
//# sourceMappingURL=authValueIncorrectException.js.map