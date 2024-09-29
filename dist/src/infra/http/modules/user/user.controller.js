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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const createUserBody_1 = require("./dtos/createUserBody");
const viewModel_1 = require("./viewModel/viewModel");
const isPublic_1 = require("../auth/decorators/isPublic");
const AuthRequestModel_1 = require("../auth/models/AuthRequestModel");
const editUserBody_1 = require("./dtos/editUserBody");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const createUserUseCase_1 = require("../../../../modules/user/useCase/createUserUseCase");
const findUserByIdUseCase_1 = require("../../../../modules/user/useCase/findUserByIdUseCase");
const editUserUseCase_1 = require("../../../../modules/user/useCase/editUserUseCase");
const dashboardsInfoUseCase_1 = require("../../../../modules/user/useCase/dashboardsInfoUseCase");
let UserController = class UserController {
    constructor(createUserUseCase, findUserById, editUserUseCase, dashboardInfoUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.findUserById = findUserById;
        this.editUserUseCase = editUserUseCase;
        this.dashboardInfoUseCase = dashboardInfoUseCase;
    }
    async createUser(body) {
        const { email, name, password_hash } = body;
        const user = await this.createUserUseCase.execute({
            email,
            name,
            password_hash,
        });
        return viewModel_1.UserViewModel.toHttp(user);
    }
    async findUser(userId) {
        const user = await this.findUserById.execute({
            id: userId,
        });
        return user;
    }
    async dashboardInfo(request) {
        const dashboardInfo = await this.dashboardInfoUseCase.execute(request.user.id);
        return dashboardInfo;
    }
    async editUser(file, request, body) {
        const { name, adress, email, number, phone_number } = body;
        if (file) {
            const user = await this.editUserUseCase.execute({
                name,
                adress,
                email,
                number,
                profile_picture: file.filename,
                user_id: request.user.id,
                phone_number,
            });
            return user;
        }
        else {
            const user = await this.editUserUseCase.execute({
                name,
                adress,
                email,
                number,
                user_id: request.user.id,
                phone_number,
            });
            return user;
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, isPublic_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserBody_1.CreateUserBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, isPublic_1.Public)(),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthRequestModel_1.AuthRequestModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "dashboardInfo", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/userAvatar',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AuthRequestModel_1.AuthRequestModel,
        editUserBody_1.EditUserBody]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [createUserUseCase_1.CreateUserUseCase,
        findUserByIdUseCase_1.FindUserByIdUseCase,
        editUserUseCase_1.EditUserUseCase,
        dashboardsInfoUseCase_1.DashboardInfoUseCase])
], UserController);
//# sourceMappingURL=user.controller.js.map