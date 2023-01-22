export class NumberValidator {
    public validateNumberUnderHundred: (numberInput: number) => boolean = (numberInput: number): boolean => numberInput < 100 ? true : false;
}

// module.exports = new NumberValidator();