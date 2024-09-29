import { RawBodyRequest } from '@nestjs/common';
import { SuccessCheckOutUseCase } from 'src/modules/checkOut/UseCases/SuccessCheckoutUseCase';
import { Request } from 'express';
export declare class WebhookController {
    private successCheckoutUseCase;
    private readonly stripe;
    private readonly endpointSecret;
    constructor(successCheckoutUseCase: SuccessCheckOutUseCase);
    handleWebhook(sig: string, req: RawBodyRequest<Request>): Promise<void>;
}
