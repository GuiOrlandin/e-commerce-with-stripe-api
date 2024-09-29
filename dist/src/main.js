"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        rawBody: true,
    });
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const port = process.env.PORT || 3333;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map