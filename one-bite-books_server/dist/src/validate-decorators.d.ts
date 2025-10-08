import { ValidationOptions } from 'class-validator';
export declare function IsNonEmptyString(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsCustomUrl(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
