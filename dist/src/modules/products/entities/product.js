"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(props) {
        this.props = {
            ...props,
            created_at: props.created_at || new Date(),
            image_url: props.image_url || null,
        };
    }
    get _id() {
        return this.props._id;
    }
    get name() {
        return this.props.name;
    }
    set name(name) {
        this.props.name = name;
    }
    get user_id() {
        return this.props.user_id;
    }
    set user_id(user_id) {
        this.props.user_id = user_id;
    }
    get category() {
        return this.props.category;
    }
    set category(category) {
        this.props.category = category;
    }
    get stock() {
        return this.props.stock;
    }
    set stock(stock) {
        this.props.stock = stock;
    }
    get description() {
        return this.props.description;
    }
    set description(description) {
        this.props.name = description;
    }
    get unit_value() {
        return this.props.unit_value;
    }
    set unit_value(unit_value) {
        this.props.name = unit_value;
    }
    get image_url() {
        return this.props.image_url;
    }
    set image_url(image_url) {
        this.props.image_url = image_url;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map