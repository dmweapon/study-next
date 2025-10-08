import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare class ClassValidatorException extends BadRequestException {
    validationErrors: ValidationError[];
    private formatedErrors;
    constructor(validationErrors: ValidationError[]);
    getResponse(): {
        statusCode: number;
        message: string;
        error: string;
    };
}
