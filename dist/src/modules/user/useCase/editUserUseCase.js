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
exports.EditUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../repositories/userRepository");
const userDontFound_1 = require("../exceptions/userDontFound");
const userWithoutPermission_1 = require("../exceptions/userWithoutPermission");
let EditUserUseCase = class EditUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ profile_picture, name, user_id, adress, email, number, phone_number, }) {
        const user = await this.userRepository.findById(user_id, true);
        if (!user) {
            throw new userDontFound_1.UserNotFoundException();
        }
        if (user.id !== user_id) {
            throw new userWithoutPermission_1.UserWithoutPermissionException({
                actionName: 'editar',
            });
        }
        user.email = email;
        user.number = number;
        user.name = name;
        user.profile_picture = profile_picture;
        user.adress = adress;
        user.phone_number = phone_number;
        await this.userRepository.save(user, {
            adress,
            email,
            name,
            number,
            profile_picture,
            phone_number,
        });
        return user;
    }
};
exports.EditUserUseCase = EditUserUseCase;
exports.EditUserUseCase = EditUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], EditUserUseCase);
//# sourceMappingURL=editUserUseCase.js.map