"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
const appException_1 = require("../../../exceptions/appException");
class UserNotFoundException extends appException_1.AppException {
    constructor() {
        super({
            message: 'Usuário não encontrado!',
            status: common_1.HttpStatus.UNAUTHORIZED,
        });
    }
}
exports.UserNotFoundException = UserNotFoundException;
//# sourceMappingURL=userDontFound.js.map