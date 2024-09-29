import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../../database/database.module';
import { CreateUserUseCase } from '../../../../modules/user/useCase/createUserUseCase';
import { FindUserByIdUseCase } from '../../../../modules/user/useCase/findUserByIdUseCase';
import { EditUserUseCase } from '../../../../modules/user/useCase/editUserUseCase';
import { DashboardInfoUseCase } from '../../../../modules/user/useCase/dashboardsInfoUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    FindUserByIdUseCase,
    EditUserUseCase,
    DashboardInfoUseCase,
  ],
})
export class UserModule {}
