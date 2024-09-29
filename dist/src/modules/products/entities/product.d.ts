export interface ProductSchema {
    _id?: string;
    created_at: Date;
    name: string;
    description?: string;
    image_url: string;
    unit_value: number;
    stock: number;
    user_id: string;
    category: string;
}
export declare class Product {
    private props;
    constructor(props: ProductSchema);
    get _id(): string;
    get name(): string;
    set name(name: string);
    get user_id(): string;
    set user_id(user_id: string);
    get category(): string;
    set category(category: string);
    get stock(): number;
    set stock(stock: number);
    get description(): string;
    set description(description: string);
    get unit_value(): number;
    set unit_value(unit_value: string);
    get image_url(): string;
    set image_url(image_url: string);
    get created_at(): Date;
}
