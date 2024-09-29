"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
const common_1 = require("@nestjs/common");
class AppException extends common_1.HttpException {
    constructor({ field, message, status }) {
        super({
            message,
            field,
        }, status);
    }
}
exports.AppException = AppException;
//# sourceMappingURL=appException.js.map