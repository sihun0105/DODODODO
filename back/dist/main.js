"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const morgan_1 = __importDefault(require("morgan"));
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cookie_parser_1.default)());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`listen on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map