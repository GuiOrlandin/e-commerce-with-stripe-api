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
exports.DashboardInfoUseCase = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../repositories/userRepository");
const userWithoutPermission_1 = require("../exceptions/userWithoutPermission");
let DashboardInfoUseCase = class DashboardInfoUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(user_id) {
        const user = await this.userRepository.findById(user_id);
        if (user.role !== 'ADMIN') {
            throw new userWithoutPermission_1.UserWithoutPermissionException({
                actionName: 'acessar os dados do dashboard',
            });
        }
        const dashboardInfo = await this.userRepository.dashboardInfo();
        return dashboardInfo;
    }
};
exports.DashboardInfoUseCase = DashboardInfoUseCase;
exports.DashboardInfoUseCase = DashboardInfoUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], DashboardInfoUseCase);
//# sourceMappingURL=dashboardsInfoUseCase.js.map