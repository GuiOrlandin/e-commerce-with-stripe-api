import { Product } from '../../products/entities/product';
import { CheckoutItems, DataItems } from '../repositories/userRepository';
export interface UserSchema {
    email: string;
    password_hash: string;
    name: string;
    adress?: string;
    id?: string;
    phone_number?: string;
    created_at?: Date;
    products?: Product[];
    role?: string;
    purchasedProducts?: CheckoutItems[];
    soldProducts?: DataItems[];
    profile_picture?: string | null;
    number?: string;
}
export declare class User {
    private props;
    constructor(props: UserSchema);
    get id(): string;
    get products(): Product[];
    get purchasedProducts(): CheckoutItems[];
    get soldProducts(): DataItems[];
    get email(): string;
    set email(email: string);
    get number(): string;
    set number(number: string);
    get password_hash(): string;
    set password_hash(password: string);
    get name(): string;
    set name(name: string);
    get adress(): string;
    set adress(adress: string);
    get phone_number(): string;
    set phone_number(phone_number: string);
    get profile_picture(): string;
    set role(role: string);
    get role(): string;
    set profile_picture(profile_picture: string);
    get avatar(): string;
    set avatar(profile_picture: string);
    get created_at(): Date;
    toResponseObject(): Omit<UserSchema, 'password_hash'>;
}
