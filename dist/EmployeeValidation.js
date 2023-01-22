"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeValidation = /** @class */ (function () {
    function EmployeeValidation() {
        this.phoneNumberRegex = new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$');
    }
    EmployeeValidation.prototype.validate = function (employee) {
        if (employee.firstName && employee.firstName.length > 30) {
            return false;
        }
        if (!employee.lastName || (employee.lastName && employee.lastName.length > 30)) {
            return false;
        }
        if (employee.age < 18 || employee.age > 90) {
            return false;
        }
        if (employee.phoneNumber && !this.phoneNumberRegex.test(employee.phoneNumber)) {
            return false;
        }
        if (employee.faxNumber && !this.phoneNumberRegex.test(employee.faxNumber)) {
            return false;
        }
        if (employee.status && employee.status !== 'A') {
            return false;
        }
        return true;
    };
    return EmployeeValidation;
}());
exports.EmployeeValidation = EmployeeValidation;
//# sourceMappingURL=EmployeeValidation.js.map