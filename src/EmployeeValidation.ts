import { Employee } from './models/Employee';

export class EmployeeValidation {
    public phoneNumberRegex: RegExp = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    public validate(employee: Employee): boolean {
        if (employee.firstName && employee.firstName.length > 30) {
            return false;
        }

        if (!employee.lastName || (employee.lastName && employee.lastName.length > 30)) {
            return false;
        }

        if (employee.age < 18 || employee.age > 90) {
            return false;
        }

        if (employee.phoneNumber && !this.phoneNumberRegex.test(employee.phoneNumber)){
            return false;
        }

        if (employee.faxNumber && !this.phoneNumberRegex.test(employee.faxNumber)){
            return false;
        }

        if (employee.status && employee.status !== 'A'){
            return false;
        }
        return true;
    }
}