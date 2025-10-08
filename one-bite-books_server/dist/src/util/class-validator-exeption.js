"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidatorException = void 0;
const common_1 = require("@nestjs/common");
class ClassValidatorException extends common_1.BadRequestException {
    constructor(validationErrors) {
        super();
        this.validationErrors = validationErrors;
        this.formatedErrors = validationErrors.map((error) => ({
            property: error.property,
            errors: error.constraints,
        }));
    }
    getResponse() {
        return {
            statusCode: 400,
            message: `${this.formatedErrors.map((error) => error.property).join(', ')}는 요청에 포함되지 않아야 합니다`,
            error: 'Bad Request',
        };
    }
}
exports.ClassValidatorException = ClassValidatorException;
//# sourceMappingURL=class-validator-exeption.js.map