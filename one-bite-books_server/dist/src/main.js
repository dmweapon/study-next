"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const swagger_themes_1 = require("swagger-themes");
const app_module_1 = require("./app.module");
const class_validator_exeption_1 = require("./util/class-validator-exeption");
const prisma_client_exception_filter_1 = require("./util/prisma-client-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((req, res, next) => {
        req.headers['content-type'] = 'application/json';
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => new class_validator_exeption_1.ClassValidatorException(errors),
    }));
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new prisma_client_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('ONEBITE BOOKS API')
        .setDescription(`한입 도서몰 API 서버 문서입니다.`)
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const theme = new swagger_themes_1.SwaggerTheme();
    const options = {
        explorer: false,
        customCss: theme.getBuffer(swagger_themes_1.SwaggerThemeNameEnum.ONE_DARK),
    };
    swagger_1.SwaggerModule.setup(`api`, app, document, options);
    await app.listen(12345);
}
bootstrap();
//# sourceMappingURL=main.js.map