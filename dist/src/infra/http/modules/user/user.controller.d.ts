import { CreateUserBody } from './dtos/createUserBody';
import { AuthRequestModel } from '../auth/models/AuthRequestModel';
import { EditUserBody } from './dtos/editUserBody';
import { CreateUserUseCase } from '../../../../modules/user/useCase/createUserUseCase';
import { FindUserByIdUseCase } from '../../../../modules/user/useCase/findUserByIdUseCase';
import { EditUserUseCase } from '../../../../modules/user/useCase/editUserUseCase';
import { DashboardInfoUseCase } from '../../../../modules/user/useCase/dashboardsInfoUseCase';
export declare class UserController {
    private createUserUseCase;
    private findUserById;
    private editUserUseCase;
    private dashboardInfoUseCase;
    constructor(createUserUseCase: CreateUserUseCase, findUserById: FindUserByIdUseCase, editUserUseCase: EditUserUseCase, dashboardInfoUseCase: DashboardInfoUseCase);
    createUser(body: CreateUserBody): Promise<{
        created_at: Date;
        email: string;
        id: string;
        name: string;
    }>;
    findUser(userId: string): Promise<Partial<import("../../../../modules/user/entities/User").User>>;
    dashboardInfo(request: AuthRequestModel): Promise<import("../../../../modules/user/repositories/userRepository").DashboardItems[]>;
    editUser(file: Express.Multer.File, request: AuthRequestModel, body: EditUserBody): Promise<Partial<import("../../../../modules/user/entities/User").User>>;
}
