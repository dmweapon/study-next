"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCustomUrl = exports.IsNonEmptyString = void 0;
const class_validator_1 = require("class-validator");
const validator = require("validator");
function IsNonEmptyString(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNonEmptyString',
            target: object.constructor,
            propertyName,
            options: {
                message: `${propertyName}는 비어있지 않은 문자열이어야 합니다`,
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    return typeof value === 'string' && value.trim().length > 0;
                },
            },
        });
    };
}
exports.IsNonEmptyString = IsNonEmptyString;
function IsCustomUrl(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNonEmptyString',
            target: object.constructor,
            propertyName,
            options: {
                message: `${propertyName}는 URL 형태의 문자열이어야 합니다.`,
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    return typeof value === 'string' && validator.isURL(value);
                },
            },
        });
    };
}
exports.IsCustomUrl = IsCustomUrl;
//# sourceMappingURL=validate-decorators.js.map