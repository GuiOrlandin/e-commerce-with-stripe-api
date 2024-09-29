"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithoutPermissionException = void 0;
const common_1 = require("@nestjs/common");
const appException_1 = require("../../../exceptions/appException");
class UserWithoutPermissionException extends appException_1.AppException {
    constructor({ actionName }) {
        super({
            message: `Sem permissão para ${actionName}`,
            status: common_1.HttpStatus.UNAUTHORIZED,
        });
    }
}
exports.UserWithoutPermissionException = UserWithoutPermissionException;
//# sourceMappingURL=userWithoutPermission.js.map