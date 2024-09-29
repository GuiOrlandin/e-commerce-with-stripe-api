import { RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';
import { SuccessCheckOutUseCase } from '../../../../modules/checkOut/UseCases/SuccessCheckoutUseCase';
export declare class WebhookController {
    private successCheckoutUseCase;
    private readonly stripe;
    private readonly endpointSecret;
    constructor(successCheckoutUseCase: SuccessCheckOutUseCase);
    handleWebhook(sig: string, req: RawBodyRequest<Request>): Promise<void>;
}
