import { Employee } from './models/Employee';
export declare class EmployeeValidation {
    phoneNumberRegex: RegExp;
    validate(employee: Employee): boolean;
}
