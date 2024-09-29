import { CreateCheckoutBody } from './dtos/createCheckout';
import { AuthRequestModel } from '../auth/models/AuthRequestModel';
import { Response } from 'express';
import { CheckOutUseCase } from '../../../../modules/checkOut/UseCases/checkOutUseCase';
export declare class CheckoutController {
    private checkoutUseCase;
    constructor(checkoutUseCase: CheckOutUseCase);
    checkout(body: CreateCheckoutBody, res: Response, request: AuthRequestModel): Promise<void>;
}
