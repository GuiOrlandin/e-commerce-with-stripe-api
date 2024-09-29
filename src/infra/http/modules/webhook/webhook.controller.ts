import {
  Controller,
  Post,
  Headers,
  HttpCode,
  HttpStatus,
  Req,
  RawBodyRequest,
} from '@nestjs/common';
import { Stripe } from 'stripe';
import { Public } from '../auth/decorators/isPublic';
import { Request } from 'express';
import { SuccessCheckOutUseCase } from '../../../../modules/checkOut/UseCases/SuccessCheckoutUseCase';

@Controller('webhook')
export class WebhookController {
  private readonly stripe: Stripe;
  private readonly endpointSecret: string =
    process.env.STRIPE_WEBHOOK_SECRET_KEY;

  constructor(private successCheckoutUseCase: SuccessCheckOutUseCase) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20',
    });
  }

  @Post()
  @Public()
  @HttpCode(HttpStatus.OK)
  async handleWebhook(
    @Headers('stripe-signature') sig: string,
    @Req() req: RawBodyRequest<Request>,
  ): Promise<void> {
    let event: Stripe.Event;
    const body = req.rawBody;

    try {
      event = this.stripe.webhooks.constructEvent(
        body,
        sig,
        this.endpointSecret,
      );
    } catch (err) {
      console.error(`Webhook Error: ${err.message}`);
      throw new Error(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;

        await this.successCheckoutUseCase.execute({
          sessionId: session.id,
        });

        console.log('Checkout Session was completed!', session);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
