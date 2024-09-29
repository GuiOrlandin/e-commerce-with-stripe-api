"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.props = {
            ...props,
            created_at: props.created_at || new Date(),
            role: props.role || 'USER',
            purchasedProducts: props.purchasedProducts || [],
            soldProducts: props.soldProducts || [],
            products: props.products || [],
            adress: props.adress || '',
            profile_picture: props.profile_picture || null,
        };
    }
    get id() {
        return this.props.id;
    }
    get products() {
        return this.props.products;
    }
    get purchasedProducts() {
        return this.props.purchasedProducts;
    }
    get soldProducts() {
        return this.props.soldProducts;
    }
    get email() {
        return this.props.email;
    }
    set email(email) {
        this.props.email = email;
    }
    get number() {
        return this.props.number;
    }
    set number(number) {
        this.props.number = number;
    }
    get password_hash() {
        return this.props.password_hash;
    }
    set password_hash(password) {
        this.props.password_hash = password;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get adress() {
        return this.props.name;
    }
    set adress(adress) {
        this.props.adress = adress;
    }
    get phone_number() {
        return this.props.phone_number;
    }
    set phone_number(phone_number) {
        this.props.phone_number = phone_number;
    }
    get profile_picture() {
        return this.props.profile_picture;
    }
    set role(role) {
        this.props.phone_number = role;
    }
    get role() {
        return this.props.role;
    }
    set profile_picture(profile_picture) {
        this.props.profile_picture = profile_picture;
    }
    get avatar() {
        return this.props.profile_picture;
    }
    set avatar(profile_picture) {
        this.props.profile_picture = profile_picture;
    }
    get created_at() {
        return this.props.created_at;
    }
    toResponseObject() {
        const { password_hash, ...userWithoutPassword } = this.props;
        return userWithoutPassword;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map