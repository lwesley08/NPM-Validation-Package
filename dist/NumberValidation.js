"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
        this.validateNumberUnderHundred = function (numberInput) { return numberInput < 100 ? true : false; };
    }
    return NumberValidator;
}());
exports.NumberValidator = NumberValidator;
// module.exports = new NumberValidator();
//# sourceMappingURL=NumberValidation.js.map