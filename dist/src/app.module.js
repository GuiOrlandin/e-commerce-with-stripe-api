"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./infra/database/database.module");
const user_module_1 = require("./infra/http/modules/user/user.module");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const jwt_auth_guard_1 = require("./infra/http/modules/auth/guards/jwt-auth.guard");
const auth_module_1 = require("./infra/http/modules/auth/auth.module");
const checkout_module_1 = require("./infra/http/modules/checkOut/checkout.module");
const webhook_module_1 = require("./infra/http/modules/webhook/webhook.module");
const config_2 = require("../config/config");
const product_module_1 = require("./infra/http/modules/product/product.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.default],
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'uploads'),
                serveRoot: '/files',
                renderPath: '/files/*',
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'uploads', 'userAvatar'),
                serveRoot: '/files/userAvatar',
                renderPath: '/files/*',
            }),
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            checkout_module_1.CheckoutModule,
            webhook_module_1.WebhookModule,
            product_module_1.ProductModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map