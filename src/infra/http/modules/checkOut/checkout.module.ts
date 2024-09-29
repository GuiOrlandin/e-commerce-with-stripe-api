import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { DatabaseModule } from '../../../database/database.module';
import { CheckOutUseCase } from '../../../../modules/checkOut/UseCases/checkOutUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [CheckoutController],
  providers: [CheckOutUseCase],
})
export class CheckoutModule {}
