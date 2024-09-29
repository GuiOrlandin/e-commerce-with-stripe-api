export declare class CheckoutItems {
    name: string;
    _id: string;
    image_url: string;
    description: string;
    quantity: number;
    unitValue: number;
}
export declare class CreateCheckoutBody {
    items: CheckoutItems[];
}
