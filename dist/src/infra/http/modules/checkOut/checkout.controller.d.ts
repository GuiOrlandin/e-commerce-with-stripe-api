import { CreateCheckoutBody } from './dtos/createCheckout';
import { CheckOutUseCase } from 'src/modules/checkOut/UseCases/checkOutUseCase';
import { AuthRequestModel } from '../auth/models/AuthRequestModel';
import { Response } from 'express';
export declare class CheckoutController {
    private checkoutUseCase;
    constructor(checkoutUseCase: CheckOutUseCase);
    checkout(body: CreateCheckoutBody, res: Response, request: AuthRequestModel): Promise<void>;
}
