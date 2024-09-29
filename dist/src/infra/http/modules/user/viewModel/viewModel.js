"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserViewModel = void 0;
class UserViewModel {
    static toHttp({ created_at, email, id, name }) {
        return {
            created_at,
            email,
            id,
            name,
        };
    }
}
exports.UserViewModel = UserViewModel;
//# sourceMappingURL=viewModel.js.map