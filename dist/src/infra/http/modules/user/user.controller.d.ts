import { CreateUserUseCase } from 'src/modules/user/useCase/createUserUseCase';
import { CreateUserBody } from './dtos/createUserBody';
import { FindUserByIdUseCase } from 'src/modules/user/useCase/findUserByIdUseCase';
import { AuthRequestModel } from '../auth/models/AuthRequestModel';
import { EditUserBody } from './dtos/editUserBody';
import { EditUserUseCase } from 'src/modules/user/useCase/editUserUseCase';
import { DashboardInfoUseCase } from 'src/modules/user/useCase/dashboardsInfoUseCase';
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
